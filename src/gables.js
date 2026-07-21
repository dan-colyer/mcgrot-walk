// Gable / blank-wall dressing — D7 Class B.
//
// The shopfront system (src/shopfronts.js) only ever treats a building's
// STREET-FACING wall(s) — the ones computeFrontageRuns finds. Every other
// big wall a player can actually see (a party-wall gable end, a set-back
// building glimpsed through a gap in the frontage row, chamfer returns the
// frontage system didn't claim) falls straight through to world.js's raw
// coursed-stone material: fine at arm's length, a dead flat "blank box" at
// gable scale — the single biggest fault in two of D6's re-scored poses
// (0465-west, 1570-east: "flat featureless dark box" / "blank dark gable").
//
// A borrowed shopfront photo would look wrong here (a real Edinburgh gable
// is not a shop window), so this bakes its own small canvas atlas: plain
// coursed-stone-and-soot variants, a few blocked-up window outlines, and on
// roughly 1 in 3 faces a faded painted "ghost sign" using a real in-world
// business name (never comic text — the verbatim rule is about comics, not
// shopfronts, but ghost signs still only ever use manifest business names,
// nothing invented). One quad per qualifying wall face, one merged mesh,
// +1 draw call total.

import * as THREE from 'three';
import { pickBuildingColor } from './world.js';
import { computeFrontageRuns } from './frontage.js';

const STOREY_M = 3.2; // matches world.js LEVEL_HEIGHT / shopfronts.js STOREY_M
const OUTWARD_EPS = 0.1; // proud of the base extrusion wall, same idea as shopfronts.js
// D8/task1: was 6 — measured luminance at the named cropped-mid-facade poses
// (0125-east, 1570-east, 0380-west, 0635-west, 1400-east) showed these are a
// COVERAGE gap, not a tone problem: 3-6m return-wall edges between two
// already-dressed faces, each with 40-74 sq m of real visible area on a
// 4-storey building, excluded on width alone. MIN_AREA_M2 below already does
// the real "is this big enough to read as a wall" test; this just stops it
// being overridden by a width-only cutoff that doesn't account for height.
const MIN_EDGE_M = 2.5;
const MAX_STREET_DIST = 60; // brief: within ~60m of the streetLine
const MIN_AREA_M2 = 40;   // brief: wall area >= ~40 sq m
const CLAIMED_TOLERANCE = 0.15; // metres: how close an edge must sit to a frontage run to count as "claimed"

const GABLE_TILE = 512;
const GABLE_VARIANTS = 4;   // plain stone/soot/blocked-window bakes
const GHOST_SIGN_COUNT = 4; // fixed, pre-baked ghost-sign name tiles
const GHOST_SIGN_CHANCE = 1 / 3;

function hash32(a, b) {
  let h = (a * 73856093) ^ (b * 19349663);
  h = Math.imul(h ^ (h >>> 13), 0x85ebca6b);
  h ^= h >>> 16;
  return h >>> 0;
}

