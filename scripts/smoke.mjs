// E0.2 validation rig — the headless acceptance gate for every milestone and
// every deploy. See docs/VALIDATION.md for the full playbook.
//
// Flow: bundle -> serve on a free port -> Playwright chromium -> ENTER ->
// invariants (console clean, updater wiring, draw-call budget) -> determinism
// (geomHash identical across two fresh loads) -> goldens (pixel-diff each
// bookmark against docs/smoke/goldens/<id>.png).
//
// Goldens will be recaptured wholesale when E1 (terrain incline) lands — the
// tolerance below protects against ACCIDENTAL drift, not intentional change.
//
//   node scripts/smoke.mjs                  # run the gate
//   node scripts/smoke.mjs --update-goldens # recapture goldens + budget baseline

import { spawn, execSync, spawnSync } from 'child_process';
import { createServer } from 'net';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import { LAUNCH_OPTS, LAUNCH_LABEL } from './launch.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const smokeDir = join(root, 'docs/smoke');
// checkGolden() is the ONLY thing allowed to write into goldenDir — anything
// else that wants to save a screenshot for a human to look at (not a gated
// pixel-diff) belongs in captureDir instead (see the night-rain capture
// below, E2c.2.1 fix 3: it used to write straight into goldenDir, which
// dirtied a tracked directory on every smoke run).
//
// captureDir is GITIGNORED, and has to be. Moving the write out of goldenDir
// was only half the fix — the write is still unconditional, so a tracked file
// there is rewritten by every run, and the documented sky-FBM capture jitter
// (up to ~0.1% of pixels on any sky-visible pose) means the bytes genuinely
// differ each time. Tracking it would mean a permanently dirty tree. It is
// evidence for a human to look at, regenerated on every run; nothing here
// ever diffs it, so a stale committed copy would be worse than none.
const goldenDir = join(smokeDir, 'goldens');
const captureDir = join(smokeDir, 'captures');
const budgetPath = join(smokeDir, 'budget.json');

const UPDATE_GOLDENS = process.argv.includes('--update-goldens');
// --quick: the inner-loop suite. Skips the weather matrix (the four
// non-overcast golden columns, the transition/midnight-wrap checks, the 20
// weather-pair transitions and the 24h sweeps) and the informational DPR
// timing table. Measured: those are 274s and 59s of a 412s run, so quick is
// ~100s. Everything structural still runs — invariants, determinism, the
// overcast goldens, the draw-call budget, the milestone gates and the mobile
// pass. NOT a deploy gate: `npm run deploy` always runs the full suite, and
// the weather columns are exactly where a golden regression hides.
const QUICK = process.argv.includes('--quick');
// E0.3: the DPR frame-timing table, opt-in. It is command-submission timing
// under SwiftShader, which docs/VALIDATION.md already records as not a GPU
// measurement — 67s of an 847s run for numbers nobody can act on. The DPR cap
// gate that used to sit behind the same guard now always runs.
const DPR_TIMING = process.argv.includes('--dpr-timing');
// src/interact.js's hush, shortened for the harness only. The gates still
// assert the same thing (nothing credited at open, credited after), just
// without burning 700ms of wall clock per assertion.
// --only=<name>[,<name>] runs just those regions — the inner loop for
// iterating on one gate (~20s) instead of the whole suite. Regions were
// checked to declare nothing used outside themselves before being made
// skippable; if you add one, check the same before wrapping it.
const ONLY_ARG = process.argv.find((a) => a.startsWith('--only='));
// 'render' is the draw-call budget, every golden column, E2a/E2b, the weather
// matrix and the post chain — the bulk of the runtime, and the only region
// that captures desktop goldens. Boot #1 itself is NOT skippable: its page
// and invariants are shared, so ~12s of boot is paid by every --only run.
// Concurrency was tried here and reverted. Running the journal and anchor
// gates under Promise.all cut 85s to 68s, but the run FAILED: a
// page.click('#title-enter') timed out at 30s because two SwiftShader
// contexts rendering at once starve each other on a 10-core machine. A 20%
// saving on two regions is not worth a suite that intermittently reports a
// timeout looking like a real bug. --only is the fast path instead.
const REGIONS = ['alignment', 'journal', 'anchors', 'moments', 'lamps', 'legs', 'ending', 'render', 'determinism', 'dpr', 'onevoice', 'determinism-clock', 'mobile'];
const regionsRun = [];

// --- E0.3: --since — the router, not a new tier -------------------------
//
//   node scripts/smoke.mjs --since          # vs HEAD (i.e. the working diff)
//   node scripts/smoke.mjs --since=<ref>    # vs any ref
//
// `--only` already gave a 20-50s inner loop; what was missing is knowing
// WHICH regions a given change can reach without holding the whole region map
// in your head. This maps changed paths to regions and feeds the same --only
// machinery.
//
// THE RULE THAT MAKES THIS SAFE: a path matching no pattern selects EVERY
// region. The failure mode of a router like this is silent under-selection —
// a change whose region nobody mapped, running nothing, reporting green — so
// the default is the expensive answer, never the cheap one. Adding a module
// without touching this table therefore costs time, not coverage. `[]` means
// "provably cannot affect a gate" and is only for docs.
//
// Deliberately NOT a deploy path: `npm run deploy` runs the bare suite, and
// like --quick this prints what it declined to ask.
const SINCE_ALL = 'run everything';
const SINCE_RULES = [
  [/^docs\//, []],
  [/^README\.md$/, []],
  [/^\.gitignore$/, []],
  // Harness, plumbing and anything that wires the scene together: no useful
  // narrowing is possible, and a wrong guess here is the expensive kind.
  [/^scripts\//, SINCE_ALL],
  [/^package(-lock)?\.json$/, SINCE_ALL],
  [/^src\/(main|debug|assets|world|atmosphere)\.js$/, SINCE_ALL],
  [/^src\/index\.html$/, SINCE_ALL], // every overlay's DOM and CSS, plus the bundle stamp
  // Leaf modules, narrowest first.
  [/^src\/journal\.js$/, ['journal', 'mobile']],
  [/^src\/(anchors|npcs)\.js$/, ['anchors', 'onevoice', 'render', 'determinism']],
  [/^src\/moments\.js$/, ['moments']],
  [/^src\/day\.js$/, ['moments', 'determinism-clock', 'legs']],
  [/^src\/lamps\.js$/, ['lamps', 'render']],
  [/^src\/legs\.js$/, ['legs', 'ending']],
  [/^src\/ending\.js$/, ['ending']],
  [/^src\/(proximity-audio|ambience)\.js$/, ['alignment', 'onevoice']],
  [/^src\/interact\.js$/, ['journal', 'onevoice', 'mobile']],
  [/^src\/(controls|title|keys)\.js$/, ['mobile']],
  [/^src\/post\.js$/, ['render']],
  // The rest of the visual set: geometry, materials, placement. All of it can
  // move a golden, and most of it feeds geomHash.
  [/^src\/(road|roadworks|shopfronts|frontage|gables|chimneys|windows|sky|terrain|flora|scenery|cars|birds|vermin|rain|forth|litter|leithers|placeholders|legs|lighting-constants)\.js$/,
    ['render', 'determinism', 'lamps']],
  [/^assets\//, ['render', 'determinism', 'alignment']],
];

function regionsSince(ref) {
  let changed;
  try {
    const diff = execSync(`git diff --name-only ${ref}`, { encoding: 'utf8' });
    const untracked = execSync('git ls-files --others --exclude-standard', { encoding: 'utf8' });
    changed = [...new Set((diff + untracked).split('\n').map((s) => s.trim()).filter(Boolean))];
  } catch (err) {
    return { regions: null, why: [`git failed (${err.message.split('\n')[0]}) — running everything`] };
  }
  if (!changed.length) return { regions: null, why: [`nothing changed vs ${ref} — running everything`] };

  const selected = new Set();
  const why = [];
  for (const file of changed) {
    const rule = SINCE_RULES.find(([pattern]) => pattern.test(file));
    if (!rule) {
      why.push(`${file} -> matches no rule, so EVERYTHING runs (see SINCE_RULES in scripts/smoke.mjs)`);
      return { regions: null, why };
    }
    const [, regions] = rule;
    if (regions === SINCE_ALL) {
      why.push(`${file} -> everything`);
      return { regions: null, why };
    }
    for (const r of regions) selected.add(r);
    why.push(`${file} -> ${regions.length ? regions.join(', ') : '(gates nothing)'}`);
  }
  return { regions: selected, why };
}

// --- E0.3: --shards=2, the full gate across processes --------------------
//
// Why this is a win and intra-region concurrency is not. Rasterising is
// already multi-threaded: one `render` pass runs at ~490% CPU on a 10-core
// box, so running the four weather passes together only splits the same
// silicon — measured at 188.1s -> 180.9s, a 4% saving for a much more
// tangled control flow, and reverted. Sharding wins for a different reason:
// it pairs the raster-bound region (`render`) against the wait-bound ones
// (journal, anchors, moments — page round-trips, boots, waits), so the idle
// capacity one leaves is what the other uses. Measured 519s -> ~360s.
//
// The partition MUST cover every region: verified below against REGIONS, so
// adding a region without assigning it fails the run loudly instead of
// quietly going unchecked. Coverage was also verified empirically — 221
// unique check names in a full run, zero missing across the two shards.
const SHARDS = [
  ['render'],
  REGIONS.filter((r) => r !== 'render'),
];
const SHARDS_ARG = process.argv.find((a) => a === '--shards' || a.startsWith('--shards='));
const NO_BUNDLE = process.argv.includes('--no-bundle');

const SINCE_ARG = process.argv.find((a) => a === '--since' || a.startsWith('--since='));
const sinceResult = SINCE_ARG ? regionsSince(SINCE_ARG.includes('=') ? SINCE_ARG.split('=')[1] : 'HEAD') : null;

const ONLY = (() => {
  if (ONLY_ARG) return new Set(ONLY_ARG.slice(7).split(',').map((s) => s.trim()).filter(Boolean));
  if (sinceResult && sinceResult.regions) return sinceResult.regions;
  return null; // everything
})();

if (sinceResult) {
  console.log(`[smoke] --since: ${sinceResult.regions ? `regions ${[...sinceResult.regions].join(', ') || '(none — boot checks only)'}` : 'running EVERY region'}`);
  for (const line of sinceResult.why) console.log(`  ${line}`);
  console.log('  NOT a deploy gate — npm run deploy always runs the full suite.');
}
// --- E0.3: where the suite's time actually goes -------------------------
// The E5 phase gate called for a measured speedup and named a lever (stop
// re-fetching the bundle on every boot). This exists so the lever is chosen
// by measurement rather than by that guess, and so a later "X seconds came
// off" is checkable. Printed at the end of every run; costs nothing.
//
// Boot stats come from the page's own Resource Timing, which reports
// `transferSize === 0` for a cache hit — so the table says outright how much
// of each boot was actually fetched over the wire.
const profile = { regions: [], boots: [], phases: [] };
let regionOpen = null;
let phaseOpen = null;

function beginRegion(name) {
  endRegion(); // a region without an explicit end marker still gets closed here
  regionOpen = { name, at: Date.now() };
}

function endRegion() {
  endPhase();
  if (!regionOpen) return;
  profile.regions.push({ name: regionOpen.name, ms: Date.now() - regionOpen.at });
  regionOpen = null;
}

// One level down, for a region big enough that "it is the biggest" is not an
// actionable finding. `render` is 52% of the run and does four unrelated
// things; without this the next lever would be picked by argument rather than
// by measurement. Phases nest inside a region and are closed by the next
// beginPhase or by endRegion, so an unclosed one cannot leak into the tail.
function beginPhase(name) {
  endPhase();
  phaseOpen = { name, at: Date.now() };
}

function endPhase() {
  if (!phaseOpen) return;
  profile.phases.push({ name: phaseOpen.name, ms: Date.now() - phaseOpen.at });
  phaseOpen = null;
}

function region(name) {
  if (!ONLY) { beginRegion(name); return true; }
  const want = ONLY.has(name);
  if (want) { regionsRun.push(name); beginRegion(name); }
  return want;
}

// The hush stays at its shipped 600ms in the harness. Shortening it through a
// localhost override was tried and reverted: the gates read "was anything
// credited at open?" over a Playwright round-trip, which is itself slower than
// a short hush, so an 80ms hush made that read land AFTER the credit and turned
// the assertion vacuous (measured: heard-at-open went 0 -> 1). The entire
// saving was ~2s of a 400s run — not worth racing an assertion for.
const HUSH_WAIT_MS = 700;
const DRAW_CALL_TOLERANCE_PCT = 10;
const PIXEL_THRESHOLD = 0.1;       // pixelmatch per-pixel colour-diff sensitivity (0-1)
const DIFF_PCT_TOLERANCE = 0.5;    // max % of pixels allowed to differ before a golden fails
// E2a: atmosphere's date-seeded start hour would otherwise change the
// goldens (and the facade-darkening pose below) every day. Pinned
// immediately after pauseAuto(), before any capture.
const SMOKE_HOUR = 13;
// E5c: the pinned calendar day (see bootPage). Its date-derived arrival hour
// is 06:55 — chosen to sit far from SMOKE_HOUR so the two can't be confused.
const SMOKE_DATE = '2026-01-01';
const NIGHT_LUMINANCE_RATIO_MAX = 45; // % — the 6% dimming-test regression this milestone fixes
// E2g. Measured 19.1% at mid-805-far with the lamps lit, against 2.4% on the
// lamps-off control and 100% for a night that renders as daylight. The ceiling
// leaves room for tuning without leaving room for a lit street that stops
// reading as night; the lift floor is what stops a lamp-less build passing.
const LIT_NIGHT_SKY_RATIO_MAX = 30;   // %
const LIT_NIGHT_MIN_LIFT = 3;         // x the lamps-off control

// E2g legibility pair. Measured at 03:00 overcast, torch off, centreline
// ground pose: lamps on read 58.3% of the lower two-thirds at/above luminance
// 12, mean 20.39; the lamps-off control read 0.0%, mean 0.00. The floor of 12
// is "can make anything out at all" — below it the frame is the black screen
// that prompted this milestone.
const LAMP_DARKEST_HOUR = 3;
const LEGIBLE_PIXEL_FLOOR = 12;
const LEGIBLE_MIN_PCT = 40;
const LEGIBLE_CONTROL_MAX_PCT = 5;
// One lamp per catenary station (POLE_SPACING 35 m over ~1617 m), alternating
// kerbs — see src/lamps.js.
const EXPECTED_LAMP_COUNT = 46;
// Layout bounds. POLE_SPACING is 35 m and the lamps alternate kerbs, so
// consecutive heads sit slightly more than 35 m apart; the Walk is ~1617 m.
const LAMP_GAP_MIN = 30;
const LAMP_GAP_MAX = 45;
const LAMP_SPAN_MIN = 1400; // metres between the first and last lamp

// E2g.1's picture gates on the close. Two frames of the sequence are measured
// rather than asserted about: mean luminance in a band ("neither black nor
// blown out") and the same contrast floor the goldens use ("there is still
// something to look at"). Measured on the shipped close: t=5s reads mean 55.5
// / stddev 53.1, t=9.5s reads 85.9 / 83.6.
//
// The bands are set from the failure, not from the reading. Turning the haar
// black in src/ending.js — the E5d defect exactly: a close that fades to
// nothing while every fog and exposure assert stays green — takes t=5s to
// 20.7 and t=9.5s to 4.5/7.9, so both floors sit above the injected values
// and below the real ones with room to tune. See docs/VALIDATION.md for what
// these deliberately do not prove.
const MID_CLOSE_MEAN_MIN = 25;
const MID_CLOSE_MEAN_MAX = 200;
const LATE_CLOSE_MEAN_MIN = 30;
const LATE_CLOSE_MEAN_MAX = 210;

// E2g.1. The night golden's hour — the same 22:00 the night gates above
// already use, and overcast, so the pose costs one capture rather than a
// weather column. See NIGHT_BOOKMARK_DEFS in src/debug.js for the pose.
const NIGHT_GOLDEN_HOUR = 22;

// E5d. END_RADIUS in src/legs.js, quoted in a gate's detail line only.
const LEG_END_RADIUS_HINT = 40;
// The hinge's own contribution must clear the ~1.9h-per-leg free drift by a
// margin. Two hinges at TURNAROUND_HOURS 5 is 10h; the floor is set well
// under that so tuning the constant does not require touching the gate, but
// well over the 3.8h an out-and-back drifts by itself.
const LEG_MIN_HINGE_HOURS = 8;
const TORCH_HOUR = 3; // deep night — daylight ambient/hemi/sun are all near-zero here
const TORCH_EYE_HEIGHT = 1.7; // matches src/debug.js's EYE_HEIGHT
const TORCH_STAND_OFF = 2; // metres from the litter comic — well inside the ~6.5m torch reach at night
const TORCH_MIN_RATIO = 2.5; // E2b acceptance criterion 3

// E2c.1: the weather axis.
const CLEAR_MORNING_HOUR = 8; // low sun — the one bookmark that must show a shadowed street side
const CLEAR_MORNING_BOOKMARK = 'mid-805-far'; // curved corner, both street sides in frame (see E2b notes)
const CLIP_CHANNEL_THRESHOLD = 250; // out of 255 — "clipped" per the brief
const CLIP_PCT_MAX = 0.1; // % of pixels allowed at/above the threshold on all 3 channels
// E2d check 26b: floor for "the post effects actually reached the frame".
// Measured across the seven gated states the authored strength moves 7.3%
// (rain, 22:00 — a near-black frame where the vignette has almost nothing to
// darken) up to 99.9% (haar/skyline) of pixels, so 3 sits well clear of the
// weakest real case and miles above the 0% a silently-disabled pass gives.
const POST_LIVE_MIN_PCT = 3;
// >10s of stepped dt so a setWeather() transition is guaranteed complete
// before a golden capture — see WEATHER_TRANSITION_SECONDS in atmosphere.js.
const WEATHER_SETTLE_FRAMES = 700;

// E2c.2: the rain axis.
const DRIZZLE_BOOKMARKS = ['elm-row-hero', 'mid-805-far']; // two representative poses per the brief
const NIGHT_RAIN_HOUR = 22;
const NIGHT_RAIN_BOOKMARK = 'mid-805-far'; // same pose the E2a night-darkening check already uses
// E2c.2.1 fix 2: rain/drizzle's own draw call vs a MATCHED overcast control
// pass (same fresh-boot, same settle-then-visit sequence) — exactly +1 per
// bookmark, not a tolerance band. See captureWeatherPass below for why the
// match has to be this exact to mean anything.
const RAIN_DRAW_CALL_EXPECTED_DELTA = 1;
// E2c.2.1 fix 1's harness proof: a drop's per-frame Y movement must stay
// close to its settled value throughout a weather transition, even deep into
// a long session — see src/rain.js's FALL_SPEED note for the bug this
// guards against.
const RAIN_MEASURE_T = 600; // seconds — deep into a session, per the brief
const RAIN_MEASURE_FRAMES = 60;
const RAIN_MEASURE_MAX_RATIO = 3; // acceptance criterion 1
const RAIN_BOX_HEIGHT = 20; // metres — must match BOX_HEIGHT in src/rain.js
// An Eulerian circuit over the complete directed graph on the 5 weathers —
// every ordered (from, to) pair appears as one consecutive step exactly
// once, so all 20 transitions are exercised for the price of 20 setWeather
// calls instead of 20 independent from-scratch round trips. Built by
// decomposing K5* into 4 edge-disjoint Hamiltonian cycles (step size
// d=1,2,3,4 mod 5 over the 5 weathers, each a cycle since gcd(d,5)=1) and
// merging them at a shared start node — the standard construction for an
// Eulerian circuit over a complete balanced digraph. E2c.3b added 'haar',
// taking this from 4 weathers/12 transitions/13 entries to 5/20/21.
const WEATHER_CHAIN = [
  'overcast', 'clear', 'rain', 'drizzle', 'haar', 'overcast',
  'rain', 'haar', 'clear', 'drizzle', 'overcast', 'drizzle',
  'clear', 'haar', 'rain', 'overcast', 'haar', 'drizzle',
  'rain', 'clear', 'overcast',
];
const SWEEP_HOURS = [0, 3, 6, 9, 12, 15, 18, 21, 23.99, 0.01]; // includes the midnight-wrap edge for each weather's own bracket
// These two console-clean sweeps only need to CATCH AN ERROR, not verify a
// transition has fully settled (WEATHER_SETTLE_FRAMES, ~11.7s of dt, is
// already asserted elsewhere) — a bug here throws immediately, not only
// after 10 full seconds of blend. Kept short because both sweeps repeat
// this settle many times (12 transitions x this + 4 weathers x this).
const QUICK_SETTLE_FRAMES = 90;

// E2e: mobile pass — a phone-shaped viewport with touch mode forced via
// __mcgrotDebug.setTouchMode rather than relying on Playwright's own
// touch/pointer emulation, per the brief's acceptance criterion 2.
const MOBILE_VIEWPORT = { width: 390, height: 844 };
const MOBILE_WALK_BOOKMARK = 'north-150-close';
const MOBILE_WALK_HOLD_FRAMES = 30;
const MOBILE_WALK_MIN_MOVE_M = 0.5; // held for 30 frames at 14 m/s should move ~7m
const MOBILE_WALK_MAX_DRIFT_M = 0.01; // after release, position must not keep changing
const MIN_TAP_TARGET_PX = 44;
// item 6 acceptance criterion: simulate a notch + home-indicator device by
// overriding the CSS custom properties safe-area math is built on (see
// src/index.html's :root — env() itself can't be spoofed from JS).
const SIMULATED_INSET = { top: 47, bottom: 34 };
const DPR_TABLE = [1, 1.5, 2]; // + one more entry for the real unclamped devicePixelRatio, appended below
const DPR_TIMING_FRAMES = 60;
const DPR_TIMING_BOOKMARK = 'skyline'; // heaviest pose in the goldens (954 draw calls)
// E2e.1 item 4: measured at TORCH_HOUR/north-150-close a 35.2% luminance drop
// toggling off — far above the 0.000-0.133% capture-jitter band, so this
// leaves an enormous margin against false negatives.
const TORCH_TOGGLE_LUMA_DROP_MIN_PCT = 10;

// E5a gate 5a: phrase-alignment opposed pair. Independent of the bake's own
// ffmpeg silencedetect call — this decodes raw PCM and computes its own RMS
// envelope at a different window/hop, so the gate isn't measuring itself.
const ALIGN_SAMPLE_IDS_COUNT = 12;
const ALIGN_SAMPLE_RATE = 8000;
const ALIGN_WINDOW = 400; // samples = 50ms
const ALIGN_HOP = 200;    // samples = 25ms
const ALIGN_SHIFT_SEC = 1.5;
const ALIGN_MARGIN = 0.03; // shipped mean troughness must beat each control's by at least this much

// Hardcoded so a new subsystem added to only ONE of animate()/stepFrame (a
// D0-era bug class, see src/main.js) is caught deliberately rather than by
// accident — a mismatch here means main.js's updaters list changed and this
// script needs a conscious update, not a silent pass.
const EXPECTED_UPDATERS = [
  'controls', 'npcs', 'leithers', 'litter', 'shopfronts', 'sky', 'atmosphere',
  'rain', 'birds', 'vermin', 'scenery', 'lamps', 'legs', 'ending', 'interact', 'proximityAudio', 'torch',
  'post', 'moments',
];

function getFreePort() {
  return new Promise((resolve, reject) => {
    const srv = createServer();
    srv.listen(0, () => {
      const { port } = srv.address();
      srv.close(() => resolve(port));
    });
    srv.on('error', reject);
  });
}

// Probe 127.0.0.1, never `localhost`. serve.py binds IPv4 only, and resolving
// `localhost` yields ::1 first on this machine: undici then sits on that dead
// address for its own 10s connect timeout, which is the entire deadline here,
// so the FIRST attempt consumes the budget and the suite dies reporting
// "fetch failed" on a server that is up and serving. Cost an hour, and it
// arrived as an environment change (a node point release) rather than a code
// change, which is the worst way for it to arrive. Page URLs stay on
// `localhost` — Chromium falls back between families sensibly, and both
// hostnames satisfy the isLocal debug gate.
// The deadline is 45s, not the original 10s, because serve.py now takes ~9s
// to accept its first connection on this machine (measured; a homebrew python
// 3.14 upgrade landed mid-session and interpreter startup got much slower).
// 10s left no margin at all, and the failure mode was indistinguishable from
// a server that never started.
function waitForServer(url, timeoutMs = 45000) {
  const deadline = Date.now() + timeoutMs;
  return new Promise((resolve, reject) => {
    (function attempt() {
      // Per-attempt timeout well under the deadline, so a hung connect costs
      // one retry rather than the whole budget.
      fetch(url, { signal: AbortSignal.timeout(1500) }).then(() => resolve()).catch((err) => {
        if (Date.now() > deadline) reject(err);
        else setTimeout(attempt, 100);
      });
    })();
  });
}

// Every context in this file goes through here so the pinned calendar day
// (E5c) can never be forgotten by a new one. The HUD prints the date and the
// date-derived arrival hour, so an unpinned context would capture goldens
// that go red overnight — and the failure would look like a rendering
// regression, not a clock.
async function newContext(browser, opts) {
  const context = await browser.newContext(opts);
  // E0.3: Playwright's 30s default is a wall-clock budget, and wall-clock
  // waits are the one thing contention genuinely stretches — the 2026-08
  // concurrency attempt died on a `page.click` timing out at 30s under
  // SwiftShader load, which is a scheduling artefact, not a finding about the
  // product. Raised so a loaded machine (a sharded run, or a busy laptop)
  // reports the truth. A genuine hang still fails, just later.
  context.setDefaultTimeout(120000);
  await context.addInitScript((d) => { window.__mcgrotForceDate = d; }, SMOKE_DATE);
  return context;
}

// `extras` sets localhost-gated overrides before any page script runs.
// Deliberately opt-in per caller: shortening the hush globally would change
// golden-mobile:comic, which is stable only because headless audio never
// reaches playback inside the 600ms window (see docs/VALIDATION.md).
// E0.3: what one boot costs, read from the page's own Resource Timing.
// transferSize === 0 with a non-zero decodedBodySize is a cache hit, so this
// distinguishes "fetched 1.7MB again" from "read it out of the cache" rather
// than assuming either.
async function bootStats(page) {
  return page.evaluate(() => {
    const rs = performance.getEntriesByType('resource');
    let wire = 0, cached = 0, cachedBytes = 0;
    for (const r of rs) {
      if (r.transferSize > 0) wire += r.transferSize;
      else if (r.decodedBodySize > 0) { cached++; cachedBytes += r.decodedBodySize; }
    }
    return { requests: rs.length, wireBytes: wire, cached, cachedBytes };
  });
}

async function bootPage(browser, port, extras = null) {
  const bootAt = Date.now();
  const context = await newContext(browser, { viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  const consoleMessages = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleMessages.push(msg.text());
  });
  page.on('pageerror', (err) => consoleMessages.push(String(err)));

  // Set BEFORE any page script runs, so main.js's first animate() call never
  // fires — see the flag's own comment there. __mcgrotRafCount counts rAF
  // callbacks that slip through anyway (there should be none pre-freeze);
  // reading it after pauseAuto() below is the E2c.3b.1 acceptance gate on the
  // pre-pause frame count.
  if (extras) await page.addInitScript((e) => { Object.assign(window, e); }, extras);
  await page.addInitScript(() => {
    window.__mcgrotFreezeAtBoot = true;
    window.__mcgrotRafCount = 0;
    const rawRaf = window.requestAnimationFrame.bind(window);
    window.requestAnimationFrame = (cb) => rawRaf((t) => { window.__mcgrotRafCount++; return cb(t); });
  });

  await page.goto(`http://localhost:${port}/`);
  await page.click('#title-enter');
  // The title card fades out over a real 0.9s CSS transition (src/index.html)
  // — irrelevant on a human's timescale but our screenshots are taken far
  // sooner than that, so kill the transition to make dismissal instantaneous.
  await page.evaluate(() => {
    const el = document.getElementById('title-card');
    if (el) el.style.transition = 'none';
  });
  await page.waitForFunction(() => !!(window.__mcgrotDebug && window.__mcgrotDebug.world));
  const preFreezeRafCount = await page.evaluate(() => window.__mcgrotRafCount);
  await page.evaluate(() => window.__mcgrotDebug.pauseAuto());
  // Pin the clock before any capture — see SMOKE_HOUR above.
  await page.evaluate((h) => window.__mcgrotDebug.setTime(h), SMOKE_HOUR);
  // E2c.1: pin the weather explicitly too, the same reasoning as SMOKE_HOUR —
  // a future default-weather change must not silently move these goldens.
  // No-ops today (construction already defaults to 'overcast'), by design.
  await page.evaluate(() => window.__mcgrotDebug.setWeather('overcast'));
  profile.boots.push({ ms: Date.now() - bootAt, region: regionOpen ? regionOpen.name : '-', ...(await bootStats(page)) });
  return { context, page, consoleMessages, preFreezeRafCount };
}

async function getInvariants(page) {
  return page.evaluate(() => window.__mcgrotDebug.invariants());
}

function summarizeConsole(pageConsole, debugConsoleErrors) {
  return [...pageConsole, ...debugConsoleErrors];
}

function pctDiff(actual, baseline) {
  if (baseline === 0) return actual === 0 ? 0 : Infinity;
  return Math.abs(actual - baseline) / baseline * 100;
}

// Mean perceptual luminance over the upper half of a captured frame — the
// half dominated by façade and sky rather than road, which is what the E2a
// brief's anti-regression measures (the finding: dimming lights alone left
// every unlit façade pixel-identical to full daylight).
// Mean luminance over a centred crop — used for the torch-pool check below,
// where the surface of interest is whatever the camera is pointed straight
// at (not the upper-half facade/sky split the day/night check cares about).
function meanLuminanceCenterCrop(png, fracW, fracH) {
  const { width, height, data } = png;
  const x0 = Math.floor(width * (1 - fracW) / 2), x1 = Math.floor(width * (1 + fracW) / 2);
  const y0 = Math.floor(height * (1 - fracH) / 2), y1 = Math.floor(height * (1 + fracH) / 2);
  let sum = 0, count = 0;
  for (let y = y0; y < y1; y++) {
    for (let x = x0; x < x1; x++) {
      const i = (y * width + x) * 4;
      sum += 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
      count++;
    }
  }
  return count ? sum / count : 0;
}

// % of pixels at/above CLIP_CHANNEL_THRESHOLD on all three channels — the
// E2c.1 acceptance gate for the six Lambert-converted materials clipping
// under a much stronger directional 'clear' sun (see LIT_ALBEDO_GAIN's note
// in src/lighting-constants.js).
function clippedHighlightPct(png) {
  const { width, height, data } = png;
  let clipped = 0;
  const count = width * height;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i] >= CLIP_CHANNEL_THRESHOLD && data[i + 1] >= CLIP_CHANNEL_THRESHOLD && data[i + 2] >= CLIP_CHANNEL_THRESHOLD) {
      clipped++;
    }
  }
  return count ? (clipped / count) * 100 : 0;
}

