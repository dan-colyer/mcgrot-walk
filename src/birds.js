// Gulls. Not crows, not doves — Leith belongs to herring gulls and it did long
// before any apocalypse. They are enormous, they are on every roofline, and they
// are entirely unbothered by the end of the world.
//
// WHY NOTHING FLAPS. The plan called for a two-frame wing flap, which needs a
// custom shader to vary geometry per instance. It also isn't what gulls do: a
// herring gull wheeling over a street SOARS, holding its wings rigid and banking
// into the turn. Animating the bank instead of the wings is truer to the bird AND
// falls straight out of the instance matrix — no shader, no per-instance
// attributes, one draw call. The elliptical flight paths make the turn rate vary
// continuously, so the bank breathes on its own rather than sitting at a constant
// angle.
//
// They read as dark silhouettes against the overcast, which is what you actually
// see looking up at a gull from below, and is why this is procedural rather than
// a photoreal cut-out: the silhouette is the whole bird.

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const rand = (() => {
  let s = 0x9a11;
  return () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
})();

const WHEELING_COUNT = 115;
const PERCHED_COUNT = 90;
const PIGEON_COUNT = 40;

// Gulls fly UP AND DOWN THE CANYON, not in circles over the rooftops.
//
// The first cut scattered them on wide ellipses up to 70m off the street at
// 17-42m up. Two things went wrong. They were 10 pixels tall and invisible — and
// worse, those paths took them straight THROUGH the tenements, which are up to
// 58m high. Both problems have the same fix: keep every bird inside the road
// corridor. The carriageway plus pavements is 20m wide and the buildings start
// beyond it, so a bird held within ±CROSS_MAX of the centreline is over open road
// at every point on its loop and can fly at ANY altitude without clipping a wall.
// It also means they pass low overhead, which is the whole image: a gull the size
// of a dog going past your head at second-floor height.
const ALT_MIN = 10;   // clears the catenary wires at ~7.1m
const ALT_MAX = 27;
const CROSS_MAX = 8;    // metres either side of the centreline — must stay under 10
const ALONG_MIN = 22;   // the loops are long and thin: up the street and back
const ALONG_MAX = 55;
const GULL_SPAN = 1.35; // a real herring gull. They are enormous.

export function buildBirds(world, leith, scene) {
  const line = world.streetLine || [];
  if (line.length < 2) return { group: new THREE.Group(), update() {} };

  const group = new THREE.Group();
  scene.add(group);

  const wheeling = buildWheeling(line, group);
  buildPerched(world, leith, group);
  buildPigeons(line, group);

  return {
    group,
    update(dt, time) {
      updateWheeling(wheeling, time);
    },
  };
}

// ---------------------------------------------------------------------------
// The bird itself: two swept wings and a body. Real geometry, not a billboard —
// a billboard collapses to a line when you look along it, and gulls are seen
// from directly below more than from anywhere else.
// ---------------------------------------------------------------------------

function makeGullGeometry(span, bodyLen) {
  const h = span / 2;
  const parts = [];

  // Wings: two triangles each, swept back from the shoulder to the tip.
  const wing = (s) => {
    const v = new Float32Array([
      // inner quad: shoulder -> mid
      s * 0.04, 0, bodyLen * 0.18,
      s * 0.04, 0, -bodyLen * 0.16,
      s * h * 0.55, 0.03 * h, -bodyLen * 0.30,

      s * 0.04, 0, bodyLen * 0.18,
      s * h * 0.55, 0.03 * h, -bodyLen * 0.30,
      s * h * 0.58, 0.03 * h, bodyLen * 0.06,

      // outer: mid -> tip, swept and raised (a gull holds a shallow dihedral)
      s * h * 0.58, 0.03 * h, bodyLen * 0.06,
      s * h * 0.55, 0.03 * h, -bodyLen * 0.30,
      s * h, 0.10 * h, -bodyLen * 0.38,

      s * h * 0.58, 0.03 * h, bodyLen * 0.06,
      s * h, 0.10 * h, -bodyLen * 0.38,
      s * h * 0.97, 0.10 * h, -bodyLen * 0.10,
    ]);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
    g.computeVertexNormals();
    return g;
  };

  // Pale enough to read against the DARK slate overhead, dark enough to still
  // silhouette against the bright haze low down. A true black bird looks superb
  // against the horizon band and then disappears completely at the zenith, which
  // is exactly where you spend most of your time looking at them. (And a gull
  // seen from below really is pale — you're looking at its belly.)
  const l = wing(-1); colorGeo(l, 0x4a4c44);
  const r = wing(1); colorGeo(r, 0x4a4c44);
  parts.push(l, r);

  // mergeGeometries demands that every input carry EXACTLY the same attribute
  // set. The wings above are raw triangle soup with position/normal/color;
  // BoxGeometry arrives indexed and with a uv. So the box has to be flattened
  // (toNonIndexed) and stripped of its uv, which nothing here samples anyway.
  // Colour AFTER the conversion — toNonIndexed() rebuilds the vertex list and
  // discards any colour attribute applied before it.
  const box = (w, h, d) => {
    const g = new THREE.BoxGeometry(w, h, d).toNonIndexed();
    g.deleteAttribute('uv');
    return g;
  };

  const body = box(bodyLen * 0.17, bodyLen * 0.15, bodyLen);
  colorGeo(body, 0x6e7066);
  parts.push(body);

  const tail = box(bodyLen * 0.34, 0.012, bodyLen * 0.30);
  tail.translate(0, 0, -bodyLen * 0.60);
  colorGeo(tail, 0x2c2e28);
  parts.push(tail);

  return mergeGeometries(parts, false);
}

