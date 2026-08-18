// G3a — the van, the price board and the ground. The subject every one of
// the five composed shots is pointed at, replacing the blockout box that has
// stood in for it since G0.
//
// STYLE IS SETTLED: S2 · Aerial flatten (Dan, 2026-08-12, against the
// regenerated review sheets). Nothing here is tuned against a different look
// — colours are picked dark per docs/STYLE.md's rule that the SCENE supplies
// the darkness, not the asset, same as every other authored material in this
// project.
//
// REUSED FROM `src/gullet.js` (the paused street's van, read but not
// imported — a shared-module dependency across the two games is a coupling
// neither wants): the shell-not-a-box construction (six panels around a real
// serving opening, not a solid box with a painted hatch — E10a.1 found that a
// solid box put the figure who should stand at the hatch entirely inside it),
// the interior liner (kills the bright far-panel-through-the-opening look),
// the opening's sill/top numbers (chest height on a 1.72 m figure), the
// canon palette (`docs/CANON.md` § McGrot: soot black, dirty cream, rust
// brown, congealed mustard), and the price-board canvas-texture technique.
// NOT reused: `world.collision` registration (this game has no collision
// system — anchored-spot staging means the player never free-roams into the
// van), the McGrot/Pomplé figures and `mcgrotIsIn()` day logic (G4/G6's
// job, not this unit's), the leaned hoarding board and shut-sign (optional
// flavour, cut for scope) and the hoarding's own PRNG jitter pattern (kept,
// but reseeded — see below).
//
// THE PRNG RULE (project invariant, CLAUDE.md and AGENTS.md both state it):
// never add or reorder a draw in an EXISTING sequence. This module has its
// own generator, seeded independently of every other module's, so the sauce
// bottles' jitter can never shift a draw anything else depends on.

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { toWorld, PITCH_YAW } from './site.js';

// Reused verbatim from gullet.js — proven proportions, not re-derived. The
// van sits at pitch-local (0, 0) facing local +Z (site.js, anchors.js), the
// same convention gullet.js used for chainage-local +x/+z.
const VAN_LENGTH = 4.4;
const VAN_DEPTH = 2.6;
const VAN_BODY_H = 2.05;
const CHASSIS_H = 0.62;
const WHEEL_R = 0.42;

const OPENING_W = 2.2;
const OPENING_CX = 0.35;
const OPENING_SILL = CHASSIS_H + 0.52;
const OPENING_TOP = CHASSIS_H + 1.80;

// docs/CANON.md § McGrot: soot black, dirty cream, rust brown, congealed
// mustard, dark red — same four hex values gullet.js uses, so a player who
// has seen the street's stall (or will, if it ever ships) recognises this as
// the same van rather than a different vehicle wearing the same name.
const SOOT = 0x1e1c19;
const CREAM = 0x5d5445;
const RUST = 0x4a2a1c;
const MUSTARD = 0x6d5218;
const DARK_RED = 0x4a1d1a;

// Ground dressing, this unit's own palette — darker than the road so the
// road reads as the darkest surface (tarmac), the kerb as a lighter accent
// line, and the pavement lighter again (worn slab grey), matching how a real
// junction actually differentiates its surfaces.
const KERB = 0x6b6558;
const PAVEMENT = 0x413c33;
const PAVEMENT_JOINT = 0x342f28;
const OIL_STAIN = 0x14120e;

// Own seed, never scenery's/gullet's/npcs.js's — the project invariant.
// Different literal from gullet.js's 0x6d0117 on purpose: two modules
// sharing a seed value would draw the same sequence, which is a coincidence
// waiting to be mistaken for a bug the day one of them adds a draw.
const rand = (() => {
  let s = 0x9a3c0e; // "van" note left for anyone grepping for the seed
  return () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
})();

// G7o — the valance (docs/briefs/g7o-van-valance.md,
// docs/MCGROTS-ROADMAP.md § 10 F24). McGrot stands at road level inside the
// van's plan footprint, so his legs occupy the same space as the van's
// underside; the valance CONCEALS that overlap, it does not resolve it — the
// ground planes stay wrong underneath. Ships ON. Same lever shape main.js
// already uses for `VISIT_ON`/`AMBIENCE_ON` (a `?valance=off` query param or
// `window.__mcgrotsForceValance = false`) rather than the street's
// `src/flags.js`: that helper is for the street's own modules, and van.js's
// own header already declines a cross-project import for exactly this
// reason. Read once, at module load, matching where the other two levers are
// read in main.js.
const VALANCE_ON = new URLSearchParams(location.search).get('valance') !== 'off'
  && window.__mcgrotsForceValance !== false;

