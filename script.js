const APP_STORE_URL = "";

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");
const sectionLinks = document.querySelectorAll(".nav-link");
const supportAnchors = document.querySelectorAll(".support-anchor");
const supportForm = document.querySelector("#support-form");
const formStatus = document.querySelector("#form-status");
const appStoreLink = document.querySelector("#app-store-link");

if (APP_STORE_URL && appStoreLink) {
  appStoreLink.href = APP_STORE_URL;
  appStoreLink.classList.remove("app-store-link-disabled");
  appStoreLink.removeAttribute("aria-disabled");
}

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks?.classList.toggle("is-open") ?? false;
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

sectionLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const observedSections = [...sectionLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-42% 0px -52% 0px" },
);

observedSections.forEach((section) => observer.observe(section));

supportAnchors.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    supportForm?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      supportForm?.querySelector("input, select, textarea, button")?.focus({ preventScroll: true });
    }, 450);
  });
});

function setStatus(message, type) {
  if (!formStatus) return;
  formStatus.textContent = message;
  formStatus.classList.remove("is-success", "is-error");
  if (type) formStatus.classList.add(`is-${type}`);
}

function loadRecaptcha(siteKey) {
  return new Promise((resolve, reject) => {
    if (window.grecaptcha) {
      window.grecaptcha.ready(resolve);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
    script.async = true;
    script.defer = true;
    script.onload = () => window.grecaptcha.ready(resolve);
    script.onerror = () => reject(new Error("Guvenlik kontrolu tamamlanamadi."));
    document.head.appendChild(script);
  });
}

supportForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const endpoint = supportForm.dataset.workerEndpoint?.trim();
  const recaptchaSiteKey = supportForm.dataset.recaptchaSiteKey?.trim();
  const submitButton = supportForm.querySelector("button[type='submit']");
  const formData = new FormData(supportForm);
  const payload = {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    subject: String(formData.get("subject") || "").trim(),
    message: String(formData.get("message") || "").trim(),
  };

  if (!endpoint || !recaptchaSiteKey) {
    setStatus("Mesaj şu anda gönderilemiyor. Lütfen daha sonra tekrar deneyin.", "error");
    return;
  }

  if (!payload.name || !payload.email || !payload.subject || !payload.message) {
    setStatus("Lutfen tum alanlari doldurun.", "error");
    return;
  }

  submitButton.disabled = true;
  setStatus("Gonderim hazirlaniyor...", null);

  try {
    await loadRecaptcha(recaptchaSiteKey);
    const recaptchaToken = await window.grecaptcha.execute(recaptchaSiteKey, {
      action: "support_submit",
    });

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, recaptchaToken }),
    });

    if (!response.ok) {
      throw new Error("Mesaj gonderilemedi.");
    }

    supportForm.reset();
    setStatus("Mesajiniz alindi. En kisa surede yanit verecegiz.", "success");
  } catch (error) {
    setStatus("Mesaj gonderilemedi. Lutfen daha sonra tekrar deneyin.", "error");
  } finally {
    submitButton.disabled = false;
  }
});
