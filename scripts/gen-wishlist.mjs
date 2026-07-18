// D4.1/W2 — regenerate docs/shopfront-wishlist.md: every frontage building
// with a known business but no real-photo identity (borrowed, AI-generated,
// or a bare name-placeholder — none of them are the actual shop), sorted by
// visibility priority, one paste-ready ChatGPT prompt per row.
//
//   node scripts/gen-wishlist.mjs
//
// Re-run this whenever manifest.json/elevations.json/borrowed.json change
// (a borrow-fill pass, a fresh AI generation, a new handmade drop) so the
// wishlist always reflects what's still generic.

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const shopDir = join(root, 'assets/shopfronts');

const manifest = JSON.parse(readFileSync(join(shopDir, 'manifest.json'), 'utf8'));
const elev = JSON.parse(readFileSync(join(shopDir, 'elevations.json'), 'utf8'));
const borrowedPath = join(shopDir, 'borrowed.json');
const borrowed = existsSync(borrowedPath) ? JSON.parse(readFileSync(borrowedPath, 'utf8')) : {};
const handmadePath = join(shopDir, 'handmade.json');
const handmade = existsSync(handmadePath) ? JSON.parse(readFileSync(handmadePath, 'utf8')) : {};

const STOREY_M = 3.2;

function widthOf(b) {
  return Math.max(4, Math.min(20, Math.max(...b.runs.map((r) => r.widthM))));
}
function isJunction(b) {
  return b.runs.some((r) => r.isChamfer);
}

const realChainages = manifest.buildings.filter((b) => b.placedSlug).map((b) => b.chainage);
function distToReal(chainage) {
  if (!realChainages.length) return Infinity;
  return Math.min(...realChainages.map((c) => Math.abs(c - chainage)));
}

// Candidates: has a real business identity to go photograph, but the
// engine's own image of it isn't that shop (borrowed donor, generic AI
// rendition, or no elevation at all).
const candidates = manifest.buildings.filter((b) => !b.placedSlug && b.businesses.length && !handmade[b.buildingIndex]);

const rows = candidates.map((b) => {
  const junction = isJunction(b);
  const d = distToReal(b.chainage);
  const status = borrowed[b.buildingIndex] !== undefined ? 'borrowed' : (elev.elevations.some((e) => e.generated && e.buildingIndex === b.buildingIndex) ? 'AI-generated' : 'no elevation');
  // junctions get an effective 2x proximity boost; a bare wall (no
  // elevation at all — the worst-looking state) jumps the queue outright.
  const priority = (status === 'no elevation' ? -1e6 : 0) + d * (junction ? 0.5 : 1);
  return { b, junction, priority, status };
}).sort((a, b) => a.priority - b.priority);

const widthM = (b) => widthOf(b);
const heightM = (b) => b.levels * STOREY_M;

function promptFor(b) {
  const names = b.businesses.map((biz) => biz.name).join(' / ');
  const w = widthM(b).toFixed(1);
  const h = heightM(b).toFixed(1);
  const ratio = (widthM(b) / heightM(b)).toFixed(2);
  return [
    `From the attached reference photo of "${names}", render a flat-on, rectified, orthographic FULL building elevation — ground floor to roofline, the whole façade edge to edge, nothing else in frame (no pavement, no road, no vehicles, no people, no sky).`,
    `Real signage kept exactly as photographed and correctly spelled — "${names}" must be clearly legible.`,
    `Camera perfectly perpendicular to the wall, zero perspective distortion, all verticals parallel, like an architectural elevation drawing rendered as a photograph, fine film grain, overcast dull grey flat light with no hard shadows.`,
    `Apply post-apocalyptic dereliction: grimy weathered stonework, cracked render, stained masonry, broken or boarded windows on the upper storeys, peeling paint — but keep the ground-floor shopfront and its signage legible.`,
    `Target aspect ratio roughly ${ratio}:1 (width:height) — approximately ${w}m wide by ${h}m tall, ${b.levels} storeys.`,
  ].join(' ');
}

const lines = [];
lines.push('# Shopfront wishlist — D4.1/W2 handmade pipeline');
lines.push('');
lines.push(`${rows.length} frontage buildings still lack a real photographed identity (a borrowed`);
lines.push('donor image, a generic AI rendition, or nothing at all) despite having a known');
lines.push('real business name. Sorted by visibility priority — near a real-photo building');
lines.push('or a street-junction corner first, since that\'s where the contrast with a');
lines.push('genuine photo is most visible.');
lines.push('');
lines.push('## Drop-and-run');
lines.push('');
lines.push('1. Find a reference photo of the real shop (Street View, the business\'s own');
lines.push('   site, a review site).');
lines.push('2. Paste it into ChatGPT with the prompt from that row\'s table below.');
lines.push('3. Save the result as the row\'s **target filename** under');
lines.push('   `assets/shopfronts/handmade/`.');
lines.push('4. `node scripts/ingest-handmade.mjs` — validates, grades, stamps, rebuilds the');
lines.push('   atlas. Safe to run after every single drop.');
lines.push('');
lines.push('## Wishlist');
lines.push('');
lines.push('| # | buildingIndex | business(es) | address | chainage/side | storeys | width (m) | status | target filename | prompt |');
lines.push('|---|---|---|---|---|---|---|---|---|---|');

rows.forEach(({ b, status }, i) => {
  const names = b.businesses.map((biz) => biz.name).join('; ');
  const addr = b.businesses.map((biz) => biz.addr || '—').join('; ');
  const target = `assets/shopfronts/handmade/b${b.buildingIndex}.png`;
  const prompt = promptFor(b).replace(/\|/g, '\\|');
  lines.push(`| ${i + 1} | ${b.buildingIndex} | ${names} | ${addr} | ${b.chainage}m ${b.side} | ${b.levels} | ${widthOf(b).toFixed(1)} | ${status} | \`${target}\` | ${prompt} |`);
});

writeFileSync(join(root, 'docs/shopfront-wishlist.md'), lines.join('\n') + '\n');
console.log(`docs/shopfront-wishlist.md written: ${rows.length} rows.`);
