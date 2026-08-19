// Shared measurement helpers, used by more than one region. G7.5a split this
// out of the former monolithic scripts/smoke-mcgrots.mjs — see that file's
// own header for why McGrot's gate suite is separate from the street's.
//
// Deliberately small: most per-region pixel helpers (areaOf, stddevOf,
// meanAbsDiffRect, project/rectOf, …) stay duplicated inside each region file
// rather than moving here — that duplication is this suite's own established
// convention (see e.g. the signs region's own comment on why its stddevOf is
// "duplicated rather than shared"), not an oversight this split should fix.
// Only what was ALREADY identical across regions, verified byte-for-byte
// before merging, lives here.

import { PNG } from 'pngjs';

// Same measurement as scripts/smoke.mjs's luminanceStats — a frame's luminance
// mean and stddev. Duplicated rather than imported because that module is the
// paused street's; the CONSTANT below is the thing that must not drift, and it
// is quoted from there.
export const SUBSTRATE_MIN_STDDEV = 8;   // of 255. Below this a frame is too flat to gate anything.

// THE CRUSH FLOOR EXISTS BECAUSE THE CONTRAST FLOOR MISSED. G0's first render
// put 53.9% of the establishing frame under luminance 12 — the ground took
// almost no light — and the suite called it a pass: a frame that is half black
// and half brown has a stddev of 34.6, comfortably over the floor. Mean and
// stddev are both blind to a bimodal frame. This measures the thing that
// actually went wrong.
export const MAX_CRUSHED_FRACTION = 12;   // percent of pixels under CRUSH_LUMA
export const CRUSH_LUMA = 12;             // of 255
export const MAX_BLOWN_FRACTION = 2;      // percent over BLOWN_LUMA
export const BLOWN_LUMA = 245;

export function luminanceStats(buf) {
  const png = PNG.sync.read(buf);
  let sum = 0, sumSq = 0, crushed = 0, blown = 0;
  const n = png.width * png.height;
  for (let i = 0; i < n; i++) {
    const o = i * 4;
    const l = 0.2126 * png.data[o] + 0.7152 * png.data[o + 1] + 0.0722 * png.data[o + 2];
    sum += l; sumSq += l * l;
    if (l < CRUSH_LUMA) crushed++;
    if (l > BLOWN_LUMA) blown++;
  }
  const mean = sum / n;
  return {
    mean,
    stddev: Math.sqrt(Math.max(0, sumSq / n - mean * mean)),
    crushed: (crushed / n) * 100,
    blown: (blown / n) * 100,
  };
}

// G7.5a: was defined three times, byte-identical each time (mcgrot L1253,
// taxman L3347, valance L4138 of the pre-split file) — diffed before merging,
// per the brief. Fraction of pixels inside a unit rect whose luminance moved
// by more than 8 between two captures.
export function countDiffPixels(bufA, bufB, r) {
  const a = PNG.sync.read(bufA), b = PNG.sync.read(bufB);
  const px0 = Math.max(0, Math.round(r.ux0 * a.width));
  const px1 = Math.min(a.width - 1, Math.round(r.ux1 * a.width));
  const py0 = Math.max(0, Math.round(r.uy0 * a.height));
  const py1 = Math.min(a.height - 1, Math.round(r.uy1 * a.height));
  let hits = 0, n = 0;
  for (let y = py0; y <= py1; y++) {
    for (let x = px0; x <= px1; x++) {
      const o = (y * a.width + x) * 4;
      const la = 0.2126 * a.data[o] + 0.7152 * a.data[o + 1] + 0.0722 * a.data[o + 2];
      const lb = 0.2126 * b.data[o] + 0.7152 * b.data[o + 1] + 0.0722 * b.data[o + 2];
      if (Math.abs(la - lb) > 8) hits++;
      n++;
    }
  }
  return n ? hits / n : 0;
}
