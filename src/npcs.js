// NPCs for McGrot Walk — grotesque low-poly paper-doll comic vendors.
//
// buildNpcs(assets, world, scene, camera) constructs one character per catalog
// entry (falling back to the 3-comic manifest for the single-file artifact),
// lines them along the whole street, and returns a manager with update(dt, t).
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

const STREET_OFFSET = 6;      // metres perpendicular from the centreline
const START_DIST = 40;        // first vendor this far down the Walk
const END_MARGIN = 60;        // leave this much clear at the south end
// FogExp2 density 0.0095 (world.js) only obscures ~35% of contrast at 70m and
// ~50% at 90m — nowhere near opaque — so a comic held at head height is
// legible well beyond the old 34m range. 85m loads it while still fogged
// enough that the swap from paper placeholder to real art isn't obvious.
const COMIC_LOAD_RANGE = 85;

// Drab post-apocalyptic coat palette, cycled across vendors for variety.
const COAT_COLORS = [
  0x4a4636, 0x413f3a, 0x54503f, 0x3b3d34, 0x4f473a, 0x39362c, 0x484a42, 0x5a5140,
];

// Scarf/neckerchief accents — the one colour note each vendor gets.
const SCARF_COLORS = [0x6b3328, 0x705c23, 0x2e4640, 0x59422e, 0x3d3453, 0x664a1e];

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

export function buildNpcs(assets, world, scene, camera) {
  // Prefer the full catalog (site/dev); fall back to the 3-comic manifest
  // (single-file artifact). Only entries with an npc identity become vendors.
  const list = (assets.catalog && Array.isArray(assets.catalog.comics))
    ? assets.catalog.comics.filter((c) => c.npc)
    : (assets.manifest.comics || []);
  const streetLine = world.streetLine || [];
  const npcs = [];

  // Unique face JPEG -> list of materials waiting for it (load once, share).
  const faceMats = new Map();
  const registerFace = (path, mat) => {
    if (!path) return;
    if (!faceMats.has(path)) faceMats.set(path, []);
    faceMats.get(path).push(mat);
  };

  const streetLen = streetLength(streetLine);
  const usable = Math.max(1, streetLen - START_DIST - END_MARGIN);
  const spacing = list.length > 1 ? usable / (list.length - 1) : 0;

  list.forEach((comic, i) => {
    const dist = START_DIST + i * spacing;
    const side = i % 2 === 0 ? 1 : -1;
    const sample = sampleStreet(streetLine, dist);
    if (!sample) return;

    const [tx, tz] = sample.tangent;
    const perpX = -tz;
    const perpZ = tx;
    const px = sample.point[0] + perpX * STREET_OFFSET * side;
    const pz = sample.point[1] + perpZ * STREET_OFFSET * side;

    // Face back toward the centreline (character built facing +Z; θ maps +Z to
    // (sinθ, cosθ), so θ = atan2(dir.x, dir.z)).
    const dirX = sample.point[0] - px;
    const dirZ = sample.point[1] - pz;
    const baseY = Math.atan2(dirX, dirZ);

    const npc = buildNpc(assets, comic, COAT_COLORS[i % COAT_COLORS.length], registerFace);
    npc.group.position.set(px, 0, pz);
    npc.group.rotation.y = baseY;
    npc.baseY = baseY;
    npc.phase = i * 2.1;

    scene.add(npc.group);
    npcs.push(npc);
  });

  // Load each unique face once, apply to every material that registered it.
  for (const [path, mats] of faceMats) {
    loadSRGB(assetUrl(assets, path), (tex) => {
      for (const m of mats) { m.map = tex; m.color.set(0xffffff); m.needsUpdate = true; }
    });
  }

  const _p = new THREE.Vector3();
  function update(dt, time) {
    const cam = camera ? camera.position : null;
    for (let i = 0; i < npcs.length; i++) {
      const npc = npcs[i];
      npc.tick(time);
      if (cam && !npc.comicLoaded) {
        const g = npc.group.position;
        if (Math.hypot(cam.x - g.x, cam.z - g.z) < COMIC_LOAD_RANGE) npc.loadComic();
      }
    }
  }

  return { npcs, update };
}

// ---------------------------------------------------------------------------
// Single character
// ---------------------------------------------------------------------------

