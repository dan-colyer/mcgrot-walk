// Title card + mobile hold-to-walk button for McGrot Walk.
//
// createTitleCard({ controls, onEnter }) wires:
//  - the fullscreen "CLICK TO ENTER" card (#title-card in index.html),
//    dismissed on first click/tap. This is also the required user gesture
//    for starting WebAudio (onEnter is called synchronously from it) and for
//    re-enabling controls, which main.js leaves disabled until entry.
//  - an on-screen hold-to-walk button (#touch-forward). It's shown only on
//    coarse-pointer/touch devices via a CSS media query in index.html —
//    this module just wires the press/release events to controls.setForward.
//    Drag-to-look already works on touch via controls.js's pointer handlers.

export function createTitleCard({ controls, onEnter }) {
  const cardEl = document.getElementById('title-card');
  const forwardEl = document.getElementById('touch-forward');

  function enter() {
    if (!cardEl || cardEl.classList.contains('hidden')) return;
    cardEl.classList.add('hidden');
    controls.setEnabled(true);
    if (onEnter) onEnter();
  }

  if (cardEl) {
    cardEl.addEventListener('click', enter);
    // touchend + preventDefault avoids the double-fire some mobile browsers
    // produce from a synthetic click after a tap; `enter()` is idempotent
    // regardless (guarded by the `hidden` class check above).
    cardEl.addEventListener(
      'touchend',
      (e) => {
        e.preventDefault();
        enter();
      },
      { passive: false }
    );
  }

  if (forwardEl) {
    const setForward = (v) => {
      forwardEl.classList.toggle('active', v);
      controls.setForward(v);
    };
    forwardEl.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      forwardEl.setPointerCapture?.(e.pointerId);
      setForward(true);
    });
    const release = () => setForward(false);
    forwardEl.addEventListener('pointerup', release);
    forwardEl.addEventListener('pointercancel', release);
    forwardEl.addEventListener('pointerleave', release);
  }

  return { enter };
}
