// McGrot's — entry point. G0.
//
// A second, small game in this repo: one pitch at the Foot of the Walk, third
// person, anchored spots. Plan and decisions in docs/MCGROTS-ROADMAP.md.
//
// THIS DOES NOT IMPORT THE STREET. src/main.js and its modules are paused
// (CLAUDE.md, and MCGROTS-ROADMAP § 8) and nothing here may edit them. The one
// thing shared with the street is the asset contract convention, honoured in
// foot.js. Everything else — scene, loop, camera, input — is this game's own.
//
// THE LOOP IS FRAME-STEPPABLE BY DESIGN. `dbg.pauseAuto()` stops rAF and
// `dbg.stepFrames(n)` advances a fixed dt, which is how the gate suite gets a
// deterministic capture. The street learned this the hard way: an unpinned
// clock alone moves the sky, and a probe that boots differently from the gate
// cannot be used to explain the gate.

import * as THREE from 'three';
import { LIGHT, PITCH } from './site.js';
import { loadFoot, buildFoot } from './foot.js';
import { ANCHORS, anchorById, nearestAnchor, SEAT_HEIGHT } from './anchors.js';
import { makeActor } from './actor.js';
import { makeCapsuleBody } from './actors/capsule.js';
import { makeSegmentedBody } from './actors/segmented.js';
import { makeFlatsBody } from './actors/flats.js';
import { makeSkinnedBody } from './actors/skinned.js';
import { createStyle, STYLES } from './style.js';
import { createLooks, LOOKS } from './looks.js';
import { createPage } from './page.js';
import { createTitleCard } from './card.js';
import { createReaderAudio } from './audio.js';
import { createAmbience } from './ambience.js';
import { KEYS } from './keys.js';
import { buildStatue } from './statue.js';
import { buildVan } from './van.js';
import { buildPomple } from './pomple.js';
import { buildMcgrot } from './mcgrot.js';
import { buildTaxman, sceneCueAt, sceneDuration } from './taxman.js';
import { loadRota, createReader, whoIsHere, whatTheyAreDoing, overlapCount, cycleSeconds } from './rota.js';
import { CUES, cueAt, audioDirFor, cycleSeconds as visitCycleSeconds } from './visit.js';

// G1's bake-off lever. `?body=segmented` swaps the candidate without touching
// anything else, which is what keeps the comparison to the body alone —
// locomotion, cameras, lighting and anchors are identical across all arms.
const BODIES = {
  capsule: () => makeCapsuleBody({}),
  segmented: (assets) => makeSegmentedBody({ assets, archetype: BODY_ARCHETYPE }),
  flats: (assets) => makeFlatsBody({ assets, archetype: BODY_ARCHETYPE }),
  skinned: (assets) => makeSkinnedBody({ assets, archetype: BODY_ARCHETYPE }),
};
const params = new URLSearchParams(location.search);
const BODY_KIND = params.get('body') || 'capsule';
const BODY_ARCHETYPE = params.get('archetype') || 'rab';
// G2's bake-off levers, the same shape as G1's `?body=`.
//
// THREE INDEPENDENT ARMS, and they are separate params on purpose. A style in
// this game is not one thing: `look` mutates the scene before it draws
// (looks.js), `style` grades the finished frame (style.js), `page` puts
// furniture around it (page.js). Folding them into one `?style=` would make
// every candidate a bundle, and a bundle cannot be a control for another
// bundle — which is exactly the mistake the street's acceptance gates made
// twice (CLAUDE.md, the verification contract).
//
// So the four candidates Dan chose address as:
//   S1 inked cel      ?look=inked
//   S2 aerial flatten ?look=aerial      (S1 is its control: same but aerial=0)
//   S3 one key        ?style=key        (posterise is its control)
//   S4 the page       ?page=on
const STYLE_KIND = params.get('style') || 'none';
const LOOK_KIND = params.get('look') || 'aerial';
const PAGE_ON = params.get('page') === 'on';
const KEY_KIND = params.get('key') || null;
// G4a's control arm for the camera-independence gate: boot with the rota
// never loaded, so `whatTheyAreDoing` returns null forever and the reader
// never appears. The two arms otherwise share every line of boot() — the
// gate's whole point is that they differ in nothing else.
const ROTA_OFF = params.get('rota') === 'off';
// G7h: the scripted ten-minute visit, a pure function of the same wall clock
// rota.js already reads (Dan's correction, 2026-08-17 — session-relative was
// tried first and rejected: roadmap § 6 requires "drive from wall-clock time,
// never from session start"). Ships OFF so this moves no existing capture;
// `__mcgrotsForceVisit` is the same-shaped lever the street's own flags use.
const VISIT_ON = params.get('visit') === 'on' || window.__mcgrotsForceVisit === true;
// G7k follow-up: defaults ON now — same two-landing shape G7h used for
// LOOK_KIND (docs/MCGROTS-VALIDATION.md "G7h follow-up"), landed as its own
// commit with its own measurement of what moved. `?ambience=off` or
// `window.__mcgrotsForceAmbience = false` still opts out.
const AMBIENCE_ON = params.get('ambience') !== 'off' && window.__mcgrotsForceAmbience !== false;

const FIXED_DT = 1 / 60;

const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = LIGHT.exposure;

const style = createStyle(renderer);
const scene = new THREE.Scene();
const looks = createLooks(scene);
scene.background = new THREE.Color(LIGHT.skyColor);
// Enough fog to give the massing depth without hiding the far side of the
// junction. This is a placeholder grade — G2 owns the real one.
scene.fog = new THREE.Fog(LIGHT.skyColor, 40, 260);

const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 600);

// ONE FIXED LIGHTING SETUP (site.js). No clock, no weather, no atmosphere.js.
const hemi = new THREE.HemisphereLight(LIGHT.skyColor, LIGHT.groundColor, LIGHT.hemiIntensity);
scene.add(hemi);

const sun = new THREE.DirectionalLight(LIGHT.sunColor, LIGHT.sunIntensity);
{
  const r = 120;
  sun.position.set(
    PITCH.x + Math.cos(LIGHT.sunAltitude) * Math.sin(LIGHT.sunAzimuth) * r,
    Math.sin(LIGHT.sunAltitude) * r,
    PITCH.z + Math.cos(LIGHT.sunAltitude) * Math.cos(LIGHT.sunAzimuth) * r,
  );
  sun.target.position.set(PITCH.x, 0, PITCH.z);
}
scene.add(sun, sun.target);

