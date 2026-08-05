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
   `invariants().realtimeHash` (E2c.3b.1) is the direct counterpart for the
   real-time set (leithers/birds/vermin) that `geomHash` deliberately
   excludes — see check 21 below.
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
21. **Pre-pause frame count is 0** (E2c.3b.1) — `bootPage()` counts
    `requestAnimationFrame` callbacks (wrapped via a Playwright
    `addInitScript`, set before any page script runs) and asserts the count
    is exactly zero once `pauseAuto()` has run. This is the deterministic-boot
    fix itself, made assertable: before it, `main.js`'s first `animate()`
    call ran a machine-load-dependent 13–20 real-time frames before the
    harness could stop it. Watched failing (18, then 19 frames) with the
    freeze flag disabled.
22. **Determinism (realtimeHash)** (E2c.3b.1) — `invariants().realtimeHash`
    identical across the same two independently booted pages check 4 already
    compares. Hashes leither chainage/side/direction plus the `birds` and
    `vermin` `InstancedMesh` matrices (both groups are now named — see
    `computeRealtimeHash`, `src/debug.js`). **Every** instanced mesh in each
    group is hashed, not just the last one a `traverse` lands on: `birds`
    builds three (wheeling, perched, pigeons) and only the wheeling set is
    animated, so a last-one-wins pick covered the static pigeons and left this
    group's one real-time mesh unguarded — found and fixed at review, after
    measuring that birds[0] moves over 700 stepped frames and birds[2] never
    does. Note the caller contract in `computeRealtimeHash`'s comment:
    `invariants()` steps a frame before hashing, so two values only compare if
    both pages have had the same number of `invariants()` calls. Only
    meaningful given check 21:
    before the frame count was pinned at zero this would have been flaky by
    construction, not a real gate. See "`elm-row-hero` is bimodal" below —
    now resolved, kept for the mechanism it documents.
23. **Weather scheduler never fires while time is pinned** (E2c.3c) — settles
    an explicit weather, freezes time via `setTime` (`rate = 0`), then steps
    5000 frames and asserts `settledWeather`/`weatherTransition` are
    unchanged. This is the determinism guarantee every other gate in this
    file depends on implicitly (a scheduled change firing mid-capture would
    flake every `settled-at-capture:*` and `golden-*` check); it is asserted
    directly here rather than left as an inference. The gate settles any
    pending transition before taking its "before" snapshot — a transition's
    own `elapsed` always advances on real `dt` regardless of `rate` (weather
    transitions must not freeze along with the day/night cycle at a posed
    hour), so an unsettled transition left over from an earlier test would
    otherwise complete during the 5000 frames for a reason that has nothing
    to do with the scheduler. Watched failing exactly this way once, before
    the fix.
24. **Weather scheduler changes weather autonomously over time** (E2c.3c) —
    `setRate(240)` (an E2c.1 debug hook) fast-forwards the in-sim clock far
    past the scheduler's authored 1.5–4h band, with no explicit `setWeather()`
    call in between; asserts the weather actually changed. Watched failing
    (`weather=overcast, transition=null` after the same fast-forward) with the
    `update()` fire check commented out, while check 23 and 25 both still
    passed — confirming this gate, not the machinery around it, is what
    catches a dead scheduler.
25. **`setWeatherSchedule(false)` suppresses autonomous changes** (E2c.3c) —
    same fast-forward as check 24, schedule disabled first via the debug hook;
    asserts the weather held. This is the escape hatch `captureWeatherPass`
    style golden passes would reach for if the schedule's own multi-hour
    minimum interval (already far longer than any capture pass takes at the
    standing clock rate) ever stopped being enough on its own.
26. **The post chain is transparent at neutral, and live as authored** (E2d) —
    two assertions per state, deliberately pointing in opposite directions,
    because this project has already shipped a gate that passed *because* a bug
    existed (E2d.1a's per-weather bloom check measured post-on vs post-off, so
    it would have gone red the moment anyone fixed the bug it was masking).
    - **26a** with `uStrength` forced to 0, the post frame must be
      **bit-identical** to `renderer.render(scene, camera)` — every channel of
      every pixel equal, not "within tolerance". This is what makes the post
      pass provably free of the colour-management damage that cost two
      milestones.
    - **26b** with `uStrength` at its shipped 1, the frame must differ by at
      least `POST_LIVE_MIN_PCT` (3%) of pixels. Without this, 26a would pass
      just as happily on a post pass that had been accidentally disabled.

    Run across all five weathers **and two night hours**, because the artefact
    class 26a guards against is far larger on dark frames than bright ones — a
    daytime-only check would have passed throughout E2d.1a. Both use an exact
    per-channel comparison (`exactChannelDiff`), never `pixelmatch`. Measured:
    7/7 states exactly equal at neutral; 7.3% (rain, 22:00) to 99.9%
    (haar/skyline) of pixels changed as authored.

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

### The wet night: road sheen and the autonomous scheduler (E2c.3c)

Road/pavement (`src/world.js`) moved from `MeshLambertMaterial` to
`MeshStandardMaterial({ roughness: 1, metalness: 0 })`, landed in two steps so
a golden move could be attributed to one or the other: step 2a is the bare
conversion (no behaviour change), step 2b adds `wetness -> roughness`
(`DRY_ROUGHNESS`/`WET_ROUGHNESS` in `src/lighting-constants.js`, applied in
`applyWetness`, `src/atmosphere.js`). `metalness` stays 0 throughout — tarmac
is a dielectric, and a metalness ramp would tint reflections with the road's
albedo (foil) instead of the light's colour (a puddle).

2a is a near-no-op for 25 of 27 goldens (max 0.366%) but genuinely moves two
`clear`-weather poses — `skyline` (1.681%) and `mid-805-far-08` (4.285%) — a
real Fresnel-driven brightening of the road under `clear`'s much brighter sun,
confirmed with an ad hoc torch-off A/B probe and a pixel-diff against the
prior golden (not clipping, not a draw-call change). `overcast`/`haar`'s
dimmer suns never cross the same threshold. Both were recaptured; every other
pose stayed under tolerance and was left alone.

**2c (a procedural sky-gradient env map) was evaluated and skipped.** Its
payoff case is a *daytime* haar/overcast sky reflecting in the road; this
milestone's target is the wet-*night* road, and an env map can only reflect
brightness that exists in the palette it's built from — every night stop's
sky is about as dark as its sun/hemi/ambient. An A/B luminance probe (torch on
vs off, `mid-805-far`, 22:00, rain, lower-frame crop) found the torch's
specular contribution to wet tarmac is real (2.19x) but both readings sit at
0.06-0.14 out of 255 — correct, invisible, because night is intentionally
near-black by design (mean luminance ~2.4/255, see check 8) and no existing
bookmark pose puts a grazing view of near-camera wet road in frame at night.
2c would not change this. Recorded as a known limit, not silently dropped —
see `docs/ROADMAP.md`'s E2c.3c "what actually landed".

**The autonomous scheduler** (`src/atmosphere.js`) drives weather changes off
`hours` alone — a `schedClock` accumulator, incremented identically to
`hours` but never wrapped, only inside `update()`'s `if (rate !== 0)` branch.
That single guard is the whole determinism argument: `setTime()` always sets
`rate = 0`, so a harness holding time pinned can never see an autonomous
change, by construction rather than by a flag the scheduler has to remember
to check. `WEATHER_ADJACENCY` constrains which weather can follow which
(overcast <-> clear/drizzle/haar, drizzle <-> rain) so changes step along the
light/wetness axis rather than jumping between opposites; both the next
target and the wait (1.5-4h, in-sim) are drawn via `hash32`, in their own
counter sequence seeded from the date-derived boot hour, so draw order never
interleaves with any other seeded sequence in the project. An explicit
`setWeather()` always reschedules the next autonomous change from itself,
so a manual call defers whatever was pending rather than racing it.
`setWeatherSchedule(false)` (debug hook) is wired in as insurance for capture
passes, though not load-bearing in practice — the schedule's own multi-hour
minimum is already far longer than any capture pass takes at the standing
clock rate (~0.2h for a full 8-bookmark pass at `WEATHER_SETTLE_FRAMES`).

### Post-processing without a composer (E2d)

Vignette, film grain and colour grade ship in `src/post.js`, applied to the
finished frame **after** tone mapping and sRGB encoding. There is no
`EffectComposer` in the build any more. That is not a preference; a composer
cannot carry this scene's look without re-authoring the fog.

**The finding, read out of three r185's source rather than inferred.**
`WebGLPrograms.getParameters` picks a material's tone-mapping and output
colour-space chunks from *whether a render target is bound*, and from nothing
else:

```js
// three.module.js — tone mapping
let toneMapping = NoToneMapping;
if ( material.toneMapped ) {
  if ( currentRenderTarget === null || currentRenderTarget.isXRRenderTarget === true ) {
    toneMapping = renderer.toneMapping;
  }
}
// three.module.js — output colour space
outputColorSpace: ( currentRenderTarget === null )
  ? renderer.outputColorSpace
  : ( currentRenderTarget.isXRRenderTarget === true
      ? currentRenderTarget.texture.colorSpace
      : ColorManagement.workingColorSpace ),
```

Two consequences, both fatal to the composer route here:

1. The instant a composer chain has a second pass — the instant `RenderPass`
   writes to a buffer instead of the canvas — **the whole scene is drawn
   un-tone-mapped and un-encoded**. ACES is simply not in the shader.
2. A non-XR render target's own `texture.colorSpace` is **ignored on write**;
   the write is always in the working (linear) space. So the E2d.0 brief's
   proposed fix — hand `EffectComposer` an `UnsignedByteType` target tagged
   `SRGBColorSpace` — could never have worked. Tagging the texture would only
   change how a later pass *reads* it, and that read would then be decoding
   linear data as if it were sRGB, which is worse than doing nothing.

And three's fragment chunk order is

```
opaque_fragment -> tonemapping_fragment -> colorspace_fragment -> fog_fragment
```

so **fog is composited after both**. Routing the scene through a composer buffer
therefore moves fog mixing out of post-tone-map sRGB space and into linear
space. Every weather palette in `src/atmosphere.js` was authored against the
former. That is the same breakage E2d.1 saw when it tried the HDR/`OutputPass`
route and blamed the route — the fog damage is not specific to that route, it
is what *any* multi-pass composer chain does here.

Two milestones (E2d.1, E2d.1a) were spent treating symptoms of this as bugs
inside a pass.

**The design that replaces it.** The scene renders straight to the canvas,
exactly as it does with post off. The finished 8-bit sRGB frame is copied into a
`FramebufferTexture` (`renderer.copyFramebufferToTexture`) and redrawn through
one full-screen triangle carrying a `RawShaderMaterial`. `RawShaderMaterial`
gets **no** injected chunks at all, so there is no tone mapping and no
colour-space conversion in the post pass to double up on — the invariant holds
by construction rather than by tuning. Vignette, grain and grade are operations
a colourist applies to a displayed image anyway, not to scene-referred linear
light, so LDR is the right space for them on the merits too.

**Measured** (check 26, and reproduced twice by an ad hoc probe before it became
a gate). Mean frame luminance, 1280×800, at a settled state:

| weather | hour | pose | post off | strength 0 | strength 1 | A vs B | A vs C |
|---|---|---|---|---|---|---|---|
| overcast | 13 | mid-805-far | 58.86 | 58.86 | 54.24 | **identical** | 99.3% px, −7.9% |
| clear | 13 | mid-805-far | 68.56 | 68.56 | 63.66 | **identical** | 93.2% px, −7.2% |
| rain | 13 | mid-805-far | 24.51 | 24.51 | 22.28 | **identical** | 70.8% px, −9.1% |
| drizzle | 13 | mid-805-far | 41.81 | 41.81 | 38.26 | **identical** | 98.1% px, −8.5% |
| haar | 13 | skyline | 129.81 | 129.81 | 124.18 | **identical** | 99.9% px, −4.3% |
| rain | 22 | mid-805-far | 1.67 | 1.67 | 1.60 | **identical** | 7.3% px, −4.0% |
| overcast | 22 | north-250-far | 1.07 | 1.07 | 1.01 | **identical** | 10.3% px, −5.5% |

"identical" means zero pixels differ on any channel, not a tolerance.

Note the direction of travel: the grade **darkens** every state. Every `clip%`
check in the suite reads **0.000%** with post on, against the standard 0.1%
ceiling — so none of the `CLIP_PCT_MAX_HAAR`-style ceiling raises E2d.1 and
E2d.1a needed are required here, and none were added.

**Cost: exactly +1 draw call, at every pose.** Measured with the effects neutral
so the only variable was the pass itself: 28→29, 54→55, 75→76, 28→29, 72→73,
27→28, 68→69, 1109→1110. The baselines in `docs/smoke/budget.json` carry the +1.

**Determinism.** Grain is driven off the same stepped `t` the updaters run on
(`post` is registered in `main.js`'s single updater list, so `stepFrames(n)`
lands on the same grain field every run) and resamples on a 24fps step rather
than per frame. The hash is all `fract`/`dot`/multiply — no `sin`, whose
precision varies between drivers. That rule was written when goldens were
captured under SwiftShader, where it was belt-and-braces; since E0.4 they are
captured on a real Metal driver, so it now matters for the reason it was
originally stated.

**Not shipped: ambient occlusion.** AO needs scene depth and normals in linear
space, which is exactly the composer path this module exists to avoid. Its
payoff on merged OSM building geometry under this much fog is also the smallest
of the four effects. Recorded in `docs/ROADMAP.md` rather than faked.

**A recapture wrinkle — FIXED at the E2 phase gate (2026-08-01).** On a run
where a golden was missing, the bookmark loop used to write the file and
`continue` — skipping the `clip-control` check that follows, so a run that
recaptured the eight bookmark goldens reported 158 checks rather than 166,
silently. The loop is now routed through the same `checkGolden` helper the
weather passes use, and `clip-control` runs on the freshly captured frame too:
a recapture run reports the full check count. Verified by deleting one golden
(`fascia-close`) and watching the run report all 166 checks including
`clip-control:fascia-close`. A recapture run is still not a *diff* pass for the
recaptured pose (a just-written golden trivially matches itself) — the
follow-up run with every golden present remains the one that proves stability.

### The composer's colour management — why bloom is not in the build (E2d.1a)

**Bloom was reverted at the E2d.1a review (2026-07-30). `src/main.js` ships
`EffectComposer` with `RenderPass` and nothing else.** The section below
describes E2d.1 as it was delivered and is kept because its containment
reasoning and its HDR/fog analysis are still correct and still load-bearing;
treat every statement in it about `UnrealBloomPass` as history.

Why bloom came out — the measurement, taken against a **strength-forced-to-0
control at the same settled state**, which is the control neither E2d.1 nor
E2d.1a ran on `rain`:

| weather | pose | hour | strength | post-off | shipped | strength 0 | artefact | bloom's own effect |
|---|---|---|---|---|---|---|---|---|
| overcast | mid-805-far | 13 | 0.050 | 58.83 | 58.99 | 58.91 | +0.1% | +0.1% |
| clear | mid-805-far | 13 | 0.050 | 68.66 | 70.25 | 69.97 | +1.9% | +0.4% |
| rain | mid-805-far | 13 | 0.064 | 23.86 | 34.04 | 34.04 | +42.6% | **0.0%** |
| drizzle | mid-805-far | 13 | 0.056 | 41.43 | 47.91 | 47.91 | +15.7% | **0.0%** |
| haar | skyline | 13 | 0.000 | 130.00 | 146.16 | 146.16 | +12.4% | 0.0% |
| rain | mid-805-far | **22** | **0.350** | **1.11** | **7.07** | **7.07** | **+535.4%** | **0.0%** |

The authored `bloomStrength` axis was inert: zero measurable effect at `rain`
(including at 0.35, the highest value in its table), `drizzle` and `haar`. Every
visible change came from a colour-management artefact, worst on the darkest
weather — night rain brightened 6.4x — and all 39 goldens had been recaptured to
enshrine it.

**The mechanism, in two layers.** E2d.1a correctly found the first:
`UnrealBloomPass` copies its input to the screen through an internal
`MeshBasicMaterial` (`_basic`), which defaults `toneMapped: true` and so re-ran
ACES on a buffer `RenderPass`'s materials had already tonemapped. But
`_basic.toneMapped = false` *moved* the damage rather than reducing it: the
double-ACES had been compressing highlights, which is why `haar` (brightest)
suffered worst before; removing it left the double-sRGB-**encode** unopposed,
and sRGB encoding lifts shadows hardest, so the worst-hit weather flipped from
the brightest to the darkest. `haar` improved from +29% to +12%; `rain` went from
about +1% to +42.6% by day.

**The invariant this all failed, and the one E2d.0 must satisfy:**

> with every pass's contribution forced to zero, the composed frame must be
> **bit-identical** to `renderer.render(scene, camera)`.

`RenderPass` alone satisfies it — measured 0.0000% across three poses and two
weathers — because as the last enabled pass it renders straight to the canvas
and no intermediate buffer is ever read back. It breaks the moment any pass
composites *from* a buffer.

> **Correction (E2d, 2026-08-01).** The paragraph that used to sit here blamed
> `EffectComposer`'s `HalfFloatType` target for having no hardware sRGB decode
> path, and proposed supplying an `UnsignedByteType` target tagged
> `SRGBColorSpace` instead. That reasoning was wrong, and the route it proposed
> cannot work — three ignores a render target's `colorSpace` tag on write. The
> real mechanism, read out of r185's source rather than inferred, is in "Post-
> processing without a composer" below. The table, the isolation method and the
> gate lessons in this section are unaffected and still stand.

**Two gate lessons worth keeping.** First, a contribution gate written as
post-on vs post-off measures the *artefact plus the effect*, not the effect —
E2d.1a's per-weather gate passed **because** the bug was present and would have
failed had anyone fixed it. An inverted gate is worse than a dead one. Second,
`clip%` cannot see a brightness lift on a frame that never reaches the ceiling,
and `pixelmatch` at `threshold: 0.1` is nearly blind to broad uniform shifts (a
pose moved 34% in mean luminance while reporting 0.009% pixel diff). Neither is
a brightness measurement; isolate against a zeroed control instead.

**Settled, and not worth revisiting:** the torch's specular return on wet road
peaks around 22/255 and never approaches the 0.95 bloom threshold at any
strength from 0 to 10x. `dbg.torchGroundPose()` (kept in `src/debug.js`) is the
only pose that puts near-camera torch-lit tarmac in frame; it confirmed this
directly. Bloom was never going to make the wet night read.

### The composer, and bloom (E2d.1 — historical, bloom since reverted)

`EffectComposer` lands in `src/main.js`, carrying `RenderPass` then
`UnrealBloomPass`. Landed as two separate commits, per the containment plan:
a provable no-op (`RenderPass` alone) first, then bloom.

