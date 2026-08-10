# McGrot Walk — Roadmap (E-line)

Rewritten 2026-07-23 after the Phase D retrospective. Supersedes the D-line and all
prior phase plans.

## What McGrot Walk is

A first-person simulation of Leith Walk — real buildings, real shops, real slope —
inhabited by a living population of Leithers, where the player explores the street
while hearing and reading McGrot comics, and the Leithers themselves hold opinions
about McGrot that drive how they behave.

## Direction — the delight arc (Dan-directed, 2026-08-01)

The organising idea, from looking at the comics themselves: **the game is the
street the comics describe.** The McGrot comics are set on Leith Walk (one is
literally titled "The Leith Walk Drop", Elm Row tenements in frame); their
world and the game's world are the same place. Every system should pull toward
"you are walking through a McGrot comic about Leith":

- **The Look** — the render converges on the comics' printed page: aged cream
  paper, flat muted fills (olive, teal, brick-red, ochre), warm dark-brown
  ink, dreich skies the weather system already delivers. → E8.
- **The Life** — the cast becomes the street's real people (see
  `docs/LEITH.md`, the Leith bible), and the comics leak back into the world:
  fragments spreading through the crowd, comic props appearing on the street,
  animals in the game. → E3/E4.
- **The Shared Street** — the tram finally runs (and ends where the rails
  stop dead), and other real walkers hide among the NPCs. → E6/E7.
- **The Role** (added 2026-08-02, Dan-directed) — you are not a tourist. You
  wake behind the counter of a shop on the Walk; Leithers come in and deal
  with you; the street is your street. → E9.
- **The Canon** (added 2026-08-07, Dan-directed) — the comics' named cast is
  in the game: McGrot at the Gullet, Pomplé, Keth with One Eye, Mike English,
  the Taxman and the Inspector. The canon table lives in `docs/CANON.md`;
  the ruling on who the player is and which canon entries are cut lives in
  the Direction ruling below. → E10 (plus riders in E4/E9b/E∞).

Two standing rules join the constraints: the **Central Bar test** (every joke
must get a laugh in the Central Bar, said aloud, with Leithers present — punch
at institutions with letterheads, never at Leith), and **Scots is the prestige
register** (the language of wit and authority; the RP students are the ones
out of their depth).

**Sequence (re-set at the E3 phase gate, 2026-08-07): E6a → E8 close → E10a
→ E9a → E4 (E10b rides inside it) → E9b → E6b → E7** (E9c rides with E7), E∞
continuous, E2f queue-jumping whenever Dan's phone is in hand. E10 is the
canon phase — see "Direction ruling" below. The original rationale stands
where it still applies: E9a before the social phases because it is pure
build; E9b after E4 because the visitors ARE E4's cast. E8-before-E3 was
honoured in the event (E8a–E8d chose grade `b` and the character pipeline
before E3a generated a mesh); what remains of E8 is close-out, not a loop.
*(Historical sequence, superseded: E2f → E5 → E8 → E9a → E3 → E4 → E9b → E6
→ E7.)*

## How this roadmap is used (the three tiers)

*Superseded 2026-08-10 — kept because the plan below was written against it and
its decomposition still binds. The three-model split is gone (see CLAUDE.md §
"Why this changed"): **Opus works the milestone end to end**, and a fresh Opus
session at xHigh runs the phase gate. What survives unchanged is the design
already banked here — each near-term phase is decomposed into milestone-sized
units with scope boundaries, dependencies, acceptance shapes and named risks,
so none of it needs re-deriving downstream. Where a unit below says "gate:",
that is the acceptance shape to elaborate, not replace, and the two E2d rules
still bind every one of them: **every acceptance measurement names a control
that isolates the system's own contribution**, and **when a symptom implicates
three.js, read the vendored source before theorising**.*

- ~~**Fable** thinks: phase design, decomposition, audits at phase gates.~~
  Phase gates are now a fresh Opus xHigh session; phase design is the gate's
  output, as before.
- ~~**Opus** briefs and verifies.~~ Opus implements, verifies and deploys.
- ~~**Sonnet** implements a milestone end-to-end.~~ Delegation is ad hoc now,
  not a tier — a mechanical sweep too large to hold in one conversation. The
  transcription factory (`scripts/catalog-batches/`) is the standing example
  and the only one running.

Containment conventions that recur below, named once: **flag-first** (a
behaviour-changing feature lands behind a localhost/debug flag, gates green
and goldens untouched, then one deliberate enable+recapture commit — the
E2c.3a two-step) and **opposed-pair gates** (neutral input → bit-identical,
authored input → measurably moved — check 26's shape, reused for every new
axis).

*Flag plumbing (E5 phase-gate ruling): three modules now carry the same
~10-line `__mcgrotForce<Name>` override boilerplate plus a dead `= true`
constant each. Fine as it stands — do not retrofit for its own sake. The
**next** unit that needs a flag builds `src/flags.js` (one localhost-gated
`flag(name, shippedDefault)` helper) and migrates the three existing flags
in the same commit; the existing opposed-pair gates verify the migration for
free.*

### Model and effort per unit

**The rule:** Opus runs **medium** by default — the design here is
pre-chewed, so briefing and routine review are assembly, not derivation.
Escalate the **review pass** to **high** whenever a milestone's gates
mention goldens, a recapture, the render path, or an opposed-pair axis —
every failure this project has had (E2d ×2, D6–D8's over-claims, E2b's
substituted metric) happened at review of exactly that class of work.
**Opus: tell Dan which effort to run before starting each unit.** Units not
listed inherit the rule. Opus implements every unit; the one possible
exception left is E7a's mechanical hosting migration.

| Unit | Opus effort | Why |
|---|---|---|
| E2f device round | medium | evidence-driven; no golden risk |
| E5a staged reading | medium | overlay/audio; escalate if HUD copy changes (HUD is in all 27 goldens) |
| E5b.1 journal | medium | DOM + localStorage |
| E5b.2 anchor readers | **high (review)** | placement; a reindex recaptures all 39 goldens |
| E5c moment links + seed HUD | **high (review)** | HUD copy change moves every desktop golden |
| E2g street lights | LANDED 2026-08-02 | no golden moved (no pose frames a lamp); both night gates isolated, not relaxed |
| E2g.1 night coverage + picture gates | LANDED 2026-08-03 | one new golden (`lamp-hero-night`, night-only pose set); no existing golden moved; the close's picture gates fault-injected red |
| E5d turnaround + ending | LANDED 2026-08-03 | closed E5 — phase gate passed 2026-08-03 |
| E8 prototype loop | medium | no golden may move during the loop |
| E8 keeper landing | **high (review)** | wholesale recapture + new opposed-pair axis |
| E9a the shop | **high (review)** | render-path scene swap, boot change, transition gates |
| E3 pipeline spike | medium | disposable evaluation |
| E3 landing | **high (review)** | every character-bearing golden moves |
| E4 systems, flag-first | medium | street behaviour behind flags |
| E4 enable commits | **high (review)** | walker changes move leither-bearing goldens |
| E9b visitor theatre | medium | interior-only; corpus gated by Central Bar test |
| E6a.1 collision: buildings + props — **LANDED** | medium; **high (review)** on the zero-golden claim | movement-path only; bookmarks exempt by design |
| E6a.2 collision: characters — **LANDED** | medium | circles on existing groups; prompt-radius ordering gated |
| E8 close — **LANDED** | **high (review)** | wholesale recapture + noise.json bands measured on the new set |
| E10a the Gullet | medium; **high (review)** on the enable+recapture | new scene geometry, flag-first |
| E6b the tram | **high (review)** | camera parenting, update order, suspended clamps |
| E7a hosting move | medium | mechanical migration |
| E7b presence | medium | plus a hard verify of the silent single-player fallback |
| Phase gates | **xhigh** | a FRESH session at every phase boundary, never the one that implemented the phase — Opus flags when one is due (Fable until 2026-08-10, then Opus xHigh on cost) |
| E9a.2 the transition | **high (review)** | door prompt shares a frontage with `interact.js`; the first interior golden's pose is decided here |

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
  (~14/day measured before free-tier 429s; resumable; completed clips skip; the
  run now stops on the first quota error rather than grinding the remainder).
  **125/418 voiced, 125/418 transcribed, and ZERO transcribed-but-unvoiced**
  (recounted 2026-08-08). The trickle's queue is EMPTY and the daily job has
  been rendering 0 clips: the free Gemini allowance is not the constraint and
  is going unused. 30 distinct prebuilt voices are assigned across the 124
  vendors, rotating by assignment index and wrapping at 30. Runs unattended at 09:30
  via `scripts/daily-tts.sh` + `~/Library/LaunchAgents/com.mcgrot.daily-tts.plist`.
  Transcription, not the API, is the bottleneck: 294 comics still have no script,
  and that work is a parallel-subagent factory (`scripts/catalog-batches/BRIEF.md`;
  **read `scripts/catalog-batches/RESUME.md` first** — batches 5/7/8 hold partial
  JSONs that must be extended, never overwritten; the last wave died on a monthly
  spend limit).

  ⚠ **Promoted at the E2 phase gate: transcription is the project's content
  critical path, not a background nicety.** E5's journal denominator, reader
  nameplates, litter readability and the Leither comment corpus all scale with
  it directly. Resume the batch factory as spend allows — it is the cheapest
  way to make the shipped street bigger, and every batch that lands wants an
  `npm run smoke` after it (see the golden warning below).

  ⚠ **The trickle moves the goldens.** Newly transcribed entries are not inert
  data — each gives its NPC a name, a blurb and a readable comic, so more NPCs
  render a nameplate and a subtitle. Going from 103 to 124 transcribed moved 23
  goldens by 0.8–5.6% and `skyline` from 954 to 1109 draw calls, and nobody
  noticed because smoke had not been run since. Recaptured at `7f6a3de`. Run
  `npm run smoke` after a batch of transcriptions lands, not only after engine
  work.
- **Handmade shopfronts:** Dan feeds real-shop reference photos to ChatGPT,
  drops results in `assets/shopfronts/handmade/`, ingest script does the rest.
  Wishlist: `docs/shopfront-wishlist.md`.
- **A second voice stream is coming (E9b):** the shopkeeper visitor corpus
  (~250 archetype × category lines, then growth) shares the same daily TTS
  quota as comic readings. Text bubbles ship without waiting; voices trickle.
  When both streams contend, comic readings keep priority — they are the
  piece. If the trickle becomes the binding constraint on E9b, the options
  are a paid Gemini tier or a second key: Dan's call, parked until it binds.

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

### E2d — Post-processing — DONE (2026-08-01), NOT YET DEPLOYED

Shipped: vignette, film grain, colour grade. Dropped: bloom (inert — E2d.1a),
AO (needs the render path this deliberately avoids), and the user-facing
on/off toggle. Took four attempts; the first two shipped nothing and the third was
refuted before it was written. What made the difference was reading three's
source for how it decides tone mapping and colour space, instead of inferring a
mechanism from the symptom — see E2d.2 below, and read that entry before E2d.1
/ E2d.1a, which are kept as history and contain a superseded explanation.

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

- **E2d.2 — Post-processing without a composer. SHIPPED (2026-08-01).**
  Vignette, film grain and a colour grade (gentle S-curve + cool-shadow /
  warm-highlight split tone), in a new `src/post.js`, applied to the finished
  frame after tone mapping. `EffectComposer` is **out of the build entirely**.

  The rethink that produced this read three r185's source instead of inferring
  from symptoms, and found that **E2d.0's proposed route cannot work**:
  `WebGLPrograms.getParameters` disables tone mapping and forces the working
  (linear) colour space for *any* material drawn into a render target, and
  ignores that target's own `colorSpace` tag on write. So a composer with two
  or more passes draws the scene un-tone-mapped, and — because `fog_fragment`
  runs after both `tonemapping_fragment` and `colorspace_fragment` — composites
  fog in linear space instead of the post-tone-map sRGB space every weather
  palette was authored against. That is not a bug in a pass and no render-target
  format fixes it; it is what a composer does here. E2d.1's HDR route hit the
  same wall and misattributed it to the route.

  The replacement copies the finished canvas into a `FramebufferTexture` and
  redraws it through one full-screen `RawShaderMaterial` triangle, which gets no
  injected shader chunks at all — so the zero-contribution invariant holds by
  construction rather than by tuning.

  **Measured.** At `uStrength` 0 the post frame is **bit-identical** to
  `renderer.render(scene, camera)` across five weathers and two night hours
  (7/7 states, zero pixels differing on any channel); at the shipped strength it
  moves 7.3%–99.9% of pixels. Both directions are gated as check 26a/26b —
  deliberately opposed, so neither can pass on a broken build. Cost is **exactly
  +1 draw call at every pose**. Every `clip%` in the suite reads 0.000% (the
  grade darkens rather than lifts), so no ceiling was raised anywhere. 35
  goldens recaptured after their movement was measured one by one; 4 that did
  not move were left alone. Suite green. Full account in `docs/VALIDATION.md`'s
  "Post-processing without a composer".

  **No `#post-toggle` button.** E2d.1's mobile fallback went out with bloom and
  was not rebuilt. The fallback existed because bloom's multi-mip blur was
  genuinely expensive; this pass is one full-screen quad running a trivial
  shader — negligible against an 1100-draw-call frame — so there is nothing to
  fall back from. The stronger reason not to add it: the torch toggle is one of
  two open iOS bugs and has never been debugged on a device, so a second button
  wired the same way would be shipping an unverified copy of a known-broken
  pattern. `dbg.setPostProcessing(bool)` remains, and check 26 exercises both
  states. Revisit alongside the iOS round, not before it.

  **AO is dropped, not deferred.** It needs scene depth and normals in linear
  space — the composer path this design exists to avoid — and its payoff on
  merged OSM geometry under this much fog is the smallest of the four effects.
  Reopening it means reopening the fog authoring, which is an E3-or-later
  decision, not a post-processing one.

- **E2d.0 — Composer colour management. SUPERSEDED, and its route refuted.** No
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

  This milestone proposed supplying `EffectComposer` an `UnsignedByteType` target
  tagged `SRGBColorSpace`, on the theory that the default `HalfFloatType` target
  lacked a hardware sRGB decode path and so double-encoded. **That theory was
  wrong and the route is impossible** — three ignores a non-XR render target's
  `colorSpace` tag on write and always writes the working (linear) space, and the
  damage was never a double-encode in the first place. Refuted from source at the
  E2d rethink; superseded by E2d.2 above. Kept here because the invariant it
  articulated is the one durable thing to come out of E2d, and E2d.2 gates it.

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

### iOS bugs — OPEN (found 2026-07-28; promoted to E2f at the E2 phase gate)

Found by Dan on **iOS Chrome** (WebKit underneath, so read this as Safari's
engine) against the deployed E2e + E2e.1 build. Originally deferred; the E2
phase gate (2026-08-01) promotes fixing them to the next phase — see **E2f**
below. Status update at the gate: the "cheapest first move" this section
recommends (fail-soft `onEnter`) **already shipped** as E2c.3a item 0
(`c70ba9b`, fault-injection-tested in smoke) and is in the live build
(`gh-pages 4f9c55a`) — so the next action is a device retest, not code.

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

## E2 — phase-gate audit (2026-08-01): PASSED

Audited by Fable at the phase boundary, claims re-verified independently, not
quoted: smoke **166 checks, 0 failures** across two fresh runs (the second also
exercising the fixed recapture path, with `fascia-close` recapturing
byte-identical — SwiftShader determinism holding exactly); the live site serves
exactly the `gh-pages 4f9c55a` bundle (md5-matched); the shipped bundle contains
the `FramebufferTexture`/`uStrength` post path and **zero** references to
`EffectComposer`/`UnrealBloomPass`; voiced/transcribed/golden counts on disk
match the recorded 123/124/39.

**Architecture: sound, and E1's "sound for E2–E5" verdict survives — with one
scope note.** `src/atmosphere.js` is still the sole authority for time, weather
and light state: the only writers outside it are the boot wiring in `main.js`,
the torch, and the three arc-flash lights — all deliberate, all documented. At
1,180 lines it is ~550 lines of palette data over a compact core; it scales fine
as long as new columns stay data. `src/post.js` deliberately sits *outside*
atmosphere (vignette/grain/grade are lens and stock, not weather), which is the
right boundary. The scope note: the E1 verdict was given before E7's
presence/multiplayer ambitions existed and says nothing about them — it holds
for E3–E5 content work; E6/E7 each get their own architectural look when
planned.

**The E2d finding — what actually went wrong, and whether it can recur.** Three
of E2d's four attempts failed, and the failure was never tuning: it was
**measurement against the wrong control**. E2d.1a's gate measured post-on vs
post-off, a comparison that bundles the effect with a colour-management
artefact; the +42.5% it read as "the axis working" was 0.0% axis and 42.6% bug,
and the gate was *inverted* — it passed because the bug existed. Two mechanism
theories (threshold-crossing blur, HalfFloat double-encode) were inferred from
symptoms and were both wrong; what ended the loop was reading three r185's
source. Worth stating plainly: **the review layer worked** — nothing wrong was
ever deployed; the cost was two burned milestones, not a broken live build.

Two rules from this, binding on future briefs:

1. **Every acceptance measurement must name its control, and the control must
   isolate the system's own contribution.** "On vs off" is not isolation when
   the plumbing itself can contribute. The shape that works is check 26's:
   a neutral-element invariant (identity in → bit-identical out) opposed to a
   liveness check (authored in → measurably moved), so neither can pass on a
   broken build.
2. **When a symptom implicates the framework, read the framework's source
   before theorising.** Both wrong E2d theories were refutable in an hour of
   reading `WebGLPrograms.getParameters`; the source is vendored in
   `node_modules` and is ground truth.

Would today's gates catch a recurrence? For the post chain, yes — 26a/26b run
across seven states including the dark frames where the artefact class is
largest. For the *next* new visual system (E3's characters, E6's tram), no gate
exists yet by definition — which is why rule 1 above is a brief requirement,
not a smoke check.

**Harness fix landed at the gate:** the desktop bookmark loop `continue`d past
`clip-control` after capturing a missing golden, so a recapture run reported
158 checks instead of 166 and could be mistaken for a full pass. Now routed
through the same `checkGolden` helper the weather passes already use; a
recapture run reports the full check count.

**Residuals carried forward:** the two iOS bugs (→ E2f, below); transcription
at 124/418 as the content-side critical path (see Standing trickles); the
tram contradiction (resolved in E6b/E∞ below); `CLAUDE.md`'s stale "exhibit
spots 60" (fixed at the gate).

## Sequencing decision (E2 phase gate, 2026-08-01)

Phase numbers are stable labels, not an order. The order is now (E8 inserted
2026-08-01 with the delight-arc direction — see "Direction" at the top):

**E2f (device round) → E5 (comic layer) → E8 (the McGrot grade) → E9a (the
shop) → E3 (characters) → E4 (opinions) → E9b (the visitor theatre) → E6
(collision/tram) → E7 (ship-readiness, presence, E9c)**, with E∞ continuous.

Why E5 jumps E3 and E4:

- **E5 is the headline interaction and the cheapest phase left** — overlay UI,
  a localStorage journal, wayfinding cues. No new render systems, no asset
  pipeline, no golden churn beyond a handful of HUD-adjacent poses.
- **E3 is the riskiest phase left** (pipeline spike, rigged models, LOD for
  hundreds) and its payoff is aesthetic upgrade of interactions that E5 makes
  matter in the first place. Collection pressure from the journal also tells
  E3 exactly which readers deserve hero treatment.
- **E4's behaviours want E5's data** — stances reacting to what the player has
  heard/collected are far richer than stances in a vacuum, and the journal is
  where "what the player has heard" becomes state.

And why E2f jumps everything: sharing a link is the project's whole
distribution model (Dan's call, E2e), the piece is *voice-led*, and today every
iOS visitor gets silence. Nothing else on this roadmap matters to a visitor
who cannot hear it.

*Re-examined and upheld at the E5 phase gate — see "Sequencing check (E5
phase gate)" further down: E2g.1 (small) precedes E8, E2f stays Dan-gated
and queue-jumping, and E6 stays where it is.*

## E2f — The Device Round (iOS)

*The two open iOS bugs, plus the device-verification protocol whose absence
caused them. Small phase, hard rule: **no fix ships without a device console
read first** — the last unverified fix for bug 1 is what broke the music.*

- **Step 0 — retest the live build on Dan's phone.** The fail-soft (`c70ba9b`)
  and the shared-context rework (`bcddd8a`) are both in the live build now,
  and no phone has seen either. Plausible outcomes: (a) everything works —
  close both bugs, phase over; (b) music returns, readers still silent — the
  fail-soft caught a throw; read the console warning it now emits and fix the
  named cause; (c) still fully silent — the throw theory is wrong, stop
  theorising and read the console.
- **The console read is Safari remote inspection** (iPhone → Mac Safari,
  Develop menu) against the live site or a LAN-served dev build. Record what
  is seen in `docs/VALIDATION.md` — the point of the protocol is that the
  *next* mobile round starts from evidence, not hypothesis.
- **Torch toggle** (`wireTorchToggle`, `src/title.js`): reproduce on device,
  then fix. Desktop gating already proves the render path; the failure is
  between an iOS tap and `setToggle`.
- **While a phone is in hand:** the E7a mobile frame-rate question (995
  buildings + 400 NPCs on a real GPU) gets its first measured data point for
  free. Ten minutes of walking with the FPS meter is enough; write the number
  down.
- **Added at the E5 phase gate — the lamp pool on a real GPU.** E2g's pool
  size (4) is reasoned, not measured; the harness was shown *unable* to
  measure it (SwiftShader rasters outside every timed window). The scene now
  runs **eight dynamic PointLights at night** (pool 4 + torch + 3 arc
  flashes) in a forward-lit scene — on a phone GPU that is a real cost
  question. Walk the street at night on the device; if the frame rate dips
  only after dark, the pool is the first suspect and `POOL_SIZE` the first
  lever.
- **Optional rider if the round goes fast:** the E7a Cloudflare Pages
  migration is independent, mechanical, and removes the standing
  bandwidth-takedown risk before any share push that a working iOS build
  makes tempting. It does not need to wait for E7.

