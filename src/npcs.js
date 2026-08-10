// NPCs for McGrot Walk — grotesque low-poly paper-doll comic vendors.
//
// buildNpcs(assets, world, scene, camera) constructs one character per catalog
// entry (falling back to the 3-comic manifest for the single-file artifact),
// lines them along the whole street, and returns a manager with update(dt, t).
//
// THE DOLL IS NO LONGER BUILT BY DEFAULT (E3g). buildNpc() constructs a
// vendor's PROPS — comic, nameplate — and the box figure itself only when
// something asks for it via npc.buildDoll(). src/characters.js is the only
// caller: it builds the doll when the generated crowd is switched off, and
// when an archetype's glb fails to load (the single-file artifact, where the
// glbs are absent). Shipping the doll hidden underneath the meshes cost 744
// meshes, 999 materials and 16,368 never-drawn triangles for nothing; see
// docs/VALIDATION.md § E3g for the measured figures.
//
// Scaled for a crowded street (100+):
//  - each character's coat/boot boxes are merged to 2 draws (was ~8 meshes);
//  - face textures are SHARED — each unique face JPEG is loaded once and reused
//    across every NPC assigned that face (~36 textures for 100+ vendors);
//  - comic textures load lazily as the player approaches (COMIC_LOAD_RANGE);
//  - no per-NPC spotlight (100 dynamic lights is untenable) — the brighter
//    hemisphere/ambient carries the Lambert bodies, and faces/comics are unlit.

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { assetUrl } from './assets.js';
import { LIT_ALBEDO_GAIN } from './lighting-constants.js';
import { ANCHORS_ENABLED, ANCHOR_SET, anchorsById } from './anchors.js';
import { GULLET_CHAINAGE } from './gullet.js';
import { flag } from './flags.js';

const STREET_OFFSET = 6;      // metres perpendicular from the centreline
const START_DIST = 40;        // first vendor this far down the Walk
const END_MARGIN = 60;        // leave this much clear at the south end
// A chainage band the even spacing steps OVER, so McGrot's pitch never has a
// vendor's prompt overlapping its own. It is UNCONDITIONAL — not behind the
// gullet flag — for two reasons. The `gullet` region requires geomHash to
// MATCH across the flag's two arms, which a flag-conditional layout would
// break; and the reservation has to survive the flag being off, since the
// stall's chainage is fixed canon either way.
//
// It exists because the clearance stopped being free. At 124 vendors the
// spacing was 12.2m and the nearest vendor happened to fall 14.4m from the
// stall, so E10a.1's "> RANGE + 2" passed on luck. Landing 156 took the
// spacing to 9.7m and put one vendor 4.89m away, inside interact.js's 8m
// RANGE. The census only grows — 261 comics are still untranscribed, and at
// 418 the spacing is 3.6m — so a reserved hole is the only form of this
// guarantee that keeps holding.
//
// 12m half-width, not 10: the stall sits at offset 7.6 and a vendor at
// STREET_OFFSET 6 on the same side is 1.6m across from it, so the band edge
// is hypot(12, 1.6) = 12.1m out — clear of RANGE + 2 with room for the
// spacing to keep shrinking.
const GULLET_CLEARANCE = 12;
// Every anchor gets one too, and for a defect the same spacing shrink
// exposed. An anchor is moved to its landmark's chainage with no regard for
// the evenly-spaced vendor already standing there. At 124 the nearest such
// pair was 9.0m apart and nobody noticed; at 156 the GAIA anchor landed
// 1.41m from vendor 83 — bodies side by side and the two nameplates
// overlapping into one unreadable smear. No gate saw it, because every gate
// counted vendors and none measured the gap between two of them.
//
// 6m rather than 5: measured off the rendered plate, not guessed — see
// docs/VALIDATION.md § "Vendors no longer stand on each other".
const ANCHOR_CLEARANCE = 6;

