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

## E1 — The Brae (the incline)

*Leith Walk drops ~25–30m from Picardy Place to the Foot. The payoff is the
iconic view: standing at the top looking down the Walk to the Forth, water and
Fife on the horizon.*

- Elevation profile `h(chainage)` along the street spline (hand-authored from
  spot heights / OS open data; smooth, monotonic-ish).
- Road and pavement ribbons follow the profile; buildings sit at their
  frontage's ground height and terrace down (step at party walls, as the real
  street does).
- Camera/gravity follows ground height; NPCs, leithers, litter, cars, vermin
  all re-based (everything currently assumes y=0 — this is cross-cutting and
  gets full architect review).
- Sky/backdrop gains the Forth: water plane + far shore silhouette north of the
  Foot, visible down the slope.
- Smoke goldens re-captured once, after the slope lands.

## E2 — Atmosphere (dynamic time + weather)

*The largest beauty-per-effort win, and the engine behind half the delight
layer. Good light flatters simple geometry.*

- Time-of-day cycle (accelerated; phase seeded from the real date so each visit
  starts differently). Sun/hemisphere/fog colours keyframed through dawn /
  day / gloaming / night. Lit windows after dark.
- Weather state machine: clear / overcast / drizzle / rain / haar, with
  transitions. Rain = particle pass + wet-road material response + puddle
  reflections. Haar rolls up from the Forth.
- Post-processing stack: AO, bloom, vignette, film grain, colour grade.
  Budgeted and toggleable (mobile fallback).
- Debug hooks land with the feature: `setTime` / `setWeather` are E0 API stubs
  until this milestone makes them real.

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
  dogs), LOD/instancing strategy to keep hundreds cheap.
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
