// Pomplé — McGrot's dog. G6a: presentation only.
//
// THE BODY RE-CHECK THE BRIEF ASKED FOR (docs/briefs/g6a-pomple-presentation.md
// § "Before you build"). G1's winner, A1 skinned, does not exist for him: its
// biped list (`scripts/rig-glb.mjs`'s `BIPEDS`) never named `pomple`, so
// `assets/characters/pomple-rig.json` was never generated — confirmed by
// booting `?body=skinned&archetype=pomple`, which 404s the rig fetch and
// renders nothing where the actor should stand. A2 segmented DOES render a
// legible dog (ears, snout, four legs, good silhouette), but its own quadruped
// branch (`actors/segmented.js`) deliberately gives him ONE rigid part — no
// head joint, `lookAt()` a no-op — with a comment already pointing here: "G6
// gives him his own treatment." Neither candidate transfers, so this module
// builds its own minimal rig rather than reusing either.
//
// THE RIG: two parts, not six. `pomple-form.glb` is loaded directly (not
// through actors/segmented.js — that module's PARTS scheme is biped-shaped
// and its offline sidecar, `pomple-segments.json`, only ever carries a single
// "torso" bucket for him). The narrowest-horizontal-slice trick
// `scripts/segment-glb.mjs` uses to find a human's neck does not apply here —
// it searches for a NARROW X-WIDTH band, which is a shoulders-to-neck signature
// a viewed-from-the-side quadruped does not have (his X-width is roughly
// constant along the whole spine; what varies is Z). So the split below cuts
// on Y alone, tuned by rendering the actual built rig from the side and
// three-quarter rear and reading the capture, not by searching for an X-width
// signature that was never there. 0.74 puts the cut just below the ears —
// clean at both angles, head rotates without visibly tearing from the neck.
// No walk cycle is built: the brief's
// behaviours are idle settling, head-turn and attention, not locomotion, so
// the body stays rigid and only the head pivots.
//
// NO SHARED STATE (the design ruling this unit is scoped inside — Dan,
// 2026-08-15, roadmap § G6). Everything here is a pure function of elapsed
// time and the player's own live position, which every client already has
// locally. Nothing here is fed, remembered, or moved by another player —
// that is explicitly NOT this unit's job.
//
// NO PRNG. Every motion is deterministic off `t` (this module's own
// accumulator, advanced only by `update(dt)`) — there is nothing here for the
// project's "own seeded generator" rule to apply to, because nothing draws
// randomly at all.
//
// ACTORS MUST NOT AFFECT THE CAMERA (Dan's ruling, 2026-08-12). `update()`
// takes the player's position as a plain Vector3-shaped read; it is never
// given the camera and never touches it.
//
// DIRECTION. Per AGENTS.md's project invariants, McGrot's own actor faces
// `(+sin yaw, +cos yaw)` — this game's convention, the OPPOSITE of the
// street's. Pomplé is stationary (no locomotion to derive it from), so the
// convention is applied directly rather than measured off travel: given a
// body yaw and a target world point, the world yaw that faces the target is
// `atan2(dx, dz)` (same formula `actor.js`/`rota.js` already use for their own
// turns), and the head's LOCAL yaw is that minus the body's own fixed yaw.

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { assetUrl } from '../assets.js';
import { liftMap } from './actors/texture.js';
import { toWorld } from './site.js';
import { MCGROT_LOCAL } from './mcgrot.js';

// Matches actors/texture.js's treatment for the rest of the cast — the same
// glb-embedded textures are too dark to light unlifted (docs/STYLE.md), and a
// mismatched treatment would make Pomplé read as lit differently from
// everything else standing on the pitch.
const ALBEDO_MULTIPLY = 0.42;

// Pitch-local (site.js § toWorld). Beside the van, clear of rota.js's two
// approach corridors (APPROACH_LOCAL: x = ±8 at z = 2.1) and the player's
// `counter` anchor (anchors.js: [0, 3.2]) and its camera. Verified by render,
// not just by the numbers — see the landing commit for the capture this was
// judged against.
const POMPLE_LOCAL = [2.6, 1.15];
// Faces roughly back toward the van/counter — the thing a stall dog would be
// facing by default between visitors.
const POMPLE_YAW = Math.PI * 0.92;

// G6b.2 CLOSED THIS: McGrot is now a real figure (`mcgrot.js`), standing at
// the van's serving opening, and `MCGROT_LOCAL` is imported from there rather
// than kept as a second copy of the same placed assumption. One value, one
// place — see mcgrot.js's own header for the position's derivation.

// docs/CANON.md § Pomplé: "small-to-medium, compact and sturdy", "low compact
// shape". A real shoulder-to-ear-tip height for a dog of that description.
const HEIGHT = 0.44;

// Where the head separates from the body, as a fraction of normalised
// (unit-height) mesh space. Picked from the y-band anatomy table
// (`node scripts/glb-anatomy.mjs assets/characters/pomple-form.glb`: the mass
// draws forward and narrows above ~0.85, with the wide shoulder band sitting
// at 0.70-0.75) and confirmed by rendering the built rig from the side and
// three-quarter rear — the cut sits just below the ears with no visible tear
// at the neck in either capture. Not derived from a neck search — see the
// header note above for why the human technique does not transfer.
const Y_SPLIT = 0.74;

// docs/CANON.md: "minimal motion, long stares, tiny head tilts" — so this is
// tuned SLOW and SMALL throughout, deliberately short of what a livelier
// character would get.
const IDLE_BOB_FREQ = 0.35;    // Hz — slow, a breathing/weight-shift rate
const IDLE_BOB_AMP = 0.006;    // m, world scale — barely perceptible up close
const HEAD_TURN_RATE = 1.1;    // rad/s — a long, deliberate turn, not a snap
const MAX_HEAD_YAW = 1.05;     // rad (~60°) — short of a full profile turn
const ATTENTION_ENTER_R = 5.5; // m — player closer than this claims attention
const ATTENTION_EXIT_R = 7.5;  // m — hysteresis band, so proximity right at
                                // the boundary cannot flicker the target

// G7i — the three scripted beats (docs/g7-visit-shape.md § 3 item 5,
// docs/briefs/g7i-pomple-beats.md). The sequencer calls `playBeat(name)`
// fire-and-forget at an authored moment; each beat is a pure function of its
// OWN elapsed time (`bt`, reset every call), never of `t` or a wall clock —
// the visit sequencer is now a pure function of the clock (Dan's ruling,
// 2026-08-17) and a beat that drew from anything else would break that.
// Still NO PRNG, same as the rest of this file: nothing below draws randomly.
const NOTICE_TURN_S = 4.0;      // s — body eases toward the live player pos
const NOTICE_BODY_RATE = 0.6;   // rad/s — slower than HEAD_TURN_RATE (1.1),
                                 // so the whole-body commitment reads as
                                 // heavier/considered, not another head flick
