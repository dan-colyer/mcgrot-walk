// The works that never ended.
//
// The joke this whole phase hangs on: Leith Walk was dug up for the best part of
// a decade for the trams, and in this world the apocalypse arrived and nobody
// noticed, because the street already looked like this. The rails (road.js) run
// up the Walk and stop dead at 620m in the middle of nothing. This is what's
// waiting at the end of them: an open trench, spoil heaps, Heras fencing, a
// forest of cones, and a hoarding still promising completion in spring 2023.
//
// WHY THE TRENCH IS A DECAL AND NOT A HOLE. The carriageway is one flat plane at
// y=0.03 spanning the entire street. Anything sunk below it — floor, walls, the
// lot — is occluded by the road itself from every viewpoint above the road, so a
// literal pit renders as nothing at all. A real hole would mean re-tessellating
// the ribbon around an arbitrary rectangle. What actually sells a trench at eye
// height is not the void: it's the spoil heaped beside it, the broken tarmac
// lip, and the fence you can't walk through. Those are all real geometry here;
// only the dark floor is painted on.

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const rand = (() => {
  let s = 0xd16600;
  return () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
})();

const WORKS_START = 596;   // where the fencing begins, as you walk up
const WORKS_END = 690;     // and where it peters out into nothing
const RAIL_END = 620;      // must match road.js — the rails stop mid-trench
// Just NORTH of where the fencing starts, so you meet the board before the works.
const HOARDING_AT = 593;
// In the carriageway, not on the pavement. The board is 4.2m wide and the
// pavement is 3m, so a pavement placement buries a third of it — and the text —
// inside the building. A works hoarding stands in the road anyway.
const HOARDING_OFF = -3.2;

const CONE_CLUSTER_SPACING = 115; // a knot of cones every ~115m the whole way up
const FENCE_PANEL_W = 3.5;
const FENCE_H = 2.0;

const ROAD_Y = 0.03;
const DECAL_Y = 0.042;

// ---------------------------------------------------------------------------

export function buildRoadworks(world, scene) {
  const line = world.streetLine || [];
  if (line.length < 2) return { group: new THREE.Group() };

  const group = new THREE.Group();
  scene.add(group);

  const cones = [];
  const fencePosts = [];
  const fencePanels = [];
  const spoil = [];

  buildTrench(line, group, spoil, cones, fencePosts, fencePanels);
  scatterCones(line, cones);
  buildHoarding(line, group);

  emitCones(cones, group);
  emitFence(fencePosts, fencePanels, group);
  if (spoil.length) {
    group.add(new THREE.Mesh(
      mergeGeometries(spoil, false),
      new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true })
    ));
  }

  return { group };
}

// ---------------------------------------------------------------------------
// Street sampling
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

// Point at `dist` along the street, `off` metres to the side (+ is left).
function place(line, dist, off) {
  const s = sampleAt(line, dist);
  if (!s) return null;
  const [tx, tz] = s.tangent;
  const px = -tz, pz = tx;
  return {
    x: s.point[0] + px * off,
    z: s.point[1] + pz * off,
    yaw: Math.atan2(tx, tz),
    tangent: s.tangent,
  };
}

// ---------------------------------------------------------------------------
// The trench: painted floor, real spoil, real lip, real fence
// ---------------------------------------------------------------------------

