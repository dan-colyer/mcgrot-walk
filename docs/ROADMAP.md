# McGrot Walk — Roadmap (E-line)

Rewritten 2026-07-23 after the Phase D retrospective. Supersedes the D-line and all
prior phase plans.

## What McGrot Walk is

A first-person simulation of Leith Walk — real buildings, real shops, real slope —
inhabited by a living population of Leithers, where the player explores the street
while hearing and reading McGrot comics, and the Leithers themselves hold opinions
about McGrot that drive how they behave.

## Phase D retrospective (why the roadmap changed)

Six milestone cycles (D4–D9) pursued façade quality measured by a 76-pose blind
eval. The score moved 46.1% → somewhere in 44–54%, and D8.2 proved cross-session
grader drift is wider than the movement being measured. Remaining façade defects
are source-limited (oblique low-res CC photos, small pool) — engine work cannot
fix them; the handmade ChatGPT trickle can, for free.

Decisions taken:

- **The blind eval is retired.** Registers and scores are archived under
  `docs/eval/` as history. `poses.json` stays frozen as an artefact but is no
  longer an instrument. Dan is the grader.
- **Façade quality becomes a background trickle**, not a milestone track:
  handmade shopfront drops (`assets/shopfronts/handmade/b<i>.png` →
  `node scripts/ingest-handmade.mjs`) alongside the daily TTS run.
- **Process:** fewer, bigger milestones. Sonnet implements self-contained content
  features solo against a tight brief; architect review is reserved for
  cross-cutting engine work. Acceptance = the smoke harness (below) + a short
  in-browser walkthrough, never fleet sweeps.

## Standing trickles (daily, near-zero cost)

- **TTS:** `set -a; source .env.local; set +a; node scripts/generate-tts.mjs`
  (~12–20/day before free-tier 429s; resumable; completed clips skip). 93/418.
- **Handmade shopfronts:** Dan feeds real-shop reference photos to ChatGPT,
  drops results in `assets/shopfronts/handmade/`, ingest script does the rest.
  Wishlist: `docs/shopfront-wishlist.md`.

## E0 — Close the ledger + the validation rig

*Close Phase D; replace the eval with tooling that lets an AI session validate
the game itself in minutes.*

1. Visual check of D9's truncation fixes at ~3 affected poses; deploy `main` to
   gh-pages; commit pending TTS mp3s; archive the D-line registers.
