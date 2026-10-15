/* ── NAV ACTIVE HIGHLIGHT ──────────────────────────────── */
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 140) current = s.id;
  });
  links.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
}, { passive: true });

/* ── CURSOR ────────────────────────────────────────────── */
const cursor = document.getElementById("cursor");
if (cursor) {
  document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX - 4 + "px";
    cursor.style.top  = e.clientY - 4 + "px";
  });
  document.querySelectorAll("a, button, .skill-card, .project-card").forEach(el => {
    el.addEventListener("mouseenter", () => cursor.style.transform = "scale(3)");
    el.addEventListener("mouseleave", () => cursor.style.transform = "scale(1)");
  });
}

/* ── PROJECT EXPAND / COLLAPSE ─────────────────────────── */
function toggleDetails(btn) {
  const card  = btn.closest(".project-card");
  const panel = card.querySelector(".project-details");
  const isOpen = panel.classList.contains("open");
  panel.classList.toggle("open", !isOpen);
  btn.classList.toggle("open", !isOpen);
  btn.textContent = isOpen ? "View Project Details ↓" : "Hide Details ↑";
}

/* ── PROJECT TAB SWITCHING ─────────────────────────────── */
function switchTab(navItem, tabId) {
  const panel = navItem.closest(".project-details");
  panel.querySelectorAll(".detail-nav-item").forEach(n => n.classList.remove("active"));
  panel.querySelectorAll(".detail-tab").forEach(t => t.classList.remove("active"));
  navItem.classList.add("active");
  const tab = document.getElementById(tabId);
  if (tab) tab.classList.add("active");
}

/* ── EMAIL COPY ────────────────────────────────────────── */
function copyEmail(btn) {
  navigator.clipboard.writeText("siddharth100305@gmail.com").then(() => {
    btn.classList.add("copied");
    btn.title = "Copied!";
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
    setTimeout(() => {
      btn.classList.remove("copied");
      btn.title = "Copy email";
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
    }, 2000);
  });
}
