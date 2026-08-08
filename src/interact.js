// Proximity prompt + comic viewer overlay for McGrot Walk.
//
// createInteract({ assets, npcs, camera, controls }) wires up:
//  - a per-frame nearest-NPC check (within RANGE metres of the player) that
//    shows/hides the "[E] Hear <name> read" HUD prompt (also tappable);
//  - an overlay showing the comic image, title and vendor blurb;
//  - a single reusable HTMLAudioElement so only one comic ever plays;
//  - movement gating: controls.setEnabled(false) while the overlay is open.
//
// E5a item 1: a phrase-level transcript panel (assets.readings, flag-gated —
// see setReadAlong) synced to the currently-open reading via
// proximityAudio.getElapsed(). E5a item 2: a short ritual — overlay + ducking
// land before the reading starts, with a skippable hush in between.

import { assetUrl } from './assets.js';
import { isTypingTarget } from './keys.js';

// Exported since E6a.2: a vendor's collision circle must be smaller than the
// distance at which they can be heard, or the street holds vendors you can
// reach and cannot read. The gate asserts that ordering for all 124 and needs
// the real number, not a copy of it.
export const RANGE = 8; // metres — NPCs stand ~6m off the centreline, so walking the road must still trigger
const HUSH_MS = 600; // the ritual's beat of attention between overlay-open and reading-start

