// Build the placement map that puts each real Leith Walk photo on its REAL
// building, replacing the engine's old hash-scatter (Robbie's texture landed
// wherever hashTile dropped it, not on the real Robbie's).
//
//   node scripts/build-facade-placement.mjs
//
// Output: assets/shopfronts/placement.json, fetched alongside atlas.json.
//   { photos:     { "<buildingIndex>": {slug, ground[], upper[], corner[], note} },
//     businesses: { "<buildingIndex>": [{name, kind, addr}] },   // for placeholders
//     stats: {...} }
//
// WHY a curated table and not the fuzzy name-match in build-facade-registry.mjs:
// that matcher paired by business-name substring, which over-matches CHAINS —
// "William Hill" hit 3 buildings off one Elm Row photo, "Tesco Express" put a
// Picardy Place photo onto the Leith Walk Tesco. The reliable join is the
// photo's OWN address (most atlas slugs literally encode one) resolved against
// the business address index. Each entry below is verified against
// businesses.json's housenumber→building index; the note records the evidence.
//
// Re-run after build-facade-atlas.mjs (tile indices come from the atlas).

import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const atlas = JSON.parse(readFileSync(join(root, 'assets/shopfronts/atlas.json'), 'utf8'));
const biz = JSON.parse(readFileSync(join(root, 'assets/businesses.json'), 'utf8'));
const leith = JSON.parse(readFileSync(join(root, 'assets/leith.json'), 'utf8'));

// Curated, address-verified photo → building map. building = index into
// leith.json's buildings array (same array the engine loops and fetch-businesses
// matched against — contract confirmed). slug = an atlas photo identity.
// Only confidently-resolved buildings are here; everything else keeps the old
// generic-pool behaviour. Picardy Place photos are omitted: OSM lists no named
// businesses there (beyond the street polyline's south end) so they can't be
// address-anchored yet.
const PHOTO_BUILDING = [
  // --- Leith Walk (the main drag) ---
  { b: 54,  slug: 'former-leith-central-station-and-the-central-bar', note: 'Central Bar @ 7-9 Leith Walk' },
  { b: 83,  slug: 'desi-pakwan-geograph-org-uk-7579664',             note: 'Desi Pakwan @ 61 Leith Walk' },
  { b: 126, slug: 'shops-and-tenements-244-6-8-leith-walk-geograph-org-uk-55694', note: '244-248 Leith Walk (Peluquero/Sunset Nails)' },
  { b: 173, slug: 'spey-lounge-leith-walk-geograph-org-uk-8262917',  note: 'Spey Lounge @ 39 Leith Walk' },
  { b: 272, slug: 'robbies-bar-leith-walk-01',                       note: "Robbie's @ 367 Leith Walk (corner pub)" },
  { b: 283, slug: 'stead-s-place-leith-walk-geograph-org-uk-5277103', note: "Barnardo's @ 28 Crighton Place / Stead's Place" },
  { b: 604, slug: 'the-harp-castle-leith-walk-geograph-org-uk-3723957', note: 'Harp & Castle @ 298 Leith Walk' },
  { b: 730, slug: 'shops-leith-walk-geograph-org-uk-7895672',        note: 'Turkish Supermarket @ 82-90 (terrace photo, shared with b731)' },
  { b: 731, slug: 'shops-leith-walk-geograph-org-uk-7895672',        note: 'Pipe Shop/Little Havana @ 92-94 (terrace photo, shared with b730)' },
  { b: 11,  slug: '165a-leith-walk-edinburgh',                       note: '165A Leith Walk (Capital City Partnership)' },
  // --- Elm Row (Leith Walk continues under this terrace name) ---
  { b: 801, slug: 'edinburgh-2-3-elm-row',                           note: '2-3 Elm Row (Elm Row Cafe)' },
  { b: 808, slug: 'edinburgh-4-elm-row',                             note: 'Ladbrokes @ 4 Elm Row' },
  { b: 433, slug: 'edinburgh-9-10-11-elm-row',                       note: 'Jolly @ 9 Elm Row' },
  { b: 32,  slug: 'edinburgh-14-elm-row',                            note: 'Rimmers Music @ 14 Elm Row' },
  { b: 430, slug: 'edinburgh-15-16-17-elm-row',                      note: '15-17 Elm Row tenement (Star Kebab/kul; photo id names dated tenants Olimpos/Filos/WilliamHill)' },
  { b: 424, slug: 'edinburgh-18-19-elm-row',                         note: 'Valvona & Crolla @ 19 + William Hill @ 18 Elm Row (photo covers both)' },
  { b: 422, slug: 'edinburgh-20-21-22-elm-row-post-office',          note: 'Greggs @ 21 + Post Office @ 20 Elm Row' },
  { b: 805, slug: 'edinburgh-23-elm-row',                            note: 'Joseph Pearce @ 23 Elm Row (corner pub)' },
];