// NO FILL LIGHT HERE, and that is a measured rejection rather than an omission.
//
// The cast renders as a near-black silhouette at every anchor. A camera-side
// fill was the obvious fix and is what the corpus would suggest — the comics
// light figures flat and frontally, with no dramatic key anywhere in 418 pages.
// It was built, swept from 0 to 6 against sun 6-9, hemisphere 3-5 and cast
// albedo 0.42-1.0, and it moved the cast's mean luminance from 8.3 to 11.0 in a
// frame whose mean is ~100. It is not the lever, so it is not in the scene.
//
// The lever is the ASSET. `rab`'s texture averages RGB(44, 37, 31) — measured
// off the decoded image — and `material.color` saturates at 1.0, so no
// multiplier can lift a map that dark. See docs/MCGROTS-VALIDATION § "The cast
// is unreadable" for the full table and what it means for G3.

// G3a: the real van, price board and ground dressing — replaces the G0 box.
buildVan(scene);

// G6b.2: McGrot himself, standing at the van's serving opening — reuses G1's
// A1 skinned rig (see mcgrot.js's header for why, unlike Pomplé, there is no
// bake-off question here). `pomple.js` now imports `MCGROT_LOCAL` from this
// module directly, so his attention target and this figure's placement can
// never drift apart into two copies of the same number.
const mcgrot = buildMcgrot(scene);

// G6a: Pomplé, presentation only — his own module; G1's rig does not
// transfer to a quadruped (see pomple.js's header). Module-scope, same as
// `reader` below: the glb loads lazily and `update()` no-ops until it does.
const pomple = buildPomple(scene);

// G7j: the Taxman, present only for his own scene inside the wall/101.8s
// silence cue — see taxman.js's own header. Built here, same timing as
// mcgrot/pomple above, so its (synchronous, capsule) mesh exists before
// looks.install() runs in boot() below.
const taxman = buildTaxman(scene);

// Built in boot(), once the assets object exists — a segmented body needs the
// glb and its sidecar, and assetUrl is the only sanctioned way to reach them.
let actor = null;

// G4a: the rota's own actor (readers arriving/reading/leaving), created
// immediately rather than in boot() — its body is the capsule (no glb fetch)
// and it stays invisible until `loadRota()` resolves and a visit is active.
const reader = createReader({ scene });

// Ground-plane raycast target for click-to-walk, and the anchor markers.
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const markers = new THREE.Group();
markers.name = 'anchor-markers';
for (const a of ANCHORS) {
  const m = new THREE.Mesh(
    new THREE.RingGeometry(0.5, 0.72, 20),
    new THREE.MeshBasicMaterial({ color: 0xd3b05a, transparent: true, opacity: 0.5, side: THREE.DoubleSide }),
  );
  m.rotation.x = -Math.PI / 2;
  m.position.set(a.pos.x, 0.02, a.pos.z);
  m.name = `marker:${a.id}`;
  markers.add(m);
}
scene.add(markers);

// G3c: the real ledge at every sitting anchor, replacing G1's placeholder
// box. A low retaining wall — base course plus a capstone lip, the shape
// every low boundary wall at a real junction like this one actually has, not
// a bench dropped in. `docs/LEITH.md` names no specific wall at the Foot, so
// there is no real geometry to defer to here the way the buildings and the
// statue do; this is dressing consistent with `van.js`'s kerb/pavement
// stone tones, not a researched feature.
//
// OFFSET BEHIND THE ANCHOR, along the actor's facing (G3e, F1/F8; value
// re-derived G3f). G3c measured that the rig's `hips` bone has ZERO local
// x/z offset from the actor's group origin in any pose, and used that to
// delete G1's 0.3 m offset — correct measurement, wrong conclusion. The
// hip's own offset was never what the number was for: the thighs swing
// forward from the hip as the actor sits, and with the ledge centred on the
// anchor those thighs swing straight into the block's front half, buried in
// the stone up to the capstone. The offset's job is to keep the thighs
// swinging clear of the stone, applied along local -z (the holder's local
// +z maps to `(sin yaw, cos yaw)`, the actor's own facing per `AGENTS.md` §
// invariants — so -z is behind).
//
// G3e set this to `SEAT_DEPTH/2 + CAP_OVERHANG` (0.325 m) — the seat's FRONT
// edge exactly under the buttocks, the minimum offset that clears the
// thighs. That reads as PERCHED on the corner (G3f, Dan's posture call):
// measured with the whole seat's depth in front of the hip and none behind,
// against a rendered three-quarter view. G3f moved the hip further onto the
// seat by REDUCING this offset — less of the seat is required to be behind
// the hip once the thigh angle itself is deeper (see `SEAT_DROP`'s sibling
// comment in `actors/skinned.js`) — and re-verified clearance for the new
// pose by skinning every leg vertex into this holder's local frame (G3e's
// method): zero intersections with either the wall or cap boxes at 0.20 m,
// both sitting anchors. 0.15 m was tried first and re-introduced contact
// (a visible clip through the cap's front-right corner in the three-quarter
// render); 0.20 m is the value that cleared it with margin. Not re-derived
// from a formula the way 0.325 m was — this is a posture choice, verified by
// measurement rather than computed from one.
const SEAT_WIDTH = 1.8;    // across — one person, with margin either side
const SEAT_DEPTH = 0.55;   // front-to-back, along the actor's facing
const CAP_H = 0.06;
const CAP_OVERHANG = 0.05;
const SEAT_ALONG_FACING_OFFSET = 0.20;
const WALL_STONE = 0x5f594c;
const WALL_CAP = 0x716a58;
const seats = new THREE.Group();
seats.name = 'seats';
for (const a of ANCHORS) {
  if (!a.sit) continue;
  const base = new THREE.BoxGeometry(SEAT_WIDTH, SEAT_HEIGHT - CAP_H, SEAT_DEPTH);
  base.translate(0, (SEAT_HEIGHT - CAP_H) / 2, 0);
  const holder = new THREE.Group();
  holder.position.set(
    a.pos.x - Math.sin(a.yaw) * SEAT_ALONG_FACING_OFFSET,
    0,
    a.pos.z - Math.cos(a.yaw) * SEAT_ALONG_FACING_OFFSET,
  );
  holder.rotation.y = a.yaw;
  holder.name = `seat:${a.id}`;
  const wall = new THREE.Mesh(
    base,
    new THREE.MeshLambertMaterial({ color: WALL_STONE, flatShading: true }),
  );
  wall.name = `seat:${a.id}:wall`;
  holder.add(wall);
  const cap = new THREE.Mesh(
    new THREE.BoxGeometry(SEAT_WIDTH + CAP_OVERHANG * 2, CAP_H, SEAT_DEPTH + CAP_OVERHANG * 2),
    new THREE.MeshLambertMaterial({ color: WALL_CAP, flatShading: true }),
  );
  cap.position.y = SEAT_HEIGHT - CAP_H / 2;
  cap.name = `seat:${a.id}:cap`;
  holder.add(cap);
  seats.add(holder);
}
scene.add(seats);

