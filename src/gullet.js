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
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { flag } from './flags.js';
import { assetUrl } from './assets.js';
import { normalise } from './characters.js';
import { hashDateKey, todayKey } from './day.js';

// E10a.1-.3 landed OFF, so all three were verified against unmoved goldens
// before any pixel changed. This is the enable commit: the flag stays as the
// gate suite's lever (every opposed pair in the `gullet` region needs both
// arms), but the shipped default is now ON.
const GULLET_ENABLED = true;

export const GULLET_CHAINAGE = 740;
export const GULLET_SIDE = 1;
// Metres from the centreline to the van's CENTRE. Vendors stand at 6; the van
// is 2.6 m deep, so 7.6 puts its serving side on the vendor line and its back
// toward the buildings rather than through them.
export const GULLET_OFFSET = 7.6;

// E10a.2. The two canon principals, generated through the E3a pipeline
// (FLUX form variant -> Trellis at mesh_simplify 0.98, texture_size 512 —
// settled at E3a, not re-swept) and re-materialled by characters.js's
// normalise() so they carry the crowd's treatment rather than a second one.
const MCGROT_FILE = 'characters/mcgrot-form.glb';
const POMPLE_FILE = 'characters/pomple-form.glb';
const MCGROT_HEIGHT = 1.72;   // metres. Canon: average height, thick, stooped.
const POMPLE_HEIGHT = 0.42;   // metres at the shoulder — normalise() makes the
                              // glb unit-TALL, and for a quadruped that axis is
                              // shoulder height, not nose-to-tail length.
const MCGROT_RADIUS = 0.45;   // collision, plan view
const POMPLE_RADIUS = 0.30;

// HOW OFTEN IS HE IN. 3 days in 8. "McGrot was in the day" has to be worth
// saying, which rules out most days, and it has to be plausibly reachable,
// which rules out one in a month. The fraction is a constant here rather than
// a tuned feel so the determinism gate can assert the distribution over a
// window of dates instead of one lucky pair.
const MCGROT_IN_NUMERATOR = 3;
const MCGROT_IN_DENOMINATOR = 8;

// The board that goes up when he is not. Verbatim from ROADMAP § E10a — it is
// McGrot's own wording, not a comic fragment, but it is quoted in the design
// and stays exactly as written.
const SHUT_SIGN = ['AWAY.', 'BACK NEVER.', '— McG'];

// E10a.3. McGrot's own comic, and the identity that makes his station read
// like the other 124's. The comic is a REAL catalog entry (transcribed for
// this unit into scripts/tts-prompts/3c6b637b.txt) and deliberately one of the
// 294 without an `npc` block: giving it one would make him vendor 125 inside
// npcs.js, which moves geomHash, the vendor census and every count that hangs
// off 124. He is a principal, not a catalog vendor.
const MCGROT_COMIC_ID = '3c6b637b';
const MCGROT_NAME = 'McGrot';
const MCGROT_BLURB = 'Proprietor o\' the Gullet';

const VAN_LENGTH = 4.4;   // along the street
const VAN_DEPTH = 2.6;    // across it
const VAN_BODY_H = 2.05;  // body box height, above the chassis
const CHASSIS_H = 0.62;   // ground to underside of the body
const WHEEL_R = 0.42;

// The serving opening, in the group's local frame. Its sill is the one
// dimension the whole tableau hangs off: it is chest height on a 1.72m McGrot
// standing on the van floor, so his head and shoulders read through the hole.
const OPENING_W = 2.2;
const OPENING_CX = 0.35;
const OPENING_SILL = CHASSIS_H + 0.52;
const OPENING_TOP = CHASSIS_H + 1.80;

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

// IS McGROT IN TODAY. Pure, date-keyed, and exported so a gate can sweep a
// window of dates without booting a scene per day. Deliberately NOT drawn from
// this module's `rand`: that sequence is layout, consumed before frame 1, and
// mixing a per-day draw into it would make the stall's geometry depend on the
// calendar. A separate hash of the date string keeps the two apart.
export function mcgrotIsIn(dayKey) {
  return (hashDateKey(`gullet:${dayKey}`) % MCGROT_IN_DENOMINATOR) < MCGROT_IN_NUMERATOR;
}

