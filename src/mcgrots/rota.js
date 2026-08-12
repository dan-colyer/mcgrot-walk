// The rota: who is at the pitch, as a pure function of wall-clock time. G4a.
//
// Dan, 2026-08-12, the ruling that shapes this module: ACTORS MUST NOT AFFECT
// THE CAMERA. The camera in main.js is a pure function of the PLAYER's anchor
// and body (placeCamera()) and reads nothing exported from here. Enforced by
// construction, not by convention: `whoIsHere`/`whatTheyAreDoing` return plain
// data with no THREE objects in it, and `Reader.update()` below moves only
// its own THREE.Group — it has no reference to the scene's camera and cannot
// reach one. No arrival pulls a look-at, no cutaway, no reframing.
//
// THE SCHEDULE IS A PURE FUNCTION OF THE CLOCK, never of session start. A
// late arrival joining mid-reading is correct behaviour, not a bug — nothing
// here accumulates a counter or measures "seconds since boot".
//
// Sizing (roadmap § G4a): 125 readings average ~39.7 s each (readings.json,
// summed). GAP_S=45 gives a reading+gap cycle of ~85 s, so a ten-minute visit
// sees 600/85 ~= 7 readings — inside the "six to eight" budget. Not
// re-derived per boot; a fixed constant, checked once here in a comment
// rather than computed and re-justified at runtime.

import { toWorld } from './site.js';
import { makeActor } from './actor.js';
import { makeCapsuleBody } from './actors/capsule.js';

const GAP_S = 45;          // silence between one reading ending and the next starting
const ARRIVE_LEAD_S = 7;   // walk-in window before a reading starts
const DEPART_LEAD_S = 7;   // walk-off window after a reading ends

