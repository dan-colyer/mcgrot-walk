// Candidate A2: the mesh cut into parts, animated by rotation. G1.
//
// No skinning. `scripts/segment-glb.mjs` decides offline which triangle
// belongs to which of six parts and writes a sidecar; this builds a transform
// hierarchy from it and rotates the joints.
//
// THE CHEAP TRICK, and it is the reason this candidate is plausible at all:
// every part SHARES the original glb's position, normal and uv buffers and
// differs only in its index buffer. Segmentation therefore costs six small
// index arrays and duplicates no vertex data. Rotation about a joint comes
// from placing the part's group AT the pivot and its mesh at minus the pivot,
// so no position is ever rewritten either.
//
// WHAT THE ANATOMY MEASUREMENT BOUGHT. The cast wears heavy coats
// (docs/CANON.md), and `scripts/glb-anatomy.mjs` confirmed the geometry
// matches: two separable legs at ankle height, fused into a single ring by a
// third of the way up. So only the lower legs swing. Everything above the hem
// is one mass that sways, which is both cheaper and more correct than
// articulating a spine that is wearing a dockside coat.

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { assetUrl } from '../../assets.js';
import { countStats } from '../actor.js';

const PARTS = ['torso', 'head', 'armL', 'armR', 'legL', 'legR'];

// Gait constants. Metres per full stride, and the swing amplitudes. A stride
// of 0.72 m at 1.35 m/s is a little under two steps a second, which is a walk
// rather than a march.
const STRIDE = 0.72;
const LEG_SWING = 0.55;      // radians
const ARM_SWING = 0.38;
const TORSO_SWAY = 0.05;
const BOB = 0.018;           // vertical, in unit-height units

// Matches src/characters.js normalise()'s treatment so a figure here carries
// the same look as the street's crowd: tint far darker than looks right,
// because ACES lifts any mid multiply straight back to showroom-bright.
const ALBEDO_MULTIPLY = 0.42;

