// Candidate A3: hinged cut-out flats. G1.
//
// Six quads sampling one atlas, hinged in the same hierarchy A2 uses and
// billboarded to the camera. Terry Gilliam, not Pixar.
//
// WHY IT IS A FAIR COMPARISON. The sprites are baked from A2's own part split
// (scripts/render-flats.mjs), so A2 and A3 differ ONLY in whether a limb is
// geometry or a billboard. Giving A3 its own segmentation would have compared
// two part splits as much as two rendering approaches.
//
// WHY IT WORKS HERE AT ALL. The staging model is fixed cameras and anchored
// spots — the player never orbits a figure, so a flat never has to survive
// being walked around. That is the whole reason this candidate is admissible
// in this game and would be absurd in the street.
//
// THE FLIP. A side-on sprite has a facing, so the body mirrors on X when the
// actor turns through the camera axis. That mirror is why the billboard lives
// on an INNER group: makeActor scales the outer group to set height, and a
// candidate writing scale.x on the same object would fight it.

import * as THREE from 'three';
import { assetUrl } from '../../assets.js';
import { countStats } from '../actor.js';

const PARTS = ['torso', 'head', 'armL', 'armR', 'legL', 'legR'];

// Same gait as A2, deliberately. If the candidates swung differently the strip
// would be comparing animation curves rather than the thing under test.
const STRIDE = 0.72;
const LEG_SWING = 0.55;
const ARM_SWING = 0.38;
const TORSO_SWAY = 0.05;
const BOB = 0.018;

// Cut-outs are unlit by nature, so they arrive brighter than a scene graded to
// sit dark (docs/STYLE.md). This tints them back down without reintroducing
// shading, which would defeat the point of a flat.
const FLAT_TINT = 0.72;

export function makeFlatsBody({ assets, archetype = 'rab' }) {
  const group = new THREE.Group();
  group.name = `body:flats:${archetype}`;
  const billboard = new THREE.Group();      // rotated and mirrored; NOT scaled
  billboard.name = 'billboard';
  group.add(billboard);

  const joints = {};
  let built = false;
  let bytes = 0;

  const ready = (async () => {
    const [meta, texture] = await Promise.all([
      fetch(assetUrl(assets, `characters/${archetype}-flats.json`)).then((r) => {
        if (!r.ok) throw new Error(`flats json ${r.status}`);
        return r.json();
      }),
      new THREE.TextureLoader().loadAsync(assetUrl(assets, `characters/${archetype}-flats.png`)),
    ]);

    texture.colorSpace = THREE.SRGBColorSpace;
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    bytes = meta.cell * meta.cols * meta.cell * meta.rows;   // atlas pixels, for the cost table

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      alphaTest: 0.5,
      side: THREE.DoubleSide,
      color: new THREE.Color(FLAT_TINT, FLAT_TINT, FLAT_TINT),
      depthWrite: true,
    });

    const makePart = (name, parent, parentPivot) => {
      const cell = meta.cells[name];
      if (!cell || !cell.present) return null;

      const geo = new THREE.PlaneGeometry(1, 1);
      // Point the quad's UVs at this part's cell of the atlas.
      const u0 = cell.col / meta.cols, v0 = 1 - (cell.row + 1) / meta.rows;
      const du = 1 / meta.cols, dv = 1 / meta.rows;
      const uv = geo.attributes.uv;
      for (let i = 0; i < uv.count; i++) {
        uv.setXY(i, u0 + uv.getX(i) * du, v0 + uv.getY(i) * dv);
      }
      uv.needsUpdate = true;

      // Cell pivot arrives normalised 0..1; the quad spans x -0.5..0.5, y 0..1.
      const px = cell.pivot[0] - 0.5;
      const py = cell.pivot[1];

      const g = new THREE.Group();
      g.name = `joint:${name}`;
      g.position.set(px - parentPivot[0], py - parentPivot[1], 0);
      const mesh = new THREE.Mesh(geo, material);
      mesh.position.set(-px, 0.5 - py, 0);
      // A hair of Z separation per part, so coincident quads do not z-fight.
      // Ordering is deliberate: legs behind the coat, head and arms in front.
      mesh.position.z = { legL: -0.004, legR: -0.002, torso: 0, armR: 0.002, head: 0.004, armL: 0.006 }[name] ?? 0;
      g.add(mesh);
      parent.add(g);
      joints[name] = { group: g, mesh, pivot: [px, py] };
      return g;
    };

    const torsoCell = meta.cells.torso;
    const torsoPivot = torsoCell ? [torsoCell.pivot[0] - 0.5, torsoCell.pivot[1]] : [0, 0];
    const torso = makePart('torso', billboard, [0, 0]);
    if (torso) {
      makePart('head', torso, torsoPivot);
      makePart('armL', torso, torsoPivot);
      makePart('armR', torso, torsoPivot);
    }
    makePart('legL', billboard, [0, 0]);
    makePart('legR', billboard, [0, 0]);

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

      // A flat hinges about Z, not X. A sprite rotated about X turns edge-on
      // and vanishes — the one place the two candidates' pose code genuinely
      // cannot be identical, and the reason a cut-out walk reads as a scissor
      // rather than a stride.
      if (joints.legL) joints.legL.group.rotation.z = -(swing * LEG_SWING * (1 - sit) + sitSplay);
      if (joints.legR) joints.legR.group.rotation.z = -(counter * LEG_SWING * (1 - sit) + sitSplay);
      if (joints.armL) joints.armL.group.rotation.z = -counter * ARM_SWING;
      if (joints.armR) joints.armR.group.rotation.z = -swing * ARM_SWING;
      if (joints.torso) joints.torso.group.rotation.z = walking ? Math.sin(t * 2) * TORSO_SWAY : 0;

      group.position.y = (walking ? Math.abs(Math.sin(t)) * BOB : 0) - sit * 0.26;
    },

    // A head-turn is a rotation out of the sprite plane, which a flat cannot
    // do. It leans instead. G1 should judge this honestly rather than let the
    // lean pass for a turn — G6 makes Pomplé's head-turn load-bearing, and if
    // a cut-out cannot express one that is a real mark against the candidate.
    lookAt(yaw) {
      if (joints.head) joints.head.group.rotation.z = -yaw * 0.35;
    },

    // Called by makeActor when present. Keeps the sprite square to the camera
    // and mirrors it so the figure faces its direction of travel.
    faceCamera(camera, actorGroup) {
      if (!built) return;
      const dx = camera.position.x - actorGroup.position.x;
      const dz = camera.position.z - actorGroup.position.z;
      const camYaw = Math.atan2(dx, dz);
      billboard.rotation.y = camYaw - actorGroup.rotation.y;

      // Which side of the actor's facing the camera sits on decides the mirror.
      const fx = Math.sin(actorGroup.rotation.y), fz = Math.cos(actorGroup.rotation.y);
      billboard.scale.x = (fx * dz - fz * dx) >= 0 ? 1 : -1;
    },

    stats: () => countStats(group, bytes),
  };
}
