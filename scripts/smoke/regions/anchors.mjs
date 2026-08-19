export async function run(ctx) {
  const { page, consoleErrors, check } = ctx;
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