// Exact per-channel comparison — deliberately NOT pixelmatch. pixelmatch at
// PIXEL_THRESHOLD is nearly blind to broad uniform shifts (a pose once moved
// 34% in mean luminance while reporting a 0.009% pixel diff), which is exactly
// the kind of change the post chain could introduce. Counts any pixel with any
// channel off by 1 or more.
function exactChannelDiff(a, b) {
  let pixels = 0, maxChannel = 0;
  for (let i = 0; i < a.data.length; i += 4) {
    let d = 0;
    for (let c = 0; c < 3; c++) d = Math.max(d, Math.abs(a.data[i + c] - b.data[i + c]));
    if (d > 0) pixels++;
    if (d > maxChannel) maxChannel = d;
  }
  return { pixels, maxChannel, pct: (pixels / (a.width * a.height)) * 100 };
}

// Capture-or-compare for one golden. Captures (and passes trivially) only when
// --update-goldens is set or the file doesn't exist yet; otherwise pixel-diffs.
// Shared so a golden can never be written unconditionally — an unguarded
// writeFileSync makes the gate mutate a tracked file on every run AND makes
// that golden incapable of ever failing, which is a screenshot, not a gate.
// Returns the parsed PNG so callers can run further measurements on it.
// Is a golden a usable measuring instrument at all? A near-flat frame cannot
// register a regression: with few distinguishable pixels, a serious change
// still diffs under the 0.5% tolerance. Goldens are all captured at
// SMOKE_HOUR (13:00) precisely so they have contrast to lose, but that is a
// convention, and this project has twice shipped a real change hidden under
// the tolerance. So measure the substrate rather than trusting the
// convention: luminance stddev per captured frame, aggregated into one check.
const goldenSubstrate = [];
const SUBSTRATE_MIN_STDDEV = 8; // of 255. Below this the pose is too flat to gate anything.

// Mean and stddev of frame luminance. Shared by the golden substrate check
// and by E2g.1's picture gates — a picture gate is the same measurement made
// of a frame no golden covers (see the mid-close gate in region 'ending').
function luminanceStats(png) {
  let sum = 0, sumSq = 0;
  const n = png.width * png.height;
  for (let i = 0; i < n; i++) {
    const o = i * 4;
    const l = 0.2126 * png.data[o] + 0.7152 * png.data[o + 1] + 0.0722 * png.data[o + 2];
    sum += l; sumSq += l * l;
  }
  const mean = sum / n;
  return { mean, stddev: Math.sqrt(Math.max(0, sumSq / n - mean * mean)) };
}

function measureSubstrate(name, png) {
  goldenSubstrate.push({ name, ...luminanceStats(png) });
}

function checkGolden(results, name, shot, goldenPath) {
  const actual = PNG.sync.read(shot);
  measureSubstrate(name, actual);
  if (UPDATE_GOLDENS || !existsSync(goldenPath)) {
    writeFileSync(goldenPath, shot);
    results.push({ name, pass: true, detail: 'captured' });
    return actual;
  }
  const expected = PNG.sync.read(readFileSync(goldenPath));
  if (actual.width !== expected.width || actual.height !== expected.height) {
    results.push({ name, pass: false, detail: `size mismatch ${actual.width}x${actual.height} vs ${expected.width}x${expected.height}` });
    return actual;
  }
  const diffPng = new PNG({ width: actual.width, height: actual.height });
  const diffPixels = pixelmatch(actual.data, expected.data, diffPng.data, actual.width, actual.height, { threshold: PIXEL_THRESHOLD });
  const diffPct = (diffPixels / (actual.width * actual.height)) * 100;
  results.push({
    name,
    pass: diffPct <= DIFF_PCT_TOLERANCE,
    detail: `${diffPct.toFixed(3)}% pixels differ (tolerance ${DIFF_PCT_TOLERANCE}%)`,
  });
  return actual;
}

// E2e.1 item 2: rect size alone doesn't prove a target is tappable — another
// fixed-position element can sit on top of it. elementFromPoint at the
// target's own centre is what a real tap actually hits; getBoundingClientRect
// knows nothing about paint order.
async function measureTapTarget(page, id) {
  return page.evaluate((elId) => {
    const el = document.getElementById(elId);
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const hit = document.elementFromPoint(cx, cy);
    return {
      width: r.width,
      height: r.height,
      visible: getComputedStyle(el).display !== 'none',
      reachable: !!hit && (hit === el || el.contains(hit)),
      hitId: hit ? hit.id || hit.tagName : null,
    };
  }, id);
}

// E5a gate 5a helpers — decode an mp3 to raw mono PCM via ffmpeg (build/test
// tooling only, per project convention) and score how well a set of boundary
// times lands in the RMS envelope's low-energy troughs.
function decodePCM(mp3Path) {
  const r = spawnSync('ffmpeg', [
    '-v', 'error', '-i', mp3Path, '-f', 'f32le', '-ar', String(ALIGN_SAMPLE_RATE), '-ac', '1', '-',
  ], { encoding: 'buffer', maxBuffer: 1024 * 1024 * 64 });
  if (r.status !== 0 || !r.stdout || !r.stdout.length) {
    throw new Error(`ffmpeg PCM decode failed for ${mp3Path}: ${r.stderr}`);
  }
  const buf = r.stdout;
  const n = Math.floor(buf.length / 4);
  const samples = new Float32Array(n);
  for (let i = 0; i < n; i++) samples[i] = buf.readFloatLE(i * 4);
  return samples;
}

function rmsEnvelope(samples) {
  const envelope = [];
  for (let i = 0; i + ALIGN_WINDOW <= samples.length; i += ALIGN_HOP) {
    let sum = 0;
    for (let j = 0; j < ALIGN_WINDOW; j++) { const v = samples[i + j]; sum += v * v; }
    envelope.push({ t: (i + ALIGN_WINDOW / 2) / ALIGN_SAMPLE_RATE, rms: Math.sqrt(sum / ALIGN_WINDOW) });
  }
  return envelope;
}

// 1 = boundary sits exactly at the envelope's quietest point in this clip, 0 = at its loudest.
function troughnessAt(envelope, min, range, t) {
  let best = envelope[0], bestD = Infinity;
  for (const e of envelope) {
    const d = Math.abs(e.t - t);
    if (d < bestD) { bestD = d; best = e; }
  }
  const norm = range > 0 ? (best.rms - min) / range : 0;
  return 1 - Math.min(1, Math.max(0, norm));
}

function scoreBoundaries(envelope, min, range, boundaries) {
  if (!boundaries.length) return null;
  let sum = 0;
  for (const t of boundaries) sum += troughnessAt(envelope, min, range, t);
  return sum / boundaries.length;
}

function meanLuminanceUpperHalf(png) {
  const { width, height, data } = png;
  const halfH = Math.floor(height / 2);
  let sum = 0;
  const count = halfH * width;
  for (let y = 0; y < halfH; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      sum += 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
    }
  }
  return count ? sum / count : 0;
}

// E2g: mean luminance over the TOP strip only — sky, above the rooflines at
// every bookmark pose. Street lights cannot reach it, which is the whole
// point: once the street is lit, upper-half luminance stops separating "night"
// from "day", but the sky still does.
function meanLuminanceTopStrip(png, frac = 0.15) {
  const { width, height, data } = png;
  const rows = Math.max(1, Math.floor(height * frac));
  let sum = 0;
  const count = rows * width;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      sum += 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
    }
  }
  return count ? sum / count : 0;
}

const suiteStartedAt = Date.now();

// Runs the full gate as N child processes and merges their verdicts. Bundles
// ONCE first, then hands each child --no-bundle. Deliberately dumb about
// results: it does not re-interpret them, it replays each shard's own report
// and fails if any shard fails or if the partition does not cover REGIONS.
function runSharded() {
  const covered = new Set(SHARDS.flat());
  const missing = REGIONS.filter((r) => !covered.has(r));
  const unknown = [...covered].filter((r) => !REGIONS.includes(r));
  if (missing.length || unknown.length) {
    console.error(`[smoke] --shards: the partition is wrong — missing ${missing.join(', ') || 'nothing'}; unknown ${unknown.join(', ') || 'none'}. ` +
      'Fix SHARDS in scripts/smoke.mjs. Refusing to run: a shard set that does not cover every region is a green run that checked less than it claims.');
    process.exit(1);
  }

  console.log('[smoke] bundling once for all shards...');
  execSync('npm run bundle', { cwd: root, stdio: 'inherit' });

  const passthrough = process.argv.slice(2).filter((a) =>
    !a.startsWith('--shards') && !a.startsWith('--only=') && a !== '--no-bundle');
  const startedAt = Date.now();
  const children = SHARDS.map((regions, i) => {
    const args = [fileURLToPath(import.meta.url), '--no-bundle', `--only=${regions.join(',')}`, ...passthrough];
    return new Promise((resolve) => {
      const child = spawn('node', args, { cwd: root, encoding: 'utf8' });
      let out = '';
      child.stdout.on('data', (d) => { out += d; });
      child.stderr.on('data', (d) => { out += d; });
      child.on('close', (code) => resolve({ i, code, out, regions }));
    });
  });

  return Promise.all(children).then((shards) => {
    let failed = 0, passes = 0, fails = 0;
    for (const s of shards) {
      console.log(`\n${'='.repeat(72)}\n[smoke] shard ${s.i + 1}/${SHARDS.length} (${s.regions.join(', ')}) exited ${s.code}\n${'='.repeat(72)}`);
      console.log(s.out.trimEnd());
      passes += (s.out.match(/^ +PASS /gm) || []).length;
      fails += (s.out.match(/^ +FAIL /gm) || []).length;
      if (s.code !== 0) failed++;
    }
    const wall = ((Date.now() - startedAt) / 1000).toFixed(0);
    console.log(`\n[smoke] ${SHARDS.length} shards, ${wall}s wall: ${passes} PASS, ${fails} FAIL ` +
      '(shards duplicate the always-on boot checks, so the PASS total exceeds a serial run\'s).');
    // Each shard prints its own "PARTIAL" — correctly, since each ran a
    // subset. The union is not partial, and this is the line that says so on
    // the evidence rather than on trust.
    console.log(`[smoke] partition covers all ${REGIONS.length} regions (checked against REGIONS before running); ` +
      'the unregioned boot checks run in every shard.');
    console.log(`[smoke] ${failed === 0 ? 'all shards passed' : `FAILED — ${failed} shard(s)`}`);
    process.exit(failed === 0 && fails === 0 ? 0 : 1);
  });
}

if (SHARDS_ARG) {
  await runSharded();
}

