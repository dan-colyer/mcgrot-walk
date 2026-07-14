// Builds the McGrot Walk scene from OSM-derived leith.json data.
//
// leith.json shape: { origin: {lat,lon}, streetPaths: [[[x,z],...],...],
// buildings: [{footprint:[[x,z],...], levels:N, name:string|null},...] }
// Local metres, origin at the Foot of the Walk (north end), +z runs south.

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const CARRIAGEWAY_HALF_WIDTH = 7; // 14m carriageway
const PAVEMENT_WIDTH = 3; // each side
const RIBBON_HALF_WIDTH = CARRIAGEWAY_HALF_WIDTH + PAVEMENT_WIDTH; // 10m
const STREET_Y = 0.03; // just above ground plane to avoid z-fighting
const LEVEL_HEIGHT = 3.2;
const CHAIN_JOIN_TOLERANCE = 2; // metres, for clustering streetPath endpoints

const ASPHALT_COLOR = new THREE.Color(0x40423a);
const PAVEMENT_COLOR = new THREE.Color(0x5a574a);
// Muddy rust-brown, deliberately distinct in hue from the asphalt ribbon so
// the two don't read as one undifferentiated dark mass in the near field.
const GROUND_COLOR = 0x453a28;
// Strictly below the street ribbon (STREET_Y = 0.03) and building bases
// (y = 0) so nothing is ever coplanar with the ground — kills z-fighting.
const GROUND_Y = -0.06;
const FOG_COLOR = 0x4a5142;

const BUILDING_PALETTE = [
  0x8a8560, // sickly khaki
  0x6b6b63, // grey
  0x7a5240, // rust-brown
  0x55564f, // dark grey
  0x746f4a, // olive khaki
  0x6e5d4f, // brownish grey
  0x5f5a4a, // muddy khaki
  0x7c6a5a, // pale rust
];

export function buildWorld(leith) {
  const group = new THREE.Group();

  const streetMesh = buildStreetMeshes(leith.streetPaths);
  if (streetMesh) group.add(streetMesh);

  const buildingsMesh = buildBuildings(leith.buildings);
  if (buildingsMesh) group.add(buildingsMesh);

  group.add(buildGround(leith));
  addLighting(group);

  const streetLine = buildStreetChain(leith.streetPaths);
  const fog = new THREE.FogExp2(FOG_COLOR, 0.0095);

  return { group, streetLine, nearestStreetPoint: makeNearestStreetPoint(streetLine), fog };
}

// ---------------------------------------------------------------------------
// Street ribbons (all streetPaths rendered; not just the centreline)
// ---------------------------------------------------------------------------

function buildStreetMeshes(streetPaths) {
  const geometries = [];

  for (const path of streetPaths) {
    if (path.length < 2) continue;
    const geo = buildRibbonGeometry(path);
    if (geo) geometries.push(geo);
  }

  if (geometries.length === 0) return null;

  const merged = mergeGeometries(geometries, false);
  const material = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
  const mesh = new THREE.Mesh(merged, material);
  mesh.position.y = STREET_Y;
  return mesh;
}