export function createInteract({ assets, npcs, camera, controls, proximityAudio, onReadingChange, litter, leithers, journal }) {
  const promptEl = document.getElementById('npc-prompt');
  const promptLabel = document.getElementById('npc-prompt-label');
  const overlayEl = document.getElementById('comic-overlay');
  const titleEl = document.getElementById('comic-title');
  const imageEl = document.getElementById('comic-image');
  const metaEl = document.getElementById('comic-meta');
  const closeEl = document.getElementById('comic-close');
  const playPauseEl = document.getElementById('comic-playpause');
  const transcriptEl = document.getElementById('comic-transcript');

  let nearest = null;      // NPC currently in range (overlay closed)
  let openNpc = null;      // NPC whose comic overlay is open
  let nearLitter = null;   // litter comic in range (only when no NPC is nearer)
  let openLitter = null;   // litter comic being read in the overlay

  let readAlongEnabled = true; // dbg-settable via setReadAlong — E5a enable commit
  let hushTimer = null;
  let hushPending = false;
  let currentPhrases = null;    // the open reading's phrase list, or null
  let currentPhraseEls = null;  // parallel array of transcriptEl child elements
  let currentPhraseIdx = -1;

  function setPlayIcon(playing) {
    if (playPauseEl) playPauseEl.textContent = playing ? '⏸' : '▶'; // ⏸ / ▶
  }

  // Populates (or clears) the transcript panel for the given NPC. No-ops —
  // and leaves the panel exactly as it is today (absent, display:none) —
  // whenever the flag is off or this comic has no baked reading.
  function renderTranscript(npc) {
    currentPhrases = null;
    currentPhraseEls = null;
    currentPhraseIdx = -1;
    if (!transcriptEl) return;
    const reading = readAlongEnabled && assets.readings && npc && npc.comic &&
      assets.readings[npc.comic.id];
    if (!reading || !reading.phrases || !reading.phrases.length) {
      transcriptEl.style.display = 'none';
      transcriptEl.textContent = '';
      return;
    }
    transcriptEl.textContent = '';
    const frag = document.createDocumentFragment();
    const els = [];
    for (const p of reading.phrases) {
      const el = document.createElement('div');
      el.className = `phrase ${p.kind}`;
      el.textContent = p.text;
      frag.appendChild(el);
      els.push(el);
    }
    transcriptEl.appendChild(frag);
    transcriptEl.style.display = 'block';
    transcriptEl.scrollTop = 0;
    currentPhrases = reading.phrases;
    currentPhraseEls = els;
  }

  // Highlights the phrase under the focused reading's current playback
  // position, driven from the same per-frame update() the rest of interact.js
  // already runs on — no new timer. No-op with the flag off or when the open
  // comic has no reading (currentPhrases stays null from renderTranscript).
  function updateTranscriptHighlight() {
    if (!currentPhrases || !openNpc) return;
    const elapsed = proximityAudio.getElapsed(openNpc);
    if (elapsed == null) return;
    // Full scan, no early break: breaking on the first phrase whose start is
    // still ahead assumes strictly non-decreasing starts, and when the bake
    // once emitted an inverted boundary that assumption froze the highlight
    // mid-reading. The list is a couple of dozen entries — scanning all of it
    // costs nothing and cannot be tripped by bad data. (The bake now
    // guarantees monotonicity too; this is the second lock, not the first.)
    let idx = -1;
    for (let i = 0; i < currentPhrases.length; i++) {
      if (elapsed >= currentPhrases[i].start) idx = i;
    }
    if (idx === currentPhraseIdx) return;
    if (currentPhraseIdx >= 0 && currentPhraseEls[currentPhraseIdx]) {
      currentPhraseEls[currentPhraseIdx].classList.remove('current');
    }
    currentPhraseIdx = idx;
    if (idx < 0) return;
    const el = currentPhraseEls[idx];
    el.classList.add('current');
    // Manual scroll (not scrollIntoView) — keeps the current phrase centred
    // in the panel without risking a scroll of any ancestor beyond it.
    const target = el.offsetTop - transcriptEl.clientHeight / 2 + el.clientHeight / 2;
    transcriptEl.scrollTop = Math.max(0, target);
  }

  // "Is reading" state for ambience.js to duck the atmosphere bed against —
  // true exactly while a comic's audio is actually playing.
  function setReading(v) {
    if (onReadingChange) onReadingChange(!!v);
  }

  const isTouch = () => document.documentElement.classList.contains('touch');

  function showPrompt(npc) {
    if (!promptEl) return;
    if (promptLabel) {
      promptLabel.textContent = isTouch() ? `Tap to hear ${npc.name} read` : `[E] Hear ${npc.name} read`;
    }
    promptEl.style.display = 'block';
  }

  function hidePrompt() {
    if (promptEl) promptEl.style.display = 'none';
  }

  // The ritual (E5a item 2): overlay + ducking land immediately; the reading
  // itself starts after a short skippable hush — the beat that converts
  // walking-past into listening. beginReading() is the hush's far end,
  // reachable either by the timer or by a second press (skipHush).
  function beginReading(npc) {
    hushTimer = null;
    hushPending = false;
    // Restart THIS vendor's reading from the top. (Silent no-op for vendors
    // whose MP3 hasn't been generated yet.) The play icon and ducking are
    // already set from open() — the overlay is visually committed to
    // playing throughout the hush, only the audio itself is delayed.
    proximityAudio.restart(npc);
    // E5b.1: credited here, past the hush, not on the keypress that opened
    // the overlay — walking past a busking vendor (proximityAudio's own
    // ambient play()) never reaches this function, so only an actually-
    // started reading counts. credit() is idempotent per comic id.
    if (journal && npc.comic) {
      journal.credit(npc.comic.id, 'heard');
      // E5b.2: an anchor is credited on this same past-the-hush event, never
      // on the keypress that opens the overlay — walking past one earns
      // nothing, same discipline as 'heard' above.
      if (npc.isAnchor) journal.credit(npc.comic.id, 'anchor');
    }
  }

  function skipHush() {
    if (!hushPending || !openNpc) return;
    clearTimeout(hushTimer);
    beginReading(openNpc);
  }

  function open(npc) {
    if (!npc || openNpc) return;
    if (journal && journal.isOpen()) return; // one full-screen panel at a time
    openNpc = npc;
    hidePrompt();

    if (titleEl) titleEl.textContent = npc.comic.title;
    if (metaEl) metaEl.textContent = `${npc.name} — ${npc.blurb}`;
    if (imageEl) {
      imageEl.src = assetUrl(assets, npc.comic.image);
      imageEl.alt = npc.comic.title;
      imageEl.parentElement.scrollTop = 0;
    }
    renderTranscript(npc);

    if (overlayEl) overlayEl.style.display = 'flex';
    controls.setEnabled(false);

    // Overlay + ducking land now, before the reading starts — and suspends
    // every other busking voice (see proximity-audio.js's setOverlayOpen).
    proximityAudio.setOverlayOpen(true);
    setPlayIcon(true);
    setReading(true);

    hushPending = true;
    hushTimer = setTimeout(() => beginReading(npc), HUSH_MS);
  }

  function close() {
    if (!openNpc && !openLitter) return;
    if (hushTimer) { clearTimeout(hushTimer); hushTimer = null; }
    hushPending = false;
    setPlayIcon(false);
    setReading(false);
    if (overlayEl) overlayEl.style.display = 'none';
    controls.setEnabled(true);
    // Hand the voice back to proximity management (it keeps busking as you leave).
    proximityAudio.setOverlayOpen(false);
    openNpc = null;
    openLitter = null;
    renderTranscript(null);
    // update()'s change-detection only re-shows the prompt when `nearest`
    // actually changes — closing while still standing next to the same NPC
    // would otherwise leave the prompt hidden (set by open() above) until
    // the player steps away and back. Reset so the very next update() call
    // re-detects and re-shows it if still in range.
    nearest = null;
    nearLitter = null;
  }

  // Reading a comic nobody holds. No voice plays — but closing the page may
  // summon a passing Leither who takes it upon themselves to read it aloud.
  function openLitterComic(item) {
    if (openNpc || openLitter) return;
    if (journal && journal.isOpen()) return; // one full-screen panel at a time
    openLitter = item;
    hidePrompt();
    if (titleEl) titleEl.textContent = item.comic.title || 'McGrot';
    if (metaEl) metaEl.textContent = 'found lying on the street';
    if (imageEl) {
      imageEl.src = assetUrl(assets, item.comic.image);
      imageEl.alt = item.comic.title || 'McGrot comic';
      imageEl.parentElement.scrollTop = 0;
    }
    renderTranscript(null); // litter comics have no voice, and so no baked reading
    if (overlayEl) overlayEl.style.display = 'flex';
    controls.setEnabled(false);
    proximityAudio.setOverlayOpen(true);
    // E5b.1: a litter comic has no hush ritual — credited as "found" as soon
    // as it's opened, idempotent per comic id.
    if (journal && item.comic) journal.credit(item.comic.id, 'found');
    if (leithers && Math.random() < 0.7) leithers.summonReader(item);
  }

  function togglePlay() {
    if (!openNpc) return;
    if (hushPending) { skipHush(); return; } // a press during the hush starts the reading immediately
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
    if (isTypingTarget(e)) return; // E5c's #link-field is focusable (src/keys.js)
    if (e.code === 'KeyE') {
      if (hushPending) { skipHush(); return; }
      if (!openNpc && !openLitter) {
        if (nearest) open(nearest);
        else if (nearLitter) openLitterComic(nearLitter);
      }
    }
  }

  function onPromptClick() {
    if (openNpc || openLitter) return;
    if (nearest) open(nearest);
    else if (nearLitter) openLitterComic(nearLitter);
  }

  function onOverlayClick(e) {
    if (hushPending) { skipHush(); return; } // tapping anywhere during the hush skips it (touch has no E key)
    if (e.target === overlayEl) close(); // backdrop click
  }

  window.addEventListener('keydown', onKeyDown);
  if (promptEl) promptEl.addEventListener('click', onPromptClick);
  if (overlayEl) overlayEl.addEventListener('click', onOverlayClick);
  if (closeEl) closeEl.addEventListener('click', close);
  if (playPauseEl) playPauseEl.addEventListener('click', togglePlay);

  // --- per-frame nearest-NPC check ---------------------------------------

  function update() {
    if (openNpc || openLitter) {
      updateTranscriptHighlight(); // overlay otherwise handles its own state while open
      return;
    }

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
        if (promptLabel) {
          promptLabel.textContent = isTouch() ? 'Tap to read the comic on the ground' : '[E] Read the comic on the ground';
        }
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
    if (hushTimer) clearTimeout(hushTimer);
  }

  // dbg-settable (see src/debug.js) — on by default since the E5a enable
  // commit (landed off first, per the brief's flag-first sequencing).
  // Re-renders the currently open reading's panel immediately so the
  // harness can flip it without reopening the overlay.
  function setReadAlong(v) {
    readAlongEnabled = !!v;
    if (openNpc) renderTranscript(openNpc);
  }

  // Lets journal.js's canOpen guard keep the journal panel and this overlay
  // from ever being open at once (see createJournal's own note).
  function isOpen() {
    return !!(openNpc || openLitter);
  }

  return { update, dispose, setReadAlong, isOpen, range: RANGE };
}