// The reserved chainage bands, merged. Sorted and coalesced because the Cupp
// anchor (725) and the stall (740) overlap at these widths, and two bands
// counted twice would take the reserved total — and so the spacing — wrong.
//
// UNCONDITIONAL, including the anchor bands, even though the anchors flag may
// be off. The flag's contract is that it moves the TWELVE anchored vendors and
// nothing else; both arms get the same bands, so the on-vs-off comparison
// still shows exactly twelve vendors moving. Making the bands conditional
// would instead have the flag re-space all 156.
function reservedBands() {
  const raw = [[GULLET_CHAINAGE - GULLET_CLEARANCE, GULLET_CHAINAGE + GULLET_CLEARANCE]];
  for (const a of ANCHOR_SET) raw.push([a.chainage - ANCHOR_CLEARANCE, a.chainage + ANCHOR_CLEARANCE]);
  raw.sort((p, q) => p[0] - q[0]);
  const merged = [];
  for (const [lo, hi] of raw) {
    const last = merged[merged.length - 1];
    if (last && lo <= last[1]) last[1] = Math.max(last[1], hi);
    else merged.push([lo, hi]);
  }
  return merged;
}
// E5b.2: no NPC spotlights exist (the render-path/draw-call budget forbids
// adding twelve) — an anchor reads brighter through its own unlit
// materials instead. Applied to the comic and face MeshLambertMaterials,
// which are already unique per vendor (never shared like clothMat's cache),
// so this cannot leak onto a non-anchor vendor sharing a coat colour.
const ANCHOR_GLOW = 1.35;
// At the 0.0095 density this was tuned against, fog only obscures ~35% of
// contrast at 70m and ~50% at 90m — nowhere near opaque — so a comic held at
// head height is legible well beyond the old 34m range. 85m loads it while
// still fogged enough that the swap from paper placeholder to real art isn't
// obvious. E2c.3a made density a palette axis (atmosphere.js) and clear
// daylight now runs at 0.0022, which leaves 85m only ~3% fogged rather than
// ~48% — so fog is no longer what hides the swap. Distance still is: a
// 0.44×0.31m comic quad at 85m covers about 3×2 pixels at this camera's 70°
// FOV, well under anything a player can resolve. Left at 85m deliberately.
const COMIC_LOAD_RANGE = 85;

// Drab post-apocalyptic coat palette, cycled across vendors for variety.
const COAT_COLORS = [
  0x4a4636, 0x413f3a, 0x54503f, 0x3b3d34, 0x4f473a, 0x39362c, 0x484a42, 0x5a5140,
];

// Scarf/neckerchief accents — the one colour note each vendor gets.
const SCARF_COLORS = [0x6b3328, 0x705c23, 0x2e4640, 0x59422e, 0x3d3453, 0x664a1e];

// E3c — the speaking tell, moved off the head and onto the whole body.
//
// WHY IT MOVED: a Trellis mesh is a single primitive with no separable head, so
// a head-only animation is a tell the meshed vendor physically cannot perform.
// Leaving it on the doll would mean the doll and the mesh act differently.
// Both figures now share one transform, so both perform the same thing. The
// original argument was about E3d's LOD swap popping mid-sentence; E3d.0
// rejected the LOD, and the reason survives it — the mesh still has to perform
// the tell, because the mesh is what the player sees once E3e flips the flag.
//
// WHY TWO RATES: the old tell was a 5-degree head turn at 4Hz. Transplanted
// whole onto a 1.9m body that is a 6.6cm head excursion at 4Hz, which reads as
// a shiver rather than a person. Split instead — a slow rock carries the weight,
// a small fast yaw keeps the 4Hz "reading aloud" cadence the old tell had.
//
// WHY 0.024 AND NOT THE PLAN'S 2 DEGREES: "±2°" was written before anything
// was measured, and a still cannot tell a mutter from a shiver. What can is the
// tell this one REPLACES — reproduced on the live scene by the probe and
// measured at the same physical point, the centre of each vendor's face. At 2°
// the body tell moved that point 1.45× faster than the head tell did across all
// 124 vendors (range 1.08–1.81). 0.024 is the value that puts the median at
// parity: the same motion the street already had, carried by the whole figure
// instead of the head. See docs/VALIDATION.md § E3c.
const SPEAK_ROCK = 0.024;      // ~1.4 deg of roll, the visible one head-on
const SPEAK_ROCK_W = 10;       // ~1.6Hz — a body's rate, not a head's
const SPEAK_NATTER = 0.012;    // ~0.7 deg of yaw
const SPEAK_NATTER_W = 25;     // ~4Hz, inherited from the head bobble
const SPEAK_FADE = 8;          // e-folds per second in and out of the tell