// s — the phase easing bodyYaw back to POMPLE_YAW. Sized against the WORST
// case the turn phase can leave behind (a live target, so the turn phase can
// leave up to its own full reach, NOTICE_TURN_S * NOTICE_BODY_RATE = 2.4 rad,
// unconverged): 2.4 / 0.6 = 4.0s needed, matching the settle fix's lesson —
// too short a release and the forced snap below becomes the visible pop.
const NOTICE_RELEASE_S = 4.0;

// G7n third round (2026-08-17): the fixed local-space target this constant
// used to name (`APPROACH_TARGET_LOCAL = [3.8, 1.8]`, chosen to clear
// McGrot's silhouette from the `kerb` camera — see git history) pointed AWAY
// from McGrot: walking toward it took Pomplé from 2.255m to 3.425m off
// McGrot and 7.793m to 8.017m off the camera at `counter`, the anchor this
// beat now actually fires from and is gated at. A beat named `approach`
// retreated, and neither existing check (pixel diff, travelled-distance
// magnitude) has any notion of sign, so it read green throughout — this is
// the project's own documented trap (AGENTS.md: "Where you can, derive
// direction from travel: walk the actor and watch where it goes"), and the
// kerb-camera-derived target was exactly the "reasoning from a formula" that
// invites it.
//
// FIXED by walking toward McGrot's own live target point (`mcgrotTarget`,
// already computed below for the ambient attention system) instead of a
// second hand-picked local point, and CONFIRMED BY MEASUREMENT, not trusted
// on the formula alone: probing the built scene at `counter` with this
// change, distance to McGrot goes 2.255m -> 0.955m (closes, as `approach`
// should) and the same probe is now the gate's own directional check below.
const APPROACH_DIST = 1.3;      // m — "a few steps"
const APPROACH_SPEED = 0.6;     // m/s — a walk, not a trot
const APPROACH_TURN_RATE = 0.9; // rad/s — faces the travel direction

const SETTLE_TURN_RATE = 0.9;   // rad/s
// s — sized for the WORST case, a full pi-radian reversal (Math.PI /
// SETTLE_TURN_RATE = 3.49s), plus margin: found by measuring, not guessed —
// a first pass at 1.8s ended the beat on a timer before the turn could
// finish, snapping him mid-rotation. update() force-snaps to the exact
// target when this elapses regardless (same pattern `notice` already uses),
// so this constant only controls how much of the turn is EASED before that
// snap; too short and the snap itself becomes the visible pop.
const SETTLE_TURN_S = 3.8;
// FOLLOW-UP, 2026-08-17 (Dan's render): the first pass squashed group.scale.y
// by 30% to fake a lying pose. Rendered and opened at kerb, it did not read
// as lying — "roadkill" was the word for it: a two-part rig with no legs has
// no pose in there for a uniform vertical crush to find, and the dog shape
// disappeared entirely rather than resolving as a smaller dog. SETTLE_SQUASH
// and SETTLE_SQUASH_S are gone; nothing here scales the group any more.
//
// Replaced with a head-drop instead: `pomple:head` is already its own mesh on
// its own joint (splitBody's pivot), and this file already drives its LOCAL
// yaw every frame for the ambient head-turn — pitching it down on the SAME
// joint, independent of the stationary body, is legible in silhouette in a
// way uniform scaling never was. A dog losing interest and looking at the
// ground is the beat; it does not need to lie down.
const SETTLE_HEAD_DROP = 0.6;   // rad (~34°) — nose-down pitch, local to the
                                 // head joint. Picked by rendering a few
                                 // candidates at kerb and reading the
                                 // capture (this file's own established
                                 // method — see Y_SPLIT's header comment for
                                 // the precedent): smaller read as barely
                                 // there, this is the first one where the
                                 // dropped head reads unambiguously against
                                 // the ambient head-turn's own tilts.
const SETTLE_HEAD_RATE = 0.5;   // rad/s — slow, matching the turn's own
                                 // "losing interest" pace

// G7l — the sign (docs/briefs/g7l-pomple-signs.md). Twelve handwritten lines
// exist under the POMPLE key in `generated/mcgrots-dialogue.json` and were
// never rendered anywhere; his `directorNotes` there says the device
// outright: "Pomplé does not speak aloud; render each line as handwritten
// sign text, with the surrounding performance carried by silence." Copied
// VERBATIM here rather than fetched at runtime — that file is not this
// unit's to touch or wire into the build/asset pipeline, and these are
// twelve short fixed strings, already reviewed. If the dialogue corpus is
// ever revised, this array is what to re-copy from.
const SIGN_LINES = [
  { id: 'pomple-01', text: 'CHUM HIM DOON THE WALK YOURSELF.' },
  { id: 'pomple-02', text: 'STOP POINTING AT THE FLATS.' },
  { id: 'pomple-03', text: 'NO LADLE UNTIL SHE HAS A SEAT.' },
  { id: 'pomple-04', text: 'THE QUEUE REMEMBERS WHO WAS KIND.' },
  { id: 'pomple-05', text: 'SIT DOWN.' },
  { id: 'pomple-06', text: 'THE STUDENT WANTED AUTHENTICITY. I GAVE HIM A NAPKIN.' },
  { id: 'pomple-07', text: 'I HAVE HEARD WORSE FROM BETTER DRESSED ANIMALS.' },
  { id: 'pomple-08', text: 'PERSEVERE MEANS SOMETHING DIFFERENT WHEN YOU HAVE PAWS.' },
  { id: 'pomple-09', text: 'A KINDNESS COSTS NOTHING. TRY ONE.' },
  { id: 'pomple-10', text: 'AWRIGHT. NOW MOVE.' },
  { id: 'pomple-11', text: 'THE HAT IS NOT A LICENSE.' },
  { id: 'pomple-12', text: 'THAT IS SHAN, AND YOU KNOW IT.' },
];

// DETERMINISTIC, NEVER RANDOM (the brief, and roadmap § 6 "the persistent
// world is the product"): a pure function of the DAY, not of this module's
// own `t` — `t` restarts at zero every boot, so keying off it would show a
// different sign to two people reading the same dog at the same real
// moment, exactly the desync the brief warns against. Matches the project's
// existing date-keyed convention (`src/day.js`'s `todayKey`, `mcgrotIsIn`).
// No PRNG: a day index modulo twelve, nothing drawn.
const DAY_MS = 86400000;
function pickLineIndex(nowMs) {
  const days = Math.floor(nowMs / DAY_MS);
  return ((days % SIGN_LINES.length) + SIGN_LINES.length) % SIGN_LINES.length;
}

// The board itself — sized, placed and coloured by rendering candidates at
// `counter` and `kerb` and reading the capture (this file's established
// method, see Y_SPLIT's header), not derived from a formula: "legible from a
// pavement" is a judgement a formula cannot make. See the landing commit for
// the numbers this settled on.
const SIGN_WIDTH = 0.85;    // m
const SIGN_HEIGHT = 0.60;   // m
const SIGN_FORWARD = 0.55;  // m ahead of his base position, along POMPLE_YAW
const SIGN_SIDE = 0.70;     // m to the side, perpendicular to POMPLE_YAW —
                             // clears his own on-screen silhouette; see the
                             // header note where this is applied
