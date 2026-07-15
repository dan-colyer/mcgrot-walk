// Combine the OSM business registry with our photo set into ONE worklist:
// every walk-fronting business, the building it sits on, and how we can source
// its façade — real photo we already have, needs a web search, or falls through
// to a name-placeholder + AI-gen TODO.
//
//   node scripts/build-facade-registry.mjs
//
// This is the spine of the "accurate Leith Walk" rebuild: the engine will place
// façades by building→business lookup here, not by hash.

import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const biz = JSON.parse(readFileSync(join(root, 'assets/businesses.json'), 'utf8'));
const plan = JSON.parse(readFileSync(join(root, 'scripts/facade-plan.json'), 'utf8'));

// The walk changes terrace-name along its length; these all front it.
const FRONTAGE = new Set([
  'Leith Walk', 'Elm Row', 'Haddington Place', 'Crighton Place', 'Croall Place',
  'Albert Place', "Baxter's Place", 'Gayfield Place', 'Blenheim Place', 'Picardy Place',
  'Greenside Place', 'Antigua Street',
]);
const onWalk = biz.filter((b) => FRONTAGE.has(b.street) || (!b.street && b.distToStreet <= 18));

// Our photos, by identity. A few identities cover several businesses (terraces),
// and a few of our best photos aren't in OSM — alias them by hand so they still
// land on the right building.
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
const ALIAS = { // our identity substring -> OSM business name substring
  'olimpos': 'william hill', 'filos': 'william hill', // that terrace's OSM-named unit
};

function matchPhoto(business) {
  const bn = norm(business.name);
  for (const e of plan) {
    if (!e.identity) continue;
    const parts = e.identity.split(/[/,]/).map((s) => norm(s.trim())).filter((p) => p.length > 3);
    for (const p of parts) {
      const alias = ALIAS[p] ? norm(ALIAS[p]) : null;
      if (bn.includes(p) || p.includes(bn) || (alias && bn.includes(alias))) {
        return { slug: e.slug, identity: e.identity, confidence: Math.max(...e.planes.map((pl) => pl.confidence), 0) };
      }
    }
  }
  return null;
}

const registry = onWalk.map((b) => {
  const photo = matchPhoto(b);
  return {
    name: b.name,
    kind: b.kind,
    addr: [b.housenumber, b.street].filter(Boolean).join(' ') || null,
    building: b.building?.index ?? null,
    buildingDist: b.building?.dist ?? null,
    x: b.x, z: b.z,
    photo: photo ? photo.slug : null,
    photoIdentity: photo ? photo.identity : null,
    photoConfidence: photo ? photo.confidence : null,
    // Sourcing status, to be advanced by later steps:
    //   have-photo   → we hold a usable image (may still need perspective repair)
    //   needs-search → no photo yet; try a web image search
    //   needs-gen    → no photo findable; name-placeholder + AI-gen TODO
    status: photo ? 'have-photo' : 'needs-search',
  };
});

// One building can carry several businesses (a tenement with 3 shops). Group so
// the engine can place per building.
const byBuilding = {};
for (const r of registry) {
  if (r.building == null) continue;
  (byBuilding[r.building] ??= []).push(r.name);
}

writeFileSync(join(root, 'assets/facade-registry.json'), JSON.stringify(registry, null, 2));

const have = registry.filter((r) => r.status === 'have-photo');
console.log(`Registry: ${registry.length} businesses fronting the walk, on ${Object.keys(byBuilding).length} buildings.`);
console.log(`  have a photo:  ${have.length}  (${new Set(have.map((r) => r.photo)).size} distinct photos placed)`);
console.log(`  need a photo:  ${registry.length - have.length}  (web search → then name-placeholder + AI-gen)`);
console.log(`\nPlaced photos (business → building):`);
for (const r of have.sort((a, b) => a.z - b.z)) {
  console.log(`  ${(r.addr || '?').padEnd(20).slice(0, 20)} #${String(r.building).padEnd(4)} ${r.name}  ←  ${r.photo}`);
}
