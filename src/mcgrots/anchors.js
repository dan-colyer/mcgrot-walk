// The anchored spots, and the shot that covers each one. G0 deliverable 3.
//
// THE STAGING MODEL. Third person, fixed cameras, tap a spot and watch your
// character walk to it — point-and-click adventure staging rather than an FPS.
// Dan's call, 2026-08-10: first person "will be rubbish" for this, and the
// walk between spots is the thing worth watching.
//
// What that buys, and it is the reason the whole game is scoped the way it is:
// you author the shots, so the world only ever has to hold up from angles you
// chose. There is no "does the pitch look right from over there" problem
// because there is no over there. It also makes the gate suite finite — N
// anchors is N deterministic poses, not a bookmark tour of 1617 m.
//
// Everything here is in PITCH-LOCAL space (site.js § toWorld): +Z is the
// direction the van faces, toward the Foot; +X is to the van's right. Authoring
// in local space means the pitch can be moved or turned without re-deriving
// every camera by hand, which G3 will almost certainly want to do.

import { toWorld } from './site.js';

// Eye height for a standing figure, and for a seated one. The camera is not at
// either — it is a third-person shot — but the LOOK target is roughly chest
// height on the actor, so these set where the shot points.
const STAND_LOOK = 1.35;
const SIT_LOOK = 0.95;

// Height of the ledge a sitting anchor sits on, in metres. MEASURED off the
// shipped rig 2026-08-12 (G3c), not picked: `getWorldPosition` on the `hips`
// bone at full sit reads 0.5712 m for `rab` (SkinnedMesh, `?body=skinned`).
// The comment this replaced said 0.45 m "must agree with SEAT_DROP... 0.26 of
// a 1.72m figure" — both numbers were stale (SEAT_DROP was corrected to 0.22
// in commit `f0982fc` without this comment or constant being revisited) and,
// separately, wrong on their own terms: SEAT_DROP's drop is applied to
// `body.group.position.y`, which is the SAME group `actor.js` scales by
// `height` — so the drop lands in the PARENT's units (already metres, ~0.22m
// of real drop) while `hips`'s own rest position (0.46, rig-local) is nested
// one level DEEPER and DOES get the ×1.72 scale. A hand-derived "0.24 unit ×
// 1.72" (0.413m) is not what the hierarchy actually produces — measuring the
// live bone was the only way to get the real number. `SEAT_DROP` itself is
// untouched: it still keeps the boots on the ground (F2's separate, open
// concern), and changing it would need re-deriving that too.
export const SEAT_HEIGHT = 0.5712;

// THE SHOTS ARE DERIVED, NOT HAND-PLACED, and that is a correction rather than
// a preference. The first version authored five eye positions by hand in local
// coordinates. Four of them were wrong and one was badly wrong: the
// establishing wide landed at world (-3.2, 2.96), 5.3 m from the statue
// plinth, because "back from the pitch" in local +Z runs straight toward the
// Foot and the statue is standing in it. Hand-guessing a camera against a
// building layout you have not measured does not work, and it does not fail
// visibly until you render it.
//
// So each shot is computed from a rule instead. The camera sits BEHIND the
// actor on the line from the van, raised, looking at the midpoint between
// actor and van. That frames the actor with the van beyond for every anchor by
// construction, and it cannot overshoot into anything, because the distance is
// measured outward from a spot already known to be clear.
//
// Per-anchor knobs stay, because the shots should not all be identical:
//   dist    how far back from the actor, metres
//   height  eye height, metres
//   lateral sideways offset, metres — positive is the actor's right
//
// G3d judgement (2026-08-12) retained this rule after opening all five
// 600-frame S2 shots: `counter` is the intentional close service view,
// `wall`/`kerb` are the seated views, and `far`/`back` carry the establishing
// wides. Hand-authoring a new set to flatten the van's scale spread would
// erase those distinct jobs without fixing a pictured fault.

