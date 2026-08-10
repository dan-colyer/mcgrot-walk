// The actor interface, and G0's placeholder implementation. Deliverable 4.
//
// THIS FILE IS THE CONTRACT G1 COMPETES AGAINST. The animation bake-off runs
// three candidates — skinned, segmented, hinged flats — and the only way to
// compare them fairly is for the harness to swap one for another without
// knowing which it has. So the shape below is fixed and the capsule is
// disposable:
//
//   makeActor(opts) -> {
//     group,                  THREE.Object3D, feet at y=0
//     height,                 metres, for camera framing
//     setState(name),         'idle' | 'walk' | 'sit' | 'listen'
//     update(dt, clock),      advance; clock is wall-clock seconds
//     stats(),                { drawCalls, triangles, bytes }
//   }
//
// Why the placeholder is a capsule and not something nicer: G1 judges the
// candidates against each other, and a flattering stand-in would bias that. It
// exists to prove the walk, the anchor transitions and the camera framing work
// before anything is animated at all.
//
// WHAT G0 DELIBERATELY DOES NOT PROVE. There is no rig anywhere in this
// project and none of the character meshes carry one — all seven glbs are
// static Trellis output, no skins, no joints, no animations. A capsule that
// slides between anchors says nothing about whether a body can be made to walk
// convincingly. That is exactly the question G1 exists to answer, and nothing
// here should be read as evidence about it.

import * as THREE from 'three';

const WALK_SPEED = 1.35;      // m/s. Ordinary walking pace; the walk is the
                              // thing being watched, so it must not be brisk.
const TURN_RATE = 4.2;        // rad/s toward the direction of travel
const ARRIVE_EPS = 0.05;      // m — close enough to be parked

export function makeActor({ height = 1.72, color = 0xb2a68a } = {}) {
  const group = new THREE.Group();
  group.name = 'actor';

  const radius = 0.28;
  const body = new THREE.Mesh(
    new THREE.CapsuleGeometry(radius, Math.max(0.1, height - radius * 2), 4, 8),
    new THREE.MeshLambertMaterial({ color, flatShading: true }),
  );
  body.position.y = height / 2;
  group.add(body);

  // A nose, so facing is legible in a capture. Without it a capsule's yaw is
  // unreadable and "did the actor turn to the speaker" is unfalsifiable by eye.
  const nose = new THREE.Mesh(
    new THREE.ConeGeometry(0.09, 0.22, 6),
    new THREE.MeshLambertMaterial({ color: 0xd8c9a4, flatShading: true }),
  );
  nose.rotation.x = Math.PI / 2;
  nose.position.set(0, height * 0.86, radius + 0.06);
  group.add(nose);

  let state = 'idle';
  let target = null;          // {x, z} being walked to, or null
  let targetYaw = 0;
  let sitOffset = 0;

  const api = {
    group,
    height,

    get state() { return state; },
    get walking() { return target !== null; },

    setState(name) {
      state = name;
      // Sitting is a 0.42 m drop in G0. A real implementation animates it;
      // the placeholder only needs the camera's look target to land right.
      sitOffset = name === 'sit' ? 0.42 : 0;
    },

    // Teleport. Used by the gate suite so a capture is deterministic without
    // waiting out a walk, and by the debug API.
    snapTo(x, z, yaw) {
      group.position.set(x, 0, z);
      if (yaw !== undefined) { group.rotation.y = yaw; targetYaw = yaw; }
      target = null;
    },

    walkTo(x, z, yaw) {
      target = { x, z, yaw };
      state = 'walk';
      sitOffset = 0;
    },

    update(dt) {
      if (target) {
        const dx = target.x - group.position.x;
        const dz = target.z - group.position.z;
        const dist = Math.hypot(dx, dz);

        if (dist <= ARRIVE_EPS) {
          group.position.x = target.x;
          group.position.z = target.z;
          targetYaw = target.yaw ?? group.rotation.y;
          target = null;
          state = 'idle';
        } else {
          const step = Math.min(dist, WALK_SPEED * dt);
          group.position.x += (dx / dist) * step;
          group.position.z += (dz / dist) * step;
          targetYaw = Math.atan2(dx, dz);
        }
      }

      // Shortest-arc turn toward the target yaw.
      let d = targetYaw - group.rotation.y;
      while (d > Math.PI) d -= Math.PI * 2;
      while (d < -Math.PI) d += Math.PI * 2;
      const turn = Math.min(Math.abs(d), TURN_RATE * dt) * Math.sign(d);
      group.rotation.y += turn;

      body.position.y = height / 2 - sitOffset;
      nose.position.y = height * 0.86 - sitOffset;
    },

    stats() {
      let drawCalls = 0, triangles = 0;
      group.traverse((o) => {
        if (!o.isMesh) return;
        drawCalls++;
        const g = o.geometry;
        if (g?.index) triangles += g.index.count / 3;
        else if (g?.attributes?.position) triangles += g.attributes.position.count / 3;
      });
      return { drawCalls, triangles, bytes: 0 };
    },
  };

  return api;
}
