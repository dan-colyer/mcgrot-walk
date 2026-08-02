// Turning back — the state hinge at each end of the Walk (E5d part 1).
//
// Reaching either end nudges the clock forward and rolls the weather, so the
// walk back is a different street. This is the whole answer to "why walk one
// street twice": the down-walk must not replay the up-walk.
//
// THE NUMBER THIS HAS TO BEAT. WALK_SPEED is 14 m/s and the Walk is ~1617 m,
// so a leg takes ~115 s — and at HOURS_PER_REAL_MINUTE = 1 that is already
// ~1.9 sim hours of drift you get for free just by walking. A one-hour nudge
// would be indistinguishable from having taken your time. TURNAROUND_HOURS is
// several times the free drift on purpose, and the gate for it names a
// hinge-disabled control precisely because the free drift would otherwise
// pass the gate on its own.
//
// This module decides WHEN. `atmosphere.nudge()` decides what the street
// becomes — it is the sole authority for the clock and the weather, and a
// second one here is how the sky and the street end up disagreeing.

import { chainageOfPoint } from './frontage.js';

// E5d lands with this off, so the machinery can be verified against unmoved
// goldens before any behaviour changes.
const LEGS_ENABLED = true;

// Metres from either end that count as "arrived". Generous, because the
// player is soft-clamped to the corridor rather than to the centreline and
// the end of the street is not a wall — you can stand past it.
const END_RADIUS = 40;

// In-sim hours the clock jumps on each turnaround. ~2.6x the ~1.9 h a leg
// drifts on its own.
const TURNAROUND_HOURS = 5;

export function legsEnabled() {
  // localhost-only override, mirroring npcs.js's __mcgrotForceAnchors and
  // lamps.js's __mcgrotForceLamps, so the suite can drive both flag states
  // from one boot without touching the shipped default.
  const isLocal = typeof location !== 'undefined' && ['localhost', '127.0.0.1'].includes(location.hostname);
  if (isLocal && typeof window !== 'undefined' && window.__mcgrotForceLegs != null) {
    return !!window.__mcgrotForceLegs;
  }
  return LEGS_ENABLED;
}

export function createLegs({ camera, world, atmosphere, seed = 0, onHinge = null }) {
  const enabled = legsEnabled();
  const streetLine = (world && world.streetLine) || [];

  const noop = {
    enabled: false,
    update() {},
    state: () => ({ enabled: false, leg: 0, hinges: 0, zone: null, lastHingeZone: null, chainage: 0 }),
    history: () => [],
  };
  if (!enabled || streetLine.length < 2 || !camera || !atmosphere) return noop;

  let length = 0;
  for (let i = 1; i < streetLine.length; i++) {
    length += Math.hypot(streetLine[i][0] - streetLine[i - 1][0], streetLine[i][1] - streetLine[i - 1][1]);
  }

  function zoneAt(chainage) {
    if (chainage <= END_RADIUS) return 'north';        // the Foot, and the spawn
    if (chainage >= length - END_RADIUS) return 'south';
    return null;
  }

  // Armed as "already here", and THIS line is the one doing the work: the
  // spawn is at chainage 0, inside the north zone, so a machine that started
  // with `zone = null` would see a null -> 'north' transition on its very
  // first update and hinge before the player had moved — the walk would begin
  // five hours after the HUD promised. Initialising from the actual start
  // position is what makes the first frame a no-op.
  //
  // (Setting lastHingeZone below matters far less than it looks: `zone`
  // already suppresses the boot fire. It earns its place for a link spawn
  // dropped straight into an end zone, where it stops a hinge firing the
  // moment the player steps out and back in.)
  const startChainage = chainageOfPoint(camera.position.x, camera.position.z, streetLine);
  let zone = zoneAt(startChainage);
  let lastHingeZone = zone;
  let leg = 0;
  let hinges = 0;
  const history = [];

  function update() {
    const chainage = chainageOfPoint(camera.position.x, camera.position.z, streetLine);
    const next = zoneAt(chainage);
    if (next === zone) return;

    const left = zone;
    zone = next;
    // Only an ARRIVAL fires, and only at an end other than the one the last
    // hinge fired at. Standing at an end cannot re-fire (the zone has not
    // changed); stepping two metres out and back cannot either (it returns to
    // the zone that last hinged). Turning round at the far end can.
    if (!next || next === lastHingeZone) return;

    lastHingeZone = next;
    leg += 1;
    hinges += 1;
    const result = atmosphere.nudge(TURNAROUND_HOURS, seed, leg);
    history.push({ leg, arrivedAt: next, leftBehind: left, ...result });
    if (onHinge) onHinge({ leg, zone: next, ...result });
  }

  return {
    enabled: true,
    update,
    state: () => ({
      enabled: true,
      leg,
      hinges,
      zone,
      lastHingeZone,
      chainage: chainageOfPoint(camera.position.x, camera.position.z, streetLine),
      length,
      endRadius: END_RADIUS,
      turnaroundHours: TURNAROUND_HOURS,
    }),
    history: () => history.slice(),
  };
}
