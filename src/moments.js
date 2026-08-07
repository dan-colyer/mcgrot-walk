// Moments are links (E5c).
//
// The camera's position and heading live in the URL hash, so "look at this
// one outside the pie shop" is a pasteable link. Cheap, and it composes with
// the date seed rather than competing with it: the link carries the *spot*,
// the day the recipient opens it supplies the *street*. Deliberately no day
// in the hash — a link is an invitation to come and look now, and a link that
// pinned the day would go stale the moment the weather turned.
//
// Format: #p=<x>,<z>,<heading>
//   x, z   world metres, 1 d.p. (~10cm — finer than a footstep)
//   head   degrees, integer, 0-359, clockwise from -Z
// Degrees rather than radians purely so the string is legible to a human
// deciding whether two links are the same place.
//
// Nothing here throws. A malformed, truncated or hand-edited hash is ignored
// with a console warning and the visitor spawns at the Foot as usual — a
// share feature that can white-screen the scene is worse than no share
// feature.

import { MAX_OFFSET } from './controls.js';

const PREFIX = 'p=';
const WRITE_INTERVAL = 0.4;   // seconds of sim time between replaceState calls
const MOVE_EPSILON = 0.25;    // metres — below this the hash isn't worth rewriting
const TURN_EPSILON = 1.0;     // degrees, ditto
const COORD_LIMIT = 1e5;      // sanity bound; the Walk is ~1617m end to end

function normaliseDeg(deg) {
  return ((deg % 360) + 360) % 360;
}

export function yawToDeg(yaw) {
  return normaliseDeg(yaw * 180 / Math.PI);
}

export function degToYaw(deg) {
  return deg * Math.PI / 180;
}

// Exported for the gate: round-tripping a moment through format/parse is a
// pure-function check and proves nothing about the scene on its own, so the
// suite pairs it with a built-scene boot. See docs/VALIDATION.md.
export function formatMoment({ x, z, yaw }) {
  const d = Math.round(yawToDeg(yaw)) % 360;
  return `#${PREFIX}${x.toFixed(1)},${z.toFixed(1)},${d}`;
}

