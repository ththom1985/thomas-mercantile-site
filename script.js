document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // ---- Sprache: EN | DE, eine URL, beide Fassungen im HTML ----
  const STORE_KEY = 'tm_lang';

  const applyLang = (lang) => {
    const current = lang === 'de' ? 'de' : 'en';
    document.documentElement.lang = current;

    document.querySelectorAll('[data-en]').forEach((el) => {
      const value = el.dataset[current];
      if (value !== undefined) el.textContent = value;
    });
    document.querySelectorAll('[data-href-en]').forEach((el) => {
      const value = current === 'de' ? el.dataset.hrefDe : el.dataset.hrefEn;
      if (value !== undefined) el.setAttribute('href', value);
    });
    document.querySelectorAll('.langtoggle button').forEach((b) => {
      b.setAttribute('aria-pressed', b.dataset.lang === current ? 'true' : 'false');
    });

    try { localStorage.setItem(STORE_KEY, current); } catch (e) { /* Speicher gesperrt */ }
  };

  const toggle = document.querySelector('.langtoggle');
  if (toggle) {
    toggle.querySelectorAll('button').forEach((b) => {
      b.addEventListener('click', () => applyLang(b.dataset.lang));
    });

    const fromBrowser = navigator.language && navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en';
    let initial = fromBrowser;
    try { initial = localStorage.getItem(STORE_KEY) || fromBrowser; } catch (e) { /* Speicher gesperrt */ }
    applyLang(initial);
  }

  // ---- Sanftes Einblenden ----
  const items = document.querySelectorAll('[data-reveal]');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  items.forEach((el) => io.observe(el));
});