// This module's OWN seeded generator (CLAUDE.md / AGENTS.md invariant): never
// an existing sequence. The shuffle below is the only draw it makes, once,
// at load — reshuffling per-frame or per-call would break "same timestamp,
// same rota".
function mulberry32(seed) {
  let s = seed | 0;
  return function () {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const ROTA_SEED = 0x6c6f7473; // "lots" — this module's own draw, nobody else's

let pool = null;        // shuffled ids, built once by load()
let cumulative = null;  // [{id, duration, readStart, readEnd}], one full cycle
let cycleLength = 0;    // seconds; readStart of the first entry is 0

// A CATALOG ENTRY MUST NOT CLAIM AN MP3 THAT IS NOT ON DISK (CLAUDE.md). This
// module never plays audio (G4b does), but it schedules against REAL
// durations and must not draw a comic with none. readings.json's duration
// figures are extracted from the rendered mp3 after the fact — a comic only
// gets an entry there once its audio genuinely exists — so intersecting with
// readings.json is itself the "check rather than trust" the catalog's own
// `audio` field: a comic whose `audio` field was set but whose file never
// rendered (the daily-tts bug CLAUDE.md records) has no readings.json entry
// and is excluded by construction, with no filesystem check needed at
// runtime.
function buildPool(comics, readings) {
  const withAudioField = new Set(comics.filter((c) => c.audio).map((c) => c.id));
  const ids = Object.keys(readings).filter((id) => withAudioField.has(id));

  const rand = mulberry32(ROTA_SEED);
  const shuffled = ids.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  let cursor = 0;
  cumulative = shuffled.map((id) => {
    const duration = readings[id].duration;
    const readStart = cursor;
    const readEnd = readStart + duration;
    cursor = readEnd + GAP_S;
    return { id, duration, readStart, readEnd };
  });
  cycleLength = cursor;
  pool = shuffled;
}

// Loads once; safe to call more than once (idempotent). main.js's boot()
// awaits this before the first frame, the same way it awaits actor.ready.
let loading = null;
export function loadRota() {
  if (pool) return Promise.resolve();
  if (loading) return loading;
  loading = (async () => {
    const [catalogRes, readingsRes] = await Promise.all([
      fetch('assets/catalog.json'),
      fetch('assets/readings.json'),
    ]);
    if (!catalogRes.ok) throw new Error(`catalog.json ${catalogRes.status}`);
    if (!readingsRes.ok) throw new Error(`readings.json ${readingsRes.status}`);
    const catalog = await catalogRes.json();
    const readings = await readingsRes.json();
    buildPool(catalog.comics, readings);
  })();
  return loading;
}

function wrap(t) {
  return ((t % cycleLength) + cycleLength) % cycleLength;
}

// Checks each entry against three phases of the cycle (this one, the one
// before, the one after) so a visit that straddles the wrap point at t=0
// still resolves correctly on both sides of it.
function findVisit(now) {
  if (!cumulative || !cycleLength) return null;
  const t = wrap(now);
  for (const v of cumulative) {
    for (const off of [0, -cycleLength, cycleLength]) {
      const rs = v.readStart + off;
      const re = v.readEnd + off;
      if (t >= rs - ARRIVE_LEAD_S && t < re + DEPART_LEAD_S) return { v, rs, re };
    }
  }
  return null;
}

// Pure function of an absolute timestamp (seconds). Who — if anyone — is at
// the pitch, across arriving/reading/leaving. Returns a comic id or null.
export function whoIsHere(now) {
  const hit = findVisit(now);
  return hit ? hit.v.id : null;
}

// How many visits' windows (arrive-lead through depart-lead) contain `now`.
// `whoIsHere`/`whatTheyAreDoing` return the FIRST match `findVisit` walks
// into, so a scheduling bug that let two windows overlap would be invisible
// to them — they would just silently pick one. This exists so "one reader at
// a time" can be gated against the actual timeline rather than trusted from
// a function that could not tell the difference.
export function overlapCount(now) {
  if (!cumulative || !cycleLength) return 0;
  const t = wrap(now);
  let n = 0;
  for (const v of cumulative) {
    for (const off of [0, -cycleLength, cycleLength]) {
      const rs = v.readStart + off;
      const re = v.readEnd + off;
      if (t >= rs - ARRIVE_LEAD_S && t < re + DEPART_LEAD_S) { n++; break; }
    }
  }
  return n;
}

// Length of one full pass through the shuffled pool, in seconds. Exported for
// the gate suite, so it can scan "one reader at a time" over a span that
// provably covers the whole schedule rather than a guessed constant.
export function cycleSeconds() {
  return cycleLength;
}

// Pure function of an absolute timestamp (seconds). What that person is
// doing, or null if the pitch is empty.
export function whatTheyAreDoing(now) {
  const hit = findVisit(now);
  if (!hit) return null;
  const { v, rs, re } = hit;
  const t = wrap(now);
  if (t < rs) return { id: v.id, phase: 'arriving' };
  if (t < re) return { id: v.id, phase: 'reading', elapsed: t - rs, duration: v.duration };
  return { id: v.id, phase: 'leaving' };
}

// --- Positions, pitch-local (site.js § toWorld) -----------------------------

// Where a reader stands to read: at the counter, but offset from the
// PLAYER's own 'counter' viewing anchor (anchors.js, local [0, 3.2]) so the
// two can occupy the pitch at once without standing on each other. Between
// the van's serving opening (van.js, front face at local z ~= 1.3) and the
// player's spot.
const SPOT_LOCAL = [0.35, 2.1];

// Two approach corridors, chosen so a walk from either to SPOT_LOCAL at
// actor.js's WALK_SPEED (1.35 m/s) takes roughly ARRIVE_LEAD_S, AND so the
// WHOLE straight-line walk stays clear of every one of the five anchors' own
// camera eyes (anchors.js) — measured against the full segment, not just its
// endpoints. Two rejected pairs, found by opening the G4a sequence capture
// (numeric gates never saw either fault):
//   [-3.6, 8.4] / [3.6, 8.4]   — the arrival point itself sat 2.24m from the
//     `counter` shot's eye, close enough to fall outside its view frustum;
//     most of an arrival rendered no reader at all.
//   [-4.5, 12.5] / [4.5, 12.5] — both endpoints cleared every eye by 3m+, but
//     the LINE between the `counter` side one and SPOT_LOCAL passes within
//     0.53m of the `counter` eye partway along it — a walk that appears,
//     crosses almost through the lens, and reappears.
// This pair's nearest approach to any eye, minimised over the whole segment,
// is 4.73m (`counter`, from the `-8` side). Alternating them (by a hash of
// the comic id, not by draw order — this module's schedule must stay
// reproducible without a second PRNG call) keeps arrivals from all using the
// same line.
const APPROACH_LOCAL = [
  [-8, 2.1],
  [8, 2.1],
];

export const READ_SPOT = toWorld(SPOT_LOCAL[0], SPOT_LOCAL[1]);
const VAN_LOCAL = toWorld(0, 0);
export const APPROACHES = APPROACH_LOCAL.map(([x, z]) => toWorld(x, z));

// Facing the van while reading; facing back the way they came while walking.
const SPOT_YAW = Math.atan2(VAN_LOCAL.x - READ_SPOT.x, VAN_LOCAL.z - READ_SPOT.z);

function hashPick(id, n) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0;
  return Math.abs(h) % n;
}

function approachFor(id) {
  return APPROACHES[hashPick(id, APPROACHES.length)];
}

function yawTo(from, to) {
  return Math.atan2(to.x - from.x, to.z - from.z);
}

// --- The reader's own actor -------------------------------------------------
//
// Placeholder cast (roadmap § G4a: "the rota runs on the placeholder cast;
// G8 replaces them"). The capsule body — G1's zero-network-cost control —
// rather than a skinned archetype: this unit is silent and about the
// SCHEDULE, not the cast, and a capsule needs no glb fetch per reader.
//
// NO CAMERA IS EVER PASSED to makeActor here (contrast main.js's player
// actor, which passes one for billboarding candidates). That is not a style
// choice — it is one more structural guarantee that this module cannot
// reach the camera, on top of never importing it.
export function createReader({ scene }) {
  let readerActor = null;
  let lastId = null;
  let lastPhase = null;

  function ensureActor() {
    if (readerActor) return readerActor;
    const body = makeCapsuleBody({ color: 0x9c8f74 });
    readerActor = makeActor({ body });
    readerActor.group.name = 'reader';
    readerActor.group.visible = false;
    scene.add(readerActor.group);
    return readerActor;
  }

  // now: wall-clock seconds (Date.now() / 1000, or an injected override —
  // see setClockOverride below). dt: real seconds since the last frame, for
  // stepping the capsule's own walk physics — the schedule and the walk
  // animation are driven by two different clocks on purpose, the same
  // separation `actor.js`'s `phase` (distance) keeps from `clock` (time).
  function update(dt, now) {
    const info = whatTheyAreDoing(now);
    if (!info) {
      if (readerActor) readerActor.group.visible = false;
      lastId = null;
      lastPhase = null;
      return;
    }
    const actor = ensureActor();
    actor.group.visible = true;

    if (info.id !== lastId) {
      const approach = approachFor(info.id);
      actor.snapTo(approach.x, approach.z, yawTo(approach, READ_SPOT));
      lastId = info.id;
      lastPhase = null; // force the phase transition below to run
    }

    if (info.phase !== lastPhase) {
      if (info.phase === 'arriving') {
        actor.walkTo(READ_SPOT.x, READ_SPOT.z, SPOT_YAW);
      } else if (info.phase === 'reading') {
        // Snap the last short distance rather than trust the walk to land
        // exactly on ARRIVE_LEAD_S — the walk's own speed is real physics
        // and the schedule's lead time is a fixed estimate of it, so they
        // are not guaranteed to agree to the millimetre.
        actor.snapTo(READ_SPOT.x, READ_SPOT.z, SPOT_YAW);
        actor.setState('idle');
      } else if (info.phase === 'leaving') {
        const approach = approachFor(info.id);
        actor.walkTo(approach.x, approach.z, yawTo(READ_SPOT, approach));
      }
      lastPhase = info.phase;
    }

    actor.update(dt);
  }

  return {
    update,
    get group() { return readerActor?.group ?? null; },
    get state() { return { id: lastId, phase: lastPhase }; },
  };
}