// The one call main.js makes. Returns a handle rather than nothing, in the
// same shape gullet.js's buildGullet() does, so a later unit (or a gate) can
// reach the pieces without re-querying the scene graph by name.
export function buildVan(scene) {
  const w = toWorld(0, 0);

  const group = new THREE.Group();
  group.name = 'van';
  group.position.set(w.x, 0, w.z);
  group.rotation.y = PITCH_YAW;
  scene.add(group);

  buildBody(group);
  buildCounter(group);
  const board = buildPriceBoard(group);
  const ground = buildGround(scene, w);

  return { group, board, ground };
}

// ---------------------------------------------------------------------------
// The van body. Six-panel shell around a real opening, a liner, a cab, an
// awning, wheels — copied from gullet.js's buildVan()/buildCounter(), with
// the day-agnostic parts (McGrot, Pomplé, the shut sign, the hoarding board)
// left out.
// ---------------------------------------------------------------------------

function buildBody(group) {
  const shell = [];
  const trim = [];

  const T = 0.08;
  const yFloor = CHASSIS_H;
  const yRoof = CHASSIS_H + VAN_BODY_H;
  const panel = (w, h, d, x, y, z) => {
    const g = new THREE.BoxGeometry(w, h, d);
    g.translate(x, y, z);
    shell.push(g);
  };
  panel(VAN_LENGTH, VAN_BODY_H, T, 0, CHASSIS_H + VAN_BODY_H * 0.5, -VAN_DEPTH * 0.5 + T * 0.5); // back
  panel(T, VAN_BODY_H, VAN_DEPTH, -VAN_LENGTH * 0.5 + T * 0.5, CHASSIS_H + VAN_BODY_H * 0.5, 0);  // ends
  panel(T, VAN_BODY_H, VAN_DEPTH, VAN_LENGTH * 0.5 - T * 0.5, CHASSIS_H + VAN_BODY_H * 0.5, 0);
  panel(VAN_LENGTH, T, VAN_DEPTH, 0, yRoof - T * 0.5, 0);   // roof
  panel(VAN_LENGTH, T, VAN_DEPTH, 0, yFloor + T * 0.5, 0);  // floor

  // Road-facing side, in four pieces around the serving opening.
  const openMinX = OPENING_CX - OPENING_W * 0.5;
  const openMaxX = OPENING_CX + OPENING_W * 0.5;
  const zFront = VAN_DEPTH * 0.5 - T * 0.5;
  panel(openMinX + VAN_LENGTH * 0.5, VAN_BODY_H, T, (-VAN_LENGTH * 0.5 + openMinX) * 0.5, CHASSIS_H + VAN_BODY_H * 0.5, zFront);
  panel(VAN_LENGTH * 0.5 - openMaxX, VAN_BODY_H, T, (openMaxX + VAN_LENGTH * 0.5) * 0.5, CHASSIS_H + VAN_BODY_H * 0.5, zFront);
  panel(OPENING_W, OPENING_SILL - yFloor, T, OPENING_CX, (yFloor + OPENING_SILL) * 0.5, zFront);
  panel(OPENING_W, yRoof - OPENING_TOP, T, OPENING_CX, (OPENING_TOP + yRoof) * 0.5, zFront);

  // Interior liner — kills the bright far-panel-through-the-opening look.
  const LI = 0.03;
  const liner = (w, h, d, x, y, z) => {
    const g = new THREE.BoxGeometry(w, h, d);
    g.translate(x, y, z);
    trim.push(g);
  };
  const inW = VAN_LENGTH - T * 2;
  const inH = VAN_BODY_H - T * 2;
  liner(inW, inH, LI, 0, CHASSIS_H + VAN_BODY_H * 0.5, -VAN_DEPTH * 0.5 + T + LI * 0.5);
  liner(LI, inH, VAN_DEPTH - T * 2, -VAN_LENGTH * 0.5 + T + LI * 0.5, CHASSIS_H + VAN_BODY_H * 0.5, 0);
  liner(LI, inH, VAN_DEPTH - T * 2, VAN_LENGTH * 0.5 - T - LI * 0.5, CHASSIS_H + VAN_BODY_H * 0.5, 0);
  liner(inW, LI, VAN_DEPTH - T * 2, 0, yRoof - T - LI * 0.5, 0);
  liner(inW, LI, VAN_DEPTH - T * 2, 0, yFloor + T + LI * 0.5, 0);

  // Cab, off the local -x end.
  const cab = new THREE.BoxGeometry(1.5, VAN_BODY_H * 0.72, VAN_DEPTH * 0.94);
  cab.translate(-VAN_LENGTH * 0.5 - 0.72, CHASSIS_H + VAN_BODY_H * 0.36, 0);
  shell.push(cab);

  // The opening's dark reveal frame.
  for (const [w, h, x, y] of [
    [OPENING_W + 0.12, 0.07, OPENING_CX, OPENING_SILL],
    [OPENING_W + 0.12, 0.07, OPENING_CX, OPENING_TOP],
    [0.07, OPENING_TOP - OPENING_SILL, openMinX, (OPENING_SILL + OPENING_TOP) * 0.5],
    [0.07, OPENING_TOP - OPENING_SILL, openMaxX, (OPENING_SILL + OPENING_TOP) * 0.5],
  ]) {
    const g = new THREE.BoxGeometry(w, h, 0.1);
    g.translate(x, y, VAN_DEPTH * 0.5 - 0.02);
    trim.push(g);
  }

  const awning = new THREE.BoxGeometry(2.5, 0.05, 0.95);
  awning.rotateX(-0.34);
  awning.translate(0.15, CHASSIS_H + 1.95, VAN_DEPTH * 0.5 + 0.42);

  for (const s of [-1, 1]) {
    const stay = new THREE.BoxGeometry(0.04, 0.04, 0.95);
    stay.rotateX(-0.34);
    stay.translate(0.15 + s * 1.18, CHASSIS_H + 1.95, VAN_DEPTH * 0.5 + 0.42);
    trim.push(stay);
  }

  // Soot skirt: the lower third, darker, so the van does not read as one flat
  // value from across the pitch.
  for (const face of [1, -1]) {
    const skirt = new THREE.BoxGeometry(VAN_LENGTH * 0.998, 0.34, 0.05);
    skirt.translate(0, CHASSIS_H + 0.17, face * (VAN_DEPTH * 0.5 + 0.01));
    trim.push(skirt);
  }
  for (const end of [1, -1]) {
    const skirt = new THREE.BoxGeometry(0.05, 0.34, VAN_DEPTH * 0.998);
    skirt.translate(end * (VAN_LENGTH * 0.5 + 0.01), CHASSIS_H + 0.17, 0);
    trim.push(skirt);
  }

  const wheels = [];
  for (const along of [-VAN_LENGTH * 0.34, VAN_LENGTH * 0.34]) {
    for (const across of [-VAN_DEPTH * 0.42, VAN_DEPTH * 0.42]) {
      const wg = new THREE.CylinderGeometry(WHEEL_R, WHEEL_R, 0.26, 10);
      wg.rotateZ(Math.PI / 2);
      wg.translate(along, WHEEL_R, across);
      wheels.push(wg);
    }
  }

  addMerged(group, shell, CREAM, 'van-body');
  addMerged(group, trim, SOOT, 'van-trim');
  addMerged(group, wheels, SOOT, 'van-wheels');
  addMerged(group, [awning], MUSTARD, 'van-awning');

  // The valance itself: same 4-face loop as the soot skirt above (front,
  // back, both ends), lower and taller — from just off the ground up into
  // the floor slab, filling what the wheels (0.02–0.82) do not. SOOT, not
  // CREAM: it reads as undercarriage, matching the trim and wheels it sits
  // beside, rather than as a second body panel.
  const valanceBottom = 0.02;
  const valanceTop = CHASSIS_H + 0.02; // laps into the floor slab, no hairline gap
  const valanceH = valanceTop - valanceBottom;
  const valanceY = (valanceBottom + valanceTop) * 0.5;
  const valance = [];
  for (const face of [1, -1]) {
    const v = new THREE.BoxGeometry(VAN_LENGTH * 0.998, valanceH, 0.05);
    v.translate(0, valanceY, face * (VAN_DEPTH * 0.5 + 0.01));
    valance.push(v);
  }
  for (const end of [1, -1]) {
    const v = new THREE.BoxGeometry(0.05, valanceH, VAN_DEPTH * 0.998);
    v.translate(end * (VAN_LENGTH * 0.5 + 0.01), valanceY, 0);
    valance.push(v);
  }
  const valanceMesh = addMerged(group, valance, SOOT, 'van-valance');
  if (valanceMesh) valanceMesh.visible = VALANCE_ON;
}

