// Façade textures for McGrot Walk — v3 (D4).
//
// One authored full-elevation image per building (a real rectified photo
// where we have one, an AI rendition with real business names composited on
// where we don't — see assets/shopfronts/manifest.json, elevations.json,
// atlas-pages.json and scripts/{build-facade-manifest,build-real-elevations,
// gen-facade-elevations,apply-signage,build-elevation-atlas}.mjs). Replaces
// the old tile-pool/band-stacking/strip system entirely: buildShopfronts()
// now emits exactly ONE quad per street-facing frontage RUN (a chamfered
// junction corner gets its own), sampling that building's region of its
// chainage-bucketed atlas page.
//
// Frontage detection and run-merging (which walls are shopfronts, how OSM's
// per-edge footprints join into one straight wall) live in src/frontage.js,
// shared with the offline manifest builder so the two can never compute
// different geometry for the same building.
//
// Pages are lazy-loaded by the player's chainage (±LOAD_RANGE) so draw calls
// stay bounded regardless of street length — call the returned `update`
// every frame (main.js's single registered update list; see the D2 scar
// tissue note in CLAUDE.md about a subsystem missing from that list).
//
// Absent in the 3-comic single-file artifact (assets.facadeManifest/
// facadeAtlas === null) — this no-ops, same as the old system.

import * as THREE from 'three';
import { assetUrl } from './assets.js';
import { buildNameAtlas } from './placeholders.js';
import { computeFrontageRuns, chainageOfPoint } from './frontage.js';

const BASE_Y = 0.05;       // sit just above the street ribbon (STREET_Y = 0.03)
// D8/task1: was 0.12. A frontage RUN is a straight line between two merged-edge
// endpoints, but the underlying OSM footprint it's drawn over isn't always
// perfectly straight between them (e.g. buildingIndex 729/chainage 125: the
// real footprint bows up to 0.25m off the idealised straight run at its
// midpoint). Where the bow exceeds this nudge, the base wall's own coursed-
// stone extrusion (src/world.js, always present underneath) physically pokes
// through the flat shopfront quad — a raycast confirmed the base mesh winning
// the depth test ~0.08m in front of the quad at 0125-east-far's "flat dark
// panel" — a z-fight/occlusion bug, not a texture or tone problem.
const OUTWARD_EPS = 0.25;  // nudge proud of the building's own wall, toward the street
const MIN_RUN = 0.3;       // a run this short is geometric noise, not a wall
const SLIVER_MAX = 3;      // below this a NAME-PLACEHOLDER run isn't worth a unit (matches old policy)
// "Never stretch past ~1.2x" (brief). Outside that band the quad keeps the
// elevation's own natural width — narrower runs take a centre-cropped slice,
// wider runs are centred and the excess is simply left undrawn: the
// building's own base stone texture (world.js, every wall, always present
// underneath) already sits right there, so it reads as continuing masonry
// rather than a gap. A literal "extend the edge bays" repeat (what the brief
// describes) isn't safe on a SHARED packed atlas page without gutter padding
// per region — this is the deliberate simplification, noted in the D4
// defect register.
const STRETCH_MAX = 1.2;
const LOAD_RANGE = 250; // metres either side of a page's chainage span
const STOREY_M = 3.2;          // matches build-elevation-atlas.mjs / gen-facade-elevations.mjs
const EDGE_STRIP_FRAC = 0.3;   // D5/W1: fraction of a region's own width reused as an edge-bay strip
const GROUND_AVOID_FRAC = 0.4; // D5/W1: edge-bay tiles never sample this bottom fraction (ground floor/signage)
const TOP_AVOID_FRAC = 0.08;   // avoid the top ~8% of an elevation (baked roofline/sky edge)
const V_BAND_FRAC = 0.16;      // height of the reused upper-wall band, as a fraction of region height
const VERT_EXT_MIN = 1.5;      // metres a building must exceed its image by before extending upward
const PLACEHOLDER_UNIT_M = 6.4; // nominal shopfront-unit width for name-placeholder cadence
// D6/task1: past STRETCH_MAX, D5's edge-bay masonry fill (above) is a
// deliberately plain repeat of the SAME photo's own edge strip — safe, but
// at extreme ratios (a photo covering under ~1/3 of the run) it still reads
// as one building's wallpaper stretched implausibly wide. Past THIS
// threshold, buildShopfronts instead builds a "terrace" illusion: the real
// photo stays centred, the excess ground floor gets the building's own
// remaining business names as placeholder fascias, and the excess upper
// storeys borrow OTHER buildings' upper-wall bands from the same atlas page
// — so a very wide run reads as a row of distinct tenements. Tuned by eye
// against the D6 target poses (0040/0125-west, ratios 6.6-8.6:1); must stay
// above STRETCH_MAX and clear of narrower currently-passing runs (checked
// at 0805/0975-west-far, both ~1.3-1.7:1).
const TERRACE_RATIO = 2.5;
const NEIGHBOUR_CHAINAGE_M = 15; // donor exclusion radius: roughly one building's own frontage width
// D5.2: at the extremes of their slide range, D5.1's jittered sample windows
// could reach exactly to a region's u0Full/u1Full border — where thin baked-in
// white photo margins live (the b593-class artifact: measured ~5-6% of region
// width on building 686's "Romeo" elevation, not a one-off) and, with mipmaps
// off but no inter-region atlas gutter, bilinear sampling right at the border
// can still bleed a neighbour region's pixels. Both jitter sites, PLUS the
// narrowGroups proportional-slice mapping (a multi-run building's non-jittered
// edge slices land exactly on u0Full/u1Full for its first/last run — the actual
// cause of the 0550-east-far "ROMEO" white strip, a border-touching mechanism
// the brief didn't name but this measurement makes clear needs the same
// treatment), keep their sampled range inset from the border by this fraction
// of the region's own u-span.
const JITTER_INSET_FRAC = 0.06;
// D8/task2: below this width, a narrowGroups facet's slice of the region's
// own ground-floor signage band is too thin to read as anything but a
// garbled fragment — see the emitInto call below for the full mechanism.
const NARROW_SIGNAGE_MIN_M = 2.2;