function buildTrench(line, group, spoil, cones, posts, panels) {
  const trenchTex = makeTrenchTexture();
  const decals = [];
  const HALF_W = 1.5; // the trench straddles where the rails would have continued

  // The excavation itself, laid as a run of quads along the street so it bends
  // with it. Starts where the rails die and runs on into nothing.
  for (let dist = RAIL_END - 6; dist < WORKS_END; dist += 5) {
    const p = place(line, dist + 2.5, (rand() - 0.5) * 0.8);
    if (!p) break;
    const g = new THREE.PlaneGeometry(HALF_W * 2, 5.4);
    g.rotateX(-Math.PI / 2);
    g.rotateY(p.yaw);
    g.translate(p.x, DECAL_Y, p.z);
    decals.push(g);
  }
  if (decals.length) {
    group.add(new THREE.Mesh(mergeGeometries(decals, false), new THREE.MeshLambertMaterial({
      map: trenchTex,
      transparent: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -3,
      polygonOffsetUnits: -3,
    })));
  }

  // Spoil heaps and broken tarmac along both lips. This — not the painted floor
  // — is what makes the brain read "hole".
  for (let dist = RAIL_END - 8; dist < WORKS_END + 4; dist += 3.2) {
    for (const side of [-1, 1]) {
      const p = place(line, dist + rand() * 2, side * (HALF_W + 0.7 + rand() * 0.9));
      if (!p) continue;

      // Heaped earth. Spoil SLUMPS — it sits at its angle of repose, wide and
      // low. A tall narrow cone reads as a party hat, which is exactly what the
      // first attempt looked like: keep the height well under the radius, and
      // squash each heap unevenly so no two are the same solid of revolution.
      const rad = 0.75 + rand() * 0.65;
      const h = 0.26 + rand() * 0.26;
      const heap = new THREE.ConeGeometry(rad, h, 9);
      heap.translate(0, h / 2, 0);
      heap.scale(1, 1, 0.7 + rand() * 0.5);
      heap.rotateY(rand() * Math.PI);
      heap.translate(p.x, ROAD_Y, p.z);
      colorGeo(heap, [0x5c4c39, 0x6a5843, 0x4a3d2e][Math.floor(rand() * 3)]);
      spoil.push(heap);

      // Slabs of tarmac levered up out of the road
      if (rand() < 0.55) {
        const b = new THREE.BoxGeometry(0.4 + rand() * 0.5, 0.09, 0.35 + rand() * 0.4);
        b.rotateZ((rand() - 0.5) * 0.9);
        b.rotateY(rand() * Math.PI);
        b.translate(p.x + (rand() - 0.5) * 1.4, ROAD_Y + 0.12, p.z + (rand() - 0.5) * 1.4);
        colorGeo(b, 0x2b2c28);
        spoil.push(b);
      }
    }
  }

  // Cones line the trench the whole way, one every couple of metres.
  for (let dist = RAIL_END - 10; dist < WORKS_END + 6; dist += 2.3) {
    for (const side of [-1, 1]) {
      const p = place(line, dist, side * (HALF_W + 1.9 + rand() * 0.4));
      if (p) cones.push({ ...p, tipped: rand() < 0.16 });
    }
  }

  // Heras panels: a corridor down both sides of the works, and a run thrown
  // across the carriageway at the far end where the job was simply abandoned.
  fenceRun(line, WORKS_START, WORKS_END, 4.4, posts, panels);
  fenceRun(line, WORKS_START, WORKS_END, -4.4, posts, panels);
  fenceAcross(line, WORKS_END + 2, posts, panels);
}

// A run of panels down one side of the works, parallel to the street.
function fenceRun(line, from, to, off, posts, panels) {
  for (let dist = from; dist < to; dist += FENCE_PANEL_W + 0.1) {
    const p = place(line, dist + FENCE_PANEL_W / 2, off);
    if (!p) break;
    if (rand() < 0.12) continue; // panels missing — someone's had them away
    addPanel(p.x, p.z, p.yaw, posts, panels, rand() < 0.18);
  }
}

// A run of panels thrown ACROSS the street: the point where the job stopped.
function fenceAcross(line, dist, posts, panels) {
  for (let off = -6; off <= 6; off += FENCE_PANEL_W + 0.1) {
    const p = place(line, dist, off + FENCE_PANEL_W / 2);
    if (!p) continue;
    addPanel(p.x, p.z, p.yaw + Math.PI / 2, posts, panels, rand() < 0.25);
  }
}

// One Heras panel: a frame of thin bars (real geometry) plus a single quad
// carrying the wire mesh as an alpha texture. Modelling the actual mesh would be
// thousands of triangles per panel for something you can barely see.
function addPanel(x, z, yaw, posts, panels, leaning) {
  const lean = leaning ? (rand() - 0.5) * 0.5 : (rand() - 0.5) * 0.06;

  const frame = [];
  const bar = (w, h, d, ox, oy) => {
    const g = new THREE.BoxGeometry(w, h, d);
    g.translate(ox, oy, 0);
    frame.push(g);
  };
  bar(0.05, FENCE_H, 0.05, -FENCE_PANEL_W / 2, FENCE_H / 2);  // posts
  bar(0.05, FENCE_H, 0.05, FENCE_PANEL_W / 2, FENCE_H / 2);
  bar(FENCE_PANEL_W, 0.05, 0.05, 0, FENCE_H - 0.03);          // top rail
  bar(FENCE_PANEL_W, 0.05, 0.05, 0, 0.03);                    // bottom rail
  // Concrete feet
  const footL = new THREE.BoxGeometry(0.5, 0.11, 0.26);
  footL.translate(-FENCE_PANEL_W / 2, 0.055, 0);
  const footR = new THREE.BoxGeometry(0.5, 0.11, 0.26);
  footR.translate(FENCE_PANEL_W / 2, 0.055, 0);
  frame.push(footL, footR);

  const merged = mergeGeometries(frame, false);
  merged.rotateZ(lean);
  merged.rotateY(yaw);
  merged.translate(x, ROAD_Y, z);
  posts.push(merged);

  const panel = new THREE.PlaneGeometry(FENCE_PANEL_W - 0.1, FENCE_H - 0.1);
  panel.translate(0, FENCE_H / 2, 0);
  panel.rotateZ(lean);
  panel.rotateY(yaw);
  panel.translate(x, ROAD_Y, z);
  panels.push(panel);
}