let footData = null;
let current = null;          // the anchor the actor is parked at or heading to
// F6, fixed under F11: `{ eye: {x,y,z}, look: {x,y,z} }` the camera is easing
// FROM during a walk — a snapshot of where the camera actually IS at the
// moment the walk starts, not a reference to the anchor being abandoned. See
// F11's comment below `goTo` for why that distinction is the whole fix.
let previous = null;
let lastLook = { x: 0, y: 0, z: 0 }; // F11: the look point placeCamera() last used
let clock = 0;               // seconds of game time; wall-clock in G4
let bodyError = null;        // a candidate that failed to load — reported, not thrown
let rotaError = null;        // G4a: catalog.json/readings.json failed — reported, not thrown

// F22: at `counter` the player's own body sits between the camera and
// McGrot and covers roughly his middle third (docs/briefs/g7b-pre-visit-fixes.md
// § F22) — that shot is authored closer and more centred than any sibling
// (anchors.js's `counter` has the smallest `dist`), so the actor fills far
// more of the frame there than anywhere else. This is not McGrot's fault and
// not an actor's — it is the PLAYER'S OWN body, so hiding it does not cross
// Dan's "actors must not affect the camera" ruling (2026-08-12).
//
// MEASURED, not guessed: real 3D camera-to-actor distance at every anchor
// (`camera.position.distanceTo(actor.group.position)`, each parked and
// settled) — counter 4.92m, kerb 5.61m, wall 5.90m, far 6.71m, back 9.27m.
// A 0.69m gap sits between counter and its nearest sibling; HIDE_DIST sits in
// that gap, so only counter's shot ever crosses it.
//
// HIDES rather than fades — the street's own first-person convention never
// draws a player mesh at all (src/main.js: no player body, ever), so absence
// rather than translucency is the precedent this follows, and it is the
// simplest thing that cannot half-disturb an existing capture at every other
// anchor, all of which stay comfortably clear of the threshold.
const SELF_OCCLUDE_HIDE_DIST = 5.2;
let selfOcclusionEnabled = true; // F22 gate's named control disables this

// F22 FOLLOW-UP 2/2 (Dan, re-measured on a detached worktree, 2026-08-16):
// the ORIGINAL version of this recomputed live distance every frame, which
// flips whenever the eased camera crosses SELF_OCCLUDE_HIDE_DIST — including
// mid-walk. Measured, kerb -> counter, 240 frames stepped: exactly one flip,
// frame 71, actor.progress 0.304, at 5.187m (distance range across the whole
// walk 4.036-5.855m). The body vanished in one frame, in plain view, a third
// of the way through a walk the player is watching — and at a moment with no
// relationship to the actor's own stand position, only to where the eased
// camera happened to be that frame.
//
// FROZEN TO A PER-ANCHOR CONSTANT instead of a live distance. This is Dan's
// "hide for the whole walk" option over a fade: a translucent player body
// risks interacting with the hull/ink pipeline (`looks.js`'s outline meshes
// are a second, separately rendered pass keyed to the same materials) in
// ways nothing in this project has tried yet, where a precomputed boolean
// touches nothing about how anything renders.
//
// NOT PURELY "resolved at goTo time from the destination", though that was
// tried first: it fixes the walk INTO `counter` (hidden from frame 0, while
// the actor is still small and far off in the departing anchor's own frame)
// but breaks the walk OUT of it just as badly in the other direction —
// visible from frame 0 too, which means the body POPS IN, large and
// centred, in the frame `counter` was still showing. Rendered and opened
// both directions before landing on the rule below (see the F22-follow-up-2
// commit for the captures). The actual rule: hidden for the WHOLE walk if
// EITHER the anchor being left or the one being arrived at would hide it —
// `walkStartHidden` (set in `goTo`'s walk branch, from live visibility, not
// a stored anchor id) carries the departure side; `current.id` below carries
// the arrival side once `actor.walking` goes false. So a walk into `counter`
// hides immediately (destination hides) and a walk out of it stays hidden
// until the walk actually completes (departure hides) — both transitions
// change state only at a boundary where the camera is far from the OTHER
// anchor's own tight framing, never mid-ease.
//
// REVIEW-MODE GUARD, found while building this: `setReviewCamera` (used only
// by `scripts/mcgrots-bakeoff.mjs`, G1's body-comparison rig, never by the
// shipped game or this suite) parks the camera 2.6-2.9m from the actor by
// design — inside HIDE_DIST at every anchor. The live-distance version hid
// the actor throughout every review-camera capture ever taken under F22,
// silently, because nothing in this repo's own gates exercises that mode.
// `!reviewMode` is the fix; `current` can also be null before the first
// `goTo` (main.js's own boot calls `goTo('back', { snap: true })` before the
// first frame, so this is defence, not a path the shipped game takes).
const ANCHOR_HIDES_ACTOR = new Map(ANCHORS.map((a) => [
  a.id,
  Math.hypot(a.camera.eye.x - a.pos.x, a.camera.eye.y, a.camera.eye.z - a.pos.z) < SELF_OCCLUDE_HIDE_DIST,
]));
let walkStartHidden = false; // set in goTo's walk branch; read by updateSelfOcclusion