const texLoader = new THREE.TextureLoader();
function loadSRGB(url, onLoad) {
  return texLoader.load(url, (tex) => {
    tex.colorSpace = THREE.SRGBColorSpace;
    if (onLoad) onLoad(tex);
  });
}

// ---------------------------------------------------------------------------
// Procedural clothing textures — deterministic canvases (the road/sky rule),
// baked ONCE per coat colour and shared across every vendor wearing it.
// A flat Lambert colour read as moulded plastic; woven grime reads as a coat.
// ---------------------------------------------------------------------------

function hash2(x, y, seed) {
  let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(seed, 2246822519);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

function bakeCloth(colorHex, seed, knit) {
  const S = 64;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = S;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(S, S);
  const px = img.data;
  // Raw sRGB bytes, NOT THREE.Color components: Color(hex) converts to LINEAR,
  // and the canvas is tagged SRGBColorSpace so the renderer converts AGAIN —
  // double-darkened coats render as silhouettes.
  const base = { r: ((colorHex >> 16) & 255) / 255, g: ((colorHex >> 8) & 255) / 255, b: (colorHex & 255) / 255 };
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      // Weave: vertical thread striping; knitted (hats) gets horizontal ribs.
      // Centred near 1.05 — the multipliers stack with Lambert murk lighting,
      // and a 0.75 average turned every coat into a silhouette.
      const weave = knit
        ? 1.0 + 0.14 * Math.sin(y * 1.9) + (hash2(x, y, seed) - 0.5) * 0.1
        : 1.05 + 0.1 * Math.sin(x * 2.3) + (hash2(x, y, seed) - 0.5) * 0.16;
      // Grime: big soft blotches + a darker hem at the bottom of every panel.
      const blotch = 1 - 0.18 * hash2(x >> 3, y >> 3, seed + 7) * hash2(x >> 4, y >> 4, seed + 13);
      const hem = 1 - 0.2 * Math.pow(y / S, 3);
      const k = weave * blotch * hem;
      const i = (y * S + x) * 4;
      px[i] = Math.min(255, base.r * 255 * k);
      px[i + 1] = Math.min(255, base.g * 255 * k);
      px[i + 2] = Math.min(255, base.b * 255 * k);
      px[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const clothCache = new Map();
export function clothMat(colorHex, knit) {
  const key = colorHex * 2 + (knit ? 1 : 0);
  if (!clothCache.has(key)) {
    clothCache.set(key, new THREE.MeshLambertMaterial({
      map: bakeCloth(colorHex, (colorHex & 0xffff) ^ (knit ? 0x9e37 : 0), knit),
      flatShading: true,
    }));
  }
  return clothCache.get(key);
}

// ---------------------------------------------------------------------------
// Comic placeholder — grubby newsprint, not a flat colour card. Shown on both
// vendor-held and litter comic quads until the real page loads. Same canvas-
// bake discipline as bakeCloth: deterministic, raw sRGB bytes (Color() is
// linear and this canvas is SRGBColorSpace-tagged, so Color() would double-
// convert), and toned dark to survive the ACES exposure-1.46 lift.
// ---------------------------------------------------------------------------

function bakePaper() {
  const S = 64;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = S;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(S, S);
  const px = img.data;
  const base = { r: 0.40, g: 0.38, b: 0.32 };
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const grain = 1 + (hash2(x, y, 0x9a1) - 0.5) * 0.12;
      // Blurred, smudged text rows: a handful of horizontal bands, each
      // dimmed unevenly along its length so it reads as illegible print
      // rather than a barcode.
      const row = Math.floor(y / 5);
      const rowPick = hash2(row, 0, 0x2c3);
      const isTextRow = rowPick > 0.45 && rowPick < 0.85;
      const textDim = isTextRow ? 1 - 0.28 * hash2(x >> 1, row, 0x77b) : 1;
      // Grimy edges, darker toward the border.
      const dx = Math.min(x, S - 1 - x) / (S * 0.5);
      const dy = Math.min(y, S - 1 - y) / (S * 0.5);
      const edge = 1 - 0.22 * (1 - Math.min(dx, dy));
      const k = grain * textDim * edge;
      const i = (y * S + x) * 4;
      px[i] = Math.min(255, base.r * 255 * k);
      px[i + 1] = Math.min(255, base.g * 255 * k);
      px[i + 2] = Math.min(255, base.b * 255 * k);
      px[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

let paperTex = null;
export function paperPlaceholder() {
  if (!paperTex) paperTex = bakePaper();
  return paperTex;
}

// Pure placement math — no THREE, no scene, no DOM — so it can run
// identically inside buildNpcs and from the smoke harness (window.__mcgrotDebug
// .anchorLayout) to compare the anchors flag's on/off output without a second
// scene build. Chainage, side and coat index are ALWAYS index-derived
// (`i * spacing`, `i % 2`, `i % COAT_COLORS.length`); only an anchor's `dist`
// (and, if it ever needs one, its offset) is overridden when `anchorsEnabled`
// is true — see the E5b.2 brief's warning about the sequence being load-bearing.
export function computeVendorLayout(list, streetLine, anchorsEnabled) {
  const anchorMap = anchorsById();
  const streetLen = streetLength(streetLine);
  const usable = Math.max(1, streetLen - START_DIST - END_MARGIN);
  // Spacing is computed over the street MINUS the reserved bands, and a
  // position at or past a band's near edge is pushed that band's full width
  // south. Ordering and even spacing survive; the holes are the only
  // artefact, and each one has either the stall or an anchor standing in it.
  // Snapping only the offending vendors to a band edge instead would have
  // moved far fewer of them and parked pairs 2.4m apart.
  const bands = reservedBands();
  const reserved = bands.reduce((s, [lo, hi]) => s + (hi - lo), 0);
  const spread = Math.max(1, usable - reserved);
  const spacing = list.length > 1 ? spread / (list.length - 1) : 0;
  // Bands are sorted, and `d` only ever grows, so each comparison is against
  // the position as it stands after the earlier bands have pushed it.
  const stepOver = (even) => {
    let d = even;
    for (const [lo, hi] of bands) {
      if (d < lo) break;
      d += hi - lo;
    }
    return d;
  };

  const out = [];
  list.forEach((comic, i) => {
    const baseDist = stepOver(START_DIST + i * spacing);
    const anchor = anchorsEnabled ? anchorMap.get(comic.id) : null;
    const dist = anchor ? anchor.chainage : baseDist;
    const side = i % 2 === 0 ? 1 : -1;
    const offset = (anchor && anchor.offset != null) ? anchor.offset : STREET_OFFSET;
    const sample = sampleStreet(streetLine, dist);
    if (!sample) return;

    const [tx, tz] = sample.tangent;
    const perpX = -tz;
    const perpZ = tx;
    const px = sample.point[0] + perpX * offset * side;
    const pz = sample.point[1] + perpZ * offset * side;

    // Face back toward the centreline (character built facing +Z; θ maps +Z to
    // (sinθ, cosθ), so θ = atan2(dir.x, dir.z)).
    const dirX = sample.point[0] - px;
    const dirZ = sample.point[1] - pz;
    const baseY = Math.atan2(dirX, dirZ);

    out.push({
      id: comic.id,
      index: i,
      dist,
      baseDist,
      side,
      coatIndex: i % COAT_COLORS.length,
      px, pz, baseY,
      isAnchor: !!anchor,
      landmark: anchor ? anchor.landmark : null,
    });
  });
  return out;
}

export function buildNpcs(assets, world, scene, camera) {
  // Prefer the full catalog (site/dev); fall back to the 3-comic manifest
  // (single-file artifact). Only entries with an npc identity become vendors.
  const list = (assets.catalog && Array.isArray(assets.catalog.comics))
    ? assets.catalog.comics.filter((c) => c.npc)
    : (assets.manifest.comics || []);
  const streetLine = world.streetLine || [];
  const npcs = [];

  // Unique face JPEG -> its texture, loaded once and shared.
  //
  // Loaded on FIRST REGISTRATION rather than in a batch pass after the layout
  // loop (E3g). A doll can now be built late — the artifact builds its dolls
  // only once an archetype's glb has failed to load, which is several ticks
  // after that pass would have run — so a batch pass would leave every late
  // doll faceless. A material registering a path already loaded gets the
  // texture immediately.
  const faceTex = new Map();
  const facePending = new Map();
  const applyFace = (mat, tex) => {
    mat.map = tex;
    mat.color.setScalar(mat.userData.anchorGlow || LIT_ALBEDO_GAIN);
    mat.needsUpdate = true;
  };
  const registerFace = (path, mat) => {
    if (!path) return;
    if (faceTex.has(path)) { applyFace(mat, faceTex.get(path)); return; }
    if (facePending.has(path)) { facePending.get(path).push(mat); return; }
    facePending.set(path, [mat]);
    loadSRGB(assetUrl(assets, path), (tex) => {
      faceTex.set(path, tex);
      for (const m of facePending.get(path)) applyFace(m, tex);
      facePending.set(path, []);
    });
  };

  // __mcgrotForceAnchors, localhost only — see src/flags.js.
  const anchorsEnabled = flag('Anchors', ANCHORS_ENABLED);

  const layout = computeVendorLayout(list, streetLine, anchorsEnabled);

  layout.forEach((placement) => {
    const comic = list[placement.index];
    const npc = buildNpc(assets, comic, COAT_COLORS[placement.coatIndex], registerFace, placement.isAnchor);
    const py = world.groundHeight ? world.groundHeight(placement.px, placement.pz) : 0;
    npc.group.position.set(placement.px, py, placement.pz);
    // E6a.2: the vendor is solid. Radius is HALF THE SILHOUETTE'S SHOULDER
    // WIDTH — vendorDims().bodyW is the width characters.js scales the
    // archetype mesh to match, so this is the archetype's scaled width
    // without waiting on a glb promise or reading the scene graph. A vendor
    // never moves, so it is a gridded circle, not a mover.
    if (world.collision) {
      world.collision.addCircle(placement.px, placement.pz, npc.collisionRadius, 'vendor');
    }
    npc.group.rotation.y = placement.baseY;
    npc.baseY = placement.baseY;
    npc.phase = placement.index * 2.1;
    npc.isAnchor = placement.isAnchor;
    npc.anchorLandmark = placement.landmark;

    scene.add(npc.group);
    npcs.push(npc);
  });

  const _p = new THREE.Vector3();
  function update(dt, time) {
    const cam = camera ? camera.position : null;
    for (let i = 0; i < npcs.length; i++) {
      const npc = npcs[i];
      npc.tick(time, dt);
      if (cam && !npc.comicLoaded) {
        const g = npc.group.position;
        if (Math.hypot(cam.x - g.x, cam.z - g.z) < COMIC_LOAD_RANGE) npc.loadComic();
      }
    }
  }

  return { npcs, update, list, anchorsEnabled };
}

// ---------------------------------------------------------------------------
// Single character
// ---------------------------------------------------------------------------

export const DEFAULT_BUILD = { height: 1.9, girth: 1.0, headScale: 1.5 };

// Every dimension the paper doll derives from its build triple, in ONE place.
// Extracted for E3b: a generated character mesh has to stand at exactly the
// height of the doll it replaces (otherwise the LOD swap pops, and the crowd
// changes height the moment the flag flips), so src/characters.js needs these
// same numbers. Two copies of `0.78 * height` would drift the first time
// either is touched.
export function vendorDims(build) {
  const H = build.height;
  const G = build.girth;
  const S = build.headScale;
  const bootH = 0.12;
  const legH = H * 0.30;
  const bodyW = 0.52 * G;
  const bodyD = 0.34 * G;
  const bodyH = H * 0.48;
  const headSize = 0.34 * S;
  const legTopY = bootH + legH;
  const bodyTopY = legTopY + bodyH;
  const headCenterY = bodyTopY + headSize * 0.5 + 0.02;
  return {
    bootH, legH, bodyW, bodyD, bodyH, headSize,
    legTopY, bodyTopY, headCenterY,
    headTopY: headCenterY + headSize * 0.5,
    legX: bodyW * 0.24,
  };
}

function buildNpc(assets, comic, coatColor, registerFace, isAnchor) {
  const glow = isAnchor ? ANCHOR_GLOW : 1;
  const build = comic.npc.build || DEFAULT_BUILD;

  const group = new THREE.Group();

  const {
    bootH, legH, bodyW, bodyD, bodyH, headSize,
    legTopY, bodyTopY, headCenterY, headTopY, legX,
  } = vendorDims(build);

  // The vendor's ONE colour note, picked deterministically from its name. This
  // is a value, not a mesh: the scarf that used to carry it is doll geometry
  // and no longer ships, but the note itself is the vendor's identity and is
  // what src/characters.js tints its mesh with. The Color conversion matches
  // what MeshLambertMaterial({color: hex}) does exactly, so the tint a meshed
  // vendor receives is unchanged by the doll going away.
  let nameHash = 0;
  for (const ch of comic.npc.name || '') nameHash = (nameHash * 31 + ch.charCodeAt(0)) | 0;
  const noteHex = SCARF_COLORS[Math.abs(nameHash) % SCARF_COLORS.length];
  const noteColor = new THREE.Color(noteHex);

  // Comic plane — unlit, grubby-newsprint placeholder until its texture loads.
  const comicH = bodyH * 0.55;
  const comicGain = LIT_ALBEDO_GAIN * glow;
  const comicMat = new THREE.MeshLambertMaterial({ map: paperPlaceholder(), color: new THREE.Color(comicGain, comicGain, comicGain), side: THREE.DoubleSide });
  const comicMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), comicMat);
  comicMesh.position.set(0, legTopY + bodyH * 0.55, bodyD * 0.5 + 0.17);
  comicMesh.scale.set(comicH * 0.7, comicH, 1);
  group.add(comicMesh);

  const plate = makeNamePlate(comic.npc.name, comic.npc.blurb);
  plate.position.set(0, headTopY + 0.42, 0);
  group.add(plate);

  const npc = {
    group,
    comicMesh,
    comic,
    build,
    noteColor,
    // E6a.2: half the silhouette's shoulder width — the plan radius the
    // player is stopped at. Read by the prompt-radius ordering gate, which
    // must be able to compare it against interact.js's RANGE without
    // re-deriving it from the same expression the scene used.
    collisionRadius: bodyW / 2,
    // The box figure, built on request and not before (E3g). Empty on the
    // shipped path: coat, boots, head, scarf and the two gripping hands are
    // 6 meshes and 8 materials per vendor that the generated mesh replaces,
    // and standing them in the scene invisible cost 744 meshes and 16,368
    // triangles the renderer culled every frame forever.
    //
    // `head` and `scarf` are null until buildDoll() runs. The gates that read
    // them (E3b's height check, E3c's note and head-tell checks) boot the
    // OFF arm, where the doll is what stands in the street — see
    // docs/VALIDATION.md § E3g for why those comparisons moved across boots
    // rather than being relaxed.
    head: null,
    scarf: null,
    dollBody: [],
    hasDoll: false,
    name: comic.npc.name,
    blurb: comic.npc.blurb,
    voice: null,       // PositionalAudio, attached lazily by proximity-audio.js
    baseY: 0,
    phase: 0,
    speaking: false,
    comicLoaded: false,
    loadComic() {
      if (npc.comicLoaded) return;
      npc.comicLoaded = true; // set first so we never double-load
      loadSRGB(assetUrl(assets, comic.image), (tex) => {
        comicMat.map = tex;
        comicMat.color.setScalar(comicGain);
        comicMat.needsUpdate = true;
        const img = tex.image;
        if (img && img.width && img.height) {
          comicMesh.scale.set(comicH * (img.width / img.height), comicH, 1);
        }
      });
    },
    // E3g — construct the paper doll into this vendor's group. Idempotent, and
    // callable at any time: src/characters.js calls it at build time when the
    // generated crowd is off, and LATE (from the glb loader's catch) when an
    // archetype fails to fetch, which is what keeps the single-file artifact
    // populated while its character glbs 404.
    buildDoll() {
      if (npc.hasDoll) return npc;
      npc.hasDoll = true;

      const coatMat = clothMat(coatColor, false);
      const bootMat = new THREE.MeshLambertMaterial({ color: 0x15140f, flatShading: true });

      // Merge the coat boxes (legs + body + arms) into one mesh, boots into another.
      const coatGeos = [];
      const bootGeos = [];

      for (const sx of [-1, 1]) {
        const g = new THREE.BoxGeometry(bodyW * 0.4, bootH, bodyD * 1.5);
        g.translate(sx * legX, bootH * 0.5, bodyD * 0.2);
        bootGeos.push(g);
      }
      for (const sx of [-1, 1]) {
        const g = new THREE.BoxGeometry(bodyW * 0.36, legH, bodyD * 0.75);
        g.translate(sx * legX, bootH + legH * 0.5, 0);
        coatGeos.push(g);
      }
      {
        const g = new THREE.BoxGeometry(bodyW, bodyH, bodyD);
        g.translate(0, legTopY + bodyH * 0.5, 0);
        coatGeos.push(g);
      }
      const shoulderY = bodyTopY - bodyH * 0.14;
      const armLen = bodyH * 0.62;
      for (const sx of [-1, 1]) {
        const g = new THREE.BoxGeometry(0.13, armLen, 0.13);
        g.rotateX(-1.15);          // swing forward to cradle the comic
        g.rotateZ(sx * 0.25);      // draw hands together in front
        g.translate(sx * (bodyW * 0.5 + 0.02), shoulderY - armLen * 0.28, bodyD * 0.5 + 0.06);
        coatGeos.push(g);
      }

      const coatMesh = new THREE.Mesh(mergeGeometries(coatGeos), coatMat);
      const bootMesh = new THREE.Mesh(mergeGeometries(bootGeos), bootMat);
      group.add(coatMesh, bootMesh);

      // Oversized head — face JPEG on +Z (front, unlit); the other 5 faces wear
      // a knitted hood (darker than the coat) instead of bare coat colour, so
      // the head reads as a hooded person rather than a coat-coloured block.
      const hoodMat = clothMat(new THREE.Color(coatColor).multiplyScalar(0.62).getHex(), true);
      const faceMat = new THREE.MeshLambertMaterial({ color: new THREE.Color(0x8a8472).multiplyScalar(LIT_ALBEDO_GAIN * glow) });
      // Read by buildNpcs' shared-face loader, which resets .color once the
      // JPEG arrives and doesn't otherwise know which vendors are anchors.
      faceMat.userData.anchorGlow = LIT_ALBEDO_GAIN * glow;
      registerFace(comic.npc.face, faceMat);
      // BoxGeometry material order: +X,-X,+Y,-Y,+Z,-Z — index 4 is the front.
      const headMats = [hoodMat, hoodMat, hoodMat, hoodMat, faceMat, hoodMat];
      const head = new THREE.Mesh(new THREE.BoxGeometry(headSize, headSize, headSize * 0.85), headMats);
      head.position.set(0, headCenterY, 0);
      group.add(head);

      // Scarf — a thin box at the collar, wearing the note computed above.
      const scarf = new THREE.Mesh(
        new THREE.BoxGeometry(headSize * 0.95, 0.09, headSize * 0.85),
        new THREE.MeshLambertMaterial({ color: noteHex, flatShading: true })
      );
      scarf.position.set(0, bodyTopY + 0.02, 0);
      group.add(scarf);

      // Hands gripping the comic's bottom corners — without them it floats.
      const handMat = new THREE.MeshLambertMaterial({ color: 0x84745e, flatShading: true });
      const hands = [];
      for (const sx of [-1, 1]) {
        const hand = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.07, 0.06), handMat);
        hand.position.set(sx * comicH * 0.28, legTopY + bodyH * 0.55 - comicH * 0.48, bodyD * 0.5 + 0.18);
        group.add(hand);
        hands.push(hand);
      }

      npc.head = head;
      npc.scarf = scarf;
      npc.dollBody = [coatMesh, bootMesh, head, ...hands];
      return npc;
    },
    setSpeaking(v) {
      npc.speaking = !!v;
      // No head reset any more: the head does not move. See tick().
    },
    // E3c: the speaking tell is on the BODY, and `leanAmp` is what fades it in
    // and out so a vendor does not snap 2 degrees upright the instant its audio
    // stops. dt-driven rather than a fixed per-frame constant, so the fade is
    // the same wall-clock length at 60Hz and at 120Hz.
    leanAmp: 0,
    tick(time, dt) {
      npc.leanAmp += ((npc.speaking ? 1 : 0) - npc.leanAmp)
        * Math.min(1, (dt || 0) * SPEAK_FADE);
      const a = npc.leanAmp;
      // Roll and yaw ONLY, never pitch. three's default 'XYZ' euler composes as
      // Rx·Ry·Rz, so Z is applied innermost — in the vendor's own frame — while
      // X would be applied AFTER the street-facing yaw, i.e. about the world
      // axis. Leith Walk curves, so a pitch term would tip half the crowd
      // sideways. Yaw needs no such care: it adds to baseY on the same axis.
      group.rotation.z = Math.sin(time * 0.6 + npc.phase) * 0.01
        + (a ? Math.sin(time * SPEAK_ROCK_W + npc.phase) * SPEAK_ROCK * a : 0);
      group.rotation.y = npc.baseY + Math.sin(time * 0.4 + npc.phase) * 0.008
        + (a ? Math.sin(time * SPEAK_NATTER_W + npc.phase) * SPEAK_NATTER * a : 0);
    },
  };
  return npc;
}

// ---------------------------------------------------------------------------
// Name plate (canvas-texture sprite)
// ---------------------------------------------------------------------------

function makeNamePlate(name, blurb) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 160;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(20, 22, 16, 0.82)';
  roundRect(ctx, 6, 6, canvas.width - 12, canvas.height - 12, 14);
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'rgba(120, 116, 92, 0.6)';
  ctx.stroke();

  ctx.textAlign = 'center';
  ctx.fillStyle = '#d8d4c0';
  ctx.font = 'bold 44px "Courier New", monospace';
  ctx.fillText(name, canvas.width / 2, 68, canvas.width - 40);

  ctx.fillStyle = '#a9a48c';
  ctx.font = 'italic 30px "Courier New", monospace';
  ctx.fillText(blurb, canvas.width / 2, 116, canvas.width - 36);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: true });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(2.4, 0.75, 1);
  return sprite;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// ---------------------------------------------------------------------------