const SIGN_UP = 0.55;       // m off the ground — roughly held at head height
const SIGN_CANVAS_W = 490;  // matches SIGN_WIDTH:SIGN_HEIGHT (1.4) exactly,
const SIGN_CANVAS_H = 350;  // so the bake is not stretched onto the plane
const SIGN_MARGIN = 34;     // px, canvas space

// RAW sRGB hex throughout (CLAUDE.md / actors/texture.js's own note): a
// THREE.Color would convert these a SECOND time on top of the renderer's own
// sRGB conversion, and the result silhouettes. Values start from van.js's
// own `priceBoardCanvas` palette — proven under this exact scene's lighting,
// not guessed fresh — and are re-picked from a render if that turns out
// insufficient at this board's smaller size and greater viewing distance.
const BOARD_BG = '#2f281f';
const BOARD_BORDER = '#6f6047';
const BOARD_TEXT = '#e6d7ae';

// G7.5e (docs/briefs/g7-5e-pomple-signage.md) — Dan overrode the G7 gate's
// "out of scope" on 2026-08-18 and asked to SEE five ways of carrying the
// sign. His same-day addendum went further: all five ship, and the sign
// CYCLES between them during a visit rather than picking a winner. `SIGN_LINES`
// through `BOARD_TEXT` above stay untouched, and the constants above them
// (SIGN_WIDTH..SIGN_UP) still drive the legacy `default` rig exactly as
// before — reachable only via `?sign=default`, never the live rotation (see
// SIGN_CYCLE_ORDER below, which deliberately does not name it).
//
// SELECTION IS A PURE FUNCTION OF THE WALL CLOCK (or the pinned override —
// same `signClockOverride` the LINE already reads), never this module's own
// `t`: Dan's ruling, matching roadmap § 6 — two clients must see the same
// sign in the same pose at the same moment with nothing synchronised between
// them, the same reason `pickLineIndex` keys off the day rather than `t`.
// NO PRNG, for the same reason this whole file has none: the header above
// already says so.
//
// `?sign=<name>` still forces one variant permanently (how the five
// comparison captures — and any isolated review of one option — are taken).
// With no override the cycle below runs.
const SIGN_VARIANT_NAMES = ['mouth', 'board', 'stake', 'propped', 'collar', 'default'];
const SIGN_FORCED = (() => {
  if (typeof location === 'undefined') return null;
  const v = new URLSearchParams(location.search).get('sign');
  return SIGN_VARIANT_NAMES.includes(v) ? v : null;
})();

// The rotation itself. Order is this unit's own ranking for prominence (see
// docs/g7-5e-pomple-signage.md) — `mouth` first as the strongest "he is
// presenting this to you" read, `collar` last as the quietest. `default` (the
// pre-G7.5e fixed board) is deliberately NOT a cycle member — Dan's five are
// what ships live; the old rig survives only as an explicit `?sign=default`
// for comparison.
//
// Period picked so the cycle turns over "a few times" across the visit
// sequencer's own 600.6s cycle (docs/g7-visit-shape.md) without reading as a
// flicker: 130s -> 4.6 turns per visit. Chosen ALSO so the smoke gate's own
// pinned instant (`PINNED_DAY_MS = 4 * 86400000`, scripts/smoke-mcgrots.mjs)
// lands mid-turn, not mid-transition — 345600000000 % 130000 = 60000ms, well
// past SIGN_TRANSITION_MS below — and specifically on `stake`
// (index (345600000000/130000|0) % 5 === 3): the brief's own most
// robust-to-anchor-framing option, deliberately the one this file's
// determinism puts under the gate's single fixed instant.
const SIGN_CYCLE_ORDER = ['propped', 'stake', 'collar', 'board', 'mouth'];
const SIGN_CYCLE_MS = 130000;
// Crossfade length between two variants — see rigTransform/configureSignSlot
// below for what actually happens during it. 2s: long enough to read as one
// sign being swapped for another (this file's own "long, deliberate" pacing
// throughout — HEAD_TURN_RATE, NOTICE_TURN_S), short enough that four-plus
// turnovers a visit don't spend most of it mid-fade.
const SIGN_TRANSITION_MS = 2000;

// mouth/collar board size, in the SAME metres-per-unit as SIGN_WIDTH/HEIGHT
// above. Both are smaller than the default board: a 0.85m plank crosswise in
// a 0.44m-tall dog's mouth clips the ground and the snout at any head
// deflection — swept 0.85 / 0.60 / 0.45 down to these by rendering `mouth`
// at `counter` with the head at MAX_HEAD_YAW and reading the capture for
// ground/snout clipping (this file's established method, Y_SPLIT's header).
const MOUTH_WIDTH = 0.42;
const MOUTH_HEIGHT = 0.30;
// collar sits smaller again — "a small board", per the brief — and does not
// need mouth's crosswise-grip clearance since it hangs rather than clips.
const COLLAR_WIDTH = 0.30;
const COLLAR_HEIGHT = 0.22;

// Local-space (pre-HEIGHT-scale, i.e. the same normalised mesh space
// `headBB`/`pivot` live in) anchor offsets FROM the head pivot, along the
// head's own local axes — local +z is forward (this file's header: the
// world-forward formula `atan2(dx, dz)` matches local point (0,0,1) rotated
// by yaw, so unrotated local +z is the model's own forward). `headBB.maxZ`
// is the snout tip; MOUTH_FORWARD_FRAC controls how far short of the actual
// tip the board sits (1.0 = at the tip, clipping through it — 0.7 tucks it
// just inside the jaw). Confirmed by render, not assumed: a first pass at
// headBB.minZ (i.e. assuming local −z was forward) rendered the board
// sticking out of the BACK of his skull, not his snout — flipped to maxZ
// after reading that capture.
const MOUTH_FORWARD_FRAC = 0.72;
const MOUTH_UP_FRAC = 0.10;      // small lift off the pivot's own height,
                                   // toward the top of the snout band
// collar: forward like the chin (short of the full snout), and BELOW the
// pivot rather than above it — "hanging from his collar under the chin".
const COLLAR_FORWARD_FRAC = 0.45;
const COLLAR_DOWN = 0.16;         // local units below the pivot
const COLLAR_TILT = 0.25;         // rad (~14°) extra local pitch — hangs
                                    // forward off the collar under gravity,
                                    // rather than standing flush upright

// board (sandwich board over back/shoulders): a fixed offset from the BODY
// group's own local origin (its feet), not the head — recomputed each frame
// off group.position/rotation.y so it stays correct even after `approach`
// permanently shifts his base position (see playBeat's own comment: approach
// does not reset posOffset when it ends). Height picked to sit over the
// shoulder band the header's y-band table calls out (0.70-0.75, i.e. HEIGHT
// * ~0.72m) rather than at head height.
const BOARD_UP = 0.32;      // m, world scale
const BOARD_FORWARD = -0.02; // m — just aft of centre, over the shoulders
const BOARD_WIDTH = 0.60;
const BOARD_HEIGHT = 0.42;

