const DEFAULT_ALLOWED_METHODS = "POST, OPTIONS";
const DEFAULT_ALLOWED_HEADERS = "Content-Type";
const MAX_MESSAGE_LENGTH = 2000;
const MAX_FIELD_LENGTH = 120;
const DEFAULT_SCORE = 0.5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateLimitStore = new Map();

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const corsHeaders = buildCorsHeaders(origin, env);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return json({ message: "Method not allowed." }, 405, corsHeaders);
    }

    if (!isAllowedOrigin(origin, env)) {
      return json({ message: "Origin not allowed." }, 403, corsHeaders);
    }

    const ip =
      request.headers.get("CF-Connecting-IP") ||
      request.headers.get("X-Forwarded-For") ||
      "unknown";

    if (isRateLimited(ip)) {
      return json({ message: "Too many requests. Please try again later." }, 429, corsHeaders);
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return json({ message: "Invalid JSON body." }, 400, corsHeaders);
    }

    const validation = validatePayload(payload);
    if (!validation.ok) {
      return json({ message: validation.message }, 400, corsHeaders);
    }

    const recaptcha = await verifyRecaptcha(payload.recaptchaToken, ip, env);
    if (!recaptcha.ok) {
      return json({ message: "reCAPTCHA verification failed." }, 403, corsHeaders);
    }

    const mail = await sendBrevoEmail(payload, env);
    if (!mail.ok) {
      return json({ message: "Email delivery failed." }, 502, corsHeaders);
    }

    return json({ ok: true }, 200, corsHeaders);
  },
};

function buildCorsHeaders(origin, env) {
  return {
    "Access-Control-Allow-Origin": isAllowedOrigin(origin, env) ? origin : "null",
    "Access-Control-Allow-Methods": DEFAULT_ALLOWED_METHODS,
    "Access-Control-Allow-Headers": DEFAULT_ALLOWED_HEADERS,
    "Access-Control-Max-Age": "86400",
    "Content-Type": "application/json; charset=utf-8",
    Vary: "Origin",
  };
}

function isAllowedOrigin(origin, env) {
  const allowed = String(env.SITE_ORIGINS || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return allowed.includes(origin);
}

function json(body, status, headers) {
  return new Response(JSON.stringify(body), { status, headers });
}

function validatePayload(payload) {
  const required = ["name", "email", "subject", "message", "recaptchaToken"];
  for (const key of required) {
    if (!payload[key] || typeof payload[key] !== "string") {
      return { ok: false, message: `${key} is required.` };
    }
  }

  const name = payload.name.trim();
  const email = payload.email.trim();
  const subject = payload.subject.trim();
  const message = payload.message.trim();

  if (!name || !email || !subject || !message) {
    return { ok: false, message: "All fields are required." };
  }

  if (name.length > 80 || email.length > MAX_FIELD_LENGTH || subject.length > MAX_FIELD_LENGTH) {
    return { ok: false, message: "One or more fields are too long." };
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return { ok: false, message: "Message is too long." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Email is invalid." };
  }

  return { ok: true };
}

function isRateLimited(ip) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || now > current.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return current.count > RATE_LIMIT_MAX;
}

async function verifyRecaptcha(token, ip, env) {
  const secret = env.RECAPTCHA_SECRET_KEY;
  if (!secret) return { ok: false };

  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  body.set("remoteip", ip);

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  const result = await response.json();
  const minimumScore = Number(env.RECAPTCHA_MIN_SCORE || DEFAULT_SCORE);

  return {
    ok:
      Boolean(result.success) &&
      (!result.action || result.action === "support_submit") &&
      (typeof result.score !== "number" || result.score >= minimumScore),
  };
}

async function sendBrevoEmail(payload, env) {
  const fromEmail = env.FROM_EMAIL;
  const fromName = env.FROM_NAME || "Bondie Support";
  const toEmail = env.TO_EMAIL || "hello.bondie.app@gmail.com";
  const apiKey = env.BREVO_API_KEY;

  if (!fromEmail || !toEmail || !apiKey) return { ok: false };

  const safeName = escapeHtml(payload.name.trim());
  const safeEmail = escapeHtml(payload.email.trim());
  const safeSubject = escapeHtml(payload.subject.trim());
  const safeMessage = escapeHtml(payload.message.trim()).replace(/\n/g, "<br />");

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { email: fromEmail, name: fromName },
      to: [{ email: toEmail }],
      replyTo: { email: payload.email.trim(), name: payload.name.trim() },
      subject: `[Bondie Support] ${payload.subject.trim()}`,
      htmlContent: `
        <h2>Bondie support message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
      textContent: [
        "Bondie support message",
        `Name: ${payload.name.trim()}`,
        `Email: ${payload.email.trim()}`,
        `Subject: ${payload.subject.trim()}`,
        "",
        payload.message.trim(),
      ].join("\n"),
    }),
  });

  return { ok: response.ok };
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    const replacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return replacements[char];
  });
}
