// Façade textures for McGrot Walk.
//
// buildShopfronts(assets, world, scene) clads every street-facing wall near the
// centreline with real Leith Walk photography — the shopfront at pavement level
// and the tenement storeys stacked above it, up to the building's real height.
// Both come from the SAME rectified photograph of the SAME building, so the
// street reads as continuous instead of a photo pasted onto flat khaki.
//
// The atlas (assets/shopfronts/atlas.{jpg,json}) comes out of the pipeline:
//   fetch-shopfronts → facade-plan (vision) → rectify-facades → cull-bands
//   → build-facade-atlas
// Its tiles are split into pools: `ground` (shopfronts), `upper` (storeys above)
// and `corner` (elevations of buildings that wrap a junction).
//
// Everything merges into a SINGLE geometry / draw call. The atlas is absent in
// the 3-comic single-file artifact (assets.shopfronts === null) — this no-ops.
//
// Tile choice is a deterministic hash of (building, edge, segment, band) so the
// street looks identical on every reload (the seeded-scenery rule).

import * as THREE from 'three';
import { assetUrl } from './assets.js';
import { buildNameAtlas } from './placeholders.js';

// Metres from the Leith Walk centreline within which a wall counts as a frontage.
// Must clear ~26m: the Elm Row terrace (Valvona & Crolla, Greggs, Ladbrokes…) is a
// service street set back behind a garden island, so its real shopfronts sit just
// past the old 25m cutoff and were left bare. The FACING/SIDE tests still reject
// back and side walls, so widening this only reaches genuine frontages.
const STREET_RANGE = 30;
const MIN_EDGE = 2.0;      // skip footprint edges shorter than this
const FACING_MIN = 0.35;   // wall normal · direction-to-street; at or above this it's a shop frontage
// Below this the wall has turned far enough away to be a back wall, hidden by its
// own building. It must be NEGATIVE: a gable end facing up the street has a normal
// perpendicular to the direction-to-street, so it scores ~0 — and it is the most
// visible wall on the block as you walk toward it. A cutoff at 0 leaves exactly
// those walls bare.
const SIDE_MIN = -0.3;
const BAND_HEIGHT = 3.2;   // one storey — must match world.js LEVEL_HEIGHT
const MAX_BANDS = 6;       // ~19m; above that the fog has swallowed it anyway
const BASE_Y = 0.05;       // sit just above the street ribbon (STREET_Y = 0.03)
const OUTWARD_EPS = 0.12;  // nudge proud of the wall (toward street) to avoid z-fight
// Runaway guard only — it must NOT bind in normal operation. Buildings are walked
// in index order, so a cap that actually bites leaves the far end of the street
// silently bare while the near end looks finished. 4000 (sized back when each wall
// got a single ground-floor quad) did exactly that once bands and gables landed.
// Two triangles per quad in one merged draw call: the real budget is enormous.
const MAX_QUADS = 20000;

// A chamfer is the short diagonal wall that cuts off the corner at a junction.
// It is street-facing but runs ACROSS the street rather than along it, and on
// the real Leith Walk it is exactly where a corner pub puts its door.
const CHAMFER_MAX_LEN = 9;      // metres — chamfers are short
const CHAMFER_MAX_ALIGN = 0.88; // |edgeDir · streetDir| under this => not parallel to the street

