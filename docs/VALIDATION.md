# The validation rig (E0.2)

Replaces the retired blind-eval harness (agent fleets scoring screenshots
against a rubric — see the ROADMAP retrospective). This is the fast
alternative: a documented in-game test API (`src/debug.js`,
`window.__mcgrotDebug`) plus a headless smoke harness (`scripts/smoke.mjs`),
so any AI session — or human — can verify the game in minutes. **Run it
before every deploy and after every milestone.**

```bash
npm run smoke                  # run the gate
npm run smoke -- --update-goldens   # recapture goldens + draw-call baseline
```

Non-zero exit = something regressed. The summary table printed at the end
tells you which check and why.

## What it checks

1. **Console clean** — no `console.error`, no uncaught page error, no
   unhandled rejection, across the whole boot-to-bookmarks sequence.
2. **Updater wiring** — `main.js`'s `updaters` list (the single array
   consumed by both `animate()` and `stepFrame`, closing the D0-era bug where
   a subsystem was wired into only one of the two) matches a hardcoded set in
   `scripts/smoke.mjs` (`EXPECTED_UPDATERS`). Adding/removing a subsystem
   must touch that constant deliberately — a silent mismatch here is exactly
   the bug class this check exists to catch.
3. **Draw-call budget** — at each bookmark, `renderer.info.render.calls`
   within ±10% of `docs/smoke/budget.json`'s baseline for that pose.
4. **Determinism** — `invariants().geomHash` identical across two independent
   fresh page loads. Non-negotiable: a mismatch means something that should
   be seeded/static changed between runs — see "Determinism" below.
5. **Goldens** — a screenshot at each bookmark, pixel-diffed against
   `docs/smoke/goldens/<id>.png` (pixelmatch, 0.1 per-pixel threshold, 0.5%
   changed-pixel tolerance).

## The debug API (`window.__mcgrotDebug`)

Hostname-gated to `localhost`/`127.0.0.1` (see `src/main.js`) — inert
everywhere else, including the shipped GitHub Pages build, even though
`src/debug.js` is a few KB in the bundle.

```js
const dbg = window.__mcgrotDebug;

await dbg.goto(550, 'east', 'close');   // chainage (m from north end), side, distance
await dbg.gotoBookmark('elm-row-hero'); // one of dbg.bookmarks
dbg.face(x, z);                         // look at a world XZ point, at current eye height
dbg.invariants();                       // -> {drawCalls, triangles, geomHash, updaterCount, updaterNames, consoleErrors}
dbg.bookmarks;                          // the curated ~8-pose golden set
dbg.setTime(14); dbg.setWeather('rain'); // STUBS — console.info + no-op until E2
dbg.pauseAuto(); dbg.resumeAuto();      // stop/restart the live rAF loop (see "Determinism")
dbg.stepFrame(1/60, t);                 // manually advance one frame (back-compat, pre-E0.2 probe)
```

`goto`/`gotoBookmark` are **async** — they settle the camera (~150 stepped
frames, so leithers/NPCs/audio have reacted to the teleport) and then wait
for any shopfront atlas page the engine's own lazy-loader has just marked
`loaded` to finish decoding, polled via `page.mesh.material.map.image.complete`
(texture decode is real async browser work; stepping simulation frames
doesn't drive it, so this polls on a timer instead — it can't affect
determinism because it never advances any seeded/stepped state, only waits
for it to be ready). Always `await` them.

The ~150-frame settle loop is wrapped in `try/catch` per-frame: positional
audio's distance-based gain ramp throws on the non-finite value a raw
teleport briefly produces (see `src/proximity-audio.js`) — expected and
harmless, not a sign anything is broken.

### `goto` geometry

`side`/`distance` follow the same convention `scripts/eval-poses.mjs` (the
archived D4 eval) used: `close` stands ON the target side, 12m out, facing
outward at it; `far` stands on the OPPOSITE side, 12m out, facing across at
it. Both are within the player's soft-clamp radius (16m, `src/controls.js`),
so every bookmark is a pose a player could actually stand at.

**Known dead zone:** chainages very close to a road junction/plaza (e.g.
~100-250m from the north end, near Picardy Place) have buildings set back
much further than the usual ~12m frontage line — `goto` there can land the
camera in the open gap, looking down the corridor instead of at a wall.
Verified visually per-bookmark; if you add one in that range, screenshot it
before committing.

## Invariants reference

| Field | What it means | If it fails |
|---|---|---|
| `drawCalls`/`triangles` | `renderer.info.render` after one stepped frame | A budget breach usually means new unmerged geometry (a new per-NPC mesh, an unbatched decal) landed somewhere it'll multiply by hundreds of instances. Check what changed near that bookmark's chainage. |
| `geomHash` | FNV-1a over: the merged buildings mesh's position array, every `InstancedMesh`'s `instanceMatrix` (chimneys, aerials, birds, vermin, roadwork cones — found by traversal, not a hardcoded list), and every NPC's placed position (NPCs are individual `Group`s in this codebase, not instanced, but their placement is just as seeded — see `src/debug.js`'s `computeGeomHash`) | **Determinism breach = a seeded PRNG call sequence got disturbed.** Treat as a blocker (see root `CLAUDE.md` / `docs/ROADMAP.md`: "seeded PRNG order is sacred; additions via hash32 only"). Bisect recent commits touching `hash32`/`hash2` call sites in `chimneys.js`, `gables.js`, `shopfronts.js`, `road.js`, `npcs.js`. |
| `updaterCount`/`updaterNames` | `main.js`'s `updaters` array | A new subsystem wired into `animate()` but not `stepFrame` (or vice versa) — the exact D0 bug this exists to catch. Update `EXPECTED_UPDATERS` in `scripts/smoke.mjs` deliberately when you add one. |
| `consoleErrors` | `console.error` calls + `window` `error`/`unhandledrejection` events, collected from page load | Any non-empty result is a bug, not noise — `console.warn` (chimney/building skip warnings) is expected and NOT counted. |