// Street sampling by cumulative walk distance
// ---------------------------------------------------------------------------

function streetLength(streetLine) {
  let acc = 0;
  for (let i = 0; i < streetLine.length - 1; i++) {
    acc += Math.hypot(streetLine[i + 1][0] - streetLine[i][0], streetLine[i + 1][1] - streetLine[i][1]);
  }
  return acc;
}

function sampleStreet(streetLine, targetDist) {
  if (!streetLine || streetLine.length < 2) return null;
  let acc = 0;
  for (let i = 0; i < streetLine.length - 1; i++) {
    const [ax, az] = streetLine[i];
    const [bx, bz] = streetLine[i + 1];
    const dx = bx - ax;
    const dz = bz - az;
    const segLen = Math.hypot(dx, dz);
    if (acc + segLen >= targetDist) {
      const t = segLen > 0 ? (targetDist - acc) / segLen : 0;
      const len = segLen || 1;
      return { point: [ax + dx * t, az + dz * t], tangent: [dx / len, dz / len] };
    }
    acc += segLen;
  }
  const last = streetLine[streetLine.length - 1];
  const prev = streetLine[streetLine.length - 2];
  const dx = last[0] - prev[0];
  const dz = last[1] - prev[1];
  const len = Math.hypot(dx, dz) || 1;
  return { point: [last[0], last[1]], tangent: [dx / len, dz / len] };
}
