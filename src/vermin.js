// Rats in the gutters.
//
// They live in the kerb line, which is where the bins are and where the water
// runs, and they are meant to be caught in the corner of your eye rather than
// looked at. So: small, dark, and — the thing that actually sells a rat — they
// DART AND FREEZE. Nothing in nature moves at a constant speed along a straight
// line, and a rat gliding smoothly down a gutter reads as a wind-up toy. The
// motion here is mostly stillness punctuated by short scuttles, which is both
// what rats do and what makes them register as alive at the edge of vision.

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const rand = (() => {
  let s = 0x2a17;
  return () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
})();

const RAT_COUNT = 90;
const GUTTER_OFF = 6.6;   // the kerb line: just inside the 7m carriageway edge
const RUN_MIN = 2.5;      // how far a rat will scuttle before thinking better of it
const RUN_MAX = 9;
const RAT_Y = 0.06;

export function buildVermin(world, scene) {
  const line = world.streetLine || [];
  if (line.length < 2) return { group: new THREE.Group(), update() {} };

  const group = new THREE.Group();
  scene.add(group);

  const len = chainLength(line);
  const rats = [];

  for (let i = 0; i < RAT_COUNT; i++) {
    const d0 = 20 + rand() * Math.max(1, len - 45);
    const run = RUN_MIN + rand() * (RUN_MAX - RUN_MIN);
    const a = sampleAt(line, d0);
    const b = sampleAt(line, Math.min(d0 + run, len - 1));
    if (!a || !b) continue;

    const side = rand() < 0.5 ? 1 : -1;
    const off = side * (GUTTER_OFF + (rand() - 0.5) * 0.8);
    const pa = offsetPoint(a, off);
    const pb = offsetPoint(b, off);

    rats.push({
      ax: pa[0], az: pa[1],
      bx: pb[0], bz: pb[1],
      rate: 0.07 + rand() * 0.16,   // cycles per second — a whole out-and-back
      phase: rand(),
      scale: 0.8 + rand() * 0.5,
    });
  }

  const mesh = new THREE.InstancedMesh(makeRatGeometry(), new THREE.MeshLambertMaterial({
    vertexColors: true,
    flatShading: true,
  }), rats.length);
  group.add(mesh);

  return {
    group,
    update(dt, time) { updateRats(mesh, rats, time); },
  };
}

// The dart. `u` runs 0..1 over one out-and-back cycle:
//   0.00-0.18  scuttle out
//   0.18-0.50  freeze (nose twitching, watching you)
//   0.50-0.68  scuttle back
//   0.68-1.00  freeze
// Most of the cycle is stillness. That ratio is the whole effect.
function dart(u) {
  if (u < 0.18) return smooth(0, 0.18, u);
  if (u < 0.50) return 1;
  if (u < 0.68) return 1 - smooth(0.50, 0.68, u);
  return 0;
}

function smooth(e0, e1, x) {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

function updateRats(mesh, rats, time) {
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  const pos = new THREE.Vector3();
  const scl = new THREE.Vector3();

  rats.forEach((r, i) => {
    const u = (time * r.rate + r.phase) % 1;
    const k = dart(u);
    const x = r.ax + (r.bx - r.ax) * k;
    const z = r.az + (r.bz - r.az) * k;

    // Face the way it's going. On the return leg that's the other way round —
    // a rat that reverses down the gutter tail-first is a very odd rat.
    const back = u >= 0.50;
    const dx = back ? r.ax - r.bx : r.bx - r.ax;
    const dz = back ? r.az - r.bz : r.bz - r.az;
    const yaw = Math.atan2(dx, dz);

    // A scurrying rat bobs; a frozen one is dead still. Tie the bob to the dart
    // so it stops when the rat does.
    const moving = (u < 0.18) || (u >= 0.50 && u < 0.68);
    const bob = moving ? Math.abs(Math.sin(time * 26 + i)) * 0.025 : 0;

    e.set(0, yaw, 0, 'YXZ');
    q.setFromEuler(e);
    pos.set(x, RAT_Y + bob, z);
    scl.setScalar(r.scale);
    m.compose(pos, q, scl);
    mesh.setMatrixAt(i, m);
  });
  mesh.instanceMatrix.needsUpdate = true;
}

// Body, head, tail. Nose points along +Z, matching the yaw convention above.
function makeRatGeometry() {
  const parts = [];
  const box = (w, h, d) => {
    const g = new THREE.BoxGeometry(w, h, d).toNonIndexed();
    g.deleteAttribute('uv');
    return g;
  };

  const body = box(0.11, 0.10, 0.23);
  body.translate(0, 0.05, 0);
  colorGeo(body, 0x2f2b25);
  parts.push(body);

  const head = box(0.075, 0.07, 0.10);
  head.translate(0, 0.045, 0.15);
  colorGeo(head, 0x3a352d);
  parts.push(head);

  // The tail: long, thin, and the single most rat-like thing about it.
  const tail = box(0.018, 0.018, 0.21);
  tail.translate(0, 0.035, -0.21);
  colorGeo(tail, 0x4a4038);
  parts.push(tail);

  return mergeGeometries(parts, false);
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
