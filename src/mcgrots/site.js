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

// The Queen Victoria statue is NOT in leith.json and cannot be: the Overpass
// query fetches `way["building"]` and the Leith Walk highway way, and a
// memorial is a node. This is a placeholder plinth at a plausible position in
// the junction until G3 authors her. See docs/MCGROTS-ROADMAP.md § 10.4.
// Placed AT the Foot's own origin, which is the northernmost node of the Leith
// Walk way — the junction centre. That is the most defensible position for a
// placeholder: the meeting point goes at the meeting point. It is not a claim
// about where the real statue stands, and G3 should check it against reference
// rather than inherit this number.
export const STATUE = { x: 0, z: 0, plinth: 2.4, radius: 1.6 };

// ONE FIXED HOUR, ALWAYS (Dan, 2026-08-10). Time is a single authored lighting
// setup: no clock, no weather, no atmosphere.js. G2 chooses the real hour as
// part of the style bake-off, because lighting and style are one decision.
// Until then this is a low warm sun, which is the direction docs/STYLE.md's
// measured palette argues for (b* mean +22.4, 41 of 42 comics net-warm).
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
// Chosen by sweep, not by eye — `node scripts/mcgrots-grade.mjs` walks 20
// sun/hemisphere pairs over all five shots and reports mean, stddev, and the
// fraction of the frame that is crushed or blown. The first hand-picked pair
// put 53.9% of a frame under luminance 12; the second overcorrected to a mean
// of 137. This pair is the darkest in the grid that crushes nothing:
//
//   sun 6, hemi 3  ->  mean 76.7, stddev 51.4, 0.0% black, 0.0% blown
//
// It is still brighter than the street's measured 0.139 median display
// luminance (docs/STYLE.md), and that is expected rather than wrong: this is a
// blockout with a large flat ground and a lot of open sky, not a fogged
// street. G2 owns the real grade and should re-run the sweep against the
// chosen style rather than inherit these two numbers.

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
