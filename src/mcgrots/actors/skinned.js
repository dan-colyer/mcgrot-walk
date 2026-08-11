// Candidate A1: a skinned mesh on an auto-placed skeleton. G1.
//
// The high-risk arm. scripts/rig-glb.mjs places seven bones by measurement and
// weights every vertex to its two nearest bone segments; this builds a
// THREE.SkinnedMesh from that and drives the same gait the other candidates
// use.
//
// WHAT IT IS UP AGAINST. Auto-skinning by distance-to-bone is the crude end of
// the technique, and these are Trellis reconstructions — lumpy, watertight-ish,
// with no edge loops at the joints. Where a coat hem passes near a leg bone,
// vertices on the far side of a fold can bind to the wrong limb and the mesh
// tears when it swings.
//
// AND WHAT IT WOULD BUY IF IT WORKED. Smooth deformation of a garment that,
// per the anatomy measurement, barely deforms — the cast is in heavy coats and
// the geometry above the hem is a single mass. So this candidate carries the
// highest risk for the least obvious payoff, which is exactly why the roadmap
// time-boxes it and why it is still built rather than argued away.

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { assetUrl } from '../../assets.js';
import { countStats } from '../actor.js';

const STRIDE = 0.72;
const LEG_SWING = 0.55;
const ARM_SWING = 0.38;
const TORSO_SWAY = 0.05;
const BOB = 0.018;
const ALBEDO_MULTIPLY = 0.42;
// How far the hip drops when seated, in unit-figure units. DERIVED, not
// picked: with the thigh horizontal and the shin vertical, the foot sits one
// shin-length below the hip. Shin runs KNEE_Y(0.24) to 0, so the hip must land
// at 0.24 for the boots to stay ON THE GROUND — a drop of 0.46 - 0.24 = 0.22.
//
// The first value here was 0.26, which put the hip at 0.20 and sank the figure
// through the very ledge it was meant to be perched on. Sitting is the posture
// this whole game is about, so it is worth getting from the numbers rather
// than from the eye.
const SEAT_DROP = 0.22;

