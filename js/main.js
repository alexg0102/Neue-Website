// Alexander Graf — Portfolio

// Aktuelles Jahr im Footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Header-Schatten beim Scrollen
const header = document.querySelector('.site-header');
const onScroll = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 8);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobiles Menü
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  });
  navMenu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Scroll-Reveal (respektiert prefers-reduced-motion via CSS)
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
} else {
  document.documentElement.classList.add('no-observer');
}

// Aktiven Navigationspunkt hervorheben
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
if ('IntersectionObserver' in window && sections.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach((section) => sectionObserver.observe(section));
}

// Discord-Namen kopieren
const discordButton = document.getElementById('discordCopyButton');
if (discordButton) {
  const label = discordButton.querySelector('[data-label]');
  const originalText = label.textContent;
  discordButton.addEventListener('click', async () => {
    const username = discordButton.getAttribute('data-name');
    try {
      await navigator.clipboard.writeText(username);
      label.textContent = 'Kopiert! ✓';
    } catch {
      label.textContent = username;
    }
    setTimeout(() => { label.textContent = originalText; }, 1500);
  });
}
