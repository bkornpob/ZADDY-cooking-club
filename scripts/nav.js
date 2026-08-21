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
      const url = 'landing-page.html#' + encodeURIComponent(page);
      window.location.href = url;
    });
  });

  window.addEventListener('hashchange', () => {
    const raw = window.location.hash.slice(1);
    if (!raw) return;
    const p = new URLSearchParams(raw).get('page');
    if (!p) return;
    const contentEl = document.getElementById('content');
    if (!contentEl) return;
    fetch(p, {cache: 'no-store'})
      .then((r) => {
        if (!r.ok) throw new Error(r.status);
        return r.text();
      })
      .then((md) => {
        contentEl.innerHTML = marked.parse(md, {gfm: true});
      })
      .catch((e) => {
        contentEl.innerHTML = `<p style="color:var(--accent)">failed to load ${p}: ${e.message}</p>`;
      });
  });
})();