function goTo(id, { snap = false } = {}) {
  const a = anchorById(id);
  if (!a) return false;
  current = a;
  if (snap) {
    // A SNAP is a panel change: the actor is somewhere else on the next frame
    // and so is the camera. Under S4 that gets the gutter hold, which is what
    // the whole candidate is testing. A WALK is not — the walk between anchors
    // is the thing Dan asked to be able to watch (roadmap § decisions), and
    // cutting away from it would be cutting away from the game. F6: only the
    // snap branch is a cut, so `previous` is left alone here — the walk
    // branch is the only reader of it.
    page.cut(() => {
      actor.snapTo(a.pos.x, a.pos.z, a.yaw);
      actor.setState(a.sit ? 'sit' : 'idle');
      placeCamera();
    });
  } else {
    // F11, fixed 2026-08-12. The bug: this used to read `previous = from`,
    // where `from` was `current` before reassignment — the anchor the actor
    // was walking TO, not where the camera actually was. Interrupting a walk
    // (goTo called again with `actor.walking` already true — `onPick` and the
    // number-key handler both call `goTo` with no guard on it) made the next
    // ease start from that abandoned anchor's eye, which is nowhere near the
    // camera's live mid-ease position: a 10.324 m move opened with a 2.442 m
    // jump, 23.7% of the move, against the gate's 10% ceiling.
    //
    // The fix takes the phase gate's own suggestion: ease from the camera's
    // LIVE position instead of from an anchor. `previous` is now a snapshot
    // of `camera.position` and the look point placeCamera() last used
    // (`lastLook`, updated at the end of every placeCamera() call), captured
    // right here at the instant the walk starts — whether that is a fresh
    // walk from a parked anchor (where live position already equals that
    // anchor's own eye/look, so this is a no-op change for that case) or an
    // interruption mid-ease (where it is not, and is exactly the fix).
    //
    // This also deletes the old `previous === null` special case: previous
    // is always the camera's actual current pose now, never an anchor
    // reference, so there is nothing left to be null once the boot snap has
    // run. `placeCamera()` keeps the `&& previous` guard below regardless —
    // not for this path, but because the debug API's raw `actor.walkTo()`
    // (`dbg.walkTo`) can start a walk without ever calling `goTo`, and every
    // caller of that (`scripts/mcgrots-bakeoff.mjs`) pairs it with
    // `setReviewCamera()`, which returns out of this function before this
    // branch is ever reached — so the guard is dead in practice, kept only
    // so an unpaired raw `walkTo()` degrades to the old static-cut behaviour
    // instead of a crash.
    previous = {
      eye: { x: camera.position.x, y: camera.position.y, z: camera.position.z },
      look: { x: lastLook.x, y: lastLook.y, z: lastLook.z },
    };
    // F22 follow-up 2: snapshot whether the actor was hidden BEFORE this leg,
    // read from live visibility rather than a stored anchor id, for the same
    // reason `previous` above reads the camera's live pose rather than an
    // anchor reference — it stays correct across an interrupted walk with no
    // special case. See `updateSelfOcclusion`'s own comment for what this
    // feeds.
    walkStartHidden = !actor.group.visible;
    actor.walkTo(a.pos.x, a.pos.z, a.yaw);
  }
  page.setCaption(a.label);
  return true;
}

// Cubic Hermite / smoothstep: 3t² − 2t³. Zero derivative at both ends, so the
// camera leaves and arrives at rest rather than at a constant speed that
// starts and stops on a hard corner — the thing that reads as a glide rather
// than a slide. Chosen over linear for exactly that softness, and over
// anything higher-order (e.g. quintic smootherstep) because F6 has no
// evidence either way that the extra derivative continuity is visible at
// these distances and durations; this is the cheapest curve with soft ends.
const easeCamera = (t) => t * t * (3 - 2 * t);

// G1's review camera: a fixed offset from the actor rather than a fixed point
// in the world, so a walking figure stays centred and the same size in every
// frame of a strip. This is an ANIMATION-REVIEW view, not a shot — the whole
// point of the staging model is that the game has no free camera. It exists
// because comparing three candidates' walks from an anchor shot would compare
// their distance from the lens as much as their motion.
let reviewMode = null;   // null | 'side' | 'front' | 'threequarter'
const REVIEW = {
  side: { off: [2.6, 0.95, 0], look: [0, 0.85, 0] },
  front: { off: [0, 0.95, 2.6], look: [0, 0.85, 0] },
  threequarter: { off: [1.9, 1.15, 1.9], look: [0, 0.85, 0] },
};

// F6, Dan 2026-08-12: "let's just try and make any camera cuts smooth." The
// shots are still fixed per anchor (anchors.js) — nothing here invents a new
// angle — but a WALK now eases the camera from the anchor it left to the one
// it is headed for, tied to `actor.progress` rather than a timer of its own
// (constraint: a duplicate clock drifts out of step with the actor and the
// camera lands early or late). A SNAP still cuts: `page.cut(...)`'s callback
// calls this directly, `current.camera` on its own with `actor.walking`
// false, same as before this fix — the parked and snapped poses are
// untouched by construction, not by a special case.
function placeCamera() {
  if (reviewMode && actor) {
    const r = REVIEW[reviewMode] || REVIEW.side;
    const p = actor.group.position;
    const lx = p.x + r.look[0], ly = r.look[1], lz = p.z + r.look[2];
    camera.position.set(p.x + r.off[0], r.off[1], p.z + r.off[2]);
    camera.lookAt(lx, ly, lz);
    lastLook = { x: lx, y: ly, z: lz };
    return;
  }
  if (!current) return;
  if (actor.walking && previous) {
    // F11: eases from `previous.eye`/`previous.look` — the camera's OWN live
    // pose at the moment this walk started, captured in `goTo` — to the new
    // anchor's shot. Not from an anchor's own eye/look, which is the bug this
    // fixed; see `goTo`'s comment.
    const t = easeCamera(actor.progress);
    const pe = previous.eye, ce = current.camera.eye;
    const pl = previous.look, cl = current.camera.look;
    const lx = pl.x + (cl.x - pl.x) * t, ly = pl.y + (cl.y - pl.y) * t, lz = pl.z + (cl.z - pl.z) * t;
    camera.position.set(
      pe.x + (ce.x - pe.x) * t,
      pe.y + (ce.y - pe.y) * t,
      pe.z + (ce.z - pe.z) * t,
    );
    camera.lookAt(lx, ly, lz);
    lastLook = { x: lx, y: ly, z: lz };
    return;
  }
  const c = current.camera;
  camera.position.set(c.eye.x, c.eye.y, c.eye.z);
  camera.lookAt(c.look.x, c.look.y, c.look.z);
  lastLook = { x: c.look.x, y: c.look.y, z: c.look.z };
}

