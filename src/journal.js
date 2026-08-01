// The journal — E5b.1. A quarry for the wanderer: what you've heard a vendor
// read, and what you've found lying on the street. localStorage-backed,
// closed by default, opened with J (or the touch affordance) — never in
// #hud, whose copy is baked into all 27 desktop goldens.
//
// createJournal({ assets, npcs, litter }) returns a small stable surface —
// has(id, kind), credit(id, kind), counts(), list() — plus the panel wiring.
// This is also the state E4's stances will read, so that surface stays
// deliberately narrow.
//
// The denominator (item 2) is computed from the built cast — vendors whose
// catalog entry carries an `audio` path — never hardcoded, so it rises on
// its own as transcription lands (see proximity-audio.js's own `if
// (!npc.comic.audio) continue`, the same test used here).

import { ANCHOR_SET, countAnchors } from './anchors.js';

const STORAGE_KEY = 'mcgrot.journal.v1';

// Every read AND write goes through try/catch (item 4) — Safari private mode
// throws on setItem, and a throw here must never take out the reading it was
// recording. Degrades to an in-memory, session-only journal.
function loadEntries() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed && parsed.entries) ? parsed.entries : [];
  } catch {
    return [];
  }
}

function saveEntries(entries) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ entries }));
  } catch {
    // Private-mode Safari, or a file:// / sandboxed-iframe artifact context
    // with storage unavailable — the in-memory `entries` array above still
    // holds the session's credits; only the next reload loses them.
  }
}

// Vendors built with audio — the honest denominator. Counts catalog intent
// (npc.comic.audio truthy), not on-disk mp3 presence: today that's 124, one
// of which (5c5f0c9c) has no mp3 yet — see proximity-audio.js's identical
// test, which is what actually determines whether a voice can ever play.
// Exported so the smoke gate can run it over a deliberately truncated cast.
// Comparing the runtime denominator against a Node-side count of catalog.json
// cannot fail on a typed literal: today every built vendor has audio, so the
// derived value (124) collides with `npcs.length` and with a hardcoded 124
// alike. Feeding this a known-short list is the control that separates
// "derived" from "coincidentally equal".
export function countVendorsWithAudio(npcs) {
  if (!npcs || !Array.isArray(npcs)) return 0;
  let n = 0;
  for (const npc of npcs) if (npc.comic && npc.comic.audio) n++;
  return n;
}

