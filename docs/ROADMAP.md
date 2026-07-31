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
- **E2c.3b — Haar. DONE (2026-07-28), see below.** A new weather column, and the
  thick end of the same density axis. Brief:
  `~/.claude/plans/mcgrot-e2c3b-brief.md`.
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
- **E2c.3b.1 — Deterministic boot. DONE (2026-07-28), see below.** Retired
  `FLAKY_POSES` by removing the nondeterminism it papered over, rather than
  widening a tolerance again. Brief: `~/.claude/plans/mcgrot-e2c3b1-brief.md`.
  - **The cause is measured, not guessed** (see `docs/VALIDATION.md`): the
    harness cannot call `pauseAuto()` until `__mcgrotDebug` exists, which is
    after `main()`'s async asset load, so `animate()` gets 13–20 real-time
    frames in first — and `dt`'s 0.1 s clamp is always active under
    SwiftShader, making the sim state a pure function of that integer.
  - **It goes before 3c** because E2d adds post-processing on top of this gate,
    and every milestone that lands first is one more set of goldens baked at a
    machine-load-dependent state.
  - **It moves goldens**, so it lands on its own with nothing else in the
    commit — the same containment discipline as 3a's two-step.
- **E2c.3c — The wet night. DONE (2026-07-29), see below.** Night reach (`TORCH_DISTANCE`), road sheen,
  autonomous weather scheduling. Night reach wanted haar and dynamic fog to
  judge against, so it goes last rather than in a vacuum. Brief:
  `~/.claude/plans/mcgrot-e2c3c-brief.md`.
  - **Parts 1 and 2 attack the same defect.** The 22:00 captures are the
    evidence: haar reads well (a pale luminous band behind a dark roofline —
    a keeper), but the road is pure black, and rain at 22:00 is almost entirely
    void. `wetness` currently makes that *worse* — `WETNESS_DARKEN = 0.5`
    darkens road and pavement, rain runs 0.85–0.9, and nothing reflects. We
    shipped half an axis.
  - **Road sheen via a real material conversion** (Dan's call, 2026-07-29 —
    a cheap non-PBR overlay was offered and declined). Safer than E2b's
    conversions for two verified reasons: road/pavement never carried
    `LIT_ALBEDO_GAIN`, and `color` means albedo on `MeshStandardMaterial` too,
    so `applyWetness`'s snapshot-and-multiply survives untouched.
  - **Staged like 3a's fog axis**: conversion at `roughness: 1, metalness: 0`
    as a provable near-no-op first, then `wetness` → roughness. `metalness`
    stays 0 — tarmac is a dielectric, and the metal path tints reflections with
    the albedo.
  - **Sky reflections are optional and gated.** With no `scene.environment`, a
    Standard material reflects only punctual lights (sun, torch), so the haar
    band will not appear in the road. A cheap palette-driven gradient env map
    is the fallback if 2b reads dead — not a PMREM of the live dome.
  - **The scheduler must not spend E2c.3b.1.** Drive it off the in-sim clock,
    never wall time or `Math.random()`; because `setTime()` sets `rate = 0`, a
    clock-driven scheduler cannot fire while the harness holds time pinned.
    Explicit `setWeather()` wins over any pending scheduled change.
  - **All three in one milestone** (Dan's call — a split into "the wet night"
    now and scheduling later was offered and declined).

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

**It was the harness's problem, not haar's: `elm-row-hero` was
discrete-modal.** Fixed in E2c.3b.1, below — kept here as the review that
found it. A full smoke on an unmodified tree failed at
`golden-haar:elm-row-hero` (0.680% against 0.5%). Pre-existing; haar was just
the first column close enough to the line to trip it.

The cause was inferred at review time and has since been **measured** (probes,
during E2c.3b.1 planning — full numbers in `docs/VALIDATION.md`):

- The pre-pause rAF count varies **13–20** across boots, because
  `__mcgrotDebug` only exists after `main()`'s async asset load.
- `dt`'s 0.1 s clamp is always active under SwiftShader, so each of those
  frames advances the sim by exactly 0.1 s and the state is a pure function of
  an integer — hence discrete states, not a jitter band.
- At this pose in the haar pass that is worth about **+0.3% of pixels per extra
  frame** (0.277% at 19 frames, 0.571–0.585% at 20).

