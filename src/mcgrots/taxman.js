// The Taxman — G7j. A scripted two-hander with McGrot, not a new character
// system: 36 lines already existed in generated/mcgrots-dialogue.json
// (TAXMAN's own 15, plus McGrot's six exchange lines G7f excluded for having
// no audible partner) and could never be heard until this unit built one.
//
// THE BODY IS A STAND-IN, NOT A CHARACTER (docs/briefs/g7j-taxman-scene.md).
// G8 is where the real cast gets modelled from the comics; this reuses the
// bake-off's own CONTROL body (actors/capsule.js) rather than starting that
// work early. § 9 permits stand-in bodies explicitly — it does not permit
// stand-in voices, which is why the six lines are real Gemini renders
// (scripts/generate-cast-tts.mjs), not silence.
//
// HE ARRIVES; HE DOES NOT LOITER. `group.visible` defaults false and is
// driven entirely by `sceneCueAt(elapsed)` below, a PURE function of the
// elapsed seconds inside visit.js's own 'wall' silence cue (dur 101.8s,
// tagged `beat: 'taxman'`) — the same "drive from the wall clock, never a
// stored flag" discipline visit.js and rota.js both already follow
// (docs/MCGROTS-ROADMAP.md § 6). main.js reads `cue.elapsed` (itself a pure
// function of the pinned or real clock) and calls this module's schedule
// fresh every frame; nothing here remembers whether it has "already arrived".
//
// POSITION. Beside the van, on the OPPOSITE side from Pomplé (POMPLE_LOCAL
// x=+2.6, pomple.js) — clear of the counter/kerb approach corridors
// (rota.js: x=±8 at z=2.1) and, the brief's own named risk, clear of the
// sightline from camera to McGrot at every anchor he could plausibly be seen
// from. Verified by render (docs/g7-taxman-scene.md), not by this comment —
// a figure standing on McGrot's line was a live fault as recently as
// yesterday (F22 follow-up, rota.js's reader).
//
// YAW: faces McGrot, same formula pomple.js and mcgrot.js's own header both
// use for a stationary figure with no travel to measure it from —
// `atan2(dx, dz)` in WORLD space, per AGENTS.md's project invariant that this
// game's forward is `(+sin yaw, +cos yaw)`.
//
// DETERMINISM: nothing here draws from a PRNG. The line schedule is a fixed
// table of MEASURED durations (ffprobe on the six rendered clips), the same
// discipline visit.js's own CUES table follows for its readings/complaints.

import * as THREE from 'three';
import { makeActor } from './actor.js';
import { makeCapsuleBody } from './actors/capsule.js';
import { toWorld } from './site.js';
import { MCGROT_LOCAL } from './mcgrot.js';

// Pitch-local. Opposite side of the van from Pomplé (POMPLE_LOCAL x=+2.6),
// a touch further out so his own silhouette clears McGrot's at every anchor
// that can see this spot — see this module's header and the landing capture
// for the render this was judged against.
export const TAXMAN_LOCAL = [-2.6, 1.55];

// A distinct, cold grey-blue — office wear, not the cast's own soot/rust/
// mustard palette (van.js, docs/CANON.md) — so a stand-in capsule still
// reads as "not one of the regulars" even before G8 gives him a real look.
const SUIT_COLOUR = 0x4b525c;

// The exchange, in order — docs/briefs/g7j-taxman-scene.md's own derivation
// of the sequence from generated/mcgrots-dialogue.json's `turn` field (1-6),
// verified independently here rather than trusted: McGrot opens, the Taxman
// closes every pair, and the Taxman has the last word (turn 6) — the joke
// the brief names, not re-ordered to give McGrot the close.
//
// `dur` is ffprobe on the actual rendered clips (scripts/generate-cast-
// tts.mjs), not an estimate — reproduced by:
//   for f in assets/audio/cast/*.mp3; do
//     printf "%s " "$(basename "$f" .mp3)"
//     ffprobe -v error -show_entries format=duration -of csv=p=0 "$f"
//   done
// `gap` is authored pause-for-breath between turns, not measured — a beat
// short enough to read as a live back-and-forth rather than a dead pause.
const GAP = 0.6;
const LINES = [
  { id: 'mcgrot-exch-taxman-01', speaker: 'mcgrot', dur: 3.9 },
  { id: 'taxman-exch-taxman-01', speaker: 'taxman', dur: 4.1 },
  { id: 'mcgrot-exch-taxman-02', speaker: 'mcgrot', dur: 2.4 },
  { id: 'taxman-exch-taxman-02', speaker: 'taxman', dur: 3.2 },
  { id: 'mcgrot-exch-taxman-03', speaker: 'mcgrot', dur: 2.9 },
  { id: 'taxman-exch-taxman-03', speaker: 'taxman', dur: 4.3 },
];

// Cumulative schedule, built once — same shape as visit.js's own CUES table.
// Starts GAP seconds into the silence window rather than at elapsed=0: the
// window opens on nothing (matching every other silence row's own quiet
// beat), and the Taxman's arrival reads as a beat that happens DURING the
// silence rather than the instant it starts.
let SCHEDULE = null;
let SCENE_DUR = 0;
{
  let t = GAP;
  SCHEDULE = LINES.map((line, index) => {
    const start = t;
    const end = start + line.dur;
    t = end + GAP;
    return { ...line, index, start, end };
  });
  SCENE_DUR = t; // total span this scene occupies inside the 101.8s window
}

export function sceneDuration() {
  return SCENE_DUR;
}

// PURE function of elapsed seconds since visit.js's `beat: 'taxman'` cue
// itself started (`cue.elapsed`, not the wall clock directly — main.js
// passes that straight through). Same instant in -> same result out, always;
// no state here remembers a previous call. Returns `{ active: false }`
// before the scene opens or after it ends (both well inside the 101.8s
// window — SCENE_DUR is ~23s, see the schedule above), and during a GAP
// between two lines (`active: true`, `id: null` — present, listening, not
// speaking).
export function sceneCueAt(elapsed) {
  if (elapsed < 0 || elapsed >= SCENE_DUR) return { active: false, id: null, speaker: null };
  for (const line of SCHEDULE) {
    if (elapsed >= line.start && elapsed < line.end) {
      return {
        active: true, id: line.id, speaker: line.speaker,
        dir: 'cast/', elapsed: elapsed - line.start, dur: line.dur, index: line.index,
      };
    }
  }
  // Between two lines, or in the trailing GAP — present, nothing playing.
  return { active: true, id: null, speaker: null };
}

export function buildTaxman(scene) {
  const body = makeCapsuleBody({ color: SUIT_COLOUR });
  const actor = makeActor({ body });
  actor.group.name = 'taxman';
  actor.group.visible = false; // arrives on cue; see sceneCueAt above
  scene.add(actor.group);

  const w = toWorld(TAXMAN_LOCAL[0], TAXMAN_LOCAL[1]);
  const mcgrotWorld = toWorld(MCGROT_LOCAL[0], MCGROT_LOCAL[1]);
  const yaw = Math.atan2(mcgrotWorld.x - w.x, mcgrotWorld.z - w.z);
  actor.snapTo(w.x, w.z, yaw);

  return {
    group: actor.group,
    ready: actor.ready, // capsule body: resolved before this call returns
    update(dt) { actor.update(dt); },
    stats: () => actor.stats(),
  };
}
