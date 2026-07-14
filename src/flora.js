// Buddleia, and what's in the gutter.
//
// Buddleia davidii is THE Scottish urban-decay plant. It doesn't wait for an
// apocalypse — it is already growing out of the gutters, chimneys and cracked
// render of half the buildings on Leith Walk, because it needs nothing but a
// crack and a bit of rain. In a street nobody has maintained for years it would
// be everywhere, and it's the one piece of greenery here that makes the decay
// read as TIME PASSING rather than as damage.
//
// The litter is likewise specific rather than generic: Buckfast bottles, chip
// pokes, cans, a shopping trolley, tipped wheelie bins. Nobody drops "debris".

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const rand = (() => {
  let s = 0xb0dd1a;
  return () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
})();

const ROOF_BUDDLEIA = 210;   // out of the gutters and chimney stacks
const GROUND_BUDDLEIA = 130; // out of the kerbs and the base of every wall
const LITTER_COUNT = 260;
const BIN_COUNT = 22;

export function buildFlora(world, leith, scene) {
  const line = world.streetLine || [];
  if (line.length < 2) return { group: new THREE.Group() };

  const group = new THREE.Group();
  scene.add(group);

  buildBuddleia(world, leith, line, group);
  buildLitter(line, group);
  buildBins(line, group);
  buildTrolley(line, group);

  return { group };
}

// ---------------------------------------------------------------------------
// Buddleia — crossed billboards
//
// Three quads through the same axis, at 60 degrees to each other. From any angle
// you see at least one near face-on, so the bush has volume without being a
// bush: a real one would be thousands of triangles each, and there are 190 here.
// ---------------------------------------------------------------------------

function buildBuddleia(world, leith, line, group) {
  const tex = makeBuddleiaTexture();
  const quads = [];

  const bush = (x, y, z, size, tilt) => {
    for (let k = 0; k < 3; k++) {
      const g = new THREE.PlaneGeometry(size, size);
      g.translate(0, size / 2, 0);
      g.rotateZ(tilt);
      g.rotateY((k / 3) * Math.PI + rand() * 0.4);
      g.translate(x, y, z);
      quads.push(g);
    }
  };

  // Out of the gutters: along the rooflines.
  //
  // Collect every eligible building FIRST, then spread the budget across all of
  // them. Walking the array and breaking at the budget spends the whole lot on
  // whichever buildings happen to come first in leith.json — which is not the
  // near end of the street, it's arbitrary — and leaves most of the Walk bare.
  // That bug capped the buddleia at 15m and put none of it on the tall tenements.
  const buildings = (leith && leith.buildings) || [];
  const near = world.nearestStreetPoint;
  const eligible = buildings.filter((b) => {
    const fp = b.footprint;
    if (!fp || fp.length < 3) return false;
    const np = near ? near(fp[0][0], fp[0][1]) : null;
    return !np || np.distance <= 28;
  });

  const perBuilding = eligible.length ? ROOF_BUDDLEIA / eligible.length : 0;
  for (const b of eligible) {
    const fp = b.footprint;
    // A fractional budget becomes a probability; a budget over 1 places several.
    const n = Math.floor(perBuilding) + (rand() < perBuilding % 1 ? 1 : 0);
    const height = Math.max(1, b.levels || 1) * 3.2;
    for (let k = 0; k < n; k++) {
      const i = Math.floor(rand() * fp.length);
      const j = (i + 1) % fp.length;
      const t = 0.1 + rand() * 0.8;
      bush(
        fp[i][0] + (fp[j][0] - fp[i][0]) * t,
        height - 0.25,
        fp[i][1] + (fp[j][1] - fp[i][1]) * t,
        1.1 + rand() * 1.5,
        (rand() - 0.5) * 0.5 // it leans out over the street, as it always does
      );
    }
  }

  // ...and out of the kerbs and wall bases at street level.
  const len = chainLength(line);
  for (let i = 0; i < GROUND_BUDDLEIA; i++) {
    const s = sampleAt(line, 20 + rand() * Math.max(1, len - 40));
    if (!s) continue;
    const side = rand() < 0.5 ? 1 : -1;
    const off = side * (7.2 + rand() * 2.6); // pavement, against the walls
    const p = offsetPoint(s, off);
    bush(p[0], 0.03, p[1], 0.8 + rand() * 1.1, (rand() - 0.5) * 0.3);
  }

  if (!quads.length) return;
  group.add(new THREE.Mesh(mergeGeometries(quads, false), new THREE.MeshLambertMaterial({
    map: tex,
    transparent: true,
    alphaTest: 0.45,  // cut, not blended: 570 overlapping quads sort appallingly
    side: THREE.DoubleSide,
    depthWrite: true,
  })));
}