export function buildShopfronts(assets, world, scene) {
  const manifest = assets && assets.facadeManifest;
  const atlas = assets && assets.facadeAtlas;
  const buildings = (assets && assets.leith && assets.leith.buildings) || [];
  const streetLine = (world && world.streetLine) || [];
  const nearest = world && world.nearestStreetPoint;
  if (!manifest || !atlas || !buildings.length || !nearest || streetLine.length < 2) {
    return { group: null, count: 0, update() {} };
  }

  const atlasByIndex = atlas.buildings || {};
  const uInset = 0.5; // half-texel inset, in PIXELS (converted per-page below)
  const vInset = 0.5;

  // --- placeholder pool: every business name in the manifest, atlas or no
  // atlas. D5.2 only needed buildings the atlas doesn't cover (elevation
  // missing) as a narrower fallback; D6/task1 also draws these fascias for
  // the ground-band fill of extreme-ratio runs on buildings that DO have an
  // atlas entry, so the pool can no longer exclude them. Same canvas-drawn
  // fascia as the old whole-building placeholder. ---
  const placeholderNames = [];
  for (const mb of manifest.buildings) {
    for (const biz of mb.businesses || []) placeholderNames.push(biz.name);
  }
  const nameAtlas = placeholderNames.length ? buildNameAtlas(placeholderNames) : null;
  const pPos = [], pUv = [], pIdx = [];
  let pQuadCount = 0;

  // --- per-page geometry buffers (texture loaded lazily; geometry is cheap
  // and built up front so a page can appear the instant its texture lands) ---
  // D9/task2: `colors` is a per-vertex multiply tint, defaulted to white by
  // emitInto (below) so every existing call site is untouched; only the new
  // ground-band edge fade (emitGroundBandFaded) writes non-white vertices.
  const pageBuf = atlas.pages.map(() => ({ positions: [], uvs: [], colors: [], indices: [], quadCount: 0 }));

  // --- D6/task1: donor pool for borrowed upper-wall bands, grouped by atlas
  // page (a borrowed band must come from the SAME page as the building
  // using it — pages are lazy-loaded independently, so a cross-page borrow
  // could sample a texture that isn't resident). One representative
  // (non-corner) region per donor building; its own u/v full-region bounds
  // precomputed once here rather than per borrowing run. ---
  const donorsByPage = new Map();
  for (const mb of manifest.buildings) {
    const entry = atlasByIndex[mb.buildingIndex];
    if (!entry) continue;
    const region = entry.regions.find((r) => r.kind !== 'corner') || entry.regions[0];
    if (!region) continue;
    const page = atlas.pages[entry.page];
    const pxU = 1 / page.width, pxV = 1 / page.height;
    const list = donorsByPage.get(entry.page) || [];
    list.push({
      bi: mb.buildingIndex,
      chainage: mb.chainage,
      region,
      u0Full: (region.x + uInset) * pxU,
      u1Full: (region.x + region.w - uInset) * pxU,
      vTop: 1 - (region.y + vInset) * pxV,
      vBot: 1 - (region.y + region.h - vInset) * pxV,
    });
    donorsByPage.set(entry.page, list);
  }

  function emitInto(buf, u0, v0, u1, v1, ax, az, bx, bz, y0, y1) {
    const base = buf.quadCount * 4;
    buf.positions.push(ax, y0, az, bx, y0, bz, bx, y1, bz, ax, y1, az);
    buf.uvs.push(u0, v0, u1, v0, u1, v1, u0, v1);
    buf.colors.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
    buf.indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
    buf.quadCount++;
  }

  // D9/task2: pushes one quad with an explicit per-corner colour instead of
  // emitInto's implicit white — corners in the same order as emitInto's
  // positions ((ax,y0,az), (bx,y0,bz), (bx,y1,bz), (ax,y1,az)).
  function emitIntoTinted(buf, u0, v0, u1, v1, ax, az, bx, bz, y0, y1, c0, c1, c2, c3) {
    const base = buf.quadCount * 4;
    buf.positions.push(ax, y0, az, bx, y0, bz, bx, y1, bz, ax, y1, az);
    buf.uvs.push(u0, v0, u1, v0, u1, v1, u0, v1);
    buf.colors.push(...c0, ...c1, ...c2, ...c3);
    buf.indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
    buf.quadCount++;
  }

  // D9/task2: signage truncated mid-word at a run's true edges — root-caused
  // to two mechanisms that both leave content flush against the last visible
  // pixel column: (1) apply-signage.mjs's baked name tiles ellipsise a name
  // too long for their fixed 128x64 budget with no margin, and (2) even a
  // FULLY legible baked name can get its last character(s) cropped at
  // runtime, because the near-1:1-ratio branch below maps u0Full+inset..
  // u1Full-inset onto the run's FULL world width — the protected
  // JITTER_INSET_FRAC margin (must stay; see its own comment) is exactly
  // where an edge-flush sign's final letters live. Neither is fixable
  // without either regenerating baked elevation JPGs (no clean pre-signage
  // source exists on disk — assets/shopfronts/elevations/ is gitignored,
  // and Together AI is parked) or shrinking the protected inset (banned).
  // So: fade the ground band's own two outer edges to black, deep enough to
  // swallow whatever partial glyph or "…" sits right at the crop boundary,
  // so it reads as a shadowed party-wall recess (consistent with the
  // grime/decay language used everywhere else) rather than a glitched crop.
  // Ground band only (BASE_Y..STOREY_M) — upper storeys carry no signage and
  // are left as a single plain quad, unchanged.
  const GROUND_FADE_FRAC = 0.1; // fraction of the RUN's own world width, each side
  // D9/task3: a fixed 10% fraction is plenty for a run whose signage fills
  // the whole width (Task 2's confirmed case), but for a narrowGroups run
  // carrying only a PROPORTIONAL SLICE of its region — e.g. buildingIndex
  // 536's main run showing 3 of its 4 baked names in the last ~70% of its
  // width — the final name can occupy a much wider share of the run than
  // 10%, so the fade never reaches it and two adjacent buildings' full
  // names still run together with no visible seam (confirmed in-browser:
  // "Bandits"+"Tip Top Tresses" at 0210-west-far, "Aslam Jewellers"+"Cherry
  // Bay Cafe" at 0720-west-far — both READ as one fused name, not a crop).
  // Floor the fade at a fixed world distance so it always reaches deep
  // enough into a packed name to read as a deliberate shadowed recess.
  const GROUND_FADE_MIN_M = 1.1; // metres, each side — roughly one letter-run of a small fascia name
  // Returns the number of quads emitted (for the caller's quadCount tally).
  function emitGroundBandFaded(buf, u0, u1, vTop_, vBot_, heightM_, ax, az, bx, bz) {
    const vSpan = vTop_ - vBot_;
    const vAtStorey = vBot_ + vSpan * Math.min(1, STOREY_M / (heightM_ || STOREY_M));
    const dx = bx - ax, dz = bz - az;
    const runLen = Math.hypot(dx, dz) || 1;
    const at = (t) => [ax + dx * t, az + dz * t];
    const uAt = (t) => u0 + (u1 - u0) * t;
    const WHITE = [1, 1, 1], BLACK = [0, 0, 0];
    const ef = Math.min(0.4, Math.max(GROUND_FADE_FRAC, GROUND_FADE_MIN_M / runLen));
    if (1 - 2 * ef <= 1e-3) {
      // run too narrow for a 3-way split — leave the ground band plain
      // rather than fading it entirely to black.
      emitInto(buf, u0, vBot_, u1, vAtStorey, ax, az, bx, bz, BASE_Y, STOREY_M);
      return 1;
    }
    const segs = [[0, ef, BLACK, WHITE], [ef, 1 - ef, WHITE, WHITE], [1 - ef, 1, WHITE, BLACK]];
    for (const [t0, t1, cLeft, cRight] of segs) {
      const [sx, sz] = at(t0), [ex, ez] = at(t1);
      emitIntoTinted(buf, uAt(t0), vBot_, uAt(t1), vAtStorey, sx, sz, ex, ez, BASE_Y, STOREY_M, cLeft, cRight, cRight, cLeft);
    }
    return segs.length;
  }

  function hash32(a, b) {
    let h = (a * 73856093) ^ (b * 19349663);
    h = Math.imul(h ^ (h >>> 13), 0x85ebca6b);
    h ^= h >>> 16;
    return h >>> 0;
  }

  let quadCount = 0;

  // Stacks a safe upper band (v-range above its ground floor, below its
  // roofline) at native aspect from yStart to yEnd, mirrored ping-pong —
  // the one stacking recipe shared by the ground-band masonry fallback, the
  // too-few-donors degrade, the borrowed bays, the roofline extension (D6),
  // and (D7/task1a) the bare-frontage borrow-fill below. Takes `buf` as a
  // param (not closed over) so it can target ANY page's buffer, not just
  // the calling building's own — needed once D7 borrows for buildings with
  // no atlas entry of their own.
  const emitBandStack = (buf, u0Raw, u1Raw, vTop_, vBot_, groundFrac, heightM_, ax, az, bx, bz, yStart, yEnd, mirrorSeed = 0) => {
    // D5.2 lesson (see JITTER_INSET_FRAC above): ANY border-touching
    // sample window on a packed atlas page risks the baked-in white
    // photo-margin bleed, not just the two sites that originally
    // found it. A borrowed band always samples right up to a
    // donor's OWN u0Full/u1Full border (never slid inward like the
    // edge-bay strips), so inset it the same protective fraction.
    const uInsetHere = JITTER_INSET_FRAC * (u1Raw - u0Raw);
    const u0 = u0Raw + uInsetHere, u1 = u1Raw - uInsetHere;
    const vSpan_ = vTop_ - vBot_;
    const edgeBot = vSpan_ > 0 ? vBot_ + groundFrac * vSpan_ : vBot_;
    const bandTop_ = vTop_ - TOP_AVOID_FRAC * vSpan_;
    const bandWorldH = Math.max(0.1, ((bandTop_ - edgeBot) / (vSpan_ || 1)) * heightM_);
    let y = yStart, vi = 0;
    while (y < yEnd - 1e-6 && bandWorldH > 1e-4) {
      const dh = Math.min(bandWorldH, yEnd - y);
      const frac = dh / bandWorldH;
      // D8/task3: was `vi % 2 === 0` — every stack in the scene alternated
      // in lockstep (row 0 always mirrored, row 1 never, ...), so any two
      // stacks with a similar band height (donor-borrowed bays especially)
      // read as identical mirror-symmetric wallpaper — worst right at a
      // recessed close, where the two flanking returns sit side by side in
      // one eyeful. Salting per call site (building/run/side/bay — see each
      // emitBandStack call) decorrelates the ping-pong sequence between
      // stacks while keeping it deterministic and reproducing identically
      // across reloads (hash32 only, no PRNG state).
      const mirrored = (hash32(mirrorSeed, vi) & 1) === 0;
      const vNear = mirrored ? bandTop_ : edgeBot;
      const vFar = mirrored ? edgeBot : bandTop_;
      const vFarClipped = vNear + (vFar - vNear) * frac;
      emitInto(buf, u0, vNear, u1, vFarClipped, ax, az, bx, bz, y, y + dh);
      quadCount++;
      y += dh; vi++;
    }
  };

  // D7/task1a: which atlas page's chainage bucket a bare building (no atlas
  // entry of its own) falls into, so its borrowed bays can target a page
  // that's actually resident when the player is close enough to see the
  // wall (same lazy-load bucketing as every other page).
  function pageForChainage(chainage) {
    let best = -1, bestDist = Infinity;
    atlas.pages.forEach((pg, i) => {
      if (chainage >= pg.chainageMin && chainage <= pg.chainageMax) { best = i; bestDist = 0; }
      else if (best === -1 || bestDist > 0) {
        const d = chainage < pg.chainageMin ? pg.chainageMin - chainage : chainage - pg.chainageMax;
        if (d < bestDist) { bestDist = d; best = i; }
      }
    });
    return best;
  }

  for (const mb of manifest.buildings) {
    const bi = mb.buildingIndex;
    const building = buildings[bi];
    if (!building || !building.footprint || building.footprint.length < 3) continue;

    const runs = computeFrontageRuns(building, nearest);
    if (!runs.length) continue;

    let cx = 0, cz = 0;
    for (const p of building.footprint) { cx += p[0]; cz += p[1]; }
    cx /= building.footprint.length;
    cz /= building.footprint.length;

    const atlasEntry = atlasByIndex[bi];

    // D5/W1 (residual #5): multiple narrow runs of the same building that map
    // to the same atlas region (e.g. a chamfer's several short facets) used to
    // each independently pick a randomly-panned centre-slice, producing
    // near-duplicate distorted crops. Where a group has more than one narrow
    // run, give them non-overlapping proportional slices across the WHOLE
    // image instead — a single continuous slice split across the facets.
    // Keyed on the RESOLVED region object itself (not the isChamfer flag) —
    // a building with no dedicated corner region falls back to the same
    // single region for every run regardless of isChamfer, so grouping by
    // flag would split one shared region into two independently-sliced
    // (and therefore overlapping) groups.
    // D5.1 (task 3): grouped by shared region regardless of ratio (was: only
    // narrow runs) — a curved chamfer corner with several facets ALL mapping
    // to the same single shared region (no dedicated corner region) used to
    // slice its narrow facets non-overlappingly but let any natural-ratio
    // facet on the same region replay the WHOLE image again independently,
    // re-showing every business name from the narrow slices a second time
    // (observed at building 255/chainage ~805 and 275+374+76+75/~975 —
    // "Bee Tech/EPOCA" and "Crighton Pharma" cross-signage confusion). Any
    // run up to STRETCH_MAX now joins the group so it takes a proportional
    // slice like its narrow siblings instead of the full frame; only truly
    // WIDE runs (edge-bay territory) are excluded, since those already have
    // their own non-duplicating mechanism.
    const narrowGroups = new Map(); // region -> { totalSpan, count, cursor }
    // D5.2 (task 3): buildings with NO atlas region fall back to the plain
    // name-placeholder path below, drawing `units` of mb.businesses per RUN.
    // A multi-run building (e.g. a jagged OSM footprint merging several real
    // shopfronts into one way, each its own frontage run) used to restart
    // that cycle at businesses[0] on every run, replaying the same business
    // name once per run — the "WEX PHOTO VIDEO" doubling at buildingIndex 150
    // (2 runs, 3 businesses, no atlas entry). This cursor carries the
    // business-name index across all of one building's runs so each run
    // continues where the previous one left off instead of restarting.
    let placeholderUnitCursor = 0;
    if (atlasEntry) {
      for (const run of runs) {
        const span = Math.hypot(run.bx - run.ax, run.bz - run.az);
        if (span < MIN_RUN) continue;
        const region = atlasEntry.regions.find((r) => (run.isChamfer ? r.kind === 'corner' : r.kind !== 'corner')) || atlasEntry.regions[0];
        if (!region) continue;
        if (span / region.widthM > STRETCH_MAX) continue; // wide -> edge-bay path, not grouped
        const g = narrowGroups.get(region) || { totalSpan: 0, count: 0, cursor: 0 };
        g.totalSpan += span;
        g.count += 1;
        narrowGroups.set(region, g);
      }
    }

    runs.forEach((run, runIdx) => {
      const rdx = run.bx - run.ax, rdz = run.bz - run.az;
      const span = Math.hypot(rdx, rdz);
      if (span < MIN_RUN) return;

      // Outward normal + walk direction for THIS run (independent of the raw
      // footprint winding recorded by computeFrontageRuns — that winding is
      // only meaningful for the collinearity test, not for which way the
      // textured face should point).
      let sx = run.ax, sz = run.az, dx = rdx, dz = rdz;
      let nx = -rdz / span, nz = rdx / span;
      const mx = (run.ax + run.bx) / 2, mz = (run.az + run.bz) / 2;
      if (nx * (mx - cx) + nz * (mz - cz) < 0) {
        nx = -nx; nz = -nz; sx = run.bx; sz = run.bz; dx = -rdx; dz = -rdz;
      }
      const at = (t) => ({ x: sx + dx * t + nx * OUTWARD_EPS, z: sz + dz * t + nz * OUTWARD_EPS });

      const region = atlasEntry
        ? (atlasEntry.regions.find((r) => (run.isChamfer ? r.kind === 'corner' : r.kind !== 'corner')) || atlasEntry.regions[0])
        : null;

      if (region) {
        const page = atlas.pages[atlasEntry.page];
        const buf = pageBuf[atlasEntry.page];
        const pxU = 1 / page.width, pxV = 1 / page.height;
        const u0Full = (region.x + uInset) * pxU;
        const u1Full = (region.x + region.w - uInset) * pxU;
        const vTop = 1 - (region.y + vInset) * pxV;       // flipY: image top -> V=1
        const vBot = 1 - (region.y + region.h - vInset) * pxV;

        const ratio = span / region.widthM;
        // Hoisted so the terrace branch below can use it too (was previously
        // computed only after hQuads emission, for the roofline-extension
        // step shared by every ratio branch).
        const buildingHeightM = Math.max(2, mb.levels || 2) * STOREY_M;

        // This building's own safe upper band (never the ground floor) —
        // shared by every ratio branch as the degrade path when a page has
        // too few donors.
        const ownGroundAvoidFrac = Math.min(0.75, Math.max(GROUND_AVOID_FRAC, STOREY_M / region.heightM));
        const ownVSpan = vTop - vBot;

        // D6/task1: donor pool for borrowed bands (excess sides AND, below,
        // the generic roofline extension) — computed once per run, for
        // every ratio branch that has an atlas region at all.
        const donorsAll = (donorsByPage.get(atlasEntry.page) || []).filter((d) => d.bi !== bi);
        const donorsFar = donorsAll.filter((d) => Math.abs(d.chainage - mb.chainage) >= NEIGHBOUR_CHAINAGE_M);
        // Excluding immediate street neighbours is only safe if it still
        // leaves a usable pool — degrade to the unfiltered pool otherwise
        // (see the <3-donor degrade below for the "too thin" case itself).
        const donors = donorsFar.length >= 3 ? donorsFar : donorsAll;

        const hQuads = []; // {u0,u1,ax,az,bx,bz} — every horizontal quad this run emits at BASE_Y..region.heightM
        if (ratio > TERRACE_RATIO) {
          // D6/task1: terrace illusion — see TERRACE_RATIO comment. Real
          // photo centred at natural width, same as the STRETCH_MAX branch.
          const centerSpanT = Math.min(1, region.widthM / span);
          const tStart = Math.max(0, 0.5 - centerSpanT / 2);
          const tEnd = Math.min(1, 0.5 + centerSpanT / 2);
          const ca = at(tStart), cb = at(tEnd);
          hQuads.push({ u0: u0Full, u1: u1Full, ax: ca.x, az: ca.z, bx: cb.x, bz: cb.z });

          const sides = [
            { side: 0, innerT: tStart, dirSign: -1 }, // left excess: tStart -> 0, outward
            { side: 1, innerT: tEnd, dirSign: 1 },     // right excess: tEnd -> 1, outward
          ];

          for (const { side, innerT, dirSign } of sides) {
            const excessT = side === 0 ? tStart : (1 - tEnd);
            const excessWorldLen = excessT * span;
            if (excessWorldLen < MIN_RUN) continue;

            // --- ground band (BASE_Y..STOREY_M): this building's OWN
            // remaining business names as placeholder fascias, inner-to-
            // outer (i.e. continuing naturally from the real photo edge);
            // once names run out, masonry fallback for the rest. Cursor is
            // shared with the plain no-atlas placeholder path below so a
            // building touched by both never repeats a name. ---
            const nUnits = Math.max(1, Math.round(excessWorldLen / PLACEHOLDER_UNIT_M));
            const unitT = excessT / nUnits;
            const remaining = mb.businesses ? mb.businesses.length - placeholderUnitCursor : 0;
            const namedUnits = nameAtlas ? Math.max(0, Math.min(remaining, nUnits)) : 0;

            for (let u = 0; u < nUnits; u++) {
              const t0 = innerT + dirSign * u * unitT;
              const t1 = innerT + dirSign * (u + 1) * unitT;
              const a = at(Math.min(t0, t1)), b = at(Math.max(t0, t1));

              if (u < namedUnits) {
                const biz = mb.businesses[placeholderUnitCursor];
                placeholderUnitCursor++;
                const uv = nameAtlas.uvFor.get(biz.name);
                if (uv) {
                  const base = pQuadCount * 4;
                  pPos.push(a.x, BASE_Y, a.z, b.x, BASE_Y, b.z, b.x, STOREY_M, b.z, a.x, STOREY_M, a.z);
                  pUv.push(uv.u0, uv.vBot, uv.u1, uv.vBot, uv.u1, uv.vTop, uv.u0, uv.vTop);
                  pIdx.push(base, base + 1, base + 2, base, base + 2, base + 3);
                  pQuadCount++;
                  quadCount++;
                }
                continue;
              }

              // D6/task1: this building's own safe band is often thin (a
              // short photo relative to a tall declared building — the same
              // problem the centre-quad roofline extension has above), and
              // stretching that thin slice over a whole storey's height is
              // its own source of the moiré/kaleidoscope read (confirmed
              // in-browser on building 54, right-side ground fallback).
              // Borrow a donor's safe band here too, same as the upper
              // bays, rather than reuse this building's own.
              if (donors.length >= 3) {
                const fallbackDonorIdx = hash32(bi, runIdx * 6151 + side * 331 + u) % donors.length;
                const fallbackDonor = donors[fallbackDonorIdx];
                const fGroundFrac = Math.min(0.75, Math.max(GROUND_AVOID_FRAC, STOREY_M / fallbackDonor.region.heightM));
                emitBandStack(buf, fallbackDonor.u0Full, fallbackDonor.u1Full, fallbackDonor.vTop, fallbackDonor.vBot, fGroundFrac, fallbackDonor.region.heightM, a.x, a.z, b.x, b.z, BASE_Y, STOREY_M, hash32(bi, runIdx * 6151 + side * 331 + u + 1));
              } else if (ownVSpan > 0) {
                emitBandStack(buf, u0Full, u1Full, vTop, vBot, ownGroundAvoidFrac, region.heightM, a.x, a.z, b.x, b.z, BASE_Y, STOREY_M, hash32(bi, runIdx * 6151 + side * 331 + u + 1));
              }
            }

            // --- upper band (STOREY_M..buildingHeightM): borrowed bays from
            // OTHER buildings' elevations on the same atlas page. ---
            if (buildingHeightM > STOREY_M + 1e-6) {
              const outerT = side === 0 ? 0 : 1;
              const farA = at(Math.min(innerT, outerT)), farB = at(Math.max(innerT, outerT));

              if (donors.length < 3) {
                // Too few usable donors on this page to avoid one donor
                // visibly repeating — degrade to this building's own safe
                // upper band across the whole excess width instead.
                if (ownVSpan > 0) {
                  emitBandStack(buf, u0Full, u1Full, vTop, vBot, ownGroundAvoidFrac, region.heightM, farA.x, farA.z, farB.x, farB.z, STOREY_M, buildingHeightM, hash32(bi, runIdx * 4111 + side * 211 + 2));
                }
              } else {
                // Bay-by-bay: each bay is one donor's native widthM, drawn
                // at its own aspect; hash32-picked per (bi, runIdx, side,
                // bayIdx), bumped off the previous adjacent bay's donor so
                // neighbouring bays never repeat.
                let t = innerT, bayIdx = 0, prevDonorIdx = -1;
                let guard = 0;
                while (Math.abs(t - innerT) < excessT - 1e-6 && guard++ < 64) {
                  let donorPick = hash32(bi, runIdx * 4111 + side * 211 + bayIdx) % donors.length;
                  if (donorPick === prevDonorIdx) donorPick = (donorPick + 1) % donors.length;
                  const donor = donors[donorPick];
                  prevDonorIdx = donorPick;

                  const remainT = excessT - Math.abs(t - innerT);
                  const donorSpanT = Math.min(remainT, Math.max(donor.region.widthM / span, 1e-4));
                  const tNext = t + dirSign * donorSpanT;
                  const a = at(Math.min(t, tNext)), b = at(Math.max(t, tNext));

                  const dGroundFrac = Math.min(0.75, Math.max(GROUND_AVOID_FRAC, STOREY_M / donor.region.heightM));
                  emitBandStack(buf, donor.u0Full, donor.u1Full, donor.vTop, donor.vBot, dGroundFrac, donor.region.heightM, a.x, a.z, b.x, b.z, STOREY_M, buildingHeightM, hash32(bi, runIdx * 4111 + side * 211 + bayIdx));

                  t = tNext; bayIdx++;
                }
              }
            }
          }
        } else if (ratio > STRETCH_MAX) {
          // Too wide for one natural-width quad. D5/W1: emit the ONE authored
          // elevation at natural width, centred on the run, and fill the
          // excess on each side with edge-bay quads that resample only the
          // outer EDGE_STRIP_FRAC of the SAME region (inset by the region's
          // own uInset/vInset, so this never reads into a neighbour's atlas
          // pixels) with mirrored ping-pong UVs. This replaces D4/D4.1's
          // whole-elevation repetition, which duplicated legible baked
          // signage across the run — an edge-bay strip carries no signage
          // (signage lives centred in the image) so it tiles as plausible
          // continuing masonry instead.
          const centerSpanT = Math.min(1, region.widthM / span);
          const tStart = Math.max(0, 0.5 - centerSpanT / 2);
          const tEnd = Math.min(1, 0.5 + centerSpanT / 2);
          const ca = at(tStart), cb = at(tEnd);
          hQuads.push({ u0: u0Full, u1: u1Full, ax: ca.x, az: ca.z, bx: cb.x, bz: cb.z });

          // Edge-bay tiles reuse a v-range clamped to the UPPER portion of the
          // image only (never the ground floor), where real-photo AND AI+
          // signage buildings alike carry their business names — this is what
          // guarantees an edge bay can never duplicate legible signage,
          // regardless of how wide the reused strip is horizontally.
          // D6/task2: GROUND_AVOID_FRAC 0.4 assumes the ground floor is a
          // fixed fraction of the WHOLE elevation, but the ground floor is
          // actually a fixed real-world height (one storey, same STOREY_M
          // used everywhere else) — on a short 2-storey photo (region 373,
          // "Pascal & Co", heightM 6.4) one storey is HALF the image, not
          // 40% of it, so the fixed fraction left a sliver of ground-floor
          // signage exposed at the top of the "avoided" band, which the
          // edge-bay strip then mirrored into legible duplicate signage
          // ("CURIOSO"/"The Cutting Room" mirrored, spot-checked in-browser).
          // Widen the avoided fraction to whichever is larger — the fixed
          // 0.4 (taller buildings, unaffected) or one real storey's actual
          // share of this region's height — capped so a single-storey photo
          // (heightM == STOREY_M) doesn't zero out the reusable band entirely.
          const groundAvoidFrac = Math.min(0.75, Math.max(GROUND_AVOID_FRAC, STOREY_M / region.heightM));
          const vSpanFull = vTop - vBot;
          const edgeVBot = vBot + groundAvoidFrac * vSpanFull;

          // D5.1: the reused band's own native aspect, so it stacks to fill
          // the wall height instead of one copy being stretched over it (the
          // "mirrored, vertically-striped" fault the D5 eval caught).
          const bandFracV = 1 - groundAvoidFrac;
          const bandWorldH = bandFracV * region.heightM;

          const uSpan = u1Full - u0Full;
          const stripUV = EDGE_STRIP_FRAC * uSpan;
          const stripWorldM = EDGE_STRIP_FRAC * region.widthM;
          const tileT = stripWorldM / span;
          // D5.1: room to slide a tile's sampled window inward from the fixed
          // strip edge, per-tile and per vertical band via hash32, so mirrored
          // horizontal neighbours and stacked vertical repeats don't sample
          // identical content (the "kaleidoscope" read) — kept to well under
          // half the region width so it can never drift into the centred
          // signage the strip was chosen to avoid.
          const maxSlideUV = Math.max(0, uSpan - stripUV);
          const edgeInsetUV = JITTER_INSET_FRAC * uSpan;
          const edgeSlideRange = Math.max(0, maxSlideUV - 2 * edgeInsetUV);

          // Stacks the reused band at native height from BASE_Y up to
          // region.heightM for one horizontal tile (uA/uB = that tile's
          // already-clipped horizontal UV window); mirrors each vertical
          // repeat like the existing roofline-extension band below. D5.2:
          // the slide is keyed on (bi, runIdx, side, vi) only — NOT li (the
          // horizontal tile index) — so every horizontal tile in the same
          // vertical band slides by the identical amount. Combined with the
          // per-tile mirror ping-pong (li%2), consecutive horizontal tiles
          // stay reflection-continuous at their shared join (same sampled
          // window, alternating flip) while successive vertical bands still
          // sample different windows, breaking up the vertical-stack repeat.
          // li===0 (the tile immediately flush against the centred natural-
          // width instance) is exempted from the slide entirely — D5's
          // original un-jittered edge-bay had this join sampling the exact
          // same UV as the centre quad's own edge (pixel-continuous); D5.1's
          // jitter slid even this tile, breaking the highest-value seam
          // right next to real photo content (the "discontinuous cornice"
          // fail at 0040-west-close, a D5 pass). Tiles li>=1 still slide.
          const emitEdgeStack = (uA, uB, ax, az, bx, bz, side, li) => {
            const dir = side === 0 ? 1 : -1;
            let y = BASE_Y, vi = 0;
            while (y < region.heightM - 1e-6 && bandWorldH > 1e-4) {
              const dh = Math.min(bandWorldH, region.heightM - y);
              const vfrac = dh / bandWorldH;
              const slide = (maxSlideUV > 0 && li > 0)
                ? Math.min(edgeInsetUV + ((hash32(bi, runIdx * 977 + side * 97 + vi) % 1000) / 1000) * edgeSlideRange, maxSlideUV)
                : 0;
              const uAJ = uA + dir * slide;
              const uBJ = uB + dir * slide;
              const vMirrored = vi % 2 === 0;
              const vNear = vMirrored ? edgeVBot : vTop;
              const vFar = vMirrored ? vTop : edgeVBot;
              const vFarClipped = vNear + (vFar - vNear) * vfrac;
              emitInto(buf, uAJ, vNear, uBJ, vFarClipped, ax, az, bx, bz, y, y + dh);
              quadCount++;
              y += dh; vi++;
            }
          };

          let t = tStart, li = 0;
          while (t > 1e-6) { // left excess: tStart -> 0, tiling outward
            const dt = Math.min(tileT, t);
            const tNext = t - dt;
            const frac = tileT > 0 ? dt / tileT : 1;
            const mirrored = li % 2 === 0;
            const uNear = mirrored ? u0Full : u0Full + stripUV;
            const uFar = mirrored ? u0Full + stripUV : u0Full;
            const uFarClipped = uNear + (uFar - uNear) * frac;
            const a = at(tNext), b = at(t);
            emitEdgeStack(uFarClipped, uNear, a.x, a.z, b.x, b.z, 0, li);
            hQuads.push({ u0: uFarClipped, u1: uNear, ax: a.x, az: a.z, bx: b.x, bz: b.z, skipBase: true, side: 0 });
            t = tNext; li++;
          }
          t = tEnd; li = 0;
          while (t < 1 - 1e-6) { // right excess: tEnd -> 1, tiling outward
            const dt = Math.min(tileT, 1 - t);
            const tNext = t + dt;
            const frac = tileT > 0 ? dt / tileT : 1;
            const mirrored = li % 2 === 0;
            const uNear = mirrored ? u1Full : u1Full - stripUV;
            const uFar = mirrored ? u1Full - stripUV : u1Full;
            const uFarClipped = uNear + (uFar - uNear) * frac;
            const a = at(t), b = at(tNext);
            emitEdgeStack(uNear, uFarClipped, a.x, a.z, b.x, b.z, 1, li);
            hQuads.push({ u0: uNear, u1: uFarClipped, ax: a.x, az: a.z, bx: b.x, bz: b.z, skipBase: true, side: 1 });
            t = tNext; li++;
          }
        } else {
          const g = narrowGroups.get(region);
          let u0, u1;
          if (g && g.count > 1 && g.totalSpan > 0) {
            // D5/D5.1 (residual #5 + task 3): several facets sharing one
            // region (any ratio up to STRETCH_MAX, not just narrow ones) —
            // non-overlapping proportional slices across the whole image, so
            // a natural-ratio facet doesn't replay the full frame (and every
            // business name in it) a second time right where its narrow
            // chamfer siblings already sliced through it. D5.2: the mapped
            // range is inset from u0Full/u1Full (same JITTER_INSET_FRAC as
            // the two jitter sites) so the group's outermost slice — the
            // first and last runs, which land exactly on the border with no
            // jitter to save them — doesn't sample the baked-in white margin.
            const groupInsetUV = JITTER_INSET_FRAC * (u1Full - u0Full);
            const uLo = u0Full + groupInsetUV, uHi = u1Full - groupInsetUV;
            const uSpanFull = Math.max(0, uHi - uLo);
            const startU = uLo + uSpanFull * (g.cursor / g.totalSpan);
            g.cursor += span;
            const endU = uLo + uSpanFull * (g.cursor / g.totalSpan);
            u0 = startU; u1 = endU;
          } else if (ratio < 1 / STRETCH_MAX) {
            // Only one narrow run in this group: a centre slice sized to the
            // run, panned a little so it doesn't always show the dead centre.
            const frac = Math.max(0.08, ratio);
            const half = ((u1Full - u0Full) * frac) / 2;
            const panT = ((hash32(bi, runIdx) % 1000) / 1000 - 0.5) * 0.3;
            const center = (u0Full + half) + 0.5 * (u1Full - u0Full) + panT * ((u1Full - half) - (u0Full + half));
            u0 = Math.max(u0Full, center - half);
            u1 = Math.min(u1Full, center + half);
          } else {
            // D8/task4: was the raw u0Full/u1Full with no inset beyond the
            // half-texel uInset baked into those bounds — the 4th
            // border-touching site (JITTER_INSET_FRAC's own comment above
            // predicted a 4th would turn up). A single run at a near-1:1
            // ratio (e.g. buildingIndex 350/chainage 1319, ratio 1.065) has
            // no jitter and no narrowGroups slicing to save it, so it always
            // sampled right up to the region border — confirmed in-browser
            // as the "bright glowing white vertical band" at 1315-west-far,
            // both edges of building 350's photo.
            const insetUV = JITTER_INSET_FRAC * (u1Full - u0Full);
            u0 = u0Full + insetUV; u1 = u1Full - insetUV;
          }
          const a = at(0), b = at(1);
          // D8/task2: a run this narrow (a tight chamfer facet on a curved
          // corner, e.g. buildingIndex 255's 1.1-1.76m facets) can't show a
          // legible fragment of the region's own ground-floor signage band —
          // measured in-browser at 0805-west-far: the narrowGroups slices
          // ARE correctly non-overlapping in UV (confirmed by reading the
          // emitted quads' u-ranges directly), but several adjacent slivers
          // each carrying a different sliver of baked business-name text
          // read, together, as the garbled overlapping mess graders reported
          // ("Beyond ...ns Beygio") — not a geometry bug, a legibility one.
          // Skip the ground floor's signage band on these and let the base
          // wall (or, above STOREY_M, the gable dressing) show through
          // instead; the run still gets the region's upper (window/masonry,
          // no text) band like any other facet.
          if (g && g.count > 1 && span < NARROW_SIGNAGE_MIN_M) {
            const skipFrac = Math.min(0.9, STOREY_M / region.heightM);
            hQuads.push({ u0, u1, ax: a.x, az: a.z, bx: b.x, bz: b.z, y0: STOREY_M, v0: vBot + (vTop - vBot) * skipFrac });
          } else {
            // D9/task2: this quad spans the run edge-to-edge (a=at(0),
            // b=at(1)) with the region's ground-floor signage band intact —
            // exactly the case the edge fade below targets. The narrow/
            // skip-signage branch above already omits the ground band
            // entirely, so it needs no fade.
            hQuads.push({ u0, u1, ax: a.x, az: a.z, bx: b.x, bz: b.z, groundFade: true });
          }
        }

        for (const q of hQuads) {
          if (q.skipBase) continue; // D5.1: edge-bay tiles already emitted their own stacked quads above
          if (q.groundFade) {
            quadCount += emitGroundBandFaded(buf, q.u0, q.u1, vTop, vBot, region.heightM, q.ax, q.az, q.bx, q.bz);
            if (region.heightM > STOREY_M + 1e-6) {
              const vAtStorey = vBot + (vTop - vBot) * Math.min(1, STOREY_M / (region.heightM || STOREY_M));
              emitInto(buf, q.u0, vAtStorey, q.u1, vTop, q.ax, q.az, q.bx, q.bz, STOREY_M, region.heightM);
              quadCount++;
            }
            continue;
          }
          emitInto(buf, q.u0, q.v0 ?? vBot, q.u1, q.v1 ?? vTop, q.ax, q.az, q.bx, q.bz, q.y0 ?? BASE_Y, region.heightM);
          quadCount++;
        }

        // D6/task1: the centre/narrow quad's (side undefined) own roofline
        // extension used to reuse THIS building's own region band, mirrored
        // ping-pong — fine when the photo is close to the building's real
        // height, but a photo that's short relative to a much taller
        // declared building (levels-derived) needs many repeats of a thin
        // band, which reads as a mirror-symmetric "kaleidoscope" seam
        // (confirmed in-browser: buildings 54/283/424/801 — poses 0040,
        // 0890, 1485, 1570-west). Borrow a donor's band instead, same as the
        // excess-side bays, whenever the page has enough donors; degrade to
        // the old own-band approach otherwise. Side-marked (edge-bay) quads
        // are UNCHANGED below — their own join-continuity mechanism (D5.1/
        // D5.2) is untouched.
        if (buildingHeightM - region.heightM > VERT_EXT_MIN) {
          for (const q of hQuads) {
            if (q.side !== undefined) continue;
            if (donors.length >= 3) {
              const donorIdx = hash32(bi, runIdx * 8231 + 17) % donors.length;
              const donor = donors[donorIdx];
              const dGroundFrac = Math.min(0.75, Math.max(GROUND_AVOID_FRAC, STOREY_M / donor.region.heightM));
              emitBandStack(buf, donor.u0Full, donor.u1Full, donor.vTop, donor.vBot, dGroundFrac, donor.region.heightM, q.ax, q.az, q.bx, q.bz, region.heightM, buildingHeightM, hash32(bi, runIdx * 8231 + 18));
            } else if (ownVSpan > 0) {
              emitBandStack(buf, q.u0, q.u1, vTop, vBot, ownGroundAvoidFrac, region.heightM, q.ax, q.az, q.bx, q.bz, region.heightM, buildingHeightM, hash32(bi, runIdx * 8231 + 18));
            }
          }
        }

        // D5/W1: buildings taller than their authored elevation (e.g. a
        // 2-storey photo on a 4-storey OSM footprint) used to leave a bare
        // procedural-stone slab above the image. Stack extra quads sampling a
        // reused upper-wall band (avoiding the top TOP_AVOID_FRAC where a
        // baked roofline/sky edge may sit), mirrored ping-pong vertically, up
        // to the building's real height — same hQuads footprint as the base.
        // D6/task1: side-marked (edge-bay) quads ONLY now — the centre/
        // narrow quad's extension is handled above.
        if (buildingHeightM - region.heightM > VERT_EXT_MIN && hQuads.some((q) => q.side !== undefined)) {
          const vSpan = vTop - vBot;
          const bandTop = vTop - TOP_AVOID_FRAC * vSpan;
          const bandBot = Math.max(vBot, bandTop - V_BAND_FRAC * vSpan);
          const tileWorldH = V_BAND_FRAC * region.heightM;
          // D5.1: this band was a fixed, un-jittered mirrored ping-pong —
          // a tall single-photo building (no edge-bay involved at all) would
          // still read as "repeating upper storeys" once stacked several
          // times, the same kaleidoscope fault as the edge-bay case. D5.2:
          // the original per-quad jitter (keyed on qi, the index within
          // hQuads) independently repositioned EVERY quad's sample window to
          // the same absolute start point regardless of its own width or
          // world position — discarding whatever left-right continuity the
          // base band (below) already had between adjacent edge-bay tiles,
          // which is what produced the "discontinuous cornice" read at
          // 0040-west-close. Fixed the same way as the edge-bay slide: ONE
          // shared shift per (side, vi) — side-0 and side-1 edge-bay tiles
          // all reuse the identical unslid strip already (see hQuads' u0/u1
          // for skipBase entries), so applying the SAME shift to all of a
          // side's quads at a given vi keeps them matching each other, only
          // varying row-to-row. The centred/narrowGroups quad (side
          // undefined) is left unshifted, consistent with it never being
          // inset either.
          const roofUSpan = u1Full - u0Full;
          const roofInsetUV = JITTER_INSET_FRAC * roofUSpan;
          const sideMinRoom = {};
          for (const q of hQuads) {
            if (q.side === undefined) continue;
            const room = Math.max(0, roofUSpan - Math.abs(q.u1 - q.u0));
            if (sideMinRoom[q.side] === undefined || room < sideMinRoom[q.side]) sideMinRoom[q.side] = room;
          }
          let y = region.heightM, vi = 0;
          while (y < buildingHeightM - 1e-6 && tileWorldH > 1e-4) {
            const dh = Math.min(tileWorldH, buildingHeightM - y);
            const frac = dh / tileWorldH;
            const mirrored = vi % 2 === 0;
            const vNear = mirrored ? bandTop : bandBot;
            const vFar = mirrored ? bandBot : bandTop;
            const vFarClipped = vNear + (vFar - vNear) * frac;
            const y0 = y, y1 = y + dh;
            const sideShift = {};
            for (const side of [0, 1]) {
              const room = sideMinRoom[side];
              if (room === undefined) continue;
              const shiftRange = Math.max(0, room - 2 * roofInsetUV);
              sideShift[side] = room > 0
                ? Math.min(roofInsetUV + ((hash32(bi, runIdx * 613 + vi * 31 + side) % 1000) / 1000) * shiftRange, room)
                : 0;
            }
            for (const q of hQuads) {
              if (q.side === undefined) continue; // D6/task1: handled by the borrowed-band pass above
              const dir = q.side === 0 ? 1 : -1;
              const delta = dir * (sideShift[q.side] || 0);
              emitInto(buf, q.u0 + delta, vNear, q.u1 + delta, vFarClipped, q.ax, q.az, q.bx, q.bz, y0, y1);
              quadCount++;
            }
            y = y1; vi++;
          }
        }
      } else if (nameAtlas && mb.businesses && mb.businesses.length && span >= SLIVER_MAX) {
        // D5.2: capped to the businesses NOT yet used by an earlier run of
        // this same building, with no wraparound — a building with more
        // runs than businesses (e.g. buildingIndex 150, "Wex Photo Video" x
        // 2 runs x 3 names) used to have every run restart at businesses[0],
        // and even after the cursor carries forward (above), a run whose
        // span alone already exceeds the total business count still wraps
        // back to index 0 via modulo. Once a building's businesses are all
        // used, later runs draw nothing rather than replaying a name.
        const remaining = mb.businesses.length - placeholderUnitCursor;
        const units = remaining > 0 ? Math.min(remaining, Math.max(1, Math.round(span / PLACEHOLDER_UNIT_M))) : 0;
        for (let u = 0; u < units; u++) {
          const biz = mb.businesses[placeholderUnitCursor + u];
          const uv = nameAtlas.uvFor.get(biz.name);
          if (!uv) continue;
          const a = at(u / units), b = at((u + 1) / units);
          const base = pQuadCount * 4;
          pPos.push(a.x, BASE_Y, a.z, b.x, BASE_Y, b.z, b.x, STOREY_M, b.z, a.x, STOREY_M, a.z);
          pUv.push(uv.u0, uv.vBot, uv.u1, uv.vBot, uv.u1, uv.vTop, uv.u0, uv.vTop);
          pIdx.push(base, base + 1, base + 2, base, base + 2, base + 3);
          pQuadCount++;
        }
        placeholderUnitCursor += units;
        quadCount += units;

        // D8/task5a: exactly 5 buildings (940, 962, 73, 150, 30 — verified
        // against the manifest+atlas: businesses but no atlas entry) used to
        // stop here, leaving every storey above the ground-floor name fascia
        // as raw base stone — the other bare-wall class the D7 brief named.
        // Same bay-by-bay chainage-bucket donor borrow as the fully-bare
        // branch just below, but only for the storeys above the fascia this
        // branch already drew.
        const buildingHeightM5a = Math.max(2, mb.levels || 2) * STOREY_M;
        if (buildingHeightM5a > STOREY_M + 1e-6) {
          const page5a = pageForChainage(mb.chainage);
          const donors5a = page5a >= 0 ? (donorsByPage.get(page5a) || []).filter((d) => d.bi !== bi) : [];
          if (donors5a.length) {
            const buf5a = pageBuf[page5a];
            let t = 0, bayIdx = 0, prevDonorIdx = -1, guard = 0;
            while (t < 1 - 1e-6 && guard++ < 64) {
              let donorPick = hash32(bi, runIdx * 5813 + bayIdx) % donors5a.length;
              if (donorPick === prevDonorIdx) donorPick = (donorPick + 1) % donors5a.length;
              const donor = donors5a[donorPick];
              prevDonorIdx = donorPick;
              const bayT = Math.min(1 - t, Math.max(donor.region.widthM / span, 1e-4));
              const a = at(t), b = at(t + bayT);
              const dGroundFrac = Math.min(0.75, Math.max(GROUND_AVOID_FRAC, STOREY_M / donor.region.heightM));
              emitBandStack(buf5a, donor.u0Full, donor.u1Full, donor.vTop, donor.vBot, dGroundFrac, donor.region.heightM, a.x, a.z, b.x, b.z, STOREY_M, buildingHeightM5a, hash32(bi, runIdx * 5813 + bayIdx + 1));
              t += bayT; bayIdx++;
            }
          }
        }
      } else if (!mb.businesses || !mb.businesses.length) {
        // D7/task1a: a genuinely bare frontage building — computeFrontageRuns
        // found a street-facing wall, but the offline pipeline never got a
        // photo OR any business names for it (the manifest builder's own
        // "bare" bucket, ~64 buildings) — this used to fall all the way
        // through to raw base stone, one of the two blank-wall classes named
        // in the D7 brief. Borrow bays across the WHOLE run (there's no real
        // photo to centre, unlike D6's terrace fill) from the atlas page
        // whose CHAINAGE BUCKET covers this building (it has no atlas entry
        // of its own to read a page off), so the borrowed texture is
        // actually resident whenever the player is close enough to see this
        // wall. No ground/upper split and no name-fascia layer — there are
        // no business names to draw, and a donor's safe (non-signage) band
        // is used for the WHOLE height so this can never borrow a legible
        // wrong name (the exact fault class D6/task2 fixed for GROUND_AVOID_FRAC).
        const page = pageForChainage(mb.chainage);
        const donors = page >= 0 ? (donorsByPage.get(page) || []).filter((d) => d.bi !== bi) : [];
        if (donors.length) {
          const buf2 = pageBuf[page];
          const bareHeightM = Math.max(2, mb.levels || 2) * STOREY_M;
          let t = 0, bayIdx = 0, prevDonorIdx = -1, guard = 0;
          while (t < 1 - 1e-6 && guard++ < 64) {
            let donorPick = hash32(bi, runIdx * 3457 + bayIdx) % donors.length;
            if (donorPick === prevDonorIdx) donorPick = (donorPick + 1) % donors.length;
            const donor = donors[donorPick];
            prevDonorIdx = donorPick;
            const bayT = Math.min(1 - t, Math.max(donor.region.widthM / span, 1e-4));
            const a = at(t), b = at(t + bayT);
            const dGroundFrac = Math.min(0.75, Math.max(GROUND_AVOID_FRAC, STOREY_M / donor.region.heightM));
            emitBandStack(buf2, donor.u0Full, donor.u1Full, donor.vTop, donor.vBot, dGroundFrac, donor.region.heightM, a.x, a.z, b.x, b.z, BASE_Y, bareHeightM, hash32(bi, runIdx * 3457 + bayIdx + 1));
            t += bayT; bayIdx++;
          }
        }
        // else: no usable donor page/pool — falls through to raw base stone,
        // same as before this milestone (degrade, not a crash or a gap).
      }
      // else: no region, no business names, no donor page — base building
      // stone shows, as it always does underneath (untouched by this module).
    });
  }

  if (quadCount === 0 && pQuadCount === 0) return { group: null, count: 0, update() {} };

  // --- placeholder mesh (small, always loaded — same draw-call budget as before) ---
  let placeholderMesh = null;
  if (pQuadCount && nameAtlas) {
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.Float32BufferAttribute(pPos, 3));
    pGeo.setAttribute('uv', new THREE.Float32BufferAttribute(pUv, 2));
    pGeo.setIndex(pIdx);
    pGeo.computeBoundingSphere();
    placeholderMesh = new THREE.Mesh(pGeo, new THREE.MeshBasicMaterial({ map: nameAtlas.texture, side: THREE.FrontSide, fog: true }));
    placeholderMesh.name = 'shopfront-placeholders';
    scene.add(placeholderMesh);
  }

  // --- per-page state: geometry built now, texture + mesh created on first
  // approach and torn down on departure so draw calls stay bounded to
  // whichever pages are currently near the player. ---
  const pages = atlas.pages.map((pg, i) => {
    const buf = pageBuf[i];
    if (!buf.quadCount) return null;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(buf.positions, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(buf.uvs, 2));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(buf.colors, 3));
    geo.setIndex(buf.indices);
    geo.computeBoundingSphere();
    let url = assetUrl(assets, pg.file);
    if (url.startsWith('assets/') && pg.etag) url += `?v=${pg.etag}`;
    return { geo, url, chainageMin: pg.chainageMin, chainageMax: pg.chainageMax, loaded: false, mesh: null };
  });

  function loadPage(p) {
    if (p.loaded) return;
    p.loaded = true;
    const texture = new THREE.TextureLoader().load(p.url);
    texture.colorSpace = THREE.SRGBColorSpace;
    // D5: no gutter padding exists between packed atlas regions (D4 defect
    // register), so trilinear/mipmap filtering samples a wide-enough texel
    // footprint at distance to bleed a neighbour's pixels across a region's
    // exact edge — the D5 blind eval caught this as a "blown-out white seam"
    // wherever W1's edge-bay tiles repeatedly touch that exact boundary.
    // Mipmaps off + linear-only filtering keeps every sample within a small,
    // fixed texel footprint around the requested UV, safely inside the
    // existing half-texel inset.
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    texture.anisotropy = 1;
    // D9/task2: vertexColors multiply-tints the ground-band edge fade
    // (emitGroundBandFaded) black-to-white — every other vertex is white
    // (1,1,1), a no-op multiply, so this only darkens the specific fade
    // triangles and leaves everything else exactly as before.
    p.mesh = new THREE.Mesh(p.geo, new THREE.MeshBasicMaterial({ map: texture, vertexColors: true, side: THREE.FrontSide, fog: true }));
    p.mesh.name = 'shopfronts-page';
    scene.add(p.mesh);
  }
  function unloadPage(p) {
    if (!p.loaded) return;
    p.loaded = false;
    scene.remove(p.mesh);
    p.mesh.material.map.dispose();
    p.mesh.material.dispose();
    p.mesh = null;
  }

  function update(camPos) {
    if (!camPos) return;
    const chainage = chainageOfPoint(camPos.x, camPos.z, streetLine);
    for (const p of pages) {
      if (!p) continue;
      const near = chainage >= p.chainageMin - LOAD_RANGE && chainage <= p.chainageMax + LOAD_RANGE;
      if (near) loadPage(p); else unloadPage(p);
    }
  }

  update({ x: streetLine[0][0], z: streetLine[0][1] }); // load whatever's near the spawn point up front

  return { group: null, placeholders: placeholderMesh, count: quadCount, placeholderCount: pQuadCount, update };
}