export function parseMoment(hash) {
  if (typeof hash !== 'string') return null;
  const raw = hash.replace(/^#/, '');
  if (!raw.startsWith(PREFIX)) return null;
  const parts = raw.slice(PREFIX.length).split(',');
  if (parts.length !== 3) return null;
  const [x, z, deg] = parts.map(Number);
  if (![x, z, deg].every((v) => Number.isFinite(v))) return null;
  if (Math.abs(x) > COORD_LIMIT || Math.abs(z) > COORD_LIMIT) return null;
  return { x, z, yaw: degToYaw(normaliseDeg(deg)) };
}

// Read the moment the page was opened at, clamped into the walkable corridor.
// Called before createControls so the result can simply be the spawn — an
// arriving visitor is placed where the link says, not walked there.
//
// The clamp matters: controls.js only enforces MAX_OFFSET while you are
// *moving*, so an out-of-corridor spawn would otherwise stick until the first
// keypress, and a hand-edited link could drop someone inside a building.
// E6a adds a second step. The corridor is 16m and façades sit well inside
// that, so the clamp alone can put an arriving visitor inside a wall. Before
// collision they could walk out; under collision they would be trapped, so a
// clamped point that lands in a solid is projected to the nearest free one.
// Only buildings are registered this early (props build later) — main.js
// re-runs the same resolution once the static props are in.
export function readMoment(nearestStreetPoint, collision) {
  const m = parseMoment(typeof location === 'undefined' ? '' : location.hash);
  if (!m) return null;
  if (nearestStreetPoint) {
    const { point, distance } = nearestStreetPoint(m.x, m.z);
    if (point && distance > MAX_OFFSET) {
      const scale = MAX_OFFSET / distance;
      m.x = point[0] + (m.x - point[0]) * scale;
      m.z = point[1] + (m.z - point[1]) * scale;
    }
  }
  if (collision) {
    const [fx, fz] = collision.resolveFree(m.x, m.z);
    m.x = fx;
    m.z = fz;
  }
  return m;
}

// createMoments({ camera, isEnabled }) -> { update, href, current, writeNow }
//
// update(dt) is registered as one of main.js's updaters, which means it runs
// under the harness's stepFrame as well as under rAF — deliberate, so the
// write path is measurable rather than only reachable in a live browser. The
// throttle is accumulated sim dt for the same reason: a wall-clock throttle
// would make the gate depend on how fast the machine is.
export function createMoments({ camera, isEnabled }) {
  let sinceWrite = 0;
  let lastX = null;
  let lastZ = null;
  let lastDeg = null;
  let writes = 0;

  function current() {
    return { x: camera.position.x, z: camera.position.z, yaw: camera.rotation.y };
  }

  function href() {
    if (typeof location === 'undefined') return formatMoment(current());
    return `${location.origin}${location.pathname}${location.search}${formatMoment(current())}`;
  }

  function writeNow() {
    const m = current();
    const deg = Math.round(yawToDeg(m.yaw)) % 360;
    lastX = m.x; lastZ = m.z; lastDeg = deg;
    writes++;
    // replaceState, never pushState: a share link must not fill the back
    // button with one entry per footstep. It throws in a sandboxed
    // cross-origin iframe (the single-file artifact's usual home), which is
    // exactly the case where the copy button below is the only way to get a
    // link out — so failing here must not stop that working.
    try {
      history.replaceState(null, '', formatMoment(m));
    } catch {
      /* sandboxed iframe — the copy affordance still works off href() */
    }
  }

  function update(dt) {
    if (isEnabled && !isEnabled()) return;
    sinceWrite += dt;
    if (sinceWrite < WRITE_INTERVAL) return;
    sinceWrite = 0;
    const m = current();
    const deg = Math.round(yawToDeg(m.yaw)) % 360;
    if (lastX !== null) {
      const moved = Math.hypot(m.x - lastX, m.z - lastZ);
      let turned = Math.abs(deg - lastDeg);
      if (turned > 180) turned = 360 - turned;
      if (moved < MOVE_EPSILON && turned < TURN_EPSILON) return;
    }
    writeNow();
  }

  return { update, href, current, writeNow, writeCount: () => writes };
}

// --- The share affordance ---------------------------------------------------
//
// On a normal page the address bar is already the share affordance, and this
// button is a convenience. In the single-file artifact there is no address
// bar at all — it lives in a sandboxed iframe — so this is the ONLY way a
// link gets out, and it has to work without the Clipboard API, which that
// same sandbox often withholds. Hence the two-tier behaviour: copy if we can,
// otherwise show the link ready-selected so it can be copied by hand.
//
// Mirrors the journal's toggle exactly (touch-only button, desktop key,
// pointerdown/pointerup rather than click for the iOS bug in E2f) so no new
// interaction vocabulary is introduced. The toast is display:none until used,
// so it is absent from every golden.
const TOAST_MS = 2600;

export function createShareUi({ moments }) {
  const toggleEl = document.getElementById('link-toggle');
  const toastEl = document.getElementById('link-toast');
  const fieldEl = document.getElementById('link-field');
  let hideTimer = null;
  let lastResult = null; // 'copied' | 'manual' — read by the gate

  function showToast(message, url) {
    if (!toastEl) return;
    if (fieldEl) {
      fieldEl.value = url;
      fieldEl.style.display = url ? 'block' : 'none';
    }
    const label = toastEl.querySelector('#link-toast-label');
    if (label) label.textContent = message;
    toastEl.style.display = 'block';
    if (hideTimer) clearTimeout(hideTimer);
    // The manual path leaves the field up longer — it exists to be selected,
    // and 2.6s is not enough to read a URL and drag across it.
    hideTimer = setTimeout(() => { toastEl.style.display = 'none'; }, url ? TOAST_MS * 3 : TOAST_MS);
  }

  function share() {
    const url = moments.href();
    moments.writeNow(); // so the address bar agrees with what was just copied
    const clip = typeof navigator !== 'undefined' && navigator.clipboard;
    if (!clip || !clip.writeText) {
      lastResult = 'manual';
      showToast('copy this link', url);
      return Promise.resolve(lastResult);
    }
    return clip.writeText(url).then(
      () => { lastResult = 'copied'; showToast('link copied', ''); return lastResult; },
      () => { lastResult = 'manual'; showToast('copy this link', url); return lastResult; },
    );
  }

  function onKeyDown(e) {
    if (e.code === 'KeyL') share();
  }
  function onPointerDown(e) {
    e.preventDefault();
    try { toggleEl.setPointerCapture?.(e.pointerId); } catch { /* synthetic PointerEvent, e.g. the smoke harness */ }
  }

  window.addEventListener('keydown', onKeyDown);
  if (toggleEl) {
    toggleEl.addEventListener('pointerdown', onPointerDown);
    toggleEl.addEventListener('pointerup', () => share());
  }
  if (fieldEl) {
    // Tapping the field selects the whole URL — the manual path's entire job.
    fieldEl.addEventListener('focus', () => fieldEl.select());
    fieldEl.addEventListener('click', () => fieldEl.select());
  }

  return { share, lastResult: () => lastResult, isToastOpen: () => !!toastEl && toastEl.style.display === 'block' };
}
