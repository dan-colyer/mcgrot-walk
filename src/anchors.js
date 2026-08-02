// E5b.2 — the dozen anchor readers. Twelve vendors, already part of the
// 124-strong cast, nudged onto real Leith Walk landmarks so they read as
// places rather than tiles in a row. Static data only: landmark name, kind,
// and the target chainage the vendor is nudged to.
//
// Keyed by comic id, not npc-list index — an index would silently re-point
// an anchor at a different vendor the day catalog.json gains an entry (it is
// expected to, as transcription lands). resolveAnchors() below is the only
// thing allowed to turn an id into a live npc, and it fails loudly (a
// console warning, never a throw) if one goes missing.
//
// Chainages are measured off assets/businesses.json projected onto
// world.streetLine via src/frontage.js's chainageOfPoint — reproducible,
// not hand-typed guesses. Each is the chainage of the real business; the
// nudge applied to the vendor's index-derived position is `chainage - i *
// spacing`, computed at placement time, never stored here.
//
// The `anchors` flag gates whether src/npcs.js applies these overrides at
// all — see ANCHORS_ENABLED below. Landed off; flipped on once the flag-off
// run proves byte-identical.
export const ANCHORS_ENABLED = true;

export const ANCHOR_SET = [
  { id: '01b27ac5', landmark: 'Spey Lounge', kind: 'pub', chainage: 82 },
  { id: '081eb3ed', landmark: 'Kvasa', kind: 'bakery', chainage: 196 },
  { id: '0e21d212', landmark: 'Toast', kind: 'cafe', chainage: 394 },
  { id: '124327ee', landmark: 'Alhambra Bar', kind: 'pub', chainage: 467 },
  { id: '1a29e4f5', landmark: 'Storries Home Bakery', kind: 'bakery', chainage: 621 },
  { id: '1f6380d3', landmark: 'Cupp', kind: 'cafe', chainage: 725 },
  { id: '26210448', landmark: 'GAIA Italian Delicatessen', kind: 'cafe', chainage: 862 },
  { id: '2b05b3fb', landmark: 'Golden Ambal', kind: 'restaurant', chainage: 994 },
  { id: '2dd9394b', landmark: 'Otherworld', kind: 'pub', chainage: 1056 },
  { id: '315d8c0e', landmark: 'Not Just Coffee', kind: 'cafe', chainage: 1142 },
  { id: '3706c73f', landmark: 'The Joker & The Thief', kind: 'pub', chainage: 1250 },
  { id: '51834c74', landmark: 'Guajira', kind: 'cafe', chainage: 1391 },
];

// comic id -> anchor def, for O(1) lookup while placing vendors.
export function anchorsById() {
  return new Map(ANCHOR_SET.map((a) => [a.id, a]));
}

// The E5b.1-style opposed-pair gate shape: a real counter run over a
// deliberately truncated array, so the smoke gate can prove the journal's
// "N of 12 anchors" denominator tracks ANCHOR_SET.length rather than
// carrying a typed 12 that happens to match today.
export function countAnchors(anchorSet) {
  return Array.isArray(anchorSet) ? anchorSet.length : 0;
}

// Resolves the anchor set against a built npc list. Never throws — a
// missing id (comic dropped or renumbered) degrades to "one fewer anchor
// placed", not a broken boot.
export function resolveAnchors(npcs) {
  const byId = new Map(npcs.map((n) => [n.comic.id, n]));
  const resolved = [];
  for (const a of ANCHOR_SET) {
    const npc = byId.get(a.id);
    if (!npc) {
      console.warn(`[anchors] no vendor found for anchor "${a.landmark}" (comic id ${a.id})`);
      continue;
    }
    resolved.push({ ...a, npc });
  }
  return resolved;
}