// G4a: wall-clock seconds, never `clock` (session-relative — see its own
// declaration above). `rotaClockOverride` exists only for the gate suite and
// the debug API, to drive a scripted sequence of timestamps deterministically
// (dbg.setRotaClock / dbg.clearRotaClock) — real play always reads the
// system clock.
let rotaClockOverride = null;
const rotaNow = () => rotaClockOverride ?? Date.now() / 1000;

// G7h: has the visit's very first frame placed the actor yet. Snap once (a
// late join lands ON the current cue's anchor, per the correction — "at
// `wall`, immediately, not walking there from `counter`"); every anchor
// change after that is a real, eased walk, triggered only when a cue
// boundary actually changes `cueAt(now).anchor`. `dbg.visit.rejoin()` resets
// this so the gate suite can test a fresh join at an arbitrary pinned instant
// without reloading the page.
let visitJoined = false;
// Dedups `pomple.playBeat` against the SAME cue instance — `cueAt`'s `index`
// only repeats once the cycle has genuinely wrapped, at which point firing
// the beat again is correct (every lap replays it), not a bug.
let lastBeatCueIndex = -1;
// G7j gate-only override, same shape as `selfOcclusionEnabled`/
// `setSelfOcclusion` above. Needed because `taxman.group.visible` is
// reasserted from `sceneCueAt(cue.elapsed)` on EVERY frame (by design — his
// arrival must be a pure function of the pinned clock, not a latch) — so the
// mcgrot/pomple/van regions' own toggle-then-stepFrames-then-diff technique
// would otherwise reassert him visible on the very next frame and read a
// diff of zero regardless of the fix. This flag is the escape hatch.
let taxmanForceHidden = false;

// G4b: the camera's own position/facing, read fresh every frame — the ONLY
// thing audio takes from the camera side. See audio.js's header for why the
// dependency is safe in this direction and not the other.
const _facing = new THREE.Vector3();
function listenerPose() {
  camera.getWorldDirection(_facing);
  return {
    x: camera.position.x, y: camera.position.y, z: camera.position.z,
    fx: _facing.x, fy: _facing.y, fz: _facing.z,
  };
}

// F22 / F22 follow-up 2. Runs every frame for parity with every other
// per-frame updater, but the DECISION is the frozen per-anchor lookup above
// plus `walkStartHidden` — see that constant's own comment for the "hidden
// if EITHER endpoint would hide" rule and why. `actor.group.visible` is the
// whole player body (the only child `makeActor` ever adds), so this hides
// him entirely, not a part.
function updateSelfOcclusion() {
  if (!selfOcclusionEnabled || reviewMode || !current) { actor.group.visible = true; return; }
  const destinationHides = ANCHOR_HIDES_ACTOR.get(current.id);
  const hidden = actor.walking ? (walkStartHidden || destinationHides) : destinationHides;
  actor.group.visible = !hidden;
}

// G7m Part 2 — the one input the world takes back. `mcgrot-03` ("Naw.") is a
// complete line, already rendered (G7g), that nothing in the schedule ever
// asks for. Routed through the SAME readerAudio channel the visit already
// owns — no second <audio> element, no second AudioContext, no queue: a
// press either plays now, through `info` exactly like a scheduled reading
// would, or it does nothing. `frame()` below folds it into `info` only when
// the SCHEDULED cue has nothing playing, so a real reading always wins.
const NAW_ID = 'mcgrot-03';
// Measured (ffprobe assets/audio/mcgrot/lines/mcgrot-03.mp3): 1.05s. 1.3s
// gives the file itself a little headroom to actually finish loading and
// playing before the override lapses, without holding the channel open long
// enough to plausibly collide with a real cue boundary.
const NAW_PLAY_S = 1.3;
// Cooldown: 6s, ~5.7x the clip's own 1.05s. Long enough that mashing the key
// cannot machine-gun "Naw."s back to back (the failure Part 2's brief names
// — ten seconds of that and the line has no novelty left); short enough that
// a player who walks off and comes back, or who is just curious a second
// time, does not read the input as broken.
const NAW_COOLDOWN_S = 6;
let nawPressedAt = -Infinity;      // clock time of the last press that actually started playback
let nawPlayCount = 0;              // gate-observable: counts triggered plays only, never swallowed presses
function pressNaw(now) {
  if (!VISIT_ON) return;
  const scheduled = cueAt(now);
  // Swallowed: no queue, no cooldown spent — a press that did nothing costs
  // the player nothing, so the very next press once the reading ends can
  // fire immediately.
  if (scheduled.kind === 'reading' || scheduled.kind === 'complaint') return;
  if (now - nawPressedAt < NAW_COOLDOWN_S) return; // inside cooldown: swallowed
  nawPressedAt = now;
  nawPlayCount++;
}
window.addEventListener('keydown', (e) => {
  if (e.key === 'n' || e.key === 'N') pressNaw(rotaNow());
});

