// Queen Victoria at the Foot — G3b.
//
// The repo gives us the landmark, its date and its place, but no survey
// dimensions or orientation. This is therefore authored low-poly scene
// geometry, following the brief's seated-figure direction without pretending
// to be a measured reconstruction. Keep the footprint at STATUE.radius: the
// camera composition was deliberately measured around it.

import * as THREE from 'three';
import { STATUE } from './site.js';

const stone = new THREE.MeshLambertMaterial({ color: 0x746d62, flatShading: true });
const stoneDark = new THREE.MeshLambertMaterial({ color: 0x514c45, flatShading: true });
const bronze = new THREE.MeshLambertMaterial({ color: 0x675f56, flatShading: true });
const bronzeDark = new THREE.MeshLambertMaterial({ color: 0x4d4842, flatShading: true });

function mesh(geometry, material, name) {
  const out = new THREE.Mesh(geometry, material);
  out.name = name;
  return out;
}

function limb(from, to, radius, material, name) {
  const direction = new THREE.Vector3().subVectors(to, from);
  const out = mesh(new THREE.CylinderGeometry(radius, radius * 1.08, direction.length(), 7), material, name);
  out.position.copy(from).add(to).multiplyScalar(0.5);
  out.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
  return out;
}

function plaque(parent, y, z, rotationY, name) {
  const out = mesh(new THREE.BoxGeometry(0.72, 0.42, 0.025), stoneDark, name);
  out.position.set(0, y, z);
  out.rotation.y = rotationY;
  parent.add(out);
}

function buildPlinth(parent) {
  const baseY = 0.12;
  const graniteBase = mesh(
    new THREE.CylinderGeometry(STATUE.radius * 1.12, STATUE.radius * 1.26, 0.24, 12),
    stone,
    'statue:granite-base',
  );
  graniteBase.position.y = baseY;
  parent.add(graniteBase);

  const pedestal = mesh(
    new THREE.CylinderGeometry(STATUE.radius * 0.82, STATUE.radius, STATUE.plinth, 8),
    stone,
    'statue:sandstone-pedestal',
  );
  pedestal.position.y = baseY + STATUE.plinth / 2;
  parent.add(pedestal);

  const cornice = mesh(
    new THREE.CylinderGeometry(STATUE.radius * 0.98, STATUE.radius * 0.86, 0.18, 8),
    stone,
    'statue:cornice',
  );
  cornice.position.y = baseY + STATUE.plinth + 0.09;
  parent.add(cornice);

  plaque(parent, baseY + STATUE.plinth * 0.55, STATUE.radius * 0.82, 0, 'statue:plaque-front');
  plaque(parent, baseY + STATUE.plinth * 0.55, -STATUE.radius * 0.82, Math.PI, 'statue:plaque-back');
  plaque(parent, baseY + STATUE.plinth * 0.55, 0, Math.PI / 2, 'statue:plaque-side-a');
  plaque(parent, baseY + STATUE.plinth * 0.55, 0, -Math.PI / 2, 'statue:plaque-side-b');

  return baseY + STATUE.plinth + 0.18;
}

function buildQueen(parent, seatY) {
  const figure = new THREE.Group();
  figure.name = 'statue:queen-victoria';

  // A compact throne and broad robe make the seated pose read at the far
  // anchor instead of collapsing into a single upright cylinder.
  const seat = mesh(new THREE.BoxGeometry(1.12, 0.25, 0.72), bronzeDark, 'statue:seat');
  seat.position.set(0, seatY + 0.12, -0.10);
  figure.add(seat);
  const back = mesh(new THREE.BoxGeometry(0.92, 1.02, 0.18), bronzeDark, 'statue:throne-back');
  back.position.set(0, seatY + 0.58, -0.39);
  figure.add(back);

  const robe = mesh(new THREE.ConeGeometry(0.72, 0.92, 8), bronze, 'statue:robe');
  robe.position.set(0, seatY + 0.66, 0.02);
  figure.add(robe);
  const torso = mesh(new THREE.CylinderGeometry(0.42, 0.54, 0.82, 8), bronze, 'statue:torso');
  torso.position.set(0, seatY + 1.25, 0.02);
  torso.rotation.z = -0.08;
  figure.add(torso);

  const shoulderY = seatY + 1.52;
  const armL = limb(new THREE.Vector3(-0.38, shoulderY, 0.02), new THREE.Vector3(-0.55, seatY + 0.79, 0.15), 0.105, bronzeDark, 'statue:arm-left');
  const armR = limb(new THREE.Vector3(0.38, shoulderY, 0.02), new THREE.Vector3(0.55, seatY + 0.79, 0.15), 0.105, bronzeDark, 'statue:arm-right');
  figure.add(armL, armR);

  // The knees project forward from the seat; the feet stay on the plinth,
  // which is enough separation to read as a seated figure in a wide shot.
  const kneeY = seatY + 0.56;
  figure.add(
    limb(new THREE.Vector3(-0.30, seatY + 0.48, 0.17), new THREE.Vector3(-0.40, kneeY, 0.47), 0.13, bronze, 'statue:leg-left'),
    limb(new THREE.Vector3(0.30, seatY + 0.48, 0.17), new THREE.Vector3(0.40, kneeY, 0.47), 0.13, bronze, 'statue:leg-right'),
    mesh(new THREE.SphereGeometry(0.15, 7, 5), bronzeDark, 'statue:shoe-left'),
    mesh(new THREE.SphereGeometry(0.15, 7, 5), bronzeDark, 'statue:shoe-right'),
  );
  figure.getObjectByName('statue:shoe-left').position.set(-0.40, seatY + 0.17, 0.52);
  figure.getObjectByName('statue:shoe-right').position.set(0.40, seatY + 0.17, 0.52);

  const head = mesh(new THREE.SphereGeometry(0.27, 8, 6), bronze, 'statue:head');
  head.position.set(0, seatY + 1.92, 0.04);
  figure.add(head);
  const hair = mesh(new THREE.SphereGeometry(0.32, 8, 6), bronzeDark, 'statue:hair');
  hair.position.set(0, seatY + 1.96, -0.09);
  figure.add(hair);
  const crown = mesh(new THREE.CylinderGeometry(0.17, 0.22, 0.11, 8), bronzeDark, 'statue:crown');
  crown.position.set(0, seatY + 2.19, 0.01);
  figure.add(crown);
  const nose = mesh(new THREE.ConeGeometry(0.055, 0.14, 6), bronze, 'statue:nose');
  nose.position.set(0, seatY + 1.94, 0.28);
  nose.rotation.x = Math.PI / 2;
  figure.add(nose);

  // Front is local +Z. The direction is an authored placeholder because the
  // repository records no survey bearing for the real statue.
  figure.rotation.y = STATUE.yaw;
  parent.add(figure);
}

export function buildStatue(scene) {
  const foot = scene.getObjectByName('foot');
  const placeholder = foot?.getObjectByName('statue-placeholder');
  if (placeholder) {
    placeholder.parent.remove(placeholder);
    placeholder.geometry.dispose();
    placeholder.material.dispose();
  }

  const statue = new THREE.Group();
  statue.name = 'statue';
  statue.position.set(STATUE.x, 0, STATUE.z);
  buildQueen(statue, buildPlinth(statue));
  scene.add(statue);
  return statue;
}