// stake: fixed world-space rig, independent of Pomplé entirely (the brief's
// own case for it: "cheapest and most robust to G8a replacing his mesh").
// Placed to the side, clear of his silhouette and the same corridor/anchor
// clearances POMPLE_LOCAL's own header already worked out.
// SIDE/FORWARD match the default rig's own SIGN_SIDE/SIGN_FORWARD exactly —
// first pass used a wider, further-forward offset (0.95/0.15) and the gate's
// own contrast check (`--only=signs`) failed at `kerb` (Δ0.7 against a
// required >3, where every other anchor cleared 9.5+): that offset pushed
// the board more edge-on to `kerb`'s camera than the default's own already
// camera-tested position. Re-measured against the SAME offset the default
// rig uses (proven to clear kerb, see SIGN_SIDE/SIGN_FORWARD's own header)
// rather than guessed fresh.
const STAKE_SIDE = SIGN_SIDE;
const STAKE_FORWARD = SIGN_FORWARD;
const STAKE_LEAN = 0;     // rad, a slight lean off vertical
const STAKE_POST_H = 0.25;
const STAKE_POST_R = 0.025;  // m, post radius
const STAKE_BASE_H = 0.08;   // m, base block height (driven-in look)

// propped: leaning on the ground at an angle, as if set down. Also a fixed
// world-space rig, independent of the body.
const PROPPED_SIDE = 0.80;
const PROPPED_FORWARD = 0.35;
const PROPPED_TILT = 0.55;   // rad (~31.5°) off vertical — enough to read as
                               // resting, not standing