function buildRibbonGeometry(path) {
  const n = path.length;
  const normals = [];

  for (let i = 0; i < n; i++) {
    const prev = path[Math.max(0, i - 1)];
    const next = path[Math.min(n - 1, i + 1)];
    const dx = next[0] - prev[0];
    const dz = next[1] - prev[1];
    const len = Math.hypot(dx, dz) || 1;
    // perpendicular in XZ plane
    normals.push([-dz / len, dx / len]);
  }

  const verts = [];
  const cols = [];
  const OFFSETS = [-RIBBON_HALF_WIDTH, -CARRIAGEWAY_HALF_WIDTH, CARRIAGEWAY_HALF_WIDTH, RIBBON_HALF_WIDTH];
  const CROSS_COLORS = [PAVEMENT_COLOR, ASPHALT_COLOR, ASPHALT_COLOR, PAVEMENT_COLOR];

  // 4 cross-section verts per sample: pavement-left, carriageway-left, carriageway-right, pavement-right
  for (let i = 0; i < n; i++) {
    const [x, z] = path[i];
    const [nx, nz] = normals[i];
    for (let k = 0; k < 4; k++) {
      verts.push(x + nx * OFFSETS[k], 0, z + nz * OFFSETS[k]);
      cols.push(CROSS_COLORS[k].r, CROSS_COLORS[k].g, CROSS_COLORS[k].b);
    }
  }

  const indices = [];
  for (let i = 0; i < n - 1; i++) {
    const b0 = i * 4;
    const b1 = (i + 1) * 4;
    // 3 quads: pavement-left, carriageway, pavement-right
    for (let q = 0; q < 3; q++) {
      const a = b0 + q;
      const b = b0 + q + 1;
      const c = b1 + q + 1;
      const d = b1 + q;
      indices.push(a, b, c, a, c, d);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

// ---------------------------------------------------------------------------
// Centreline chain: walk streetPaths end-to-end, keep the longest chain
// ---------------------------------------------------------------------------

function buildStreetChain(streetPaths) {
  const nodes = []; // { x, z }
  const nodeOfSeg = []; // [startNodeIdx, endNodeIdx] per segment
  const adjacency = []; // adjacency[nodeIdx] = [{ segIdx, otherNode }]

  function findOrAddNode(pt) {
    for (let i = 0; i < nodes.length; i++) {
      const dx = nodes[i].x - pt[0];
      const dz = nodes[i].z - pt[1];
      if (Math.hypot(dx, dz) < CHAIN_JOIN_TOLERANCE) return i;
    }
    nodes.push({ x: pt[0], z: pt[1] });
    return nodes.length - 1;
  }

  streetPaths.forEach((path, segIdx) => {
    if (path.length < 2) return;
    const a = findOrAddNode(path[0]);
    const b = findOrAddNode(path[path.length - 1]);
    nodeOfSeg[segIdx] = [a, b];
    (adjacency[a] ??= []).push({ segIdx, otherNode: b });
    (adjacency[b] ??= []).push({ segIdx, otherNode: a });
  });

  const usedSegs = new Set();

  function walkFrom(startNode) {
    const points = [[nodes[startNode].x, nodes[startNode].z]];
    let curNode = startNode;
    while (true) {
      const options = (adjacency[curNode] || []).filter((o) => !usedSegs.has(o.segIdx));
      if (options.length === 0) break;
      const { segIdx, otherNode } = options[0];
      usedSegs.add(segIdx);
      const path = streetPaths[segIdx];
      const [a] = nodeOfSeg[segIdx];
      const seq = a === curNode ? path : [...path].reverse();
      for (let i = 1; i < seq.length; i++) points.push(seq[i]);
      curNode = otherNode;
    }
    return points;
  }

  function chainLength(pts) {
    let len = 0;
    for (let i = 1; i < pts.length; i++) {
      len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
    }
    return len;
  }

  const chains = [];

  // Start from dead-ends / junctions first (degree != 2), then mop up loops.
  const startCandidates = nodes.map((_, i) => i).filter((i) => (adjacency[i] || []).length !== 2);
  for (const s of startCandidates) {
    const before = usedSegs.size;
    const pts = walkFrom(s);
    if (usedSegs.size > before) chains.push(pts);
  }
  for (let i = 0; i < nodes.length; i++) {
    const hasUnused = (adjacency[i] || []).some((o) => !usedSegs.has(o.segIdx));
    if (hasUnused) chains.push(walkFrom(i));
  }

  chains.sort((a, b) => chainLength(b) - chainLength(a));
  const longest = chains[0] || [];

  // Orient north (small z) to south (large z) for predictable spawn/traversal.
  if (longest.length > 1 && longest[0][1] > longest[longest.length - 1][1]) {
    longest.reverse();
  }
  return longest;
}

function makeNearestStreetPoint(streetLine) {
  return function nearestStreetPoint(x, z) {
    let best = null;
    let bestDist = Infinity;
    let bestTangent = null;
    for (let i = 0; i < streetLine.length - 1; i++) {
      const [ax, az] = streetLine[i];
      const [bx, bz] = streetLine[i + 1];
      const dx = bx - ax;
      const dz = bz - az;
      const lenSq = dx * dx + dz * dz;
      let t = lenSq > 0 ? ((x - ax) * dx + (z - az) * dz) / lenSq : 0;
      t = Math.max(0, Math.min(1, t));
      const px = ax + t * dx;
      const pz = az + t * dz;
      const dist = Math.hypot(x - px, z - pz);
      if (dist < bestDist) {
        bestDist = dist;
        best = [px, pz];
        // The closest segment's direction. Callers need it to tell a frontage
        // that runs ALONG the street from a chamfered corner that cuts across
        // it at ~45° — the real Leith Walk junctions (Robbie's, the Harp &
        // Castle) put the pub door on that chamfer.
        const len = Math.sqrt(lenSq);
        bestTangent = len > 0 ? [dx / len, dz / len] : [0, 1];
      }
    }
    return { point: best, distance: bestDist, tangent: bestTangent };
  };
}

// ---------------------------------------------------------------------------
// Buildings: extrude footprints, merge into a single geometry
// ---------------------------------------------------------------------------

function buildBuildings(buildings) {
  const geometries = [];
  let skipped = 0;

  buildings.forEach((building, idx) => {
    const geo = extrudeBuilding(building, idx);
    if (geo) geometries.push(geo);
    else skipped++;
  });

  if (geometries.length === 0) return null;
  if (skipped > 0) {
    console.warn(`[world] skipped ${skipped}/${buildings.length} buildings with bad footprints`);
  }

  const merged = mergeGeometries(geometries, false);
  const material = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
  return new THREE.Mesh(merged, material);
}

function extrudeBuilding(building, idx) {
  const { footprint, levels } = building;
  if (!footprint || footprint.length < 3) return null;

  const height = Math.max(1, (levels || 1)) * LEVEL_HEIGHT;

  try {
    const shape = new THREE.Shape();
    // Negate z for the shape's local Y so that, after rotateX(-90deg) below,
    // world Z comes out un-mirrored (see world.js notes in the brief write-up).
    shape.moveTo(footprint[0][0], -footprint[0][1]);
    for (let i = 1; i < footprint.length; i++) {
      shape.lineTo(footprint[i][0], -footprint[i][1]);
    }
    shape.closePath();

    const geo = new THREE.ExtrudeGeometry(shape, { depth: height, bevelEnabled: false, curveSegments: 1 });
    geo.rotateX(-Math.PI / 2);

    const color = pickBuildingColor(idx, building);
    const count = geo.attributes.position.count;
    const cols = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    geo.deleteAttribute('uv');
    return geo;
  } catch (err) {
    return null;
  }
}

// Deterministic hash so re-loading gives stable per-building colours.
function pickBuildingColor(idx, building) {
  const seed = Math.abs(hashCode(`${idx}:${building.footprint[0][0]}:${building.footprint[0][1]}`));
  const base = new THREE.Color(BUILDING_PALETTE[seed % BUILDING_PALETTE.length]);
  const hsl = { h: 0, s: 0, l: 0 };
  base.getHSL(hsl);
  const jitter = ((seed % 17) / 17 - 0.5) * 0.12; // +/-6% lightness
  const color = new THREE.Color();
  color.setHSL(hsl.h, hsl.s, Math.min(0.85, Math.max(0.08, hsl.l + jitter)));
  return color;
}

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

// ---------------------------------------------------------------------------
// Ground, lighting
// ---------------------------------------------------------------------------

function buildGround(leith) {
  let minX = Infinity;
  let maxX = -Infinity;
  let minZ = Infinity;
  let maxZ = -Infinity;
  for (const b of leith.buildings) {
    for (const [x, z] of b.footprint) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (z < minZ) minZ = z;
      if (z > maxZ) maxZ = z;
    }
  }
  const pad = 400;
  const width = maxX - minX + pad * 2;
  const depth = maxZ - minZ + pad * 2;
  const cx = (minX + maxX) / 2;
  const cz = (minZ + maxZ) / 2;

  const geo = new THREE.PlaneGeometry(width, depth);
  geo.rotateX(-Math.PI / 2);
  const material = new THREE.MeshLambertMaterial({ color: GROUND_COLOR });
  const mesh = new THREE.Mesh(geo, material);
  mesh.position.set(cx, GROUND_Y, cz);
  return mesh;
}

function addLighting(group) {
  // Overcast hemisphere fill, raised from the Phase 2 level so the near
  // field (street/ground right around the player) reads instead of
  // crushing to black — still grim, not daylight.
  const hemi = new THREE.HemisphereLight(0x8b93a0, 0x3a3324, 3.9);
  group.add(hemi);

  const sun = new THREE.DirectionalLight(0xcfd8e8, 1.15);
  sun.position.set(-200, 300, 150);
  sun.castShadow = false;
  group.add(sun);

  // Flat fill so Lambert surfaces (coats, poles, debris) never crush fully
  // to black outside an NPC's spotlight pool or the player's torch.
  const ambient = new THREE.AmbientLight(0x4c4838, 1.4);
  group.add(ambient);
}

// ---------------------------------------------------------------------------
// Player-attached "dying torch" — a very subtle short-range point light so
// the immediate foreground is never void. Caller must add `camera` to the
// scene graph (e.g. `scene.add(camera)`) for this child light to render.
// ---------------------------------------------------------------------------

const TORCH_COLOR = 0xff8a4a;
const TORCH_BASE_INTENSITY = 18;
const TORCH_FLICKER_AMOUNT = 5;
const TORCH_DISTANCE = 6.5;

export function createPlayerTorch(camera) {
  const light = new THREE.PointLight(TORCH_COLOR, TORCH_BASE_INTENSITY, TORCH_DISTANCE, 2);
  light.position.set(0.15, -0.15, 0.1);
  camera.add(light);

  function update(time) {
    // Cheap flicker from a few off-frequency sines — no per-frame allocations.
    const n = Math.sin(time * 11.3) * 0.5 + Math.sin(time * 27.1) * 0.3 + Math.sin(time * 4.7) * 0.2;
    light.intensity = TORCH_BASE_INTENSITY + n * TORCH_FLICKER_AMOUNT * 0.3333;
  }

  return { light, update };
}
