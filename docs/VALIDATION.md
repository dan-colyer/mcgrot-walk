# The validation rig (E0.2)

Replaces the retired blind-eval harness (agent fleets scoring screenshots
against a rubric — see the ROADMAP retrospective). This is the fast
alternative: a documented in-game test API (`src/debug.js`,
`window.__mcgrotDebug`) plus a headless smoke harness (`scripts/smoke.mjs`),
so any AI session — or human — can verify the game in minutes. **Run it
before every deploy and after every milestone.**

**E1 (terrain incline):** the camera now follows ground elevation every
frame — `src/controls.js`'s `update()` and every `src/debug.js` pose
(`goto`/`gotoBookmark`/the `skyline` custom pose) set camera Y from
`world.groundHeight(x, z) + EYE_HEIGHT`, not a flat constant. `src/terrain.js`
is the sole height authority (pure function of chainage, no PRNG — see its
header comment) and every subsystem that places geometry on the ground
threads `world.groundHeight` through. The Forth (`src/forth.js`) is
deliberately impressionistic — a water plane + far-shore silhouette north of
the Foot, dissolved by the existing (untouched) fog. It is **occluded from the
straight-ahead ground-level view at the Foot by a real OSM building at the
street's north terminus** — as the real Foot of Leith Walk is; the water reads
from the descent and from angles that clear that building. Accepted as
faithful, not a bug (Dan's call, E1 review).

**E2a (the light — time-of-day):** `src/atmosphere.js` is the sole authority
for "what the light is like right now", the same role `src/terrain.js` plays
for height. `dbg.setTime(h)` is now real (no longer a stub) and **freezes the
day/night cycle** — it sets the atmosphere's own rate to 0, independently of
`pauseAuto()`/`controls.setYFollow(false)` freezing the camera. Always call
it when posing a frame. There is no `resumeTime()`: once frozen, the cycle
stays pinned at whatever hour `setTime` last set until either you call
`setTime` again or reload the page (which reseeds the start hour from the
current date).

The atmosphere drives three channels every frame (see the E2 brief for the
full rationale): scene lights + fog colour, `renderer.toneMappingExposure`,
and a **tint registry** over every unlit `MeshBasicMaterial` in the scene —
façades, name-plates, litter comics, the Forth's far shore and NPC
faces/comics all ignore the light rig entirely (`MeshLambertMaterial` doesn't),
so dimming lights alone left them pixel-identical to full daylight even at
6% brightness (the finding that motivated this milestone). The registry
re-scans the scene every ~30 frames (materials created lazily, e.g.
`shopfronts.js`'s per-page meshes, need picking up after the fact) and skips
any material with `userData.unlit === false` (the arc-flash spark,
`src/scenery.js`, and the lit-windows glow, `src/windows.js`, both opt out —
they're meant to stay bright regardless of time of day).

`src/windows.js` places small warm glow quads on upper-storey street-facing
frontage, seeded via `hash32` (no PRNG — see Determinism below), and fades
them in as darkness falls; `src/world.js`'s player torch scales its
intensity/distance the same way (near-off at midday, full reach at night —
"torchlight noir" per Dan's E2 call). Weather is still a stub
(`dbg.setWeather` is a no-op) — the palette table is authored as a two-axis
`paletteAt(hours, weather)` lookup with only the `overcast` column populated,
so E2b can add columns without rewriting it.

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
   within ±10% of `docs/smoke/budget.json`'s baseline for that pose. A
   bookmark that renders **0 draw calls** fails outright (a scene pose can
   never legitimately be empty) and its golden/baseline is left untouched —
   this stops a transient WebGL/GPU capture failure under `--update-goldens`
   from silently baking a blank frame as the new golden.
4. **Determinism** — `invariants().geomHash` identical across two independent
   fresh page loads. Non-negotiable: a mismatch means something that should
   be seeded/static changed between runs — see "Determinism" below.
5. **Goldens** — a screenshot at each bookmark, pixel-diffed against
   `docs/smoke/goldens/<id>.png` (pixelmatch, 0.1 per-pixel threshold, 0.5%
   changed-pixel tolerance).
6. **Time pinned** (E2a) — `invariants().time === SMOKE_HOUR` (13) and
   `rate === 0` after the bookmark sweep. `bootPage()` pins the clock via
   `setTime(SMOKE_HOUR)` immediately after `pauseAuto()`, before any capture
   — without this, atmosphere's date-seeded start hour would change every
   golden (and the facade-darkening pose below) once a day.
7. **Sky/fog linked** (E2a) — `invariants().skyFogLinked` is `true`: an
   identity check (`sky.uniforms.uFog.value === scene.fog.color`) that catches
   "THE SEAM" failure mode in `src/sky.js` — a `scene.fog.color = new
   THREE.Color(...)` reassignment anywhere would leave the sky dome pointing
   at a stale object even if the colours still looked plausible.
8. **Night darkens façades** (E2a) — the numeric anti-regression for the
   finding that motivated this milestone. Captures `mid-805-far` at 13:00 and
   again at 22:00, computes mean luminance of the upper half of each frame
   (façade + sky, not road), and fails unless the 22:00 mean is ≤45% of the
   13:00 mean.
9. **Torch lights a readable surface** (E2b) — stands the camera 2m from
   whichever litter comic is farthest from any NPC (avoiding the always-bright
   NPC name-label sprite and the DOM interact prompt, neither of which respond
   to scene light and would otherwise swamp the read) at 03:00, screenshots,
   zeroes the torch's `PointLight.intensity` and forces a direct
   `renderer.render()` (not `stepFrame` — the `torch`/`atmosphere` updaters
   both recompute that intensity from time-of-day every frame and would
   silently undo the override), and fails unless the torch-on mean luminance
   of a centred crop is ≥2.5× the torch-off reading. Demonstrated to fail
   (1.76×) with the litter conversion (`src/litter.js`) reverted back to
   `MeshBasicMaterial` — the only one of E2b's six conversions actually
   tested this way, since the check's centre-crop sits on a litter comic and
   can't be sensitive to the other five (the Forth shore or an NPC face, for
   instance, never appear in that crop). A check that can't fail is worse
   than no check, but the claim is scoped to what was measured.
10. **Clipped highlights** (E2c.1) — `clip-clear:<bookmark>` and
    `clip-control:<bookmark>`: the % of pixels at ≥250 on all three channels,
    for `clear` and for the `overcast` control respectively, failing above
    0.1%. This is the guard on `LIT_ALBEDO_GAIN` (`src/lighting-constants.js`),
    which was tuned against *overcast* irradiance — a stronger directional sun
    can blow the six converted materials out, and the face-up litter comics
    clip first. If it ever fails, bring the offending weather column's
    `exposure` down; do NOT lower the shared gain, which would drag overcast
    back out of the ±10% band E2b.1 established.
11. **Clear goldens** (E2c.1) — `golden-clear:<bookmark>` at 13:00 for all
    eight, plus `golden-clear:mid-805-far-08` at 08:00 (low sun, so the
    shadowed side of the street is visible). Same capture-or-compare path and
    same 0.5% tolerance as the overcast goldens.
12. **Weather transitions** (E2c.1) — `setWeather` reaches its target and
    clears the transition; the midpoint's exposure sits strictly between the
    two endpoints; and a midnight wraparound taken *mid*-transition leaves the
    transition intact with no console errors (the bracket wrap and the
    weather blend interacting is the sharp edge).
13. **Draw calls ±0** (E2c.1) — `draw calls +/-0 (E2c.1)` restates the
    per-bookmark budget check as exact equality rather than the ±10%
    tolerance. Measured on the FIRST, fresh-boot pass only: revisiting a
    bookmark later catches a different set of leithers/NPCs/vermin/birds,
    which are real-time simulated rather than seeded-static (the same
    exclusion the geomHash makes), so a second pass would false-fail.
14. **Shared AudioContext** (E2e.1) — after the title-card gesture,
    `proximityAudio.listener.context` and `ambience.context` are the *same
    object* (identity, not just both non-null) and that context's `state` is
    `running`. Guards against the two subsystems building independent
    `AudioContext`s again — see "Mobile pass" below for why that mattered.
15. **DPR cap enforced on resize, below and above the cap** (E2e) —
    `renderer.getPixelRatio()` equals `Math.min(devicePixelRatio, DPR_CAP)`
    after `main.js`'s real `resize` handler runs, asserted at two device pixel
    ratios. Both matter: every smoke context runs at the default scale factor,
    where `devicePixelRatio` is 1, and `min(1, cap)` is 1 for any cap — so the
    native reading alone still passes with the cap deleted. The second reading
    spoofs `devicePixelRatio` to `DPR_CAP + 1`, which is what actually puts the
    clamp under test. The DPR *timing* table (logged, not gated — see "DPR
    timing is informational" below) is a separate, non-gating measurement.
16. **`fogDensity` blends across the time-of-day bracket** (E2c.3a) — at 06:30
    on `clear`, the live `scene.fog.density` sits strictly between hour 5's
    0.0095 and hour 8's 0.0022. Reads the fog object, not the palette struct,
    so it also covers `applyPalette` writing the value through. The 5→8
    bracket is chosen because it is the only one whose two stops differ: a
    mid-sample inside a bracket of equal stops has nowhere to land but the
    endpoint value, and the check could not fail.
17. **`fogDensity` blends across the weather transition** (E2c.3a) — the same
    strictly-between assertion at the midpoint of the `clear`→`overcast`
    transition already captured for check 12, at 13:00 where the two columns
    genuinely differ (0.0022 vs 0.0095). Checks 16 and 17 are separate gates
    because the two lerps are separate code paths: `samplePalette` (between
    two hour stops) and `blendPalette` (between two weather columns).
    Demonstrated independent — disabling `blendPalette`'s `fogDensity` line
    reddens 17 and leaves 16 green; disabling `samplePalette`'s reddens both.
18. **A throw in the shared-AudioContext preamble does not swallow the
    ambience** (E2c.3a item 0) — a fresh context sets
    `window.__mcgrotForceAudioContextError` via `addInitScript`, which makes
    `main.js`'s title-card `onEnter` throw inside its `try` before
    `ambience.start()`. The check fails unless both `ambience.context` and
    `proximityAudio.listener` still exist afterwards. The flag is
    localhost-gated in `main.js` and the fault runs in its own browser
    context, so the shared `page1` never sees it. This is a fail-soft gate,
    **not** a fix for the open iOS silence — see `docs/ROADMAP.md`.
19. **`fogDensity` axis is ordered: haar > overcast > clear** (E2c.3b) — read
    live off `scene.fog.density` at 13:00 for all three, plus a named floor of
    0.02 so it cannot pass off a near-zero value. See "Haar" below.
20. **Draw calls exactly +0 (haar)** (E2c.3b) — haar is fog only, so it adds no
    geometry: exact equality against the matched `overcast` control pass, not a
    tolerance. Same machinery as rain/drizzle's `+1`. See "Haar" below.

    Note what these two do **not** cover: every weather column is gated at
    13:00 only. A density authored wrongly at an hour no golden and no
    ordering check visits — a night stop, say — passes everything here, and
    the 24h sweep only catches a *throw*, not a wrong number. Verified: an
    hour-0 density sabotage in `HAAR_STOPS` produced a completely green run.

### The fog-density axis, and why it landed in two commits (E2c.3a)

`fog.density` is palette-driven (`fogDensity`, `src/atmosphere.js`) rather than
the old hardcoded `0.0095`. `src/world.js` still constructs the fog at 0.0095
as the boot default before the first `applyPalette`.

Density multiplies every pixel of every frame, so a global change moves all 27
desktop goldens in the same commit that introduces the risk. It was split:
`e5f5b20` added the axis pinned at 0.0095 everywhere and touched **no** golden
file; `1ac1990` retuned `clear`'s three daylight stops (08/12/17) to 0.0022 and
recaptured **exactly** the 9 `-clear` goldens. The 18 non-clear goldens are the
invariant that proves the change stayed inside its column — if one of them
moves, suspect the blending, not the tuning. Keep that shape for haar and for
night reach.

**`LOAD_RANGE` (250m, `src/shopfronts.js`) needed no widening at 0.0022**, and
the pixel-diff that first suggested so was not evidence: comparing a 250m run
against an all-pages-resident run reads ~0.23% at `skyline`, but re-running
*the same build twice* reads ~0.24%, so the signal sits under the harness's own
jitter. The measurement that does work removes the noise entirely — load every
page, then toggle `.visible` on just the ones 250m would have left out and
re-render **the same frame** with `renderer.render` (no `stepFrame`, so nothing
in the simulation advances). On that basis: 0 pixels differ at all eight
bookmark poses, and walking the street at eye height looking along the corridor
from chainage 100 to 1500 in both directions, the worst stop is 263 pixels
(0.026%) — one small cluster at the vanishing point. Peak residency is 4 of 8
pages (~268MB of atlas texture at ~67MB per 4096² page). Re-measure this way
before thinning any further.

### Haar — the thick end of the fogDensity axis (E2c.3b)

`haar` is authored, not derived (see `src/atmosphere.js`'s `HAAR_STOPS`): it
sits outside both `overcast`/`clear`'s density and `rain`'s colour, so there
is nothing to blend it from. Shipped `fogDensity` is 0.03 at every stop, flat
across the day — measured against the far-façade legibility of the opposite
side of the street (~12-15m across, ~18% fogged at 0.03) and `interact.js`'s
8m `RANGE` (~21% fogged there — an NPC reads long before the prompt could
fire). The far façade is the tighter constraint: it starts failing by ~0.05
(~43% fogged), well before 8m interaction would.

Two new gates, both demonstrated failing before being trusted (temporarily
authoring `HAAR_STOPS.fogDensity` at 0.005 reddened the ordering gate;
temporarily wiring `rain.setIntensity` into the haar branch reddened the
parity gate):

- **`fogDensity` axis is ordered: haar > overcast > clear** — reads
  `scene.fog.density` live for all three at 13:00, plus a named floor
  (0.02, comfortably below the shipped 0.03) so this can't pass by accident
  off a near-zero value.
- **Draw calls exactly +0 (haar)** — the same matched-control machinery
  `captureWeatherPass` already uses for rain/drizzle's `+1`, but haar's own
  claim is *zero* new geometry: a fog-only weather adds no draw calls versus
  the identical-sequence `overcast` control pass.

`WEATHER_CHAIN` (`scripts/smoke.mjs`) is an Eulerian circuit over the complete
directed graph on all 5 weathers now (20 ordered pairs, 21-entry chain) —
built by decomposing the graph into 4 edge-disjoint Hamiltonian cycles (step
sizes 1-4 mod 5, each a cycle since 5 is prime) and merging them at a shared
node, rather than hand-arranging 20 pairs. A night capture at 22:00
(`mid-805-far-haar-22.png`, `docs/smoke/captures/`, gitignored, not gated) is
evidence for E2c.3c's `TORCH_DISTANCE` call, not a claim this milestone makes
about night reach.

### `elm-row-hero` is bimodal, and it is the harness's fault (E2c.3b review)

**A full `npm run smoke` on an unmodified, committed tree failed** at
`golden-haar:elm-row-hero`, 0.680% against the 0.5% tolerance. It is not a haar
defect and not a regression — haar is simply the first column whose numbers sat
close enough to the line to expose a pre-existing flake.

`elm-row-hero` is the pose where an ambient **leither** ends up closest to the
camera, so a small difference in its walk phase moves thousands of pixels.
Leithers are real-time simulated, not seeded-static — the same exclusion
`computeGeomHash` makes.

**The mechanism is measured, not inferred** (probes run while planning
E2c.3b.1). Three findings, in order of how much they change what you'd do:

1. **The pre-pause frame count varies.** `window.__mcgrotDebug` only exists
   after `main()`'s async asset load, so the harness cannot call `pauseAuto()`
   until `animate()` has already run some frames. Wrapping
   `requestAnimationFrame` in a Playwright `addInitScript` and counting
   callbacks gives **13 to 20 frames** across 20 boots.
2. **Each of those frames advances the sim by exactly 0.1 s.** `main.js` clamps
   `dt = Math.min((now - lastFrame) / 1000, 0.1)`, and every SwiftShader frame
   costs more than 100 ms, so the clamp is always active. Leither state is a
   pure function of an *integer*, which is why the diff is discrete-modal
   rather than a jitter band. Summed chainage over the 30 walkers reproduces to
   six decimal places whenever the count repeats:

   | rAF frames | Σ chainage (30 walkers) |
   |---|---|
   | 17 | 20182.038027 |
   | 18 | 20182.528630 |
   | 19 | 20183.019648 |

3. **Roughly +0.3% of pixels per extra frame, at this pose in the haar pass.**
   Replicating `captureWeatherPass('haar', …)` exactly: 0.277% at 19 frames,
   0.571% and 0.585% at 20. That reproduces the six-boot history below and puts
   the 0.680% failure one further frame out.

Two traps this exposed, both of which cost a probe each:

- **Footprint is sequence-dependent.** Hiding the real-time set moves
  `elm-row-hero` by **1.49%** during the haar pass but by **~0.00%** during the
  first bookmark pass — the 700 settle frames are what walk someone into shot.
  Measure inside the pass you actually care about.
- **Frame count is not the only source.** Two boots with identical rAF counts
  and byte-identical Σ chainage still differed by ~0.09% at this pose when the
  pose was visited directly. Async façade-page decode is the likely second
  source (`settleAt`'s own comment describes exactly this hazard). It is small,
  but do not expect a frame-count fix alone to produce 0.000%.

The behaviour is **discrete-modal, not jittery**. Six fresh boots per weather at
13:00, same sequence every time:

| pose | overcast | haar |
|---|---|---|
| `elm-row-hero` | **0.118% once, 1.18–1.26% five times** | **0.255–0.273%, one excursion to 0.576%** |
| `north-250-far` | 0.245–0.271% | 0.491–0.592% |
| `foot-1500-far` | 0.336–0.346% | 0.375–0.386% |
| `skyline` | 0.203–0.221% | 0.114–0.120% |
| the three no-sky poses | 0.000% every run | 0.000% every run |

(Absolute values differ from a real smoke run — the probe's boot sequence is
not identical — but the *spread* is the point, and only `elm-row-hero` has two
distinct states rather than a narrow band.)

**Interim measure:** `FLAKY_POSES` in `scripts/smoke.mjs` gives `elm-row-hero`
a measured 2.5% tolerance in every weather. Every other golden keeps 0.5%. That
still gates real regressions at this pose — a deliberate density sabotage moved
`elm-row-hero-haar` by 31.6% — while not red-lighting a clean tree, which is the
failure mode that teaches people to re-run until green. Keep the map as short as
the evidence makes it.

**The real fix** is a deterministic boot, so the real-time set lands identically
on every run — with the pre-pause frame count pinned at zero rather than left to
machine load. It moves every golden that has a leither, gull or rat in frame, so
it is scheduled on its own rather than smuggled into a weather milestone — see
E2c.3b.1 in `docs/ROADMAP.md`.

### DPR timing is informational, not a GPU measurement

`scripts/smoke.mjs` logs a `mean`/`p95` frame-cost table at DPR 1, 1.5, 2 and
the context's unclamped `devicePixelRatio`, via `console.log`, not a `results`
row — it used to be a hardcoded `pass: true` row, which is honest labelling
but still counted toward the headline check total for a number that measures
the wrong thing. As "Why the suite is fast" below explains, headless
Chromium's `renderer.render` only *queues* commands — the raster lands at the
next `await` — so `performance.now()` timing around a stepped frame measures
command submission, not drawing. That's why the table reads flat across DPR
1/1.5/2 (in one run, *faster* at 2× when 2× DPR is 4× the fragment work): it
isn't measuring the fragment work at all. The true per-frame cost (~160 ms at
the `skyline` pose) only shows up as wall-clock runtime, never in this table.
Treat it as a rough sanity log, not a real-device benchmark. What IS gated is
check 15 above: the cap itself is applied correctly after a resize.

## Mobile pass (E2e / E2e.1)

A second smoke pass at a phone-shaped viewport (390×844), with touch mode
forced via `dbg.setTouchMode(true)` rather than Playwright's own touch
emulation — `hasTouch: true` on the browser context is still set (Chromium
needs it to accept synthetic `PointerEvent`s with `pointerType: 'touch'`), but
the *UI's* touch/keyboard branching is driven by the `html.touch` class the
same way it is in production, not by whatever Playwright's context reports.

What it checks, in order:

- **Touch class driven by `setTouchMode` in both directions** — forces the
  class off, then on, and asserts each transition. Checking only "on" cannot
  fail: this context is built with `hasTouch: true`, under which Chromium
  reports `any-pointer: coarse` at boot, so `html.touch` is already set
  *before* `setTouchMode` is ever called (measured, E2e.1 item 3).
- **Golden: title card** (`mobile-title.png`), before dismissal. `#title-enter`
  pulses (`title-pulse`, opacity 0.75→1 over 1.8s), so the capture pins that
  animation to a fixed frame alongside the usual fade kill — otherwise the
  screenshot records whatever phase the wall clock is at, measured 0.595% to
  2.680% run-to-run against a 0.5% tolerance. It happened to read 0.000%
  inside a full run because the elapsed time to the mobile pass is repeatable;
  that stability was accidental and any check added earlier would break it.
- **Golden: HUD at spawn** (`mobile-hud.png`), touch copy visible
  (`drag — look`, not the desktop `WASD — move, drag — look` — desktop
  copy stays byte-identical, only the touch-class branch changes).
- **Torch defaults on with no stored preference** — this context has no
  `localStorage` entry yet, so `mcgrot-torch-on` reads `null` and the toggle
  must default active.
- **Hold-to-walk moves the camera; releasing stops it** — dispatches real
  `pointerdown`/`pointerup` `PointerEvent`s at `#touch-forward`, steps 30
  frames held and 30 after release, asserts the held distance clears a floor
  and the post-release drift stays near zero.
- **Golden: comic overlay** (`mobile-comic.png`) — opened via the keyboard `E`
  path (the overlay itself has no touch-specific code path; the *reachability*
  of `#npc-prompt`'s tap is what item below checks).
- **Torch toggle darkens the rendered frame** — at night, mean centre-crop
  luminance with the torch on vs. clicking `#torch-toggle` off; must drop by
  at least 10% (measured drop at the brief's pose was 35.2%, so this leaves an
  enormous margin against the 0.000–0.133% capture-jitter band).
- **Tap targets ≥44×44 CSS px and reachable** (E2e.1 item 2) — for every
  interactive target, both `getBoundingClientRect` size *and*
  `document.elementFromPoint` at the target's own centre returning the target
  itself (or a descendant). Rect size alone doesn't prove a tap lands: E2e's
  original `#touch-forward` sat centred over the bottom of `#npc-prompt` and
  both measured ≥44×44, yet a tap at the prompt's centre actually hit the
  button underneath. Fixed in E2e.1 by moving `#touch-forward` to bottom-left,
  mirroring `#torch-toggle` at bottom-right, so the centre column is clear.
- **No target intrudes on a simulated safe area** — overrides the `--safe-*`
  CSS custom properties directly (`src/index.html`'s `:root`) rather than
  `env(safe-area-inset-*)` itself, because `env()` reflects the *real* device
  notch/home-indicator and can't be spoofed from JS or a Playwright context
  option — there is no way to make headless Chromium report a fake one. The
  custom properties are what every safe-area-aware rule in the stylesheet
  actually reads (`calc(26px + var(--safe-bottom))`, etc.), so overriding them
  exercises the exact same CSS path a real notched/home-indicator device
  would, without needing real device hardware.
- **Golden: street view** (`mobile-street.png`), touch mode still forced.
- **Console clean**, same bar as the desktop pass.

### Why 390×844

A common modern-iPhone-class viewport (iPhone 12/13/14 CSS size) — narrow
enough to exercise the `@media (max-width: 480px)` comic-overlay layout, tall
enough that the safe-area math (home-indicator strip, notch) is meaningfully
different from a square or desktop aspect.

### The `-mobile` goldens

Four PNGs in `docs/smoke/goldens/`, separate from and never diffed against
the 35 desktop goldens: `mobile-title.png`, `mobile-hud.png`,
`mobile-comic.png`, `mobile-street.png`. Same capture-or-compare path as the
desktop goldens (`checkGolden`, 0.1 per-pixel threshold, 0.5% tolerance) — the
only difference is the viewport and the forced touch class. To recapture,
delete only these four files and run a normal `npm run smoke` (never
`--update-goldens`, which recaptures every golden, desktop included).

## Why the suite is fast, and how to keep it that way

**Headless Chromium here has no GPU.** It rasterises in software — the WebGL
context reports `ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device), SwiftShader
driver)`. At the `skyline` pose (945 draw calls) **one rendered frame costs
~160 ms of wall-clock**, against ~2 ms of JavaScript.

That cost is invisible from JS. `renderer.render` only queues commands and
returns; the raster lands at the next `await`. So per-frame timing taken with
`performance.now()` around `stepFrame` — including `measureFrameTiming`'s —
measures command submission, not drawing, and will happily report ~2 ms for a
frame that takes 160 ms. Never size a settle from that number.

The suite used to draw every frame of every settle: 156 renders per bookmark
visit, six 700-frame weather settles, 52 ninety-frame quick settles — roughly
14,000 frames nobody ever looked at, and **42 minutes** of runtime. Settles now
run simulation *without* drawing and render only the frame that gets captured
(`updateFrame` in `src/main.js`, `stepFrames` in `src/debug.js`). Same updater
sequence, same `dt`/`t`, same frame count — so the settled state is identical.
Runtime is **~4.5 minutes**, and all nine no-sky golden captures still read
exactly 0.000%.

Rules that keep this true:

- **`stepFrames(n)` must run exactly `n` updater calls**, with only the last one
  drawing. One extra frame of simulation moves every golden.
- **Some frames must still render.** `invariants()` reads
  `renderer.info.render`, which only updates on a draw; `settleAt`'s
  post-texture-wait frames exist because texture upload happens on render. Don't
  "optimise" either into `updateFrame`.
- **Do not enable a real GPU to make this faster.** SwiftShader is a
  deterministic software rasteriser: identical pixels on any machine, any time.
  A hardware rasteriser differs by vendor and driver in texture filtering and
  shader rounding, so every golden would need recapturing and would then be tied
  to one machine's GPU and driver version — a macOS update could move them.
  Worse, a forced-GPU flag can silently fall back to SwiftShader, so you would
  not know which rasteriser produced a given golden. The determinism is the
  point; the speed has already been taken from elsewhere.

## The debug API (`window.__mcgrotDebug`)

Hostname-gated to `localhost`/`127.0.0.1` (see `src/main.js`) — inert
everywhere else, including the shipped GitHub Pages build, even though
`src/debug.js` is a few KB in the bundle.

```js
const dbg = window.__mcgrotDebug;

await dbg.goto(550, 'east', 'close');   // chainage (m from north end), side, distance
await dbg.gotoBookmark('elm-row-hero'); // one of dbg.bookmarks
dbg.face(x, z);                         // look at a world XZ point, at current eye height
dbg.invariants();                       // -> {drawCalls, triangles, geomHash, updaterCount, updaterNames,
                                         //     consoleErrors, time, rate, skyFogLinked,
                                         //     weather, weatherTransition, exposure}
dbg.bookmarks;                          // the curated ~8-pose golden set
dbg.setTime(14);                        // E2a: real — sets the hour AND freezes the day/night cycle (rate -> 0)
dbg.setWeather('clear');                // E2c.1: real — starts a ~10s transition (falls back to 'overcast' for any other name)
dbg.setRate(1);                         // E2c.1, TEST-ONLY: un-freeze the clock without resumeAuto() — the only way to
                                         //   drive a wraparound under stepFrame, since setTime() always freezes it
dbg.pauseAuto(); dbg.resumeAuto();      // stop/restart the live rAF loop (see "Determinism")
dbg.stepFrame(1/60, t);                 // manually advance one frame (back-compat, pre-E0.2 probe)

dbg.world.groundHeight(x, z);           // E1: metres of elevation at a world XZ point
dbg.world.setExaggeration(k);           // E1: live vertical multiplier on the terrain profile (default 1.0)
dbg.world.getExaggeration();
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
| `time`/`rate` (E2a) | `src/atmosphere.js`'s current hour (0..24) and cycle rate (hours/real-minute; 0 when frozen) | A pose that should be stable (any `gotoBookmark` after `setTime`) but reports `rate !== 0` means something called `setRate`/resumed the cycle after your `setTime` — the frame will drift under repeat capture. |
| `skyFogLinked` (E2a) | `sky.uniforms.uFog.value === scene.fog.color` (object identity, not colour equality) | `false` means "THE SEAM" in `src/sky.js` broke: something reassigned `scene.fog.color` to a new object instead of mutating the existing one in place. Bisect recent changes to `src/atmosphere.js`'s fog handling or anything touching `world.fog`. |

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

**E2a note:** `src/atmosphere.js` seeds its start hour from the real
calendar date (`hash32` over `YYYY-MM-DD`, no PRNG), so it changes once a day
but is otherwise deterministic and doesn't touch `geomHash` at all (lights,
fog colour and material tints aren't part of the hash). `scripts/smoke.mjs`
pins the clock to `SMOKE_HOUR` (13) immediately after `pauseAuto()` on both
boots, so the date-seeded hour never reaches a golden or the determinism
check.

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
- Goldens were **recaptured wholesale for E1** (terrain incline) — camera
  heights and horizons shifted street-wide, exactly as anticipated here.
  Every bookmark was eyeballed post-recapture: buildings terrace onto the
  slope without floating or sinking, entities (NPCs, litter, bins, cars,
  bushes) sit on the ground at every chainage checked, and shopfronts stay
  flush with the pavement. The `skyline` pose (hand-picked absolute camera
  Y — see its `custom: true` def in `src/debug.js`) needs special handling:
  E1's per-frame ground-follow clamp (`controls.js`) would otherwise pull its
  Y=15 straight back down to ground+eye. That clamp is now suspended whenever
  auto-animate is off — `pauseAuto()` calls `controls.setYFollow(false)`
  (`main.js`), so while the harness (or a human debugging) drives the world by
  `stepFrame`, the debug API fully owns the camera and a posed elevation
  survives `invariants()`/screenshot. Terrain-follow resumes with `resumeAuto()`
  / live play. From this point on the tolerance again protects against
  accidental drift, not intentional change.
- Goldens were **recaptured wholesale for E2a** (time-of-day) — every pose
  now renders at `SMOKE_HOUR` (13:00) rather than whatever hour a stub
  `setTime` left it at previously, and the noon keyframe's palette differs
  slightly from the old always-on lighting rig's fixed values, so every
  bookmark shifted a little even though nothing else about the geometry
  changed. Eyeballed post-recapture: façades/name-plates/litter read at full
  daylight brightness at 13:00 (tint ≈ (1,1,1) at noon, fading toward the
  17:00 keyframe by 13:00), the horizon seam is intact at every bookmark, and
  no lit-window glow is visible in full daylight (`windowGlow` is 0 at the
  noon keyframe).
- Goldens were **recaptured wholesale for E2b** (the lit street) — every
  bookmark shifted, expected: façades, name-plates, litter comics, NPC faces
  and held comics, and the Forth's far shore all switched from
  `MeshBasicMaterial` (fixed texture × exposure, ignoring scene lights) to
  `MeshLambertMaterial` (texture × incoming light), so a daylight frame is no
  longer flat — a wall facing the sun reads visibly brighter than one facing
  away, which is the whole point of the milestone (see the E2b brief in
  `docs/ROADMAP.md` for the "why"). Still unlit by design, and
  correctly untouched: the arc-flash sparks (`src/scenery.js`) and lit-window
  glow (`src/windows.js`), both `userData.unlit = false`; the sky dome; every
  `SpriteMaterial` (NPC name labels, Leither speech bubbles). Eyeballed
  post-recapture at every bookmark: no black façades, every fascia/name-plate
  still legible, the curved corner at `mid-805-far` and the terrace at
  `elm-row-hero` both show real directional shading without any surface
  crushing to black. `fascia-close`'s close-up signage is within ~2% of its
  E2a full-frame luminance (see the E2b.1 note below) — genuinely "the same
  as before, just lit," not merely close in the upper-half metric.
  - **The tint registry is now a no-op with the current material set.** Its
    only remaining candidates (`isMeshBasicMaterial`) are the arc sparks and
    window glow, and both opt out via `userData.unlit = false` — so the
    registry adopts nothing and `applyTint()` iterates an empty map. Kept
    anyway (not deleted) per the E2b brief: it's mechanism, not a specific
    tinted surface, and E2c's weather work may reintroduce unlit surfaces
    that want it. The prune-on-rescan fix (drop registry entries whose
    material is no longer reachable in the scene) was verified with a
    synthetic probe since no real in-game material currently exercises it:
    clone an existing `MeshBasicMaterial`, opt it back into tinting, add it
    to the scene, let a rescan adopt it (registry: 0→1, confirmed by
    tinting toward a changed time), remove it from the scene, let another
    rescan run, and confirm its colour stops changing on a further time
    change (registry back to 0 — the disposed-material leak the brief
    described no longer accumulates).
  - **The torch distance is clamped above zero** (`src/world.js`,
    `setDarkness`) — `THREE.PointLight.distance === 0` means *unbounded*
    range, not off. Inert while every authored `torch` keyframe stays > 0,
    but a future E2c "sunny" column written as `torch: 0` would otherwise
    silently light the entire street.
  - **A real render race was found and fixed along the way**
    (`src/debug.js`'s `settleAt`): a shopfront page's texture can finish
    decoding *after* the settle loop's last render, and — separately — a
    completed decode doesn't reliably reach the GPU within one further
    synchronous render call; the browser's own upload/decode bookkeeping
    needs an actual macrotask boundary to catch up, which a tight
    `for` loop of `stepFrame()` calls never yields. Fixed by re-rendering a
    few times after the texture-wait with a real `await setTimeout(...,0)`
    between each. Without this, `gotoBookmark`/`goto` could non-deterministically
    return with a page's just-loaded texture rendered fully black — caught
    while investigating a bookmark that looked black only when reached via a
    multi-bookmark sequence, not in isolation.
  - **A second, distinct bug turned up alongside it**: `shopfronts.js`'s
    `loadPage()` used to construct a brand-new `MeshLambertMaterial` on every
    single page load, discarding the old one via `.dispose()` in
    `unloadPage()`. Under rapid load/unload churn (several pages swapping in
    one bookmark jump), disposing one Lambert material could corrupt the
    WebGL shader program shared by other, still-live Lambert materials with
    an identical program signature — those materials would then render
    fully black despite completely valid geometry, normals, texture and
    light state (confirmed by direct inspection: none of those were at
    fault). `MeshBasicMaterial` never hit this — its simpler, less varied
    program signature was apparently not exercising whatever the underlying
    sharing bug is. Fixed by giving each page ONE persistent material,
    created once and reused across every load/unload cycle (`unloadPage` now
    only clears `.map`, never disposes or recreates the material itself).
- **E2b.1 correction — the daylight blowout.** E2b's first pass compensated
  for Lambert's `1/π` falloff by lifting the *global* light rig (hemi
  3.9→21.5, ambient 1.4→8.0) instead of the six converted materials. The
  road, pavement, NPC coats, cars, flora and other pre-existing
  `MeshLambertMaterial` surfaces were never part of the conversion and took
  the full 5.5× lift with nothing to offset it — full-frame luminance rose
  43–99% across all eight bookmarks, with the road roughly tripling. The
  acceptance check at the time measured upper-half luminance only, which
  hides the road; fixed by reverting every light-intensity change in
  `src/world.js`/`src/atmosphere.js` back to their E2a values and instead
  raising the six converted materials' own colour by a shared
  `LIT_ALBEDO_GAIN` constant (`src/lighting-constants.js`), tuned to 4.7.
  Full-frame luminance at all eight bookmarks is now within ±10% of the E2a
  golden (see the table below); night is correspondingly darker than E2a
  (accepted as intent — the torchlight-noir look this phase is for).

| Bookmark | Full-frame | Upper-half | Lower-half (road) |
|---|---|---|---|
| elm-row-hero | +4.7% | +6.4% | +1.1% |
| fascia-close | -1.7% | -1.9% | -1.3% |
| foot-1500-far | +2.5% | +2.9% | +0.7% |
| mid-550-close | -1.9% | -2.3% | -1.0% |
| mid-805-far | +3.2% | +4.4% | +0.6% |
| north-150-close | -1.7% | -2.3% | -0.9% |
| north-250-far | +9.3% | +11.3% | +2.9% |
| skyline | +4.1% | +4.3% | +3.5% |

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