function frame(dt) {
  clock += dt;
  actor.update(dt, clock);
  // Park state resolves on arrival, so a sitting spot only sits once reached.
  if (current && !actor.walking && actor.state !== 'sit' && current.sit) actor.setState('sit');
  const now = rotaNow();
  let info, readerPos;
  if (VISIT_ON) {
    // G7h: the visit SUPPLIES the schedule rather than racing rota's own —
    // `reader.update`/`whatTheyAreDoing` are simply not called on this path,
    // so the rota's wandering reader capsule never appears and rota.js's
    // schedule never advances (it is a pure function of the same clock, so
    // there is nothing to "pause"). `cueAt` is the same shape as
    // `whatTheyAreDoing`: a pure function of `now`.
    const cue = cueAt(now);
    if (!visitJoined) {
      goTo(cue.anchor, { snap: true });
      visitJoined = true;
    } else if (current?.id !== cue.anchor) {
      goTo(cue.anchor); // a real, eased walk — only crosses a cue boundary
    }
    if (cue.beat && cue.index !== lastBeatCueIndex) {
      // G7h §5: the beat and its content are the NEXT unit's job. This call
      // is the interface it lands against — optional and guarded so a
      // pomple.js with no `playBeat` yet (today) is a silent no-op.
      pomple.playBeat?.(cue.beat);
      lastBeatCueIndex = cue.index;
    }
    // G7j: the Taxman's scene is a pure function of `cue.elapsed` on the
    // ONE cue tagged for it — same discipline as everything else on this
    // clock, see taxman.js's own header. `taxman.group.visible` is set every
    // frame from `active`, never latched, so a clock jump (a gate pinning a
    // new instant, or a real player rejoining mid-scene) cannot leave him
    // stuck visible after the window has passed.
    const taxmanScene = cue.beat === 'taxman' ? sceneCueAt(cue.elapsed) : { active: false, id: null };
    taxman.group.visible = taxmanForceHidden ? false : taxmanScene.active;
    if (taxmanScene.id) {
      info = { id: taxmanScene.id, phase: 'reading', elapsed: taxmanScene.elapsed, duration: taxmanScene.dur, dir: taxmanScene.dir };
      readerPos = taxmanScene.speaker === 'taxman' ? taxman.group.position : mcgrot.group.position;
    } else {
      info = (cue.kind === 'reading' || cue.kind === 'complaint')
        ? { id: cue.audio, phase: 'reading', elapsed: cue.elapsed, duration: cue.dur, dir: audioDirFor(cue.kind) }
        : null;
      // McGrot is the voice for both his own readings and his complaints —
      // never the camera, same structural rule as the rota's reader position.
      readerPos = mcgrot.group.position;
    }
  } else {
    // G4a: the reader's own actor, driven from the wall clock. This call and
    // the `const reader = createReader(...)` above are the ONLY things
    // main.js does for the rota — rota.js owns the schedule, the reader's
    // positions and its walk/read/leave state machine. `reader.update` never
    // receives the camera and cannot move it; see rota.js's header for why
    // that is structural rather than a promise.
    reader.update(dt, now);
    info = whatTheyAreDoing(now);
    readerPos = reader.group ? reader.group.position : null;
  }
  // G7m Part 2: only when the schedule itself has nothing playing — a real
  // cue always wins the channel, which is what keeps a press from ever
  // interrupting a reading even in the (practically unreachable, given
  // NAW_PLAY_S is a fraction of the shortest silence window) case where the
  // schedule crosses into a reading while a press is still within its window.
  if (VISIT_ON && info === null && now - nawPressedAt < NAW_PLAY_S) {
    info = { id: NAW_ID, phase: 'reading', elapsed: now - nawPressedAt, dir: audioDirFor('complaint') };
    readerPos = mcgrot.group.position;
  }
  // G6b.2: no locomotion and no per-frame state (see mcgrot.js's header) —
  // called for parity with every other actor, not because anything here
  // changes frame to frame.
  mcgrot.update(dt);
  // G6a: reads the player's own live position only — never the camera, per
  // Dan's ruling that actors must not affect it.
  pomple.update(dt, actor.group.position);
  // G7j: parity call only, same as mcgrot's above — no per-frame animation,
  // visibility is driven above from the cue, not from here.
  taxman.update(dt);
  placeCamera();
  updateSelfOcclusion();
  // G4b: same wall clock the reader/visit was just driven from, so audio and
  // whoever is visibly arriving/departing never disagree about who is there.
  // Runs every frame regardless of whether a gesture has happened —
  // audio.update() is a no-op until start() has been called.
  readerAudio.update(info, readerPos, listenerPose());
  // G7k: driven from the SAME `info`/`now` readerAudio just used, so the bed
  // never disagrees with the reader about whether a voice is playing.
  if (AMBIENCE_ON) {
    ambience.setDucked(!!(info && info.phase === 'reading'));
    ambience.update(now);
  }
  style.render(scene, camera);
}

// The renderer draws into the PANEL, not the window, whenever S4 is on. When it
// is off the panel rect is the whole window, so this is one code path rather
// than a branch — an `if (paged)` here would mean the unpaged case stopped
// being exercised the moment the page shipped.
//
// Takes the rect as an argument rather than reading `page` out of the closure,
// because page.js calls this back from inside createPage's own layout: closing
// over the binding would be a temporal-dead-zone fault that only fires if a
// resize ever beats boot.
function applyViewport(v) {
  renderer.setSize(v.w, v.h, false);
  camera.aspect = v.w / v.h;
  camera.updateProjectionMatrix();
  style.resize();
  // In DRAWING-BUFFER pixels, not CSS pixels: the outline is specified in
  // device pixels and setPixelRatio is up to 2 here, so passing v.h would halve
  // the line on a retina display and nowhere else.
  looks.setViewportHeight(renderer.getDrawingBufferSize(new THREE.Vector2()).y);
}

const page = createPage({ canvas, onResize: applyViewport });

function resize() { applyViewport(page.viewport()); }
window.addEventListener('resize', resize);

let autoRunning = true;
let last = performance.now();
function tick(now) {
  if (!autoRunning) return;
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  frame(dt);
  requestAnimationFrame(tick);
}

