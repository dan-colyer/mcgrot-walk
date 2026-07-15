// Build a registry of REAL Leith Walk businesses from OSM (Overpass), projected
// into the SAME local metre coordinates as leith.json's buildings, and matched
// to the nearest building footprint.
//
//   node scripts/fetch-businesses.mjs
//
// This is the ground truth of "what is actually where" on the street. Everything
// downstream — pairing our photos to real locations, web-searching the gaps,
// placeholder-naming the rest — hangs off it. OSM POI coverage isn't as complete
// as Google Maps, so this is the base to be supplemented, not the last word.

import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const leith = JSON.parse(readFileSync(join(root, 'assets/leith.json'), 'utf8'));

// Reuse leith.json's exact projection so POIs line up with the footprints.
const { lat: lat0, lon: lon0 } = leith.origin;
const mPerLon = 111320 * Math.cos((lat0 * Math.PI) / 180);
const toLocal = (lat, lon) => [ +((lon - lon0) * mPerLon).toFixed(2), +((lat0 - lat) * 110540).toFixed(2) ];

const BBOX = '55.952,-3.196,55.976,-3.164'; // identical to fetch-osm.mjs
const QUERY = `
[out:json][timeout:120];
(
  nwr["shop"]["name"](${BBOX});
  nwr["amenity"]["name"](${BBOX});
  nwr["office"]["name"](${BBOX});
  nwr["craft"]["name"](${BBOX});
  nwr["tourism"]["name"](${BBOX});
  nwr["leisure"]["name"](${BBOX});
);
out center tags;
`;

const MIRRORS = [
  'https://overpass-api.de/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
  'https://overpass.osm.jp/api/interpreter',
];
let data = null;
for (const url of MIRRORS) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: 'data=' + encodeURIComponent(QUERY),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': 'mcgrot-walk-poc/0.1 (build-time)' },
      signal: AbortSignal.timeout(120_000),
    });
    if (!res.ok) { console.warn(`${url} -> ${res.status}`); continue; }
    data = await res.json();
    break;
  } catch (err) { console.warn(`${url} -> ${err.message}`); }
}
if (!data) { console.error('All Overpass mirrors failed'); process.exit(1); }

// Street polyline in local coords, for the corridor filter + distance.
const streetPts = (leith.streetPaths || []).flat();
function distToStreet(x, z) {
  let m = Infinity;
  for (const [sx, sz] of streetPts) m = Math.min(m, Math.hypot(x - sx, z - sz));
  return m;
}

// Nearest building footprint (by centroid) to a point.
const bCentroids = (leith.buildings || []).map((b, i) => {
  let cx = 0, cz = 0; for (const v of b.footprint) { cx += v[0]; cz += v[1]; }
  return { i, cx: cx / b.footprint.length, cz: cz / b.footprint.length, name: b.name };
});
function nearestBuilding(x, z) {
  let best = null, bd = Infinity;
  for (const c of bCentroids) { const d = Math.hypot(x - c.cx, z - c.cz); if (d < bd) { bd = d; best = c; } }
  return best ? { index: best.i, dist: +bd.toFixed(1), buildingName: best.name } : null;
}

const CORRIDOR = 45; // metres from the street — a business fronting the walk
const seen = new Set();
const businesses = [];
for (const el of data.elements) {
  const t = el.tags || {};
  if (!t.name) continue;
  const lat = el.lat ?? el.center?.lat;
  const lon = el.lon ?? el.center?.lon;
  if (lat == null || lon == null) continue;
  const [x, z] = toLocal(lat, lon);
  const d = distToStreet(x, z);
  if (d > CORRIDOR) continue; // off Leith Walk (side streets, etc.)

  // Dedup: same name at nearly the same spot (node + enclosing way both tagged).
  const key = `${t.name}@${Math.round(x / 5)},${Math.round(z / 5)}`;
  if (seen.has(key)) continue;
  seen.add(key);

  const kind = t.shop || t.amenity || t.office || t.craft || t.tourism || t.leisure || 'other';
  businesses.push({
    name: t.name,
    kind,
    housenumber: t['addr:housenumber'] || null,
    street: t['addr:street'] || null,
    lat, lon, x, z,
    distToStreet: +d.toFixed(1),
    building: nearestBuilding(x, z),
  });
}

// Order by distance along the street (z), Foot of the Walk → Picardy Place.
businesses.sort((a, b) => a.z - b.z);

writeFileSync(join(root, 'assets/businesses.json'), JSON.stringify(businesses, null, 2));

const kinds = {};
for (const b of businesses) kinds[b.kind] = (kinds[b.kind] || 0) + 1;
console.log(`${businesses.length} businesses on/near Leith Walk (within ${CORRIDOR}m of the street).`);
console.log('kinds:', JSON.stringify(kinds));
console.log('with a street address:', businesses.filter((b) => b.street).length);
console.log('distinct buildings hit:', new Set(businesses.map((b) => b.building?.index)).size);
console.log('\nfirst 25 (S→N along the walk):');
for (const b of businesses.slice(0, 25)) {
  console.log(`  ${(b.housenumber || '?').padStart(4)} ${(b.street || '').padEnd(12).slice(0, 12)} ${b.kind.padEnd(12)} ${b.name}`);
}
