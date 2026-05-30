const APP_STORE_URL = "";

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");
const sectionLinks = document.querySelectorAll(".nav-link");
const supportAnchors = document.querySelectorAll(".support-anchor");
const supportPanel = document.querySelector("#support-form");
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
    supportPanel?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
