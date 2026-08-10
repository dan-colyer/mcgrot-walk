// The Shop — one staged interior you can stand inside (E9a.1).
//
// The reframe this serves is E9's: you are not a tourist on Leith Walk, you
// are the keeper of a business on it. This unit builds the ROOM and nothing
// else. There is no door prompt and no transition yet (E9a.2), no keeper
// spawn (E9a.3) and no visitor (E9a.4) — the room is built on every boot but
// is reachable only from the debug API. `__mcgrotForceInterior` is still the
// gate suite's lever in both directions; see the enable note below.
//
// A STAGED SET, NOT CARVED GEOMETRY (Fable's ruling, ROADMAP § E9)
//
// The interior is its OWN THREE.Scene, at its own origin, axis-aligned. It is
// not a room hollowed out of the merged street mesh and it does not sit at
// the building's real world coordinates. Three things follow, and all three
// are the reason for the decision:
//
//   - The street's merged geometry, its atlas paging and all 40 goldens are
//     untouched by anything in here. An interior is additive content.
//   - The room owns its own lighting and its own fog outright, because they
//     are properties of a scene object atmosphere.js never sees.
//   - Rendering is a swap of the scene handed to `post.render(scene, camera)`
//     — the street keeps simulating behind it (clock, weather, walkers), so
//     stepping back out is not a level load.
//
// THE ONE THING IT CANNOT OWN OUTRIGHT is `renderer.toneMappingExposure`,
// which is a renderer global and the street's palette drives it every frame.
// That is the second consumer the E5 phase gate anticipated, and the reason
// atmosphere's suspend seam is now a token rather than a boolean: the
// interior holds it for exactly as long as the player is inside, the ending
// can no longer begin from in here, and the two can never blend into the same
// field. See atmosphere.js's acquireSuspend.
//
// WHICH SHOP. Valvona & Crolla, 19 Elm Row — building 424 in leith.json,
// chainage 1486, west side, a 12.78m frontage it shares with William Hill.
// Picked on a measurement rather than a feel: the roadmap asks for a category
// with obvious stock (deli territory), and of the 24 façades in
// assets/facade-registry.json backed by a real rectified photo it is the only
// deli — `edinburgh-18-19-elm-row`, confidence 0.72. The shop is long and
// narrow in life and the set keeps that.
//
// SEEDED FROM THE SHOP, NOT FROM THE DAY. The layout hash is the shop slug
// alone, so this room is the same room on every date. A daily re-roll was
// considered and rejected twice over: a deli does not rearrange its fittings
// overnight, and a date-varying interior would put every interior golden at
// the mercy of SMOKE_DATE — the exact blind spot E10a had to write down when
// no golden had ever seen McGrot in. What varies by day is stock and visitors,
// and both belong to E9b.

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { flag } from './flags.js';
import { hashDateKey } from './day.js';

// E9a.1 landed OFF, so the room was verified against unmoved goldens before
// any pixel changed. This is the enable commit: the flag stays as the gate
// suite's lever (every opposed pair in the `interior` region needs both arms),
// but the shipped default is now ON.
//
// WHAT THIS DOES AND DOES NOT TURN ON. It builds the room on every boot. It
// does NOT put a way into it on the shipped path — the door is E9a.2 and the
// keeper boot is E9a.3 — so no visitor can reach it yet and no golden can
// move. The measured cost of carrying it is in docs/ROADMAP.md's landing
// record; the reason to pay it now rather than at .2 is that it puts the
// scene swap, the exposure hand-off and the room's construction on the same
// code path every visitor already runs, months before anything depends on it.
const INTERIOR_ENABLED = true;

export const SHOP_SLUG = 'valvona-crolla';
export const SHOP_NAME = 'Valvona & Crolla';
export const SHOP_KIND = 'deli';
export const SHOP_BUILDING = 424;      // index into leith.json's buildings
export const SHOP_CHAINAGE = 1486;     // metres from the Foot, along streetLine