function gullMaterial() {
  return new THREE.MeshLambertMaterial({
    vertexColors: true,
    flatShading: true,
    side: THREE.DoubleSide, // wings are single-sided sheets; you see them from below
  });
}

// ---------------------------------------------------------------------------
// Wheeling
// ---------------------------------------------------------------------------

function buildWheeling(line, group) {
  const len = chainLength(line);
  const birds = [];

  for (let i = 0; i < WHEELING_COUNT; i++) {
    const s = sampleAt(line, 30 + rand() * Math.max(1, len - 60));
    if (!s) continue;
    const [tx, tz] = s.tangent;
    birds.push({
      // The loop is built in the STREET's frame, not the world's: `a` runs along
      // the road and `p` across it. That is what bounds the cross-street
      // excursion, and with it the risk of flying through a building.
      ox: s.point[0],
      oz: s.point[1],
      ax: tx, az: tz,      // along the street
      px: -tz, pz: tx,     // across it
      // Long and thin. The eccentricity is the point: turn rate varies hugely
      // round a loop like this, so the bank breathes instead of locking at one
      // angle — the birds haul over hard at each end and level out down the middle.
      rAlong: ALONG_MIN + rand() * (ALONG_MAX - ALONG_MIN),
      rAcross: 2.5 + rand() * (CROSS_MAX - 2.5),
      y: ALT_MIN + rand() * (ALT_MAX - ALT_MIN),
      speed: (rand() < 0.5 ? -1 : 1) * (0.10 + rand() * 0.14),
      phase: rand() * Math.PI * 2,
      bobAmp: 0.5 + rand() * 1.4,
      bobFreq: 0.25 + rand() * 0.45,
      scale: 0.85 + rand() * 0.5,
    });
  }

  const mesh = new THREE.InstancedMesh(
    makeGullGeometry(GULL_SPAN, GULL_SPAN * 0.42), gullMaterial(), birds.length
  );
  mesh.frustumCulled = false; // they range far outside the street's bounds
  group.add(mesh);
  return { mesh, birds };
}

function updateWheeling({ mesh, birds }, time) {
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  const pos = new THREE.Vector3();
  const scl = new THREE.Vector3();

  birds.forEach((b, i) => {
    const a = time * b.speed + b.phase;
    const ca = Math.cos(a), sa = Math.sin(a);

    // Loop laid out in the street's frame: cos() runs along the road, sin() across.
    const alongOff = ca * b.rAlong;
    const acrossOff = sa * b.rAcross;
    const x = b.ox + b.ax * alongOff + b.px * acrossOff;
    const z = b.oz + b.az * alongOff + b.pz * acrossOff;
    const y = b.y + Math.sin(time * b.bobFreq + b.phase) * b.bobAmp;

    // Velocity is the derivative of that loop — what the bird points along.
    const vx = (-sa * b.rAlong * b.ax + ca * b.rAcross * b.px) * b.speed;
    const vz = (-sa * b.rAlong * b.az + ca * b.rAcross * b.pz) * b.speed;
    const yaw = Math.atan2(vx, vz);

    // ...and the second derivative is what it banks into. Normalised by speed so
    // a slow bird on a tight turn banks as hard as a fast one on a wide one.
    const accx = (-ca * b.rAlong * b.ax - sa * b.rAcross * b.px) * b.speed * b.speed;
    const accz = (-ca * b.rAlong * b.az - sa * b.rAcross * b.pz) * b.speed * b.speed;
    const sp = Math.hypot(vx, vz) || 1e-4;
    const lateral = (accx * vz - accz * vx) / sp; // cross product: which way it turns
    const bank = THREE.MathUtils.clamp(lateral * 90, -1.0, 1.0);

    // YXZ: roll about the body's own forward axis is applied FIRST, then pitch,
    // then yaw — which is what a bank actually is. Any other order rolls the bird
    // about the world axis and it corkscrews.
    e.set(Math.sin(time * b.bobFreq + b.phase) * 0.06, yaw, bank, 'YXZ');
    q.setFromEuler(e);
    pos.set(x, y, z);
    scl.setScalar(b.scale);
    m.compose(pos, q, scl);
    mesh.setMatrixAt(i, m);
  });
  mesh.instanceMatrix.needsUpdate = true;
}

