// Roofline dressing — D7 task 2. The merged building extrusion (world.js)
// tops out in a dead flat plane; Edinburgh tenement rooflines are anything
// but, thanks to a chimney stack at every party wall and a bent TV aerial
// on every third or fourth building. Two InstancedMeshes (one low-poly
// geometry each, static, no per-frame update needed — same pattern as
// src/flora.js's merged scatter meshes), placed deterministically via
// hash32 so reloading the page gives an identical skyline.

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const STOREY_M = 3.2; // matches world.js LEVEL_HEIGHT / shopfronts.js STOREY_M
const MAX_STREET_DIST = 80;  // brief: chimneys/aerials within ~80m of the street
const EDGE_SPACING_M = 10;   // nominal along-edge chimney spacing (brief: 8-12m)
const SHARED_VERTEX_TOL = 0.5; // metres: footprint corners this close count as "the same party wall"
const MAX_CHIMNEY_INSTANCES = 2500; // brief's cap
const AERIAL_CHANCE = 1 / 5;

function hash32(a, b) {
  let h = (a * 73856093) ^ (b * 19349663);
  h = Math.imul(h ^ (h >>> 13), 0x85ebca6b);
  h ^= h >>> 16;
  return h >>> 0;
}
function hash01(a, b) { return (hash32(a, b) % 100000) / 100000; }

// A tapered-reading stack (plain box — a true taper needs more tris than
// this budget allows and reads almost identically at street distance) plus
// 3 pots as open-ended (no caps — always embedded/occluded) low-segment
// cylinders. ~12 + 3*10 = 42 tris total.
function makeChimneyGeometry() {
  const parts = [];
  const stack = new THREE.BoxGeometry(0.9, 1.8, 0.55).toNonIndexed();
  stack.deleteAttribute('uv');
  stack.translate(0, 0.9, 0); // base at local y=0
  parts.push(stack);

  const potOffsets = [[-0.28, 0], [0.05, 0.15], [0.3, -0.12]];
  for (const [ox, oz] of potOffsets) {
    const pot = new THREE.CylinderGeometry(0.12, 0.13, 0.4, 5, 1, true).toNonIndexed();
    pot.deleteAttribute('uv');
    pot.translate(ox, 1.8 + 0.2, oz);
    parts.push(pot);
  }
  return mergeGeometries(parts, false);
}

// A mast plus two short cross-bars, bent slightly off-vertical — reads as a
// period TV aerial in silhouette from street distance. Side-only cylinder
// for the mast (no caps), boxes for the cross-bars. ~10 + 2*12 = 34 tris.
function makeAerialGeometry() {
  const parts = [];
  const mast = new THREE.CylinderGeometry(0.02, 0.03, 1.4, 5, 1, true).toNonIndexed();
  mast.deleteAttribute('uv');
  mast.translate(0, 0.7, 0);
  parts.push(mast);

  for (let i = 0; i < 2; i++) {
    const bar = new THREE.BoxGeometry(0.5 - i * 0.14, 0.02, 0.02).toNonIndexed();
    bar.deleteAttribute('uv');
    bar.translate(0, 1.0 + i * 0.22, 0);
    parts.push(bar);
  }
  return mergeGeometries(parts, false);
}

