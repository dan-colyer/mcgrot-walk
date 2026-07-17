// The ground: tarmac, paving, tram rails, and the works that never finished.
//
// WHY THESE TEXTURES ARE NOT AI-GENERATED. The Phase 4 plan earmarked FLUX for
// the tarmac, on the grounds that a grubby road surface is hard procedurally.
// That's true, and it's still the wrong call — because a road texture has to
// TILE. It repeats every few metres for 1.6km, at grazing angles, right under
// the player's eye, where a seam is a bright line running the length of Leith
// Walk. FLUX gives no seamlessness guarantee; periodic value noise is seamless
// by construction. Character is worth less here than the absence of a seam, so
// this is all canvas. (Cost: £0. The AI budget stays unspent, as in Phase 3.)
//
// The gag this file exists to set up: the tram works were never finished. The
// rails run up the Walk and simply STOP, mid-carriageway, in the middle of
// nothing. Everything else — the trenches, the cones, the hoarding still
// promising completion in spring 2023 — hangs off that.

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Seeded: the layout of every pothole must be identical on every reload.
const rand = (() => {
  let s = 0x5eed1e;
  return () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
})();

// Metres of world covered by one repeat of each texture. Small enough to hold
// detail, large enough that the eye doesn't catch the repeat.
export const TARMAC_METRES = 8;
export const PAVEMENT_METRES = 2.4; // 4x4 slabs of 0.6m — see makePavementTexture

const RAIL_GAUGE = 1.435;  // standard gauge, as actually laid on Leith Walk
const RAIL_WIDTH = 0.075;
const RAIL_HEIGHT = 0.09;  // rails are OBJECTS. A flat strip on the tarmac, no
                           // matter how it's coloured, reads as a painted line.
                           // The dressing group sits at y=0 and the road surface
                           // at y=0.03, so the bottom third of this profile is
                           // buried in the tarmac (as a real rail is) and ~6cm of
                           // head stands proud.
const RAIL_END = 620;      // metres up the Walk where the works simply stopped

const POTHOLE_COUNT = 90;
const PUDDLE_COUNT = 34;
const DECAL_Y = 0.040;     // above the road (0.03), below the façade bases (0.05).
                           // polygonOffset does the real anti-z-fight work; this
                           // margin just keeps the two off the same plane.

// ---------------------------------------------------------------------------
// Tileable noise. The period P wraps the lattice, so the canvas edges match and
// the texture repeats without a seam — the whole reason this is procedural.
// ---------------------------------------------------------------------------

export function hash2(x, y, seed) {
  let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(seed, 2246822519);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

function pnoise(x, y, P, seed) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const w = (a, b) => hash2(((a % P) + P) % P, ((b % P) + P) % P, seed);
  const a = w(xi, yi), b = w(xi + 1, yi), c = w(xi, yi + 1), d = w(xi + 1, yi + 1);
  return (a + (b - a) * u) + ((c + (d - c) * u) - (a + (b - a) * u)) * v;
}

// Octaves double both frequency AND period together, so every octave still
// wraps at the texture edge.
export function fbmP(x, y, P, octaves, seed) {
  let v = 0, amp = 0.5, f = 1;
  for (let i = 0; i < octaves; i++) {
    v += amp * pnoise(x * f, y * f, P * f, seed + i * 17);
    f *= 2;
    amp *= 0.5;
  }
  return v;
}

export function finishTexture(canvas, repeat) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  // A road is seen almost edge-on. Without anisotropic filtering the surface
  // dissolves into shimmering mush a few metres out. Three clamps this to the
  // hardware maximum, so 16 is safe to ask for.
  tex.anisotropy = 16;
  if (repeat) tex.repeat.set(repeat[0], repeat[1]);
  return tex;
}

// ---------------------------------------------------------------------------
// Tarmac: worn, patched, cracked
// ---------------------------------------------------------------------------