// ---------------------------------------------------------------------------
// Perched: on the rooflines, watching you
// ---------------------------------------------------------------------------

function buildPerched(world, leith, group) {
  const buildings = (leith && leith.buildings) || [];
  const near = world.nearestStreetPoint;
  const spots = [];

  for (const b of buildings) {
    const fp = b.footprint;
    if (!fp || fp.length < 3) continue;
    const height = Math.max(1, b.levels || 1) * 3.2;
    // Only buildings actually on the street — a gull on a roofline half a mile
    // away is pure cost.
    const np = near ? near(fp[0][0], fp[0][1]) : null;
    if (np && np.distance > 30) continue;
    if (rand() > 0.34) continue;

    const n = 1 + Math.floor(rand() * 3);
    for (let k = 0; k < n; k++) {
      const i = Math.floor(rand() * fp.length);
      const j = (i + 1) % fp.length;
      const t = 0.15 + rand() * 0.7;
      spots.push({
        x: fp[i][0] + (fp[j][0] - fp[i][0]) * t,
        z: fp[i][1] + (fp[j][1] - fp[i][1]) * t,
        y: height + 0.12,
        yaw: rand() * Math.PI * 2,
      });
      if (spots.length >= PERCHED_COUNT) break;
    }
    if (spots.length >= PERCHED_COUNT) break;
  }

  if (!spots.length) return;

  // Perched: wings folded, so a shorter span and a squarer body.
  const mesh = new THREE.InstancedMesh(
    makeGullGeometry(GULL_SPAN * 0.42, GULL_SPAN * 0.46), gullMaterial(), spots.length
  );
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  spots.forEach((s, i) => {
    e.set(0, s.yaw, 0, 'YXZ');
    q.setFromEuler(e);
    m.compose(new THREE.Vector3(s.x, s.y, s.z), q, new THREE.Vector3(1, 1, 1));
    mesh.setMatrixAt(i, m);
  });
  mesh.instanceMatrix.needsUpdate = true;
  group.add(mesh);
}

// ---------------------------------------------------------------------------
// Pigeons: down on the carriageway. Kept off the pavements, because that is
// where the NPCs stand and nothing may get between the player and a comic.
// ---------------------------------------------------------------------------

function buildPigeons(line, group) {
  const len = chainLength(line);
  const spots = [];

  for (let i = 0; i < PIGEON_COUNT; i++) {
    const s = sampleAt(line, 25 + rand() * Math.max(1, len - 50));
    if (!s) continue;
    const [tx, tz] = s.tangent;
    const px = -tz, pz = tx;
    const off = (rand() * 2 - 1) * 5.5; // carriageway only
    spots.push({
      x: s.point[0] + px * off,
      z: s.point[1] + pz * off,
      yaw: rand() * Math.PI * 2,
    });
  }
  if (!spots.length) return;

  const geo = makeGullGeometry(0.30, 0.30);
  colorGeo(geo, 0x50524c);
  const mesh = new THREE.InstancedMesh(geo, gullMaterial(), spots.length);
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  spots.forEach((s, i) => {
    e.set(0, s.yaw, 0, 'YXZ');
    q.setFromEuler(e);
    m.compose(new THREE.Vector3(s.x, 0.10, s.z), q, new THREE.Vector3(1, 1, 1));
    mesh.setMatrixAt(i, m);
  });
  mesh.instanceMatrix.needsUpdate = true;
  group.add(mesh);
}

// ---------------------------------------------------------------------------

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