// The room, in its own local frame. +Z is the STREET side (the door and the
// window are on that wall); -Z is the back of the shop. The keeper's side of
// the counter is the -Z side.
export const ROOM_W = 7.0;    // x: -3.5 .. +3.5
export const ROOM_D = 9.0;    // z: -4.5 .. +4.5
export const ROOM_H = 3.6;
const HALF_W = ROOM_W / 2;
const HALF_D = ROOM_D / 2;
const WALL_T = 0.25;

// The counter. Runs across the room, leaving a gap at the east end to get
// round it — that gap is what makes the room walkable as one space in this
// unit and becomes the keeper's way out from behind it in E9a.3.
export const COUNTER_Z = -1.6;
export const COUNTER_H = 1.05;
const COUNTER_D = 0.72;
const COUNTER_X0 = -HALF_W;
const COUNTER_X1 = 1.7;       // gap from here to the east wall

const SHELF_D = 0.45;         // back-wall shelving, depth
const SHELF_LEVELS = 5;
const SHELF_TOP = 2.55;

// The shopfront, on the +Z wall. The glass is grimy and shows nothing: this
// is a set, so there is no street through it. What sells the daylight is the
// light coming IN, not a view going out.
const DOOR_W = 1.02;
const DOOR_H = 2.12;
const DOOR_CX = 1.35;
const WIN_X0 = -3.15;
const WIN_X1 = 0.45;
const WIN_SILL = 0.92;
const WIN_TOP = 2.62;

// docs/STYLE.md § 1: warm, low-chroma, cream-to-brown, and authored
// CREAM-FORWARD — the scene supplies the darkness and ACES lifts everything,
// so a tone picked at the palette's dark end arrives as black mush. These are
// the palette's warm-stone/khaki/bronze end, dropped a stop for the dark
// interior but nowhere near near-black.
const FLOOR_TILE_A = 0x5b5240;   // olive grey, worn
const FLOOR_TILE_B = 0x453d2e;   // its darker chequer partner
const PLASTER = 0x6a5f44;        // olive grey walls, nicotine-aged
const PLASTER_HI = 0x796c4e;     // the band the window light catches
const DADO = 0x4b402a;           // the painted lower wall, chest height and scuffed
const CEILING = 0x4a4335;
const TIMBER = 0x6f5c33;         // bronze — the counter and the shelving
const TIMBER_DARK = 0x4c3f22;
const MARBLE = 0x9b9078;         // warm stone — the counter top
const TIN = 0x7a7263;
const BRASS = 0x8a7434;          // khaki gold
const STOCK_TONES = [0x8a6a34, 0x6d5a2c, 0x94793f, 0x5f4f2a, 0x7d6738, 0xa08f51];
const GLASS = 0xa89e83;   // grimy daylight, seen from inside
// ...and what the same pane is at night (E9a.2). Before this the glazing was
// a constant pale box at every hour: stand in the shop at 3am and the window
// was as bright as noon, which is the one thing in the room that has to agree
// with the street because it IS the street. Kept above FOG_COLOUR (0x2a2519)
// rather than matching it, so the aperture still reads as a window and not as
// a hole knocked in the wall — the same failure the original dark-material
// pass produced, and the reason the day tone is pale to begin with.
const GLASS_NIGHT = 0x1a1710;
// Daylight from sun altitude in DEGREES (atmosphere.state().sunAltitude,
// measured across a day: -21.3 at midnight, +45.6 at 13:00). Zero at civil
// twilight, full by +12 degrees; at 20:00 the sun is at +6.1 and this reads
// 0.67, which is the half-lit window the hour deserves.
function daylightFrom(sunAltitudeDeg) {
  const t = (sunAltitudeDeg + 6) / 18;
  return t < 0 ? 0 : (t > 1 ? 1 : t);
}