export function makeTarmacTexture() {
  const S = 512;
  const P = 8; // noise cells across the tile
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = S;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(S, S);
  const px = img.data;

  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const nx = (x / S) * P, ny = (y / S) * P;

      // Base grade: cold, dirty near-black. Leith tarmac is not "asphalt grey".
      let r = 44, g = 45, b = 41;

      // Broad tonal drift — the road is never one flat value.
      const drift = fbmP(nx, ny, P, 4, 1) - 0.5;
      r += drift * 26; g += drift * 26; b += drift * 22;

      // Patch repairs: darker, fresher tar laid over old, in irregular slabs.
      const patch = fbmP(nx * 0.5, ny * 0.5, Math.max(1, P >> 1), 2, 7);
      if (patch > 0.60) {
        const k = Math.min(1, (patch - 0.60) * 6);
        r += (26 - r) * 0.55 * k; g += (26 - g) * 0.55 * k; b += (25 - b) * 0.55 * k;
      }

      // Aggregate: the chips in the surface. Pure per-pixel speckle, no noise
      // lattice — this is what stops it reading as blurry plastic.
      const grit = hash2(x, y, 99);
      const chip = grit > 0.86 ? (grit - 0.86) * 300 : (grit < 0.10 ? -grit * 90 : 0);
      r += chip; g += chip; b += chip * 0.9;

      // Cracks: the contour where a noise field passes through 0.5. Left plain,
      // those contours are smooth closed loops and read as WORMS crawling on the
      // road. Warping the domain by a second noise field breaks the loops into
      // something that branches and wanders like a real crack, and they have to
      // be kept thin — a fat crack is a drawn squiggle.
      const wx = nx * 1.6 + fbmP(nx * 3.0, ny * 3.0, P * 4, 2, 55) * 1.4;
      const wy = ny * 1.6 + fbmP(nx * 3.0 + 9, ny * 3.0 + 9, P * 4, 2, 71) * 1.4;
      const cr = Math.abs(fbmP(wx, wy, P * 2, 3, 21) - 0.5);
      if (cr < 0.012) {
        const k = 1 - cr / 0.012;
        r -= 15 * k; g -= 15 * k; b -= 14 * k;
      }

      const i = (y * S + x) * 4;
      px[i] = Math.max(0, Math.min(255, r));
      px[i + 1] = Math.max(0, Math.min(255, g));
      px[i + 2] = Math.max(0, Math.min(255, b));
      px[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return finishTexture(canvas);
}

// ---------------------------------------------------------------------------
// Pavement: grey slabs, chipped, grouted with moss and filth
// ---------------------------------------------------------------------------

export function makePavementTexture() {
  const S = 512;
  const P = 8;
  // 4x4 slabs of 0.6m across a 2.4m tile. It was 2x2, and that was a bug you
  // could see from across the street: slab tone is keyed on the TILE-LOCAL slab
  // index, which with 2x2 is only ever 0 or 1, so every tile carried the exact
  // same four tones and the pavement came out as a hard checkerboard repeating
  // every 1.2m. Sixteen slabs per tile breaks the eye's lock on the period.
  const SLABS = 4;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = S;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(S, S);
  const px = img.data;
  const cell = S / SLABS;
  const JOINT = 3; // pixels of mortar

  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const sx = Math.floor(x / cell), sy = Math.floor(y / cell);
      const inX = x - sx * cell, inY = y - sy * cell;
      const joint = inX < JOINT || inY < JOINT || inX > cell - JOINT || inY > cell - JOINT;

      // Per-slab tone, so no two slabs match — the giveaway of a fake pavement.
      const slabTone = (hash2(sx, sy, 5) - 0.5) * 18;
      let r = 78 + slabTone, g = 77 + slabTone, b = 71 + slabTone;

      const nx = (x / S) * P, ny = (y / S) * P;
      const grime = fbmP(nx, ny, P, 4, 3) - 0.5;
      r += grime * 34; g += grime * 34; b += grime * 30;

      if (joint) {
        // Mortar: darker, and greener — moss gets into every joint in Leith.
        r *= 0.52; g *= 0.56; b *= 0.48;
      }

      const grit = hash2(x, y, 41);
      const chip = grit > 0.90 ? (grit - 0.90) * 160 : 0;
      r += chip; g += chip; b += chip;

      const i = (y * S + x) * 4;
      px[i] = Math.max(0, Math.min(255, r));
      px[i + 1] = Math.max(0, Math.min(255, g));
      px[i + 2] = Math.max(0, Math.min(255, b));
      px[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return finishTexture(canvas);
}

// ---------------------------------------------------------------------------
// Decal sprites (RGBA, alpha-cut): potholes and standing water
// ---------------------------------------------------------------------------

// Shared scaffold: a ragged-edged blob. `shade(t, x, y)` returns [r,g,b,a] for a
// normalised radius t (0 centre, 1 edge). 256px, not 128 — a 128px blob stretched
// over two metres of road is visibly soft, and a soft-edged dark patch does not
// read as a hole, it reads as a stain.
function makeBlobTexture(ragged, shade) {
  const S = 256;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = S;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(S, S);
  const px = img.data;
  const c = S / 2;

  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const dx = (x - c) / c, dy = (y - c) / c;
      const ang = Math.atan2(dy, dx);
      const dist = Math.hypot(dx, dy);
      // Perturb the radius by angle, or it's a circle and reads as a sticker.
      const wob = 0.70 + 0.26 * fbmP(
        Math.cos(ang) * 2 + 4, Math.sin(ang) * 2 + 4, 8, 3, ragged
      );
      const [r, g, b, a] = shade(dist / wob, x, y);
      const i = (y * S + x) * 4;
      px[i] = Math.max(0, Math.min(255, r));
      px[i + 1] = Math.max(0, Math.min(255, g));
      px[i + 2] = Math.max(0, Math.min(255, b));
      px[i + 3] = Math.max(0, Math.min(255, a));
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 16;
  return tex;
}

function lerp3(a, b, t) {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

// A pothole is not a dark smudge. It reads as a hole because of its BROKEN LIP:
// a near-black void, ringed by pale exposed aggregate where the tarmac has
// crumbled back. Take the lip away and you have an oil stain.
function makePotholeTexture() {
  const VOID = [10, 10, 9];
  const WALL = [40, 39, 35];
  const LIP = [104, 100, 88]; // shattered aggregate and old concrete beneath
  return makeBlobTexture(11, (t, x, y) => {
    const grit = hash2(x, y, 63);
    let col;
    if (t < 0.72) {
      col = lerp3(VOID, WALL, smooth(0, 0.72, t));
    } else {
      col = lerp3(WALL, LIP, smooth(0.72, 0.97, t));
      col = col.map((v) => v + (grit - 0.5) * 26); // the lip is rubble, not paint
    }
    // A crisp edge. Feathering it is what made the first attempt look like a stain.
    const a = (1 - smooth(0.90, 1.0, t)) * 255;
    return [col[0], col[1], col[2], a];
  });
}

// Standing water is a MIRROR of that filthy sky, so it takes the sky's own
// colour — anything bluer reads as a swimming pool. Flat and smooth in the
// middle (no aggregate: the water hides it), darkening to sodden tarmac at the
// rim where the puddle thins out.
function makePuddleTexture() {
  const WATER = [104, 110, 96]; // the overcast band overhead, reflected
  const SHALLOW = [52, 54, 48]; // wet tarmac showing through at the edges
  return makeBlobTexture(23, (t) => {
    const col = lerp3(WATER, SHALLOW, smooth(0.35, 1.0, t));
    const a = (1 - smooth(0.86, 1.0, t)) * 255;
    return [col[0], col[1], col[2], a];
  });
}

function smooth(e0, e1, x) {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0 || 1e-6)));
  return t * t * (3 - 2 * t);
}