// Greedy word-wrap against the CURRENT ctx.font, so the caller controls size.
function wrapSignLines(ctx, text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let cur = '';
  for (const w of words) {
    const test = cur ? `${cur} ${w}` : w;
    if (cur && ctx.measureText(test).width > maxWidth) {
      lines.push(cur);
      cur = w;
    } else {
      cur = test;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

// `text === null` bakes the BLANK board: same geometry, same position, same
// material, no lettering — the gate's named control, isolating the
// lettering's own contribution from "there is a light-coloured rectangle in
// shot" (docs/briefs/g7l-pomple-signs.md § The gate).
//
// Font size is searched, not fixed: the twelve lines range from "SIT DOWN."
// to a 9-word sentence, and a fixed size either clips the long ones or
// leaves the short ones tiny. Starts big and shrinks until the wrapped block
// fits, floored so a pathological line degrades to small text rather than an
// infinite loop.
function makeSignTexture(text) {
  const canvas = document.createElement('canvas');
  canvas.width = SIGN_CANVAS_W;
  canvas.height = SIGN_CANVAS_H;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = BOARD_BG;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = BOARD_BORDER;
  ctx.lineWidth = 10;
  ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

  if (text) {
    const maxWidth = canvas.width - SIGN_MARGIN * 2;
    const maxHeight = canvas.height - SIGN_MARGIN * 2;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    let fontSize = 108;
    let lines = [text];
    let lineHeight = fontSize * 1.16;
    while (fontSize >= 18) {
      ctx.font = `bold ${fontSize}px "Courier New", monospace`;
      lines = wrapSignLines(ctx, text, maxWidth);
      lineHeight = fontSize * 1.16;
      // BOTH dimensions, not just height: `wrapSignLines` greedily breaks
      // BETWEEN words, but a single long word ("AUTHENTICITY.") can still be
      // wider than maxWidth on its own — the height check alone let the loop
      // stop at a font size where the block was short enough but individual
      // lines were still clipped off both edges of the board. Measured, not
      // assumed: at fontSize 60 "AUTHENTICITY." alone measures ~470px against
      // a 422px maxWidth and the old loop accepted it because 4 lines fit
      // the height budget.
      const widest = Math.max(...lines.map((l) => ctx.measureText(l).width));
      if (lines.length * lineHeight <= maxHeight && widest <= maxWidth) break;
      fontSize -= 4;
    }
    ctx.fillStyle = BOARD_TEXT;
    const totalHeight = lines.length * lineHeight;
    let y = canvas.height / 2 - totalHeight / 2 + lineHeight / 2;
    for (const line of lines) {
      ctx.fillText(line, canvas.width / 2, y);
      y += lineHeight;
    }
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.name = text ? `pomple-sign:${text.slice(0, 16)}` : 'pomple-sign:blank';
  return tex;
}

const _va = new THREE.Vector3();
const _vb = new THREE.Vector3();

function wrapAngle(a) {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

// Builds the two-mesh rig from a loaded, already-normalised geometry: shared
// attributes, one index buffer per part, a pivot group for the head — the
// same economy `actors/segmented.js` uses, applied to two parts instead of
// six. `pivot` is measured off the ACTUAL vertices straddling the cut, not
// guessed, so the joint sits where the mesh really narrows rather than at a
// hand-picked point that would show as a hinge floating off the geometry.
function splitBody(geo) {
  const posAttr = geo.attributes.position;
  const srcIndex = geo.getIndex();
  const triCount = srcIndex ? srcIndex.count / 3 : posAttr.count / 3;
  const idx = (i) => (srcIndex ? srcIndex.getX(i) : i);

  const headTris = [];
  const bodyTris = [];
  let px = 0, py = 0, pz = 0, pn = 0;
  // Head-only bounding box, in the SAME (geo/group) coordinate frame as
  // `pivot` below — computeBoundingBox() can't be used for this because
  // headGeo/bodyGeo share one 'position' attribute (see buildPomple), so it
  // would report the FULL model's bounds for either part. Walked alongside
  // the existing triangle loop instead of a second pass. Used by the
  // mouth/collar sign variants (G7.5e) to anchor off where the head actually
  // extends rather than a guessed offset.
  let hMinX = Infinity, hMaxX = -Infinity, hMinY = Infinity, hMaxY = -Infinity,
    hMinZ = Infinity, hMaxZ = -Infinity;

  for (let t = 0; t < triCount; t++) {
    const a = idx(t * 3), b = idx(t * 3 + 1), c = idx(t * 3 + 2);
    const y = (posAttr.getY(a) + posAttr.getY(b) + posAttr.getY(c)) / 3;
    if (y > Y_SPLIT) {
      headTris.push(a, b, c);
      for (const v of [a, b, c]) {
        const vx = posAttr.getX(v), vy = posAttr.getY(v), vz = posAttr.getZ(v);
        if (vx < hMinX) hMinX = vx; if (vx > hMaxX) hMaxX = vx;
        if (vy < hMinY) hMinY = vy; if (vy > hMaxY) hMaxY = vy;
        if (vz < hMinZ) hMinZ = vz; if (vz > hMaxZ) hMaxZ = vz;
      }
    } else {
      bodyTris.push(a, b, c);
    }
    // Pivot: the mean position of vertices right at the boundary band, so the
    // head rotates about roughly where the neck actually is rather than about
    // the split plane's centroid (which would sit forward of the real joint,
    // toward wherever the snout happens to bulk the head's own average out).
    for (const v of [a, b, c]) {
      const vy = posAttr.getY(v);
      if (Math.abs(vy - Y_SPLIT) < 0.02) {
        px += posAttr.getX(v); py += vy; pz += posAttr.getZ(v); pn++;
      }
    }
  }

  const pivot = pn > 0
    ? { x: px / pn, y: py / pn, z: pz / pn }
    : { x: 0, y: Y_SPLIT, z: 0 };
  const headBB = { minX: hMinX, maxX: hMaxX, minY: hMinY, maxY: hMaxY, minZ: hMinZ, maxZ: hMaxZ };

  const headGeo = new THREE.BufferGeometry();
  const bodyGeo = new THREE.BufferGeometry();
  for (const key of Object.keys(geo.attributes)) {
    headGeo.setAttribute(key, geo.attributes[key]);
    bodyGeo.setAttribute(key, geo.attributes[key]);
  }
  headGeo.setIndex(headTris);
  bodyGeo.setIndex(bodyTris);

  return { headGeo, bodyGeo, pivot, headBB };
}

export function buildPomple(scene, { assets = null } = {}) {
  const group = new THREE.Group();
  group.name = 'pomple';
  const w = toWorld(POMPLE_LOCAL[0], POMPLE_LOCAL[1]);
  const basePos = { x: w.x, z: w.z };
  group.position.set(basePos.x, 0, basePos.z);
  group.rotation.y = POMPLE_YAW;
  scene.add(group);

  const mcgrotWorld = toWorld(MCGROT_LOCAL[0], MCGROT_LOCAL[1]);
  const mcgrotTarget = new THREE.Vector3(mcgrotWorld.x, 0, mcgrotWorld.z);

  // The sign: a SEPARATE top-level object, not a child of `group`. `signGroup`
  // itself stays at the identity transform forever — every variant sets
  // POSITION AND QUATERNION DIRECTLY ON A MESH, computed fresh each frame by
  // `rigTransform()` below, because the live rig (Dan's 2026-08-18 addendum)
  // needs to swap which variant is showing, mid-visit, without a pop. Two
  // mesh "slots" (A/B) exist permanently as children; only their geometry,
  // texture, transform and opacity change. During a crossfade both slots are
  // live at once (one fading out, one fading in); outside a crossfade one
  // slot carries the current variant at full opacity and the other is
  // hidden. `mouth`/`collar` read the live head joint, `board` reads the
  // live body group (so it still tracks him correctly after `approach`
  // permanently shifts his position), `stake`/`propped` are fixed world
  // rigs independent of him entirely — matching the brief's own case for
  // `stake`: "cheapest and most robust to G8a replacing his mesh".
  const signFwd = { x: Math.sin(POMPLE_YAW), z: Math.cos(POMPLE_YAW) };
  const signRight = { x: signFwd.z, z: -signFwd.x };
  const signGroup = new THREE.Group();
  signGroup.name = 'pomple-sign';
  signGroup.visible = false;   // until built() and beat === null, see update()
  scene.add(signGroup);

  const blankSignTexture = makeSignTexture(null);
  const lineTextures = SIGN_LINES.map((l) => makeSignTexture(l.text));

  // One PlaneGeometry per variant, built once and shared between whichever
  // slot is currently showing it — sizes differ (mouth/collar are smaller
  // than a board he'd carry on his back or plant in the ground; see each
  // constant's own header above for why).
  const SIGN_GEOMS = {
    default: new THREE.PlaneGeometry(SIGN_WIDTH, SIGN_HEIGHT),
    mouth: new THREE.PlaneGeometry(MOUTH_WIDTH, MOUTH_HEIGHT),
    collar: new THREE.PlaneGeometry(COLLAR_WIDTH, COLLAR_HEIGHT),
    board: new THREE.PlaneGeometry(BOARD_WIDTH, BOARD_HEIGHT),
    stake: new THREE.PlaneGeometry(SIGN_WIDTH, SIGN_HEIGHT),
    propped: new THREE.PlaneGeometry(SIGN_WIDTH, SIGN_HEIGHT),
  };

  function makeSignSlot(idx) {
    const mesh = new THREE.Mesh(
      SIGN_GEOMS.default,
      new THREE.MeshLambertMaterial({ map: lineTextures[0], side: THREE.DoubleSide, transparent: true }),
    );
    mesh.name = `pomple-sign-board-${idx}`;
    // NOT added to `signGroup` here — `configureSignSlot` below adds/removes
    // it every frame, deliberately (see that function's own header: a
    // merely-hidden child still pollutes `Box3().setFromObject`, which is
    // what the gate's own `rectOf` helper uses).
    //
    // `stake`'s post + base are SIBLINGS of `signGroup` (added straight to
    // `scene`, own local position/quaternion computed by hand each frame),
    // NOT children of `mesh` or of `signGroup`. A first pass parented them
    // to `mesh` — same add/remove discipline as above, so no stale-box
    // issue — and the gate's own contrast check still went from 0.9-3.1
    // to still-failing deltas of 0.2-5.2 against a written expectation of
    // ~23: `rectOf('pomple-sign')`'s box then spanned board+post+base
    // together, and the post/base's own uniform colour, sampled into the
    // SAME stddev window as the lettering, diluted the letters' own signal.
    // Measured, not reasoned — the fix is keeping them out of `signGroup`'s
    // subtree entirely so the gate's box (and its contrast sampling) stays
    // exactly the board face, matching what the check's own header already
    // assumed for the pre-G7.5e default rig.
    const postMat = new THREE.MeshLambertMaterial({ color: BOARD_BORDER, transparent: true });
    const post = new THREE.Mesh(
      new THREE.CylinderGeometry(STAKE_POST_R, STAKE_POST_R, STAKE_POST_H, 8), postMat,
    );
    post.name = `pomple-sign-post-${idx}`;
    const base = new THREE.Mesh(
      new THREE.BoxGeometry(STAKE_POST_R * 4, STAKE_BASE_H, STAKE_POST_R * 4), postMat,
    );
    base.name = `pomple-sign-base-${idx}`;
    return { mesh, post, base, geomName: 'default' };
  }
  const slotA = makeSignSlot('a');
  const slotB = makeSignSlot('b');
  const _rigPos = new THREE.Vector3();
  const _rigQuat = new THREE.Quaternion();
  const _rigEuler = new THREE.Euler();
  const _rigOffset = new THREE.Vector3();

  // headJoint's local frame at rest (headYaw=0, headPitch=0) shares the
  // group's own axes, so local +z is forward (this file's header) —
  // `headBB` (splitBody's own header) gives the head's real extent along it.
  // Set once, when the head geometry is actually known — see `ready` below.
  let mouthLocal = null;
  let collarLocal = null;

  // Which named rig a slot should show right now, and how much of it
  // (opacity 0..1) — the crossfade math. `name === null` hides the slot.
  function rigTransform(name, outPos, outQuat) {
    if (name === 'stake') {
      outPos.set(
        basePos.x + signFwd.x * STAKE_FORWARD + signRight.x * STAKE_SIDE,
        STAKE_POST_H + SIGN_HEIGHT / 2,
        basePos.z + signFwd.z * STAKE_FORWARD + signRight.z * STAKE_SIDE,
      );
      outQuat.setFromEuler(_rigEuler.set(0, POMPLE_YAW, STAKE_LEAN, 'XYZ'));
    } else if (name === 'propped') {
      // Resting on the ground at PROPPED_TILT off vertical: the board's own
      // bottom edge (SIGN_HEIGHT/2 below its centre) stays ON the ground
      // once tilted, so the centre sits higher by cos(tilt) * halfHeight —
      // otherwise a tilt about the centre buries the lower half in the floor.
      const halfH = SIGN_HEIGHT / 2;
      outPos.set(
        basePos.x + signFwd.x * PROPPED_FORWARD + signRight.x * PROPPED_SIDE,
        halfH * Math.cos(PROPPED_TILT),
        basePos.z + signFwd.z * PROPPED_FORWARD + signRight.z * PROPPED_SIDE,
      );
      outQuat.setFromEuler(_rigEuler.set(PROPPED_TILT, POMPLE_YAW, 0, 'XYZ'));
    } else if (name === 'board') {
      // Tracks the LIVE body — group.position/rotation.y, not basePos/
      // POMPLE_YAW — so it stays correct after `approach` permanently shifts
      // him (playBeat's own comment: posOffset/bodyYaw persist past the
      // beat's end).
      const bfwd = { x: Math.sin(group.rotation.y), z: Math.cos(group.rotation.y) };
      outPos.set(
        group.position.x + bfwd.x * BOARD_FORWARD,
        BOARD_UP,
        group.position.z + bfwd.z * BOARD_FORWARD,
      );
      outQuat.setFromEuler(_rigEuler.set(0, group.rotation.y, 0, 'XYZ'));
    } else if ((name === 'mouth' || name === 'collar') && headJoint) {
      headJoint.updateWorldMatrix(true, false);
      outPos.copy(name === 'mouth' ? mouthLocal : collarLocal).applyMatrix4(headJoint.matrixWorld);
      headJoint.getWorldQuaternion(outQuat);
      if (name === 'collar') {
        outQuat.multiply(new THREE.Quaternion().setFromEuler(_rigEuler.set(COLLAR_TILT, 0, 0, 'XYZ')));
      }
    } else {
      // 'default', or mouth/collar before headJoint exists.
      outPos.set(
        basePos.x + signFwd.x * SIGN_FORWARD + signRight.x * SIGN_SIDE,
        SIGN_UP,
        basePos.z + signFwd.z * SIGN_FORWARD + signRight.z * SIGN_SIDE,
      );
      outQuat.setFromEuler(_rigEuler.set(0, POMPLE_YAW, 0, 'XYZ'));
    }
  }

  function configureSignSlot(slot, name, map, opacity) {
    if (!name || opacity <= 0) {
      // ACTUALLY DETACH, not just `.visible = false`. Box3().setFromObject
      // (the gate's own `rectOf` helper) walks every descendant regardless
      // of its visible flag — this project's own recorded trap (AGENTS.md:
      // "A presence check built on Box3().setFromObject passes on an
      // invisible object", proven twice already). A merely-hidden slot left
      // parented under `signGroup` at a stale position from its last active
      // frame silently inflated the aggregate box and diluted the contrast
      // check's own stddev signal — caught by actually running the gate
      // (`--only=signs`), not by reasoning about it.
      if (slot.mesh.parent) signGroup.remove(slot.mesh);
      if (slot.post.parent) scene.remove(slot.post);
      if (slot.base.parent) scene.remove(slot.base);
      return;
    }
    if (slot.geomName !== name) {
      slot.mesh.geometry = SIGN_GEOMS[name] || SIGN_GEOMS.default;
      slot.geomName = name;
    }
    if (slot.mesh.material.map !== map) {
      slot.mesh.material.map = map;
      slot.mesh.material.needsUpdate = true;
    }
    slot.mesh.material.opacity = opacity;
    if (!slot.mesh.parent) signGroup.add(slot.mesh);
    rigTransform(name, _rigPos, _rigQuat);
    slot.mesh.position.copy(_rigPos);
    slot.mesh.quaternion.copy(_rigQuat);

    // Same add/remove discipline as the mesh itself, and kept OUT of
    // `signGroup`/`mesh`'s own subtree entirely — see makeSignSlot's header
    // for why parenting them to `mesh` diluted the gate's contrast check.
    // World position/quaternion computed by hand from the SAME _rigPos/
    // _rigQuat the board just used, so the post visually sits exactly where
    // a child of the board would have.
    const isStake = name === 'stake';
    if (isStake) {
      if (!slot.post.parent) scene.add(slot.post);
      if (!slot.base.parent) scene.add(slot.base);
      slot.post.quaternion.copy(_rigQuat);
      slot.post.position.copy(_rigPos).add(
        _rigOffset.set(0, -(SIGN_HEIGHT / 2 + STAKE_POST_H / 2), 0).applyQuaternion(_rigQuat),
      );
      slot.base.quaternion.copy(_rigQuat);
      slot.base.position.copy(_rigPos).add(
        _rigOffset.set(0, -(SIGN_HEIGHT / 2 + STAKE_POST_H + STAKE_BASE_H / 2), 0).applyQuaternion(_rigQuat),
      );
      slot.post.material.opacity = opacity;
      slot.base.material.opacity = opacity;
    } else {
      if (slot.post.parent) scene.remove(slot.post);
      if (slot.base.parent) scene.remove(slot.base);
    }
  }

  let signIndex = -1;             // which SIGN_LINES entry is currently baked in
  let signActiveName = 'default'; // which rig the CURRENT (non-fading-out) slot shows
  let signClockOverride = null;   // gate-only pin, mirrors main.js's rotaClockOverride
  let signBlank = false;          // gate-only: forces the blank control texture

  let built = false;
  let bytes = 0;
  let headJoint = null;
  let bodyMesh = null;
  let trackingEnabled = true;
  let attention = 'mcgrot';   // small, readable state machine — see below
  let headYaw = 0;            // current LOCAL head yaw, eased each frame
  let t = 0;                  // this module's own clock; never shared

  // G7i beat state. `bodyYaw` is the group's OWN yaw — ambient code never
  // touched it before this (POMPLE_YAW was a build-time constant); a beat is
  // the only thing that eases it now. `posOffset`/`headPitch` are similarly
  // beat-only and sit at their rest value (0) whenever no beat is running.
  let bodyYaw = POMPLE_YAW;
  const posOffset = { x: 0, z: 0 };
  let headPitch = 0;           // settle-only: LOCAL head-joint pitch, nose
                                // down. Independent of headYaw below, which
                                // ambient tracking keeps driving on the same
                                // joint's Y axis.
  let beat = null;             // active beat name, or null
  let bt = 0;                  // THIS BEAT's own elapsed time, reset per call
  let approachTarget = null;   // {ux, uz, dist, travelled} — captured once
  let settleAwayYaw = 0;       // captured once, at playBeat('settle') time

  const ready = (async () => {
    const gltf = await new GLTFLoader().loadAsync(assetUrl(assets, 'characters/pomple-form.glb'));
    let src = null;
    gltf.scene.traverse((o) => { if (o.isMesh && !src) src = o; });
    if (!src) throw new Error('pomple: no mesh in glb');

    // Same normalisation as every other actor candidate: unit height, centred
    // x/z, feet at 0 — see actors/segmented.js and actors/skinned.js.
    const geo = src.geometry.clone();
    geo.computeBoundingBox();
    const bb = geo.boundingBox;
    const s = 1 / (bb.max.y - bb.min.y || 1);
    geo.translate(-(bb.min.x + bb.max.x) / 2, -bb.min.y, -(bb.min.z + bb.max.z) / 2);
    geo.scale(s, s, s);

    const { headGeo, bodyGeo, pivot, headBB } = splitBody(geo);
    bytes = (geo.attributes.position?.array.byteLength || 0);

    const material = new THREE.MeshLambertMaterial({
      map: liftMap(src.material?.map) || null,
      color: (src.material?.color ? src.material.color.clone() : new THREE.Color(0xffffff))
        .multiplyScalar(ALBEDO_MULTIPLY),
    });

    bodyMesh = new THREE.Mesh(bodyGeo, material);
    bodyMesh.name = 'pomple:body';
    group.add(bodyMesh);

    headJoint = new THREE.Group();
    headJoint.name = 'pomple:head-joint';
    headJoint.position.set(pivot.x, pivot.y, pivot.z);
    const headMesh = new THREE.Mesh(headGeo, material);
    headMesh.name = 'pomple:head';
    headMesh.position.set(-pivot.x, -pivot.y, -pivot.z);
    headJoint.add(headMesh);
    group.add(headJoint);

    // G7.5e's mouth/collar sign anchors, in headJoint-local space (a vertex
    // at geo-space position v renders at headJoint-local v - pivot, same as
    // headMesh's own position offset above) — see rigTransform's own header
    // for the +z-is-forward derivation.
    mouthLocal = new THREE.Vector3(
      0,
      (headBB.maxY - pivot.y) * MOUTH_UP_FRAC,
      (headBB.maxZ - pivot.z) * MOUTH_FORWARD_FRAC,
    );
    collarLocal = new THREE.Vector3(
      0,
      -COLLAR_DOWN,
      (headBB.maxZ - pivot.z) * COLLAR_FORWARD_FRAC,
    );

    group.scale.setScalar(HEIGHT);
    built = true;
  })();

  // The frozen interface (docs/briefs/g7i-pomple-beats.md, docs/briefs/
  // g7h-visit-sequencer.md § 5): the sequencer calls `pomple.playBeat?.(name)`
  // fire-and-forget and moves on — this starts a beat; `update()` plays it out
  // over subsequent frames. A second call before the first beat has finished
  // interrupts it: state is not reset to rest first, so bodyYaw/posOffset/
  // headPitch simply keep easing from wherever they currently sit toward the
  // new beat's own targets — no pop back to a canonical rest pose between beats,
  // which matters because approach and settle are meant to read as one
  // continuous visit (he stays where approach left him; settle turns him away
  // from THERE, not from his original spot).
  function playBeat(name) {
    if (!built) return;
    if (name !== 'notice' && name !== 'approach' && name !== 'settle') return;
    beat = name;
    bt = 0;
    if (name === 'approach') {
      const dx = mcgrotWorld.x - (basePos.x + posOffset.x);
      const dz = mcgrotWorld.z - (basePos.z + posOffset.z);
      const len = Math.hypot(dx, dz) || 1;
      approachTarget = { ux: dx / len, uz: dz / len, dist: APPROACH_DIST, travelled: 0 };
    } else if (name === 'settle') {
      settleAwayYaw = wrapAngle(bodyYaw + Math.PI);
    }
  }

  // Per-client presentation only (roadmap § G6): `playerWorld` is a plain
  // {x,z}-shaped read of the player's own live position, which every client
  // already computes locally — nothing here is relayed, and nothing here is
  // fed the camera.
  function update(dt, playerWorld) {
    if (!built) return;
    t += dt;

    // Idle settle: a slow vertical breathing/weight-shift, independent of
    // attention. Small on purpose (docs/CANON.md: "minimal motion").
    group.position.y = Math.sin(t * IDLE_BOB_FREQ * Math.PI * 2) * IDLE_BOB_AMP;

    // The active beat, if any — drives bodyYaw/posOffset/headPitch only. Runs
    // BEFORE the attention/head-turn block below so the head aims relative to
    // this frame's already-updated body yaw, not last frame's.
    if (beat === 'notice') {
      bt += dt;
      if (bt <= NOTICE_TURN_S) {
        // Same atan2(dx, dz) "world yaw that faces a target" formula the
        // head-aim code below already uses (this file's own header: that is
        // the established, already-correct derivation for this project's
        // convention) — applied to the WHOLE body instead of just the head,
        // which is the "commit the body to it" the brief asks for.
        if (playerWorld) {
          const dx = playerWorld.x - (basePos.x + posOffset.x);
          const dz = playerWorld.z - (basePos.z + posOffset.z);
          if (Math.hypot(dx, dz) > 1e-4) {
            const targetYaw = Math.atan2(dx, dz);
            const d = wrapAngle(targetYaw - bodyYaw);
            bodyYaw += Math.min(Math.abs(d), NOTICE_BODY_RATE * dt) * Math.sign(d);
          }
        }
      } else if (bt <= NOTICE_TURN_S + NOTICE_RELEASE_S) {
        const d = wrapAngle(POMPLE_YAW - bodyYaw);
        bodyYaw += Math.min(Math.abs(d), NOTICE_BODY_RATE * dt) * Math.sign(d);
      } else {
        bodyYaw = POMPLE_YAW;   // snap closed — beat always ends clean
        beat = null;
      }
    } else if (beat === 'approach') {
      bt += dt;
      const remaining = approachTarget.dist - approachTarget.travelled;
      if (remaining > 1e-4) {
        const targetYaw = Math.atan2(approachTarget.ux, approachTarget.uz);
        const d = wrapAngle(targetYaw - bodyYaw);
        bodyYaw += Math.min(Math.abs(d), APPROACH_TURN_RATE * dt) * Math.sign(d);
        const step = Math.min(remaining, APPROACH_SPEED * dt);
        posOffset.x += approachTarget.ux * step;
        posOffset.z += approachTarget.uz * step;
        approachTarget.travelled += step;
      } else {
        beat = null;   // stopped — posOffset/bodyYaw persist, by design
      }
    } else if (beat === 'settle') {
      bt += dt;
      if (bt >= SETTLE_TURN_S) {
        bodyYaw = settleAwayYaw;     // snap closed — same guarantee `notice`
        headPitch = SETTLE_HEAD_DROP; // uses: never left stalled mid-turn
        beat = null;
      } else {
        const dYawB = wrapAngle(settleAwayYaw - bodyYaw);
        bodyYaw += Math.min(Math.abs(dYawB), SETTLE_TURN_RATE * dt) * Math.sign(dYawB);
        const dPitch = SETTLE_HEAD_DROP - headPitch;
        headPitch += Math.min(Math.abs(dPitch), SETTLE_HEAD_RATE * dt) * Math.sign(dPitch);
      }
    }

    group.rotation.y = bodyYaw;
    group.position.x = basePos.x + posOffset.x;
    group.position.z = basePos.z + posOffset.z;

    // The sign's LINE (never its variant) is set here, before the attention
    // block, matching where it always was — visible only at rest (every
    // active beat is its own physical performance with its own read, and the
    // sign fills the SILENCE between them, "386 of the visit's 600 seconds
    // are silence" per this unit's own brief). The VARIANT rig is computed
    // at the end of update(), after headJoint's rotation for THIS frame is
    // final — mouth/collar read it.
    signGroup.visible = beat === null;

    // The attention state machine — two states, one hysteresis band. Bigger
    // than it needs to be would fight docs/CANON.md's "long stares"; this
    // switches only when the player is decisively near or decisively not.
    if (trackingEnabled && playerWorld) {
      _va.set(playerWorld.x, 0, playerWorld.z);
      _vb.copy(group.position); _vb.y = 0;
      const d = _va.distanceTo(_vb);
      if (attention === 'mcgrot' && d < ATTENTION_ENTER_R) attention = 'player';
      else if (attention === 'player' && d > ATTENTION_EXIT_R) attention = 'mcgrot';
    } else {
      attention = 'mcgrot';
    }

    // Suppressed during settle — deliberately, not via the public
    // `trackingEnabled` flag (that flag is the head-turn gate's own named
    // control and settle must not fight a gate driving it independently).
    // With no target, targetLocalYaw stays 0 and headYaw eases back to
    // centred — combined with headPitch above, he recentres AND drops,
    // reading as losing interest rather than still watching while sinking.
    let targetLocalYaw = 0;
    if (trackingEnabled && beat !== 'settle') {
      const target = attention === 'player' && playerWorld
        ? _va.set(playerWorld.x, 0, playerWorld.z)
        : mcgrotTarget;
      const dx = target.x - group.position.x;
      const dz = target.z - group.position.z;
      if (Math.hypot(dx, dz) > 1e-4) {
        const worldYaw = Math.atan2(dx, dz);
        targetLocalYaw = Math.max(-MAX_HEAD_YAW, Math.min(MAX_HEAD_YAW,
          wrapAngle(worldYaw - group.rotation.y)));
      }
    }

    const dYaw = wrapAngle(targetLocalYaw - headYaw);
    headYaw += Math.min(Math.abs(dYaw), HEAD_TURN_RATE * dt) * Math.sign(dYaw);
    if (headJoint) {
      headJoint.rotation.y = headYaw;
      headJoint.rotation.x = headPitch;
    }

    // The sign's LINE and VARIANT — both a pure function of the SAME clock
    // (signClockOverride ?? Date.now()), never `t`; see SIGN_CYCLE_ORDER's
    // own header for why and for the gate-instant reasoning. Read here, at
    // the very end, so mouth/collar's rigTransform sees THIS frame's
    // headJoint rotation rather than last frame's.
    const nowMsForSign = signClockOverride ?? Date.now();
    const wantIndex = pickLineIndex(nowMsForSign);
    const wantedMap = signBlank ? blankSignTexture : lineTextures[wantIndex];
    signIndex = wantIndex;

    let curName, prevName, curOpacity, prevOpacity;
    if (SIGN_FORCED) {
      curName = SIGN_FORCED; prevName = null; curOpacity = 1; prevOpacity = 0;
    } else {
      const n = SIGN_CYCLE_ORDER.length;
      const idx = Math.floor(nowMsForSign / SIGN_CYCLE_MS);
      const phase = nowMsForSign - idx * SIGN_CYCLE_MS;
      curName = SIGN_CYCLE_ORDER[((idx % n) + n) % n];
      if (phase < SIGN_TRANSITION_MS) {
        prevName = SIGN_CYCLE_ORDER[(((idx - 1) % n) + n) % n];
        curOpacity = phase / SIGN_TRANSITION_MS;
        prevOpacity = 1 - curOpacity;
      } else {
        prevName = null; curOpacity = 1; prevOpacity = 0;
      }
    }
    signActiveName = curName;
    configureSignSlot(slotA, curName, wantedMap, curOpacity);
    configureSignSlot(slotB, prevName, wantedMap, prevOpacity);
  }

  // G7i's gate needs to drive playBeat from the running page, but main.js's
  // debug object (the established route every other check in this file uses)
  // is sequencer's (G7h) file and out of scope here — see docs/briefs/
  // g7i-pomple-beats.md's scope section. `scene.getObjectByName('pomple')`
  // already returns this GROUP for every other pomple gate check, so exposing
  // playBeat through its userData (the sanctioned arbitrary-data bag on any
  // three.js object) reaches it without touching main.js at all. This is
  // additive only — the frozen interface itself is the method below, which is
  // what main.js's `pomple.playBeat?.(name)` actually calls.
  group.userData.playBeat = playBeat;
  group.userData.getBeat = () => beat;

  // G7l's gate needs to pin the sign's clock and force the blank control,
  // same reasoning and same route as playBeat above: main.js's `pomple`
  // debug surface is out of this unit's scope, and `pomple-sign` is already
  // reachable via `scene.getObjectByName`, so these ride on ITS userData
  // rather than this group's — a clean split matching the two objects.
  signGroup.userData.setClock = (ms) => { signClockOverride = ms; };
  signGroup.userData.clearClock = () => { signClockOverride = null; };
  signGroup.userData.setBlank = (v) => { signBlank = !!v; };
  signGroup.userData.getIndex = () => signIndex;
  signGroup.userData.getLineId = () => SIGN_LINES[signIndex]?.id ?? null;
  // G7.5e: which rig is CURRENT (the non-fading-out slot) right now —
  // review/debug only, not consulted by any check this unit added.
  signGroup.userData.getVariant = () => signActiveName;

  return {
    group,
    ready,
    update,
    playBeat,
    stats: () => ({ drawCalls: built ? 2 : 0, triangles: 0, bytes }),

    // Debug/gate surface — read-only except `setTracking`, which the head-
    // turn gate uses as its named control (tracking off must hold headYaw at
    // ~0 regardless of where the player stands).
    get headYaw() { return headYaw; },
    get attention() { return attention; },
    setTracking(v) { trackingEnabled = !!v; },
    get tracking() { return trackingEnabled; },
    get beat() { return beat; },
  };
}
