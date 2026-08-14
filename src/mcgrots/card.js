// G4b (1/2) — the gesture surface.
//
// Every browser refuses to start an AudioContext without a user gesture, so
// something has to be clicked before the reader can be heard. This is that
// something: a full-window overlay, dismissed on the first `pointerdown`.
//
// Deliberately unstyled beyond what makes it a working gesture surface —
// page.js and G7 own how it eventually looks. `onStart` fires on the same
// pointerdown that dismisses the card, which is where an AudioContext will
// be constructed (a later dispatch); nothing here constructs one.
export function createTitleCard({ onStart } = {}) {
  const root = document.createElement('div');
  root.id = 'title-card';
  root.innerHTML = `
    <div class="title-card-name">McGrot's</div>
    <div class="title-card-hint">Click anywhere to start</div>
  `;
  document.body.appendChild(root);

  function dismiss() {
    root.remove();
  }

  root.addEventListener('pointerdown', () => {
    dismiss();
    onStart?.();
  }, { once: true });

  return { dismiss };
}
