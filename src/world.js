// Builds the McGrot Walk scene from OSM-derived leith.json data.
//
// leith.json shape: { origin: {lat,lon}, streetPaths: [[[x,z],...],...],
// buildings: [{footprint:[[x,z],...], levels:N, name:string|null},...] }
// Local metres, origin at the Foot of the Walk (north end), +z runs south.

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { makeTarmacTexture, makePavementTexture, makeEarthTexture, makeGardenTexture, TARMAC_METRES, PAVEMENT_METRES, EARTH_METRES, hash2, fbmP, finishTexture } from './road.js';
import { buildStreetChain, makeNearestStreetPoint } from './frontage.js';

const CARRIAGEWAY_HALF_WIDTH = 7; // 14m carriageway
const PAVEMENT_WIDTH = 3; // each side
const RIBBON_HALF_WIDTH = CARRIAGEWAY_HALF_WIDTH + PAVEMENT_WIDTH; // 10m
const STREET_Y = 0.03; // just above ground plane to avoid z-fighting
const LEVEL_HEIGHT = 3.2;

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

// Metres of wall covered by one repeat of the base stone texture. ExtrudeGeometry's
// default UV generator writes RAW METRE coordinates (shape x/y for U, extrusion
// depth for V — see the note above extrudeBuilding), so repeat = 1/STONE_METRES
// tiles it consistently in world units with no per-building UV work needed.
const STONE_METRES = 4;

// Every wall the shopfront system doesn't reach (beyond STREET_RANGE, occluded
// behind a frontage, a back gable) used to show this mesh's raw MeshLambertMaterial
// vertexColor — a dead-flat khaki/olive/grey slab, the single biggest defect
// category in the D0 audit (register #1 etc) and the "corner-infill wedge" (#4) is
// the same mesh glimpsed as a sliver. A coursed masonry bake, multiplied by the
// existing per-building vertexColor tint, degrades every uncovered wall to stone
// instead — cheap (one shared 256px canvas, tiled) and needs no new geometry.
function makeStoneTexture() {
  const S = 256;
  const P = 16; // noise cells per STONE_METRES tile
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = S;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(S, S);
  const px = img.data;

  const COURSES = 13; // ~0.3m coursing across a 4m tile
  const courseH = S / COURSES;

  for (let y = 0; y < S; y++) {
    const course = Math.floor(y / courseH);
    const inCourse = y - course * courseH;
    const joint = inCourse < 2; // mortar line at the top of each course
    for (let x = 0; x < S; x++) {
      const nx = (x / S) * P, ny = (y / S) * P;

      // Neutral ashlar grey — multiplied by the building's own vertexColor tint,
      // so it must stay light enough not to crush that tint toward black.
      let r = 150, g = 146, b = 134;

      const drift = fbmP(nx, ny, P, 4, 61) - 0.5;
      r += drift * 34; g += drift * 32; b += drift * 28;

      // Per-block tone: offset the coursing rows so vertical joints don't align
      // into a grid (a real ashlar course is staggered, not a brick wall).
      const blockSeed = Math.floor((x + course * 37) / (S / 5));
      const blockTone = (hash2(blockSeed, course, 17) - 0.5) * 22;
      r += blockTone; g += blockTone; b += blockTone;

      if (joint) {
        r *= 0.62; g *= 0.62; b *= 0.60;
      }

      // Weathering: dark grime streaks running down the wall, heavier than the
      // road textures' grit since this is a vertical surface that never washes.
      const grime = fbmP(nx * 0.35, ny * 0.9 + 4, P, 3, 83);
      if (grime > 0.56) {
        const k = Math.min(1, (grime - 0.56) * 4.5);
        r *= 1 - 0.35 * k; g *= 1 - 0.33 * k; b *= 1 - 0.28 * k;
      }

      const grit = hash2(x, y, 97);
      const chip = grit > 0.92 ? (grit - 0.92) * 200 : 0;
      r += chip; g += chip; b += chip * 0.9;

      const i = (y * S + x) * 4;
      px[i] = Math.max(0, Math.min(255, r));
      px[i + 1] = Math.max(0, Math.min(255, g));
      px[i + 2] = Math.max(0, Math.min(255, b));
      px[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return finishTexture(canvas, [1 / STONE_METRES, 1 / STONE_METRES]);
}

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
  const material = new THREE.MeshLambertMaterial({
    vertexColors: true,
    flatShading: true,
    map: makeStoneTexture(),
  });
  const mesh = new THREE.Mesh(merged, material);
  mesh.name = 'buildings'; // debug.js's geomHash looks this mesh up by name
  return mesh;
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
    // UV kept (not deleted): ExtrudeGeometry's default generator writes it in raw
    // world metres, which is exactly what the stone texture's repeat is tuned for.
    return geo;
  } catch (err) {
    return null;
  }
}

// Deterministic hash so re-loading gives stable per-building colours.
// Exported for src/gables.js (D7): the gable dressing mesh is a SEPARATE
// mesh/material from the buildings mesh, but tints its baked canvas with
// the SAME per-building colour so a gable reads as more of the same wall,
// not a different building glued on.
export function pickBuildingColor(idx, building) {
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
