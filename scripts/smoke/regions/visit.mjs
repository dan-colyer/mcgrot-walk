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

import { writeFileSync } from 'fs';
import { join } from 'path';

export async function run(ctx) {
  const { browser, port, OUT, check } = ctx;
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

  // --- 1b (G7m): the overlap exists and the schedule is still pure -----
  // Cue 3 is a walk into 'kerb' (35.4-39.9s); cue 4 is the reading that
  // now overlaps its tail from 36.9s (earlyStart, visit.js). t=37.5 sits
  // in that 1.0s overlap: cueAt must resolve to cue 4, not cue 3, and
  // `elapsed` must count from the EARLY start (0.6s), not the nominal one
  // (which would read negative). t=36.5, 0.4s EARLIER, is the control —
  // still inside cue 3's own window and before the authored overlap
  // boundary, so it must still read cue 3 (walk): the overlap has a real
  // edge, not "cue 4 is just always active near here."
  const overlapPurity = await visitPage.evaluate(() => {
    const d = window.__mcgrotsDebug;
    const inOverlap1 = d.visit.cueAt(37.5);
    const inOverlap2 = d.visit.cueAt(37.5);
    const beforeOverlap = d.visit.cueAt(36.5);
    return {
      in1: { index: inOverlap1.index, kind: inOverlap1.kind, audio: inOverlap1.audio, elapsed: inOverlap1.elapsed },
      in2: { index: inOverlap2.index, elapsed: inOverlap2.elapsed },
      before: { index: beforeOverlap.index, kind: beforeOverlap.kind },
    };
  });
  const overlapOk = overlapPurity.in1.index === 4 && overlapPurity.in1.kind === 'reading'
    && overlapPurity.in1.audio === '19f35bc7' && Math.abs(overlapPurity.in1.elapsed - 0.6) < 0.05
    && overlapPurity.in2.index === 4 && Math.abs(overlapPurity.in2.elapsed - overlapPurity.in1.elapsed) < 1e-9
    && overlapPurity.before.index === 3 && overlapPurity.before.kind === 'walk';
  check('the overlap exists and the schedule is still pure — t=37.5 (in the overlap) resolves to cue 4 reading with elapsed counted from its early start; t=36.5 (control, 0.4s earlier) still resolves to cue 3 walk',
    overlapOk, JSON.stringify(overlapPurity));

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

  // --- 1c (G7m): a mid-reading join hears the middle, not the start ----
  // Two UNTOUCHED cues so each pin forces a genuine fresh seek (audio.js
  // only re-seeks on an `info.id` change — reusing an id already playing
  // on this page would just show real-time drift from its earlier start,
  // not the join behaviour under test). Cue 6 (03347596, kerb, nominal
  // 127.9-146.1) for the mid pin; cue 10 (0121c47c, wall, nominal
  // 162.1-185.0) for the boundary control — neither carries an earlyStart
  // override, so this is G7h's plain join-mid-file capability, not the
  // overlap.
  // `mediaEl.currentTime` starts at 0 before any seek has actually
  // landed, so "not null" is not a usable readiness signal — 0 is a
  // valid number. `loadedmetadata` is async on a cold file (audio.js's
  // own F14 comment), so this is a fixed wait, same idiom as the
  // silence-tail waits elsewhere in this region, not a poll.
  const readCurrentTime = async (p) => p.evaluate(() => ({
    t: window.__mcgrotsDebug.readerAudio.currentTime,
    id: window.__mcgrotsDebug.readerAudio.playingId,
  }));
  await visitAudioPage.evaluate(() => { window.__mcgrotsDebug.visit.rejoin(); window.__mcgrotsDebug.rota.setClock(136.9); window.__mcgrotsDebug.stepFrames(1); });
  await new Promise((r) => setTimeout(r, 500));
  const midPos = await readCurrentTime(visitAudioPage);
  check('a fresh join mid-reading seeks the element into the file, not to its start (pinned t=136.9, cue 6, 9.0s in)',
    midPos.id === '03347596' && midPos.t !== null && midPos.t > 5 && midPos.t < 18.2,
    `playingId=${midPos.id} currentTime=${midPos.t === null ? 'null' : midPos.t.toFixed(2)} (want id 03347596, 5 < t < 18.2)`);
  await visitAudioPage.evaluate(() => { window.__mcgrotsDebug.visit.rejoin(); window.__mcgrotsDebug.rota.setClock(162.1); window.__mcgrotsDebug.stepFrames(1); });
  await new Promise((r) => setTimeout(r, 500));
  const boundaryPos = await readCurrentTime(visitAudioPage);
  check('...and a join AT the cue\'s own boundary reads ~zero (control, pinned t=162.1, cue 10)',
    boundaryPos.id === '0121c47c' && boundaryPos.t !== null && boundaryPos.t < 1.0,
    `playingId=${boundaryPos.id} currentTime=${boundaryPos.t === null ? 'null' : boundaryPos.t.toFixed(2)} (want id 0121c47c, t < 1.0)`);

  // --- 2b (G7m): the overlap is audible during the walk it overlaps ----
  // Cue 4 (19f35bc7, kerb) untouched so far on this page — first pin
  // forces a fresh seek/play, same idiom as above. t=37.5 is inside the
  // overlap (cue 4's earlyStart is 36.9); t=35.9 is the control, still
  // inside walk cue 3's own window but before that boundary — two
  // different pinned moments that must differ, or a frozen/always-on
  // overlap would pass this trivially.
  await visitAudioPage.evaluate(() => { window.__mcgrotsDebug.visit.rejoin(); window.__mcgrotsDebug.rota.setClock(37.5); window.__mcgrotsDebug.stepFrames(1); });
  const overlapAudible = await waitForAudible(visitAudioPage);
  const overlapId = await visitAudioPage.evaluate(() => window.__mcgrotsDebug.readerAudio.playingId);
  check('the overlapping reading produces real audio output while the walk it overlaps is still nominally open (pinned t=37.5, cue 4 via cue 3\'s window)',
    overlapAudible.rms > 0.005 && overlapId === '19f35bc7',
    `playingId=${overlapId} peak=${overlapAudible.peak.toFixed(3)} rms=${overlapAudible.rms.toFixed(3)} (must be >0.005)`);
  await visitAudioPage.evaluate(() => { window.__mcgrotsDebug.visit.rejoin(); window.__mcgrotsDebug.rota.setClock(35.9); window.__mcgrotsDebug.stepFrames(1); });
  await new Promise((r) => setTimeout(r, 300)); // let the overlap reading's tail actually stop
  const preOverlapSamples = [await sampleRMS(visitAudioPage), await sampleRMS(visitAudioPage), await sampleRMS(visitAudioPage)];
  const preOverlapWorst = preOverlapSamples.reduce((a, b) => (b.rms > a.rms ? b : a));
  check('...and 0.4s before the overlap starts, still inside the same walk cue, there is nothing to hear (control, pinned t=35.9, cue 3)',
    preOverlapWorst.rms <= 0.005,
    `peak=${preOverlapWorst.peak.toFixed(3)} rms=${preOverlapWorst.rms.toFixed(3)} (must be <=0.005)`);

  // --- 3/4 (G7m Part 2): the "Naw." input — swallowed during a reading,
  // plays during silence, and its cooldown holds -----------------------
  // Reuses the two pins already established above in this same block
  // (t=16.7 is cue 1, a reading; t=5 is cue 0, silence) rather than
  // inventing new ones.
  await visitAudioPage.evaluate(() => { window.__mcgrotsDebug.visit.rejoin(); window.__mcgrotsDebug.rota.setClock(16.7); window.__mcgrotsDebug.stepFrames(1); });
  const readingBaseline = await waitForAudible(visitAudioPage);
  const playCountBeforeSwallow = await visitAudioPage.evaluate(() => window.__mcgrotsDebug.naw.playCount);
  await visitAudioPage.evaluate(() => { window.__mcgrotsDebug.naw.press(); window.__mcgrotsDebug.stepFrames(1); });
  // waitForAudible, not a single fixed-delay sample: this is spoken
  // audio, not tone, and a single snapshot can land on a natural pause
  // between words — that would misread as damage the swallow never did.
  // Caught exactly that: a fixed 300ms sample here first read 0.006,
  // barely over threshold, on a page where the reading's own baseline
  // moments earlier was 0.105.
  const readingAfterPress = await waitForAudible(visitAudioPage);
  const playCountAfterSwallow = await visitAudioPage.evaluate(() => window.__mcgrotsDebug.naw.playCount);
  check('a press during a reading is swallowed — no playback triggered, and the reading\'s own output is unchanged (control, pinned t=16.7, cue 1)',
    playCountAfterSwallow === playCountBeforeSwallow && readingAfterPress.rms > 0.005,
    `playCount ${playCountBeforeSwallow} -> ${playCountAfterSwallow}; reading rms baseline=${readingBaseline.rms.toFixed(3)} after-press=${readingAfterPress.rms.toFixed(3)} (must both be >0.005, count must not move)`);

  await visitAudioPage.evaluate(() => { window.__mcgrotsDebug.visit.rejoin(); window.__mcgrotsDebug.rota.setClock(5); window.__mcgrotsDebug.stepFrames(1); });
  await new Promise((r) => setTimeout(r, 300)); // let the reading's tail actually stop
  const silenceBaseline = [await sampleRMS(visitAudioPage), await sampleRMS(visitAudioPage)].reduce((a, b) => (b.rms > a.rms ? b : a));
  const playCountBeforeSilence = await visitAudioPage.evaluate(() => window.__mcgrotsDebug.naw.playCount);
  await visitAudioPage.evaluate(() => { window.__mcgrotsDebug.naw.press(); window.__mcgrotsDebug.stepFrames(1); });
  const nawAudible = await waitForAudible(visitAudioPage);
  const playCountAfterFirstPress = await visitAudioPage.evaluate(() => window.__mcgrotsDebug.naw.playCount);
  check('a press during silence plays "Naw." (pinned t=5, cue 0)',
    nawAudible.rms > 0.005 && playCountAfterFirstPress === playCountBeforeSilence + 1,
    `silence baseline rms=${silenceBaseline.rms.toFixed(3)}; after press rms=${nawAudible.rms.toFixed(3)}; playCount ${playCountBeforeSilence} -> ${playCountAfterFirstPress}`);

  // Cooldown, same pinned instant (t=5): a second press right away must
  // not retrigger. Then the clock is moved forward past NAW_COOLDOWN_S
  // (6s), still inside cue 0's own 13.7s window, and a third press must.
  await visitAudioPage.evaluate(() => { window.__mcgrotsDebug.naw.press(); window.__mcgrotsDebug.stepFrames(1); });
  const playCountAfterRepeat = await visitAudioPage.evaluate(() => window.__mcgrotsDebug.naw.playCount);
  check('repeated presses inside the cooldown window produce one playback, not several (same pinned t=5)',
    playCountAfterRepeat === playCountAfterFirstPress,
    `playCount stayed at ${playCountAfterRepeat} across a second immediate press (expected ${playCountAfterFirstPress})`);

  await visitAudioPage.evaluate(() => { window.__mcgrotsDebug.rota.setClock(12); window.__mcgrotsDebug.stepFrames(1); });
  await new Promise((r) => setTimeout(r, 300)); // let the first Naw.'s tail actually stop
  await visitAudioPage.evaluate(() => { window.__mcgrotsDebug.naw.press(); window.__mcgrotsDebug.stepFrames(1); });
  const nawAudibleAgain = await waitForAudible(visitAudioPage);
  const playCountAfterCooldown = await visitAudioPage.evaluate(() => window.__mcgrotsDebug.naw.playCount);
  check('...but a press spaced beyond the cooldown window produces another (control, pinned t=12, 7s later, same cue 0)',
    nawAudibleAgain.rms > 0.005 && playCountAfterCooldown === playCountAfterRepeat + 1,
    `rms=${nawAudibleAgain.rms.toFixed(3)}; playCount ${playCountAfterRepeat} -> ${playCountAfterCooldown}`);

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
