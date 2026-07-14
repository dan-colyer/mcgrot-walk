// Fetch Leith Walk street + surrounding buildings from OSM Overpass, bake to assets/leith.json.
// Local coordinate system: metres, origin at the Foot of the Walk end; +z runs down the street toward Picardy Place.
import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const BBOX = '55.952,-3.196,55.976,-3.164'; // s,w,n,e around Leith Walk
const QUERY = `
[out:json][timeout:90];
(
  way["name"="Leith Walk"]["highway"](${BBOX});
  way["building"](${BBOX});
);
out geom;
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
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'mcgrot-walk-poc/0.1 (one-off build-time fetch)',
      },
      signal: AbortSignal.timeout(120_000),
    });
    if (!res.ok) { console.warn(`${url} -> ${res.status}`); continue; }
    data = await res.json();
    break;
  } catch (err) {
    console.warn(`${url} -> ${err.message}`);
  }
}
if (!data) { console.error('All Overpass mirrors failed'); process.exit(1); }

const streets = data.elements.filter(e => e.tags?.highway && e.tags?.name === 'Leith Walk');
const buildings = data.elements.filter(e => e.tags?.building && e.geometry?.length > 2);
if (!streets.length) { console.error('No Leith Walk ways found'); process.exit(1); }

// Origin: northernmost node of the street (Foot of the Walk)
const allStreetPts = streets.flatMap(w => w.geometry);
const origin = allStreetPts.reduce((a, b) => (b.lat > a.lat ? b : a));
const lat0 = origin.lat, lon0 = origin.lon;
const mPerLon = 111320 * Math.cos((lat0 * Math.PI) / 180);
const toLocal = p => [ +((p.lon - lon0) * mPerLon).toFixed(2), +((lat0 - p.lat) * 110540).toFixed(2) ]; // [x, z], z south+

const streetPaths = streets.map(w => w.geometry.map(toLocal));

// Keep buildings within 130m of any street node (corridor filter)
const streetLocal = allStreetPts.map(toLocal);
const near = pts => pts.some(([x, z]) => streetLocal.some(([sx, sz]) => (x - sx) ** 2 + (z - sz) ** 2 < 130 ** 2));
const kept = buildings
  .map(b => ({
    footprint: b.geometry.map(toLocal),
    levels: parseInt(b.tags['building:levels']) || 4,
    name: b.tags.name || null,
  }))
  .filter(b => near(b.footprint));

const out = { origin: { lat: lat0, lon: lon0 }, streetPaths, buildings: kept };
writeFileSync(join(root, 'assets/leith.json'), JSON.stringify(out));
console.log(`streets: ${streetPaths.length} ways, buildings kept: ${kept.length}/${buildings.length}, size: ${Math.round(JSON.stringify(out).length / 1024)}KB`);
