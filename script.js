const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 140) {
            current = section.id;
        }
    });

    links.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );
    });
});
function toggleDetails(btn) {
  const card = btn.closest('.project-card');
  const panel = card.querySelector('.project-details');
  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  btn.classList.toggle('open', !isOpen);
  btn.textContent = isOpen ? 'View Project Details ↓' : 'Hide Details ↑';
}

function switchTab(navItem, tabId) {
  const panel = navItem.closest('.project-details');
  panel.querySelectorAll('.detail-nav-item').forEach(n => n.classList.remove('active'));
  panel.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
  navItem.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}