function emitFence(posts, panels, group) {
  if (posts.length) {
    group.add(new THREE.Mesh(
      mergeGeometries(posts, false),
      new THREE.MeshLambertMaterial({ color: 0x55574f, flatShading: true })
    ));
  }
  if (panels.length) {
    group.add(new THREE.Mesh(mergeGeometries(panels, false), new THREE.MeshLambertMaterial({
      map: makeMeshTexture(),
      transparent: true,
      alphaTest: 0.35, // cut, don't blend — blended wire mesh sorts badly against itself
      side: THREE.DoubleSide,
      depthWrite: true,
    })));
  }
}

// ---------------------------------------------------------------------------
// Cones
// ---------------------------------------------------------------------------

function scatterCones(line, cones) {
  const len = chainLength(line);
  for (let d = 40; d < len - 20; d += CONE_CLUSTER_SPACING) {
    if (d > WORKS_START - 40 && d < WORKS_END + 40) continue; // the works has its own
    const n = 3 + Math.floor(rand() * 6);
    for (let i = 0; i < n; i++) {
      const p = place(line, d + (rand() - 0.5) * 14, (rand() - 0.5) * 12);
      if (p) cones.push({ ...p, tipped: rand() < 0.35 });
    }
  }
}

function makeConeGeometry() {
  const parts = [];
  const body = new THREE.ConeGeometry(0.24, 0.62, 10);
  body.translate(0, 0.31, 0);
  colorGeo(body, 0xa83d0e);
  parts.push(body);

  // Reflective band. The cone's radius at y=0.33 is ~0.11, so the band has to
  // sit just outside that or it vanishes inside the cone.
  const band = new THREE.CylinderGeometry(0.125, 0.15, 0.13, 10);
  band.translate(0, 0.33, 0);
  colorGeo(band, 0xc9c4b4);
  parts.push(band);

  const base = new THREE.BoxGeometry(0.34, 0.05, 0.34);
  base.translate(0, 0.025, 0);
  colorGeo(base, 0x7a2c0a);
  parts.push(base);

  return mergeGeometries(parts, false);
}

function emitCones(cones, group) {
  if (!cones.length) return;
  const geo = makeConeGeometry();
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
  const mesh = new THREE.InstancedMesh(geo, mat, cones.length);
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  const pos = new THREE.Vector3();
  const scl = new THREE.Vector3(1, 1, 1);

  cones.forEach((c, i) => {
    // A tipped cone lies on its side — rotate it right over, not just askew.
    e.set(c.tipped ? Math.PI / 2 * (0.75 + rand() * 0.3) : (rand() - 0.5) * 0.08,
          rand() * Math.PI * 2, 0, 'YXZ');
    q.setFromEuler(e);
    pos.set(c.x, ROAD_Y + (c.tipped ? 0.2 : 0), c.z);
    m.compose(pos, q, scl);
    mesh.setMatrixAt(i, m);
  });
  mesh.instanceMatrix.needsUpdate = true;
  group.add(mesh);
}

// ---------------------------------------------------------------------------
// The hoarding
// ---------------------------------------------------------------------------

function buildHoarding(line, group) {
  const p = place(line, HOARDING_AT, HOARDING_OFF);
  if (!p) return;

  const W = 4.2, H = 2.5, BASE = 0.45;
  const board = new THREE.PlaneGeometry(W, H);
  board.translate(0, BASE + H / 2, 0);
  // Face back DOWN the Walk, toward the player walking up it — a sign nobody
  // can read is just a plank.
  const [tx, tz] = p.tangent;
  const facing = Math.atan2(-tx, -tz);
  board.rotateY(facing);
  board.translate(p.x, ROAD_Y, p.z);

  group.add(new THREE.Mesh(board, new THREE.MeshLambertMaterial({
    map: makeHoardingTexture(),
    side: THREE.DoubleSide,
  })));

  const legs = [];
  for (const s of [-1, 1]) {
    const leg = new THREE.BoxGeometry(0.12, BASE + 0.3, 0.12);
    leg.translate(s * (W / 2 - 0.3), (BASE + 0.3) / 2, 0);
    legs.push(leg);
  }
  const merged = mergeGeometries(legs, false);
  merged.rotateY(facing);
  merged.translate(p.x, ROAD_Y, p.z);
  group.add(new THREE.Mesh(merged, new THREE.MeshLambertMaterial({ color: 0x4a4438 })));
}

