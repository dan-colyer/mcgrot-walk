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
const OUTWARD_EPS = 0.12;  // nudge proud of the building's own wall, toward the street
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

  // --- placeholder pool: buildings the manifest has but the atlas doesn't
  // (elevation missing — a generation failure, or not yet run) that DO have
  // real business names. Same canvas-drawn fascia as the old whole-building
  // placeholder, now used only as this narrower fallback. ---
  const placeholderNames = [];
  for (const mb of manifest.buildings) {
    if (atlasByIndex[mb.buildingIndex]) continue;
    for (const biz of mb.businesses || []) placeholderNames.push(biz.name);
  }
  const nameAtlas = placeholderNames.length ? buildNameAtlas(placeholderNames) : null;
  const pPos = [], pUv = [], pIdx = [];
  let pQuadCount = 0;

  // --- per-page geometry buffers (texture loaded lazily; geometry is cheap
  // and built up front so a page can appear the instant its texture lands) ---
  const pageBuf = atlas.pages.map(() => ({ positions: [], uvs: [], indices: [], quadCount: 0 }));

  function emitInto(buf, u0, v0, u1, v1, ax, az, bx, bz, y0, y1) {
    const base = buf.quadCount * 4;
    buf.positions.push(ax, y0, az, bx, y0, bz, bx, y1, bz, ax, y1, az);
    buf.uvs.push(u0, v0, u1, v0, u1, v1, u0, v1);
    buf.indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
    buf.quadCount++;
  }

  function hash32(a, b) {
    let h = (a * 73856093) ^ (b * 19349663);
    h = Math.imul(h ^ (h >>> 13), 0x85ebca6b);
    h ^= h >>> 16;
    return h >>> 0;
  }

  let quadCount = 0;

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
    const narrowGroups = new Map(); // region -> { totalSpan, count, cursor }
    if (atlasEntry) {
      for (const run of runs) {
        const span = Math.hypot(run.bx - run.ax, run.bz - run.az);
        if (span < MIN_RUN) continue;
        const region = atlasEntry.regions.find((r) => (run.isChamfer ? r.kind === 'corner' : r.kind !== 'corner')) || atlasEntry.regions[0];
        if (!region) continue;
        if (span / region.widthM >= 1 / STRETCH_MAX) continue; // not narrow
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
        const hQuads = []; // {u0,u1,ax,az,bx,bz} — every horizontal quad this run emits at BASE_Y..region.heightM

        if (ratio > STRETCH_MAX) {
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
          const vSpanFull = vTop - vBot;
          const edgeVBot = vBot + GROUND_AVOID_FRAC * vSpanFull;

          const uSpan = u1Full - u0Full;
          const stripUV = EDGE_STRIP_FRAC * uSpan;
          const stripWorldM = EDGE_STRIP_FRAC * region.widthM;
          const tileT = stripWorldM / span;

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
            hQuads.push({ u0: uFarClipped, u1: uNear, ax: a.x, az: a.z, bx: b.x, bz: b.z, v0: edgeVBot, v1: vTop });
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
            hQuads.push({ u0: uNear, u1: uFarClipped, ax: a.x, az: a.z, bx: b.x, bz: b.z, v0: edgeVBot, v1: vTop });
            t = tNext; li++;
          }
        } else if (ratio < 1 / STRETCH_MAX) {
          const g = narrowGroups.get(region);
          let u0, u1;
          if (g && g.count > 1 && g.totalSpan > 0) {
            // D5/W1 (residual #5): several narrow facets sharing one region —
            // non-overlapping proportional slices across the whole image.
            const uSpanFull = u1Full - u0Full;
            const startU = u0Full + uSpanFull * (g.cursor / g.totalSpan);
            g.cursor += span;
            const endU = u0Full + uSpanFull * (g.cursor / g.totalSpan);
            u0 = startU; u1 = endU;
          } else {
            // Only one narrow run in this group: a centre slice sized to the
            // run, panned a little so it doesn't always show the dead centre.
            const frac = Math.max(0.08, ratio);
            const half = ((u1Full - u0Full) * frac) / 2;
            const panT = ((hash32(bi, runIdx) % 1000) / 1000 - 0.5) * 0.3;
            const center = (u0Full + half) + 0.5 * (u1Full - u0Full) + panT * ((u1Full - half) - (u0Full + half));
            u0 = Math.max(u0Full, center - half);
            u1 = Math.min(u1Full, center + half);
          }
          const a = at(0), b = at(1);
          hQuads.push({ u0, u1, ax: a.x, az: a.z, bx: b.x, bz: b.z });
        } else {
          const a = at(0), b = at(1);
          hQuads.push({ u0: u0Full, u1: u1Full, ax: a.x, az: a.z, bx: b.x, bz: b.z });
        }

        for (const q of hQuads) {
          emitInto(buf, q.u0, q.v0 ?? vBot, q.u1, q.v1 ?? vTop, q.ax, q.az, q.bx, q.bz, BASE_Y, region.heightM);
          quadCount++;
        }

        // D5/W1: buildings taller than their authored elevation (e.g. a
        // 2-storey photo on a 4-storey OSM footprint) used to leave a bare
        // procedural-stone slab above the image. Stack extra quads sampling a
        // reused upper-wall band (avoiding the top TOP_AVOID_FRAC where a
        // baked roofline/sky edge may sit), mirrored ping-pong vertically, up
        // to the building's real height — same hQuads footprint as the base.
        const buildingHeightM = Math.max(2, mb.levels || 2) * STOREY_M;
        if (buildingHeightM - region.heightM > VERT_EXT_MIN) {
          const vSpan = vTop - vBot;
          const bandTop = vTop - TOP_AVOID_FRAC * vSpan;
          const bandBot = Math.max(vBot, bandTop - V_BAND_FRAC * vSpan);
          const tileWorldH = V_BAND_FRAC * region.heightM;
          let y = region.heightM, vi = 0;
          while (y < buildingHeightM - 1e-6 && tileWorldH > 1e-4) {
            const dh = Math.min(tileWorldH, buildingHeightM - y);
            const frac = dh / tileWorldH;
            const mirrored = vi % 2 === 0;
            const vNear = mirrored ? bandTop : bandBot;
            const vFar = mirrored ? bandBot : bandTop;
            const vFarClipped = vNear + (vFar - vNear) * frac;
            const y0 = y, y1 = y + dh;
            for (const q of hQuads) {
              emitInto(buf, q.u0, vNear, q.u1, vFarClipped, q.ax, q.az, q.bx, q.bz, y0, y1);
              quadCount++;
            }
            y = y1; vi++;
          }
        }
      } else if (nameAtlas && mb.businesses && mb.businesses.length && span >= SLIVER_MAX) {
        const units = Math.min(mb.businesses.length, Math.max(1, Math.round(span / 6.4)));
        for (let u = 0; u < units; u++) {
          const biz = mb.businesses[u % mb.businesses.length];
          const uv = nameAtlas.uvFor.get(biz.name);
          if (!uv) continue;
          const a = at(u / units), b = at((u + 1) / units);
          const base = pQuadCount * 4;
          pPos.push(a.x, BASE_Y, a.z, b.x, BASE_Y, b.z, b.x, 3.2, b.z, a.x, 3.2, a.z);
          pUv.push(uv.u0, uv.vBot, uv.u1, uv.vBot, uv.u1, uv.vTop, uv.u0, uv.vTop);
          pIdx.push(base, base + 1, base + 2, base, base + 2, base + 3);
          pQuadCount++;
        }
        quadCount += units;
      }
      // else: no region, no business names — base building stone shows, as
      // it always does underneath (untouched by this module).
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
    p.mesh = new THREE.Mesh(p.geo, new THREE.MeshBasicMaterial({ map: texture, side: THREE.FrontSide, fog: true }));
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
