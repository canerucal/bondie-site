# Bondie Support Worker

This Cloudflare Worker receives support form submissions from the GitHub Pages site, verifies Google reCAPTCHA v3, and sends the message through Brevo Transactional Email.

## Required Worker Secrets

Set these in Cloudflare Workers before deploying:

```text
RECAPTCHA_SECRET_KEY=...
BREVO_API_KEY=...
FROM_EMAIL=...
```

## Required Worker Variables

Set these as plain environment variables:

```text
SITE_ORIGINS=https://your-github-pages-domain.example,https://your-custom-domain.example
TO_EMAIL=hello.bondie.app@gmail.com
FROM_NAME=Bondie Support
RECAPTCHA_MIN_SCORE=0.5
```

`FROM_EMAIL` should be a Brevo-verified sender address or domain sender.

## Frontend Configuration

After deploying the Worker and creating the reCAPTCHA site key, update `index.html`:

```html
<form
  id="support-form"
  data-worker-endpoint="https://your-worker.your-subdomain.workers.dev"
  data-recaptcha-site-key="your-public-site-key"
>
```

If the App Store URL is ready, update `script.js`:

```js
const APP_STORE_URL = "https://apps.apple.com/...";
```