// id       — stable, used by the gate suite and the debug API
// label    — what a player would call it
// local    — [x, z] standing position, pitch-local
// facing   — where the actor looks while parked here, pitch-local [x, z]
// sit      — is this a sitting spot
// shot     — { dist, height, lateral } for the derivation above
const SPOTS = [
  {
    id: 'counter', label: 'At the counter',
    local: [0, 3.2], facing: [0, 0], sit: false,
    shot: { dist: 4.2, height: 2.0, lateral: 1.6 },
  },
  {
    id: 'wall', label: 'On the wall',
    local: [-5.2, 5.4], facing: [0, 1.5], sit: true,
    shot: { dist: 5.0, height: 2.0, lateral: -2.4 },
  },
  {
    id: 'kerb', label: 'On the kerb',
    local: [4.4, 6.2], facing: [-1, 1], sit: true,
    // Lateral is NEGATIVE here where the sibling seat's is positive. Measured,
    // not stylistic: at +2.2 this camera lands 1.3 m off the statue plinth and
    // the placeholder fills a third of the frame. Swinging it to the far side
    // puts 4.8 m between them.
    shot: { dist: 4.8, height: 1.9, lateral: -2.2 },
  },
  {
    // NOT "by the statue", though it was called that until the pitch was
    // turned. The quarter turn in site.js rotated the anchors around the van,
    // and this spot — authored as the one out toward the Foot — ended up
    // 17.9 m from the statue, the FURTHEST of the five. `kerb` is now the
    // nearest at 9.2 m. Renamed rather than re-sited, because the statue is a
    // placeholder box and framing a real shot on it is G3's job, once there is
    // something worth framing.
    id: 'far', label: 'Across the way',
    local: [-2.5, 11.5], facing: [0.6, -1], sit: false,
    shot: { dist: 6.0, height: 2.6, lateral: -1.5 },
  },
  {
    id: 'back', label: 'Standing back',
    // The establishing wide: furthest out, highest, everything in frame.
    local: [0.5, 9.2], facing: [0, -1], sit: false,
    shot: { dist: 8.5, height: 3.6, lateral: 0.8 },
  },
];

const VAN = toWorld(0, 0);

// World-space, resolved once at module load. Nothing here draws from a PRNG,
// so there is no seeding concern — but note the rule that will apply the
// moment anything does: a module gets its OWN generator, never a shared one.
export const ANCHORS = SPOTS.map((s) => {
  const pos = toWorld(s.local[0], s.local[1]);
  const face = toWorld(s.facing[0], s.facing[1]);

  // Unit vector from the van out to the anchor. The camera goes further along
  // it, so it is always on the far side of the actor from the van.
  let ax = pos.x - VAN.x, az = pos.z - VAN.z;
  const alen = Math.hypot(ax, az) || 1;
  ax /= alen; az /= alen;
  // Perpendicular, for the lateral offset.
  const px = -az, pz = ax;

  const lookY = s.sit ? SIT_LOOK : STAND_LOOK;

  return {
    id: s.id,
    label: s.label,
    sit: s.sit,
    pos,                                   // {x, z} where the actor stands
    yaw: Math.atan2(face.x - pos.x, face.z - pos.z),
    camera: {
      eye: {
        x: pos.x + ax * s.shot.dist + px * s.shot.lateral,
        y: s.shot.height,
        z: pos.z + az * s.shot.dist + pz * s.shot.lateral,
      },
      // Between the actor and the van, biased toward the actor so they hold
      // the frame rather than sitting at its edge.
      look: {
        x: pos.x * 0.62 + VAN.x * 0.38,
        y: lookY,
        z: pos.z * 0.62 + VAN.z * 0.38,
      },
    },
  };
});

export const anchorById = (id) => ANCHORS.find((a) => a.id === id) || null;

// Nearest anchor to a world point — how a click on the ground resolves to a
// spot. Returns null past `maxDist` so a click on the far side of the junction
// does not drag the player somewhere they did not aim for.
export function nearestAnchor(x, z, maxDist = 6) {
  let best = null, bestD = Infinity;
  for (const a of ANCHORS) {
    const d = Math.hypot(a.pos.x - x, a.pos.z - z);
    if (d < bestD) { bestD = d; best = a; }
  }
  return bestD <= maxDist ? best : null;
}