function buildCounter(group) {
  const parts = [];
  const props = [];

  const shelf = new THREE.BoxGeometry(2.5, 0.07, 0.42);
  shelf.translate(OPENING_CX, OPENING_SILL - 0.02, VAN_DEPTH * 0.5 + 0.19);
  parts.push(shelf);

  for (let i = 0; i < 5; i++) {
    const h = 0.2 + rand() * 0.09;
    const b = new THREE.CylinderGeometry(0.045, 0.055, h, 6);
    b.translate(OPENING_CX - 1.05 + i * 0.5 + (rand() - 0.5) * 0.12, OPENING_SILL + 0.02 + h * 0.5, VAN_DEPTH * 0.5 + 0.17 + (rand() - 0.5) * 0.06);
    props.push(b);
  }

  addMerged(group, parts, RUST, 'van-counter');
  addMerged(group, props, DARK_RED, 'van-props');
}

// ---------------------------------------------------------------------------
// The price board. Text is authored here, not lifted from gullet.js's board
// — a price board is not a comic, so it is not bound by the verbatim rule,
// but it is McGrot's own hand-lettering and stays in the same register:
// short, blunt, hand-priced, one dry line.
// ---------------------------------------------------------------------------

function buildPriceBoard(group) {
  const tex = new THREE.CanvasTexture(priceBoardCanvas());
  tex.colorSpace = THREE.SRGBColorSpace;
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(1.15, 0.86),
    new THREE.MeshLambertMaterial({ map: tex }),
  );
  mesh.name = 'van-price-board';
  // Stood proud of the body by more than the tilt sinks it — gullet.js's own
  // recorded fix for a board that rendered with its prices sheared off.
  mesh.position.set(-1.4, CHASSIS_H + 1.34, VAN_DEPTH * 0.5 + 0.13);
  mesh.rotation.y = 0.12;
  group.add(mesh);
  return mesh;
}

