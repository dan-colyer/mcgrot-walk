// D4/W1 — the building manifest: every street-facing frontage building, with
// the SAME geometry the engine renders (src/frontage.js), joined against the
// real-photo placement and business data. This is the "what to draw and
// where" layer that W2 (real-photo elevations), W3 (AI elevations), W4
// (signage) and W5 (paged atlas + engine v3) all key off — none of them
// re-derive frontage geometry themselves, so a building's manifest width can
// never drift from what the engine actually draws.
//
//   node scripts/build-facade-manifest.mjs
//
// Output: assets/shopfronts/manifest.json
//   { buildings: [
//       { buildingIndex, levels, chainage, side: 'east'|'west',
//         runs: [{ widthM, isChamfer, ax,az,bx,bz }],
//         placedSlug: string|null,       // real-photo placement.json slug
//         businesses: [{name,kind,addr}] // for signage (W4) / placeholders
//       }, ... ]
//   }

import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { buildStreetChain, makeNearestStreetPoint, computeBuildingChainage, computeFrontageRuns } from '../src/frontage.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const leith = JSON.parse(readFileSync(join(root, 'assets/leith.json'), 'utf8'));
const placement = JSON.parse(readFileSync(join(root, 'assets/shopfronts/placement.json'), 'utf8'));

const streetLine = buildStreetChain(leith.streetPaths);
const nearestStreetPoint = makeNearestStreetPoint(streetLine);
const { buildingChainage } = computeBuildingChainage(leith.buildings, streetLine);

function sideOf(building, np) {
  // Same east/west convention as docs/eval/RUBRIC.md's pose generator: rotate
  // the street tangent at the nearest point by -90° for the "east" normal,
  // then test which side of that normal the building's centroid falls on.
  const fp = building.footprint;
  let cx = 0, cz = 0;
  for (const p of fp) { cx += p[0]; cz += p[1]; }
  cx /= fp.length; cz /= fp.length;
  if (!np.tangent || !np.point) return 'east';
  const nx = -np.tangent[1];
  const nz = np.tangent[0];
  const dot = nx * (cx - np.point[0]) + nz * (cz - np.point[1]);
  return dot >= 0 ? 'east' : 'west';
}

const buildings = [];
leith.buildings.forEach((building, bi) => {
  const fp = building.footprint;
  if (!fp || fp.length < 3) return;
  const runs = computeFrontageRuns(building, nearestStreetPoint);
  if (!runs.length) return; // no street-facing wall — not a frontage building

  let cx = 0, cz = 0;
  for (const p of fp) { cx += p[0]; cz += p[1]; }
  cx /= fp.length; cz /= fp.length;
  const np = nearestStreetPoint(cx, cz);

  const placed = placement.photos[bi] || null;
  const businesses = placement.businesses[bi] || [];

  buildings.push({
    buildingIndex: bi,
    levels: Math.max(1, building.levels || 1),
    chainage: Math.round(buildingChainage[bi]),
    side: sideOf(building, np),
    runs: runs.map((r) => ({
      widthM: +r.len.toFixed(2),
      isChamfer: r.isChamfer,
      ax: +r.ax.toFixed(2), az: +r.az.toFixed(2), bx: +r.bx.toFixed(2), bz: +r.bz.toFixed(2),
    })),
    placedSlug: placed ? placed.slug : null,
    businesses: businesses.map((b) => ({ name: b.name, kind: b.kind, addr: b.addr })),
  });
});

buildings.sort((a, b) => a.chainage - b.chainage);

writeFileSync(join(root, 'assets/shopfronts/manifest.json'), JSON.stringify({ buildings }, null, 2));

const placed = buildings.filter((b) => b.placedSlug).length;
const withBiz = buildings.filter((b) => !b.placedSlug && b.businesses.length).length;
const bare = buildings.filter((b) => !b.placedSlug && !b.businesses.length).length;
console.log(`manifest.json: ${buildings.length} frontage buildings (${streetLine.length}-point streetLine, ${buildingChainage.filter((c) => c < Infinity).length} buildings chainaged)`);
console.log(`  ${placed} with a real photo, ${withBiz} with real business names (no photo), ${bare} bare (generic fill)`);