export function buildChimneys(assets, world, scene) {
  const buildings = (assets && assets.leith && assets.leith.buildings) || [];
  const nearest = world && world.nearestStreetPoint;
  if (!buildings.length || !nearest) return { chimneys: null, aerials: null, count: 0 };

  // Party-wall corners: any footprint vertex (rounded to a coarse grid so
  // near-coincident OSM nodes still match) shared by more than one building
  // — this is where a real Edinburgh terrace actually puts its stacks.
  const vertexKey = (x, z) => `${Math.round(x / SHARED_VERTEX_TOL)}:${Math.round(z / SHARED_VERTEX_TOL)}`;
  const vertexCount = new Map();
  buildings.forEach((b) => {
    const fp = b && b.footprint;
    if (!fp) return;
    for (const [x, z] of fp) {
      const k = vertexKey(x, z);
      vertexCount.set(k, (vertexCount.get(k) || 0) + 1);
    }
  });

  const candidates = []; // {x, z, dist, bi}

  buildings.forEach((building, bi) => {
    const fp = building && building.footprint;
    if (!fp || fp.length < 3) return;
    let cx = 0, cz = 0;
    for (const p of fp) { cx += p[0]; cz += p[1]; }
    cx /= fp.length; cz /= fp.length;
    const centroidNear = nearest(cx, cz);
    if (!centroidNear || centroidNear.distance > MAX_STREET_DIST) return;

    const buildingHeightM = Math.max(1, building.levels || 1) * STOREY_M;
    const seen = new Set(); // dedupe shared-corner placements within this building

    for (let i = 0; i < fp.length; i++) {
      const a = fp[i], b = fp[(i + 1) % fp.length];

      // Shared party-wall corner: place exactly at the vertex, once. Kept
      // unconditional regardless of facing — a real party-wall stack sits on
      // the shared gable whichever way it happens to face.
      const k = vertexKey(a[0], a[1]);
      if (vertexCount.get(k) > 1 && !seen.has(k)) {
        seen.add(k);
        const d = nearest(a[0], a[1]);
        candidates.push({ x: a[0], z: a[1], y: buildingHeightM, dist: d ? d.distance : centroidNear.distance, bi, edgeSeed: i });
      }

      // Interval spacing along the edge itself.
      const dx = b[0] - a[0], dz = b[1] - a[1];
      const len = Math.hypot(dx, dz);
      if (len < 3) continue;

      // D8/task5b: this used to run on EVERY edge — front and rear eaves
      // both got interval stacks, measured at a 4.7m mean nearest-neighbour
      // spacing against the brief's 8-12m intent (27% within 2m of another).
      // Only cosmetic at eye level (all eval poses are y=1.7 — a rear stack
      // is rarely actually visible), but real. Same outward-normal/facing
      // test frontage.js uses for shopfronts: skip interval placements on an
      // edge that faces away from the street at all — a true rear wall —
      // while still letting side-return edges (which a player CAN see down
      // a close or from an angled approach) keep theirs.
      const mx = (a[0] + b[0]) / 2, mz = (a[1] + b[1]) / 2;
      const edgeNear = nearest(mx, mz);
      let facingOk = true;
      if (edgeNear && edgeNear.point) {
        const inv = 1 / len;
        let nx = -dz * inv, nz = dx * inv;
        if (nx * (mx - cx) + nz * (mz - cz) < 0) { nx = -nx; nz = -nz; }
        const dsx = edgeNear.point[0] - mx, dsz = edgeNear.point[1] - mz;
        const dl = Math.hypot(dsx, dsz) || 1;
        const facing = (nx * dsx + nz * dsz) / dl;
        facingOk = facing >= 0;
      }
      if (!facingOk) continue;

      const n = Math.max(1, Math.round(len / EDGE_SPACING_M));
      for (let s = 0; s < n; s++) {
        const t = (s + 0.5) / n;
        const px = a[0] + dx * t, pz = a[1] + dz * t;
        candidates.push({ x: px, z: pz, y: buildingHeightM, dist: (nearest(px, pz) || centroidNear).distance, bi, edgeSeed: i * 97 + s });
      }
    }
  });

  // No-silent-caps: bound total instances by dropping the FURTHEST
  // candidates from the street, and say so, rather than silently
  // truncating in footprint order (which would leave an arbitrary gap).
  candidates.sort((a, b) => a.dist - b.dist);
  const dropped = Math.max(0, candidates.length - MAX_CHIMNEY_INSTANCES);
  const kept = dropped > 0 ? candidates.slice(0, MAX_CHIMNEY_INSTANCES) : candidates;
  if (dropped > 0) {
    console.warn(`[chimneys] ${dropped} candidate chimney placements beyond ${MAX_CHIMNEY_INSTANCES} dropped (furthest-from-street first, not a silent mid-street gap)`);
  }

  const chimneyGeo = makeChimneyGeometry();
  const chimneyMat = new THREE.MeshLambertMaterial({ color: 0x2e2a24 });
  const chimneys = kept.length ? new THREE.InstancedMesh(chimneyGeo, chimneyMat, kept.length) : null;

  const m = new THREE.Matrix4();
  const pos = new THREE.Vector3();
  const quat = new THREE.Quaternion();
  const scale = new THREE.Vector3();
  const euler = new THREE.Euler();

  if (chimneys) {
    kept.forEach((c, i) => {
      const hJitter = 0.75 + hash01(c.bi, c.edgeSeed * 3 + 1) * 0.65; // 1.5-2.5m-ish stack height variance via scale
      const leanX = (hash01(c.bi, c.edgeSeed * 3 + 2) - 0.5) * 0.12;
      const leanZ = (hash01(c.bi, c.edgeSeed * 3 + 3) - 0.5) * 0.12;
      const yaw = hash01(c.bi, c.edgeSeed * 3 + 4) * Math.PI * 2;
      pos.set(c.x, c.y, c.z);
      euler.set(leanX, yaw, leanZ);
      quat.setFromEuler(euler);
      scale.set(1, hJitter, 1);
      m.compose(pos, quat, scale);
      chimneys.setMatrixAt(i, m);
    });
    chimneys.instanceMatrix.needsUpdate = true;
    chimneys.name = 'chimneys';
    scene.add(chimneys);
  }

  // TV aerials: sparser, one per qualifying building (not per chimney), near
  // the roof — reuses the SAME per-building street-distance gate.
  const aerialCandidates = [];
  buildings.forEach((building, bi) => {
    const fp = building && building.footprint;
    if (!fp || fp.length < 3) return;
    if ((hash32(bi, 5153) % 1000) / 1000 >= AERIAL_CHANCE) return;
    let cx = 0, cz = 0;
    for (const p of fp) { cx += p[0]; cz += p[1]; }
    cx /= fp.length; cz /= fp.length;
    const near = nearest(cx, cz);
    if (!near || near.distance > MAX_STREET_DIST) return;
    const buildingHeightM = Math.max(1, building.levels || 1) * STOREY_M;
    // Perch it toward whichever footprint vertex is nearest the street, so
    // it silhouettes against the sky from the player's side, not the back.
    let best = fp[0], bestD = Infinity;
    for (const p of fp) {
      const d = near.point ? Math.hypot(p[0] - near.point[0], p[1] - near.point[1]) : 0;
      if (d < bestD) { bestD = d; best = p; }
    }
    aerialCandidates.push({ x: best[0], z: best[1], y: buildingHeightM, bi });
  });

  const aerialGeo = makeAerialGeometry();
  const aerialMat = new THREE.MeshLambertMaterial({ color: 0x1c1c1c });
  const aerials = aerialCandidates.length ? new THREE.InstancedMesh(aerialGeo, aerialMat, aerialCandidates.length) : null;
  if (aerials) {
    aerialCandidates.forEach((c, i) => {
      const leanX = (hash01(c.bi, 71) - 0.5) * 0.3;
      const leanZ = (hash01(c.bi, 73) - 0.5) * 0.3;
      const yaw = hash01(c.bi, 79) * Math.PI * 2;
      pos.set(c.x, c.y, c.z);
      euler.set(leanX, yaw, leanZ);
      quat.setFromEuler(euler);
      scale.set(1, 1, 1);
      m.compose(pos, quat, scale);
      aerials.setMatrixAt(i, m);
    });
    aerials.instanceMatrix.needsUpdate = true;
    aerials.name = 'aerials';
    scene.add(aerials);
  }

  return { chimneys, aerials, count: kept.length, aerialCount: aerialCandidates.length, dropped };
}
