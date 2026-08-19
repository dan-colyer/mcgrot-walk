// G4a. Who is at the pitch, driven by wall-clock time, never session start.
// The camera-independence check is the important one here (Dan's ruling,
// 2026-08-12: actors must not affect the camera) — everything else is the
// schedule's own correctness.

import { writeFileSync } from 'fs';
import { join } from 'path';

export async function run(ctx) {
  const { page, browser, port, OUT, consoleErrors, check } = ctx;
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
