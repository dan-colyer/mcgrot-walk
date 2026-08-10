// The control body: a capsule that does not animate. G1.
//
// This is G0's placeholder, kept deliberately and entered in the bake-off as
// the CONTROL. Every acceptance measurement names a control that isolates the
// system's own contribution (CLAUDE.md), and here that means: whatever a
// candidate's walk is worth, it is worth it against a figure that just slides.
// If a candidate's frame strip is not obviously better than this one's, the
// candidate has not earned its cost.
//
// It also fixes the floor for the cost table. 2 draw calls and ~200 triangles
// is what the scene costs with no character work at all.

import * as THREE from 'three';
import { countStats } from '../actor.js';

export function makeCapsuleBody({ color = 0xb2a68a } = {}) {
  const group = new THREE.Group();
  group.name = 'body:capsule';

  const radius = 0.28 / 1.72;          // the body is authored at unit height
  const bodyH = 1 - radius * 2;

  const mesh = new THREE.Mesh(
    new THREE.CapsuleGeometry(radius, bodyH, 4, 8),
    new THREE.MeshLambertMaterial({ color, flatShading: true }),
  );
  mesh.position.y = 0.5;
  group.add(mesh);

  // A nose, so facing is legible in a capture. Without it a capsule's yaw is
  // unreadable and "did it turn to the speaker" cannot be judged by eye.
  const nose = new THREE.Mesh(
    new THREE.ConeGeometry(0.052, 0.13, 6),
    new THREE.MeshLambertMaterial({ color: 0xd8c9a4, flatShading: true }),
  );
  nose.rotation.x = Math.PI / 2;
  nose.position.set(0, 0.86, radius + 0.03);
  group.add(nose);

  const head = new THREE.Group();
  head.position.y = 0;
  // The nose rides the head group so lookAt() has something to turn.
  head.add(nose);
  group.add(head);

  let sit = 0;

  return {
    group,
    ready: null,
    pose(state) {
      sit = state === 'sit' ? 0.24 : 0;
      mesh.position.y = 0.5 - sit;
      nose.position.y = 0.86 - sit;
    },
    lookAt(yaw) { head.rotation.y = yaw; },
    stats: () => countStats(group, 0),
  };
}
