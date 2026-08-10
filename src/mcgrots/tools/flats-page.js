// Offline sprite baker for candidate A3. A BUILD TOOL, not game code.
//
// Bundled to src/mcgrots-flats-bundle.js and driven by
// scripts/render-flats.mjs through Playwright. It lives in a browser because
// that is where a WebGL renderer and a GLTFLoader already are — baking sprites
// in node would mean a second, differently-behaving renderer, and a sprite
// that does not match the mesh it came from is worse than no sprite.
//
// It reuses makeSegmentedBody deliberately. A3 and A2 then differ ONLY in
// whether a limb is geometry or a billboard, which is the thing the bake-off
// is supposed to isolate. Giving A3 its own part split would compare two
// segmentations as much as two rendering approaches.
//
// Each part is rendered side-on into its own cell of one atlas, with every
// cell covering the SAME world box (x/z in [-0.5, 0.5], y in [0, 1]). Cells
// therefore align by construction, so assembly needs no packing maths: a part
// quad is the full figure rect with only that limb painted in it.

import * as THREE from 'three';
import { makeSegmentedBody } from '../actors/segmented.js';

const CELL = 256;
const COLS = 3, ROWS = 2;
const PARTS = ['torso', 'head', 'armL', 'armR', 'legL', 'legR'];

window.__bakeFlats = async function bakeFlats(archetype) {
  const body = makeSegmentedBody({ assets: null, archetype });
  await body.ready;

  // Unlit, so the sprite carries albedo and not a baked-in key light. A
  // cut-out is lit by the scene it is dropped into, or not at all — baking
  // shading in would fight whatever grade G2 chooses.
  const flatMats = new Map();
  body.group.traverse((o) => {
    if (!o.isMesh) return;
    flatMats.set(o, o.material);
    o.material = new THREE.MeshBasicMaterial({
      map: o.material.map || null,
      color: o.material.map ? 0xffffff : 0xb2a68a,
      transparent: true,
      alphaTest: 0.5,
      side: THREE.DoubleSide,
    });
  });

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setSize(CELL, CELL, false);
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  // Side-on orthographic view covering exactly the unit figure box.
  const cam = new THREE.OrthographicCamera(-0.5, 0.5, 1.0, 0.0, 0.01, 10);
  cam.position.set(3, 0, 0);
  cam.lookAt(0, 0, 0);
  cam.updateMatrixWorld();
  cam.updateProjectionMatrix();

  const scene = new THREE.Scene();
  scene.add(body.group);
  body.group.scale.setScalar(1);
  body.group.position.set(0, 0, 0);

  const atlas = document.createElement('canvas');
  atlas.width = COLS * CELL;
  atlas.height = ROWS * CELL;
  const ctx = atlas.getContext('2d');

  // Hide every joint, then reveal one at a time. Rendering the whole figure and
  // cropping would bake neighbouring limbs into each sprite.
  const joints = [];
  body.group.traverse((o) => { if (o.name?.startsWith('joint:')) joints.push(o); });
  const meshes = [];
  body.group.traverse((o) => { if (o.isMesh) meshes.push(o); });

  const cells = {};
  for (let i = 0; i < PARTS.length; i++) {
    const part = PARTS[i];
    const joint = joints.find((j) => j.name === `joint:${part}`);
    for (const m of meshes) m.visible = false;
    // The joint's OWN mesh only — a direct child, never a traverse. head, armL
    // and armR are CHILDREN of joint:torso in the hierarchy, so traversing
    // torso revealed all three with it and baked a whole upper body into the
    // torso cell. Every part after it then overlapped in the assembled figure.
    if (joint) for (const c of joint.children) if (c.isMesh) c.visible = true;

    renderer.render(scene, cam);
    const col = i % COLS, row = Math.floor(i / COLS);
    ctx.drawImage(renderer.domElement, col * CELL, row * CELL);

    // Pivot in cell-normalised coordinates, obtained by projecting through the
    // SAME camera rather than by reasoning about which way "side-on" puts the
    // z axis. Sign errors in that reasoning are silent and look like a limb
    // hinged at the wrong end.
    let pivot = [0, 0];
    if (joint) {
      const world = new THREE.Vector3();
      joint.getWorldPosition(world);
      const ndc = world.clone().project(cam);
      pivot = [(ndc.x + 1) / 2, (ndc.y + 1) / 2];   // 0..1 within the cell
    }
    cells[part] = { col, row, pivot, present: !!joint };
  }

  for (const m of meshes) m.visible = true;
  for (const [mesh, mat] of flatMats) mesh.material = mat;

  return {
    archetype,
    cell: CELL, cols: COLS, rows: ROWS,
    cells,
    png: atlas.toDataURL('image/png'),
  };
};

window.__flatsReady = true;
