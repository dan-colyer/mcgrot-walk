// The Gullet — McGrot's pitch, standing on the Walk every day.
//
// E10a.1. A rogue food van at a FIXED chainage, dressed from the canon row
// (`docs/CANON.md` § McGrot): hoarding, ladle, sauce bottles, a hand-lettered
// price board. It is the fixed point the date-seeded parts of E10a vary
// around — McGrot is at it on some days and shut on others, and Pomplé is
// posted beside it either way. Neither of those is in this unit; this is the
// stall alone, behind `__mcgrotForceGullet`.
//
// WHERE IT STANDS, AND WHY IT IS A CONSTANT
//
// Chainage 740, side +1 (the pavement whose perpendicular is (-tz, tx) — the
// same convention npcs.js places vendors on). Dan's pick, 2026-08-08, from a
// measurement rather than a feel: the 124 vendors alternate pavements, so a
// stall only competes with the 62 on its own side, and side +1 has a 30.3 m
// clear run centred on 740 — the widest anywhere on the street. Its
// neighbours are Rennie Dreghorn and Doreen Dunnett, ~15 m either way, which
// is comfortably outside interact.js's 8 m prompt RANGE, so McGrot's station
// will never fight one of theirs for the overlay. The Cupp anchor sits at 725,
// so the stall has a landmark for company without a vendor to crowd.
//
// It is a hard-coded constant and not a draw from anything. "It is there every
// day" is the design (ROADMAP § E10a), and a stall that wandered would break
// the share sentence the whole of E10a is built to make checkable.
//
// THE PRNG RULE. This module has its OWN seeded generator, and never touches
// scenery.js's. One extra draw from a shared sequence reseeds everything
// downstream of it — that is what moved the entire crowd at E3f — so the
// cheapest possible insurance is a second seed. Nothing here draws at runtime
// either: layout is consumed before frame 1.

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { flag } from './flags.js';

// E10a.1 lands OFF, so the milestone is verified against unmoved goldens
// before any pixel changes. The enable commit flips this, and that is the
// commit that recaptures whichever poses frame chainage 740.
const GULLET_ENABLED = false;

export const GULLET_CHAINAGE = 740;
export const GULLET_SIDE = 1;
// Metres from the centreline to the van's CENTRE. Vendors stand at 6; the van
// is 2.6 m deep, so 7.6 puts its serving side on the vendor line and its back
// toward the buildings rather than through them.
export const GULLET_OFFSET = 7.6;

const VAN_LENGTH = 4.4;   // along the street
const VAN_DEPTH = 2.6;    // across it
const VAN_BODY_H = 2.05;  // body box height, above the chassis
const CHASSIS_H = 0.62;   // ground to underside of the body
const WHEEL_R = 0.42;

// docs/CANON.md § McGrot: soot black, dirty cream, rust brown, congealed
// mustard, dark red. Authored dark — ACES lifts everything, and STYLE.md § 2
// rule 1 says the scene supplies the darkness, not the asset.
const SOOT = 0x1e1c19;
const CREAM = 0x5d5445;   // a van that WAS cream, twenty years ago
const RUST = 0x4a2a1c;
const MUSTARD = 0x6d5218;
const DARK_RED = 0x4a1d1a;

const rand = (() => {
  let s = 0x6d0117; // "the Gullet" — its own seed, never scenery's
  return () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
})();

export function gulletEnabled() {
  // __mcgrotForceGullet, localhost only — see src/flags.js.
  return flag('Gullet', GULLET_ENABLED);
}

export function buildGullet(world, scene) {
  const enabled = gulletEnabled();
  const noop = { enabled: false, group: null, placement: null, solids: 0 };
  if (!enabled || !world || !scene) return noop;

  const streetLine = world.streetLine || [];
  const sample = sampleStreet(streetLine, GULLET_CHAINAGE);
  if (!sample) return noop;

  const groundHeight = world.groundHeight || (() => 0);
  const [tx, tz] = sample.tangent;
  const perpX = -tz;
  const perpZ = tx;
  const cx = sample.point[0] + perpX * GULLET_OFFSET * GULLET_SIDE;
  const cz = sample.point[1] + perpZ * GULLET_OFFSET * GULLET_SIDE;
  const cy = groundHeight(cx, cz);

  // Yaw so the van's LENGTH lies along the street and its serving side faces
  // the centreline. Geometry below is authored in local space with +x along
  // the street and +z toward the road, then the whole group is rotated.
  const yaw = Math.atan2(-perpX * GULLET_SIDE, -perpZ * GULLET_SIDE);

  const group = new THREE.Group();
  group.name = 'gullet';
  group.position.set(cx, cy, cz);
  group.rotation.y = yaw;
  scene.add(group);

  buildVan(group);
  buildCounter(group);
  buildHoarding(group);
  buildPriceBoard(group);

  // E6a: the player is resolved against this. Boxes come from the placement
  // above, never from a new rand() draw — the tram does the same thing in
  // scenery.js and for the same reason. Plan-view only, so the awning and the
  // wheels are ignored; the van's own footprint is what you cannot walk
  // through.
  let solids = 0;
  if (world.collision) {
    // addBox takes HALF-extents: halfW along the group's local +x (the street
    // axis), halfD along local +z (across it), which is the same frame the
    // geometry above is authored in.
    world.collision.addBox(cx, cz, VAN_LENGTH * 0.5, VAN_DEPTH * 0.5, yaw, 'gullet');
    solids++;
    const [hx, hz] = localToWorld(cx, cz, yaw, VAN_LENGTH * 0.5 + 0.5, -VAN_DEPTH * 0.35);
    world.collision.addBox(hx, hz, 0.15, 0.85, yaw, 'gullet');
    solids++;
  }

  return {
    enabled: true,
    group,
    solids,
    placement: { chainage: GULLET_CHAINAGE, side: GULLET_SIDE, offset: GULLET_OFFSET, x: cx, y: cy, z: cz, yaw },
  };
}

