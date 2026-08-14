// G4b (2/2) — playback: the readers speak.
//
// NO AudioContext EXISTS UNTIL start() IS CALLED, and start() is only ever
// called from card.js's onStart — the pointerdown that dismisses the title
// card is the gesture. Nothing here constructs a context, an element or a
// node at import time or at module scope.
//
// ONE VOICE AT A TIME: a single shared <audio> element, never a queue or a
// pool. A reader leaving mid-file (phase leaves 'reading', for any reason —
// scheduled departure or a clock jump) pauses it outright; there is no fade,
// because a fade toward silence is still a second thing playing while the
// next arrival starts.
//
// LISTENER RIDES THE CAMERA; THE READER NEVER TOUCHES IT (the brief's
// camera ruling, in the safe direction). `update()` is handed the camera's
// own position/facing every frame by main.js — this module never imports
// `camera` and has no way to write to it. The dependency runs one way.
//
// SEEK TO `elapsed`, ALWAYS — not just on a fresh arrival. `whatTheyAreDoing`
// is a pure function of the wall clock (rota.js), so a player who boots or
// walks up mid-reading must hear the middle of the file, not its start. This
// module does not special-case "just arrived" vs "already reading" — every
// time the scheduled id changes, playback starts at `info.elapsed`, which is
// zero for a fresh arrival and mid-file for a late one, by construction.
//
// PRELOAD POLICY: at most one file loaded at a time, the currently scheduled
// reading — never the whole 41MB pool. `mediaEl.src` is set once per
// reading, when the schedule's id changes; the browser's own network
// buffering is what "loading" means here, not a JS prefetch queue. Cost of a
// cold open: the current reading's own fetch (mean ~300 kB across the pool),
// nothing else in flight. This is deliberately the cheap end of "current
// plus at most the next one" — no next-file prefetch is built, because
// ARRIVE_LEAD_S is only 7s and the readings the schedule hands this module
// are already known just-in-time; nothing measured showed the extra
// complexity of a second buffered element paying for itself.
//
// A MISSING FILE STAYS SILENT. `play()`'s rejection is caught, and the
// element's own `error` event is a no-op — per CLAUDE.md's catalog rule,
// which this module cannot enforce (that's rota.js's pool-intersection job)
// but must not fall over if it is ever violated.

function audioUrl(id) {
  // Same convention as foot.js's loadFoot(): honour the single-file build's
  // window.MCGROT_ASSETS if one exists, else the dev server's relative path.
  // There is no single-file build for this game yet (brief, "no asset
  // contract here") — this branch exists for when one lands, not because it
  // fires today.
  if (typeof window !== 'undefined' && window.MCGROT_ASSETS?.audio?.[id]) {
    return window.MCGROT_ASSETS.audio[id];
  }
  return `assets/audio/${id}.mp3`;
}

export function createReaderAudio() {
  let ctx = null;
  let mediaEl = null;
  let panner = null;
  let currentId = null;

  function start() {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    mediaEl = new Audio();
    mediaEl.preload = 'auto';
    mediaEl.addEventListener('error', () => { /* missing file: stay silent */ });
    const source = ctx.createMediaElementSource(mediaEl);
    panner = ctx.createPanner();
    panner.panningModel = 'equalpower';
    panner.distanceModel = 'inverse';
    panner.refDistance = 2;
    source.connect(panner);
    panner.connect(ctx.destination);
  }

  function stopPlayback() {
    if (mediaEl && !mediaEl.paused) mediaEl.pause();
    currentId = null;
  }

  function setPannerPosition(p) {
    if (!panner) return;
    if (panner.positionX) {
      panner.positionX.value = p.x; panner.positionY.value = p.y; panner.positionZ.value = p.z;
    } else {
      panner.setPosition(p.x, p.y, p.z);
    }
  }

  function setListenerPose(p) {
    if (!ctx?.listener) return;
    const l = ctx.listener;
    if (l.positionX) {
      l.positionX.value = p.x; l.positionY.value = p.y; l.positionZ.value = p.z;
      l.forwardX.value = p.fx; l.forwardY.value = p.fy; l.forwardZ.value = p.fz;
      l.upX.value = 0; l.upY.value = 1; l.upZ.value = 0;
    } else {
      l.setPosition(p.x, p.y, p.z);
      l.setOrientation(p.fx, p.fy, p.fz, 0, 1, 0);
    }
  }

  // info: whatTheyAreDoing(now)'s return, or null. readerPos: the reader
  // group's world position, or null. listenerPose: {x,y,z,fx,fy,fz} off the
  // camera, always — this is read every frame regardless of whether
  // anything is playing, never the other way round.
  function update(info, readerPos, listenerPose) {
    if (!ctx) return; // no gesture yet — nothing to drive

    if (listenerPose) setListenerPose(listenerPose);
    if (readerPos) setPannerPosition(readerPos);

    if (!info || info.phase !== 'reading') {
      if (currentId !== null) stopPlayback();
      return;
    }

    if (info.id !== currentId) {
      stopPlayback();
      mediaEl.src = audioUrl(info.id);
      currentId = info.id;
      // Setting `.currentTime` before metadata has loaded is unreliable —
      // measured: Chromium silently drops the seek and starts from 0 rather
      // than queuing it. Seek and play once metadata is actually available;
      // `readyState` may already be there for a cached file, so check before
      // waiting on an event that may never fire again.
      const seekAndPlay = () => {
        mediaEl.currentTime = info.elapsed;
        mediaEl.play().catch(() => { /* missing/blocked: stay silent */ });
      };
      if (mediaEl.readyState >= 1) seekAndPlay();
      else mediaEl.addEventListener('loadedmetadata', seekAndPlay, { once: true });
    }
  }

  return {
    start,
    update,
    get started() { return ctx !== null; },
    get playingId() { return currentId; },
    get currentTime() { return mediaEl ? mediaEl.currentTime : null; },
    get currentSrc() { return mediaEl ? mediaEl.currentSrc || mediaEl.src : null; },
    get paused() { return mediaEl ? mediaEl.paused : true; },
  };
}
