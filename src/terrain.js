// The height authority for McGrot Walk — E1 "The Brae".
//
// Leith Walk drops ~25-30m from Picardy Place (chainage ~1617m) down to the
// Foot of the Walk (chainage 0, the north end, origin). This module is the
// SOLE source of that slope: nothing else in the engine invents a y value —
// every subsystem asks heightAtChainage/groundHeight instead.
//
// DETERMINISM: this file must never call the seeded PRNG (or any PRNG at
// all). heightAtChainage/groundHeight are pure functions of their numeric
// input — same chainage in, same metres out, every load, forever. That's
// what lets world.js/controls.js/every entity subsystem call it freely from
// inside already-seeded placement loops without disturbing hash32/rand()
// call order (see CLAUDE.md: "seeded PRNG order is sacred").

import { chainageOfPoint } from './frontage.js';

// Hand-authored control points: [chainage metres, elevation metres]. Foot of
// the Walk (chainage 0) sits at 0; Picardy Place (chainage ~1617, the south
// end) sits at +27m. Monotonic-ish, following the real street's profile —
// steepest through the middle third, easing off at both ends. Not surveyed;
// tune by eye via setExaggeration below.
const CONTROL_POINTS = [
  [0, 0],
  [150, 0.6],
  [300, 1.8],
  [450, 3.6],
  [600, 6.2],
  [750, 9.4],
  [900, 13.0],
  [1050, 16.6],
  [1200, 19.9],
  [1350, 22.8],
  [1500, 25.4],
  [1617, 27.0],
];

let exaggeration = 1.0;

export function setExaggeration(k) {
  exaggeration = Number.isFinite(k) && k > 0 ? k : 1.0;
}

export function getExaggeration() {
  return exaggeration;
}

// Catmull-Rom tangents at each control point, clamped at the ends (zero
// tangent so the profile doesn't overshoot below 0 at the Foot or keep
// climbing past Picardy) — piecewise-cubic Hermite, C1-smooth so the camera
// never jerks crossing a control point.
const N = CONTROL_POINTS.length;
const TANGENTS = CONTROL_POINTS.map((p, i) => {
  if (i === 0 || i === N - 1) return 0;
  const prev = CONTROL_POINTS[i - 1];
  const next = CONTROL_POINTS[i + 1];
  return (next[1] - prev[1]) / (next[0] - prev[0]);
});

function hermite(t, y0, y1, m0, m1, h) {
  const t2 = t * t;
  const t3 = t2 * t;
  const h00 = 2 * t3 - 3 * t2 + 1;
  const h10 = t3 - 2 * t2 + t;
  const h01 = -2 * t3 + 3 * t2;
  const h11 = t3 - t2;
  return h00 * y0 + h10 * h * m0 + h01 * y1 + h11 * h * m1;
}

// Raw (unexaggerated) profile height at a chainage, clamped to the
// authored range at both ends.
function rawHeightAtChainage(chainage) {
  if (chainage <= CONTROL_POINTS[0][0]) return CONTROL_POINTS[0][1];
  const last = CONTROL_POINTS[N - 1];
  if (chainage >= last[0]) return last[1];

  for (let i = 0; i < N - 1; i++) {
    const [x0, y0] = CONTROL_POINTS[i];
    const [x1, y1] = CONTROL_POINTS[i + 1];
    if (chainage >= x0 && chainage <= x1) {
      const h = x1 - x0;
      const t = h > 0 ? (chainage - x0) / h : 0;
      return hermite(t, y0, y1, TANGENTS[i], TANGENTS[i + 1], h);
    }
  }
  return last[1];
}

export function heightAtChainage(chainage) {
  return rawHeightAtChainage(chainage) * exaggeration;
}

// groundHeight(x, z) -> metres, given the street chain to project onto.
// Curried: createTerrain(streetLine) returns a bound groundHeight so callers
// don't have to thread streetLine through every call site.
export function createTerrain(streetLine) {
  function groundHeight(x, z) {
    if (!streetLine || streetLine.length < 2) return heightAtChainage(0);
    const chainage = chainageOfPoint(x, z, streetLine);
    return heightAtChainage(chainage);
  }
  return { groundHeight, heightAtChainage, setExaggeration, getExaggeration };
}