// ---------------------------------------------------------------------------
// Geometry. Everything static is merged per material, so the whole stall is
// four draw calls plus the price board's textured plane.
// ---------------------------------------------------------------------------

function buildVan(group) {
  const shell = [];
  const trim = [];

  const body = new THREE.BoxGeometry(VAN_LENGTH, VAN_BODY_H, VAN_DEPTH);
  body.translate(0, CHASSIS_H + VAN_BODY_H * 0.5, 0);
  shell.push(body);

  // Cab, lower and shorter, off the local -x end (down-street).
  const cab = new THREE.BoxGeometry(1.5, VAN_BODY_H * 0.72, VAN_DEPTH * 0.94);
  cab.translate(-VAN_LENGTH * 0.5 - 0.72, CHASSIS_H + VAN_BODY_H * 0.36, 0);
  shell.push(cab);

  // Serving hatch — a recessed dark panel on the road-facing side, with the
  // hatch flap propped up over it as an awning.
  const hatch = new THREE.BoxGeometry(2.2, 1.05, 0.06);
  hatch.translate(0.35, CHASSIS_H + 1.22, VAN_DEPTH * 0.5 + 0.02);
  trim.push(hatch);

  const awning = new THREE.BoxGeometry(2.5, 0.05, 0.95);
  awning.rotateX(-0.34);
  awning.translate(0.15, CHASSIS_H + 1.95, VAN_DEPTH * 0.5 + 0.42);

  for (const s of [-1, 1]) {
    const stay = new THREE.BoxGeometry(0.04, 0.04, 0.95);
    stay.rotateX(-0.34);
    stay.translate(0.15 + s * 1.18, CHASSIS_H + 1.95, VAN_DEPTH * 0.5 + 0.42);
    trim.push(stay);
  }

  // Soot skirt: the lower third of the body, darker. Without it the van is a
  // single flat value and reads as a grey slab from across the road.
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

  // Wheels: four short cylinders, tipped onto the street axis.
  const wheels = [];
  for (const along of [-VAN_LENGTH * 0.34, VAN_LENGTH * 0.34]) {
    for (const across of [-VAN_DEPTH * 0.42, VAN_DEPTH * 0.42]) {
      const w = new THREE.CylinderGeometry(WHEEL_R, WHEEL_R, 0.26, 10);
      w.rotateZ(Math.PI / 2);
      w.translate(along, WHEEL_R, across);
      wheels.push(w);
    }
  }

  addMerged(group, shell, CREAM, 'gullet-body');
  addMerged(group, trim, SOOT, 'gullet-trim');
  addMerged(group, wheels, SOOT, 'gullet-wheels');
  addMerged(group, [awning], MUSTARD, 'gullet-awning');
}

function buildCounter(group) {
  const parts = [];
  const props = [];

  // The shelf under the hatch, where the sauce bottles live.
  const shelf = new THREE.BoxGeometry(2.5, 0.07, 0.42);
  shelf.translate(0.15, CHASSIS_H + 0.66, VAN_DEPTH * 0.5 + 0.19);
  parts.push(shelf);

  // Sauce bottles — canon props. Positions jittered from THIS module's seed.
  for (let i = 0; i < 5; i++) {
    const h = 0.2 + rand() * 0.09;
    const b = new THREE.CylinderGeometry(0.045, 0.055, h, 6);
    b.translate(-0.9 + i * 0.5 + (rand() - 0.5) * 0.12, CHASSIS_H + 0.7 + h * 0.5, VAN_DEPTH * 0.5 + 0.17 + (rand() - 0.5) * 0.06);
    props.push(b);
  }

  // The ladle, hung off the hatch frame: a handle and a bowl.
  const handle = new THREE.CylinderGeometry(0.018, 0.018, 0.44, 5);
  handle.rotateZ(0.16);
  handle.translate(1.42, CHASSIS_H + 1.34, VAN_DEPTH * 0.5 + 0.09);
  parts.push(handle);
  const bowl = new THREE.SphereGeometry(0.085, 7, 5, 0, Math.PI * 2, Math.PI * 0.5, Math.PI * 0.5);
  bowl.translate(1.46, CHASSIS_H + 1.12, VAN_DEPTH * 0.5 + 0.09);
  parts.push(bowl);

  addMerged(group, parts, RUST, 'gullet-counter');
  addMerged(group, props, DARK_RED, 'gullet-props');
}

