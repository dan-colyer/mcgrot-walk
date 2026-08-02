// Title card + mobile hold-to-walk button + torch toggle for McGrot Walk.
//
// createTitleCard({ controls, torch, onEnter }) wires:
//  - the fullscreen "CLICK TO ENTER" card (#title-card in index.html),
//    dismissed on first click/tap. This is also the required user gesture
//    for starting WebAudio (onEnter is called synchronously from it) and for
//    re-enabling controls, which main.js leaves disabled until entry.
//  - an on-screen hold-to-walk button (#touch-forward). It's shown only in
//    touch mode (html.touch, set by the capability-detection script in
//    index.html's <head>) — this module just wires the press/release events
//    to controls.setForward. Drag-to-look already works on touch via
//    controls.js's pointer handlers.
//  - the torch toggle (#torch-toggle), also touch-only, on by default,
//    persisted to localStorage.
//  - touch-mode copy: the keyboard-oriented HUD/title-hint/enter-button
//    strings are swapped for tap-oriented ones ONLY under html.touch, so the
//    desktop strings (baked into 27 golden screenshots) stay byte-identical.

import { isTypingTarget } from './keys.js';

const TORCH_STORAGE_KEY = 'mcgrot-torch-on';

// Re-run on 'mcgrot:touchmodechange' (src/debug.js's setTouchMode) as well as
// at boot — the smoke harness can only force the class on AFTER
// window.__mcgrotDebug exists, which is after this module's initial call.
function swapTouchCopy() {
  if (!document.documentElement.classList.contains('touch')) return;
  // #hud-hint, not #hud — the HUD gained a second line at E5c (the day name),
  // and writing textContent on the container would delete it.
  const hud = document.getElementById('hud-hint');
  const hint = document.getElementById('title-hint');
  const enter = document.getElementById('title-enter');
  if (hud) hud.textContent = 'drag — look';
  if (hint) hint.textContent = 'drag to look — walk up to a resident, tap them';
  if (enter) enter.textContent = 'TAP TO ENTER';
}

// The button is touch-only (#torch-toggle is display:none outside
// html.touch), so until E2g lights the street a desktop visitor arriving at a
// dark hour had a torch, no control, and no way to learn one existed. T is
// that control. Both paths run through one setTorch() so the class, the light
// and localStorage cannot drift apart — the button used to own all three
// inline, which is exactly the shape that grows a second, subtly different
// copy the moment a key is added.
function wireTorchToggle(torch) {
  const toggleEl = document.getElementById('torch-toggle');
  if (!torch) return;
  const stored = localStorage.getItem(TORCH_STORAGE_KEY);
  let on = stored === null ? true : stored === 'true';

  function setTorch(v) {
    on = !!v;
    torch.setToggle(on);
    if (toggleEl) toggleEl.classList.toggle('active', on);
    localStorage.setItem(TORCH_STORAGE_KEY, String(on));
  }

  torch.setToggle(on);
  if (toggleEl) toggleEl.classList.toggle('active', on);

  if (toggleEl) toggleEl.addEventListener('click', () => setTorch(!on));
  window.addEventListener('keydown', (e) => {
    if (e.code !== 'KeyT' || isTypingTarget(e)) return;
    setTorch(!on);
  });
}

export function createTitleCard({ controls, torch, onEnter }) {
  const cardEl = document.getElementById('title-card');
  const forwardEl = document.getElementById('touch-forward');

  swapTouchCopy();
  window.addEventListener('mcgrot:touchmodechange', swapTouchCopy);
  wireTorchToggle(torch);

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
      // Real touch input always has an active pointer to capture; a
      // synthetic PointerEvent (the smoke harness) doesn't, and throws
      // InvalidPointerId — harmless here since capture is an enhancement,
      // not required for setForward to work.
      try { forwardEl.setPointerCapture?.(e.pointerId); } catch { /* no-op */ }
      setForward(true);
    });
    const release = () => setForward(false);
    forwardEl.addEventListener('pointerup', release);
    forwardEl.addEventListener('pointercancel', release);
    forwardEl.addEventListener('pointerleave', release);
  }

  return { enter };
}
