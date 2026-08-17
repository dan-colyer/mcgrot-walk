// McGrot's gate suite. G0.
//
// A SEPARATE FILE FROM scripts/smoke.mjs, deliberately. That suite is 7,066
// lines covering a 1617 m street which is now PAUSED (docs/MCGROTS-ROADMAP.md
// § 8). Extending it would couple this game's gates to a codebase nobody is
// allowed to touch, and would make every McGrot's run pay for the street's
// 20 regions. This one starts small and stays fast.
//
// What it shares: scripts/launch.mjs, so both games render on the same
// browser. Goldens are renderer-specific and a suite that boots differently
// from its sibling cannot be compared with it.
//
// WHAT THIS SUITE DELIBERATELY DOES NOT PROVE (G0 scope):
//   - That anything is ANIMATED. The actor is a capsule that slides. There is
//     no rig in this project and no walk cycle; G1 answers that and nothing
//     here should be read as evidence about it.
//   - That the pitch looks GOOD. The contrast floor catches a black frame. It
//     cannot tell a composed shot from an ugly one — that is Dan's judgement
//     at G7, and the captures below exist to be opened, not just measured.
//   - Anything about style. G2 owns that.

import { spawn, spawnSync } from 'child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'net';
import { createHash } from 'crypto';
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import { LAUNCH_OPTS, LAUNCH_LABEL } from './launch.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'docs/smoke/captures/mcgrots/g0');
const DIALOGUE_FILE = join(root, 'generated/mcgrots-dialogue.json');

// 'dialogue' is pure node against two JSON files — no page, no server. Kept
// out of BROWSER_REGIONS below so `--only=dialogue` never pays for a boot.
const REGIONS = ['boot', 'camera', 'statue', 'anchors', 'van', 'pomple', 'mcgrot', 'seat', 'rota', 'audio', 'visit', 'style', 'dialogue', 'taxman'];
const BROWSER_REGIONS = REGIONS.filter((r) => r !== 'dialogue');
const ONLY = new Set(process.argv.filter((a) => a.startsWith('--only='))
  .flatMap((a) => a.slice(7).split(',')));
const wants = (r) => ONLY.size === 0 || ONLY.has(r);
const needsBrowser = BROWSER_REGIONS.some(wants);

const results = [];
const skipped = [];
const check = (name, pass, detail) => results.push({ name, pass, detail });

// Same measurement as scripts/smoke.mjs's luminanceStats — a frame's luminance
// mean and stddev. Duplicated rather than imported because that module is the
// paused street's; the CONSTANT below is the thing that must not drift, and it
// is quoted from there.
const SUBSTRATE_MIN_STDDEV = 8;   // of 255. Below this a frame is too flat to gate anything.

// THE CRUSH FLOOR EXISTS BECAUSE THE CONTRAST FLOOR MISSED. G0's first render
// put 53.9% of the establishing frame under luminance 12 — the ground took
// almost no light — and the suite called it a pass: a frame that is half black
// and half brown has a stddev of 34.6, comfortably over the floor. Mean and
// stddev are both blind to a bimodal frame. This measures the thing that
// actually went wrong.
const MAX_CRUSHED_FRACTION = 12;   // percent of pixels under CRUSH_LUMA
const CRUSH_LUMA = 12;             // of 255
const MAX_BLOWN_FRACTION = 2;      // percent over BLOWN_LUMA
const BLOWN_LUMA = 245;