function makeHoardingTexture() {
  const W = 1024, H = 610;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const x = c.getContext('2d');

  // Council-blue board, sun-bleached and streaked
  x.fillStyle = '#26506e';
  x.fillRect(0, 0, W, H);
  for (let i = 0; i < 2600; i++) {
    const gx = Math.random() * W, gy = Math.random() * H;
    x.fillStyle = `rgba(${20 + Math.random() * 60},${30 + Math.random() * 50},${40 + Math.random() * 50},0.06)`;
    x.fillRect(gx, gy, Math.random() * 90, Math.random() * 5);
  }

  x.fillStyle = '#e8e6dc';
  x.textAlign = 'center';
  x.font = 'bold 62px Helvetica, Arial, sans-serif';
  x.fillText('LEITH WALK', W / 2, 110);
  x.fillText('IMPROVEMENT PROJECT', W / 2, 180);

  x.fillStyle = '#f0c02a';
  x.fillRect(120, 232, W - 240, 6);

  x.fillStyle = '#e8e6dc';
  x.font = 'bold 50px Helvetica, Arial, sans-serif';
  x.fillText('COMPLETION: SPRING 2023', W / 2, 310);

  x.font = '30px Helvetica, Arial, sans-serif';
  x.fillStyle = '#b8c6d2';
  x.fillText('WE APOLOGISE FOR ANY INCONVENIENCE', W / 2, 380);
  x.font = '24px Helvetica, Arial, sans-serif';
  x.fillText('City of Edinburgh Council', W / 2, 430);

  // Somebody has been at it with a marker pen. Of course they have.
  x.strokeStyle = 'rgba(210,60,40,0.85)';
  x.lineWidth = 9;
  x.lineCap = 'round';
  x.beginPath();
  x.moveTo(190, 340); x.lineTo(835, 285);   // struck through the completion date
  x.stroke();
  x.save();
  x.translate(W / 2, 520);
  x.rotate(-0.05);
  x.fillStyle = 'rgba(214,66,44,0.9)';
  x.font = 'bold 58px Helvetica, Arial, sans-serif';
  x.fillText('STILL WAITING', 0, 0);
  x.restore();

  // Peeling: chunks of board torn away at the edges
  x.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 26; i++) {
    const px = Math.random() * W;
    const py = Math.random() < 0.5 ? Math.random() * 40 : H - Math.random() * 40;
    x.beginPath();
    x.ellipse(px, py, 10 + Math.random() * 50, 6 + Math.random() * 22, Math.random() * 3, 0, Math.PI * 2);
    x.fill();
  }
  x.globalCompositeOperation = 'source-over';

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 16;
  return tex;
}

// ---------------------------------------------------------------------------
// Textures
// ---------------------------------------------------------------------------

// Heras wire mesh: a grid of thin bright lines on transparent black.
function makeMeshTexture() {
  const S = 128;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const x = c.getContext('2d');
  x.clearRect(0, 0, S, S);
  // Galvanised steel that has stood in Leith rain for a decade, NOT bright wire.
  // At #9a9b93 the panels blew out to near-white under ACES at exposure 1.46 and
  // swallowed the whole scene — the fence became the brightest thing on a street
  // lit by nothing. Same trap as the rails: pick it dark, let tone mapping lift it.
  x.strokeStyle = '#50524b';
  x.lineWidth = 2;
  const step = S / 8;
  for (let i = 0; i <= 8; i++) {
    x.beginPath(); x.moveTo(i * step, 0); x.lineTo(i * step, S); x.stroke();
    x.beginPath(); x.moveTo(0, i * step); x.lineTo(S, i * step); x.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(6, 4);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 16;
  return tex;
}

// Trench floor: wet dug earth, a length of exposed pipe, standing water.
function makeTrenchTexture() {
  const S = 256;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const x = c.getContext('2d');

  x.fillStyle = '#241d16';
  x.fillRect(0, 0, S, S);
  for (let i = 0; i < 2200; i++) {
    const v = Math.random();
    x.fillStyle = `rgba(${30 + v * 55},${25 + v * 45},${18 + v * 35},0.5)`;
    x.beginPath();
    x.arc(Math.random() * S, Math.random() * S, Math.random() * 5, 0, Math.PI * 2);
    x.fill();
  }
  // Standing water at the bottom of the cut — it reflects the same filthy sky.
  x.fillStyle = 'rgba(78,84,74,0.45)';
  x.beginPath();
  x.ellipse(S * 0.55, S * 0.62, S * 0.3, S * 0.13, 0.3, 0, Math.PI * 2);
  x.fill();
  // Exposed duct running the length of the cut
  x.fillStyle = '#4a4235';
  x.fillRect(0, S * 0.40, S, 16);
  x.fillStyle = 'rgba(255,255,255,0.07)';
  x.fillRect(0, S * 0.40, S, 5);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 16;
  return tex;
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