// Slug → its atlas tiles, split by kind. Upper tiles are ordered BOTTOM-TO-TOP
// (bandRow descending — r=0 is the top/cornice slice) so the engine, which lays
// upper[0] on the first floor above the shops and upper[last] at the eaves,
// stacks them the right way up. Without this the roofline lands mid-building.
const tilesBySlug = new Map();
const upperMeta = new Map(); // slug -> [{index, bandRow}]
for (const t of atlas.tiles) {
  if (!tilesBySlug.has(t.slug)) { tilesBySlug.set(t.slug, { ground: [], upper: [], corner: [] }); upperMeta.set(t.slug, []); }
  const rec = tilesBySlug.get(t.slug);
  if (t.kind === 'upper') upperMeta.get(t.slug).push({ index: t.index, bandRow: t.bandRow ?? 0 });
  else (rec[t.kind] || rec.ground).push(t.index);
}
for (const [slug, rec] of tilesBySlug) {
  rec.upper = upperMeta.get(slug).sort((a, b) => b.bandRow - a.bandRow).map((u) => u.index);
}

const photos = {};
const warnings = [];
for (const { b, slug, note } of PHOTO_BUILDING) {
  if (!leith.buildings[b]) { warnings.push(`building #${b} out of range (${slug})`); continue; }
  const tiles = tilesBySlug.get(slug);
  if (!tiles) { warnings.push(`slug not in atlas: ${slug} (building #${b})`); continue; }
  if (!tiles.ground.length && !tiles.corner.length) { warnings.push(`slug has no ground/corner tile: ${slug}`); continue; }
  if (photos[b]) warnings.push(`building #${b} assigned twice (kept first: ${photos[b].slug}, dropped ${slug})`);
  else photos[b] = { slug, ground: tiles.ground, upper: tiles.upper, corner: tiles.corner, note };
}

// All walk-fronting businesses grouped by building, for name-on-stone
// placeholders (phase 1b). Dedup exact-duplicate names on the same building
// (OSM sometimes tags a shop as both a node and an enclosing way).
const businesses = {};
for (const x of biz) {
  const b = x.building?.index;
  if (b == null) continue;
  (businesses[b] ??= []);
  if (businesses[b].some((e) => e.name === x.name)) continue;
  businesses[b].push({ name: x.name, kind: x.kind, addr: [x.housenumber, x.street].filter(Boolean).join(' ') || null });
}

const stats = {
  photoBuildings: Object.keys(photos).length,
  businessBuildings: Object.keys(businesses).length,
  totalBusinesses: Object.values(businesses).reduce((n, a) => n + a.length, 0),
};

writeFileSync(join(root, 'assets/shopfronts/placement.json'), JSON.stringify({ photos, businesses, stats }, null, 2));

console.log(`placement.json written.`);
console.log(`  real photos placed on ${stats.photoBuildings} buildings`);
console.log(`  ${stats.totalBusinesses} businesses across ${stats.businessBuildings} buildings (for placeholders)`);
if (warnings.length) { console.log('\nWARNINGS:'); for (const w of warnings) console.log('  ! ' + w); }
console.log('\nPlaced (building → slug):');
for (const [b, p] of Object.entries(photos).sort((a, c) => +a[0] - +c[0])) {
  console.log(`  b#${b.padEnd(4)} G[${p.ground}] U[${p.upper}] C[${p.corner}]  ${p.note}`);
}
