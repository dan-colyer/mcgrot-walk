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

The gate suite in `scripts/smoke.mjs` is now the reviewer. Extend it whenever
a milestone adds a claim worth trusting later, and document each gate in
`docs/VALIDATION.md` — including what it deliberately does *not* prove.

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

npm run smoke        # full validation rig, ~412s — the deploy gate; see docs/VALIDATION.md
npm run smoke:quick  # ~169s inner loop: skips the weather matrix + DPR timing, and SAYS SO
npm run goldens:audit # which goldens did my change move? sorted, with the exact rm to run
npm run deploy       # smoke -> build -> secret scan -> push gh-pages -> md5-verify live
npm run probe -- -e "dbg.npcs.npcs.length"   # one-off measurement against a booted scene
```

`smoke:quick` is for iterating, never for deploying — the weather columns are
exactly where a golden regression hides, and `npm run deploy` always runs the
full suite regardless.

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
- `src/npcs.js` / `src/interact.js` — paper-doll NPCs (face JPEG on head front),
  proximity prompt → overlay + audio. `src/leithers.js` — ambient walkers who listen
  and comment. `src/litter.js` — readable comics on the ground. `src/scenery.js` —
  tram, catenary + arc flashes, smoke, debris (seeded PRNG: layout must stay
  deterministic). `src/ambience.js` — WebAudio only, must start from a user gesture
  (title card).

## Gotchas

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