Two corrections to what the review wrote: the leither occupies ~1.5% of that
frame, not "a tenth" — and only *in that pass*, since the footprint is
sequence-dependent (~0.00% in the first bookmark pass). And frame count is not
the only source: boots with identical counts still differ ~0.09%, most likely
async façade-page decode.

- **Interim:** `FLAKY_POSES` in `scripts/smoke.mjs` gave that one pose a
  measured 2.5% tolerance in every weather, applied on both golden paths.
  Everything else stayed at 0.5%. **Retired in E2c.3b.1**, below.

##### E2c.3b.1 — what actually landed (2026-07-28)

Three commits, the same containment shape as 3a: `13aeea0` (the mechanism —
freeze flag, both new gates, no golden touched, `golden-haar:north-250-far`
now fails at 0.82% as evidence the fix does something), `6cc60c8` (recapture —
exactly the two goldens the mechanism proved move), and this one
(`FLAKY_POSES`/`goldenTolerance()` deleted, docs updated).

- **Fix is by construction, not tuning.** A localhost-gated
  `window.__mcgrotFreezeAtBoot` flag, set via Playwright `addInitScript`
  before any page script runs, suppresses `main.js`'s very first `animate()`
  call — the pre-pause rAF count is now **0**, asserted by a gate, not merely
  "usually small". Applied to both the desktop and mobile smoke passes (the
  mobile pass built its own context rather than reusing `bootPage`, and had
  the identical bug — measured 0.000–62% run to run on `golden-mobile:comic`
  before the same fix was applied there too).
- **A direct determinism gate, not just "goldens didn't move".** `invariants()`
  now hashes the real-time set's own live state (leither chainage/side/
  direction, birds' and vermin's instance matrices — both groups newly named
  so the hash can find them without relying on scene build order) and
  `scripts/smoke.mjs` asserts it identical across the two independently
  booted pages the run already creates. Both new gates were watched failing
  first: frame count read 18 and 19 with the flag disabled.
- **Exactly two goldens moved**: `elm-row-hero-haar` (1.465% → 0.069% after
  recapture) and `north-250-far-haar` (0.824% → passing). Every other pose
  across all five weather columns stayed under the standard 0.5% even before
  recapture — max 0.272% (`golden-drizzle:elm-row-hero`). Pixel-diffing each
  recaptured file against its predecessor confirmed the changed pixels are a
  leither and a couple of gull silhouettes; no building, shopfront or sky
  pixel moved.
- **Residual, measured, not assumed:** three fresh full smoke runs after the
  fix, zero golden files rewritten across all three. Worst-case per-pose
  diff over that data: `elm-row-hero` 0.275%, `skyline` 0.249%, everything
  else lower — comfortably under 0.5% everywhere, so the ~0.09% async
  façade-decode source flagged during planning never became a problem in
  practice.
- **`setAutoAnimate(true)`/`resumeAuto()` verified working from a frozen
  boot** — a walker's chainage advances and `requestAnimationFrame` keeps
  scheduling after `resumeAuto()`, confirmed with an ad hoc probe (not
  committed; the harness never calls it, so nothing exercises this path by
  default).
- **No player-facing change.** The flag only ever exists behind the same
  `localhost`/`127.0.0.1` gate `__mcgrotDebug` already lives behind, and is
  otherwise `undefined` — checked visually via the dev preview (title card,
  boot, WASD movement, birds/leithers animating) with the flag absent.

##### E2c.3c — what actually landed (2026-07-29)

`TORCH_DISTANCE` 6.5 → 10 (`src/world.js`); road/pavement converted to
`MeshStandardMaterial` at `roughness: 1, metalness: 0` (`src/world.js`),
`wetness` now also drives `roughness` toward 0.25 (`src/atmosphere.js`,
constants in `src/lighting-constants.js`); a clock-driven, `hash32`-seeded
autonomous weather scheduler (`src/atmosphere.js`), three new gates
(`docs/VALIDATION.md` 23-25). 2c (procedural sky env map) **skipped** — see
below. Smoke: 175 checks, 0 failures, tree clean across three consecutive
runs. 3 goldens recaptured for the conversion itself — `skyline-clear`,
`mid-805-far-clear-08`, `skyline-rain` — plus 2 more at review, below.

