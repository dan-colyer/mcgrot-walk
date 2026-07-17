// Proximity prompt + comic viewer overlay for McGrot Walk.
//
// createInteract({ assets, npcs, camera, controls }) wires up:
//  - a per-frame nearest-NPC check (within RANGE metres of the player) that
//    shows/hides the "[E] Hear <name> read" HUD prompt (also tappable);
//  - an overlay showing the comic image, title and vendor blurb;
//  - a single reusable HTMLAudioElement so only one comic ever plays;
//  - movement gating: controls.setEnabled(false) while the overlay is open.

import { assetUrl } from './assets.js';

const RANGE = 8; // metres — NPCs stand ~6m off the centreline, so walking the road must still trigger

export function createInteract({ assets, npcs, camera, controls, proximityAudio, onReadingChange, litter, leithers }) {
  const promptEl = document.getElementById('npc-prompt');
  const promptLabel = document.getElementById('npc-prompt-label');
  const overlayEl = document.getElementById('comic-overlay');
  const titleEl = document.getElementById('comic-title');
  const imageEl = document.getElementById('comic-image');
  const metaEl = document.getElementById('comic-meta');
  const closeEl = document.getElementById('comic-close');
  const playPauseEl = document.getElementById('comic-playpause');

  let nearest = null;      // NPC currently in range (overlay closed)
  let openNpc = null;      // NPC whose comic overlay is open
  let nearLitter = null;   // litter comic in range (only when no NPC is nearer)
  let openLitter = null;   // litter comic being read in the overlay

  function setPlayIcon(playing) {
    if (playPauseEl) playPauseEl.textContent = playing ? '⏸' : '▶'; // ⏸ / ▶
  }

  // "Is reading" state for ambience.js to duck the atmosphere bed against —
  // true exactly while a comic's audio is actually playing.
  function setReading(v) {
    if (onReadingChange) onReadingChange(!!v);
  }

  function showPrompt(npc) {
    if (!promptEl) return;
    if (promptLabel) promptLabel.textContent = `[E] Hear ${npc.name} read`;
    promptEl.style.display = 'block';
  }

  function hidePrompt() {
    if (promptEl) promptEl.style.display = 'none';
  }

  function open(npc) {
    if (!npc || openNpc) return;
    openNpc = npc;
    hidePrompt();

    if (titleEl) titleEl.textContent = npc.comic.title;
    if (metaEl) metaEl.textContent = `${npc.name} — ${npc.blurb}`;
    if (imageEl) {
      imageEl.src = assetUrl(assets, npc.comic.image);
      imageEl.alt = npc.comic.title;
      imageEl.parentElement.scrollTop = 0;
    }

    if (overlayEl) overlayEl.style.display = 'flex';
    controls.setEnabled(false);

    // Freeze busker management, then restart THIS vendor's reading from the top.
    // (Silent no-op for vendors whose MP3 hasn't been generated yet.)
    proximityAudio.setOverlayOpen(true);
    proximityAudio.restart(npc);
    setPlayIcon(true);
    setReading(true);
  }

  function close() {
    if (!openNpc && !openLitter) return;
    setPlayIcon(false);
    setReading(false);
    if (overlayEl) overlayEl.style.display = 'none';
    controls.setEnabled(true);
    // Hand the voice back to proximity management (it keeps busking as you leave).
    proximityAudio.setOverlayOpen(false);
    openNpc = null;
    openLitter = null;
  }

  // Reading a comic nobody holds. No voice plays — but closing the page may
  // summon a passing Leither who takes it upon themselves to read it aloud.
  function openLitterComic(item) {
    if (openNpc || openLitter) return;
    openLitter = item;
    hidePrompt();
    if (titleEl) titleEl.textContent = item.comic.title || 'McGrot';
    if (metaEl) metaEl.textContent = 'found lying on the street';
    if (imageEl) {
      imageEl.src = assetUrl(assets, item.comic.image);
      imageEl.alt = item.comic.title || 'McGrot comic';
      imageEl.parentElement.scrollTop = 0;
    }
    if (overlayEl) overlayEl.style.display = 'flex';
    controls.setEnabled(false);
    proximityAudio.setOverlayOpen(true);
    if (leithers && Math.random() < 0.7) leithers.summonReader(item);
  }

  function togglePlay() {
    if (!openNpc) return;
    const playing = proximityAudio.togglePause(openNpc);
    setPlayIcon(playing);
    setReading(playing);
  }

  // --- input wiring -------------------------------------------------------

  function onKeyDown(e) {
    if (e.code === 'Escape') {
      if (openNpc || openLitter) close();
      return;
    }
    if (e.code === 'KeyE' && !openNpc && !openLitter) {
      if (nearest) open(nearest);
      else if (nearLitter) openLitterComic(nearLitter);
    }
  }

  function onPromptClick() {
    if (openNpc || openLitter) return;
    if (nearest) open(nearest);
    else if (nearLitter) openLitterComic(nearLitter);
  }

  function onOverlayClick(e) {
    if (e.target === overlayEl) close(); // backdrop click
  }

  window.addEventListener('keydown', onKeyDown);
  if (promptEl) promptEl.addEventListener('click', onPromptClick);
  if (overlayEl) overlayEl.addEventListener('click', onOverlayClick);
  if (closeEl) closeEl.addEventListener('click', close);
  if (playPauseEl) playPauseEl.addEventListener('click', togglePlay);

  // --- per-frame nearest-NPC check ---------------------------------------

  function update() {
    if (openNpc || openLitter) return; // overlay handles its own state while open

    const px = camera.position.x;
    const pz = camera.position.z;
    let best = null;
    let bestDist = RANGE;
    for (let i = 0; i < npcs.length; i++) {
      const g = npcs[i].group.position;
      const d = Math.hypot(px - g.x, pz - g.z);
      if (d < bestDist) {
        bestDist = d;
        best = npcs[i];
      }
    }

    // A vendor always outranks a page on the ground; litter only prompts when
    // no reader is in range.
    const litterBest = (!best && litter) ? litter.nearestItem(px, pz, 3.2) : null;

    if (best !== nearest || litterBest !== nearLitter) {
      nearest = best;
      nearLitter = litterBest;
      if (nearest) showPrompt(nearest);
      else if (nearLitter) {
        if (promptLabel) promptLabel.textContent = '[E] Read the comic on the ground';
        if (promptEl) promptEl.style.display = 'block';
      } else hidePrompt();
    }
  }

  function dispose() {
    window.removeEventListener('keydown', onKeyDown);
    if (promptEl) promptEl.removeEventListener('click', onPromptClick);
    if (overlayEl) overlayEl.removeEventListener('click', onOverlayClick);
    if (closeEl) closeEl.removeEventListener('click', close);
    if (playPauseEl) playPauseEl.removeEventListener('click', togglePlay);
  }

  return { update, dispose };
}