// One dot screen and one grain field already sit over everything (post.js).
// The interior fog is a HELD BREATH rather than weather — just enough to keep
// the back of a nine-metre room off the near wall's value. It belongs to this
// scene object, which atmosphere.js never sees, so no hand-off is needed for
// it; the exposure below is the only thing that is shared.
const FOG_COLOUR = 0x2a2519;
const FOG_DENSITY = 0.028;

// Held while inside. Lower than the street's 1.46 because the room is lit by
// two fittings and a window rather than by sky — measured from the captures,
// not guessed; see docs/VALIDATION.md § the `interior` region.
export const INTERIOR_EXPOSURE = 1.05;

export function interiorEnabled() {
  // __mcgrotForceInterior, localhost only — see src/flags.js.
  return flag('Interior', INTERIOR_ENABLED);
}

// The shop's own PRNG. Its own seed, never scenery's and never the gullet's —
// one extra draw from a shared sequence reseeds everything downstream of it,
// which is what moved the entire crowd at E3f. Seeded from the slug so the
// layout is a property of the shop and not of the calendar.
function makeRand(slug) {
  let s = hashDateKey(`interior:${slug}`) | 0;
  return () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// --- the module kit -------------------------------------------------------
// Everything opaque in the room is a box, and every box lands in ONE merged
// geometry with a vertex colour. That is what keeps a whole furnished
// interior inside a handful of draw calls; the budget gate reads the number.

function box(parts, x, y, z, w, h, d, colour, yaw = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (yaw) g.rotateY(yaw);
  g.translate(x, y, z);
  const c = new THREE.Color(colour);
  const n = g.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i += 1) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  parts.push(g);
  return g;
}

function cyl(parts, x, y, z, r, h, colour, radial = 8) {
  const g = new THREE.CylinderGeometry(r, r, h, radial);
  g.translate(x, y, z);
  const c = new THREE.Color(colour);
  const n = g.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i += 1) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  parts.push(g);
  return g;
}

// The +Z wall, built as four panels around the door and the window rather
// than as one slab with holes. A wall with an opening is the only shape in
// the kit that cannot be a single box, and CSG for two rectangles would be a
// dependency for nothing.
function frontWall(parts) {
  const z = HALF_D;
  const dx0 = DOOR_CX - DOOR_W / 2;
  const dx1 = DOOR_CX + DOOR_W / 2;
  const seg = (x0, x1, y0, y1, colour) => {
    if (x1 - x0 < 0.01 || y1 - y0 < 0.01) return;
    box(parts, (x0 + x1) / 2, (y0 + y1) / 2, z, x1 - x0, y1 - y0, WALL_T, colour);
  };
  // west of the window, between window and door, east of the door
  seg(-HALF_W, WIN_X0, 0, ROOM_H, PLASTER);
  seg(WIN_X1, dx0, 0, ROOM_H, PLASTER);
  seg(dx1, HALF_W, 0, ROOM_H, PLASTER);
  // under and over the window; over the door
  seg(WIN_X0, WIN_X1, 0, WIN_SILL, PLASTER);
  seg(WIN_X0, WIN_X1, WIN_TOP, ROOM_H, PLASTER_HI);
  seg(dx0, dx1, DOOR_H, ROOM_H, PLASTER_HI);
}

