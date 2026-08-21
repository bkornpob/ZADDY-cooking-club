(() => {
  'use strict';

  const themes = ['zaddy','gdk','dab','equinox'];
  const themeMap = {
    zaddy: {
      bg: '#1a0f05', panel: '#2a1a0a', ink: '#ffd2a0', muted: '#b37a2a',
      accent: '#ff8c00', glow: 'rgba(255,140,0,.35)', border: '#3d2a0a'
    },
    gdk: {
      bg: '#050a14', panel: '#0a1428', ink: '#c8e6ff', muted: '#5a7a9a',
      accent: '#4a90d9', glow: 'rgba(74,144,217,.35)', border: '#1a3a5c'
    },
    dab: {
      bg: '#020d08', panel: '#071c10', ink: '#e0ffc0', muted: '#4a8a5e',
      accent: '#39ff91', glow: 'rgba(57,255,145,.35)', border: '#14663d'
    },
    equinox: {
      bg: '#06040c', panel: '#0c0918', ink: '#f3e8ff', muted: '#6b5f8a',
      accent: '#ff47d1', glow: 'rgba(255,71,209,.35)', border: '#1a1428'
    }
  };

  const root = document.documentElement;
  const sel = document.getElementById('themeSelect');

  const apply = (name) => {
    const t = themeMap[name];
    if (!t) return;
    const r = document.querySelector(':root');
    Object.keys(t).forEach((k) => r.style.setProperty(`--${k}`, t[k]));
    try { localStorage.setItem('zcc-theme', name); } catch (e) {}
  };

  const saved = (() => { try { return localStorage.getItem('zcc-theme'); } catch (e) { return null; } })();
  const initial = themes.includes(saved) ? saved : 'zaddy';
  if (sel) sel.value = initial;
  apply(initial);
  if (sel) {
    sel.addEventListener('change', (e) => apply(e.target.value));
  }
})();