function buildNpc(assets, comic, coatColor, registerFace) {
  const build = comic.npc.build || { height: 1.9, girth: 1.0, headScale: 1.5 };
  const H = build.height;
  const G = build.girth;
  const S = build.headScale;

  const group = new THREE.Group();
  const coatMat = clothMat(coatColor, false);
  const bootMat = new THREE.MeshLambertMaterial({ color: 0x15140f, flatShading: true });

  const bootH = 0.12;
  const legH = H * 0.30;
  const bodyW = 0.52 * G;
  const bodyD = 0.34 * G;
  const bodyH = H * 0.48;
  const headSize = 0.34 * S;

  const legTopY = bootH + legH;
  const bodyTopY = legTopY + bodyH;
  const headCenterY = bodyTopY + headSize * 0.5 + 0.02;
  const headTopY = headCenterY + headSize * 0.5;
  const legX = bodyW * 0.24;

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

  // Oversized head — face JPEG on +Z (front, unlit); the other 5 faces wear a
  // knitted hood (darker than the coat) instead of bare coat colour, so the
  // head reads as a hooded person rather than a coat-coloured block.
  const hoodMat = clothMat(new THREE.Color(coatColor).multiplyScalar(0.62).getHex(), true);
  const faceMat = new THREE.MeshBasicMaterial({ color: 0x8a8472 });
  registerFace(comic.npc.face, faceMat);
  // BoxGeometry material order: +X,-X,+Y,-Y,+Z,-Z — index 4 is the front.
  const headMats = [hoodMat, hoodMat, hoodMat, hoodMat, faceMat, hoodMat];
  const head = new THREE.Mesh(new THREE.BoxGeometry(headSize, headSize, headSize * 0.85), headMats);
  head.position.set(0, headCenterY, 0);
  group.add(head);

  // Scarf — a thin box at the collar, the one colour note per vendor, picked
  // deterministically from the vendor's name.
  let nameHash = 0;
  for (const ch of comic.npc.name || '') nameHash = (nameHash * 31 + ch.charCodeAt(0)) | 0;
  const scarf = new THREE.Mesh(
    new THREE.BoxGeometry(headSize * 0.95, 0.09, headSize * 0.85),
    new THREE.MeshLambertMaterial({ color: SCARF_COLORS[Math.abs(nameHash) % SCARF_COLORS.length], flatShading: true })
  );
  scarf.position.set(0, bodyTopY + 0.02, 0);
  group.add(scarf);

  // Comic plane — unlit, grubby-newsprint placeholder until its texture loads.
  const comicH = bodyH * 0.55;
  const comicMat = new THREE.MeshBasicMaterial({ map: paperPlaceholder(), side: THREE.DoubleSide });
  const comicMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), comicMat);
  comicMesh.position.set(0, legTopY + bodyH * 0.55, bodyD * 0.5 + 0.17);
  comicMesh.scale.set(comicH * 0.7, comicH, 1);
  group.add(comicMesh);

  // Hands gripping the comic's bottom corners — without them the comic floats.
  const handMat = new THREE.MeshLambertMaterial({ color: 0x84745e, flatShading: true });
  for (const sx of [-1, 1]) {
    const hand = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.07, 0.06), handMat);
    hand.position.set(sx * comicH * 0.28, legTopY + bodyH * 0.55 - comicH * 0.48, bodyD * 0.5 + 0.18);
    group.add(hand);
  }

  const plate = makeNamePlate(comic.npc.name, comic.npc.blurb);
  plate.position.set(0, headTopY + 0.42, 0);
  group.add(plate);

  const npc = {
    group,
    head,
    comicMesh,
    comic,
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
        comicMat.color.set(0xffffff);
        comicMat.needsUpdate = true;
        const img = tex.image;
        if (img && img.width && img.height) {
          comicMesh.scale.set(comicH * (img.width / img.height), comicH, 1);
        }
      });
    },
    setSpeaking(v) {
      npc.speaking = !!v;
      if (!npc.speaking) head.rotation.set(0, 0, 0);
    },
    tick(time) {
      group.rotation.z = Math.sin(time * 0.6 + npc.phase) * 0.01;
      group.rotation.y = npc.baseY + Math.sin(time * 0.4 + npc.phase) * 0.008;
      if (npc.speaking) {
        const w = time * 25 + npc.phase; // ~4Hz head bobble
        head.rotation.y = Math.sin(w) * 0.09;
        head.rotation.x = (Math.sin(w * 0.5) + 1) * 0.05;
      }
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