export function buildGullet(assets, world, scene) {
  const enabled = gulletEnabled();
  const noop = {
    enabled: false, group: null, placement: null, solids: 0,
    dayKey: null, mcgrotIn: false, mcgrot: null, pomple: null, reader: null, meshes: () => 0,
  };
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

  // E10a.2. Read the day ONCE, here, and hand the same answer to every
  // consumer. Calling mcgrotIsIn() again downstream would be correct today and
  // wrong the moment anything lets the clock roll past midnight mid-session —
  // the stall would shut with McGrot still standing in it.
  const dayKey = todayKey();
  const mcgrotIn = mcgrotIsIn(dayKey);
  if (!mcgrotIn) buildShutSign(group);

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

  // WHERE THE TWO OF THEM STAND. Local frame: +x along the street, +z toward
  // the road. McGrot is BEHIND the counter, so he sits on the building side of
  // the van's front face and is seen through the hatch. Pomplé is posted at
  // the kerb end of the counter when McGrot is in, and drifts to the far side
  // of the hoarding when he is not — canon gives the dog minimal motion, so
  // "wanders" is a different fixed spot per day rather than a walk cycle.
  const mcgrotLocal = [OPENING_CX, -0.15];
  // He stands ON the van floor. Placing him on the road put his head below the
  // sill; the floor is CHASSIS_H above it and that is what frames him.
  const MCGROT_LIFT = CHASSIS_H;
  const pompleLocal = mcgrotIn
    ? [VAN_LENGTH * 0.5 + 0.9, VAN_DEPTH * 0.5 + 0.25]
    : [
      VAN_LENGTH * 0.5 + 1.4 + (hashDateKey(`pomple:${dayKey}`) % 100) / 100 * 1.6,
      VAN_DEPTH * 0.5 - 0.4 - (hashDateKey(`pomple-z:${dayKey}`) % 100) / 100 * 1.2,
    ];

  const figures = { mcgrot: null, pomple: null };
  let castSolids = 0;
  let meshesLoaded = 0;
  const loader = new GLTFLoader();
  const stand = (file, local, height, key, lift = 0) => {
    const [wx, wz] = localToWorld(cx, cz, yaw, local[0], local[1]);
    const wy = groundHeight(wx, wz) + lift;
    // The solid goes in NOW, not in the .then(). A glb landing asynchronously
    // must not decide whether the player can walk through a body — that is the
    // E6a.2 walker lesson (movers registered late spent the first frames at
    // the world origin, which is the spawn point).
    if (world.collision) {
      // A SEPARATE TAG from the stall's boxes. The E3h lesson is that a whole
      // class of thing can silently stop registering while every other gate
      // stays green, so the fixed props and the date-varying cast are counted
      // independently — 'gullet' is always 2, 'gullet-cast' is 1 or 2.
      world.collision.addCircle(wx, wz, key === 'mcgrot' ? MCGROT_RADIUS : POMPLE_RADIUS, 'gullet-cast');
      castSolids++;
    }
    const holder = new THREE.Group();
    holder.name = `gullet-${key}`;
    holder.position.set(wx, wy, wz);
    // Face the road, same convention as the van and as npcs.js: the mesh is
    // built facing +Z and theta maps +Z to (sin, cos).
    holder.rotation.y = yaw;
    scene.add(holder);
    figures[key] = { holder, x: wx, y: wy, z: wz, height, loaded: false };

    loader.loadAsync(assetUrl(assets, file))
      .then((gltf) => {
        const mesh = normalise(gltf.scene);
        mesh.name = `${key}-mesh`;
        mesh.scale.setScalar(height);
        holder.add(mesh);
        figures[key].loaded = true;
        meshesLoaded++;
      })
      // Same fallback contract as characters.js: in the single-file artifact
      // these glbs are not inlined and every fetch 404s. There is no paper
      // doll for a canon principal, so the stall simply stands unattended —
      // which is a state the design already has a name for.
      .catch(() => {});
  };

  // THE ARTIFACT DELIBERATELY HAS NO PRINCIPALS, and these two guards are what
  // make that a decision rather than a 404. Measured at the enable commit: the
  // single-file build is 6.96MB against a 7.5MB ceiling and these two glbs are
  // ~1.4MB as base64 — inlining even McGrot alone lands at 7.56MB. So
  // build.mjs does not inline them, and rather than let the fetch fail (which
  // is exactly what E3h's "the artifact fetches no character glb" gate exists
  // to forbid) the figures are not built there at all. The stall stands
  // unattended, a state the design already has a name for.
  //
  // `window.MCGROT_ASSETS` is the single-file build's own signal (src/assets.js).
  // On the dev server and the published site `assets.models` is undefined, the
  // fetch is a real relative URL, and both get the full cast.
  const inlineOnly = typeof window !== 'undefined' && !!window.MCGROT_ASSETS;
  const haveModel = (file) => !inlineOnly || !!(assets && assets.models && assets.models[file]);

  if (mcgrotIn && haveModel(MCGROT_FILE)) stand(MCGROT_FILE, mcgrotLocal, MCGROT_HEIGHT, 'mcgrot', MCGROT_LIFT);
  // The reading station follows the FIGURE, not the day: no mesh, nobody to
  // walk up to. It hangs off figures.mcgrot, which only exists if stand() ran.
  const reader = mcgrotIn ? buildReader(assets, figures.mcgrot) : null;
  if (haveModel(POMPLE_FILE)) stand(POMPLE_FILE, pompleLocal, POMPLE_HEIGHT, 'pomple');

  return {
    enabled: true,
    group,
    solids,
    castSolids,
    dayKey,
    mcgrotIn,
    mcgrot: figures.mcgrot,
    pomple: figures.pomple,
    reader,
    meshes: () => meshesLoaded,
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

  // A SHELL, NOT A BOX. E10a.1 built the body as one solid BoxGeometry with a
  // black panel painted where the hatch goes, and when E10a.2 stood McGrot at
  // his own counter he was entirely inside it — the capture showed his boots
  // under the chassis and nothing else. The serving opening has to be a real
  // hole, so the body is six panels with a gap, still one merged mesh and one
  // draw call.
  const T = 0.08; // panel thickness
  const yFloor = CHASSIS_H;
  const yRoof = CHASSIS_H + VAN_BODY_H;
  const panel = (w, h, d, x, y, z) => {
    const g = new THREE.BoxGeometry(w, h, d);
    g.translate(x, y, z);
    shell.push(g);
  };
  panel(VAN_LENGTH, VAN_BODY_H, T, 0, CHASSIS_H + VAN_BODY_H * 0.5, -VAN_DEPTH * 0.5 + T * 0.5); // back
  panel(T, VAN_BODY_H, VAN_DEPTH, -VAN_LENGTH * 0.5 + T * 0.5, CHASSIS_H + VAN_BODY_H * 0.5, 0); // ends
  panel(T, VAN_BODY_H, VAN_DEPTH, VAN_LENGTH * 0.5 - T * 0.5, CHASSIS_H + VAN_BODY_H * 0.5, 0);
  panel(VAN_LENGTH, T, VAN_DEPTH, 0, yRoof - T * 0.5, 0);   // roof
  panel(VAN_LENGTH, T, VAN_DEPTH, 0, yFloor + T * 0.5, 0);  // floor — he stands ON this

  // The road-facing side, in four pieces around the opening. The sill sits at
  // chest height on a 1.72m man standing on the floor above, which is what
  // makes his head and shoulders read through the hole rather than one eye.
  const openMinX = OPENING_CX - OPENING_W * 0.5;
  const openMaxX = OPENING_CX + OPENING_W * 0.5;
  const zFront = VAN_DEPTH * 0.5 - T * 0.5;
  panel(openMinX + VAN_LENGTH * 0.5, VAN_BODY_H, T, (-VAN_LENGTH * 0.5 + openMinX) * 0.5, CHASSIS_H + VAN_BODY_H * 0.5, zFront);
  panel(VAN_LENGTH * 0.5 - openMaxX, VAN_BODY_H, T, (openMaxX + VAN_LENGTH * 0.5) * 0.5, CHASSIS_H + VAN_BODY_H * 0.5, zFront);
  panel(OPENING_W, OPENING_SILL - yFloor, T, OPENING_CX, (yFloor + OPENING_SILL) * 0.5, zFront);
  panel(OPENING_W, yRoof - OPENING_TOP, T, OPENING_CX, (OPENING_TOP + yRoof) * 0.5, zFront);

  // Interior liner. Without it the shell's inner faces are the same dirty
  // cream as the outside, and the far end panel catches the sun and reads
  // through the opening as a bright white slab — a hole to the sky rather than
  // the inside of a van. One inset open-fronted box in soot, in the trim
  // merge, kills every bright interior face at once.
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

  // Cab, lower and shorter, off the local -x end (down-street). Solid: nothing
  // stands in it and a hollow one would show its own back panel through the
  // windscreen it has not got.
  const cab = new THREE.BoxGeometry(1.5, VAN_BODY_H * 0.72, VAN_DEPTH * 0.94);
  cab.translate(-VAN_LENGTH * 0.5 - 0.72, CHASSIS_H + VAN_BODY_H * 0.36, 0);
  shell.push(cab);

  // The opening's reveal: a dark frame around the hole so the shell's cut edge
  // reads as a lined hatch rather than as a modelling seam.
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
  shelf.translate(OPENING_CX, OPENING_SILL - 0.02, VAN_DEPTH * 0.5 + 0.19);
  parts.push(shelf);

  // Sauce bottles — canon props. Positions jittered from THIS module's seed.
  for (let i = 0; i < 5; i++) {
    const h = 0.2 + rand() * 0.09;
    const b = new THREE.CylinderGeometry(0.045, 0.055, h, 6);
    b.translate(OPENING_CX - 1.05 + i * 0.5 + (rand() - 0.5) * 0.12, OPENING_SILL + 0.02 + h * 0.5, VAN_DEPTH * 0.5 + 0.17 + (rand() - 0.5) * 0.06);
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

// E10a.3: the object interact.js and proximity-audio.js consume. It is shaped
// like an npcs.js vendor because those two iterate a list and read fields off
// it — `group`, `comic`, `name`, `blurb`, `setSpeaking`, `voice` — and the
// cheapest way to be a reading station is to satisfy that contract rather than
// to teach both modules about a second kind of thing.
//
// WHAT IS DELIBERATELY DIFFERENT FROM A VENDOR:
//
//   skipJournal   The journal tracks the 124-comic collection against a fixed
//                 denominator. Crediting McGrot would let `heard` reach 125/124
//                 and would put a comic in the collection that is not in it.
//   isAnchor      false. Anchors are the landmark shopfronts (E5b.2); the
//                 Gullet is not one and must not earn an anchor credit.
//   no buildDoll  There is no paper-doll fallback for a canon principal. If
//                 his glb 404s the stall simply stands unattended.
//
// `group` is the SAME holder the mesh is parented to, so the proximity scan
// measures to where he actually stands rather than to a second position that
// could drift from it.
function buildReader(assets, figure) {
  const catalog = (assets && assets.catalog && Array.isArray(assets.catalog.comics))
    ? assets.catalog.comics : [];
  const comic = catalog.find((c) => c.id === MCGROT_COMIC_ID);
  // The single-file artifact ships a 3-comic manifest, not the catalog. No
  // comic means no station — the stall and the figure still stand.
  if (!comic || !figure) return null;
  return {
    group: figure.holder,
    comic,
    name: MCGROT_NAME,
    blurb: MCGROT_BLURB,
    isAnchor: false,
    skipJournal: true,
    collisionRadius: MCGROT_RADIUS,
    voice: null,
    speaking: false,
    setSpeaking(v) { this.speaking = !!v; },
  };
}

// The board that covers the hatch on the days he is not in. Hung over the
// serving opening rather than beside it, so the difference between an open
// stall and a shut one is legible from across the road and not only from
// reading distance.
function buildShutSign(group) {
  const canvas = document.createElement('canvas');
  canvas.width = 384;
  canvas.height = 192;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#2b2620';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#5e513c';
  ctx.lineWidth = 6;
  ctx.strokeRect(8, 8, canvas.width - 16, canvas.height - 16);

  ctx.textAlign = 'center';
  ctx.fillStyle = '#bfa871';
  ctx.font = 'bold 46px "Courier New", monospace';
  ctx.fillText(SHUT_SIGN[0], canvas.width / 2, 66);
  ctx.fillText(SHUT_SIGN[1], canvas.width / 2, 116);
  ctx.font = 'italic 30px "Courier New", monospace';
  ctx.fillStyle = '#8e7b52';
  ctx.fillText(SHUT_SIGN[2], canvas.width / 2, 160);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(1.9, 0.95),
    new THREE.MeshLambertMaterial({ map: tex }),
  );
  mesh.name = 'gullet-shut-sign';
  // Proud of the hatch panel (which sits at VAN_DEPTH/2 + 0.02, 0.06 deep) by
  // more than its own tilt sinks it — the price board's bug, not repeated.
  mesh.position.set(OPENING_CX, (OPENING_SILL + OPENING_TOP) * 0.5, VAN_DEPTH * 0.5 + 0.16);
  mesh.rotation.y = -0.05;
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