- **Torch reach settled at 10m, by eye against both 22:00 captures**
  (`docs/smoke/captures/mid-805-far-{haar,rain}-22.png`, both re-taken). The
  haar band still reads as the brightest thing in the frame; the "night
  darkens facades" gate has enormous headroom either way (2.9% vs a 45%
  ceiling, unchanged by this move) so it was never going to be the thing that
  stopped an overshoot. "Torch lights a readable surface" moved from 68.83× to
  **85.88×** — a floor, not a target, and left there deliberately.
- **The material conversion is a genuine near-no-op for 25 of 27 poses**
  (max 0.366%, `golden-clear:mid-550-close`), confirming the brief's
  "same diffuse term, weak specular lobe" claim holds almost everywhere.
  It is **not** a no-op at two poses under `clear`: `skyline` (1.681%) and
  `mid-805-far-08` (4.285%, the single largest move in the milestone).
  Investigated, not just recaptured: an A/B probe (torch-off render at the
  same pose) and a side-by-side pixel diff confirmed the cause is a real
  Fresnel-driven brightening of the road under `clear`'s much higher sun
  intensity (2.9-3.0 vs overcast's 0.05-1.15) at a viewing/light geometry
  that happens to be more grazing at these two poses — not a bug, not
  clipping (`clip-clear:*` both 0.000%), not a draw-call or budget change
  (`skyline` still exactly 954). `overcast` and `haar`'s much dimmer suns
  never cross the same threshold, staying under 0.28% everywhere. Every other
  clear-weather pose stayed under 0.4% at the same conversion.
- **`golden-rain:skyline`'s 2.771% move is step 2b's intended new behaviour,
  not step 2a's side effect** — isolated by testing 2a alone first (see
  above) before 2b's roughness mapping was reapplied; `skyline`'s only other
  rain-adjacent move (elm-row-hero, mid-805-far, etc.) all stayed under 0.1%.