## E8 — The Look (the McGrot grade) — BETWEEN E5 AND E3

*The defined style, taken from the comics themselves: aged cream paper, flat
muted fills, warm dark-brown ink, halftone-printed photographs. Not realism —
the street as a printed page. Survey-fed (comic-print rendering across Obra
Dinn, Cuphead, Borderlands, Void Bastards, Sable, Hi-Fi Rush); attributions
inline. The architecture already fits: `src/post.js`'s single
full-screen pass is exactly where a print look lives, and check 26's
neutral/live gate pattern extends to every new style axis by construction.*

**This phase is a prototype loop, not a one-shot landing (Dan's call,
2026-08-01: "keep iterating until we find a prototype style we like" — the
style needs a lot of fleshing out before committing).** The shape:

1. Build the stack below behind **live-tunable uniforms plus named preset
   slots** (`dbg.setStylePreset('a'|'b'|…)`) — candidates differ in cell
   size, band gating, palette pull, paper warmth, misregistration amount.
2. Each iteration renders a fixed **judging set** — the eight bookmarks ×
   {noon overcast, 22:00 rain, 08:00 clear} × each preset — into
   `docs/smoke/captures/style/` as contact sheets. Dan judges pictures, not
   adjectives; rejected presets get one line saying why (the D-line lesson:
   keep the grader's reasons or drift).
3. Iterate until a keeper. **Only then** write `docs/STYLE.md` — the
   five-rule style bible (cf. Sable: paper colour sampled from the comics'
   cream, one screen-angle set and cell size, palette pull per tonal band,
   what never gets halftoned, line-weight rules) — and harden the winning
   preset into shader constants, so the renderer physically cannot go
   off-style from then on.
4. The containment landing (below) happens once, for the keeper only. The
   prototype loop itself never touches a golden: presets render to captures,
   the shipped strength stays 0 throughout.

**The candidate stack, in the existing single pass** (all colour-buffer-only,
deterministic, ordered):

1. **Luminance dot-screen halftone, shadow/mid bands only** — quantise
   luminance into 3–4 bands; dots live in the shadows and mids, highlights
   stay clean paper (cf. Hi-Fi Rush's shadow-gated halftone — this gating is
   what makes it read as printing, not a filter). ~3–4px cells,
   `fwidth`-smoothstepped dot edges (anti-swim), lerped ~50% with the source
   so the photo façades read as *printed photographs* — which is literally
   what newsprint halftone was for. Precomputed Bayer/blue-noise texture, no
   hashes (cf. Obra Dinn's pattern discipline).
2. **Ink misregistration** — ±1px channel offsets easing up toward frame
   edges. One tap per channel, unconditionally stable.
3. **Paper + grain** — constant warm paper tint; the existing grain gains a
   Cuphead-style artefact layer (spots/streaks re-seeded every 8–10 frames —
   low-rate reseed reads as *film*, not noise; amplitude stays a setting).
4. **Gentle palette pull, not posterise** — per-band warm/cool tint, mild
   saturation compression. Hard quantisation stays off the photos.

**Outside the pass, the two cheapest levers** (cf. Void Bastards — the comic
read is mostly sold by furniture, not shading): comic **caption boxes and
lettering in the HUD/DOM** (location captions in the comics' hand-lettered
style; the title card restyled as a cover), and an **offline comic-ising
pre-pass over the rectified façade photos** (slight posterise, edge-darken,
paper tint, baked once — deterministic by construction, zero runtime cost,
survives all camera motion). Optional per-material adjunct: inverted-hull
outlines on NPC/prop meshes only — never on the photo façades.

**Boundary markers — do not chase** (no depth/normals in this pipeline, by
E2d's own design): true contour/silhouette outlines, surface-orientation
cross-hatching, depth-graded line weight. Colour-Sobel ink over photos turns
brick and mullions to mush; if screen-space ink is used at all it is an
accent, hard-gated, and probably not worth it.

**Containment, learned from E2c.3a:** the whole grade lands behind a
`uStyleStrength`-like axis pinned to 0 first — all goldens unmoved, gates
green — then turns on in one commit that recaptures everything deliberately.
Check 26 already gates the pass's neutrality in both directions; a style
milestone extends the same opposed pair to the new uniforms.

**Character style joins the same loop (Dan, 2026-08-01: iterate prototypes
until one is liked — this supersedes the earlier "grotesque semi-realism
locked" note in E3).** Each E8 iteration includes 2–3 candidate character
treatments (toon-flat with outlines, semi-realist grotesque, paper-doll
evolved) rendered *under the current grade candidate* in the same judging
set. The grade and the characters are chosen together, from renders — the
grade may make a simple toon character read better than an expensive
semi-realist one, which changes what E3's pipeline spike should even buy.

## E3 — The Folk (character system v2) — AFTER E8 (see Sequencing decision)

*Direction updated 2026-08-01: the earlier "grotesque semi-realism locked"
call is superseded — character style is now decided in E8's prototype loop,
judged from renders under the McGrot grade (Dan: iterate until a keeper).
What stands: the photo-collage faces retire, and the readers stay grotesque
in spirit whatever the rendering treatment.*

- ~~**Opens with a pipeline spike** (the risk lives here): evaluate rigged-model
  sources — Mixamo characters + animation retarget, AI 3D generation
  (e.g. Meshy/Tripo), curated paid packs — for look, licence, file size, and
  web performance. Pick one pipeline before building anything.~~
  **DONE — E8d, 2026-08-04.** fal.ai Trellis, image-to-3D from a FLUX-generated
  character image. Greenlit: 1 primitive = 1 draw call, 5,254 triangles, 480KB
  at `texture_size=512`. Rigging turned out not to be needed at all (see the
  head-turn ruling below). Full numbers in § E8d.

### E3 plan — archetype mapping and the head turn (2026-08-04)

Measured before planning, because the mapping falls out of what is already in
`assets/catalog.json` rather than out of a preference:

| | |
|---|---|
| Vendors with body data | 124, of which **114 distinct** `{height, girth, headScale}` triples |
| Ranges | height 1.40–2.15 · girth 0.50–1.60 · headScale 1.15–1.75 |
| Faces | **39 across 103 vendors — already reusing 2.6×** |
| Leithers | 30 walkers, 4 meshes each, 124 meshes |
| People as share of the scene | 992 of 1,129 meshes |

#### The archetype ruling: identity from the mesh, variety from the build triple

Non-uniform scale costs nothing — no draw call, no bytes — so five archetype
meshes crossed with the ranges above is not five clones. It is five silhouette
families each stretched across a 1.5× height and 3.2× girth span, tinted
per-NPC by the `wreckify()` pattern, keeping the existing name-hashed scarf as
the per-vendor colour note.

The reuse precedent is real but must not be oversold: faces already repeat 2.6×
unremarked, whereas five archetypes across 124 vendors is **24.8×** — ten times
more aggressive. Scaling is what has to close that gap, and whether it does is
a judging question, not an argument. E3b is where it gets answered.

| Archetype | Girth | Height | Seed character |
|---|---|---|---|
| Bulk | 1.2–1.6 | mid | Rab — mesh already judged |
| Spindle | 0.5–0.8 | tall | Kenneth — image judged |
| Stoop | 0.8–1.1 | short | Morag — image judged |
| Slab | 1.0–1.3 | tall | new |
| Runt | 0.6–0.9 | short | new |

#### The head-turn ruling: move the tell to the body

The head turn is smaller than its prominence in the code suggests —
`npcs.js:424` is `sin(w) * 0.09`, a **5° bobble at 4Hz**, only while speaking,
reset to zero on stop. It is a "this one is talking" tell, not a performance.

Three options were weighed. Splitting the head out of Trellis's single
primitive means a mesh-edit step and a seam that will show under a Lambert
tint. Dropping the tell loses the only signal that a vendor is mid-reading.
**Taken: move the tell to the whole body** — a 4Hz ±2° lean on `group.rotation`,
which already carries the idle sway, with the comic plane bobbing along with
it. It costs nothing because the transform exists, and it removes the need for
a head node at all, keeping a vendor at one body primitive.

> **±2° and 4Hz were both wrong, and E3c measured them out.** Shipped as a
> 1.4° roll at 1.6Hz plus a 0.7° yaw at 4Hz. The rate split because a 4Hz
> whole-body motion is a shiver, not a person; the amplitude because the tell
> being *replaced* is a measurable control — at 2° the body tell moved each
> vendor's face 1.45× faster than the head tell had, and 1.4° is the value that
> puts the median at parity. Also: roll and yaw only, never pitch, because
> three's default euler order applies X *after* the street-facing yaw and the
> street curves.

#### The constraint that actually shapes the phase — REWRITTEN BY E3b

The pre-E3b estimate below is kept because it was confident, load-bearing and
wrong in both directions:

> | | Today | With meshes |
> |---|---|---|
> | Meshes per vendor | 7 | 4 (body, comic, scarf, nameplate) |
> | **Triangles, 124 vendors** | **16,616** | **651,496** |
>
> **So the paper-doll survives, as the distance LOD.** It is 134 triangles, the
> code exists, and it is already gated.

Measured at `skyline`, the only pose that sees the whole street:

| | dolls | meshes |
|---|---|---|
| Draw calls | 1,103 | **404** |
| Triangles | 306,435 | **573,894** |
| Renderable objects per vendor, unculled | 13 | 3 |

Two corrections, both measured:

- **651,496 was 124 × the largest archetype.** Summed over the actual
  assignment it is **470,084**, and the whole-scene figure is 573,894 — a lot,
  but not "twice the scene".
- **The swap SAVES 699 draw calls, and this inverts E3d's premise.** A paper
  doll is 13 draw calls per vendor, because its head is a BoxGeometry carrying
  six materials, one per face; a meshed vendor is 3, of which the body is 1.
  The doll is the cheap LOD *in triangles* (134 against ~4,100) and the
  expensive one *in draw calls*. Which of those binds is what E3d had to
  measure before choosing a crossover — "the doll is cheaper" is now known to
  be false as a general claim. **E3d.0 measured it on 2026-08-04: draw calls
  bind, the doll is the expensive end, and E3d is rejected. See below.**

#### Units

| | | |
|---|---|---|
| **E3a** | Generate and judge the five archetypes | ✅ landed — 5 glbs, 20,455 tris, 2,252KB |
| **E3b** | Archetype selection + non-uniform scaling from the build triple, flag still off | ✅ landed — **greenlit**, squash 0.735–1.253, 5 gates |
| **E3c** | Body-lean speaking tell; retire the head node; **the per-vendor tint that now has to carry the colour note** | ✅ landed — tell at speed parity with the one it replaced, note at 124 materials for **zero** extra draw calls, 5 gates |
| **E3d.0** | **One measurement, not a milestone**: is a distance LOD needed at all? | ✅ landed — **no**, and the doll is the expensive end; gate strengthened |
| ~~**E3d**~~ | ~~Distance LOD, doll ↔ mesh~~ | ❌ **rejected by E3d.0** — see below and `VALIDATION.md` |
| **E3e** | Flip `CHARACTERS_ENABLED`; deliberate baseline + golden recapture | ✅ landed — 23 goldens recaptured, 6 baselines re-cut, 2 gates; **E3 is visible** |
| **E3g** | Retire the paper doll from the shipped path | ✅ landed — **1,253 → 509 scene meshes**, 875 → 487 materials, 39 → 0 face fetches; 2 gates added, 2 re-based across boots; no golden moved |
| **E3f** | Leithers — the 30 walkers stand on the same five archetypes | ✅ landed — **274 → 64 walker draw calls**, no new assets; 7 gates, 14 goldens recaptured, 4 baselines re-cut |
| **E3h** | The single-file artifact: inline the glbs, retire the published faces | ✅ landed — 4.01 → **6.94 MB**, artifact crowd now matches the site; found a walker bug no source-tree gate could see |

#### E3h landed (2026-08-05) — E3 is complete

**The five glbs are inlined** as `model/gltf-binary` data URIs, read straight
from `ARCHETYPES`. 4.01 → 6.94 MB against a ~8 MB practical limit; the artifact
now stands the same crowd as the site instead of falling back to paper dolls.

**The 39 faces and their credits section left together**, in the order § E3g
fixed: the glbs had to be inlined first, because until they were, the doll
fallback was the only thing keeping the artifact's street populated and the
faces were what dressed it. The credits section is now conditional on the files
actually being published, so re-publishing them without attribution cannot be a
silent one-line change.

**A new `artifact` region — the only gate in the suite that tests a build
output.** It runs `build.mjs` (0.2s) and serves `dist/` on its own server,
because the suite's server is rooted at `src/` and the artifact's whole claim
is about what happens when nothing above the file is fetchable.

**It immediately found a bug E3f had introduced and nothing else could see.**
`characters.js` loaded only the archetypes *vendors* asked for. The site's 124
vendors want all five, so the two sets were identical; the artifact wanted one,
and **29 of 30 walkers had no body at all** — never loaded, never failed, never
notified. Every existing gate ran against the dev tree where the full catalog
resolves. A defect that only exists in a build output needs a gate that boots
one.

**Recorded, not gated:** the four car glbs still 404 in the artifact, so it has
no wrecked vehicles. Pre-existing and not E3's; the gate prints them in its
detail line rather than reddening for someone else's decision.

#### E3f landed (2026-08-05)

**No new assets.** The walkers reuse the five archetypes the vendors are
already standing on, published through an `onArchetype` subscription in
`characters.js`. 274 → 64 draw calls across the 30, `skyline` 413 → 315.

**The unit was the judgement, and it went in off first.** Reuse could have read
as five clones, or dissolved the "crowd is anonymous, readers are characters"
separation. The flag landed off with the seeded layout diffed against the
previous commit — all 30 walkers identical — so the frames could be opened
before a golden was paid for. The pair shot (vendor and walker 3.4m apart, both
screen positions asserted, camera on their perpendicular bisector) is decisive:
the box was a box, the mesh is a passer-by. The densest walker cluster on the
whole street is two, so the clone risk is structurally low.

**A synthesised head axis was rejected by measurement.** Walkers have no
authored `headScale`, and inventing one bought no extra archetype variety while
pushing the worst walker to 1.341 squash — outside the 0.70–1.30 bound E3b's
contact sheet was judged at. They select on girth alone.

**Drawing that invented value from the shared PRNG reseeded the entire crowd**
while the flag was off and the scene was supposed to be untouched. Caught by
diffing the seeded layout against a worktree at the previous commit, not by
looking at pixels. E3f values now come from their own stream.

**The recapture set was measured, not inferred.** The audit listed 24 goldens,
23 of which move on every run regardless (§ E3g). Projecting all 30 walkers
into each bookmark's camera named the three poses that actually contain one;
`lamp-hero-night` was added on the strength of its −98 draw calls when its
golden had barely moved — **the budget saw what the golden could not**.

**Weakest claim, named as such:** the anonymity separation now rests on height,
tint and shade rather than on a faceless head, and was judged on two frames.

#### E3g landed (2026-08-05)

**The doll was not deleted.** It is built by `npc.buildDoll()` and called from
`characters.js` in exactly two situations — the crowd is off, or an archetype's
glb 404s. The runtime win is identical to a deletion's, and keeping the
construction path is what pays for six gates' control arm and for the
artifact's only fallback. Numbers, the fault injections and the golden control
are in `VALIDATION.md` § E3g.

**The unit was the gates, not the deletion.** `E3b`'s height check and `E3c`'s
note check each held two independently-built figures in one scene, which is
precisely what stopped them being a formula compared with itself. They now read
the doll side off the **off-arm page and join on vendor name** — two scene
builds, two construction paths, no shared object. Fault-injected to 19.355%
height error and −0.9302 hue agreement respectively.

**A harness defect fell out of the injection**: a null `head` killed the whole
characters region, and a region that throws prints no results — so six red
gates became one stack trace. Fixed; the same injection now reports all six.

**`goldens:audit` reports 23 false positives on every run, for any change.**
Its 0.02% floor is far below what six of the poses reproduce at. Confirmed by
re-running the audit in a worktree at `0128b1c`, which lists the same 23 at the
same magnitudes with none of E3g's code present. Read the audit against a
control until the floor is per-pose, or it will hand you six poses of standing
noise as your change's blast radius.

**E3h's ordering is now fixed rather than open.** The artifact's 404 fallback
is what keeps its street populated, and that fallback needs `assets/faces`. So
the faces cannot be dropped from the build until the glbs are inlined —
E3h inlines first, then the faces and their credits section go together.

#### E3d was rejected by measurement (E3d.0, 2026-08-04)

E3b measured the swap as **−699 draw calls and +267,459 triangles**, which
inverts the LOD's premise: swapping to dolls at distance SPENDS draw calls to
SAVE triangles. So an LOD only pays if triangles are what bind. That was
reasoned, not measured, so E3d was made conditional on measuring it rather than
cancelled on the argument. E3d.0 measured it.

**Triangles do not bind. Draw calls do, and the paper doll is the expensive
end.** A doll is 13 draw calls per vendor against a mesh's 3, and at the
heaviest pose in the game that is 1,335 against 525 — worth **+1.90ms** of CPU
frame time against **+0.49ms**. Dolls do rasterise faster, by occluding the
background rather than by being light, but the two effects cancel: at `skyline`
it is a wash, and at `street-along` the doll crowd is the slower one on both
the sum (4.99ms against 4.21ms) and the larger half (3.11ms against 2.51ms).

So an LOD reverting to dolls at range would make the heaviest frame *slower*.
E3d is struck. Nothing is near a budget in any case — the worst pose measured
is 3.1ms CPU and 2.9ms GPU against 16.7ms for 60fps.

Named blind spot: the harness is an Apple M4 through ANGLE Metal, not a phone,
and a phone's GPU is weaker relative to its CPU. No measurement in this repo
can close that. Full account, including the three harness defects that produced
plausible wrong numbers first, in `docs/VALIDATION.md` § E3d.0.

**What E3d.0 left in the suite.** No new gate — a frame-time gate would be
machine-dependent and flaky. Instead the existing E3b draw-call gate was
strengthened from "the swap refunds SOME draw calls" to a **≥2× floor**
(measured 2.73×), because the ruling rests on the size of the refund rather
than its sign. Fault-injected: four extra sub-meshes per vendor takes it to
1.61× and red, while still refunding draw calls — i.e. still green under the
old direction-only assertion.

#### E3 phase gate — findings (2026-08-05)

Run by Opus at Dan's request rather than by Fable. **That is worth discounting
for**: the gate exists to catch false claims in a phase's own summaries, and
this phase's summaries were written by the same session that audited them. It
was weighted towards re-derivable measurement for that reason, and one of its
own findings had to be withdrawn mid-audit (below).

| | finding | evidence |
|---|---|---|
| **1** | **39 face JPEGs still load, decode and upload to the GPU. None is on a visible mesh.** The E3 plan said the photo-collage faces "retire"; they became invisible instead. 1.1MB of assets and 103 live materials. | scene traverse: 103 face materials, `onVisibleMesh: 0` |
| **2** | **744 of 1,253 scene meshes (59%) are permanently hidden doll parts**, carrying 16,368 never-drawn triangles and most of the scene's 999 unique materials. Since E3d.0 rejected the LOD they have no runtime role at all — only the scarf's *colour* and the gates' off-arm still need them. | scene traverse, visibility resolved through parents |
| **3** | **The comic plane's belly clearance is gated by nothing.** `comicMesh` appears nowhere in `smoke.mjs`, yet E3b records "half the crowd wearing their comics inside their stomachs" as a defect only the contact sheet caught, and the fix is five hand-measured `frontZ` constants that `characters.js` itself says must be re-measured whenever an archetype is regenerated. | currently CORRECT: 13.0–17.9cm across all 124, against an intended 17cm |
| **4** | **The walkers are box columns standing 2m from fully modelled vendors.** | capture with both figures' screen positions asserted before reading it |
| **5** | **The shareable artifact and the live site now show different crowds.** All five glbs 404 in the single-file build, so `.catch(() => null)` leaves the dolls visible. Consistent with the existing cars behaviour, but E3 is the phase that made it matter. | served `dist/` with no `assets/`: every character glb 404 |

**Finding 3 was nearly reported as a live defect and was wrong.** The first
measurement compared each comic to its mesh's frontmost vertex *anywhere*,
which is a nose or a knee on some archetypes, and it reported 18 runt vendors
wearing comics inside their bellies. Restricted to the comic's own height band
the count is zero. The lesson is the one E3d.0 already paid for twice: a
plausible number from a measurement nobody checked is worse than no number.

**What the gate did NOT find.** No regression in anything E3 claimed: the
height match, distortion range, tell parity, tint agreement and draw-call
refund all re-measure where their commits said. The suite is 239 green. The
architecture held — `characters.js` stayed additive and the flag genuinely
gates the scene both ways.

**The one architectural drift worth naming**: `characters.js` reaches into
`npc.dollBody`, `npc.scarf` and `npc.comicMesh` to hide and reposition another
module's internals. That coupling is exactly what makes findings 1 and 2
awkward to fix, and E3g should resolve it by moving the doll's construction
behind a switch in `npcs.js` rather than by hiding it from outside.

**E3f is not a footnote, and is no longer optional.** Finding 4 above is the
one a player sees: the 30 ambient walkers are box columns standing a couple of
metres from fully modelled vendors, and E3e made that contrast worse rather
than better. The capture behind it asserted both figures' screen positions
before the frame was read, after two earlier attempts photographed tarmac and a
building wall. *(This paragraph was truncated when the phase-gate section was
first written — it ran straight into the E3e note below with its evidence
missing. Restored and completed by E3f, which measured it.)*

**E3 is visible as of E3e.** `CHARACTERS_ENABLED` ships true: 124 vendors
stand as generated meshes instead of box stacks. 23 goldens were deleted and
recaptured, six draw-call baselines re-cut by hand, and `skyline` went from
1112 draw calls to 413. The gate that asserted the shipped default was
untouched now asserts the crowd is standing in it, and a new gate covers the
off override, which is the direction every A/B comparison in the suite now
depends on. Numbers and the frames in `docs/VALIDATION.md` § E3e.

**The live site is behind main** — it was last deployed 2026-08-04 with the
flag off, so nothing of E3 is on it until the next deploy. That is Dan's call.

**A Fable phase gate is now due.** E3e is the commit that changed what ships,
and a fresh independent read is worth most here.

**What would have killed it, and did not:** non-uniform scaling at girth 0.5
against 1.6 may read as a broken mesh rather than a grotesque. It does not,
because scale is never asked to span that range — selection matches each
vendor to its nearest archetype and scale carries only the residual, measured
at 0.735–1.253. Judged on a contact sheet of each archetype's narrowest and
widest vendor: ten figures, ten people. Full account, including the two
defects only the picture caught, in `docs/VALIDATION.md` § E3b.
- Readers: seated/standing sculpted grotesques, comic held two-handed, idle +
  page-turn animation, lip-sync-adjacent head motion while speaking.
- Leithers: walk/idle/turn cycles, silhouette variety (shopping bags, prams,
  dogs), LOD/instancing strategy to keep hundreds cheap — including a cached
  chainage lookup (per-frame `chainageOfPoint` is a linear scan; see E1
  residuals) and the `skyline`-pose draw-call count (~950, mostly
  individually-drawn NPCs).
- The cast of Leith archetypes seeds E4: the preacher at the Foot, the gull
  feeder, dog walkers, the man outside the pub who kens everything.

Added at the E2 phase gate (survey-fed, attributions inline) — the cheap
aliveness techniques that do NOT need the pipeline spike, and so can land
even if the spike goes badly:

- **The static-NPC playbook** (cf. FromSoft's hub NPCs): stillness works when
  it is *posed* stillness plus one micro-behaviour on a long randomised
  period — a cough, a page turn, shifted weight — at 20–60s intervals,
  desynchronised across neighbours, so stillness reads as patience rather
  than death. This is animation-light and worth prototyping on the *current*
  paper dolls before the spike, as its own proof.
- **Being noticed beats being busy** (cf. RDR2, Hitman crowds): a
  proximity-tiered acknowledgement on readers — head tracks at 10m, a one-line
  Scots grunt at 3m, a pointed "you readin' or buyin'?" if the player lingers.
  One event rippling through two or three nearby Leithers with a 200–400ms
  stagger reads as a society; thirty independent wanderers read as
  screensavers.
- **Density in pockets, silence between** (cf. A Short Hike, Sable,
  NaissanceE): cluster readers into micro-markets with genuinely dead
  boarded stretches between — wind, tape rattle, one gull. Uniform density
  is the enemy; the quiet is what makes the next cluster land. (This is a
  *placement* decision — revisit reader distribution here, not just their
  models.)
- Budget rule from the same survey: spend behaviour budget on **reaction,
  not motion** — the tier list is (1) acknowledge the player, (2) micro-idles,
  (3) locomotion quality, in that order.

## E4 — Opinions (the McGrot society)

*Leithers hold stances on McGrot and act on them.*

- Stance per leither, seeded: **devotee / sceptic / feart / profiteer**.
- Behaviours by stance: gather round readers and listen; heckle and move on;
  cross the street to avoid a reader; collect litter comics; pin comics to a
  noticeboard that accumulates across visits; argue with each other.
- Dialogue: pre-generated Scots line corpus per stance (extend
  `extract-comic-lines.mjs` pattern) shown in bubbles — free at any scale.
  TTS reserved for a small hero cast via the daily trickle.
- **Freshness at scale = context-keyed, rationed lines, not more lines** (cf.
  Dishonored's Heart, Hello Lamp Post): key comments to reader + weather +
  hour + what the player just heard, keep each under ~8 seconds, never
  repeat a line within a session. Specificity masks finiteness. Build the
  corpus as **archetype templates with slots** (the sceptic, the weeper, the
  heckler, the one who's heard this one before) filled from local context,
  rather than unique scripts per Leither.
- **Memory is the cheapest affection** (cf. Hello Lamp Post's most-loved
  feature): a reader or Leither who says "you again" on a second approach —
  one localStorage flag E5's journal already keeps — is disproportionately
  effective.
- **Events, not agents** (cf. AC Unity's crowd events): when more life is
  needed, author five-to-eight tiny two-actor street events (a haggle, an
  argument about the trams, gull-feeding) spawned at slots on long
  randomised timers. Stances pick which event fires — this is what the
  stance system selects between, not per-NPC cleverness.
- Verbatim rule holds absolutely: comic text is quoted garbled, never fixed.

### The cast — actual Leithers (2026-08-01, Dan-directed; dossier in `docs/LEITH.md`)

The generic walker crowd becomes a cast. Fifteen researched archetypes with
dialect kit, texture list and sensitivity rules live in the Leith bible —
headline entries: the Foot-of-the-Walk Auld Boy, the Queen of Leith, the
Hibee, the Persevere Pensioner, the Save Leith Walk Veteran, the Tram Works
Shop Owner (the street's Cassandra: "Was that the war?" "Naw, that's been
like that since 2019"), the Polish Deli Owner, the Banana Flats Sentinel, the
Posh Students, the Gentrifier, the Central Bar Regular, the Gala Day
Organiser, the Street Drinker Philosopher (write him as the wisest NPC or not
at all), the Oral History Lady. Hero-cast TTS voices come from the daily
trickle; the students get RP voices — and are the ones out of their depth.

**The street is a social gradient**: spawn distributions keyed to chainage.
Students, tourists and gentrifiers thin out doon the Walk; the Foot belongs
to the auld boys. Geography does the class comedy silently.

### The comic engine — put the intelligence in the comics (survey-fed)

The Sims inversion (cf. smart objects): with 418 stations and ~30 walkers,
**comics broadcast, agents score**. Each comic gets a pre-tagged advert
vector at build time (doom, absurdity, food-mention, animal-mention — cheap
keyword tagging over the transcripts, seeded). Leithers score adverts against
their stance (feart avoids doom, devotees seek it, profiteers seek existing
crowds); gulls score the food axis; rats score ground-level stations. New
interplay = a new advert axis, zero new agent code. This is also why
transcription is the critical path: an untranscribed comic has no advert.

**One knowledge-token struct powers everything social**:
`{textFragment, sourceComicId, hopCount, stanceFlavour, tick}` — moving
between heads, beaks and burrows:

- **Catchphrase contagion** (cf. Animal Crossing's catchphrase spread): a
  Leither who hears a reading carries a fragment; on Leither–Leither
  proximity (a 1D distance check on this street) it transfers. The player
  hears the same broken line echoing further down the Walk. **Fragments
  travel VERBATIM — no mutation.** The survey suggested mutation-per-hop;
  it is ruled out here: the verbatim rule is the point, and the spread is
  the dynamism. (If Dan ever wants drift, that is his call to reopen.)
- **Thought logs** (cf. RimWorld): a 3–5 entry ring buffer per Leither
  drives the comment picker — the one who heard a doom comic two minutes ago
  mutters about it to the next Leither they pass.
- **Belief pressure** (cf. Crusader Kings' secrets-as-tokens): devotee
  fragments heard +1, sceptic mutters −1; thresholds flip stances slowly.
  The contagion stops being decoration and becomes ideological weather along
  the street, biased by which comics sit on which stretch.
- **Player memory** (cf. the Nemesis system, one slot): each Leither
  remembers one thing about the player — "You're the one that stood gawping
  at the Dalmeny Street comic." One remembered fact, spoken, reads as deep
  simulation.

**Crowd events as attractors** (cf. AC Unity): advert score × listener count
crossing a threshold recruits passing Leithers into a semicircle audience,
holds them a seeded duration, disperses them carrying fragments.
Congregations forming and breaking are the most legible aliveness signal per
CPU cycle this street can buy.

**Groups as units** (cf. Reynolds' leader-following): the posh students are
ONE leader FSM (walk / stop-and-listen / recoil / photograph) plus 3–5
followers steering to seeded offsets, copying the leader's state with a
300–800ms stagger — the ripple of heads turning is what makes a group read
as social. No pathfinding; the leader is a 1D position.

**Engineering shape**: AI LOD (full sim only within ~40m of the player; husks
beyond), and precomputed day-timelines from the world seed (cf. Shadows of
Doubt — compute each Leither's whole walk at load, play it back, interrupt
locally). Fully deterministic, and coincidences become authorable: two
rival-stance Leithers scheduled to meet outside the same comic. Every roll is
`hash32(seed, actorId, tick)` — the determinism constraint is untouched.

### Animals in the play

Gulls get a three-state FSM (circle / perch-near-crowd / swoop) driven by the
same advert table — food-mention comics and formed crowds raise
gull-attractiveness. **Gull page-theft — APPROVED (Dan, 2026-08-01, "go with
your gut")**: a gull steals a physical comic page mid-reading — vendor
shouts, audience scatters, the page blows up the Walk, a rat drags it to a
burrow. The reading thereafter *skips the missing page's lines* — omission,
never rewording, which is the boundary that keeps the verbatim rule intact:
what is spoken is always exactly what is printed on the pages the vendor
still holds. Rats mirror below: gathering
under high-food stations, scattering radially when a group passes — which
couples groups and animals visually for free.

### The Leith calendar (date-seeded, real dates)

- **Match day**: on real home-fixture Saturdays (or a seeded stand-in), the
  whole crowd flows east toward Easter Road; scarves in windows; the vendors
  lose their entire audience for 90 minutes; distant crowd roar carries.
  Hibs fandom is hope as a discipline — "persevere" in football form.
  Gentle Hearts slagging only; no sectarian texture, ever (see the bible).
- **Gala Day** (second Saturday of June, since 1907): bunting, a pageant
  doon the Walk to the Links, the Organiser drafting the player as a float.
- These are exactly the "loud, nameable daily differences" the date-seed
  sharing thesis (E5c) wants — a visitor can say "I was there on Gala Day".

## E5 — The Comic Layer (McGrot UX) — CLOSED (phase-gate passed 2026-08-03)

*The headline interaction: explore the Walk while hearing AND reading McGrot.
Fleshed out at the E2 phase gate with attributed ideas from a six-axis survey
of comparable work (audio walks, walking sims, web-3D places, procedural
worlds); attributions inline so the reasoning survives.*

### E5a — The reading, staged

- **Read-along overlay:** approach a reader, press E / tap — the actual comic
  art fills the view while the voice reads it. **Sync the transcript
  phrase-by-phrase** where timing allows (word-level is not needed): seeing
  the garble *as it is spoken* is what proves the voice really reads the
  verbatim text — the sync is the verbatim rule made visible (cf. Firewatch's
  phrase-timed subtitles).
- **A ritual before the reading** (cf. Cardiff's audio walks, Rapture's
  tune-in): a beat of eye contact, the comic raised, a half-second hush with
  ambience ducked — the small ceremony is what converts walking-past into
  listening. One foreground voice at a time is already the interact.js model;
  make the *mixer* enforce it (duck ambience and Leither murmur hard while a
  reading holds focus — cf. Cosmo D's one-voice-owns-the-mix zoning).
- **Readings degrade gracefully with distance** rather than binary stop:
  trail off toward muttering as the player leaves earshot, resume on return
  (cf. Firewatch). Verbatim rule untouched — attenuation is presentation.
- **Vendors are already mid-read as you approach** some of the time — joining
  a reading in progress implies it continues whether anyone listens (cf. The
  Infinite Conversation), and is cheap: start the clip at a seeded offset.

**Planned 2026-08-01; brief at `~/.claude/plans/mcgrot-e5a-brief.md`.** Five
findings from reading the code changed the milestone's shape, and they are
recorded here because they outlive the brief:

- **No transcript ships today.** The spoken text exists only in
  `scripts/tts-prompts/<id>.txt`, interleaved with `[stage directions]` and
  `"quoted"` comic text, one speaker line per file (consistent across all
  124). E5a therefore *starts* with an offline bake —
  `scripts/build-readings.mjs` → `assets/readings.json` — and the quoted /
  unquoted distinction is carried into the data, so the overlay can render
  sacred comic text differently from the vendor's own wrapper speech.
- **Phrase times are audio-anchored, not estimated.** `ffmpeg silencedetect`
  segments each clip; phrases are fitted to the runs by length weighting.
  The gate must therefore score alignment against an *independently computed*
  RMS envelope — scoring against `silencedetect` would be the metric
  measuring itself. Opposed pair: shipped alignment must beat both a flat
  equal-duration control and a +1.5 s shifted control.
- **One foreground voice is not actually enforced.**
  `proximityAudio.update()` returns early while the overlay is open, so
  neighbours already playing keep going underneath the focused reading. The
  ritual item now includes making the invariant explicit.
- **The busker offset is `Math.random()`** (`src/proximity-audio.js:89`) —
  the last nondeterminism in the audio path. A per-NPC virtual reading clock
  seeded on `hash32(id + day seed)` replaces it and delivers both the
  join-mid-read and the resume-on-return bullets from one mechanism.
- **Leithers have no audio.** "Duck the Leither murmur" above is a no-op —
  the murmur is behavioural, not sonic. Out of scope until leithers speak.

Landing is flag-first: everything lands with the read-along off and all 39
goldens unmoved, then one enable commit recaptures `mobile-comic.png`
deliberately. **That enable commit is the high-effort review**, per the
tiering table's golden rule, even though no HUD copy changes.

**LANDED AND DEPLOYED 2026-08-01** — `d74b330` (flag off), `9e54896`
(enable), `35fac9b` (review fix); gh-pages `fccd158`, bundle md5
`4ee660ef…` matched against the live URL, `readings.json` served at 127,973 B
(byte-for-byte the local file). Payload 96 MB — still inside the Pages
bandwidth risk E7a exists to remove. Smoke 171 checks green, twice; goldens unmoved apart from the
deliberate `mobile-comic.png` recapture; `readings.json` 125.0 KB, artifact
4.15 MB. Review found and fixed a defect the gates could not see: phrase
times went backwards in 25 of 123 comics, stalling the highlight — see
`docs/VALIDATION.md` § 5e, and the general lesson, which is that a gate
scoring boundaries *against the audio* is structurally blind to the ORDER
they arrive in. Cheap absolute invariants belong alongside scored ones.

**Two residuals, neither blocking E5b:**

- ~~**Defective audio tails.**~~ **Fixed 2026-08-02**, before the E5b.2
  deploy — `51834c74` had become the Guajira anchor, so the defect was about
  to ship as one of the twelve showcase readers. `2b2110bb` ran 182.8s for a
  reading ending at 16.2s; `51834c74` ran 77.6s against 52.6s. One correction
  to the original note: the tails are **not** pure silence but a low hiss
  (mean −44 to −47dB, peaks to −30dB), which is exactly why the first −45dB
  `silencedetect` pass reported no trailing run on `2b2110bb` at all. Trimmed
  to 16.8s and 53.1s at the source encoding, `readings.json` rebaked.
  Verified: speech regions still measure −16 to −19dB while the new tails sit
  at −61 and −72dB; the rebake changed exactly those two entries and left the
  other 121 byte-identical; the corpus alignment score is unmoved at 0.9599.
  1.52MB smaller.
- ~~**Alignment quality is unverified by ear.**~~ **Settled 2026-08-01** —
  Dan listened through `2a0e56d4` (the worst former offender, 4.0s of wrong
  highlight before the fix) and a clean comic: the highlight tracks the voice
  line by line, no stall, no backwards jump. The sync is the one thing no
  gate here can prove, so this listen is the acceptance, not the 0.9599.

### E5b — The journal, and the quarry

- **The journal:** comics heard/found logged ("34 of 418"), localStorage.
  Every surveyed web piece that holds visitors past two minutes gives the
  wanderer a quarry (Bruno Simon's achievements, Summer Afternoon's five
  secrets); the journal is ours, and it is also the state E4's stances will
  react to.
- **Journal counts only what exists:** the denominator is the *transcribed*
  count, not 418, until transcription completes — an honest "34 of 124 (more
  being unearthed)" beats a fake 418. This makes transcription visibly the
  content critical path (see Standing trickles).
- **A dozen anchor readers** at real landmarks get staging — approach
  sightline, framing, light (cf. the Zium galleries' curation-over-coverage
  thesis: tiers, not 418 equal tiles). The journal marks anchors distinctly;
  finding all twelve is the "completed" feeling without demanding 418.
- Wayfinding stays diegetic: a distant voice on the wind, a gull circling a
  reader. No markers, no compass — one straight street is already legible
  (cf. Bernband's no-UI thesis).

**Planned 2026-08-01; split in two. Brief for the first half at
`~/.claude/plans/mcgrot-e5b-brief.md`.**

- **E5b.1 — the journal.** DOM, localStorage, counting. No placement, no
  render path. Medium, as the tiering table has it.
- **E5b.2 — the dozen anchor readers.** Staging twelve vendors at real
  landmarks moves NPC placement, which moves every golden with a vendor in
  frame. It needs its own flag-first landing and its own gates, and it is
  **high-effort review**, not medium. Bundling it with the journal would turn
  a DOM milestone into a recapture milestone.

Three decisions taken at planning:

- **The denominator is computed at runtime from the built cast**, never
  hardcoded — so it rises on its own as transcription lands. Today: 124
  vendors with audio (123 with an E5a reading; `5c5f0c9c` is catalogued with
  no mp3 on disk).
- **Nothing goes in `#hud`.** Its copy is in all 27 desktop goldens, which is
  why E5c is already marked high-effort. The journal is a panel opened with
  **J**, closed by default, and a gate now asserts the HUD string is
  unchanged — that gate protects the golden set from every later milestone
  too, not just this one.
- **Passive listening does not count.** Only a reading you opened, and a
  litter comic you read. The ambient murmur is atmosphere, not a collection.

Its touch affordance must be wired on `pointerdown`/`pointerup`, not `click` —
see the open E2f torch-toggle bug, where a `click`-only listener appears to be
exactly what fails on iOS.

**E5b.1 landed 2026-08-01 (`25e550f`), reviewed and corrected. Not yet
deployed — Dan has not seen the journal in the browser.** All checks green,
artifact 4.15 MB. Three review findings, all fixed in the landing commit:

- **`mobile-hud` and `mobile-street` were stale.** The touch toggle renders
  into every mobile street capture and changes 0.118% of the frame (measured
  by self-diff, bbox `[20,20,67,67]`) — under the 0.5% tolerance, so it passed
  against images that predate it. Both recaptured; `mobile-hud` fell 0.208% →
  0.019%, `mobile-street` 0.114% → 0.000%.
- **The "derived denominator" gate could not fail.** Every built vendor has
  audio today, so the derived count is indistinguishable from `npcs.length`
  or from a typed `124`. Now fault-injected and proven red.
- **`journal-toggle` had no mobile coverage** — added to the tap-target and
  safe-area gates.

Two lessons worth carrying forward:

- **A brief that adds an always-visible control must name the goldens it
  expects to recapture.** This one said "panel closed by default, so no golden
  can move" — true of the panel, false of the toggle beside it.
- **Nothing intentional may live under the golden tolerance.** It exists for
  renderer jitter; every element parked beneath it shrinks the budget left for
  detecting real regressions. New visible element ⇒ delete and recapture the
  specific goldens.

**Deployed 2026-08-01 — gh-pages `088bc0f`, md5-verified against the live URL
(`bundle.js` and `index.html` both match; journal markup and storage key
confirmed in the live payload).**

**E5b.2 planned 2026-08-01. Brief at `~/.claude/plans/mcgrot-e5b2-brief.md`.
High-effort review.**

Measured at planning, and the reason this is high-effort:

- Vendors sit every **12.33 m**, placed from a single loop index that also
  derives pavement (`i % 2`), coat colour and animation phase. **Inserting or
  reordering one entry reindexes everything downstream.**
- **44 of the 124 vendors are within 40 m of a golden bookmark**, and all
  seven chainage bookmarks have 6–7 vendors that close, the nearest 0.3–4.8 m
  from the camera. A reindex is a wholesale recapture of all 39 goldens.

So anchors are **selected, not relocated**: each of the twelve is the vendor
whose existing chainage is already nearest its landmark (max nudge **5.6 m**),
and none of the twelve is bookmark-adjacent. Landmarks come from
`assets/businesses.json` projected onto `streetLine` — 59 candidates within
25 m of the centreline, 30 of them clear of every bookmark.

One question deliberately left to the implementer's judgement: pavement is
`i % 2`, so nine of the twelve land west, and some anchors will stand across
the road from the premises they anchor. Keeping the parity is the cheap
default; matching the real side costs a bigger nudge and a different vendor
for some rows. Sonnet reports its judgement rather than choosing silently.

**E5b.2 landed 2026-08-02** (`1a4a055` flag-off, `bf4fed8` enable), reviewed
and corrected in `55dcdf1`. The placement itself was right — all twelve ids
resolve to the intended vendors and the built scene matches the layout
function to 0.0000m — but both review findings were in the verification:

- **Four stale `skyline` goldens.** The enable commit claimed every golden
  still read 0.000% because no anchor sits near a bookmark. Seven anchors are
  inside `skyline`'s frustum (nearest 25.1m) and the flag changes that pose
  by 0.029% on a direct on/off diff; against the frozen images the variants
  read 0.101%, 0.168% (clear), 0.165% (haar, up from 0.040%) and 0.081%
  (rain) — all passing only by fitting under the 0.5% tolerance. Recaptured.
  The seven chainage bookmarks genuinely are unaffected because they look
  *across* the street; `skyline` is elevated and sees the length of the Walk.
  **Distance along the street is not absence from frame.**
- **Two gates tested the calculator, not the product.** They compared
  `anchorLayout(false)` against `anchorLayout(true)` — two calls to one pure
  function — so they would have passed had `buildNpcs` ignored the layout
  entirely, and the sequence gate could not catch a reindex at all. Now the
  built `npc.group.position` is checked in both flag states and scene order
  is compared against `catalog.json` read independently. Fault-injected red.

Parity question: Sonnet kept the default and spot-checked two anchors. Ten
anchors' approaches remain visually unverified — no gate covers occlusion by
a wreck or skip, so it is a real if minor residual.

**A standing rule, earned twice now (E5b.1's toggle, E5b.2's skyline):** when
a milestone changes anything visible, the question is never "is it near a
bookmark" but "what does the diff say" — run the suite, read the numbers, and
recapture whatever is non-zero. Two milestones running, the reasoning was
wrong and the measurement was right.

**LANDED 2026-08-01** — `1a4a055` (flag off, landing commit), enabled in
the following commit (flag on). Kept the parity default throughout: a spot
check at two anchors (Spey Lounge, The Joker & The Thief) showed the real
shopfront signage framed directly against the anchored vendor even standing
opposite the premises, so no anchor needed the side-matching escape hatch.
Full 187-check smoke suite passed both flag-off (byte-identical: every
golden 0.000%, `geomHash` unchanged) and flag-on (every golden still
0.000% — **none of the twelve anchors sit within range of a golden
bookmark, so zero goldens needed recapturing**, confirming the planning
brief's own measurement). No per-anchor `STREET_OFFSET` override or light
was needed: the "brighter reading" requirement was met with an unlit
material-colour bump (`ANCHOR_GLOW`, ×1.35) on each vendor's already-
per-vendor-unique face/comic materials — never the shared `clothMat`
cache, never a new light, so the render path and draw-call budget (checked
exactly ±0 at every bookmark, both flag states) are untouched.

### E5c — Moments are links

- **Position + heading (+ nearest reader) in the URL hash**, so "look at this
  one outside the pie shop" is a pasteable link (cf. noclip.website's
  deep-linkable camera — its whole share culture rides on this). Near-zero
  code, and it composes with the date seed: a shared link reproduces the
  street *and* the spot.
- **Surface the date seed as a name** on the HUD/title ("Leith Walk —
  1 August 2026, dreich"): a daily variation nobody can describe is a daily
  variation nobody shares (cf. Spelunky daily / Kate Compton's oatmeal
  problem — spend the entropy on a few loud nameable differences).
- Stretch: a photo/share button that stamps date-seed + weather onto the
  screenshot (cf. No Man's Sky's glyph-stamped portal shots — the image
  carries both the proof and the reproduction key).

**E5c LANDED 2026-08-02** — `9ae20e6` (machinery, no pixels) then the HUD
commit (deliberate wholesale recapture). Two commits precisely so the second
could not hide a regression from the first; the machinery half was measured
against a purpose-captured run of unmodified HEAD and came in within
±0.024 pp on every pose.

**What shipped.** `#p=<x>,<z>,<deg>` in the URL hash, written on movement
(`replaceState`, throttled to 0.4 s of sim time) and read at boot, clamped
into the walkable corridor. A `#hud-day` line naming the visit — *"Leith Walk
— 2 August 2026 · arrived 17:39, dreich"* — and a touch-only 🔗 button beside
the journal's 📔, with `L` on desktop. Eleven gates in a new `moments`
region, all eleven fault-injected red.

**`src/day.js` was not in the plan and is the most useful thing here.** The
calendar day was derived twice — `atmosphere.js` for the arrival hour,
`proximity-audio.js` for each vendor's reading phase — by two copies of the
same FNV-1a that agreed by coincidence, and neither was pinnable. Putting the
date on the HUD turns that from untidy into a trap: a golden holding a live
date passes the day it is captured and fails every day after, *looking like a
rendering regression*. Every context in the suite now goes through a helper
that pins `2026-01-01`, so one added later cannot forget. `startHour()` is
byte-identical to what it replaced across 4000 consecutive dates.

**Deliberately not done**, and both are cheap follow-ons rather than
oversights:

- **No day in the link.** The roadmap line says a shared link reproduces the
  street *and* the spot; it reproduces the spot, and the day is whichever day
  you open it. That is the better reading of "it composes with the date seed"
  — a link is an invitation to come and look now. Putting `&d=` in the hash
  would need `__mcgrotForceDate` to become a production input rather than a
  harness lever, which is a real decision, not a line of code.
- **No nearest-reader id.** Position and heading already reproduce the view
  geometrically; the id would only let the link *name* itself, and that is
  worth doing alongside the photo-stamp stretch, not before it.

**Three defects, and all three were in the verification, not the code.** That
is now four milestones running.

- **A gate that navigated between two fragments of one URL was measuring
  nothing.** Chromium serves fragment-to-fragment as a same-document
  navigation: no reload, no boot, no parse. Five of six malformed-hash cases
  never ran. Only a fault injection that *failed to go red* exposed it.
  **A green gate that cannot be made to fail has told you nothing.**
- **One malformed input tested one branch.** `#p=banana` is rejected on
  arity before anything else runs, so a parser with a broken numeric check —
  or no bounds check at all — sailed through. Now one input per branch; the
  bounds injection moves the spawn 1615 m.
- **`goldens:audit` printed a filename that does not exist.** The 08:00 clear
  pose is `<id>-clear-08.png`, not `<id>-08-clear.png`. Because the printed
  command is `rm … && npm run smoke`, one bad name means `rm` exits non-zero
  and *the recapture never runs* — a stale golden survives and the run looks
  merely skipped. Fixed, and worth remembering as a shape: **a chained
  convenience command fails closed on the wrong step.**

**And one defect in the product, caught by eye.** The second HUD line ran
straight through the hold-to-walk button on mobile — a 76×18 px overlap. The
existing safe-area gate compares elements against the *screen's* insets, so
nothing was watching for two bits of UI landing on each other. The HUD is
lifted clear on touch (one string, not two), and there is now a gate that
compares the HUD's box against all four touch controls. It was found by
opening `golden-mobile:hud` and looking at it — **the recapture eyeball is
not ceremony.**

**One more shape worth carrying forward: the region initially stepped frames
on the shared `page1`,** which E5b.1 had already measured as the way to
desync the draw-call gate from `budget.json` on `skyline`. Every draw-call
gate read exactly its baseline anyway. Passing gates are not evidence that a
known hazard was avoided — the region now owns its page.

**Goldens.** 38 of 40 moved; `golden-mobile:hud` genuinely failed at 0.709%
rather than sliding under tolerance. The two that did not move are
`mobile:title` and `mobile:comic`, where the title card and comic overlay
cover the HUD — a useful sign the audit discriminates rather than
blanket-flagging.

**Worth knowing for every future milestone: goldens do not read 0.000% at
rest.** Measured on unmodified HEAD, the overcast column alone reads
`elm-row-hero` 0.095%, `mid-805-far` 0.093%, `skyline` 0.053%. That is the
SwiftShader noise floor, so "0.09%, so it passed" is not evidence on those
poses — only a delta against a same-day baseline is. `golden:skyline` spikes
occasionally: one run read 0.174% against a 0.053% baseline, three more on
the same build read 0.056/0.050/0.060. **Take three before believing an
elevated skyline reading.**

### E2g — Street lights, so the street is legible at night

**E2g LANDED 2026-08-02** — `a2780bd` (rig behind a flag pinned off, no pixels
moved) then `dbda7a1` (enable + gates). 46 lamps on the existing catenary
poles, a fixed pool of 4 camera-following PointLights, intensity from
`atmosphere.js` alone. At 03:00 with the torch off the street reads 63.9% of
the lower two-thirds above the legibility floor, against **0.0%** on the
lamps-off control — the black screen that prompted the milestone.

**No golden moved, and that is a finding rather than a relief.** Draw calls
rose by exactly 2 (the two merged meshes) at every bookmark, so the fittings
render — but no bookmark pose frames one, so the golden suite gives the new
geometry zero coverage. The planned "deliberate wholesale recapture of every
13:00 golden" never happened because there was nothing to recapture. **A night
golden is now possible for the first time** (a lit street clears the contrast
floor that black frames could not) and is the natural follow-on.

**Three things the plan got wrong, all caught by measuring:**

- **The pool could not be sized by measurement.** `measureFrameTiming` times
  command submission, not raster; with `gl.finish()` forcing the raster in,
  per-light cost is still unresolvable (every configuration lands in a
  235-490ms band, and the cheap row is always whichever is measured first).
  Pool size 4 is reasoned, and wants re-checking at E2f.
- **`windowGlow` is not 0 in daylight** (0.02 at 13:00, 0.15 at 08:00). Driven
  literally it lit the street at noon and moved `golden-rain:fascia-close` by
  11.1%. Lamps now switch rather than dim.
- **The count-only layout gate was decoration** until fault injection clustered
  all 46 lamps down half the street and it stayed green.

**The two night gates were isolated, not relaxed** — both run on a lamps-off
boot with their original thresholds, and a new top-strip gate covers the
lamps-on case. See `docs/VALIDATION.md`.

**Deferred:** lamp damage/flicker (some should be dead — the street is
post-apocalyptic and 46 working lamps is tidier than it should be), and the
night golden above.

### E2g.1 — A night golden (follow-on, small)

*Superseded at the E5 phase gate: expanded into "E2g.1 — Night coverage and
the picture gates", the unit queued next (after the E5 audit section below).
The reasoning that lived here — why a night golden is possible now (a lit
street clears the stddev ≥ 8 contrast floor; the 03:00 pose measures mean
21.7), why it wants its own bookmark (fittings sit 7m up, 11m out; no
existing pose frames one), the 22:00 hour choice, and the arc-flash
determinism caution — is carried into that unit's spec.*



*Dan's call, 2026-08-02, on arriving at a date-derived 17:39 and being unable
to see. Filed against E2 because it is a lighting unit, but read the
dependency note — E5d needs this more than E2 does.*

**The measurement that prompted it.** Mean luminance looking down the street:
41.9 at 13:00, **14.0 at 17:39**, 3.5 at 20:00, 1.1 at 22:00. The torch is
already on and already ramping with darkness (intensity 0.97 at midday, 4.26
at 17:39, 16.2 at 22:00) and it is not enough — it lights a surface you are
nose-to-nose with, not a street. And `HOURS_PER_REAL_MINUTE = 1` means a tab
left open for ten minutes is at 03:00, so **roughly half of every 24-minute
cycle is currently unusable**, not an occasional unlucky arrival.

**Two things are wrong and only one of them is lighting.** On desktop there
was no torch control at all: `#torch-toggle` is `display:none` outside
`html.touch` and no key was bound. It defaults on, so nothing was broken, but
a desktop visitor in the dark had no affordance and no way to learn one
existed. **Done ahead of this unit** (`97c4266`): T toggles the torch, the
desktop title-card hint lists E/T/J/L — none of which was discoverable — and
all three shortcuts now ignore keystrokes typed into E5c's link field. That
is a stopgap for visibility, not a substitute for lighting the street.

**The posts already exist.** `src/scenery.js` builds catenary poles at
`POLE_SPACING = 35` m, `POLE_OFFSET = 11` m from the centreline, both sides —
46 positions, 92 poles over the 1617 m. Hanging lamp heads off those needs no
new street furniture and no new placement PRNG (**draw order is sacred** — do
not insert draws into `buildCatenaryPoles`'s existing sequence; append).
Roughly 46 lamps, alternating sides, is a plausible starting density.

**The hard constraint is light count, not geometry.** The scene runs six
lights total today (hemi, sun, ambient, torch, three arc-flash PointLights).
Forty-six real `PointLight`s is not an option — per-material light limits and
per-fragment cost both bite. The shape that works:
- **Emissive lamp heads and glow are unlit geometry**, tinted by
  `atmosphere.js`'s existing registry, so all 46 cost nothing per-fragment.
  Remember the ACES gotcha: pick the sodium tone far darker than looks right
  on paper, and bake raw sRGB hex.
- **A small pool of real lights follows the camera** — three or four
  `PointLight`s reassigned each frame to the nearest lamps, the same shape the
  arc flashes already use. Pool size is the whole performance budget; measure
  it, do not guess it.
- **Intensity comes from `atmosphere.js` and nowhere else.** It is the sole
  authority for light-by-hour, and `windowGlow` is the precedent to copy — 0
  at noon, 1.0 at midnight. A second clock in a new module is how the sky and
  the lamps end up disagreeing.

**Golden consequences, and a natural flag-first split.**
- Lamp *heads* are daylight-visible geometry: they move every 13:00 golden.
  That is a deliberate wholesale recapture, same shape as E5c's.
- Lamp *glow* should be 0 at noon (as `windowGlow` is), so enabling it moves
  nothing — there are no night goldens, by design.
- **Two existing gates change meaning and must be re-reasoned, not just
  re-run.** `night darkens facades` asserts 22:00 sits at or below 45% of
  13:00 and currently reads 3.4%; lit streets will raise that, and the gate
  needs a threshold that still means "night is night". `torch lights a
  readable surface` asserts a 36.4x on/off ratio, which falls once there is
  ambient lamp light — that is the gate becoming *more* honest, but the
  number has to be re-derived rather than relaxed until it passes.
- Add the opposed pair this unit actually needs: **the street is legible at
  the darkest hour**. A luminance floor down the street at 03:00 with lamps
  on, against the same pose with lamps off as the control. Without the
  control it is a gate that passes on moonlight.

**Dependency: E5d wants this first.** E5d's premise is that reaching the end
of the Walk nudges the clock so the return leg is a different street. That is
only a feature if the different street can be seen; today it is a coin-flip
between "different" and "black". Doing E2g first also gives E5d something to
change *about* the lamps on the way back.

### E5d — Turning back, and leaving

**E5d LANDED 2026-08-03**, closing phase E5 — `900a827`/`f472054` (the leg
hinge) and `07029ed`/`f0e4fc1` (the close at the Foot). No golden moved by
either half.

Measured: on an identical out-and-back the hinge advances the clock 13.55h
against a hinge-disabled control's 3.55h, so its own contribution is 10.00h
against the ~1.9h-per-leg drift a walk gives you free. The close is refused at
leg 0 on the very spot it is offered at leg 2, and "keep walking" restores fog,
exposure and camera to match a boot that never ended.

**Four defects, three of them in the product and none visible by reading:**

- `nudge()` called `setTime()`, which pins `rate` to 0 — the first turnaround
  would have stopped the day/night cycle permanently.
- The weather roll read `settledWeather`, which lags a transition, so a second
  hinge could roll back to the weather it had just left.
- The close was a blackout: every numeric gate passed while the frame was
  black. **Caught by opening the capture, not by a gate.**
- And one in the harness: the boot gate read `legs.state()` before any
  `legs.update()` had run, so it could not observe the bug it was named for.

**Deferred:** "voices merging" is `ambience.setDucked(true)`, the right
direction but not the written intent — a real merge wants an ambience API that
does not exist. The stretch interior is untouched.

**Fable phase gate passed 2026-08-03** — see the audit section after E5d.

*Planned to depth 2026-08-02, against the codebase as it stands after E2g.*

**The number the hinge has to beat.** `WALK_SPEED` is 14 m/s and the Walk is
~1617 m, so a full leg takes ~115 s — at `HOURS_PER_REAL_MINUTE = 1` that is
**~1.9 sim hours of drift you get for free**. A hinge that nudges by an hour
would be indistinguishable from just having walked. It has to be several times
that to read as "the street changed while my back was turned", which is the
whole point.

#### Part 1 — the turnaround hinge

- **Detection.** `chainageOfPoint(x, z, streetLine)` already exists in
  `src/frontage.js` (shared with the atlas-page loader) — use it, do not write
  a second one. An end zone is within `END_RADIUS` of chainage 0 (the Foot,
  north, also the spawn) or of the street length (south).
- **Hysteresis is the whole correctness problem.** Standing at an end must not
  re-fire the hinge every frame, and neither must jitter at the boundary. The
  state machine is: *in-zone* / *out-of-zone*, and a hinge fires only on a
  transition into a zone that is **not the zone the last hinge fired at**. So
  arriving at the south end hinges; walking two metres out and back does not;
  returning to the Foot does.
- **Spawn is inside the north zone**, so the first frame must arm the machine
  as "already here", not fire a hinge on boot. This is the obvious bug and it
  deserves a gate of its own.
- **What the hinge does:** clock += `TURNAROUND_HOURS` (start at 5 and check
  it against the 1.9 free hours), and roll the weather to one that is *not*
  the current one. Both through `atmosphere`'s existing `setTime`/`setWeather`
  — no second clock.
- **The roll must be deterministic.** Seed it from the day seed (`src/day.js`)
  and the leg index via `hash32`, so the same day walked twice gives the same
  sequence. A `Math.random()` here would be untestable and would break the
  determinism gates' premise.
- **Weather scheduling interaction.** `atmosphere` runs an autonomous weather
  scheduler with a multi-hour minimum interval; a forced `setWeather` starts a
  transition and reschedules. Check the hinge does not fight it, and that
  `setWeatherSchedule(false)` (which the suite uses) leaves the hinge working.

#### Part 2 — the ending at the Foot

- **Opt-in, and only once you have turned back.** Offered at the Foot on leg
  >= 1, never on the spawn leg — an ending you can walk into in the first ten
  seconds is a trapdoor, not a close.
- **Diegetic prompt**, same shape as the vendor prompt (`#npc-prompt`): step
  into the haar off the Forth. `src/forth.js` already builds the water and far
  shore north of the Foot, so there is somewhere to walk into.
- **The close is a scripted ~10 s sequence**, not a cut: fog density ramps,
  exposure falls, the camera drifts north, ambience crossfades to a merged
  wash of the voices. Then a quiet card. **Closing the tab stays a valid
  exit** and the card must offer "keep walking" — this is a close, not a fail
  state.
- **It must not fight `atmosphere`.** Atmosphere owns fog/exposure per frame,
  so the sequence needs an explicit hand-off (a suspend flag, or the sequence
  driving atmosphere's own targets) rather than writing the same fields behind
  its back. This is the main architectural risk in the unit.

#### Gates this needs

- **The hinge fires once per arrival** (opposed pair: frames spent in-zone vs
  hinges fired), and **not at all on boot** despite spawning in a zone.
- **The return leg is a different street.** Clock and weather before vs after,
  with the **control** being the same walk with the hinge disabled — otherwise
  the natural 1.9 h drift passes the gate on its own. This is the measurement
  the unit lives or dies by.
- **The roll is deterministic**: same day seed + leg index, same weather,
  twice; different seed, different sequence.
- **The ending is unreachable on leg 0** and reachable on leg 1.
- **"Keep walking" restores play** — fog, exposure and controls all back under
  atmosphere, provably (compare against a never-ended boot).
- No golden may move: all 27 are captured at boot on leg 0.

- Stretch (unchanged): one enterable interior as a hub gallery.

## E5 — phase-gate audit (2026-08-03): PASSED

Audited by Fable at the phase boundary; claims re-verified independently, not
quoted: smoke green on **two fresh runs** (the second counted line-by-line:
**218 checks, 0 failures**); the live site serves
exactly the `gh-pages 5359e37` bundle (`index.html` and `bundle.js`
md5-matched against the branch, whose head is "Deploy d5ccc4a"); the recorded
counts hold on disk (19 updaters, 13 regions, 3655-line harness, module sizes
as logged); the ending card's copy is wrapper phrasing with no quoted comic
fragment (verbatim rule holds); and the build was walked. The live site
boots to a legible 23:22 dreich street under the lamps — E2g doing in
production exactly what it was built for (the HUD's "arrived 23:22"
independently recomputed from `startHour('2026-08-03')`). The full journey
ran on a localhost boot of the same commit via the debug API: out to the
top of the Walk (hinge 1: 23:22 dreich → 04:39, rolling to haar — the
lamp-lit haar street at the summit is a genuinely different street), back
to the Foot (hinge 2: → 09:47 overcast morning), prompt offered, close
begun — **the mid-close frame is a picture at 09:47 too** (signage
dissolving into pale haar; the whiteout fix holds at a second hour, the
gates only run it at 20:00) — card, "keep walking", street handed back
with the clock having run on through the close. Three different streets in
one out-and-back; the phase does what it says.

*(One harness sharp edge re-confirmed on the way: under `pauseAuto()` the
ground-follow clamp is off, so a teleport walk up the Brae leaves the
camera ~25m underground at the summit unless Y is reset from
`groundHeight` — the first "summit" frame was garbage and looked like a
rendering bug. Known behaviour, now noted in VALIDATION's QA recipe.)*

### The five judgement calls, ruled

1. **`setSuspended()` is a seam, and the right one.** The alternative —
   atmosphere exposing "drive toward these targets" while keeping ownership —
   forces the ending to express its curves in atmosphere's vocabulary and
   leaves two writers blending into the same fields; the suspend flag makes
   ownership exclusive and *provable* (the fault injection reading
   fog/exposure identical-to-control with the call removed is the strongest
   gate in the region). What it is not is general: a bare boolean supports
   exactly one suspender. The second consumer is already on the roadmap —
   E9a's interiors need `toneMappingExposure` (a renderer-global) and their
   own fog while the street clock keeps running — so the seam graduates to
   an owned hand-off (a token, or a named owner with re-entry refused) **in
   E9a, not now**. Two callers on a boolean is the bug; one caller is a
   correct simple design. A risk line has been added to E9a.
2. **The goldens have not failed; they were never the instrument for this.**
   All 39 are captured at boot/leg-0/13:00 because that is the deterministic
   state — they are the *base-state* regression instrument, and becoming a
   "boot-state regression test" is them working. The real gap splits in two:
   (a) the lit night street is a persistent, poseable state with zero
   pictorial coverage — that is E2g.1, and it should land **before E8**, or
   the grade's wholesale recapture will bake in a look nobody has ever seen
   at night; (b) the turnaround and the close are transients, and transients
   should never be goldens — they need **picture gates** (the contrast floor
   applied at the authored moment) plus captured sequences a human opens.
   Both fold into E2g.1, expanded below. One night golden alone was indeed
   too small an answer.
3. **Isolating the two night gates was correct.** `night darkens facades`
   was built to detect a palette regression that renders night as day;
   running it lamps-off preserves that instrument at its original threshold
   instead of relaxing 45% to ~60% and deleting what it detects. The
   lamps-off boot is not "a configuration no player sees" — it is the
   control that isolates the palette pipeline from the lamp subsystem,
   which is rule 1 of the E2d lessons applied precisely. The shipped
   configuration is not unguarded: the top-strip gate and the 03:00
   legibility gate both run lamps-on with their own controls. The one
   honest cost — `night darkens facades` no longer watches the shipped
   frame — is covered by the night golden E2g.1 adds.
4. **Pool size stands as reasoned, and E2f now carries it explicitly.** The
   harness measurement was attempted properly and shown impossible
   (SwiftShader rasters outside the timed window; forced in, ordering noise
   swamps the signal). Four camera-following PointLights on top of torch +
   three arc flashes is **eight dynamic point lights in a forward-lit
   scene** — on a phone GPU that is a real question, and it is a
   ten-minute measurement once a phone is in hand. Added to E2f.
5. **The flag pattern is right; the litter is real; do not retrofit.** The
   dead `= true` constants are one line each and the override plumbing is
   what the opposed-pair gates drive both states through — it earns its
   keep. The fix is prospective: the **next** unit that needs a flag builds
   `src/flags.js` (one localhost-gated `flag(name, shippedDefault)` reading
   `window.__mcgrotForce<Name>`) and migrates the three existing flags in
   the same commit — the existing opposed-pair gates verify the migration
   for free. Added to the containment conventions. A retrofit sweep on its
   own would be churn in enabled code paths for zero player value.

### E2g mid-phase: the right call, kept as a rule

E2g was filed against E2 and built inside E5 because E5d depended on it.
Dependency order beats phase-label purity: the unit inherited the phase's
discipline (flag-first, opposed pairs, re-derived rather than relaxed
thresholds) and is audited with the phase it landed in — this audit. The
rule going forward: **an inserted unit is filed where its subject lives and
audited where it lands.** What would have been wrong is pausing E5 for a
ceremony-sized E2 reopening.

### The defect pattern, read

Across E5c/E2g/E5d the defects were overwhelmingly in the verification, and
E5d's two product defects were caught by arithmetic — which is the
opposed-pair discipline working, not failing. Fault injection is also doing
its job: all five dead gates were found *by an injection that failed to go
red*. Keep both. What the phase exposed is a third instrument missing:
every numeric gate measures mechanism or aggregate state, and none can see
that a frame is not a picture — the ending passed fog-up/exposure-down
while rendering nine seconds of black. Two additions, binding:

- **Captures are part of the deliverable.** Any unit that authors something
  the player *watches* (a sequence, a grade, a movement) renders its
  captures and the review opens them. Now in `CLAUDE.md`'s verification
  contract.
- **Where the authored moment is deterministic, gate it as a picture.** The
  contrast floor (luminance stddev, already machinery in the suite) applied
  at the moment — the ending's mid-close frame, the night street. It would
  have caught the blackout, and it catches the symmetric failure (a
  whiteout that arrives at t=1s instead of t=10s). Built in E2g.1.

### Cross-cutting rulings

- **`HOURS_PER_REAL_MINUTE = 1` holds.** A ~4-minute out-and-back now
  crosses more than half a day of light, which is the dynamism the piece is
  for, and E2g removed the "half of every cycle is unusable" cost that was
  the one argument against it. It is now load-bearing in three tunings
  (lamp switch thresholds are hour-driven and would survive; the hinge's
  5h-vs-1.9h-free-drift ratio and the legs gates' cranked-rate arithmetic
  would not). Treat the constant as frozen; changing it is its own small
  unit that re-derives `TURNAROUND_HOURS` and the legs-region maths.
- **Seeding stays as it is.** The private `hash32` copies are isolation,
  not debt — separate counter sequences cannot interleave, which is the
  property the determinism gates depend on. What was missing is the map;
  `docs/VALIDATION.md` now has a "Seeding map" section so the next person
  sees it as one story without having to re-derive it.
- **Suite cost has doubled and has now hit its ceiling.** The two gate
  runs measured ~10.5 and **13.9 minutes** wall (834s timed, idle-ish
  machine) against the 412s recorded at E5c — three new regions, each
  booting two or more contexts, a 1.7MB bundle re-fetched per boot. The
  deploy gate stays the full suite, but a **measured speedup unit is now
  warranted** — small, after E2g.1, before E8's prototype loop leans on
  fast iteration. The levers in order of expected value: stop re-fetching
  the bundle every boot (serve with `Cache-Control`/keep-alive), then
  boot-count consolidation only where regions genuinely share state. The
  two rejected speedups (hush shortening, concurrent SwiftShader
  contexts) stay rejected — both were measured, and the second corrupts
  results, not just time.

  **Two corrections from E0.3, which did the measuring.** (1) The
  bundle-caching lever was worth nothing: boots are 4.4% of the run and
  their zero cache hits are structural, not a header choice — each boot is
  a fresh context with a fresh cache. Reasoning picked that lever; the
  profile picked `legs` (37% of the run, spent rastering frames no gate
  looks at). (2) "Concurrent SwiftShader contexts corrupt results" was
  over-stated: the measured failure was a wall-clock `page.click` timeout
  with two contexts in ONE browser. Two shards as separate processes ran
  green in 358s/343s with identical coverage and goldens unmoved under
  full load. Still not shipped — it needs a single pre-shard bundle and a
  merge step — but it is a cost/complexity call now, not a correctness
  one.
- **`chainageOfPoint` is now called twice per frame** (legs, plus the
  ending's idle-poll via `legs.state()`). Folded into E3's existing
  cached-chainage-lookup residual rather than fixed now.
- **The two environment breakages were environmental** (IPv4-only
  `serve.py` vs a `localhost`→`::1` connect; python 3.14's ~9s first
  accept) and are worked around by measurement in the harness. No action;
  recorded so the next stall gets grepped before it gets theorised.

### Residuals carried forward

- **E2f** still blocked on a phone, and now carries three device questions:
  the iOS audio bugs, the torch toggle, and the lamp pool's real-GPU cost
  (call 4 above).
- **E2g.1** expanded into the next unit (below): night golden + picture
  gates.
- **Lamp damage/flicker** stays deferred (E∞ material — the street is too
  tidy, but that is delight, not debt).
- **"Voices merging"** in the ending is still `setDucked(true)`. The real
  merge wants per-source mix control that E6b's strip-of-voices design
  *also* wants — build the ambience API once, there. Noted in E6b.
- **Transcription** unchanged at 124/418 this phase; still the content
  critical path (see Standing trickles).

## Sequencing check (E5 phase gate)

*Superseded by the Direction ruling below (E3 phase gate, 2026-08-07): E3
landed, and E6a now jumps the queue on Dan's steer. Kept as the record of
why the order stood at E5.*

**E6 is not the next phase, and neither is anything new.** The standing
order (E2f → E5 → **E8 → E9a → E3 → E4 → E9b → E6 → E7**) survives E5's
outcome on re-examination, with one small unit inserted first:

1. ~~**E2g.1 — night coverage and the picture gates**~~ — LANDED 2026-08-03.
   It had to precede E8: E8's landing recaptures every golden, and with no
   night golden the grade would ship with its night look never once captured.
2. ~~**A measured suite speedup**~~ — LANDED 2026-08-03 as E0.3. **847s ->
   519s**, 222 checks, 0 failures. The named lever was wrong and the profile
   said so: boots are 4.4% of the run, and their 161MB over 1176 requests
   with zero cache hits cannot be cached away — every boot is a fresh
   Playwright context with its own cache, so `Cache-Control` has nothing to
   hit. What paid instead: `legs` was rastering all 2,280 frames it walked
   and looking at none of them (311.8s -> 37.3s, gate numbers bit-identical),
   and the DPR timing table was running on every full run while `--quick`
   silently dropped the DPR cap *gate* that shared its guard (67.3s -> 6.0s,
   and the gate now always runs). Also landed: a permanent profile table, and
   `--since`, which routes a working diff to the regions it can reach and
   falls back to everything for any unmapped path.

   **Second half, same day: `npm run smoke:par` — the full gate in two
   sharded processes, 521s -> 346s (34%), nothing skipped.** Two related
   experiments were run and only one paid, which is the reusable lesson:
   parallelising the four weather passes bought 4% (188.1s -> 180.9s) and was
   reverted, because rasterising already saturates a 10-core box and a second
   rasteriser is not a second machine; sharding pays because it pairs the
   raster-bound region against the wait-bound ones. The post-load settle was
   measured and left alone — page textures churn (counts fall as pages evict),
   so the cheap "nothing new loaded, skip the composite renders" test is
   unsound next to a golden capture. Full write-ups in `docs/VALIDATION.md`.
   **Third, 2026-08-03: E0.4 — the harness renders on the GPU.** `346s -> 77s`
   sharded, `133s` serial. This overturned a standing ruling in
   `docs/VALIDATION.md` that said not to try it; three of that ruling's four
   grounds were reasoned rather than measured, and were wrong. Metal is exactly
   as deterministic as SwiftShader, and 39 of 40 goldens held untouched. The
   fourth ground was right and is now a knowingly-carried cost: goldens are
   tied to this machine's GPU and driver, so `MCGROT_GPU=0` exists to tell a
   driver update apart from a real regression. One golden was deliberately
   recaptured — `golden-mobile:hud`, where SwiftShader had been rendering the
   near-field paving as a flat black void and Metal shows the slabs, joints and
   tram rail. That golden had been locking in a picture no player ever sees.

   The reusable lesson matches the other two: the gain was entirely in
   `gotoBookmark` (1285ms -> 174ms, the post-load settle). Stepped frames and
   screenshots cost the *same* on both renderers, so nothing else in the suite
   got faster and no further lever should be predicted from this one.
3. **E8 — the McGrot grade** prototype loop. Unblocked, captures-only until
   its landing, no dependency on E2f or E6. Note it now inherits a **77s**
   deploy gate rather than a 346s one, which is most of what E8's judging loop
   wanted from the speedup work.
4. **E2f** stays queue-jumping and Dan-gated: it happens the moment a phone
   is in hand, whatever else is mid-flight — nothing in E2g.1 or E8's loop
   conflicts with it.

Why not E6: collision's payoff is physical believability, which buys most
after the street has its look (E8) and its people (E3/E4); the tram is
phase-sized and explicitly wants E4's cast for its riders and stops; and
E6a's player-only scope would today protect a street the player mostly
cannot yet be *in* wrongly (no interiors, no boarding). The reasons E5
jumped E3 do not transfer to E6 jumping E8 — E8 is cheaper, feeds E3's
character decisions, and its judging set is pure Dan-delight per hour spent.

## Direction ruling (E3 phase gate, 2026-08-07, Fable)

Dan put the McGrot canon cast on the table (the authoritative table is now
`docs/CANON.md`) with the steer that these characters and this style need to
be involved, and asked whether the E-line still points at the game the comics
describe. It does, with one phase added, one unit promoted, and a short cut
list. The rulings, so no later session relitigates them:

### The player is the keeper, not McGrot

E9's premise (you wake behind the counter of a daily-seeded shop) and the
canon's implied premise (the player is McGrot, with a dog) cannot both hold.
**The keeper wins.** The deciding argument is first-person with no player
model: "you are McGrot" could only ever be *told* to the player, never shown
— the canon's entire visual identity (the vest, the apron, the ladle, the
stoop) would be spent on the one body in the game nobody can see. Standing
McGrot in the street as its principal NPC spends it where the player looks.

What choosing McGrot-as-player would have cost, recorded because the option
was genuinely weighed: E9's daily-seeded identity and its share thesis ("who
did you get today?"), E9c/E7's every-player-is-a-different-keeper presence
design, and the McGrot-sightings delight — three load-bearing designs struck
for a nameplate. The game is the street the comics describe; the comics
describe McGrot from outside, and so does the game.

Pomplé needs no course change: E9b already has him wandering into the
player's shop, and E10a gives him his canonical post at the Gullet.

### The cast is three tiers, and nothing subsumes anything

- **Principals — the canon cast** (`docs/CANON.md`): named individuals with
  fixed addresses and date-seeded behaviour. McGrot, Pomplé, Keth with One
  Eye, Mike English, the Taxman, the Inspector, the Leith Badger. → E10.
- **Archetypes — the fifteen Leithers** (`docs/LEITH.md`): the sociological
  crowd, E4's cast, the visitor theatre's repertory. Unchanged. The canon's
  two customer rows (Local, Tourist) are **subsumed here** — the Auld Boy,
  the Posh Students and the Gentrifier already are those customers, with
  better lines.
- **Chorus — the generated 124 vendors and 30 walkers**: the comic-reading
  instrument itself. **A stepping stone to nothing — it is the piece**, and
  it stays. The canon principals stand on the same pipeline (FLUX → Trellis
  → Lambert re-material → grade `b`), so E3's phase is also the canon's
  production line: E10a's meshes are three more glbs on a proven path.

### E8 still works as written, and is nearly done

The brief's worry — five Trellis meshes with baked-in lighting are now the
crowd — was paid for in E3a: `characters.js` strips every glb material to
Lambert at 0.42 tint precisely because Trellis bakes its key light into the
albedo, and E8d captured the crowd under grade `b` and judged it ("print on
a figure rather than noise"). The grade is a post pass over the frame; it
never cared what the geometry was. What remains of E8 is close-out, not a
loop: harden preset `b` (`uStyle` enable + wholesale recapture, the
containment landing as specified), write `docs/STYLE.md` § 2, and the two
DOM levers (caption boxes, title card as a cover) at whatever size they
justify. One unit — "E8 close" in the sequence.

#### E8 close — what has landed (2026-08-08)

All four units. `1/4` hardened preset `b` into shader constants and wrote
`docs/STYLE.md` § 2; `2/4` added the two DOM levers (caption boxes, the title
card as a comic cover); `3/4` shipped the grade and recaptured all 40 goldens;
`4/4` measured per-golden noise bands and took `goldens:audit` from 25 false
positives to 0.

**The finding of the phase, and it only appeared once the grade shipped.**
Enabling it doubled the mean luminance of the darkest hour and turned three
darkness gates red — including one whose lamps-off *control* went from 0% of
the frame above the legibility floor to 68.3%. The cause is the halftone's
paper showing between the dots, which lifts the bottom of the tonal range far
more than the middle (×3.45 at display luminance 0.01, ×1.20 at 0.20), and
this game carries its night, its lamps and its torch entirely in that bottom
range. Two judging rounds could not have seen it: the sheets show a frame, not
a ratio against the ungraded frame.

The fix is a fifth rule in STYLE.md — **the screen and the stock thin at
night**, on the same exposure driver press already follows. A comic's night
panel is solid ink with little screen, so the night is differently printed
rather than less printed. Dan's call, 2026-08-08. Rejected with numbers:
tapering the stock alone (3.5% of the problem) and tapering the whole grade
(makes the night less printed).

The three gates were **re-pointed, not relaxed** — every threshold unchanged,
each now measuring the scene with the grade off, because each asks whether the
lamps or the torch light the street and that is a property of the scene rather
than of the paper. The grade's own lift gets two new gates of its own.

**E8 close's other finding, and it is open.** Fault-injecting the new audit
floors turned up something bigger than the floors: raising `VIGNETTE` from
0.28 to 0.40 — a 43% change in corner falloff that moves 43-47% of all
channels — **moves no golden at all** (0.000% on `fascia-close`, 0.087% on
`mid-805-far`). pixelmatch's threshold is a perceptual distance and a broad
low-amplitude shift slips under it everywhere. Localised changes do show, which
is why E5b.1 and E5b.2 were caught; global tone changes are the class E8 ships.

Every golden now also reports mean absolute channel delta, which has no
threshold — but measured, it does not close the gap on its own (the vignette
signal is 1.39-1.88, the quiet-run bands are 1.27-7.75). The mechanism behind
that noise IS understood and measured: two boots stepped identically are
byte-identical, so the variation comes from the suite stepping a **variable
number of frames** before a capture, which moves `uTime` and reseeds the grain
and press artefacts. Pinning `post.setTime()` before each golden capture should
collapse it and make the goldens sensitive to tone.

**Not done.** It needs a fourth full recapture and would largely obsolete the
noise bands just measured, so it is Dan's call — a candidate unit, not a
loose end to tidy.

### Collision jumps the queue — E6a is next

Dan's steer, and the gate agrees on the merits: E5's "collision buys most
after the street has its look and its people" was correct and is now
*satisfied* — E3 spent a phase making 154 figures read as people, and the
player can stand inside every one of them. The E6a section below is
decomposed to milestone units and is the next work. E6b (the tram) does not
move — it still wants E4's cast.

### Cut, because it serves a street this game is not building

- **The dream world — McWonka, the Grot Loompas — cut from the POC.** A
  whole second level with its own factory geometry, for a game whose piece
  is one street. If it ever returns it is a phase behind a title card, not a
  rider. (McWonka survives at most as a date-seeded costume on McGrot — see
  E10a's variant note.)
- **The Nether Leithers — parked to references.** An established faction,
  but it implies a subterranean location the POC has no phase for. They
  survive as speech (Keth and the Street Drinker Philosopher both know about
  them) and as one comic-derived prop — a sealed tunnel door, never opened.
  Cheap canon presence; no location build.
- **The generic Rival Vendor template — cut.** Mike English is the rival.
  A template row generalising him is the generic street's version of a
  specific joke.
- **The two customer rows — subsumed** into the LEITH.md archetypes, above.
- **The E∞ McGrot-sightings cryptid — superseded**, not cut: once McGrot
  has an address, "glimpsed at distance, gone when approached" becomes
  date-seeded *presence at the Gullet* (see E10a). The share thesis
  survives as "McGrot was in the day" — stronger, because it is checkable.

## E8a — The grade rig and round 1 — LANDED 2026-08-03

The prototype loop's machinery, plus the first round of candidates rendered for
judgement. **No golden moved and no gate was added**; `uStyle` ships at 0.

What landed:

- **The style stack in `src/post.js`'s existing single pass**, behind
  `uStyle` plus twelve live uniforms: press exposure, dot screen, shadow/mid
  gating, ink misregistration, palette pull, ink/paper stock remap, press
  artefacts. All four of the roadmap's candidate-stack items are present.
- **Named preset slots** — `dbg.setStylePreset('a'|'b'|'c'|'d'|null)` and
  `dbg.setStyle({...})` for live tuning, per the roadmap's shape.
- **`npm run style`** (`scripts/style-sheet.mjs`) — the judging set as contact
  sheets plus 1:1 detail strips. **24s for 120 captures.**

Round 1's four candidates, deliberately spread rather than clustered:
`a` newsprint (cool grey stock, coarse screen), `b` fine-litho (the murk kept
nearly intact — the control for "is any of this an improvement"), `c`
cream-page (the comics' own warm stock, the most *printed*), `d` hard-ink
(near-duotone warm brown, the departure most likely to eat the photo façades).

Two things cost a re-author and are worth not re-deriving:

1. **Screening the scene's own tonality does not work.** Measured median
   display luminance is 0.139 at noon and 0.055 at night; a dot sized from that
   fills its cell and the highlight gate never fires. A printed page is a light
   object, so the frame is re-exposed for the plate first (`uPress`). See
   `docs/VALIDATION.md`.
2. **A contact sheet cannot show a halftone.** The first round's presets
   differed mainly in cell size and screen mix, and the four columns were
   indistinguishable at sheet scale. Presets must differ on axes that survive a
   3.2× downscale; the detail strip carries the texture.

Deviation from the brief, recorded: the dot screen is analytic rather than a
Bayer/blue-noise texture. The brief's reason for a texture was driver
stability, which an analytic dot also has, and it additionally admits an
antialiased edge. The AA width is derived from the cell size rather than read
from `fwidth` — which does not compile in ESSL1 here without an extension
pragma, and would have put a hardware derivative inside a golden.

**Not in this round: character treatments.** The roadmap pairs them with the
grade, and its own argument is why they wait — the grade may make a simple toon
character read better than an expensive one. The grade has to exist to be
judged against. They join round 2.

### Round 1's verdict (Dan, 2026-08-03)

**`b` fine-litho survives.** The lightest touch — the shipped murk kept nearly
intact, print as texture rather than as a palette. Recorded as a preference,
not yet a keeper: the loop continues from here rather than hardening.

Rejected, with reasons, so a later round does not re-propose them:

| | why not |
|---|---|
| `a` newsprint | cool grey stock reads as a photocopy, not a comic; loses the warmth the whole project is built on |
| `c` cream-page | the most *printed* of the four and still rejected — at night the press exposure lifts the shadows into a flat milky grey and the night stops being night |
| `d` hard-ink | near-duotone eats the photo façades, exactly the failure it was included to make visible |

**The finding that shapes round 2:** press exposure is the axis that kills the
night. At 22:00 rain, `a`, `c` and `d` all lift the murk to a milky grey and
only `b` (press 0.90, barely lifted) survives. A single constant press cannot
serve noon and midnight, so round 2 should test press as a **weather/hour-driven
value** rather than a per-preset constant — which changes what a preset *is*,
and is the first thing to settle before generating more candidates.

## E8b — Press follows the atmosphere, and round 2 — LANDED 2026-08-03

Round 1's blocking finding made structural. Press is no longer a per-preset
constant: it is interpolated between a night and a day value by
`renderer.toneMappingExposure`, which `atmosphere.js` already sets every frame
from the per-hour, per-weather palette stops. No second palette to keep in
step, and the grade cannot disagree with the weather it is grading.

Read live from the renderer inside `post.render()` rather than pushed from
atmosphere, because atmosphere is not the only thing that drives exposure —
the ending sequence takes it over for ~10s, and a pushed value would print
those ten seconds at the wrong tone.

Measured (`dbg.stylePress()`, preset `b`): 13:00 overcast exposure 1.378 →
press 0.740; 08:00 clear 1.150 → 0.794; 03:00 haar 0.592 → 0.928; 22:00 rain
0.520 → 0.945.

**Round 2's four candidates** are variants around `b`, each moving one axis so
the sheet attributes a difference to a cause: `b` itself (the reference — a
round of variants with no baseline can only be judged against memory), `b1`
warmer stock, `b2` coarser screen, `b3` deliberately over-pressed so the sheet
carries its own evidence for the round-1 finding rather than relying on the
previous round's captures.

Suite green at 228 PASS / 0 FAIL / 71s, no golden moved, `uStyle` still 0.

### Round 2's verdict (Dan, 2026-08-04)

**`b` stands, unchanged.** All three variants rejected:

| | why not |
|---|---|
| `b1` warmer stock | the added warmth reads as a filter over the street rather than as the paper it is printed on |
| `b2` coarser screen | visually distracting — a 3.6px cell competes with the thing the player is looking at |
| `b3` over-pressed | confirms round 1 in its own sheet: more lift, less night |

**The constraint both rounds discovered, and the one any future candidate has
to satisfy:** every variant that made the print *more visible* — coarser
screen, heavier halftone, stronger stock, more lift — was rejected, in both
rounds, by the same reasoning. The print is a texture on this world, not a
filter over it. `b` is the lightest touch in either set and it won twice.

The preset table in `src/post.js` is now trimmed to `b` alone. That is
deliberate: a later session should reach for the decided look rather than
re-propose one that has already been judged twice.

`b` is still a **candidate, not a keeper** — `uStyle` ships at 0 and nothing is
hardened into shader constants until `docs/STYLE.md` § 2 is written. What
promotes it is the generated-content work below, not another round of grade
variants.

## E8 continued — generated content on the measured palette

Dan, 2026-08-04. The grade decides how the street is printed; these decide
what is *on* it. Sequenced cheapest and most reversible first, which is also
increasing order of how much runtime risk each carries.

`docs/STYLE.md` § 1 is the shared input to all three: the measured palette,
the three constraints (warm always, neutral on green/red, cool is a <2%
accent), and the standing **cream-forward** authoring bias.

### E8c — Faces (next)

**Correction to an earlier claim in this file's history: there are 40 faces,
not 400+, and they are fetched rather than generated** — `assets/faces` is a
set of sci-fi character stills (`balok.jpg`, `borg-queen.jpg`, `chiana.jpg`)
standing in for grotesques. So this is not a re-generation pass; it is the
first real generated-character content in the project.

`scripts/gen-faces.mjs` already exists (Together API, FLUX.2-pro) but defines
only three faces and asks for the palette in adjectives — *"muted
olive-mustard-khaki"*. The unit is: feed it the measured hex list instead,
generate a batch, and judge them on a contact sheet against the fetched ones
they replace.

Cheapest of the three by a distance: faces are flat JPEGs on the head front,
so nothing about geometry, draw calls or the 8MB budget changes. The only
risk is aesthetic, and the sheet answers that.

### E8d — Image-to-3D: real character meshes (after E8c)

**Rescoped 2026-08-04 (Dan).** This was written as "generated props". The
actual goal is characters: take a generated character image and convert it to
a mesh, so NPCs stop being `BoxGeometry` paper-dolls with a face JPEG on the
head front. Props follow the same pipeline once it exists.

**Three constraints this section previously asserted turned out to be wrong.**
All three were reasoned, none were measured, and measuring them made the unit
substantially cheaper:

| Was asserted | Measured 2026-08-04 |
|---|---|
| "no GLTF loader in the bundle" | `src/cars.js:15` imports `GLTFLoader` and has since the wrecks landed. Four glbs ship. Cost already paid. |
| "~8MB ceiling, every asset inlined" | Only for `dist/mcgrot-walk.html`, which **already omits the cars** (`cars.js:64` exits quietly when assets are absent). The deployed `--site` build inlines nothing and is **95MB**. |
| "the constraint is the draw-call budget" | True, but inverted: NPCs are **868 of the scene's 1,129 meshes** for **4.9%** of its triangles. A single-mesh character *reduces* mesh count by 744. |

Measured baselines (`npm run probe`, and `scripts/glb-stats.mjs`):

| | Meshes | Triangles |
|---|---|---|
| One NPC (box paper-doll) | 7 | 134 |
| 124 NPCs | 868 | 16,616 |
| 15 car clones | 71 | 31,142 |
| Whole scene | 1,129 | 342,224 |

One shipped vehicle is the precedent to author against: **~2,000 triangles,
5 draw calls, ~170KB**. Frustum culling is what holds street bookmarks to
30–78 draw calls; `skyline` at 1,112 is the unculled case and would *fall*.

**Together.ai has no 3D endpoint** — checked against their own model docs, not
a search summary: chat, image, vision, video, audio, embedding, rerank,
moderation. Their image models remain the *input* stage.

**Service ruling: fal.ai Trellis at ~$0.02/run for the spike; Meshy for
production if it greenlights.** Meshy's `target_polycount` (100–300,000) is
the parameter this project actually wants, but it needs a $20/mo Pro plan, and
the spike's question is not "what polycount" — it is "does a McGrot grotesque
survive reconstruction at all". Trellis's `mesh_simplify` (0..1, default 0.95)
is a decimation *ratio* rather than a target, so polycount is discovered by
sweeping. Others priced: Hunyuan3D V2 Turbo $0.14, V3 $0.375 (LowPoly $0.45),
Rodin $0.50+. Licences (vendor help pages, not re-verified): Meshy free tier is
CC BY 4.0 — fine here, the project already runs credits pages for the cars and
shopfronts — Tripo's free tier bars commercial use.

**Animation is a non-issue.** NPCs do not articulate: `npcs.js:420` is a
whole-group sway, `:424` a head turn while speaking, and the leithers' walk
(`leithers.js:181`) is bob and sway with no leg motion. A static mesh with the
head as a separate node covers everything the rig does today. No skinning, no
auto-rigging.

**The input image is a different artefact from a face texture**, and this is
the one real risk. `docs/STYLE.md` prescribes flat 2D comic art — thick
outlines, no gradients, no cel shading — which is precisely the removal of the
shading cues single-image-to-3D reconstructs from. `scripts/gen-character.mjs`
therefore generates two variants per character: `flat` (the style bible's own
prescription, expected to reconstruct as a slab) and `form` (matte clay
shading, palette retained, linework dropped). Both go through the mesh stage so
the prediction is measured rather than assumed. The bet behind `form`: the mesh
supplies only shape, and the comic look returns downstream — `cars.js` already
re-materials every loaded glb to tinted Lambert, and preset `b` grades the
frame on top. Same principle `STYLE.md` records for lightness.

Still true, and still the gate: the draw-call budget holds every bookmark to
exact parity, so any scene change is a deliberate baseline recapture, and
`src/scenery.js` draw order is sacred — append, never insert.

Spike scope: **one** character, in-scene, measured for triangles, draw calls,
byte cost and how it reads under grade `b`. That decides whether characters are
a phase or a footnote.

`src/characters.js` is the harness, **landed off** (`CHARACTERS_ENABLED =
false`, the same way `ANCHORS_ENABLED` landed) — 228 PASS / 0 FAIL with it
wired into `main.js`, so the scene is unchanged until the flag is flipped and
the draw-call baselines are recaptured deliberately. It stands a mesh *beside*
a chosen vendor rather than replacing one, so a single capture frames doll and
mesh in the same light at the same scale under the same grade. Meshes normalise
to **1.9m**, which is the cast's own measured height (four vendors probed at
1.83–2.01m) — these are grotesques, and a mesh normalised to a realistic 1.75m
would read as a child standing next to them.

Deliberately not mapped in `SINCE_RULES`: an unmapped path falls back to the
full suite, which is the right default for a module that adds scene geometry.

#### Spike result — RUN 2026-08-04, seven Trellis calls, $0.14

**Verdict: greenlight.** A McGrot grotesque survives reconstruction, and the
runtime cost lands well inside what this scene can carry.

| Variant | `mesh_simplify` | `texture_size` | Tris | Total | Texture |
|---|---|---|---|---|---|
| form | 0.90 | 1024 | 26,048 | 1,843KB | 1,195KB |
| form | 0.95 | 1024 | 12,932 | 1,491KB | 1,161KB |
| form | 0.98 | 1024 | 5,328 | 1,309KB | 1,165KB |
| **form** | **0.98** | **512** | **5,254** | **480KB** | **336KB** |
| flat | 0.90 | 1024 | 25,098 | 1,813KB | 1,192KB |
| flat | 0.95 | 1024 | 11,387 | 1,472KB | 1,182KB |
| flat | 0.98 | 1024 | 5,132 | 1,341KB | 1,197KB |

**Every single one is 1 primitive = 1 draw call.** That is the finding the
whole unit turned on.

**Decimation is the wrong lever; texture size is the right one.** `mesh_simplify`
0.90 → 0.98 drops triangles 5× and total bytes only 29%, because the texture is
~90% of the file at every setting. Dropping `texture_size` to 512 cut a
character from 1,309KB to **480KB** in one step. Rendered side by side in-scene
at conversation distance the two are indistinguishable, so 512 is the default.

**The `flat` prediction was WRONG, and the reason it was wrong matters.** This
file predicted flat comic art would reconstruct as a slab for want of shading
cues. It did not — geometrically it came back as good a figure as `form`.
`form` is still the keeper, but for a *texture* reason rather than a geometry
one: the flat art's heavy outlines and rosy cheeks bake into the albedo and
read in-scene as clown makeup. Trellis infers form from silhouette and
segmentation far better than the prediction assumed. Recorded because the
prediction was confident, was documented, and cost $0.06 to falsify.

Grade `b` sits on the meshes well — captured at the same pose with `uStyle 1`;
the halftone and press tint read as print on a figure rather than as noise.

**What this changes for E3.** At 480KB a character, **distinct meshes for all
124 NPCs is still off the table** — 124 × 480KB is 58MB, which the 95MB site
could technically carry but the artifact could not, and the load cost is
absurd. Shared archetypes with per-NPC tint (the `wreckify()` pattern) is the
answer: **five archetypes is 2.4MB**, which fits the single-file artifact's
remaining headroom, let alone the site.

The keeper is committed at `assets/characters/rab-form.glb` (480KB) and
`build.mjs` copies `characters/` in the site build, so flipping
`CHARACTERS_ENABLED` is genuinely one line.

### E3 — Characters (after E8d, unchanged in position)

Full character system v2. Depends on E8d's answer: if generated meshes are
affordable the paper-doll goes; if they are not, characters stay 2D and the
grade carries them. This is why the spike comes first.

With byte cost off the table, the shared-versus-distinct question becomes an
art decision rather than a budget one: a handful of archetype meshes with
per-NPC tint (exactly the `wreckify()` pattern the cars already use) versus 124
individuals. The player stays first-person with no visible body, so no player
model.

## E2g.1 — Night coverage and the picture gates — LANDED 2026-08-03

*Expanded at the E5 phase gate from "one night golden" to the phase's
missing instrument: pictorial coverage for the two persistent states nobody
frames, and picture gates for the transients goldens must never cover.*

1. **A night bookmark and golden.** One new bookmark that frames a lamp —
   looking along and slightly up the street (fittings sit ~7m up, 11m out;
   no existing pose catches one). Captured at **22:00 overcast** only — the
   hour the night gates already use, one golden, not a weather column.
   Watch the arc flashes: three randomised PointLight pulses are far more
   visible on a night frame; verify the settle lands them deterministically
   and take three captures before trusting the first. The contrast-floor
   aggregate check must *include* this golden (a lit night street clears
   stddev ≥ 8 comfortably — that was measured at E2g; assert it stays
   true).
2. **The ending's picture gate.** Capture the close's mid-sequence frame
   (t≈5s, deterministic under `stepFrames`) and assert the contrast floor
   plus a mean-luminance band — "there is something to look at, and it is
   neither black nor blown out". This is the gate the blackout proved
   missing; the numeric fog/exposure asserts stay as they are.
3. **The hinge's evidence capture.** Not a gate: one post-turnaround frame
   written to `docs/smoke/captures/` per run, so "the return leg is a
   different street" has a picture a reviewer can open next to the clock
   arithmetic. Free, and it is the eyeball path the phase kept proving
   necessary.

Gates: the new golden joins the standard capture-or-compare path (0.5%);
the mid-close picture gate fault-injected red (re-introduce the exposure
floor of 0.12 — it must fail); draw calls at the new bookmark enter
`budget.json` on capture. **Effort:** medium, **high (review)** on the
golden-capture commit per the standing rule.

**What landed** (full write-up in `docs/VALIDATION.md`, "Night coverage and
the picture gates"):

- `lamp-hero-night`, in a new `NIGHT_BOOKMARK_DEFS` set kept out of
  `BOOKMARK_DEFS` so no weather column or anchors diff pays for it. 1131 draw
  calls, stddev 30.2 against a floor of 8 — and not the flattest frame in the
  suite (that is `golden-clear:mid-550-close` at 20.6). Three further runs
  diffed 0.047%, 0.062% and 0.052%; the arc flashes do not move it measurably.
- **Two** picture gates on the close, at t=5s and t=9.5s, both mean-band plus
  contrast floor.
- The hinge evidence pair, `hinge-return-{on,off}.png` — the same spot at the
  Foot, night-and-offered against flat daylight.

**One ruling changed on measurement.** The specified fault injection
(`EXPOSURE_FLOOR = 0.12`) does **not** take the mid gate red: it moves t=5s
from 55.5 to 51.1. E5d's blackout was the per-frame approach-the-floor step,
since replaced by an ease across the whole sequence, so the floor value alone
no longer produces one. Turning `HAAR_COLOUR` black reproduces the real defect
class and takes the **late** gate red (mean 4.5, stddev 7.9) — which is why
the unit shipped two frames rather than the one specified, and why the bands
are set from the injection rather than from the shipped reading.

## E3 — phase-gate audit (2026-08-07, Fable): PASSED

The independent read the Opus-run gate could not be. Method note: this gate
ran **without executing the suite** — every claim was cross-checked between
the recorded numbers (`VALIDATION.md` §§ E3b–E3h), the commit record and the
code as it stands, which agree with each other at every point sampled
(archetype constants, the E3h all-five loading fix, the cross-boot join
gates, the E3f PRNG isolation, build.mjs's conditional credits). Rationale
in `VALIDATION.md` § "E3 phase gate (Fable)". Findings and rulings:

1. **The class the Opus gate missed is still open, one build over.** The
   walker bug's lesson was "a defect that only exists in a build output
   needs a gate that boots one" — and the suite now boots `dist/` (the
   artifact) but still nothing boots **`dist-site/`**, the build people
   actually visit. Deploy md5-verifies files that exist; it cannot see a
   file that was never copied or a path that 404s at runtime. Named blind
   spot; **E7a's hosting move carries a booted-site gate** (one boot of the
   deployed tree, assert crowd meshed + zero 404s), and any earlier unit
   that touches `build.mjs --site` should pull it forward.
2. **The site build's fallback quietly degraded.** If `assets/characters/`
   ever 404s on the live site (bad deploy, CDN hiccup), the doll fallback
   now dresses heads with faces the site no longer publishes — a
   blank-headed crowd. Accepted: the fallback is a safety net for a failure
   mode the deploy gate already defends, and republishing 39 franchise
   stills to dress a failure state would be backwards. Recorded so nobody
   reads the blank heads as a mesh bug.
3. **`goldens:audit`'s 23 standing false positives get fixed, at E8 close.**
   The fix: commit per-golden noise bands (`docs/smoke/goldens/noise.json`,
   measured over ≥3 consecutive quiet runs), audit floor = max(0.02%, 2×
   band); a recapture invalidates its band and re-measures it. E8 close is
   the moment — it recaptures everything anyway, so the bands are measured
   once on the new set instead of twice. Until then the control-worktree
   reading (§ E3g) stands. **Does the noise change the golden set's
   worth?** For 33 of 39 poses, no. For the six noisy ones the golden is a
   coarse instrument (~0.3–0.5% effective floor) and sensitivity is carried
   by the draw-call baselines — which is exactly how E3f caught
   `lamp-hero-night` (−98 calls under a 0.061% pixel move). The pairing is
   the instrument; neither half alone is.
4. **The off-arm control pattern is sound, with its boundary named.** Six
   gates read their doll-side control from a scene no player sees. That is
   what a control *is* — a fixture, not a product — and the cross-boot
   name-join made the comparisons stronger, not weaker. The liability is
   only ever forgetting the boundary: the off arm must never be cited as
   evidence about the shipped picture. Consequently the paper doll and the
   39 faces are **kept, in-repo, unpublished** — retiring them entirely
   would orphan six gates' independent comparand to save repo bytes that
   ship nowhere. Refused.
5. **The four car glbs staying recorded-not-gated in the artifact is
   correct** — the gate prints the divergence without reddening for a
   decision that predates E3. If the artifact is ever the primary
   deliverable, cars join the inlining question then.
6. **The ambient-crowd anonymity claim stays the weakest in the phase**, as
   E3f itself recorded. Rider: E10a's judging sheet includes one
   close-range walker frame, so the claim gets a third look the next time
   character content is judged anyway.
7. **`assets/comics/WhatsApp Image 2026-08-04 at 06.51.18.jpeg`** is a real
   comic (STYLE.md's palette-calibration source, "The Sandwich Incident")
   sitting outside the pipeline with a space in its name that already broke
   deploy once. Ingest it through `prep-comics.mjs` like the other 418
   (hashed name, joins the transcription queue), delete the original.
   Standing-trickle-sized; ride it with any convenient commit.

**Architecture:** no drift beyond what the phase already recorded. The
coupling the Opus gate named (characters.js reaching into npcs.js
internals) was resolved by E3g in the prescribed direction; the one new
seam — characters.js as archetype *publisher* to leithers.js — is a clean
subscription with replay and failure notification, and E3h's bug was in its
first consumer's demand-driven loading, not in the seam itself. The E3
plan's one silent casualty (the scarf, neckless archetypes) was documented
where it died. Phase passed.

## E6 — Getting About (collision, and a tram that runs)

*Dan's call, 2026-07-27. Two items, no longer sequenced together: E6a jumped
the queue at the E3 phase gate (2026-08-07, Dan-steered); E6b stays after E4.
Collision remains a hard prerequisite for the tram: you cannot ride a tram
you can walk through.*

### E6a — Collision — NEXT (promoted at the E3 phase gate)

*Scope: the player stops passing through buildings, characters and street
props. Blocking is one-way — the world blocks the player; nothing pushes an
NPC. Decomposed for Opus; the design rulings here are taken, not open.*

**Design rulings (Fable, 2026-08-07):**

- **Collision lives in `controls.update()`'s movement integration only** —
  the same place the `MAX_OFFSET` corridor clamp already is, resolved the
  same way (pull the proposed position back to the boundary, slide along
  it). The debug API's programmatic posing (`goto`, bookmarks, `place`)
  sets `camera.position` directly and MUST stay exempt: that exemption is
  what keeps every bookmark, golden and capture byte-identical, and it is
  why the whole unit's golden claim is **zero movement** (verified against
  a control worktree, per the goldens:audit ruling in `VALIDATION.md`).
- **Collide against source data, not meshes.** Buildings:
  `leith.buildings[].footprint` polygons (`src/world.js`) — the rendered
  street is one merged geometry and stays that way. Characters: circles at
  each vendor/walker group's x/z (radius from the archetype's scaled
  width). Props: seeded static boxes/circles for the tram hulk, wrecked
  cars, hoarding and cones, derived from the same seeded placements
  scenery.js already computes — no new randomness, nothing enters
  `computeGeomHash`.
- **Broadphase: a uniform grid keyed on chainage**, built once at boot. The
  corridor clamp already bounds the player to ±16m of the street line, so
  the per-frame candidate set is a handful of cells.
- **`#p=` moments and the boot spawn must resolve out of solids.** The
  corridor overlaps building interiors (façades sit well inside 16m), so a
  shared moment link can currently place the player inside a wall — today
  they can walk out, under collision they would be trapped. `moments.js`'s
  boot clamp gains a second step: if the clamped point is inside a
  footprint or prop box, project to the nearest free point. Gate it.
- **Walkers walk through the player, deliberately.** The 30 walkers' 1D
  paths do not path-find; a walker who could be blocked by a standing
  player can be pinned forever. The player cannot pass through them, they
  can pass through the player, and at their densities the asymmetry is
  invisible.

| unit | scope | acceptance shape |
|---|---|---|
| **E6a.1** — LANDED | Buildings + static props: footprint/box data, chainage grid, slide resolution in `controls.update()`, moment/spawn free-point resolution | opposed pair: collision suspended → a scripted walk-at-a-façade run ends inside the footprint, enabled → it ends outside every footprint with forward progress along the wall (the slide, not a dead stop); **zero golden movement vs a control worktree**; moment-inside-a-wall resolves to a free point (fault-inject: disable resolution, gate must redden); determinism — grid build draws nothing from the shared PRNG, `geomHash` untouched |
| **E6a.2** — LANDED | Characters: per-figure circles for 124 vendors + 30 walkers, same resolution path | walk-at-a-vendor run stops at the circle and slides off it; the reading interaction still triggers (the prompt radius must exceed the collision radius — assert the ordering for all 124); walkers still pass through the player (opposed-pair on the asymmetry) |

**Named risks:** corner traps where a footprint meets the corridor clamp
(two constraints resolving against each other can oscillate — resolve
collision first, corridor second, and assert no-jitter on a scripted run
along a clamped wall); touch hold-to-walk shares the same integration path
so it needs no special case, but the mobile pass should include one
wall-slide; `EYE_HEIGHT` steps — footprints are 2D, the Walk climbs 27m,
and terraced building bases mean a footprint edge can sit below a raised
skirt: collide in plan (x/z) only, exactly as the corridor clamp does.
**Effort:** E6a.1 medium, **high (review)** on the zero-golden claim;
E6a.2 medium.

#### E6a.1 — what landed (2026-08-07)

`src/collision.js`: a plan-view solid registry, 1,178 solids at boot — 995
building footprints from `leith.json`, 53 Heras panels, 113 standing cones,
14 wrecked cars/vans, the bus, the tram hulk, the hoarding. Consulted from
`controls.update()` before the corridor clamp, and from `moments.js` /
`main.js` for spawn resolution. Thirteen gates in a new `collision` region,
each family fault-injected. Full detail in `docs/VALIDATION.md` § E6a.1.

**The zero-golden claim held, and was measured rather than reasoned.**
`geomHash c0751fc1` and `realtimeHash 6e5cd57b` are identical in a control
worktree at `8d6dd99` and after the change; `goldens:audit` names the same 25
standing poses in both trees. The named risk — `mobile: hold-to-walk moves
camera`, the one gate that drives real movement — was falsified first: that
bookmark's forward path clears every footprint by 5.93 m, and the gate still
reports 7.00 m.

**Rejected by measurement:** push-out resolution for movement. Pushing the
moving point out of every solid it overlaps oscillates in a concave tenement
footprint's re-entrant corner — the wall-slide became a dead stop 39 frames
in. Movement now accepts or discards candidate positions and never pushes;
push-out survives only for spawn resolution, which has no free position to
fall back to.

**Deviation from the ruling, with the reason:** the broadphase is a uniform
8 m x/z grid (7,099 cells), not chainage buckets. Keying on chainage would
need the proposed position projected onto the street line before the grid
could be consulted — a second `nearestStreetPoint`-class cost per query for
the same candidate set.

**Decided for E6a.2, not built:** a vendor's collision circle must be smaller
than `interact.js`'s 8 m prompt range, asserted for all 124 — a vendor you
cannot reach is a vendor you cannot hear.

#### E6a.2 — what landed (2026-08-07)

154 more solids: a gridded circle per vendor (124) and a **mover** per walker
(30) — a circle read live through getters rather than indexed, because a
walker moves every frame. Radius is half the silhouette's shoulder width in
both cases (`bodyW / 2`), which is the archetype's scaled width by
construction and needs neither the glb promise nor the scene graph. Vendors
measure 0.130–0.416 m, so the closest the player can stand is 0.480–0.766 m
against `interact.js`'s 8 m prompt range — 7.234 m of margin, asserted for
all 124 and paired with one behavioural check that the prompt really is up at
the closest approach the circle allows.

**The asymmetry holds and is measured.** `leithers.js` never consults
collision, so a walker is solid to the player and the player is not solid to
a walker. Cross-boot join by walker index, player parked on walker 0's path
for 300 frames: 0 of 30 moved.

**Movers register at the end of the first update, not at build time.** A
walker's group sits at the world origin until `update()` places it, and the
origin is the Foot — registering early would put 30 solids on the spawn point
and let the boot's free-point resolution shove the arriving player off it.

Four fault injections, one per gate family. `geomHash c0751fc1` and
`realtimeHash 6e5cd57b` unchanged from `8d6dd99`; `goldens:audit` names a
subset of E6a.1's standing 25 with no new pose. Suite 270 PASS / 0 FAIL.

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

**The ride design (survey-fed, 2026-08-01).** Riding is a *protected
observation frame*, not transport (cf. Cyberpunk's begged-for metro,
Half-Life's opening): the player finally sits still and looks at the street
the game spent every phase building. Concretely:

- **Ritual bookends** (cf. Spider-Man's subway): waiting at the stop, doors,
  a seat, a bell, cosine-ease deceleration into each stop. Fifteen seconds of
  ceremony at each end does more place-making than the ride.
- **The tram is a proscenium** (cf. Black Mesa Inbound): the route is
  deterministic, so vignettes are authorable by distance-along-curve —
  scenes only riders ever see. The interior is a diorama too (cf. Umurangi):
  rotting 2019 adverts, tram-works safety notices, someone's abandoned
  messages.
- **The strip of voices**: at speed, proximity-triggered readers would fire
  in sequence — tamed with one-voice-at-a-time crossfade and a distance
  window, the ride becomes vendors handing off down the Walk like stations
  on a dial. The cacophony risk IS the best audio moment in the piece.
  (This is where the **per-source mix API** gets built: the ending's
  "voices merging" is still `ambience.setDucked(true)` for want of exactly
  this control — build it once here, then upgrade the ending's close to a
  real merge as a rider. E5 phase-gate note.)
- **The ending is the thesis**: the line terminates **where the rails stop
  dead** — deceleration, doors, silence, and the player steps off into the
  unfinished half. Riding the tram that never ran, as far as it ever got.
- Optional: an RDR2-style cinematic exterior cut of the derelict-liveried
  tram gliding past a landmark — a second camera on an offset of the same
  curve.

**The technique (no physics, and that is correct** — cf. Fallout 3's train
being a hat): board → `tram.attach(cameraRig)` (preserves world transform, no
snap), **suspend ground-follow AND corridor clamp** (they would yank the
camera off the tram every frame — the single most likely bug); tram advances
by arc-length parameter on a `CatmullRomCurve3` built from the street
polyline with Y baked from `groundHeight` at authoring time; alight →
`scene.attach(cameraRig)`, re-enable follows. Traps: strict update order
(tram → camera → render); every system reading `camera.position` must switch
to `getWorldPosition()`; pre-warm asset paging along the route (it is known
and deterministic — precompute the whole ride's load schedule).
- **The tram contradiction — RESOLVED at the E2 phase gate.** "The tram ghost
  on the dead rails" (E∞) and a living tram (this milestone) are now one
  design, staged: the **ghost ships first**, as an E∞ delight that needs no
  collision and no riding — a translucent tram sliding the dead rails at
  night, gone by dawn. If and when E6b lands, the ghost is not retired but
  becomes the **night service**: the real tram runs by day, and after dark
  only its ghost runs. The day service is real; the night service is a
  memory of it. Nothing to un-ship, and the delight gets stranger, not
  stale, when the living tram arrives.

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

**Presence design (survey-fed, 2026-08-01). Design for zero concurrency
first** — the street will usually hold 0–1 live players, so asynchronous
traces are the multiplayer most visitors actually meet:

- **Traces** (cf. Death Stranding's strand system, NetHack bones): fading
  footprints in the ash, a comic left open on a doorstep where a session
  ended, a per-vendor ember ("last listened 3h ago"), and — Souls-style
  constrained vocabulary — a walker can pin one of ~20 preset garbled-comic
  quotes to a spot. Preset-only kills the moderation problem dead; storage is
  `{chainage, presetId, timestamp}` tuples in the Durable Object, decayed
  over days, **sampled per client** so the street never clutters. Close the
  loop with counters: "three walkers stopped at your quote."
- **Stage the reveal; never nameplate it** (cf. Journey, Sky's silhouettes):
  a real walker renders like an NPC — no floating name, no green diamond.
  Realness is discovered: they stop when you stop, they turn to face you, a
  vendor addresses the two of you ("two of ye, eh?"). The doubt-then-certainty
  IS the delight, and 418 deterministic NPCs are the perfect crowd to hide a
  human in.
- **One expressive verb, no channel** (cf. Journey's chirp, cursor-party's
  duets): a wave or a torch-raise, that NPCs also react to so the verb is fun
  alone. Emergent duets do the rest.
- **Shared determinism is free intimacy**: two walkers at the same vendor
  hear the identical garbled reading in sync with zero extra netcode — make
  the game acknowledge it (audio duck, an NPC aside) and the seeded-world
  constraint becomes the emotional payoff.
- **Identity update (2026-08-02, E9):** a live player is not just a walker —
  they are **the keeper of a different shop** (their daily-seeded
  assignment). Meeting another player can now happen indoors: you walk into
  a shop and someone real is behind the counter. See E9c.
- **Netcode stays dumb** (cf. fly.pieter.com's permission slip, Gambetta for
  the one needed chapter): 10Hz `{id, chainage, sideOffset, heading,
  animState}` — tens of bytes on a 1D street — fanned out by the Durable
  Object, rendered ~150ms behind via two-snapshot interpolation, never
  extrapolated. No prediction, no authority, no reconciliation. Hard room cap
  (~8) with silent sharding; silent fallback to single-player remains
  absolute.

### E7c — Shared moments

*The bit that makes having done it worthwhile.*

- Peers visibly gathered around the same reader, hearing the same comic.
- A peer's speech bubble when they trigger a comic — verbatim rule holds.
- Feeds E4: a leither's stance reacting to a *crowd* of players, not just one.

## E9 — The Keeper (player perspective) — Dan-directed, 2026-08-02

*The reframe: when the game starts, you inhabit the body of a shopkeeper on
the Walk. You wake behind your counter; Leithers come in and deal with you
according to what you sell, who you are, and who they are; you can step out
the door and the whole existing game — the street, the readers, the weather —
is your street. The player stops being a tourist and becomes a Leither with
an address. Decomposed into three milestone-sized units; dependencies and
gates stated per unit so Opus can brief each directly.*

*Identity confirmed at the E3 phase gate (2026-08-07): the player is the
keeper, **not** McGrot — the ruling and its costed alternative are in the
Direction ruling section. Nothing in E9 changes; McGrot enters the game as
E10a's principal NPC.*

**Design decisions taken here (Fable), so briefs don't relitigate them:**

- **Interiors are staged sets, not carved geometry.** Each enterable shop is
  its own small interior scene (own lighting rig, no fog, sky off), entered
  through a door prompt on the façade with a comic-panel wipe transition.
  The street's merged mesh, paging and goldens are untouched — an interior
  is additive content, and rendering swaps the active scene handed to
  `post.render(scene, camera)`. Weather stays audible (rain on the glass,
  gulls on the roof); ambience ducks to a muffled bed indoors.
- **Movement bounds, not collision.** A shop room is a rectangle with a
  counter: an AABB clamp on the camera does the whole job. E9a does NOT wait
  for E6a and must not grow a physics system.
- **Your shop is seeded.** The daily seed assigns you a shop from the
  curated enterable set (starts at one, grows). "Who did you get today?" is
  the daily-variation share thesis (E5c) applied to identity. The business
  is real — its actual name, its category decides what you sell.
- **The player is silent.** No player TTS, no text entry. The keeper speaks
  in GESTURES — a small verb set (nod / shake / point-at-stock / offer),
  keys 1–4 and a touch radial. Every visitor line is written so a gesture
  is a meaningful reply. This is the one-expressive-verb presence philosophy
  (E7b) applied single-player, and it keeps the moderation surface at zero.
- **Visitors are the E4 cast on your doorstep.** The shop is the venue where
  the archetypes perform at close range. E9b therefore depends on E4's
  engine (adverts, thought tokens, archetype corpus) and not the reverse —
  E4 ships street-first and loses nothing if E9b slips.
- **Reputation is contagion.** A visitor leaves your shop carrying a thought
  token about it (served well / ignored / pointed at the wrong shelf), which
  spreads through the existing E4 propagation. Your keeping style becomes
  street opinion without any new system.
- **Relationship memory lives in localStorage** beside E5's journal: one
  slot per archetype ("the Auld Boy remembers you nodded"). The E5 journal
  itself reframes as the shop's ledger/scrapbook once E9a lands — E5 builds
  it street-first; E9a is a reskin, not a rebuild.

### E9a — The Shop (the room and the role) — after E8

Pure build, no cast dependency. One hero interior proves everything:

1. **The room**: one shop interior set (pick a photographed business with a
   strong identity, category with obvious stock — deli territory), built
   from a small module kit (counter, shelving, stock props, door, glass)
   under the E8 grade. Seeded layout via `hash32`.
2. **The transition**: door prompt on the façade → panel-wipe → interior;
   reverse on exit. Deterministic, and the street outside continues (time,
   weather, walkers) — stepping out must never feel like a level load.
3. **The role boot**: title card → wake behind your counter (flag-first:
   keeper boot behind a debug flag until the enable+recapture commit, since
   it moves the spawn and therefore the mobile street golden).
4. **The first visitor, scripted**: the Queen of Leith arrives once per
   fresh boot, welcomes the new keeper, and teaches the four gestures by
   asking questions a nod can answer. Onboarding as theatre; no tutorial UI.
5. **Gestures v1** wired and reactive: she responds distinctly to each.

Gates: interior bookmark set + goldens (opposed-pair on the transition:
wipe at strength 0 bit-identical to no wipe); draw-call budget per interior
pose; determinism (interior layout in `geomHash`); boot-path flag
containment; audio — one `AudioContext`, ambience ducking measured indoors
vs out. Risks, named: the door prompt colliding with the existing NPC
proximity prompt at the same façade (`interact.js` priority needs a rule);
scene-swap interaction with `FramebufferTexture` resize; mobile safe-area
for the gesture radial; and **atmosphere ownership** — an interior needs
`toneMappingExposure` (renderer-global) and its own fog while the street
clock runs on, which makes it the *second* consumer of the
`setSuspended()` seam the ending built. A bare boolean supports one
suspender: this unit graduates it to an owned hand-off (a token, or a
named owner with re-entry refused) before two callers can fight over it
(E5 phase-gate ruling).

#### E9a.1 landed (2026-08-08) — the room, and the seam that lets it own the air

`src/interior.js` behind `__mcgrotForceInterior`, shipped default OFF. Suite
**318 PASS / 0 FAIL sharded (102s)**, goldens audited afterwards: *nothing
moved, no recapture needed*. New `interior` region, **13 gates**, and every
one of them driven red under fault injection — the table is in
`docs/VALIDATION.md` § "The `interior` region".

**The shop is Valvona & Crolla, 19 Elm Row** — building 424, chainage 1486,
west side. Picked on a measurement, not a feel: the design asks for a category
with obvious stock, and of the 24 façades in `assets/facade-registry.json`
backed by a real rectified photo it is the only deli
(`edinburgh-18-19-elm-row`, confidence 0.72).

What it costs: **3 draw calls and 4,245 triangles** for a furnished 7×9m room,
against the street's ~950-call heaviest pose. Everything opaque accumulates
into one merged vertex-coloured mesh; the glazing is the only second material.

**The E5 phase gate's deliverable landed with it.** `atmosphere.setSuspended`
is gone, replaced by `acquireSuspend(owner)` → token / `releaseSuspend(token)`.
Re-entry is refused, a stale token's release is ignored, and `ending.js` now
REFUSES to begin if it cannot get the token — so the close is unavailable from
indoors, which is right: the haar is a thing you walk into at the Foot.

**Design decisions taken here, so E9a.2–.4 do not relitigate them:**

- **Seeded from the shop slug, not from the day.** A deli does not rearrange
  its fittings overnight, and a date-varying interior would put every future
  interior golden at the mercy of `SMOKE_DATE` — the exact blind spot E10a had
  to write down when it turned out no golden had ever seen McGrot in. Stock and
  visitors are what vary by day, and both are E9b's.
- **Suspended-indoors is a named set in `main.js`**, not a flag each module
  reads: litter, shopfronts, interact, proximityAudio, legs, ending, moments,
  captions. Everything else keeps running, which is what makes stepping back
  out not a level load.

*Rejected, measured — three gates that could not go red.* All three were mine,
not the code's, and all three are the same error in different clothes:

1. **The street-unchanged gate read only `renderer.info`.** An injection that
   cloned the room mesh into the STREET scene stayed green, because the
   interior's local origin is ~1300m from `elm-row-hero` and the clone was
   frustum-culled. Fixed with a whole-scene census by traversal.
2. **Both arms of the movement gates called `setRoom` themselves.** They passed
   an injection that deleted that call from `enterInterior` entirely — testing
   the clamp, not the shop. The held arm now touches nothing; only the control
   overrides. Third time this project has hit "gates test the product, not the
   calculator".
3. **An `isInside()` guard made the ownership token dead weight.** An injection
   handing every caller a token stayed green because nothing reached the
   acquire twice. `enterInterior` now acquires FIRST and the token is the only
   lock on re-entry.

*And one bug no assert would ever have found.* The room-hidden control frame
had `[E] HEAR ISA STRUTHERS READ` printed across the whole shop. Skipping an
updater stops it thinking, not showing — `interact` was correctly held, and the
prompt it raised on the last street frame stayed in the DOM. `interact.suspend()`
and `captions.suspend()` now bring their own DOM down on the way in. It was
caught by *opening the capture*, which is the entire case for that rule.

#### E9a.1 enable (2026-08-08) — and it recaptured nothing

`INTERIOR_ENABLED = true`. Suite **318 PASS / 0 FAIL** sharded, every golden
inside its own measured noise band, `goldens:audit`: *nothing moved, no
recapture needed*.

**No golden moved, and none could have.** There is no way into the room on the
shipped path — the door is E9a.2, the keeper boot is E9a.3 — so the default
flip builds the room on every boot and changes not one rendered pixel of the
street. Worth recording rather than filing as a clean pass: a flag-first
landing whose enable recaptures nothing means the flag was covering something
*unreachable* rather than something *invisible*, and only the second is what
the pattern is for. (E10a's enable, by contrast, moved three goldens.)

**What it buys:** the scene swap, the exposure hand-off and the room's
construction now sit on the code path every visitor runs, so a regression in
any of the three surfaces in the ordinary suite instead of only in this
region's ON arm. `SINCE_RULES` grew to match — `src/interior.js` routes to
`render`, `weather`, `mobile` and `determinism` as well as `interior`.

**What it costs, measured:** 4,240 triangles and **381.7 KB** of GPU geometry
built at boot and reachable by nobody, and the artifact 6.96 → **6.97 MB**
against its 7.5 MB ceiling. Both are Dan's to reverse if the room is still
unreachable by the time E9a.2 slips.

**Deferred deliberately: the interior golden.** Capturing one now would lock in
a picture of a room nobody can enter, before the transition and the boot have
had their say, and it would then be recaptured twice more. It belongs to
E9a.3, when the boot lands a player in the room and the pose becomes a state
the game actually ships someone into.

**Next: E9a.2, the transition** — a door prompt on the Valvona & Crolla façade
at chainage 1486, the panel wipe both ways, and the interaction with
`interact.js`'s existing NPC proximity prompt at the same frontage (the risk
this section already names). Two things E9a.1 deliberately left for it: the
glazing is a constant pale light box at every hour, and there is no ambience
ducking indoors — the moment the door works, the two sides have to agree about
the time and about what you can hear.

### E9b — Open for Business (the visitor theatre) — after E4

The interaction engine, using E4's machinery end to end:

1. **Visit loop**: Leithers score shop adverts (category axes join the comic
   advert table) → enter → browse beat → address the keeper with a line
   from the archetype × category corpus → await gesture (or leave on a
   timeout, muttering) → 2–3 reaction branches per line → depart carrying a
   thought token. Visit schedule precomputed from the seed (Shadows-of-Doubt
   pattern, already E4's shape) so a shop session is deterministic.
2. **The corpus**: ~250 lines to open — per-archetype packs (slot-free
   phrasing so lines work in any shop) plus per-category packs, drafted
   against `docs/LEITH.md`'s register and the Central Bar test, curated by
   Dan before any TTS is spent. **Text bubbles ship first**; voices trickle
   in per archetype voice-profile through the daily TTS run (students RP,
   everyone else Scots). This adds a second stream to the TTS trickle —
   see Standing trickles.
3. **Regulars**: the per-archetype memory slot pays off — repeat visitors
   reference last time. The Central Bar Regular gets a fixed daily visit
   time; missing him matters to him.
4. **Pomple** wanders in, can be fed (the offer gesture), sleeps by the
   counter if fed twice. NPCs entering later greet him by name.
5. **Match-day and Gala Day** reach indoors: the shop empties or floods on
   the calendar (E4) — the street's rhythm felt from behind the counter.

Gates: N distinct visits per settled session with zero within-session line
repeats (control: same seed replays the identical schedule); the one-voice
mixer rule holds indoors; corpus lines pass a scripted Central-Bar-test
review step before merge; reputation tokens measurably alter street
mutterings (opposed pair: contagion off → no drift).

### E9c — Keepers of the Walk (scale; rides with E7)

Grow the enterable set with the module kit (a Townscaper-sized vocabulary
recombined per category beats bespoke rooms); the other 417 shops' keepers
gain one line of context each (they know you're the new one); and the E7
presence layer upgrades: **every live player is the keeper of a different
shop** — you can walk into a shop and find a real person behind the counter,
hiding among NPC keepers exactly as walkers hide among walkers. Async
traces extend indoors (a tended shop shows it). Scope deliberately thin
here: it inherits its design from E7b + E9a/b rather than adding new ideas.

## E10 — The Canon (McGrot's own cast) — added at the E3 phase gate, 2026-08-07

*The comics' named cast enters the street. Authoritative reference:
`docs/CANON.md` — its established/suggested column binds; established facts
are canon to honour, suggested details are design freedom. The player-is-
the-keeper ruling and the cut list live in the Direction ruling above.*

### E10a — The Gullet (after E8 close)

**E10a.3 LANDED 2026-08-08** — McGrot is a reading station: prompt, overlay,
his own comic (`3c6b637b`, "McGrot — The Badger Consultancy", transcribed for
this unit), a rendered clip through the new TTS hero lane, and a read-along
transcript. He is NOT vendor 125 — 125 readers, 124 vendors, journal
denominator 124 — because his comic deliberately carries no `npc` block. Seven
gates, all fault-injected; suite 305 PASS / 0 FAIL. Spend: ~$0.01.

*Two latent defects it surfaced,* both newly reachable because he is the first
station whose comic had no clip: a catalog entry claiming an mp3 that is not on
disk 404s on every open (fixed at source — `generate-tts.mjs` writes the path
back on success), and the overlay showed the PAUSE icon over silence.

*Rejected, measured:* adding his lines to `assets/comic-lines.json`.
`litter.js` builds its pool from that map, so a 96th key reshuffles the litter
layout and moves goldens — a real cost for no gain while the flag is off.

**E10a ENABLE COMMIT LANDED 2026-08-08** — `GULLET_ENABLED = true`. The stall
ships. 305 PASS / 0 FAIL. Three goldens recaptured (`skyline`,
`skyline-clear`, `skyline-haar`); draw-call budget +10 at `skyline` and
`lamp-hero-night`, accounted mesh by mesh. **E10a is closed.**

*The stall is visible in exactly two golden poses* — skyline under clear and
haar — measured inside ONE boot by toggling visibility with a null-toggle
control. The first attempt compared two boots and was contaminated by its own
glb-load timing; its "five poses in four weathers" numbers are wrong and are
recorded as such in VALIDATION.md. Drawn is not visible: skyline is +10 draw
calls under overcast and 0.0000% pixels.

*The artifact ships without the principals, deliberately.* 6.96MB against a
7.5MB ceiling; the two glbs are ~1.4MB as base64 and McGrot alone still
breaches it. gullet.js declines to build them when the single-file build has
not inlined them, rather than letting the fetch 404 — E3h's gate caught the
404 version immediately. The published site is unaffected.

*Known blind spot:* SMOKE_DATE is 2026-01-01, a day McGrot is OUT, so **no
golden has ever seen him in**. The in-day tableau is covered by the `gullet`
region's opposed pairs and picture gates instead.

**E10a.2 LANDED 2026-08-08** — McGrot and Pomplé, date-seeded. He is at the
Gullet 3 days in 8 (136/365 = 37.3% measured); on the other days the shut sign
goes up over the hatch. Pomplé is posted at the kerb end when McGrot is in and
at a different day-seeded spot when he is not. Both meshes through the E3a
pipeline at `mesh_simplify=0.98, texture_size=512`, not re-swept: McGrot 3,952
tris / 451KB, Pomplé 6,946 tris / 591KB, one draw call each. Spend: $0.04.
Eight more gates, all fault-injected; suite 298 PASS / 0 FAIL.

*The van became a shell.* E10a.1's body was one solid box and McGrot stood
inside it — the capture showed his boots under the chassis and nothing else.
Six panels with a real serving opening now, plus a soot interior liner. Still
one draw call. See VALIDATION.md.

**E10a.1 LANDED 2026-08-08** — the stall alone, behind `__mcgrotForceGullet`
with the shipped default OFF. Suite 289 PASS / 0 FAIL sharded (92s), every
golden 0.000–0.012%. New `gullet` region, 10 gates; see `docs/VALIDATION.md` §
"The `gullet` region". Parts 2 (McGrot) and 3 (Pomplé) are unstarted and both
need generated meshes, which is real spend — ask before running the pipeline.

*The pitch, and a correction to this section's own risk note.* "Pick an empty
stretch" was not available as written: the widest gap along the combined
vendor line is 17.9 m. But vendors alternate pavements, so a stall competes
only with the 62 on its own side, and per pavement there are 30 m runs. Dan
picked **chainage 740, side +1** (the west pavement) — the widest clear run on
the street, 30.3 m, mid-Walk so it is passed daily, beside the Cupp anchor at
725. Nearest vendor 13.92 m, comfortably outside `interact.js`'s 8 m `RANGE`.
Full table in VALIDATION.md.

*Also landed with it, on the E5 phase gate's ruling:* `src/flags.js`, one
localhost-gated `flag(name, shippedDefault)` helper, with anchors, characters,
tint, character-fail, lamps, legs and leither-mesh all migrated onto it in the
same commit. Their existing opposed-pair gates verified the migration for
free, exactly as that ruling predicted.

*Rejected, measured:* using `geomHash` inequality as the flag's discriminator.
It fails — `computeGeomHash` covers merged building geometry, InstancedMesh
matrices and vendor positions, and the stall is none of those. Inverted into
the better gate instead: `geomHash` must MATCH across the arms, which is what
proves the stall's own PRNG reseeds nothing.

McGrot's pitch, standing on the street every day; McGrot himself,
date-seeded. One milestone, mostly on pipelines that already exist:

1. **The Gullet**: a rogue food stall/van at a fixed, chosen chainage (Dan
   picks the spot — mid-Walk, where footfall passes it daily). New prop
   geometry on the seeded-scenery path (append to draw order, never
   insert), dressed from the canon row: hoarding, ladle, sauce bottles, a
   hand-lettered price board in the comics' lettering. It is there every
   day — the fixed point the date-seed varies around.
2. **McGrot, date-seeded.** Generated via the proven pipeline (FLUX from
   the canon row's established features → Trellis form variant → Lambert
   re-material → judged under grade `b` on a contact sheet before
   landing). He is at the Gullet on a seeded subset of days; other days
   the stall is shut ("AWAY. BACK NEVER. — McG"). Supersedes the E∞
   cryptid: "McGrot was in the day" is the share sentence, and it is
   checkable. When present he is a vendor — a reading station like the
   other 124, wrapper phrasing his own, comic text verbatim as ever. His
   station gets priority in the TTS trickle's hero-cast lane.
   *Variant note:* Exoskeleton and Ailment McGrot are date-seeded
   appearance variants of this one NPC (extra straps, extra bandages —
   dressing, not systems), the same axis "which McGrot did you get".
   McWonka stays cut with the dream world.
3. **Pomplé.** A small dog mesh (same pipeline; the canon row is
   established: dog, judgemental stare, occasional hat). Posted at the
   Gullet when McGrot is in; wanders near it when he is not. Minimal
   motion by canon — long stares and small head tilts, which is the
   static-NPC playbook applied to a dog and costs almost nothing. NPCs
   already know him by name (E∞, approved); E9b's shop visits stand.

Gates: flag-first landing (the Gullet behind a localhost flag, goldens
untouched, then one enable+recapture commit for whichever poses frame it);
draw-call budget at affected bookmarks; date determinism (same date → same
presence, opposed pair across two dates); the reading gates extend to
McGrot's station unchanged. Risks: the stall competes with an existing
vendor's pitch at the chosen chainage (pick an empty stretch — density
pockets doctrine says a quiet stretch gains most); Pomplé at dog height is
below every gate's camera line — he needs his own capture in the judging
sheet or he ships unlooked-at.

### E10b — The principals (rides inside E4)

Keth with One Eye, Mike English, the Taxman and the Inspector are E4 hero
cast alongside the fifteen LEITH.md archetypes, built on E4's own
machinery rather than new systems:

- **Keth with One Eye** — a fixed post (a corner, a bench), local-knowledge
  warning lines through the existing comment machinery: the haar, the
  hinge, the Nether Leithers, "dinnae step intae it". He is the street's
  diegetic tutorial and the ending's foreshadow.
- **Mike English** — the rival van, pitched provocatively near the Gullet.
  Immaculate, branded, fake accent slipping under pressure; the LEITH.md
  incomer-anxiety rules apply (the joke is his pretension, and he is
  allowed to be won over). A two-actor McGrot–Mike event joins E4's street
  events list.
- **The Taxman and the Inspector** — recurring two-actor street events at
  the Gullet ("the audit", "the inspection"), on E4's events-not-agents
  pattern. Clipboards versus ladle; punching at bodies with letterheads,
  which is the Central Bar test's home fixture. **The implied systems —
  debt timers, shutdown threats, compliance pressure — are deliberately
  NOT built in the POC.** They are theatre here; if they ever become
  mechanics that is a Dan-directed phase of its own.
- **The Leith Badger** — E∞ delight, not a unit: a burrow by the Gullet,
  undermined cobbles, date-seeded appearances. Established canon at prop
  cost.

Acceptance shapes inherit E4's (corpus through the Central Bar review step,
event determinism from the seed, no golden movement outside deliberate
enables). No new engine surface.

## E9/E10 — phase-gate audit (2026-08-10, Opus xHigh): PASSED

The first gate not run by Fable — see CLAUDE.md § "Development workflow" for
why the role moved. Method note, and it is the opposite of E3's: this gate
**ran the suite and fault-injected against it**, because both phases' central
claim is about what a flag does and that is not a claim a code read can settle.
Independently measured, not quoted: **318 PASS / 0 FAIL sharded, 106s, all 20
regions**, matching the landing record. Every ruling below says whether it was
measured or reasoned.

**Both phases pass.** The Gullet and the Shop are the two best-gated units the
project has landed — 24 and 13 gates, every one fault-injected, and the interior
region's three unfalsifiable gates were caught and fixed *by the implementing
session*, which is the behaviour the verification contract was written to
produce. What follows is what a second pair of eyes found on top.

### 1. Both enable commits shipped without a watcher — MEASURED

The finding the gate exists for, and it is not the one the handoff predicted.

Reverting `INTERIOR_ENABLED` to `false` and running `--only=interior`: **all
thirteen gates stay green.** Reverting `GULLET_ENABLED` and running
`--only=gullet,render`: **all twenty-four gullet gates stay green, and so does
`golden:skyline` at 0.137% against a 0.5% tolerance.** The single check that
went red for either was the unregioned draw-call invariant — `skyline 315 vs
325`, `lamp-hero-night 323 vs 333`.

Two things follow. The goldens do **not** police the Gullet's default: the
enable recaptured `skyline`/`skyline-clear`/`skyline-haar` correctly under the
"nothing intentional lives under the tolerance" rule, but the movement was
always inside jitter range, so post-recapture the pose cannot tell the stall's
presence from noise. Only the draw-call baseline can — the E3 gate's "the
pairing is the instrument, neither half alone is" finding, holding again. And
the interior has no such backstop at all, because a second scene that is never
rendered adds zero draw calls.

**This is the real answer to "was the E9a.1 enable right?"** The flip was right
— putting the swap, the hand-off and the construction on the boot path months
early is worth 381.7 KB, and reverting it now costs a commit to buy back a cost
Dan has already accepted. The defect is that **nothing is watching it**, and
that is cheap to fix and general.

**Ruling — `flags.js` grows a registry, and one gate covers every flag.**
`flag()` records `{name, shippedDefault}` into a module-level Map; the debug API
exposes it; one gate boots with **no overrides at all** and asserts the whole
table against an expected snapshot committed in `scripts/smoke.mjs`. Precedent
exists and was simply not extended to the new flags: `E8: the grade ships on`
(`styleShipped === 1`) and `E3e: the shipped default stands the generated crowd
in the street` are the same gate for two earlier axes. Doing it at the helper
rather than per module is what stops the ninth flag repeating this. **E9a.2
carries it** — it is ~8 lines plus one gate, and the ninth flag is E9a.2's own
door.

### 2. The two suspend owners meet on a reachable path, and it is ungated — MEASURED by reading, reasoned on the outcome

Sceptical item 3 in the handoff, and it matters more than the handoff thought.
The reasoning there was that `canOffer()` needs leg ≥ 1 and the north zone and
no gate sets that up. What that misses is *why* `canOffer()` can be true
indoors: **`legs` is in `SUSPENDED_INDOORS`**, so `legs.state()` keeps returning
the last STREET reading — zone and all — for as long as the player is inside.

So the reachable sequence is ordinary: stand at the Foot on leg ≥ 1, step into
the shop, press Enter. `main.js`'s Enter listener is a bare `window` handler and
is **not** suspended indoors, so it calls `ending.begin()` directly; `canOffer()`
returns true off the frozen street reading; and the only thing standing between
the player and the haar closing over a deli is `acquireSuspend('ending')`
returning null.

That is the entire justification for the E5 phase gate's token, exercised by the
product, on a path a visitor can walk — and it is asserted in prose. **E9a.2
gates it**: the `ending` region already has the `walkToTheFoot` fixture that
produces leg ≥ 1 + north, so the cost is that walk plus an enter and an Enter.
Assert `begin() === false` **and** `atmosphere.suspendOwner() === 'interior'`
after it, or the gate passes vacuously on a build where `canOffer()` was false
all along — the E10a.3 lesson about preconditions, which is the second time it
has applied to a gate nobody wrote yet.

### 3. The keeper's wall is the emptiest wall in the room — LOOKED AT

Opened both captures, which is the rule. `interior-counter.png` reads as a deli:
five loaded shelves, the counter, the chequer, a pendant with a pool under it.
`interior-keeper.png` — **the pose E9a.3's boot lands on and the one that gets
the first interior golden** — is a brown box with one bright slab in it. No
shelving is in frame (correct: the keeper faces the front wall), nothing is on
the keeper's side of the counter, the door barely reads as a door, and the hams
in the window read as five tally marks on a whiteboard rather than as hanging
meat.

Nothing numeric says so — 50.95% room-in-shot, mean 65.1, stddev 45.4, all
comfortably inside their gates. **Dress the keeper's wall in E9a.2, before .3
locks a golden onto it.** A back-fitting behind the counter, the till read from
the keeper's side, and something on the wall the keeper looks at all day.

### 4. Indoors you hear the whole street, unducked — MEASURED by reading

Fable's E9a design says "ambience ducks to a muffled bed indoors". It does not.
`ambience` is not an updater and is not in `SUSPENDED_INDOORS`; it is driven
from `atmosphere.update()` (`ambience.setRain(p.rain)`), and atmosphere keeps
running indoors by design. Nothing calls `setDucked` on entry. So the full
street bed plays at street level inside the shop, rain included.

`VALIDATION.md` names this as "the street's busking simply stops rather than
muffling", which understates it — `proximityAudio` stops, the *bed* does not.
Correct the note and duck it in E9a.2 with the rest of the two-sides-agree work.
One `ambience.setDucked(true)` on enter and `false` on exit is most of it.

### 5. "Seeded from the slug, not the day" is right, and its stated reason expires — REASONED

E9a.1's determinism rule is sound. Its justification is not durable: "a
date-varying interior would put every interior golden at the mercy of
`SMOKE_DATE`" only holds while the enterable set has one member. **Fable's own
E9 design has the daily seed choosing WHICH shop you get** ("who did you get
today?" is the share thesis), so the moment E9c adds a second shop the hazard
returns — through selection rather than through layout.

**Ruling: establish `__mcgrotForceShop` when the second shop lands, not after.**
An interior golden must name its shop in the pose, the way `--hour=` and
`--weather=` already pin the other two axes. Cheap now, a recapture later. The
layout-from-slug rule stands on its own merit regardless — a deli does not
rearrange its fittings overnight.

### 6. "Gates test the calculator" is NOT systemic — MEASURED by inventory

Handhoff item 2 asked whether the three unfalsifiable interior gates were a
pattern. Checked by inventory rather than by impression: `smoke.mjs` imports
**nothing** from `src/`, so the purest form of the error — a node-side
reimplementation testing itself — does not occur anywhere. Every harness
mutator was enumerated (`setTime`, `setWeather`, `setRate`,
`setWeatherSchedule`, `setStyleStrength`, `controls.setYaw/setEnabled/setRoom`,
`torch.setToggle`, `atmosphereNudge`); all are either **fixtures** that
establish an input the product must respond to, or explicitly control-arm-only
— `setRoom`'s two uses are both guarded (`if (b)`, `if (!s)`), which is the fix
from E9a.1.

So it is neither three accidents nor a systemic rot. It is one specific shape:
**the error appears exactly where the harness can call the same setter the
product should have called**, and until the interior nothing in the suite had
that property, because a flag read at boot cannot be faked by a gate. The
mitigation is finding 1's registry — the one remaining place where the harness
sets what the product should decide is the flag itself.

### Sequencing: E9a.2 stands, with its scope widened

**E9a.2 — the transition is the right next unit, and nothing should jump it.**
The measured reason: the room is built on every boot and reachable by nobody, so
every day it sits there is 381.7 KB with no return and an enable commit with no
justification. E9a.2 is the smallest unit that converts it, and four separate
deferrals queue behind it (the glazing constant, ambience ducking, the interior
golden, the `interact.js` priority rule).

Its scope grows by three items from this gate, all small and all on the same
frontage: the **flag registry gate** (finding 1), the **ending-vs-interior token
gate** (finding 2), and **dressing the keeper's wall** (finding 3). The
`interact.js` priority rule the section already names is still the real risk —
the Valvona & Crolla frontage at chainage 1486 is 12.78 m and `RANGE` is 8 m, so
a vendor prompt and a door prompt can be raised in the same frame and
`interact.js` has no rule for which wins.

**E9a's numbered list does not match its own landing records.** The section lists
five items; the records use E9a.1/.2/.3. Read the list as the decomposition
(.1 room, .2 transition, .3 role boot, .4 the Queen of Leith, .5 gestures v1)
and note that .4 and .5 are a distinct sub-phase — a scripted visitor and a verb
set, neither of which needs E4's engine, which is why they can sit inside E9a
rather than waiting for E9b.

**The rest of the order holds unchanged**: E9a → E4 (E10b rides inside it) →
E9b → E6b → E7, E9c with E7, E∞ continuous, E2f queue-jumping. Nothing that
landed in E9a.1 or E10a changes what those phases depend on.

### The transcription factory is the one thing genuinely behind

Not a defect, a fact worth putting in the phase record: **125 of 418 comics are
transcribed and 293 are not**, and the daily TTS trickle has been rendering zero
clips because its queue is empty. The Gemini free allowance goes unused every
morning. Verified against the live docs this pass rather than from memory:
**30 prebuilt voices is still the complete set** (`ai.google.dev/gemini-api/
docs/speech-generation`), so the wrap-at-30 in `merge-batches.mjs` and the batch
brief is correct and there is nothing to raise.

The binding constraint is Claude spend on transcription, and the shape that
broke it before was a full factory launched at once. Three background Sonnet
agents per wave is affordable and is now the standing pattern; see the Standing
trickles section.

**And the corpus is not all comics — MEASURED, and it changes the denominator.**
This gate ran a wave of three and checked the returns rather than merging them.
**Four of the 25 items examined across batches 7 and 8 are not McGrot comics at
all**: two ChatGPT app screenshots from the "your year in pixels" recap series
(`59063b8b`, `657ebc34`), a social-media post by a named real person
(`5944d960`), and a promotional photograph of two franchises' costumed
characters with an identifiable actor (`6261442b`). The corpus was scraped from
a screenshots folder that also holds screenshots *about* McGrot, so this is a
sampling artefact of the source, not a one-off.

Two of the four were handled correctly by the agent that met them, and two were
not: batch-8 wrote a performance for the photograph and marked it `sparse`, and
transcribed the year-in-review card as a straight reading — which would have
stood a vendor on Leith Walk reciting Dan's own BitLocker/Extron/Tapa recap in
the published build. **Both were caught by opening the source images at the
gate, and both entries were removed.** `sparse` is the wrong instrument for this
and now says so in `BRIEF.md`: a `sparse` entry still becomes a vendor, so a
non-comic must be *skipped and named*, never dressed. The rule and the four
known ids are recorded there.

Consequences: **418 is not a reachable target** — some slice of the 293 never
becomes a comic, and 4-in-25 is the only rate anyone has measured. Do not
extrapolate it into a plan; do expect every wave to return a couple of skips.
Nothing downstream breaks, because a skipped item simply never acquires an `npc`
block and so never enters the 124.

**The rule this pass confirms:** transcription quality from a smaller model was
excellent — the hardest verbatim tests in the wave passed, including a page
printing *proclaime / proclaimment / proclamt* as three distinct garbles and
another printing *pefform* and *perform* in the same repeated sentence, all
preserved exactly. What a smaller model got wrong was not the reading, it was
**deciding what counts as source**. Check the judgement calls, not the glyphs.

## E∞ — The Delight Ledger (continuous)

A maintained list in `docs/DELIGHTS.md` of second- and third-pass discoveries.
Two or three ship per session, forever; date-seeded variation so no two visits
match. Seed ideas: a windowsill cat that tracks the player; washing lines
between closes; a gull that steals a litter comic and must be chased; a rat
dragging a chip; Hibs graffiti whose scoreline changes by real date; the dock
fog horn at night; a slippable close; silhouettes in lit windows; **the tram
ghost on the dead rails — ships before E6b, then becomes the night service
when the living tram exists (see E6b for the resolution)**.

Survey-fed additions (E2 phase gate, attributions inline):

- **Windows that change while you watch** (cf. Pixel City, Shadertoy's
  night-city pieces): per-window lit/dark state hashed on
  `(windowID, floor(simTime/interval))` so lights come on and go off during a
  walk — the temporal half is what turns "texture with bright spots" into
  "someone's in". `src/windows.js` already owns the spatial half; this is a
  hash tweak, possibly the cheapest delight on the list.
- **Sourceless distant one-shots** (cf. L.A. Noire's ambient design): a door
  slamming up a side street, a dropped bottle, shouting in Scots two streets
  over — direct signal cut, reverb kept, long randomised timers. The
  inhabited world extends past the geometry precisely because the source is
  never findable.
- **Interrupted-moment vignettes** (cf. Don Carson's theme-park
  environmental storytelling): a kettle on a camp stove by a stall, a
  half-played dominoes game on a crate, a chalked price list corrected three
  times — each prop cluster implies a person who stepped away thirty seconds
  ago. Population without polygons.
- **Coherent per-block history, not per-building noise** (cf. Dwarf
  Fortress): roll "what happened here" per block from the seed (this block
  burned, that one's looted-but-standing) and let dressing follow. "Today
  the chippy survived" is a shareable sentence; independent per-building
  noise is not.
Delight-arc additions (2026-08-01, from the comics themselves):

- ~~**McGrot sightings.**~~ **Superseded by E10a (E3 phase gate,
  2026-08-07):** McGrot has an address now — the Gullet — and the cryptid
  mechanic became date-seeded presence there. The share thesis survives as
  "McGrot was in the day".
- **Pomple.** The dug — both sample comics feature the same wee dog, and
  his name is Pomple (Dan, 2026-08-01). He exists: a recurring dog that
  follows vendors, sometimes the player, and appears in the background of
  McGrot sightings. The mascot agent bridging comics and street. NPCs know
  him by name ("that's Pomple, he's fine").
- **Comic prophecy — zipline approved as the first prop (Dan, 2026-08-01).**
  Transcribed comics reference events and objects — "The Leith Walk Drop"'s
  GRAVYTHON 5000 zipline fondraiser ran "Top of Leith Walk to Dockside", so
  some days the rig is simply there: a cable off the roofline, a banner, a
  ladle on a pulley. NPCs point at the evidence. Build as a small
  comic-derived-prop library, date-seeded like everything else; the zipline
  is prop #1.
- **Meeting at the statue.** NPCs arrange to meet "at the statue" (Queen
  Victoria, the Foot — Leith's meeting point since 1907), and are found
  waiting there. "PERSEVERE" signage, "Leithers Don't Litter" stickers and
  the boundary plaque join the set-dressing trickle (`docs/LEITH.md` §2).
- **One true voice — APPROVED (Dan, 2026-08-01)** (cf. Pine Point, the
  Kowloon shop captures: mundane specificity carries the grief): amid 417
  readers of garbled comics, ONE vendor says something real and ordinary
  about their actual shop — the loudest moment in the piece. Verbatim rule
  untouched (new speech, not corrected garble). Scope: pick the shop with
  Dan (a real, photographed one with a documented history — Valvona &
  Crolla territory), write the lines from true detail (opening hours, what
  the shop sold, a real name), hero-cast TTS voice from the daily trickle.
  Lands with E4's cast work; unmarked, undiscoverable by UI — found only by
  listening.

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