export function makeSegmentedBody({ assets, archetype = 'rab' }) {
  const group = new THREE.Group();
  group.name = `body:segmented:${archetype}`;

  const joints = {};           // part name -> { group, mesh }
  let built = false;
  let bytes = 0;

  const ready = (async () => {
    const [gltf, seg] = await Promise.all([
      new GLTFLoader().loadAsync(assetUrl(assets, `characters/${archetype}-form.glb`)),
      fetch(assetUrl(assets, `characters/${archetype}-segments.json`)).then((r) => {
        if (!r.ok) throw new Error(`segments ${r.status}`);
        return r.json();
      }),
    ]);

    // The glbs are single primitives — one mesh, one material, one texture.
    let src = null;
    gltf.scene.traverse((o) => { if (o.isMesh && !src) src = o; });
    if (!src) throw new Error(`${archetype}: no mesh in glb`);

    const srcGeo = src.geometry;
    const material = new THREE.MeshLambertMaterial({
      map: src.material?.map || null,
      color: (src.material?.color ? src.material.color.clone() : new THREE.Color(0xffffff))
        .multiplyScalar(ALBEDO_MULTIPLY),
    });

    // Normalise the SHARED geometry once: unit height, centred x/z, feet at 0.
    // scripts/segment-glb.mjs assigned parts in exactly this frame, so the
    // pivots in the sidecar only mean anything if this matches it.
    const geo = srcGeo.clone();
    geo.computeBoundingBox();
    const bb = geo.boundingBox;
    const s = 1 / (bb.max.y - bb.min.y || 1);
    geo.translate(-(bb.min.x + bb.max.x) / 2, -bb.min.y, -(bb.min.z + bb.max.z) / 2);
    geo.scale(s, s, s);

    const srcIndex = geo.getIndex();
    const triCount = srcIndex ? srcIndex.count / 3 : geo.attributes.position.count / 3;
    const triPart = Uint8Array.from(atob(seg.triPart), (c) => c.charCodeAt(0));
    if (triPart.length !== triCount) {
      throw new Error(`${archetype}: sidecar has ${triPart.length} triangles, mesh has ${triCount}`);
    }
    bytes = triPart.length;

    // One index buffer per part, over the shared attributes.
    const buckets = PARTS.map(() => []);
    for (let t = 0; t < triCount; t++) {
      const b = buckets[triPart[t]];
      if (!b) continue;
      if (srcIndex) b.push(srcIndex.getX(t * 3), srcIndex.getX(t * 3 + 1), srcIndex.getX(t * 3 + 2));
      else b.push(t * 3, t * 3 + 1, t * 3 + 2);
    }

    const pivotOf = (name) => {
      const p = seg.parts.find((q) => q.name === name);
      return p ? p.pivot : [0, 0, 0];
    };

    const makePart = (name, parentGroup, parentPivot) => {
      const tris = buckets[PARTS.indexOf(name)];
      if (!tris || !tris.length) return null;
      const partGeo = new THREE.BufferGeometry();
      // SHARED attributes — this is the whole economy of the approach.
      for (const key of Object.keys(geo.attributes)) partGeo.setAttribute(key, geo.attributes[key]);
      partGeo.setIndex(tris);

      const pivot = pivotOf(name);
      const g = new THREE.Group();
      g.name = `joint:${name}`;
      g.position.set(pivot[0] - parentPivot[0], pivot[1] - parentPivot[1], pivot[2] - parentPivot[2]);
      const mesh = new THREE.Mesh(partGeo, material);
      mesh.position.set(-pivot[0], -pivot[1], -pivot[2]);
      g.add(mesh);
      parentGroup.add(g);
      joints[name] = { group: g, mesh, pivot };
      return g;
    };

    if (seg.quadruped) {
      // Pomplé is one rigid part by design — segmenting a dog as a biped
      // produces nonsense. G6 gives him his own treatment.
      makePart('torso', group, [0, 0, 0]);
    } else {
      const torsoPivot = pivotOf('torso');
      const torso = makePart('torso', group, [0, 0, 0]);
      if (torso) {
        makePart('head', torso, torsoPivot);
        makePart('armL', torso, torsoPivot);
        makePart('armR', torso, torsoPivot);
      }
      // Legs hang off the ROOT, not the torso: a swaying coat must not swing
      // the feet with it.
      makePart('legL', group, [0, 0, 0]);
      makePart('legR', group, [0, 0, 0]);
    }

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
      sit += (want - sit) * Math.min(1, dt * 6);   // ease, so sitting is not a snap

      const walking = state === 'walk';
      const swing = walking ? Math.sin(t) : 0;
      const counter = walking ? Math.sin(t + Math.PI) : 0;

      // SITTING DOES NOT FOLD THE LEG, and the first attempt that did was
      // wrong in a way only the capture showed. Rotating the leg forward by
      // 1.35 rad about the virtual hip swung the boots out horizontally at
      // waist height — a rigid segment has no knee, so it cannot fold. There
      // is no thigh geometry to bend at either: everything above the hem is
      // coat.
      //
      // The honest pose for this cast is the one a person in a heavy coat
      // actually makes on a low wall — body drops, legs hang near-vertical,
      // the coat does the rest. No knee required, because none is visible.
      const sitSplay = sit * 0.14;
      if (joints.legL) joints.legL.group.rotation.x = swing * LEG_SWING * (1 - sit) + sitSplay;
      if (joints.legR) joints.legR.group.rotation.x = counter * LEG_SWING * (1 - sit) + sitSplay;
      if (joints.armL) joints.armL.group.rotation.x = counter * ARM_SWING;
      if (joints.armR) joints.armR.group.rotation.x = swing * ARM_SWING;

      if (joints.torso) {
        // Sway is at twice stride frequency — the body rolls once per STEP,
        // not once per stride, and getting that wrong reads as a limp.
        joints.torso.group.rotation.z = walking ? Math.sin(t * 2) * TORSO_SWAY : 0;
        joints.torso.group.rotation.x = sit * 0.22;
      }

      // The bob is at step frequency too, and is why a walk reads as weight
      // rather than as a slide. Idle deliberately has none in G1: adding an
      // idle sway here would flatter this candidate against the control, which
      // has none either.
      group.position.y = (walking ? Math.abs(Math.sin(t)) * BOB : 0) - sit * 0.26;
    },

    lookAt(yaw) {
      if (joints.head) joints.head.group.rotation.y = yaw;
    },

    stats: () => countStats(group, bytes),
  };
}
