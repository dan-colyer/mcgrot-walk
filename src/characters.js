// E8d — generated character meshes, standing next to the paper-dolls they are
// candidates to replace.
//
// This is the SPIKE harness, not the character system. It loads whatever glbs
// are in assets/characters/ and stands one beside a chosen vendor, so a single
// capture frames the box-doll and the mesh in the same light, at the same
// scale, under the same grade. Judging two renders taken minutes apart is how
// you convince yourself of anything; judging them side by side in one frame is
// how you find out.
//
// LANDED OFF. `CHARACTERS_ENABLED` is false, exactly as ANCHORS_ENABLED was,
// so the scene is byte-identical until the flag is flipped deliberately and
// the draw-call baselines are recaptured as a deliberate change. Nothing here
// runs in a default build.
//
// The load path is `src/cars.js`'s, deliberately and almost line for line: the
// wrecked vehicles already prove async GLTFLoader -> normalise scale -> re-
// material to Lambert -> seeded placement works in this scene and survives the
// single-file build. A second, cleverer path would be a second thing to debug.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { assetUrl } from './assets.js';

export const CHARACTERS_ENABLED = false;

// Measured, not guessed: the existing vendors' bounding boxes run 1.83–2.01m
// (four sampled via `npm run probe`). They are deliberately oversized — these
// are grotesques, not people. A generated mesh normalised to a realistic 1.75m
// would read as a child standing next to them, so the target is the cast's own
// height rather than a human one.
const TARGET_HEIGHT = 1.9;

// Each entry stands beside the vendor at `beside` (an index into npcs.npcs),
// offset along the street so both are in frame together. Populated as meshes
// are generated; an absent file is skipped without complaint, so a partial
// set is a valid state during the spike.
const CHARACTER_MESHES = [
  { file: 'characters/rab-form.glb', beside: 0, offset: 1.3 },
];

export function buildCharacters(assets, world, scene, npcs) {
  if (!CHARACTERS_ENABLED) return { group: null, loaded: 0 };
  const list = npcs && Array.isArray(npcs.npcs) ? npcs.npcs : [];
  if (!list.length) return { group: null, loaded: 0 };

  const group = new THREE.Group();
  group.name = 'characters';
  scene.add(group);

  const loader = new GLTFLoader();
  let loaded = 0;

  for (const spec of CHARACTER_MESHES) {
    const npc = list[spec.beside];
    if (!npc) continue;
    loader
      .loadAsync(assetUrl(assets, spec.file))
      .then((gltf) => {
        const mesh = prep(gltf.scene);
        // Sit it beside the vendor, facing the same way. The offset is applied
        // in the vendor's own rotated frame so "beside" means beside as the
        // player sees it, whichever way down the Walk this one happens to face.
        const yaw = npc.baseY;
        mesh.position.set(
          npc.group.position.x + Math.cos(yaw) * spec.offset,
          npc.group.position.y,
          npc.group.position.z - Math.sin(yaw) * spec.offset,
        );
        mesh.rotation.y = yaw;
        group.add(mesh);
        loaded++;
      })
      .catch(() => null); // assets absent (single-file artifact) — same as cars.js
  }

  return { group, loaded: () => loaded };
}

// Normalise HEIGHT (cars normalise length; a person's defining dimension is how
// tall they are), drop the mesh onto its own feet, and convert materials to
// Lambert.
//
// The material swap is not an optimisation here, it is the whole style bet.
// Trellis bakes lighting into the texture it generates — the input image's
// soft frontal key is painted into the albedo — and MeshStandardMaterial would
// then light that already-lit texture again under ACES at exposure 1.46. The
// same double-lighting failure docs/STYLE.md records for canvas bakes. Lambert
// with a tint multiply is what every other prop in this scene uses, and it is
// what lets the street's own light and preset `b` do the work.
function prep(root) {
  const box = new THREE.Box3().setFromObject(root);
  const size = box.getSize(new THREE.Vector3());
  const scale = TARGET_HEIGHT / (size.y || 1);
  root.scale.setScalar(scale);
  root.updateMatrixWorld(true);
  const grounded = new THREE.Box3().setFromObject(root);
  root.position.y = -grounded.min.y;

  root.traverse((o) => {
    if (!o.isMesh || !o.material) return;
    const src = o.material;
    o.material = new THREE.MeshLambertMaterial({
      map: src.map || null,
      // Tint far darker than looks right: ACES lifts any mid multiply straight
      // back to showroom-bright, which is the note cars.js carries too.
      color: (src.color ? src.color.clone() : new THREE.Color(0xffffff)).multiplyScalar(0.42),
    });
  });

  const wrapper = new THREE.Group();
  wrapper.add(root);
  return wrapper;
}