export function makeSkinnedBody({ assets, archetype = 'rab' }) {
  const group = new THREE.Group();
  group.name = `body:skinned:${archetype}`;

  const bones = {};
  let built = false;
  let bytes = 0;

  const ready = (async () => {
    const [gltf, rig] = await Promise.all([
      new GLTFLoader().loadAsync(assetUrl(assets, `characters/${archetype}-form.glb`)),
      fetch(assetUrl(assets, `characters/${archetype}-rig.json`)).then((r) => {
        if (!r.ok) throw new Error(`rig ${r.status}`);
        return r.json();
      }),
    ]);

    let src = null;
    gltf.scene.traverse((o) => { if (o.isMesh && !src) src = o; });
    if (!src) throw new Error(`${archetype}: no mesh in glb`);

    const geo = src.geometry.clone();
    geo.computeBoundingBox();
    const bb = geo.boundingBox;
    const s = 1 / (bb.max.y - bb.min.y || 1);
    geo.translate(-(bb.min.x + bb.max.x) / 2, -bb.min.y, -(bb.min.z + bb.max.z) / 2);
    geo.scale(s, s, s);

    const vcount = geo.attributes.position.count;
    if (vcount !== rig.vertexCount) {
      throw new Error(`${archetype}: rig has ${rig.vertexCount} vertices, mesh has ${vcount}`);
    }
    const si = Uint8Array.from(atob(rig.skinIndex), (c) => c.charCodeAt(0));
    const sw = Uint8Array.from(atob(rig.skinWeight), (c) => c.charCodeAt(0));
    bytes = si.length + sw.length;

    geo.setAttribute('skinIndex', new THREE.BufferAttribute(si, 4));
    // Normalised, so the byte-quantised weights read back as 0..1.
    geo.setAttribute('skinWeight', new THREE.BufferAttribute(sw, 4, true));

    // Bones are authored with ABSOLUTE rest positions; three.js wants each
    // bone positioned relative to its parent.
    const list = rig.bones.map((b) => {
      const bone = new THREE.Bone();
      bone.name = b.name;
      return bone;
    });
    rig.bones.forEach((b, i) => {
      const p = b.head;
      if (b.parent < 0) {
        list[i].position.set(p[0], p[1], p[2]);
        group.add(list[i]);
      } else {
        const q = rig.bones[b.parent].head;
        list[i].position.set(p[0] - q[0], p[1] - q[1], p[2] - q[2]);
        list[b.parent].add(list[i]);
      }
      bones[b.name] = list[i];
    });

    const skeleton = new THREE.Skeleton(list);
    const material = new THREE.MeshLambertMaterial({
      map: src.material?.map || null,
      color: (src.material?.color ? src.material.color.clone() : new THREE.Color(0xffffff))
        .multiplyScalar(ALBEDO_MULTIPLY),
    });

    const mesh = new THREE.SkinnedMesh(geo, material);
    mesh.name = 'skinned';
    // The mesh must not inherit the bones' transform, or every pose is applied
    // twice — once through the skeleton and once through the parent chain.
    mesh.add(list[0]);
    mesh.bind(skeleton);
    group.add(mesh);

    built = true;
  })();

  let sit = 0;

  return {
    group,
    ready,

    pose(state, phase, dt) {
      if (!built) return;
      const t = (phase / STRIDE) * Math.PI * 2;
      const want = state === 'sit' ? 1 : 0;
      sit += (want - sit) * Math.min(1, dt * 6);

      const walking = state === 'walk';
      const swing = walking ? Math.sin(t) : 0;
      const counter = walking ? Math.sin(t + Math.PI) : 0;
      const sitSplay = sit * 0.14;

      // THE KNEE IS WHAT MAKES SITTING WORK. Thigh swings forward to roughly
      // horizontal, shin drops back to vertical beneath it — the shape a person
      // makes on a low wall. Without the second joint the leg can only hang and
      // the pose reads as a crouch, which is what G1 showed on all three
      // candidates before A1 gained this bone.
      //
      // SEAT_DROP is the height of the thing being sat on. It has to agree with
      // the ledge at the sitting anchors (src/mcgrots/anchors.js) or the figure
      // hovers over it or sinks into it.
      const thigh = sit * (Math.PI / 2) * 0.80;
      const shin = -sit * (Math.PI / 2) * 0.74;
      // While walking, the shin trails the thigh slightly — a straight leg
      // swinging from the hip is the stiff-legged march the strips showed.
      const shinTrail = walking ? -Math.max(0, Math.sin(t)) * 0.30 : 0;

      if (bones.thighL) bones.thighL.rotation.x = swing * LEG_SWING * (1 - sit) + sitSplay + thigh;
      if (bones.thighR) bones.thighR.rotation.x = counter * LEG_SWING * (1 - sit) + sitSplay + thigh;
      if (bones.shinL) bones.shinL.rotation.x = shin + shinTrail * (1 - sit);
      if (bones.shinR) bones.shinR.rotation.x = shin + (walking ? -Math.max(0, Math.sin(t + Math.PI)) * 0.30 : 0) * (1 - sit);
      if (bones.armL) bones.armL.rotation.x = counter * ARM_SWING * (1 - sit);
      if (bones.armR) bones.armR.rotation.x = swing * ARM_SWING * (1 - sit);
      if (bones.spine) {
        bones.spine.rotation.z = walking ? Math.sin(t * 2) * TORSO_SWAY : 0;
        bones.spine.rotation.x = sit * 0.10;
      }

      group.position.y = (walking ? Math.abs(Math.sin(t)) * BOB : 0) - sit * SEAT_DROP;
    },

    lookAt(yaw) {
      if (bones.head) bones.head.rotation.y = yaw;
    },

    stats: () => countStats(group, bytes),
  };
}
