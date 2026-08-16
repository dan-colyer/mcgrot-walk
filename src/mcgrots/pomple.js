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

// McGrot has no standing figure yet — G4 built the rota's placeholder reader,
// not McGrot himself, and van.js's own header lists "the McGrot/Pomplé
// figures" as G4/G6's job, still open. This is a placed ASSUMPTION, not a
// measurement: the centre of the van's serving opening (van.js's
// `OPENING_CX`), at the opening's own face line (`VAN_DEPTH / 2`). One
// constant to correct the day McGrot is a real figure somewhere else.
const MCGROT_LOCAL = [0.35, 1.3];

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

  for (let t = 0; t < triCount; t++) {
    const a = idx(t * 3), b = idx(t * 3 + 1), c = idx(t * 3 + 2);
    const y = (posAttr.getY(a) + posAttr.getY(b) + posAttr.getY(c)) / 3;
    if (y > Y_SPLIT) {
      headTris.push(a, b, c);
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

  const headGeo = new THREE.BufferGeometry();
  const bodyGeo = new THREE.BufferGeometry();
  for (const key of Object.keys(geo.attributes)) {
    headGeo.setAttribute(key, geo.attributes[key]);
    bodyGeo.setAttribute(key, geo.attributes[key]);
  }
  headGeo.setIndex(headTris);
  bodyGeo.setIndex(bodyTris);

  return { headGeo, bodyGeo, pivot };
}

export function buildPomple(scene, { assets = null } = {}) {
  const group = new THREE.Group();
  group.name = 'pomple';
  const w = toWorld(POMPLE_LOCAL[0], POMPLE_LOCAL[1]);
  group.position.set(w.x, 0, w.z);
  group.rotation.y = POMPLE_YAW;
  scene.add(group);

  const mcgrotWorld = toWorld(MCGROT_LOCAL[0], MCGROT_LOCAL[1]);
  const mcgrotTarget = new THREE.Vector3(mcgrotWorld.x, 0, mcgrotWorld.z);

  let built = false;
  let bytes = 0;
  let headJoint = null;
  let bodyMesh = null;
  let trackingEnabled = true;
  let attention = 'mcgrot';   // small, readable state machine — see below
  let headYaw = 0;            // current LOCAL head yaw, eased each frame
  let t = 0;                  // this module's own clock; never shared

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

    const { headGeo, bodyGeo, pivot } = splitBody(geo);
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

    group.scale.setScalar(HEIGHT);
    built = true;
  })();

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

    let targetLocalYaw = 0;
    if (trackingEnabled) {
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
    if (headJoint) headJoint.rotation.y = headYaw;
  }

  return {
    group,
    ready,
    update,
    stats: () => ({ drawCalls: built ? 2 : 0, triangles: 0, bytes }),

    // Debug/gate surface — read-only except `setTracking`, which the head-
    // turn gate uses as its named control (tracking off must hold headYaw at
    // ~0 regardless of where the player stands).
    get headYaw() { return headYaw; },
    get attention() { return attention; },
    setTracking(v) { trackingEnabled = !!v; },
    get tracking() { return trackingEnabled; },
  };
}
