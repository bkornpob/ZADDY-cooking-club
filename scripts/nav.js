(() => {
  'use strict';

  const items = document.querySelectorAll('.recipe-item');
  items.forEach((item) => {
    const btn = item.querySelector('button');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  const links = document.querySelectorAll('.recipe-pages a[data-page]');
  links.forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const page = a.dataset.page;
      if (!page) return;
      const target = 'landing-page.html#' + encodeURIComponent(page);
      if (window.location.pathname.endsWith('landing-page.html')) {
        window.location.hash = encodeURIComponent(page);
      } else {
        window.location.href = target;
      }
    });
  });

  const loadFromHash = () => {
    const raw = window.location.hash.slice(1);
    if (!raw) {
      loadPage(defaultPage);
      return;
    }
    const p = decodeURIComponent(raw);
    loadPage(p);
  };

  window.addEventListener('hashchange', loadFromHash);
  window.addEventListener('DOMContentLoaded', loadFromHash);
})();