function buildHoarding(group) {
  // A board leaned against the van's south end — the thing the collision box
  // above is drawn around.
  const geos = [];
  const board = new THREE.BoxGeometry(1.5, 1.7, 0.06);
  board.rotateY(Math.PI / 2);
  board.rotateZ(-0.09);
  board.translate(VAN_LENGTH * 0.5 + 0.5, 0.85, -VAN_DEPTH * 0.35);
  geos.push(board);

  for (let i = 0; i < 3; i++) {
    const slat = new THREE.BoxGeometry(0.09, 1.5 + rand() * 0.3, 0.05);
    slat.rotateZ((rand() - 0.5) * 0.5);
    slat.translate(VAN_LENGTH * 0.5 + 0.52, 0.8, -VAN_DEPTH * 0.35 - 0.5 + i * 0.5);
    geos.push(slat);
  }

  addMerged(group, geos, RUST, 'gullet-hoarding');
}

function buildPriceBoard(group) {
  const tex = new THREE.CanvasTexture(priceBoardCanvas());
  tex.colorSpace = THREE.SRGBColorSpace;
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(1.15, 0.86),
    new THREE.MeshLambertMaterial({ map: tex }),
  );
  mesh.name = 'gullet-price-board';
  // Stood PROUD of the body by more than the tilt sinks it: rotating the
  // plane about its own centre swings its right edge back by
  // halfWidth * sin(tilt) = 0.069 m, and at the old 0.04 m offset that put
  // 40% of the board inside the van. It rendered as a board with the prices
  // sheared off, which looked like a canvas bug and was not — the canvas is
  // whole (docs/smoke/captures/gullet/price-board-canvas.png).
  mesh.position.set(-1.4, CHASSIS_H + 1.34, VAN_DEPTH * 0.5 + 0.13);
  mesh.rotation.y = 0.12;
  group.add(mesh);
}

// Hand-lettered, in the comics' register. This is McGrot's own board, not a
// quotation — the verbatim rule binds comic fragments, and none are reproduced
// here. Canvas bakes write RAW sRGB hex (see CLAUDE.md): a THREE.Color would
// be converted twice and come out a silhouette.
function priceBoardCanvas() {
  const canvas = document.createElement('canvas');
  canvas.width = 320;
  canvas.height = 240;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#3a3226';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#6f6047';
  ctx.lineWidth = 5;
  ctx.strokeRect(7, 7, canvas.width - 14, canvas.height - 14);

  ctx.textAlign = 'center';
  ctx.fillStyle = '#c9b787';
  ctx.font = 'bold 40px "Courier New", monospace';
  ctx.fillText('THE GULLET', canvas.width / 2, 54);

  ctx.font = '25px "Courier New", monospace';
  ctx.textAlign = 'left';
  const lines = [
    ['MEAT', '1.20'],
    ['MEAT (HOT)', '1.60'],
    ['SOUP', '90p'],
    ['THE USUAL', 'ASK'],
  ];
  lines.forEach(([what, price], i) => {
    const y = 100 + i * 32;
    ctx.fillStyle = '#b9a87c';
    ctx.fillText(what, 26, y);
    ctx.textAlign = 'right';
    ctx.fillText(price, canvas.width - 26, y);
    ctx.textAlign = 'left';
  });

  ctx.font = 'italic 19px "Courier New", monospace';
  ctx.fillStyle = '#8e7f5d';
  ctx.fillText('NO REFUNDS. NO QUESTIONS.', 24, 226);

  return canvas;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function addMerged(group, geos, hex, name) {
  if (!geos.length) return;
  const mesh = new THREE.Mesh(
    mergeGeometries(geos, false),
    new THREE.MeshLambertMaterial({ color: hex, flatShading: true }),
  );
  mesh.name = name;
  group.add(mesh);
}

// Local (along-street, across-street) to world x/z, matching the group's yaw.
function localToWorld(originX, originZ, yaw, along, across) {
  const c = Math.cos(yaw);
  const s = Math.sin(yaw);
  return [originX + along * c + across * s, originZ - along * s + across * c];
}

// Local copy of npcs.js/scenery.js's sampler — the same deliberate decoupling
// those two keep from each other.
function sampleStreet(streetLine, targetDist) {
  if (!streetLine || streetLine.length < 2 || targetDist < 0) return null;
  let acc = 0;
  for (let i = 0; i < streetLine.length - 1; i++) {
    const [ax, az] = streetLine[i];
    const [bx, bz] = streetLine[i + 1];
    const dx = bx - ax;
    const dz = bz - az;
    const segLen = Math.hypot(dx, dz);
    if (acc + segLen >= targetDist) {
      const t = segLen > 0 ? (targetDist - acc) / segLen : 0;
      const len = segLen || 1;
      return { point: [ax + dx * t, az + dz * t], tangent: [dx / len, dz / len] };
    }
    acc += segLen;
  }
  return null;
}