**The no-op step, verified.** `renderer.info.autoReset` is `true` by default,
which resets draw-call accounting at the start of every internal
`renderer.render()` call a postprocessing pass makes via `FullScreenQuad` —
without a fix, every `budget:*`/`draw calls exactly +N` gate would have
silently started reading ~1 (the final pass only) instead of the scene's real
count. Fixed with `renderer.info.autoReset = false` plus one explicit
`renderer.info.reset()` in `runFrame`/`renderNow`, before the composer runs.
Verified, not assumed: `skyline`'s budget read 954 draw calls (identical to
its pre-composer baseline) with `RenderPass` alone, confirming the fix worked
end to end rather than happening to look right. All 39 goldens held at their
existing noise-floor residuals (worst: `golden:skyline` at 0.267%, unchanged)
in that same commit — the leak detector this class of change gets exactly
once, since every golden legitimately moves the moment a real effect lands.

**The two direct-`renderer.render()` sites** in `scripts/smoke.mjs` (the E2b
torch A/B, the mobile torch toggle) now call `dbg.renderNow()` instead — a
composer-aware render that skips the updaters (same reason the direct calls
existed: `torch`/`atmosphere` would overwrite the intensity override before
the frame landed) but goes through the composer so a torch-on/torch-off
comparison stays like-for-like once bloom is in the path.

**The tone-mapping fork: HDR was tried and reverted.** The textbook-correct
multi-pass composer setup is `renderer.toneMapping = NoToneMapping` (materials
render raw linear HDR, no per-material tonemap) with one `OutputPass` applying
ACES + `renderer.toneMappingExposure` at the very end — this is also what
would have let bloom see genuine HDR values instead of the already-compressed
0-1 range ACES leaves behind. It broke fog: three's material fragment shader
runs `fog_fragment` *after* `tonemapping_fragment` and `colorspace_fragment`
(`meshphysical.glsl.js`), so every fog colour in `src/atmosphere.js` was
authored and tuned assuming it blends in POST-tonemap space. Moving
tonemapping to the very end moved fog to PRE-tonemap space instead — same
authored values, different result, independent of bloom entirely. Measured
with bloom fully disabled: 56-72% of pixels differed on every `haar` golden
(thick fog dominates the frame there), against noise-floor diffs everywhere
bloom wasn't the only variable. Retuning fog for 5 weathers across many hour
stops is a different, much larger project than this milestone.