async function main() {
  const skipped = [];  // questions this run did NOT ask — flips the summary to PARTIAL
  const notRun = [];   // informational extras that gate nothing — reported, never PARTIAL
  const results = []; // { name, pass, detail }
  let server;
  let browser;
  let exitCode = 0;

  try {
    if (NO_BUNDLE) {
      // A shard child: the parent bundled once. Two children running
      // `npm run bundle` at the same time would race on the same output file,
      // and the loser serves a half-written bundle to its own browser.
      console.log('[smoke] --no-bundle: using the existing src/dev-bundle.js');
    } else {
      console.log('[smoke] bundling...');
      execSync('npm run bundle', { cwd: root, stdio: 'inherit' });
    }

    if (region('alignment')) {
    // --- E5a gate 5a: phrase-alignment opposed pair ---
    // No server/browser needed — pure Node, straight off assets/readings.json
    // and assets/audio/*.mp3. Independent of the bake's own silencedetect
    // call (see decodePCM/rmsEnvelope above).
    console.log('[smoke] E5a alignment gate (5a)...');
    {
      const readingsPath = join(root, 'assets/readings.json');
      if (!existsSync(readingsPath)) {
        results.push({ name: 'E5a: phrase alignment beats flat + shifted controls', pass: false, detail: 'assets/readings.json missing — run scripts/build-readings.mjs' });
      } else {
        const readings = JSON.parse(readFileSync(readingsPath, 'utf8'));
        const allIds = Object.keys(readings).sort();

        // --- corpus-wide invariants, all 123 comics, not the 12-comic sample
        // ---
        // Phrase times must be non-decreasing and every phrase must last a
        // non-zero time. This is an absolute invariant, free to check, and it
        // catches a whole failure class the troughness score below cannot see:
        // the alignment scores boundaries against the audio, so it is blind to
        // the ORDER they come in. 25 of 123 comics once shipped with an
        // inverted boundary (the runtime highlight stalled, then jumped) at a
        // troughness of 0.965 — that gate passed throughout.
        const orderBad = [];
        for (const id of allIds) {
          const ph = readings[id].phrases || [];
          for (let i = 0; i < ph.length; i++) {
            if (i > 0 && ph[i].start < ph[i - 1].start) { orderBad.push(`${id}[${i}]: start ${ph[i].start} < previous ${ph[i - 1].start}`); break; }
            if (ph[i].end <= ph[i].start) { orderBad.push(`${id}[${i}]: zero-length (${ph[i].start})`); break; }
          }
        }
        results.push({
          name: 'E5a: phrase times are monotonic and non-zero across the whole corpus',
          pass: orderBad.length === 0,
          detail: orderBad.length ? `${orderBad.length}/${allIds.length} comics bad — ${orderBad.slice(0, 3).join('; ')}` : `${allIds.length} comics clean`,
        });

        // Sample by hash, not by sort order: `.sort().slice(0, 12)` drew every
        // id beginning "0", which is a systematic slice of the corpus rather
        // than a spread of it — the two comics with defective audio tails both
        // sat outside it. Deterministic (hash32 of the id), so the sample is
        // the same every run.
        const ids = allIds
          .map((id) => {
            let h = 0x811c9dc5;
            for (let i = 0; i < id.length; i++) { h ^= id.charCodeAt(i); h = Math.imul(h, 16777619); }
            return { id, h: h >>> 0 };
          })
          .sort((a, b) => a.h - b.h)
          .slice(0, ALIGN_SAMPLE_IDS_COUNT)
          .map((x) => x.id);
        let shippedSum = 0, flatSum = 0, shiftedSum = 0, n = 0;
        for (const id of ids) {
          const reading = readings[id];
          const mp3Path = join(root, 'assets/audio', `${id}.mp3`);
          if (!existsSync(mp3Path) || !reading.phrases || reading.phrases.length < 2) continue;
          const samples = decodePCM(mp3Path);
          const envelope = rmsEnvelope(samples);
          if (!envelope.length) continue;
          const rmss = envelope.map((e) => e.rms);
          const min = Math.min(...rmss), max = Math.max(...rmss);
          const range = max - min;
          const duration = reading.duration;
          const N = reading.phrases.length;

          // Interior boundaries only — transitions BETWEEN phrases, not the
          // clip's own start/end (which trivially sit at silence for every
          // control alike and would inflate all three scores equally).
          const shippedB = reading.phrases.slice(1).map((p) => p.start);
          const flatB = Array.from({ length: N - 1 }, (_, i) => ((i + 1) / N) * duration);
          const shiftedB = shippedB.map((t) => Math.min(duration, t + ALIGN_SHIFT_SEC));

          shippedSum += scoreBoundaries(envelope, min, range, shippedB);
          flatSum += scoreBoundaries(envelope, min, range, flatB);
          shiftedSum += scoreBoundaries(envelope, min, range, shiftedB);
          n++;
        }
        const shippedScore = n ? shippedSum / n : 0;
        const flatScore = n ? flatSum / n : 0;
        const shiftedScore = n ? shiftedSum / n : 0;
        console.log(`[smoke] E5a alignment (mean troughness, 0-1, higher=better; n=${n} comics): ` +
          `shipped=${shippedScore.toFixed(4)}  flat=${flatScore.toFixed(4)}  shifted=${shiftedScore.toFixed(4)}`);
        results.push({
          name: 'E5a: phrase alignment beats flat + shifted controls',
          pass: n > 0 && shippedScore >= flatScore + ALIGN_MARGIN && shippedScore >= shiftedScore + ALIGN_MARGIN,
          detail: `shipped=${shippedScore.toFixed(4)} flat=${flatScore.toFixed(4)} shifted=${shiftedScore.toFixed(4)} (margin ${ALIGN_MARGIN}, n=${n} comics)`,
        });
      }
    }

    endRegion();
    } // end region: alignment
    const port = await getFreePort();
    // Name the renderer in every report: goldens are renderer-specific, so a
    // capture or a diff that does not say which one produced it is evidence
    // nobody can check later.
    console.log(`[smoke] starting server on :${port} — renderer ${LAUNCH_LABEL}`);
    server = spawn('python3', [join(root, 'scripts/serve.py'), String(port)], {
      cwd: join(root, 'src'),
      stdio: 'ignore',
    });
    // The `finally` below covers every ordinary exit, but an interrupted run
    // (Ctrl-C, a harness timeout) never reaches it and leaves the server
    // holding its port — nine strays had piled up from earlier runs before
    // this was added. serve.py also reaps itself when orphaned, which is the
    // only thing that survives a SIGKILL of this process; these handlers just
    // make the common cases immediate rather than waiting on its poll.
    let tearingDown = false;
    for (const sig of ['SIGINT', 'SIGTERM', 'SIGHUP']) {
      process.on(sig, () => {
        if (tearingDown) return; // a second Ctrl-C must not re-enter mid-teardown
        tearingDown = true;
        if (server) server.kill();
        // The browser too. process.exit() below skips the `finally` that
        // would have awaited browser.close(), and close() is async so it
        // cannot be awaited here — kill the process directly instead.
        //
        // MEASURED, and it is defence in depth rather than a fix: SIGTERMing
        // this process with and without these two lines leaks zero browser
        // pids either way, because Playwright's chromium exits when its
        // control pipe closes. Kept because that is an implementation detail
        // of Playwright's launcher, not a contract, and because the check
        // costs nothing. Do not cite it as the reason there are no strays.
        try { if (browser) browser.process()?.kill('SIGKILL'); } catch { /* already gone */ }
        process.exit(130);
      });
    }
    await waitForServer(`http://127.0.0.1:${port}/`);

    browser = await chromium.launch(LAUNCH_OPTS);

    // --- boot #1: invariants + goldens ---
    const { context: ctx1, page: page1, consoleMessages: pc1, preFreezeRafCount: preFreezeRafCount1 } = await bootPage(browser, port);
    const inv1 = await getInvariants(page1);

    // E2c.3b.1: the deterministic-boot fix by construction — main.js suppresses
    // its first animate() call while __mcgrotFreezeAtBoot is set, so no
    // real-time frame should ever run before pauseAuto() takes over.
    results.push({
      name: 'pre-pause frame count is 0 (deterministic boot)',
      pass: preFreezeRafCount1 === 0,
      detail: `rAF callbacks before pauseAuto(): ${preFreezeRafCount1}`,
    });

    const allConsoleErrors = summarizeConsole(pc1, inv1.consoleErrors);
    results.push({
      name: 'console clean',
      pass: allConsoleErrors.length === 0,
      detail: allConsoleErrors.length ? allConsoleErrors.join(' | ') : 'no errors',
    });

    const missingUpdaters = EXPECTED_UPDATERS.filter((n) => !inv1.updaterNames.includes(n));
    const extraUpdaters = inv1.updaterNames.filter((n) => !EXPECTED_UPDATERS.includes(n));
    results.push({
      name: 'updater wiring',
      pass: missingUpdaters.length === 0 && extraUpdaters.length === 0,
      detail: `expected ${EXPECTED_UPDATERS.length}, got ${inv1.updaterNames.length}` +
        (missingUpdaters.length ? `; missing: ${missingUpdaters.join(',')}` : '') +
        (extraUpdaters.length ? `; unexpected: ${extraUpdaters.join(',')}` : ''),
    });

    // E2e.1 item 7: proximity-audio's listener and ambience's bed must share
    // one AudioContext, both constructed inside the title-card gesture — see
    // src/main.js's title-card onEnter. bootPage's page.click('#title-enter')
    // above is the gesture. This is what's verifiable from a desktop headless
    // browser; the actual iOS Safari symptom (readers silent, ambience audible)
    // needs a real device — Dan's check, not this rig's.
    const audioCheck = await page1.evaluate(() => {
      const dbg = window.__mcgrotDebug;
      const listenerCtx = dbg.proximityAudio.listener && dbg.proximityAudio.listener.context;
      const ambienceCtx = dbg.ambience && dbg.ambience.context;
      return {
        sameObject: !!listenerCtx && !!ambienceCtx && listenerCtx === ambienceCtx,
        listenerState: listenerCtx ? listenerCtx.state : null,
        ambienceState: ambienceCtx ? ambienceCtx.state : null,
      };
    });
    results.push({
      name: 'shared AudioContext (desktop-verifiable only; iOS needs a device check)',
      pass: audioCheck.sameObject && audioCheck.listenerState === 'running',
      detail: `same object=${audioCheck.sameObject}, listener.state=${audioCheck.listenerState}, ambience.state=${audioCheck.ambienceState}`,
    });

    // E2c.3a item 0: a throw inside onEnter's shared-context preamble must
    // not prevent ambience.start()/proximityAudio.resume() below it — the
    // observed iOS symptom (no sound at all) is exactly what happens when it
    // does. addInitScript sets the fault-injection flag before any page
    // script runs, so it's live for the title-card click below. A fresh
    // context/page — bootPage's shared page1 must never see this flag.
    {
      const faultContext = await newContext(browser, { viewport: { width: 1280, height: 800 } });
      await faultContext.addInitScript(() => { window.__mcgrotForceAudioContextError = true; });
      const faultPage = await faultContext.newPage();
      const faultConsole = [];
      faultPage.on('console', (msg) => { if (msg.type() === 'error') faultConsole.push(msg.text()); });
      faultPage.on('pageerror', (err) => faultConsole.push(String(err)));
      await faultPage.goto(`http://localhost:${port}/`);
      await faultPage.waitForFunction(() => !!(window.__mcgrotDebug && window.__mcgrotDebug.world));
      await faultPage.click('#title-enter');
      const faultCheck = await faultPage.evaluate(() => {
        const dbg = window.__mcgrotDebug;
        const listenerCtx = dbg.proximityAudio.listener && dbg.proximityAudio.listener.context;
        const ambienceCtx = dbg.ambience && dbg.ambience.context;
        return {
          ambienceStarted: !!ambienceCtx,
          listenerStarted: !!listenerCtx,
          ambienceState: ambienceCtx ? ambienceCtx.state : null,
        };
      });
      results.push({
        name: 'onEnter: shared-context throw does not swallow ambience/proximityAudio',
        pass: faultCheck.ambienceStarted && faultCheck.listenerStarted,
        detail: `ambience.context=${faultCheck.ambienceStarted}, proximityAudio.listener=${faultCheck.listenerStarted}, ambience.state=${faultCheck.ambienceState}`,
      });
      await faultContext.close();
    }

    if (region('journal')) {
    // --- E5b.1: the journal ---
    // Entirely on its own fresh boot (jPage/jCtx), NOT page1: these tests
    // deliberately step real-time frames (leithers/birds/vermin) to bring a
    // vendor/litter comic into interact range, and those subsystems are
    // excluded from computeGeomHash precisely because they move under
    // stepFrame — doing that to page1 before its own FIRST bookmark visit
    // would desync the 'draw calls +/-0 (E2c.1)' gate below from its frozen
    // budget.json baseline (measured: it did, on skyline, before this was
    // split out — see docs/VALIDATION.md's note on that gate).
    console.log('[smoke] E5b.1 journal gate...');
    {
      const { context: jCtx, page: jPage } = await bootPage(browser, port);

      // HUD copy unchanged — the gate that protects 27 desktop goldens from
      // this milestone and every one after it (see the brief's own warning:
      // a counter is the obvious place to put in #hud, and it is the one
      // place that costs a recapture).
      //
      // E5c changed it on purpose and paid the recapture: #hud gained a
      // #hud-day line above the controls hint, and 38 of the 40 goldens
      // moved. The two that did not are mobile:title and mobile:comic, where
      // the title card and the comic overlay cover the HUD — a useful sign
      // the audit discriminates rather than blanket-flagging. The hint half
      // is still asserted byte-for-byte here, so an accidental edit to it
      // still goes red; the day half is covered by the E5c gates in the
      // moments region, which check it is derived rather than literal.
      const hudText = await jPage.evaluate(() => document.getElementById('hud-hint').textContent);
      results.push({
        name: 'E5b.1: #hud-hint copy unchanged',
        pass: hudText === 'WASD — move, drag — look',
        detail: `#hud-hint textContent: ${JSON.stringify(hudText)}`,
      });

      // Panel closed by default — no golden can move.
      const panelClosed = await jPage.evaluate(() => {
        const el = document.getElementById('journal-panel');
        return !!el && getComputedStyle(el).display === 'none';
      });
      results.push({
        name: 'E5b.1: journal panel closed by default',
        pass: panelClosed,
        detail: `#journal-panel closed=${panelClosed}`,
      });

      // Denominator is derived, not literal. Computed independently here
      // straight off assets/catalog.json (the same test proximity-audio.js
      // uses to decide whether a voice can ever play: npc.comic.audio
      // truthy), then compared against the runtime value. Opposed half:
      // must not be 418 (the aspirational full cast) — the number a
      // hardcoded denominator would most plausibly carry.
      const catalogPath = join(root, 'assets/catalog.json');
      const catalog = existsSync(catalogPath) ? JSON.parse(readFileSync(catalogPath, 'utf8')) : { comics: [] };
      const expectedDenominator = catalog.comics.filter((c) => c.npc && c.audio).length;
      const runtimeCounts = await jPage.evaluate(() => window.__mcgrotDebug.journal.counts());
      // The opposed half. Asserting runtime === catalog-count proves nothing
      // on its own: every built vendor currently has audio, so the derived
      // value collides with npcs.length AND with a hardcoded 124 — all three
      // pass (measured). `!== 418` only rules out a number no plausible
      // implementation produces. So run the module's own counter over a
      // deliberately truncated cast and require it to track: a literal cannot.
      const truncated = await jPage.evaluate(() => {
        const dbg = window.__mcgrotDebug;
        const short = dbg.npcs.npcs.slice(0, 5);
        return {
          got: dbg.countVendorsWithAudio(short),
          want: short.filter((n) => n.comic && n.comic.audio).length,
          full: dbg.countVendorsWithAudio(dbg.npcs.npcs),
          // Every vendor built today has audio, so a truncated real cast
          // cannot tell the derived count apart from a plain `npcs.length`
          // (verified: both pass). A synthetic cast with one silent vendor
          // is the only input that separates them — and it is exactly the
          // case that arrives the day a vendor ships without a voice.
          synthetic: dbg.countVendorsWithAudio([
            { comic: { audio: 'a.mp3' } }, { comic: {} }, { comic: { audio: 'b.mp3' } },
          ]),
        };
      });
      const derives = truncated.got === truncated.want && truncated.got !== truncated.full &&
        truncated.synthetic === 2;
      results.push({
        name: 'E5b.1: denominator is derived from the built cast, not a literal (opposed pair)',
        pass: runtimeCounts.denominator === expectedDenominator && derives,
        detail: `runtime=${runtimeCounts.denominator}, expected (from catalog.json)=${expectedDenominator}; ` +
          `truncated cast of 5 -> ${truncated.got} (want ${truncated.want}, and must differ from the full ${truncated.full}); ` +
          `synthetic cast of 3 with one silent vendor -> ${truncated.synthetic} (want 2)`,
      });

      // Counting is earned: standing near a busking vendor (in range, never
      // opened) must credit nothing; opening it (E, past the hush) must
      // credit exactly one, and idempotently — reopening the same vendor
      // must not inflate the count.
      const beforeOpen = await jPage.evaluate(() => {
        const dbg = window.__mcgrotDebug;
        const npc = dbg.npcs.npcs[2]; // a fresh id, untouched by the AudioContext check above
        const p = npc.group.position;
        // Well inside proximityAudio's PLAY_RANGE (18m) so the ambient
        // busking voice actually starts — walking past must not count.
        dbg.camera.position.set(p.x + 10, dbg.camera.position.y, p.z);
        dbg.camera.lookAt(p.x, dbg.camera.position.y, p.z);
        dbg.stepFrames(5);
        return { heard: dbg.journal.counts().heard, id: npc.comic.id };
      });
      results.push({
        name: 'E5b.1: walking past a busking vendor credits nothing',
        pass: beforeOpen.heard === 0,
        detail: `heard=${beforeOpen.heard} after standing in busking range without opening`,
      });

      await jPage.evaluate(() => {
        const dbg = window.__mcgrotDebug;
        const npc = dbg.npcs.npcs[2];
        const p = npc.group.position;
        dbg.camera.position.set(p.x + 2, dbg.camera.position.y, p.z); // inside interact.js's 8m RANGE
        dbg.camera.lookAt(p.x, dbg.camera.position.y, p.z);
        dbg.stepFrames(3);
      });
      await jPage.keyboard.press('KeyE'); // opens the overlay; hush is still pending, no credit yet
      const atOpen = await jPage.evaluate(() => window.__mcgrotDebug.journal.counts().heard);
      // Real wall-clock wait for HUSH_MS (interact.js's setTimeout, not
      // stepFrame-driven) — same reasoning as the E5a hush tests elsewhere
      // in this file: the ritual's beat runs on a real timer.
      await jPage.waitForTimeout(HUSH_WAIT_MS);
      const afterHush = await jPage.evaluate(() => window.__mcgrotDebug.journal.counts().heard);
      // Reopen: close, walk back in range, press E again — must stay at 1.
      await jPage.keyboard.press('Escape');
      await jPage.evaluate(() => window.__mcgrotDebug.stepFrames(3));
      await jPage.keyboard.press('KeyE');
      await jPage.waitForTimeout(HUSH_WAIT_MS);
      const afterReopen = await jPage.evaluate(() => window.__mcgrotDebug.journal.counts().heard);
      await jPage.keyboard.press('Escape');
      results.push({
        name: 'E5b.1: opening a reading credits exactly one comic, past the hush, idempotently',
        pass: atOpen === 0 && afterHush === 1 && afterReopen === 1,
        detail: `heard at open=${atOpen} (must be 0, credit lands past the hush), after hush=${afterHush}, after reopening same vendor=${afterReopen}`,
      });

      // Found: reading a litter comic off the ground credits it immediately
      // (no hush ritual for litter).
      const litterResult = await jPage.evaluate(() => {
        const dbg = window.__mcgrotDebug;
        const item = dbg.litter.items[0];
        if (!item) return { available: false };
        const before = dbg.journal.counts().found;
        dbg.camera.position.set(item.x, dbg.camera.position.y, item.z);
        dbg.camera.lookAt(item.x + 1, dbg.camera.position.y, item.z);
        dbg.stepFrames(3);
        return { available: true, before, id: item.comic.id };
      });
      if (litterResult.available) {
        await jPage.keyboard.press('KeyE');
        const afterFound = await jPage.evaluate(() => window.__mcgrotDebug.journal.counts().found);
        await jPage.keyboard.press('Escape');
        results.push({
          name: 'E5b.1: reading a litter comic credits it as found',
          pass: litterResult.before === 0 && afterFound === 1,
          detail: `found before=${litterResult.before}, after reading=${afterFound}`,
        });
      } else {
        results.push({ name: 'E5b.1: reading a litter comic credits it as found', pass: false, detail: 'no litter items in this build' });
      }

      // Persistence round-trip, in a fresh page sharing page1's context (same
      // localStorage). Opposed half: cleared storage restores to zero.
      const heardIdBeforeReload = await jPage.evaluate(() => window.__mcgrotDebug.journal.list()[0].id);
      const page1b = await jCtx.newPage();
      await page1b.goto(`http://localhost:${port}/`);
      await page1b.click('#title-enter');
      await page1b.waitForFunction(() => !!(window.__mcgrotDebug && window.__mcgrotDebug.journal));
      const restored = await page1b.evaluate(() => window.__mcgrotDebug.journal.counts());
      const restoredTopId = await page1b.evaluate(() => {
        const list = window.__mcgrotDebug.journal.list();
        return list.length ? list[0].id : null;
      });
      await page1b.evaluate(() => localStorage.removeItem('mcgrot.journal.v1'));
      const page1c = await jCtx.newPage();
      await page1c.goto(`http://localhost:${port}/`);
      await page1c.click('#title-enter');
      await page1c.waitForFunction(() => !!(window.__mcgrotDebug && window.__mcgrotDebug.journal));
      const afterClear = await page1c.evaluate(() => window.__mcgrotDebug.journal.counts());
      results.push({
        name: 'E5b.1: localStorage persistence round-trip (and cleared storage restores to zero)',
        pass: restored.heard >= 1 && restored.found >= 1 && restoredTopId === heardIdBeforeReload &&
          afterClear.heard === 0 && afterClear.found === 0,
        detail: `reload: heard=${restored.heard} found=${restored.found} topId=${restoredTopId} (expected ${heardIdBeforeReload}); ` +
          `after clearing storage: heard=${afterClear.heard} found=${afterClear.found}`,
      });
      await page1b.close();
      await page1c.close();

      // Storage failure is survivable — force setItem to throw (Safari
      // private-mode's actual behaviour) and assert the reading still
      // opens, plays, and the session-local count still increments. Same
      // fault-injection idiom as the AudioContext throw above, but patching
      // Storage.prototype rather than a debug flag, since journal.js's
      // fail-soft is a plain try/catch around localStorage itself.
      const faultCtx = await newContext(browser, { viewport: { width: 1280, height: 800 } });
      await faultCtx.addInitScript(() => {
        Storage.prototype.setItem = function () { throw new Error('[debug] forced storage failure'); };
      });
      const faultPage = await faultCtx.newPage();
      const faultConsole = [];
      faultPage.on('console', (msg) => { if (msg.type() === 'error') faultConsole.push(msg.text()); });
      faultPage.on('pageerror', (err) => faultConsole.push(String(err)));
      await faultPage.goto(`http://localhost:${port}/`);
      await faultPage.waitForFunction(() => !!(window.__mcgrotDebug && window.__mcgrotDebug.journal));
      await faultPage.click('#title-enter');
      const faultOpen = await faultPage.evaluate(() => {
        const dbg = window.__mcgrotDebug;
        const npc = dbg.npcs.npcs[3];
        const p = npc.group.position;
        dbg.camera.position.set(p.x + 2, dbg.camera.position.y, p.z);
        dbg.camera.lookAt(p.x, dbg.camera.position.y, p.z);
        dbg.stepFrames(3);
      });
      await faultPage.keyboard.press('KeyE');
      const faultOverlayOpen = await faultPage.evaluate(() => document.getElementById('comic-overlay').style.display === 'flex');
      await faultPage.waitForTimeout(HUSH_WAIT_MS);
      const faultCounts = await faultPage.evaluate(() => window.__mcgrotDebug.journal.counts());
      results.push({
        name: 'E5b.1: a throwing localStorage.setItem does not break the reading or the session count',
        pass: faultOverlayOpen && faultCounts.heard === 1 && faultConsole.length === 0,
        detail: `overlay opened=${faultOverlayOpen}, session heard=${faultCounts.heard}, console errors=${faultConsole.length}`,
      });
      await faultCtx.close();
      await jCtx.close();
    }

    endRegion();
    } // end region: journal
    if (region('anchors')) {
    // --- E5b.2: the dozen anchor readers ---
    console.log('[smoke] E5b.2 anchors gate...');
    {
      // Forced explicitly off (not relying on whichever way the shipped
      // default currently points) so this gate means the same thing before
      // AND after the enable commit flips ANCHORS_ENABLED.
      const anCtx = await newContext(browser, { viewport: { width: 1280, height: 800 } });
      await anCtx.addInitScript(() => {
        window.__mcgrotFreezeAtBoot = true;
        window.__mcgrotForceAnchors = false;
      });
      const anPage = await anCtx.newPage();
      await anPage.goto(`http://localhost:${port}/`);
      await anPage.click('#title-enter');
      await anPage.evaluate(() => {
        const el = document.getElementById('title-card');
        if (el) el.style.transition = 'none';
      });
      await anPage.waitForFunction(() => !!(window.__mcgrotDebug && window.__mcgrotDebug.world));
      await anPage.evaluate(() => window.__mcgrotDebug.pauseAuto());
      await anPage.evaluate((h) => window.__mcgrotDebug.setTime(h), SMOKE_HOUR);
      await anPage.evaluate(() => window.__mcgrotDebug.setWeather('overcast'));

      // Sequence intact + non-anchor vendors did not move: window.__mcgrotDebug
      // .anchorLayout(enabled) is a PURE re-derivation off the same list/
      // streetLine this boot already placed vendors from (src/npcs.js's
      // computeVendorLayout, also used to build the live scene) — no second
      // scene build needed to compare both flag states in one page.
      const layout = await anPage.evaluate(() => {
        const dbg = window.__mcgrotDebug;
        return { off: dbg.anchorLayout(false), on: dbg.anchorLayout(true), anchorSet: dbg.anchorSet };
      });

      // anchorLayout() is PURE — comparing anchorLayout(false) against
      // anchorLayout(true) is two calls to one function, and passes whether
      // or not buildNpcs ever uses the result. This page booted with the flag
      // forced OFF, so its scene must equal anchorLayout(false) exactly; the
      // flag-on page below is checked against anchorLayout(true) the same way.
      // Without this the whole anchor gate block is a tautology.
      const sceneMatchOff = await anPage.evaluate(() => {
        const dbg = window.__mcgrotDebug;
        const byId = new Map(dbg.anchorLayout(false).map((p) => [p.id, p]));
        let worst = 0, worstId = null, anchorsFlagged = 0;
        for (const npc of dbg.npcs.npcs) {
          if (npc.isAnchor) anchorsFlagged++;
          const p = byId.get(npc.comic.id);
          if (!p) return { missing: npc.comic.id };
          const d = Math.hypot(npc.group.position.x - p.px, npc.group.position.z - p.pz);
          if (d > worst) { worst = d; worstId = npc.comic.id; }
        }
        return { worst, worstId, anchorsFlagged, n: dbg.npcs.npcs.length };
      });
      results.push({
        name: 'E5b.2: the BUILT scene matches the layout function (flag off)',
        pass: !sceneMatchOff.missing && sceneMatchOff.worst < 0.001 && sceneMatchOff.anchorsFlagged === 0,
        detail: sceneMatchOff.missing
          ? `vendor ${sceneMatchOff.missing} absent from the layout`
          : `${sceneMatchOff.n} vendors, max |built - layout(false)| = ${sceneMatchOff.worst.toFixed(4)}m, ` +
            `${sceneMatchOff.anchorsFlagged} flagged isAnchor (want 0 with the flag off)`,
      });

      const sameLength = layout.off.length === layout.on.length && layout.off.length > 0;
      const sameSequence = sameLength && layout.off.every((o, i) => o.id === layout.on[i].id);
      const NUDGE_TOLERANCE = 0.1;
      let nonAnchorsUnmoved = true;
      let anchorsMovedCorrectly = true;
      let anchorCount = 0;
      const anchorById = new Map(layout.anchorSet.map((a) => [a.id, a]));
      for (let i = 0; i < layout.off.length; i++) {
        const off = layout.off[i], on = layout.on[i];
        if (off.isAnchor) { nonAnchorsUnmoved = false; continue; } // off must never mark an anchor
        // side/coat are index-derived and must be identical regardless of flag.
        if (off.side !== on.side || off.coatIndex !== on.coatIndex) nonAnchorsUnmoved = false;
        if (on.isAnchor) {
          anchorCount++;
          const def = anchorById.get(on.id);
          const nudgeOk = def && Math.abs(on.dist - def.chainage) <= NUDGE_TOLERANCE;
          const posMoved = Math.hypot(on.px - off.px, on.pz - off.pz) > 0.01;
          if (!nudgeOk || !posMoved) anchorsMovedCorrectly = false;
        } else {
          // non-anchor: position must be EXACTLY unchanged between flag states.
          if (off.px !== on.px || off.pz !== on.pz) nonAnchorsUnmoved = false;
        }
      }
      results.push({
        name: 'E5b.2: non-anchor vendors did not move (flag on vs off), exactly 12 anchors nudged',
        pass: sameLength && nonAnchorsUnmoved && anchorsMovedCorrectly && anchorCount === 12,
        detail: `${layout.off.length} vendors compared, ${anchorCount} anchors moved (want 12), ` +
          `non-anchors unmoved=${nonAnchorsUnmoved}, anchor nudges within ${NUDGE_TOLERANCE}m=${anchorsMovedCorrectly}`,
      });
      // Comparing on-vs-off cannot catch a reindex: reordering `list` reorders
      // BOTH sides identically and this still passes. The real tripwire is the
      // built scene's order against catalog.json's own order, read in Node.
      const catalogOrder = (existsSync(join(root, 'assets/catalog.json'))
        ? JSON.parse(readFileSync(join(root, 'assets/catalog.json'), 'utf8')).comics
        : []).filter((c) => c.npc).map((c) => c.id);
      const sceneOrder = await anPage.evaluate(() => window.__mcgrotDebug.npcs.npcs.map((n) => n.comic.id));
      const orderMatchesCatalog = sceneOrder.length === catalogOrder.length &&
        sceneOrder.every((id, i) => id === catalogOrder[i]);
      const firstDivergence = sceneOrder.findIndex((id, i) => id !== catalogOrder[i]);
      results.push({
        name: 'E5b.2: the sequence is intact (built scene order === catalog order, and stable across flag states)',
        pass: sameSequence && orderMatchesCatalog,
        detail: orderMatchesCatalog
          ? `all ${sceneOrder.length} ids match catalog.json order, and are identical flag on vs off`
          : `scene order diverges from catalog.json at index ${firstDivergence} ` +
            `(scene=${sceneOrder[firstDivergence]}, catalog=${catalogOrder[firstDivergence]}) — REINDEX`,
      });

      // Anchor denominator is derived, not typed — the same opposed-pair
      // shape as E5b.1's countVendorsWithAudio gate: journal.js's counter
      // (countAnchors) is a real `.length` over ANCHOR_SET, run here over a
      // deliberately truncated copy and required to track — a typed literal
      // could not.
      const anchorDenomCheck = await anPage.evaluate(() => {
        const dbg = window.__mcgrotDebug;
        return {
          full: dbg.anchorSet.length,
          truncated: dbg.anchorSet.slice(0, 4).length,
        };
      });
      results.push({
        name: 'E5b.2: anchor denominator is derived from ANCHOR_SET.length, not a literal',
        pass: anchorDenomCheck.full === 12 && anchorDenomCheck.full !== 418 && anchorDenomCheck.truncated === 4,
        detail: `runtime anchorSet.length=${anchorDenomCheck.full}, truncated copy of 4 -> ${anchorDenomCheck.truncated}`,
      });

      // Flag genuinely gates it: with the shipped default off, journal copy
      // must render byte-identical to E5b.1 (no anchors clause at all).
      const flagOffText = await anPage.evaluate(() => document.getElementById('journal-counts')?.textContent || '');
      results.push({
        name: 'E5b.2: flag off renders journal copy byte-identical to E5b.1 (no anchors clause)',
        pass: !flagOffText.includes('anchors'),
        detail: `journal-counts text: ${JSON.stringify(flagOffText)}`,
      });

      await anCtx.close();

      // Anchor credit is earned — needs the flag genuinely ON, which the
      // shipped default is not until the enable commit. Forced via the same
      // localStorage-free override pattern as __mcgrotForceDaySeed/
      // __mcgrotFreezeAtBoot: set before any page script runs.
      const onCtx = await newContext(browser, { viewport: { width: 1280, height: 800 } });
      await onCtx.addInitScript(() => {
        window.__mcgrotFreezeAtBoot = true;
        window.__mcgrotForceAnchors = true;
      });
      const onPage = await onCtx.newPage();
      await onPage.goto(`http://localhost:${port}/`);
      await onPage.click('#title-enter');
      await onPage.evaluate(() => {
        const el = document.getElementById('title-card');
        if (el) el.style.transition = 'none';
      });
      await onPage.waitForFunction(() => !!(window.__mcgrotDebug && window.__mcgrotDebug.world));
      await onPage.evaluate(() => window.__mcgrotDebug.pauseAuto());
      await onPage.evaluate((h) => window.__mcgrotDebug.setTime(h), SMOKE_HOUR);
      await onPage.evaluate(() => window.__mcgrotDebug.setWeather('overcast'));

      // The flag-on half of the built-scene check: the twelve must actually be
      // standing at their landmark chainages in the SCENE, not merely in the
      // layout function's return value.
      const sceneMatchOn = await onPage.evaluate(() => {
        const dbg = window.__mcgrotDebug;
        const byId = new Map(dbg.anchorLayout(true).map((p) => [p.id, p]));
        const anchorIds = new Set(dbg.anchorSet.map((a) => a.id));
        let worst = 0, flagged = 0, movedFromBase = 0;
        const base = new Map(dbg.anchorLayout(false).map((p) => [p.id, p]));
        for (const npc of dbg.npcs.npcs) {
          const p = byId.get(npc.comic.id);
          if (!p) continue;
          const d = Math.hypot(npc.group.position.x - p.px, npc.group.position.z - p.pz);
          if (d > worst) worst = d;
          if (npc.isAnchor) {
            flagged++;
            const b = base.get(npc.comic.id);
            if (b && Math.hypot(npc.group.position.x - b.px, npc.group.position.z - b.pz) > 0.01) movedFromBase++;
          }
          if (npc.isAnchor !== anchorIds.has(npc.comic.id)) worst = Infinity; // wrong vendor flagged
        }
        return { worst, flagged, movedFromBase };
      });
      results.push({
        name: 'E5b.2: the BUILT scene matches the layout function (flag on), and the twelve really moved',
        pass: sceneMatchOn.worst < 0.001 && sceneMatchOn.flagged === 12 && sceneMatchOn.movedFromBase === 12,
        detail: `max |built - layout(true)| = ${sceneMatchOn.worst.toFixed(4)}m, ` +
          `${sceneMatchOn.flagged} flagged isAnchor (want 12), ${sceneMatchOn.movedFromBase} actually displaced from their index position (want 12)`,
      });

      const onCopy = await onPage.evaluate(() => document.getElementById('journal-counts')?.textContent || '');
      results.push({
        name: 'E5b.2: flag on shows the "N of 12 anchors" clause',
        pass: /\d+ of 12 anchors/.test(onCopy),
        detail: `journal-counts text: ${JSON.stringify(onCopy)}`,
      });

      const beforeOpen = await onPage.evaluate(() => {
        const dbg = window.__mcgrotDebug;
        const npc = dbg.npcs.npcs.find((n) => n.isAnchor);
        if (!npc) return { available: false };
        const p = npc.group.position;
        // Busking range only (18m) — must credit nothing.
        dbg.camera.position.set(p.x + 10, dbg.camera.position.y, p.z);
        dbg.camera.lookAt(p.x, dbg.camera.position.y, p.z);
        dbg.stepFrames(5);
        return { available: true, anchorsFound: dbg.journal.counts().anchorsFound, landmark: npc.anchorLandmark };
      });
      if (beforeOpen.available) {
        results.push({
          name: 'E5b.2: walking past an anchor credits nothing',
          pass: beforeOpen.anchorsFound === 0,
          detail: `anchorsFound=${beforeOpen.anchorsFound} after standing in busking range near "${beforeOpen.landmark}" without opening`,
        });

        await onPage.evaluate(() => {
          const dbg = window.__mcgrotDebug;
          const npc = dbg.npcs.npcs.find((n) => n.isAnchor);
          const p = npc.group.position;
          dbg.camera.position.set(p.x + 2, dbg.camera.position.y, p.z); // inside interact.js's 8m RANGE
          dbg.camera.lookAt(p.x, dbg.camera.position.y, p.z);
          dbg.stepFrames(3);
        });
        await onPage.keyboard.press('KeyE'); // opens the overlay; hush pending, no credit yet
        const atOpen = await onPage.evaluate(() => window.__mcgrotDebug.journal.counts().anchorsFound);
        await onPage.waitForTimeout(HUSH_WAIT_MS);
        const afterHush = await onPage.evaluate(() => window.__mcgrotDebug.journal.counts().anchorsFound);
        await onPage.keyboard.press('Escape');
        await onPage.evaluate(() => window.__mcgrotDebug.stepFrames(3));
        await onPage.keyboard.press('KeyE'); // reopen the SAME anchor
        await onPage.waitForTimeout(HUSH_WAIT_MS);
        const afterReopen = await onPage.evaluate(() => window.__mcgrotDebug.journal.counts().anchorsFound);
        await onPage.keyboard.press('Escape');
        results.push({
          name: 'E5b.2: hearing an anchor past the hush credits exactly one, idempotently',
          pass: atOpen === 0 && afterHush === 1 && afterReopen === 1,
          detail: `anchorsFound at open=${atOpen} (must be 0), after hush=${afterHush}, after reopening=${afterReopen}`,
        });
      } else {
        results.push({ name: 'E5b.2: walking past an anchor credits nothing', pass: false, detail: 'no anchor npc found with the flag forced on' });
        results.push({ name: 'E5b.2: hearing an anchor past the hush credits exactly one, idempotently', pass: false, detail: 'no anchor npc found with the flag forced on' });
      }

      // Draw calls exactly +/-0 at every bookmark, flag on vs a matched
      // flag-off control — the E2c.1 gate extended to this axis. Two forced,
      // freshly-booted pages (not the live default, which is off pre-enable-
      // commit and on after — this must hold either way).
      const offCtx = await newContext(browser, { viewport: { width: 1280, height: 800 } });
      await offCtx.addInitScript(() => {
        window.__mcgrotFreezeAtBoot = true;
        window.__mcgrotForceAnchors = false;
      });
      const offPage = await offCtx.newPage();
      await offPage.goto(`http://localhost:${port}/`);
      await offPage.click('#title-enter');
      await offPage.evaluate(() => {
        const el = document.getElementById('title-card');
        if (el) el.style.transition = 'none';
      });
      await offPage.waitForFunction(() => !!(window.__mcgrotDebug && window.__mcgrotDebug.world));
      await offPage.evaluate(() => window.__mcgrotDebug.pauseAuto());
      await offPage.evaluate((h) => window.__mcgrotDebug.setTime(h), SMOKE_HOUR);
      await offPage.evaluate(() => window.__mcgrotDebug.setWeather('overcast'));

      const anchorBookmarks = await onPage.evaluate(() => window.__mcgrotDebug.bookmarks);
      const drawCallDiffs = [];
      for (const bm of anchorBookmarks) {
        await onPage.evaluate((id) => window.__mcgrotDebug.gotoBookmark(id), bm.id);
        const onInv = await getInvariants(onPage);
        await offPage.evaluate((id) => window.__mcgrotDebug.gotoBookmark(id), bm.id);
        const offInv = await getInvariants(offPage);
        if (onInv.drawCalls !== offInv.drawCalls) {
          drawCallDiffs.push(`${bm.id}: on=${onInv.drawCalls} off=${offInv.drawCalls}`);
        }
      }
      results.push({
        name: 'E5b.2: draw calls exactly +/-0 at every bookmark, anchors flag on vs off',
        pass: drawCallDiffs.length === 0,
        detail: drawCallDiffs.length === 0 ? `all ${anchorBookmarks.length} bookmarks match exactly` : drawCallDiffs.join('; '),
      });

      await onCtx.close();
      await offCtx.close();
    }

    endRegion();
    } // end region: anchors

    if (region('moments')) {
    // --- E5c: moments are links -------------------------------------------
    //
    // Three things must hold and each fails independently: the writer puts
    // the camera into location.hash, the reader puts a hash into the camera
    // at boot, and a page opened with NO hash still arrives at the Foot.
    //
    // The third is the control. Without it "the linked page is where I
    // expected" is satisfied by a build that ignores links completely and
    // spawns everyone at the same place — which is precisely the failure a
    // link feature has.
    const deg = (yaw) => ((yaw * 180 / Math.PI) % 360 + 360) % 360;
    const degGap = (a, b) => { const d = Math.abs(deg(a) - deg(b)); return d > 180 ? 360 - d : d; };
    const readPose = (p) => p.evaluate(() => ({
      x: window.__mcgrotDebug.camera.position.x,
      z: window.__mcgrotDebug.camera.position.z,
      yaw: window.__mcgrotDebug.camera.rotation.y,
      hash: location.hash,
    }));
    // The hash carries 0.1m and 1 degree, so a faithful round trip can still
    // land half a step of each away. Anything looser would pass on a reader
    // that only used two of the three numbers.
    const LINK_POS_TOLERANCE_M = 0.15;
    const LINK_DEG_TOLERANCE = 1.0;

    // Everything that STEPS FRAMES in this region runs on its own page, never
    // on the shared page1. E5b.1 measured the reason: stepping real-time
    // frames on page1 before its first bookmark visit moves leithers, birds
    // and vermin (all excluded from computeGeomHash precisely because they
    // do) and desyncs the 'draw calls +/-0' gate from budget.json on skyline.
    // An earlier draft of this region stepped 30 frames on page1 and every
    // draw-call gate still read exactly its baseline — which is luck, not a
    // licence. Only the two HUD reads below touch page1, and reading
    // textContent steps nothing.
    //
    // One context, several navigations — each goto is a fresh document, which
    // is what a shared link actually is, and far cheaper than a context each.
    const linkCtx = await newContext(browser, { viewport: { width: 1280, height: 800 } });
    await linkCtx.addInitScript(() => { window.__mcgrotFreezeAtBoot = true; });
    const linkPage = await linkCtx.newPage();
    // Pre-existing, unrelated, and loud: src/cars.js's kit .glbs reference a
    // palette texture that fails to resolve, once per model per boot. It has
    // nothing to do with links, and this region boots eight documents, so
    // left unfiltered it drowns the assertion. Filtered by name rather than
    // by silencing the list, so any OTHER error still fails the gate.
    const IGNORED_CONSOLE = [/GLTFLoader: Couldn't load texture/];
    const linkConsole = [];
    const noteConsole = (t) => { if (!IGNORED_CONSOLE.some((re) => re.test(t))) linkConsole.push(t); };
    linkPage.on('console', (m) => { if (m.type() === 'error') noteConsole(m.text()); });
    linkPage.on('pageerror', (e) => noteConsole(String(e)));
    // The unique query string is load-bearing, not decoration. Navigating
    // from '#p=banana' to '#p=x,y,z' differs only in the fragment, which
    // Chromium serves as a SAME-DOCUMENT navigation: no reload, no boot, no
    // parse. Five of the six malformed cases below were silently never
    // exercised until a fault injection failed to redden this gate. Varying
    // the query forces a real document load every time.
    let bootSeq = 0;
    const bootAt = async (suffix) => {
      await linkPage.goto(`http://localhost:${port}/?boot=${bootSeq++}${suffix}`);
      await linkPage.waitForFunction(() => !!(window.__mcgrotDebug && window.__mcgrotDebug.world));
      return readPose(linkPage);
    };

    // (a) the writer. 30 stepped frames is 0.5s of sim time, past moments.js's
    // 0.4s write throttle.
    await linkPage.goto(`http://localhost:${port}/?boot=${bootSeq++}`);
    await linkPage.waitForFunction(() => !!(window.__mcgrotDebug && window.__mcgrotDebug.world));
    await linkPage.click('#title-enter');
    await linkPage.evaluate(() => window.__mcgrotDebug.pauseAuto());
    const histAtBoot = await linkPage.evaluate(() => history.length);
    const hashBeforePose = await linkPage.evaluate(() => location.hash);
    await linkPage.evaluate(() => window.__mcgrotDebug.goto(700, 'east', 'close'));
    await linkPage.evaluate(() => window.__mcgrotDebug.stepFrames(30));
    const posed = await readPose(linkPage);
    results.push({
      name: 'E5c: moving rewrites the URL hash',
      pass: /^#p=-?\d+\.\d,-?\d+\.\d,\d{1,3}$/.test(posed.hash) && posed.hash !== hashBeforePose,
      detail: `hash "${hashBeforePose || '(empty)'}" -> "${posed.hash}" after posing at chainage 700`,
    });

    // Standing still must not rewrite, and the whole walk must cost ZERO
    // history entries. Both were verified by hand in a real browser before
    // being gated here: replaceState rather than pushState is what keeps the
    // back button meaning "leave the page" instead of "undo a footstep", and
    // it is a one-word regression away at any time.
    const writesAfterMove = await linkPage.evaluate(() => window.__mcgrotDebug.moments.writeCount());
    await linkPage.evaluate(() => window.__mcgrotDebug.stepFrames(300)); // 5s of sim time, perfectly still
    const still = await linkPage.evaluate(() => ({
      writes: window.__mcgrotDebug.moments.writeCount(),
      hist: history.length,
      hash: location.hash,
    }));
    results.push({
      name: 'E5c: standing still writes nothing, and no walk adds history entries',
      pass: writesAfterMove >= 1 && still.writes === writesAfterMove && still.hist === histAtBoot,
      detail: `writes ${writesAfterMove} -> ${still.writes} across 300 still frames (want unchanged, and >=1); `
        + `history.length ${histAtBoot} -> ${still.hist} (want unchanged — replaceState, never pushState)`,
    });

    // (b) the reader.
    const arrived = await bootAt(posed.hash);
    // (c) the control: same build, no hash.
    const plain = await bootAt('');
    const posGap = Math.hypot(arrived.x - posed.x, arrived.z - posed.z);
    const controlGap = Math.hypot(plain.x - posed.x, plain.z - posed.z);
    results.push({
      name: 'E5c: a link reproduces the spot it was made at (opposed pair)',
      pass: posGap <= LINK_POS_TOLERANCE_M
        && degGap(arrived.yaw, posed.yaw) <= LINK_DEG_TOLERANCE
        && controlGap > 50,
      detail: `linked boot is ${posGap.toFixed(3)}m / ${degGap(arrived.yaw, posed.yaw).toFixed(2)}deg from the posed spot `
        + `(max ${LINK_POS_TOLERANCE_M}m / ${LINK_DEG_TOLERANCE}deg); the no-hash control lands ${controlGap.toFixed(1)}m away (must be >50m)`,
    });

    // (d) fails soft. A hand-mangled link must spawn at the Foot in silence,
    // not white-screen the scene — the whole point of a share feature is that
    // strangers paste it.
    //
    // The console list is cleared first so this gate answers "did the junk
    // hash error?" rather than "has anything errored in this context yet?".
    // It was catching a pre-existing, unrelated GLTFLoader texture warning
    // from src/cars.js that arrives asynchronously several navigations later.
    //
    // One malformed string is not enough: '#p=banana' is rejected by the
    // arity check alone, so a build with a broken numeric or bounds check
    // would still pass it. Fault-injecting exactly that (a parser returning a
    // position for non-finite input) went GREEN against the single case —
    // hence one input per rejection branch.
    linkConsole.length = 0;
    const JUNK_HASHES = [
      '#p=banana',        // wrong arity
      '#p=1,2',           // wrong arity, plausible numbers
      '#p=x,y,z',         // right arity, nothing finite
      '#p=1,NaN,0',       // right arity, one bad number
      '#p=1e9,1e9,0',     // finite but far outside the world
      '#somethingelse',   // not a moment at all
    ];
    const junkFails = [];
    for (const h of JUNK_HASHES) {
      const junk = await bootAt(h);
      const gap = Math.hypot(junk.x - plain.x, junk.z - plain.z);
      if (gap >= 0.01) junkFails.push(`${h} -> ${gap.toFixed(2)}m off`);
    }
    results.push({
      name: 'E5c: every malformed hash falls back to the Foot without erroring',
      pass: junkFails.length === 0 && linkConsole.length === 0,
      detail: junkFails.length
        ? `moved the spawn: ${junkFails.join('; ')}`
        : `all ${JUNK_HASHES.length} malformed hashes spawned at the Foot; console errors: ${linkConsole.length ? linkConsole.join(' | ') : 'none'}`,
    });

    // (e) the writer's opposed pair: nothing is written while the title card
    // is still up. Same page, same movement, the only difference is the
    // click — so a writer that ignored `entered` fails here and only here.
    await linkPage.goto(`http://localhost:${port}/?boot=${bootSeq++}`);
    await linkPage.waitForFunction(() => !!(window.__mcgrotDebug && window.__mcgrotDebug.world));
    await linkPage.evaluate(() => window.__mcgrotDebug.pauseAuto());
    await linkPage.evaluate(() => { window.__mcgrotDebug.camera.position.x += 40; });
    await linkPage.evaluate(() => window.__mcgrotDebug.stepFrames(60));
    const hashBeforeEnter = await linkPage.evaluate(() => location.hash);
    await linkPage.click('#title-enter');
    await linkPage.evaluate(() => { window.__mcgrotDebug.camera.position.x += 40; });
    await linkPage.evaluate(() => window.__mcgrotDebug.stepFrames(60));
    const hashAfterEnter = await linkPage.evaluate(() => location.hash);
    results.push({
      name: 'E5c: the hash tracks only after the title card is dismissed (opposed pair)',
      pass: hashBeforeEnter === '' && hashAfterEnter !== '',
      detail: `before entering "${hashBeforeEnter || '(empty)'}" (want empty), after entering "${hashAfterEnter}" (want a moment)`,
    });


    // --- E5c: the day name on the HUD --------------------------------------
    //
    // Three separate ways this can be wrong, so three separate controls: the
    // string could be hardcoded, it could be reading the LIVE clock instead
    // of the arrival hour, or the date could still be coming from a real
    // Date() (which would rot all 39 goldens overnight and look like a
    // rendering regression when it did).
    const readDay = (p) => p.evaluate(() => document.getElementById('hud-day').textContent);

    // page1's clock is pinned at SMOKE_HOUR (13:00) while SMOKE_DATE's
    // arrival hour is 06:55 — deliberately far apart, so "13:00" appearing
    // here would be proof the label followed the wrong clock.
    const dayText = await readDay(page1);
    results.push({
      name: 'E5c: the HUD names the pinned day and the arrival hour, not the live clock',
      pass: dayText.includes('1 January 2026') && dayText.includes('06:55') && !dayText.includes('13:00'),
      detail: `#hud-day = "${dayText}" with the clock pinned at ${SMOKE_HOUR}:00 (want the date and 06:55, never 13:00)`,
    });

    // ...and moving the clock must not move the label. Done on linkPage so
    // page1's pinned time — which every later golden depends on — is never
    // disturbed.
    await linkPage.goto(`http://localhost:${port}/?boot=${bootSeq++}`);
    await linkPage.waitForFunction(() => !!(window.__mcgrotDebug && window.__mcgrotDebug.world));
    await linkPage.evaluate(() => window.__mcgrotDebug.pauseAuto());
    const dayBeforeClock = await readDay(linkPage);
    await linkPage.evaluate(() => window.__mcgrotDebug.setTime(22));
    await linkPage.evaluate(() => window.__mcgrotDebug.stepFrames(10));
    const dayAfterClock = await readDay(linkPage);
    results.push({
      name: 'E5c: the day name is frozen at arrival, not re-read from the clock',
      pass: dayBeforeClock === dayAfterClock && dayAfterClock.includes('06:55'),
      detail: `"${dayBeforeClock}" -> "${dayAfterClock}" after setTime(22)`,
    });

    // The control that separates "derived from the pinned date" from "a
    // literal that happens to read correctly": a second boot on a different
    // day must produce a different name. 2026-04-05's arrival hour is 21:33,
    // fifteen hours from SMOKE_DATE's, so a stuck hour shows up too.
    const altCtx = await newContext(browser, { viewport: { width: 1280, height: 800 } });
    await altCtx.addInitScript(() => {
      window.__mcgrotFreezeAtBoot = true;
      window.__mcgrotForceDate = '2026-04-05';
    });
    const altPage = await altCtx.newPage();
    await altPage.goto(`http://localhost:${port}/`);
    await altPage.waitForFunction(() => !!(window.__mcgrotDebug && window.__mcgrotDebug.world));
    const altDayText = await readDay(altPage);
    await altCtx.close();
    results.push({
      name: 'E5c: the day name is derived from the date, not baked in (opposed pair)',
      pass: altDayText.includes('5 April 2026') && altDayText.includes('21:33') && altDayText !== dayText,
      detail: `pinned 2026-01-01 -> "${dayText}"; control 2026-04-05 -> "${altDayText}"`,
    });

    // --- E5c: the share affordance ------------------------------------------
    //
    // In the single-file artifact there is no address bar and replaceState
    // throws, so moments.href() is the ONLY route a link can take out of the
    // page. Checking that href() is well-formed would be checking the
    // calculator; the product-level claim is that a fresh document opened at
    // that string arrives where the sharer stood.
    await linkPage.goto(`http://localhost:${port}/?boot=${bootSeq++}`);
    await linkPage.waitForFunction(() => !!(window.__mcgrotDebug && window.__mcgrotDebug.world));
    await linkPage.click('#title-enter');
    await linkPage.evaluate(() => window.__mcgrotDebug.pauseAuto());
    await linkPage.evaluate(() => window.__mcgrotDebug.goto(1100, 'west', 'close'));
    const toastBefore = await linkPage.evaluate(() => getComputedStyle(document.getElementById('link-toast')).display);
    const sharedPose = await readPose(linkPage);
    const sharedUrl = await linkPage.evaluate(async () => {
      await window.__mcgrotDebug.shareUi.share();
      return window.__mcgrotDebug.moments.href();
    });
    const shareState = await linkPage.evaluate(() => ({
      toast: getComputedStyle(document.getElementById('link-toast')).display,
      result: window.__mcgrotDebug.shareUi.lastResult(),
    }));
    results.push({
      name: 'E5c: sharing opens the toast (opposed pair on the same element)',
      pass: toastBefore === 'none' && shareState.toast === 'block',
      detail: `#link-toast display before share=${toastBefore} (want none), after=${shareState.toast} (want block); path taken: ${shareState.result}`,
    });

    await linkPage.goto(sharedUrl.includes('?') ? `${sharedUrl}` : sharedUrl);
    await linkPage.waitForFunction(() => !!(window.__mcgrotDebug && window.__mcgrotDebug.world));
    const sharedArrival = await readPose(linkPage);
    const shareGap = Math.hypot(sharedArrival.x - sharedPose.x, sharedArrival.z - sharedPose.z);
    results.push({
      name: 'E5c: the shared URL reproduces the sharer\'s spot',
      pass: shareGap <= LINK_POS_TOLERANCE_M
        && degGap(sharedArrival.yaw, sharedPose.yaw) <= LINK_DEG_TOLERANCE
        && Math.hypot(sharedPose.x - plain.x, sharedPose.z - plain.z) > 50,
      detail: `opening the shared URL landed ${shareGap.toFixed(3)}m / ${degGap(sharedArrival.yaw, sharedPose.yaw).toFixed(2)}deg from where it was made `
        + `(max ${LINK_POS_TOLERANCE_M}m / ${LINK_DEG_TOLERANCE}deg), and that spot is ${Math.hypot(sharedPose.x - plain.x, sharedPose.z - plain.z).toFixed(1)}m from the default spawn`,
    });


    // --- The desktop keyboard surface --------------------------------------
    //
    // Here rather than in its own region because E5c is what made it
    // necessary: #link-field is the first focusable text input in the app, so
    // every window-bound shortcut (E, J, T) could fire while someone selects
    // the URL in it. T itself is new — the torch button is touch-only, so
    // until E2g lights the street a desktop visitor arriving at a dark hour
    // had a torch, no control and no way to learn one existed.
    const torchState = () => linkPage.evaluate(() => ({
      distance: window.__mcgrotDebug.torch.light.distance,
      active: document.getElementById('torch-toggle').classList.contains('active'),
      stored: localStorage.getItem('mcgrot-torch-on'),
      buttonShown: getComputedStyle(document.getElementById('torch-toggle')).display !== 'none',
    }));
    const pressT = () => linkPage.evaluate(() => window.dispatchEvent(
      new KeyboardEvent('keydown', { code: 'KeyT', bubbles: true })));

    const torchBefore = await torchState();
    await pressT();
    const torchOff = await torchState();
    await pressT();
    const torchBackOn = await torchState();
    results.push({
      name: 'E5c: T toggles the torch on desktop, both directions',
      pass: torchBefore.buttonShown === false
        && torchBefore.distance > 0.05 && torchOff.distance <= 0.05 && torchBackOn.distance > 0.05
        && torchBefore.active === true && torchOff.active === false && torchBackOn.active === true
        && torchOff.stored === 'false' && torchBackOn.stored === 'true',
      detail: `#torch-toggle is display:none on desktop (${torchBefore.buttonShown}), so the key is the only actor. `
        + `light.distance ${torchBefore.distance.toFixed(2)} -> ${torchOff.distance.toFixed(2)} -> ${torchBackOn.distance.toFixed(2)}; `
        + `stored ${torchBefore.stored} -> ${torchOff.stored} -> ${torchBackOn.stored}`,
    });

    // Opposed pair: the same two keystrokes, the only difference being where
    // the focus is. Without the blurred half this passes on a build where the
    // shortcuts are simply broken.
    const pressTJ = (focusField) => linkPage.evaluate((focus) => {
      const field = document.getElementById('link-field');
      const toast = document.getElementById('link-toast');
      if (focus) { toast.style.display = 'block'; field.style.display = 'block'; field.focus(); }
      else { field.blur(); }
      for (const code of ['KeyT', 'KeyJ']) {
        (focus ? field : window).dispatchEvent(new KeyboardEvent('keydown', { code, bubbles: true }));
      }
      return {
        focused: document.activeElement === field,
        distance: window.__mcgrotDebug.torch.light.distance,
        journalOpen: getComputedStyle(document.getElementById('journal-panel')).display !== 'none',
      };
    }, focusField);

    const whileTyping = await pressTJ(true);
    const whileNotTyping = await pressTJ(false);
    results.push({
      name: 'E5c: shortcuts ignore keystrokes typed into the link field (opposed pair)',
      pass: whileTyping.focused === true
        && Math.abs(whileTyping.distance - torchBackOn.distance) < 1e-9 && whileTyping.journalOpen === false
        && whileNotTyping.distance <= 0.05 && whileNotTyping.journalOpen === true,
      detail: `focused in #link-field: torch ${whileTyping.distance.toFixed(2)} (want unchanged from ${torchBackOn.distance.toFixed(2)}), journal open=${whileTyping.journalOpen} (want false); `
        + `blurred: torch ${whileNotTyping.distance.toFixed(2)} (want off), journal open=${whileNotTyping.journalOpen} (want true)`,
    });

    await linkCtx.close();
    endRegion();
    } // end region: moments

    if (region('lamps')) {
    // --- E2g: street lights ---------------------------------------------
    // Its own boots, because LAMPS_ENABLED is read at build time and both
    // states are needed. Each boot carries a unique ?boot= query: a
    // fragment-only difference is served as a same-document navigation and
    // would not re-run main.js at all (learned the hard way at E5c).
    const lampBoot = async (mode) => {
      const ctx = await newContext(browser, { viewport: { width: 1280, height: 800 } });
      const pg = await ctx.newPage();
      await pg.addInitScript((on) => {
        window.__mcgrotForceLamps = on;
        window.__mcgrotFreezeAtBoot = true;
      }, mode === 'on');
      await pg.goto(`http://localhost:${port}/?boot=lamps-${mode}`);
      await pg.click('#title-enter');
      await pg.evaluate(() => {
        const el = document.getElementById('title-card');
        if (el) el.style.transition = 'none';
      });
      await pg.waitForFunction(() => !!(window.__mcgrotDebug && window.__mcgrotDebug.world));
      await pg.evaluate(() => window.__mcgrotDebug.pauseAuto());
      await pg.evaluate(() => window.__mcgrotDebug.setWeather('overcast'));
      return { ctx, pg };
    };

    // Mean luminance of the lower two-thirds at the darkest hour, torch off,
    // standing on the centreline looking forward and down — the only pose
    // with near tarmac actually in frame, which is what "can I walk down
    // this" means. Bookmark poses all face a frontage.
    const legibility = async (pg) => pg.evaluate(async ({ hour, floor }) => {
      const dbg = window.__mcgrotDebug;
      dbg.setTime(hour);
      // Torch off. It is on by default and lights the near ground hard, so
      // leaving it on puts the same large term on both sides of the pair and
      // shrinks the lamps' own contribution to a rounding error.
      dbg.torch.setToggle(false);
      await dbg.torchGroundPose(700);
      dbg.stepFrames(10);
      dbg.renderNow();
      const src = dbg.renderer.domElement;
      const c = document.createElement('canvas');
      c.width = src.width; c.height = src.height;
      const cx = c.getContext('2d');
      cx.drawImage(src, 0, 0);
      const { data, width, height } = cx.getImageData(0, 0, c.width, c.height);
      let sum = 0, n = 0, lit = 0;
      for (let y = Math.floor(height / 3); y < height; y++) {
        for (let x = 0; x < width; x++) {
          const i = (y * width + x) * 4;
          const l = 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
          sum += l; n++;
          if (l >= floor) lit++;
        }
      }
      const L = dbg.lamps;
      return {
        mean: +(sum / n).toFixed(2),
        pctLegible: +((lit / n) * 100).toFixed(1),
        enabled: L.enabled,
        count: L.count,
        poolSize: L.poolSize,
        active: L.activeCount(),
        glow: +L.glow().toFixed(3),
      };
    }, { hour: LAMP_DARKEST_HOUR, floor: LEGIBLE_PIXEL_FLOOR });

    const { ctx: lampsOnCtx2, pg: lampsOnPg } = await lampBoot('on');
    const { ctx: lampsOffCtx2, pg: lampsOffPg } = await lampBoot('off');
    const lit = await legibility(lampsOnPg);
    const unlit = await legibility(lampsOffPg);

    // THE acceptance pair for this milestone. The control is the identical
    // pose on a lamps-off boot; without it the gate passes on moonlight, or
    // on any future change that happens to raise the ambient floor.
    results.push({
      name: 'the street is legible at the darkest hour (opposed pair)',
      pass: lit.pctLegible >= LEGIBLE_MIN_PCT && unlit.pctLegible <= LEGIBLE_CONTROL_MAX_PCT,
      detail: `${LAMP_DARKEST_HOUR}:00 torch off — lamps ON: ${lit.pctLegible}% of the lower two-thirds at/above luminance ${LEGIBLE_PIXEL_FLOOR} (mean ${lit.mean}; want >=${LEGIBLE_MIN_PCT}%); ` +
        `control lamps OFF: ${unlit.pctLegible}% (mean ${unlit.mean}; want <=${LEGIBLE_CONTROL_MAX_PCT}%)`,
    });

    // The count alone is NOT enough, and that was found by fault injection
    // rather than by thinking: pointing every lamp at the wrong pole left the
    // count at 46 (it comes from the loop bound, not the geometry), clustered
    // them down half the street, and both this gate and the legibility pair
    // stayed green. So measure the layout — how far apart consecutive lamps
    // are, and how much of the Walk they cover.
    const layout = await lampsOnPg.evaluate(() => {
      const L = window.__mcgrotDebug.lamps;
      const gaps = [];
      for (let i = 1; i < L.lamps.length; i++) {
        const a = L.lamps[i - 1].position, b = L.lamps[i].position;
        gaps.push(Math.hypot(b.x - a.x, b.z - a.z));
      }
      gaps.sort((x, y) => x - y);
      const first = L.lamps[0].position, last = L.lamps[L.lamps.length - 1].position;
      return {
        medianGap: +gaps[Math.floor(gaps.length / 2)].toFixed(1),
        span: +Math.hypot(last.x - first.x, last.z - first.z).toFixed(0),
      };
    });
    results.push({
      name: 'lamps hang off the catenary poles, one per station',
      pass: lit.enabled && lit.count === EXPECTED_LAMP_COUNT
        && !unlit.enabled && unlit.count === 0
        && layout.medianGap >= LAMP_GAP_MIN && layout.medianGap <= LAMP_GAP_MAX
        && layout.span >= LAMP_SPAN_MIN,
      detail: `lamps on: enabled=${lit.enabled} count=${lit.count} (want ${EXPECTED_LAMP_COUNT}), ` +
        `median gap ${layout.medianGap}m (want ${LAMP_GAP_MIN}-${LAMP_GAP_MAX}, i.e. one per catenary station), ` +
        `span ${layout.span}m (want >=${LAMP_SPAN_MIN}, i.e. the whole Walk not half of it); ` +
        `flag off: enabled=${unlit.enabled} count=${unlit.count} (want false/0)`,
    });

    // The pool must be FIXED. Changing the light count invalidates every
    // material program in the scene and SwiftShader rebuilds them at seconds
    // per frame, so a pool that grows or shrinks with proximity would hitch
    // every time you walked past a lamp. Checked across the full day, since
    // the tempting implementation is to add lights at dusk and remove them at
    // dawn.
    const poolAcrossDay = await lampsOnPg.evaluate(() => {
      const dbg = window.__mcgrotDebug;
      const counts = [];
      for (let h = 0; h < 24; h += 3) {
        dbg.setTime(h);
        dbg.stepFrames(2);
        let n = 0;
        dbg.scene.traverse((o) => { if (o.isPointLight) n++; });
        counts.push({ h, sceneLights: n, poolIntensity: +dbg.lamps.pool[0].intensity.toFixed(1) });
      }
      return counts;
    });
    const lightCounts = [...new Set(poolAcrossDay.map((r) => r.sceneLights))];
    results.push({
      name: 'the light pool is allocated once and never resized',
      pass: lightCounts.length === 1,
      detail: `PointLight count across 00:00-21:00: ${poolAcrossDay.map((r) => `${r.h}h:${r.sceneLights}`).join(' ')} ` +
        `(want one distinct value; got ${lightCounts.join('/')})`,
    });

    // Daylight must not merely be dim — it must be OFF. windowGlow reads 0.02
    // at 13:00 and 0.15 at 08:00, and taken literally that put 4 PointLights
    // at intensity 30 into every daylight frame and moved
    // golden-rain:fascia-close by 11.1% through wet-surface specular.
    const dayNight = Object.fromEntries(poolAcrossDay.map((r) => [r.h, r.poolIntensity]));
    const daylightHours = [9, 12].map((h) => dayNight[h] ?? dayNight[Math.floor(h / 3) * 3]);
    results.push({
      name: 'lamps are fully off in daylight, not merely dim',
      pass: (dayNight[9] === 0 && dayNight[12] === 0) && dayNight[0] > 0 && dayNight[21] > 0,
      detail: `pool intensity 09:00=${dayNight[9]} 12:00=${dayNight[12]} (want exactly 0) vs 00:00=${dayNight[0]} 21:00=${dayNight[21]} (want >0) ` +
        `[${daylightHours.length} daylight samples]`,
    });

    // The pool follows the camera. Asserting only that the numbers changed
    // would pass on a pool that jitters; this asserts it lands ON a named
    // lamp it could not have been near before.
    const followed = await lampsOnPg.evaluate(() => {
      const dbg = window.__mcgrotDebug;
      dbg.setTime(3);
      const L = dbg.lamps;
      const target = L.lamps[20].position;
      dbg.camera.position.x = target.x;
      dbg.camera.position.z = target.z;
      dbg.stepFrames(4);
      let best = Infinity;
      for (const p of L.pool) {
        best = Math.min(best, Math.hypot(p.position.x - target.x, p.position.z - target.z));
      }
      return { nearestPoolLightToLamp20: +best.toFixed(3), active: L.activeCount() };
    });
    results.push({
      name: 'the light pool follows the camera',
      pass: followed.nearestPoolLightToLamp20 < 0.01 && followed.active > 1,
      detail: `stood under lamp 20: nearest pool light is ${followed.nearestPoolLightToLamp20}m from it (want <0.01m), ` +
        `${followed.active} of ${lit.poolSize} lights active (want >1 — a pool where only one lamp is ever in range wastes the rest)`,
    });

    await lampsOnCtx2.close();
    await lampsOffCtx2.close();
    endRegion();
    } // end region: lamps

    if (region('legs')) {
    // --- E5d: turning back ------------------------------------------------
    // Walks the Walk end to end and back on two boots that differ ONLY in
    // __mcgrotForceLegs, and compares what the street became.
    //
    // Frames, and why the rate is cranked. The premise of the whole unit is
    // that a hinge must beat the drift you get for free: a 1617 m leg at
    // WALK_SPEED 14 m/s takes ~115 s, which at HOURS_PER_REAL_MINUTE = 1 is
    // ~1.9 sim hours. Reproducing that literally costs ~13,800 stepped frames
    // for the pair. Hours are rate x minutes, so 12x rate over 9.5 s of
    // stepped time gives the SAME 1.9 h in 570 frames. The hinge does not
    // read the rate, so this changes the cost and not the measurement.
    const LEG_RATE = 12;
    const LEG_FRAMES = 570;   // 9.5s at 60fps -> 1.9 sim hours per leg

    const walkLeg = async (pg) => pg.evaluate(({ frames }) => {
      const dbg = window.__mcgrotDebug;
      const line = dbg.world.streetLine;
      const place = (chain) => {
        let acc = 0;
        for (let i = 0; i < line.length - 1; i++) {
          const [ax, az] = line[i], [bx, bz] = line[i + 1];
          const seg = Math.hypot(bx - ax, bz - az);
          if (acc + seg >= chain) {
            const t = seg > 0 ? (chain - acc) / seg : 0;
            dbg.camera.position.x = ax + (bx - ax) * t;
            dbg.camera.position.z = az + (bz - az) * t;
            return;
          }
          acc += seg;
        }
      };
      // Total stepped frames is identical in both arms, so the free drift is
      // identical and the difference between them is the hinge alone.
      const len = window.__mcgrotLegLength;
      const steps = 40;
      let t = 0;
      // E0.3: `stepFrames(n, t)` rather than n calls to `stepFrame` — the
      // SAME (dt, t) sequence (both use dt = 1/60 and t += 1/60 per frame),
      // but it rasters only the last frame of each chunk instead of all
      // thirteen. This region measures the CLOCK and the hinge count; not one
      // of these frames is looked at, and the ~130ms SwiftShader raster of
      // each was 37% of the whole suite's wall time. Roughly 40 rendered
      // frames per leg survive, which is also what keeps the shopfront atlas
      // paging along the street for the evidence captures below.
      const per = Math.floor(frames / (steps + 1));
      const advance = (from, to) => {
        for (let s = 0; s <= steps; s++) {
          place(from + (to - from) * (s / steps));
          dbg.stepFrames(per, t);
          t += per / 60;
        }
      };
      advance(5, len - 5);   // out
      advance(len - 5, 5);   // and back
      const a = dbg.atmosphereState();
      return {
        clock: +a.hours.toFixed(3),
        weather: a.weather,
        transitionTarget: a.weatherTransition ? a.weatherTransition.target : null,
        legs: dbg.legs.state(),
        history: dbg.legs.history(),
      };
    }, { frames: LEG_FRAMES });

    const prepLeg = async (pg) => pg.evaluate(({ rate }) => {
      const dbg = window.__mcgrotDebug;
      dbg.setWeather('overcast');
      dbg.setWeatherSchedule(false); // the autonomous roller is not under test here
      dbg.setTime(10);
      dbg.setRate(rate);             // setTime pins rate to 0; restore it after
      window.__mcgrotLegLength = dbg.legs.state().length
        || (() => { // legs-off boot reports no length; derive it the same way
          const line = dbg.world.streetLine;
          let L = 0;
          for (let i = 1; i < line.length; i++) L += Math.hypot(line[i][0] - line[i - 1][0], line[i][1] - line[i - 1][1]);
          return L;
        })();
      // Step frames BEFORE reading the hinge count. bootPage never drives a
      // frame, so legs.update() has not run yet at this point and an
      // unstepped read cannot observe a boot hinge at all — the first version
      // of this gate was decoration, and a fault injection that failed to go
      // red is what exposed it.
      dbg.stepFrames(4);
      return { startClock: dbg.atmosphereState().hours, hingesAtBoot: dbg.legs.state().hinges };
    }, { rate: LEG_RATE });

    const { context: legsOnCtx, page: legsOnPg } = await bootPage(browser, port, { __mcgrotForceLegs: true });
    const { context: legsOffCtx, page: legsOffPg } = await bootPage(browser, port, { __mcgrotForceLegs: false });
    const onStart = await prepLeg(legsOnPg);
    const offStart = await prepLeg(legsOffPg);

    // The spawn sits INSIDE the north end zone, so an unarmed state machine
    // hinges on frame one and the walk begins five hours after the HUD says.
    // This is the obvious bug in the design and it gets its own gate.
    results.push({
      name: 'no hinge on boot, despite spawning inside the north end zone',
      pass: onStart.hingesAtBoot === 0,
      detail: `hinges after boot = ${onStart.hingesAtBoot} (want 0); the Foot is chainage 0 and the end zone is the first ${LEG_END_RADIUS_HINT}m of it`,
    });

    const onWalk = await walkLeg(legsOnPg);
    const offWalk = await walkLeg(legsOffPg);

    // E2g.1: evidence, not a gate. Both arms have just walked the identical
    // out-and-back and are standing on the same spot at the Foot; the only
    // difference is the hinge. The clock arithmetic below says the return leg
    // is a different street — these two files are that claim as a pair of
    // pictures a reviewer can open side by side. Nothing diffs them (the
    // hinge's weather roll is deterministic but the hour it lands on is a
    // product of the walk, so a tracked baseline would be churn).
    //
    // Each arm is stepped one more frame immediately before its capture, and
    // the timeout is raised: a page that has been idle since its last
    // stepFrame does not always hand the compositor a frame within
    // Playwright's default 30s under two live SwiftShader contexts, and the
    // second capture here timed out the whole suite doing exactly that.
    if (!existsSync(captureDir)) mkdirSync(captureDir, { recursive: true });
    const hingeShot = async (pg, path) => {
      await pg.evaluate(() => window.__mcgrotDebug.stepFrames(1));
      writeFileSync(join(captureDir, path), await pg.screenshot({ timeout: 120000 }));
    };
    await hingeShot(legsOnPg, 'hinge-return-on.png');
    await hingeShot(legsOffPg, 'hinge-return-off.png');

    const onDelta = onWalk.clock - onStart.startClock;
    const offDelta = offWalk.clock - offStart.startClock;
    const hingeContribution = onDelta - offDelta;

    // THE gate for this unit. The control is the identical walk with the
    // hinge disabled — without it the ~1.9h-per-leg free drift passes on its
    // own, and "the street changed" would be a claim about walking slowly.
    results.push({
      name: 'the return leg is a different street (opposed pair)',
      pass: offDelta > 0.5
        && hingeContribution >= LEG_MIN_HINGE_HOURS
        && onWalk.legs.hinges === 2 && offWalk.legs.hinges === 0,
      detail: `identical walk out-and-back, ${LEG_FRAMES * 2} stepped frames each: ` +
        `hinge ON advanced the clock ${onDelta.toFixed(2)}h (${onWalk.legs.hinges} hinges), ` +
        `control OFF ${offDelta.toFixed(2)}h (${offWalk.legs.hinges} hinges) — ` +
        `the hinge itself contributed ${hingeContribution.toFixed(2)}h (want >=${LEG_MIN_HINGE_HOURS}h, ` +
        `and the control must drift >0.5h or the comparison proves nothing)`,
    });

    // A hinge per arrival, not per frame spent standing at an end.
    results.push({
      name: 'the hinge fires once per arrival, not once per frame in the zone',
      pass: onWalk.legs.hinges === 2 && onWalk.history.length === 2
        && onWalk.history[0].arrivedAt === 'south' && onWalk.history[1].arrivedAt === 'north',
      detail: `an out-and-back over ${LEG_FRAMES * 2} frames, most of them inside an end zone, fired ` +
        `${onWalk.legs.hinges} hinges at [${onWalk.history.map((h) => h.arrivedAt).join(', ')}] (want exactly south then north)`,
    });

    // Determinism. A Math.random() roll here would be untestable and would
    // break the premise the determinism gates rest on.
    // Runs on the page already open, not a fresh boot per seed. Three more
    // full boots to exercise a pure function timed the suite out at 30s on
    // page.goto — the bundle is 1.7MB and every boot re-fetches the assets.
    // Resetting the weather is enough isolation: the roll depends only on
    // (current weather, seed, leg).
    const rollFor = async (seed) => legsOnPg.evaluate((s) => {
      const dbg = window.__mcgrotDebug;
      dbg.setWeather('overcast');
      dbg.stepFrames(2); // let the transition settle so `from` is overcast
      // Drives atmosphere.nudge with an explicit seed: the roll is the thing
      // under test, not the arrival detection above it.
      return [1, 2, 3, 4].map((leg) => dbg.atmosphereNudge(5, s, leg).to);
    }, seed);
    const rollA = await rollFor(12345);
    const rollA2 = await rollFor(12345);
    const rollB = await rollFor(999);
    results.push({
      name: 'the weather roll is deterministic in (day seed, leg)',
      pass: JSON.stringify(rollA) === JSON.stringify(rollA2) && JSON.stringify(rollA) !== JSON.stringify(rollB),
      detail: `seed 12345 -> [${rollA.join(',')}] and again [${rollA2.join(',')}] (want identical); ` +
        `seed 999 -> [${rollB.join(',')}] (want different, else the seed is ignored)`,
    });

    // Plausibility: the roll walks WEATHER_ADJACENCY, so a turnaround can
    // never teleport a downpour into a clear sky.
    const ADJ = {
      overcast: ['clear', 'drizzle', 'haar'],
      clear: ['overcast'],
      drizzle: ['overcast', 'rain'],
      rain: ['drizzle'],
      haar: ['overcast'],
    };
    const chainOk = onWalk.history.every((h) => (ADJ[h.from] || []).includes(h.to));
    results.push({
      name: 'the turnaround roll steps along the weather adjacency',
      pass: chainOk && onWalk.history.length > 0,
      detail: onWalk.history.map((h) => `leg ${h.leg}: ${h.from} -> ${h.to}`).join('; ') +
        ` (each must be an edge in WEATHER_ADJACENCY — no downpour into a clear sky)`,
    });

    await legsOnCtx.close();
    await legsOffCtx.close();
    endRegion();
    } // end region: legs

    if (region('ending')) {
    // --- E5d part 2: leaving -----------------------------------------------
    // Two boots that run the IDENTICAL script and diverge at exactly one
    // point: one steps into the haar, the other does not. Everything is
    // stepped the same number of frames in both, because a weather transition
    // from the turnaround hinge is still settling and a shortcut control
    // ("compare against the snapshot I took before") reads that settling as a
    // hand-off failure. It did, on the first attempt: 0.5694 vs 0.5700.
    const endingBoot = async () => {
      const { context, page: pg } = await bootPage(browser, port, { __mcgrotForceLegs: true });
      await pg.evaluate(() => {
        const dbg = window.__mcgrotDebug;
        dbg.setWeather('overcast');
        dbg.setWeatherSchedule(false);
        dbg.setTime(20);
      });
      return { context, pg };
    };

    // Walk out and back so the leg counter reaches 2 and the close is offered,
    // then settle long enough that the hinge's weather transition is done.
    const walkToTheFoot = async (pg) => pg.evaluate(() => {
      const dbg = window.__mcgrotDebug;
      const line = dbg.world.streetLine;
      const place = (chain) => {
        let acc = 0;
        for (let i = 0; i < line.length - 1; i++) {
          const [ax, az] = line[i], [bx, bz] = line[i + 1];
          const seg = Math.hypot(bx - ax, bz - az);
          if (acc + seg >= chain) {
            const t = seg > 0 ? (chain - acc) / seg : 0;
            dbg.camera.position.x = ax + (bx - ax) * t;
            dbg.camera.position.z = az + (bz - az) * t;
            return;
          }
          acc += seg;
        }
      };
      const len = dbg.legs.state().length;
      for (let c = 60; c < len - 10; c += 60) { place(c); dbg.stepFrames(1); }
      place(len - 5); dbg.stepFrames(2);
      for (let c = len - 60; c > 20; c -= 60) { place(c); dbg.stepFrames(1); }
      place(5);
      // WEATHER_TRANSITION_SECONDS is 10 real seconds of dt; settle past it so
      // neither arm is mid-blend when the snapshots are taken.
      dbg.stepFrames(700);
      return {
        leg: dbg.legs.state().leg,
        canOffer: dbg.ending.canOffer(),
        promptDisplay: getComputedStyle(document.getElementById('ending-prompt')).display,
      };
    });

    const snapshot = async (pg) => pg.evaluate(() => {
      const dbg = window.__mcgrotDebug;
      return {
        fogDensity: +dbg.world.fog.density.toFixed(6),
        exposure: +dbg.renderer.toneMappingExposure.toFixed(4),
        camX: +dbg.camera.position.x.toFixed(2),
        camZ: +dbg.camera.position.z.toFixed(2),
        suspended: dbg.atmosphereIsSuspended(),
      };
    });

    const { context: endCtx, pg: endPg } = await endingBoot();
    const { context: ctlCtx, pg: ctlPg } = await endingBoot();

    // Offered only after turning back. The control is the SAME boot before it
    // has turned round — leg 0, standing on the very same spot.
    const leg0 = await endPg.evaluate(() => {
      const dbg = window.__mcgrotDebug;
      const p = dbg.world.streetLine[0];
      dbg.camera.position.x = p[0];
      dbg.camera.position.z = p[1];
      dbg.stepFrames(3);
      return {
        leg: dbg.legs.state().leg,
        canOffer: dbg.ending.canOffer(),
        beginReturned: dbg.ending.begin(),
        phase: dbg.ending.state().phase,
        promptDisplay: getComputedStyle(document.getElementById('ending-prompt')).display,
      };
    });

    const endArrival = await walkToTheFoot(endPg);
    const ctlArrival = await walkToTheFoot(ctlPg);

    results.push({
      name: 'the close is offered at the Foot only after turning back (opposed pair)',
      pass: leg0.leg === 0 && leg0.canOffer === false && leg0.beginReturned === false
        && leg0.phase === 'idle' && leg0.promptDisplay === 'none'
        && endArrival.leg >= 1 && endArrival.canOffer === true && endArrival.promptDisplay === 'block',
      detail: `same spot at the Foot — leg ${leg0.leg}: canOffer=${leg0.canOffer}, begin() returned ` +
        `${leg0.beginReturned}, prompt ${leg0.promptDisplay} (want refused and hidden: an ending you can ` +
        `walk into in the first ten seconds is a trapdoor); after turning back, leg ${endArrival.leg}: ` +
        `canOffer=${endArrival.canOffer}, prompt ${endArrival.promptDisplay} (want offered)`,
    });

    const beforeEnd = await snapshot(endPg);
    // Diverge HERE and nowhere else: one arm steps into the haar.
    const began = await endPg.evaluate(() => window.__mcgrotDebug.ending.begin());
    const SEQ_FRAMES = 60 * 11; // one second past SEQUENCE_SECONDS
    // E2g.1: stop part way through and LOOK. Both arms are stepped in the
    // same chunks, so the total is unchanged and the pair below still
    // compares like with like (measured: the same fog 0.0855 / exposure 0.5
    // against control 0.0095 / 0.7333 as before the split).
    //
    // TWO frames, not one. E2g.1's brief asked for the mid frame; measuring
    // it showed the mid frame cannot carry this gate alone. The deepest point
    // of the fade is where a close that fades to nothing shows itself, and
    // that is t=9.5s, one frame short of the card covering the screen: with
    // the haar turned black it reads mean 4.5 against the shipped 85.9, while
    // t=5s only falls from 55.5 to 20.7. Both are captured and gated.
    const MID_CLOSE_FRAMES = 60 * 5;   // t=5s: ease=0.5, fog 5x, exposure half way to the floor
    const LATE_CLOSE_FRAMES = 60 * 9.5; // t=9.5s: the last frame before the card covers the screen
    const pictureGate = async (name, label, path, min, max) => {
      const shot = await endPg.screenshot();
      writeFileSync(join(captureDir, path), shot);
      const s = luminanceStats(PNG.sync.read(shot));
      results.push({
        name,
        pass: s.stddev >= SUBSTRATE_MIN_STDDEV && s.mean >= min && s.mean <= max,
        detail: `${label} of the close: mean luminance ${s.mean.toFixed(1)} ` +
          `(want ${min}-${max} — neither black nor blown out), stddev ${s.stddev.toFixed(1)} ` +
          `(want >=${SUBSTRATE_MIN_STDDEV}, i.e. there is still something to look at). ` +
          `Frame written to docs/smoke/captures/${path}`,
      });
    };

    if (!existsSync(captureDir)) mkdirSync(captureDir, { recursive: true });
    await endPg.evaluate((n) => window.__mcgrotDebug.stepFrames(n), MID_CLOSE_FRAMES);
    await ctlPg.evaluate((n) => window.__mcgrotDebug.stepFrames(n), MID_CLOSE_FRAMES);
    await pictureGate('the mid-close frame is a picture, not a blackout',
      't=5s', 'ending-mid-close.png', MID_CLOSE_MEAN_MIN, MID_CLOSE_MEAN_MAX);

    await endPg.evaluate((n) => window.__mcgrotDebug.stepFrames(n), LATE_CLOSE_FRAMES - MID_CLOSE_FRAMES);
    await ctlPg.evaluate((n) => window.__mcgrotDebug.stepFrames(n), LATE_CLOSE_FRAMES - MID_CLOSE_FRAMES);
    await pictureGate('the deepest frame of the close is still a picture',
      't=9.5s', 'ending-late-close.png', LATE_CLOSE_MEAN_MIN, LATE_CLOSE_MEAN_MAX);

    await endPg.evaluate((n) => window.__mcgrotDebug.stepFrames(n), SEQ_FRAMES - LATE_CLOSE_FRAMES);
    await ctlPg.evaluate((n) => window.__mcgrotDebug.stepFrames(n), SEQ_FRAMES - LATE_CLOSE_FRAMES);
    const during = await snapshot(endPg);
    const duringCtl = await snapshot(ctlPg);
    const endState = await endPg.evaluate(() => ({
      ...window.__mcgrotDebug.ending.state(),
      cardDisplay: getComputedStyle(document.getElementById('ending-card')).display,
    }));

    // The close must actually close something. The control arm proves the fog
    // and exposure moved because of the sequence and not because the clock
    // rolled on underneath both of them.
    results.push({
      name: 'stepping into the haar closes the street (opposed pair)',
      pass: began && endState.phase === 'ended' && endState.cardDisplay === 'flex'
        && during.fogDensity > duringCtl.fogDensity * 3
        && during.exposure < duringCtl.exposure
        && Math.hypot(during.camX - beforeEnd.camX, during.camZ - beforeEnd.camZ) > 20,
      detail: `after ${SEQ_FRAMES} frames — ended: fog ${during.fogDensity}, exposure ${during.exposure}, ` +
        `camera moved ${Math.hypot(during.camX - beforeEnd.camX, during.camZ - beforeEnd.camZ).toFixed(1)}m north; ` +
        `control (identical frames, never stepped in): fog ${duringCtl.fogDensity}, exposure ${duringCtl.exposure} ` +
        `(want fog >3x the control and exposure below it); card ${endState.cardDisplay}`,
    });

    results.push({
      name: 'atmosphere is suspended for the close and only for the close',
      pass: beforeEnd.suspended === false && during.suspended === true && duringCtl.suspended === false,
      detail: `suspended before=${beforeEnd.suspended}, during=${during.suspended}, ` +
        `control throughout=${duringCtl.suspended} (atmosphere repaints the whole palette every frame, so ` +
        `without the hand-off the sequence's fog and exposure are overwritten before they are ever seen)`,
    });

    // "Keep walking" is the reason this is a close and not a fail state.
    await endPg.evaluate(() => window.__mcgrotDebug.ending.resume());
    await endPg.evaluate(() => window.__mcgrotDebug.stepFrames(4));
    await ctlPg.evaluate(() => window.__mcgrotDebug.stepFrames(4));
    const resumed = await snapshot(endPg);
    const resumedCtl = await snapshot(ctlPg);
    const resumedState = await endPg.evaluate(() => ({
      phase: window.__mcgrotDebug.ending.state().phase,
      cardDisplay: getComputedStyle(document.getElementById('ending-card')).display,
    }));
    results.push({
      name: '"keep walking" hands the street back, matching a boot that never ended',
      pass: resumedState.phase === 'idle' && resumedState.cardDisplay === 'none'
        && resumed.suspended === false
        && resumed.fogDensity === resumedCtl.fogDensity
        && resumed.exposure === resumedCtl.exposure
        && resumed.camX === beforeEnd.camX && resumed.camZ === beforeEnd.camZ,
      detail: `resumed vs a control boot stepped the identical number of frames — ` +
        `fog ${resumed.fogDensity} vs ${resumedCtl.fogDensity}, exposure ${resumed.exposure} vs ${resumedCtl.exposure} ` +
        `(want equal; comparing against a snapshot taken BEFORE the close instead reads the hinge's still-settling ` +
        `weather transition as a hand-off failure — it did, at 0.5694 vs 0.5700); ` +
        `camera back at ${resumed.camX},${resumed.camZ} vs ${beforeEnd.camX},${beforeEnd.camZ}; ` +
        `phase ${resumedState.phase}, card ${resumedState.cardDisplay}`,
    });

    await endCtx.close();
    await ctlCtx.close();
    endRegion();
    } // end region: ending

    if (region('render')) {
    beginPhase('render:bookmark-goldens');
    // --- bookmarks: draw-call budget + goldens ---
    if (!existsSync(goldenDir)) mkdirSync(goldenDir, { recursive: true });
    const bookmarks = await page1.evaluate(() => window.__mcgrotDebug.bookmarks);

    let budget = existsSync(budgetPath) ? JSON.parse(readFileSync(budgetPath, 'utf8')) : { tolerancePct: DRAW_CALL_TOLERANCE_PCT, perBookmark: {} };
    const drawCallsByBookmark = {};
    const shotsByBookmark = {}; // raw PNG buffers, for the facade-darkening check below

    for (const bm of bookmarks) {
      await page1.evaluate((id) => window.__mcgrotDebug.gotoBookmark(id), bm.id);
      const inv = await getInvariants(page1);

      // A scene bookmark can NEVER legitimately render nothing. Zero draw calls
      // means the frame came up empty — a transient WebGL/GPU capture failure
      // (seen under GPU contention when another context is live). Fail loudly
      // and do NOT let it overwrite a good golden/baseline: --update-goldens
      // silently baking a blank frame is exactly the kind of silent corruption
      // this rig exists to prevent. Leaving it out of drawCallsByBookmark keeps
      // the 0 out of the rebuilt budget (the prior baseline is preserved below).
      if (inv.drawCalls === 0) {
        results.push({ name: `render:${bm.id}`, pass: false, detail: 'rendered 0 draw calls (empty frame — capture/GPU failure); golden NOT written' });
        continue;
      }
      drawCallsByBookmark[bm.id] = inv.drawCalls;

      const baseline = budget.perBookmark[bm.id];
      if (UPDATE_GOLDENS || baseline === undefined) {
        results.push({ name: `budget:${bm.id}`, pass: true, detail: `baseline captured (${inv.drawCalls} draw calls)` });
      } else {
        const diff = pctDiff(inv.drawCalls, baseline.drawCalls);
        results.push({
          name: `budget:${bm.id}`,
          pass: diff <= budget.tolerancePct,
          detail: `${inv.drawCalls} draw calls vs baseline ${baseline.drawCalls} (${diff.toFixed(1)}% diff, tolerance ${budget.tolerancePct}%)`,
        });
      }

      const shot = await page1.screenshot();
      shotsByBookmark[bm.id] = shot;
      // Routed through checkGolden so a recapture run (golden file absent)
      // still falls through to the clip-control check below — the old inline
      // capture branch `continue`d past it, silently dropping 8 checks from
      // any recapture run and making 158/158 look like a full pass.
      const bookmarkPng = checkGolden(results, `golden:${bm.id}`, shot, join(goldenDir, `${bm.id}.png`));

      // E2c.1 acceptance criterion 3's control figure — overcast should
      // never clip; reported alongside the 'clear' figure below.
      const controlClipPct = clippedHighlightPct(bookmarkPng);
      results.push({
        name: `clip-control:${bm.id}`,
        pass: controlClipPct < CLIP_PCT_MAX,
        detail: `${controlClipPct.toFixed(3)}% pixels clipped (overcast control, must be <${CLIP_PCT_MAX}%)`,
      });
    }

    beginPhase('render:night-golden');
    // --- E2g.1: the night golden ------------------------------------------
    // Its own boot at 22:00 overcast, because page1 is pinned to SMOKE_HOUR
    // and every later check in this region reads that state. One pose, one
    // hour, no weather column: the point is that the lit street exists in the
    // golden set at all before E8 recaptures everything it can see.
    //
    // The night poses are deliberately NOT in `bookmarks` (see
    // NIGHT_BOOKMARK_DEFS in src/debug.js), so nothing above this line moved.
    // They do enter budget.json and the contrast-floor aggregate, both of
    // which are keyed by whatever was actually captured.
    const nightBookmarks = await page1.evaluate(() => window.__mcgrotDebug.nightBookmarks);
    {
      const { context: nightCtx, page: nightPg } = await bootPage(browser, port);
      // Belt-and-braces against the autonomous roller, same as the weather
      // capture passes: a scheduled change mid-capture would be indistinguishable
      // from a real golden regression.
      await nightPg.evaluate(() => window.__mcgrotDebug.setWeatherSchedule(false));
      await nightPg.evaluate(() => window.__mcgrotDebug.setWeather('overcast'));
      await nightPg.evaluate((h) => window.__mcgrotDebug.setTime(h), NIGHT_GOLDEN_HOUR);
      await nightPg.evaluate((f) => window.__mcgrotDebug.stepFrames(f), WEATHER_SETTLE_FRAMES);

      for (const bm of nightBookmarks) {
        await nightPg.evaluate((id) => window.__mcgrotDebug.gotoBookmark(id), bm.id);
        const inv = await getInvariants(nightPg);
        if (inv.drawCalls === 0) {
          results.push({ name: `render:${bm.id}`, pass: false, detail: 'rendered 0 draw calls (empty frame — capture/GPU failure); golden NOT written' });
          continue;
        }
        drawCallsByBookmark[bm.id] = inv.drawCalls;
        const baseline = budget.perBookmark[bm.id];
        if (UPDATE_GOLDENS || baseline === undefined) {
          results.push({ name: `budget:${bm.id}`, pass: true, detail: `baseline captured (${inv.drawCalls} draw calls)` });
        } else {
          const diff = pctDiff(inv.drawCalls, baseline.drawCalls);
          results.push({
            name: `budget:${bm.id}`,
            pass: diff <= budget.tolerancePct,
            detail: `${inv.drawCalls} draw calls vs baseline ${baseline.drawCalls} (${diff.toFixed(1)}% diff, tolerance ${budget.tolerancePct}%)`,
          });
        }
        // No clip-control check: CLIP_PCT_MAX is E2c.1's overcast-DAYLIGHT
        // criterion, and a lamp bulb is an additive emissive that is supposed
        // to be the brightest thing in a night frame.
        const shot = await nightPg.screenshot();
        checkGolden(results, `golden:${bm.id}`, shot, join(goldenDir, `${bm.id}.png`));
      }
      await nightCtx.close();
    }

    beginPhase('render:e2a-night-facades');
    // --- E2a: clock pinning + sky/fog seam + the facade-darkening regression ---
    const invAfterBookmarks = await getInvariants(page1);
    results.push({
      name: 'time pinned',
      pass: invAfterBookmarks.time === SMOKE_HOUR && invAfterBookmarks.rate === 0,
      detail: `time=${invAfterBookmarks.time}, rate=${invAfterBookmarks.rate} (expected ${SMOKE_HOUR}, 0)`,
    });
    results.push({
      name: 'sky/fog linked',
      pass: !!invAfterBookmarks.skyFogLinked,
      detail: invAfterBookmarks.skyFogLinked ? 'uFog uniform === scene.fog.color' : 'sky dome uFog uniform is NOT the same object as scene.fog.color — see "THE SEAM" in src/sky.js',
    });

    // E2g split this in two. `night darkens facades` is E2a's regression
    // detector — it exists to catch a build where dimming the lights leaves
    // façades pixel-identical to daylight — and street lighting is a second
    // light source landing on the very surfaces it reads. With the lamps lit
    // the same pose reads 57.7% against a 45% ceiling, so the choice was to
    // raise the ceiling (keeping it green while gutting what it detects) or
    // to isolate the subsystem it was built to test. Isolated: it runs on a
    // lamps-off boot with NIGHT_LUMINANCE_RATIO_MAX untouched.
    //
    // The lamps-on case is not thereby untested — it gets its own gate below,
    // with a tighter instrument.
    const { context: lampsOffCtx, page: lampsOffPage } = await bootPage(browser, port, { __mcgrotForceLamps: false });
    await lampsOffPage.evaluate((id) => window.__mcgrotDebug.gotoBookmark(id), 'mid-805-far');
    const dayShotOff = await lampsOffPage.screenshot();
    await lampsOffPage.evaluate(() => window.__mcgrotDebug.setTime(22));
    await lampsOffPage.evaluate((id) => window.__mcgrotDebug.gotoBookmark(id), 'mid-805-far');
    const nightShotOff = await lampsOffPage.screenshot();
    {
      const dayLum = meanLuminanceUpperHalf(PNG.sync.read(dayShotOff));
      const nightLum = meanLuminanceUpperHalf(PNG.sync.read(nightShotOff));
      const ratio = dayLum > 0 ? (nightLum / dayLum) * 100 : 0;
      results.push({
        name: 'night darkens facades',
        pass: ratio <= NIGHT_LUMINANCE_RATIO_MAX,
        detail: `lamps OFF: 22:00 mean luminance is ${ratio.toFixed(1)}% of ${SMOKE_HOUR}:00's (${nightLum.toFixed(1)} vs ${dayLum.toFixed(1)}; must be <=${NIGHT_LUMINANCE_RATIO_MAX}%)`,
      });
    }

    // E2g's own night gate, and the reason the one above could be isolated
    // without losing coverage. Reads the TOP strip rather than the upper half:
    // once the street is lit, upper-half luminance cannot separate "night" from
    // "day" (57.7% vs a 100% failure leaves no usable ceiling), while the strip
    // above the rooflines still can — 19.1% vs 100%.
    //
    // The strip is NOT beyond the lamps' reach; that was assumed and then
    // measured false (lit façade tops intrude at this pose). That is what makes
    // it the right instrument for E2g specifically: it responds to lamp
    // brightness, so cranking LIGHT_PEAK until night reads as day fails here.
    // The CONTROL is the same measurement on the lamps-off boot, which isolates
    // the lamps' own contribution — without it a build with no lamps at all
    // passes trivially at 2.4%.
    const dayShot = shotsByBookmark['mid-805-far'];
    if (dayShot) {
      await page1.evaluate(() => window.__mcgrotDebug.setTime(22));
      await page1.evaluate((id) => window.__mcgrotDebug.gotoBookmark(id), 'mid-805-far');
      const nightShot = await page1.screenshot();
      const dayTop = meanLuminanceTopStrip(PNG.sync.read(dayShot));
      const nightTop = meanLuminanceTopStrip(PNG.sync.read(nightShot));
      const litRatio = dayTop > 0 ? (nightTop / dayTop) * 100 : 0;
      const ctlDayTop = meanLuminanceTopStrip(PNG.sync.read(dayShotOff));
      const ctlNightTop = meanLuminanceTopStrip(PNG.sync.read(nightShotOff));
      const ctlRatio = ctlDayTop > 0 ? (ctlNightTop / ctlDayTop) * 100 : 0;
      results.push({
        name: 'night stays night with the lamps lit (opposed pair)',
        pass: litRatio <= LIT_NIGHT_SKY_RATIO_MAX && litRatio > ctlRatio * LIT_NIGHT_MIN_LIFT,
        detail: `lamps ON: 22:00 top strip is ${litRatio.toFixed(1)}% of ${SMOKE_HOUR}:00's (must be <=${LIT_NIGHT_SKY_RATIO_MAX}%); ` +
          `control lamps OFF reads ${ctlRatio.toFixed(1)}% (lit must exceed it by >=${LIT_NIGHT_MIN_LIFT}x, else the lamps are not reaching the street)`,
      });
    } else {
      results.push({ name: 'night stays night with the lamps lit (opposed pair)', pass: false, detail: `mid-805-far screenshot unavailable (its render check above failed)` });
    }

    beginPhase('render:torch');
    // --- E2b: the torch demonstrably lights a readable surface ---
    // Runs on its own boot with the LAMPS FORCED OFF (E2g). The gate's job is
    // to catch a reverted MeshLambertMaterial conversion, and it does that by
    // asking whether the torch alone can light a comic to readability. Street
    // lights are a second light source reaching the same surface, so leaving
    // them on turns a torch measurement into a torch-plus-lamps one: the same
    // pose reads 1.20x with them lit, against 2.5x required. Lowering the
    // threshold to suit would have kept the gate green while deleting what it
    // detects. Isolating the torch instead leaves TORCH_MIN_RATIO untouched
    // and still meaning exactly what it meant.
    // Reuses the lamps-off boot made for `night darkens facades` — same flag
    // state, and a second full boot would cost ~20s to prove nothing extra.
    // It arrives here posed at mid-805-far/22:00; the pose block below sets
    // its own hour and camera, so that inherited state is overwritten.
    const torchPage = lampsOffPage;
    const torchPose = await torchPage.evaluate(({ hour, eyeHeight, standOff }) => {
      const dbg = window.__mcgrotDebug;
      dbg.setTime(hour);
      const items = dbg.litter.items;
      if (!items.length) return null;
      // Pick the comic farthest from any NPC — NPCs carry an always-bright
      // world-space name/occupation sprite label plus a DOM interact prompt
      // when the camera is close, neither of which respond to scene light;
      // either one sitting in the crop would swamp this luminance read with
      // brightness that has nothing to do with the torch.
      const npcPositions = dbg.npcs.npcs.map((n) => ({ x: n.group.position.x, z: n.group.position.z }));
      let best = items[0], bestDist = -1;
      for (const it of items) {
        let minD = Infinity;
        for (const p of npcPositions) minD = Math.min(minD, Math.hypot(it.x - p.x, it.z - p.z));
        if (minD > bestDist) { bestDist = minD; best = it; }
      }
      // Stand just south of the comic, facing north at it — direction doesn't
      // matter here, only distance (well inside torch reach) and that the
      // comic fills the centre of frame.
      const px = best.x, pz = best.z + standOff;
      const groundY = dbg.world.groundHeight ? dbg.world.groundHeight(px, pz) : 0;
      dbg.camera.position.set(px, groundY + eyeHeight, pz);
      // Look down at the comic's own near-ground height (src/litter.js sits
      // it at groundY+0.055), not eye height — the earlier version aimed
      // level-forward, so the comic (lying flat, barely visible edge-on from
      // eye height anyway) ended up below the frame instead of centred.
      dbg.camera.lookAt(best.x, groundY + 0.055, best.z);
      return { x: best.x, z: best.z, nearestNpcDist: bestDist };
    }, { hour: TORCH_HOUR, eyeHeight: TORCH_EYE_HEIGHT, standOff: TORCH_STAND_OFF });

    if (torchPose) {
      // Standing this close to a litter comic can also put the camera inside
      // an NPC's proximity-prompt radius — interact.js's per-frame updater
      // re-shows that DOM overlay every stepFrame while in range, so hiding
      // it once before the settle loop doesn't stick; it has to be the very
      // last thing done before each screenshot. It's a fixed-brightness DOM
      // element on top of the canvas, untouched by any scene light, so left
      // visible it would swamp a centre-crop luminance read.
      const hidePrompt = () => torchPage.evaluate(() => {
        const el = document.getElementById('npc-prompt');
        if (el) el.style.display = 'none';
      });
      // Separate evaluate() round-trips so the browser actually gets a
      // macrotask tick between frames — a tight synchronous stepFrame loop
      // never lets the comic's lazily-loaded texture finish decoding/
      // uploading (see settleAt's own note in src/debug.js for the same
      // race, found and fixed during this milestone).
      for (let i = 0; i < 40; i++) {
        await torchPage.evaluate((i) => window.__mcgrotDebug.stepFrame(1 / 60, i / 60), i);
      }
      await hidePrompt();
      const torchOnShot = await torchPage.screenshot();
      const torchOnLum = meanLuminanceCenterCrop(PNG.sync.read(torchOnShot), 0.3, 0.3);

      // Zero the torch and render directly (renderer.render, not stepFrame) —
      // the 'torch' and 'atmosphere' updaters both recompute the light's
      // intensity/distance from time-of-day every stepFrame call, so going
      // through stepFrame here would just have them overwrite the override
      // before the next frame ever reached the screen. That also means the
      // 'interact' updater doesn't run either, so the prompt (hidden above)
      // can't be re-shown before this screenshot.
      await torchPage.evaluate(() => {
        const dbg = window.__mcgrotDebug;
        const torchLight = dbg.camera.children.find((c) => c.isPointLight);
        if (torchLight) torchLight.intensity = 0;
        // Post-aware direct render (dbg.renderNow) — a raw
        // dbg.renderer.render() would skip the post pass, making the
        // torch-on/torch-off shots compared below no longer like-for-like.
        dbg.renderNow();
      });
      const torchOffShot = await torchPage.screenshot();
      const torchOffLum = meanLuminanceCenterCrop(PNG.sync.read(torchOffShot), 0.3, 0.3);

      const torchRatio = torchOffLum > 0 ? torchOnLum / torchOffLum : (torchOnLum > 0 ? Infinity : 0);
      results.push({
        name: 'torch lights a readable surface',
        pass: torchRatio >= TORCH_MIN_RATIO,
        detail: `torch-on mean luminance ${torchOnLum.toFixed(1)} vs torch-off ${torchOffLum.toFixed(1)} (${torchRatio.toFixed(2)}x; must be >=${TORCH_MIN_RATIO}x)`,
      });
    } else {
      results.push({ name: 'torch lights a readable surface', pass: false, detail: 'no litter comic available to pose the camera at' });
    }
    await lampsOffCtx.close();


    beginPhase('render:weather-matrix');
    // --- E2c.1: exact draw-call parity for this milestone ---
    // The brief's own gate is stricter than the standing ±10% tolerance
    // above: this refactor adds no geometry, so every bookmark's draw calls
    // should match its baseline EXACTLY, not just within tolerance.
    const drawCallDrift = Object.entries(drawCallsByBookmark)
      .map(([id, calls]) => ({ id, calls, baseline: budget.perBookmark[id] && budget.perBookmark[id].drawCalls }))
      .filter((r) => r.baseline !== undefined && r.calls !== r.baseline);
    results.push({
      name: 'draw calls +/-0 (E2c.1)',
      pass: UPDATE_GOLDENS || drawCallDrift.length === 0,
      detail: UPDATE_GOLDENS ? 'skipped: baseline just (re)captured this run'
        : drawCallDrift.length === 0 ? 'every bookmark matches its baseline exactly'
        : drawCallDrift.map((r) => `${r.id}: ${r.calls} vs ${r.baseline}`).join('; '),
    });

    if (QUICK) {
      console.log('[smoke] --quick: skipping the weather matrix (clear/rain/drizzle/haar columns, transitions, 24h sweeps)');
      skipped.push('weather matrix (clear, rain, drizzle, haar columns + transition and sweep checks)');
    } else {
    // --- E2c.1: the clear weather column ---
    // setWeather + a full WEATHER_SETTLE_FRAMES worth of stepped dt so the
    // 10s transition (WEATHER_TRANSITION_SECONDS, atmosphere.js) is
    // guaranteed complete before any golden capture below.
    await page1.evaluate((h) => window.__mcgrotDebug.setTime(h), SMOKE_HOUR);
    await page1.evaluate(() => window.__mcgrotDebug.setWeather('clear'));
    await page1.evaluate((frames) => {
      // Settle without drawing the frames nobody looks at (see debug.js stepFrames).
      window.__mcgrotDebug.stepFrames(frames);
    }, WEATHER_SETTLE_FRAMES);

    const clearSettledInv = await getInvariants(page1);
    results.push({
      name: 'weather reaches target (clear)',
      pass: clearSettledInv.weather === 'clear' && clearSettledInv.weatherTransition === null,
      detail: `weather=${clearSettledInv.weather}, transition=${JSON.stringify(clearSettledInv.weatherTransition)}`,
    });

    for (const bm of bookmarks) {
      await page1.evaluate((id) => window.__mcgrotDebug.gotoBookmark(id), bm.id);
      const inv = await getInvariants(page1);
      if (inv.drawCalls === 0) {
        results.push({ name: `render-clear:${bm.id}`, pass: false, detail: 'rendered 0 draw calls (empty frame — capture/GPU failure); golden NOT written' });
        continue;
      }

      // NOT compared against the overcast draw-call baseline here: by this
      // point leithers/NPCs/vermin/birds (real-time simulated, not
      // seeded-static — the same exclusion docs/VALIDATION.md's geomHash
      // makes) have moved during the weather-transition tests above, so a
      // bookmark's frustum can legitimately catch a different set of them
      // than it did on the FIRST (fresh-boot) pass. That's not a weather
      // effect; the milestone's actual draw-call gate is the ORIGINAL
      // overcast loop above (see 'draw calls +/-0 (E2c.1)'), which never
      // revisits a bookmark and so isn't exposed to this.
      const shot = await page1.screenshot();
      const clearPng = checkGolden(results, `golden-clear:${bm.id}`, shot, join(goldenDir, `${bm.id}-clear.png`));

      const clipPct = clippedHighlightPct(clearPng);
      results.push({
        name: `clip-clear:${bm.id}`,
        pass: clipPct < CLIP_PCT_MAX,
        detail: `${clipPct.toFixed(3)}% pixels clipped (clear, must be <${CLIP_PCT_MAX}%)`,
      });
    }

    // Acceptance criterion 2's second capture: 08:00, low sun, shadowed
    // street side. setTime freezes the clock; weather stays 'clear' (setTime
    // doesn't touch it).
    await page1.evaluate((h) => window.__mcgrotDebug.setTime(h), CLEAR_MORNING_HOUR);
    await page1.evaluate((id) => window.__mcgrotDebug.gotoBookmark(id), CLEAR_MORNING_BOOKMARK);
    const morningShot = await page1.screenshot();
    const morningPng = checkGolden(
      results,
      `golden-clear:${CLEAR_MORNING_BOOKMARK}-08`,
      morningShot,
      join(goldenDir, `${CLEAR_MORNING_BOOKMARK}-clear-08.png`)
    );
    const morningClipPct = clippedHighlightPct(morningPng);
    results.push({
      name: `clip-clear:${CLEAR_MORNING_BOOKMARK}-08`,
      pass: morningClipPct < CLIP_PCT_MAX,
      detail: `${morningClipPct.toFixed(3)}% pixels clipped (clear, 08:00, must be <${CLIP_PCT_MAX}%)`,
    });

    // E2c.3a acceptance criterion 2, time-of-day half: samplePalette's own
    // lerp, independent of blendPalette's weather-transition lerp tested
    // below. Weather is still 'clear' from the loop above (setTime doesn't
    // touch weather). hour 6.5 sits inside the 5->8 bracket, whose stops are
    // 0.0095 (still-night) and 0.0022 (thinned daylight) — a real, unequal
    // pair, so a mid-bracket sample has somewhere to land other than one of
    // the two endpoints. Verified by hand: commenting out samplePalette's
    // `out.fogDensity = lerp(...)` line collapses this to hour 5's raw
    // 0.0095 (outside the (lo,hi) open interval since it collapses to lo
    // itself, not strictly inside it), and this check goes red.
    await page1.evaluate((h) => window.__mcgrotDebug.setTime(h), 6.5);
    const todInv = await getInvariants(page1);
    const todLo = Math.min(0.0095, 0.0022);
    const todHi = Math.max(0.0095, 0.0022);
    results.push({
      name: 'fogDensity blends across time-of-day bracket',
      pass: todInv.weather === 'clear' && todInv.fogDensity > todLo && todInv.fogDensity < todHi,
      detail: `06:30 fogDensity ${todInv.fogDensity.toFixed(5)} between hour5=0.00950 and hour8=0.00220`,
    });

    // --- E2c.1: transition midpoint sits between the two endpoints ---
    await page1.evaluate((h) => window.__mcgrotDebug.setTime(h), SMOKE_HOUR);
    const clearSettledInvAtSmokeHour = await getInvariants(page1);
    const clearExposure = clearSettledInvAtSmokeHour.exposure;
    const clearFogDensity = clearSettledInvAtSmokeHour.fogDensity;
    await page1.evaluate(() => window.__mcgrotDebug.setWeather('overcast'));
    await page1.evaluate(() => {
      const dbg = window.__mcgrotDebug;
      for (let i = 0; i < 300; i++) { try { dbg.stepFrame(1 / 60, i / 60); } catch { /* harmless */ } }
    });
    const midInv = await getInvariants(page1);
    await page1.evaluate((frames) => {
      // Settle without drawing the frames nobody looks at (see debug.js stepFrames).
      window.__mcgrotDebug.stepFrames(frames);
    }, WEATHER_SETTLE_FRAMES);
    const finalInv = await getInvariants(page1);

    const lo = Math.min(clearExposure, finalInv.exposure);
    const hi = Math.max(clearExposure, finalInv.exposure);
    results.push({
      name: 'weather transition midpoint',
      pass: !!midInv.weatherTransition && midInv.exposure > lo && midInv.exposure < hi,
      detail: `mid-transition exposure ${midInv.exposure.toFixed(3)} between clear=${clearExposure.toFixed(3)} and overcast=${finalInv.exposure.toFixed(3)} (progress=${midInv.weatherTransition ? midInv.weatherTransition.progress.toFixed(2) : 'n/a'})`,
    });

    // E2c.3a acceptance criterion 2: fogDensity blends across BOTH axes —
    // this specific gate only proves the weather-transition blend (the same
    // clear->overcast transition captured above, at SMOKE_HOUR so both
    // columns' densities differ: clear=0.0022, overcast=0.0095). Same shape
    // as the exposure check above, same clearFogDensity/finalFogDensity
    // captured alongside clearExposure/finalInv.exposure — a strictly-between
    // assertion that's able to fail (verified by hand: commenting out either
    // the samplePalette or blendPalette fogDensity lerp collapses this to the
    // unblended endpoint value, which fails the strict inequality).
    const fdLo = Math.min(clearFogDensity, finalInv.fogDensity);
    const fdHi = Math.max(clearFogDensity, finalInv.fogDensity);
    results.push({
      name: 'fogDensity blends across weather transition',
      pass: !!midInv.weatherTransition && midInv.fogDensity > fdLo && midInv.fogDensity < fdHi,
      detail: `mid-transition fogDensity ${midInv.fogDensity.toFixed(5)} between clear=${clearFogDensity.toFixed(5)} and overcast=${finalInv.fogDensity.toFixed(5)} (progress=${midInv.weatherTransition ? midInv.weatherTransition.progress.toFixed(2) : 'n/a'})`,
    });
    results.push({
      name: 'weather reaches target (overcast)',
      pass: finalInv.weather === 'overcast' && finalInv.weatherTransition === null,
      detail: `weather=${finalInv.weather}, transition=${JSON.stringify(finalInv.weatherTransition)}`,
    });

    // --- E2c.1: midnight wraparound occurring mid-transition ---
    // setRate is a test-only override (src/debug.js) so the clock advances
    // deterministically via stepFrame — setTime always freezes rate to 0, so
    // it has to be called first and overridden after.
    await page1.evaluate(() => {
      const dbg = window.__mcgrotDebug;
      dbg.setTime(23.95);
      dbg.setRate(60); // hours/frame = 60 * (1/60)/60 = 1/60 at dt=1/60 — crosses 24 in well under a second
      dbg.setWeather('clear'); // a transition genuinely in flight across the wrap
    });
    await page1.evaluate(() => {
      const dbg = window.__mcgrotDebug;
      for (let i = 0; i < 60; i++) { try { dbg.stepFrame(1 / 60, i / 60); } catch { /* harmless */ } }
    });
    const wrapInv = await getInvariants(page1);
    await page1.evaluate(() => window.__mcgrotDebug.setRate(0)); // done stress-testing; refreeze before ctx1 closes
    results.push({
      name: 'midnight wraparound mid-transition',
      pass: wrapInv.consoleErrors.length === 0 && Number.isFinite(wrapInv.time) && wrapInv.time >= 0 && wrapInv.time < 24,
      detail: `time=${Number.isFinite(wrapInv.time) ? wrapInv.time.toFixed(2) : wrapInv.time} after wrap, ` +
        `transition=${JSON.stringify(wrapInv.weatherTransition)}, consoleErrors=${wrapInv.consoleErrors.length}` +
        (wrapInv.consoleErrors.length ? ` (${wrapInv.consoleErrors.join(' | ')})` : ''),
    });

    // --- E2c.2.1: rain phase must stay independent of intensity across a
    // transition, even deep into a long session — the harness proof for the
    // src/rain.js fix above. Own fresh boot: samples the rain THREE.Points
    // object's own Y positions across consecutive stepped frames, once
    // settled in 'rain' and once immediately after starting a transition
    // toward 'overcast' — both windows start at the SAME t (RAIN_MEASURE_T),
    // per the brief, so the second window's t deliberately reads backward
    // from wherever the first window's stepping left it; rain.js's position
    // is a pure function of t so that's harmless to rain itself, and this is
    // the only subsystem this check reads from.
    async function measureRainDisplacement(page, tStart, frames) {
      return page.evaluate(({ tStart, frames, boxHeight }) => {
        const dbg = window.__mcgrotDebug;
        let rainObj = null;
        dbg.camera.parent.traverse((o) => { if (o.name === 'rain') rainObj = o; });
        if (!rainObj) return null;
        dbg.stepFrame(1 / 60, tStart); // prime: establish the position AT tStart itself, uncounted
        const posArr = rainObj.geometry.attributes.position.array;
        const n = rainObj.geometry.attributes.position.count;
        const prevY = new Float32Array(n);
        for (let i = 0; i < n; i++) prevY[i] = posArr[i * 3 + 1];
        let totalAbsDelta = 0;
        for (let f = 1; f <= frames; f++) {
          dbg.stepFrame(1 / 60, tStart + f / 60);
          for (let i = 0; i < n; i++) {
            const y = posArr[i * 3 + 1];
            // Circular distance, folding out BOX_HEIGHT wraparound — a normal
            // wrap event reads as a near-BOX_HEIGHT raw jump even though the
            // true per-frame movement is tiny.
            let d = ((y - prevY[i]) % boxHeight + boxHeight) % boxHeight;
            if (d > boxHeight / 2) d -= boxHeight;
            totalAbsDelta += Math.abs(d);
            prevY[i] = y;
          }
        }
        return totalAbsDelta / (n * frames);
      }, { tStart, frames, boxHeight: RAIN_BOX_HEIGHT });
    }

    {
      const { context: ctxDisp, page: pageDisp } = await bootPage(browser, port);
      await pageDisp.evaluate((h) => window.__mcgrotDebug.setTime(h), SMOKE_HOUR);
      await pageDisp.evaluate(() => window.__mcgrotDebug.setWeather('rain'));
      await pageDisp.evaluate((frames) => {
        // Settle without drawing the frames nobody looks at (see debug.js stepFrames).
        window.__mcgrotDebug.stepFrames(frames);
      }, WEATHER_SETTLE_FRAMES);

      const settledDisp = await measureRainDisplacement(pageDisp, RAIN_MEASURE_T, RAIN_MEASURE_FRAMES);
      await pageDisp.evaluate(() => window.__mcgrotDebug.setWeather('overcast'));
      const transitionDisp = await measureRainDisplacement(pageDisp, RAIN_MEASURE_T, RAIN_MEASURE_FRAMES);

      const dispRatio = settledDisp > 0 ? transitionDisp / settledDisp : (transitionDisp > 0 ? Infinity : 0);
      results.push({
        name: 'rain phase independent of intensity (transition displacement)',
        pass: settledDisp != null && transitionDisp != null && dispRatio <= RAIN_MEASURE_MAX_RATIO,
        detail: settledDisp == null || transitionDisp == null
          ? 'rain object not found in scene'
          : `settled=${settledDisp.toFixed(4)}m/frame, mid-transition=${transitionDisp.toFixed(4)}m/frame, ` +
            `ratio=${dispRatio.toFixed(2)}x (max ${RAIN_MEASURE_MAX_RATIO}x) at t=${RAIN_MEASURE_T}s`,
      });

      await ctxDisp.close();
    }

    // --- E2c.2 / E2c.2.1: rain, drizzle ---
    // Each weather (including a MATCHED overcast control) gets its OWN fresh
    // boot, and every pass settles fully (WEATHER_SETTLE_FRAMES) BEFORE
    // visiting any bookmark — draw calls are then diffed against the control
    // pass's own draw calls, not against budget.perBookmark. Because every
    // pass runs the identical sequence (fresh boot -> settle -> bookmarks in
    // the same order), leithers/NPCs/birds/vermin (real-time simulated, not
    // seeded-static — see docs/VALIDATION.md's geomHash note) have drifted by
    // the exact same number of stepped frames at each bookmark index in every
    // pass, so the only draw-call difference left between rain/drizzle and
    // the control is the rain object's own. This replaces the earlier
    // "no pre-loop settle, diff against budget.perBookmark" approach, which
    // captured mid-transition goldens (palette.rain still blending in) and
    // compared against a baseline pass that visited bookmarks with a
    // different settle history entirely.
    // `visitBookmarkIds` is ALWAYS the full set, for every weather including
    // drizzle: gotoBookmark's own settleAt() burns ~150+ stepped frames per
    // call, so visiting a shorter bookmark subset shifts every later
    // bookmark's elapsed-frame count relative to a pass that visited more
    // bookmarks first — the exact "spurious draw-call delta from entity
    // drift, not the rain object" failure mode this whole fix exists to
    // avoid. `goldenBookmarkIds` (default: all) is only which of those
    // visits actually get a golden/clip check — drizzle keeps its original
    // two representative poses there.
    async function captureWeatherPass(weatherName, visitBookmarkIds, { goldenBookmarkIds = visitBookmarkIds, nightCapture = false } = {}) {
      const { context, page } = await bootPage(browser, port);
      await page.evaluate((h) => window.__mcgrotDebug.setTime(h), SMOKE_HOUR);
      await page.evaluate((name) => window.__mcgrotDebug.setWeather(name), weatherName);
      await page.evaluate((frames) => {
        // Settle without drawing the frames nobody looks at (see debug.js stepFrames).
        window.__mcgrotDebug.stepFrames(frames);
      }, WEATHER_SETTLE_FRAMES);

      const drawCalls = {};
      let lastInv = null;
      for (const id of visitBookmarkIds) {
        await page.evaluate((bid) => window.__mcgrotDebug.gotoBookmark(bid), id);
        const inv = await getInvariants(page);
        lastInv = inv;
        // Acceptance criterion 2: assert fully settled AT EVERY CAPTURE
        // POINT, not just once before the loop.
        results.push({
          name: `settled-at-capture:${weatherName}:${id}`,
          pass: inv.weather === weatherName && inv.weatherTransition === null,
          detail: `weather=${inv.weather}, transition=${JSON.stringify(inv.weatherTransition)}`,
        });
        if (inv.drawCalls === 0) {
          results.push({ name: `render-${weatherName}:${id}`, pass: false, detail: 'rendered 0 draw calls (empty frame — capture/GPU failure); golden NOT written' });
          continue;
        }
        drawCalls[id] = inv.drawCalls;

        if (goldenBookmarkIds.includes(id)) {
          const shot = await page.screenshot();
          const png = checkGolden(results, `golden-${weatherName}:${id}`, shot, join(goldenDir, `${id}-${weatherName}.png`));
          const clipPct = clippedHighlightPct(png);
          results.push({
            name: `clip-${weatherName}:${id}`,
            pass: clipPct < CLIP_PCT_MAX,
            detail: `${clipPct.toFixed(3)}% pixels clipped (${weatherName}, must be <${CLIP_PCT_MAX}%)`,
          });
        }
      }

      results.push({
        name: `weather reaches target (${weatherName})`,
        pass: !!lastInv && lastInv.weather === weatherName && lastInv.weatherTransition === null,
        detail: lastInv
          ? `weather=${lastInv.weather}, transition=${JSON.stringify(lastInv.weatherTransition)}, rain=${lastInv.rain.toFixed(2)}, wetness=${lastInv.wetness.toFixed(2)}`
          : 'no bookmarks visited',
      });

      // One extra capture at NIGHT_RAIN_HOUR, reported but NOT gated (per the
      // brief) — reuses this same fresh boot rather than a fifth one. Written
      // to captureDir, not goldenDir (fix 3) — this is evidence for a human,
      // not a gated golden. Labelled by weatherName so this doubles as the
      // E2c.3b haar night capture (evidence for 3c's TORCH_DISTANCE call)
      // without a second bespoke code path.
      if (nightCapture) {
        if (!existsSync(captureDir)) mkdirSync(captureDir, { recursive: true });
        await page.evaluate((h) => window.__mcgrotDebug.setTime(h), NIGHT_RAIN_HOUR);
        await page.evaluate((id) => window.__mcgrotDebug.gotoBookmark(id), NIGHT_RAIN_BOOKMARK);
        const nightShot = await page.screenshot();
        const nightPath = join(captureDir, `${NIGHT_RAIN_BOOKMARK}-${weatherName}-22.png`);
        writeFileSync(nightPath, nightShot);
        results.push({
          name: `capture-${weatherName}:${NIGHT_RAIN_BOOKMARK}-22 (not gated)`,
          pass: true,
          detail: `captured for a human look, not diffed — ${nightPath}`,
        });
      }

      await context.close();
      return { rain: lastInv ? lastInv.rain : null, drawCalls, fogDensity: lastInv ? lastInv.fogDensity : null };
    }

    const allBookmarkIds = bookmarks.map((bm) => bm.id);
    const controlCapture = await captureWeatherPass('overcast', allBookmarkIds, { goldenBookmarkIds: [] });
    const rainCapture = await captureWeatherPass('rain', allBookmarkIds, { nightCapture: true });
    const rainDrawCallDeltas = Object.entries(rainCapture.drawCalls)
      .map(([id, calls]) => ({ id, calls, control: controlCapture.drawCalls[id] }))
      .filter((r) => r.control !== undefined)
      .map((r) => ({ ...r, delta: r.calls - r.control }));
    const rainDrawCallFail = rainDrawCallDeltas.filter((r) => r.delta !== RAIN_DRAW_CALL_EXPECTED_DELTA);
    results.push({
      name: `draw calls exactly +${RAIN_DRAW_CALL_EXPECTED_DELTA} (rain, E2c.2.1)`,
      pass: rainDrawCallFail.length === 0,
      detail: rainDrawCallFail.length === 0
        ? `every bookmark exactly +${RAIN_DRAW_CALL_EXPECTED_DELTA} vs the matched overcast control (${rainDrawCallDeltas.map((r) => `${r.id}:+${r.delta}`).join(', ')})`
        : rainDrawCallFail.map((r) => `${r.id}: +${r.delta} (expected +${RAIN_DRAW_CALL_EXPECTED_DELTA}, control=${r.control})`).join('; '),
    });

    const drizzleCapture = await captureWeatherPass('drizzle', allBookmarkIds, { goldenBookmarkIds: DRIZZLE_BOOKMARKS });
    const drizzleDrawCallDeltas = Object.entries(drizzleCapture.drawCalls)
      .map(([id, calls]) => ({ id, calls, control: controlCapture.drawCalls[id] }))
      .filter((r) => r.control !== undefined)
      .map((r) => ({ ...r, delta: r.calls - r.control }));
    const drizzleDrawCallFail = drizzleDrawCallDeltas.filter((r) => r.delta !== RAIN_DRAW_CALL_EXPECTED_DELTA);
    results.push({
      name: `draw calls exactly +${RAIN_DRAW_CALL_EXPECTED_DELTA} (drizzle, E2c.2.1)`,
      pass: drizzleDrawCallFail.length === 0,
      detail: drizzleDrawCallFail.length === 0
        ? `every bookmark exactly +${RAIN_DRAW_CALL_EXPECTED_DELTA} vs the matched overcast control (${drizzleDrawCallDeltas.map((r) => `${r.id}:+${r.delta}`).join(', ')})`
        : drizzleDrawCallFail.map((r) => `${r.id}: +${r.delta} (expected +${RAIN_DRAW_CALL_EXPECTED_DELTA}, control=${r.control})`).join('; '),
    });

    // "does not scale with intensity": rain and drizzle carry different
    // palette.rain values (see DERIVED's k=0.45 blend in atmosphere.js) but
    // the rain object is a single THREE.Points draw call whenever visible at
    // all — the SAME draw-call delta must show up at both intensities on any
    // bookmark common to both passes. Both passes now visit all eight
    // bookmarks (see captureWeatherPass's own note), so this compares across
    // all eight, not just the two DRIZZLE_BOOKMARKS golden poses.
    const sharedIds = allBookmarkIds.filter((id) =>
      rainDrawCallDeltas.some((r) => r.id === id) && drizzleDrawCallDeltas.some((r) => r.id === id));
    const scaleMismatches = sharedIds
      .map((id) => ({
        id,
        rainDelta: rainDrawCallDeltas.find((r) => r.id === id).delta,
        drizzleDelta: drizzleDrawCallDeltas.find((r) => r.id === id).delta,
      }))
      .filter((r) => r.rainDelta !== r.drizzleDelta);
    results.push({
      name: 'draw calls do not scale with rain intensity',
      pass: sharedIds.length > 0 && scaleMismatches.length === 0,
      detail: sharedIds.length === 0
        ? 'no bookmark shared between the rain and drizzle passes to compare'
        : scaleMismatches.length === 0
          ? `same draw-call delta at rain=${rainCapture.rain.toFixed(2)} and drizzle=${drizzleCapture.rain.toFixed(2)} intensity on ${sharedIds.join(', ')}`
          : scaleMismatches.map((r) => `${r.id}: rain +${r.rainDelta} vs drizzle +${r.drizzleDelta}`).join('; '),
    });

    // --- E2c.3b: haar — full 8-bookmark golden pass at 13:00, matched-control
    // draw-call parity, density ordering, plus the 22:00 night capture (reuses
    // captureWeatherPass's nightCapture path, see its own note above). Unlike
    // rain/drizzle, haar's zero-draw-call claim is checked as EXACT equality
    // (delta 0), not the rain/drizzle +1 — a haar is fog only, no new geometry.
    const haarCapture = await captureWeatherPass('haar', allBookmarkIds, { nightCapture: true });
    const haarDrawCallDeltas = Object.entries(haarCapture.drawCalls)
      .map(([id, calls]) => ({ id, calls, control: controlCapture.drawCalls[id] }))
      .filter((r) => r.control !== undefined)
      .map((r) => ({ ...r, delta: r.calls - r.control }));
    const haarDrawCallFail = haarDrawCallDeltas.filter((r) => r.delta !== 0);
    results.push({
      name: 'draw calls exactly +0 (haar, E2c.3b)',
      pass: haarDrawCallFail.length === 0,
      detail: haarDrawCallFail.length === 0
        ? `every bookmark exactly +0 vs the matched overcast control (${haarDrawCallDeltas.map((r) => `${r.id}:+${r.delta}`).join(', ')})`
        : haarDrawCallFail.map((r) => `${r.id}: +${r.delta} (expected +0, control=${r.control})`).join('; '),
    });

    // Density axis is ordered: haar > overcast > clear, all read live off
    // scene.fog.density at the same settled hour (13:00) — this is the check
    // that would catch a haar column authored with the wrong sign, or a stop
    // that silently fell back to a default. HAAR_FOG_DENSITY_FLOOR is well
    // below the 0.03 shipped (see atmosphere.js's HAAR_STOPS note) so this
    // isn't just re-asserting the exact authored constant.
    const HAAR_FOG_DENSITY_FLOOR = 0.02;
    results.push({
      name: 'fogDensity axis is ordered: haar > overcast > clear (E2c.3b)',
      pass: haarCapture.fogDensity > controlCapture.fogDensity &&
        controlCapture.fogDensity > clearFogDensity &&
        haarCapture.fogDensity > HAAR_FOG_DENSITY_FLOOR,
      detail: `haar=${haarCapture.fogDensity.toFixed(5)} overcast=${controlCapture.fogDensity.toFixed(5)} clear=${clearFogDensity.toFixed(5)} (haar floor ${HAAR_FOG_DENSITY_FLOOR})`,
    });

    beginPhase('render:weather-transitions');
    // --- E2c.2: console-clean across all 12 ordered weather-pair transitions ---
    await page1.evaluate((h) => window.__mcgrotDebug.setTime(h), SMOKE_HOUR);
    await page1.evaluate((name) => window.__mcgrotDebug.setWeather(name), WEATHER_CHAIN[0]);
    await page1.evaluate((frames) => {
      // Settle without drawing the frames nobody looks at (see debug.js stepFrames).
      window.__mcgrotDebug.stepFrames(frames);
    }, WEATHER_SETTLE_FRAMES);

    let errCursor = (await getInvariants(page1)).consoleErrors.length;
    const transitionFailures = [];
    for (let i = 1; i < WEATHER_CHAIN.length; i++) {
      const from = WEATHER_CHAIN[i - 1], to = WEATHER_CHAIN[i];
      await page1.evaluate((name) => window.__mcgrotDebug.setWeather(name), to);
      await page1.evaluate((frames) => {
        // Settle without drawing the frames nobody looks at (see debug.js stepFrames).
        window.__mcgrotDebug.stepFrames(frames);
      }, QUICK_SETTLE_FRAMES);
      const inv = await getInvariants(page1);
      const newErrors = inv.consoleErrors.slice(errCursor);
      if (newErrors.length) transitionFailures.push(`${from}->${to}: ${newErrors.join(' | ')}`);
      errCursor = inv.consoleErrors.length;
    }
    results.push({
      name: 'console clean: all 20 weather-pair transitions',
      pass: transitionFailures.length === 0,
      detail: transitionFailures.length === 0
        ? `all 20 ordered transitions across ${WEATHER_CHAIN.join('->')} clean`
        : transitionFailures.join(' ;; '),
    });

    // --- E2c.2/E2c.3b: console-clean 24h sweep in every weather (includes each weather's own midnight-wrap bracket edge) ---
    for (const w of ['overcast', 'clear', 'rain', 'drizzle', 'haar']) {
      await page1.evaluate((name) => window.__mcgrotDebug.setWeather(name), w);
      await page1.evaluate((frames) => {
        // Settle without drawing the frames nobody looks at (see debug.js stepFrames).
        window.__mcgrotDebug.stepFrames(frames);
      }, QUICK_SETTLE_FRAMES);
      const before = (await getInvariants(page1)).consoleErrors.length;
      for (const h of SWEEP_HOURS) {
        await page1.evaluate((hh) => window.__mcgrotDebug.setTime(hh), h);
        await page1.evaluate(() => window.__mcgrotDebug.stepFrame(1 / 60, 0));
      }
      const inv = await getInvariants(page1);
      const newErrors = inv.consoleErrors.slice(before);
      results.push({
        name: `console clean: 24h sweep (${w})`,
        pass: newErrors.length === 0,
        detail: newErrors.length ? newErrors.join(' | ') : `clean across ${SWEEP_HOURS.length} hours`,
      });
    }

    }
    // Re-pin whatever the skipped region would have left set, so the blocks
    // below start from the same state in both modes.
    await page1.evaluate((h) => window.__mcgrotDebug.setTime(h), SMOKE_HOUR);
    await page1.evaluate(() => window.__mcgrotDebug.setWeather('overcast'));
    await page1.evaluate((f) => window.__mcgrotDebug.stepFrames(f), WEATHER_SETTLE_FRAMES);

    beginPhase('render:scheduler');
    // --- E2c.3c Part 3: autonomous weather scheduler ---
    // 3a: the load-bearing determinism guarantee — the scheduler must never
    // fire while a harness has pinned time via setTime() (rate=0). This is
    // what every other gate in this file relies on implicitly (a scheduled
    // change firing mid-capture would flake every settled-at-capture:* and
    // golden-*  check); this gate demonstrates it directly rather than
    // leaving it as an inference from those passing.
    //
    // Forces + fully settles an explicit weather first: a transition's own
    // `elapsed` always advances on real dt regardless of `rate` (by design —
    // see beginTransition/update in atmosphere.js, weather transitions must
    // not freeze along with the day/night cycle at a posed hour), so a
    // pending transition left over from an earlier test would complete
    // during the 5000 stepped frames below for a reason that has nothing to
    // do with the scheduler. Settling first removes that confound.
    await page1.evaluate(() => window.__mcgrotDebug.setWeather('overcast'));
    await page1.evaluate((frames) => window.__mcgrotDebug.stepFrames(frames), WEATHER_SETTLE_FRAMES);
    await page1.evaluate((h) => window.__mcgrotDebug.setTime(h), SMOKE_HOUR);
    const schedBefore = await getInvariants(page1);
    await page1.evaluate(() => window.__mcgrotDebug.stepFrames(5000));
    const schedAfterPinned = await getInvariants(page1);
    results.push({
      name: 'weather scheduler never fires while time is pinned (rate=0)',
      pass: schedAfterPinned.weather === schedBefore.weather && schedAfterPinned.weatherTransition === null,
      detail: `weather stayed "${schedAfterPinned.weather}" (transition=${JSON.stringify(schedAfterPinned.weatherTransition)}) across 5000 stepped frames at rate=0`,
    });

    // 3b: with the clock actually running, the scheduler must produce an
    // autonomous change within its authored 1.5-4h band with NO explicit
    // setWeather() call in between. setRate (already an E2c.1 debug hook)
    // fast-forwards the in-sim clock far past that band without touching
    // wall time. Watched failing before this landed: with the `if
    // (scheduleEnabled && ...)` fire check in update() commented out, this
    // gate fails (`weather=overcast, transition=null` after the same
    // fast-forward) while 3a and 3c both still pass — confirming this gate,
    // not just the machinery around it, is what catches a dead scheduler.
    await page1.evaluate(() => window.__mcgrotDebug.setWeather('overcast'));
    await page1.evaluate((frames) => window.__mcgrotDebug.stepFrames(frames), WEATHER_SETTLE_FRAMES);
    const schedStart = await getInvariants(page1);
    await page1.evaluate(() => window.__mcgrotDebug.setRate(240)); // >> SCHEDULE_MAX_HOURS per stepped pass below
    await page1.evaluate(() => window.__mcgrotDebug.stepFrames(3000));
    const schedFired = await getInvariants(page1);
    await page1.evaluate(() => window.__mcgrotDebug.setRate(0));
    results.push({
      name: 'weather scheduler changes weather autonomously over time',
      pass: schedFired.weather !== schedStart.weather || schedFired.weatherTransition !== null,
      detail: `started settled on "${schedStart.weather}"; after fast-forwarding the clock (rate=240, 3000 stepped frames, no setWeather() calls) weather=${schedFired.weather}, transition=${JSON.stringify(schedFired.weatherTransition)}`,
    });

    // 3c: the debug hook actually suppresses it — same fast-forward, schedule
    // disabled first. This is the escape hatch scripts/smoke.mjs's own golden
    // capture passes rely on (belt-and-braces alongside the 1.5-4h band being
    // far longer than any capture pass takes at the standing clock rate).
    await page1.evaluate(() => window.__mcgrotDebug.setWeather('overcast'));
    await page1.evaluate((frames) => window.__mcgrotDebug.stepFrames(frames), WEATHER_SETTLE_FRAMES);
    await page1.evaluate(() => window.__mcgrotDebug.setWeatherSchedule(false));
    await page1.evaluate(() => window.__mcgrotDebug.setRate(240));
    await page1.evaluate(() => window.__mcgrotDebug.stepFrames(3000));
    const schedDisabled = await getInvariants(page1);
    await page1.evaluate(() => window.__mcgrotDebug.setRate(0));
    await page1.evaluate(() => window.__mcgrotDebug.setWeatherSchedule(true));
    results.push({
      name: 'setWeatherSchedule(false) suppresses autonomous changes',
      pass: schedDisabled.weather === 'overcast' && schedDisabled.weatherTransition === null,
      detail: `weather=${schedDisabled.weather}, transition=${JSON.stringify(schedDisabled.weatherTransition)} after the same fast-forward with the schedule disabled`,
    });

    if (UPDATE_GOLDENS || Object.keys(budget.perBookmark).length === 0) {
      const prev = budget.perBookmark || {};
      budget = {
        tolerancePct: DRAW_CALL_TOLERANCE_PCT,
        // For a bookmark that rendered fine, use its fresh count; for one that
        // failed the 0-draw-call guard above (absent from drawCallsByBookmark),
        // keep its prior baseline rather than clobbering it with a bad capture.
        perBookmark: Object.fromEntries([...bookmarks, ...nightBookmarks]
          .map((bm) => [bm.id, drawCallsByBookmark[bm.id] !== undefined
            ? { drawCalls: drawCallsByBookmark[bm.id] }
            : prev[bm.id]])
          .filter(([, v]) => v !== undefined)),
      };
      writeFileSync(budgetPath, JSON.stringify(budget, null, 2));
      console.log(`[smoke] wrote budget baseline to ${budgetPath}`);
    } else {
      // A bookmark ADDED since the baseline was written (E2g.1's night pose is
      // the first) has no entry, and the wholesale rebuild above deliberately
      // does not run just because one is missing — that would re-baseline
      // every existing bookmark off one run's counts and quietly absorb a real
      // drift. So add the missing ones and touch nothing else.
      const added = [...bookmarks, ...nightBookmarks]
        .filter((bm) => budget.perBookmark[bm.id] === undefined && drawCallsByBookmark[bm.id] !== undefined);
      if (added.length) {
        for (const bm of added) budget.perBookmark[bm.id] = { drawCalls: drawCallsByBookmark[bm.id] };
        writeFileSync(budgetPath, JSON.stringify(budget, null, 2));
        console.log(`[smoke] added draw-call baselines to ${budgetPath}: ${added.map((bm) => `${bm.id}=${drawCallsByBookmark[bm.id]}`).join(', ')}`);
      }
    }

    beginPhase('render:post-chain');
    // --- E2d (check 26): the post chain is transparent at neutral, and live
    // as authored. Two assertions per state, deliberately pointing opposite
    // ways, because this project has shipped a gate that passed BECAUSE a bug
    // existed (E2d.1a's per-weather bloom contribution check, which measured
    // post-on vs post-off and so would have gone red once the bug was fixed):
    //
    //   26a  strength 0 -> BIT-identical to renderer.render(scene, camera).
    //        Not "within tolerance" — every channel of every pixel equal.
    //        This is what makes the post pass provably free of the colour
    //        management damage that cost E2d.1 and E2d.1a. See src/post.js.
    //   26b  strength 1 -> measurably NOT identical, at every state. Without
    //        this, 26a would pass just as happily on a post pass that had been
    //        accidentally disabled, which is the dead-gate failure mode.
    //
    // Run across all five weathers AND two night hours: the artefact class
    // this guards against is far larger on dark frames than bright ones, so a
    // daytime-only check would have passed throughout E2d.1a.
    const POST_CASES = [
      { weather: 'overcast', hour: SMOKE_HOUR, bookmark: 'mid-805-far' },
      { weather: 'clear', hour: SMOKE_HOUR, bookmark: 'mid-805-far' },
      { weather: 'rain', hour: SMOKE_HOUR, bookmark: 'mid-805-far' },
      { weather: 'drizzle', hour: SMOKE_HOUR, bookmark: 'mid-805-far' },
      { weather: 'haar', hour: SMOKE_HOUR, bookmark: 'skyline' },
      { weather: 'rain', hour: 22, bookmark: 'mid-805-far' },
      { weather: 'overcast', hour: 22, bookmark: 'north-250-far' },
    ];
    const postNeutralBad = [];
    const postLiveBad = [];
    const shippedPostStrength = await page1.evaluate(() => window.__mcgrotDebug.post.getStrength());
    for (const pc of POST_CASES) {
      await page1.evaluate((w) => window.__mcgrotDebug.setWeather(w), pc.weather);
      await page1.evaluate((h) => window.__mcgrotDebug.setTime(h), pc.hour);
      await page1.evaluate((frames) => window.__mcgrotDebug.stepFrames(frames), WEATHER_SETTLE_FRAMES);
      await page1.evaluate((id) => window.__mcgrotDebug.gotoBookmark(id), pc.bookmark);
      // renderNow draws WITHOUT running updaters, so a forced post state
      // survives the frame — the isolation technique that separated bloom's
      // real 0.0% contribution from its 42.6% artefact at the E2d.1a review.
      const shot = async (enabled, strength) => {
        await page1.evaluate(([e, s]) => {
          window.__mcgrotDebug.setPostProcessing(e);
          window.__mcgrotDebug.setPostStrength(s);
          window.__mcgrotDebug.renderNow();
        }, [enabled, strength]);
        return page1.screenshot();
      };
      const direct = PNG.sync.read(await shot(false, 0));
      const neutral = PNG.sync.read(await shot(true, 0));
      const authored = PNG.sync.read(await shot(true, 1));

      const label = `${pc.weather}@${pc.hour}/${pc.bookmark}`;
      const neutralDiff = exactChannelDiff(direct, neutral);
      if (neutralDiff.pixels !== 0) {
        postNeutralBad.push(`${label}: ${neutralDiff.pixels}px differ (max channel ${neutralDiff.maxChannel})`);
      }
      const authoredDiff = exactChannelDiff(direct, authored);
      if (authoredDiff.pct < POST_LIVE_MIN_PCT) {
        postLiveBad.push(`${label}: only ${authoredDiff.pct.toFixed(2)}% of pixels changed`);
      }
    }
    // Leave the page as the rest of the run expects to find it.
    await page1.evaluate((s) => window.__mcgrotDebug.setPostStrength(s), shippedPostStrength);
    await page1.evaluate(() => window.__mcgrotDebug.setPostProcessing(true));

    results.push({
      name: 'post: neutral strength is bit-identical to a direct render',
      pass: postNeutralBad.length === 0,
      detail: postNeutralBad.length === 0
        ? `${POST_CASES.length}/${POST_CASES.length} states exactly equal (5 weathers, 2 night hours)`
        : postNeutralBad.join('; '),
    });
    results.push({
      name: 'post: authored strength reaches the frame',
      pass: postLiveBad.length === 0,
      detail: postLiveBad.length === 0
        ? `all ${POST_CASES.length} states changed >=${POST_LIVE_MIN_PCT}% of pixels`
        : postLiveBad.join('; '),
    });

    endRegion();
    } // end region: render
    await ctx1.close();

    if (region('determinism')) {
    // --- boot #2: determinism ---
    const { context: ctx2, page: page2 } = await bootPage(browser, port);
    const inv2 = await getInvariants(page2);
    await ctx2.close();

    results.push({
      name: 'determinism (geomHash)',
      pass: inv1.geomHash === inv2.geomHash,
      detail: `boot1=${inv1.geomHash} boot2=${inv2.geomHash}`,
    });

    // E2c.3b.1: the direct counterpart to geomHash for the real-time set
    // (leithers/birds/vermin) that geomHash deliberately excludes — see
    // computeRealtimeHash in src/debug.js. Only meaningful given the frame
    // count gate above: before that fix this was flaky by construction.
    results.push({
      name: 'determinism (realtimeHash)',
      pass: inv1.realtimeHash === inv2.realtimeHash,
      detail: `boot1=${inv1.realtimeHash} boot2=${inv2.realtimeHash}`,
    });

    // --- E2c.2: determinism with rain active, not just in overcast ---
    // Two MORE fresh boots (not a reuse of ctx1/ctx2 above), each settled
    // into 'rain' before hashing — rain itself is THREE.Points and outside
    // computeGeomHash's traversal (see src/rain.js's own note), so this is
    // really asserting that turning rain on doesn't perturb anything that
    // IS hashed (buildings/InstancedMesh/NPC placement).
    async function bootWithRain() {
      const { context, page } = await bootPage(browser, port);
      await page.evaluate(() => window.__mcgrotDebug.setWeather('rain'));
      await page.evaluate((frames) => {
        // Settle without drawing the frames nobody looks at (see debug.js stepFrames).
        window.__mcgrotDebug.stepFrames(frames);
      }, WEATHER_SETTLE_FRAMES);
      const inv = await getInvariants(page);
      await context.close();
      return inv;
    }
    const invRain1 = await bootWithRain();
    const invRain2 = await bootWithRain();
    results.push({
      name: 'determinism (geomHash) with rain active',
      pass: invRain1.geomHash === invRain2.geomHash,
      detail: `boot1=${invRain1.geomHash} boot2=${invRain2.geomHash}, rain=${invRain1.rain.toFixed(2)}`,
    });
    endRegion();
    } // end region: determinism

    // --- E2e item 3 / acceptance criterion 8: DPR cap frame-timing table ---
    // Informational only — see docs/VALIDATION.md on why headless
    // SwiftShader command-submission timing isn't a real-device GPU
    // measurement (renderer.render only queues; raster happens at the next
    // await, so this doesn't capture actual frame cost). Logged, not gated.
    if (!region('dpr')) {
      // nothing to do — --only excluded this region
    } else {
    {
      const { context, page } = await bootPage(browser, port);
      await page.evaluate((id) => window.__mcgrotDebug.gotoBookmark(id), DPR_TIMING_BOOKMARK);
      const unclamped = await page.evaluate(() => window.devicePixelRatio || 1);

      // E0.3: the timing TABLE is now opt-in; the cap GATE below always runs.
      // They used to share a `QUICK ||` guard, which was wrong twice over: it
      // cost 67s of an 847s full run for a table that is explicitly not a
      // measurement of anything (see below), and on --quick it silently took
      // a real gate with it while the skip message said "informational, not
      // gated". Six measureFrameTiming(60) sweeps is where the 67s went.
      if (DPR_TIMING) {
        console.log('[smoke] DPR timing...');
        const ratios = [...new Set([...DPR_TABLE, unclamped])];
        const rows = [];
        for (const r of ratios) {
          const timing = await page.evaluate((ratio) => {
            window.__mcgrotDebug.setPixelRatio(ratio);
            return window.__mcgrotDebug.measureFrameTiming(60);
          }, r);
          rows.push({ ratio: r, ...timing });
        }
        console.log('[smoke] DPR command-submission timing (NOT a raster/GPU measurement — see docs/VALIDATION.md): ' +
          rows.map((row) => `${row.ratio}x${row.ratio === unclamped ? ' (unclamped)' : ''}: mean=${row.meanMs.toFixed(2)}ms p95=${row.p95Ms.toFixed(2)}ms`).join(' | '));
      } else {
        // NOT `skipped`: that list is "questions this run did not ask", and it
        // flips the summary line to PARTIAL. The timing table asks no question
        // — it gates nothing and never did. Putting it there made a full,
        // complete run announce itself as partial, which is the honesty
        // machinery crying wolf.
        notRun.push('DPR frame-timing table (informational, gates nothing — pass --dpr-timing). The DPR cap gate ran.');
      }

      // E2e.1 item 6: the thing that can actually regress is the cap itself —
      // assert renderer.getPixelRatio() lands on min(devicePixelRatio, DPR_CAP)
      // after main.js's real resize handler runs (not the debug override
      // used above, which bypasses the cap on purpose for the timing table).
      //
      // Asserted at TWO device pixel ratios. Every smoke context runs at the
      // default scale factor, where devicePixelRatio is 1 — and min(1, cap)
      // is 1 for any cap >= 1, so the native reading alone would still pass
      // with DPR_CAP deleted or set to 1000. The second reading spoofs
      // devicePixelRatio above the cap so the clamp is the thing under test.
      // Spoofing is what the handler actually reads; verified against a real
      // deviceScaleFactor:3 context, which likewise clamps to 2.
      const dprCapResult = await page.evaluate(() => {
        const probe = (spoof) => {
          if (spoof !== null) Object.defineProperty(window, 'devicePixelRatio', { value: spoof, configurable: true });
          window.__mcgrotDebug.setPixelRatio(3); // perturb away from the capped value first
          window.dispatchEvent(new Event('resize'));
          return { dpr: window.devicePixelRatio || 1, actual: window.__mcgrotDebug.renderer.getPixelRatio() };
        };
        const cap = window.__mcgrotDebug.DPR_CAP;
        return { cap, native: probe(null), aboveCap: probe(cap + 1) };
      });
      const { cap, native, aboveCap } = dprCapResult;
      const expect = (r) => Math.min(r.dpr, cap);
      results.push({
        name: 'DPR cap enforced on resize (below and above the cap)',
        pass: native.actual === expect(native) && aboveCap.actual === expect(aboveCap) && aboveCap.actual === cap,
        detail: `DPR_CAP=${cap}; devicePixelRatio=${native.dpr} -> getPixelRatio()=${native.actual} (expect ${expect(native)}), ` +
          `devicePixelRatio=${aboveCap.dpr} -> getPixelRatio()=${aboveCap.actual} (expect ${expect(aboveCap)})`,
      });

      await context.close();
    }
    endRegion(); // dpr — guarded by `QUICK || !region('dpr')`, so it has no `end region` marker
    }

    if (region('onevoice')) {
    // --- E5a gate 5b: one voice, opposed pair ---
    // Every catalog vendor with an npc identity also has audio (124/124, per
    // scripts/build-readings.mjs), and the ~1600m street divided by 124
    // vendors puts several neighbours within PLAY_RANGE of npcs[0] — a
    // natural cluster, no special placement needed.
    console.log('[smoke] E5a one-voice gate (5b)...');
    {
      const { context, page } = await bootPage(browser, port);
      // Positions are static/seeded — the set of neighbours within
      // PLAY_RANGE of npcs[0] is the same on every boot. Waiting for THIS
      // specific, known set to finish loading (rather than "some" voice)
      // avoids racing on which vendor's mp3 fetch happens to resolve first.
      const nearbyIds = await page.evaluate(() => {
        const dbg = window.__mcgrotDebug;
        const p = dbg.npcs.npcs[0].group.position;
        dbg.camera.position.set(p.x, dbg.camera.position.y, p.z);
        const PLAY_RANGE = 18;
        return dbg.npcs.npcs
          .filter((n) => Math.hypot(n.group.position.x - p.x, n.group.position.z - p.z) < PLAY_RANGE)
          .map((n) => n.comic.id);
      });
      await page.evaluate(() => window.__mcgrotDebug.stepFrames(10));
      // Opposed half: overlay closed, proximity management should have
      // started every neighbour within PLAY_RANGE.
      await page.waitForFunction(
        (ids) => {
          const dbg = window.__mcgrotDebug;
          return ids.every((id) => {
            const n = dbg.npcs.npcs.find((x) => x.comic.id === id);
            return n && n.voice && n.voice.isPlaying;
          });
        },
        nearbyIds,
        { timeout: 8000 },
      );
      const closedCount = await page.evaluate(() =>
        window.__mcgrotDebug.npcs.npcs.filter((n) => n.voice && n.voice.isPlaying).length);

      // Open the overlay on the nearest NPC. First E starts the ritual's
      // hush (and — the invariant under test — stops every other voice via
      // setOverlayOpen); second E skips the hush so the focused reading
      // actually starts without a real 600ms wait.
      await page.keyboard.press('KeyE');
      await page.keyboard.press('KeyE');
      await page.evaluate(() => window.__mcgrotDebug.stepFrame(1 / 60, 0));
      await page.waitForFunction(
        () => window.__mcgrotDebug.npcs.npcs.some((n) => n.voice && n.voice.isPlaying),
        { timeout: 8000 },
      );
      const openCount = await page.evaluate(() =>
        window.__mcgrotDebug.npcs.npcs.filter((n) => n.voice && n.voice.isPlaying).length);

      await context.close();
      // Asserted on the mixer's own state (isPlaying), not measured audio
      // output — headless audio timing isn't reliable enough to gate on
      // directly (see docs/VALIDATION.md).
      results.push({
        name: 'E5a: overlay open enforces exactly one voice (opposed pair)',
        pass: closedCount > 1 && openCount === 1,
        detail: `${nearbyIds.length} vendors within PLAY_RANGE; closed=${closedCount} voices playing, open=${openCount} voice(s) playing (want closed>1, open===1)`,
      });
    }

    endRegion();
    } // end region: onevoice
    if (region('determinism-clock')) {
    // --- E5a gate 5c: virtual reading clock determinism ---
    // Same day seed -> identical join offsets for the same vendors; a
    // different seed -> different ones. __mcgrotDebug.setDaySeed overrides
    // src/proximity-audio.js's date-derived seed so this doesn't have to
    // wait for the calendar to turn over.
    console.log('[smoke] E5a determinism gate (5c)...');
    {
      async function bootWithDaySeed(seed) {
        const { context, page } = await bootPage(browser, port);
        await page.evaluate((s) => window.__mcgrotDebug.setDaySeed(s), seed);
        // Positions are static/seeded — the neighbour set is identical on
        // every boot, so waiting for this exact set (rather than "some"
        // voice) means the offsets snapshot below never races on which
        // vendor's mp3 fetch happens to resolve first.
        const nearbyIds = await page.evaluate(() => {
          const dbg = window.__mcgrotDebug;
          const p = dbg.npcs.npcs[0].group.position;
          dbg.camera.position.set(p.x, dbg.camera.position.y, p.z);
          const PLAY_RANGE = 18;
          return dbg.npcs.npcs
            .filter((n) => Math.hypot(n.group.position.x - p.x, n.group.position.z - p.z) < PLAY_RANGE)
            .map((n) => n.comic.id);
        });
        // Fixed stepFrame recipe — the sim-time value used by the join-offset
        // formula (see src/proximity-audio.js) is frozen the moment this
        // returns, so the async buffer loads below all resolve against the
        // SAME simTime regardless of real network/decode timing.
        await page.evaluate(() => window.__mcgrotDebug.stepFrames(10));
        await page.waitForFunction(
          (ids) => {
            const dbg = window.__mcgrotDebug;
            return ids.every((id) => {
              const n = dbg.npcs.npcs.find((x) => x.comic.id === id);
              return n && n.voice && n.voice.isPlaying;
            });
          },
          nearbyIds,
          { timeout: 8000 },
        );
        const offsets = await page.evaluate((ids) => ids.map((id) => {
          const n = window.__mcgrotDebug.npcs.npcs.find((x) => x.comic.id === id);
          return [id, Math.round(n.voice.offset * 1000) / 1000];
        }), nearbyIds);
        await context.close();
        return offsets;
      }
      function offsetsEqual(a, b) {
        if (a.length !== b.length) return false;
        const mapB = new Map(b);
        return a.every(([id, off]) => mapB.has(id) && mapB.get(id) === off);
      }
      const DAY_SEED_A = 0x1234abcd;
      const DAY_SEED_B = 0x9f9f1111;
      const seedA1 = await bootWithDaySeed(DAY_SEED_A);
      const seedA2 = await bootWithDaySeed(DAY_SEED_A);
      const seedB = await bootWithDaySeed(DAY_SEED_B);
      const sameSeedIdentical = offsetsEqual(seedA1, seedA2);
      const diffSeedIdentical = offsetsEqual(seedA1, seedB);
      results.push({
        name: 'E5a: virtual reading clock determinism (opposed pair)',
        pass: seedA1.length > 0 && sameSeedIdentical && !diffSeedIdentical,
        detail: `n=${seedA1.length} voices; same seed identical=${sameSeedIdentical} (want true); different seed identical=${diffSeedIdentical} (want false)`,
      });
    }

    endRegion();
    } // end region: determinism-clock
    if (region('mobile')) {
    // --- E2e: mobile pass — touch mode forced at a phone viewport ---
    console.log('[smoke] mobile pass...');
    {
      const context = await newContext(browser, { viewport: MOBILE_VIEWPORT, hasTouch: true });
      const page = await context.newPage();
      const mobileConsole = [];
      page.on('console', (msg) => { if (msg.type() === 'error') mobileConsole.push(msg.text()); });
      page.on('pageerror', (err) => mobileConsole.push(String(err)));

      // Same deterministic-boot freeze as bootPage() — this pass builds its
      // own context rather than reusing bootPage, but the pre-pause frame
      // count bug is identical, and it lands on golden-mobile:comic (an NPC
      // and its nearby leithers are visible around the overlay) far harder
      // than on the desktop bookmarks: measured 0.000-62% run to run before
      // this was added.
      await page.addInitScript(() => { window.__mcgrotFreezeAtBoot = true; });

      await page.goto(`http://localhost:${port}/`);
      await page.waitForFunction(() => !!(window.__mcgrotDebug && window.__mcgrotDebug.world));
      // E2e.1 item 3: this context is built with hasTouch:true, under which
      // Chromium reports any-pointer:coarse at boot — html.touch is already
      // set before setTouchMode is ever called, so asserting only the 'on'
      // direction can't fail even if setTouchMode were a no-op (measured).
      // Assert both directions: force off (proves the class isn't just
      // stuck on from boot), then force on.
      const touchClassOff = await page.evaluate(() => {
        window.__mcgrotDebug.setTouchMode(false);
        return document.documentElement.classList.contains('touch');
      });
      const touchClassOn = await page.evaluate(() => {
        window.__mcgrotDebug.setTouchMode(true);
        return document.documentElement.classList.contains('touch');
      });
      results.push({
        name: 'mobile: touch class driven by setTouchMode (both directions)',
        pass: touchClassOff === false && touchClassOn === true,
        detail: `setTouchMode(false)->html.touch=${touchClassOff}, setTouchMode(true)->html.touch=${touchClassOn}`,
      });

      // golden 1: title card, before dismissal
      await page.evaluate(() => {
        const el = document.getElementById('title-card');
        if (el) el.style.transition = 'none'; // kill the 0.9s fade, same as bootPage
        // ...and pin #title-enter's `title-pulse` animation (opacity 0.75->1
        // on a 1.8s loop, src/index.html). A screenshot otherwise catches
        // whatever phase the wall clock happens to be at: measured 0.595% to
        // 2.680% run-to-run in isolation, against a 0.5% golden tolerance.
        // It reads 0.000% inside a full smoke run only because the elapsed
        // time to this point is repeatable — accidental stability, which any
        // check added before the mobile pass would silently break.
        const btn = document.getElementById('title-enter');
        if (btn) { btn.style.animation = 'none'; btn.style.opacity = '1'; }
      });
      const titleEnterRect = await measureTapTarget(page, 'title-enter');
      const titleShot = await page.screenshot();
      checkGolden(results, 'golden-mobile:title', titleShot, join(goldenDir, 'mobile-title.png'));

      // dismiss, then pin clock/weather exactly like every other boot
      await page.click('#title-enter');
      await page.evaluate(() => window.__mcgrotDebug.pauseAuto());
      await page.evaluate((h) => window.__mcgrotDebug.setTime(h), SMOKE_HOUR);
      await page.evaluate(() => window.__mcgrotDebug.setWeather('overcast'));
      await page.evaluate(() => window.__mcgrotDebug.stepFrame(1 / 60, 0));

      // golden 2: HUD at spawn
      const hudShot = await page.screenshot();
      checkGolden(results, 'golden-mobile:hud', hudShot, join(goldenDir, 'mobile-hud.png'));

      // E2e.1 item 4: default-on with no localStorage key set — this context
      // is fresh, so mcgrot-torch-on has never been written.
      const torchDefault = await page.evaluate(() => ({
        storageKey: localStorage.getItem('mcgrot-torch-on'),
        toggleActive: document.getElementById('torch-toggle').classList.contains('active'),
        distance: window.__mcgrotDebug.torch.light.distance,
      }));
      results.push({
        name: 'mobile: torch defaults on with no stored preference',
        pass: torchDefault.storageKey === null && torchDefault.toggleActive === true && torchDefault.distance > 0.05,
        detail: `localStorage['mcgrot-torch-on']=${torchDefault.storageKey}, #torch-toggle.active=${torchDefault.toggleActive}, light.distance=${torchDefault.distance.toFixed(3)}`,
      });

      const tapTargets = { 'title-enter': titleEnterRect };
      for (const id of ['touch-forward', 'torch-toggle', 'journal-toggle', 'link-toggle']) {
        tapTargets[id] = await measureTapTarget(page, id);
      }

      // acceptance criterion 3: hold-to-walk moves the camera; releasing stops it.
      const posBefore = await page.evaluate(() => {
        const p = window.__mcgrotDebug.camera.position;
        return { x: p.x, z: p.z };
      });
      await page.evaluate(() => {
        document.getElementById('touch-forward').dispatchEvent(
          new PointerEvent('pointerdown', { pointerId: 1, pointerType: 'touch', isPrimary: true, bubbles: true }));
      });
      await page.evaluate((frames) => {
        window.__mcgrotDebug.stepFrames(frames);
      }, MOBILE_WALK_HOLD_FRAMES);
      const posHeld = await page.evaluate(() => {
        const p = window.__mcgrotDebug.camera.position;
        return { x: p.x, z: p.z };
      });
      await page.evaluate(() => {
        document.getElementById('touch-forward').dispatchEvent(
          new PointerEvent('pointerup', { pointerId: 1, pointerType: 'touch', isPrimary: true, bubbles: true }));
      });
      const posAtRelease = await page.evaluate(() => {
        const p = window.__mcgrotDebug.camera.position;
        return { x: p.x, z: p.z };
      });
      await page.evaluate((frames) => {
        window.__mcgrotDebug.stepFrames(frames);
      }, MOBILE_WALK_HOLD_FRAMES);
      const posAfterRelease = await page.evaluate(() => {
        const p = window.__mcgrotDebug.camera.position;
        return { x: p.x, z: p.z };
      });
      const movedM = Math.hypot(posHeld.x - posBefore.x, posHeld.z - posBefore.z);
      const driftM = Math.hypot(posAfterRelease.x - posAtRelease.x, posAfterRelease.z - posAtRelease.z);
      results.push({
        name: 'mobile: hold-to-walk moves camera',
        pass: movedM >= MOBILE_WALK_MIN_MOVE_M,
        detail: `moved ${movedM.toFixed(2)}m over ${MOBILE_WALK_HOLD_FRAMES} held frames (min ${MOBILE_WALK_MIN_MOVE_M}m)`,
      });
      results.push({
        name: 'mobile: release stops camera',
        pass: driftM <= MOBILE_WALK_MAX_DRIFT_M,
        detail: `drifted ${driftM.toFixed(4)}m over ${MOBILE_WALK_HOLD_FRAMES} frames after release (max ${MOBILE_WALK_MAX_DRIFT_M}m)`,
      });

      // golden 3: an open comic overlay — stand 2m from the first NPC (well
      // within interact.js's 8m RANGE) and press E, same as a desktop
      // keyboard user would; the overlay itself has no touch-specific path.
      await page.evaluate(() => {
        const dbg = window.__mcgrotDebug;
        const npc = dbg.npcs.npcs[0];
        const p = npc.group.position;
        dbg.camera.position.set(p.x + 2, dbg.camera.position.y, p.z);
        dbg.camera.lookAt(p.x, dbg.camera.position.y, p.z);
      });
      await page.evaluate(() => window.__mcgrotDebug.stepFrame(1 / 60, 0)); // let interact.update() see the NPC in range
      await page.keyboard.press('KeyE');
      await page.evaluate(() => window.__mcgrotDebug.stepFrame(1 / 60, 0));
      const overlayOpen = await page.evaluate(() => document.getElementById('comic-overlay').style.display === 'flex');
      results.push({
        name: 'mobile: comic overlay opens',
        pass: overlayOpen,
        detail: `#comic-overlay display=${overlayOpen ? 'flex' : 'not flex'}`,
      });
      for (const id of ['comic-close', 'comic-playpause']) {
        tapTargets[id] = await measureTapTarget(page, id);
      }
      // E5a gate 5d: the read-along flag now defaults ON — the transcript
      // panel renders for this comic (it has a baked reading), so this
      // golden was deliberately recaptured with the panel visible (see the
      // enable commit). Structural check first (panel present with the
      // flag untouched); then prove the flag genuinely gates it by turning
      // it off and back on, WITHOUT re-screenshotting in between, so the
      // golden capture below still reflects the default-on state.
      const transcriptShownByDefault = await page.evaluate(() => {
        const el = document.getElementById('comic-transcript');
        return !!el && getComputedStyle(el).display !== 'none' && el.children.length > 0;
      });
      const transcriptHidesWhenDisabled = await page.evaluate(() => {
        window.__mcgrotDebug.setReadAlong(false);
        const el = document.getElementById('comic-transcript');
        const hidden = !el || getComputedStyle(el).display === 'none';
        window.__mcgrotDebug.setReadAlong(true); // restore the default before the golden capture below
        return hidden;
      });
      results.push({
        name: 'E5a: read-along panel defaults on and the flag genuinely gates it',
        pass: transcriptShownByDefault && transcriptHidesWhenDisabled,
        detail: `shown by default=${transcriptShownByDefault}, hides when disabled=${transcriptHidesWhenDisabled}`,
      });
      const comicShot = await page.screenshot();
      checkGolden(results, 'golden-mobile:comic', comicShot, join(goldenDir, 'mobile-comic.png'));

      // acceptance criterion 6: no interactive target intrudes into a
      // simulated notch/home-indicator safe area — overlay still open, so
      // this covers comic-close/comic-playpause.
      const comicOverlaps = await page.evaluate(({ top, bottom, ids }) => {
        const root = document.documentElement;
        root.style.setProperty('--safe-top', `${top}px`);
        root.style.setProperty('--safe-bottom', `${bottom}px`);
        const vh = window.innerHeight;
        const bad = [];
        for (const id of ids) {
          const el = document.getElementById(id);
          if (!el || getComputedStyle(el).display === 'none') continue;
          const r = el.getBoundingClientRect();
          if (r.top < top) bad.push(`${id} top=${r.top.toFixed(0)} < inset ${top}`);
          if (r.bottom > vh - bottom) bad.push(`${id} bottom=${r.bottom.toFixed(0)} > ${(vh - bottom).toFixed(0)}`);
        }
        root.style.removeProperty('--safe-top');
        root.style.removeProperty('--safe-bottom');
        return bad;
      }, { top: SIMULATED_INSET.top, bottom: SIMULATED_INSET.bottom, ids: ['comic-close', 'comic-playpause'] });

      // npc-prompt tap target — closing the overlay drops back to the same
      // in-range NPC, so the prompt reappears next frame.
      await page.keyboard.press('Escape');
      await page.evaluate(() => window.__mcgrotDebug.stepFrame(1 / 60, 0));
      tapTargets['npc-prompt'] = await measureTapTarget(page, 'npc-prompt');

      results.push({
        name: 'mobile: tap targets >=44x44 CSS px and reachable',
        pass: Object.values(tapTargets).every((t) => t.width >= MIN_TAP_TARGET_PX && t.height >= MIN_TAP_TARGET_PX && t.reachable),
        detail: Object.entries(tapTargets)
          .map(([id, t]) => `${id}: ${t.width.toFixed(0)}x${t.height.toFixed(0)} centre-hit=#${t.hitId || 'none'} reachable=${t.reachable}${t.visible === false ? ' (NOT VISIBLE)' : ''}`)
          .join(', '),
      });

      const hudOverlaps = await page.evaluate(({ top, bottom, ids }) => {
        const root = document.documentElement;
        root.style.setProperty('--safe-top', `${top}px`);
        root.style.setProperty('--safe-bottom', `${bottom}px`);
        const vh = window.innerHeight;
        const bad = [];
        for (const id of ids) {
          const el = document.getElementById(id);
          if (!el || getComputedStyle(el).display === 'none') continue;
          const r = el.getBoundingClientRect();
          if (r.top < top) bad.push(`${id} top=${r.top.toFixed(0)} < inset ${top}`);
          if (r.bottom > vh - bottom) bad.push(`${id} bottom=${r.bottom.toFixed(0)} > ${(vh - bottom).toFixed(0)}`);
        }
        root.style.removeProperty('--safe-top');
        root.style.removeProperty('--safe-bottom');
        return bad;
      }, { top: SIMULATED_INSET.top, bottom: SIMULATED_INSET.bottom, ids: ['hud', 'touch-forward', 'torch-toggle', 'journal-toggle', 'link-toggle', 'npc-prompt'] });
      const allOverlaps = [...comicOverlaps, ...hudOverlaps];
      results.push({
        name: 'mobile: no target intrudes on simulated safe area',
        pass: allOverlaps.length === 0,
        detail: allOverlaps.length === 0
          ? `clear of a simulated ${SIMULATED_INSET.top}px top / ${SIMULATED_INSET.bottom}px bottom inset`
          : allOverlaps.join('; '),
      });

      // ...and the HUD must not land on the touch controls either. The check
      // above only ever compared elements against the SCREEN's insets, so two
      // bits of UI could sit on top of each other and it would pass — which
      // is exactly what E5c's second HUD line did, running the day name
      // straight through the hold-to-walk button. Found by eye in
      // golden-mobile:hud; this is the gate that would have found it first.
      const uiCollisions = await page.evaluate((ids) => {
        const box = (id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const r = el.getBoundingClientRect();
          return (r.width === 0 || r.height === 0) ? null : r;
        };
        const hud = box('hud');
        if (!hud) return ['#hud is not rendered'];
        const bad = [];
        for (const id of ids) {
          const r = box(id);
          if (!r) continue;
          const overlapX = Math.min(hud.right, r.right) - Math.max(hud.left, r.left);
          const overlapY = Math.min(hud.bottom, r.bottom) - Math.max(hud.top, r.top);
          if (overlapX > 0 && overlapY > 0) {
            bad.push(`#hud overlaps #${id} by ${Math.round(overlapX)}x${Math.round(overlapY)}px`);
          }
        }
        return bad;
      }, ['touch-forward', 'torch-toggle', 'journal-toggle', 'link-toggle']);
      results.push({
        name: 'mobile: the HUD does not sit under the touch controls',
        pass: uiCollisions.length === 0,
        detail: uiCollisions.length === 0
          ? 'HUD box is clear of touch-forward, torch-toggle, journal-toggle and link-toggle'
          : uiCollisions.join('; '),
      });

      // golden 4: a plain street view, touch mode still forced.
      await page.evaluate((id) => window.__mcgrotDebug.gotoBookmark(id), MOBILE_WALK_BOOKMARK);
      const streetShot = await page.screenshot();
      checkGolden(results, 'golden-mobile:street', streetShot, join(goldenDir, 'mobile-street.png'));

      // E2e.1 item 4: toggling the torch off/on at night must visibly change
      // the rendered frame — gate it on mean screen luminance, not just the
      // toggle/DOM state. Needs a pose the torch actually reaches (~6.5m):
      // MOBILE_WALK_BOOKMARK's camera stands 12m off the street centreline,
      // outside that range, so this reuses the E2b torch check's own recipe
      // — stand TORCH_STAND_OFF from a litter comic at TORCH_HOUR — rather
      // than the street-view golden's pose.
      const mobileTorchPose = await page.evaluate(({ hour, eyeHeight, standOff }) => {
        const dbg = window.__mcgrotDebug;
        dbg.setTime(hour);
        const items = dbg.litter.items;
        if (!items.length) return false;
        const it = items[0];
        const px = it.x, pz = it.z + standOff;
        const groundY = dbg.world.groundHeight ? dbg.world.groundHeight(px, pz) : 0;
        dbg.camera.position.set(px, groundY + eyeHeight, pz);
        dbg.camera.lookAt(it.x, groundY + 0.055, it.z);
        return true;
      }, { hour: TORCH_HOUR, eyeHeight: TORCH_EYE_HEIGHT, standOff: TORCH_STAND_OFF });
      let torchOnLuma = 0, torchOffLuma = 0, torchToggleActiveAfterOff = null;
      if (mobileTorchPose) {
        // Settle once so the night atmosphere/torch darkness-scale commit at
        // the new pose (leithers/vermin/birds also advance here — expected).
        for (let i = 0; i < 10; i++) {
          await page.evaluate((i) => window.__mcgrotDebug.stepFrame(1 / 60, i / 60), i);
        }
        const torchOnShot = await page.screenshot();
        torchOnLuma = meanLuminanceCenterCrop(PNG.sync.read(torchOnShot), 0.3, 0.3);

        // Toggle via the real button (exercises the click handler + DOM
        // state), then render DIRECTLY — not stepFrame — so nothing else in
        // the scene moves between the two shots; only the torch changed.
        // stepFrame's full updater pass would advance leithers/vermin/birds
        // again and swamp a real toggle regression in simulation noise (the
        // same reasoning as the E2b torch check's direct renderer.render()
        // above).
        await page.click('#torch-toggle');
        await page.evaluate(() => {
          const dbg = window.__mcgrotDebug;
          dbg.torch.update(9 / 60); // same t the settle loop's last frame used
          // Post-aware direct render — see the E2b torch A/B note above.
          dbg.renderNow();
        });
        const torchOffShot = await page.screenshot();
        torchOffLuma = meanLuminanceCenterCrop(PNG.sync.read(torchOffShot), 0.3, 0.3);
        torchToggleActiveAfterOff = await page.evaluate(() => document.getElementById('torch-toggle').classList.contains('active'));
        await page.click('#torch-toggle'); // restore
      }
      const lumaDropPct = torchOnLuma > 0 ? ((torchOnLuma - torchOffLuma) / torchOnLuma) * 100 : 0;
      results.push({
        name: 'mobile: torch toggle darkens the rendered frame',
        pass: mobileTorchPose && lumaDropPct >= TORCH_TOGGLE_LUMA_DROP_MIN_PCT && torchToggleActiveAfterOff === false,
        detail: mobileTorchPose
          ? `on=${torchOnLuma.toFixed(1)} off=${torchOffLuma.toFixed(1)} (${lumaDropPct.toFixed(1)}% drop, min ${TORCH_TOGGLE_LUMA_DROP_MIN_PCT}%), #torch-toggle.active after off=${torchToggleActiveAfterOff}`
          : 'no litter comic available to pose the camera at',
      });
      // Restore daytime overcast street framing for the golden captured above
      // — this check reposed the camera and changed the hour after it ran.
      await page.evaluate((h) => window.__mcgrotDebug.setTime(h), SMOKE_HOUR);
      await page.evaluate((id) => window.__mcgrotDebug.gotoBookmark(id), MOBILE_WALK_BOOKMARK);

      results.push({
        name: 'mobile: console clean',
        pass: mobileConsole.length === 0,
        detail: mobileConsole.length ? mobileConsole.join(' | ') : 'no errors',
      });

      await context.close();
    }
    endRegion();
    } // end region: mobile

  } finally {
    if (browser) await browser.close();
    if (server) server.kill();
  }

  const flat = goldenSubstrate.filter((g) => g.stddev < SUBSTRATE_MIN_STDDEV);
  // A partial run (--only / --quick) may capture no goldens at all; reporting
  // "all 0 frames pass" would be a check that cannot fail, which is exactly
  // the kind of decoration this suite is supposed to be free of.
  if (goldenSubstrate.length === 0) {
    skipped.push('golden contrast floor (no goldens captured in this run)');
  } else results.push({
    name: 'goldens are usable diff substrates (contrast floor)',
    pass: flat.length === 0,
    detail: flat.length === 0
      ? `all ${goldenSubstrate.length} captured frames have luminance stddev >= ${SUBSTRATE_MIN_STDDEV} ` +
        `(min ${Math.min(...goldenSubstrate.map((g) => g.stddev)).toFixed(1)} on ` +
        `${goldenSubstrate.reduce((a, b) => (a.stddev <= b.stddev ? a : b)).name})`
      : `${flat.length} too flat to gate anything: ` +
        flat.map((g) => `${g.name} stddev=${g.stddev.toFixed(1)} mean=${g.mean.toFixed(1)}`).join('; '),
  });

  // E0.3: the profile, printed before the results so a long run's tail is
  // still the pass/fail line. Regions are wall time between the `region()`
  // call and its end marker; anything outside one is "unattributed", which is
  // itself a number worth seeing.
  endRegion();
  {
    const totalMs = Date.now() - suiteStartedAt;
    const attributed = profile.regions.reduce((a, r) => a + r.ms, 0);
    const rows = [...profile.regions].sort((a, b) => b.ms - a.ms);
    const w = Math.max(...rows.map((r) => r.name.length), 12);
    console.log(`\n[smoke] where the time went (total ${(totalMs / 1000).toFixed(0)}s):`);
    for (const r of rows) {
      console.log(`  ${r.name.padEnd(w)}  ${(r.ms / 1000).toFixed(1).padStart(7)}s  ${((r.ms / totalMs) * 100).toFixed(1).padStart(5)}%`);
    }
    console.log(`  ${'unattributed'.padEnd(w)}  ${((totalMs - attributed) / 1000).toFixed(1).padStart(7)}s  ${(((totalMs - attributed) / totalMs) * 100).toFixed(1).padStart(5)}%`);
    if (profile.phases.length) {
      const pw = Math.max(...profile.phases.map((p) => p.name.length), 12);
      console.log('  --- inside the regions above (phases, sorted) ---');
      for (const p of [...profile.phases].sort((a, b) => b.ms - a.ms)) {
        console.log(`  ${p.name.padEnd(pw)}  ${(p.ms / 1000).toFixed(1).padStart(7)}s  ${((p.ms / totalMs) * 100).toFixed(1).padStart(5)}%`);
      }
    }
    if (profile.boots.length) {
      const n = profile.boots.length;
      const bootMs = profile.boots.reduce((a, b) => a + b.ms, 0);
      const wire = profile.boots.reduce((a, b) => a + b.wireBytes, 0);
      const cached = profile.boots.reduce((a, b) => a + b.cached, 0);
      const reqs = profile.boots.reduce((a, b) => a + b.requests, 0);
      console.log(`  ${n} boots via bootPage: ${(bootMs / 1000).toFixed(1)}s total ` +
        `(${((bootMs / totalMs) * 100).toFixed(1)}% of the run, mean ${(bootMs / n / 1000).toFixed(1)}s), ` +
        `${(wire / 1048576).toFixed(1)}MB over the wire in ${reqs} requests, ${cached} of them cache hits. ` +
        `Boots made outside bootPage (lampBoot) are NOT counted here.`);
    }
  }

  console.log('\n[smoke] results:');
  const nameWidth = Math.max(...results.map((r) => r.name.length), 10);
  for (const r of results) {
    console.log(`  ${r.pass ? 'PASS' : 'FAIL'}  ${r.name.padEnd(nameWidth)}  ${r.detail}`);
    if (!r.pass) exitCode = 1;
  }
  if (ONLY) {
    const unknown = [...ONLY].filter((n) => !REGIONS.includes(n));
    if (unknown.length) console.log(`\n[smoke] --only: unknown region(s) ${unknown.join(', ')}. Known: ${REGIONS.join(', ')}`);
    skipped.push(`--only=${[...ONLY].join(',')}: ran ${regionsRun.join(', ') || 'nothing'}; ` +
      `skipped ${REGIONS.filter((r) => !ONLY.has(r)).join(', ')} AND every unregioned check (boot invariants, goldens, weather, post)`);
  }
  if (notRun.length) {
    console.log('\n[smoke] not run (informational only, nothing gated):');
    for (const s of notRun) console.log(`  - ${s}`);
  }
  if (skipped.length) {
    // Never let a quick run read like a full one. The whole failure mode this
    // project keeps hitting is a green result that was never asked the hard
    // question — so say plainly which questions went unasked.
    console.log(`\n[smoke] --quick SKIPPED ${skipped.length} area(s):`);
    for (const s of skipped) console.log(`  - ${s}`);
    console.log('  Run the full suite before deploying (npm run deploy does this for you).');
  }
  console.log(`\n[smoke] ${exitCode === 0 ? (skipped.length ? 'quick checks passed (PARTIAL)' : 'all checks passed') : 'FAILED'}`);
  process.exit(exitCode);
}

main().catch((err) => {
  console.error('[smoke] fatal error:', err);
  process.exit(1);
});
