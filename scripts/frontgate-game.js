(() => {
  'use strict';

  const grid = document.getElementById('grid');
  const enterBtn = document.getElementById('enterBtn');
  const zaddy = '🧙‍♂️';
  const decoys = ['🔮','🧪','🥣','⚗️','🥘','🍯','🔥','💎'];
  let deck = [zaddy, ...decoys.slice(0, 8)];
  let flipped = false;

  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const init = () => {
    grid.innerHTML = '';
    flipped = false;
    enterBtn.classList.remove('open');
    const cards = shuffle([...deck]);
    cards.forEach((face) => {
      const el = document.createElement('div');
      el.className = 'card';
      el.innerHTML = `<div class="back">?</div><div class="front">${face}</div>`;
      el.addEventListener('click', () => {
        if (flipped || el.classList.contains('flipped')) return;
        el.classList.add('flipped');
        const revealed = el.querySelector('.front').textContent.trim();
        if (revealed === zaddy) {
          el.classList.add('winner');
          flipped = true;
          enterBtn.classList.add('open');
        }
      });
      grid.appendChild(el);
    });
  };

  init();
})();
