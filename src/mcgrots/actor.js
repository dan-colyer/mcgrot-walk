// The actor: locomotion, shared. G0, refactored for G1.
//
// THE SPLIT MATTERS FOR THE BAKE-OFF. G1 compares three ways of drawing and
// posing a body — skinned, segmented, hinged flats. If each candidate also
// brought its own walking code, the comparison would be measuring pathfinding
// and turn rates as much as animation. So everything about WHERE the actor is
// lives here and is identical for all three; a candidate supplies only a BODY:
//
//   makeBody() -> {
//     group,                        THREE.Object3D, feet at y=0, 1 unit tall
//     pose(state, phase, dt),       state: 'idle'|'walk'|'sit'|'listen'
//                                   phase: metres walked, for foot-synced gait
//     lookAt(yaw),                  head turn, radians relative to body
//     stats(),                      { drawCalls, triangles, bytes }
//     ready,                        Promise, or null if synchronous
//   }
//
// `phase` is DISTANCE, not time. A gait driven by the clock slides its feet
// whenever speed changes; driven by distance it cannot, and every candidate
// gets that for free rather than each having to remember it.

import * as THREE from 'three';

const WALK_SPEED = 1.35;      // m/s. Ordinary pace; the walk is the thing being
                              // watched, so it must not be brisk.
const TURN_RATE = 4.2;        // rad/s toward the direction of travel
const ARRIVE_EPS = 0.05;      // m — close enough to be parked

export function makeActor({ body, height = 1.72 }) {
  const group = new THREE.Group();
  group.name = 'actor';

  const bodyGroup = body.group;
  bodyGroup.scale.setScalar(height);
  group.add(bodyGroup);

  let state = 'idle';
  let target = null;
  let targetYaw = 0;
  let phase = 0;              // metres walked, monotonic
  let headYaw = 0;

  const api = {
    group,
    height,
    body,
    ready: body.ready || Promise.resolve(),

    get state() { return state; },
    get walking() { return target !== null; },
    get phase() { return phase; },

    setState(name) { state = name; },

    // Where the head points, relative to the body's own facing. G6 drives this
    // from whoever is reading; G1 uses it to make "turn to the speaker"
    // comparable across candidates, since a head-turn is the one motion a
    // hinged flat may not be able to do at all.
    lookAt(yaw) { headYaw = yaw; },

    snapTo(x, z, yaw) {
      group.position.set(x, 0, z);
      if (yaw !== undefined) { group.rotation.y = yaw; targetYaw = yaw; }
      target = null;
    },

    walkTo(x, z, yaw) {
      target = { x, z, yaw };
      state = 'walk';
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
          phase += step;
          targetYaw = Math.atan2(dx, dz);
        }
      }

      let d = targetYaw - group.rotation.y;
      while (d > Math.PI) d -= Math.PI * 2;
      while (d < -Math.PI) d += Math.PI * 2;
      group.rotation.y += Math.min(Math.abs(d), TURN_RATE * dt) * Math.sign(d);

      body.pose(state, phase, dt);
      body.lookAt(headYaw);
    },

    stats: () => body.stats(),
  };

  return api;
}

// Draw calls and triangles for any body, counted the same way for all three
// candidates. Counting them per-candidate invites each to count differently.
export function countStats(object3d, bytes = 0) {
  let drawCalls = 0, triangles = 0;
  object3d.traverse((o) => {
    if (!o.isMesh || !o.visible) return;
    drawCalls++;
    const g = o.geometry;
    if (g?.index) triangles += g.index.count / 3;
    else if (g?.attributes?.position) triangles += g.attributes.position.count / 3;
  });
  return { drawCalls, triangles, bytes };
}