function shell(parts) {
  // floor — a chequer, laid as merged strips so it is still one geometry
  const tile = 0.7;
  const nx = Math.ceil(ROOM_W / tile);
  const nz = Math.ceil(ROOM_D / tile);
  for (let i = 0; i < nx; i += 1) {
    for (let j = 0; j < nz; j += 1) {
      const x = -HALF_W + (i + 0.5) * tile;
      const z = -HALF_D + (j + 0.5) * tile;
      box(parts, x, -0.05, z, tile * 0.98, 0.1, tile * 0.98, (i + j) % 2 ? FLOOR_TILE_A : FLOOR_TILE_B);
    }
  }
  box(parts, 0, ROOM_H + 0.05, 0, ROOM_W + WALL_T * 2, 0.1, ROOM_D + WALL_T * 2, CEILING);
  box(parts, -HALF_W - WALL_T / 2, ROOM_H / 2, 0, WALL_T, ROOM_H, ROOM_D, PLASTER);   // west
  box(parts, HALF_W + WALL_T / 2, ROOM_H / 2, 0, WALL_T, ROOM_H, ROOM_D, PLASTER);    // east
  box(parts, 0, ROOM_H / 2, -HALF_D - WALL_T / 2, ROOM_W, ROOM_H, WALL_T, PLASTER);   // back
  frontWall(parts);
  // Painted dado to chest height on the three solid walls. Without it the
  // plaster is one value from skirting to cornice and the room reads as a
  // box; this is the cheapest thing in the kit that gives a wall a bottom.
  const DADO_H = 1.12;
  box(parts, -HALF_W + 0.03, DADO_H / 2, 0, 0.06, DADO_H, ROOM_D, DADO);
  box(parts, HALF_W - 0.03, DADO_H / 2, 0, 0.06, DADO_H, ROOM_D, DADO);
  box(parts, 0, DADO_H / 2, -HALF_D + 0.03, ROOM_W, DADO_H, 0.06, DADO);
  // the two pendant shades, so the pools on the ceiling have a source
  for (const [px, pz] of [[-0.3, -2.4], [0.4, 2.1]]) {
    box(parts, px, ROOM_H - 0.14, pz, 0.03, 0.28, 0.03, TIN);
    cyl(parts, px, ROOM_H - 0.36, pz, 0.17, 0.13, TIN, 10);
  }
  // The door, standing shut in its opening. Built as a stile-and-rail leaf
  // rather than one slab: a flat panel in a flat wall had nothing to read as
  // a door at all in the first captures, and this is the one piece of the set
  // the whole of E9a.2 hangs a prompt on.
  const dz = HALF_D;
  const dHalf = DOOR_W / 2 - 0.03;
  const railY = 1.02;                        // the mid rail, at handle height
  box(parts, DOOR_CX - dHalf + 0.07, DOOR_H / 2, dz, 0.14, DOOR_H - 0.04, 0.06, TIMBER);      // stiles
  box(parts, DOOR_CX + dHalf - 0.07, DOOR_H / 2, dz, 0.14, DOOR_H - 0.04, 0.06, TIMBER);
  box(parts, DOOR_CX, DOOR_H - 0.07, dz, DOOR_W - 0.06, 0.14, 0.06, TIMBER);                  // head rail
  box(parts, DOOR_CX, railY, dz, DOOR_W - 0.06, 0.16, 0.06, TIMBER);                          // mid rail
  box(parts, DOOR_CX, 0.09, dz, DOOR_W - 0.06, 0.18, 0.06, TIMBER);                           // kick rail
  box(parts, DOOR_CX, (railY + 0.18) / 2 + 0.09, dz, DOOR_W - 0.3, railY - 0.27, 0.04, TIMBER_DARK); // lower panel
  // Architrave, proud of the wall, so the opening has an edge from inside.
  box(parts, DOOR_CX - DOOR_W / 2 - 0.06, DOOR_H / 2, dz - 0.06, 0.12, DOOR_H + 0.12, 0.06, TIMBER_DARK);
  box(parts, DOOR_CX + DOOR_W / 2 + 0.06, DOOR_H / 2, dz - 0.06, 0.12, DOOR_H + 0.12, 0.06, TIMBER_DARK);
  box(parts, DOOR_CX, DOOR_H + 0.06, dz - 0.06, DOOR_W + 0.24, 0.12, 0.06, TIMBER_DARK);
  // The handle. A BOX, not a rotated cylinder: cyl() translates before it
  // returns, so a .rotateY/.rotateX chained onto the result spins the part
  // about the SCENE origin rather than about itself — the first pass put the
  // handle four metres under the floor and nothing in the capture said so.
  box(parts, DOOR_CX - dHalf + 0.16, railY + 0.08, dz - 0.07, 0.05, 0.05, 0.14, BRASS);
}