- **Sky-env reflection (2c) skipped.** The brief's own payoff case for 2c is a
  *daytime* haar/overcast band reflecting in the road; the milestone's actual
  target — the wet-*night* road — is a different scenario entirely, and an
  env map can only reflect brightness that exists in the palette it is built
  from. Every `HAAR_STOPS`/`OVERCAST_STOPS` night stop (hours 20/22/0/5) has a
  sky about as dark as the sun/hemi/ambient values at those hours — building
  an env map from it would add reflected light that does not exist to
  reflect. Confirmed empirically before deciding: an A/B luminance probe at
  `mid-805-far`, 22:00, rain (torch on vs torch off, lower-frame crop) showed
  the torch's specular contribution to the wet road is real — **2.19× the
  luma of the torch-off reading** — matching the physically-correct GGX
  response 2b implements. But both readings sit at 0.06-0.14 out of 255: a
  real, correctly-computed effect that is nonetheless invisible on screen,
  because the entire night palette is intentionally near-black (mean
  luminance ~2.4/255 — see the "night darkens facades" gate) and no
  standard bookmark pose puts a grazing view of near-camera wet road in frame
  at night (the "far" bookmarks view it at too steep a downward angle for a
  co-located point light's specular return to read; the "close" bookmarks
  don't frame the ground at all). 2c would not have changed this: the gap is
  in how dark night is by design, not in the absence of a sky reflection.
  **Recorded as a genuine limit for Dan's judgement**, not quietly dropped —
  a future pass that wants a *visible* torch-glare pool at night would need
  to revisit torch intensity/reach specifically (Part 1, already settled by
  eye against the noir look this phase protects) or add a purpose-built
  camera-relative glint, not a scene-wide env map.
- **The scheduler cannot fire while time is pinned, demonstrated not just
  asserted**: gate 23 settles a weather, freezes time, steps 5000 frames,
  asserts nothing moved. Watched failing once during development — not
  because the scheduler fired, but because the gate's own "before" snapshot
  was taken while an unrelated transition was still in flight (a transition's
  `elapsed` advances on real `dt` regardless of `rate`, by existing design);
  fixed by settling explicitly before snapshotting, not by touching the
  scheduler.
- **The scheduler does fire autonomously when the clock actually runs**
  (gate 24): fast-forwarding via the existing `setRate` debug hook well past
  the authored 1.5-4h band produces a weather change with zero explicit
  `setWeather()` calls. Watched failing with the fire check commented out.
- **`setWeatherSchedule(false)` (gate 25) is wired in but not needed in
  practice**: at the standing clock rate a full capture pass advances the
  in-sim clock by ~0.2h, far under the 1.5h minimum interval, so the schedule
  was never actually at risk of firing mid-pass — the hook is insurance for a
  future faster rate or shorter interval, asserted rather than left untested.
- **Draw calls unchanged by the material conversion** — `skyline` (the
  heaviest pose, 954 calls) matches its baseline exactly at every weather
  tested; the conversion adds no geometry, only a material swap.
- **Two more goldens recaptured at review.** The movement table above covers
  the 27 weather-suffixed goldens; re-measuring all 39 (pre-milestone code
  against the delivered goldens, every pose) found two the conversion had
  left sitting near tolerance rather than over it, so they were never
  recaptured: `golden-drizzle:elm-row-hero` at **0.443%** and
  `golden-clear:mid-550-close` at **0.366%**, both against a 0.5% ceiling.
  Passing, but with the headroom nearly gone and a stale Lambert-era image
  as the reference — a pose primed to flake on the next unrelated change.
  Recapturing both drops the worst residual across all 39 poses back to
  **0.267%** (`golden:skyline`, the long-standing pre-existing one; every
  other pose is now under 0.1%). The lesson is the measuring rule, not the
  two files: **a golden that moved materially wants recapturing even when it
  still passes** — tolerance is the flake budget, not a target to spend.

### E2d — Post-processing

AO, bloom, vignette, film grain, colour grade. Budgeted and toggleable (mobile
fallback). Split in two, because the first effect through a new render path
costs far more than the fourth.

- **E2d.1 — The composer, and bloom. PLUMBING ACCEPTED (review 2026-07-29);
  bloom itself retuned in E2d.1a below.** Introduced
  `EffectComposer` (`RenderPass` -> `UnrealBloomPass`) and repaired the harness
  around it: `renderer.info.autoReset` fixed (draw-call accounting was
  silently collapsing to ~1), both direct `renderer.render()` smoke sites
  routed through a composer-aware `dbg.renderNow()`, all 39 goldens and
  `docs/smoke/budget.json` deliberately recaptured, a new anti-dead-gate check
  proving the composer is load-bearing, and a mobile `#post-toggle` fallback.
  The HDR/`NoToneMapping` route was tried and reverted — it broke atmosphere's
  fog (authored assuming post-tonemap blending) independent of bloom entirely.
  The wet-night payoff this was meant to unlock did not materialise: no
  bookmark pose frames near-camera wet road at night, confirmed again here.
  Full account in `docs/VALIDATION.md`'s "The composer, and bloom" section.

  **Review verdict.** The composer plumbing is correct and stays: draw-call
  accounting verified live (`renderer.info.autoReset === false`, `skyline` 968,
  every delta gate exact), and `RenderPass`-only measured **pixel-identical**
  (0.0000%) to a direct `renderer.render()`, so step 1 was a genuine no-op and
  bloom costs exactly +14 draw calls at every pose. Full smoke green, no golden
  rewritten, tree clean. Bloom's *tuning and gating* are what fail.

- **E2d.1a — Bloom as an authored per-weather axis. REJECTED AT REVIEW
  (2026-07-30). NOT DEPLOYED — see the verdict below.** `bloomStrength` is a
  palette field (`src/atmosphere.js`),
  written to `bloomPass.strength` every frame the way `toneMappingExposure`
  already is: 0 flat under `haar`, the pre-E2d.1a value (0.05) flat under
  `overcast`/`clear`, peaking at the two night stops (0.35) under `rain`.
  Chasing why `haar` stayed bleached at `bloomStrength=0` (should have been a
  dead no-op) found the E2d.1 "blur spreading a threshold-crossing source"
  theory was wrong — the real bug was `UnrealBloomPass`'s own internal
  screen-copy step re-running ACES on an already-tonemapped buffer, fixed with
  one line (`bloomPass._basic.toneMapped = false`) that took haar/skyline's
  contribution from +27% to +12% and its worst clip% from 6.6% to 3.0%. A
  second, structural cause of the residual (`EffectComposer`'s render targets
  have no hardware sRGB-decode path available) needs the reverted HDR route to
  fully close and is out of scope; `CLIP_PCT_MAX_HAAR` is reduced (8 -> 3.5),
  not eliminated, to absorb it honestly. Haar visually unbleached (facades
  sepia again, signage/comic/nameplates legible — compared against `fa3ad67`).
  The rain/drizzle night-hour peak, checked with a new dedicated
  `torchGroundPose` capture and a 0-to-10x `bloomStrength` sweep, is confirmed
  cosmetically inert at every pose tried: nothing in the current scene's
  night-time content crosses the 0.95 bloom threshold regardless of strength.
  This is a stronger version of E2d.1's own "wet-night payoff did not
  materialise" finding and ends that line of work, per the brief — a future
  attempt would need to touch the global `threshold`, reopening the daytime
  clip-* calibration this milestone left alone. Full account in
  `docs/VALIDATION.md`'s "Bloom as an authored axis" section.

  **Review verdict (2026-07-30): rejected, and bloom should come out.** The
  axis was measured against a strength-forced-to-0 control at the same settled
  state — the control E2d.1a never ran on `rain`. Isolating bloom's own effect
  (shipped strength vs strength 0) gives: `rain` 13:00 **0.0%**, `rain` 22:00 at
  strength 0.35, the highest value in the table, **0.0%**, `drizzle` **0.0%**,
  `haar` 0.0% (authored off), `clear` +0.4%, `overcast` +0.1%. **The authored
  axis is inert.** Everything the milestone changed visually is the residual
  colour-management artefact: `rain` 13:00 +42.6%, and `rain` 22:00 lifts mean
  frame luminance 1.11 -> 7.07, a **6.4x brightening of the night-rain frame**,
  with all 39 goldens recaptured to enshrine it. E2d.1a read that same +42.5% on
  rain as the axis working; it is 0.0% axis and 42.6% bug.

  The `_basic.toneMapped = false` diagnosis is correct and confirmed against
  three's source, but it *moved* the damage rather than reducing it: it removed
  a double-ACES that was compressing highlights (hence `haar` suffering worst
  before) and left the double-sRGB-encode unopposed, which lifts shadows hardest
  — so the worst-hit weather flipped from the brightest to the darkest. `haar`
  improved (+29% -> +12%); `rain` went from ~+1% to +42.6% by day.

  The new per-weather contribution gate is not merely dead, it is **inverted**:
  it measures post-on vs post-off, which is now almost entirely the artefact, so
  it passes *because* the bug exists and would fail if the bug were fixed. The
  clip ceilings (0.4 shared, 3.5 haar) exist to accommodate the same bug.

  Worth keeping regardless of what happens to bloom: the `_basic` diagnosis, the
  `torchGroundPose` helper, and the conclusion that the torch's return (~22/255)
  never approaches the 0.95 threshold at any strength — that ends the
  "bloom will make the wet night read" theory for good.

- **E2d.0 — Composer colour management. THE REAL PREREQUISITE, NEXT.** No
  post-processing pass can be trusted in this pipeline until a pass that
  contributes nothing is provably invisible. That invariant is cheap and strong,
  and it is testable with no effect present at all:

  > with every pass's contribution forced to zero, the composed frame must be
  > **bit-identical** to `renderer.render(scene, camera)`.

  `RenderPass` alone already satisfies it (measured 0.0000% at E2d.1 review) —
  because as the last enabled pass it renders straight to the canvas and no
  intermediate buffer is ever read back. It breaks the moment any pass composites
  from a buffer, because `EffectComposer`'s default target is `HalfFloatType`,
  which has no hardware sRGB decode, so the copy's encode chunk fires a second
  time on already-encoded output.

  A scoped route exists that E2d.1a did not try and that is **not** the reverted
  HDR route: `EffectComposer`'s constructor takes a caller-supplied render target
  (`constructor(renderer, renderTarget)`). Supplying an `UnsignedByteType` target
  tagged `SRGBColorSpace` gives the intermediate buffer a real hardware decode
  path, so the read decodes and the write encodes exactly once — no change to
  `renderer.toneMapping`, no `OutputPass`, and fog stays authored in post-tonemap
  space exactly as it is today. The cost is an 8-bit intermediate (banding), which
  is the correct trade for an LDR chain. Untested; the invariant above is how to
  test it.

- **E2d.2 — the rest.** AO, vignette, film grain, colour grade, once the render
  path is settled and the harness has been repaired around it. Film grain is
  the determinism trap of the group: it must be driven off the same seeded,
  stepped `t` the updaters use, never wall time or `Math.random()`.

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

## E7 — The Walk, Shared (ship-readiness, then presence)

*Dan's call, 2026-07-31. The question was "should this be multiplayer, and is
Three.js still the right engine for that?" Answer: yes to sharing, and the engine
was never the constraint — hosting and payload are.*

### The engine decision (settled; do not relitigate)

**Stay on vanilla Three.js.** Multiplayer is not a rendering problem. Three.js is
a renderer and has no netcode; neither do Babylon or PlayCanvas's engine. Everyone
doing browser multiplayer bolts a separate transport layer on top, and that layer
is ~600 lines here. Nothing in the alternatives repays a rewrite of `src/`:

| Option | Verdict |
|---|---|
| Three.js (stay) | **Chosen.** Netcode is additive either way |
| Babylon.js | Full rewrite of ~15 render modules, no gain |
| PlayCanvas | Editor-first workflow fights AI-driven codegen; netcode still BYO |
| Godot 4 web | Multi-MB wasm, awkward web audio, single-threaded export needed to dodge cross-origin header requirements Pages can't set |
| Unity WebGL | Heavy download, officially unsupported on mobile browsers |
| Unreal | Web means Pixel Streaming — a GPU per concurrent user |
| Roblox / Rec Room | Loses the artifact, the comics pipeline and ownership |

**Two Three.js multiplayer frameworks were evaluated and rejected** (2026-07-31):

- **Hyperfy** — GPL-3.0, 295 stars, default branch last moved 2025-12-18, last
  tagged release v0.10.0 (April 2025), self-described alpha. It is a platform you
  move into, not a library you add: worlds are built from its own app/component
  system over PhysX, so the procedural street, merged OSM geometry, seeded PRNG
  and terrain authority would all be rewritten as Hyperfy apps. Viral licence on
  top. No.
- **networked-aframe** — MIT, 1.2k stars, genuinely well maintained (pushed
  2026-07-28, release 0.14.3 March 2026). Rejected on architecture only: it syncs
  **A-Frame entities** via A-Frame's declarative component schema and cannot be
  pointed at a raw Three.js `Object3D`. Adopting it means inverting the whole
  imperative/merged-geometry codebase.
  **Worth an hour of reading before writing `net.js`** — it has already solved
  remote-transform interpolation (the thing that separates "works" from "feels
  good"), the entity-ownership model, and the swappable transport-adapter pattern.
  Take the patterns, not the dependency.

**The determinism rule is the asset here.** Seeded PRNG order is already sacred
for the smoke rig; the payoff is that every client generates an identical street
from the same seed, so *no world state goes on the wire* — only `{x, z, yaw}` per
player. The paper-doll rig in `src/npcs.js` is already the remote-avatar renderer:
a peer is an NPC whose transform arrives from a socket instead of a walk cycle.

**Sequencing rule:** E7 is a phase, not a milestone, and it does **not** jump E6a.
Walking through each other is fine; walking through buildings while someone
watches is what gets screenshotted.

### E7a — Ship-readiness (do this regardless of multiplayer)

*The actual prerequisite for sharing the thing anywhere. Not blocked by E6.*

- **The deployed payload is 87.3 MB** — measured on `gh-pages` 2026-07-31: 588
  files, seven shopfront atlas pages at ~1.7 MB each, plus audio. GitHub Pages'
  documented soft bandwidth limit is 100 GB/month, and its remedy for breaching
  it is to throttle or pull the site. A front-page Reddit post exhausts the month
  in an afternoon.
- **Move static hosting to Cloudflare Pages** (unmetered bandwidth on the free
  tier, same static deploy, repo stays public). This also puts E7b's WebSocket
  endpoint on the same origin and the same account — no CORS, one vendor, one
  deploy. Amends the standing hosting constraint below.
- **Measure and cut first-load bytes.** 87.3 MB is the total; what is eager
  versus lazy has *not* been measured, and that number is the one that matters.
  Establish it, then set a budget and enforce it in `scripts/smoke.mjs` alongside
  the draw-call budget.
- **Mobile frame-rate pass on real hardware.** Reddit traffic is mostly phones.
  Touch look and tap-to-interact already exist (`src/controls.js`,
  `src/interact.js`) and the smoke rig has a mobile pass, so input is done — what
  is untested is 995 buildings plus 400 NPCs on a mid-range Android over mobile
  data. Headless Chromium at a phone viewport is not a phone GPU (see E2's same
  residual); this needs a device in a hand.

### E7b — Presence

- **Transport: a Cloudflare Durable Object**, one per world instance. A Durable
  Object is a serverless Worker that is globally unique by name
  (`getByName("leith-walk")` always routes to the same instance) and keeps memory
  between requests — so the peer list is a plain `Map` on `this`. No VPS, no
  process to keep alive.
- **Use the hibernation API** (`ctx.acceptWebSocket()`, not `server.accept()`):
  Cloudflare evicts the object during quiet periods while leaving sockets open,
  so idle wall-clock is not billed. Reclaim sockets via `ctx.getWebSockets()` in
  the constructor. This is what keeps a game that sits at zero players most of
  the day effectively free.
- **Budget:** Durable Objects run on the Workers Free plan — 100k requests/day,
  13,000 GB-s/day, and incoming WebSocket messages bill at 20:1 (so 100k requests
  ≈ 2M messages/day ≈ ~55 player-hours/day at 10 Hz). Levers if that binds: drop
  to 5 Hz (invisible with interpolation), and send nothing while the player is
  stationary — someone standing still listening to a comic should cost zero.
  Workers Paid puts any plausible scale in the noise.
- **`src/net.js`** — client transport, ~10 Hz send, interpolated receive. Must
  **fail silently to a zero-peer world**: the single-file `dist/mcgrot-walk.html`
  is the shareable artifact and has to keep working with no network at all.
- **`src/avatars.js`** — remote peers on the existing NPC paper-doll rig. Draw
  calls are 27–80 at every bookmark except `skyline` (954), so there is headroom;
  keep peers out of `computeGeomHash` exactly as leithers are.
- **No chat, and no user-entered names.** Moderating user text is a whole job
  nobody has volunteered for. Assign preset Leither names — funnier anyway.

### E7c — Shared moments

*The bit that makes having done it worthwhile.*

- Peers visibly gathered around the same reader, hearing the same comic.
- A peer's speech bubble when they trigger a comic — verbatim rule holds.
- Feeds E4: a leither's stance reacting to a *crowd* of players, not just one.

## E∞ — The Delight Ledger (continuous)

A maintained list in `docs/DELIGHTS.md` of second- and third-pass discoveries.
Two or three ship per session, forever; date-seeded variation so no two visits
match. Seed ideas: a windowsill cat that tracks the player; washing lines
between closes; a gull that steals a litter comic and must be chased; a rat
dragging a chip; Hibs graffiti whose scoreline changes by real date; the dock
fog horn at night; a slippable close; silhouettes in lit windows; the tram
ghost on the dead rails.

## Standing constraints

- Vanilla Three.js. **The engine question is settled — see E7.** No engine
  rebuild, and no multiplayer framework: netcode is additive, ~600 lines.
- Hosting: public repo, `main` = source. GitHub Pages serves `gh-pages` today
  (multi-file dist, ~1GB size headroom) — but the binding limit is *bandwidth*,
  100 GB/month soft, against an 87.3 MB payload. **E7a moves this to Cloudflare
  Pages**; until it does, treat any wide share as capable of taking the site down.
- Determinism: seeded PRNG order is sacred; additions via `hash32` only.
- Secrets: `.env.local` never reaches the repo; secret-scan before every push.
- Verbatim garbled comic text is sacred — never corrected, anywhere.
- Together AI spend is parked unless Dan raises it.
- Real geometry is real: chamfer pubs at 45°, the upside-down sign — never
  "corrected".
