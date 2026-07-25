// Lit windows after dark — E2a. Without street lighting (see docs/ROADMAP.md
// E2 brief: the only lights in the scene are the player torch and the
// arc-flashes, both off/dim by day), a dark hour would otherwise be a black
// screen wherever the torch doesn't reach. One InstancedMesh of small warm
// glow quads, placed on upper storeys of street-facing frontage — the SAME
// frontage geometry src/shopfronts.js reads from src/frontage.js, so this
// never invents a wall the player couldn't otherwise see a shopfront on.
//
// Deliberately a SOFT GLOW, not a crisp rectangle (see docs/ROADMAP.md E2
// brief risk note): these are seeded independently of the photographed
// elevations' actual window positions and will not line up with them. A
// soft warm smudge reads fine slightly misaligned; a sharp-edged rectangle
// would not.

import * as THREE from 'three';
import { computeFrontageRuns } from './frontage.js';

const STOREY_M = 3.2; // matches world.js LEVEL_HEIGHT / shopfronts.js STOREY_M
const WINDOW_SPACING_M = 2.4;    // nominal along-wall candidate spacing
const WINDOW_W = 0.85;
const WINDOW_H = 1.15;
// Proud of the wall enough to clear src/shopfronts.js's own OUTWARD_EPS
// (0.25m) nudge, so the glow layers ON TOP of the façade texture rather than
// z-fighting or being occluded by it.
const OUTWARD_NUDGE = 0.34;
const LIT_CHANCE = 1 / 11; // brief: "roughly 1 in 10-12"
const MAX_WINDOW_INSTANCES = 4000;

function hash32(a, b) {
  let h = (a * 73856093) ^ (b * 19349663);
  h = Math.imul(h ^ (h >>> 13), 0x85ebca6b);
  h ^= h >>> 16;
  return h >>> 0;
}
function hash01(a, b) { return (hash32(a, b) % 100000) / 100000; }

// A soft radial warm glow, raw sRGB bytes (same discipline as every other
// canvas bake in this project — ACES + exposure would otherwise lift a
// naively-picked mid-tone far brighter than intended).
function makeGlowTexture() {
  const S = 64;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = S;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  grad.addColorStop(0, 'rgba(255, 214, 150, 0.95)');
  grad.addColorStop(0.5, 'rgba(255, 190, 110, 0.55)');
  grad.addColorStop(1, 'rgba(255, 170, 90, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, S, S);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function buildWindows(assets, world, scene) {
  const buildings = (assets && assets.leith && assets.leith.buildings) || [];
  const nearest = world && world.nearestStreetPoint;
  const groundHeight = world && world.groundHeight;
  if (!buildings.length || !nearest) return { mesh: null, count: 0, setGlow() {} };

  const candidates = []; // {x, y, z, yaw, dist}

  buildings.forEach((building, bi) => {
    const levels = Math.max(1, building.levels || 1);
    if (levels < 2) return; // no upper storey to put a window on
    const runs = computeFrontageRuns(building, nearest);
    runs.forEach((run, ri) => {
      if (run.len < 1) return;
      const mx = (run.ax + run.bx) / 2, mz = (run.az + run.bz) / 2;
      const np = nearest(mx, mz);
      if (!np || !np.point) return;

      // Outward normal: perpendicular to the run, flipped to point toward
      // the street point — same construction src/frontage.js uses to decide
      // frontage in the first place, just resolved here since
      // computeFrontageRuns doesn't hand back the resolved normal.
      let nx = -run.dirz, nz = run.dirx;
      const dsx = np.point[0] - mx, dsz = np.point[1] - mz;
      if (nx * dsx + nz * dsz < 0) { nx = -nx; nz = -nz; }
      const yaw = Math.atan2(nx, nz);

      const slots = Math.max(1, Math.round(run.len / WINDOW_SPACING_M));
      for (let si = 0; si < slots; si++) {
        const seed = ri * 4099 + si;
        if (hash01(bi, seed) >= LIT_CHANCE) continue; // most candidates stay unlit
        const t = (si + 0.5) / slots;
        const px = run.ax + run.dirx * run.len * t + nx * OUTWARD_NUDGE;
        const pz = run.az + run.dirz * run.len * t + nz * OUTWARD_NUDGE;
        // Upper storeys only (storey index 1..levels-1); jittered which
        // storey and slightly within it so the result isn't a rigid grid.
        const storey = 1 + Math.floor(hash01(bi, seed + 1) * (levels - 1));
        const withinStorey = 0.3 + hash01(bi, seed + 2) * 0.4;
        const baseY = groundHeight ? groundHeight(px, pz) : 0;
        const py = baseY + storey * STOREY_M + withinStorey * STOREY_M;
        const dNear = nearest(px, pz);
        candidates.push({ x: px, y: py, z: pz, yaw, dist: dNear ? dNear.distance : 0 });
      }
    });
  });

  candidates.sort((a, b) => a.dist - b.dist);
  const dropped = Math.max(0, candidates.length - MAX_WINDOW_INSTANCES);
  const kept = dropped > 0 ? candidates.slice(0, MAX_WINDOW_INSTANCES) : candidates;
  if (dropped > 0) {
    console.warn(`[windows] ${dropped} candidate lit windows beyond ${MAX_WINDOW_INSTANCES} dropped (furthest-from-street first)`);
  }

  if (!kept.length) return { mesh: null, count: 0, setGlow() {} };

  const geo = new THREE.PlaneGeometry(WINDOW_W, WINDOW_H);
  const material = new THREE.MeshBasicMaterial({
    map: makeGlowTexture(),
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    // FrontSide, not DoubleSide: the quad's local +Z (its front face, per
    // three.js's plane convention) is rotated to face the outward wall
    // normal — i.e. toward the street, the only side a player ever sees a
    // window from (the wall itself blocks the other side). DoubleSide would
    // also be measurably more expensive: three.js r185 draws a
    // DoubleSide+transparent InstancedMesh as two passes (front then back),
    // doubling this mesh's draw-call cost for a side nothing ever sees.
    side: THREE.FrontSide,
  });
  // Opt out of atmosphere's unlit-material tint registry (src/atmosphere.js)
  // — this material's own opacity IS the darkness signal; tinting it too
  // would fight that.
  material.userData.unlit = false;

  const mesh = new THREE.InstancedMesh(geo, material, kept.length);
  mesh.name = 'lit-windows';
  const m = new THREE.Matrix4();
  const pos = new THREE.Vector3();
  const quat = new THREE.Quaternion();
  const euler = new THREE.Euler();
  const scale = new THREE.Vector3(1, 1, 1);
  kept.forEach((c, i) => {
    pos.set(c.x, c.y, c.z);
    euler.set(0, c.yaw, 0);
    quat.setFromEuler(euler);
    m.compose(pos, quat, scale);
    mesh.setMatrixAt(i, m);
  });
  mesh.instanceMatrix.needsUpdate = true;
  scene.add(mesh);

  function setGlow(intensity) {
    material.opacity = Math.max(0, Math.min(1, intensity));
  }

  return { mesh, count: kept.length, dropped, setGlow };
}