// The door's upper light, returned separately because it is glazed and so
// belongs with the window rather than with the merged opaque geometry.
export function doorGlassRect() {
  const railTop = 1.02 + 0.08;
  return { x0: DOOR_CX - DOOR_W / 2 + 0.09, x1: DOOR_CX + DOOR_W / 2 - 0.09, y0: railTop, y1: DOOR_H - 0.16 };
}

function counter(parts, rand) {
  const cz = COUNTER_Z;
  const w = COUNTER_X1 - COUNTER_X0;
  const cx = (COUNTER_X0 + COUNTER_X1) / 2;
  box(parts, cx, COUNTER_H / 2 - 0.06, cz, w, COUNTER_H - 0.12, COUNTER_D, TIMBER);
  box(parts, cx, COUNTER_H - 0.03, cz, w + 0.1, 0.06, COUNTER_D + 0.1, MARBLE); // the slab
  // panelled front, facing the customer side (+Z)
  const bays = Math.max(3, Math.round(w / 1.15));
  for (let i = 0; i < bays; i += 1) {
    const bw = w / bays;
    box(parts, COUNTER_X0 + (i + 0.5) * bw, 0.52, cz + COUNTER_D / 2 + 0.01, bw - 0.14, 0.66, 0.03, TIMBER_DARK);
  }
  // the till end, and the scales beside it
  box(parts, COUNTER_X1 - 0.55, COUNTER_H + 0.16, cz, 0.42, 0.26, 0.34, TIN);
  cyl(parts, COUNTER_X1 - 1.35, COUNTER_H + 0.06, cz + 0.02, 0.19, 0.06, BRASS, 12);
  box(parts, COUNTER_X1 - 1.35, COUNTER_H + 0.2, cz - 0.16, 0.16, 0.22, 0.05, BRASS);
  // whatever is left out on the slab — seeded, so the shop is always this shop
  const n = 3 + Math.floor(rand() * 3);
  for (let i = 0; i < n; i += 1) {
    const x = COUNTER_X0 + 0.5 + rand() * (w - 1.4);
    const r = 0.11 + rand() * 0.1;
    cyl(parts, x, COUNTER_H + 0.03 + r * 0.35, cz + (rand() - 0.5) * 0.22, r, r * 0.7, STOCK_TONES[Math.floor(rand() * STOCK_TONES.length)], 10);
  }
}

