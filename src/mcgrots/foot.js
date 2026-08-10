// The Foot, blocked out. G0 deliverable 2.
//
// Extruded massing from the real OSM footprints within MASSING_RADIUS of the
// junction, plus the ground and a placeholder plinth where Queen Victoria
// goes. This is siting reference for the camera shots — G3 dresses it.
//
// It deliberately reimplements the extrusion rather than importing
// src/world.js. world.js is 580 lines that also build street ribbons, the
// chainage polyline, terrain and the collision registry for a 1617 m street,
// and it is part of the PAUSED game. Importing it to get one loop would drag
// all of that in and couple McGrot's to a module nobody is allowed to touch.
// LEVEL_HEIGHT is shared through site.js so the two cannot drift.

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { MASSING_RADIUS, LEVEL_HEIGHT, STATUE } from './site.js';

// leith.json is the only asset G0 needs. Honours the single-file build's
// `window.MCGROT_ASSETS` convention (src/assets.js) so the artifact path stays
// open, without importing the street's loader and its six other fetches.
export async function loadFoot() {
  if (typeof window !== 'undefined' && window.MCGROT_ASSETS?.leith) {
    return window.MCGROT_ASSETS.leith;
  }
  const res = await fetch('assets/leith.json');
  if (!res.ok) throw new Error(`leith.json ${res.status}`);
  return res.json();
}

function extrude(footprint, levels) {
  if (!footprint || footprint.length < 3) return null;
  const height = Math.max(1, levels || 1) * LEVEL_HEIGHT;

  const shape = new THREE.Shape();
  // Negate z into the shape's local Y so that after rotateX(-90°) world Z
  // comes out un-mirrored. Same reasoning as world.js's extrudeBuilding —
  // getting this wrong mirrors the whole junction and it is not obvious by eye.
  shape.moveTo(footprint[0][0], -footprint[0][1]);
  for (let i = 1; i < footprint.length; i++) shape.lineTo(footprint[i][0], -footprint[i][1]);
  shape.closePath();

  const geo = new THREE.ExtrudeGeometry(shape, { depth: height, bevelEnabled: false, curveSegments: 1 });
  geo.rotateX(-Math.PI / 2);
  return geo;
}

export function buildFoot(leith) {
  const group = new THREE.Group();
  group.name = 'foot';

  // Ground. Big enough to run past every composed shot's horizon.
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(600, 600),
    new THREE.MeshLambertMaterial({ color: 0x3a352a }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.name = 'ground';
  group.add(ground);

  // Massing. One merged mesh: 41 buildings as 41 draw calls would be 41 draw
  // calls spent on reference geometry.
  const inRadius = leith.buildings.filter((b) =>
    b.footprint?.some((p) => Math.hypot(p[0], p[1]) <= MASSING_RADIUS));

  const geos = [];
  for (const b of inRadius) {
    const g = extrude(b.footprint, b.levels);
    if (g) geos.push(g);
  }

  let buildings = null;
  if (geos.length) {
    buildings = new THREE.Mesh(
      mergeGeometries(geos),
      new THREE.MeshLambertMaterial({ color: 0x6b6250, flatShading: true }),
    );
    buildings.name = 'massing';
    group.add(buildings);
  }

  // Placeholder plinth. Not the statue — she is not in the OSM data (site.js).
  const plinth = new THREE.Mesh(
    new THREE.CylinderGeometry(STATUE.radius, STATUE.radius * 1.15, STATUE.plinth, 8),
    new THREE.MeshLambertMaterial({ color: 0x555049, flatShading: true }),
  );
  plinth.position.set(STATUE.x, STATUE.plinth / 2, STATUE.z);
  plinth.name = 'statue-placeholder';
  group.add(plinth);

  return { group, buildingCount: inRadius.length, ground, buildings, plinth };
}