function mulberry32(seed) {
  let s = seed | 0;
  return function () {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// A plain coursed-stone-and-soot bake, tonally in the same light-ashlar
// family as world.js's makeStoneTexture (that texture is multiplied by a
// per-building vertexColor tint to reach its final dark tone; this mesh
// uses the SAME per-building tint — see pickBuildingColor below — so it
// must start from the same light base, not bake the darkness in twice).
function drawGableBase(ctx, x, y, w, h, seed) {
  const rnd = mulberry32(seed * 7919 + 13);
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();

  ctx.fillStyle = 'rgb(150,146,134)';
  ctx.fillRect(x, y, w, h);

  // D8/task1: course/soot/window contrast raised across the board — the
  // 0.55-blended gable-tint fix that rescued 1570-east (a wall in shadow,
  // no direct sun) turned out not to be the whole story: 0720-east-close
  // flipped pass->fail in the D8 blind sweep on a wall that DOES catch full
  // light, called out as a "flat pale slab" — confirmed in-browser that
  // even with the tint removed entirely (material.color forced to white)
  // the wall still read flat, because these features were low-contrast
  // enough to wash out under bright light just as easily as they crushed to
  // black under dim light. Same root cause, opposite direction: the bake
  // itself didn't have enough contrast to survive either extreme. This is
  // the general fix; the per-face sun-facing tint blend above still helps
  // the shadow case on top of it.
  const courses = 20;
  const courseH = h / courses;
  for (let c = 0; c < courses; c++) {
    const cy = y + c * courseH;
    const blocks = 5 + Math.floor(rnd() * 3);
    for (let b = 0; b < blocks; b++) {
      const bx = x + (b / blocks) * w;
      const bw = w / blocks;
      const tone = (rnd() - 0.5) * 44;
      ctx.fillStyle = `rgba(${150 + tone},${146 + tone},${134 + tone},0.85)`;
      ctx.fillRect(bx, cy + 2, bw, courseH - 2);
    }
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.fillRect(x, cy, w, 2);
  }

  // Soot streaking — denser than makeStoneTexture's own grime pass, but
  // kept sparse enough that overlapping streaks don't compound into a
  // near-black tile — this is meant to read as a sooty version of the SAME
  // light ashlar tone next door, not a different, much darker material.
  for (let i = 0; i < 20; i++) {
    const sx = x + rnd() * w;
    const sw = 4 + rnd() * 12;
    const sTop = y + rnd() * h * 0.35;
    const sLen = h * (0.3 + rnd() * 0.45);
    const grad = ctx.createLinearGradient(0, sTop, 0, sTop + sLen);
    grad.addColorStop(0, 'rgba(20,18,15,0.4)');
    grad.addColorStop(1, 'rgba(20,18,15,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(sx, sTop, sw, sLen);
  }

  // Blocked-up window outlines — a recessed darker infill with a lintel-ish
  // lighter surround, never a real (implying-interior) window.
  const nWin = 2 + Math.floor(rnd() * 3);
  for (let i = 0; i < nWin; i++) {
    const ww = w * (0.12 + rnd() * 0.08);
    const wh = h * (0.15 + rnd() * 0.09);
    const wx = x + w * 0.08 + rnd() * (w * 0.84 - ww);
    const wy = y + h * 0.14 + rnd() * (h * 0.62 - wh);
    ctx.fillStyle = 'rgba(48,44,36,0.88)';
    ctx.fillRect(wx, wy, ww, wh);
    ctx.strokeStyle = 'rgba(112,106,90,0.5)';
    ctx.lineWidth = 3;
    ctx.strokeRect(wx + 1.5, wy + 1.5, ww - 3, wh - 3);
  }

  ctx.restore();
}

// Faded painted lettering — a real ghost sign is decades-old paint on
// stone, not a crisp modern decal: low opacity, brick-red, slightly
// crooked, sized to fit so it never looks like it was just applied.
function drawGhostSign(ctx, x, y, w, h, name, seed) {
  const rnd = mulberry32(seed * 104729 + 5);
  ctx.save();
  ctx.translate(x + w / 2, y + h * 0.4);
  ctx.rotate((rnd() - 0.5) * 0.05);
  const text = name.toUpperCase();
  let size = 72;
  ctx.font = `bold ${size}px Georgia, "Times New Roman", serif`;
  while (ctx.measureText(text).width > w * 0.8 && size > 16) {
    size -= 2;
    ctx.font = `bold ${size}px Georgia, "Times New Roman", serif`;
  }
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.globalAlpha = 0.2 + rnd() * 0.12;
  ctx.fillStyle = 'rgb(150,58,42)';
  ctx.fillText(text, 0, 0);
  ctx.restore();
}

function buildGableAtlas(ghostNames) {
  const cols = GABLE_VARIANTS;
  const rows = 2;
  const canvas = document.createElement('canvas');
  canvas.width = GABLE_TILE * cols;
  canvas.height = GABLE_TILE * rows;
  const ctx = canvas.getContext('2d');

  const baseUv = [];
  for (let v = 0; v < GABLE_VARIANTS; v++) {
    const x = v * GABLE_TILE, y = 0;
    drawGableBase(ctx, x, y, GABLE_TILE, GABLE_TILE, v);
    baseUv.push(uvRect(x, y, canvas.width, canvas.height));
  }

  const ghostUv = [];
  for (let g = 0; g < GHOST_SIGN_COUNT; g++) {
    const x = g * GABLE_TILE, y = GABLE_TILE;
    drawGableBase(ctx, x, y, GABLE_TILE, GABLE_TILE, g + 97);
    if (ghostNames[g]) drawGhostSign(ctx, x, y, GABLE_TILE, GABLE_TILE, ghostNames[g], g);
    ghostUv.push(uvRect(x, y, canvas.width, canvas.height));
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return { texture, baseUv, ghostUv };
}

function uvRect(x, y, cw, ch) {
  // flipY: canvas row 0 is at V=1
  return { u0: x / cw, u1: (x + GABLE_TILE) / cw, v0: 1 - (y + GABLE_TILE) / ch, v1: 1 - y / ch };
}

export function buildGables(assets, world, scene) {
  const buildings = (assets && assets.leith && assets.leith.buildings) || [];
  const manifest = assets && assets.facadeManifest;
  const nearest = world && world.nearestStreetPoint;
  if (!buildings.length || !nearest) return { mesh: null, count: 0 };

  // A small, fixed pool of ghost-sign names, deterministically chosen from
  // every business the manifest knows about — real, in-world names, never
  // invented text, but a BOUNDED set of baked tiles rather than one dynamic
  // canvas draw per building (this atlas is baked once, shared by ~hundreds
  // of gable faces).
  const allNames = [];
  if (manifest) {
    for (const mb of manifest.buildings) {
      for (const biz of mb.businesses || []) allNames.push(biz.name);
    }
  }
  const ghostNames = [];
  if (allNames.length) {
    for (let i = 0; i < GHOST_SIGN_COUNT; i++) {
      ghostNames.push(allNames[hash32(i, allNames.length) % allNames.length]);
    }
  }
  const atlas = buildGableAtlas(ghostNames);

  const positions = [];
  const uvs = [];
  const colors = [];
  const indices = [];
  let quadCount = 0;

  const emit = (u0, v0, u1, v1, ax, az, bx, bz, y0, y1, color) => {
    const base = quadCount * 4;
    positions.push(ax, y0, az, bx, y0, bz, bx, y1, bz, ax, y1, az);
    uvs.push(u0, v0, u1, v0, u1, v1, u0, v1);
    for (let i = 0; i < 4; i++) colors.push(color.r, color.g, color.b);
    indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
    quadCount++;
  };

  buildings.forEach((building, bi) => {
    const fp = building && building.footprint;
    if (!fp || fp.length < 3) return;
    const buildingHeightM = Math.max(1, building.levels || 1) * STOREY_M;

    let cx = 0, cz = 0;
    for (const p of fp) { cx += p[0]; cz += p[1]; }
    cx /= fp.length; cz /= fp.length;

    const runs = computeFrontageRunsSafe(building, nearest);
    // D8/task1: was the raw pickBuildingColor tint, uniformly blended toward
    // white — that first pass measured lum=28 (near-illegible) at
    // 1570-east-close/far, a wall facing away from the sun with only
    // ambient+hemisphere light reaching it, and blending 0.55 toward white
    // fixed it there. But a blanket blend also hit walls that DO catch the
    // sun (already well-lit, already legible) — 0720-east-close flipped
    // pass->fail in the D8 blind sweep with a NEW complaint ("flat pale
    // slab") the pre-blend render never had. So: blend per FACE, not per
    // building, based on whether that specific face's outward normal faces
    // the sun (src/world.js's DirectionalLight sits at (-200,300,150),
    // target defaults to the origin, so its horizontal direction is the
    // same everywhere in the scene — a plain dot-product test, no lighting
    // API needed here). Sun-facing faces keep a small blend (still needs
    // SOME lift over the raw tint, since even lit gables benefit slightly,
    // but nowhere near enough to flatten them); shadow-facing faces keep the
    // full lift that fixed 1570-east.
    const rawColor = pickBuildingColor(bi, building);
    const SUN_DIR_X = -0.8, SUN_DIR_Z = 0.6; // normalize(-200, 150) from world.js's sun position
    const SUNLIT_BLEND = 0.15, SHADOW_BLEND = 0.55;

    for (let i = 0; i < fp.length; i++) {
      const a = fp[i], b = fp[(i + 1) % fp.length];
      const ex = b[0] - a[0], ez = b[1] - a[1];
      const len = Math.hypot(ex, ez);
      if (len < MIN_EDGE_M) continue;
      if (edgeClaimed(a[0], a[1], b[0], b[1], runs)) continue;

      const mx = (a[0] + b[0]) / 2, mz = (a[1] + b[1]) / 2;
      const np = nearest(mx, mz);
      const nearA = nearest(a[0], a[1]);
      const nearB = nearest(b[0], b[1]);
      const edgeDist = Math.min(
        np ? np.distance : Infinity,
        nearA ? nearA.distance : Infinity,
        nearB ? nearB.distance : Infinity
      );
      if (edgeDist > MAX_STREET_DIST) continue;

      const area = len * buildingHeightM;
      if (area < MIN_AREA_M2) continue;

      // Outward normal + a/b orientation so the emitted quad's winding
      // faces away from the building (visible from the street), same
      // pattern as shopfronts.js's per-run normal flip.
      let sx = a[0], sz = a[1], dx = ex, dz = ez;
      let nx = -ez / len, nz = ex / len;
      if (nx * (mx - cx) + nz * (mz - cz) < 0) {
        nx = -nx; nz = -nz; sx = b[0]; sz = b[1]; dx = -ex; dz = -ez;
      }
      const ax2 = sx + nx * OUTWARD_EPS, az2 = sz + nz * OUTWARD_EPS;
      const bx2 = sx + dx + nx * OUTWARD_EPS, bz2 = sz + dz + nz * OUTWARD_EPS;

      const facesSun = nx * SUN_DIR_X + nz * SUN_DIR_Z > 0;
      const color = rawColor.clone().lerp(new THREE.Color(1, 1, 1), facesSun ? SUNLIT_BLEND : SHADOW_BLEND);

      const wantGhost = ghostNames.length && (hash32(bi, i * 31 + 7) % 1000) / 1000 < GHOST_SIGN_CHANCE;
      const tiles = wantGhost ? atlas.ghostUv : atlas.baseUv;
      const tileIdx = hash32(bi, i * 131 + 41) % tiles.length;
      const tile = tiles[tileIdx];
      const mirror = hash32(bi, i * 991 + 3) % 2 === 0;
      const u0 = mirror ? tile.u1 : tile.u0;
      const u1 = mirror ? tile.u0 : tile.u1;

      emit(u0, tile.v0, u1, tile.v1, ax2, az2, bx2, bz2, 0, buildingHeightM, color);
    }
  });

  if (!quadCount) return { mesh: null, count: 0 };

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();

  const mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({
    map: atlas.texture,
    vertexColors: true,
    flatShading: true,
  }));
  mesh.name = 'gable-dressing';
  scene.add(mesh);

  return { mesh, count: quadCount };
}

// A run is "claimed" if a candidate edge's midpoint sits on that run's own
// line segment — geometric containment rather than re-deriving raw edge
// indices, so it's unaffected by computeFrontageRuns' own wrap-around merge
// (which can lose an exact index range but never moves the run's geometry).
function edgeClaimed(ax, az, bx, bz, runs) {
  const mx = (ax + bx) / 2, mz = (az + bz) / 2;
  for (const r of runs) {
    const dx = r.bx - r.ax, dz = r.bz - r.az;
    const L2 = dx * dx + dz * dz || 1;
    const t = ((mx - r.ax) * dx + (mz - r.az) * dz) / L2;
    if (t < -0.01 || t > 1.01) continue;
    const px = r.ax + t * dx, pz = r.az + t * dz;
    if (Math.hypot(mx - px, mz - pz) < CLAIMED_TOLERANCE) return true;
  }
  return false;
}

function computeFrontageRunsSafe(building, nearest) {
  try {
    return computeFrontageRuns(building, nearest);
  } catch {
    return [];
  }
}
