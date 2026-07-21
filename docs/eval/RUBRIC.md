# D4 façade evaluation harness

## Purpose

Milestone D4 replaces the tile-pool/collage façade system with one authored
full-elevation texture per building. Success is measured as a **baseline → final
delta** plus an absolute bar, both from the same deterministic pose set, scored
**blind** (a fresh sub-agent sees only a screenshot and this rubric — no
implementation context, no source code, no knowledge of what changed).

## Pose set

`scripts/eval-poses.mjs` reads `docs/eval/streetline.json` (a snapshot of
`window.__mcgrotDebug.world.streetLine`, captured live from the running
engine — see "Refreshing the streetline snapshot" below) and writes
`docs/eval/poses.json`.

- **Chainage**: every 85m from chainage 40 to the street end (~1617m) — 19
  points, the same spacing as the D0 audit (`docs/audit/`) for continuity.
- **Side**: `east` and `west`.
- **Distance**: `close` and `far`. Both are camera offsets of 12m from the
  street centreline (`SIDE_OFFSET` in eval-poses.mjs) — chosen because the
  player is soft-clamped to 16m from centreline (`MAX_OFFSET`,
  `src/controls.js`), so both poses are vantage points a player could
  actually stand at:
  - `close`: camera stands ON the target side, 12m out, facing outward at it
    (mirrors the brief's "~12m close-up" — this is where "can I walk into
    this shop" lives).
  - `far`: camera stands on the OPPOSITE side, 12m out, facing across at the
    target side (mirrors the brief's "~25m across-street view" — total gap
    ≈ 2×12m).
- 19 × 2 × 2 = **76 poses** per scoring run.

Each pose is `{id, chainage, side, distance, camera:{x,y,z}, lookAt:{x,y,z}}`.
Camera `y` is 1.7 (eye height) throughout.

## Capture + scoring method

No headless-browser dependency exists in this project (constraint: no new npm
deps), so this is a **documented probe recipe**, not a fully unattended
script. Each scoring pass is driven by fresh sub-agents (Task/Agent tool)
that:

1. Open their own browser tab against the running dev server
   (`npm run dev`, or the workspace preview).
2. Dismiss the title card (`document.getElementById('title-enter').click()`).
3. For each assigned pose: set `window.__mcgrotDebug.camera.position` /
   `.lookAt(...)` from the pose's `camera`/`lookAt` fields, call
   `window.__mcgrotDebug.stepFrame(0.05, 1)` to force a render, then take a
   screenshot.
4. Score the screenshot against the rubric below — **the agent is given
   nothing else**: not this project's CLAUDE.md, not shopfronts.js, not the
   D4 brief, not "what changed". Only the pose id and the rubric text.
5. Return one verdict per pose: `pass` / `fail` + the single worst fault (or
   `none`).

Each agent is assigned a batch of ~9-10 poses (its own tab, so batches run in
parallel) rather than one agent per pose — still blind (no cross-pose or
cross-agent contamination of judgement), just fewer agent spin-ups.

Results are written to `docs/eval/baseline-scores.json` (pre-D4) and
`docs/eval/final-scores.json` (post-D4), each a flat array of
`{id, chainage, side, distance, verdict, fault, note}`.

## The rubric (given verbatim to each scoring agent)

> You are looking at one screenshot from a first-person 3D reconstruction of
> a post-apocalyptic Edinburgh street (Leith Walk). Judge ONLY what is
> visible in this image. You have no other context about this project — do
> not guess at intent, just describe what you see.
>
> Check for these specific faults, each of which is an automatic FAIL if
> present anywhere in frame:
> 1. **Unreadable shopfront** — a ground-floor frontage that doesn't read as
>    any specific, coherent real-world shop (illegible collage, mismatched
>    fragments, or a shopfront that doesn't look like a shopfront at all).
> 2. **Stretched texture** — any texture visibly stretched or squashed out
>    of its natural proportions.
> 3. **Wrong perspective** — a texture whose photographed camera angle
>    doesn't match how it's mounted in the 3D scene (a photo taken at an
>    angle, pasted flat-on, so verticals lean or converge wrong).
> 4. **Cropped mid-façade** — a building frontage that is visibly cut off
>    partway through a shop unit or window bay, rather than at a natural
>    building edge.
> 5. **Repeating upper storeys** — the same window-bay/masonry tile visibly
>    repeated as wallpaper up or along a building's upper floors.
>
> A featureless, untextured, or flat-blank wall occupying a significant part
> of the frame is ALWAYS a fail, regardless of how well the rest of the
> scene reads — score it as fault 4 (cropped-mid-façade) if it interrupts a
> terrace, or fault 1 (unreadable shopfront) otherwise. A wall that carries
> real texture but has a visible defect (repetition, mirroring, a seam) is a
> less severe outcome than a blank wall — both still fail, but do not let a
> textured-with-a-defect wall read as worse than the blank wall it would
> replace.
>
> Then answer: **could this frame pass as a photograph of a real (if
> derelict, post-apocalyptic) Edinburgh street? What is the single thing
> that breaks the illusion first, if anything?**
>
> Note: flat/missing roofs and missing pavement detail are KNOWN and OUT OF
> SCOPE for this evaluation — do not fail a pose for those alone.
>
> Return: `verdict` (pass/fail), `fault` (one of the 5 categories above,
> `roof-or-pavement` if that's the only issue, or `none`), and one sentence
> saying what you saw.

## Scoring protocol

- A pose FAILS if fault 1-5 is present, or if the "does it break the
  illusion" answer names something outside the explicitly out-of-scope list
  (roofs, pavement).
- A pose PASSES otherwise, even with minor grime/lighting quibbles — the bar
  is "reads as a real building", not "flawless".

## Acceptance bar (from the D4 brief)

1. ≥80% of the 76 poses pass.
2. ZERO poses fail on faults 1-5 specifically (roof/pavement-only fails don't
   count against this).
3. Baseline → final delta is reported honestly, including any pose that
   regressed.

## Refreshing the streetline snapshot

Only needed if `assets/leith.json` or the street-chain-building logic in
`src/world.js` changes (out of scope for D4 — the corridor geometry is
untouched). To regenerate:

```js
// paste into the browser console on the running dev server, after the title
// card is dismissed:
copy(JSON.stringify(window.__mcgrotDebug.world.streetLine))
```

then paste the result into `docs/eval/streetline.json` and re-run
`node scripts/eval-poses.mjs`.

## D4.1 — corridor clamp (positions v2)

`eval-poses.mjs` now clamps each pose against `assets/shopfronts/manifest.json`'s
frontage runs: if a naive 12m offset would land the camera inside or behind a
building (the street polyline hugs the west building line in places), the
camera is pulled to ~2m in front of the nearest crossed frontage plane
instead. This changed 28/76 poses — every changed pose is a `*-west-close` or
matching `*-east-far` (same physical position, opposite look direction),
consistent with the known west-hugging streetline defect. Pose **ids** are
still comparable to D4's baseline/final runs; pose **positions** are not
(v2) — compare pass-rate aggregates, not per-pose deltas, against the D4 run.
