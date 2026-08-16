// McGrot, standing at the pitch — G6b.2.
//
// WHAT THIS UNIT IS NOT: a new body. G1's A1 skinned rig already has a biped
// entry for `mcgrot` (`scripts/rig-glb.mjs`'s BIPEDS,
// `assets/characters/mcgrot-rig.json`), so — unlike Pomplé (`pomple.js`'s own
// header) — there is no bake-off question here: reuse actor.js/actors/
// skinned.js exactly as the player's own body does.
//
// THE ONE THING THIS UNIT ADDS: a beret. docs/CANON.md's measured block
// (G6b.1, 156 comics read across two disjoint halves) found it in 134 of 141
// usable appearances, surviving every costume reskin in the corpus, and found
// that beret-plus-round-head ALONE carries recognition — comic `60ee906a`
// grafts just that head onto six unrelated Star Trek bodies and every one
// still reads as McGrot. The shipped stand-in mesh has neither the beret nor
// the round bald head (it renders with dark hair showing, which the drawings
// never show at all). A new head is G8a's job; a beret over the existing one
// is the cheapest change that moves the needle on what G7 actually judges.
//
// POSITION: `MCGROT_LOCAL`, the exact spot `pomple.js` placed its attention
// target at — the centre of the van's serving opening (`van.js`'s
// `OPENING_CX`, at the opening's own face line, `VAN_DEPTH / 2`). That
// constant was a placed ASSUMPTION with nothing standing there to check it
// against (`pomple.js`'s own header: "One constant to correct the day McGrot
// is a real figure somewhere else"). This module is that figure now, and it
// is the single source — `pomple.js` imports it rather than keeping a copy.
//
// YAW: not measured off travel, because he has none to measure — he never
// walks. Per AGENTS.md's project invariant, this game's own forward
// convention is `(+sin yaw, +cos yaw)`, which is already exactly what
// `site.js`'s `toWorld` bakes into local +Z (`toWorld`'s rotation maps local
// +Z to world `(sin(FACING), cos(FACING))`, and `FACING === PITCH_YAW`). The
// van's own group is rotated by exactly `PITCH_YAW` and its serving opening
// faces local +Z, so `PITCH_YAW` is already the yaw that faces a vendor out
// of that opening toward the pitch — the same number every other object
// standing at this spot uses, not a second derivation of it.
//
// NO LOCOMOTION, NO HEAD-TRACKING. He is a fixed point the visit places a
// camera near, not a second animated cast member — Pomplé already owns the
// per-client attention behaviour (G6a), and duplicating it here is scope the
// next phase would have to re-justify. `actor.snapTo` parks him once;
// `update()` runs every frame only for parity with every other actor in this
// codebase (a static idle pose throughout, since state never leaves 'idle').
//
// DETERMINISM: nothing here draws from a PRNG.

import * as THREE from 'three';
import { toWorld, PITCH_YAW } from './site.js';
import { makeActor } from './actor.js';
import { makeSkinnedBody } from './actors/skinned.js';

export const MCGROT_LOCAL = [0.35, 1.3];

// docs/CANON.md § McGrot: "red/orange-red beret", 134 of 141 appearances.
// Picked warm and fully saturated on paper, then RENDERED under the scene's
// actual lighting and re-picked — ACES plus this scene's exposure (site.js
// `LIGHT.exposure`) reads a plain material colour noticeably darker and less
// saturated than the hex suggests (the same effect CLAUDE.md's ACES gotcha
// records for procedural tones). Landed value, not the first guess: see the
// landing commit for the render this was judged against.
const BERET_COLOUR = 0xa22c16;

// Measured off the actual mesh (`node` probe against the live normalised
// geometry `actors/skinned.js` builds, archetype `mcgrot` — the same
// normalisation `rig-glb.mjs` used to author the rig, so the numbers agree):
// the `head` bone sits at unit-mesh y=0.86 (`mcgrot-rig.json`'s `neckY`), and
// every vertex above that band spans y 0.861-1.000, x -0.079..0.080,
// z -0.085..0.105 — a real head, chin to crown, roughly centred with a
// slight forward lean (the beard/nose pushing +z). The beret sits ON that,
// not guessed independently: values below are relative to the `head` bone's
// own origin (0, 0, 0 in its local frame) in the SAME unit-mesh scale, before
// `actor.js`'s ×1.72 height scale is applied to the whole hierarchy.
const CROWN_RADIUS = 0.12;     // a little proud of the measured half-width
                                // (0.08-0.095), so it sits ON the head rather
                                // than sunk into it
const CROWN_FLATTEN = 0.56;    // squashes the sphere into a beret's puff
                                // rather than a ball
const CROWN_THETA = 2.05;      // rad — a bit past the equator (pi/2), so the
                                // shape has a small overhanging lip at its
                                // base rather than ending on a bare rim
const CROWN_Y = 0.10;          // local y: puts the lip roughly at the
                                // brow/hairline (~0.86+0.075 absolute) and
                                // the crown a shade above the measured head
                                // top (~1.0), the way a beret actually sits
const CROWN_Z = 0.015;         // slight forward bias, matching the head's
                                // own (measured before the beret was
                                // designed, so not fitted to it)

function buildBeret() {
  const geo = new THREE.SphereGeometry(CROWN_RADIUS, 12, 8, 0, Math.PI * 2, 0, CROWN_THETA);
  geo.scale(1, CROWN_FLATTEN, 1);
  geo.translate(0, CROWN_Y, CROWN_Z);
  const mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: BERET_COLOUR, flatShading: true }));
  mesh.name = 'mcgrot:beret';
  return mesh;
}

export function buildMcgrot(scene, { assets = null } = {}) {
  const body = makeSkinnedBody({ assets, archetype: 'mcgrot' });
  const actor = makeActor({ body });
  actor.group.name = 'mcgrot';
  scene.add(actor.group);

  const w = toWorld(MCGROT_LOCAL[0], MCGROT_LOCAL[1]);
  actor.snapTo(w.x, w.z, PITCH_YAW);

  // Parented to the head joint once the rig exists, so it moves with him —
  // there is nothing to move yet (no locomotion, no head-turn), but the next
  // phase that adds either gets the beret for free rather than having to
  // re-attach it.
  actor.ready.then(() => {
    let mesh = null;
    actor.group.traverse((o) => { if (o.isSkinnedMesh) mesh = o; });
    if (!mesh) return;
    const head = mesh.skeleton.bones.find((b) => b.name === 'head');
    if (!head) return;
    head.add(buildBeret());
  }).catch(() => {
    // A second consumer of the same failure `main.js` already reports
    // (`await mcgrot.ready` below) — swallowed here only so this derived
    // chain does not ALSO surface as its own separate unhandled rejection.
  });

  return {
    group: actor.group,
    // `main.js` awaits this before `looks.install(...)` — the same reason
    // it awaits the player's own `actor.ready` first. `looks.js` traverses
    // the scene ONCE, at install, and never again (its own header: "a prop
    // added in G3 inherits the right behaviour" only holds for a prop that
    // EXISTS by then); an actor built fire-and-forget, the way Pomplé's is,
    // is invisible to it and stays a plain, un-inked Lambert material under
    // every look forever. Measured directly (traversing the live scene after
    // boot and reading each mesh's `material.type`): true of Pomplé's own
    // body today, and would have been true of this one too without this
    // await. Fixing Pomplé's copy of the same gap is not this unit's scope —
    // see mcgrot.js's own header — so it is named here rather than folded in.
    ready: actor.ready,
    update(dt) { actor.update(dt); },
    stats: () => actor.stats(),
  };
}