// ---------------------------------------------------------------------------
// Road dressing: rails, potholes, puddles
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Bare earth: the base terrain everywhere road and pavement don't reach.
// Replaces the flat 0x453a28 Lambert plane, which read as a smooth MUD DUNE
// wherever it filled a gap — most damningly the Elm Row garden island, which
// half-fills every hero shot of Valvona & Crolla.
// ---------------------------------------------------------------------------

export const EARTH_METRES = 26;

export function makeEarthTexture() {
  const S = 512;
  const P = 8;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = S;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(S, S);
  const px = img.data;

  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const nx = (x / S) * P, ny = (y / S) * P;

      // Base: the same muddy rust-brown family as the old flat colour, so the
      // palette holds — just no longer a single value.
      let r = 62, g = 52, b = 36;
      const drift = fbmP(nx, ny, P, 4, 131) - 0.5;
      r += drift * 30; g += drift * 26; b += drift * 20;

      // Scrub: patches of sick olive weed-growth, thresholded so they clump.
      const scrub = fbmP(nx * 0.9 + 3, ny * 0.9 + 3, P, 3, 137);
      if (scrub > 0.56) {
        const k = Math.min(1, (scrub - 0.56) * 5);
        r += (52 - r) * 0.6 * k; g += (60 - g) * 0.6 * k; b += (34 - b) * 0.6 * k;
      }

      // Damp: darker waterlogged hollows.
      const damp = fbmP(nx * 0.6 + 11, ny * 0.6 + 11, P, 3, 149);
      if (damp < 0.42) {
        const k = Math.min(1, (0.42 - damp) * 4);
        r *= 1 - 0.28 * k; g *= 1 - 0.26 * k; b *= 1 - 0.22 * k;
      }

      // Grit — stones, glass, rubble crumbs. Same trick as the tarmac chips.
      const grit = hash2(x, y, 151);
      const chip = grit > 0.90 ? (grit - 0.90) * 220 : (grit < 0.07 ? -grit * 120 : 0);
      r += chip; g += chip * 0.95; b += chip * 0.8;

      const i = (y * S + x) * 4;
      px[i] = Math.max(0, Math.min(255, r));
      px[i + 1] = Math.max(0, Math.min(255, g));
      px[i + 2] = Math.max(0, Math.min(255, b));
      px[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return finishTexture(canvas);
}

// ---------------------------------------------------------------------------
// The Elm Row garden island: one non-repeating decal of overgrown gardens —
// rank grass, bushes gone feral, dry trampled lines. Alpha-feathered edges so
// it sits on the earth without a hard rectangle seam.
// ---------------------------------------------------------------------------

export function makeGardenTexture() {
  // One decal stretched over ~80m: features must be high-frequency in texture
  // space to read as ~2-4m clumps on the ground (P=8 at 256px rendered as a
  // flat bowling green).
  const S = 512;
  const P = 22;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = S;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(S, S);
  const px = img.data;

  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const nx = (x / S) * P, ny = (y / S) * P;

      // Rank unmown grass — dark olive, not lawn-green; ACES exposure lifts a
      // real green to fluorescent bowling-green.
      let r = 40, g = 47, b = 26;
      const drift = fbmP(nx, ny, P, 4, 211) - 0.5;
      r += drift * 30; g += drift * 36; b += drift * 20;

      // Feral bushes: big dark clumps, covering a good half of the strip.
      const bush = fbmP(nx * 0.55 + 5, ny * 0.55 + 5, P, 3, 223);
      if (bush > 0.50) {
        const k = Math.min(1, (bush - 0.50) * 5);
        r += (24 - r) * 0.8 * k; g += (33 - g) * 0.8 * k; b += (17 - b) * 0.8 * k;
      }
      // Dead patches — dried stalks and litter-choked corners.
      const dead = fbmP(nx * 0.7 + 17, ny * 0.7 + 2, P, 3, 239);
      if (dead > 0.62) {
        const k = Math.min(1, (dead - 0.62) * 6);
        r += (66 - r) * 0.55 * k; g += (58 - g) * 0.55 * k; b += (36 - b) * 0.55 * k;
      }

      // Dry desire-lines where feet still cross the gardens.
      const path = Math.abs(fbmP(nx * 0.5 + 9, ny * 2.2, P, 2, 227) - 0.5);
      if (path < 0.035) {
        const k = 1 - path / 0.035;
        r += (74 - r) * 0.5 * k; g += (64 - g) * 0.5 * k; b += (44 - b) * 0.5 * k;
      }

      const grit = hash2(x, y, 229);
      const blade = grit > 0.88 ? (grit - 0.88) * 160 : 0;
      r += blade * 0.7; g += blade; b += blade * 0.5;

      // Feather: full alpha in the body, ragged noise-eaten fade in the outer
      // 14% so the decal never shows a straight edge.
      const ex = Math.min(x, S - 1 - x) / S;
      const ey = Math.min(y, S - 1 - y) / S;
      const edge = Math.min(ex, ey) / 0.14;
      const rag = fbmP(nx * 2, ny * 2, P * 2, 2, 233) * 0.5;
      const a = Math.max(0, Math.min(1, edge - rag));

      const i = (y * S + x) * 4;
      px[i] = Math.max(0, Math.min(255, r));
      px[i + 1] = Math.max(0, Math.min(255, g));
      px[i + 2] = Math.max(0, Math.min(255, b));
      px[i + 3] = Math.round(a * 255);
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 16; // seen edge-on like the road — without this it smears
  return tex;
}

export function buildRoadDressing(world, scene) {
  const line = world.streetLine || [];
  if (line.length < 2) return { group: new THREE.Group() };

  const group = new THREE.Group();
  scene.add(group);

  buildRails(line, group);
  buildDecals(line, group);

  return { group };
}

// Cumulative-distance sampler along the chain. Exported for cars.js, which
// parks wrecks by chainage the same way the rails and decals are laid.
export function sampleAt(line, target) {
  let acc = 0;
  for (let i = 0; i < line.length - 1; i++) {
    const [ax, az] = line[i];
    const [bx, bz] = line[i + 1];
    const dx = bx - ax, dz = bz - az;
    const L = Math.hypot(dx, dz);
    if (acc + L >= target) {
      const t = L > 0 ? (target - acc) / L : 0;
      return { point: [ax + dx * t, az + dz * t], tangent: [dx / (L || 1), dz / (L || 1)] };
    }
    acc += L;
  }
  return null;
}

function chainLength(line) {
  let len = 0;
  for (let i = 1; i < line.length; i++) {
    len += Math.hypot(line[i][0] - line[i - 1][0], line[i][1] - line[i - 1][1]);
  }
  return len;
}

// Two rusted rails that run up the Walk and stop dead at RAIL_END.
//
// Extruded along the street chain with a real cross-section — outer face, top
// face, inner face — rather than as a flat ribbon. The profile is the whole
// point: the three faces take the hemisphere and sun light at different angles,
// so the rail catches a highlight along its head and goes dark down its sides.
// The first attempt was a flat quad at y=0.045 and it read, unmistakably, as an
// orange line painted down the middle of the road.
function buildRails(line, group) {
  const total = Math.min(RAIL_END, chainLength(line));
  const STEP = 3;
  const geos = [];
  // Cross-section in (across, up), relative to the rail's own centreline.
  const PROFILE = [
    [-RAIL_WIDTH / 2, 0],
    [-RAIL_WIDTH / 2, RAIL_HEIGHT],
    [RAIL_WIDTH / 2, RAIL_HEIGHT],
    [RAIL_WIDTH / 2, 0],
  ];

  for (const side of [-1, 1]) {
    const verts = [];
    const idx = [];
    let rings = 0;

    for (let dist = 0; dist <= total; dist += STEP) {
      const s = sampleAt(line, dist);
      if (!s) break;
      const [tx, tz] = s.tangent;
      const px = -tz, pz = tx;
      const cx = s.point[0] + px * side * (RAIL_GAUGE / 2);
      const cz = s.point[1] + pz * side * (RAIL_GAUGE / 2);
      for (const [across, up] of PROFILE) {
        verts.push(cx + px * across, up, cz + pz * across);
      }
      rings++;
    }
    if (rings < 2) continue;

    const K = PROFILE.length;
    for (let i = 0; i < rings - 1; i++) {
      for (let k = 0; k < K - 1; k++) {   // K-1: open profile, no underside
        const a = i * K + k, b = i * K + k + 1;
        const c = (i + 1) * K + k, d = (i + 1) * K + k + 1;
        idx.push(a, c, b, b, c, d);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    geos.push(geo);
  }

  if (!geos.length) return;
  const merged = mergeGeometries(geos, false);
  const mat = new THREE.MeshLambertMaterial({
    // Dark, desaturated iron-rust. ACES at exposure 1.46 lifts and warms
    // everything, so a colour picked to "look like rust" in the swatch comes out
    // of the renderer as bright terracotta. Pick it dark and let the tone mapping
    // bring it up.
    color: 0x3f342c,
    side: THREE.DoubleSide,
  });
  group.add(new THREE.Mesh(merged, mat));
}

// Potholes and standing water, scattered over the carriageway only. Separate
// quads rather than paint in the tarmac texture, so they don't repeat every 8m.
function buildDecals(line, group) {
  const len = chainLength(line);
  const potholeTex = makePotholeTexture();
  const puddleTex = makePuddleTexture();

  const mk = (tex, count, halfWidth, sizeMin, sizeMax, opacity) => {
    const geos = [];
    for (let i = 0; i < count; i++) {
      const dist = 20 + rand() * Math.max(1, len - 40);
      const s = sampleAt(line, dist);
      if (!s) continue;
      const [tx, tz] = s.tangent;
      const px = -tz, pz = tx;
      const off = (rand() * 2 - 1) * halfWidth;
      const x = s.point[0] + px * off;
      const z = s.point[1] + pz * off;
      const size = sizeMin + rand() * (sizeMax - sizeMin);

      const g = new THREE.PlaneGeometry(size, size * (0.6 + rand() * 0.7));
      g.rotateX(-Math.PI / 2);
      g.rotateY(rand() * Math.PI * 2);
      g.translate(x, DECAL_Y, z);
      geos.push(g);
    }
    if (!geos.length) return;
    const mat = new THREE.MeshLambertMaterial({
      map: tex,
      transparent: true,
      opacity,
      depthWrite: false,
      // The road sits at y=0.03 and the façade bases at y=0.05 — far too tight a
      // gap to separate a decal by height alone. polygonOffset biases the DEPTH
      // rather than the position, which is what keeps these from z-fighting the
      // tarmac at the grazing angles you actually view a road from.
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    });
    group.add(new THREE.Mesh(mergeGeometries(geos, false), mat));
  };

  // Carriageway is 14m wide; keep decals inside it, off the pavements.
  mk(potholeTex, POTHOLE_COUNT, 6.2, 0.7, 2.4, 0.92);
  mk(puddleTex, PUDDLE_COUNT, 6.2, 1.2, 3.6, 0.5);
}