export function buildShopfronts(assets, world, scene) {
  const layout = assets && assets.shopfronts;
  const buildings = (assets && assets.leith && assets.leith.buildings) || [];
  const nearest = world && world.nearestStreetPoint;
  if (!layout || !layout.count || !buildings.length || !nearest) {
    return { group: null, count: 0 };
  }

  const { cols, rows, tileW = 512, tileH = 256, count } = layout;

  // Tile pools. An older atlas.json has no kinds — fall back to "everything is
  // ground" so a stale atlas degrades to the previous behaviour instead of
  // throwing on undefined.
  const all = Array.from({ length: count }, (_, i) => i);
  const groundPool = layout.ground && layout.ground.length ? layout.ground : all;
  const upperPool = layout.upper && layout.upper.length ? layout.upper : groundPool;
  const cornerPool = layout.corner && layout.corner.length ? layout.corner : groundPool;

  // Which real photo clads which real building, address-verified (see
  // scripts/build-facade-placement.mjs). A building listed here draws its
  // frontage from its OWN photo's tiles instead of a hash pick — this is what
  // puts Robbie's on the real Robbie's, not wherever hashTile dropped it.
  // Buildings not listed keep the generic hash placement below.
  const photoByBuilding = (layout.placement && layout.placement.photos) || {};

  // Businesses on each building that has NO real photo → name-on-stone
  // placeholders (Dan's call: accurate name where we lack accurate photo).
  // Buildings we DO have a photo for are covered by it, so they're skipped.
  const bizByBuilding = (layout.placement && layout.placement.businesses) || {};
  const placeholderNames = [];
  for (const [bi, list] of Object.entries(bizByBuilding)) {
    if (photoByBuilding[bi]) continue;
    for (const b of list) placeholderNames.push(b.name);
  }
  const nameAtlas = placeholderNames.length ? buildNameAtlas(placeholderNames) : null;

  // Upper tiles grouped by the photo they were cut from. A real tenement is
  // uniform across its width — one stone, one window rhythm — while the SHOPS
  // beneath it differ from unit to unit. Hashing the upper bands per segment
  // (as the ground band is) turns each building into a patchwork of red brick
  // beside sandstone, which no street has ever looked like. So each building
  // draws its upper storeys from a single source building's photo.
  const upperBySlug = new Map();
  for (const idx of upperPool) {
    const slug = (layout.tiles && layout.tiles[idx] && layout.tiles[idx].slug) || String(idx);
    if (!upperBySlug.has(slug)) upperBySlug.set(slug, []);
    upperBySlug.get(slug).push(idx);
  }
  const upperSlugs = [...upperBySlug.keys()];

  const atlasW = cols * tileW;
  const atlasH = rows * tileH;
  const uInset = 0.5 / atlasW; // half-texel inset kills neighbour-tile bleed
  const vInset = 0.5 / atlasH;

  // Quad width follows the tile aspect so a façade photo is never stretched:
  // 2:1 tiles × a 3.2m storey ≈ 6.4m, about one real shop unit.
  const segTarget = BAND_HEIGHT * (tileW / tileH);

  const positions = [];
  const uvs = [];
  const indices = [];
  let quadCount = 0;

  // Second geometry: name-placeholder shopfronts, sampling the name atlas.
  const pPos = [];
  const pUv = [];
  const pIdx = [];
  let pQuadCount = 0;

  for (let bi = 0; bi < buildings.length && quadCount < MAX_QUADS; bi++) {
    const building = buildings[bi];
    const fp = building && building.footprint;
    if (!fp || fp.length < 3) continue;

    const levels = Math.max(1, building.levels || 1);
    const bands = Math.min(MAX_BANDS, levels);

    // Does this building have a real, address-matched photo? If so its own tiles
    // clad it; otherwise it falls back to the generic pools.
    const placed = photoByBuilding[bi] || null;
    // Counts frontage (shopfront) quads emitted for a placed building, so its
    // real ground tiles spread left-to-right across the frontage deterministically.
    let frontageCursor = 0;

    // No photo but real businesses here → name placeholders, one business per
    // frontage segment (bizCursor spreads them left-to-right).
    const bizNames = !placed && nameAtlas ? (bizByBuilding[bi] || []).map((b) => b.name) : null;
    const isPlaceholder = !!(bizNames && bizNames.length);
    let bizCursor = 0;

    // One source building's upper storeys clad this whole building — see the
    // upperBySlug note above.
    const wallTiles = upperSlugs.length
      ? upperBySlug.get(upperSlugs[hashTile(bi, 0, 7, upperSlugs.length)])
      : upperPool;

    // Centroid gives the TRUE outward normal of each wall (the perpendicular
    // pointing away from the building's interior). Deriving "outward" from the
    // street instead would make every wall look street-facing, side walls included.
    let cx = 0;
    let cz = 0;
    for (const p of fp) { cx += p[0]; cz += p[1]; }
    cx /= fp.length;
    cz /= fp.length;

    for (let i = 0; i < fp.length && quadCount < MAX_QUADS; i++) {
      const a = fp[i];
      const b = fp[(i + 1) % fp.length];
      const ex = b[0] - a[0];
      const ez = b[1] - a[1];
      const len = Math.hypot(ex, ez);
      if (len < MIN_EDGE) continue;

      const mx = (a[0] + b[0]) / 2;
      const mz = (a[1] + b[1]) / 2;
      const np = nearest(mx, mz);
      if (!np || !np.point) continue;

      // Range must be judged on the CLOSEST point of the wall, not its midpoint.
      // A gable end runs away from the street at right angles, so its midpoint
      // sits deep behind the frontage and a midpoint test rejects it — which is
      // precisely why every gable was still bare khaki after they were enabled,
      // even though their near corner is right on the pavement.
      const nearA = nearest(a[0], a[1]);
      const nearB = nearest(b[0], b[1]);
      const edgeDist = Math.min(np.distance, nearA ? nearA.distance : Infinity, nearB ? nearB.distance : Infinity);
      if (edgeDist > STREET_RANGE) continue;

      // A quad wound from (start → start+edge) has face normal ∝ (-dz, 0, dx).
      // So to keep the TEXTURE readable from the street we must walk the edge in
      // the direction whose winding normal already points outward — flipping the
      // normal alone would leave the camera looking at the quad's back face, i.e.
      // every façade on one side of the street rendered mirror-reversed.
      const inv = 1 / len;
      let nx = -ez * inv;
      let nz = ex * inv;
      let sx = a[0];
      let sz = a[1];
      let dx = ex;
      let dz = ez;
      if (nx * (mx - cx) + nz * (mz - cz) < 0) {
        nx = -nx; nz = -nz;      // outward normal...
        sx = b[0]; sz = b[1];    // ...and reverse the walk so the winding agrees
        dx = -ex; dz = -ez;
      }

      // How squarely does this wall look at the street?
      const dsx = np.point[0] - mx;
      const dsz = np.point[1] - mz;
      const dl = Math.hypot(dsx, dsz) || 1;
      const facing = (nx * dsx + nz * dsz) / dl;
      if (facing < SIDE_MIN) continue; // faces away entirely: it's a back wall, and hidden

      // A wall square-on to the street is a FRONTAGE and gets a shopfront at
      // pavement level. A wall that merely grazes it — a gable end, a flank
      // running away down a side street — is not a shopfront, but it is still
      // very visible from the street, and leaving it as flat khaki next to
      // photographic neighbours is what makes the block read as unfinished.
      // Clad it in tenement stone instead (upper tiles, all the way down).
      const isFrontage = facing >= FACING_MIN;

      // Chamfered corner of a junction building? Street-facing, short, and NOT
      // running parallel to the street.
      let isChamfer = false;
      if (np.tangent && len <= CHAMFER_MAX_LEN) {
        const align = Math.abs(dx * inv * np.tangent[0] + dz * inv * np.tangent[1]);
        isChamfer = align < CHAMFER_MAX_ALIGN;
      }

      // Tile the frontage into ~segTarget-wide columns...
      const nSeg = Math.max(1, Math.round(len / segTarget));
      for (let s = 0; s < nSeg && quadCount < MAX_QUADS; s++) {
        const t0 = s / nSeg;
        const t1 = (s + 1) / nSeg;
        const p0x = sx + dx * t0 + nx * OUTWARD_EPS;
        const p0z = sz + dz * t0 + nz * OUTWARD_EPS;
        const p1x = sx + dx * t1 + nx * OUTWARD_EPS;
        const p1z = sz + dz * t1 + nz * OUTWARD_EPS;

        // ...and stack one band per storey up the wall. Band 0 is the shopfront,
        // every band above it is tenement. Sampling the ground pool for a third
        // floor would hang a Greggs in the sky — hence the separate pools.
        for (let band = 0; band < bands && quadCount < MAX_QUADS; band++) {
          // Ground: vary per segment — adjacent shop units are different shops.
          // Upper: vary per band only, from this building's single source photo,
          // so the storey rhythm stays uniform across the whole frontage.
          // A non-frontage wall gets stone at every band, shopfront at none.
          const shopBand = band === 0 && isFrontage;

          // No-photo building with real businesses: stamp the business name on
          // stone, one business per frontage segment, into the SECOND mesh. Then
          // skip the photo mesh for this quad. (Upper bands fall through to the
          // generic stone path below, so the tenement above still reads right.)
          if (isPlaceholder && shopBand) {
            const name = bizNames[bizCursor % bizNames.length];
            bizCursor++;
            const uv = nameAtlas.uvFor.get(name);
            if (uv) {
              const py0 = BASE_Y;
              const py1 = BAND_HEIGHT;
              const pb = pQuadCount * 4;
              pPos.push(p0x, py0, p0z,  p1x, py0, p1z,  p1x, py1, p1z,  p0x, py1, p0z);
              pUv.push(uv.u0, uv.vBot,  uv.u1, uv.vBot,  uv.u1, uv.vTop,  uv.u0, uv.vTop);
              pIdx.push(pb, pb + 1, pb + 2, pb, pb + 2, pb + 3);
              pQuadCount++;
              continue;
            }
          }

          let tile;
          if (placed) {
            // A real building: draw from its OWN photo. Ground band spreads the
            // building's real shop tiles across the frontage; upper bands stack
            // its real storeys in order, falling back to generic stone when the
            // photo held no upper (e.g. a single-storey pub crop).
            if (shopBand) {
              const pool = isChamfer && placed.corner.length ? placed.corner : placed.ground;
              tile = pool[frontageCursor % pool.length];
              frontageCursor++;
            } else if (placed.upper.length) {
              tile = placed.upper[(band - 1) % placed.upper.length];
            } else {
              tile = wallTiles[hashTile(bi, 0, band, wallTiles.length)];
            }
          } else {
            const gPool = isChamfer ? cornerPool : groundPool;
            tile = shopBand
              ? gPool[hashTile(bi, i * 31 + s, 0, gPool.length)]
              : wallTiles[hashTile(bi, 0, band, wallTiles.length)];
          }

          const col = tile % cols;
          const row = Math.floor(tile / cols);
          const u0 = col / cols + uInset;
          const u1 = (col + 1) / cols - uInset;
          const vBot = 1 - (row + 1) / rows + vInset; // atlas is row-major from the top;
          const vTop = 1 - row / rows - vInset;        // flipY (default) puts row 0 at V=1

          const y0 = band === 0 ? BASE_Y : band * BAND_HEIGHT;
          const y1 = (band + 1) * BAND_HEIGHT;

          const base = quadCount * 4;
          // bottom-left, bottom-right, top-right, top-left
          positions.push(p0x, y0, p0z,  p1x, y0, p1z,  p1x, y1, p1z,  p0x, y1, p0z);
          uvs.push(u0, vBot,  u1, vBot,  u1, vTop,  u0, vTop);
          indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
          quadCount++;
        }
      }
    }
  }

  if (quadCount === 0) return { group: null, count: 0 };

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeBoundingSphere();

  const texture = new THREE.TextureLoader().load(assetUrl(assets, 'shopfronts/atlas.jpg'));
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;

  // Unlit so the façades read through the murk (like the comic/face planes).
  // The desaturate/darken/rust grade is baked into the atlas by
  // build-facade-atlas.mjs, so the material doesn't tint again on top.
  // DoubleSide sidesteps per-edge winding — cheap even at a few thousand quads.
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
    fog: true,
  });

  const mesh = new THREE.Mesh(geo, material);
  mesh.name = 'shopfronts';
  scene.add(mesh);

  // Second draw call: the name-placeholder shopfronts, on their own canvas atlas.
  let placeholderMesh = null;
  if (pQuadCount && nameAtlas) {
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.Float32BufferAttribute(pPos, 3));
    pGeo.setAttribute('uv', new THREE.Float32BufferAttribute(pUv, 2));
    pGeo.setIndex(pIdx);
    pGeo.computeBoundingSphere();
    placeholderMesh = new THREE.Mesh(pGeo, new THREE.MeshBasicMaterial({
      map: nameAtlas.texture,
      side: THREE.DoubleSide,
      fog: true,
    }));
    placeholderMesh.name = 'shopfront-placeholders';
    scene.add(placeholderMesh);
  }

  return { group: mesh, placeholders: placeholderMesh, count: quadCount, placeholderCount: pQuadCount };
}

// Deterministic tile pick so the street layout is identical on every reload.
// `band` is mixed in so one wall does not repeat the same photo all the way up.
function hashTile(bi, seg, band, n) {
  let h = (bi * 73856093) ^ (seg * 19349663) ^ ((band + 1) * 83492791);
  h = Math.imul(h ^ (h >>> 13), 0x85ebca6b);
  h ^= h >>> 16;
  return (h >>> 0) % n;
}
