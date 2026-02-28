// Serigne Saliou BA — Portfolio JS
// - Menu mobile
// - Theme toggle (persisted)
// - Project filters
// - Copy email with toast
// - Current year

(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Smooth scroll (native, with fallback)
  document.documentElement.style.scrollBehavior = "smooth";

  // Mobile nav
  const navToggle = $("#navToggle");
  const navMenu = $("#navMenu");

  function closeNav() {
    navMenu?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }

  navToggle?.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close nav when clicking a link (mobile)
  $$("#navMenu a").forEach((a) => a.addEventListener("click", closeNav));
  document.addEventListener("click", (e) => {
    if (!navMenu || !navToggle) return;
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const clickedInside = navMenu.contains(target) || navToggle.contains(target);
    if (!clickedInside) closeNav();
  });

  // Theme toggle
  const themeToggle = $("#themeToggle");
  const root = document.documentElement;

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "light" || storedTheme === "dark") setTheme(storedTheme);

  themeToggle?.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "dark";
    setTheme(current === "dark" ? "light" : "dark");
  });

  // Project filters
  const pills = $$(".pill");
  const projects = $$(".project");

  function applyFilter(tag) {
    projects.forEach((p) => {
      const tags = (p.getAttribute("data-tags") || "").split(/\s+/).filter(Boolean);
      const visible = tag === "all" ? true : tags.includes(tag);
      p.style.display = visible ? "" : "none";
    });
  }

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((x) => x.classList.remove("is-active"));
      pill.classList.add("is-active");
      applyFilter(pill.getAttribute("data-filter") || "all");
    });
  });

  // Toast
  const toast = $("#toast");
  let toastTimer = null;

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("is-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-show"), 1400);
  }

  // Copy email
  $("#copyEmail")?.addEventListener("click", async () => {
    const email = "serignesaliou.ba@centrale-casablanca.ma";
    try {
      await navigator.clipboard.writeText(email);
      showToast("Email copié ✅");
    } catch (e) {
      // Fallback
      const ta = document.createElement("textarea");
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      showToast("Email copié ✅");
    }
  });

  // Year
  const y = new Date().getFullYear();
  $("#year") && ($("#year").textContent = String(y));
})();