function luminanceStats(buf) {
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

// G5b: mechanical form gates for generated/mcgrots-dialogue.json. These gate
// FORM ONLY (word-list membership, length, sentence shape) — never quality,
// which is Dan's read. Quoted from docs/LEITH.md's "Dialect kit (documented)"
// table (14 rows), with the two "X / Y" rows split into their own tokens —
// 17 flat tokens, used here as a presence check (does a line carry ANY kit
// word), not to reproduce the write-up's "1 of 15" row-level count exactly.
// Duplicated rather than imported: LEITH.md is prose, not a module.
const DIALECT_KIT = [
  'ken', 'barry', 'radge', 'gadgie', 'shan', 'mingin', 'chum', 'swally', 'steamboats', 'messages',
  'the fit o’ the walk', 'doon the walk', 'up the toon', 'awright', 'pal', 'doll', 'persevere',
];
const normApostrophe = (s) => s.toLowerCase().replace(/['’]/g, '’');
const hasDialect = (text) => DIALECT_KIT.some((tok) => normApostrophe(text).includes(tok));
const wordCount = (text) => (text.match(/[A-Za-z’']+/g) ?? []).length;

// The systemic tic the brief measured: one balanced sentence, a concrete
// noun then an abstract lift. Approximated mechanically as a single
// declarative sentence (one sentence-terminal mark, a period, at the very
// end) carrying exactly one comma/semicolon pivot and at least 9 words —
// that shape describes 48/48 of G5a's original lines and is what "break the
// default shape" means here.
function isBalancedTurn(text) {
  const enders = [...text.matchAll(/[.!?]/g)];
  if (enders.length !== 1) return false;
  if (!text.trim().endsWith('.')) return false;
  const pivots = (text.match(/[,;]/g) ?? []).length;
  if (pivots !== 1) return false;
  return wordCount(text) >= 9;
}

function allDialogueLines(dialogueJson) {
  return dialogueJson.entries.flatMap((entry) => entry.lines.map((line) => ({ key: entry.key, ...line })));
}

const freePort = () => new Promise((res, rej) => {
  const s = createServer();
  s.on('error', rej);
  s.listen(0, '127.0.0.1', () => { const p = s.address().port; s.close(() => res(p)); });
});

let server, browser;
const shutdown = () => {
  try { browser?.close(); } catch { /* already gone */ }
  try { server?.kill(); } catch { /* already gone */ }
};
process.on('SIGINT', () => { shutdown(); process.exit(130); });

const started = Date.now();
let shots = [];

try {
  // ------------------------------------------------------------ dialogue ---
  // G5a's checker (scripts/check-mcgrots-dialogue.mjs) is Codex's file and
  // runs main() unconditionally on import (no `if (import.meta.url === ...)`
  // guard), so importing its exported functions would re-run its own CLI
  // arg parser against THIS script's argv. Shelling out instead, via
  // spawnSync directly rather than a shell pipe — Codex's own fault
  // injection found that a shell pipeline reports the LAST command's exit
  // status, not the checker's, and a checker that prints FAIL but exits 0
  // passes silently in any automated caller. spawnSync's `.status` is the
  // checker's own exit code, nothing in between to lose it.
  if (wants('dialogue')) {
    const result = spawnSync('node', [join(root, 'scripts/check-mcgrots-dialogue.mjs'), '--file', DIALOGUE_FILE],
      { encoding: 'utf8' });
    check('no generated dialogue line shares a seven-word window with the comic corpus (or trips the sensitivity backstop)',
      result.status === 0,
      `exit ${result.status}\n${(result.stdout + result.stderr).trim().split('\n').slice(-6).join('\n')}`);

    // G5b: form constraints. Baseline (G5a's 48 lines, measured in
    // docs/briefs/g5b-register.md): dialect kit used in 1/15 words ("pal",
    // twice), "the fit o' the Walk" used 0 times, 0/48 lines under 7 words,
    // mean length 12.1. Thresholds below are measured against the rewritten
    // 72-line corpus with headroom, not picked in advance.
    const dialogueJson = JSON.parse(readFileSync(DIALOGUE_FILE, 'utf8'));
    const dLines = allDialogueLines(dialogueJson);
    const withDialect = dLines.filter((l) => hasDialect(l.text));
    const fitOTheWalk = dLines.filter((l) => normApostrophe(l.text).includes('the fit o’ the walk'));
    const byKey = (key) => dLines.filter((l) => l.key === key);
    const dialectFraction = (key) => { const ls = byKey(key); return ls.filter((l) => hasDialect(l.text)).length / ls.length; };
    const mcgrotFraction = dialectFraction('MCGROT');
    const mikeFraction = dialectFraction('MIKE_ENGLISH');
    check('dialect kit is actually used, including “the fit o’ the Walk”, and Mike English (outsider) uses less of it than McGrot',
      withDialect.length / dLines.length >= 0.2 && fitOTheWalk.length >= 1 && mikeFraction < mcgrotFraction,
      `${withDialect.length}/${dLines.length} lines carry a kit word (>=20% required); “the fit o’ the Walk” used ${fitOTheWalk.length}x (baseline: 1/15 words, 0 uses); McGrot ${(mcgrotFraction * 100).toFixed(0)}% vs Mike English ${(mikeFraction * 100).toFixed(0)}%`);

    const underSeven = dLines.filter((l) => wordCount(l.text) < 7);
    check('a real fraction of lines are fragments or interruptions, under seven words',
      underSeven.length / dLines.length >= 0.15,
      `${underSeven.length}/${dLines.length} lines under 7 words (baseline: 0/48)`);

    const balancedTurns = dLines.filter((l) => isBalancedTurn(l.text));
    check('the noun-then-abstract-lift sentence is not the house style',
      balancedTurns.length / dLines.length <= 0.4,
      `${balancedTurns.length}/${dLines.length} lines fit the single-pivot balanced-sentence shape (must be <=40%; some surviving is fine, all of them is the bug)`);

    // G5c: two-actor exchanges. A turn lives in its speaker's own
    // entry.lines (the reachability constraint above), carrying `exchange`
    // (id) and `turn` (global 1-based ordinal within that exchange) as
    // additive fields. Reconstruct each exchange from dLines — the same
    // array the three form gates above already read — and check what is
    // mechanically true of a conversation: it has at least four turns, the
    // ordinals reassemble with no gaps or repeats, and no two consecutive
    // turns share a speaker. This does not and cannot judge whether the
    // exchange reads well — that is Dan's read via MCGROTS-DIALOGUE.md.
    const exchanges = new Map();
    for (const line of dLines) {
      if (!line.exchange) continue;
      if (!exchanges.has(line.exchange)) exchanges.set(line.exchange, []);
      exchanges.get(line.exchange).push(line);
    }
    const exchangeIds = [...exchanges.keys()];
    const exchangeIssues = [];
    for (const id of exchangeIds) {
      const turns = exchanges.get(id).slice().sort((a, b) => a.turn - b.turn);
      const ordinals = turns.map((t) => t.turn);
      const expected = turns.map((_, i) => i + 1);
      if (JSON.stringify(ordinals) !== JSON.stringify(expected)) {
        exchangeIssues.push(`${id}: turn numbers ${ordinals.join(',')} do not reassemble as 1..${turns.length}`);
      }
      if (turns.length < 4) exchangeIssues.push(`${id}: only ${turns.length} turns (need >=4)`);
      for (let i = 1; i < turns.length; i += 1) {
        if (turns[i].key === turns[i - 1].key) exchangeIssues.push(`${id}: turn ${turns[i].turn} repeats speaker ${turns[i].key}`);
      }
      if (!turns.every((t) => typeof t.text === 'string' && t.text.trim().length > 0)) exchangeIssues.push(`${id}: has an empty turn`);
    }
    check('every exchange reassembles into a gapless, alternating-speaker run of at least four real turns',
      exchangeIds.length >= 1 && exchangeIssues.length === 0,
      exchangeIssues.length
        ? exchangeIssues.join('; ')
        : `${exchangeIds.length} exchange(s): ${exchangeIds.map((id) => `${id} (${exchanges.get(id).length} turns)`).join(', ')}`);

    const mcgrotInEveryExchange = exchangeIds.length > 0 && exchangeIds.every((id) => exchanges.get(id).some((t) => t.key === 'MCGROT'));
    check('McGrot appears in every exchange (the brief’s two-actor requirement)',
      mcgrotInEveryExchange,
      exchangeIds.map((id) => `${id}: ${[...new Set(exchanges.get(id).map((t) => t.key))].join(', ')}`).join(' | '));
  }

  if (needsBrowser) {
    mkdirSync(OUT, { recursive: true });
    const port = await freePort();
    // Rooted at src/, exactly as `npm run dev` is — so /mcgrots.html resolves and
    // `assets/` (a symlink to ../assets) is reachable.
    server = spawn('python3', [join(root, 'scripts/serve.py'), String(port)], {
      cwd: join(root, 'src'), stdio: 'ignore',
    });

    // 127.0.0.1, never `localhost`: serve.py binds IPv4 only and a ::1 connect
    // can hang for undici's full default timeout, eating the retry budget.
    let up = false;
    for (let i = 0; i < 100 && !up; i++) {
      try {
        const r = await fetch(`http://127.0.0.1:${port}/`, { signal: AbortSignal.timeout(1500) });
        up = r.ok;
      } catch { /* not up yet */ }
      if (!up) await new Promise((r) => setTimeout(r, 100));
    }
    if (!up) throw new Error('server never came up');

    browser = await chromium.launch(LAUNCH_OPTS);
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

    const consoleErrors = [];
    page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
    page.on('pageerror', (e) => consoleErrors.push(String(e)));

    await page.goto(`http://127.0.0.1:${port}/mcgrots.html`, { waitUntil: 'load' });
    await page.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
    // G4b: clear the gesture surface once, here, rather than per check — every
    // region below shares this one boot.
    await page.evaluate(() => window.__mcgrotsDebug.card.dismiss());
    // Freeze rAF, then drive frames by hand. Everything below is deterministic
    // because nothing advances that this script did not advance.
    await page.evaluate(() => window.__mcgrotsDebug.pauseAuto());

    // ---------------------------------------------------------------- boot ---
    if (wants('boot')) {
      const info = await page.evaluate(() => ({
        buildings: window.__mcgrotsDebug.buildingCount,
        anchors: window.__mcgrotsDebug.anchorIds(),
        booted: document.body.classList.contains('booted'),
      }));

      // 41 is measured, not assumed: the footprints within MASSING_RADIUS (80 m)
      // of the Foot. If this moves, either leith.json changed or the radius did.
      check('the Foot stands up 41 real building footprints',
        info.buildings === 41, `buildingCount=${info.buildings}`);
      check('five anchors resolve',
        info.anchors.length === 5, info.anchors.join(', '));
      check('boot completes (body.booted)', info.booted, `booted=${info.booted}`);
      check('console is clean through boot',
        consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');
    }

    // -------------------------------------------------------------- camera ---
    // Every anchor gets a capture, and every capture is measured. The pictures
    // are the deliverable a human opens; the numbers only stop a black frame
    // being called a pass.
    shots = [];
    if (wants('camera')) {
      const ids = await page.evaluate(() => window.__mcgrotsDebug.anchorIds());
      for (const id of ids) {
        await page.evaluate((a) => {
          const d = window.__mcgrotsDebug;
          d.setMarkersVisible(false);   // markers are UI, not scene
          d.snapTo(a);
          d.stepFrames(2);
        }, id);
        const buf = await page.screenshot({ type: 'png' });
        writeFileSync(join(OUT, `${id}.png`), buf);
        const lum = luminanceStats(buf);
        const st = await page.evaluate(() => window.__mcgrotsDebug.state());
        shots.push({ id, ...lum, ...st });
      }

      const flat = shots.filter((s) => s.stddev < SUBSTRATE_MIN_STDDEV);
      check('every shot is a picture (contrast floor)',
        flat.length === 0,
        flat.length === 0
          ? `all ${shots.length} shots have luminance stddev >= ${SUBSTRATE_MIN_STDDEV} ` +
            `(min ${Math.min(...shots.map((s) => s.stddev)).toFixed(1)} on ` +
            `${shots.reduce((a, b) => (a.stddev <= b.stddev ? a : b)).id})`
          : flat.map((s) => `${s.id} stddev=${s.stddev.toFixed(1)} mean=${s.mean.toFixed(1)}`).join('; '));

      // A frame can clear the stddev floor while being mostly blown-out sky or
      // mostly black ground. The mean band catches the grossest version.
      const badMean = shots.filter((s) => s.mean < 18 || s.mean > 200);
      check('no shot is crushed or blown out (mean 18..200)',
        badMean.length === 0,
        badMean.length === 0
          ? `means ${shots.map((s) => s.mean.toFixed(0)).join('/')}`
          : badMean.map((s) => `${s.id} mean=${s.mean.toFixed(1)}`).join('; '));

      // …and this is the one that would have caught G0's real fault, which both
      // checks above waved through. See the note on MAX_CRUSHED_FRACTION.
      const crushed = shots.filter((s) => s.crushed > MAX_CRUSHED_FRACTION);
      check(`no shot is mostly black (< ${MAX_CRUSHED_FRACTION}% under luma ${CRUSH_LUMA})`,
        crushed.length === 0,
        crushed.length === 0
          ? `worst ${Math.max(...shots.map((s) => s.crushed)).toFixed(1)}% on ` +
            `${shots.reduce((a, b) => (a.crushed >= b.crushed ? a : b)).id}`
          : crushed.map((s) => `${s.id} ${s.crushed.toFixed(1)}% black`).join('; '));

      const blown = shots.filter((s) => s.blown > MAX_BLOWN_FRACTION);
      check(`no shot is mostly blown (< ${MAX_BLOWN_FRACTION}% over luma ${BLOWN_LUMA})`,
        blown.length === 0,
        blown.length === 0
          ? `worst ${Math.max(...shots.map((s) => s.blown)).toFixed(2)}%`
          : blown.map((s) => `${s.id} ${s.blown.toFixed(1)}% blown`).join('; '));

      // The camera is a shot, not a free-flying eye: each one must actually
      // differ from the others, or the anchors are not doing anything.
      const uniq = new Set(shots.map((s) => `${s.camera.x},${s.camera.y},${s.camera.z}`));
      check('each anchor has its own distinct shot',
        uniq.size === shots.length, `${uniq.size} distinct of ${shots.length}`);
    }

    // ------------------------------------------------------------- statue ---
    if (wants('statue')) {
      // The control is the five shipped camera rays and the authored statue's
      // actual world-space centre, not a scene-node count. This is the measured
      // property G3b must preserve: the quarter-turn moved the old placeholder
      // at the origin to a minimum 8.3m off the sightlines. A larger authored
      // figure must not silently turn the landmark back into the subject.
      const sightlines = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        const root = d.scene.getObjectByName('statue');
        if (!root) return { root: false, queen: false, placeholder: false, rows: [] };
        const centre = new d.THREE.Vector3();
        root.getWorldPosition(centre);
        const rows = d.anchors.map((a) => {
          const vx = a.camera.look.x - a.camera.eye.x;
          const vz = a.camera.look.z - a.camera.eye.z;
          const wx = centre.x - a.camera.eye.x;
          const wz = centre.z - a.camera.eye.z;
          const t = (wx * vx + wz * vz) / (vx * vx + vz * vz);
          return { id: a.id, distance: Math.hypot(wx - vx * t, wz - vz * t) };
        });
        return {
          root: true,
          queen: !!root.getObjectByName('statue:queen-victoria'),
          placeholder: !!d.scene.getObjectByName('statue-placeholder'),
          rows,
        };
      });

      check('the Foot carries the authored Queen Victoria, not the placeholder',
        sightlines.root && sightlines.queen && !sightlines.placeholder,
        sightlines.root
          ? `queen=${sightlines.queen} placeholder=${sightlines.placeholder}`
          : 'statue root missing');

      const minimum = sightlines.rows.length
        ? Math.min(...sightlines.rows.map((row) => row.distance))
        : 0;
      // The documented 8.3m is rounded to one decimal place. The exact prior
      // kerb measurement is 8.283m, so 8.28m is the unrounded regression floor.
      // NOT a visibility gate (F9, G3 phase gate) — this is a distance between
      // two numbers, which a hidden object still has. `statue.visible = false`
      // leaves it green. Kept because it guards a real, separate regression:
      // the landmark becoming the subject, a measured property G3b had to
      // preserve when the quarter-turn moved the placeholder off the
      // sightlines. The visibility gate is below.
      const MIN_OFF_SIGHTLINE = 8.28;
      check('Queen Victoria holds the measured 8.3m off-sightline baseline (not a visibility gate — see below)',
        sightlines.rows.length === 5 && minimum >= MIN_OFF_SIGHTLINE,
        sightlines.rows.length
          ? sightlines.rows.map((row) => `${row.id} ${row.distance.toFixed(3)}m`).join(' / ')
          : 'no camera sightlines');

      // F9, G3f: a REAL visibility gate. Starts from the `van` region's shape
      // (project the world Box3 through the LIVE camera at each anchor after a
      // real `snapTo`, clamp to viewport) but the CONTENT half could not stay
      // unchanged — measured below, not assumed.
      const statueIds = await page.evaluate(() => window.__mcgrotsDebug.anchorIds());
      const statueRows = [];
      for (const id of statueIds) {
        await page.evaluate((a) => {
          const d = window.__mcgrotsDebug;
          d.setMarkersVisible(false);
          d.snapTo(a);
          d.stepFrames(2);
        }, id);

        const rect = await page.evaluate(() => {
          const d = window.__mcgrotsDebug;
          const statue = d.scene.getObjectByName('statue');
          if (!statue) return null;
          const box = new d.THREE.Box3().setFromObject(statue);
          let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
          let anyInFront = false;
          for (const x of [box.min.x, box.max.x]) {
            for (const y of [box.min.y, box.max.y]) {
              for (const z of [box.min.z, box.max.z]) {
                const p = new d.THREE.Vector3(x, y, z).project(d.camera);
                if (p.z < 1) anyInFront = true;
                x0 = Math.min(x0, p.x); x1 = Math.max(x1, p.x);
                y0 = Math.min(y0, p.y); y1 = Math.max(y1, p.y);
              }
            }
          }
          const clamp01 = (v) => Math.max(0, Math.min(1, v));
          const ux0 = clamp01(x0 * 0.5 + 0.5), ux1 = clamp01(x1 * 0.5 + 0.5);
          const uy0 = clamp01(1 - (y1 * 0.5 + 0.5)), uy1 = clamp01(1 - (y0 * 0.5 + 0.5));
          return { ux0, ux1, uy0, uy1, anyInFront, rawX0: x0, rawX1: x1 };
        });

        // MEASURED: `Box3().setFromObject` walks descendants regardless of
        // `.visible` — so this rect, like the van's, is blind to a visibility
        // fault on its own. That is fine for the van, whose rect sits against
        // flat ground/sky. It is NOT fine here: the statue's rect at these
        // anchors overlaps the massing behind it (confirmed by rendering —
        // `back`'s rect covers the building's beige wall and its colour-band
        // edge), so a plain "does this rect hold non-flat content" check reads
        // the BUILDING as content and passes even with `statue.visible =
        // false`. Verified directly: injecting the fault and re-running the
        // corner-flatness version of this check (the van's technique, tried
        // first, kept in git history rather than repeated here) left it green,
        // `back` reading statue=51.5 flat=0.0 with the statue OFF. So the
        // content check below is a live A/B, not a fixed-corner comparison —
        // it renders the SAME anchor with the statue toggled off, in the same
        // boot, and diffs the two frames inside the rect. A building behind the
        // statue is identical in both frames and cancels out; only the
        // statue's own pixels survive the diff.
        const withOn = await page.screenshot({ type: 'png' });
        // Restore to whatever `.visible` ACTUALLY was, not a hardcoded `true`.
        // The first version of this check hardcoded the restore, which silently
        // un-injected `statue.visible = false` after the first anchor —
        // `counter` (processed first) read the fault correctly, but by `wall`
        // the restore had already flipped it back on, so three of the four
        // checked anchors were testing a scene the check itself had repaired.
        // Caught by actually reading the fault-injection output rather than
        // trusting the design: the "broken" run showed wall/far/back at their
        // normal 27-32 diffs, unchanged from the working run.
        const originalVisible = await page.evaluate(() => window.__mcgrotsDebug.scene.getObjectByName('statue').visible);
        await page.evaluate(() => {
          const d = window.__mcgrotsDebug;
          d.scene.getObjectByName('statue').visible = false;
          d.stepFrames(1);
        });
        const withOff = await page.screenshot({ type: 'png' });
        await page.evaluate((v) => {
          const d = window.__mcgrotsDebug;
          d.scene.getObjectByName('statue').visible = v;
          d.stepFrames(1);
        }, originalVisible);

        statueRows.push({ id, rect, withOn, withOff });
      }

      // MEASURED: at `kerb` the statue's projected box is entirely off the
      // right edge of the frame (raw NDC x0=1.344, x1=8.235 — both past +1, the
      // clamped rect collapses to a zero-area sliver at the boundary). `kerb`
      // is the closest anchor to the statue by straight-line distance (§ F1's
      // camera-derivation comment in `anchors.js`), but the derived shot points
      // the camera past it toward the van, not at it — the statue simply is not
      // in that frame. A band widened to admit a zero-area anchor would admit
      // `statue.visible = false` too, so `kerb` is excluded here BY NAME with
      // its measured number, not folded into a looser band. The sightline check
      // above still covers it — that check does not need the object on screen.
      const AREA_EXCLUDED = 'kerb';
      const areaOf = (r) => r ? Math.max(0, r.ux1 - r.ux0) * Math.max(0, r.uy1 - r.uy0) : 0;
      const areaVisRows = statueRows.filter((v) => v.id !== AREA_EXCLUDED);
      const areaExcludedRow = statueRows.find((v) => v.id === AREA_EXCLUDED);
      const areaRows = areaVisRows.map((v) => ({ id: v.id, area: areaOf(v.rect) }));
      // Same band as the van region: >0.3% rules out a handful of stray pixels
      // at the horizon, <70% rules out a projection bug reading as "fills the
      // shot". Measured range across the four covered anchors is 5.8%-7.6%, so
      // this band is not stretched to fit — it is the van's own, reused because
      // it already rules out the right failure modes and the statue's measured
      // numbers sit comfortably inside it. NOTE: like the van's own area check,
      // this proves the geometry is THERE and sensibly sized — it does not
      // prove it RENDERS (Box3 does not read `.visible`). That is what the
      // content check below is for.
      const badArea = areaRows.filter((v) => v.area < 0.003 || v.area > 0.7);
      check(`the statue occupies a sensible fraction of the frame (${areaVisRows.map((v) => v.id).join(', ')}; ${AREA_EXCLUDED} excluded, see comment)`,
        badArea.length === 0,
        areaRows.map((v) => `${v.id} ${(v.area * 100).toFixed(1)}%`).join(' / ') +
          (areaExcludedRow ? ` / ${AREA_EXCLUDED} excluded (raw ndc x0=${areaExcludedRow.rect?.rawX0.toFixed(2)})` : ''));

      // Mean absolute luminance difference between the on/off frames, inside
      // the rect only — the statue's own contribution, isolated from whatever
      // sits behind it in the same shot.
      const meanAbsDiff = (bufA, bufB, x0, x1, y0, y1) => {
        const a = PNG.sync.read(bufA), b = PNG.sync.read(bufB);
        const px0 = Math.max(0, Math.round(x0 * a.width));
        const px1 = Math.min(a.width - 1, Math.round(x1 * a.width));
        const py0 = Math.max(0, Math.round(y0 * a.height));
        const py1 = Math.min(a.height - 1, Math.round(y1 * a.height));
        let sum = 0, n = 0;
        for (let y = py0; y <= py1; y++) {
          for (let x = px0; x <= px1; x++) {
            const o = (y * a.width + x) * 4;
            const la = 0.2126 * a.data[o] + 0.7152 * a.data[o + 1] + 0.0722 * a.data[o + 2];
            const lb = 0.2126 * b.data[o] + 0.7152 * b.data[o + 1] + 0.0722 * b.data[o + 2];
            sum += Math.abs(la - lb); n++;
          }
        }
        return n ? sum / n : 0;
      };
      const statueContentRowsAll = statueRows.map((v) => {
        const r = v.rect;
        const diff = r ? meanAbsDiff(v.withOn, v.withOff, r.ux0, r.ux1, r.uy0, r.uy1) : 0;
        return { id: v.id, diff };
      });
      // MEASURED: `kerb` has no rect (excluded above) and `counter` genuinely
      // toggles (visually confirmed: a small dark triangle plus a corner of the
      // plinth appear/disappear at the frame's right edge) but reads only 1.0 —
      // against a confirmed-broken baseline of exactly 0.0 (measured by
      // injecting `statue.visible = false` at construction, so the toggle's
      // "on" capture was already off). 1.0 is real signal, not noise — three
      // repeat runs all read exactly 1.0, this renderer is deterministic
      // (`CLAUDE.md`) — but it is real signal DILUTED by averaging over a rect
      // that is >90% empty sky/ground: at `counter` the statue's own AABB is
      // clipped hard against the frame edge, so only a sliver of the box is
      // actual statue. A threshold that passes 1.0 while failing 0.0 exists
      // (>0.5) but has near-zero margin and would mean little if the pose or
      // camera ever moved a few pixels. Per the brief's own instruction, this
      // is said plainly and `counter` is excluded by name rather than the
      // threshold being shaved to fit it. Content check covers 3 of 5 anchors.
      const CONTENT_EXCLUDED = new Set(['kerb', 'counter']);
      const statueContentRows = statueContentRowsAll.filter((v) => !CONTENT_EXCLUDED.has(v.id));
      const excludedContentRows = statueContentRowsAll.filter((v) => CONTENT_EXCLUDED.has(v.id));
      // >3 rules out anti-aliasing/dithering noise on an unchanged frame (two
      // renders of the identical statue-off scene read <0.5 in a dry run);
      // measured range with the statue genuinely toggling, at the three
      // covered anchors, is 27.6-32.0.
      const badStatueContent = statueContentRows.filter((v) => v.diff <= 3);
      check(`the statue rect changes when toggled off in the same boot (${statueContentRows.map((v) => v.id).join(', ')}; ${[...CONTENT_EXCLUDED].join(', ')} excluded, see comment)`,
        badStatueContent.length === 0,
        statueContentRows.map((v) => `${v.id} on-vs-off diff=${v.diff.toFixed(1)}`).join(' / ') +
          ' / excluded: ' + excludedContentRows.map((v) => `${v.id} diff=${v.diff.toFixed(1)}`).join(', '));

      check('console clean after driving the statue region',
        consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');
    }

    // ------------------------------------------------------------- anchors ---
    if (wants('anchors')) {
      // The walk. Not an animation test — a test that requesting a spot moves
      // the actor to it and parks them there.
      const walk = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        d.snapTo('back');
        const from = d.state().actor;
        d.goTo('counter');
        const midway = [];
        for (let i = 0; i < 60; i++) { d.stepFrames(1); if (i % 20 === 0) midway.push({ ...d.state().actor }); }
        const moving = d.state().walking;
        // Long enough to arrive from any anchor at 1.35 m/s.
        d.stepFrames(600);
        return { from, midway, movingAtOneSecond: moving, end: d.state() };
      });

      const target = await page.evaluate(() =>
        window.__mcgrotsDebug.anchors.find((a) => a.id === 'counter').pos);

      const dist = Math.hypot(walk.end.actor.x - target.x, walk.end.actor.z - target.z);
      check('walking to an anchor arrives at it',
        dist < 0.1 && walk.end.anchor === 'counter' && !walk.end.walking,
        `ended ${dist.toFixed(3)}m from counter, anchor=${walk.end.anchor}, walking=${walk.end.walking}`);

      check('the walk is a walk, not a teleport',
        walk.movingAtOneSecond && walk.midway.some((p) =>
          Math.hypot(p.x - walk.from.x, p.z - walk.from.z) > 0.2 &&
          Math.hypot(p.x - target.x, p.z - target.z) > 0.2),
        `sampled ${walk.midway.map((p) => `(${p.x.toFixed(1)},${p.z.toFixed(1)})`).join(' ')}`);

      // A sitting spot must actually sit, or the seated camera height is a lie.
      const sat = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        d.goTo('wall'); d.stepFrames(900);
        return d.state();
      });
      check('a sitting anchor ends in the sit state',
        sat.actorState === 'sit' && sat.anchor === 'wall',
        `anchor=${sat.anchor} state=${sat.actorState}`);

      check('console still clean after driving the anchors',
        consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');

      // F6: the camera used to CUT to the destination shot the instant a walk
      // began — `current = a` was assigned before the walk started, and
      // `placeCamera()` read `current.camera` every frame regardless of
      // whether the actor had gone anywhere yet. Measured before the fix:
      // camera moved 10.324m on frame 1 of one `goTo('far')` from `counter`
      // while the actor moved 0.020m.
      //
      // GATED AS A FRACTION OF THE TOTAL CAMERA TRAVEL, not an absolute
      // distance — anchors sit at different separations, and a fixed-metre
      // threshold would be tuned to one pair and silently wrong for another.
      //
      // THE CONTROL IS THE SNAP PATH, not the walk arm with the fix toggled
      // off through the same code path. `goTo(id, { snap: true })` is a real,
      // separate branch that must stay a hard cut — the boot call and S4's
      // gutter cut both depend on it — so measuring it alongside the walk arm
      // is on-vs-off across two branches that genuinely differ, not a
      // calculation checked against itself.
      const cameraTravel = async (mode) => page.evaluate((m) => {
        const d = window.__mcgrotsDebug;
        d.snapTo('back');
        const from = d.anchors.find((a) => a.id === 'back').camera.eye;
        const to = d.anchors.find((a) => a.id === 'far').camera.eye;
        const total = Math.hypot(to.x - from.x, to.y - from.y, to.z - from.z);
        if (m === 'snap') d.snapTo('far'); else d.goTo('far');
        d.stepFrames(1);
        const c1 = d.state().camera;
        const frame1 = Math.hypot(c1.x - from.x, c1.y - from.y, c1.z - from.z);
        // Long enough to arrive from any anchor pair at 1.35 m/s.
        d.stepFrames(600);
        const end = d.state().camera;
        const endDelta = Math.hypot(end.x - to.x, end.y - to.y, end.z - to.z);
        return { total, frame1, endDelta };
      }, mode);

      const cameraWalk = await cameraTravel('walk');
      const cameraSnap = await cameraTravel('snap');
      const walkFrac = cameraWalk.total > 0 ? cameraWalk.frame1 / cameraWalk.total : 0;
      const snapFrac = cameraSnap.total > 0 ? cameraSnap.frame1 / cameraSnap.total : 0;

      check('a walk eases the camera — frame 1 is a small fraction of the total move',
        walkFrac < 0.1,
        `frame-1 ${cameraWalk.frame1.toFixed(3)}m of ${cameraWalk.total.toFixed(3)}m total (${(walkFrac * 100).toFixed(1)}%)`);

      check('the snap control still cuts the camera on frame 1',
        snapFrac > 0.95,
        `frame-1 ${cameraSnap.frame1.toFixed(3)}m of ${cameraSnap.total.toFixed(3)}m total (${(snapFrac * 100).toFixed(1)}%)`);

      // A camera that eases but never quite lands is still wrong — this is the
      // check that catches an easing curve which asymptotes instead of
      // resolving, or a `progress` that never reaches exactly 1.
      check('the eased camera arrives exactly at the destination anchor',
        cameraWalk.endDelta < 0.01,
        `${cameraWalk.endDelta.toFixed(4)}m from the far anchor's eye once arrived`);

      // F11. The check above only ever drives parked -> walk, which is exactly
      // why it never caught this: interrupting an IN-PROGRESS walk (`onPick`
      // and the number-key handler both call `goTo` with no guard on
      // `actor.walking`) used to ease from the anchor being ABANDONED, not from
      // the camera's live mid-ease position. Repro named in the brief: parked
      // at `back`, `goTo('far')`, 30 frames, then `goTo('counter')` — measured
      // before the fix at 2.442m of a 10.324m move, 23.7%, against the same 10%
      // ceiling the walk-vs-snap check above uses.
      const interrupted = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        d.snapTo('back');
        d.goTo('far');
        d.stepFrames(30);
        const before = d.state().camera;
        const to = d.anchors.find((a) => a.id === 'counter').camera.eye;
        const total = Math.hypot(to.x - before.x, to.y - before.y, to.z - before.z);
        d.goTo('counter');
        d.stepFrames(1);
        const after = d.state().camera;
        const frame1 = Math.hypot(after.x - before.x, after.y - before.y, after.z - before.z);
        return { total, frame1 };
      });
      const interruptedFrac = interrupted.total > 0 ? interrupted.frame1 / interrupted.total : 0;
      check('interrupting an in-progress walk still eases, not cuts (F11)',
        interruptedFrac < 0.1,
        `frame-1 ${interrupted.frame1.toFixed(3)}m of ${interrupted.total.toFixed(3)}m total (${(interruptedFrac * 100).toFixed(1)}%)`);

      // F22 follow-up 2 (Dan, re-measured on a detached worktree, 2026-08-16):
      // the live-distance version of the player's self-occlusion hide
      // (main.js's `SELF_OCCLUDE_HIDE_DIST`) flipped mid-walk whenever the
      // eased camera crossed the threshold, regardless of the actor's own
      // progress — measured, kerb -> counter: exactly one flip, frame 71 of
      // 240, `actor.progress` 0.304, the body vanishing in one frame, in
      // plain view, a third of the way through a walk the player is
      // watching. Frozen to a per-anchor decision instead
      // (`ANCHOR_HIDES_ACTOR` / `walkStartHidden`): hidden for the whole walk
      // if EITHER the anchor being left or the one being arrived at would
      // hide it, so a flip can only happen at the two boundaries where the
      // camera is nowhere near the OTHER anchor's own tight framing — the
      // start of a walk (destination hides) or its completion (departure
      // hides, held until arrival). Tried "resolve purely from the
      // destination" first and rejected it after rendering both directions:
      // it fixed the walk INTO `counter` but produced the same pop, reversed,
      // walking OUT of it (visible from frame 0, large and centred, in the
      // frame `counter` was still showing).
      //
      // GATED AS "no flip happens strictly mid-transit" — `actor.progress`
      // in (0, 1) with `walking` still true — covering both directions, not
      // just the one the bug was found in.
      const walkVisibilityFlips = async (fromId, toId) => page.evaluate(({ from, to }) => {
        const d = window.__mcgrotsDebug;
        d.setMarkersVisible(false);
        d.snapTo(from);
        d.stepFrames(2);
        d.goTo(to);
        const flips = [];
        let last = d.actor.group.visible;
        for (let i = 0; i < 300; i++) {
          d.stepFrames(1);
          const vis = d.actor.group.visible;
          if (vis !== last) {
            flips.push({ progress: +d.actor.progress.toFixed(3), walking: d.state().walking });
            last = vis;
          }
        }
        return flips;
      }, { from: fromId, to: toId });

      const flipsIn = await walkVisibilityFlips('kerb', 'counter');
      const flipsOut = await walkVisibilityFlips('counter', 'kerb');
      // 0.02 clears one frame's own progress at the loop's first check (a
      // "frame 0" flip already reads a small positive progress, having been
      // stepped once before the first read) without opening the window wide
      // enough to hide a genuine mid-transit flip — measured mid-transit
      // flip in the ORIGINAL bug was at progress 0.304, over an order of
      // magnitude past this margin.
      const midTransit = (flips) => flips.filter((f) => f.walking && f.progress > 0.02 && f.progress < 0.98);
      const badFlipsIn = midTransit(flipsIn);
      const badFlipsOut = midTransit(flipsOut);
      check('the player\'s own visibility never flips mid-transit, either direction (F22 follow-up 2)',
        badFlipsIn.length === 0 && badFlipsOut.length === 0,
        `kerb->counter: ${JSON.stringify(flipsIn)} / counter->kerb: ${JSON.stringify(flipsOut)}`);
    }

    // ------------------------------------------------------------------ van ---
    // G3a. `van.js` replaces the G0 blockout box with the real van, price board
    // and ground dressing. The claim that matters is not "the van exists in the
    // scene" — a mesh count proves the calculator ran, not that a player would
    // ever see it — it is that the van is ACTUALLY VISIBLE, at a sensible size,
    // from every one of the five shots the game uses.
    if (wants('van')) {
      const ids = await page.evaluate(() => window.__mcgrotsDebug.anchorIds());
      const vanRows = [];
      for (const id of ids) {
        await page.evaluate((a) => {
          const d = window.__mcgrotsDebug;
          d.setMarkersVisible(false);
          d.snapTo(a);
          d.stepFrames(2);
        }, id);

        // The van's own world-space bounding box, projected through the LIVE
        // camera this anchor actually uses — not a hand-measured rect. Clamped
        // to the viewport, so a van that is half off-screen is measured by the
        // half that would actually show, not by geometry outside the frame.
        const rect = await page.evaluate(() => {
          const d = window.__mcgrotsDebug;
          const van = d.scene.getObjectByName('van');
          if (!van) return null;
          const box = new d.THREE.Box3().setFromObject(van);
          let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
          let anyInFront = false;
          for (const x of [box.min.x, box.max.x]) {
            for (const y of [box.min.y, box.max.y]) {
              for (const z of [box.min.z, box.max.z]) {
                const p = new d.THREE.Vector3(x, y, z).project(d.camera);
                if (p.z < 1) anyInFront = true;
                x0 = Math.min(x0, p.x); x1 = Math.max(x1, p.x);
                y0 = Math.min(y0, p.y); y1 = Math.max(y1, p.y);
              }
            }
          }
          const clamp01 = (v) => Math.max(0, Math.min(1, v));
          const ux0 = clamp01(x0 * 0.5 + 0.5), ux1 = clamp01(x1 * 0.5 + 0.5);
          const uy0 = clamp01(1 - (y1 * 0.5 + 0.5)), uy1 = clamp01(1 - (y0 * 0.5 + 0.5));
          return { ux0, ux1, uy0, uy1, anyInFront };
        });

        const buf = await page.screenshot({ type: 'png' });
        writeFileSync(join(OUT, `van-${id}.png`), buf);
        vanRows.push({ id, rect, buf });
      }

      // Fraction of the frame the van's projected footprint covers. Neither
      // end is arbitrary: >0.3% rules out a van that is a handful of stray
      // pixels at the horizon (technically "in frame", not visible to a
      // player), and <70% rules out a projection bug that reads as the van
      // filling the shot outright — measured at `counter` (the closest anchor,
      // where the player stands nearest it) the AXIS-ALIGNED bounding box
      // covers 57.6% even though the van's own silhouette — angled, with a
      // dark opening cut into it — reads as visibly smaller in the actual
      // capture. An AABB always overstates a box-shaped mesh's true footprint;
      // the ceiling has room for that without going slack.
      const areaOf = (r) => r ? Math.max(0, r.ux1 - r.ux0) * Math.max(0, r.uy1 - r.uy0) : 0;
      const areaRows = vanRows.map((v) => ({ id: v.id, area: areaOf(v.rect), rect: v.rect }));
      const badArea = areaRows.filter((v) => !v.rect || !v.rect.anyInFront || v.area < 0.003 || v.area > 0.7);
      check('the van occupies a sensible fraction of the frame at every anchor',
        badArea.length === 0,
        areaRows.map((v) => `${v.id} ${(v.area * 100).toFixed(1)}%`).join(' / '));

      // THE CONTROL: the same stddev measurement, same technique, applied to a
      // patch known to be flat — proving the technique can read "flat" as flat
      // before trusting it to read the van's rect as "not flat". The first
      // version used a fixed sky strip across the top of the window and it was
      // WRONG at three of five anchors: the massing's roofline crosses that
      // strip at `counter`/`wall`/`kerb` (the closer anchors, where the
      // buildings fill more of the frame), so the "sky" patch was actually
      // half sky and half building edge — a hard line, which reads as high
      // variance under this exact metric. Measured: that strip's stddev was
      // 41-45 at the three close anchors, the same order of magnitude as the
      // van itself, which made the check worthless there without saying so.
      //
      // Fixed by not assuming WHERE the flat region is. Four small corner
      // patches (6% x 5% of the frame) are sampled per shot and the FLATTEST
      // of the four is taken as the control — whichever corner the roofline
      // and any other object happens to miss. A corner patch this small is
      // also far less likely to straddle an edge even when it does clip a
      // building face, since it has so little area to do it in.
      const stddevOf = (buf, x0, x1, y0, y1) => {
        const png = PNG.sync.read(buf);
        const px0 = Math.max(0, Math.round(x0 * png.width));
        const px1 = Math.min(png.width - 1, Math.round(x1 * png.width));
        const py0 = Math.max(0, Math.round(y0 * png.height));
        const py1 = Math.min(png.height - 1, Math.round(y1 * png.height));
        let sum = 0, sumSq = 0, n = 0;
        for (let y = py0; y <= py1; y++) {
          for (let x = px0; x <= px1; x++) {
            const o = (y * png.width + x) * 4;
            const l = 0.2126 * png.data[o] + 0.7152 * png.data[o + 1] + 0.0722 * png.data[o + 2];
            sum += l; sumSq += l * l; n++;
          }
        }
        if (!n) return 0;
        const mean = sum / n;
        return Math.sqrt(Math.max(0, sumSq / n - mean * mean));
      };
      const flattestCorner = (buf) => Math.min(
        stddevOf(buf, 0, 0.06, 0, 0.05),
        stddevOf(buf, 0.94, 1, 0, 0.05),
        stddevOf(buf, 0, 0.06, 0.95, 1),
        stddevOf(buf, 0.94, 1, 0.95, 1),
      );
      const contentRows = vanRows.map((v) => {
        const r = v.rect;
        const vanStddev = r ? stddevOf(v.buf, r.ux0, r.ux1, r.uy0, r.uy1) : 0;
        const flatStddev = flattestCorner(v.buf);
        return { id: v.id, vanStddev, flatStddev };
      });
      const badContent = contentRows.filter((v) => v.vanStddev <= v.flatStddev + 10);
      check('the van rect holds rendered content, not flat background (control: the flattest corner)',
        badContent.length === 0,
        contentRows.map((v) => `${v.id} van=${v.vanStddev.toFixed(1)} flat=${v.flatStddev.toFixed(1)}`).join(' / '));

      check('console still clean after driving the van region',
        consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');
    }

    // ----------------------------------------------------------- pomple ---
    // G6a. The body re-check found neither G1 candidate transfers to a
    // quadruped (docs/briefs/g6a-pomple-presentation.md), so pomple.js builds
    // its own two-part rig. Two claims: he is actually VISIBLE (not a scene-
    // graph entry with nothing drawn — the statue's own F-numbered lesson,
    // AGENTS.md § invariants), and the head-turn — "the load-bearing
    // animation in the whole game" per the roadmap — actually tracks the
    // player rather than just existing.
    if (wants('pomple')) {
      const ids = await page.evaluate(() => window.__mcgrotsDebug.anchorIds());
      const rows = [];
      for (const id of ids) {
        const rect = await page.evaluate((a) => {
          const d = window.__mcgrotsDebug;
          d.setMarkersVisible(false);
          d.snapTo(a);
          d.stepFrames(2);
          const pomple = d.scene.getObjectByName('pomple');
          if (!pomple) return null;
          const box = new d.THREE.Box3().setFromObject(pomple);
          let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity, anyInFront = false;
          for (const x of [box.min.x, box.max.x]) {
            for (const y of [box.min.y, box.max.y]) {
              for (const z of [box.min.z, box.max.z]) {
                const p = new d.THREE.Vector3(x, y, z).project(d.camera);
                if (p.z < 1) anyInFront = true;
                x0 = Math.min(x0, p.x); x1 = Math.max(x1, p.x);
                y0 = Math.min(y0, p.y); y1 = Math.max(y1, p.y);
              }
            }
          }
          const clamp01 = (v) => Math.max(0, Math.min(1, v));
          const ux0 = clamp01(x0 * 0.5 + 0.5), ux1 = clamp01(x1 * 0.5 + 0.5);
          const uy0 = clamp01(1 - (y1 * 0.5 + 0.5)), uy1 = clamp01(1 - (y0 * 0.5 + 0.5));
          return { ux0, ux1, uy0, uy1, anyInFront };
        }, id);
        const buf = await page.screenshot({ type: 'png' });
        writeFileSync(join(OUT, `pomple-${id}.png`), buf);
        rows.push({ id, rect, buf });
      }

      // He is a small dog beside a van, not the van — a low floor, not the
      // van region's 0.3%. Measured from all five anchors before picking it:
      // 0.088-0.497% of the frame, so 0.03% clears "present in frame" with
      // margin while still catching a degenerate (zero-area or off-screen)
      // projection.
      const areaOf = (r) => r ? Math.max(0, r.ux1 - r.ux0) * Math.max(0, r.uy1 - r.uy0) : 0;
      const areaRows = rows.map((v) => ({ id: v.id, area: areaOf(v.rect), rect: v.rect }));
      const badArea = areaRows.filter((v) => !v.rect || !v.rect.anyInFront || v.area < 0.0003);
      check('pomple is present and non-degenerate in frame at every anchor',
        badArea.length === 0,
        areaRows.map((v) => `${v.id} ${(v.area * 100).toFixed(3)}%`).join(' / '));

      // THE CONTROL, same technique as the van region above: the flattest of
      // four small corner patches, proving the stddev metric can read "flat"
      // as flat before trusting it to read pomple's rect as "not flat". Only
      // at the two nearest anchors (counter, kerb) — his rect is a few dozen
      // pixels at the far anchors, too small for a stddev measurement to mean
      // anything either way.
      const stddevOf = (buf, x0, x1, y0, y1) => {
        const png = PNG.sync.read(buf);
        const px0 = Math.max(0, Math.round(x0 * png.width));
        const px1 = Math.min(png.width - 1, Math.round(x1 * png.width));
        const py0 = Math.max(0, Math.round(y0 * png.height));
        const py1 = Math.min(png.height - 1, Math.round(y1 * png.height));
        let sum = 0, sumSq = 0, n = 0;
        for (let y = py0; y <= py1; y++) {
          for (let x = px0; x <= px1; x++) {
            const o = (y * png.width + x) * 4;
            const l = 0.2126 * png.data[o] + 0.7152 * png.data[o + 1] + 0.0722 * png.data[o + 2];
            sum += l; sumSq += l * l; n++;
          }
        }
        if (!n) return 0;
        const mean = sum / n;
        return Math.sqrt(Math.max(0, sumSq / n - mean * mean));
      };
      const flattestCorner = (buf) => Math.min(
        stddevOf(buf, 0, 0.06, 0, 0.05),
        stddevOf(buf, 0.94, 1, 0, 0.05),
        stddevOf(buf, 0, 0.06, 0.95, 1),
        stddevOf(buf, 0.94, 1, 0.95, 1),
      );
      const contentRows = rows.filter((v) => v.id === 'counter' || v.id === 'kerb').map((v) => {
        const r = v.rect;
        const pompleStddev = r ? stddevOf(v.buf, r.ux0, r.ux1, r.uy0, r.uy1) : 0;
        const flatStddev = flattestCorner(v.buf);
        return { id: v.id, pompleStddev, flatStddev };
      });
      const badContent = contentRows.filter((v) => v.pompleStddev <= v.flatStddev + 5);
      check('the pomple rect holds rendered content, not flat background (control: the flattest corner)',
        badContent.length === 0,
        contentRows.map((v) => `${v.id} pomple=${v.pompleStddev.toFixed(1)} flat=${v.flatStddev.toFixed(1)}`).join(' / '));

      // THE HEAD-TURN GATE. Two viewer positions, both close enough that
      // pomple.js's own attention state machine holds 'player' throughout
      // (measured: counter 3.31 m, kerb 5.36 m from him, both under
      // ATTENTION_ENTER_R) — so the yaw difference below is attributable to
      // the tracked position changing, not to attention switching targets
      // mid-measurement. THE CONTROL, named per the brief: the same two
      // positions with tracking switched off — the head must hold its rest
      // yaw at both, proving the difference above comes from the tracking
      // mechanism and not from idle settle or some other incidental motion.
      const headYawAt = async (id) => {
        await page.evaluate((a) => {
          const d = window.__mcgrotsDebug;
          d.snapTo(a);
          d.stepFrames(150);
        }, id);
        return page.evaluate(() => window.__mcgrotsDebug.pomple.headYaw);
      };
      const onA = await headYawAt('counter');
      const onB = await headYawAt('kerb');
      await page.evaluate(() => window.__mcgrotsDebug.pomple.setTracking(false));
      const offA = await headYawAt('counter');
      const offB = await headYawAt('kerb');
      await page.evaluate(() => window.__mcgrotsDebug.pomple.setTracking(true));

      check('the head-turn tracks the player: yaw differs between two viewer positions',
        Math.abs(onA - onB) > 0.2,
        `tracking on: counter=${onA.toFixed(3)} kerb=${onB.toFixed(3)} (Δ=${Math.abs(onA - onB).toFixed(3)})`);
      check('control: with tracking off, the same two positions do not move the head',
        Math.abs(offA) < 0.01 && Math.abs(offB) < 0.01,
        `tracking off: counter=${offA.toFixed(3)} kerb=${offB.toFixed(3)}`);

      // F21: he was built fire-and-forget at module scope with nothing
      // awaiting his own readiness, so looks.js's one-time traverse at
      // install ran before his meshes existed — he stayed a plain, un-inked
      // MeshLambertMaterial under every look forever. `mcgrot.js` gets the
      // same claim gated above (his beret toggles); this reads the exact pair
      // of properties the diagnostic in docs/briefs/g7b-pre-visit-fixes.md
      // used to confirm the fault, and the fix, directly on the live scene —
      // material type and the presence of an ink hull, not "install()
      // returned true" (looks.js's own stats() comment: that only proves the
      // function ran).
      //
      // THE CONTROL, named per the brief: the identical read under
      // `?look=none`, which must show the plain material and no hull — that
      // is what isolates the LOOK's contribution from "he has some material
      // or other", the same isolation the S1 region's zero-width control
      // uses. Reset to 'none' at the end either way, since that is the
      // default boot every later region in this file assumes.
      const pompleMaterials = async () => page.evaluate(() => {
        const g = window.__mcgrotsDebug.scene.getObjectByName('pomple');
        const at = (name) => g.getObjectByName(name)?.material?.type || null;
        const hull = (name) => !!g.getObjectByName(`hull:${name}`);
        return {
          body: at('pomple:body'), head: at('pomple:head'),
          hullBody: hull('pomple:body'), hullHead: hull('pomple:head'),
        };
      });
      await page.evaluate(() => { window.__mcgrotsDebug.setLook('aerial'); window.__mcgrotsDebug.stepFrames(1); });
      const inkedRead = await pompleMaterials();
      check('F21: pomple is cel-shaded and inked under a look (?look=aerial)',
        inkedRead.body === 'MeshToonMaterial' && inkedRead.head === 'MeshToonMaterial'
        && inkedRead.hullBody && inkedRead.hullHead,
        `body=${inkedRead.body} head=${inkedRead.head} hullBody=${inkedRead.hullBody} hullHead=${inkedRead.hullHead}`);

      await page.evaluate(() => { window.__mcgrotsDebug.setLook('none'); window.__mcgrotsDebug.stepFrames(1); });
      const plainRead = await pompleMaterials();
      check('F21 control: under ?look=none he stays plain, un-inked (isolates the look\'s contribution)',
        plainRead.body === 'MeshLambertMaterial' && plainRead.head === 'MeshLambertMaterial'
        && !plainRead.hullBody && !plainRead.hullHead,
        `body=${plainRead.body} head=${plainRead.head} hullBody=${plainRead.hullBody} hullHead=${plainRead.hullHead}`);

      check('console still clean after driving the pomple region',
        consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');
    }

    // ------------------------------------------------------------- mcgrot ---
    // G6b.2. `pomple.js`'s `MCGROT_LOCAL` was a placed assumption with nothing
    // standing there to check it against; `mcgrot.js` is the real figure, and
    // this region gates the same claim the van/pomple/statue regions already
    // gate for a rendered prop — visible on screen, not just a scene-graph
    // entry (AGENTS.md's own invariant, and F19/F20's lesson) — plus the one
    // thing this unit actually adds: a beret, checked directly rather than
    // trusted to have worked because the geometry was added.
    if (wants('mcgrot')) {
      const ids = await page.evaluate(() => window.__mcgrotsDebug.anchorIds());
      const rows = [];
      for (const id of ids) {
        const rect = await page.evaluate((a) => {
          const d = window.__mcgrotsDebug;
          d.setMarkersVisible(false);
          d.snapTo(a);
          d.stepFrames(2);
          const mcgrot = d.scene.getObjectByName('mcgrot');
          if (!mcgrot) return null;
          const box = new d.THREE.Box3().setFromObject(mcgrot);
          let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity, anyInFront = false;
          for (const x of [box.min.x, box.max.x]) {
            for (const y of [box.min.y, box.max.y]) {
              for (const z of [box.min.z, box.max.z]) {
                const p = new d.THREE.Vector3(x, y, z).project(d.camera);
                if (p.z < 1) anyInFront = true;
                x0 = Math.min(x0, p.x); x1 = Math.max(x1, p.x);
                y0 = Math.min(y0, p.y); y1 = Math.max(y1, p.y);
              }
            }
          }
          const clamp01 = (v) => Math.max(0, Math.min(1, v));
          const ux0 = clamp01(x0 * 0.5 + 0.5), ux1 = clamp01(x1 * 0.5 + 0.5);
          const uy0 = clamp01(1 - (y1 * 0.5 + 0.5)), uy1 = clamp01(1 - (y0 * 0.5 + 0.5));
          return { ux0, ux1, uy0, uy1, anyInFront };
        }, id);
        const buf = await page.screenshot({ type: 'png' });
        writeFileSync(join(OUT, `mcgrot-${id}.png`), buf);
        rows.push({ id, rect, buf });
      }

      // Measured across all five anchors before picking this band (same
      // technique and the same 0.3%/70% band as the van region — his
      // measured range, 0.649%-4.051%, sits inside it with real margin on
      // both sides, so the band is not stretched to fit him): >0.3% rules
      // out a handful of stray pixels, <70% rules out a projection bug
      // reading as "fills the shot". THIS IS THE WEAK CHECK, and named as
      // such: `Box3().setFromObject` walks descendants regardless of
      // `.visible` (measured directly here, the same fact the statue region
      // documents about itself) — it proves the rig loaded and sits at a
      // sensible spot, not that anything actually drew. The toggle checks
      // below are what prove that.
      const areaOf = (r) => r ? Math.max(0, r.ux1 - r.ux0) * Math.max(0, r.uy1 - r.uy0) : 0;
      const areaRows = rows.map((v) => ({ id: v.id, area: areaOf(v.rect), rect: v.rect }));
      const badArea = areaRows.filter((v) => !v.rect || !v.rect.anyInFront || v.area < 0.003 || v.area > 0.7);
      check('mcgrot occupies a sensible fraction of the frame at every anchor (existence only — see the toggle checks below for visibility)',
        badArea.length === 0,
        areaRows.map((v) => `${v.id} ${(v.area * 100).toFixed(2)}%`).join(' / '));

      // Shared by both toggle checks below: mean absolute luminance diff
      // between two captures, inside one unit-rect only.
      const meanAbsDiffRect = (bufA, bufB, r) => {
        const a = PNG.sync.read(bufA), b = PNG.sync.read(bufB);
        const px0 = Math.max(0, Math.round(r.ux0 * a.width));
        const px1 = Math.min(a.width - 1, Math.round(r.ux1 * a.width));
        const py0 = Math.max(0, Math.round(r.uy0 * a.height));
        const py1 = Math.min(a.height - 1, Math.round(r.uy1 * a.height));
        let sum = 0, n = 0;
        for (let y = py0; y <= py1; y++) {
          for (let x = px0; x <= px1; x++) {
            const o = (y * a.width + x) * 4;
            const la = 0.2126 * a.data[o] + 0.7152 * a.data[o + 1] + 0.0722 * a.data[o + 2];
            const lb = 0.2126 * b.data[o] + 0.7152 * b.data[o + 1] + 0.0722 * b.data[o + 2];
            sum += Math.abs(la - lb); n++;
          }
        }
        return n ? sum / n : 0;
      };

      // THE ACTUAL VISIBILITY CHECK, and why it is a toggle rather than the
      // van/pomple regions' static "not flat" technique. FAULT-INJECTED
      // first (`actor.group.visible = false` in mcgrot.js): the static
      // stddev-vs-flattest-corner check the van/pomple regions use STAYED
      // GREEN with the whole figure invisible (stddev 21.0-30.3 against a
      // flat-corner control of 0.0, comfortably over that check's own +10
      // floor) — his rect overlaps the van's own counter, shelf and
      // sauce-bottle detail behind him, which is plenty of "not flat" all by
      // itself. This is the exact weak-independence the brief's own pointer
      // (docs/MCGROTS-ROADMAP.md § 10, F20) warns a check can have at this
      // spot, measured directly rather than assumed. So this checks HIM,
      // specifically: `mcgrot` toggled invisible in the SAME boot, same
      // anchor, diffed inside his own rect only — the technique the beret
      // check below and the statue region already use, not copied from
      // van/pomple's weaker one.
      const mcgrotRows = [];
      for (const v of rows) {
        const r = v.rect;
        if (!r) { mcgrotRows.push({ id: v.id, diff: 0, missing: true }); continue; }
        await page.evaluate((a) => {
          const d = window.__mcgrotsDebug;
          d.snapTo(a);
          d.stepFrames(2);
        }, v.id);
        const withOn = await page.screenshot({ type: 'png' });
        const originalVisible = await page.evaluate(() => {
          const g = window.__mcgrotsDebug.scene.getObjectByName('mcgrot');
          const vis = g.visible; g.visible = false; window.__mcgrotsDebug.stepFrames(1);
          return vis;
        });
        const withOff = await page.screenshot({ type: 'png' });
        await page.evaluate((vis) => {
          const g = window.__mcgrotsDebug.scene.getObjectByName('mcgrot');
          g.visible = vis; window.__mcgrotsDebug.stepFrames(1);
        }, originalVisible);
        mcgrotRows.push({ id: v.id, diff: meanAbsDiffRect(withOn, withOff, r) });
      }
      // >3 rules out anti-aliasing noise on an unchanged frame — a dry run
      // (two captures with him already invisible in both) reads exactly 0.0
      // at every anchor tried, same as the beret's own dry run below; this
      // renderer is deterministic (CLAUDE.md), so any positive reading is
      // real signal. Measured range with him genuinely toggling, all five
      // anchors: see the landing commit for the numbers this was judged
      // against.
      const badMcgrot = mcgrotRows.filter((v) => v.missing || v.diff <= 3);
      check('the mcgrot rect changes when toggled off in the same boot, at every anchor (control: same toggle, dry run reads 0.0)',
        badMcgrot.length === 0,
        mcgrotRows.map((v) => v.missing ? `${v.id} MISSING` : `${v.id} diff=${v.diff.toFixed(1)}`).join(' / '));

      // THE BERET. This is the whole unit, so it is gated directly rather
      // than trusted to have worked because the geometry was added — the
      // statue's own carried lesson (F9: existence is not visibility) and
      // Pomplé's (F19: a green gate that never looked at the actual mesh).
      // THE CONTROL, named per the brief: `mcgrot:beret` toggled invisible in
      // the SAME boot, same anchor, and the mean-absolute-luminance diff
      // measured only inside the BERET's own projected rect (not his whole
      // body) — isolating the beret's own contribution from the rest of him,
      // the same isolation the statue region uses against the van/massing
      // behind it, and the check above now uses for him. A DRY RUN first
      // (two captures with the beret already off in both) reads EXACTLY 0.0
      // at every anchor tried — this renderer is deterministic (CLAUDE.md),
      // so any positive reading below is real signal, not noise. Measured
      // range with the beret genuinely toggling, all five anchors:
      // 11.09-29.24 (default boot, no `?look=` — the same boot this check
      // actually runs under). No anchor is diluted the way the statue's
      // `counter` reading is: the beret's own rect sits at the TOP of his
      // silhouette, mostly clear of the player's own capsule standing at the
      // counter anchor's viewing spot in front of him.
      const beretRows = [];
      for (const v of rows) {
        const beretRect = await page.evaluate((a) => {
          const d = window.__mcgrotsDebug;
          d.snapTo(a);
          d.stepFrames(2);
          const beret = d.scene.getObjectByName('mcgrot')?.getObjectByName('mcgrot:beret');
          if (!beret) return null;
          const box = new d.THREE.Box3().setFromObject(beret);
          let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
          for (const x of [box.min.x, box.max.x]) {
            for (const y of [box.min.y, box.max.y]) {
              for (const z of [box.min.z, box.max.z]) {
                const p = new d.THREE.Vector3(x, y, z).project(d.camera);
                x0 = Math.min(x0, p.x); x1 = Math.max(x1, p.x);
                y0 = Math.min(y0, p.y); y1 = Math.max(y1, p.y);
              }
            }
          }
          const clamp01 = (val) => Math.max(0, Math.min(1, val));
          return {
            ux0: clamp01(x0 * 0.5 + 0.5), ux1: clamp01(x1 * 0.5 + 0.5),
            uy0: clamp01(1 - (y1 * 0.5 + 0.5)), uy1: clamp01(1 - (y0 * 0.5 + 0.5)),
          };
        }, v.id);
        if (!beretRect) { beretRows.push({ id: v.id, diff: 0, missing: true }); continue; }

        const withOn = await page.screenshot({ type: 'png' });
        const originalVisible = await page.evaluate(() => {
          const b = window.__mcgrotsDebug.scene.getObjectByName('mcgrot').getObjectByName('mcgrot:beret');
          const vis = b.visible; b.visible = false; window.__mcgrotsDebug.stepFrames(1);
          return vis;
        });
        const withOff = await page.screenshot({ type: 'png' });
        await page.evaluate((vis) => {
          const b = window.__mcgrotsDebug.scene.getObjectByName('mcgrot').getObjectByName('mcgrot:beret');
          b.visible = vis; window.__mcgrotsDebug.stepFrames(1);
        }, originalVisible);
        beretRows.push({ id: v.id, diff: meanAbsDiffRect(withOn, withOff, beretRect) });
      }
      // >3 rules out anti-aliasing noise on an unchanged frame (the dry run
      // above measured exactly 0.0, not just "under 3" — there is no
      // dithering in this renderer's deterministic output); every anchor's
      // real, measured range (11.09-29.24) clears it with wide margin.
      const badBeret = beretRows.filter((v) => v.missing || v.diff <= 3);
      check('the beret is on his head and visible — on/off diff inside the beret\'s own rect, at every anchor (control: same toggle, dry run reads 0.0)',
        badBeret.length === 0,
        beretRows.map((v) => v.missing ? `${v.id} MISSING` : `${v.id} diff=${v.diff.toFixed(1)}`).join(' / '));

      // F22: at `counter` the player's own body used to sit between the
      // camera and McGrot, covering roughly his middle third
      // (docs/briefs/g7b-pre-visit-fixes.md § F22). main.js now hides the
      // player's own body when the camera sits far enough behind it
      // (`SELF_OCCLUDE_HIDE_DIST`, measured per-anchor there).
      //
      // COUNTS PIXELS, not a mean diff — the mean-diff toggle above answers
      // "did something change"; this answers "how much of him is actually
      // visible", which a mean cannot: a small bright patch and a large dim
      // one can read the same mean while covering very different fractions of
      // his own rect. Same on/off toggle technique as the checks above
      // (mcgrot hidden vs shown, diffed inside his own AABB rect), counting
      // pixels that cross a luminance threshold rather than averaging them.
      //
      // THE CONTROL, named per the brief: the identical measurement with the
      // fix disabled (`setSelfOcclusion(false)`) — the capsule is a real,
      // depth-tested object, so with the fix off it occludes him exactly as
      // it did before this unit, and the SAME on/off-diff technique counts
      // fewer of his pixels as ever being frontmost. "He is visible" would
      // pass trivially even occluded (he always was, partly) — this proves
      // the fix's own contribution instead of assuming it.
      const countDiffPixels = (bufA, bufB, r) => {
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
      };
      // MEASURED UNDER THE SHIPPED LOOK, not the region's default `?look=
      // none` boot — under Lambert (no look installed) McGrot renders as a
      // near-black silhouette (main.js's own "NO FILL LIGHT" note above), so
      // his luminance sits close enough to shadow that the diff threshold
      // undercounts him regardless of occlusion (measured: ~15% at EVERY
      // anchor, not just counter, so that number was reading the material,
      // not the fault). Aerial (S2, the settled style) is what Dan actually
      // sees during the visit and is what separates cleanly — see the floor
      // comment below.
      //
      // SETTLES 4 FRAMES after install, the style region's own established
      // number for a fresh cel/hull material (its S1/S2 checks below:
      // `setLook('inked'); stepFrames(4)`) — a new shader needs a compile.
      //
      // CLOCK PINNED TO A KNOWN-EMPTY MOMENT (rota.js: `whatTheyAreDoing(980)`
      // is null — the same reference point the rota region's own sequence
      // strip uses for '1-empty'). Without this the region ran on the REAL
      // wall clock (`rotaNow()`'s fallback), and rota.js's own reader stands
      // at `SPOT_LOCAL = [0.35, 2.1]` — almost exactly McGrot's own position
      // ([0.35, 1.3]) and directly between him and the `counter` camera.
      // Found by opening a failing run's own capture: the "un-inked" 15.5%
      // reading was not a material or compile race at all — it was a second
      // figure standing in front of him, present roughly half of any given
      // real-time window (readings.json's average duration is close to
      // GAP_S). This is why the fault reproduced in clean bursts (many runs
      // in a row landing inside the same real-time visit window) rather than
      // as independent per-run noise, which is what actually ruled out a
      // rendering race.
      await page.evaluate(() => window.__mcgrotsDebug.rota.setClock(980));
      await page.evaluate(() => { window.__mcgrotsDebug.setLook('aerial'); window.__mcgrotsDebug.stepFrames(4); });

      const counterRow = rows.find((v) => v.id === 'counter');
      const mcgrotVisiblePixelFraction = async () => {
        const r = counterRow.rect;
        await page.evaluate(() => { window.__mcgrotsDebug.snapTo('counter'); window.__mcgrotsDebug.stepFrames(2); });
        const withOn = await page.screenshot({ type: 'png' });
        const originalVisible = await page.evaluate(() => {
          const g = window.__mcgrotsDebug.scene.getObjectByName('mcgrot');
          const vis = g.visible; g.visible = false; window.__mcgrotsDebug.stepFrames(1);
          return vis;
        });
        const withOff = await page.screenshot({ type: 'png' });
        await page.evaluate((vis) => {
          const g = window.__mcgrotsDebug.scene.getObjectByName('mcgrot');
          g.visible = vis; window.__mcgrotsDebug.stepFrames(1);
        }, originalVisible);
        return countDiffPixels(withOn, withOff, r);
      };

      const fixOnFraction = await mcgrotVisiblePixelFraction();
      await page.evaluate(() => window.__mcgrotsDebug.setSelfOcclusion(false));
      const fixOffFraction = await mcgrotVisiblePixelFraction();
      await page.evaluate(() => window.__mcgrotsDebug.setSelfOcclusion(true));

      // FLOOR MEASURED, not guessed at 50% (the first attempt, which failed
      // against the fix's own correct output). A humanoid AABB is never
      // fully filled by its own silhouette — gaps beside the arms, above the
      // shoulders, between the legs — so even a totally unoccluded figure
      // never reads close to 100%. Measured at all five anchors with the fix
      // ON (`scripts/mcgrots-shot.mjs -f`, one-off, not committed): counter
      // 30.2%, wall 29.1%, kerb 28.8%, far 33.7%, back 30.3% — i.e. counter
      // WITH THE FIX matches the natural, unoccluded range everywhere else,
      // not a degraded version of it. Fix disabled measures 15.7%, roughly
      // half. 20% sits above the occluded reading with margin and below the
      // natural range with more.
      check('F22: McGrot is not occluded at counter — his own visible-pixel fraction clears a floor',
        fixOnFraction > 0.2,
        `on-arm: ${(fixOnFraction * 100).toFixed(1)}% of his AABB rect is actually his (>20% required, natural unoccluded range ~29-34%)`);
      check('F22 control: with the fix disabled, the same measurement comes in materially lower',
        fixOffFraction < fixOnFraction * 0.8,
        `fix on=${(fixOnFraction * 100).toFixed(1)}% fix off=${(fixOffFraction * 100).toFixed(1)}%`);

      // F22 FOLLOW-UP (found by Dan on a detached worktree, re-measured here):
      // the pinned-980 check above proves the PLAYER's own body no longer
      // occludes him. It says nothing about rota.js's reader, who used to
      // stand at the same x as McGrot ([0.35, 2.1] vs his own [0.35, 1.3] —
      // rota.js predates him; see rota.js's own SPOT_LOCAL comment) and read
      // as a featureless capsule over his torso, apron and right arm on the
      // real clock. That figure was also the F22 gate's actual flake source
      // (see the gate-flake commit) — pinning the clock made the gate
      // deterministic and silently hid this second, real fault behind it.
      //
      // rota.js's SPOT_LOCAL is now [-1.5, 2.1] (moved beside the counter,
      // clear of both McGrot and Pomplé — see that file's own comment for
      // the candidate renders this was picked from). Gated here on clocks
      // where a reader IS PRESENT (not the pinned-980 empty moment above),
      // covering the phases a real visit actually passes through: arriving,
      // mid-reading, leaving. Same `mcgrotVisiblePixelFraction` measurement
      // and the same floor as the check above — the claim is "the reader
      // does not reopen F22", not a new threshold.
      const readerPresentFractions = {};
      for (const wc of [995, 1020, 1050]) {
        await page.evaluate((w) => window.__mcgrotsDebug.rota.setClock(w), wc);
        readerPresentFractions[wc] = await mcgrotVisiblePixelFraction();
      }
      const badReaderPresent = Object.entries(readerPresentFractions).filter(([, f]) => f <= 0.2);
      check('F22 follow-up: the rota reader does not reopen the counter occlusion, at every phase of a visit',
        badReaderPresent.length === 0,
        Object.entries(readerPresentFractions).map(([wc, f]) => `t=${wc} ${(f * 100).toFixed(1)}%`).join(' / ') + ' (>20% required, each)');

      // Back to the region's own default boot (`?look=none`, real wall clock)
      // for whatever runs after this block.
      await page.evaluate(() => window.__mcgrotsDebug.setLook('none'));
      await page.evaluate(() => window.__mcgrotsDebug.rota.clearClock());

      check('console still clean after driving the mcgrot region',
        consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');
    }

    // -------------------------------------------------------------- seat ---
    // G3c built this region on "nothing guarantees the hip lands over the
    // seat", which is true but incomplete: the hip has ZERO local x/z offset
    // in ANY pose (measured, § F1), so a check that only looks at the hip is
    // blind to the LEGS — flip the thigh's sign and this region stayed 38/38
    // (G3e brief, § F10). Rewritten to also measure the knee, which is where
    // F1's actual defect lived. Own navigation (skinned body: the
    // capsule/segmented/flats candidates have no `hips` bone to measure), so
    // this does not inherit whatever body the `anchors` region above left the
    // page on.
    if (wants('seat')) {
      await page.goto(`http://127.0.0.1:${port}/mcgrots.html?body=skinned&archetype=rab`,
        { waitUntil: 'load' });
      await page.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
      await page.evaluate(() => window.__mcgrotsDebug.card.dismiss());
      await page.evaluate(() => window.__mcgrotsDebug.pauseAuto());

      // Reads the SHIPPED scene, not a helper that recomputes the ledge's own
      // offsets: the seat's world box comes from `THREE.Box3().setFromObject`
      // on the actual mesh group `main.js` builds, and the hip/knee come from
      // `getWorldPosition` on the actual skeleton bones — same technique as the
      // van region's AABB-projection check (G3a), for the same reason. A helper
      // that re-derives "where the ledge should be" from the same constants the
      // product uses would pass even if the product's own placement code had a
      // sign error, since it would be checking the constants against
      // themselves. `fx`/`fz` come from the anchor's own `yaw` (anchors.js,
      // independent of main.js's ledge-placement code), not from a copy of
      // `SEAT_DEPTH`/`CAP_OVERHANG`.
      const measure = (anchorId, sit) => page.evaluate(({ anchorId, sit }) => {
        const d = window.__mcgrotsDebug;
        // `d.snapTo` runs `goTo(id, { snap: true })`, which sets `current` to
        // this anchor — and `frame()` (main.js) re-asserts `'sit'` every frame
        // whenever `current.sit` is true and the actor isn't walking ("Park
        // state resolves on arrival, so a sitting spot only sits once
        // reached"). That auto-resit stomped the very first version of this
        // control: forcing `'idle'` here looked like it worked for one frame
        // and then silently reverted, so standing measured the SAME hip height
        // as seated. Positioning the actor directly (bypassing `goTo`, so
        // `current` never becomes this anchor) is what makes `'idle'` actually
        // stick for the control.
        const a = d.anchors.find((x) => x.id === anchorId);
        d.actor.snapTo(a.pos.x, a.pos.z, a.yaw);
        d.setActorState(sit ? 'sit' : 'idle');
        d.stepFrames(150);
        let mesh = null;
        d.scene.traverse((o) => { if (o.isSkinnedMesh) mesh = o; });
        const bones = mesh.skeleton.bones;
        const hips = bones.find((b) => b.name === 'hips');
        const shinL = bones.find((b) => b.name === 'shinL');
        const shinR = bones.find((b) => b.name === 'shinR');
        const wp = new d.THREE.Vector3();
        hips.getWorldPosition(wp);
        const kneeL = new d.THREE.Vector3();
        shinL.getWorldPosition(kneeL);
        const kneeR = new d.THREE.Vector3();
        shinR.getWorldPosition(kneeR);
        // McGrot's actor faces (+sin yaw, +cos yaw) — the OPPOSITE of the
        // street's (-sin yaw, -cos yaw) that CLAUDE.md documents (AGENTS.md §
        // invariants). Confirmed by walking the actor and sampling travel,
        // which needs no convention: `facingAgreesWithPlusSinCos = 1.0000`.
        const fx = Math.sin(a.yaw), fz = Math.cos(a.yaw);
        const px = -fz, pz = fx;
        const along = (p) => (p.x - wp.x) * fx + (p.z - wp.z) * fz;
        const seatGroup = d.scene.getObjectByName(`seat:${anchorId}`);
        const b3 = seatGroup ? new d.THREE.Box3().setFromObject(seatGroup) : null;
        const centre = b3 ? { x: (b3.min.x + b3.max.x) / 2, y: (b3.min.y + b3.max.y) / 2, z: (b3.min.z + b3.max.z) / 2 } : null;
        return {
          hip: { x: wp.x, y: wp.y, z: wp.z },
          kneeAlong: (along(kneeL) + along(kneeR)) / 2,
          box: b3 ? { min: { x: b3.min.x, y: b3.min.y, z: b3.min.z }, max: { x: b3.max.x, y: b3.max.y, z: b3.max.z } } : null,
          // The box's AABB centroid coincides with the true centroid of the
          // holder's own (Y-rotated) footprint, whatever that rotation is —
          // rotation about a shape's own centroid does not move it. So this is
          // the built ledge's real world position, not a re-derived one.
          lateralFromCentre: centre ? (wp.x - centre.x) * px + (wp.z - centre.z) * pz : null,
          alongFromCentre: centre ? (wp.x - centre.x) * fx + (wp.z - centre.z) * fz : null,
        };
      }, { anchorId, sit });

      const rows = [];
      for (const id of ['wall', 'kerb']) {
        rows.push({ id, seated: await measure(id, true), standing: await measure(id, false) });
      }

      // THE CHECK THAT WOULD HAVE CAUGHT F1 (§ F10): the knee's offset from the
      // hip, projected on the actor's facing, required POSITIVE — a backward
      // thigh sign puts this negative regardless of where the ledge sits, which
      // is exactly the fault the old hip-only check could not see (the hip has
      // zero horizontal offset in every pose, § F1). Measured at full sit:
      // ~0.34 m forward, both anchors.
      const KNEE_MIN = 0.15; // comfortably between 0 (no swing) and the ~0.34 m measured
      const kneeBad = rows.filter((r) => r.seated.kneeAlong <= KNEE_MIN);
      check('the seated knee sits forward of the hip, at both sitting anchors',
        kneeBad.length === 0,
        rows.map((r) => `${r.id} knee-along-facing=${r.seated.kneeAlong.toFixed(3)}`).join(' / '));

      // CONTROL: standing at the same anchor. The rest pose has (near) zero
      // thigh rotation, so this metric reads close to zero rather than
      // positive — proving the check is reading the SIT pose's thigh swing,
      // not some fixed property of the rig or the anchor.
      const KNEE_STAND_TOL = 0.05;
      const kneeControlBad = rows.filter((r) => Math.abs(r.standing.kneeAlong) > KNEE_STAND_TOL);
      check('standing knee stays near the hip, at both sitting anchors (control)',
        kneeControlBad.length === 0,
        rows.map((r) => `${r.id} standing knee-along-facing=${r.standing.kneeAlong.toFixed(3)}`).join(' / '));

      // THE LEDGE-PLACEMENT CHECKS G3c ORIGINALLY WROTE — honest, and kept:
      // they prove the ledge is built at the anchor and that the sit state
      // applies its drop. What changed is the SPEC each asserts, not their
      // job. Lateral (across the seat, perpendicular to facing) is unaffected
      // by G3e's along-facing offset and stays a tight centring check.
      // Along-facing can no longer be "centred" — the offset deliberately
      // moves the ledge so its FRONT edge, not its centre, sits under the
      // hip (§ F8) — so this only proves the offset exists, is behind the
      // actor (not in front, and not zero), by checking sign and a
      // comfortably-below-measured floor rather than pinning the exact
      // SEAT_DEPTH/CAP_OVERHANG arithmetic main.js itself derives it from.
      const LATERAL_TOL = 0.10;
      const ALONG_MIN = 0.15; // measured ~0.325 m; floor is well short of it
      const placementBad = rows.filter((r) => Math.abs(r.seated.lateralFromCentre) > LATERAL_TOL
        || r.seated.alongFromCentre === null || r.seated.alongFromCentre <= ALONG_MIN);
      check('the ledge is centred laterally and offset behind the anchor, at both sitting anchors',
        placementBad.length === 0,
        rows.map((r) => `${r.id} lateral=${r.seated.lateralFromCentre?.toFixed(3)} along=${r.seated.alongFromCentre?.toFixed(3)}`).join(' / '));

      // Vertical: NOT equality against the cap top (§ F10 — that "requires the
      // hip bone to sit at the stone surface", encoding the second open defect
      // as the spec). A band instead: the hip must not sink below the cap top
      // at all, and stays within a margin well short of standing's ~0.22 m
      // gap, so the band still tells seated from standing apart without
      // demanding the exact-surface reading that caused F8.
      const HIP_BAND_MIN = -0.02;
      const HIP_BAND_MAX = 0.15;
      const heightBad = rows.filter((r) => {
        if (!r.seated.box) return true;
        const d = r.seated.hip.y - r.seated.box.max.y;
        return d < HIP_BAND_MIN || d > HIP_BAND_MAX;
      });
      check('the seated hip sits at or just above the ledge top, at both sitting anchors',
        heightBad.length === 0,
        rows.map((r) => `${r.id} hip.y=${r.seated.hip.y.toFixed(2)} ledge-top=${r.seated.box ? r.seated.box.max.y.toFixed(2) : 'missing'}`).join(' / '));

      // CONTROL for the height band: standing's ~0.22 m gap (SEAT_DROP) must
      // fall OUTSIDE the same band, or the band is too loose to mean anything.
      const heightControlBad = rows.filter((r) => {
        if (!r.standing.box) return false;
        const d = r.standing.hip.y - r.standing.box.max.y;
        return d >= HIP_BAND_MIN && d <= HIP_BAND_MAX;
      });
      check('standing at the same anchor falls outside the seated height band (control)',
        heightControlBad.length === 0,
        rows.map((r) => `${r.id} standing hip.y=${r.standing.hip.y.toFixed(2)} ledge-top=${r.standing.box ? r.standing.box.max.y.toFixed(2) : 'missing'}`).join(' / '));

      check('console clean after driving the seat region',
        consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');
    }

    // --------------------------------------------------------------- rota ---
    // G4a. Who is at the pitch, driven by wall-clock time, never session start.
    // The camera-independence check is the important one here (Dan's ruling,
    // 2026-08-12: actors must not affect the camera) — everything else is the
    // schedule's own correctness.
    if (wants('rota')) {
      await page.evaluate(() => window.__mcgrotsDebug.rota.clearClock());

      // --- the schedule is a pure function of the clock -----------------------
      const cycleLen = await page.evaluate(() => window.__mcgrotsDebug.rota.cycleSeconds());
      const half = cycleLen / 2;
      const purity = await page.evaluate((h) => {
        const d = window.__mcgrotsDebug;
        const t = 42;
        return { a1: d.rota.whoIsHere(t), a2: d.rota.whoIsHere(t), b: d.rota.whoIsHere(t + h) };
      }, half);
      check('the schedule is a pure function of the clock — same timestamp, same rota',
        purity.a1 === purity.a2,
        `whoIsHere(42) called twice: ${JSON.stringify(purity.a1)} then ${JSON.stringify(purity.a2)}`);
      // The control: without this, "same timestamp -> same result" would pass
      // for a schedule that ignores the clock entirely and always returns the
      // same thing.
      check('...and a different timestamp gives a different rota (control)',
        purity.a1 !== purity.b,
        `t=42 -> ${JSON.stringify(purity.a1)}; t+${half.toFixed(0)} -> ${JSON.stringify(purity.b)}`);

      // --- one reader at a time, across the whole schedule --------------------
      // `overlapCount` reads the actual visit timeline, not `whoIsHere` (which
      // would silently return its first match even if two windows overlapped)
      // — see its comment in rota.js. Scanned across a FULL cycle, not a
      // sampled moment, because a bug that only shows up on one comic's
      // duration would survive a single spot-check.
      const overlap = await page.evaluate((cycleSecs) => {
        const d = window.__mcgrotsDebug;
        let maxCount = 0;
        let firstBad = null;
        for (let t = 0; t < cycleSecs; t += 2) {
          const n = d.rota.overlapCount(t);
          if (n > maxCount) maxCount = n;
          if (n > 1 && firstBad === null) firstBad = t;
        }
        return { maxCount, firstBad };
      }, cycleLen);
      check('one reader at a time across the whole schedule',
        overlap.maxCount <= 1,
        overlap.maxCount <= 1
          ? `max concurrent visits 1, scanned a full ${cycleLen.toFixed(0)}s cycle`
          : `${overlap.maxCount} concurrent visits at t=${overlap.firstBad}`);

      // --- camera independence -------------------------------------------------
      // THE load-bearing check in this unit (Dan's ruling). Two boots, ONE
      // scripted anchor sequence, run identically on both: the "on" arm has the
      // rota loaded and forces an active visit throughout (t=1000 is a live
      // reading, confirmed below); the "off" arm never calls loadRota(), so
      // `whatTheyAreDoing` returns null forever and no reader ever exists. If
      // any actor influenced the camera by any path, the two arms' sampled
      // camera transforms would diverge. The rota clock is advanced FASTER than
      // the stepped render frames (2 wall-seconds per frame) so the ~5s of
      // rendered walk covers several arrive/read/leave cycles — the schedule
      // clock and the render clock are independent by design (rota.js), so
      // this is a legitimate way to exercise more schedule states per frame
      // stepped, not a shortcut that skips anything the game itself does.
      const runSequence = () => {
        const d = window.__mcgrotsDebug;
        d.setMarkersVisible(false);
        d.snapTo('back');
        let wallClock = 1000;
        d.rota.setClock(wallClock);
        const camera = [];
        let readerEverVisible = false;
        const record = () => {
          const s = d.state();
          const q = d.camera.quaternion;
          // Position AND orientation — a look-at bias with the eye pinned in
          // place (the realistic version of the mistake this gate exists to
          // catch) would be invisible to a position-only comparison.
          camera.push([s.camera.x, s.camera.y, s.camera.z, q.x, q.y, q.z, q.w]);
          if (s.reader?.visible) readerEverVisible = true;
        };
        const step = (n) => {
          for (let i = 0; i < n; i++) {
            wallClock += 2;
            d.rota.setClock(wallClock);
            d.stepFrames(1);
            record();
          }
        };
        record();
        d.goTo('far');
        step(90);
        d.goTo('counter');
        step(90);
        d.goTo('wall');
        step(90);
        d.rota.clearClock();
        return { camera, readerEverVisible };
      };

      const onRun = await page.evaluate(runSequence);
      check('the "on" arm actually has a reader visible during the sampled walk',
        onRun.readerEverVisible,
        onRun.readerEverVisible ? 'reader visible in at least one sampled frame' : 'reader never appeared — the control is not exercising the rota');

      const offPage = await browser.newPage({ viewport: { width: 1280, height: 720 } });
      const offErrors = [];
      offPage.on('console', (m) => { if (m.type() === 'error') offErrors.push(m.text()); });
      offPage.on('pageerror', (e) => offErrors.push(String(e)));
      await offPage.goto(`http://127.0.0.1:${port}/mcgrots.html?rota=off`, { waitUntil: 'load' });
      await offPage.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
      await offPage.evaluate(() => window.__mcgrotsDebug.card.dismiss());
      await offPage.evaluate(() => window.__mcgrotsDebug.pauseAuto());
      const offRun = await offPage.evaluate(runSequence);
      await offPage.close();

      check('the "off" arm never has a reader (control boots identically otherwise)',
        !offRun.readerEverVisible,
        !offRun.readerEverVisible ? 'reader never appeared, as expected with rota=off' : 'reader appeared with rota=off — the control arm is not actually empty');
      check('console clean on the "off" arm',
        offErrors.length === 0, offErrors.slice(0, 3).join(' | ') || 'no errors');

      let maxDelta = 0, worstIdx = 0;
      const n = Math.min(onRun.camera.length, offRun.camera.length);
      for (let i = 0; i < n; i++) {
        const [ax, ay, az, aqx, aqy, aqz, aqw] = onRun.camera[i];
        const [bx, by, bz, bqx, bqy, bqz, bqw] = offRun.camera[i];
        const posDelta = Math.hypot(ax - bx, ay - by, az - bz);
        const quatDelta = Math.hypot(aqx - bqx, aqy - bqy, aqz - bqz, aqw - bqw);
        const delta = posDelta + quatDelta;
        if (delta > maxDelta) { maxDelta = delta; worstIdx = i; }
      }
      check('the camera is bit-identical whether the rota is populated or empty',
        onRun.camera.length === offRun.camera.length && maxDelta < 1e-9,
        onRun.camera.length !== offRun.camera.length
          ? `sample count differs: on=${onRun.camera.length} off=${offRun.camera.length}`
          : `max delta ${maxDelta.toExponential(2)}m across ${n} sampled frames (frame ${worstIdx})`);

      check('console still clean after driving the rota region',
        consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');

      // --- the sequence Dan looks at -------------------------------------------
      // Numeric gates cannot see a bad picture (CLAUDE.md / AGENTS.md), and this
      // unit is almost entirely something the player watches. A schedule that
      // is correct and reads as people teleporting in is a failure the checks
      // above cannot catch. Captured from the 'counter' anchor — the closest
      // shot to the reading spot — at four points in one visit's life, stepping
      // real render frames (not the fast wall-clock trick above) so the walk
      // itself animates naturally into and out of the strip.
      const visitAt = await page.evaluate((t) => window.__mcgrotsDebug.rota.whatTheyAreDoing(t), 1020);
      const sequenceShots = [];
      const capture = async (label, wallClock, settleFrames) => {
        await page.evaluate(({ wc, sf }) => {
          const d = window.__mcgrotsDebug;
          d.setMarkersVisible(false);
          d.snapTo('counter');
          d.rota.setClock(wc);
          d.stepFrames(sf);
        }, { wc: wallClock, sf: settleFrames });
        const buf = await page.screenshot({ type: 'png' });
        writeFileSync(join(OUT, `rota-${label}.png`), buf);
        sequenceShots.push(label);
      };
      await capture('1-empty', 980, 2);
      await capture('2-arriving', 995, 330);
      await capture('3-reading', 1020, 2);
      await capture('4-leaving', 1050, 90);
      await capture('5-empty', 1060, 2);
      await page.evaluate(() => window.__mcgrotsDebug.rota.clearClock());

      check('the sequence strip captured (open and look — numeric gates cannot see this)',
        sequenceShots.length === 5 && visitAt?.phase === 'reading',
        `${sequenceShots.length} frames written to docs/smoke/captures/mcgrots/g0/rota-*.png; ` +
        `t=1020 phase=${visitAt?.phase ?? 'null'}`);
    }

    // --------------------------------------------------------------- audio ---
    // G4b (2/2). Its own page, closed at the end of this block — the checks
    // below need a REAL, Playwright-synthesised click on the title card (CDP
    // input, not page.evaluate's JS dispatch), because Chromium's autoplay
    // policy gates AudioContext/media playback on genuine user activation. The
    // other regions' `card.dismiss()` calls are a synthetic DOM removal and
    // deliberately do not exercise this — they only need the overlay gone,
    // not audio actually running.
    if (wants('audio')) {
      const audioPage = await browser.newPage({ viewport: { width: 1280, height: 720 } });
      const audioErrors = [];
      const audioPageErrors = [];
      audioPage.on('console', (m) => { if (m.type() === 'error') audioErrors.push(m.text()); });
      audioPage.on('pageerror', (e) => audioPageErrors.push(String(e)));
      // F15 (G4 phase gate): element state (currentTime/paused/currentSrc/
      // playingId) is satisfied equally by silent playback — mediaEl.volume=0
      // left every existing check green with measured output at peak 0.000,
      // RMS 0.000. This taps the REAL signal path: wrap createMediaElementSource
      // so the same source that feeds the panner also feeds an analyser, parked
      // on window.__mcgrotsAnalyser. An AudioNode fans out to multiple
      // destinations without affecting either, so this changes nothing audio.js
      // does — it only gives the harness a second tap on the same signal.
      await audioPage.addInitScript(() => {
        const proto = (window.AudioContext || window.webkitAudioContext).prototype;
        const orig = proto.createMediaElementSource;
        proto.createMediaElementSource = function (el) {
          const src = orig.call(this, el);
          const analyser = this.createAnalyser();
          analyser.fftSize = 2048;
          src.connect(analyser);
          window.__mcgrotsAnalyser = analyser;
          return src;
        };
      });
      await audioPage.goto(`http://127.0.0.1:${port}/mcgrots.html`, { waitUntil: 'load' });
      await audioPage.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
      await audioPage.evaluate(() => window.__mcgrotsDebug.pauseAuto());

      // --- no sound before the gesture -----------------------------------------
      // Checked BEFORE the click below — this is the one thing in the region
      // that has to be true prior to any interaction.
      // F16 (G4 phase gate): this used to also require
      // `document.querySelectorAll('audio').length === 0`, which can never go
      // false — audio.js builds its element with `new Audio()` and never
      // appends it to the document, so that count is 0 at boot, mid-playback,
      // and forever. Only `!started` did any work. Dropped rather than kept
      // for appearance; see VALIDATION.md.
      const preGesture = await audioPage.evaluate(() => ({
        started: window.__mcgrotsDebug.readerAudio.started,
      }));
      check('no sound before the gesture — no AudioContext at boot',
        !preGesture.started,
        `started=${preGesture.started}`);

      await audioPage.click('#title-card'); // the real gesture
      await audioPage.evaluate(() => window.__mcgrotsDebug.card.dismiss()); // idempotent; belt and braces if the click alone left it

      // t=1020 is the same known-reading moment the rota region's sequence
      // capture already uses and inspects — reusing it rather than a fresh
      // sweep keeps this region's fixture identical to a picture Dan has
      // already opened.
      const visit = await audioPage.evaluate((t) => window.__mcgrotsDebug.rota.whatTheyAreDoing(t), 1020);
      const freshT = 1020 - visit.elapsed; // this same visit's own readStart

      // A bounded poll, never waitForFunction — every check in this region has
      // to degrade to a normal FAIL under a fault (a stuck AudioContext, a
      // 404'd file that never starts), not crash the process and hide every
      // other check's result along with it. Returns whatever state it last
      // saw, playing or not.
      const pollForPlaying = async (p, id, timeoutMs = 5000) => {
        let last = { currentTime: 0, currentSrc: null, playingId: null };
        const deadline = Date.now() + timeoutMs;
        while (Date.now() < deadline) {
          last = await p.evaluate(() => ({
            currentTime: window.__mcgrotsDebug.readerAudio.currentTime,
            currentSrc: window.__mcgrotsDebug.readerAudio.currentSrc,
            playingId: window.__mcgrotsDebug.readerAudio.playingId,
          }));
          if (last.playingId === id && last.currentTime > 0) return last;
          await new Promise((r) => setTimeout(r, 200));
        }
        return last;
      };

      // --- playback position tracks the rota clock -----------------------------
      // Mid-reading arrival: must start near `elapsed`, not near zero. This is
      // the brief's central risk — the obvious implementation (start from 0
      // whenever a reading becomes current) looks identical to the right one on
      // a fresh arrival and only diverges here.
      await audioPage.evaluate((t) => window.__mcgrotsDebug.rota.setClock(t), 1020);
      await audioPage.evaluate(() => window.__mcgrotsDebug.stepFrames(1));
      const midState = await pollForPlaying(audioPage, visit.id);
      const midDelta = Math.abs(midState.currentTime - visit.elapsed);
      check('a mid-reading arrival starts near elapsed, not near zero',
        midState.playingId === visit.id && midDelta < 2,
        midState.playingId === visit.id
          ? `elapsed=${visit.elapsed.toFixed(2)}s, playback started at ${midState.currentTime.toFixed(2)}s (delta ${midDelta.toFixed(2)}s)`
          : `never started playing id=${visit.id} (playingId=${midState.playingId}, currentTime=${midState.currentTime})`);

      // --- F15: the signal is actually audible, not just element state ---------
      // Reads the analyser tapped by the init script above. Polled, not a
      // single sample: the media element's play() and the WebAudio graph both
      // run on the real wall clock, decoupled from this harness's frozen rAF,
      // so the first sample or two after a seek can still be silence.
      const sampleRMS = async (p) => p.evaluate(() => {
        const a = window.__mcgrotsAnalyser;
        if (!a) return { peak: 0, rms: 0 };
        const data = new Uint8Array(a.fftSize);
        a.getByteTimeDomainData(data);
        let peak = 0, sumSq = 0;
        for (let j = 0; j < data.length; j++) {
          const v = (data[j] - 128) / 128;
          peak = Math.max(peak, Math.abs(v));
          sumSq += v * v;
        }
        return { peak, rms: Math.sqrt(sumSq / data.length) };
      });
      // Waits for audible output — the first sample or two after a seek can
      // still be silence, since play() and the WebAudio graph run on the real
      // wall clock, decoupled from this harness's frozen rAF.
      const waitForAudible = async (p, attempts = 10) => {
        for (let i = 0; i < attempts; i++) {
          const r = await sampleRMS(p);
          if (r.rms > 0.005) return r;
          await new Promise((res) => setTimeout(res, 150));
        }
        return { peak: 0, rms: 0 };
      };
      const midAudible = await waitForAudible(audioPage);
      check('a reading in progress produces real audio output, not just advancing element state',
        midAudible.rms > 0.005,
        `peak=${midAudible.peak.toFixed(3)} rms=${midAudible.rms.toFixed(3)} (must be >0.005)`);

      // Fresh-arrival control, same visit, same comic — isolates the CLOCK as
      // the only variable. Without this, an implementation that always seeks
      // to the same fixed offset (or that happened to be tested only at this
      // one t) would pass the check above for the wrong reason. A SEPARATE
      // page, not a clock rewind on `audioPage`: real wall-clock time never
      // moves backwards, and rewinding it on the same page leaves the module's
      // `currentId` already equal to `visit.id` from the mid-reading check
      // above, so the id-changed branch never re-fires — that would be testing
      // a scenario the real product never sees, not the fresh-arrival case.
      const freshPage = await browser.newPage({ viewport: { width: 1280, height: 720 } });
      await freshPage.goto(`http://127.0.0.1:${port}/mcgrots.html`, { waitUntil: 'load' });
      await freshPage.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
      await freshPage.evaluate(() => window.__mcgrotsDebug.pauseAuto());
      await freshPage.click('#title-card');
      await freshPage.evaluate((t) => window.__mcgrotsDebug.rota.setClock(t), freshT);
      await freshPage.evaluate(() => window.__mcgrotsDebug.stepFrames(1));
      const freshResult = await pollForPlaying(freshPage, visit.id);
      await freshPage.close();
      check('...and a fresh arrival of the SAME reading starts near zero (control)',
        freshResult.playingId === visit.id && freshResult.currentTime < 2,
        freshResult.playingId === visit.id
          ? `readStart=${freshT.toFixed(2)}s, playback started at ${freshResult.currentTime.toFixed(2)}s`
          : `never started playing id=${visit.id} (playingId=${freshResult.playingId})`);

      // --- the file that plays is the comic that is scheduled ------------------
      const scheduled = await audioPage.evaluate(() => ({
        id: window.__mcgrotsDebug.rota.whatTheyAreDoing(1020).id,
        src: window.__mcgrotsDebug.readerAudio.currentSrc,
      }));
      check('the file that plays is the comic that is scheduled',
        scheduled.src?.endsWith(`/${scheduled.id}.mp3`),
        `scheduled id=${scheduled.id}, playing src=${scheduled.src}`);

      // --- one voice at a time: a departure mid-file stops, does not fade ------
      // Jump the clock straight from inside the reading to well past its
      // departure window — real time hasn't passed for the media element, so
      // if nothing stopped it explicitly it would just still be playing.
      // +20s past readEnd: comfortably clear of DEPART_LEAD_S (7s, so this
      // visit's own window has definitely closed) and comfortably short of the
      // NEXT visit's arrive-lead window opening at GAP_S - ARRIVE_LEAD_S = 38s
      // past readEnd (rota.js's constants) — a genuinely empty pitch, not a
      // moment when a different reading has naturally started.
      const readStart = 1020 - visit.elapsed;
      const emptyGapT = readStart + visit.duration + 20;
      await audioPage.evaluate((t) => window.__mcgrotsDebug.rota.setClock(t), emptyGapT);
      await audioPage.evaluate(() => window.__mcgrotsDebug.stepFrames(1));
      // A bounded poll, not waitForFunction — a broken "never stop" fault must
      // read as a normal FAIL below, not crash the whole suite on a timeout.
      let afterDepart = { paused: false, playingId: visit.id };
      for (let i = 0; i < 20; i++) {
        afterDepart = await audioPage.evaluate(() => ({
          paused: window.__mcgrotsDebug.readerAudio.paused,
          playingId: window.__mcgrotsDebug.readerAudio.playingId,
        }));
        if (afterDepart.paused) break;
        await new Promise((r) => setTimeout(r, 250));
      }
      check('a reader leaving mid-file eventually stops playback (bounded by the 5s poll; see F17 in VALIDATION.md for what this does not prove)',
        afterDepart.paused && afterDepart.playingId === null,
        `paused=${afterDepart.paused} playingId=${afterDepart.playingId}`);

      // --- F15 control: an empty pitch produces no output --------------------
      // A brief wait first — the analyser's 2048-sample window (~46ms) can
      // still hold the tail end of the just-paused element's output on the
      // very first read after `paused` flips true. Three samples after that,
      // worst (highest) RMS taken — a single sample landing on silence by luck
      // would understate the bar a real fault has to clear.
      await new Promise((r) => setTimeout(r, 300));
      const gapSamples = [await sampleRMS(audioPage), await sampleRMS(audioPage), await sampleRMS(audioPage)];
      const gapSilent = gapSamples.reduce((a, b) => (b.rms > a.rms ? b : a));
      check('...and an empty pitch produces no output (control)',
        gapSilent.rms <= 0.005,
        `peak=${gapSilent.peak.toFixed(3)} rms=${gapSilent.rms.toFixed(3)} (must be <=0.005)`);

      await audioPage.evaluate(() => window.__mcgrotsDebug.rota.clearClock());

      check('console clean after driving the audio region',
        audioErrors.length === 0 && audioPageErrors.length === 0,
        [...audioErrors, ...audioPageErrors].slice(0, 3).join(' | ') || 'no errors');

      // --- a missing file stays silent, not thrown ------------------------------
      // Own page: once a real mp3 has been requested above, later re-routing
      // the same URL to a 404 would not necessarily hit the network again (the
      // browser may already hold it), so this needs a reading this session has
      // never touched, on a page with no prior successful audio requests to
      // mask the route. Measures the thing CLAUDE.md's catalog rule actually
      // asks for — no throw, no unhandled rejection — not whether the network
      // panel is quiet: a 404's own "Failed to load resource" line is a
      // browser-level log this page cannot suppress and is not what "silent"
      // means here.
      const missingPage = await browser.newPage({ viewport: { width: 1280, height: 720 } });
      const missingPageErrors = [];
      missingPage.on('pageerror', (e) => missingPageErrors.push(String(e)));
      await missingPage.route('**/assets/audio/*.mp3', (route) => route.fulfill({ status: 404, body: 'not found' }));
      await missingPage.goto(`http://127.0.0.1:${port}/mcgrots.html`, { waitUntil: 'load' });
      await missingPage.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
      await missingPage.evaluate(() => window.__mcgrotsDebug.pauseAuto());
      await missingPage.click('#title-card');
      await missingPage.evaluate((t) => window.__mcgrotsDebug.rota.setClock(t), 1020);
      await missingPage.evaluate(() => window.__mcgrotsDebug.stepFrames(1));
      await new Promise((r) => setTimeout(r, 1500)); // let the 404'd play() settle
      const missingState = await missingPage.evaluate(() => ({
        paused: window.__mcgrotsDebug.readerAudio.paused,
        currentSrc: window.__mcgrotsDebug.readerAudio.currentSrc,
        scheduledId: window.__mcgrotsDebug.rota.whatTheyAreDoing(1020).id,
      }));
      await missingPage.close();
      // F18 (G4 phase gate): pageerrors===0 && paused===true also holds for a
      // page that never attempted playback at all (a click that missed, a rota
      // returning null) — nothing pinned that an attempt actually happened.
      // currentSrc ending in the scheduled id is the positive control: the
      // module reached the point of trying to play THIS file, not merely doing
      // nothing.
      check('a missing/blocked file does not throw — the module recovers silently, having actually tried',
        missingPageErrors.length === 0 && missingState.paused === true &&
          missingState.currentSrc?.endsWith(`/${missingState.scheduledId}.mp3`),
        `pageerrors=${missingPageErrors.length} paused=${missingState.paused} currentSrc=${missingState.currentSrc} scheduledId=${missingState.scheduledId}`);

      // --- F14 (G4 phase gate): the seek target tracks the LIVE elapsed -------
      // A deliberately delayed route on the mp3 — the shape the phase gate
      // used to find this. On a cold file, the original bug seeked to the
      // `elapsed` captured when `mediaEl.src` was assigned, not the value once
      // `loadedmetadata` actually fired; on 127.0.0.1 that gap is single-digit
      // milliseconds, which is why nothing else in this suite ever saw it.
      //
      // Own page per arm, own boot: the clock is advanced in small real-time
      // steps throughout the wait (`rota.setClock` + `stepFrames`) so it
      // tracks actual elapsed wall-clock time while the (possibly delayed)
      // load is in flight, the same way a real player's un-frozen clock would.
      const measureSeekDrift = async (delayMs) => {
        const p = await browser.newPage({ viewport: { width: 1280, height: 720 } });
        if (delayMs > 0) {
          await p.route('**/assets/audio/*.mp3', async (route) => {
            await new Promise((r) => setTimeout(r, delayMs));
            await route.continue();
          });
        }
        await p.goto(`http://127.0.0.1:${port}/mcgrots.html`, { waitUntil: 'load' });
        await p.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
        await p.evaluate(() => window.__mcgrotsDebug.pauseAuto());
        await p.click('#title-card');

        const v = await p.evaluate((t) => window.__mcgrotsDebug.rota.whatTheyAreDoing(t), 1020);
        const rStart = 1020 - v.elapsed;
        await p.evaluate((t) => window.__mcgrotsDebug.rota.setClock(t), 1020);
        await p.evaluate(() => window.__mcgrotsDebug.stepFrames(1));

        const t0 = Date.now();
        let last = { playingId: null, currentTime: 0 };
        let trueElapsedAtDetect = null;
        while (Date.now() - t0 < delayMs + 4000) {
          const clock = 1020 + (Date.now() - t0) / 1000;
          await p.evaluate((t) => window.__mcgrotsDebug.rota.setClock(t), clock);
          await p.evaluate(() => window.__mcgrotsDebug.stepFrames(1));
          last = await p.evaluate(() => ({
            playingId: window.__mcgrotsDebug.readerAudio.playingId,
            currentTime: window.__mcgrotsDebug.readerAudio.currentTime,
          }));
          if (last.playingId === v.id && last.currentTime > 0) { trueElapsedAtDetect = clock - rStart; break; }
          await new Promise((r) => setTimeout(r, 150));
        }
        await p.close();
        return {
          started: last.playingId === v.id,
          drift: trueElapsedAtDetect !== null ? trueElapsedAtDetect - last.currentTime : null,
        };
      };

      const delayed = await measureSeekDrift(3000);
      check('a delayed load still starts near the LIVE elapsed, not the value captured at request time',
        delayed.started && delayed.drift !== null && delayed.drift < 1,
        delayed.started
          ? `3000ms route delay: drift ${delayed.drift.toFixed(2)}s (must be <1s)`
          : 'playback never started under the delayed route');

      // The control: identical procedure, no delay. Without this, the check
      // above would pass equally for an implementation that is simply slow
      // everywhere — the delayed run alone cannot tell "stale seek target"
      // apart from "this whole page runs a bit behind under load".
      const undelayed = await measureSeekDrift(0);
      check('...and with no delay the drift is near zero (control)',
        undelayed.started && undelayed.drift !== null && undelayed.drift < 1,
        undelayed.started
          ? `no delay: drift ${undelayed.drift.toFixed(2)}s`
          : 'playback never started under the control');

      await audioPage.close();
    }

    // --------------------------------------------------------------- visit ---
    // G7h. The ten-minute visit is a PURE FUNCTION OF THE WALL CLOCK (Dan's
    // correction, 2026-08-17, replacing this unit's original session-relative
    // design — see visit.js's own header). That is what makes every check
    // below pin-and-measure rather than drive: no 600s of stepped frames
    // anywhere in this region.
    //
    // PINNED EVERYWHERE EXCEPT ONE CHECK, on purpose. The `mcgrot` region's
    // own history is the reason: it ran on the real wall clock and failed in
    // clean bursts, because rota's reader stood in front of him for roughly
    // half of any given real-time window (see that region's own comment
    // above, `rota.setClock(980)`). A gate on a 600.6s cycle has even more
    // surface for exactly that flake than a ~40s reading cycle did. Every
    // check here pins `rota.setClock(t)` — the SAME lever rota.js's own
    // region already uses, reused rather than inventing a second one, per the
    // correction. Only the LAST check runs unpinned, and only asserts the
    // visit is somewhere sensible.
    if (wants('visit')) {
      const visitPage = await browser.newPage({ viewport: { width: 1280, height: 720 } });
      const visitErrors = [];
      visitPage.on('console', (m) => { if (m.type() === 'error') visitErrors.push(m.text()); });
      visitPage.on('pageerror', (e) => visitErrors.push(String(e)));
      await visitPage.goto(`http://127.0.0.1:${port}/mcgrots.html?visit=on`, { waitUntil: 'load' });
      await visitPage.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
      await visitPage.evaluate(() => window.__mcgrotsDebug.card.dismiss());
      await visitPage.evaluate(() => window.__mcgrotsDebug.pauseAuto());
      await visitPage.evaluate(() => window.__mcgrotsDebug.setMarkersVisible(false));

      // --- 1: every cue fires, in order -----------------------------------
      // `cueAt` is pure, so "fires" here means "the sweep never skips or
      // repeats a cue" — no stepped frames needed to prove it, only enough
      // samples to land inside every one of the 28 windows at least once (the
      // shortest is mcgrot-10 at 3.9s; a 1s stride cannot straddle it).
      const sweep = await visitPage.evaluate(() => {
        const d = window.__mcgrotsDebug;
        const cycleLen = d.visit.cycleSeconds();
        const seen = [];
        let lastIndex = -1;
        for (let t = 0; t < cycleLen; t += 1) {
          const c = d.visit.cueAt(t);
          if (c.index !== lastIndex) { seen.push({ index: c.index, kind: c.kind, anchor: c.anchor, audio: c.audio }); lastIndex = c.index; }
        }
        return { seen, cuesLen: d.visit.cues().length, cycleLen };
      });
      const inOrder = sweep.seen.length === sweep.cuesLen && sweep.seen.every((c, i) => c.index === i);
      check('every cue fires, in order — 28 cues sweep the full cycle with no gap and no repeat',
        inOrder,
        `${sweep.seen.length}/${sweep.cuesLen} distinct cues seen across a ${sweep.cycleLen.toFixed(1)}s cycle` +
        (inOrder ? '' : `; order was ${sweep.seen.map((c) => c.index).join(',')}`));

      // Spot-checked against docs/g7-visit-shape.md § 1's table directly, not
      // just internal self-consistency — a scheduler that fires 28
      // self-consistent cues in the WRONG order would still pass the sweep
      // above.
      const spot = await visitPage.evaluate(() => {
        const c = window.__mcgrotsDebug.visit.cues();
        return { first: c[0], secondCue: c[1], last: c[27] };
      });
      const spotOk = spot.first.kind === 'silence' && spot.first.anchor === 'counter'
        && spot.secondCue.kind === 'reading' && spot.secondCue.anchor === 'counter' && spot.secondCue.audio === '2b2110bb'
        && spot.last.kind === 'silence' && spot.last.anchor === 'counter' && spot.last.beat === 'settle';
      check('the authored table matches the shape doc at three spot-checked rows (cue 0 opens on silence at counter, cue 1 is the first reading, cue 27 closes on the settle beat)',
        spotOk, JSON.stringify(spot));

      // --- control: cueAt is a genuine function of time, not a constant ---
      // Same idiom rota.js's own "the schedule is a pure function of the
      // clock" gate uses for whatTheyAreDoing: same instant twice -> same
      // cue; a different instant -> a different cue. Catches a scheduler
      // that always returns cue 0 regardless of `now`, which the sweep above
      // could not tell apart from a working one if `now` never actually
      // varied inside it.
      const purity = await visitPage.evaluate(() => {
        const d = window.__mcgrotsDebug;
        return { a1: d.visit.cueAt(200).index, a2: d.visit.cueAt(200).index, b: d.visit.cueAt(400).index };
      });
      check('cueAt is a pure function of time — the same instant twice gives the same cue, a different instant gives a different one (control)',
        purity.a1 === purity.a2 && purity.a1 !== purity.b,
        `t=200 -> cue ${purity.a1} (asked twice), t=400 -> cue ${purity.b}`);

      // --- 3: the player is where the cue says ----------------------------
      // Every reading and complaint cue (17 of 28), each an INDEPENDENT
      // fresh-join test: `rejoin()` resets the "has the visit placed the
      // actor yet" latch, then the clock is pinned to that cue's own
      // midpoint and one frame stepped — main.js's own rule is "on join,
      // snap to the current cue's anchor", so this exercises exactly that
      // path for every cue in the table, not just the first.
      const anchorRows = await visitPage.evaluate(() => {
        const d = window.__mcgrotsDebug;
        const cues = d.visit.cues();
        let t = 0;
        const rows = [];
        for (const cue of cues) {
          if (cue.kind === 'reading' || cue.kind === 'complaint') {
            const pin = t + cue.dur / 2;
            d.visit.rejoin();
            d.rota.setClock(pin);
            d.stepFrames(1);
            rows.push({ index: cue.index, pin, expected: cue.anchor, actual: d.state().anchor });
          }
          t += cue.dur;
        }
        d.rota.clearClock();
        return rows;
      });
      const anchorBad = anchorRows.filter((r) => r.actual !== r.expected);
      check('the player is where the cue says — actor anchor matches the table at every reading/complaint cue (17 of 28), each a fresh pinned join',
        anchorRows.length === 17 && anchorBad.length === 0,
        anchorBad.length
          ? anchorBad.map((r) => `cue ${r.index} @t=${r.pin.toFixed(1)}: expected ${r.expected}, got ${r.actual}`).join('; ')
          : `${anchorRows.length}/17 reading/complaint cues checked, all match`);

      // --- 3b: the SAME thing, but crossing a live cue boundary -----------
      // The check above calls `rejoin()` before every sample, which only
      // exercises the "on join, snap" path — every sample lands via the FIRST
      // branch of the same `if` in main.js's frame(), never the second. A
      // fault that disables ONLY the "walk on a cue boundary" branch (the
      // `else if (current?.id !== cue.anchor)` one) passed the check above
      // outright when tried — found by actually fault-injecting it, not
      // reasoned about. This one joins ONCE, then pins forward through six
      // consecutive cues WITHOUT rejoining, so an anchor that never advances
      // once seated (that exact fault) is the thing it catches.
      const chainRows = await visitPage.evaluate(() => {
        const d = window.__mcgrotsDebug;
        d.visit.rejoin();
        d.rota.setClock(0);
        d.stepFrames(1);
        const cues = d.visit.cues();
        let t = 0;
        const rows = [];
        for (const cue of cues) {
          const mid = t + cue.dur / 2;
          d.rota.setClock(mid);
          d.stepFrames(1);
          rows.push({ index: cue.index, pin: mid, expected: cue.anchor, actual: d.state().anchor });
          t += cue.dur;
          if (rows.length >= 6) break; // crosses cue 3's walk boundary and beyond
        }
        d.rota.clearClock();
        return rows;
      });
      const chainBad = chainRows.filter((r) => r.actual !== r.expected);
      check('...and the anchor tracks correctly across a LIVE cue-boundary walk, not just a fresh join (cues 0-5, one continuous visit)',
        chainRows.length === 6 && chainBad.length === 0,
        chainBad.length
          ? chainBad.map((r) => `cue ${r.index} @t=${r.pin.toFixed(1)}: expected ${r.expected}, got ${r.actual}`).join('; ')
          : `${chainRows.length}/6 consecutive cues, no rejoin between them, all match`);

      // --- control: the anchor sequence with the visit off never advances --
      // Own page, own boot: `?rota=off` too, so rota's own reader cannot add
      // anchor noise of its own — this control is about the VISIT wiring
      // specifically, not "is something, anything, moving the actor".
      const offPage = await browser.newPage({ viewport: { width: 1280, height: 720 } });
      const offErrors = [];
      offPage.on('console', (m) => { if (m.type() === 'error') offErrors.push(m.text()); });
      offPage.on('pageerror', (e) => offErrors.push(String(e)));
      await offPage.goto(`http://127.0.0.1:${port}/mcgrots.html?rota=off`, { waitUntil: 'load' });
      await offPage.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
      await offPage.evaluate(() => window.__mcgrotsDebug.card.dismiss());
      await offPage.evaluate(() => window.__mcgrotsDebug.pauseAuto());
      const offRun = await offPage.evaluate(() => {
        const d = window.__mcgrotsDebug;
        const anchors = new Set([d.state().anchor]);
        for (const t of [16.7, 60, 200, 400, 590]) {
          d.rota.setClock(t);
          d.stepFrames(1);
          anchors.add(d.state().anchor);
        }
        d.rota.clearClock();
        return { anchors: [...anchors], visitOn: d.visit.on };
      });
      await offPage.close();
      check('control: the anchor sequence never advances with the visit off (same pinned instants, ?rota=off boot)',
        !offRun.visitOn && offRun.anchors.length === 1,
        `visit.on=${offRun.visitOn}; anchors seen across pins: ${offRun.anchors.join(', ')}`);
      check('console clean on the visit-off control boot',
        offErrors.length === 0, offErrors.slice(0, 3).join(' | ') || 'no errors');

      // --- 2: the audio is audible -----------------------------------------
      // Own page, real CDP click — the other checks' `card.dismiss()` is a
      // synthetic DOM removal and deliberately does not exercise autoplay.
      // F15's own lesson, repeated because this repo has paid for it before:
      // currentSrc/paused/currentTime prove a source was wired up, not that
      // anything is audible. Taps the real signal path with an AnalyserNode.
      const visitAudioPage = await browser.newPage({ viewport: { width: 1280, height: 720 } });
      const visitAudioErrors = [];
      visitAudioPage.on('pageerror', (e) => visitAudioErrors.push(String(e)));
      await visitAudioPage.addInitScript(() => {
        const proto = (window.AudioContext || window.webkitAudioContext).prototype;
        const orig = proto.createMediaElementSource;
        proto.createMediaElementSource = function (el) {
          const src = orig.call(this, el);
          const analyser = this.createAnalyser();
          analyser.fftSize = 2048;
          src.connect(analyser);
          window.__mcgrotsAnalyser = analyser;
          return src;
        };
      });
      await visitAudioPage.goto(`http://127.0.0.1:${port}/mcgrots.html?visit=on`, { waitUntil: 'load' });
      await visitAudioPage.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
      await visitAudioPage.evaluate(() => window.__mcgrotsDebug.pauseAuto());
      await visitAudioPage.click('#title-card'); // the real gesture

      const sampleRMS = async (p) => p.evaluate(() => {
        const a = window.__mcgrotsAnalyser;
        if (!a) return { peak: 0, rms: 0 };
        const data = new Uint8Array(a.fftSize);
        a.getByteTimeDomainData(data);
        let peak = 0, sumSq = 0;
        for (let j = 0; j < data.length; j++) {
          const v = (data[j] - 128) / 128;
          peak = Math.max(peak, Math.abs(v));
          sumSq += v * v;
        }
        return { peak, rms: Math.sqrt(sumSq / data.length) };
      });
      const waitForAudible = async (p, attempts = 10) => {
        for (let i = 0; i < attempts; i++) {
          const r = await sampleRMS(p);
          if (r.rms > 0.005) return r;
          await new Promise((res) => setTimeout(res, 150));
        }
        return { peak: 0, rms: 0 };
      };

      // t=16.7: 3s into cue 1 (reading, 2b2110bb, counter) — the same cue
      // the spot-check above already verified against the shape doc.
      await visitAudioPage.evaluate((t) => { window.__mcgrotsDebug.rota.setClock(t); window.__mcgrotsDebug.stepFrames(1); }, 16.7);
      const midAudible = await waitForAudible(visitAudioPage);
      check('a reading cue produces real audio output, not just advancing element state (pinned t=16.7, cue 1)',
        midAudible.rms > 0.005,
        `peak=${midAudible.peak.toFixed(3)} rms=${midAudible.rms.toFixed(3)} (must be >0.005)`);

      // Control: t=5 is inside cue 0, a 'silence' cue — deterministic, unlike
      // booting with the visit off, which would race the REAL rota's own
      // reader on the real wall clock (see this region's own header on why
      // that flakes).
      await new Promise((r) => setTimeout(r, 300)); // let the reading's tail actually stop
      await visitAudioPage.evaluate((t) => { window.__mcgrotsDebug.rota.setClock(t); window.__mcgrotsDebug.stepFrames(1); }, 5);
      await new Promise((r) => setTimeout(r, 300));
      const silentSamples = [await sampleRMS(visitAudioPage), await sampleRMS(visitAudioPage), await sampleRMS(visitAudioPage)];
      const silentWorst = silentSamples.reduce((a, b) => (b.rms > a.rms ? b : a));
      check('...and a silence cue produces no output (control, pinned t=5, cue 0)',
        silentWorst.rms <= 0.005,
        `peak=${silentWorst.peak.toFixed(3)} rms=${silentWorst.rms.toFixed(3)} (must be <=0.005)`);

      await visitAudioPage.evaluate(() => window.__mcgrotsDebug.rota.clearClock());
      check('console clean on the visit audio page',
        visitAudioErrors.length === 0, visitAudioErrors.slice(0, 3).join(' | ') || 'no errors');
      await visitAudioPage.close();

      // --- 4: it is a picture, not a black screen ---------------------------
      // E5d's own lesson: numeric gates cannot see a bad frame. Own page, own
      // boot, so it starts from a clean, known anchor rather than wherever
      // gate 3's 17 rejoin-and-pin samples left this page's actor parked.
      // Six captures spanning every anchor the route touches and all four
      // cue kinds — pinned-then-settled with REAL frames (matching the rota
      // region's own 'rota-2-arriving' technique) so a walk-in-progress
      // capture shows an actually eased camera, not a teleport.
      const shotsPage = await browser.newPage({ viewport: { width: 1280, height: 720 } });
      await shotsPage.goto(`http://127.0.0.1:${port}/mcgrots.html?visit=on`, { waitUntil: 'load' });
      await shotsPage.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
      await shotsPage.evaluate(() => window.__mcgrotsDebug.card.dismiss());
      await shotsPage.evaluate(() => window.__mcgrotsDebug.pauseAuto());
      await shotsPage.evaluate(() => window.__mcgrotsDebug.setMarkersVisible(false));
      // Clean start: cue 0's own anchor, via the real join path. `rejoin()`
      // first is not decorative — rAF keeps ticking on the REAL wall clock
      // from boot() until `pauseAuto()` above actually lands (network round
      // trips in between are real time passing), so `visitJoined` may already
      // be true by here, landed on whatever cue the real clock happened to
      // hit. Without the reset, `setClock(0)` would read as a mid-visit CUE
      // CHANGE from that raced position — a real eased walk, not the clean
      // snap this fixture wants. Confirmed directly: booting without this
      // line as a probe left the actor at whatever anchor the real-time race
      // landed on (`wall`, `back`, ... varies by run).
      await shotsPage.evaluate(() => {
        window.__mcgrotsDebug.visit.rejoin();
        window.__mcgrotsDebug.rota.setClock(0);
        window.__mcgrotsDebug.stepFrames(1);
      });

      const shots = [];
      const captureAt = async (label, t, settleFrames) => {
        await shotsPage.evaluate((tt) => window.__mcgrotsDebug.rota.setClock(tt), t);
        await shotsPage.evaluate((n) => window.__mcgrotsDebug.stepFrames(n, 1 / 60), settleFrames);
        const buf = await shotsPage.screenshot({ type: 'png' });
        writeFileSync(join(OUT, `visit-${label}.png`), buf);
        shots.push(label);
      };
      // Cue starts, read straight from the table so these track any future
      // change to CUES without needing to be hand-recomputed here.
      const cueStarts = await shotsPage.evaluate(() => {
        const cues = window.__mcgrotsDebug.visit.cues();
        let t = 0;
        return cues.map((c) => { const s = t; t += c.dur; return s; });
      });
      // Settle counts: 450 real frames (7.5s) after any capture that jumps
      // the clock far enough to force a NEW walk — comfortably over the
      // longest anchor-to-anchor distance at WALK_SPEED (1.35 m/s, actor.js)
      // — so that capture shows the actor actually arrived, not caught
      // mid-ease from wherever the previous jump left it. 'b' is the one
      // deliberate exception: a short settle, to catch the walk itself
      // in progress rather than its end.
      await captureAt('a-reading-counter', cueStarts[1] + 3, 90);       // cue 1: reading, counter (no walk needed)
      await captureAt('b-walk-to-kerb', cueStarts[3] + 2, 20);          // cue 3: walk, mid-ease (deliberate)
      await captureAt('c-reading-wall', cueStarts[10] + 11, 450);       // cue 10: reading, wall
      await captureAt('d-silence-beat-far', cueStarts[17] + 40, 450);   // cue 17: silence, far, beat 'approach'
      await captureAt('e-reading-far', cueStarts[18] + 12, 90);         // cue 18: reading, far (same anchor as d)
      await captureAt('f-closing-counter', cueStarts[27] + 29, 450);    // cue 27: silence, counter, beat 'settle'
      await shotsPage.close();

      check('the visit sequence captured across every anchor and cue kind (open and look — numeric gates cannot see this)',
        shots.length === 6, `${shots.length} frames written to docs/smoke/captures/mcgrots/g0/visit-*.png`);

      // --- the one unpinned check: is the visit somewhere sensible ---------
      // The real clock is the one place it belongs (per the correction) —
      // this asserts only that cueAt(now) resolves to something well-formed,
      // never a specific cue (which would flake exactly the way the mcgrot
      // region did).
      await visitPage.evaluate(() => window.__mcgrotsDebug.rota.clearClock());
      const unpinned = await visitPage.evaluate(() => {
        const d = window.__mcgrotsDebug;
        d.stepFrames(3);
        const cue = d.visit.cueAt(Date.now() / 1000);
        return { index: cue.index, kind: cue.kind, anchor: cue.anchor, stateAnchor: d.state().anchor, anchors: d.anchorIds() };
      });
      check('unpinned sanity: on the real wall clock the visit is somewhere sensible (the one place the real clock belongs)',
        unpinned.index >= 0 && unpinned.index < 28 && unpinned.anchors.includes(unpinned.anchor)
          && unpinned.stateAnchor === unpinned.anchor,
        `cueAt(now) -> cue ${unpinned.index} (${unpinned.kind}) at ${unpinned.anchor}; player anchor ${unpinned.stateAnchor}`);

      check('console clean on the main visit page across every pinned check',
        visitErrors.length === 0, visitErrors.slice(0, 3).join(' | ') || 'no errors');
      await visitPage.close();
    }

    // --------------------------------------------------------------- style ---
    // G2's four candidates. Every check here boots ONCE and switches arms in
    // place, which is a stronger control than the street's flag gates get: those
    // boot twice and attribute a measured difference to the flag, sound only
    // because nothing else differs. Here nothing else CAN differ — same process,
    // same scene, same frame counter.
    if (wants('style')) {
      const shot = async (name) => {
        const buf = await page.screenshot();
        writeFileSync(join(OUT, `../g2/${name}.png`), buf);
        return buf;
      };
      mkdirSync(join(OUT, '../g2'), { recursive: true });

      // ON THE SKINNED BODY, not the capsule the rest of the suite uses. G1 chose
      // A1 skinned (docs/MCGROTS-VALIDATION § G1), and the outline's hardest path
      // by a wide margin is the skinned one: the hull has to be posed by the same
      // skeleton on the same frame, through three's `<skinnormal_vertex>`, or the
      // line walks beside the character instead of around it. Gating the outline
      // on a capsule would gate the easy case and ship the broken one.
      await page.goto(`http://127.0.0.1:${port}/mcgrots.html?body=skinned&archetype=rab`,
        { waitUntil: 'load' });
      await page.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
      await page.evaluate(() => window.__mcgrotsDebug.card.dismiss());
      await page.evaluate(() => window.__mcgrotsDebug.pauseAuto());

      const bodyOk = await page.evaluate(() => window.__mcgrotsDebug.bodyError);
      check('the style region is judging the chosen body, not the control',
        bodyOk === null, bodyOk ? `skinned failed: ${bodyOk}` : 'skinned loaded');

      await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        d.setPage(false); d.clearLook(); d.setStyle('none');
        d.setMarkersVisible(false);
        d.snapTo('kerb'); d.stepFrames(120);
      });

      // --- the no-op invariant, and it is the load-bearing one ---------------
      // Off must be BIT-IDENTICAL to a plain render. Three arms now mutate three
      // different things — the scene graph, the frame, and the DOM — and the
      // scene-graph one is the dangerous arm, because a leaked material or a
      // stranded hull would look like a slightly different picture rather than
      // like a bug.
      const base = await shot('none-a');
      const baseHash = createHash('md5').update(base).digest('hex');

      // Install and REVERT every arm, then re-render. This is the check that a
      // look actually reverses rather than the check that it installs.
      //
      // EVERY STEP HERE IS dt=0. The first version stepped at the normal 1/60 and
      // failed with two different hashes on a scene that was reverting perfectly:
      // ten frames of game time had passed between the two captures and the idle
      // pose had moved. A frame-identity check has to hold the clock still, or it
      // measures the animation and calls it a leak.
      await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        d.setLook('inked'); d.stepFrames(1, 0);
        d.setLook('aerial'); d.stepFrames(1, 0);
        d.setStyle('key'); d.stepFrames(1, 0);
        d.setPage(true); d.stepFrames(1, 0);
        d.setPage(false); d.setStyle('none'); d.clearLook(); d.stepFrames(1, 0);
      });
      const after = await shot('none-b');
      const afterHash = createHash('md5').update(after).digest('hex');
      check('every style arm reverts to a bit-identical frame',
        baseHash === afterHash, `${baseHash.slice(0, 12)} vs ${afterHash.slice(0, 12)}`);

      // --- S1 / S2: the scene actually changed ------------------------------
      // `install()` returning true proves a function ran. These prove the scene
      // graph holds outline geometry and swapped materials — the gate has to test
      // the product, not the calculator (CLAUDE.md).
      const inked = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        d.setLook('inked'); d.stepFrames(4);
        return { stats: d.lookStats(), render: d.state() };
      });
      // Cel-shading applies to EVERY mesh; the outline applies only to objects
      // under INK_MAX_RADIUS (looks.js — the ground and the massing carry no line
      // in the corpus, and a ground plane's inverted hull lands in front of the
      // camera). So hulls < swapped is correct here, and asserting equality is
      // what the first version of this gate got wrong.
      check('S1 inks the objects and cels everything',
        inked.stats.hulls > 0 && inked.stats.hulls < inked.stats.swapped && inked.stats.aerial === 0,
        `hulls=${inked.stats.hulls} of ${inked.stats.swapped} meshes, aerial=${inked.stats.aerial}`);

      // The outline must be VISIBLE, not merely present — a hull whose thickness
      // rounds to nothing passes a count and draws no line.
      //
      // Measured as INK COVERAGE, not as darkness. The first version of this
      // check used the crushed-pixel fraction and read 0.00% -> 0.00% on a frame
      // that did have ink in it: the hull colour is #211f1c, luminance ~32, and
      // the crush floor is 12. It was measuring the wrong quantity and would have
      // stayed red however good the outline was.
      // MEASURED AS A PER-PIXEL DIFF, not as "how many pixels are ink-coloured".
      // Two things defeated colour matching, and both are properties of the
      // product rather than of the test: the frame is antialiased, so a 2.2px
      // line is mostly blend pixels and only its core is ever the exact hull
      // colour; and the cast is dark, so a line drawn around a dark figure is
      // near-invisible to a colour match. It read 0.02% on a frame with a line
      // clearly in it.
      //
      // The diff has neither problem. Against the zero-width control, every pixel
      // the line touches is darker than it was and nothing else changed.
      const inkDiff = (a, b) => {
        const pa = PNG.sync.read(a), pb = PNG.sync.read(b);
        let darker = 0;
        const n = pa.width * pa.height;
        for (let i = 0; i < n; i++) {
          const o = i * 4;
          const la = 0.2126 * pa.data[o] + 0.7152 * pa.data[o + 1] + 0.0722 * pa.data[o + 2];
          const lb = 0.2126 * pb.data[o] + 0.7152 * pb.data[o + 1] + 0.0722 * pb.data[o + 2];
          if (lb - la > 8) darker++;
        }
        return (darker / n) * 100;
      };
      const inkedShot = await shot('s1-inked');
      const inkedStats = luminanceStats(inkedShot);

      // THE CONTROL IS THE SAME LOOK WITH THE LINE SET TO ZERO WIDTH, not the
      // unstyled frame. Measured against unstyled this check read 1.74% -> 0.02%
      // and looked like the outline had vanished; what it was actually measuring
      // is that the UNSTYLED scene has 1.74% of its pixels near #211f1c already,
      // because its own shadows are that colour, and the cel ramp then lifts them.
      // Ink coverage and shadow coverage are not separable in that comparison.
      //
      // With `uThickness` at 0 every other thing is identical — same materials,
      // same hull meshes, same draw calls, same clock — so a difference in ink
      // coverage is the line and can be nothing else.
      const inkOff = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        const was = d.lookUniforms.uThickness.value;
        d.lookUniforms.uThickness.value = 0;
        d.stepFrames(1, 0);
        return was;
      }).then(async (was) => {
        const buf = await shot('s1-control-nothickness');
        await page.evaluate((w) => {
          window.__mcgrotsDebug.lookUniforms.uThickness.value = w;
          window.__mcgrotsDebug.stepFrames(1, 0);
        }, was);
        return buf;
      });

      const inkCoverage = inkDiff(inkedShot, inkOff);
      check('S1 puts visible ink in the frame',
        inkCoverage > 0.25,
        `${inkCoverage.toFixed(2)}% of pixels darkened vs the zero-width control`);

      // F4: the actor's geometry has no `normal` attribute (auto-rigged from a
      // Trellis glb — see actors/skinned.js). MeshLambertMaterial papers over
      // that with three's own auto-flatShading fallback; MeshToonMaterial is
      // not on the four-name whitelist that fallback checks, so the shader
      // reads WebGL's default (0,0,0) for every vertex normal and both direct
      // and indirect diffuse are zero — a solid black silhouette regardless of
      // colour, map, ramp, outline or cache key. looks.js now computes normals
      // once for any target mesh missing them.
      //
      // MEASURED AS VARIANCE WITHIN A PATCH OF THE ACTOR'S OWN TORSO, not as a
      // single-pixel or frame-wide brightness floor — both tried and rejected.
      // A chest-height SAMPLE reads as "black" with or without the fault: the
      // cast wears near-black coats by design (measured luma 1-5 on the jacket
      // in a known-good render — ALBEDO_MULTIPLY is 0.42 and the shade band
      // sits at 52/255). The frame-WIDE crush floor (12% of all pixels) never
      // trips either, since the actor is a few percent of the frame at most —
      // a fully black figure against a lit wall passed that gate every time
      // this fault was live (measured). And a naive bounding BOX around the
      // whole figure also false-passed on the broken render (measured stddev
      // 53-57 with the fault still live): its top edge sat above the seated
      // figure's actual head and its bottom edge crossed the gap between the
      // splayed sitting legs, both of which sample background/bench pixels
      // that never touch the actor at all.
      //
      // What actually discriminates: a patch confined to the TORSO band only
      // (above the leg-splay, below the collar), where every pixel in every
      // row is part of the figure. Measured on `kerb` (the sit anchor this
      // region already snaps to): with the fault live this patch is uniformly
      // (0,0,0) — mean 0.00, stddev 0.00, max 0.0. Fixed, the same patch reads
      // mean 4.5, stddev 7.0, max 74.6 — the cap/collar highlight and the
      // lit/shade split the fault erases. Fractions of actor.height are
      // derived from that measurement (kerb is the only anchor this runs
      // against), not eyeballed: 0.35h-0.62h above the group origin is the
      // torso in a SIT pose, clear of both the collar above and the knees
      // apart below.
      //
      // THE HALF-WIDTH IS DERIVED FROM THE MESH, not a constant, since F3
      // landed five more archetypes and this region can now run against any
      // of them. A hand-picked 45px was tuned for rab (torso ~180px on screen
      // at this anchor); morag's is ~95px, and 45px of half-width either side
      // would already span her whole torso and start sampling the bench
      // beside her — the same false-pass this gate's box redesign exists to
      // avoid, just moved from the vertical axis to the horizontal one. The
      // geometry's own bind-pose bounding box (rest pose — skinning deforms
      // only on the GPU, so this is a per-archetype PROXY for shoulder width,
      // not a live per-frame measurement) scales with the archetype: rab's
      // local half-width is 0.342, morag's 0.208 — a 0.61 ratio, close to the
      // ~0.53 ratio Dan measured on screen. Shrunk by SAFETY so the sampled
      // strip sits inside the torso rather than reaching the arms; calibrated
      // so rab's derived half-width lands within a pixel of the 45px this
      // check shipped with.
      const actorBox = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        const toUv = (v) => {
          const c = v.clone().project(d.camera);
          return { x: c.x * 0.5 + 0.5, y: 1 - (c.y * 0.5 + 0.5) };
        };
        let mesh = null;
        d.scene.traverse((o) => { if (o.isSkinnedMesh) mesh = o; });
        mesh.geometry.computeBoundingBox();
        const bb = mesh.geometry.boundingBox;
        const SAFETY = 0.5;
        const halfWidthWorld = ((bb.max.x - bb.min.x) / 2) * d.actor.height * SAFETY;
        const base = d.actor.group.position.clone();
        const top = base.clone(); top.y += d.actor.height * 0.62;
        const bottom = base.clone(); bottom.y += d.actor.height * 0.35;
        const center = base.clone(); center.y += d.actor.height * 0.48;
        const right = new d.THREE.Vector3(halfWidthWorld, 0, 0)
          .applyQuaternion(d.actor.group.quaternion).add(center);
        return { top: toUv(top), bottom: toUv(bottom), center: toUv(center), right: toUv(right) };
      });
      const boxStats = (buf, box) => {
        const png = PNG.sync.read(buf);
        const y0 = Math.max(0, Math.round(box.top.y * png.height));
        const y1 = Math.min(png.height - 1, Math.round(box.bottom.y * png.height));
        const cx = Math.round(box.top.x * png.width);
        // 12px floor: at some archetype/anchor pairing the derived width could
        // round to almost nothing, which would pass by sampling too little to
        // measure anything rather than by the actor being lit.
        const halfW = Math.max(12, Math.round(Math.abs(box.right.x - box.center.x) * png.width));
        const x0 = Math.max(0, cx - halfW), x1 = Math.min(png.width - 1, cx + halfW);
        let sum = 0, sumSq = 0, max = 0, n = 0;
        for (let y = y0; y <= y1; y++) {
          for (let x = x0; x <= x1; x++) {
            const o = (y * png.width + x) * 4;
            const l = 0.2126 * png.data[o] + 0.7152 * png.data[o + 1] + 0.0722 * png.data[o + 2];
            sum += l; sumSq += l * l; if (l > max) max = l;
            n++;
          }
        }
        const mean = n ? sum / n : 0;
        return { mean, stddev: n ? Math.sqrt(Math.max(0, sumSq / n - mean * mean)) : 0, max, n };
      };
      const actorStats = boxStats(inkedShot, actorBox);
      // Threshold lowered 2 -> 1 in G3c: the pose fix (pelvis tilt, actors/
      // skinned.js) shifted what this fixed height-fraction window samples on
      // `kerb` — measured 3.0 before G3c, 1.8 after, both with a real, lit,
      // cel-shaded figure (opened the capture, not just the number). The F4
      // fault this guards against is unrelated to pose — it zeroes the
      // geometry's normals — and reads exactly 0.0 regardless of which pose is
      // on screen, so 1 still keeps a clear multiple of margin above the fault
      // while accepting the legitimate reading.
      check('S1 does not render the skinned actor as a flat black silhouette',
        actorStats.stddev > 1 && actorStats.max > CRUSH_LUMA,
        `torso patch stddev ${actorStats.stddev.toFixed(1)}, max ${actorStats.max.toFixed(1)}, n=${actorStats.n}`);

      // --- S2: the depth ramp, with S1 as the control -----------------------
      // S2 is S1 with `aerial` at 1 and NOTHING else different — same materials,
      // same hulls, same code path. So a difference between these two frames is
      // the depth ramp and can be nothing else. That is the isolation the street's
      // acceptance gates got wrong twice.
      const aerialShot = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        d.setLook('aerial'); d.stepFrames(4);
        return d.lookStats();
      }).then(async (stats) => ({ stats, buf: await shot('s2-aerial') }));

      const aerialStats = luminanceStats(aerialShot.buf);
      check('S2 is S1 plus the ramp and nothing else',
        aerialShot.stats.hulls === inked.stats.hulls
        && aerialShot.stats.swapped === inked.stats.swapped
        && aerialShot.stats.aerial === 1,
        `hulls ${aerialShot.stats.hulls} swapped ${aerialShot.stats.swapped} aerial ${aerialShot.stats.aerial}`);

      // The ramp washes distance toward paper, so the frame gets LIGHTER and
      // FLATTER than S1. Both directions asserted: lighter alone would also be
      // true of simply turning the exposure up.
      check('S2 washes the distance out: lighter and flatter than S1',
        aerialStats.mean > inkedStats.mean && aerialStats.stddev < inkedStats.stddev,
        `mean ${inkedStats.mean.toFixed(1)} -> ${aerialStats.mean.toFixed(1)}, ` +
        `stddev ${inkedStats.stddev.toFixed(1)} -> ${aerialStats.stddev.toFixed(1)}`);

      // --- S3: the key, with posterise as the control -----------------------
      await page.evaluate(() => window.__mcgrotsDebug.clearLook());
      const keyed = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        d.setStyle('key'); d.setKey('dock'); d.stepFrames(4);
        return { key: d.key(), keys: d.keys.map((k) => ({ id: k.id, n: k.swatches.length })) };
      });
      const keyShot = await shot('s3-key-dock');

      // Every key is exactly five, dark -> paper. A hand-edited six-entry key
      // would half-fill a fixed-size uniform array and quantise against black,
      // which is a fault that renders as "a bit dark" rather than as an error.
      check('every key is exactly five swatches',
        keyed.keys.every((k) => k.n === 5), keyed.keys.map((k) => `${k.id}:${k.n}`).join(' '));

      // The claim S3 makes is that the frame lands ON the key. So: what fraction
      // of pixels are within a tight distance of one of the five? Measured
      // against posterise's pooled twelve on the identical shot.
      const keyMembership = (buf, swatches) => {
        const png = PNG.sync.read(buf);
        let onPalette = 0;
        const n = png.width * png.height;
        for (let i = 0; i < n; i++) {
          const o = i * 4;
          for (const [r, g, b] of swatches) {
            if (Math.abs(png.data[o] - r) < 10 && Math.abs(png.data[o + 1] - g) < 10
              && Math.abs(png.data[o + 2] - b) < 10) { onPalette++; break; }
          }
        }
        return (onPalette / n) * 100;
      };
      const dockSwatches = [[0x43, 0x43, 0x27], [0x7d, 0x59, 0x2b], [0x71, 0x6a, 0x44],
        [0xa0, 0x90, 0x5f], [0xd8, 0xc6, 0x9b]];
      const onKey = keyMembership(keyShot, dockSwatches);
      check('S3 lands the frame on its five measured swatches',
        onKey > 90, `${onKey.toFixed(1)}% of pixels on the dock key`);

      // Switching key must actually repaint. Same style, same scene, one uniform.
      const goldShot = await page.evaluate(() => {
        const d = window.__mcgrotsDebug; d.setKey('gold'); d.stepFrames(2);
      }).then(() => shot('s3-key-gold'));
      check('switching the key repaints the frame',
        createHash('md5').update(keyShot).digest('hex')
          !== createHash('md5').update(goldShot).digest('hex'),
        `dock vs gold differ`);

      // --- S4: the page ------------------------------------------------------
      await page.evaluate(() => { window.__mcgrotsDebug.setStyle('none'); });
      const paged = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        d.setPage(true);
        d.setPageTitle("McGrot's"); d.stepFrames(4);
        return d.pageStats();
      });
      const pageShot = await shot('s4-page');

      // The inset must actually inset. A page whose panel is the whole window is
      // furniture that drew nothing — and it would still look like a normal
      // frame, so nothing else here would catch it.
      check('S4 insets the render into a panel',
        paged.enabled && paged.panelFraction > 0.5 && paged.panelFraction < 0.85,
        `panel is ${(paged.panelFraction * 100).toFixed(1)}% of the window`);

      // The renderer must have been told. If the drawing buffer still matches the
      // window, the panel is a mask over a full-window render and every camera in
      // the game is framed for the wrong aspect.
      const buffer = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        const s = d.renderer.getSize(new d.THREE.Vector2());
        return { w: s.x, h: s.y, win: [window.innerWidth, window.innerHeight], aspect: d.camera.aspect };
      });
      check('S4 renders at the panel size, not the window size',
        buffer.w < buffer.win[0] && Math.abs(buffer.aspect - buffer.w / buffer.h) < 0.01,
        `buffer ${buffer.w}x${buffer.h} in window ${buffer.win.join('x')}, aspect ${buffer.aspect.toFixed(3)}`);

      // F5: `?page=on` painted the paper, the panel rule and the caption, and
      // the panel itself held no scene — a featureless paper-coloured rect.
      // Both checks above stayed green throughout: one reads the panel's
      // GEOMETRY (`panelFraction`), the other the drawing buffer's DIMENSIONS.
      // Neither samples a pixel inside the panel, so neither could have caught
      // it — the second candidate this session to render nothing behind green
      // numeric gates (F4 was the first). This one looks inside the rect.
      //
      // THE CONTROL IS THE PAPER'S OWN COLOUR, `PAGE.paper` (`#d8c69b`), not a
      // second render: an empty panel is the paper colour edge-to-edge, because
      // that is literally what is behind it (`.page-paper` is full-bleed by
      // design — see page.js). A real render fills the panel with sky, ground
      // and massing, none of which is `#d8c69b`, so the fraction of panel
      // pixels matching the paper closely is near 100% when broken and low
      // when not — no second boot, no scene-specific assumption, and it holds
      // regardless of which anchor or archetype the region runs against.
      const panelStats = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        const v = d.pageStats().viewport;
        return { x: Math.round(v.x), y: Math.round(v.y), w: Math.round(v.w), h: Math.round(v.h) };
      });
      const PAPER_RGB = [0xd8, 0xc6, 0x9b];
      const paperMatchFraction = (buf, rect, tol = 6) => {
        const png = PNG.sync.read(buf);
        let matched = 0, n = 0;
        // Every 3rd pixel both axes: the panel is ~650k px at 1280x720 and this
        // check runs once per suite — subsampling costs nothing a full scan
        // would buy, since the fault this catches is uniform across the panel.
        for (let y = rect.y; y < rect.y + rect.h; y += 3) {
          for (let x = rect.x; x < rect.x + rect.w; x += 3) {
            if (x < 0 || y < 0 || x >= png.width || y >= png.height) continue;
            const o = (y * png.width + x) * 4;
            if (Math.abs(png.data[o] - PAPER_RGB[0]) < tol
              && Math.abs(png.data[o + 1] - PAPER_RGB[1]) < tol
              && Math.abs(png.data[o + 2] - PAPER_RGB[2]) < tol) matched++;
            n++;
          }
        }
        return n ? (matched / n) * 100 : 0;
      };
      const panelPaperFraction = paperMatchFraction(pageShot, panelStats);
      check('S4 holds a scene in the panel, not empty paper',
        panelPaperFraction < 50,
        `${panelPaperFraction.toFixed(1)}% of sampled panel pixels match the paper colour (control: 100% is an empty panel)`);

      await page.evaluate(() => { window.__mcgrotsDebug.setPage(false); });
      check('console still clean after every style arm',
        consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');
    }

    // -------------------------------------------------------------- taxman ---
    // G7j. The Taxman's two-hander with McGrot: six lines, real audio, in the
    // wall/101.8s silence cue (visit.js: `beat: 'taxman'`). Four named gates,
    // per the brief — existence+rendering, non-occlusion of McGrot, all six
    // lines audible, and a deterministic arrival — plus a render pass at the
    // end, because numeric gates cannot see whether this reads as two people
    // talking rather than two audio files playing near each other.
    if (wants('taxman')) {
      const taxmanPage = await browser.newPage({ viewport: { width: 1280, height: 720 } });
      const taxmanErrors = [];
      taxmanPage.on('console', (m) => { if (m.type() === 'error') taxmanErrors.push(m.text()); });
      taxmanPage.on('pageerror', (e) => taxmanErrors.push(String(e)));
      await taxmanPage.goto(`http://127.0.0.1:${port}/mcgrots.html?visit=on`, { waitUntil: 'load' });
      await taxmanPage.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
      await taxmanPage.evaluate(() => window.__mcgrotsDebug.card.dismiss());
      await taxmanPage.evaluate(() => window.__mcgrotsDebug.pauseAuto());
      await taxmanPage.evaluate(() => window.__mcgrotsDebug.setMarkersVisible(false));

      // Where the tagged cue starts, read from the SHIPPED table rather than
      // hand-computed — tracks any future re-pooling of the silence rows
      // (visit.js's own header: the 48.6s shortfall was already pooled once).
      const cueInfo = await taxmanPage.evaluate(() => {
        const cues = window.__mcgrotsDebug.visit.cues();
        let t = 0;
        for (const c of cues) {
          if (c.beat === 'taxman') return { start: t, dur: c.dur, index: c.index };
          t += c.dur;
        }
        return null;
      });
      check('the wall/101.8s silence row carries the taxman beat',
        !!cueInfo, JSON.stringify(cueInfo));

      // The exchange's own schedule, read from sceneCueAt itself (the SAME
      // pure function main.js drives every frame) rather than reproduced by
      // hand — a 0.25s sweep is fine grained enough to land inside the
      // shortest line (mcgrot-exch-taxman-02, 2.4s).
      const sceneRows = await taxmanPage.evaluate((cueStart) => {
        const d = window.__mcgrotsDebug;
        const dur = d.taxman.sceneDuration();
        const rows = [];
        let lastId = undefined;
        // `sweepAt` on its own key — `sceneCueAt`'s own return already carries
        // an `elapsed` field (elapsed WITHIN the current line, not within the
        // cue), and spreading `c` after a same-named key would silently let
        // that tiny in-line value clobber the sweep time this needs. Found by
        // running it and getting nonsense pins (0.15s into the cue for every
        // line), not reasoned about in advance.
        for (let e = 0; e < dur; e += 0.25) {
          const c = d.taxman.sceneCueAt(e);
          if (c.id !== lastId) { rows.push({ sweepAt: e, ...c }); lastId = c.id; }
        }
        return { dur, rows, cueStart };
      }, cueInfo.start);

      check('all six lines appear in the schedule, in the turn order the dialogue JSON authored (McGrot opens, the Taxman closes every pair, the Taxman has the last word)',
        sceneRows.rows.filter((r) => r.id).map((r) => r.id).join(',')
          === ['mcgrot-exch-taxman-01', 'taxman-exch-taxman-01', 'mcgrot-exch-taxman-02', 'taxman-exch-taxman-02', 'mcgrot-exch-taxman-03', 'taxman-exch-taxman-03'].join(','),
        sceneRows.rows.filter((r) => r.id).map((r) => r.id).join(', '));

      // Pin the first sampled instant each of the six lines is actually
      // playing — used by the audibility gate below. `sweepAt` is relative to
      // the CUE's own start, matching what main.js passes to sceneCueAt
      // (`cue.elapsed`), so the absolute clock pin is cueStart+it.
      const linePins = sceneRows.rows.filter((r) => r.id).map((r) => ({ id: r.id, speaker: r.speaker, at: cueInfo.start + r.sweepAt + 0.15 }));
      // A GAP sample (id null, `active: true`, and NOT the opening gap before
      // line 1 — that one is indistinguishable from "not arrived yet" to a
      // reader of this file, even though sceneCueAt itself already treats it
      // as present) for the silence control below.
      const gapRow = sceneRows.rows.find((r, i) => !r.id && r.active && i > 0);
      const gapPin = gapRow ? cueInfo.start + gapRow.sweepAt + 0.15 : null;

      // Shared AABB-projection helper — same technique as the van/pomple/
      // mcgrot regions above, its own copy per this file's own convention.
      const projectRect = async (name) => taxmanPage.evaluate((n) => {
        const d = window.__mcgrotsDebug;
        const obj = d.scene.getObjectByName(n);
        if (!obj) return null;
        const box = new d.THREE.Box3().setFromObject(obj);
        let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity, anyInFront = false;
        for (const x of [box.min.x, box.max.x]) {
          for (const y of [box.min.y, box.max.y]) {
            for (const z of [box.min.z, box.max.z]) {
              const p = new d.THREE.Vector3(x, y, z).project(d.camera);
              if (p.z < 1) anyInFront = true;
              x0 = Math.min(x0, p.x); x1 = Math.max(x1, p.x);
              y0 = Math.min(y0, p.y); y1 = Math.max(y1, p.y);
            }
          }
        }
        const clamp01 = (v) => Math.max(0, Math.min(1, v));
        return {
          ux0: clamp01(x0 * 0.5 + 0.5), ux1: clamp01(x1 * 0.5 + 0.5),
          uy0: clamp01(1 - (y1 * 0.5 + 0.5)), uy1: clamp01(1 - (y0 * 0.5 + 0.5)),
          anyInFront,
        };
      }, name);
      const meanAbsDiffRect = (bufA, bufB, r) => {
        const a = PNG.sync.read(bufA), b = PNG.sync.read(bufB);
        const px0 = Math.max(0, Math.round(r.ux0 * a.width));
        const px1 = Math.min(a.width - 1, Math.round(r.ux1 * a.width));
        const py0 = Math.max(0, Math.round(r.uy0 * a.height));
        const py1 = Math.min(a.height - 1, Math.round(r.uy1 * a.height));
        let sum = 0, n = 0;
        for (let y = py0; y <= py1; y++) {
          for (let x = px0; x <= px1; x++) {
            const o = (y * a.width + x) * 4;
            const la = 0.2126 * a.data[o] + 0.7152 * a.data[o + 1] + 0.0722 * a.data[o + 2];
            const lb = 0.2126 * b.data[o] + 0.7152 * b.data[o + 1] + 0.0722 * b.data[o + 2];
            sum += Math.abs(la - lb); n++;
          }
        }
        return n ? sum / n : 0;
      };
      const countDiffPixels = (bufA, bufB, r) => {
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
      };

      // Pinned to the middle of the FIRST taxman-voiced line — the moment
      // the brief's own gates are stated against ("while the Taxman is
      // present"). `visit.rejoin()` first: the real clock keeps ticking
      // until pauseAuto() actually lands (a network round trip is real time
      // passing), so without this the join could race onto some other cue —
      // same fix the visit region's own 'f-closing-counter' capture needed.
      const taxmanPin = linePins.find((p) => p.speaker === 'taxman').at;
      await taxmanPage.evaluate((t) => {
        const d = window.__mcgrotsDebug;
        d.visit.rejoin();
        d.rota.setClock(t);
        d.stepFrames(1);
      }, taxmanPin);
      // 450 real frames (7.5s) so the actor's own boot-time walk-in has
      // genuinely settled — same settle count the visit region's own
      // 'c'/'d'/'f' captures use for a jump that forces a fresh walk.
      await taxmanPage.evaluate(() => window.__mcgrotsDebug.stepFrames(450, 1 / 60));

      // --- 1: he is on screen and rendered, not merely in the scene graph --
      const taxmanRect = await projectRect('taxman');
      check('the taxman AABB projects to a sensible, non-degenerate rect while his scene is active',
        !!taxmanRect && taxmanRect.anyInFront
          && (taxmanRect.ux1 - taxmanRect.ux0) * (taxmanRect.uy1 - taxmanRect.uy0) > 0.0003,
        JSON.stringify(taxmanRect));

      const taxmanWithOn = await taxmanPage.screenshot({ type: 'png' });
      await taxmanPage.evaluate(() => { window.__mcgrotsDebug.taxman.setForceHidden(true); window.__mcgrotsDebug.stepFrames(1); });
      const taxmanWithOff = await taxmanPage.screenshot({ type: 'png' });
      const taxmanToggleDiff = meanAbsDiffRect(taxmanWithOn, taxmanWithOff, taxmanRect);
      // >3 rules out anti-aliasing noise on an unchanged frame — same
      // threshold and the same reasoning as the mcgrot/beret toggle checks
      // above (this renderer is deterministic; any positive reading here is
      // real signal). `setForceHidden` is the escape hatch this unit adds
      // specifically because `taxman.group.visible` is reasserted from the
      // pinned clock every frame — a plain `scene.getObjectByName('taxman')
      // .visible = false` here would be overwritten on the very next
      // `stepFrames` call and this check would read a false negative (found
      // by trying exactly that first, not reasoned about — see this
      // region's own landing notes).
      check('the taxman rect actually changes when force-hidden in the same boot (control: same toggle, would read 0.0 if visible were latched rather than driven live)',
        taxmanToggleDiff > 3, `diff=${taxmanToggleDiff.toFixed(1)}`);
      await taxmanPage.evaluate(() => { window.__mcgrotsDebug.taxman.setForceHidden(false); window.__mcgrotsDebug.stepFrames(1); });

      // --- 2: he does not occlude McGrot -----------------------------------
      // Same toggle, diffed inside McGrot's OWN rect this time — the mcgrot
      // region's own F22 technique, applied to a new occluder. The control
      // named in the brief: the identical measurement with the Taxman
      // absent, which must ALSO clear the floor (proving the instrument, not
      // just the outcome, holds at this anchor and pinned moment).
      const mcgrotRect = await projectRect('mcgrot');
      const mcgrotVisibleFraction = async () => {
        const withOn = await taxmanPage.screenshot({ type: 'png' });
        const wasVisible = await taxmanPage.evaluate(() => {
          const g = window.__mcgrotsDebug.scene.getObjectByName('mcgrot');
          const v = g.visible; g.visible = false; window.__mcgrotsDebug.stepFrames(1);
          return v;
        });
        const withOff = await taxmanPage.screenshot({ type: 'png' });
        await taxmanPage.evaluate((v) => {
          const g = window.__mcgrotsDebug.scene.getObjectByName('mcgrot');
          g.visible = v; window.__mcgrotsDebug.stepFrames(1);
        }, wasVisible);
        return countDiffPixels(withOn, withOff, mcgrotRect);
      };
      const fractionTaxmanPresent = await mcgrotVisibleFraction();
      await taxmanPage.evaluate(() => { window.__mcgrotsDebug.taxman.setForceHidden(true); window.__mcgrotsDebug.stepFrames(1); });
      const fractionTaxmanAbsent = await mcgrotVisibleFraction();
      await taxmanPage.evaluate(() => { window.__mcgrotsDebug.taxman.setForceHidden(false); window.__mcgrotsDebug.stepFrames(1); });

      // Same 20% floor the mcgrot region's own F22 gate established (natural
      // unoccluded range there: 28.8-33.7% across all five anchors).
      check('McGrot is not occluded at the wall anchor while the Taxman is present — his own visible-pixel fraction clears the established floor',
        fractionTaxmanPresent > 0.2,
        `${(fractionTaxmanPresent * 100).toFixed(1)}% of his rect is actually him (>20% required)`);
      check('control: the identical measurement with the Taxman absent also clears the floor, and is not materially higher (isolates his own contribution as ~zero, not "he happens not to matter here")',
        fractionTaxmanAbsent > 0.2 && Math.abs(fractionTaxmanPresent - fractionTaxmanAbsent) < 0.03,
        `present=${(fractionTaxmanPresent * 100).toFixed(1)}% absent=${(fractionTaxmanAbsent * 100).toFixed(1)}% (delta must be <3 points)`);

      // --- 4: his arrival is deterministic ----------------------------------
      // Same instant twice -> same presence/line; a different instant (still
      // inside the 101.8s cue, but past the ~25s scene) -> absent. Same
      // purity idiom the visit region's own cueAt control uses.
      const arrivalAt = async (t) => taxmanPage.evaluate((tt) => {
        const d = window.__mcgrotsDebug;
        d.rota.setClock(tt);
        d.stepFrames(1);
        return { visible: d.scene.getObjectByName('taxman').visible, cue: d.taxman.sceneCueAt(d.visit.cueAt(tt).elapsed) };
      }, t);
      const a1 = await arrivalAt(taxmanPin);
      const a2 = await arrivalAt(taxmanPin);
      const outside = cueInfo.start + sceneRows.dur + 20; // well past the ~25s scene, still inside the 101.8s cue
      const b = await arrivalAt(outside);
      check('his arrival is deterministic — the same pinned instant twice gives the same presence and line',
        a1.visible === a2.visible && a1.cue.id === a2.cue.id,
        `t=${taxmanPin.toFixed(1)} (asked twice): visible=${a1.visible}/${a2.visible} id=${a1.cue.id}/${a2.cue.id}`);
      check('control: a different pinned instant gives a different result (still inside the same 101.8s cue, past the ~25s scene)',
        a1.visible === true && b.visible === false,
        `t=${taxmanPin.toFixed(1)} visible=${a1.visible}; t=${outside.toFixed(1)} visible=${b.visible}`);

      check('console still clean after driving the taxman region',
        taxmanErrors.length === 0, taxmanErrors.slice(0, 3).join(' | ') || 'no errors');
      await taxmanPage.close();

      // --- 3: all six lines are audible -------------------------------------
      // Own page, real CDP click — F15's own lesson, repeated because this
      // repo has paid for it before: currentSrc/paused/currentTime prove a
      // source was wired up, not that anything is audible.
      const taxmanAudioPage = await browser.newPage({ viewport: { width: 1280, height: 720 } });
      const taxmanAudioErrors = [];
      taxmanAudioPage.on('pageerror', (e) => taxmanAudioErrors.push(String(e)));
      await taxmanAudioPage.addInitScript(() => {
        const proto = (window.AudioContext || window.webkitAudioContext).prototype;
        const orig = proto.createMediaElementSource;
        proto.createMediaElementSource = function (el) {
          const src = orig.call(this, el);
          const analyser = this.createAnalyser();
          analyser.fftSize = 2048;
          src.connect(analyser);
          window.__mcgrotsAnalyser = analyser;
          return src;
        };
      });
      await taxmanAudioPage.goto(`http://127.0.0.1:${port}/mcgrots.html?visit=on`, { waitUntil: 'load' });
      await taxmanAudioPage.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
      await taxmanAudioPage.evaluate(() => window.__mcgrotsDebug.pauseAuto());
      await taxmanAudioPage.click('#title-card'); // the real gesture

      const sampleRMS = async (p) => p.evaluate(() => {
        const a = window.__mcgrotsAnalyser;
        if (!a) return { peak: 0, rms: 0 };
        const data = new Uint8Array(a.fftSize);
        a.getByteTimeDomainData(data);
        let peak = 0, sumSq = 0;
        for (let j = 0; j < data.length; j++) {
          const v = (data[j] - 128) / 128;
          peak = Math.max(peak, Math.abs(v));
          sumSq += v * v;
        }
        return { peak, rms: Math.sqrt(sumSq / data.length) };
      });
      const waitForAudible = async (p, attempts = 15) => {
        for (let i = 0; i < attempts; i++) {
          const r = await sampleRMS(p);
          if (r.rms > 0.005) return r;
          await new Promise((res) => setTimeout(res, 150));
        }
        return { peak: 0, rms: 0 };
      };

      const lineResults = [];
      for (const p of linePins) {
        await taxmanAudioPage.evaluate((t) => { window.__mcgrotsDebug.rota.setClock(t); window.__mcgrotsDebug.stepFrames(1); }, p.at);
        const playingId = await taxmanAudioPage.evaluate(() => window.__mcgrotsDebug.readerAudio.playingId);
        const r = await waitForAudible(taxmanAudioPage);
        lineResults.push({ id: p.id, playingId, ...r });
      }
      const badLines = lineResults.filter((r) => r.playingId !== r.id || r.rms <= 0.005);
      check('all six lines are audible — real RMS off the output, not just element state, at every line in the exchange',
        lineResults.length === 6 && badLines.length === 0,
        lineResults.map((r) => `${r.id}: playing=${r.playingId === r.id} rms=${r.rms.toFixed(3)}`).join(' / '));

      // Control: a GAP between two lines (present, nothing scheduled) must
      // read silent — the same "a condition that must read zero" shape the
      // brief asks for, and the same idiom the visit region's own cue-0
      // control uses.
      if (gapPin !== null) {
        await taxmanAudioPage.evaluate((t) => { window.__mcgrotsDebug.rota.setClock(t); window.__mcgrotsDebug.stepFrames(1); }, gapPin);
        await new Promise((r) => setTimeout(r, 300)); // let the previous line's tail actually stop
        const silentSamples = [await sampleRMS(taxmanAudioPage), await sampleRMS(taxmanAudioPage), await sampleRMS(taxmanAudioPage)];
        const silentWorst = silentSamples.reduce((a, b) => (b.rms > a.rms ? b : a));
        check('...and control: a gap between two lines produces no output',
          silentWorst.rms <= 0.005, `t=${gapPin.toFixed(1)} peak=${silentWorst.peak.toFixed(3)} rms=${silentWorst.rms.toFixed(3)} (must be <=0.005)`);
      }

      await taxmanAudioPage.evaluate(() => window.__mcgrotsDebug.rota.clearClock());
      check('console clean on the taxman audio page',
        taxmanAudioErrors.length === 0, taxmanAudioErrors.slice(0, 3).join(' | ') || 'no errors');
      await taxmanAudioPage.close();

      // --- render pass: is it two people talking, or two files playing? ----
      // Numeric gates cannot see this (E5d's own lesson) — captured for the
      // review to open, not to be judged by a number.
      const shotsPage = await browser.newPage({ viewport: { width: 1280, height: 720 } });
      await shotsPage.goto(`http://127.0.0.1:${port}/mcgrots.html?visit=on`, { waitUntil: 'load' });
      await shotsPage.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
      await shotsPage.evaluate(() => window.__mcgrotsDebug.card.dismiss());
      await shotsPage.evaluate(() => window.__mcgrotsDebug.pauseAuto());
      await shotsPage.evaluate(() => window.__mcgrotsDebug.setMarkersVisible(false));
      const taxmanShots = [];
      const captureAt = async (label, t) => {
        await shotsPage.evaluate((tt) => {
          const d = window.__mcgrotsDebug;
          d.visit.rejoin();
          d.rota.setClock(tt);
          d.stepFrames(1);
        }, t);
        await shotsPage.evaluate(() => window.__mcgrotsDebug.stepFrames(450, 1 / 60));
        const buf = await shotsPage.screenshot({ type: 'png' });
        writeFileSync(join(OUT, `taxman-${label}.png`), buf);
        taxmanShots.push(label);
      };
      const mcgrotPin = linePins.find((p) => p.speaker === 'mcgrot').at;
      await captureAt('a-mcgrot-speaking', mcgrotPin);
      await captureAt('b-taxman-speaking', taxmanPin);
      if (gapPin !== null) await captureAt('c-gap-both-present', gapPin);
      await shotsPage.close();

      check('the exchange captured with both figures on screen (open and look — numeric gates cannot see whether this reads as two people talking)',
        taxmanShots.length >= 2, `${taxmanShots.length} frames written to docs/smoke/captures/mcgrots/g0/taxman-*.png`);
    }
  }

  for (const r of REGIONS) if (!wants(r)) skipped.push(`region ${r}`);

  // ------------------------------------------------------------- report ----
  const failed = results.filter((r) => !r.pass);
  console.log(`\n[mcgrots] renderer: ${LAUNCH_LABEL}   captures: docs/smoke/captures/mcgrots/g0/`);
  if (shots.length) {
    console.log('\n[mcgrots] shots:');
    for (const s of shots) {
      console.log(`  ${s.id.padEnd(9)} mean ${s.mean.toFixed(1).padStart(6)}  stddev ${s.stddev.toFixed(1).padStart(6)}` +
        `  draws ${String(s.drawCalls).padStart(3)}  tris ${String(s.triangles).padStart(6)}`);
    }
  }
  console.log('');
  for (const r of results) console.log(`  ${r.pass ? 'PASS' : 'FAIL'}  ${r.name}\n        ${r.detail}`);
  for (const s of skipped) console.log(`  SKIP  ${s}`);
  console.log(`\n[mcgrots] ${results.length - failed.length}/${results.length} passed in ${((Date.now() - started) / 1000).toFixed(1)}s`);

  shutdown();
  process.exit(failed.length ? 1 : 0);
} catch (err) {
  console.error('[mcgrots] suite error:', err);
  shutdown();
  process.exit(2);
}