// Back-wall and side shelving, plus what is on it. Deliberately not full:
// the shop has been keeping going, not trading well.
function shelving(parts, rand) {
  const runs = [
    // [x0, x1, z, yaw] — a run is a straight line of bays against a wall
    { x0: -HALF_W, x1: HALF_W, z: -HALF_D + SHELF_D / 2, yaw: 0 },
    { x0: -HALF_D, x1: COUNTER_Z - 0.4, z: -HALF_W + SHELF_D / 2, yaw: Math.PI / 2 },
  ];
  for (const run of runs) {
    const len = run.x1 - run.x0;
    const mid = (run.x0 + run.x1) / 2;
    const place = (u, y, w, h, d, colour) => {
      // u is along the run; map it into world x/z through the run's yaw
      if (run.yaw === 0) box(parts, u, y, run.z, w, h, d, colour);
      else box(parts, run.z, y, u, d, h, w, colour);
    };
    // uprights and shelves
    place(mid, SHELF_TOP / 2, len, 0.06, SHELF_D, TIMBER_DARK);      // back board
    for (let l = 0; l < SHELF_LEVELS; l += 1) {
      const y = 0.34 + l * ((SHELF_TOP - 0.34) / (SHELF_LEVELS - 1));
      place(mid, y, len, 0.05, SHELF_D, TIMBER);
      // stock along this shelf: runs of tins and bottles with real gaps
      let u = run.x0 + 0.12;
      while (u < run.x1 - 0.2) {
        if (rand() < 0.34) { u += 0.18 + rand() * 0.5; continue; }   // a gap
        const tall = rand() < 0.35;
        const w = tall ? 0.09 : 0.11;
        const h = tall ? 0.28 : 0.13;
        place(u + w / 2, y + 0.025 + h / 2, w, h, w, STOCK_TONES[Math.floor(rand() * STOCK_TONES.length)]);
        u += w + 0.015;
      }
    }
  }
  // Hams and salami on a rail IN THE WINDOW, which is where a deli hangs
  // them. A first pass hung them over the keeper's side of the counter and
  // from the customer's eye they crossed the back shelving as one dark
  // horizontal bar — the rail read as a scaffold pole through the stock. In
  // the window they have the glass behind them instead of more shelving, and
  // they are the first thing you see on the way back out of the door.
  const railZ = HALF_D - 0.52;
  const railX0 = WIN_X0 + 0.35;
  const railX1 = WIN_X1 - 0.35;
  box(parts, (railX0 + railX1) / 2, 2.42, railZ, railX1 - railX0, 0.05, 0.05, TIN);
  for (let i = 0; i < 5; i += 1) {
    const x = railX0 + (i + 0.5) * ((railX1 - railX0) / 5) + (rand() - 0.5) * 0.1;
    const len = 0.34 + rand() * 0.24;
    cyl(parts, x, 2.4 - len / 2 - 0.03, railZ, 0.065 + rand() * 0.03, len, STOCK_TONES[Math.floor(rand() * STOCK_TONES.length)], 8);
  }
  // crates on the customer floor, stacked where they were dropped
  const stacks = 3;
  for (let i = 0; i < stacks; i += 1) {
    const x = -2.6 + rand() * 5.0;
    const z = 0.6 + rand() * 3.0;
    const yaw = (rand() - 0.5) * 0.9;
    const high = 1 + Math.floor(rand() * 3);
    for (let k = 0; k < high; k += 1) {
      box(parts, x, 0.16 + k * 0.32, z, 0.62, 0.3, 0.44, k % 2 ? TIMBER_DARK : TIMBER, yaw);
    }
  }
}

function buildLights(scene) {
  // Physical units — the same scale the street runs on, where the player
  // torch is 18 (see CLAUDE.md). A room lit "correctly" on the legacy scale
  // renders black here.
  const hemi = new THREE.HemisphereLight(0x3a3122, 0x141108, 0.7);
  scene.add(hemi);
  // two ceiling fittings, warm and tired. The first pass ran these at 16/11
  // and the room read as a lit modern shop: the walls sat near the paper tone
  // across the whole frame and nothing had a dark side. Lower, with the
  // reach pulled in, so the light falls off between the fittings.
  const back = new THREE.PointLight(0xffd9a0, 11, 9.5, 2);
  back.position.set(-0.3, ROOM_H - 0.42, -2.4);
  scene.add(back);
  const front = new THREE.PointLight(0xffd9a0, 7.5, 8.5, 2);
  front.position.set(0.4, ROOM_H - 0.42, 2.1);
  scene.add(front);
  // daylight through the shopfront. A directional rather than an area light:
  // it is the only thing in here that has to read as coming from OUTSIDE, and
  // the direction is what carries that, not the softness.
  const day = new THREE.DirectionalLight(0xc8bfa4, 0.5);
  day.position.set(0.6, 5.2, HALF_D + 7);
  day.target.position.set(-0.4, 0.6, -1.2);
  scene.add(day);
  scene.add(day.target);
  return { hemi, back, front, day };
}