function priceBoardCanvas() {
  const canvas = document.createElement('canvas');
  canvas.width = 320;
  canvas.height = 240;
  const ctx = canvas.getContext('2d');

  // RAW sRGB hex, not a THREE.Color — a colour-managed canvas would convert
  // this a second time on top of the renderer's own conversion (CLAUDE.md).
  ctx.fillStyle = '#3a3226';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#6f6047';
  ctx.lineWidth = 5;
  ctx.strokeRect(7, 7, canvas.width - 14, canvas.height - 14);

  ctx.textAlign = 'center';
  ctx.fillStyle = '#c9b787';
  ctx.font = 'bold 38px "Courier New", monospace';
  ctx.fillText('THE GULLET', canvas.width / 2, 52);

  ctx.font = '24px "Courier New", monospace';
  ctx.textAlign = 'left';
  const lines = [
    ['ROLL', '1.10'],
    ["McGROT'S OWN", '1.60'],
    ['TATTIE SOUP', '90p'],
    ['WHIT WE HAVE', 'ASK'],
  ];
  lines.forEach(([what, price], i) => {
    const y = 98 + i * 32;
    ctx.fillStyle = '#b9a87c';
    ctx.fillText(what, 26, y);
    ctx.textAlign = 'right';
    ctx.fillText(price, canvas.width - 26, y);
    ctx.textAlign = 'left';
  });

  ctx.font = 'italic 18px "Courier New", monospace';
  ctx.fillStyle = '#8e7f5d';
  ctx.fillText('PRICES CORRECT AS OF WHENEVER I WROTE THIS.', 24, 224);

  return canvas;
}