2. **Validation rig** (the long-term answer to AI-first verification):
   - `src/debug.js` — grow `window.__mcgrotDebug` into a stable, documented
     test API: `goto(chainage, side, dist)`, `face(target)`, `setTime(h)`,
     `setWeather(state)`, `invariants()` → `{drawCalls, triangles, geomHash,
     updaterCount, consoleErrors}`, `bookmarks` (a curated ~8-pose golden set
     that replaces poses.json).
   - `scripts/smoke.mjs` — headless (Playwright) boot → ENTER → assert
     invariants (determinism hash stable across two loads, draw-call budget,
     console clean, every subsystem's update wired) → capture the golden
     bookmarks to `docs/smoke/` → pixel-diff against goldens with a tolerance;
     non-zero exit on breach. Runs before every deploy.
   - `docs/VALIDATION.md` — the playbook: how to pose, what each invariant
     means, when a visual diff needs human eyes, how to add a bookmark.

## E1 — The Brae (the incline) — SHIPPED (phase-gate passed 2026-07-25)

*Leith Walk drops ~25–30m from Picardy Place to the Foot.*

Delivered (commits `8c081f0` + `f1f2927`): `src/terrain.js` as the sole height
authority (pure, PRNG-free, Hermite over hand-authored control points, 0m Foot
→ 27m Picardy), terraced buildings (per-building base + buried skirt), all
ribbons/entities/camera re-based, `src/forth.js` water + far-shore north of
the Foot. Phase-gate audit verdict: architecture sound for E2–E5.

Residuals carried forward (audit findings, none blocking):

- **The Forth reveal moved to E2.** The roadmap's original payoff ("water and
  Fife on the horizon" from the top) is impossible under the standing FogExp2
  (0.0095 caps view distance ~300m in every condition) — independent of the
  accepted terminus-building occlusion at the Foot. The geometry is in place
  and reads from elevated/clearing angles; E2's clear-weather states are what
  can open the long view.
- **Exaggeration is a reload decision, not a live dial.** `setExaggeration` is
  live but geometry bakes the profile at build, so a live change desyncs the
  camera and per-frame movers (rats/gulls/walkers) from the baked street
  (~10m of camera float at Picardy with k=1.5). To tune: edit the default in
  `src/terrain.js`, reload, judge on the move. Dan has not yet picked a
  keeper; default stays 1.0 (true grade).
- Per-frame `chainageOfPoint` is a linear scan over the 99-segment street
  line — fine at ~30 walkers, needs a cached lookup before E3 scales to
  hundreds.

## E2 — Atmosphere (dynamic time + weather)

*The largest beauty-per-effort win, and the engine behind half the delight
layer. Good light flatters simple geometry.*

Split into four milestones. The split changed after E2a shipped: the material
conversion below was found to be a prerequisite for weather, not a follow-on.

### E2a — The Light — SHIPPED + DEPLOYED (2026-07-25)

Time-of-day cycle (accelerated; phase seeded from the real date so each visit
starts differently). `src/atmosphere.js` is the sole authority, driving three
channels — scene lights, `toneMappingExposure`, and a tint registry over the
unlit materials — from a keyframe table authored as `paletteAt(hours, weather)`
with only the `overcast` column populated. Lit windows after dark
(`src/windows.js`). `setTime` is real. Commit `c199a68`, gh-pages `16ab787`.

### E2b — The Lit Street — SHIPPED + DEPLOYED (2026-07-26)

*Briefs: `~/.claude/plans/mcgrot-e2b-brief.md`, plus an E2b.1 fix round.*

Delivered. The readable set is `MeshLambertMaterial` and the torch pools real
light on a frontage — measured 418× on/off at 2.5m, 03:00, against a frontage
that sits 6.69m from a bookmark camera (just outside the torch's 6.5m reach,
which is why no bookmark pose can show it). Commit `acd0f26`, gh-pages
`a3333d5`.

E2b's first pass compensated for Lambert's `1/π` by lifting the **global** light
rig, which also hit the road, pavement, NPC coats, cars and flora — all already
Lambert and tuned to the old rig — for +42% to +99% full-frame luminance and a
roughly tripled road. E2b.1 reverted the rig and put the compensation on the six
converted materials instead, via `LIT_ALBEDO_GAIN` (`src/lighting-constants.js`,
4.7). Full-frame luminance is now within ±10% of the E2a goldens at all eight
bookmarks; draw calls unchanged. Full account in `docs/VALIDATION.md`.

Residuals carried forward:

- **Night is much darker than E2a** (`night darkens facades` 2.9% vs 8.3%),
  accepted as the torchlight noir the phase exists for. Beyond torch reach the
  street reads on lit windows, sky glow and silhouette alone.
- **Torch reach is deliberately undecided.** `TORCH_DISTANCE` stays 6.5m. It is
  isolated from the daylight goldens (torch intensity scales to ~0 by noon), so
  it can be changed at any time without re-reviewing the luminance table — and
  it is held for E2c.3, since haar and dynamic fog are what decide how far you
  should see at night. Judging it before they exist means judging it twice.
- **The shared albedo gain overshoots on face-up surfaces.** Tuned on vertical
  façades; litter comics lie flat and catch the strongest hemisphere irradiance,
  measuring +32.8% against E2a at overcast noon (no clipping, still legible).
  A per-surface gain would start here.
- `CLAUDE.md`'s "exhibit spots 60" is stale — there are no NPC spotlights, only
  the torch and three arc-flash `PointLight`s at intensity 0.

E2a's review found that **the torch cannot light anything the player reads** —
it is a `PointLight`, and façades, litter comics, NPC faces and the held comic
are all `MeshBasicMaterial`, which ignores lights. "Point the torch at it to
read" is structurally impossible for exactly those surfaces. Dan's call: convert
the readable set to lit materials.

This has to precede weather. A "genuinely sunny" state expressed only as a
`material.color` tint is a flat brightness multiplier with no sun angle and no
shadowed side of the street; once façades respond to lights, sunshine is a real
directional effect for free.

- Normals on the shopfront page + placeholder geometry (currently absent — a
  Lambert material on them renders black).
- Convert shopfront pages, the name-plate placeholder, the far shore, litter
  comics, NPC faces and the held comic to `MeshLambertMaterial`. Arc sparks, lit
  windows, the sky dome and every `SpriteMaterial` stay unlit by intent.
- Rebalance the light rig so noon looks unchanged, then walk the other keyframes.
- Prune the tint registry (it currently retains disposed page materials) and
  clamp `setDarkness(0)`, which sets `light.distance = 0` — unbounded, not off.
- New anti-regression: the torch must provably brighten a readable surface.

### E2c — Weather

Split into three. The original single bullet held a five-state machine, a
particle system, a material response, a shader change, dynamic fog, the Forth
reveal and a GPU budget re-check — four milestones of work and three unrelated
risk clusters.

#### E2c.1 — The Weather Axis — SHIPPED + DEPLOYED (2026-07-26)

*Brief: `~/.claude/plans/mcgrot-e2c1-brief.md`. Commits `e1a54c7` (implementation)
+ `29f82f9` (harness fix), gh-pages `e90cf4b`.*

Delivered. `weather` is real: `setWeather` runs a ~10s transition, and a call
arriving mid-transition freezes the current blended output as its new starting
point. `clear` reads as genuinely sunny — at 08:00 one side of the street is in
warm sun and the other in shade, which is the payoff E2b's Lambert conversion
bought and the only part of E2c that collects it. `sky.js` gained a `uCoverage`
uniform so `clear` thins the cloud deck rather than only recolouring it; it
scales the existing `cover` term, so the fog/sky seam invariant holds by
construction.

Verified independently: `sun.pos` byte-identical across both columns at all
seven hours, draw calls exactly ±0 against an untouched budget, `geomHash`
stable, clipping 0.000% everywhere, `fogDensity` and `skyFogLinked` intact after
all weather work, and a full 24h sweep with wraparound in both weathers with
zero console errors.

Two lessons recorded:

- **An acceptance criterion demanded more precision than the harness has.** The
  brief gated on the overcast goldens being pixel-identical. They aren't
  achievable: the animated cloud FBM under `uTime` gives sky-visible poses an
  inherent capture jitter up to ~0.11%, while the three close poses with no sky
  read exactly 0.000%. Confirmed by comparing against an earlier E2b review run
  on the same harness — same three zeros, same five non-zero, same magnitudes.
  Before writing "bit-identical" into a brief, check the harness is deterministic
  to that precision.
- **A golden that is never diffed is a screenshot.** The nine `clear` captures
  were written once and thereafter only measured for clipping, and the 08:00 one
  was written unconditionally on every run — so the pre-deploy gate mutated a
  tracked file and that golden could never fail. Fixed by routing every capture
  through a shared `checkGolden()`; smoke went 45 → 54 checks.

Residual for E2c.2: `setWeather('rain')` currently sets the reported weather to
`'rain'` while `stopsFor()` falls back to overcast, so `state().weather` names a
column that is not being rendered. Harmless until rain exists; a real trap the
moment it does and a name gets typo'd.

- The engineering is a refactor, not the palette data: `update()` currently
  lerps straight into the live light objects, which supports one blend axis
  (hour within one weather). Weather transitions need two — split into
  `samplePalette` → `blendPalette` → `applyPalette`, with the structs allocated
  once at construction.
- `src/sky.js` needs a `uCoverage` uniform. Cloud coverage is currently
  hardcoded (`smoothstep(0.40, 0.70, f) * 0.88`, `CLOUD_DENSITY` compiled into
  the shader string), so a clear state could only recolour the deck, not thin
  it. Scaling `cover` keeps it zero at the horizon, so the seam invariant
  survives by construction.
- `sun.pos` must match across weather columns at the same hour, or a transition
  slews the sun bodily across the sky.
- Gate: the eight existing overcast goldens stay **pixel-identical**. Overcast
  is unchanged data, so a behaviour-preserving refactor must not move a pixel.
- Watch `LIT_ALBEDO_GAIN` under a strong clear sun — it was tuned against
  overcast irradiance and the face-up litter comics clip first. Fix via the
  clear column's exposure, never by lowering the shared gain.
- Weather changes only on an explicit `setWeather`. Autonomous drift waits for
  E2c.3, when there are five states worth scheduling between.

#### E2c.2 — Rain — SHIPPED + DEPLOYED (2026-07-27, with E2c.2.1)

*Brief: `~/.claude/plans/mcgrot-e2c2-brief.md`.*

- A `rain` palette column with two new keyframe fields, `rain` (particle
  intensity) and `wetness`, both 0 throughout `overcast` and `clear` so their
  goldens stay untouched.
- **`drizzle` is derived, not authored** — a fixed blend of `overcast` and
  `rain` via E2c.1's own `blendPalette`, with a lower particle rate. No
  near-duplicate column to keep in sync, two goldens instead of eight, and the
  five-state vocabulary survives.
- **Nothing in this scene can be shiny.** Every material is
  `MeshLambertMaterial`, which has no specular term, and `src/cars.js:72`
  records `MeshStandardMaterial` being tried and rejected as "plasticky under
  this scene's lights". So wet-road response here is a per-weather darkening
  multiply on the existing road/pavement materials (their `color` defaults to
  white over a map, so this is clean). **Real sheen is deferred to E2c.3**,
  where the torch at night is what makes the case either way.
- Rain is ONE camera-following `THREE.Points` system, unlit, wrapping, constant
  particle count. Two traps recorded so they aren't rediscovered: every
  `InstancedMesh` silently enters `computeGeomHash` (`src/debug.js:91`), so an
  instanced rain system would join the determinism check; and `scenery.js`'s
  smoke uses one `THREE.Sprite` per puff, which is the wrong idiom at rain
  scale. Particle phase must be a pure function of the stepped `t`, or the
  goldens flake permanently.
- Puddle **reflections are dropped from E2c** — they need a render pass, so they
  belong with E2d's post-processing, either properly or as a screen-space fake.

Implemented and reviewed 2026-07-27; held for a fix round before deploy. The
design constraints all held — one `THREE.Points` draw call (+1 in rain and
drizzle, ±0 in overcast and clear, and flat across intensity), `geomHash`
unmoved, wetness non-compounding, `k = 0.45` exact. Three defects, all in
`#### E2c.2.1` below.

#### E2c.2.1 — Rain fixes

*Brief: `~/.claude/plans/mcgrot-e2c21-brief.md`.*

Three review lessons worth keeping whatever the fixes look like:

- **A pure function of `t` is not automatically a stable one.** Rain's phase is
  `wrap(seedY − fallSpeed · t)` — pure in `t` as the brief demanded, but
  `fallSpeed` varies with intensity, so during a transition every drop moves by
  about `t × Δv` per frame. Measured 9.29 m per frame at t = 600 s against a 20 m
  box: a full re-randomise every frame, for the whole 10-second transition,
  worsening for the life of the session. Purity in `t` is necessary; independence
  from every *other* animated quantity is what actually makes it stable.
- **The harness's own regime can hide a bug from the harness.** Smoke drives `t`
  from ~0, where the same effect measures 0.15 m and looks correct. A check that
  only ever exercises small `t` cannot see a defect proportional to `t`.
- **Protecting a measurement can corrupt the evidence.** Dropping the pre-settle
  kept the draw-call comparison honest against `budget.perBookmark`, but left
  five goldens captured mid-blend — including both drizzle ones, at 0.099 and
  0.198 against a 0.378 target, so the only visual evidence for the derived
  weather showed no rain at all. The fix is a matched control pass, not a
  shortened settle.

Also closes the E2c.1 residual above: `setWeather` still accepts any string, so a
typo renders overcast while `state().weather` reports the name it was given. It
was left out of the E2c.2 brief by mistake, not missed by the implementer.

Shipped and deployed 2026-07-27 — `main` `ecae9ac`, gh-pages `12b65c8`, bundle md5
`2751010499f82e035efd21a0342ccaa7`, CDN-confirmed on the third poll. Smoke 112
checks, 0 failures. Rain and drizzle both cost exactly +1 draw call at all eight
bookmarks against a matched control; overcast and clear ±0; `geomHash dd1a6657`
throughout.

Two more lessons from the fix round, both about the *checks* rather than the code:

- **A regression check is worthless until you have watched it fail.** Fix 1's new
  displacement gate was verified by re-breaking `rain.js` in a scratch worktree
  and running it: 30.21× against a ≤3× gate. The pre-fix settled reading came out
  at 0.2427 m/frame, which is exactly `(7 + 9 × 0.84) / 60` — a metric landing on
  its own arithmetic is what makes it trustworthy. Do this for every new gate.
  - Known limit: the metric folds displacement circularly at ±`BOX_HEIGHT`/2, so
    it aliases above 10 m/frame. Fine at t = 600 s; it would under-report a
    scramble deep enough to exceed that.
- **"Working tree clean" means nothing until the files are committed.** Fix 3
  moved the night capture out of `goldens/` but left the write unconditional and
  the file tracked, so the gate still dirtied the tree on every run — the same
  defect as `29f82f9`, one directory over, and invisible while the file was
  untracked. `docs/smoke/captures/` is now gitignored (`ecae9ac`): capture jitter
  means those bytes can never be stable, so it holds regenerated evidence for a
  human and nothing ever diffs it.
- Cost note: the suite is now ~38 minutes wall-clock and eight fresh boots. It is
  past the point where "run the gate" is a cheap action.

#### E2c.3 — Haar and the long view

The one risk cluster that touches view distance, GPU budget and the seam
invariant at once, which is why it is last. **Split into three briefs
(2026-07-28)** — the original grouping was about coupling, and only the first
third is genuinely coupled:

- **E2c.3a — Dynamic fog and the long view. DONE (2026-07-28), see below.** The
  fog-density axis, the `clear` retune it enables, the `LOAD_RANGE` widening
  that was expected to follow, and the Forth reveal. Brief:
  `~/.claude/plans/mcgrot-e2c3a-brief.md`.
- **E2c.3b — Haar. NEXT.** A new weather column, and the thick end of the same
  density axis. Brief: `~/.claude/plans/mcgrot-e2c3b-brief.md`.
  - **Authored, not derived.** `drizzle` could be a `DERIVED` blend because it
    sits between two existing states; haar sits outside all of them on both
    density and colour, so there is nothing to blend it from.
  - **Haar is bright, not dark.** A daytime haar is a luminous white-out — flat,
    cold, high-key light, not gloom. If it reads as a darker `rain` the column
    is not worth its eight goldens, and the goldens cannot catch that (a
    wrong-but-consistent palette diffs at 0.000% against itself).
  - **Starting density 0.03**, tuning band 0.02–0.05 (`FogExp2` is ~90% opaque
    at `1.517/density`, so 50 m at 0.03). Bounded by things that must survive:
    the far frontage ~12–15 m across staying legible, and `interact.js`'s 8 m
    prompt range never firing for someone you cannot see.
  - **"Rolling up from the Forth" is dropped as a spatial effect.** `FogExp2` is
    isotropic; directional or volumetric haar needs a custom fog shader or a
    post pass, which is E2d and would put the seam invariant back in play. The
    rolling is temporal — the existing 10 s transition. A scheduler that favours
    haar at the Foot is the natural home for the idea, in 3c.
  - **Haar should cost zero draw calls** (`rain: 0` at every stop), against
    rain/drizzle's exact +1. That is a gate, using E2c.2.1's matched control.
  - `WEATHER_CHAIN` goes from 12 ordered pairs to **20**, chain length 21.
- **E2c.3c — Night reach (`TORCH_DISTANCE`), road sheen, autonomous weather
  scheduling.** Night reach wants haar and dynamic fog to judge against, so it
  goes last rather than in a vacuum.

**The constraint that shapes 3a:** fog density multiplies every pixel, so a
global change moves all 27 desktop goldens in the same commit as the riskiest
change in the project. 3a therefore lands the axis as a proven no-op first
(every column pinned at today's 0.0095, all 27 goldens unmoved), and only then
retunes the `clear` column — moving exactly its 9 goldens and leaving the other
18 as the invariant that catches a leak. A long view belongs to a clear day
anyway, so this is better weather design than a global thinning, not just a
safer one.

- Dynamic fog **density** (E2c.1 leaves it pinned at 0.0095). The fog/sky seam
  invariant (`sky.js`) must survive it.
- Haar rolling up from the Forth.
- **The Forth reveal (inherited from E1) — Foot-only.** Measured: the far shore
  needs fog 3.1× thinner to read from the Foot, but 17× thinner from Picardy,
  which would destroy the haze. The "water and Fife from the top of the brae"
  framing is dropped; the reveal ships for the lower Walk and the descent.
  ~~Thinning fog also out-ranges the shopfront pager (`LOAD_RANGE = 250`), so it
  lands with a pager widening (~67MB GPU per 4096² page) and a budget
  re-check.~~ Measured false in 3a — occlusion, not fog, is what hides the
  unloaded pages, and 250 needed no change. See "what actually landed" below.
- **Night is too dark — Dan's call, 2026-07-27.** Decide `TORCH_DISTANCE` here,
  against haar and dynamic fog rather than in a vacuum, and lift the night
  palette with it. The problem is *reach*, not state: 6.5m lights a façade you
  are standing at and nothing else. (E2e since added a player-facing on/off
  toggle — `toggleOn` in `createPlayerTorch`, `src/world.js` — kept deliberately
  separate from the palette's `torch` darkness scale so the two don't fight over
  the same field. That toggle does not work on iOS; see "iOS bugs" below.)
  - Headroom check before retuning: the `night darkens facades` gate is a
    **maximum** (22:00 mean luminance ≤45% of 13:00's) and currently reads 2.9%.
    Night can be lifted a long way before the gate is the constraint.
  - The three no-sky goldens (`north-150-close`, `mid-550-close`,
    `fascia-close`) are captured at 13:00, so a night lift shouldn't move them.
    Confirm rather than assume.
- Autonomous weather scheduling, once all five states exist.

##### E2c.3a — what actually landed (2026-07-28)

Three commits, in the order the containment argument needs: `c70ba9b` (item 0,
the iOS fail-soft), `e5f5b20` (the axis pinned at 0.0095, **no golden file
touched**), `1ac1990` (clear's 08/12/17 stops retuned to 0.0022, exactly the 9
`-clear` goldens recaptured). Smoke: 130 checks, 0 failures, ~4m44s, tree clean
across two consecutive runs. Reviewed against the brief with independent
measurement, not the report.

- **The long view is real.** `skyline` on clear now reads the street down to
  the far rooflines instead of dissolving at ~250m, with no horizon seam and no
  world edge at any pose.
- **`LOAD_RANGE` stays at 250.** Not a deferral — measured. Load every façade
  page, then toggle `.visible` on only those a 250m range would have skipped
  and re-render the same frame: **0 pixels** differ at all eight bookmark
  poses, and walking chainage 100→1500 looking along the corridor both ways the
  worst stop is **263 pixels (0.026%)**, one cluster at the vanishing point.
  Peak residency 4 of 8 pages, ~268MB of atlas texture. No GPU cost added, no
  draw-call budget moved. Method and the reason a naive pixel-diff cannot
  answer this are in `docs/VALIDATION.md`.
- **The Forth reveal is narrower than E1 promised.** It does read, and it is
  correctly hidden from Picardy (0 pixels) — but at eye height it covers only
  **344–540 pixels** of a 1280×800 frame, between chainage 5 and 80, and
  nothing from chainage 150 onward. The terminus building still blocks the axis
  dead-on, so what a walker sees is a dark band through the gaps beside it, not
  an estuary. The E1-era "3.1× thinner" figure was not re-measured; the shipped
  4.3× is justified against world-edge and seam limits instead. **Open
  question for 3b: whether to move the reveal off the fog axis** — a lower
  shore, a gap in the terminus row, or a viewpoint — rather than thin further.
- **The E1 measurement is retired.** Fog density is no longer a constant, so
  any future "N× thinner" claim has to name its column and hour.

##### E2c.3b — what actually landed (2026-07-28)

One commit, `5b2e1b7`: `HAAR_STOPS` authored (7 stops, `sun.pos` verified
byte-identical to `OVERCAST_STOPS` at every hour, as `clear` and `rain` also
are), `fogDensity` 0.03 flat, `wetness` 0.25, `rain` 0 throughout. 8 new
`-haar` goldens, no existing golden touched. 159 checks.

- **It is bright, and that is measured, not asserted.** Mean frame luminance at
  `mid-805-far`, 13:00: haar **124.7** vs overcast 57.0, clear 63.6, rain 23.8
  — 2.2× overcast. The failure the goldens could never catch (a
  wrong-but-consistent palette diffs at 0.000% against itself) did not happen.
- **Zero draw calls, confirmed independently** of the harness's own gate: haar
  47 = overcast 47 at `mid-805-far`, against rain's 48.
- **No `NaN` anywhere.** Swept all 5 weathers × 48 half-hours reading live
  `fog.density`, fog colour, exposure, sun/hemi/ambient intensity and
  `skyFogLinked` — every value finite, link held throughout. A missing palette
  field poisons both lerps silently and nothing throws, so this needed checking
  rather than assuming.
- **`WEATHER_CHAIN` is a genuine Eulerian circuit** — verified by construction,
  not by eye: 21 entries, 20 steps, all 20 ordered pairs present exactly once,
  no self-loops, closed.
- Both new gates watched failing under a deliberate density sabotage (ordering
  gate red; 5 of 8 haar goldens moved 19–34%).

**Open, and it is the harness's problem, not haar's: `elm-row-hero` is
bimodal.** A full smoke on an unmodified tree failed at
`golden-haar:elm-row-hero` (0.680% against 0.5%). It is the only pose with an
ambient leither filling ~a tenth of the frame at close range; leithers are
real-time simulated and their phase depends on how many rAF frames ran before
`pauseAuto()`. Measured over six fresh boots per weather it reads 0.118% once
and 1.18–1.26% five times in overcast — two states, not a band. Pre-existing;
haar was just the first column close enough to the line to trip it.

- **Interim:** `FLAKY_POSES` in `scripts/smoke.mjs` gives that one pose a
  measured 2.5% tolerance in every weather, applied on both golden paths.
  Everything else stays at 0.5%. Numbers and reasoning in `docs/VALIDATION.md`.
- **The real fix — a deterministic boot — is its own milestone.** Freezing the
  real-time set before the first rAF frame would land every run identically,
  but it moves all 35 desktop goldens, so it must not be smuggled into a
  weather brief. Worth doing before E2d adds post-processing on top of an
  already-unreliable gate.

### E2d — Post-processing

- AO, bloom, vignette, film grain, colour grade. Budgeted and toggleable
  (mobile fallback).

### E2e — Mobile and sharing — DONE, DEPLOYED (2026-07-28, with E2e.1)

*Dan's call, 2026-07-27: it has to be easy to use on a phone, because sharing a
link is how anyone else ever sees this.* Sequencing note: this gates E2d, not the
other way round — there is no point budgeting post-processing before there is a
measured mobile frame budget to budget against.

*Brief: `~/.claude/plans/mcgrot-e2e-brief.md`. Fix round:
`~/.claude/plans/mcgrot-e2e1-brief.md`.*

**Status: shipped.** E2e landed at `0eb105e` and was held for one fix round;
E2e.1 (`bcddd8a`) and the review fixes (`6fc4a8a`) close it out. See "E2e.1 —
the fix round" below for what each defect turned out to be. The held-state
record that follows is kept because the *pattern* — gates that pass while being
incapable of failing — is the one this loop keeps repeating.

Smoke passed 124/124 in 42m27s at the point of the hold
(verified independently, not quoted from the implementation report); the 27
desktop goldens did not move — zero tracked changes since `67592b6`, and all 27
inside the jitter band with `north-150-close`, `mid-550-close` and
`fascia-close` at exactly 0.000%. Held for one fix round because a gate passing
is not the same as the feature working:

- **The walk button covers the proximity prompt, so you cannot tap it.** Measured
  at 390×844: `#npc-prompt` spans y 722–788, `#touch-forward` spans y 742–818 at
  z-index 15, both centred — `elementFromPoint` at the prompt's centre returns
  the walk button. Tapping "TAP TO HEAR … READ" walks you into the vendor.
  Pre-existing geometry, but E2e added the copy promising it works, and hearing a
  resident read is the whole point of the project.
- **The tap-target gate measures rectangles, not reachability**, which is exactly
  why the above passed: `#npc-prompt` reports 195×66 while 70% of it is under
  another control. The lesson generalises — a size assertion is not a
  reachability assertion.
- **Two gates cannot fail.** The touch-mode gate runs in a `hasTouch: true`
  context where `html.touch` is already set at boot, so it would pass with
  `setTouchMode` stubbed out; the DPR row is hardcoded `pass: true`. Its numbers
  also do not measure DPR — `stepFrame` timing is CPU-side, so the table came out
  flat (and in one run *faster* at 2×) while 2× DPR is 4× the fragment work.
- **The torch toggle has no standing check** (honestly flagged in the
  implementation report). Verified by hand here: at 01:00, on → off takes
  `light.distance` 6.435→0.05, `intensity` 17.82→0, mean screen luminance
  −35.2%. That margin is enormous next to the jitter band, so it is cheap to gate.
- **`docs/VALIDATION.md` was not updated** for twelve new checks — and the DPR
  row's own detail string points the reader at it.

**iOS audio bug, found by Dan sharing the link:** he hears the ambience but not
the NPC voices; Android friends hear both. There are two `AudioContext`s and only
one is created inside a user gesture — `src/ambience.js` builds its own inside
the title-card tap (works), while `new THREE.AudioListener()` in
`src/proximity-audio.js` runs at boot via `src/main.js:112`, before any gesture,
and is only `resume()`d later. Safari on iOS is far stricter about that than
Chrome on Android, which fits the symptom split. Strong hypothesis, not confirmed
— it needs a device. Fix folded into E2e.1: one shared context created in the
gesture.

**Jitter band updated: 0.000–0.133%** (was documented 0.000–0.107%). Widest is
`golden-drizzle:elm-row-hero`. Sky-visible poses only — the three no-sky poses
read exactly 0.000% in every weather column. Still far inside the 0.5% tolerance.

### E2e.1 — the fix round — DONE (2026-07-28, `bcddd8a` + `6fc4a8a`)

*Brief: `~/.claude/plans/mcgrot-e2e1-brief.md`.* Every defect above is closed,
and each new gate was watched failing before it was trusted.

**The blocker is gone by construction, not by tuning.** `#touch-forward` moved
to the bottom-left, mirroring `#torch-toggle` at the bottom-right and leaving
the centre column to the prompt. Measured at 390×844 the two no longer overlap
on either axis (button x 20–96, prompt x 98–293), `page.tap('#npc-prompt')`
opens the overlay, and hold-to-walk still moves 7.00m from its new home.

**The audio fix went further than the brief asked.** `proximityAudio.listener`
is now `null` until the title-card gesture — no `AudioContext` is constructed
at boot at all, which is the property iOS actually objects to — and afterwards
the listener and the ambience bed hold the same `running` context.
`THREE.AudioContext.setContext()` runs before the listener exists, plus a
silent-buffer unlock. **Still a hypothesis: it needs Dan's phone.** A green
desktop gate proves the contexts are shared, not that iOS is happy.

**Four defects found in review** (`6fc4a8a`), two of them the same failure mode
the round existed to fix — a check that cannot go red:

- `golden-mobile:title` captured `#title-enter` mid-pulse (`title-pulse`,
  opacity 0.75→1 over 1.8s). It read 0.000% only because the elapsed time to
  the mobile pass is repeatable; in isolation the same build varied
  **0.595–2.680%** against a 0.5% tolerance. Any check added earlier in the run
  would have broken it. The animation is now pinned before the screenshot.
- `DPR cap enforced on resize` could not fail *on the cap*. Every smoke context
  runs at `devicePixelRatio` 1, and `min(1, cap)` is 1 for any cap, so it
  passed with `DPR_CAP` deleted. Now asserted at two ratios, the second spoofed
  above the cap — verified against a real `deviceScaleFactor:3` context.
- Three comments cited a `getSharedAudioContext()` that does not exist.
- `ensureVoice` would throw on `THREE.PositionalAudio(null)` if it ever ran
  before `resume()`. Unreachable today, but the listener stopped being built at
  boot in `bcddd8a`; guarded rather than left to the title card covering the
  overlay.

**Verified:** 127 checks, 0 failures, ~4.5 min, across three independent runs.
Goldens are additions-only against `67592b6` — the four `-mobile` goldens are
this milestone's own; the 27 desktop goldens never moved. Widest desktop diff
0.123%, the three no-sky poses at exactly 0.000%.

*Brief defect, for the next one:* acceptance criterion 7 asked for a per-phase
timing table while item 8 of the same brief said not to add per-phase timing.
Item 8 was written after the smoke fix landed and criterion 7 was not updated.
Skipping it was right. Re-read the criteria against late edits before sending.

### iOS bugs — OPEN (found 2026-07-28, deferred by Dan)

Found by Dan on **iOS Chrome** (WebKit underneath, so read this as Safari's
engine) against the deployed E2e + E2e.1 build. Deferred deliberately: recorded
here, not being fixed in the next milestone.

**1. All audio is silent — and this one is a REGRESSION.** No NPC voices *and
no ambience bed*. The bed worked on the same device before this deploy; that is
the whole diagnostic value of the report. E2e.1 item 7 set out to fix the silent
readers and instead took out the music that was working.

The shape of the symptom points at a **throw inside `main.js`'s `onEnter`
before `ambience.start()` is reached** — one exception there silences
everything at once, which is exactly what changed. The new code between the
gesture and `ambience.start(sharedCtx)` is the suspect list, in order:
`THREE.AudioContext.setContext(sharedCtx)`, `createBuffer(1, 1, sampleRate)`,
`unlockSrc.start(0)`. Nothing here is verified — no device console has been
read. Do not skip that step and start rewriting.

Cheapest first move, before any theory: make `onEnter` fail soft (wrap the
shared-context setup so `ambience.start()` runs regardless) and surface the
error. That restores the music even if the readers stay broken, and turns a
silent failure into a legible one.

**2. The torch toggle does nothing.** Not a regression — E2e added it and E2e
was held until this deploy, so this is its first contact with a real device.
Desktop-gated at 98.3% luminance drop, so the render path is sound; the failure
is between an iOS tap and `setToggle`. Note the walk button was *not* reported
broken, so `html.touch` and touch wiring in general are presumably fine — which
makes `#torch-toggle`'s own `click` listener (`wireTorchToggle`, `src/title.js`)
the place to look first.

**Why the rig missed both:** headless Chromium on a Mac is not WebKit on a
phone. No amount of gate-writing here reaches these. The lesson for the next
mobile round is that a device check has to be a *step*, not a follow-up — and
that shipping an unverified fix for an unreproducible bug can make things worse
than leaving it alone, which is what happened to the ambience.

### Smoke runtime — FIXED (2026-07-27, `0f32c48`)

*Dan, 2026-07-27: the 42-minute suite was slowing development down.* Fixed
ahead of E2e.1 rather than after it, since every subsequent milestone pays the
cost.

**42m27s → 4m32s, a 9.4× speedup, with no check weakened and no golden
recaptured.** The cause was not what the instrumentation suggested. Headless
Chromium here has no GPU — it rasterises in software via SwiftShader, where one
945-draw-call frame costs **~160 ms of wall-clock** against ~2 ms of JavaScript.
That cost is invisible from JS because `renderer.render` only queues commands
and returns; the raster lands at the next `await`. So the ~2 ms per-frame figure
everything had been reasoned from — including E2e's DPR table, which is why it
came out flat and even *faster* at 2× — was measuring command submission, not
drawing.

The suite was drawing ~14,000 settle frames it never captured: 156 renders per
bookmark visit, six 700-frame weather settles, 52 ninety-frame quick settles.
`runFrame` is now split into `updateFrame` (simulation) + render, and settles go
through a new `stepFrames(n)` that runs exactly *n* updater calls with only the
last one drawing. Same sequence, same `dt`/`t`, same count — so the settled state
is unchanged. Measured: `gotoBookmark` 19–46 s → 0.8–1.3 s; the 700-frame
weather settle 110 s → 361 ms; 124/124 checks pass; all nine no-sky captures
still read exactly 0.000%.

Settle counts were deliberately left alone (Dan's call) — they are nearly free
now, and cutting them would change simulation state at capture time and move all
27 goldens.

**Do not enable a hardware GPU to speed this up further.** SwiftShader's
determinism is what makes the goldens reproducible across machines and time; a
hardware rasteriser differs by vendor and driver, so every golden would need
recapturing and would then be pinned to one machine's driver version. A
forced-GPU flag can also silently fall back, leaving nobody sure which
rasteriser produced a golden. Recorded in `docs/VALIDATION.md`. The one
legitimate use of a GPU run is as a *measurement* tool for the DPR-cap question,
which SwiftShader genuinely cannot answer — and even then a Mac GPU is not a
phone GPU, so Dan's device check remains the real answer.

**Correction to an earlier draft of this section: the hold-to-walk button was
already built.** `#touch-forward` is styled (`src/index.html:216`) and wired to
`controls.setForward` (`src/title.js:40`); drag-look already works on touch via
`controls.js`'s Pointer Events; the proximity prompt already responds to a tap
(`src/interact.js:135`); the title card already guards the tap/click double-fire.
Mobile had been thought about. The gap is narrower and more specific, and all of
the below was measured in a 375×812 viewport rather than inferred:

- **The touch rules are gated on the wrong query.** `@media (pointer: coarse)` is
  the only media query in the whole stylesheet. A hybrid device (touch laptop,
  iPad with a trackpad) reports `pointer: fine` and gets no button, and the
  harness cannot exercise the button at all. Move to a boot-time capability class
  on `<html>` plus a debug override, which is also what makes a mobile smoke pass
  possible.
- **No safe-area insets, despite `viewport-fit=cover` being set.** The HUD
  (`bottom: 10px`), the walk button (`bottom: 26px`) and the comic controls
  (bottom edge y=788 of 812) all sit in the iOS home-indicator strip; the comic
  close button (y=14) sits in the status-bar strip.
- **DPR is unclamped** — measured 2, with a 750×1624 drawing buffer at a 375×812
  CSS viewport. Phones reporting 3 do 9× the fragment work of DPR 1. Against the
  `skyline` pose's 954 draw calls this is the frame-budget risk and the cheapest
  lever. Clamp it; don't restructure what is drawn (E3's character rework owns
  the NPC draw calls, so anything built here would be thrown away).
- **Tap targets under 44px:** `#comic-close` 42×42, `#comic-playpause` 46×40.
- **All on-screen copy is keyboard-only** — "CLICK TO ENTER", "WASD — move, drag
  — look", "[E] Hear read". ⚠ The HUD string is visible in every golden, so
  changing the desktop copy moves all 27. Swap copy under the touch class only.
- **A torch toggle**, on by default — folded here from E2c.3 rather than shipped
  there, because on a phone the player has no way to know a torch exists.
- Keep the single-file build under ~8MB. The artifact iframe blocks pointer lock,
  which is why drag-look is primary — that constraint holds on mobile too.
- Gate: the rig is desktop-viewport only (1280×800). This milestone adds a
  390×844 pass with touch mode forced, four `-mobile` goldens, and a safe-area
  intrusion check.
- **Real device performance cannot be measured from here.** Headless Chromium at
  a phone viewport is not a phone GPU. The milestone instruments and reports;
  Dan makes the final call on the DPR cap.

## E3 — The Folk (character system v2)

*Direction locked: grotesque semi-realism. Realistic proportions and materials;
readers get sculpted caricature grotesquerie. The photo-collage faces retire.*

- **Opens with a pipeline spike** (the risk lives here): evaluate rigged-model
  sources — Mixamo characters + animation retarget, AI 3D generation
  (e.g. Meshy/Tripo), curated paid packs — for look, licence, file size, and
  web performance. Pick one pipeline before building anything.
- Readers: seated/standing sculpted grotesques, comic held two-handed, idle +
  page-turn animation, lip-sync-adjacent head motion while speaking.
- Leithers: walk/idle/turn cycles, silhouette variety (shopping bags, prams,
  dogs), LOD/instancing strategy to keep hundreds cheap — including a cached
  chainage lookup (per-frame `chainageOfPoint` is a linear scan; see E1
  residuals) and the `skyline`-pose draw-call count (~950, mostly
  individually-drawn NPCs).
- The cast of Leith archetypes seeds E4: the preacher at the Foot, the gull
  feeder, dog walkers, the man outside the pub who kens everything.

## E4 — Opinions (the McGrot society)

*Leithers hold stances on McGrot and act on them.*

- Stance per leither, seeded: **devotee / sceptic / feart / profiteer**.
- Behaviours by stance: gather round readers and listen; heckle and move on;
  cross the street to avoid a reader; collect litter comics; pin comics to a
  noticeboard that accumulates across visits; argue with each other.
- Dialogue: pre-generated Scots line corpus per stance (extend
  `extract-comic-lines.mjs` pattern) shown in bubbles — free at any scale.
  TTS reserved for a small hero cast via the daily trickle.
- Verbatim rule holds absolutely: comic text is quoted garbled, never fixed.

## E5 — The Comic Layer (McGrot UX)

*The headline interaction: explore the Walk while hearing AND reading McGrot.*

- **Read-along overlay:** approach a reader, press E — the actual comic art
  fills the view while the voice reads it, panels highlighted in sync where
  timing allows.
- **The journal:** comics heard/found are logged ("34 of 418"), turning the
  whole street into a gentle collection game. Persisted in localStorage.
- Wayfinding: subtle cues toward unheard comics (a distant voice carried on
  the wind, a gull circling a reader).
- Stretch: one enterable interior — a McGrot gallery/shop as a hub.

## E6 — Getting About (collision, and a tram that runs)

*Dan's call, 2026-07-27. Two items, and the first is a hard prerequisite for the
second: you cannot ride a tram you can walk through.*

### E6a — Collision

- **The data is already there.** `leith.buildings[].footprint` is a polygon list
  (`src/world.js:365`), which is what collision wants. The rendered buildings are
  merged into one geometry, so per-building meshes do not exist and never should
  — collide against the source footprints, not the mesh.
- Broadphase: a uniform grid keyed on chainage. The Walk is ~1617m and the player
  is soft-clamped within `MAX_OFFSET` of the street line already
  (`src/controls.js`), so the candidate set per frame is tiny.
- **Player-only first.** Giving leithers collision changes their pathing, which
  moves them in every golden that has one in frame — a full recapture for a
  benefit nobody asked for. `computeGeomHash` excludes them, so the determinism
  check would not even catch the change. Do the player, measure, stop.
- Also wants collision: the tram hulk, the wrecked cars, the roadworks cones.
  These are placed by seeded PRNG, so their boxes are static and cheap.

### E6b — The living tram

*Fast travel up and down the Walk, and the single biggest "this is a place"
moment available.* Its own phase-sized piece of work, not a milestone.

- **There is no track and no moving tram today.** `src/scenery.js:272` builds one
  derelict hulk, tilted 0.09 rad, explicitly derailed. A running tram needs rails
  laid along the street line, a second body, and a stopping pattern.
- **Riding a moving platform fights two existing systems.** The per-frame
  ground-follow clamp pulls the camera to `groundHeight + EYE_HEIGHT` every frame
  (`controls.js`, and `setYFollow(false)` exists solely so the debug harness can
  pose above ground), and `nearestStreetPoint` soft-clamps the player to the
  corridor. Boarding has to suspend the first and travel with the second. Expect
  this, not the rails, to be where the time goes.
- NPCs boarding and alighting is an E4 behaviour in disguise — leithers with
  somewhere to be. Worth deferring the NPC half until E4's stance system exists,
  and shipping a rideable tram with a static waiting crowd first.
- **Conflicts with an E∞ delight:** "the tram ghost on the dead rails" assumes the
  rails stay dead. Pick one; a working service and a ghost of the old one can
  coexist if the ghost runs at night.

## E∞ — The Delight Ledger (continuous)

A maintained list in `docs/DELIGHTS.md` of second- and third-pass discoveries.
Two or three ship per session, forever; date-seeded variation so no two visits
match. Seed ideas: a windowsill cat that tracks the player; washing lines
between closes; a gull that steals a litter comic and must be chased; a rat
dragging a chip; Hibs graffiti whose scoreline changes by real date; the dock
fog horn at night; a slippable close; silhouettes in lit windows; the tram
ghost on the dead rails.

## Standing constraints

- Vanilla Three.js, GitHub Pages (public repo, `main` = source, Pages serves
  `gh-pages`). Multi-file dist; ~1GB headroom. No engine rebuild.
- Determinism: seeded PRNG order is sacred; additions via `hash32` only.
- Secrets: `.env.local` never reaches the repo; secret-scan before every push.
- Verbatim garbled comic text is sacred — never corrected, anywhere.
- Together AI spend is parked unless Dan raises it.
- Real geometry is real: chamfer pubs at 45°, the upside-down sign — never
  "corrected".
