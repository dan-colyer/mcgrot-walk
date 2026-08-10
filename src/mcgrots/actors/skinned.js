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

      if (bones.legL) bones.legL.rotation.x = swing * LEG_SWING * (1 - sit) + sitSplay;
      if (bones.legR) bones.legR.rotation.x = counter * LEG_SWING * (1 - sit) + sitSplay;
      if (bones.armL) bones.armL.rotation.x = counter * ARM_SWING;
      if (bones.armR) bones.armR.rotation.x = swing * ARM_SWING;
      if (bones.spine) {
        bones.spine.rotation.z = walking ? Math.sin(t * 2) * TORSO_SWAY : 0;
        bones.spine.rotation.x = sit * 0.22;
      }

      group.position.y = (walking ? Math.abs(Math.sin(t)) * BOB : 0) - sit * 0.26;
    },

    lookAt(yaw) {
      if (bones.head) bones.head.rotation.y = yaw;
    },

    stats: () => countStats(group, bytes),
  };
}