export function buildInterior() {
  if (!interiorEnabled()) {
    return {
      enabled: false, scene: null, spawn: null, bounds: null, solids: [],
      layoutHash: 0, triangles: 0,
      enter() { return false; }, exit() { return false; },
      isInside: () => false, state: () => ({ enabled: false, inside: false }),
      // A no-op rather than an absent key: main.js drives this every frame
      // while inside, and the off arm must be callable without a guard at the
      // call site. The stub already lacks `lights`, which no gate reaches —
      // this one is reached on any build with the flag forced off.
      setDaylight() {},
      update() {}, dispose() {},
    };
  }

  const rand = makeRand(SHOP_SLUG);
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(FOG_COLOUR, FOG_DENSITY);
  // A room is a closed box, so in principle nothing shows the background. In
  // practice the door opening and the window did, and pure black behind a
  // wall reads as a rendering fault rather than as a dark shop. Same tone as
  // the fog, so a gap is a gap and not a hole.
  scene.background = new THREE.Color(FOG_COLOUR);

  const parts = [];
  shell(parts);
  counter(parts, rand);
  shelving(parts, rand);
  const merged = mergeGeometries(parts, false);
  for (const g of parts) g.dispose();
  const matte = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.94, metalness: 0.03 });
  const room = new THREE.Mesh(merged, matte);
  room.name = 'interior-room';
  scene.add(room);

  // The glazing — the shopfront window and the door's upper light — merged
  // into one mesh. Its own material because it is the only unlit thing in the
  // set. It shows nothing: see the note at the top of the file.
  const dg = doorGlassRect();
  const winPane = new THREE.PlaneGeometry(WIN_X1 - WIN_X0, WIN_TOP - WIN_SILL);
  winPane.translate((WIN_X0 + WIN_X1) / 2, (WIN_SILL + WIN_TOP) / 2, HALF_D - 0.02);
  const doorPane = new THREE.PlaneGeometry(dg.x1 - dg.x0, dg.y1 - dg.y0);
  doorPane.translate((dg.x0 + dg.x1) / 2, (dg.y0 + dg.y1) / 2, HALF_D - 0.02);
  const glassGeo = mergeGeometries([winPane, doorPane], false);
  winPane.dispose();
  doorPane.dispose();
  // A BASIC material, not a lit one, and pale rather than dark. The first
  // pass made the glass a dark standard material and the window read as a
  // hole punched in the wall — inside a shop by day the window is the
  // brightest thing in the room, and every capture looking toward the door
  // had a black rectangle where the daylight should be. Unlit means it does
  // not respond to the room's fittings, which is what a light box IS; the
  // tone is grimy warm rather than white, so it stays on § 1's page and
  // reads as glass that has not been cleaned since the power went.
  //
  // DoubleSide is load-bearing, not tidiness. A PlaneGeometry faces +Z, which
  // here is the STREET, so from inside the room the only face is the culled
  // one — the pane was invisible and the capture showed the empty background
  // through the wall opening. Changing the colour did nothing at all until
  // this was fixed, which is why the black window survived a tone pass.
  const glass = new THREE.Mesh(glassGeo, new THREE.MeshBasicMaterial({ color: GLASS, side: THREE.DoubleSide }));
  glass.name = 'interior-glass';
  scene.add(glass);
  // The pane is a COLOUR on an unlit material, deliberately, and that is why
  // driving it from the clock needs no suspend token. atmosphere owns fog and
  // toneMappingExposure and hands those over through acquireSuspend; this is
  // neither. Nothing outside the room can see this material, so writing it
  // every frame while inside cannot repaint the street.
  const glassDay = new THREE.Color(GLASS);
  const glassNight = new THREE.Color(GLASS_NIGHT);
  let daylight = 1;
  function setDaylight(sunAltitudeDeg) {
    const d = daylightFrom(sunAltitudeDeg);
    if (d === daylight) return;
    daylight = d;
    // d SQUARED, not d. The lerp runs in gamma space and the day tone is far
    // brighter than the night one, so a linear blend at d = 0.13 (3am, sun at
    // -3.7 degrees) still rendered the pane at twice the lit wall's luminance
    // — measured 78.2 against 42.2. Squared it reads 43.1, level with the
    // wall, and at midnight 35.6, just under it. That is what a shopfront
    // looks like from inside a lit room in the small hours. Daylight hours
    // are untouched: 171.6 at 08:00 and 13:00, 4x the wall.
    glass.material.color.copy(glassNight).lerp(glassDay, d * d);
  }

  const lights = buildLights(scene);

  // The bounds the camera is clamped inside, and the counter it cannot walk
  // through. Two axis-aligned boxes do the whole job (ROADMAP § E9: movement
  // bounds, not collision) — this must NOT grow into a physics system, and
  // deliberately does not touch src/collision.js, which resolves the player
  // against the STREET's solids and knows nothing about a second scene.
  const bounds = {
    minX: -HALF_W + 0.42, maxX: HALF_W - 0.42,
    minZ: -HALF_D + 0.42, maxZ: HALF_D - 0.42,
    floorY: 0,
  };
  const solids = [
    // the counter, grown by the player radius so the clamp can be a plain test
    {
      minX: COUNTER_X0 - 0.42, maxX: COUNTER_X1 + 0.42,
      minZ: COUNTER_Z - COUNTER_D / 2 - 0.42, maxZ: COUNTER_Z + COUNTER_D / 2 + 0.42,
    },
    // the back shelving run
    { minX: -HALF_W, maxX: HALF_W, minZ: -HALF_D, maxZ: -HALF_D + SHELF_D + 0.42 },
    // the west shelving run
    { minX: -HALF_W, maxX: -HALF_W + SHELF_D + 0.42, minZ: -HALF_D, maxZ: COUNTER_Z - 0.4 },
  ];

  // Where a visitor stands when they come in — the customer side, looking at
  // the counter. E9a.3 replaces this with the keeper's side.
  // yaw 0 is -Z, which is the back of the shop: controls' forward is
  // (-sin yaw, -cos yaw), the same convention the street spawn uses.
  const spawn = { x: 0.4, y: 1.7, z: 3.1, yaw: 0 };

  const triangles = merged.index
    ? merged.index.count / 3
    : merged.attributes.position.count / 3;

  // A cheap, order-sensitive digest of the finished layout, so the
  // determinism gate can compare two boots without comparing two pictures.
  let layoutHash = 2166136261;
  const pos = merged.attributes.position.array;
  for (let i = 0; i < pos.length; i += 1) {
    layoutHash ^= Math.round(pos[i] * 1000) | 0;
    layoutHash = Math.imul(layoutHash, 16777619);
  }
  layoutHash >>>= 0;

  let inside = false;

  function state() {
    return {
      enabled: true, inside, slug: SHOP_SLUG, name: SHOP_NAME, layoutHash, triangles,
      daylight, glassHex: glass.material.color.getHex(),
    };
  }

  return {
    enabled: true,
    scene,
    lights,
    spawn,
    bounds,
    solids,
    layoutHash,
    triangles,
    isInside: () => inside,
    setDaylight,
    state,
    // enter/exit only record which side of the threshold we are on and where
    // the camera goes. Everything that has to happen AROUND that — the scene
    // swap, the exposure token, the movement bounds — is main.js's, because
    // main.js is the only place that holds all three. E9a.2 wraps this in the
    // panel wipe; the split is deliberate so the wipe cannot become the thing
    // that decides whether you are indoors.
    enter() { if (inside) return false; inside = true; return true; },
    exit() { if (!inside) return false; inside = false; return true; },
    update() {},
    dispose() {
      merged.dispose();
      matte.dispose();
      glassGeo.dispose();
      glass.material.dispose();
    },
  };
}
