// G4b (2/2). Its own page, closed at the end of this block — the checks
// below need a REAL, Playwright-synthesised click on the title card (CDP
// input, not page.evaluate's JS dispatch), because Chromium's autoplay
// policy gates AudioContext/media playback on genuine user activation. The
// other regions' `card.dismiss()` calls are a synthetic DOM removal and
// deliberately do not exercise this — they only need the overlay gone,
// not audio actually running.

export async function run(ctx) {
  const { browser, port, check } = ctx;
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
