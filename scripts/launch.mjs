// Which browser the harness renders in. Imported by BOTH scripts/smoke.mjs and
// scripts/probe.mjs — a probe that boots differently from the gate is a probe
// that cannot be used to explain the gate, and a duplicated constant is how
// that drift starts.
//
// Playwright's default headless is the chromium *headless shell*, which has no
// GPU path at all: every pixel comes from the SwiftShader software rasteriser.
// The `chromium` channel is the full browser, and on Apple Silicon it reaches
// the real GPU through ANGLE's Metal backend.
//
// MEASURED (E0.4), whole gate, this machine:
//   serial   514-521s -> 133s
//   sharded      346s ->  77s
// The entire gain is in gotoBookmark: 1285ms -> 174ms, i.e. the post-load
// settle. Stepped frames (240 in ~140ms) and screenshots (~150ms) cost the
// SAME on both renderers — neither was ever rasterisation-bound, so nothing
// else in the suite got faster and no other lever should be predicted from
// this one.
//
// Determinism was the risk, and it is unchanged: repeat captures are
// bit-identical within a boot, and inter-boot jitter matches SwiftShader's
// fraction for fraction (0 / 0.024 / 0.175% against 0 / 0.030 / 0.184%). The
// skyline wobble shows on both, so it is scene-side, not a renderer artefact.
//
// THE COST, and it is real: goldens are now tied to this machine's GPU and
// driver version instead of to a software rasteriser that produces identical
// bits on any hardware. A macOS driver update can move a golden with no code
// change behind it. If goldens ever move for no reason anyone can explain,
// MCGROT_GPU=0 puts the old renderer back — that is the first thing to try,
// and a clean run under it points the finger at the driver.
//
// Only darwin/arm64 is measured. Everywhere else falls back to the software
// path rather than passing a Metal flag to a machine that has no Metal.
const METAL = process.platform === 'darwin' && process.arch === 'arm64';

export const LAUNCH_OPTS = (process.env.MCGROT_GPU === '0' || !METAL)
  ? {}
  : { channel: 'chromium', args: ['--use-angle=metal', '--enable-gpu'] };

// For the run header, so every report says which renderer produced it.
export const LAUNCH_LABEL = LAUNCH_OPTS.channel ? 'chromium/metal' : 'headless-shell/swiftshader';
