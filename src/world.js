// Builds the McGrot Walk scene from OSM-derived leith.json data.
//
// leith.json shape: { origin: {lat,lon}, streetPaths: [[[x,z],...],...],
// buildings: [{footprint:[[x,z],...], levels:N, name:string|null},...] }
// Local metres, origin at the Foot of the Walk (north end), +z runs south.

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { makeTarmacTexture, makePavementTexture, makeEarthTexture, makeGardenTexture, TARMAC_METRES, PAVEMENT_METRES, EARTH_METRES } from './road.js';

const CARRIAGEWAY_HALF_WIDTH = 7; // 14m carriageway
const PAVEMENT_WIDTH = 3; // each side
const RIBBON_HALF_WIDTH = CARRIAGEWAY_HALF_WIDTH + PAVEMENT_WIDTH; // 10m
const STREET_Y = 0.03; // just above ground plane to avoid z-fighting
const LEVEL_HEIGHT = 3.2;
const CHAIN_JOIN_TOLERANCE = 2; // metres, for clustering streetPath endpoints

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
  group.add(buildGardenIsland());
  addLighting(group);

  const streetLine = buildStreetChain(leith.streetPaths);
  const fog = new THREE.FogExp2(FOG_COLOR, 0.0095);

  return { group, streetLine, nearestStreetPoint: makeNearestStreetPoint(streetLine), fog };
}

// ---------------------------------------------------------------------------
// Street ribbons (all streetPaths rendered; not just the centreline)
// ---------------------------------------------------------------------------

// Carriageway and pavement are split into two meshes because they need two
// different tiling textures, and a mesh has one material. Two draw calls; the
// vertex-colour ribbon this replaces was one flat grey slab and read as lino.
function buildStreetMeshes(streetPaths) {
  const road = [];
  const paving = [];

  for (const path of streetPaths) {
    if (path.length < 2) continue;
    const built = buildRibbonGeometry(path);
    if (!built) continue;
    road.push(built.road);
    paving.push(built.paving);
  }

  if (road.length === 0) return null;

  const group = new THREE.Group();
  group.position.y = STREET_Y;

  group.add(new THREE.Mesh(
    mergeGeometries(road, false),
    new THREE.MeshLambertMaterial({ map: makeTarmacTexture() })
  ));
  group.add(new THREE.Mesh(
    mergeGeometries(paving, false),
    new THREE.MeshLambertMaterial({ map: makePavementTexture() })
  ));

  return group;
}

// One strip of quads per surface. The V coordinate is driven by CUMULATIVE
// DISTANCE IN METRES along the path, not by vertex index — index-based UVs
// would stretch the tarmac across long straights and crush it round the bends,
// smearing one texture over the full 1,617m of the Walk.
function buildRibbonGeometry(path) {
  const n = path.length;
  const normals = [];
  const dists = [];

  let acc = 0;
  for (let i = 0; i < n; i++) {
    const prev = path[Math.max(0, i - 1)];
    const next = path[Math.min(n - 1, i + 1)];
    const dx = next[0] - prev[0];
    const dz = next[1] - prev[1];
    const len = Math.hypot(dx, dz) || 1;
    normals.push([-dz / len, dx / len]); // perpendicular in XZ
    if (i > 0) acc += Math.hypot(path[i][0] - path[i - 1][0], path[i][1] - path[i - 1][1]);
    dists.push(acc);
  }

  // A strip spanning two cross-section offsets, with UVs in texture repeats.
  const strip = (offA, offB, metres) => {
    const verts = [];
    const uvs = [];
    const indices = [];
    const width = Math.abs(offB - offA);

    for (let i = 0; i < n; i++) {
      const [x, z] = path[i];
      const [nx, nz] = normals[i];
      const v = dists[i] / metres;
      verts.push(x + nx * offA, 0, z + nz * offA);
      verts.push(x + nx * offB, 0, z + nz * offB);
      uvs.push(0, v, width / metres, v);
    }
    for (let i = 0; i < n - 1; i++) {
      const a = i * 2, b = i * 2 + 1, c = (i + 1) * 2, d = (i + 1) * 2 + 1;
      indices.push(a, b, d, a, d, c);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return geo;
  };

  return {
    road: strip(-CARRIAGEWAY_HALF_WIDTH, CARRIAGEWAY_HALF_WIDTH, TARMAC_METRES),
    paving: mergeGeometries([
      strip(-RIBBON_HALF_WIDTH, -CARRIAGEWAY_HALF_WIDTH, PAVEMENT_METRES),
      strip(CARRIAGEWAY_HALF_WIDTH, RIBBON_HALF_WIDTH, PAVEMENT_METRES),
    ], false),
  };
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
  // Mottled earth/scrub texture in the same palette as the old flat colour —
  // the flat plane read as a smooth mud dune wherever it showed between the
  // road ribbons and the buildings.
  const tex = makeEarthTexture();
  tex.repeat.set(width / EARTH_METRES, depth / EARTH_METRES);
  const material = new THREE.MeshLambertMaterial({ map: tex });
  const mesh = new THREE.Mesh(geo, material);
  mesh.position.set(cx, GROUND_Y, cz);
  return mesh;
}

// The Elm Row garden island — the raised strip of gardens between the main
// carriageway and the set-back service terrace (V&C, Greggs, Joseph Pearce).
// Coordinates hand-derived from the terrace footprints (b805 → b433); the
// strip half-fills every hero shot of that terrace, so it gets a bespoke
// overgrown-gardens decal rather than bare earth.
function buildGardenIsland() {
  const geo = new THREE.PlaneGeometry(80, 14);
  geo.rotateX(-Math.PI / 2);
  const dirx = -0.483, dirz = 0.876; // Elm Row's street heading
  geo.rotateY(Math.atan2(-dirz, dirx));
  const mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({
    map: makeGardenTexture(),
    transparent: true,
    depthWrite: false,
  }));
  mesh.position.set(-719, 0.02, 1303); // above ground (-0.06), below street (0.03)
  mesh.name = 'elm-row-gardens';

  // A flat decal at a grazing angle reads as painted lawn no matter what's in
  // the texture — the overgrowth needs VOLUME. Two dozen squashed-sphere
  // bushes scattered on the strip, merged into one draw call.
  let s = 0xe1a20; // seeded: identical scatter every reload
  const rand = () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const bushGeos = [];
  for (let i = 0; i < 26; i++) {
    const along = (rand() - 0.5) * 74;
    const across = (rand() - 0.5) * 10;
    const g = new THREE.SphereGeometry(1, 6, 4);
    const h = 0.5 + rand() * 1.3;
    g.scale(0.9 + rand() * 1.6, h, 0.9 + rand() * 1.6);
    g.rotateY(rand() * Math.PI);
    g.translate(
      -719 + dirx * along - dirz * across,
      h * 0.55, // partly buried so the silhouette is a mound, not a ball
      1303 + dirz * along + dirx * across
    );
    bushGeos.push(g);
  }
  const bushes = new THREE.Mesh(
    mergeGeometries(bushGeos),
    new THREE.MeshLambertMaterial({ color: 0x2e3820 })
  );
  bushes.name = 'elm-row-bushes';
  const group = new THREE.Group();
  group.add(mesh, bushes);
  return group;
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