function onPick(clientX, clientY) {
  // Against the CANVAS rect, not the window. Under S4 the canvas is inset into
  // the panel, so window-relative NDC would aim the ray at a point offset by
  // the whole margin — a click that walks you to the wrong anchor, and one that
  // would only appear once the page was switched on.
  const r = canvas.getBoundingClientRect();
  pointer.x = ((clientX - r.left) / r.width) * 2 - 1;
  pointer.y = -((clientY - r.top) / r.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObject(footData.ground, false);
  if (!hits.length) return;
  const p = hits[0].point;
  const a = nearestAnchor(p.x, p.z);
  if (a) goTo(a.id);
}

canvas.addEventListener('pointerdown', (e) => onPick(e.clientX, e.clientY));
// Number keys are the keyboard route to the same thing — and the route the
// gate suite drives, since a synthetic click depends on the projection matrix
// being right, which is one of the things under test.
window.addEventListener('keydown', (e) => {
  const i = Number(e.key) - 1;
  if (i >= 0 && i < ANCHORS.length) goTo(ANCHORS[i].id);
});

// G4b: shown immediately, independent of boot() — the gesture is needed
// before any sound exists, not before the scene finishes loading. The
// AudioContext is built here, in onStart, and nowhere else.
const readerAudio = createReaderAudio();
// G7k: its own AudioContext, never readerAudio's — see ambience.js's header.
// Started from the SAME gesture, guarded by AMBIENCE_ON so an unflagged boot
// never constructs a second AudioContext at all.
const ambience = createAmbience();
const titleCard = createTitleCard({ onStart() { readerAudio.start(); if (AMBIENCE_ON) ambience.start(); } });

(async function boot() {
  const leith = await loadFoot();
  footData = buildFoot(leith);
  scene.add(footData.group);
  buildStatue(scene);

  // The bake-off body. An unknown ?body= falls back to the control rather than
  // failing to boot — a typo in a capture script should produce a comparable
  // frame with an obvious identity, not a blank page.
  const makeBody = BODIES[BODY_KIND] || BODIES.capsule;
  const body = makeBody(null);
  actor = makeActor({ body, camera });
  scene.add(actor.group);
  try {
    await actor.ready;
  } catch (err) {
    // A candidate that cannot load is a RESULT, not a crash. G1 has to be able
    // to report "A1 failed" with a frame beside it.
    console.warn(`[mcgrots] body '${BODY_KIND}' failed to load:`, err.message);
    bodyError = err.message;
  }

  if (!ROTA_OFF) {
    try {
      await loadRota();
    } catch (err) {
      // Same discipline as the body candidate above: a rota that fails to
      // load is a reportable result (empty pitch, forever), not a crash.
      console.warn('[mcgrots] rota failed to load:', err.message);
      rotaError = err.message;
    }
  }

  // G6b.2: awaited for the SAME reason the player's own `actor.ready` is
  // awaited above, and named here rather than left implicit — `looks.js`
  // traverses the scene once, at install, and never again, so a body built
  // fire-and-forget is invisible to it and stays a plain, un-inked material
  // under every look forever. Waiting here is what keeps this figure off
  // that list. Pomplé carried the identical gap until F21 (below).
  try {
    await mcgrot.ready;
  } catch (err) {
    console.warn('[mcgrots] mcgrot failed to load:', err.message);
  }

  // F21: same gap, same fix. pomple.js was built fire-and-forget with
  // nothing awaiting its own readiness, so looks.js's one-time traverse ran
  // before his meshes existed and he stayed a plain, un-inked material under
  // every look. This is the same await as mcgrot's above, for the same
  // reason.
  try {
    await pomple.ready;
  } catch (err) {
    console.warn('[mcgrots] pomple failed to load:', err.message);
  }

  // G7j: same await, same reason — a capsule body resolves immediately, but
  // the await keeps this actor's boot sequencing identical to mcgrot's and
  // pomple's rather than a special case for "this one never actually waits".
  try {
    await taxman.ready;
  } catch (err) {
    console.warn('[mcgrots] taxman failed to load:', err.message);
  }

  style.setStyle(STYLE_KIND);
  if (KEY_KIND) style.setKey(KEY_KIND);
  // AFTER the actor and the massing are in the scene. looks.js traverses once
  // at install and swaps what it finds, so installing before the cast exists
  // would ink the ground and leave every character un-outlined — and the frame
  // would still look plausibly styled, which is the dangerous kind of wrong.
  looks.install(LOOK_KIND);
  page.setEnabled(PAGE_ON);
  goTo('back', { snap: true });
  resize();
  placeCamera();

  // Localhost-gated, exactly as the street's __mcgrotDebug is. A public build
  // must not ship a scene-mutating API.
  const localhost = ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname);
  if (localhost) {
    window.__mcgrotsDebug = {
      THREE, scene, camera, renderer, actor, anchors: ANCHORS,
      buildingCount: footData.buildingCount,
      // The grade, exposed so it can be SWEPT rather than guessed. G0 needed
      // three attempts at the lighting because each one was a hand-picked pair
      // of numbers judged by eye on one frame; a sweep measures all five shots
      // at once. G2 grades the real style through the same handles.
      lights: { sun, hemi, ground: footData.ground },
      setGrade({ sunIntensity, hemiIntensity, exposure, groundColor } = {}) {
        if (sunIntensity !== undefined) sun.intensity = sunIntensity;
        if (hemiIntensity !== undefined) hemi.intensity = hemiIntensity;
        if (exposure !== undefined) renderer.toneMappingExposure = exposure;
        if (groundColor !== undefined) footData.ground.material.color.setHex(groundColor);
      },
      // The CAST's albedo, so it can be swept alongside the lights rather than
      // picked. G1 shipped ALBEDO_MULTIPLY 0.42 with no recorded reason and the
      // grade sweep never looked at the cast, so the two were tuned against
      // different things: at 0.42 the figures sit near luminance 10 in a frame
      // whose mean is 75, and no (sun, hemi) pair in the sweep's grid can lift
      // them, because the anchors' cameras always see the shadow side.
      //
      // Scales from a REMEMBERED BASE, so repeated calls do not compound —
      // a multiplier applied to the live colour would make the sweep's result
      // depend on the order its grid was visited.
      setCastAlbedo(k) {
        actor.group.traverse((o) => {
          if (!o.isMesh || !o.material?.color) return;
          if (!o.userData.baseColor) o.userData.baseColor = o.material.color.clone();
          o.material.color.copy(o.userData.baseColor).multiplyScalar(k);
        });
      },
      // G1's bake-off handles. `body` names which candidate is loaded and
      // `bodyError` is non-null when it failed — a failed candidate must be
      // reportable rather than an unexplained blank frame.
      body: BODY_KIND,
      archetype: BODY_ARCHETYPE,
      style: () => style.style,
      styleIds: () => STYLES.map((s) => s.id),
      setStyle: (id) => style.setStyle(id),
      setStyleStrength: (v) => style.setStrength(v),

      // G2's other two arms. Each is separately switchable at runtime, which is
      // what lets a gate boot ONCE and measure on-vs-off from the same process
      // — the street's flag gates boot twice and attribute a difference to the
      // flag, which is only sound because nothing else differs. Here nothing
      // else CAN differ, because it is the same scene.
      look: () => looks.look,
      lookIds: () => LOOKS.map((l) => l.id),
      setLook: (id) => looks.install(id),
      clearLook: () => looks.uninstall(),
      lookStats: () => looks.stats(),
      lookUniforms: looks.uniforms,

      key: () => style.key,
      keyIds: () => style.keyIds(),
      setKey: (id) => style.setKey(id),
      keys: KEYS,

      // G4b: one call so the gate suite can clear the gesture surface once in
      // its boot path rather than per check. Idempotent — `card.js`'s remove()
      // is a no-op on a detached node.
      card: { dismiss: () => titleCard.dismiss() },
      // G4b: read-only, localhost-gated, exactly like every other debug
      // handle here — the gate calls the SAME instance main.js drives every
      // frame, not a copy of it. `start()` is exposed so the harness can
      // trigger it from a real click (autoplay policy needs an actual
      // gesture, not a synthetic one) without wiring a second title card.
      readerAudio: {
        start: () => readerAudio.start(),
        get started() { return readerAudio.started; },
        get playingId() { return readerAudio.playingId; },
        get currentTime() { return readerAudio.currentTime; },
        get currentSrc() { return readerAudio.currentSrc; },
        get paused() { return readerAudio.paused; },
      },
      // G7k. Same discipline as readerAudio above: the gate drives the SAME
      // instance main.js updates every frame. `on` reports whether the flag
      // is live at all — the gate's audio checks are meaningless if it isn't.
      ambience: {
        on: AMBIENCE_ON,
        start: () => ambience.start(),
        get started() { return ambience.started; },
        get isDucked() { return ambience.isDucked(); },
        setDuckingEnabled: (v) => ambience.setDuckingEnabled(v),
        get duckingEnabled() { return ambience.duckingEnabled; },
        get gainValue() { return ambience.gainValue; },
        eventAt: (t) => ambience.eventAt(t),
        cycleSeconds: () => ambience.cycleSeconds(),
        update: (t) => ambience.update(t),
      },
      page: () => page.enabled,
      setPage: (v) => { page.setEnabled(!!v); resize(); },
      setPageTitle: (t) => page.setTitle(t),
      setPageCaption: (t) => page.setCaption(t),
      pageStats: () => page.stats(),
      get bodyError() { return bodyError; },
      get rotaError() { return rotaError; },
      // G4a. `whoIsHere`/`whatTheyAreDoing` are re-exported directly, not
      // wrapped — the gate calls the SAME pure functions the game itself
      // does, against an injected clock (`setRotaClock`), so a purity check
      // exercises the shipped product rather than a copy of it.
      rota: {
        whoIsHere,
        whatTheyAreDoing,
        overlapCount,
        cycleSeconds,
        reader: () => reader.state,
        setClock(seconds) { rotaClockOverride = seconds; },
        clearClock() { rotaClockOverride = null; },
      },
      // G7h. `cueAt` re-exported directly, same reasoning as `rota` above —
      // pinned against the SAME `rotaClockOverride` lever, not a second one
      // (the correction's own point: reuse rota's clock rather than
      // inventing one). `rejoin()` is a testing-only lever with no player-
      // facing equivalent: it resets the "has the visit placed the actor yet"
      // latch so the gate can drive a fresh SNAP-on-join at an arbitrary
      // pinned instant without reloading the page.
      visit: {
        on: VISIT_ON,
        cues: () => CUES,
        cueAt: (t) => cueAt(t),
        cycleSeconds: () => visitCycleSeconds(),
        rejoin() { visitJoined = false; },
        state: () => ({ joined: visitJoined, anchor: current?.id ?? null, lastBeatCueIndex }),
      },
      // G7m Part 2. `press` drives the SAME `pressNaw` a real keydown calls —
      // against `rotaNow()`, so it reads whatever clock `rota.setClock` has
      // pinned, exactly like every other gate in this region. `playCount`
      // exists because RMS alone cannot tell "played once" from "played
      // three times" while a cooldown is meant to be suppressing the second
      // and third — presses that got swallowed never touch it.
      naw: {
        press: () => pressNaw(rotaNow()),
        get playCount() { return nawPlayCount; },
        get pressedAt() { return nawPressedAt; },
      },
      // G6a. `group` is reached via `scene.getObjectByName('pomple')`, same
      // as every other prop's gate region (see `van`) — no second handle.
      pomple: {
        get headYaw() { return pomple.headYaw; },
        get attention() { return pomple.attention; },
        setTracking: (v) => pomple.setTracking(v),
      },
      // G7j. `sceneCueAt` re-exported directly, same reasoning as `visit.cueAt`
      // above — the gate calls the SAME pure function the game itself does,
      // against `visit.cueAt(t).elapsed` on the tagged cue, not a copy of it.
      taxman: {
        sceneCueAt: (elapsed) => sceneCueAt(elapsed),
        sceneDuration: () => sceneDuration(),
        // Gate-only override — see `taxmanForceHidden`'s own comment above
        // for why the usual toggle-then-diff technique needs this here and
        // not at van/pomple/mcgrot.
        setForceHidden: (v) => { taxmanForceHidden = !!v; },
        get forceHidden() { return taxmanForceHidden; },
      },
      bodyStats: () => actor.stats(),
      // F22's named control: the gate measures McGrot's visible pixel count
      // with this OFF, which must come in materially lower than with it on —
      // that is what proves the fix's own contribution rather than assuming
      // "he is visible" (he always was, partly).
      setSelfOcclusion: (v) => { selfOcclusionEnabled = !!v; updateSelfOcclusion(); },
      get selfOcclusionEnabled() { return selfOcclusionEnabled; },
      get actorHiddenBySelfOcclusion() { return !actor.group.visible; },
      setActorState: (s) => actor.setState(s),
      lookAt: (yaw) => actor.lookAt(yaw),
      get phase() { return actor.phase; },
      // Walk to a raw point rather than an anchor, so a strip can capture a
      // long straight walk instead of a five-metre hop between two spots.
      walkTo: (x, z, yaw) => actor.walkTo(x, z, yaw),
      setReviewCamera(mode) { reviewMode = mode; placeCamera(); },
      anchorIds: () => ANCHORS.map((a) => a.id),
      goTo: (id) => goTo(id),
      snapTo: (id) => goTo(id, { snap: true }),
      pauseAuto() { autoRunning = false; },
      resumeAuto() { autoRunning = true; last = performance.now(); requestAnimationFrame(tick); },
      stepFrames(n = 1, dt = FIXED_DT) { for (let i = 0; i < n; i++) frame(dt); },
      setMarkersVisible(v) { markers.visible = !!v; },
      state: () => ({
        anchor: current?.id ?? null,
        walking: actor.walking,
        actorState: actor.state,
        actor: { x: +actor.group.position.x.toFixed(3), z: +actor.group.position.z.toFixed(3), yaw: +actor.group.rotation.y.toFixed(4) },
        camera: { x: +camera.position.x.toFixed(3), y: +camera.position.y.toFixed(3), z: +camera.position.z.toFixed(3) },
        clock: +clock.toFixed(3),
        drawCalls: renderer.info.render.calls,
        triangles: renderer.info.render.triangles,
        reader: reader.group ? {
          visible: reader.group.visible,
          x: +reader.group.position.x.toFixed(3),
          z: +reader.group.position.z.toFixed(3),
        } : null,
      }),
    };
  }

  document.body.classList.add('booted');
  requestAnimationFrame(tick);
})();