function makeBuddleiaTexture() {
  const S = 256;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const x = c.getContext('2d');
  x.clearRect(0, 0, S, S);

  // Straggly foliage: long narrow leaves radiating from a low centre.
  for (let i = 0; i < 170; i++) {
    const ang = -Math.PI / 2 + (Math.random() - 0.5) * 2.5;
    const lenL = 30 + Math.random() * 78;
    const x0 = S / 2 + (Math.random() - 0.5) * 58;
    const y0 = S - Math.random() * 44;
    const g = 46 + Math.random() * 52;
    x.strokeStyle = `rgba(${28 + Math.random() * 26},${g},${30 + Math.random() * 22},0.95)`;
    x.lineWidth = 2 + Math.random() * 5;
    x.lineCap = 'round';
    x.beginPath();
    x.moveTo(x0, y0);
    x.quadraticCurveTo(
      x0 + Math.cos(ang) * lenL * 0.5 + (Math.random() - 0.5) * 24,
      y0 + Math.sin(ang) * lenL * 0.5,
      x0 + Math.cos(ang) * lenL,
      y0 + Math.sin(ang) * lenL
    );
    x.stroke();
  }

  // The flower spikes: cone-shaped, purple, held above the foliage. Without
  // these it's just a shrub; with them it's unmistakably buddleia.
  for (let i = 0; i < 13; i++) {
    const bx = 34 + Math.random() * (S - 68);
    const by = 26 + Math.random() * 96;
    const h = 26 + Math.random() * 40;
    for (let k = 0; k < 26; k++) {
      const t = k / 26;
      const w = (1 - t) * 8 + 1.5;
      // Dusty mauve, not lilac. A saturated purple under ACES at exposure 1.46
      // comes out as bedding-plant lavender and the street starts to look
      // gardened — which is the opposite of the point. This is a weed nobody has
      // pulled for years, in flat grey light.
      x.fillStyle = `rgba(${74 + Math.random() * 30},${44 + Math.random() * 22},${88 + Math.random() * 32},0.88)`;
      x.beginPath();
      x.ellipse(bx + (Math.random() - 0.5) * 4, by + t * h, w, 3.5, 0, 0, Math.PI * 2);
      x.fill();
    }
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 16;
  return tex;
}

// ---------------------------------------------------------------------------
// Litter
// ---------------------------------------------------------------------------

function buildLitter(line, group) {
  const len = chainLength(line);
  const geos = [];

  for (let i = 0; i < LITTER_COUNT; i++) {
    const s = sampleAt(line, 15 + rand() * Math.max(1, len - 30));
    if (!s) continue;
    const side = rand() < 0.5 ? 1 : -1;
    // Litter collects in the gutter and against the walls, not in the middle of
    // the road — that's where the wind and the traffic put it.
    const off = side * (rand() < 0.65 ? 6.3 + rand() * 0.7 : 7.5 + rand() * 2.2);
    const p = offsetPoint(s, off);
    const roll = rand();

    let g, hex;
    if (roll < 0.30) {
      // Buckfast: green glass, on its side. Of course it is.
      g = new THREE.CylinderGeometry(0.037, 0.042, 0.27, 6);
      g.rotateZ(Math.PI / 2);
      g.rotateY(rand() * Math.PI * 2);
      g.translate(0, 0.04, 0);
      hex = 0x2c3d1e;
    } else if (roll < 0.55) {
      // Cans, crushed
      g = new THREE.CylinderGeometry(0.032, 0.032, 0.10, 6);
      g.rotateZ(Math.PI / 2 + (rand() - 0.5) * 0.7);
      g.scale(1, 1, 0.6);
      g.translate(0, 0.032, 0);
      hex = rand() < 0.5 ? 0x9a5a1e : 0x2f4f6a;
    } else if (roll < 0.80) {
      // Chip pokes and takeaway cartons
      g = new THREE.BoxGeometry(0.16 + rand() * 0.08, 0.05, 0.12 + rand() * 0.06);
      g.rotateY(rand() * Math.PI);
      g.rotateZ((rand() - 0.5) * 0.5);
      g.translate(0, 0.026, 0);
      hex = 0xa8a394;
    } else {
      // Sodden newspaper, flattened into the road
      g = new THREE.PlaneGeometry(0.24 + rand() * 0.2, 0.18 + rand() * 0.14);
      g.rotateX(-Math.PI / 2);
      g.rotateY(rand() * Math.PI);
      g.translate(0, 0.036, 0);
      hex = 0x6d6a5c;
    }

    g.translate(p[0], 0.03, p[1]);
    colorGeo(g, hex);
    geos.push(g);
  }

  if (!geos.length) return;
  group.add(new THREE.Mesh(
    mergeGeometries(geos, false),
    new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true, side: THREE.DoubleSide })
  ));
}

// ---------------------------------------------------------------------------
// Wheelie bins, mostly on their sides
// ---------------------------------------------------------------------------

