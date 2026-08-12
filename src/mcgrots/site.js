// Where McGrot's stands, and the constants every other module in the game
// measures from. G0.
//
// THE PITCH IS THE FOOT OF THE WALK. `assets/leith.json`'s local origin is
// already the Foot — `scripts/fetch-osm.mjs:48`, "Origin: northernmost node of
// the street (Foot of the Walk)" — so local (0,0) is the junction itself and
// +z runs south, up the Walk toward town. That is a gift: the composed shots
// get 41 real building footprints within 80 m for nothing.
//
// WHERE THE VAN SITS, AND WHY THAT EXACT SPOT. Measured, not felt. A 1 m grid
// over the junction, scoring each point by distance to the nearest building
// edge and distance to the Leith Walk centreline, picked (10, -5):
//
//   wall clearance  21.0 m   — room for the van, the anchors and a wide shot
//   off-carriageway  8.4 m   — off the road without being tucked against a wall
//   from the Foot   10.8 m   — the statue is a near neighbour, not a distant one
//
// The first pass of that measurement was WRONG and is worth recording. Scored
// over a ±120 m box it returned the grid corners — clearance there is high
// because the fetched data simply runs out, not because the ground is open.
// A "largest clear circle" metric will always find the edge of your dataset.
// The fix was to constrain the search to within 25 m of the Foot, i.e. to the
// junction a person would actually call the Foot of the Walk.

export const PITCH = { x: 10, z: -5 };

// How much of the real street to stand up as massing. 80 m is 41 buildings —
// enough to enclose every composed shot without paying for the whole Walk.
// This is siting reference, NOT finished dressing: G3 dresses the pitch, and
// G0 blocks the buildings out precisely so "do the real buildings help or
// hurt" is a judgement made against something rather than assumed.
export const MASSING_RADIUS = 80;

// Matches src/world.js's LEVEL_HEIGHT. The street derives building height the
// same way (`Math.max(1, levels || 1) * LEVEL_HEIGHT`) and a second convention
// here would make the two games disagree about the same buildings.
export const LEVEL_HEIGHT = 3.2;

// Queen Victoria is not in leith.json: the Overpass query fetches building and
// street ways, while the memorial is a node. The Foot is documented as her
// meeting point, so the authored statue remains at the junction origin. The
// repo carries no bearing or survey dimensions; G3b keeps the measured
// placeholder footprint and uses a defensible low-poly seated interpretation.
export const STATUE = {
  x: 0,
  z: 0,
  plinth: 2.4,
  radius: 1.6,
  yaw: 0,
};

// ONE FIXED HOUR, ALWAYS (G3d, 2026-08-12). Time is a single authored
// lighting setup: no clock, no weather, no atmosphere.js. The dressed-pitch
// S2 review retained the shipped low warm sun: sun 6 / hemi 3. Raising the
// sun to 12 lifted the whole aerial-flattened pitch toward a pale wash while
// leaving the rear-facing cast dark, so it spent contrast without fixing the
// actual legibility problem. The camera-side fill experiment is recorded and
// rejected in MCGROTS-VALIDATION.md; the remaining cast issue is an asset/
// camera-side judgement, not a reason to over-light the pitch.
//
// Note this freezes the LIGHTING, not the schedule. G4's rota still advances
// on the wall clock, and `mcgrotIsIn(dayKey)` is date-keyed, so "was McGrot in
// today" is untouched by any of this.
// THE INTENSITIES ARE PHYSICAL-UNIT NUMBERS, NOT LEGACY ONES, and getting that
// wrong is what the first version of this file did. three.js has used physical
// light units since r155, where values that "look right" are 10-100x the old
// scale — CLAUDE.md records the street's torch at 18 for the same reason. A
// sun at 2.6 and a hemisphere at 1.1 rendered the ground at RGB (13,9,4) and
// put 53.9% of the establishing frame under a luminance of 12. The suite
// passed it: a frame that is half black and half brown has plenty of contrast,
// so the stddev floor had nothing to object to. Numbers cannot see a bad
// picture; the capture is what caught it.
export const LIGHT = {
  sunAltitude: 0.34,        // radians above the horizon — low, but off the deck.
                            // At 0.22 the ground took sin(12.6°) = 0.22 of the
                            // sun and read as unlit no matter the intensity.
  sunAzimuth: -2.1,         // radians; puts the sun behind the Foot buildings
  sunColor: 0xffd9a0,
  sunIntensity: 6,
  skyColor: 0x8fa2b0,
  groundColor: 0x4a4433,
  hemiIntensity: 3,
  exposure: 1.2,
};
// Re-checked on the dressed pitch under S2 by `scripts/mcgrots-grade.mjs`.
// The helper's 27-row sweep reports current 6/3 at S2 frame mean 105.1 and
// cast mean 17.2; 12/3 reaches cast mean 26.4 but pushes the frame to 134.5
// and visibly washes the pitch. The current pair remains the judgement call:
// it is the darkest coherent grade, has 0.00% blown pixels in the sweep, and
// preserves the brown/blue separation of the opened shots.
//
//   sun 6, hemi 3  ->  mean 76.7, stddev 51.4, 0.0% black, 0.0% blown
//
// The old whole-frame numbers above are retained as history, not as the G3d
// decision; S2's aerial wash changes the frame mean substantially.

// Convert a point in PITCH-LOCAL space to world space.
//
// Local +Z is the direction the van faces, which is toward the Foot. Anchors
// and camera shots are authored in local space so the whole pitch can be
// rotated or moved without re-deriving every number by hand.
// A QUARTER TURN OFF THE ORIGIN DIRECTION, and the turn is the whole point.
//
// The first version pointed the van's +Z straight at the Foot's origin. Since
// anchors sit in front of the van and each camera sits behind its anchor on
// the van-to-anchor line, EVERY shot then landed on the axis running from the
// pitch to the junction centre — which is where the statue stands. Measured
// across the five shots, the statue sat 0.2 m off the camera's sightline: dead
// centre in every frame, and in the establishing wide it filled a quarter of
// the picture.
//
// Rotating the pitch a quarter turn makes the anchors spread ACROSS the
// junction instead of along that axis. Measured over the same five shots,
// against the other three orientations:
//
//   turn     worst building   worst statue dist   statue off-sightline
//   as-is         6.8 m             2.5 m               0.2 m
//   +90           4.1 m             9.9 m               5.7 m
//   -90           6.5 m             7.5 m               8.3 m   <- chosen
//   180           4.1 m            17.0 m               0.2 m
//
// -90 keeps essentially all of the building clearance and moves the statue
// completely off every sightline. It stays a landmark in shot; it stops being
// the subject of shots it is not the subject of.
const FACING = Math.atan2(-PITCH.x, -PITCH.z) - Math.PI / 2;

export const PITCH_YAW = FACING;

export function toWorld(lx, lz) {
  const s = Math.sin(FACING), c = Math.cos(FACING);
  return { x: PITCH.x + lx * c + lz * s, z: PITCH.z - lx * s + lz * c };
}
