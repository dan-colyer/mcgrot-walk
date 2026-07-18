// D4 eval harness — deterministic camera pose list for façade scoring.
//
// Reads docs/eval/streetline.json (a snapshot of world.streetLine, captured
// live from window.__mcgrotDebug.world.streetLine — see docs/eval/RUBRIC.md
// for how/when to refresh it) and emits docs/eval/poses.json: one entry per
// (chainage, side, distance) combination.
//
// Chainage step and side/distance offsets are documented in
// docs/eval/RUBRIC.md — this script is the single source of truth for the
// numbers, RUBRIC.md explains the reasoning.
//
//   node scripts/eval-poses.mjs

import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const evalDir = join(root, 'docs/eval');

const streetLine = JSON.parse(readFileSync(join(evalDir, 'streetline.json'), 'utf8'));
const manifest = JSON.parse(readFileSync(join(root, 'assets/shopfronts/manifest.json'), 'utf8'));

// D4.1/W3 — corridor clamp. The street polyline hugs the west building line
// in places (it stitched a minor OSM way), so a naive 12m offset can land a
// pose INSIDE or BEHIND a building there, letting the camera see the back
// face of a shopfront quad. For each candidate pose, pull the camera out to
// ~2m in front of the nearest frontage run it would otherwise cross. Outward
// direction per run is resolved via the coarse street-tangent + side-sign
// heuristic (no full footprint/centroid available in manifest.json) — good
// enough to fix "camera behind the wall", not a precise per-run normal.
const CLAMP_MARGIN = 2;      // metres kept in front of a crossed frontage plane
const CHAINAGE_WINDOW = 20;  // metres — only buildings this close to the pose's chainage are candidates

const buildingsBySide = { east: [], west: [] };
for (const b of manifest.buildings) {
  if (b.side === 'east' || b.side === 'west') buildingsBySide[b.side].push(b);
}

function clampPose(camX, camZ, chainage, side, streetNx, streetNz) {
  const sideSign = side === 'east' ? 1 : -1;
  let best = null;
  for (const b of buildingsBySide[side]) {
    if (Math.abs(b.chainage - chainage) > CHAINAGE_WINDOW) continue;
    for (const run of b.runs) {
      const ddx = run.bx - run.ax, ddz = run.bz - run.az;
      const len = Math.hypot(ddx, ddz);
      if (len < 0.3) continue;
      const ux = ddx / len, uz = ddz / len;
      // Outward (building -> street) points toward the centreline, i.e.
      // OPPOSITE the side's own stand direction (an east-side building's
      // frontage faces west) — flip toward -sideSign*streetN, not +sideSign*streetN.
      let nx = -uz, nz = ux;
      if (nx * streetNx * sideSign + nz * streetNz * sideSign > 0) { nx = -nx; nz = -nz; }
      const t = ((camX - run.ax) * ux + (camZ - run.az) * uz) / len;
      if (t < -0.1 || t > 1.1) continue; // camera doesn't project onto this run
      const d = nx * (camX - run.ax) + nz * (camZ - run.az);
      if (d < CLAMP_MARGIN && (!best || d < best.d)) {
        const clampedT = Math.max(0, Math.min(1, t));
        const px = run.ax + clampedT * ddx, pz = run.az + clampedT * ddz;
        best = { d, x: px + nx * CLAMP_MARGIN, z: pz + nz * CLAMP_MARGIN };
      }
    }
  }
  return best;
}

const CHAINAGE_STEP = 85; // metres — same spacing as the D0 audit (docs/audit/)
const SIDE_OFFSET = 12;   // metres from centreline — matches the brief's "~12m
                           // close-up" (camera stands on the target side) and
                           // "~25m across-street" (camera stands on the
                           // OPPOSITE side, so total gap ≈ 2×12m). Player is
                           // soft-clamped to 16m (src/controls.js MAX_OFFSET),
                           // so both poses are vantage points a player could
                           // actually stand at.
const EYE_Y = 1.7;

function cumulativeLengths(line) {
  const acc = [0];
  for (let i = 1; i < line.length; i++) {
    const [ax, az] = line[i - 1];
    const [bx, bz] = line[i];
    acc.push(acc[i - 1] + Math.hypot(bx - ax, bz - az));
  }
  return acc;
}

function pointAtChainage(line, lengths, chainage) {
  const total = lengths[lengths.length - 1];
  const c = Math.max(0, Math.min(total, chainage));
  let i = 1;
  while (i < lengths.length && lengths[i] < c) i++;
  i = Math.min(i, lengths.length - 1);
  const [ax, az] = line[i - 1];
  const [bx, bz] = line[i];
  const segLen = lengths[i] - lengths[i - 1];
  const t = segLen > 0 ? (c - lengths[i - 1]) / segLen : 0;
  const x = ax + (bx - ax) * t;
  const z = az + (bz - az) * t;
  const tlen = Math.hypot(bx - ax, bz - az) || 1;
  const tangent = [(bx - ax) / tlen, (bz - az) / tlen]; // north -> south
  return { x, z, tangent };
}

const lengths = cumulativeLengths(streetLine);
const totalLen = lengths[lengths.length - 1];

const poses = [];
for (let chainage = 40; chainage < totalLen; chainage += CHAINAGE_STEP) {
  const { x, z, tangent } = pointAtChainage(streetLine, lengths, chainage);
  // Outward normal, +east convention: rotate tangent (pointing south, +z) by
  // -90° gives (tz, -tx)... but we just need a consistent "east"/"west" pair,
  // not compass-true — the wall NX/NZ sign only needs to be consistent with
  // the sides the buildings actually front onto, which shopfronts.js derives
  // per-building from footprint centroid. For a fixed eval vantage point we
  // just need two opposite sides; label them east/west by x-sign convention
  // (leith.json origin: +x has run east-of-origin historically in this repo's
  // OSM conversion — see fetch-osm.mjs).
  const nx = -tangent[1];
  const nz = tangent[0];

  for (const side of ['east', 'west']) {
    const sign = side === 'east' ? 1 : -1;
    for (const distance of ['close', 'far']) {
      // close: stand ON the target side, 12m out, looking outward at it.
      // far: stand on the OPPOSITE side, 12m out, looking across at it.
      const standSign = distance === 'close' ? sign : -sign;
      const standSide = standSign === 1 ? 'east' : 'west';
      let camX = x + nx * SIDE_OFFSET * standSign;
      let camZ = z + nz * SIDE_OFFSET * standSign;
      const clamp = clampPose(camX, camZ, chainage, standSide, nx, nz);
      if (clamp) { camX = clamp.x; camZ = clamp.z; }
      const lookX = camX + nx * sign * 40; // look far enough to face the target side
      const lookZ = camZ + nz * sign * 40;
      poses.push({
        id: `${String(chainage).padStart(4, '0')}-${side}-${distance}`,
        chainage: Math.round(chainage),
        side,
        distance,
        camera: { x: Number(camX.toFixed(2)), y: EYE_Y, z: Number(camZ.toFixed(2)) },
        lookAt: { x: Number(lookX.toFixed(2)), y: EYE_Y, z: Number(lookZ.toFixed(2)) },
      });
    }
  }
}

writeFileSync(join(evalDir, 'poses.json'), JSON.stringify(poses, null, 2));
console.log(`${poses.length} poses written to docs/eval/poses.json (street length ${totalLen.toFixed(0)}m, step ${CHAINAGE_STEP}m)`);