A second, independent bug surfaced trying the HDR route and is worth
recording since it will bite again if anyone revisits this: adding an
`OutputPass` back — even forcing `NoToneMapping` for just its own draw, to
avoid double-applying ACES on top of materials that already tonemap — still
re-runs the sRGB encode on output the materials had already encoded
themselves (materials apply full tonemap+encode into `EffectComposer`'s
intermediate buffer exactly as they would to the canvas; `OutputPass` assumes
they didn't). Measured as a ~4x brightening/blowout with bloom thresholded so
high it should visually contribute nothing. The shipped LDR route needs no
`OutputPass` at all — `UnrealBloomPass` as the last enabled pass renders
straight to the canvas the same way a lone `RenderPass` does, verified
pixel-identical to a direct `renderer.render()` call when bloom contributes
zero.

**Bloom's threshold/strength/radius are bound by the daytime clip-* gates, not
the wet-night pose.** `UnrealBloomPass`'s multi-mip blur spreads any
threshold-crossing source across a wide screen-space radius — fine on a
near-black frame with headroom to spare, but on `haar` (whose authored fog/sky
already sits within a few percent of the tonemapped ceiling) even a threshold
of 0.999 at strength 0.01 pushed 0.4-2%+ of pixels over the clip ceiling on
different bookmarks, because the blur bleeds onto a huge already-near-white
area regardless of how few pixels crossed the threshold to begin with. Ship
settings (strength 0.05, radius 0.2, threshold 0.95) were picked as the
smallest combination that kept clear/overcast/rain/drizzle under a modest,
committed ceiling raise (0.1% -> 0.4%); `haar` needed a much larger one
(0.4% -> 8%, see `CLIP_PCT_MAX_HAAR` in `scripts/smoke.mjs`) and is reported
separately rather than silently folded into the shared number. See "Raise the
clip-highlight ceiling..." commit for the full per-bookmark measurements.

**The wet-night payoff did not materialise, and that's a finding, not a
regression.** The milestone's stated goal was making the torch's measured
2.19x specular return on wet tarmac (E2c.3c) visible — it sits at 0.06-0.14
out of 255, correct but invisible. Re-measured at the shipped settings,
`mid-805-far` at 22:00/rain and 22:00/haar (the exact pose captured to
`docs/smoke/captures/`): lower-frame-crop mean luminance 0.14 and 0.64
respectively — indistinguishable from the pre-milestone numbers, and
indistinguishable by eye. This is not a bloom-tuning shortfall: E2c.3c already
found "no existing bookmark pose puts a grazing view of near-camera wet road
in frame at night", and this milestone confirms it again, independent of the
LDR/HDR choice — bloom cannot amplify a highlight that isn't geometrically in
the frame to begin with. Fixing this needs a bookmark (or a dedicated capture
pose) that actually frames the ground near the torch at night, which is a
smaller follow-up, not a reason to hold this milestone.

**Mobile toggle.** `#post-toggle` mirrored `#torch-toggle` exactly — touch-only,
on by default, persisted to `localStorage['mcgrot-post-on']`. *(Gone: the button
and its wiring were reverted with bloom at E2d.1a and were **not** reinstated at
E2d.2. `setPostProcessing(bool)` survives as a debug-API hook only — see E2d.2's
note in `docs/ROADMAP.md` for why the button was not worth rebuilding. Its
absence is also why the mobile goldens no longer carry the ~0.48% residual this
milestone's own button introduced.)*

### `elm-row-hero` was bimodal, and it was the harness's fault (E2c.3b review, fixed E2c.3b.1)

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

**Interim measure (retired E2c.3b.1):** `FLAKY_POSES` in `scripts/smoke.mjs`
gave `elm-row-hero` a measured 2.5% tolerance in every weather while the real
fix was pending. It served its purpose — a deliberate density sabotage still
moved `elm-row-hero-haar` by 31.6%, well past even the widened tolerance —
without red-lighting a clean tree.

**The real fix — a deterministic boot** — is now shipped. A localhost-gated
`window.__mcgrotFreezeAtBoot` flag, set via `addInitScript` before any page
script runs, suppresses `main.js`'s very first `animate()` call, so the
pre-pause frame count is 0 by construction rather than left to machine load
(checks 21–22 above assert this directly, not just infer it from goldens
holding still). `elm-row-hero-haar` and `north-250-far-haar` — the two poses
that had drifted past 0.5% under the old boot — were recaptured; every other
golden across all five weather columns was already under 0.5% even before
recapture. Three fresh full smoke runs afterwards rewrote no golden files;
worst-case residual per pose measured across that data was 0.275%
(`elm-row-hero`) — comfortably clear of the 0.5% tolerance, so the ~0.09%
async façade-decode source noted above never became the binding constraint.
`FLAKY_POSES` and `goldenTolerance()` are deleted; every golden is back on the
standard tolerance.

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

## The read-along overlay and mixer (E5a)

`scripts/build-readings.mjs` bakes `assets/readings.json` offline (phrase text
from `scripts/tts-prompts/<id>.txt`, timing anchored via `ffprobe`/`ffmpeg
silencedetect`) — it is not part of the smoke run itself, but `smoke.mjs`
gates the checked-in result. Five checks, all in `scripts/smoke.mjs`:

- **5e — phrase times monotonic and non-zero, across the whole corpus.**
  All 123 comics, not a sample: every phrase must start no earlier than its
  predecessor and last a non-zero time. Cheap, absolute, and it guards the
  one failure class 5a is structurally blind to — 5a scores boundaries
  against the audio, so it cannot see what ORDER they arrive in. 25 of 123
  comics originally shipped with an inverted boundary (`snapBoundaries`
  pulling a boundary behind an unsnapped predecessor); the runtime highlight
  stalled and then jumped, and 5a scored 0.965 throughout. Verified by
  injecting an inversion into one comic: 5e went red, 5a stayed green at
  0.9599 — which is the whole argument for keeping both.
- **5a — phrase alignment (opposed pair).** Pure Node, no browser: over a
  fixed 12-comic sample chosen by FNV hash of the id — not `sort().slice()`,
  which drew every id beginning "0", a systematic slice of the corpus rather
  than a spread of it — decodes
  each mp3 to raw PCM via `ffmpeg -f f32le` and computes its own RMS envelope
  (50ms window / 25ms hop) — deliberately NOT calling `silencedetect` again,
  or the gate would just be re-asserting the bake's own segmentation. Scores
  how well each phrase boundary (the transition between two phrases, not the
  clip's own start/end) lands in a low-energy trough: 1 = quietest point in
  the clip, 0 = loudest. Three variants scored per comic, then averaged
  across the 12:
  - **shipped** — the baked boundaries;
  - **flat control** — the same phrase count, evenly spaced;
  - **shifted control** — shipped boundaries displaced by +1.5s.

  Pass requires shipped to beat BOTH controls by `ALIGN_MARGIN` (0.03). The
  flat control isolates the model's contribution over a naive schedule; the
  shifted control catches a dead gate that would score anything highly (e.g.
  a bug that always returns 1). All three numbers are logged every run
  (`console.log`, not just the pass/fail row) — they're the evidence, not
  just the verdict.

  **Read the score for what it is.** The bake snaps each boundary onto the
  nearest silence-gap midpoint, so a snapped boundary sits in a trough *by
  construction* and the shipped score is close to tautological. It still
  discriminates against both controls, so it is not a dead gate — but it
  measures "boundaries land in pauses", NOT "the right phrase is highlighted
  at the right time". A misassignment (right pause, wrong phrase) scores just
  as well. Nothing here substitutes for listening to a reading.
- **5b — one voice (opposed pair).** Stands the camera exactly at `npcs[0]`'s
  position — the ~1600m street split across 124 vendors (every catalog
  vendor has audio) puts several neighbours within `PLAY_RANGE` naturally, no
  special placement needed. Closed half: proximity management is left to run,
  asserts more than one voice is playing. Open half: presses `E` twice (the
  second press skips the ritual's hush — see below — so the focused reading
  starts without a real 600ms wait) and asserts exactly one voice plays.
  Asserted on the mixer's own state (`npc.voice.isPlaying`), not measured
  audio output — headless audio timing isn't reliable enough to gate on
  directly. Without the closed-half assertion, an audio pipeline that was
  broken outright (nothing ever plays) would trivially pass the open half.
- **5c — virtual reading clock determinism.**
  `dbg.setDaySeed(n)` overrides `src/proximity-audio.js`'s date-derived day
  seed (`window.__mcgrotForceDaySeed`, hostname-gated to localhost like every
  other debug override) so this doesn't have to wait for the calendar to turn
  over. Three boots: same seed twice, one different seed. Each boot runs the
  identical `stepFrames(10)` recipe before any voice starts — the join-offset
  formula reads a *simulated* clock (`simTime`, the same `t` value
  `main.js`'s updaters run on), not `AudioContext.currentTime`, specifically
  so this is reproducible: two page loads never resolve their async buffer
  fetches at the same real AudioContext time even with identical seeds, but
  they DO see the same frozen `simTime` if no further `stepFrame` runs
  between issuing the joins and the buffers resolving (see the note in
  `proximity-audio.js`). Pass requires the two same-seed boots' offsets to
  match exactly and the different-seed boot's to differ.
- **5d — flag neutrality.** Landed off by default first (proving item 1
  could sit in the same commit as every other E5a item without moving any of
  the 39 existing goldens — the state this check asserted at the time), then
  flipped on in a second, deliberate commit that recaptured
  `mobile-comic.png` with the panel visible. What the check asserts today:
  the panel renders by default (it has content for the golden's NPC) AND
  `dbg.setReadAlong(false)` genuinely hides it — toggled off and back on
  around the structural check, never around the golden screenshot itself, so
  the capture always reflects the shipped default.

**The ritual's hush is real wall-clock (`setTimeout`, 600ms), not
stepFrame-driven** — safe for goldens because the comic overlay is a
full-screen fixed-position panel (`inset: 0`), so the NPC underneath (whose
mouth mesh toggles when its voice actually starts) is never in frame while
it's open. The play/pause icon and ambience ducking are set immediately in
`open()`, before the hush, specifically so a screenshot taken right after
pressing `E` (as the mobile-comic golden does, with a single `stepFrame` and
no wait) is pixel-identical to the pre-E5a behaviour — only the actual
`proximityAudio.restart()` call, and the mouth animation it drives, is
delayed behind the hush.

## The journal (E5b.1)

`src/journal.js` — comics heard/found, `localStorage`-backed (key
`mcgrot.journal.v1`), closed by default, opened with `J` or the touch toggle.
Eight checks in `scripts/smoke.mjs`, all run on their own fresh boot
(`jPage`/`jCtx`), never on `page1`: they deliberately step real-time frames
(leithers/birds/vermin) to bring a vendor or litter comic into interact range,
and those subsystems are the ones `computeGeomHash` excludes because they move
under `stepFrame` — doing that to `page1` before its own first bookmark visit
measurably desynced `skyline`'s draw-call count from the frozen
`budget.json` baseline (1101 vs 1110) before this was split into its own boot.

- **HUD copy unchanged.** `#hud`'s textContent asserted byte-identical to
  today's string — the gate that protects 27 desktop goldens from this
  milestone and every one after it.
- **Panel closed by default.** Note that the *panel* moving no golden is not
  the same as the milestone moving no golden: `#journal-toggle` is a
  `html.touch`-only control at the top-left, so it is present in every mobile
  street capture. Measured by self-diff (same page, toggle shown vs hidden) it
  covers `[20,20,67,67]` and changes **0.118%** of a 390×844 frame — under the
  0.5% golden tolerance, so it slipped through as a pass on stale images
  (`golden-mobile:hud` 0.208%, `golden-mobile:street` 0.114%). `mobile-hud.png`
  and `mobile-street.png` were deleted and recaptured; `mobile-title.png` and
  `mobile-comic.png` were untouched because the title card (z 50) and the
  comic overlay (z 20) both cover the toggle (z 15). **A new always-visible
  control must recapture its goldens, not hide inside the noise tolerance** —
  that tolerance exists for renderer jitter, and every element parked under it
  permanently shrinks the budget left for detecting real regressions.
- **The toggle is covered by the mobile gates.** `journal-toggle` added to
  both the tap-target list (≥44×44 and reachable by `elementFromPoint`) and
  the simulated safe-area list, which it shipped missing from.
- **Denominator is derived, not literal (opposed pair).** The runtime value is
  compared against a Node-side count off `assets/catalog.json` (comics with
  both `.npc` and `.audio` — the same test `proximity-audio.js` uses to decide
  whether a voice can ever play). That half alone proves nothing: every built
  vendor currently has audio, so the derived number collides with
  `npcs.length` and with a hardcoded `124` alike, and all three pass
  (measured). The isolating half runs `journal.js`'s own exported
  `countVendorsWithAudio` over a deliberately truncated cast of five and
  requires the result to track that cast and to differ from the full count —
  which a typed literal cannot do (fault-injected: a hardcoded `124` returns 124
  against a wanted 5, and the gate goes red). It then feeds the counter a
  synthetic three-vendor cast with one silent member and requires 2 — because
  a truncated *real* cast still cannot separate the derived count from a plain
  `npcs.length` while every built vendor has audio, and that is precisely the
  assumption that breaks the day a vendor ships without a voice. An earlier
  `!== 418` check did not do this job: 418 is the aspirational full cast, a
  number no plausible implementation produces.
- **Counting is earned.** Standing within `proximityAudio`'s `PLAY_RANGE`
  (busking active) without opening the overlay credits nothing; pressing `E`
  and waiting past the ritual's hush credits exactly one; reopening the same
  vendor stays at one.
- **Litter credits as found**, immediately (no hush ritual for litter).
- **Persistence round-trip**, in a second page sharing the first's browser
  context (same `localStorage`): reload restores counts and the newest
  entry's id; clearing the key first restores to zero.
- **Storage failure is survivable.** `Storage.prototype.setItem` patched to
  throw (an `addInitScript`, same idiom as the AudioContext fault-injection
  test above) — the reading still opens and the session-local count still
  increments, with zero console errors (`journal.js`'s fail-soft is a plain
  try/catch, not a caught-and-logged one).

## The dozen anchor readers (E5b.2)

`src/anchors.js` — twelve of the 124 vendors (keyed by comic id, never by
list index — see the brief's reindex warning) nudged onto real Leith Walk
landmarks, staged behind `ANCHORS_ENABLED`. `src/npcs.js`'s
`computeVendorLayout(list, streetLine, anchorsEnabled)` is the pure
placement math (no THREE, no scene) both `buildNpcs` and
`window.__mcgrotDebug.anchorLayout(enabled)` call — the latter lets
`scripts/smoke.mjs` compare both flag states from ONE booted page, no
second scene build required. `window.__mcgrotForceAnchors` (checked at
`buildNpcs` time, localhost-only) overrides the shipped default the same
way `__mcgrotForceDaySeed`/`__mcgrotFreezeAtBoot` already do, so the gates
below can force either state regardless of which way `ANCHORS_ENABLED`
currently points.

Landed flag-first (`ANCHORS_ENABLED = false`): the full 187-check suite
passed byte-identical (every golden 0.000%, `geomHash` unchanged, draw
calls exactly matching `budget.json`) before the enable commit flipped the
flag. Eight checks in `scripts/smoke.mjs`, run right after the E5b.1 journal
block:

- **Non-anchor vendors did not move, exactly 12 anchors nudged.** Compares
  `anchorLayout(false)` against `anchorLayout(true)` for all 124 vendors:
  side and coat index (both index-derived, `i % 2` / `i % COAT_COLORS.length`)
  must be identical regardless of flag; a non-anchor's `px`/`pz` must be
  EXACTLY unchanged; an anchor's new chainage must land within 0.1m of its
  tabled target and its position must actually have moved. The load-bearing
  half of this gate is the opposed check — a build that shifted the whole
  street rather than nudging twelve vendors would still show "12 moved" if
  the gate only checked the anchors; it does not, because it also asserts
  the other 112 didn't.
- **The BUILT scene matches the layout function**, both flag states. This is
  the gate the block was missing: `anchorLayout()` is pure, so comparing
  `anchorLayout(false)` against `anchorLayout(true)` is two calls to one
  function and passes whether or not `buildNpcs` ever uses the result. The
  flag-off page's `npc.group.position` must equal `anchorLayout(false)` (and
  nothing may be flagged `isAnchor`); the flag-on page's must equal
  `anchorLayout(true)`, with exactly 12 flagged AND exactly 12 actually
  displaced from their index-derived position. Without these two, every other
  check in this block is a tautology about a calculator.
- **The sequence is intact.** The built scene's comic-id order must equal
  `catalog.json`'s own order, read independently in Node — plus the flag-state
  comparison. On-vs-off alone cannot catch a reindex: reordering `list`
  reorders both sides identically and still passes.
- **Anchor denominator is derived, not typed.** `journal.js`'s
  `countAnchors` run over a truncated 4-entry copy of `ANCHOR_SET` must
  return 4, mirroring E5b.1's `countVendorsWithAudio` opposed-pair shape.
- **Flag genuinely gates it**, in both directions. Forced off: `#journal-counts`
  renders byte-identical to E5b.1 (no anchors clause at all — the copy
  change is gated by the same flag as placement, not just left dark).
  Forced on: the panel shows `"N of 12 anchors"`.
- **Anchor credit is earned**, same discipline as E5b.1's heard credit:
  standing in busking range near an anchor without opening credits nothing;
  opening it and waiting past the hush (`HUSH_MS`, real wall-clock timer)
  credits exactly one; reopening the same anchor stays at one. Credited in
  `interact.js`'s `beginReading`, the same call that credits `'heard'`, via
  `npc.isAnchor` (set at placement time) — so it can never fire when the
  flag is off, since every `isAnchor` is `false` in that case.
- **Draw calls exactly +/-0 at every bookmark, flag on vs off.** Two
  independently forced, freshly-booted pages (not the live default, which
  points a different way before vs after the enable commit) visit all 8
  bookmarks; anchors move geometry that already exists (no new lights, no
  new meshes — the "brighter reading" is an unlit material-colour bump on
  each vendor's already-per-vendor-unique face/comic materials, never the
  shared `clothMat` cache), so this is expected to hold trivially and does.

**The skyline goldens are in this milestone's blast radius.** Seven anchors
sit inside `skyline`'s view frustum (nearest 25.1m) — measured, not assumed —
and flipping the flag changes that pose by 0.029% on a direct on/off diff.
Against the frozen images all four variants read non-zero (`skyline` 0.101%,
`-clear` 0.168%, `-haar` 0.165% — up from 0.040% — and `-rain` 0.081%), all
under the 0.5% tolerance and so all *passing* while stale. They were deleted
and recaptured. The seven chainage bookmarks are genuinely unaffected: they
look across the street, so a vendor tens of metres along it falls outside a
70° frustum. `skyline` is elevated and sees the length of the Walk, which is
exactly why "no anchor is near a bookmark" was the wrong test — **distance
along the street is not the same as absence from frame, and only the diff
settles it.**

## Moments are links, and the day has a name (E5c)

Two modules and one HUD line. `src/moments.js` keeps the camera's position
and heading in the URL hash (`#p=<x>,<z>,<deg>`, 0.1 m and 1°) and reads one
back at boot; `src/day.js` is the single authority for "what day is it", read
by the HUD, by `atmosphere.js`'s arrival hour and by `proximity-audio.js`'s
per-vendor reading phase.

**`src/day.js` exists because of the goldens, not because of tidiness.** The
HUD now prints the calendar date. A golden screenshot containing a live date
passes on the day it is captured and fails every day after — and it fails
looking like a rendering regression, which is the worst kind of red. So the
harness needs one lever that freezes the whole notion of "today", and every
consumer has to be behind it. `window.__mcgrotForceDate` is that lever, and
**every** context in `scripts/smoke.mjs` is created through a `newContext()`
helper that sets it, so a context added later cannot quietly forget. The
pinned day is `2026-01-01`, whose date-derived arrival hour is **06:55** —
chosen to sit far from `SMOKE_HOUR`'s 13:00, so a label that regressed to
printing the live clock could not hide behind a coincidence.

`startHour()` was checked byte-identical to the two implementations it
replaced, over 4000 consecutive dates.

### The gates (region `moments`)

Everything here that steps frames runs on the region's own page, never on the
shared `page1`. E5b.1 measured why: stepping real-time frames on `page1`
before its first bookmark visit moves leithers, birds and vermin — all
excluded from `computeGeomHash` precisely because they do — and desyncs the
`draw calls +/-0` gate from `budget.json` on `skyline`. An earlier draft of
this region stepped 30 frames on `page1` and every draw-call gate still read
exactly its baseline. That was luck, not a licence. Only the two HUD reads
touch `page1`, and reading `textContent` steps nothing.

- **Moving rewrites the hash.** Pose at chainage 700, step 30 frames (0.5 s of
  sim time, past the 0.4 s write throttle), match the hash against its format.
- **Standing still writes nothing, and no walk adds history entries.** 300
  still frames must leave the write count untouched, and `history.length` must
  never grow: `replaceState`, never `pushState`, so the back button keeps
  meaning "leave the page" rather than "undo a footstep". Both were verified
  by hand in a real browser first and gated afterwards.
- **A link reproduces the spot it was made at**, within 0.15 m / 1° —
  measured 0.038 m / 0.41°. The **control** is a boot with no hash at all,
  which must land >50 m away; it lands 700.0 m away. Without that control the
  gate is satisfied by a build that ignores links entirely and spawns
  everyone at the same place, which is exactly how a link feature fails.
- **Six malformed hashes all fall back to the Foot**, silently. One input per
  rejection branch: wrong arity, wrong arity with plausible numbers, nothing
  finite, one bad number, finite but outside the world, and not a moment at
  all.
- **The hash tracks only after the title card is dismissed.** Same page, same
  movement, the only difference being the click.
- **The HUD names the pinned day and the arrival hour, not the live clock.**
  Asserts the literal `1 January 2026` and `06:55`, and asserts `13:00` never
  appears while the clock is pinned there.
- **The day name is frozen at arrival**: unchanged across `setTime(22)`.
- **The day name is derived from the date, not baked in.** The **control** is
  a second boot forced to `2026-04-05`, which must read `5 April 2026` and
  `21:33`. Two dates fifteen hours apart, so a stuck hour shows up as well as
  a stuck date.
- **Sharing opens the toast**, checked on the same element before and after —
  `none` then `block`.
- **The shared URL reproduces the sharer's spot.** `moments.href()` is opened
  as a fresh document and must arrive within tolerance; measured 0.000 m /
  0.00° from a spot 1099.2 m off the default spawn. Asserting that `href()`
  *looks* right would be checking the calculator; in the single-file artifact
  `replaceState` throws inside the sandboxed iframe and there is no address
  bar, so `href()` is the only route a link can take out of the page and it
  has to be checked end to end. Headless Chromium denies clipboard access, so
  the run exercises the manual (selectable field) path — which is the artifact
  path too.

### All were fault-injected red

Eleven injections on the link and HUD gates, each reddening only the gates it should: writer disabled;
reader disabled; a parser accepting non-finite input; the coordinate bounds
check removed (spawn moved 1615 m); the `entered` gate removed; `pushState`
substituted for `replaceState`; the movement threshold removed (writes went
7 -> 19 while standing still); the label built from the live pinned hour; the
date override ignored; the toast never opened; `href()` stripped of its
moment.

One honest limit that the injections exposed. The "frozen at arrival" gate's
own before/after comparison catches a label that *re-reads* the clock on
update. It does **not** catch a label built from the wrong hour at boot —
under that fault both sides read `13:00` and compare equal. The `06:55`
clause is what fails there, and the first gate catches it too. Two different
faults, two different gates; neither gate covers both.

### Two defects the injections found — in the gates, not the code

Recorded because both were invisible while the gates were green.

- **One malformed input tested one branch.** The check originally used only
  `#p=banana`, which the arity check rejects before any other branch runs. A
  parser with a broken numeric check, and one with no bounds check at all,
  both passed it. Hence one input per branch.
- **Fragment-to-fragment navigation does not reload.** Going from
  `?…#p=banana` to `?…#p=x,y,z` differs only in the fragment, which Chromium
  serves as a same-document navigation: no boot, no parse. Five of the six
  malformed cases were never exercised. Every boot in this region now carries
  a unique `?boot=N`, forcing a real document load. **A gate that navigates
  between hashes of one URL is measuring nothing.**

### What this region deliberately does not prove

- That `replaceState` degrades correctly in a sandboxed iframe. The
  `try`/`catch` is there and the manual share path is exercised, but the
  actual artifact-in-an-iframe case is not booted by the suite.
- Anything about the clipboard path — headless denies it, so only the manual
  branch runs.

### The desktop keyboard surface (two more gates, thirteen in the region)

Filed under E5c because E5c caused it. `#link-field` is the first focusable
text input in the app and every shortcut is bound on `window`, so selecting
the URL and typing would fire E, J or T. `src/keys.js` is the shared guard.
Escape deliberately stays live — it is the way out of a focused field.

- **T toggles the torch on desktop, both directions.** `light.distance`
  5.25 -> 0.05 -> 5.25, the `active` class following it, and localStorage
  going `false` then `true`. The **control** is asserting `#torch-toggle` is
  `display:none` in the same breath: the button is touch-only, so the key
  provably did it.
- **Shortcuts ignore keystrokes typed into the link field.** The same two
  keystrokes twice, differing only in whether the field has focus. Without
  the blurred half this passes on a build where the shortcuts are simply
  broken.

Three injections, each reddening only its own half: T's guard removed (torch
moves while typing), J's guard removed (journal opens while typing), the T
binding absent entirely (torch never moves).

**And a process note that cost this milestone two rebuilds.** `git checkout`
given a pathspec that includes an **untracked** file (a new module, mid-
milestone) fails on that path and restores *nothing* — so a fault injection
stays in the tree, and the next injection runs on top of it. It produced two
readings that looked like one guard affecting another. **Commit before fault-
injecting**; then `git checkout --` restores to a known state.

### The live-browser check that the gates cannot do

Worth doing once per milestone that adds an interaction, and worth knowing the
trap. The Browser pane reports `document.visibilityState === 'hidden'` unless
it is fronted, and **rAF does not tick while hidden** — screenshots still
render on demand, so a scene that looks alive can be completely frozen. A
first pass at this milestone read "the hash never updates when you walk" and
that was the reason, not a bug. Drive `stepFrames()` instead and the same
updater path runs deterministically. That pass is what produced the
`history.length` and standing-still measurements now gated above, and it is
where the mobile HUD overlap was caught.

### Goldens: what the two commits cost

Landed in two commits precisely so the second could not hide the first. The
machinery commit (date authority, hash round-trip, no DOM) was measured
against an **unmodified HEAD run captured for the purpose**: every pose within
±0.024 pp, i.e. run-to-run noise. The HUD commit then moved goldens
deliberately.

**Goldens do not read 0.000% at rest.** Measured on unmodified HEAD, the
overcast column alone reads `elm-row-hero` 0.095%, `mid-805-far` 0.093%,
`skyline` 0.053%, `foot-1500-far` 0.050%, `north-250-far` 0.023%, with the
close poses at a genuine 0.000%. That is the noise floor, and it
is why "0.09% so it passed" is not evidence of anything on those poses — only
a delta against a same-day baseline is.

Those per-pose figures were measured under SwiftShader and **have not been
re-measured pose by pose under Metal**. What was measured across the switch is
that the floor did not move in character: inter-boot jitter on three sampled
poses read 0 / 0.024 / 0.175% against SwiftShader's 0 / 0.030 / 0.184%. Treat
the table above as the right order of magnitude, not as a Metal baseline.

`golden:skyline` is the noisiest and occasionally spikes: one run read 0.174%
against a 0.053% baseline, with three further runs at 0.056/0.050/0.060 on
the same build. **A single elevated skyline reading is not a signal; take
three.**

## Running the suite fast (and what that costs you)

A full run was **412s** at E5c and **847s** by the E5 phase gate. E0.3
(2026-08-03) took it to **~515-520s** serial (three runs: 519s, 521s, 514s)
and **346s** sharded — see "The speedup, and what the profile said" below for
where the time went and which levers were rejected. Three ways
to cut a run, all of which announce what they did not check: a partial run
that reads like a full one is the exact failure this project keeps having.

- `npm run smoke:par` (**346s**) runs the *whole* gate as two sharded
  processes — nothing skipped, coverage verified against `REGIONS` before it
  starts. See "Parallelism: which kind pays" below.
- `npm run smoke -- --since` (**20-60s typical**) runs only the regions the
  working diff can reach — the router, not a new tier. `--since=<ref>` diffs
  against any ref. A changed path matching no rule in `SINCE_RULES` selects
  **every** region, so a new module costs time rather than coverage; docs-only
  changes run the boot checks alone. It prints the file-to-region reasoning
  and that it is not a deploy gate.
- `npm run smoke:quick` was **removed** (E0.5). It skipped the weather matrix
  to buy an inner loop, which was worth having at 100s against a 412s full
  run under SwiftShader. Under Metal it measured **93s and PARTIAL against
  `smoke:par` at 74s and COMPLETE** — slower and narrower at once, so it was
  strictly dominated. What replaced it was not a cheaper tier but a faster
  full gate. Passing `--quick` now exits 2 rather than quietly running more
  than the caller asked for.
- `npm run smoke -- --only=<region>[,<region>]` runs single regions:
  `alignment`, `journal`, `anchors`, `moments`, `lamps`, `legs`, `ending`,
  `render`, `weather`, `determinism`, `dpr`, `onevoice`, `determinism-clock`,
  `mobile`. Measured marginal costs: journal ~41s, anchors ~31s, moments ~35s
  (it boots eight documents), onevoice+clock ~16s, mobile ~7s, on top of ~12s
  of fixed overhead (bundle, server, browser, boot #1) that every run pays.
  Under Metal, `render` is 22.4s and `weather` 28.6s (E0.6).

`render` captures the overcast desktop goldens and the night golden; `weather`
captures the clear, rain, drizzle and haar columns; `mobile` captures the four
mobile ones. `weather` is the one region that opens in the **middle** of
another — render runs, weather runs, render resumes — so `--only=render` skips
it and `--only=weather` runs it alone. **`--only` is not a deploy gate.**
`npm run deploy` always runs the whole suite, because the weather columns are
exactly where a golden regression hides.

Regions were each checked to declare nothing referenced after them before
being made skippable. If you add one, do the same check first — a region whose
`const` escapes will break the *full* run, not the partial one.

### The speedup, and what the profile said (E0.3)

Every run now prints a profile — wall time per region, phases inside `render`,
and per-boot time plus wire bytes and cache hits. It exists because the E5
phase gate picked the next lever by reasoning ("stop re-fetching the 1.7MB
bundle on every boot") and the reasoning was wrong.

The first full profile, at 847s:

| Region | Wall | Share |
|---|---|---|
| legs | 311.8s | 36.8% |
| render | 265.1s | 31.3% |
| dpr | 67.3s | 7.9% |
| journal | 45.6s | 5.4% |
| everything else | ~143s | ~17% |
| (21 boots, counted within the above) | 37.3s | 4.4% |

**The named lever was the 4.4% line, and unreachable at that.** Boots fetch
161MB over 1176 requests with **zero** cache hits — and they always will:
every boot is a fresh Playwright context with its own cache, so HTTP caching
headers have nothing to hit. Serving `Cache-Control` instead of `no-store`
would not have paid for reading this paragraph.

What was actually taken:

- **`legs` rendered every frame it walked.** `walkLeg` called `dbg.stepFrame`
  1140 times per arm, rastering all of them; the region measures the *clock*
  and the hinge count and looks at none of those frames. Swapped for
  `dbg.stepFrames(per, t)`, which feeds the identical `(dt, t)` sequence and
  rasters one frame per chunk. **311.8s -> 37.3s.** The proof it changed
  nothing is that the gate's own numbers are bit-identical: 13.55h / 3.55h /
  10.00h contributed, 2 hinges at south then north, the same weather rolls.
  ~40 rendered frames per leg survive, which is also what keeps the shopfront
  atlas paging for the hinge evidence captures.
- **The DPR timing table was always running.** It and the DPR *cap gate* sat
  behind one guard, so a full run paid 67s for a table that docs already
  record as not a GPU measurement, and `--quick` silently dropped a real gate
  while reporting "informational, not gated". Split: the cap gate always runs,
  the table needs `--dpr-timing`. **67.3s -> 6.0s.**
- **`skipped` vs `notRun`.** The dpr table first went into the list that
  flips the summary to PARTIAL, and a complete run announced itself as
  partial. That list means "questions this run did not ask"; an informational
  extra that gates nothing gets its own line and never changes the verdict.
  Honesty machinery that cries wolf teaches people to ignore it.

**Where the remaining 519s sits**, from the phase table (serial):
`render:weather-matrix` **188.1s (36% of the whole suite)**, then
`render:weather-transitions` 20.9s, `render:post-chain` 18.8s,
`render:bookmark-goldens` 15.2s. The four weather passes are independent of
each other and each boots its own page — that is the next lever, and it is
parallelism rather than thrift.

### What a bookmark visit actually costs

Measured with `npm run probe`, idle machine:

| | |
|---|---|
| `gotoBookmark`, first visit | 1361ms |
| `gotoBookmark`, revisit | 1060ms |
| the 150 settle frames | **76ms** |
| the post-load loop, 5 × (macrotask yield + render) | **1279ms** |
| one yield + render | 179ms |

Nearly the whole cost of a visit is the post-load loop, because each yield is
what lets a deferred SwiftShader raster land. The settle frames — the thing
that *looks* expensive — are 6% of it. Halving the loop would save ~30s
across ~45 visits, but it is the loop that stops a stale texture reaching a
golden, so it cannot be cut without a full golden pass as proof. Not done.

### Parallelism: which kind pays, and which does not

Two shapes of concurrency were measured, and only one works. The difference is
the whole lesson.

**Parallelising the four weather passes: rejected, 188.1s -> 180.9s.** They
share nothing but the browser, they were run under `Promise.all`, every check
passed — and it bought 4%. CPU went from ~490% to ~672% on a **10-core** box:
rasterising is *already* multi-threaded, so one `render` pass alone occupies
about five cores and four concurrent passes simply divide the same silicon.
The refactor (per-pass result arrays, fixed-order splicing) was reverted; the
serial code is simpler and within noise of the same speed.

**Sharding across processes: taken, 521s -> 346s (34%).** Same hardware, same
total work. It pays for the opposite reason: it pairs the raster-bound region
(`render`, ~50% of the run) against the wait-bound ones (journal, anchors,
moments — page round-trips, boots, polling), so the capacity one leaves idle
is the capacity the other uses. `npm run smoke:par` bundles **once**, then
runs two children with `--no-bundle --only=<set>` and merges their verdicts.

The rule this leaves: **parallelise work that waits against work that
computes; never compute against compute.** A second rasteriser on a saturated
box is not a second machine.

Safety properties of the shard runner, both checked rather than asserted:

- The partition is verified against `REGIONS` *before* anything runs, and a
  gap is a hard failure — "a shard set that does not cover every region is a
  green run that checked less than it claims."
- Coverage was also confirmed empirically: 221 unique check names in a serial
  full run, **zero** missing across the two shards. The sharded PASS total is
  higher (228) only because the always-on boot checks run in every child.
- Each child prints its own PARTIAL, correctly — it ran a subset. The merged
  summary states the coverage proof so the union is not read off trust.
- `npm run deploy` runs the **sharded** suite (Dan's call, 2026-08-03). It
  scrapes the same `FAIL` lines out of the same report — the runner replays
  each child's output verbatim — and the only visible difference is a higher
  pass total, because the always-on boot checks run in every child.

### Why the post-load settle was left alone

The obvious 30s: skip a visit's five post-load renders when nothing new
decoded. Measured over 16 visits (two laps of every bookmark in one boot),
counting completed page textures either side of each settle:

- 7 of 16 visits (44%) saw **no change** in the count.
- 3 visits saw the count **fall** (4->3, 4->2) — pages are evicted as the
  camera moves.

That last line is the finding. A falling count means the set of loaded pages
*churns*, so an unchanged count does not mean "nothing new to composite" — a
load and an eviction cancel out. A count-based skip is therefore unsound
exactly where it matters, next to the golden capture. A sound version would
track page identity and generation, which is not a small change; the ceiling
even then is ~22s of a 346s run. Not done, deliberately.

### Concurrency: the earlier rejection was narrower than it looked

Two shards were run as separate processes — `--only=render` against every
other region — on a fully loaded machine:

- **358s and 343s, both green**, wall clock 519s -> ~360s.
- **Coverage is identical**: 221 unique check names in the full run, zero
  missing across the two shards.
- **Goldens do not care about load.** Under full contention: skyline 0.178%
  (serial 0.180%), mid-805-far 0.100% (0.098%), lamp-hero-night 0.045%
  (0.052%). SwiftShader is a software rasteriser; the frames are unmoved.

So the rejection below stands only against what it actually measured — two
contexts *inside one browser* starving each other into a 30s `page.click`
timeout. Boot times do stretch under load (1.8s -> 3.5s mean), which is the
margin to watch. Two prerequisites before this could ship: bundle **once**
before the shards (concurrent `esbuild` writes to `src/dev-bundle.js` are a
genuine race — the experiment dodged it by staggering the starts), and a merge
step so one exit code and one profile come out. Not done.

### Two speedups that were tried and rejected

Recorded because both look obviously worth doing until measured.

- **Shortening the hush for the harness.** A localhost override on
  `interact.js`'s `HUSH_MS`, so the journal and anchor gates need not wait
  600ms per assertion. It made an assertion vacuous: those gates read "was
  anything credited at open?" over a Playwright round-trip that is *itself*
  slower than an 80ms hush, so the read landed after the credit and
  heard-at-open went 0 -> 1. Total saving would have been ~2s of 400s.
- **Running the journal and anchor gates concurrently.** 85s -> 68s, but the
  run failed: `page.click('#title-enter')` timed out at 30s because two
  SwiftShader contexts rendering at once starve each other (10-core machine).
  A timeout that looks like a real bug costs more than 17s saves. *Scope
  corrected at E0.3: this is a finding about two contexts in ONE browser, not
  about parallelism as such — see the sharding measurements above.*

## Goldens as measuring instruments (the contrast floor)

One aggregate check asserts every captured frame has luminance stddev >= 8
(of 255). A near-flat frame cannot register a regression: with few
distinguishable pixels a serious change still diffs under the 0.5% tolerance,
so the pose would be a gate that cannot fail. Goldens are all captured at
`SMOKE_HOUR` (13:00) precisely so they have contrast to lose — this check
makes that a measured property rather than a convention someone might quietly
break by adding a night pose. On a partial run that captures no goldens the
check is skipped and says so, rather than reporting "all 0 frames pass".

E2g.1 added exactly the night pose that convention was guarding against, and
it clears the floor on its own merits: `lamp-hero-night` reads **stddev 30.2**,
nearly 4x the floor — and it is *not* the flattest frame in the suite. Across
the full 40-frame run the minimum is **20.6**, on `golden-clear:mid-550-close`,
a daylight pose. A lit night street is a better diff substrate than a flatly
lit daytime frontage. That is the check doing its job rather than being
sidestepped: the night pose is allowed in because it was measured, not because
the rule was relaxed.

Note what this does *not* cover: the night checks (torch at 03:00, facade
darkening at 22:00) are deliberately dark, and they assert luminance
**ratios** — 36x torch-on vs off, 22:00 at 3.4% of 13:00 — never pixel diffs.
That is the right instrument for a dark frame, and why they are not goldens.

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

**The harness now renders on the GPU** (E0.4). `scripts/launch.mjs` launches
Playwright's `chromium` *channel* — the full browser — with
`--use-angle=metal`, and the WebGL context reports `ANGLE (Apple, ANGLE Metal
Renderer: Apple M4)`. Every run prints its renderer in the header line, so no
capture is ever ambiguous about which one produced it. `MCGROT_GPU=0` forces
the old software path back.

### Every speedup tried, and what it was worth

The whole ledger, so a future attempt starts from evidence instead of
re-deriving it. **847s → 74s across E0.3–E0.4.** Rejections are as load-bearing
as the wins — most of the entries below are things that sounded obviously right.

| Attempt | Verdict | Measured |
|---|---|---|
| Stop `legs` rastering all 2,280 frames it walks and looks at none of | **won** | 311.8s → 37.3s, gate numbers bit-identical |
| DPR timing table running on every full run | **won** | 67.3s → 6.0s; the DPR *gate* it hid behind now always runs |
| Shard the gate 2 ways across processes | **won** | 521s → 346s (34%) |
| Render on the GPU (Metal) instead of SwiftShader | **won** | 346s → 74s sharded, 133s serial |
| Cache the bundle across boots — *the lever the E5 gate named* | rejected | worth ≤4.4%, and unreachable: each boot is a fresh Playwright context with its own cache. Closed for good below — only 36ms of a 1482ms boot is network |
| Run the four weather passes concurrently | rejected | 188.1s → 180.9s (4%). Rasterising already saturated the cores |
| Skip post-load settle renders when no texture decoded | rejected | unsound: page textures churn, so counts *fall* between visits |
| Content-hash result caching (Bazel/Turborepo style) | rejected | `render` is 56s of 133s and nearly every source path routes to it; a cache that misses there saves nothing |
| Shard 3 ways instead of 2 | rejected | 74s → 68s (8%), gate only, for a hand-listed partition that rots |
| Speed up golden comparison | not a bottleneck | ~51ms per golden, ~2s across the set |

Two rules generalise out of that table, and both were learned the expensive way:

1. **Measure the lever, don't reason about it.** The two biggest wins (`legs`,
   the GPU) were found by the profile and by a throwaway experiment. The two
   most confidently-argued levers — bundle caching, and the standing ruling
   against a GPU — were worth 0% and −4× respectively.
2. **Parallelise work that WAITS against work that COMPUTES.** Sharding
   `render` against the wait-bound regions paid; four concurrent rasterisers
   did not. Note this rule was derived under SwiftShader, where rasterising was
   the compute — see the 3-way shard result for what it looks like once that
   is no longer true.

Before that, Playwright's default headless — the chromium *headless shell* —
had no GPU path at all and rasterised in software via SwiftShader, reporting
`ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device), SwiftShader driver)`. At the
`skyline` pose (945 draw calls) **one rendered frame cost ~160 ms of
wall-clock**, against ~2 ms of JavaScript. Most of the shape of this suite is
a response to that cost, and the rules below still hold — the frames just got
cheap.

That cost is invisible from JS. `renderer.render` only queues commands and
returns; the raster lands at the next `await`. So per-frame timing taken with
`performance.now()` around `stepFrame` — including `measureFrameTiming`'s —
measures command submission, not drawing, and will happily report ~2 ms for a
frame that takes 160 ms. Never size a settle from that number.

The suite used to draw every frame of every settle: 156 renders per bookmark
visit, six 700-frame weather settles, 52 ninety-frame short settles — roughly
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
### The GPU ruling, and how measurement overturned it

This section used to say **"do not enable a real GPU to make this faster"**, on
four reasoned grounds. E0.4 tested all four instead of arguing with them. Three
were wrong; one was right and is now a cost we knowingly carry.

| The claim | What measurement said |
|---|---|
| A hardware rasteriser is not deterministic | **Wrong.** Repeat captures are bit-identical within a boot; inter-boot jitter matches SwiftShader fraction for fraction (0 / 0.024 / 0.175% vs 0 / 0.030 / 0.184%). The `skyline` wobble shows identically on both, so it was never a renderer artefact |
| Every golden would need recapturing | **Wrong.** 39 of 40 held, all under 0.31% against a 0.5% tolerance. Exactly one moved: `golden-mobile:hud` |
| A forced-GPU flag can silently fall back, so you would not know which rasteriser produced a golden | **Right, and now fixed by construction.** Every run prints its renderer in the header |
| Goldens become tied to one machine's GPU and driver; a macOS update could move them | **Right, and accepted.** This is the real price of the switch |

The speed it bought, whole gate, this machine:

| | SwiftShader | Metal |
|---|---|---|
| serial | 514–521s | **133s** |
| sharded (`npm run deploy`) | 346s | **77s** |

**The gain is all in one place**, and that matters for predicting the next
lever: `gotoBookmark` fell 1285ms → 174ms, i.e. the post-load settle. Stepped
frames (240 in ~140ms) and screenshots (~150ms) cost the *same* on both — the
screenshot is dominated by PNG encoding on the CPU, and `stepFrames` draws only
its last frame. Nothing else in the suite got faster, and no other speedup
should be predicted from this result.

**The one golden that moved is a fidelity gain, not drift.** `golden-mobile:hud`
went 2.492%, and the control isolates the cause: the same full chromium build
forced onto SwiftShader reads 0.019%, indistinguishable from the headless
shell's 0.015%. So it is the GPU, not the browser build, and not a settle race
(30 further frames do not converge it). Both renderers advertise identical
capabilities — 16× anisotropy, 4× MSAA — so this is implementation fidelity.

Look at the pixels and the direction is obvious: at the mobile spawn pose the
near-field paving is a **flat black void under SwiftShader**, while Metal shows
the slabs, their joint lines and the tram rail. It is pose-specific —
`golden-mobile:street` teleports elsewhere and reads 0.001%. That golden had
been locking in an image that under-represents the mobile near-field ground,
so any visual work reviewed against it was reviewed on a picture no player
sees. SwiftShader exists only inside this harness; a real player is on a real
GPU. The recaptured golden is the more faithful one.

**If goldens ever move for no reason anyone can explain**, run `MCGROT_GPU=0`
first. A clean run under the software path points the finger at a driver
update rather than at the scene.

### Where the time goes now, and what is left (E0.4b)

Two follow-on experiments were run against the 74s gate. Both are recorded
here because the numbers, not the reasoning, are what should decide whether
anyone tries them again.

**Result caching keyed by content hash — not the lever, and not built.** The
idea was to skip regions whose inputs are byte-identical, reusing `SINCE_RULES`
as the dependency map. Measurement killed it: `render` is 56s of a 133s serial
run, and nearly every source path in `SINCE_RULES` routes to `render`. A cache
that misses on the one region that dominates every run saves nothing. The
measured inner loop is bimodal, and this is the number that matters for E8:

| Change | Routes to | `--since` cost |
|---|---|---|
| `src/journal.js` (leaf module) | journal, mobile | **15s** |
| `src/lamps.js` (anything visual) | lamps, render | **59s** |

E8's grade work is visual, so it takes the 59s path every time.

**A 3-way shard split — measured, 8%, rejected.** The 2-way partition was tuned
when `render` was 266s of a 515s run; on the GPU that inverted, and render's
shard (63s) now finishes 11s before the other. Splitting the twelve remaining
regions in two should have brought the wall down to render's floor. Measured:
74s -> 68s, not the predicted 63s — three concurrent browsers cost render's own
shard 5s. An 8% gain on the deploy gate, nothing for the inner loop, in
exchange for a hand-listed partition that rots the moment a region changes
cost. Reverted.

**What is actually left.** Wall time is bounded below by the largest single
region, because a region is the smallest unit `--only` can select. That floor
is `render`, and inside it:

| Phase | Cost |
|---|---|
| `render:weather-matrix` | 29.9s |
| `render:post-chain` | 7.0s |
| `render:scheduler` | 6.9s |
| `render:bookmark-goldens` | 4.4s |
| the other four phases | 8.1s combined |

Making `render:weather-matrix` separately selectable would drop the floor to
~35s and is the only remaining structural win of any size. It is not a tidy-up:
the phase opens by reading `drawCallsByBookmark`, accumulated by earlier phases
in the same region, so the split has to establish that the two halves are
genuinely independent before it can be trusted — the same check every region
had to pass before it was made skippable.

### The split, and what it turned out to be worth (E0.6)

**Done.** `weather` is now its own region. Two things about it were wrong in
the paragraph above, and both were wrong in the direction of caution:

*The independence was never actually in doubt.* The phase does not read
`drawCallsByBookmark` — the draw-call parity check that does sits **before**
it, and is now its own `render:draw-call-parity` phase. More to the point,
`--quick` had been shipping the whole suite with exactly this block skipped,
through the same unconditional re-pin that still follows it. A working
configuration was better evidence than the argument that replaced it.

*The floor is not `render`.* Measured after the split:

| Selection | Region time | Run total |
|---|---|---|
| `--only=render` | 22.4s | 26s, 43 PASS / 0 FAIL |
| `--only=weather` | 28.6s | 33s, 116 PASS / 0 FAIL |
| shard 2 (the twelve non-render regions) | — | **70s** |
| `smoke:par` (unchanged) | — | 74s, 228 PASS / 0 FAIL |

Shard 1 is `render` + `weather` at ~51s and shard 2 is 70s, so **the deploy
gate is bounded by the twelve small regions, not by `render`**. Splitting
`render` further cannot move it, and neither can a 3-way shard. The next
structural lever for the *gate* — if one is ever wanted — is on the other side
of the partition entirely.

What the split actually bought is the **inner loop**: `--only=render` went 56s
→ 26s, which is the loop E8's containment work runs in. That is a real win and
it is not the one that was predicted.

`weather` rides with `render` in the shard partition rather than becoming a
third shard, because moving 30s out of the 51s shard and into nothing would
have made the gate slower, not faster.

**`SINCE_RULES` gained `weather` everywhere `render` appears.** The four
non-overcast columns are goldens of the same scene, so anything that moves an
overcast golden moves them too — 27 of the 30 goldens that E8a's fault
injection moved are in `weather`. Not routing them together would have
recreated exactly the silent under-selection that the `src/post.js` rule was
fixed for the day before.

The golden comparison is NOT a bottleneck, measured rather than assumed: ~51ms
per golden (23ms PNG decode ×2, 5ms pixelmatch), so ~2s across the whole set.

**Boots, and the end of the bundle-caching thread.** Boots deserve a second
look on the GPU for a reason that is easy to miss: they were 4.4% of a
SwiftShader run and E0.3 dismissed them on exactly that ground, but they did
not get faster when everything else got 4× faster, so they are now **17.1%**
(22.6s across 21 boots, mean 1.1s). A share that rises because the denominator
shrank is still a bigger share — re-check a dismissal when the thing it was
relative to changes.

Having re-checked it: still not worth taking, and now for a definite reason
rather than a structural one. A single boot breaks down as

| | |
|---|---|
| network busy | **36ms** (8.4MB, 60 requests, localhost) |
| DOM content loaded | 135ms |
| `__mcgrotDebug` ready | **1482ms** |

so ~1.35s of every boot is **scene construction in JS** — merging 995 OSM
buildings, building the NPC set — and essentially none of it is transfer. That
closes the bundle-caching idea the E5 phase gate opened for good: it was never
about the network, and no cache header, faster static server or warm HTTP cache
can touch a millisecond of it. Making boots cheaper now means making the scene
build cheaper, which is product code with golden and determinism-hash blast
radius — a legitimate thing to want for the shipped load time, but not a
harness optimisation and not free.

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
dbg.renderNow();                        // draw WITHOUT running the updaters — how a forced state survives a frame
dbg.setPostProcessing(false);           // E2d: post pass on/off (what #post-toggle does on mobile)
dbg.setPostStrength(0);                 // E2d: 0 = every effect provably neutral, 1 = as authored (check 26a/26b)
dbg.post;                               // the post module itself: setTime/resize/getStrength/isEnabled

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

## Street lights (E2g)

`src/lamps.js` hangs a fitting, an emissive bulb and a share of a fixed
PointLight pool off scenery.js's existing catenary pole positions — one lamp
per station, alternating kerbs, 46 over the Walk. Intensity comes from
`atmosphere.js` and nowhere else.

### Lamps switch; they do not dim

The single most consequential finding of the milestone, and it was not in the
plan. `windowGlow` does not reach 0 in daylight — it reads **0.02 at 13:00**
and **0.15 at 08:00**, which is correct for a bulb behind glass and wrong for
a street light. Driving the lamps from it directly put four PointLights at
intensity 30 (the torch is 18) into every daylight frame. The wet-surface
specular that produced moved `golden-rain:fascia-close` by **11.1%** and
`golden-clear:mid-805-far-08` by **4.1%**. A smoothstep whose floor sits above
the 08:00 reading takes those to 0.000% and 0.116%.

The earlier "four zero-intensity PointLights render a byte-identical frame"
measurement did not catch this, and the reason is worth keeping: it used a
literal zero, which is not what the scene was ever going to supply. **A
measurement of the value you hope for is not a measurement of the value the
system produces.**

### Sizing the pool: the harness cannot do it

The roadmap asked for the pool size to be measured with
`__mcgrotDebug.measureFrameTiming`. That function times **command submission,
not raster** — smoke.mjs's own DPR caveat says so — and reads ~5ms on frames
SwiftShader spends ~250ms rastering. Its curve against light count is not even
monotonic.

Forcing the raster into the timed window with `gl.finish()` does not rescue
it. Sweeps in both directions put every configuration in a 235-490ms band with
no consistent ordering, and the apparently cheap row is always **whichever is
measured first** (2-5ms) regardless of its light count. Up to 16 camera-local
lights produce no step change at all.

So the pool size is **reasoned, not measured**: 4, one more than the
arc-flash trio that already ships. Re-check it at the E2f device round, where
a real GPU and a real thermal budget can say something this harness cannot.

Two things the sweep did establish, both load-bearing:

- **Changing the light count invalidates every material program**, and
  SwiftShader rebuilds them lazily at seconds per frame. The pool is allocated
  once at boot and only ever has its intensity and position modulated. Gated.
- `POOL_RANGE` and `LIGHT_DISTANCE` are set against `POLE_SPACING`, not picked
  for feel. A first pass at 26 m / 24 m measured as exactly **one** active
  light at any time — 35 m spacing means a second lamp is never in range — so
  three of four pool lights were dead weight and the lit pools never met.

### The gates (region `lamps`)

- **The street is legible at the darkest hour.** 03:00, torch off, centreline
  ground pose: 63.9% of the lower two-thirds at or above luminance 12. The
  **control** is the identical pose on a lamps-off boot, which reads 0.0%.
  Without it the gate passes on moonlight. The torch is off in *both* arms —
  left on it puts the same large term on both sides and shrinks the lamps'
  own contribution to a rounding error.
- **Lamps hang off the catenary poles, one per station.** Count, median gap
  (39.6 m) and span (1567 m). The gap and span clauses exist because fault
  injection beat the count-only version: pointing every lamp at the wrong pole
  clustered all 46 down half the street and left the gate green, since 46
  comes from the loop bound and not from the geometry.
- **The light pool is allocated once and never resized.** PointLight count
  across 00:00-21:00 must be one distinct value.
- **Lamps are fully off in daylight, not merely dim.** Pool intensity exactly
  0 at 09:00 and 12:00, non-zero at 00:00 and 21:00. The 09:00 sample is the
  one that earns its keep — an injection that restored the raw `windowGlow`
  curve read 168.7 at 09:00 and a passing 0 at 12:00.
- **The light pool follows the camera.** Stands under a named lamp and asserts
  a pool light lands on it within 0.01 m, and that more than one light is
  active. Asserting the numbers merely changed would pass on a pool that
  jitters.

### The two night gates were re-derived, not relaxed

Street lighting is a second light source landing on the very surfaces both of
these read, so both had to change. Neither number moved.

- **`night darkens facades`** is E2a's detector for a night that renders like
  daylight. With the lamps lit the same pose reads **57.7% against a 45%
  ceiling**. Raising the ceiling would have kept it green while deleting what
  it detects, so it runs on a **lamps-off boot** with
  `NIGHT_LUMINANCE_RATIO_MAX` untouched, isolating the subsystem it was built
  to test.
- **`torch lights a readable surface`** likewise: 36.4x on/off becomes
  **1.20x** once the street is lit, because the torch is no longer the only
  light reaching the comic. Same isolation, `TORCH_MIN_RATIO` untouched. It
  shares the lamps-off boot.

- **`night stays night with the lamps lit`** is the new gate covering what
  isolation gave up. It reads the **top strip** rather than the upper half:
  with the lamps lit that is 19.1% of daylight against the upper half's 57.7%,
  which is the difference between a usable ceiling and none. The **control**
  is the same measurement on the lamps-off boot, at 2.4% — without it a build
  with no lamps at all passes trivially.

  The strip was **assumed** to be beyond the lamps' reach and measured
  otherwise (lit façade tops intrude at this pose). That it responds to lamp
  brightness is precisely what lets it catch a `LIGHT_PEAK` cranked until
  night reads as day — injected at 25000, it fails at 41.6%.

### What this deliberately does not prove

- **No golden frames a lamp.** Every golden held at the noise floor with the
  lamps enabled, and the draw-call budget rose by exactly 2 — so the fittings
  are being drawn, and no bookmark pose has one in shot. The golden suite
  therefore provides **zero** coverage of the new geometry; the `lamps` region
  is the only thing watching it.
- **A night golden is now possible for the first time**, and is the obvious
  follow-on. Night frames previously failed the contrast floor (stddev >= 8)
  for want of anything lit; a sodium-lit street clears it comfortably. Not
  done here — it wants its own bookmark and a deliberate capture. **Done in
  E2g.1** (below): `lamp-hero-night` frames a fitting and its pool, and the
  golden set now covers the lit street.
- **Nothing about a real GPU.** See the pool-sizing note above.

## Turning back (E5d part 1)

`src/legs.js` watches the player's chainage and fires a **hinge** on arriving
at an end of the Walk that is not the end the last hinge fired at.
`atmosphere.nudge()` decides what the street becomes. legs decides WHEN,
atmosphere decides WHAT — a second clock or weather roller in a new module is
how the sky and the street end up disagreeing.

### The number the unit exists to beat

A 1617 m leg at `WALK_SPEED` 14 m/s takes ~115 s, which at
`HOURS_PER_REAL_MINUTE = 1` is **~1.9 sim hours of drift you get for free**.
That is why the acceptance gate names a control: an out-and-back drifts 3.55 h
on its own, measured, so "the return leg is a different street" without a
hinge-disabled arm is a claim about having walked slowly. With the control,
the hinge's own contribution is **10.00 h** (two turnarounds at
`TURNAROUND_HOURS` 5).

### The gates (region `legs`)

Both arms walk the identical route over the identical number of stepped
frames, so the free drift is common-mode and the difference is the hinge.

- **The return leg is a different street (opposed pair).** The gate above.
  It also requires the control to drift **more than 0.5 h** — if the control
  reads zero, the comparison proves nothing and the gate should not be
  believed.
- **No hinge on boot, despite spawning inside the north end zone.**
- **The hinge fires once per arrival, not once per frame in the zone.**
- **The weather roll is deterministic in (day seed, leg).** Same seed twice,
  identical; a different seed, different.
- **The turnaround roll steps along the weather adjacency** — no downpour into
  a clear sky.

**Frames, and why the rate is cranked.** Reproducing 1.9 h literally costs
~13,800 stepped frames for the pair. Hours are rate x minutes, so 12x rate
over 9.5 s of stepped time gives the same 1.9 h in 570 frames. The hinge does
not read the rate, so this changes the cost and not the measurement.

### Two product defects the gates caught

Both were in the product, not the harness, and neither was visible by reading.

- **`nudge()` originally called `atmosphere.setTime()`**, which pins `rate` to
  0 so the harness can hold a posed frame still. Correct there; in the product
  path it stops the day/night cycle **permanently at the first turnaround** —
  the street you walked back down would never change again. It surfaced only
  as an arithmetic discrepancy: an 8.18 h hinge contribution where two 5 h
  hinges owed 10 h. Nobody would have noticed by looking.
- **The roll read `settledWeather`**, which lags a `setWeather` transition by
  `WEATHER_TRANSITION_SECONDS`. A second hinge inside that window re-rolled
  from the stale base and could walk straight back to the weather it had just
  left. Reads the in-flight target instead.

### And one gate that was decoration

The boot gate read `legs.state()` **before any `legs.update()` had run** —
`bootPage` never drives a frame — so it could not observe a boot hinge under
any fault whatsoever. Found only because an injection that should have
reddened it did not. It now steps frames first, and reddens correctly (1 hinge
before the player has moved).

The same injection corrected which line actually arms the machine: it is
`zone` initialised from the start position, not `lastHingeZone`. The spawn is
chainage 0, inside the north zone, so a machine starting at `zone = null` sees
a null -> north transition on its first update and hinges before you move.

### What this deliberately does not prove

- **Nothing about the ending** — E5d part 2 is not built. No gate here touches
  the Foot beyond treating it as a turnaround.
- **Nothing about how a hinge feels in play.** The gates measure that the
  clock and weather changed by the right amount; whether arriving back at a
  five-hours-later street reads as intended is Dan's call, not a number.
- **No golden covers it.** All 27 are captured at boot on leg 0, and no
  bookmark sits inside either 40 m end zone — verified by the goldens holding
  at the noise floor with the flag enabled.

## Leaving (E5d part 2)

`src/ending.js` offers the haar off the Forth at the Foot, once you have
turned back at least once. Stepping into it runs a ~10 s close — fog thickens
and lifts toward a pale haar, exposure falls, the camera drifts north over the
water — then a card offering "keep walking".

### The hand-off is the architecture, and a gate proves it

`atmosphere.js` reapplies the entire palette every frame. A sequence that
wrote `fog.density` and `toneMappingExposure` directly would be overwritten
before a single frame of it was ever seen. `atmosphere.setSuspended(true)`
stops it painting and hands those fields over; resuming repaints immediately,
so nothing the sequence leaves behind can survive into a visible frame.

Fault-injecting the suspend call away is the cleanest demonstration in the
suite: with it removed, the "closes the street" gate reads fog and exposure
**identical to the control** (0.0095 / 0.7333) after the full sequence has
supposedly run. The hand-off is load-bearing, not ceremony.

The clock keeps advancing while suspended, so resuming lands on the hour it
would have been.

### The gates (region `ending`)

Two boots run the identical script and diverge at exactly one point: one steps
into the haar, the other does not.

- **The close is offered at the Foot only after turning back (opposed pair).**
  On the same spot at leg 0: `canOffer()` false, `begin()` refuses, prompt
  hidden. After turning back, leg 2: offered. An ending you can walk into in
  the first ten seconds is a trapdoor, not a close.
- **Stepping into the haar closes the street (opposed pair).** Fog must exceed
  **3x the control's** and exposure fall below it, and the camera must move
  >20 m. The control is what stops this passing on the clock simply rolling on
  underneath both arms.
- **Atmosphere is suspended for the close and only for the close.**
- **"Keep walking" hands the street back, matching a boot that never ended.**
- **The mid-close frame is a picture, not a blackout** and **the deepest frame
  of the close is still a picture** (E2g.1 — see that section for the bands,
  the fault injection, and why two frames rather than one).

### Why the restore gate needs a second boot rather than a snapshot

The first version compared the resumed state against a snapshot taken *before*
the close, and read **0.5694 vs 0.5700** — an apparent hand-off failure that
was nothing of the sort. The turnaround hinge starts a weather transition, and
`WEATHER_TRANSITION_SECONDS` of it was still settling underneath; the settle
frames after resume advanced it. Comparing against a second boot stepped the
identical number of frames removes that common-mode term, and the two now
match exactly.

This is the same shape as E5d part 1's free-drift problem and E2g's
"lamps on vs off": **a before/after snapshot is not a control when something
else in the system is still moving.**

### One product defect the eyeball caught, not a gate

The close was a **blackout**. Easing exposure to 0.12 with a per-frame
approach-the-floor step reached black inside a second and then held a black
frame for nine more — every numeric gate passed, because fog was up and
exposure was down exactly as asserted. Only opening the mid-sequence capture
showed there was nothing to look at. Haar off the Forth is pale, so the fog
colour now lifts toward it and exposure falls only far enough to take the
contrast out; the mid frame reads as shopfront signage dissolving into mist.

**The gates cannot see this class of defect** and should not be trusted to.
Capture the sequence and look at it after any change to its curves.

### What this deliberately does not prove

- **Nothing about the framing.** The captures force a `lookAt` north over the
  water; where the player is actually facing when they step in is not
  controlled, and "the street recedes" depends on it.
- **Nothing about the audio.** "Voices merging" is currently just
  `ambience.setDucked(true)` — the right direction, not the written intent.
  A real merge wants an ambience API that does not exist yet.
- **No golden covers it**, and none should: the close is a transient.

## Night coverage and the picture gates (E2g.1)

Three additions, all instrument rather than feature. Nothing the player sees
changed; `src/ending.js`, `src/lamps.js` and `src/legs.js` were not touched.

### The night golden (`lamp-hero-night`)

E2g lit the street and no golden framed a lamp, so the whole night look was
uncaptured — and E8's landing recaptures every golden it can see. What it
cannot see, it ships blind.

- **The pose.** A custom (absolute) camera on the centreline ~25 m short of
  the lamp at station 20, looking up-street and ~3.5° above the horizon:
  fitting, pool on the road, roadworks near camera, two shopfront fascias,
  unlit rooflines. Defined in `NIGHT_BOOKMARK_DEFS` in `src/debug.js`, which
  is **separate from `BOOKMARK_DEFS` on purpose** — everything iterating
  `bookmarks` (the draw-call budget, the anchors on/off diff, all five weather
  passes) would otherwise pay for a daylight column of a pose picked for the
  dark.
- **Captured at 22:00 overcast only**, on its own boot, since `page1` is
  pinned to `SMOKE_HOUR` and every later check in that region reads that
  state. One golden, not a weather column.
- **Measured:** 1131 draw calls (baselined in `budget.json`); stddev 30.2;
  three further runs diffed **0.047%**, **0.062%** and **0.052%** against the
  capture — the same order as the documented sky-FBM jitter, and far under the
  0.5% tolerance. The
  arc flashes were the determinism worry going in — three randomised
  PointLight pulses are far more visible after dark — and at this pose they do
  not move the frame measurably.
- A pose 7 m closer framed the fitting larger and was **rejected**: it stood
  inside an NPC's proximity radius, and the interaction prompt is a DOM
  overlay that `page.screenshot()` captures. That golden would have carried a
  piece of proximity state.
- **No clip-control check runs on it.** `CLIP_PCT_MAX` is E2c.1's overcast-
  *daylight* criterion; a lamp bulb is an additive emissive that is meant to
  be the brightest thing in the frame.

A bookmark added after `budget.json` was written now has its entry **added in
place**. The wholesale rebuild deliberately does not trigger on a missing
entry: that would re-baseline every existing pose off one run's counts and
quietly absorb a real drift.

### The picture gates on the close

E5d's ending passed every fog and exposure assert while rendering nine seconds
of black. Numeric gates cannot see a bad picture, so these two measure the
picture: mean luminance inside a band ("neither black nor blown out") plus the
goldens' own contrast floor ("there is still something to look at"). Both
frames are written to `docs/smoke/captures/`.

| Frame | Shipped | Haar turned black | Band |
|---|---|---|---|
| t=5s (`ending-mid-close.png`) | mean 55.5, stddev 53.1 | mean 20.7 | 25–200 |
| t=9.5s (`ending-late-close.png`) | mean 85.9, stddev 83.6 | mean 4.5, stddev 7.9 | 30–210 |

Both arms of the opposed pair are stepped in the same chunks, so the total
frame count is unchanged and the existing gates still compare like with like.
t=9.5s is one frame short of the card, which covers the screen once `phase`
reaches `ended`.

**The brief's fault injection does not work, and that is worth recording.**
E2g.1 specified re-introducing `EXPOSURE_FLOOR = 0.12` and expected red. It
does not go red: it moves t=5s from 55.5 to 51.1 and t=9.5s from 85.9 to 80.7.
The reason is that E5d's blackout was never the floor *value* — it was the
per-frame approach-the-floor step, which reached black in about a second and
was replaced by an ease across the whole sequence. With the ease, the fog has
already lifted the frame toward pale haar and a low exposure barely dents it.
Setting `HAAR_COLOUR` to black reproduces the actual defect class — a close
that fades to nothing while every numeric assert stays green — and takes the
late gate red on both the mean and the contrast floor. The bands above are set
from that injection, not from the shipped reading.

### The hinge's evidence pair (not a gate)

Both `legs` arms have just walked the identical out-and-back and stand on the
same spot at the Foot; the only difference is the hinge. Each writes a frame:
`hinge-return-on.png` is that spot at night, torch-lit, with the close being
offered; `hinge-return-off.png` is the same spot in flat daylight. The clock
arithmetic already gates "the return leg is a different street" — this is the
same claim as a picture a reviewer can open. Nothing diffs them, and nothing
should: the hour the walk lands on is a product of the walk.

Each arm is stepped one extra frame immediately before its capture and the
screenshot timeout is raised to 120s. The first version timed the whole suite
out on the *second* capture: a page idle since its last `stepFrame` does not
reliably hand the compositor a frame inside Playwright's default 30s with two
live SwiftShader contexts.

### What this deliberately does not prove

- **The night golden covers one pose at one hour.** Nothing frames a lamp in
  rain, in haar, or at 03:00 — the hour the legibility pair uses. A night
  weather column was considered and rejected as cost without a question
  attached; if E8's grade turns out to read differently by weather after dark,
  that is the moment to add one.
- **The picture gates are floors, not judgements.** A close that is grey mush
  at the right average brightness passes. They catch black and blown-out; they
  cannot tell you the sequence is *good*, and the standing instruction to open
  the captures after touching its curves still holds.
- **The mid frame carries no fault-injection evidence of its own.** The
  injection that proves this class of gate can go red fails the *late* one
  first. The mid gate is kept because the sequence's failure modes are not all
  monotonic, but it is the late frame that has been shown red.
- **Nothing about draw-call cost after dark on a real GPU.** Unchanged from
  E2g: SwiftShader rasters outside every timed window. E2f owns it.

## Character meshes: selection and per-vendor scaling (E3b)

`src/characters.js` — five generated meshes standing in for 124 paper dolls,
staged behind `CHARACTERS_ENABLED` and overridable on localhost with
`window.__mcgrotForceCharacters`, exactly as `ANCHORS_ENABLED` /
`__mcgrotForceAnchors` are. `scripts/probe.mjs --characters=on|off` drives the
same override.

E3b existed to answer one question with a picture: **five meshes across 124
vendors is 24.8x reuse, ten times the 2.6x the faces already get away with —
does per-vendor scaling close that gap, or does a squashed figure just read as
a bug?** Everything below is what the answer cost and what is now held.

### The ruling: selection does the matching, scale carries only the residual

Stretching one mesh across the catalog's girth range (0.50 to 1.60) is a 3.2x
squash and would have read as a bug. It is never asked to. Each vendor is
assigned the archetype whose OWN proportions are nearest its build triple, so
scale only has to carry what selection could not match. Measured over all 124
vendors, twice and independently — once offline from `catalog.json`, once off
the rendered transforms via `characters.measure()` — the residual is **0.735 to
1.253**, and 90% of vendors sit inside 0.79–1.25. That is a nudge.

The archetypes' own triples are **measured off the glbs**, by
`scripts/glb-proportions.mjs`, and mapped into catalog units by matching
z-scores. Taking them from the generation prompt would have been asserting
them, and they are the denominator of every scale factor:

| Archetype | file | width/height | head/torso | girth\* | headScale\* | vendors |
|---|---|---|---|---|---|---|
| bulk | rab-form | 0.684 | 0.331 | 1.420 | 1.198 | 19 |
| slab | slab-form | 0.582 | 0.342 | 1.195 | 1.204 | 33 |
| runt | runt-form | 0.455 | 0.802 | 0.918 | 1.470 | 26 |
| stoop | morag-form | 0.362 | 0.828 | 0.712 | 1.485 | 7 |
| spindle | kenneth-form | 0.347 | 0.607 | 0.680 | 1.357 | 39 |

**Regenerate a mesh and these must be re-measured**, or every vendor assigned
to it silently inherits the old mesh's residual.

### Where headScale went, and what it cost

A Trellis mesh is one primitive with no separable head, so of the build
triple's three axes only two survive directly. `headScale` is not redundant —
measured across the 124 it correlates 0.03 with height and 0.23 with girth, so
it is real variation — and its only outlet is selection. Girth has two, since
the residual picks up whatever selection misses.

Weighting the head axis in the selection metric therefore trades directly
against squash, and the trade was swept rather than guessed:

| head weight | worst squash | correlation, vendor headScale vs assigned |
|---|---|---|
| 0 | 1.14 | **−0.25** |
| 0.15 | 1.25 | 0.07 |
| **0.25** | **1.25** | **0.18** |
| 0.40 | 1.63 | 0.34 |
| 1.00 | 1.69 | 0.66 |

Weight 0 is not merely blind, it is **wrong**: big-headed vendors get
systematically handed the no-neck archetypes. 0.25 is the knee — it buys the
anti-correlation out for the same worst case as 0.15, and the next step up
costs 30% more squash for 0.16 more correlation.

### What the picture said, and the two things it caught that no number did

Judged on a contact sheet of ten vendors — for each archetype, the one
squashed narrowest and the one stretched widest, all at 3.4m. **Greenlit: at
0.74 and at 1.25 the figures read as ten different people, not as one figure
distorted ten ways.** Against the doll control the gap is not close.

Two defects were visible only in the picture, and both would have passed every
numeric gate in this file:

- **The whole crowd faced the wrong way — and then it didn't.** The first
  sheet had every mesh backed to the camera, so a 180° yaw was applied and duly
  turned them all round. The dolls had their backs to the camera too: every
  street bookmark stands 12m off the centreline while the vendors stand 6m off
  it facing inward, so all eight photograph the crowd from behind, by
  construction. The measurement that settled it was the dot of a vendor's
  forward against the direction to the camera — −1.00, −0.78, −0.45 — and it
  showed the "fix" had rotated the whole street away from the street it faces.
  Trellis reconstructs facing +Z, which is the doll's own front. No yaw
  correction is applied and the comment in `normalise()` says why.
- **The scarf does not survive the swap.** The E3 plan kept it as the
  per-vendor colour note. A neck-height accessory needs a neck, and measured
  with `glb-proportions`, Slab's and Stoop's width never dips between shoulder
  and head — the collar search returns the top of its own search range, a
  boundary hit dressed as a measurement. At the doll's height the scarf reads
  as a gag across the mouth; at the measured "collar" it sits in Morag's hair.
  It is hidden on meshed vendors, and the colour note has to come from the
  per-vendor tint pass instead. **That is a change to the E3 plan, not an
  omission from it.** `collarY` is still reported by `glb-proportions` as the
  evidence, and consumed nowhere.

The comic plane needed re-hanging for a duller reason: it was positioned from
the doll's box depth and ended up inside several bellies. It is now placed from
the archetype's measured `frontZ`, scaled by the vendor's own squash.

### The gates (region `characters`, 5 checks, ~5s)

Every number is read off the live scene's transforms and geometry through
`characters.measure()`. None re-runs the selection: a gate that called
`vendorTransform()` a second time would pass on a build that computed a
beautiful assignment and rendered none of it.

- **The shipped default leaves every paper doll intact.** The control, and the
  one that matters while the flag is off. Not "the flag reads false" — every
  doll part visible and no vendor tagged is what proves nothing ran.
- **Every vendor is meshed, all five archetypes used, 620 doll parts hidden.**
- **Every mesh stands at exactly the height of the doll it replaces.**
  `dollTop` comes from the hidden box meshes' own geometry, so this compares
  two independently-built figures rather than one formula against itself. Worst
  0.000%; the 0.5% budget is headroom for the idle sway, not for drift.
- **No vendor is scaled past the distortion the crowd was judged at**
  (0.70–1.30). If a future archetype swap or catalog change pushes a vendor
  out, the crowd has stopped being the crowd that was looked at and approved.
- **Meshes cost triangles at skyline and refund draw calls.** Direction only,
  numbers in the detail — the exact deltas move with any scene change.

All five fault-injected, one at a time, each restored after:

| Injected fault | Goes red |
|---|---|
| `CHARACTERS_ENABLED = true` | shipped default — `tagged=124, hidden=744` |
| drop the `stoop` archetype | coverage — 4 archetypes, spindle absorbs 45 |
| reinstate E3a's flat `TARGET_HEIGHT = 1.9` | height — worst 19.355% (Gurney Girnigoe) |
| `HEAD_WEIGHT` 0.25 → 1.0 | distortion — 0.628–1.688 |
| stop hiding the doll bodies | coverage AND cost — `1103 -> 1103` |

The `HEAD_WEIGHT = 1.0` injection is worth noting twice: it reproduces the
sweep table's 1.69 from the rendered scene, so the offline sweep and the live
measurement agree to three figures by two different routes.

**What these gates deliberately do not prove.** Nothing here can see whether
the crowd reads as five clones; that is the contact sheet's job and it has to
be re-looked-at whenever an archetype changes. Nothing here checks a mesh's
facing, its materials, or where its props sit — all three were caught by eye,
and the yaw in particular is invisible to a draw call, a triangle count and a
bounding box alike.

**Measuring in the vendor's frame, not the world's.** `characters.measure()`
expresses each instance's bounding box in its vendor's coordinates.
Leith Walk curves, so every vendor faces a slightly different way, and a
world-axis-aligned box reads a figure turned side-on as its depth rather than
its width. Doing it the naive way made the same crowd measure 0.66–1.48
distorted instead of the 0.74–1.25 it is — the yaw swamping the signal. Note
also that a `Box3` grows to the axis-aligned hull every time it is
transformed, so applying a world matrix and then its inverse does not undo it;
`localSize()` composes the two matrices first and transforms once.

### The cost, measured at `skyline` (the only pose that sees the whole street)

| | dolls | meshes |
|---|---|---|
| Draw calls | 1,103 | **404** |
| Triangles | 306,435 | **573,894** |
| Renderable objects per vendor, unculled | 13 | 3 |

**The swap SAVES draw calls, and this inverts E3d's premise.** A paper doll is
13 draw calls per vendor because its head is a BoxGeometry carrying six
materials, one per face; a meshed vendor is 3, of which the body is 1. The
roadmap had the doll down as the cheap distance LOD — it is cheap in triangles
(134 against ~4,100) and expensive in draw calls. Which of the two matters is
what E3d has to measure before it picks a crossover; "the doll is cheaper" is
now known to be false as a general claim.

The 470,084-triangle figure for 124 meshes is the sum over the actual
assignment, not 124 x the largest archetype. The roadmap's 651,496 was the
latter and is retired.

## The speaking tell, and the colour note (E3c)

Two things that had to move because a Trellis mesh is a single primitive: the
tell that said "this one is reading", which lived on a head node the mesh has
not got, and the per-vendor colour note, which lived on a scarf that needs a
neck two of the five archetypes do not have.

### The tell moved from the head to the whole body

`npcs.js:tick()` used to turn a vendor's head 5 degrees at 4Hz while speaking.
A meshed vendor physically cannot do that, and leaving it on the doll would
mean the two LODs perform differently and E3d's swap pops mid-sentence. The
tell is now a roll on `group.rotation.z` plus a small yaw on `.y`, composed
with the idle sway that was already on both, and `setSpeaking(false)`'s head
reset is gone because the head no longer moves at all.

**Roll and yaw only, never pitch.** three's default `XYZ` euler composes as
Rx·Ry·Rz, so the Z term is applied innermost — in the vendor's own frame — and
an X term would be applied *after* the street-facing yaw, about the world axis.
Leith Walk curves, so a pitch would have tipped half the crowd sideways. Yaw
needs no such care: it adds to `baseY` on the same axis.

**The amplitude is set by the tell it replaces, not by the plan.** The roadmap
said ±2°. That was written before anything was measured, and a still cannot
tell a mutter from a shiver. What can be measured is the retired tell —
reproduced *by the probe* on the live scene (so the pivot, the radius and the
frame are the real ones, not arithmetic on paper) and read at the same physical
point, the centre of each vendor's face:

| `SPEAK_ROCK` | face peak speed vs the retired head tell, 124 vendors |
|---|---|
| 0.035 (the plan's 2°) | median **1.45×**, range 1.08–1.81 |
| **0.024 (shipped)** | median **1.03×**, range 0.77–1.29 |

So the street now carries the same amount of motion it always did, moved off
the head and onto the figure. Head-top excursion at parity is 8.4cm peak to
peak against a 0.7cm idle-sway floor.

The tell also fades rather than switching: `leanAmp` eases toward 0 or 1 at 8
e-folds per second, driven by `dt` (which is why `npcs.update` now passes it
through to `tick`), so a vendor does not snap upright the instant its audio
stops, and does so at the same wall-clock rate at 60Hz and 120Hz.

### The colour note moved from the scarf to the mesh's own material

Read off **the vendor's own scarf material**, not by re-hashing its name — the
same discipline `measure()` uses. A mesh that recomputed the hash would agree
with the doll by construction; this one agrees because it read what the doll is
wearing, and E3d's LOD swap therefore cannot change a vendor's colour mid-street.

Applied as chroma only (each note normalised by its own average, so it
recolours without darkening) and **equalised**, which the scarf never needed to
be. The palette's six entries carry very different amounts of colour —
`0x6b3328`'s deviation from neutral is 2.7× `0x2e4640`'s. Fine on a 9cm band;
not fine on a whole figure. Photographed side by side at full palette strength,
the red vendor read as a different coat and the green one was indistinguishable
from no tint at all. Each note now keeps its direction and gets one length,
0.27 — the red note's own former strength, i.e. the one that was judged.

Measured on the rendered frame, tint on against tint off:

| note | vendor | figure px | hue shift R / G / B (percentage points) |
|---|---|---|---|
| `6b3328` | Dod McAvity | 4.0% | **+6.85** / −3.08 / −3.77 |
| `2e4640` | Senga MacRurie | 4.4% | −6.67 / **+4.92** / +1.75 |
| `3d3453` | Shug McGubbin | 5.6% | −1.96 / −4.39 / **+6.35** |
| `664a1e` | Tam MacGeoch | 5.0% | **+5.40** / −0.48 / −4.92 |
| `59422e` | Dougal MacEwing | 4.6% | **+5.59** / −1.07 / −4.52 |
| `705c23` | Ina MacRimmel | 7.4% | **+4.78** / +0.52 / −5.29 |

**Two dead ends in getting that table, both worth keeping.** The first attempt
compared two separately-booted pages: 51–85% of every clip "changed", because
film grain resamples off the sim clock and two boots differ everywhere. The
measurement was rebuilt to capture, divide each material by its own note, call
`renderNow()` (which redraws without stepping the clock) and capture again —
one page, one frame, the tint the only difference. The second attempt then
reported a 32% brightness shift for one vendor, which was the comic texture
streaming in *between* the two captures. **A control that is a second boot is
not a control in a scene with per-frame noise and async asset loads.**

### What it cost

Nothing, at the pose that sees the whole street:

| | 5 shared materials | 124 per-vendor materials |
|---|---|---|
| `skyline` draw calls | 404 | **404** |
| `skyline` triangles | 573,786 | **573,786** |

`Material.clone()` copies the texture *reference*, so 124 materials still share
the one archetype texture; the clone costs 124 sets of uniforms, not 124
textures. Draw calls are per-mesh, and each instance was already its own Mesh.
E3b's warning that the tint would spend the draw-call refund it had bought
turns out to be wrong, and it was wrong by measurement rather than by argument
— `window.__mcgrotForceTint` (localhost-only, like `__mcgrotForceCharacters`;
`probe --tint=on|off`) exists so the gate boots the *same build* both ways.

### The five gates, and what went red

| Injection | What reddened |
|---|---|
| `SPEAK_ROCK = 0` | tell 1.0× (need 4×), parity 0.144, mesh tell 1.0× |
| `SPEAK_ROCK = 0.048` | **parity only**, median 1.950 — the travel gates still pass at 23.5×, which is the point of having both |
| restore the `head.rotation.y` bobble | tell (head rotation 0.09, must be exactly 0), parity 1.976 |
| `scene.add(inst)` instead of the vendor group | mesh tell — "not parented to the transform that carries the tell"; also E3b's distortion gate |
| stop cloning the material per vendor | note — 5 materials, hue agreement **−0.966** (vendors wearing each other's notes) |
| drop the equalisation | note — strength 0.529–1.464, not 0.270 |
| tint ignores its own off switch | cost — the control booted with 124 materials, not 5 |

The parity gate and the travel gates are deliberately separate: an amplitude
bump is invisible to "did it move" and obvious to "how fast".

**What these gates deliberately do not prove.** Whether 1.6Hz reads as a mutter
or a twitch is a motion judgement, and nothing here can see motion — the strip
in the judging capture shows the two extremes of one cycle and no more. What
stands behind the amplitude is the parity measurement, not a look at it. The
note gates check that every vendor wears its own note at one strength; whether
0.27 is the right strength was judged on the pictures above and is a taste that
a future grade change could invalidate without reddening anything.

E8 is a prototype loop, not a landing: candidates are judged from pictures and
the shipped frame must not move while it runs. Two things make that hold.

**The containment is a branch, not a multiply.** `uStyle` ships at 0 and the
whole grade lives inside `if (uStyle > 0.0)`, so the neutral path executes the
same instruction sequence it did before E8 existed. A multiply-by-zero would
have been *arguably* exact; a branch needs no argument.

**Check 26a is already the gate for it, at no extra cost.** 26a asserts the
post frame at `uStrength` 0 is bit-identical to `renderer.render()`. The style
block is gated on `uStyle`, not `uStrength`, so a style that leaked into the
shipped build breaks 26a whatever `uStrength` is doing. Fault-injected by
shipping `uStyle: 0.6`:

| Check | Green | Fault-injected |
|---|---|---|
| `post: neutral strength is bit-identical` | 7/7 states exactly equal | **FAIL** — 1,023,817 of 1,024,000 px differ, max channel 147, in all 7 states |
| every golden | 0 FAIL | **FAIL** — 30 goldens, 36–63% of pixels |
| `night stays night with the lamps lit` | pass | **FAIL** — 43.1% vs the 30% ceiling |
| `torch lights a readable surface` | pass | **FAIL** — 1.66× vs the 2.5× floor |

No new gate was added, and none was needed: the containment axis was chosen so
that an existing falsified gate covers it.

### The judging rig (`npm run style`)

`scripts/style-sheet.mjs` renders 8 bookmarks × 3 conditions × every preset.
**24s for the whole round on Metal** — measured, against a pre-build estimate
of ~2 minutes. It is cheap for a structural reason worth keeping: the grade is
a set of post-pass uniforms, so one settled pose is re-rendered through every
preset via `renderNow()` (which draws without stepping updaters). 24 poses, not
24 × presets. Adding a fifth preset costs about a second.

Two products, because they answer different questions:

- `sheet-<condition>.png` — 8 × presets, downscaled 3.2×. Composition, palette,
  whether the façades survive.
- `detail-<condition>.png` — 1:1 centre crops. **A 3px halftone cell does not
  survive the contact sheet's downscale.** Round 1 was first rendered with the
  four presets differing mainly in cell size and screen mix, and the four
  columns were indistinguishable at sheet scale — the round was unjudgeable and
  had to be re-authored so the presets differ on axes that survive a thumbnail
  (press exposure, stock colour, saturation) with texture as the second axis.

Output lands in `docs/smoke/captures/`, which is **gitignored** — the sheets are
evidence, not artefacts, and the round reproduces in 24s.

### Press follows the atmosphere (E8b)

Round 1 measured that one press exposure cannot serve noon and midnight. Press
is now interpolated between a night and a day value by
`renderer.toneMappingExposure` — the number `atmosphere.js` already sets every
frame from the per-hour, per-weather palette stops.

Read from the renderer rather than pushed from atmosphere, and read inside
`post.render()` rather than cached, for a specific reason: **atmosphere is not
the only thing that drives exposure.** The ending sequence takes it over for
~10s (`src/ending.js`), and a grade holding a value pushed to it by atmosphere
would print those ten seconds at the wrong tone. Reading the live value means
the grade cannot disagree with whatever set it.

Measured across the four conditions (`dbg.stylePress()`, preset `b`):

| Hour / weather | `toneMappingExposure` | press |
|---|---|---|
| 13:00 overcast | 1.378 | 0.740 |
| 08:00 clear | 1.150 | 0.794 |
| 03:00 haar | 0.592 | 0.928 |
| 22:00 rain | 0.520 | 0.945 |

The direction is the counter-intuitive one — **darker moments get a HIGHER
press, meaning LESS lift.** A night panel in a comic is mostly ink, and round 1
is what happens when you argue otherwise.

The mapping lives in JS, not the shader, so `dbg.stylePress(e)` answers "what
press at exposure e" without a screenshot. It is still inside the `uStyle > 0`
branch, so a shipped frame does no work for it and the containment above is
unchanged — no new gate, and check 26a still covers the axis.

### Press exposure, and why the first stack was wrong

The first working build screened the scene's own tonality and came out as ink
almost everywhere. The cause was measured, not guessed: this scene's **median
display luminance is 0.139 at noon overcast and 0.055 at night rain**. A dot
radius of `sqrt(1 - 0.139)` nearly fills its cell, and a highlight gate set
anywhere sensible never fires, so "highlights stay clean paper" — the thing
that makes a screen read as printing rather than as a filter — was dead.

A printed page is a *light* object. `uPress` re-exposes the frame for the plate
before screening, as a repro camera did. It is a per-preset axis rather than a
constant because how far the night should be lifted is exactly the judgement
the loop exists to make.

### What this deliberately does not prove

- **Nothing about whether any preset is good.** There is no numeric gate on the
  grade and there should not be one until a keeper exists; the round is judged
  by eye, and the rejected presets' reasons are the durable output.
- **Nothing about motion.** Every capture is a settled still. Screen swim under
  camera movement is the artefact the analytic dot's derived AA band is meant
  to prevent, and it has not been tested — that needs a moving capture, and it
  is a keeper-landing question.
- **Nothing about cost.** The style block adds two texture taps and a `pow` per
  pixel and has never been timed. It is inert in the shipped build, so it
  cannot regress anything yet, but the keeper landing owes a frame-timing pass.
- **Nothing about the DOM.** The HUD, the interaction prompt and the caption
  are overlays, not pixels the pass can reach; they sit ungraded on top of
  every capture. That is the roadmap's separate "caption boxes and lettering"
  item, and the sheets show why it is on the list.

### The pre-existing golden jitter band is wider than `skyline`

Measured while checking whether E8a moved anything, with the pre-change source
as the control:

| Golden | Control | With E8a |
|---|---|---|
| `golden-haar:mid-805-far` | 0.286% | 0.317% |
| `golden-haar:elm-row-hero` | 0.295% | 0.290% |
| `golden:skyline` | 0.243% | 0.253% |
| `golden-haar:skyline` | 0.225% | 0.222% |

The ordering swaps between runs and the deltas are ±0.03%, so this is
run-to-run jitter and none of it is E8a's. The point is the level: the haar
column sits near **0.3%, 60% of the 0.5% tolerance, before anyone has changed
anything**. The standing note that `golden:skyline` is the outlier is wrong —
`skyline` is not even the worst of them, and haar is a whole column. A future
change that legitimately moves a haar golden by 0.25% would land over tolerance
for reasons that are mostly not its own.

## Is a distance LOD needed at all? (E3d.0 — the measurement that rejected E3d)

**E3d is rejected. The paper doll is not the cheap end of a distance LOD, and
swapping back to it at range buys no frame time on any pose measured.**

E3d was to be a distance LOD: generated meshes near, paper dolls far. E3b had
already measured the swap the other way — **−699 draw calls and +267,459
triangles** — which inverts the LOD's premise, since reverting to dolls at
distance *spends* draw calls to *save* triangles. That only pays if triangles
are what bind. Nothing had measured whether they do, and the roadmap said so
plainly: a no-go with no measurement behind it is a hypothesis promoted by
repetition. E3d.0 is the measurement.

`scratchpad/e3d/frametime.mjs`, run through `probe -f`. Three full runs; run 3
adds the crowd-free arm and is the one tabulated.

### What it measures, and the four arms

Four arms per viewport, each a separately booted page, run **one at a time**:

| arm | what stands in the street |
|---|---|
| `none` | nothing — flag off *and* every doll part hidden |
| `dolls` | the shipped default, 124 paper dolls |
| `meshes` | `__mcgrotForceCharacters`, 124 generated meshes |
| `dolls again` | a second `dolls` arm, run last |

`none` is the control that makes the rest mean anything: without it the run can
only say "meshes beat dolls", and the LOD question needs each representation
priced against a street that has neither. `dolls again` is the noise floor —
two arms differing in nothing, so any "cost" smaller than that gap is not a
cost. Because the arms run sequentially, it also carries every drift the whole
run accumulated, which makes it conservative rather than flattering.

Two clocks, because they point opposite ways:

- **GPU** — `EXT_disjoint_timer_query_webgl2`, available under the harness's
  Metal ANGLE. `renderer.render()` only *queues* commands, so a JS stopwatch
  measures submission and not rasterisation, which is exactly the cost the
  triangle question is about.
- **Whole frame (CPU)** — wall clock around `stepFrame`, so every updater in
  `main.js`'s list plus the draw. This does **not** include GPU completion:
  `gl.finish()` does not reliably sync across Chrome's command-buffer process
  boundary, and several poses report a whole-frame number *below* their own GPU
  number, which is the proof of it. Read it as CPU cost, not as frame time.

### The numbers — mobile at the DPR cap (780×1688), the case that matters

| pose | vendors in frame | | no crowd | dolls | meshes |
|---|---|---|---|---|---|
| `skyline` | 68 | GPU ms | 2.79 | **1.63** | 2.84 |
| | | CPU ms | 1.02 | **2.58** | 1.42 |
| | | draw calls | 263 | 1090 | 401 |
| `street-along` | 80 | GPU ms | 2.73 | **1.88** | 2.51 |
| | | CPU ms | 1.20 | **3.11** | 1.70 |
| | | draw calls | 363 | 1335 | 525 |
| `vendor-nose` | 1 | GPU ms | 2.83 | 2.87 | 2.89 |
| | | CPU ms | 0.73 | 0.80 | 0.81 |

Noise floor across every cell: **≤0.24ms**, worst round-to-round spread
0.47ms. Desktop (1280×800, DPR 1) tells the same story at 0.8× the magnitude.

Each representation against the crowd-free street, at `street-along`:

| | dolls | meshes |
|---|---|---|
| GPU | **−0.85ms** | −0.22ms |
| CPU | **+1.90ms** | +0.49ms |
| GPU + CPU | +1.05ms | +0.27ms |

### The three findings

**1. Draw calls bind, and the doll is the expensive end.** A paper doll is 13
draw calls (its head is a BoxGeometry carrying six materials, one per face); a
meshed vendor is 3. At `street-along` that is 1,335 against 525, and it shows
up as CPU: dolls cost **+1.90ms** of frame time against the crowd-free street,
meshes **+0.49ms**. The LOD's premise — cheap dolls at distance — is false by a
factor of about four.

**2. Dolls are faster on the GPU, and the mechanism is occlusion, not
lightness.** The crowd-free arm rasterises *slower* than the doll arm, which is
impossible for geometry that was merely removed: 2.79ms with no crowd against
1.63ms with 124 dolls in it. Adding 827 draw calls and 9,222 triangles cannot
reduce rasterisation except by hiding what is behind them — three.js sorts
opaque front-to-back, so the dolls take early-Z and the expensive background
never shades. The within-data control is the pose count: the gap is 1.16ms at
68 vendors and **0.04ms at one**, scaling with figures in frame exactly as
occlusion would. (Mechanism inferred from those numbers, not separately
instrumented.)

**3. The two cancel, and at the heaviest pose the doll side loses both ways.**
At `skyline` meshes cost +1.21ms of GPU and save 1.16ms of CPU against dolls —
a wash. At `street-along` meshes are ahead on the sum (4.21ms against 4.99ms)
*and* on the larger of the two (2.51ms against 3.11ms). So an LOD reverting to
dolls at range would, at the heaviest pose in the game, make the frame slower.

Nothing here is near a budget in any case: the worst pose measured is 3.1ms of
CPU and 2.9ms of GPU, against 16.7ms for 60fps.

### What this does not prove

- **It is an Apple M4 through ANGLE Metal, not a phone.** A phone's GPU is far
  weaker relative to its CPU, so the balance of finding 3 could tip toward the
  doll side. It cannot be measured here, and no measurement in this repo can.
  The mitigation is that finding 1 is a CPU cost and phone CPUs are weaker too,
  so the doll side does not get a free ride from a device swap.
- **`vendor-nose` frames exactly one vendor, and that is the street's fault,
  not the pose's.** 124 vendors over ~1617m is one per 13m, and the densest 25m
  radius anywhere holds five. No pose exists that puts many meshes at high fill.
  So "worst fill" genuinely is one figure, and it costs +0.08ms.
- **The whole-frame column is CPU only** (see above). It is not the frame time
  a player sees, and the sums in finding 3 assume CPU and GPU serialise, which
  is the pessimistic reading.

### Three harness defects this measurement had first

Each produced a plausible, wrong number before it was caught. They are recorded
because the next throwaway probe will be built the same way.

| defect | what it reported | what caught it |
|---|---|---|
| `nearestStreetPoint` read as `{x,z}` — it returns `{point:[x,z]}` — so the camera was at `NaN` | a confident +1.33ms at "nose distance". A NaN camera culls nothing, so the frame drew 2,035 calls and looked like a heavy pose | the `inFrame` vendor count, which said **0** |
| the first close pose was `mid-550-close`, which frames no vendor at all | a +2.83ms crowd cost | the noise floor, which said **+2.82ms** — and byte-identical triangle counts on both arms |
| per-frame timer queries under Metal, which batches command buffers across the query boundary | the same unchanging frame at either ~7.0ms or ~4.3ms, bimodal *within* one batch, whichever mode dominated deciding the median | four rounds per arm; one query per *batch* of 20 renders fixed it |

A fourth was a design fault rather than a bug: the first version kept all four
pages open and round-robined between them to spread thermal drift. Two arms
booted from **identical** flags then rendered mobile `skyline` at 4.27ms and
7.25ms, consistently across all four rounds — a systematic per-page difference
three times larger than the effect being measured. One page at a time.

Also fixed in passing: `probe --tint=on|off` never worked. `addInitScript`
destructured `({ a, c })` and used `n`, so every probe boot since E3c threw a
silent `ReferenceError: n is not defined` and the flag never reached the page.
The smoke gate's own copy was correct, which is why E3c's numbers stand.

### The gate this left behind

No new gate. One existing gate was **strengthened**, because the ruling now
rests on the *size* of the draw-call refund rather than its sign:

`E3b: meshes cost triangles at skyline and refund draw calls` asserted only
`onSky.drawCalls < offSky.drawCalls`. It now also requires the refund to be
**≥2×** (measured 2.73×). An archetype regenerated with several sub-meshes
would erode the ratio long before inverting it, and direction-only would have
stayed green the whole way.

Fault-injected by giving every vendor four extra sub-meshes:

| | draw calls | refund | verdict |
|---|---|---|---|
| shipped | 1103 → 404 | 2.73× | PASS |
| +2 sub-meshes per mesh | 1103 → 544 | 2.03× | PASS — *just*, and this is how fragile the margin is |
| +4 sub-meshes per mesh | 1103 → 684 | 1.61× | **FAIL** |

The injected build still refunds draw calls at every step, so the old
direction-only assertion stayed green through all three rows.

**What this gate deliberately does not prove.** Nothing about frame time. A
frame-time gate would be machine-dependent and flaky, and the numbers above are
a one-off ruling rather than a standing claim — what makes the ruling durable is
the draw-call ratio it rests on, and that is what is pinned.

## Flipping CHARACTERS_ENABLED (E3e)

The commit that makes E3 visible. E3a–E3d.0 were four landed milestones that
changed the deployed picture not at all; this one swaps 124 paper dolls for 124
generated meshes in the scene the player actually gets.

Everything below was measured by flipping the flag and running the suite, not
by reasoning about which poses might contain a vendor.

### What moved, and what deliberately did not

**23 goldens, 6 draw-call baselines.** `npm run goldens:audit` named them; each
was deleted and recaptured individually. `--update-goldens` was not used and
would have been wrong — it rebuilds every golden and every baseline from one
run, absorbing any unrelated drift in the same gesture.

The important number is not the 8 that failed. It is the **15 that moved while
passing**, which the 0.5% tolerance was about to swallow:

| | |
|---|---|
| failed outright | 8, worst `golden-haar:foot-1500-far` at 2.373% |
| moved but passed | 15, including `golden:elm-row-hero` at 0.482% — **clearing tolerance by 0.018%** |
| genuinely unmoved | 9, all ≤0.02% |

Three bookmarks came back **byte-identical on draw calls** — `north-150-close`
31, `mid-550-close` 31, `fascia-close` 30 — because no vendor is in frame at
any of them. Their baselines were left alone. The six that moved:

| bookmark | dolls | meshes |
|---|---|---|
| `skyline` | 1112 | **413** |
| `lamp-hero-night` | 1131 | **421** |
| `elm-row-hero` | 78 | 48 |
| `mid-805-far` | 75 | 45 |
| `foot-1500-far` | 71 | 41 |
| `north-250-far` | 57 | 47 |

Re-cut by hand rather than by `--update-goldens`, for the same reason.

### The picture, which no gate can see

E3e is the first time the crowd is on screen in the shipped build, so the
frames were opened rather than only measured. `foot-1500-far` with the flag off
is a grey box stack with a comic pinned to it; with the flag on it is a hunched
figure with legs, boots and hands, holding the comic two-handed. At `skyline`
the near vendor reads as a person and the 68 behind it read as figures rather
than as repeats. Nothing black, nothing broken, no clone artefact at range.

That judgement is a look, not a number, and the numbers below cannot stand in
for it. What the numbers do cover is that the crowd is *there*: `E3e: the
shipped default stands the generated crowd in the street` boots with no
override at all and requires 124 vendors tagged with an archetype and 744 doll
parts hidden (620 boxes + 124 scarves) — not `characters.enabled === true`,
which would only prove the flag reads true.

### The gate that had to invert, and the one that had to be added

`E3b: the shipped default leaves every paper doll intact` was the control while
the flag was off. It became `E3e: the shipped default stands the generated
crowd in the street` — the same discipline pointed the other way.

That left a hole. **`__mcgrotForceCharacters = false` is now the direction the
suite's A/B comparisons depend on** — the E3b draw-call gate boots one arm with
it, and an override that quietly meshed the crowd anyway would turn that
comparison into an A/A. So `E3e: the off override genuinely puts the paper
dolls back` was added, asserting 0 vendors tagged and 0 doll parts hidden — the
scene coming back, not the flag reading false.

Fault-injected two ways:

| injection | what reddened |
|---|---|
| scarves left visible on meshed vendors | **shipped default** — 620 doll parts hidden, must be 744 |
| `const enabled = true`, so the off override no longer disables | **off override** — 124 tagged and 744 hidden, must be 0; *and* E3b's draw-call gate collapsed to a 1.00× refund, 404 → 404 |

That second row is the hole made visible. The E3b gate does go red on its own,
so this is not a silent failure — but it goes red reporting "the refund
vanished", which is a symptom several unrelated defects would also produce. The
new gate names the cause. It also covers the case the E3b gate cannot see: an
override that half-works, restoring some vendors and not others, which still
leaves a refund large enough to clear the 2× floor.

### A documented noise floor that was wrong

`VALIDATION.md` recorded `elm-row-hero`, `mid-805-far` and `skyline` as sitting
on a **~0.11%** golden noise floor. Measured on this machine, against the
pre-flip goldens and with the flag off, the suite reproduces them at:

| golden | pre-flip suite | after recapture |
|---|---|---|
| `mid-805-far` | 0.357% | 0.28–0.35% |
| `elm-row-hero` | 0.303% | 0.084–0.108% |
| `skyline` | 0.167% | 0.050–0.063% |

So the standing 0.11% figure understated it by roughly 3×, and the recapture
reset drift that had accumulated across sessions on two of the three. The
useful fact for the next milestone is the level, not the change: **`mid-805-far`
sits at about 0.31% of a 0.5% tolerance and is the tightest golden in the set.**
A future change that legitimately moves that pose by 0.2% would land over
tolerance for reasons that are mostly not its own.

**It is not the crowd's doing, and the obvious explanation was wrong.** The
guess was that walkers now cross in front of bigger silhouettes and so repaint
more pixels. Measured with `scratchpad/e3e/floor.mjs` — two independent boots
per arm, same pose, diffed within the arm with the suite's own pixelmatch
settings — boot-to-boot noise is:

| pose | dolls | meshes |
|---|---|---|
| `mid-805-far` | 0.102% | 0.106% |
| `elm-row-hero` | 0.090% | 0.112% |
| `skyline` | 0.058% | 0.058% |

Identical within noise. The crowd changed nothing about reproducibility, and
whatever drives the suite's higher figure lives in the suite's own bookmark
walk (one page visiting poses in sequence) rather than in the scene. That is
unexplained, and named as unexplained rather than attributed.

### Also fixed here

`npm run goldens:audit` reported a phantom 24th golden, "captured (was
missing)", on every run. Its line regex was `(golden[^\s]*)`, which also
matched the check named `goldens are usable diff substrates` whose detail reads
"all N **captured** frames". Every real golden check is `golden<variant>:<bookmark>`,
so the regex now requires the colon.

### What E3e deliberately does not prove

- **Nothing about the Leithers.** The 30 ambient walkers are still paper dolls
  and were never in scope; E3f is where that gets measured. So "the crowd is
  meshed" means the 124 vendors, and the street still contains doll walkers
  standing next to meshed vendors.
- **Nothing about a phone.** See E3d.0's blind spot — every frame measured in
  this repo comes off an Apple M4 through ANGLE Metal.
- **The goldens now agree with the harness's renderer, as they always did.** A
  golden proves the harness agrees with itself. These were recaptured under
  chromium/metal, and remain renderer-specific.

## Retiring the paper doll (E3g)

E3e stood a generated mesh in each vendor's place and switched the doll
invisible. The E3 phase gate counted what that cost and left it as finding 1:
744 of the scene's 1,253 meshes were never drawn. E3g stops building them.

**The doll was not deleted, and that is the ruling, not a hedge.** It is still
constructed — by `npc.buildDoll()` in `src/npcs.js`, called from
`src/characters.js` and nowhere else, in exactly two situations: the crowd is
switched off, or an archetype's glb failed to load. The runtime win is the same
either way, and keeping the construction path buys two things a deletion would
have spent:

- **The off arm is the control for six gates**, and after E3g it is the only
  place a paper doll exists at all. Delete it and the height and note
  comparisons below have nothing to compare against.
- **The single-file artifact still 404s on all five glbs.** Before E3g that was
  harmless — the doll was already standing and the hide loop simply never ran.
  Now the fallback is load-bearing, and without it the artifact would be 124
  floating comics over empty pavement.

### What it cost the scene, measured on one build

Both columns are the same commit with one localhost override between them, so
these are the doll's price and not a figure from another day.

| | off arm (dolls) | shipped (meshes) |
|---|---|---|
| scene meshes | 1,129 | **509** |
| scene materials | 875 | **487** |
| doll parts in the vendor groups | 744 | **0** |
| face JPEGs fetched | 39 | **0** |

744 meshes and 388 materials gone, and 39 texture fetches that existed only to
paint heads nobody could see. The `skyline` draw-call refund is unchanged at
2.73x — invisible objects were never drawn, so the saving here is scene-graph
traversal, material bookkeeping and 1.1MB of texture fetch, not rasterisation.

### The two gates this broke, and how they were fixed

This is the whole unit; the deletion was twenty minutes.

`E3b: every mesh stands at exactly the height of the doll it replaces` compared
`meshTop` against `dollTop` measured off the hidden box geometry.
`E3c: every meshed vendor wears its own scarf's note` compared the mesh's
material against the live scarf material. Both were deliberately built to hold
two independently-constructed figures, so that neither could be satisfied by
the formula that produced it. Remove the doll and each collapses into a
comparison of `vendorDims()` with itself, green on any build.

**They now join across two boots on the vendor's name.** The mesh side is read
from the shipped page, the doll side from the off-arm page, and the gate
matches them by name — with the unmatched count asserted at zero, so a renamed
vendor reddens the gate rather than quietly leaving the sample. This is
*stronger* than what it replaces: the old comparison could in principle be
satisfied by two views of one object, and two objects in two browser contexts
cannot be.

Both were fault-injected. Restoring E3a's flat `TARGET_HEIGHT` (`height = 1.9`)
took the worst height error to **19.355%** against a 0.5% budget. Re-hashing
each vendor's note with 32 instead of 31 — same six notes, same equal strength,
wrong vendor — took the worst hue agreement to **-0.9302** against a >0.999
floor. Neither is caught by anything else in the region.

### The gates added

| gate | what it holds |
|---|---|
| `E3g: the shipped scene builds no paper doll, and fetches no face` | 0 dolls, 0 doll parts, 0 face fetches on the shipped path; 124 / 744 / 39 on the off arm of the same build |
| `E3g: an archetype that fails to load puts that vendor's paper doll back` | all five glbs forced to 404: 0 meshed, 124 fell back, 124 vendors have a body, 103 late-built heads got their face |

Doll parts are counted off **each vendor's own children**, not off the
`dollBody` array: a build that added a part to the group but forgot to record
it would read zero if the gate trusted the bookkeeping, and what is in the
scene is the entire question.

The face count in the fallback gate is 103, not 124, because **21 of the 124
vendors carry no face path in the catalog** and never did — they wear the bare
flat head colour. The gate asserts both numbers, so a catalog that lost its
face assignments would drop them together and still satisfy "all of them".

`__mcgrotForceCharacterFail` is what makes the second gate possible: it rejects
every archetype fetch on the same build, so the gate exercises the real
fallback rather than a simulation of it.

### A defect the fault injection found in the harness

Breaking the off override's `buildDoll()` call killed the entire characters
region on a null `head` — and a region that throws prints **no results at all**,
including the off-override gate that had already caught the same defect two
screens earlier. The suite still exited 1, but with a stack trace instead of six
red gates naming what was wrong. `sampleTells` now returns a sentinel when the
doll arm has no doll, and the injection produces six named failures and a
complete report. A gate that cannot report is only half a gate.

### The goldens did not move — and 23 of them move anyway

The prediction was that removing invisible geometry moves no pixels. Invisible
objects do not render, so this ought to be free.

`npm run goldens:audit` reported **23 goldens beyond its 0.02% noise floor**,
which looks like the prediction failing. It is not. The audit was re-run in a
clean worktree at `0128b1c`, the commit *before* E3g, against its own committed
goldens — and it reports **the same 23 goldens at the same magnitudes**:

| golden | pre-E3g control | with E3g |
|---|---|---|
| `golden-haar:mid-805-far` | 0.372% | 0.335% |
| `golden:mid-805-far` | 0.336% | 0.319% |
| `golden-clear:elm-row-hero` | 0.121% | 0.127% |
| `golden:skyline` | 0.050% | 0.059% |
| `golden:north-250-far` | 0.021% | 0.035% |

Same set, same order of magnitude, several *lower* with E3g than without. So
E3g moves nothing, no golden was recaptured, and `budget.json` was not touched.

**The standing finding is about the tool, not the change.** `goldens:audit`
prints a `<=0.02% sky-FBM noise floor` and 23 goldens sit permanently above it,
so it reports 23 false positives on every run for every change — the same class
of defect as the phantom 24th golden E3e fixed, and a much better disguise,
because 23 plausible-looking entries read as "your change did this". The floor
is right for the poses that hold still and far too tight for `mid-805-far`,
`elm-row-hero`, `skyline`, `foot-1500-far`, `north-250-far` and
`lamp-hero-night`, which E3e already recorded reproducing at 0.05–0.35%.

**Until that is fixed, the audit is only readable against a control**: run it
in a worktree at the previous commit and diff the two lists. Reading the raw
list as a change's blast radius will attribute six poses' worth of standing
noise to whatever landed last.

### The picture

E3g authors nothing the player watches, so the claim is that nothing changed —
which is what the golden control above establishes for the shipped scene. The
frame that had never been looked at is the **fallback**: before E3g the doll was
simply already standing, and it is now built by an error handler, late, after
the batch face-loading pass that used to run at build time would have finished.

Captured at `skyline` and `foot-1500-far`, three arms of one build:

| | `skyline` | `foot-1500-far` |
|---|---|---|
| off arm vs forced-404 fallback | 0.049% | 0.048% |
| shipped (meshes) vs off arm (dolls) | 0.238% | 0.507% |

The fallback reproduces the off arm to **within the 0.058% boot-to-boot floor
E3e measured** — the late-built street is the same street, faces and all. The
second row is the mesh-versus-doll difference, and is the size it should be.

### What E3g deliberately does not prove

- **Nothing about the artifact's actual bytes.** The 39 face JPEGs are no
  longer *fetched* by the shipped scene, but `build.mjs` still copies
  `assets/faces` into `dist-site/` and still generates the credits section
  from `credits.json`. Removing them is E3h's business, not E3g's, and the
  order matters: while the artifact's glbs 404 the fallback needs those faces,
  so deleting them before inlining the glbs would ship a faceless crowd.
- **Nothing about the Leithers.** The 30 ambient walkers are still paper dolls
  and still build the whole figure at boot. That is E3f.
- **The off arm's picture is not the shipped picture.** Six gates now read
  their control from a scene the player never sees. That was already true of
  the draw-call refund gate; E3g makes it true of the height and note gates
  too, and the risk it carries is that a defect confined to the shipped
  construction path has one fewer place to show up.

## Meshing the ambient crowd (E3f)

The E3 phase gate's finding 4: the 30 ambient walkers were box columns standing
2m from fully modelled vendors. E3f stands them on the same five archetypes.

**They reuse the vendors' meshes; nothing new was generated or fetched.** By the
time a walker could want a prototype, 124 vendors are already standing on it —
so 30 more figures cost 30 clones and 30 materials, no bytes and no round
trips. `characters.js` publishes each normalised prototype through an
`onArchetype` subscription (and publishes `null` on a failed fetch, so a walker
waiting on an archetype that never arrives falls back rather than waiting
forever); `main.js` wires the two together after both are built.

### What it cost, measured on one build

Both arms are the same commit with `__mcgrotForceLeitherMesh` between them.

| across the 30 walkers | boxed | meshed |
|---|---|---|
| draw calls | 274 | **64** (4.28x refund) |
| meshes | 124 | **64** |
| materials | 102 | **60** |
| triangles | 3,288 | **123,793** |

A boxed head is six draw calls because its BoxGeometry carries six materials,
one per face; a generated body is one. That is the same trade E3d.0 measured
for the vendors and ruled on — **draw calls bind, triangles do not** — so this
is that ruling applied, not re-litigated.

At the bookmarks: `skyline` 413 → **315** and `lamp-hero-night` 421 → **323**,
an identical −98 in both, which is the same 14 walkers in both frames.

### The picture, which is what the unit was actually for

Reuse was not obviously right. The risk was that 30 walkers on shared meshes
read as five clones, or that the "crowd is anonymous, readers are characters"
separation collapsed once every walker had a face. So the flag landed off, the
machinery went in byte-identical, and the frames were opened.

**The pair shot.** Closest vendor/walker pair with both on open street, camera
on the **perpendicular bisector** of the two figures, both screen positions
asserted before the frame was read. Ishbel Dewar (spindle, 1.81m) and a walker
(slab, 1.57m) at a 3.39m gap, 346px apart on screen. Boxed, the walker is a
grey column with a blue box hanging off it. Meshed, it is a bulky figure in a
dark coat carrying its bag, shorter than the vendor, plainly a passer-by rather
than a character. It reads.

**The clone shot.** The densest cluster of walkers anywhere on the street is
**two** — 30 walkers over ~1,400m of usable street, both sides. Those two are
both `slab`, at 1.67m and 1.73m, and at 22m they read as two different people;
the height difference and the per-walker coat tint carry it. The clone risk is
structurally low because you essentially never see more than two at once.

**What the separation now rests on.** The doll said "anonymous" with a dark
plane where a face would be. A Trellis mesh is a single primitive with the face
painted in and cannot. So it is carried by three things instead: walkers are
shorter (1.53–1.77m against the vendors' ~1.9m, and the mesh takes each
walker's own height exactly), drabber (tinted toward their own drab coat at
`LEITHER_TINT` 0.34, stronger than the vendors' 0.27 colour note), and darker
(`LEITHER_SHADE` 0.78). **This is the weakest claim in E3f** — it is a look, it
was judged on two frames, and a walker at close range does now have a face.

### The invented head axis, rejected by measurement

`selectArchetype` takes girth and headScale. The 124 vendors have an authored
headScale in the catalog; the 30 walkers are procedural and have none. The
first version synthesised one from a seeded stream inside the vendors' own
spread, which looked reasonable and was invented data.

| head weight | archetypes used | squash range |
|---|---|---|
| 0.25 (synthesised axis) | runt 13, spindle 5, slab 12 | 0.836 – **1.341** |
| 0 (girth alone) | runt 15, slab 14, stoop 1 | 0.900 – 1.148 |

Three of five either way, so it bought no extra variety — and it pushed the
worst walker to 1.341, outside the 0.70–1.30 bound the crowd was judged at in
E3b. A figure distorted further than anything anyone has looked at, in exchange
for nothing. `selectArchetype` grew a `headWeight` parameter and the walkers
pass 0.

Only three archetypes are reachable, and that is the walkers' own girth range
rather than a defect: 0.80–1.25 never gets nearer `bulk` (1.42) than `slab`
(1.195), nor nearer `spindle` (0.68) than `runt` (0.918).

### A reseeding bug the byte-identical claim caught

Drawing that synthesised value from the shared `rand` stream shifted every
subsequent draw by one — walker 2 inherited walker 1's coat and the whole crowd
reseeded. The flag was off at the time, so the scene was supposed to be
untouched and was not.

Caught by diffing the seeded layout (`s`, side, dir, speed, offset, phase,
height) for all 30 walkers against a worktree at the previous commit, rather
than by looking at pixels. E3f-only values now come from their own PRNG.

### The gates

| gate | what it holds |
|---|---|
| `E3f: every ambient walker stands on a generated mesh, and none keeps a box body` | 30 meshed, 0 boxed, 0 box parts, ≥3 archetypes |
| `E3f: the off override genuinely puts the box columns back` | the control arm: 0 meshed, 30 boxed, 90 parts |
| `E3f: meshed walkers cost triangles and refund draw calls` | 274 → 64, floor 3x, both arms one build |
| `E3f: no walker is scaled past the distortion the crowd was judged at` | 0.900–1.148 inside 0.70–1.30 |
| `E3f: every walker mesh stands at the height of the box column it replaces` | joined across two boots, **with the join key asserted first** |
| `E3f: a walker whose archetype fails to load keeps its box column` | forced 404: 0 meshed, 30 boxed |
| `E3f: switching the vendor crowd off boxes the walkers too` | the coupling the vendor gates' control depends on |

The height gate uses E3g's cross-boot join, because the meshed arm has no box
to measure against. Walkers have no names, so the join is by index — and an
index join is only meaningful if walker *i* is the same walker in both arms, so
**the seeded layout is compared first** and the gate reports "something
reseeded the crowd" rather than a height number when it is not. That is the
guard the reseeding bug above would have tripped.

Fault-injected, all restored: keeping the box under the mesh → 90 parts and the
refund inverted to 0.90x; the fallback stopping → "0 fell back to a box (must
be 30)"; a flat 1.9m mesh height → 23.837% worst error; the two arms' layouts
diverging → the join-key message rather than a number; dropping the coupling to
the vendor flag → 0 boxed on the characters-off arm.

### The goldens: which moved, and which only looked like it

The audit listed 24 beyond its floor. 23 of those move on every run regardless
(see § E3g), so the list on its own could not say what E3f did.

The recapture set was chosen by **measuring which poses contain a walker**,
projecting all 30 into each bookmark's camera:

| pose | walkers in frame | recaptured |
|---|---|---|
| `skyline` | 14 (nearest 13.4m) | yes — 4 variants |
| `north-250-far` | 1 (23.3m) | yes — 4 variants |
| `elm-row-hero` | 1 (20.9m) | yes — 5 variants |
| `lamp-hero-night` | not projectable (custom night pose) — but **−98 draw calls, identical to `skyline`** | yes |
| `mid-805-far` | 0 | no |
| `foot-1500-far` | 0 | no |
| `north-150-close`, `mid-550-close`, `fascia-close` | 0 | no |
| `mobile:hud` | 0 | no |

14 recaptured, four draw-call baselines re-cut by hand (`north-250-far` 47→40,
`elm-row-hero` 48→41, `skyline` 413→315, `lamp-hero-night` 421→323). No
`--update-goldens`.

`lamp-hero-night` is the instructive one: its golden moved 0.061%, comfortably
inside its standing band, and its draw calls fell by 98. At night the walkers
are dark enough that swapping a box for a figure barely repaints, but the pose
plainly contains the change — so **the budget saw what the golden could not**,
and the golden was recaptured on that evidence rather than left because its
number looked quiet.

`mid-805-far` is the mirror image: 0.307% of movement and **no walker in
frame**, which independently corroborates § E3g's finding that its noise is not
attributable to whatever landed last.

### What E3f deliberately does not prove

- **Nothing about the anonymity holding at close range.** The judgement was
  made at 3.4m and 22m on two frames. A player who walks up to a walker now
  sees an archetype face they have also seen on vendors.
- **Nothing about the walkers being the goldens' noise source.** They move, and
  each weather variant captures at a different simulated moment, which is a
  plausible mechanism for the standing noise on far poses — but `mid-805-far`,
  the noisiest, has no walker in frame at all, so it cannot be the whole story.
  Named as a hypothesis, not a finding.
- **Nothing about a fourth or fifth archetype for walkers.** Only three are
  reachable from their girth range. Widening that range would reseed the crowd
  and move every golden, which is a cost E3f did not pay.

## Seeding map (E5 phase gate — the one-story view)

Every source of variation, who owns it, and why the copies that exist are
isolation rather than debt. Nothing here changed at the gate; it had just
never been written down in one place.

| Source | Owner | Consumers | Notes |
|---|---|---|---|
| Calendar date | `src/day.js` (`todayKey`/`todaySeed`) | HUD label, arrival hour (`startHour`), per-vendor reading phase, legs' weather roll seed | The single date authority (E5c). Pinnable via `__mcgrotForceDate`; every smoke context sets it (`2026-01-01`). |
| Scene layout PRNG | `src/scenery.js`'s seeded PRNG | debris, wrecks, smoke, catenary poles | **Draw order is sacred** — never insert draws; append. Lamps deliberately take pole *positions*, never a draw. |
| `hash32` (counter-keyed) | private copy per subsystem (`chimneys.js`, `atmosphere.js` scheduler, `windows.js`, legs roll via atmosphere) | each keeps its own counter sequence | The duplication is the point: separate sequences cannot interleave, so adding a consumer can never shift another's draws — the property `geomHash` depends on. Do not "consolidate" into shared mutable state. |
| Weather schedule | `atmosphere.js` (`schedClock`, own `hash32` sequence seeded from the date-derived boot hour) | autonomous weather changes | Only advances when `rate !== 0`, which is the whole pinned-time determinism argument (check 23). |
| Turnaround roll | `atmosphere.nudge(deltaHours, seed, legIndex)` | legs' per-leg weather | Deterministic in (day seed, leg); walks `WEATHER_ADJACENCY`. |
| Reading join offsets | `proximity-audio.js` (`__mcgrotForceDaySeed`) | virtual reading clocks | Reads the stepped `simTime`, never `AudioContext.currentTime` (check 5c). |

## Invariants reference

| Field | What it means | If it fails |
|---|---|---|
| `drawCalls`/`triangles` | `renderer.info.render` after one stepped frame | A budget breach usually means new unmerged geometry (a new per-NPC mesh, an unbatched decal) landed somewhere it'll multiply by hundreds of instances. Check what changed near that bookmark's chainage. |
| `geomHash` | FNV-1a over: the merged buildings mesh's position array, every `InstancedMesh`'s `instanceMatrix` (chimneys, aerials, birds, vermin, roadwork cones — found by traversal, not a hardcoded list), and every NPC's placed position (NPCs are individual `Group`s in this codebase, not instanced, but their placement is just as seeded — see `src/debug.js`'s `computeGeomHash`) | **Determinism breach = a seeded PRNG call sequence got disturbed.** Treat as a blocker (see root `CLAUDE.md` / `docs/ROADMAP.md`: "seeded PRNG order is sacred; additions via hash32 only"). Bisect recent commits touching `hash32`/`hash2` call sites in `chimneys.js`, `gables.js`, `shopfronts.js`, `road.js`, `npcs.js`. |
| `realtimeHash` (E2c.3b.1) | FNV-1a over the real-time set `geomHash` deliberately excludes: every leither's chainage/side/direction, plus the `birds` and `vermin` groups' `InstancedMesh.instanceMatrix` (found by name, not build order — see `src/debug.js`'s `computeRealtimeHash`) | A mismatch means the boot itself is nondeterministic — check the pre-pause frame count gate first (it should read 0); if that's green and this still mismatches, something new is reading real wall-clock time instead of the stepped `dt`/`t` the harness feeds it. |
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

**E2c.3b.1:** `pauseAuto()` alone was not enough — `window.__mcgrotDebug`
(and so `pauseAuto` itself) only exists after `main()`'s async asset load,
and `animate()` had already been running on real wall-clock time since page
load. Every context that boots the page now also sets
`window.__mcgrotFreezeAtBoot = true` via `addInitScript`, **before**
`page.goto` — this suppresses `animate()`'s very first call, so zero
real-time frames run before `pauseAuto()` takes over. Both `bootPage()` and
the mobile pass's own hand-built context set this flag; if you add a third
page-boot path to the harness, it needs the flag too, or its goldens will
inherit the old machine-load-dependent flake.

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
   A pose that only makes sense after dark goes in `NIGHT_BOOKMARK_DEFS`
   instead (E2g.1): same shape, visited by one extra pass at 22:00 overcast,
   and kept out of every loop that iterates `bookmarks` — the weather columns
   and the anchors diff would otherwise pay for it five times over.
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
  a bookmark) → `npm run goldens:audit`, delete exactly the files it names,
  re-run the suite to recapture them, then eyeball the new PNGs once before
  committing. The tolerance isn't a substitute for that one look. **Never
  `--update-goldens`** — it absorbs every unrelated drift in the same stroke,
  which is how a real regression gets baked into a baseline. (This bullet used
  to recommend it; CLAUDE.md's verification contract does not.)
- One trap in `goldens:audit` itself, hit and fixed during E5c: the printed
  `rm ... && npm run smoke` is chained, so if a single filename is wrong `rm`
  exits non-zero and the recapture silently never runs. The tool has to
  reproduce the suite's filename composition exactly — including the 08:00
  clear pose, which is `<id>-clear-08.png`, variant before the hour.
- **A GOLDEN THAT CONTAINS ANIMATED DRESSING HAS A NON-ZERO NOISE FLOOR, and
  24 of them had drifted to 0.17–0.31% on it** (found and recaptured
  2026-08-04, during E3b, which did not cause it). Three steps, all reusable:

  **Whose diff is it?** `goldens:audit` cannot tell you. Run
  `--only=render,weather` with `src/` checked out at the previous commit, run
  it again with the change, and diff the two lists of percentages. Every
  non-zero golden read the same either side of E3b — `golden-haar:elm-row-hero`
  0.300% → 0.307%, `golden:skyline` 0.254% → 0.249% — and the wobbles went both
  ways, so E3b was not the cause.

  **What moved?** Not "which file" — *which pixels*. `checkGolden` computes a
  pixelmatch diff and throws it away, so diff the backed-up old PNGs against
  the recaptured ones with `diffMask: true` and overlay the mask on the new
  golden. (Without `diffMask` the output is a dimmed copy of the whole frame
  and every pixel reads as changed.) The answer was unambiguous and identical
  in all 24: **rooftop buddleia, walking Leithers and gutter litter, and
  nothing else.** No façade, no geometry, no lighting, no vendor pixel moved.
  That is what made recapturing safe — the alternative would have been
  freezing an unidentified regression.

  **Recapture does not reach 0.000%, and expecting it to is the mistake.**
  Worst case went 0.294% → 0.114%, and a second run of the identical build
  reproduces ~0.09–0.11% again. Leithers walk and buddleia sways, both are
  excluded from `geomHash` for exactly that reason, and a pose containing them
  cannot be frozen — the golden captures one sample of a moving thing. So
  `elm-row-hero`, `mid-805-far` and `skyline` carry a floor, and the static
  poses (`fascia-close`, `north-150-close`, `mid-550-close`) reproduce to
  0.000–0.009% and are the ones to trust for a small change.

  **That floor was recorded as ~0.11% and it was wrong.** Re-measured during
  E3e on this machine: the suite reproduces `mid-805-far` at **0.28–0.36%**,
  `elm-row-hero` at 0.08–0.30% and `skyline` at 0.05–0.17%, depending on how
  recently the golden was captured. `mid-805-far` is the tightest golden in the
  set at roughly **0.31% of the 0.5% tolerance**, leaving under 0.2% of real
  headroom — not the 0.39% claimed here before. It is not the crowd's doing
  (boot-to-boot noise is 0.102% with dolls and 0.106% with meshes), and the gap
  between that and the suite's figure is unexplained. See § E3e.
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

**E2d.1 regenerated every baseline** once bloom landed: each bookmark's count
rose by bloom's own internal `FullScreenQuad` passes (the bright-pass extract,
each mip level's horizontal+vertical blur, the composite, the final blend —
`skyline` moved from 954 to 968, +14; every other bookmark moved by the same
14). The delta gates (`+1` rain/drizzle, `+0` haar, both measured against a
same-run matched control) read unaffected, since both sides of each
comparison gain the identical 14.

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
   If you instead set `camera.position` directly while paused, set Y too:
   `pauseAuto()` suspends the ground-follow clamp, and the Walk climbs ~27m
   south — a teleport up the Brae otherwise leaves the camera underground,
   producing a garbage frame that looks like a rendering bug (hit at the E5
   phase gate).
5. `window.__mcgrotDebug.resumeAuto()` before handing back to a human tester
   — otherwise the world stays frozen except for whatever `stepFrame` calls
   you make.

## Adding to CLAUDE.md

`CLAUDE.md`'s Commands section points here:
`npm run smoke` — the validation rig; see docs/VALIDATION.md.