// ---------------------------------------------------------------------------
// The ground. `foot.js`'s 600x600 plane is the raycast target for click-to-
// walk and stays untouched — this adds a dressed layer on top of it, in
// pitch-local space via the same `toWorld` every other module uses.
//
// SIZED TO STAY UNINKED. `looks.js`'s S1/S2 outline is deliberately withheld
// from anything whose bounding sphere exceeds 12 m (INK_MAX_RADIUS) — ground
// and sky carry no line in the corpus, objects do. A compact kerb patch would
// read as a boxed rectangle sitting on the tarmac, which is exactly the
// "surroundings drawn as an object" mistake that rule exists to avoid. So the
// pavement slab spans wide enough on its own (16 m local) that its bounding
// sphere clears the threshold by construction, the same way the street's
// 600 m ground plane always has.
// ---------------------------------------------------------------------------

// Local +z: 0 is the van's own face-line, negative is the road behind it,
// positive is where every anchor stands (anchors.js: z = 3.2..11.5). The
// kerb sits between the two — van half-parked off the road, same as any real
// pitch on a corner like this.
const KERB_Z = 1.35;
const KERB_H = 0.12;
const PAVEMENT_HALF_X = 8;
const PAVEMENT_Z0 = KERB_Z;
const PAVEMENT_Z1 = 14; // past `far`'s anchor (11.5) with room to spare

function buildGround(scene, vanWorld) {
  const group = new THREE.Group();
  group.name = 'ground-dressing';
  group.position.set(vanWorld.x, 0, vanWorld.z);
  group.rotation.y = PITCH_YAW;
  scene.add(group);

  // Kerb: a raised strip the width of the pitch, running across local x.
  const kerb = new THREE.BoxGeometry(PAVEMENT_HALF_X * 2, KERB_H, 0.16);
  kerb.translate(0, KERB_H / 2, KERB_Z);
  addMerged(group, [kerb], KERB, 'ground-kerb');

  // Pavement slab, raised by the kerb height so its front edge is a real
  // step rather than a colour change in the same plane — z-fighting with
  // foot.js's ground plane at y=0 would flicker under S2's depth ramp.
  const pavement = new THREE.PlaneGeometry(PAVEMENT_HALF_X * 2, PAVEMENT_Z1 - PAVEMENT_Z0);
  pavement.rotateX(-Math.PI / 2);
  pavement.translate(0, KERB_H, (PAVEMENT_Z0 + PAVEMENT_Z1) / 2);
  addMerged(group, [pavement], PAVEMENT, 'ground-pavement');

  // Slab joints: a handful of dark seam lines across the pavement, seeded
  // from this module's own generator, so the slab does not read as one flat
  // painted rectangle. Positions only — nothing here feeds back into layout.
  const joints = [];
  const jointCount = 6;
  for (let i = 0; i < jointCount; i++) {
    const z = PAVEMENT_Z0 + ((i + 0.5) / jointCount) * (PAVEMENT_Z1 - PAVEMENT_Z0) + (rand() - 0.5) * 0.3;
    const joint = new THREE.BoxGeometry(PAVEMENT_HALF_X * 2, 0.01, 0.04);
    joint.translate(0, KERB_H + 0.006, z);
    joints.push(joint);
  }
  addMerged(group, joints, PAVEMENT_JOINT, 'ground-joints');

  // Oil stain under the van's serving side — the one ground detail that is
  // an OBJECT rather than surroundings (a compact, irregular patch, not a
  // surface), so it is deliberately left small enough to be inkable like
  // anything else standing on the pitch.
  const stain = new THREE.CircleGeometry(0.9, 10);
  stain.rotateX(-Math.PI / 2);
  stain.translate(OPENING_CX, 0.015, VAN_DEPTH * 0.5 + 0.6);
  addMerged(group, [stain], OIL_STAIN, 'ground-stain');

  return group;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function addMerged(group, geos, hex, name) {
  if (!geos.length) return undefined;
  const mesh = new THREE.Mesh(
    mergeGeometries(geos, false),
    new THREE.MeshLambertMaterial({ color: hex, flatShading: true }),
  );
  mesh.name = name;
  group.add(mesh);
  return mesh;
}
