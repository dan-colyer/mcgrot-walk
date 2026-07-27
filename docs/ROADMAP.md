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
invariant at once, which is why it is last.

- Dynamic fog **density** (E2c.1 leaves it pinned at 0.0095). The fog/sky seam
  invariant (`sky.js`) must survive it.
- Haar rolling up from the Forth.
- **The Forth reveal (inherited from E1) — Foot-only.** Measured: the far shore
  needs fog 3.1× thinner to read from the Foot, but 17× thinner from Picardy,
  which would destroy the haze. The "water and Fife from the top of the brae"
  framing is dropped; the reveal ships for the lower Walk and the descent.
  Thinning fog also out-ranges the shopfront pager (`LOAD_RANGE = 250`), so it
  lands with a pager widening (~67MB GPU per 4096² page) and a budget re-check.
- **Night is too dark — Dan's call, 2026-07-27.** Decide `TORCH_DISTANCE` here,
  against haar and dynamic fog rather than in a vacuum, and lift the night
  palette with it. Note there is no torch toggle and never was: the light is
  attached permanently in `createPlayerTorch` (`src/world.js:514`) and driven
  only by the palette's `torch` field, which is already 0.9–1.0 through the
  night. "Torch on by default" is therefore about *reach*, not state — 6.5m
  lights a façade you are standing at and nothing else.
  - Headroom check before retuning: the `night darkens facades` gate is a
    **maximum** (22:00 mean luminance ≤45% of 13:00's) and currently reads 2.9%.
    Night can be lifted a long way before the gate is the constraint.
  - The three no-sky goldens (`north-150-close`, `mid-550-close`,
    `fascia-close`) are captured at 13:00, so a night lift shouldn't move them.
    Confirm rather than assume.
- Autonomous weather scheduling, once all five states exist.

### E2d — Post-processing

- AO, bloom, vignette, film grain, colour grade. Budgeted and toggleable
  (mobile fallback).

### E2e — Mobile and sharing

*Dan's call, 2026-07-27: it has to be easy to use on a phone, because sharing a
link is how anyone else ever sees this.* Sequencing note: this gates E2d, not the
other way round — there is no point budgeting post-processing before there is a
measured mobile frame budget to budget against.

*Brief: `~/.claude/plans/mcgrot-e2e-brief.md`.*

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