### Determinism: why `pauseAuto()` matters

`main.js`'s `animate()` runs on a real `requestAnimationFrame` loop with
wall-clock `dt` — needed for actual play, useless for reproducibility.
Leithers/birds/vermin/scenery are all seeded and driven by `dt`, so two
page loads with different real-world frame timing would otherwise produce
different positions by the time a screenshot is taken, even though nothing
is actually broken. `scripts/smoke.mjs` calls `dbg.pauseAuto()` immediately
after clicking through the title card, so from that point on the world only
advances via explicit `stepFrame` calls (deterministic `dt`, deterministic
frame count) — this is *why* the determinism check is meaningful at all.
Don't remove the `pauseAuto()` call when editing the harness.

Geometry that visibly moves (leithers walking, birds wheeling, smoke) is
**excluded** from `geomHash` for the same reason it needs `pauseAuto()`:
it's real-time-animated, not purely seeded-placement, so it's not the right
thing to assert bit-for-bit sameness on. What IS hashed is placement
established once at build time (buildings, chimneys/aerials/cones/rats'
initial instance transforms, NPC spawn points) — nothing here should ever
differ between two fresh loads of the same code.

## Adding a bookmark

1. Add an entry to `BOOKMARK_DEFS` in `src/debug.js` — either
   `{ id, chainage, side, distance }` (goes through `goto`'s geometry) or
   `{ id, custom: true, camera: {x,y,z}, lookAt: {x,y,z} }` for a
   hand-placed shot (e.g. `skyline`, which isn't chainage-derived).
2. `npm run bundle`, open the dev server, `dbg.gotoBookmark('your-id')`,
   screenshot — confirm it's not in the dead zone above and shows real
   content.
3. `npm run smoke -- --update-goldens` — this captures both the new golden
   PNG and its budget.json entry in one pass (missing entries are always
   captured, `--update-goldens` forces recapture of existing ones too).
4. Review the new files in `docs/smoke/goldens/` and the diff to
   `docs/smoke/budget.json` before committing — a golden is only as good as
   the human who looked at it once.

## Golden diffs: `--update-goldens` vs a human look

- **Intentional visual change** (you changed a texture, added geometry, moved
  a bookmark) → `--update-goldens`, then eyeball the new PNG once before
  committing. The tolerance isn't a substitute for that one look.
- **Unexplained diff on unrelated work** → human eyes, always. The tolerance
  (0.5% changed pixels, per-pixel threshold 0.1) is sized to absorb
  antialiasing/compression jitter, not to wave through a real regression.
  Pull both PNGs up side by side before deciding which one is right.
- Goldens will be **recaptured wholesale** when E1 (terrain incline) lands —
  camera heights and horizons shift street-wide. Until then the tolerance
  protects against accidental drift, not intentional change.

## Draw-call budget: measured, not assumed

`docs/smoke/budget.json`'s per-bookmark values were captured from a live
run, not estimated: they range from ~25 draw calls (a tight fascia close-up,
most of the street frustum-culled) to ~930 (the `skyline` pose, which looks
down the full corridor and catches hundreds of individually-drawn NPCs and
building segments at once). If you see a number here and expected something
closer to "one flat total" — draw calls are inherently pose-dependent in a
first-person game; there's no single scene-wide constant to check against,
only per-pose baselines with a tolerance.

## Browser-pane QA recipe (interactive investigation)

For poking around live rather than running the full harness:

1. Open the dev server preview, click `#title-enter` (or
   `document.getElementById('title-card').click()` via the JS tool).
2. `window.__mcgrotDebug.pauseAuto()` if you need reproducible frames;
   skip it if you just want to look around normally.
3. Drive frames explicitly when the preview pane is backgrounded (browsers
   throttle/pause `requestAnimationFrame` for hidden tabs — this is also
   why `stepFrame` exists at all):
   ```js
   for (let i = 0; i < 150; i++) {
     try { window.__mcgrotDebug.stepFrame(1/60, i/60); } catch {} // audio ramp on teleport
   }
   ```
4. `await window.__mcgrotDebug.goto(chainage, side, distance)` or
   `gotoBookmark(id)`, then screenshot/inspect via the usual browser tools.
5. `window.__mcgrotDebug.resumeAuto()` before handing back to a human tester
   — otherwise the world stays frozen except for whatever `stepFrame` calls
   you make.

## Adding to CLAUDE.md

`CLAUDE.md`'s Commands section points here:
`npm run smoke` — the validation rig; see docs/VALIDATION.md.