function buildBins(line, group) {
  const len = chainLength(line);
  const geos = [];

  for (let i = 0; i < BIN_COUNT; i++) {
    const s = sampleAt(line, 25 + rand() * Math.max(1, len - 50));
    if (!s) continue;
    const side = rand() < 0.5 ? 1 : -1;
    const p = offsetPoint(s, side * (7.6 + rand() * 1.8));
    const tipped = rand() < 0.6;

    const parts = [];
    const body = new THREE.BoxGeometry(0.62, 1.05, 0.72).toNonIndexed();
    body.deleteAttribute('uv');
    body.translate(0, 0.525, 0);
    colorGeo(body, [0x2f3a2c, 0x3a2f28, 0x28323a][Math.floor(rand() * 3)]);
    parts.push(body);

    const lid = new THREE.BoxGeometry(0.66, 0.07, 0.76).toNonIndexed();
    lid.deleteAttribute('uv');
    // The lid hangs open — every one of them, always
    lid.translate(0, 1.07, tipped ? 0.1 : -0.30);
    lid.rotateX(tipped ? 0.2 : -0.7);
    colorGeo(lid, 0x1e2620);
    parts.push(lid);

    const bin = mergeGeometries(parts, false);
    bin.rotateY(rand() * Math.PI * 2);
    if (tipped) bin.rotateZ(Math.PI / 2 + (rand() - 0.5) * 0.3);
    bin.translate(p[0], tipped ? 0.34 : 0.03, p[1]);
    geos.push(bin);
  }

  if (!geos.length) return;
  group.add(new THREE.Mesh(
    mergeGeometries(geos, false),
    new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true })
  ));
}

// ---------------------------------------------------------------------------
// One shopping trolley, on its side in the road. There is always exactly one.
// ---------------------------------------------------------------------------

function buildTrolley(line, group) {
  const s = sampleAt(line, 415);
  if (!s) return;
  const p = offsetPoint(s, -3.4);
  const parts = [];

  const bar = (w, h, d, ox, oy, oz) => {
    const g = new THREE.BoxGeometry(w, h, d).toNonIndexed();
    g.deleteAttribute('uv');
    g.translate(ox, oy, oz);
    parts.push(g);
  };

  // The basket, as a cage of thin bars — a solid box would read as a crate.
  const W = 0.56, H = 0.44, D = 0.86;
  for (let i = 0; i <= 6; i++) {
    const t = -D / 2 + (i / 6) * D;
    bar(W, 0.018, 0.018, 0, H, t);        // top rails, running across
    bar(0.018, H, 0.018, -W / 2, H / 2, t); // side uprights
    bar(0.018, H, 0.018, W / 2, H / 2, t);
  }
  for (let i = 0; i <= 4; i++) {
    const t = -W / 2 + (i / 4) * W;
    bar(0.018, 0.018, D, t, 0.02, 0);     // the floor of the basket
    bar(0.018, 0.018, D, t, H, 0);
  }
  bar(W, H, 0.018, 0, H / 2, -D / 2);     // back panel
  bar(0.03, 0.30, 0.03, 0, H + 0.15, -D / 2); // handle stem

  const trolley = mergeGeometries(parts, false);
  colorGeo(trolley, 0x6a6d66);
  trolley.rotateZ(Math.PI / 2 * 0.92);     // dumped on its side
  trolley.rotateY(rand() * Math.PI * 2);
  trolley.translate(p[0], 0.30, p[1]);

  group.add(new THREE.Mesh(
    trolley,
    new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true })
  ));
}

// ---------------------------------------------------------------------------

function offsetPoint(s, off) {
  const [tx, tz] = s.tangent;
  return [s.point[0] + -tz * off, s.point[1] + tx * off];
}

function sampleAt(line, target) {
  let acc = 0;
  for (let i = 0; i < line.length - 1; i++) {
    const [ax, az] = line[i];
    const [bx, bz] = line[i + 1];
    const dx = bx - ax, dz = bz - az;
    const L = Math.hypot(dx, dz);
    if (acc + L >= target) {
      const t = L > 0 ? (target - acc) / L : 0;
      return { point: [ax + dx * t, az + dz * t], tangent: [dx / (L || 1), dz / (L || 1)] };
    }
    acc += L;
  }
  return null;
}

function chainLength(line) {
  let len = 0;
  for (let i = 1; i < line.length; i++) {
    len += Math.hypot(line[i][0] - line[i - 1][0], line[i][1] - line[i - 1][1]);
  }
  return len;
}

function colorGeo(geo, hex) {
  const col = new THREE.Color(hex);
  const n = geo.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    arr[i * 3] = col.r; arr[i * 3 + 1] = col.g; arr[i * 3 + 2] = col.b;
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(arr, 3));
}