export function createJournal({ assets, npcs, litter, canOpen, anchorsEnabled }) {
  const entries = loadEntries(); // [{id, kind}], oldest first
  const seen = new Set(entries.map((e) => `${e.kind}:${e.id}`));
  const denominator = countVendorsWithAudio(npcs);
  const foundTotal = (litter && Array.isArray(litter.items)) ? litter.items.length : 0;
  // E5b.2: a second, smaller, achievable target alongside heard/found — see
  // countAnchors' own note for why this is a real counter over ANCHOR_SET,
  // not a typed 12.
  const anchorsTotal = countAnchors(ANCHOR_SET);

  const catalogById = new Map(
    ((assets && assets.catalog && assets.catalog.comics) || []).map((c) => [c.id, c])
  );

  const panelEl = document.getElementById('journal-panel');
  const toggleEl = document.getElementById('journal-toggle');
  const closeEl = document.getElementById('journal-close');
  const countEl = document.getElementById('journal-counts');
  const listEl = document.getElementById('journal-list');

  let open = false;

  function has(id, kind) {
    return seen.has(`${kind}:${id}`);
  }

  // Idempotent per (id, kind) — the same comic can be re-credited any number
  // of times (E5a's hush, play/pause, reopening the overlay all pass through
  // here) without inflating the count. 'anchor' is credited on the SAME call
  // as 'heard' (see interact.js's beginReading — past the hush, never on the
  // keypress that opens the overlay), it just gets its own kind so it can be
  // tallied and denominated separately from the heard/found pair.
  function credit(id, kind) {
    if (!id || (kind !== 'heard' && kind !== 'found' && kind !== 'anchor')) return false;
    const key = `${kind}:${id}`;
    if (seen.has(key)) return false;
    seen.add(key);
    entries.push({ id, kind });
    saveEntries(entries);
    render();
    return true;
  }

  function counts() {
    let heard = 0, found = 0, anchorsFound = 0;
    for (const e of entries) {
      if (e.kind === 'heard') heard++;
      else if (e.kind === 'found') found++;
      else if (e.kind === 'anchor') anchorsFound++;
    }
    return { heard, found, denominator, foundTotal, anchorsFound, anchorsTotal };
  }

  // Reading history feed — anchor credits are a silent tally alongside
  // 'heard' for the same comic, not a separate row (the vendor was already
  // heard; the anchor state is a property of that same event, not a new one).
  function list() {
    return entries.filter((e) => e.kind !== 'anchor').slice().reverse(); // newest first
  }

  function render() {
    if (countEl) {
      const { heard, found, anchorsFound } = counts();
      // Flag off must render BYTE-IDENTICAL to E5b.1 — the anchors clause is
      // gated by the same flag that gates placement, not just left dark.
      countEl.textContent = anchorsEnabled
        ? `${heard} of ${denominator} heard — more being unearthed  ·  ${found}${foundTotal ? ` of ${foundTotal}` : ''} found  ·  ${anchorsFound} of ${anchorsTotal} anchors`
        : `${heard} of ${denominator} heard — more being unearthed  ·  ${found}${foundTotal ? ` of ${foundTotal}` : ''} found`;
    }
    if (!listEl) return;
    listEl.textContent = '';
    const frag = document.createDocumentFragment();
    for (const e of list()) {
      const c = catalogById.get(e.id);
      const title = (c && c.title) || e.id;
      const vendorName = c && c.npc && c.npc.name;
      const row = document.createElement('div');
      row.className = 'journal-entry';
      const kindEl = document.createElement('span');
      kindEl.className = 'journal-entry-kind';
      kindEl.textContent = e.kind === 'heard' ? 'HEARD' : 'FOUND';
      const textEl = document.createElement('span');
      textEl.className = 'journal-entry-text';
      textEl.textContent = vendorName ? `${title} — ${vendorName}` : title;
      row.appendChild(kindEl);
      row.appendChild(textEl);
      frag.appendChild(row);
    }
    listEl.appendChild(frag);
  }

  function setOpen(v) {
    open = !!v;
    if (panelEl) panelEl.style.display = open ? 'flex' : 'none';
  }

  // Opening (not closing) is gated by `canOpen` — passed in by main.js so the
  // journal and the comic overlay can never be open at once; they'd
  // otherwise stack as two full/partial-screen panels.
  function toggle() {
    if (!open && canOpen && !canOpen()) return;
    setOpen(!open);
  }

  function isOpen() {
    return open;
  }

  function onKeyDown(e) {
    if (e.code === 'KeyJ') toggle();
    else if (e.code === 'Escape' && open) setOpen(false);
  }

  // Wired on pointerdown/pointerup rather than 'click' — #torch-toggle's
  // click listener has an open E2f bug where it may never fire on iOS;
  // #touch-forward already avoids this by using pointer events instead.
  // pointerup alone (no separate click listener) covers mouse too, so
  // there's no double-fire on desktop.
  function onTogglePointerDown(e) {
    e.preventDefault();
    try { toggleEl.setPointerCapture?.(e.pointerId); } catch { /* synthetic PointerEvent, e.g. the smoke harness */ }
  }
  function onTogglePointerUp() {
    toggle();
  }

  window.addEventListener('keydown', onKeyDown);
  if (toggleEl) {
    toggleEl.addEventListener('pointerdown', onTogglePointerDown);
    toggleEl.addEventListener('pointerup', onTogglePointerUp);
  }
  if (closeEl) closeEl.addEventListener('click', () => setOpen(false));

  function dispose() {
    window.removeEventListener('keydown', onKeyDown);
    if (toggleEl) {
      toggleEl.removeEventListener('pointerdown', onTogglePointerDown);
      toggleEl.removeEventListener('pointerup', onTogglePointerUp);
    }
  }

  render();

  return { has, credit, counts, list, isOpen, setOpen, toggle, dispose };
}
