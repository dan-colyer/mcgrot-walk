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
precision varies between drivers, since the goldens are captured under
SwiftShader.

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

### The eleven gates (region `moments`)

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

### All eleven were fault-injected red

Eleven injections, each reddening only the gates it should: writer disabled;
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
close poses at a genuine 0.000%. That is the SwiftShader noise floor, and it
is why "0.09% so it passed" is not evidence of anything on those poses — only
a delta against a same-day baseline is.

`golden:skyline` is the noisiest and occasionally spikes: one run read 0.174%
against a 0.053% baseline, with three further runs at 0.056/0.050/0.060 on
the same build. **A single elevated skyline reading is not a signal; take
three.**

## Running the suite fast (and what that costs you)

A full run is **412s**, measured. Two ways to cut it, both of which announce
what they did not check — a partial run that reads like a full one is the
exact failure this project keeps having.

- `npm run smoke:quick` (**169s**) skips the weather matrix (the clear, rain,
  drizzle and haar golden columns, the transition and midnight-wrap checks,
  the 20 weather-pair transitions and the 24h sweeps) and the informational
  DPR timing table. Those are 274s and 59s of the 412s.
- `npm run smoke -- --only=<region>[,<region>]` runs single regions:
  `alignment`, `journal`, `anchors`, `moments`, `render`, `determinism`,
  `dpr`, `onevoice`, `determinism-clock`, `mobile`. Measured marginal costs:
  journal ~41s, anchors ~31s, moments ~35s (it boots eight documents),
  onevoice+clock ~16s, mobile ~7s, on top of ~12s of fixed overhead (bundle,
  server, browser, boot #1) that every run pays.

`render` is the only region that captures desktop goldens; `mobile` captures
the four mobile ones. **Neither `--quick` nor `--only` is a deploy gate.**
`npm run deploy` always runs the whole suite, because the weather columns are
exactly where a golden regression hides.

Regions were each checked to declare nothing referenced after them before
being made skippable. If you add one, do the same check first — a region whose
`const` escapes will break the *full* run, not the partial one.

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
  A timeout that looks like a real bug costs more than 17s saves.

## Goldens as measuring instruments (the contrast floor)

One aggregate check asserts every captured frame has luminance stddev >= 8
(of 255). A near-flat frame cannot register a regression: with few
distinguishable pixels a serious change still diffs under the 0.5% tolerance,
so the pose would be a gate that cannot fail. Goldens are all captured at
`SMOKE_HOUR` (13:00) precisely so they have contrast to lose — this check
makes that a measured property rather than a convention someone might quietly
break by adding a night pose. On a partial run that captures no goldens the
check is skipped and says so, rather than reporting "all 0 frames pass".

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
5. `window.__mcgrotDebug.resumeAuto()` before handing back to a human tester
   — otherwise the world stays frozen except for whatever `stepFrame` calls
   you make.

## Adding to CLAUDE.md

`CLAUDE.md`'s Commands section points here:
`npm run smoke` — the validation rig; see docs/VALIDATION.md.
