# McGrot Walk

First-person Three.js POC: post-apocalyptic Leith Walk (real OSM footprints), 400+
grotesque NPC vendors each reading a McGrot comic aloud (Gemini TTS, verbatim
garbled text), plus an ambient crowd, wrecked vehicles and photo-derived façades.

## Development workflow

**Opus works the milestone end to end.** Planning against `docs/ROADMAP.md`,
implementation, verification, deploying — one persistent conversation. There
is no implementer tier; see "Why this changed" below before reinstating one.

Delegation is an ad-hoc tool, not a role: reach for a Sonnet session only for
a genuinely mechanical sweep too large to hold here (E7a's hosting migration
is the one clear candidate left on the roadmap). If you delegate, brief the
whole milestone, review the diff by measurement rather than by summary, and
send findings back instead of fixing them here.

**Fable is the phase-gate reviewer**, and is now the only independent read.
At the end of each major roadmap phase (E1, E2, …) a Fable session audits the
phase end-to-end: architecture drift, quality against the roadmap's intent,
cross-cutting regressions, and whether the roadmap itself still holds. Fable
adjusts the roadmap and hands the next phase back to Opus. **Opus tells Dan
when a Fable pass is due** — at a phase boundary, or earlier if the
architecture has drifted enough that a fresh read is worth more than another
milestone.

### The verification contract

This is the load-bearing part of the workflow, and it holds whoever implements.

**Never report a measurement you did not run.** Three milestones in a row
landed with a summary asserting a number that was false — "every golden
0.000%", "zero goldens moved" — while the actual suite output said otherwise.
Someone who believes they already verified does not re-verify. With one agent
doing both jobs there is no second pair of eyes to catch it, so the discipline
has to be mechanical:

- **Run the diff; don't reason about the blast radius.** Twice now the
  reasoning was wrong and the measurement was right (E5b.1's touch toggle,
  E5b.2's `skyline`). "It isn't near a bookmark" is not evidence. The suite
  output is.
- **Nothing intentional lives under the golden tolerance.** 0.5% is for
  renderer jitter. A new visible element that changes 0.1% has not "passed" —
  delete those specific goldens and recapture. Never `--update-goldens`.
- **Every acceptance measurement names a control** that isolates the system's
  own contribution. "On vs off" is not isolation if both sides derive from the
  same function — that mistake shipped twice, in E5b.1's denominator gate and
  E5b.2's anchor gates.
- **Prove a new gate can go red.** Fault-inject it, watch it fail, restore.
  An unfalsified gate is decoration.
- **Gates test the product, not the calculator.** If a check compares two
  calls to one pure function, it passes whether or not the scene ever uses it.
- **Numeric gates cannot see a bad picture.** E5d's ending passed every
  fog/exposure assert while rendering nine seconds of black. Any unit that
  authors something the player *watches* — a sequence, a grade, a movement —
  renders its captures and the review opens them; where the moment is
  deterministic, also gate it with the contrast floor ("the frame is a
  picture" — see E2g.1).
- **A golden proves the harness agrees with itself, not that the picture is
  right.** Where the harness renders differently from a player's machine, the
  golden preserves the harness's artefact. `golden-mobile:hud` locked in a
  mobile spawn view whose entire near-field ground was flat black for as long
  as the suite ran on SwiftShader, and every check passed the whole time. Keep
  the harness's renderer matched to the shipped one; where it cannot be, name
  the blind spot rather than trusting the green.
- **Say whether a ruling was measured or reasoned, and re-test it when its
  conditions change.** "Do not enable a real GPU" stood in
  `docs/VALIDATION.md` on four confident grounds; when E0.4 finally tested them
  instead of arguing with them, three were wrong and the suite was 4× slower
  than it needed to be. A no-go with no measurement behind it is a hypothesis
  that has been promoted by repetition. The same applies to dismissals: boots
  were dismissed at 4.4% of a run, and were 17.1% of the next one without
  changing at all.

The gate suite in `scripts/smoke.mjs` is now the reviewer. Extend it whenever
a milestone adds a claim worth trusting later, and document each gate in
`docs/VALIDATION.md` — including what it deliberately does *not* prove.

### Landing work: commit without asking

**Committing needs no permission — and waiting for it is the wrong default.**
Land each phase, feature or fix as it completes rather than accumulating work in
a dirty tree. An uncommitted milestone is the state every gotcha below bites in:
`git stash` collides across worktrees, `git checkout <paths>` silently restores
nothing when one path is untracked, and a fault injection survives into the next
run looking like a second bug. Committing early is what makes those recoverable.

A landing is one unit of work, not a code commit plus a documentation chore
afterwards:

- **The suite is green**, and the commit message carries the actual measurement
  — the numbers, the control, what went red under fault injection. That message
  is the record a phase gate reads.
- **`docs/` is updated in the same commit**: `VALIDATION.md` for what a gate
  proves and deliberately does not, `ROADMAP.md` for what landed and what it
  cost. Rejected experiments get written down with their numbers too; most of
  them sounded obviously right, and the point is to stop a later session
  re-deriving them.
- **Memory gets what the repo cannot carry** — cross-session working facts,
  not a second copy of this file. A Fable phase-gate session reads the repo and
  has no access to that store, so anything a reviewer needs belongs in `docs/`.

**Pushing and deploying stay explicit asks.** Deploying publishes to a public
site under Dan's name, and `main` sitting ahead of what is live is a normal
state, not something to fix unprompted. Say when a deploy is worth running and
let him call it.

**Planning** goes deep only on the NEXT milestone. Keep the rest high-level and
re-plan from the actual state of the codebase after each one lands — detailed
plans for far-future work go stale before they're used.

**Context.** Working here means implementation context accumulates in the
architectural conversation, so expect to compact more often. Compact after each
milestone lands, using `/handoff` in DEFAULT mode — the real payload is the
"fragile assumptions" section, the things inferred mid-session that compaction
would otherwise drop silently.

### Why this changed

The project ran a strict plan → implement → review split across three models.
In practice the review step kept expanding into "review, fix, re-verify,
deploy", so the handoff cost was paid and the architect did the implementation
work regardless. The catches that justified the split turned out to come from
*measuring* rather than from independence — the briefs had already asked for
the measurements that were skipped. What independence genuinely bought was
catching false claims in summaries, and that risk is now carried by the
verification contract above plus the Fable phase gate.

Delegation is also a lossy context boundary, and a lossier one than
compaction: a diff plus a summary is a worse way to acquire understanding than
having written the code, and the summary has an incentive to report success.

**The signal that this was wrong:** this conversation compacting mid-milestone
often enough to lose the thread. If that happens twice, reinstate an
implementer tier for the large units.

## Commands

```bash
npm run dev      # bundle + static server on :5174 (preview via workspace launch.json "mcgrot-walk")
npm run bundle   # esbuild src/main.js → src/dev-bundle.js (stamps index.html with the bundle hash)
node build.mjs   # single-file dist/mcgrot-walk.html, all assets inlined (the shareable artifact)
node build.mjs --site   # dist-site/ for GitHub Pages (npm run deploy does this and scans it)

npm run smoke        # full validation rig, ~133s — see docs/VALIDATION.md
npm run smoke:par    # the SAME full gate, two sharded processes, ~74s — the deploy gate
npm run smoke -- --since        # only the regions the working diff reaches
npm run smoke -- --dpr-timing   # adds the informational DPR table (60s, gates nothing)
npm run goldens:audit # which goldens did my change move? sorted, with the exact rm to run
npm run deploy       # smoke:par -> build -> secret scan -> push gh-pages -> md5-verify live
npm run probe -- -e "dbg.npcs.npcs.length"   # one-off measurement against a booted scene
npm run style        # E8's judging round -> docs/smoke/captures/style/, 24s
node scripts/comic-palette.mjs --only=<img> --swatch=<out.png>   # is this asset on-palette?
```

**The harness renders on the GPU** (E0.4, `scripts/launch.mjs`): Playwright's
`chromium` channel with `--use-angle=metal`, not the headless shell's
SwiftShader. That is where these numbers come from — the gate was 346s sharded
the day before. Every run names its renderer in the header, because goldens are
renderer-specific. `MCGROT_GPU=0` forces the software path back; try it first
if goldens ever move for no reason anyone can explain, since a clean run under
it blames a driver update rather than the scene.

**`smoke:quick` is gone** (E0.5). Measured under Metal it was 93s and PARTIAL
against `smoke:par` at 74s and COMPLETE — slower *and* narrower, so there was
no case left for running it. Passing `--quick` now exits 2 with that number
rather than silently running something else.

`--since` remains the genuine inner loop. It maps changed paths to regions and
**falls back to running everything** for any path it has no rule for, so adding
a module without touching `SINCE_RULES` costs time, never coverage. Its old
20–60s range was measured under SwiftShader and has not been re-measured under
Metal. Every run prints a profile (region, phase, boot) — that table is how
E0.3 found the real levers after the roadmap had guessed the wrong one, and how
E0.4 knew the GPU win was entirely in the post-load settle.

`smoke:par` is different: it runs **everything**, split across two processes,
and refuses to start if the shard partition misses a region. It is a
legitimate full run, and **`npm run deploy` now uses it** (Dan's call,
2026-08-03). The rule it embodies, measured both ways: parallelise
work that WAITS against work that COMPUTES. Running the four weather passes
concurrently bought 4% — rasterising already saturates the cores, so a second
rasteriser is not a second machine. (That rule was measured under SwiftShader,
where rasterising was the compute. On the GPU the shards are no longer
raster-bound, and the 2-way partition is tuned for a workload that no longer
exists — it still wins, 133s → 74s, but the split is worth re-deriving from
the profile if it is ever touched again.)

`probe` boots the scene the same way the suite does (freeze rAF, dismiss the
title card, pin clock and weather) and evaluates an expression, so a one-off
measurement is one line instead of thirty of boilerplate that is easy to get
subtly wrong. `--anchors=on|off`, `--hour=`, `--weather=`, `--mobile`,
`--shot=<path>`, `-f <module>` for anything bigger than an expression.

`deploy` fails closed on a dirty tree, a red suite, or any secret-scan hit,
and does not report success until every changed file md5-matches the live URL.

## Architecture

- `src/assets.js` — load-bearing contract: `window.MCGROT_ASSETS` (single-file build,
  data URIs) vs relative `assets/` fetches (dev). ALL asset URLs go through
  `assetUrl(assets, path)`. `src/assets` is a symlink to `../assets` for dev serving.
- `src/world.js` — street ribbons + 995 extruded OSM buildings (merged geometry),
  `streetLine` polyline (north→south, ~1617m), `nearestStreetPoint` for corridor clamp.
- `src/npcs.js` / `src/characters.js` / `src/interact.js` — the 124 vendors.
  npcs.js builds a vendor's PROPS (comic, nameplate) and characters.js stands a
  generated mesh in the group. The paper doll (box body, face JPEG on head
  front) is behind `npc.buildDoll()` and is NOT built on the shipped path since
  E3g — characters.js is the only caller, and only when the crowd is switched
  off or an archetype's glb 404s (the single-file artifact's one fallback).
  Six gates read their doll-side control from the off arm, joined on vendor
  name across two boots; see docs/VALIDATION.md § E3g before touching it.
  Proximity prompt → overlay + audio.
- `src/leithers.js` — 30 ambient walkers who listen and comment. Since E3f they
  stand on the SAME five archetypes as the vendors, taken through
  `characters.onArchetype` rather than fetched (they still own their carrier
  bags, and `clothMat` is still shared with npcs.js). Their box column is
  behind `w.buildDoll()`, built only when meshing is off, characters are off,
  or the archetype 404s. They select on girth alone — synthesising the head
  axis they lack was measured and rejected. **Anything E3f-specific draws from
  its own PRNG**: the walkers' layout comes off a fixed `rand` sequence and one
  extra draw reseeds the whole crowd and every golden with it.
- `src/litter.js` — readable comics on the ground. `src/scenery.js` —
  tram, catenary + arc flashes, smoke, debris (seeded PRNG: layout must stay
  deterministic). `src/ambience.js` — WebAudio only, must start from a user gesture
  (title card).

## Gotchas

- **`git stash` is shared across worktrees.** Spawned background tasks run in
  `.claude/worktrees/<name>/`, and a worktree has its own working tree but the
  SAME `refs/stash`. A bare `git stash pop` here will happily pop the
  background session's entry into this tree — hit while a "palette-fix" stash
  was in flight, which merged another session's README/build.mjs/cars.js
  changes in and conflicted. Check `git stash list` and pop by explicit index
  (`git stash pop 'stash@{1}'`), or don't stash at all while a background task
  is running: commit to a scratch commit instead.
- **Never `git checkout -- src/index.html` to drop the bundle stamp once the
  file has real changes in it.** The stamp line is churn and the reflex to
  revert it is right, but `index.html` also holds every overlay's DOM and CSS.
  Doing this on autopilot during E5d discarded the entire ending card and
  prompt, and because the suite had passed *before* the checkout, the commit
  that followed looked measured and was not. Check `git diff src/index.html`
  first: revert only when the sole hunk is the `?v=` stamp, otherwise commit
  the file and let the stamp ride along.
- **`git checkout <paths>` restores NOTHING if any path is untracked.** Mid-
  milestone, a new module is untracked, so a restore command naming it fails
  on that path and silently leaves everything else modified — a fault
  injection then survives into the next run and looks like a second bug. Commit
  before fault-injecting.
- three.js physical light units: intensities that "look right" are ~10-100× the legacy
  scale (torch 18; there are no NPC exhibit spotlights — the only other lights are
  the three arc-flash PointLights, peak-driven from intensity 0). Tone mapping is
  ACESFilmic, exposure 1.46, driven per-frame by `src/atmosphere.js`.
- ACES lifts everything: procedural texture tones must be picked far darker than
  looks right on paper, and canvas bakes must write RAW sRGB hex bytes (THREE.Color
  components are linear; an SRGB-tagged canvas converts AGAIN → silhouettes).
- Spawn yaw must come from the street tangent — Leith Walk runs SSW, not south
  (`atan2(-tx, -tz)`; controls' forward is `(-sin yaw, -cos yaw)`).
- No pointer lock assumption: drag-look is primary (artifact iframe blocks pointer lock).
- Audio is MP3 (Safari won't play OGG/Opus). Keep the final HTML under ~8MB.
- `window.__mcgrotDebug` (main.js) is a dev probe — hostname-gated to localhost.
- Asset regeneration (TTS/faces/OSM): see README.md; keys in `.env.local` (gitignored).
- Texture/bundle URLs are content-hash versioned (atlas/strips etags, stamp-bundle) —
  never hand-write a cache-buster query.

## Verbatim rule

NPC scripts read the comics' AI-garbled text EXACTLY as printed — never "fix" the
nonsense. It's the point. This extends to Leither comments and litter readings:
quoted comic fragments are sacred; only the wrapper phrasing is theirs.
