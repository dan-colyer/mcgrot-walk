@AGENTS.md

# McGrot Walk

First-person Three.js POC: post-apocalyptic Leith Walk (real OSM footprints), 400+
grotesque NPC vendors each reading a McGrot comic aloud (Gemini TTS, verbatim
garbled text), plus an ambient crowd, wrecked vehicles and photo-derived façades.

## Development workflow

**The active project is McGrot's, under `src/mcgrots/`.** The street is paused
— see `docs/MCGROTS-ROADMAP.md` § 8. Where this file and that one disagree,
that one wins for anything under `src/mcgrots/`, and this file's architecture
and gotchas sections still describe the street.

**Opus orchestrates from a herdr session; workers implement in their own
panes.** Reinstated 2026-08-11 on Dan's call, replacing the single-session
arrangement below. Opus plans the milestone, writes the brief, drives the
workers, reviews by measurement and reports to Dan. It does not implement.

Two workers, deliberately of different kinds: **Sonnet** (`claude`, the
established implementer) and **Codex** (OpenAI's CLI, on trial — it does not
follow this repo's conventions by default, so brief it explicitly and review
it the same way). Give each worker its own file. `looks.js` and `main.js` are
the hot spots; parallel edits to either are how a session loses a morning.

**Control stays on `main`; every worker gets its own git worktree and
branch.** Dan's ruling, 2026-08-16. The orchestrator never implements, so its
tree stays clean and is the one place a full suite run means what it says.

```bash
herdr worktree create --cwd "$PWD" --branch <unit> --label <unit> --no-focus
herdr agent start <name> --kind claude --pane <returned-pane-id> -- --permission-mode auto
```

*Why, given the old rule was explicit pathspec in one shared tree.* Pathspec
discipline protects you from committing a file that is entirely someone
else's. It does nothing when two workers legitimately edit the *same* file —
naming it commits their half-finished half too. That gap opened on 2026-08-16
with three workers running and two briefed to write
`docs/MCGROTS-VALIDATION.md`; it was caught before either committed, by
reading the briefs against each other rather than by any check. Worktrees
remove the class of problem instead of asking three sessions to remember a
convention.

Two things worktrees do **not** fix, both worth knowing before trusting them:
`git stash` is shared across the whole repo, so a bare `git stash pop` still
reaches into another worker's entry; and a worker can still be *told* to edit a
file another worker owns, which is a briefing error no isolation prevents.
Merging is now a real merge rather than interleaving, which is the point — but
it also means the orchestrator now owns integration, and a branch that never
lands is work that never happened.

**A new unit gets a NEW agent, never a reused pane.** Dan's ruling,
2026-08-16, and it is not a preference — it is the difference between a worker
that finishes and one that dies halfway. Workers run on models with smaller
context windows than the orchestrator's, and a pane that has already done one
unit starts the next one part-full. The orchestrator does not get to see how
full; there is no reading for it from outside, so the only safe assumption is
that a used pane is a compromised one.

The second reason is quieter and worse. A worker carrying the last unit's
context carries its assumptions too, and will act on a fact that was true two
units ago without re-checking it — the same failure the phase-gate rule exists
to prevent, one tier down.

So, per unit, every time, no judgement call:

```bash
herdr worktree create --cwd "$PWD" --branch <unit> --label <unit> --no-focus \
  --path "$HOME/code/personal/.worktrees/mcgrot-walk/<unit>"
herdr agent start <fresh-name> --kind claude --pane <returned-pane-id> \
  -- --permission-mode auto --effort high
```

**`--path` is mandatory, and leaving it off puts the worker on Dan's WORK
Claude account.** Hit 2026-08-16, by the orchestrator, four times before he
noticed. This is the one rule in this file whose violation is not a
correctness problem but a boundary one.

`~/.zshrc` routes the account by directory: the `claude` shell function sets
`CLAUDE_CONFIG_DIR=~/.claude-personal` only when `$PWD` is under
`$HOME/code/personal` or `$HOME/dan_vault/personal`, and otherwise falls
through to the work login. herdr's default worktree location is
`$HOME/.herdr/worktrees/...`, which matches neither, so every worker started
there authenticated as work and wrote this personal project's transcripts into
the work account's history. Verified after the fact, not assumed:

```bash
ls ~/.claude/projects/ | grep -i mcgrot     # must show no --herdr-worktrees- entries
```

The shared-tree workers before the worktree ruling were fine, because
`/Users/dan/code/personal/mcgrot-walk` matches. **The worktree ruling
introduced the leak**; the fix is to keep worktrees inside the personal root
rather than to abandon worktrees.

Two checks, both cheap, both before prompting anything:

1. The path you pass to `--path` starts with `$HOME/code/personal/`. This is a
   prefix match in a shell function — deterministic, so reading the path is a
   real check, not a guess.
2. After the unit lands, the `grep` above still returns nothing new.

Do not try to verify by reading the pane's environment. `CLAUDE_CONFIG_DIR` is
set by the function *at the moment `claude` is invoked* and is not in the
pane's env beforehand, so an env check passes while the account is still
wrong.

**`--effort` is not optional, because the default is wrong for a worker.**
Dan's ruling, 2026-08-16, on noticing it. `CLAUDE_CONFIG_DIR` points at
`~/.claude-personal`, whose `settings.json` sets `"effortLevel": "xhigh"`, and
every agent started under it inherits that — G6b.1 catalogued JPEGs on two
xhigh sessions before anyone looked. The orchestrator wants xhigh; a worker
following a written brief does not.

**`high` for anything that designs a gate. `medium` for a unit with no gate**
— research, extraction, a document. The split is not arbitrary: gate design is
where a worker has actually failed here, and it failed by reasoning wrongly
rather than by executing badly. G5e's self-test exercised `validatePayload()`
in isolation and proved nothing about the product; G6a's own report reached
"reads as a legible dog" from close-ups it chose instead of the anchors the
player sees. Neither is fixed by more diligence. Execution work — read 78
images, write down what is in them — has never been the failure mode.

**`low` for a mechanical unit whose procedure is fully specified and whose
output is checkable by a count, a diff or a hash** — regenerate audio for this
list of IDs, merge this batch, rename these files. The test is whether a wrong
step would be cheap and immediately visible.

**Never `low` for a unit that designs a safety guard**, however mechanical it
looks from outside. G5g reads as a plain rclone wrapper; what it actually
produced was the choice to refuse rather than trust static review, a runtime
assertion on the copy direction, and `--remote`/`--staging` overrides invented
so the shipped code path could be exercised against a read-only folder. None of
that was in the brief. At `low` the likely output is a working script with no
guard, which is exactly the failure the unit existed to prevent.

**`xhigh` on a worker is a smell, not a setting.** It means the brief did not
settle a design and the worker is being asked to invent one. Raise the brief,
not the effort — the orchestrator writes briefs precisely so a worker never has
to. If a unit genuinely cannot be briefed, it is not a worker unit; it belongs
in this session or in a phase gate.

**The phase gate is the exception, and it is not a worker.** It runs xhigh, in
a fresh session that did not write the code, and reports to Dan rather than
here. `max` has no use in this project — nothing has warranted it.

Do not restart a running worker to change its effort. The switch costs more
than it saves mid-unit.

Give the agent a **new name tied to the unit** (`comics-a`, `pomple`), not a
name tied to the model (`sonnet`). A model-shaped name is what makes reusing
the pane feel natural, and it also means `.herdr/<name>.md` accumulates several
units' reports in one file instead of one file per unit.

Leave the finished pane alone rather than tidying it: its `.herdr` file and
scrollback are the record, and closing a workspace you did not create is
against the herdr rules anyway. Prune worktrees when the branch has landed.

**Workers talk back over herdr, not over the pane's scrollback.** Claude Code's
own cross-session messaging needs v2.1.224 and the `stable` channel is pinned
to 2.1.220, so it is unavailable here; re-check when stable moves. The
convention both workers follow is in `AGENTS.md` § "Reporting back".

*Superseded, kept because its reasoning still applies: Opus previously worked
the milestone end to end, with no implementer tier — see "Why this changed"
below. The catches that justified splitting the work came from measuring, not
from independence, so an orchestrator's value is enforcing the verification
contract rather than adding a layer. Delegation is also a lossy context
boundary: a diff plus a summary is a worse way to understand code than having
written it.*

**The orchestrator starts the gate pane; the gate reports to Dan, not to the
orchestrator.** Settled 2026-08-11 on Dan's question. Starting a pane is
mechanical and there is no reason he should do it by hand — `herdr workspace
create --cwd <repo> --label gate --no-focus`, then `herdr agent start gate
--kind claude --pane w4:p1 -- --model opus`. Receiving its findings is the
opposite: the orchestrator made the decisions under audit and would choose the
framing, which hands back the one thing independence buys — catching a false
claim in a summary. So the gate writes `.herdr/gate.md` for Dan and does not
ping control. For the same reason a subagent cannot be the gate: its report
returns to the orchestrator by construction.

Give it the commit range and the three documents, and **nothing else** — no
list of what to check and no account of what happened, both of which shape what
it finds. Today's numbers are in the commit messages for it to disagree with.

**A fresh session on Opus at xHigh is the phase-gate reviewer**, and is the
only independent read. At the end of each major roadmap phase (E1, E2, …) that
session audits the phase end-to-end: architecture drift, quality against the
roadmap's intent, cross-cutting regressions, and whether the roadmap itself
still holds. It adjusts the roadmap and hands the next phase back. **Opus tells
Dan when a phase-gate pass is due** — at a phase boundary, or earlier if the
architecture has drifted enough that a fresh read is worth more than another
milestone.

*Changed 2026-08-10, on cost: Fable held this role for the E2, E3 and E5 gates
and is no longer affordable. What the role actually needs is a session that has
not written the code and will re-run the measurements rather than read the
summary — the E9/E10 gate did that on Opus xHigh and found two things the
implementing session had not (see ROADMAP § "E9/E10 — phase-gate audit"). Do
not run a phase gate at the default effort, and do not run it inside the
conversation that implemented the phase.*

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
  not a second copy of this file. A phase-gate session reads the repo and has no
  access to that store, so anything a reviewer needs belongs in `docs/`.

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
verification contract above plus the phase gate.

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
npm run goldens:audit # which goldens did my change move? per-pose noise floors, with the exact rm to run
npm run goldens:noise # re-measure those floors -- 3 full suites, clean tree only, after any recapture
npm run deploy       # smoke:par -> build -> secret scan -> push gh-pages -> md5-verify live
npm run probe -- -e "dbg.npcs.npcs.length"   # one-off measurement against a booted scene
npm run style        # E8's judging round -> docs/smoke/captures/style/, 24s
npm run probe -- --interior=on --shot=/tmp/shop.png -e "(dbg.enterInterior(), dbg.stepFrames(20), 'in')"
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
  `assetUrl(assets, path)`, which checks `images`, `audio` and (since E3h)
  `models` — the five character glbs, inlined. `src/assets` is a symlink to
  `../assets` for dev serving. **The dev/smoke server is rooted at `src/`**, so
  `dist/` is not reachable from it; the E3h gate starts its own server there.
- `assets/faces/` — 39 JPEGs, in the repo but **published by neither build**
  since E3h. They only ever went on a paper doll's head, so they are reachable
  only on localhost (the off arm, the glb-404 fallback). Republish them and the
  credits section must come back with them — `build.mjs` makes that conditional
  on the files actually shipping, deliberately.
- `src/world.js` — street ribbons + 995 extruded OSM buildings (merged geometry),
  `streetLine` polyline (north→south, ~1617m), `nearestStreetPoint` for corridor clamp.
  Since E6a it also owns `world.collision`, built here so it exists before any
  prop module and before `readMoment` resolves the spawn.
- `src/collision.js` — plan-view (x/z) solids the PLAYER is resolved against;
  nothing pushes anything else. Buildings register their `leith.json`
  footprints; scenery/cars/roadworks register boxes and circles from
  placements they already compute — **never a new `rand()` draw**. Since E6a.2
  npcs.js registers a circle per vendor and leithers.js a *mover* per walker
  (position read live, registered at the end of the FIRST update — a walker's
  group sits at the world origin, i.e. on the spawn point, until then).
  Walkers are solid to the player and the player is not solid to them:
  leithers.js never consults collision, deliberately. Consulted
  ONLY from `controls.update()`'s movement integration, before the corridor
  clamp; the debug API poses `camera.position` directly and stays exempt,
  which is what keeps every bookmark and golden unchanged. Movement
  accepts-or-discards candidate positions and slides along the wall's tangent
  — it does NOT push out, which oscillates in a concave footprint (see
  docs/VALIDATION.md § E6a.1). Push-out (`resolveFree`) is for spawn and
  `#p=` moments only.
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
- `src/interior.js` — the Shop (E9a.1). Valvona & Crolla, its OWN
  `THREE.Scene` at its own origin, axis-aligned — NOT a room carved out of the
  street mesh and not at the building's real coordinates.
  `__mcgrotForceInterior` is the gate lever in both directions. `main.js` owns the swap, not
  this module: `activeScene` is what `post.render()` gets, `enterInterior()`
  reparents the camera, hides the sky dome and torch, takes atmosphere's
  suspend token for `toneMappingExposure`, and hands `controls` the room. The
  room's own fog needs no token — it belongs to a scene object atmosphere never
  sees. Layout is seeded from the SHOP SLUG, never the day. `SUSPENDED_INDOORS`
  in main.js names the updaters held while inside; **skipping an updater stops
  it thinking, not showing**, so anything that puts DOM on screen also needs a
  `suspend()` (interact and captions have one). Shipped default is now ON
  (E9a.1 enable), but there is still NO WAY IN on the shipped path — the room
  is built at every boot and reachable only from `dbg.enterInterior()`, so
  enabling it moved no golden. Boot it with `npm run probe -- --interior=on`.
- **`atmosphere.acquireSuspend(owner)` is the ONLY way to own fog/exposure**
  (E9a.1, on the E5 phase-gate ruling). It returns a token or NULL if someone
  else holds it; `releaseSuspend(token)` is idempotent and ignores a stale
  token. The two owners are `ending` and `interior`, and a caller that gets
  null must not paint — the ending refuses to begin from indoors. Do not put an
  `isInside`-style guard ahead of an acquire: it makes the token dead weight
  and a fault injection on the lock stays green.
- `src/flags.js` — the ONE localhost-gated feature flag helper,
  `flag('Lamps', LAMPS_ENABLED)` reading `window.__mcgrotForceLamps`. Every
  flagged module goes through it since E10a.1; do not copy the old inline
  boilerplate back in. Never reachable off localhost — the gates boot the same
  build twice and attribute a measured difference to the flag, which is only
  sound if nothing else differs.
- `src/gullet.js` — the stall at a FIXED chainage 740, side +1, offset 7.6m,
  plus McGrot and Pomplé (E10a.2). Behind `__mcgrotForceGullet`, shipped
  default OFF. Its own seeded PRNG, never scenery's, and the `gullet` region
  gates that by requiring `geomHash` to MATCH across the flag's two arms.
  Presence is date-keyed through `mcgrotIsIn(dayKey)`, read ONCE at build time
  — do not call it again downstream or the stall shuts with McGrot still in
  it. Two collision tags, counted separately: `gullet` is the stall's fixed
  boxes (always 2), `gullet-cast` is the figures (2 in, 1 out). Boot it with
  `npm run probe -- --gullet=on`; add `--hour=` and a `__mcgrotForceDate` init
  script to pick a day. Since E10a.3 he is also a READING STATION and not
  vendor 125: main.js builds a separate `readers` array for interact.js and
  proximity-audio.js, so `npcs.npcs` stays exactly 124 and geomHash, the vendor
  census and the journal denominator are untouched. His comic (`3c6b637b`)
  deliberately has no `npc` block — adding one makes him a real vendor. When the enable commit flips the default,
  `SINCE_RULES` must grow `render`, `weather` and `mobile` for this path.

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
- **A catalog entry must not claim an mp3 that is not on disk.** It 404s on
  every overlay open and logs a console error, and the console-clean gate only
  catches it if some gate happens to open that station. `generate-tts.mjs`
  writes `audio` back on success and **`merge-batches.mjs` sets it only when the
  file exists** (fixed 2026-08-10 — E10a.3 fixed the generator and missed the
  merger, which runs first in the daily job; it stayed green only because the
  daily limit had always exceeded the size of a wave). Leave `audio` null until
  the clip exists; the `gullet` region checks all 418 entries.
- **Landing a transcription batch is a MILESTONE, not a merge.** `npcs.js`
  builds one vendor per comic with an `npc` block, so folding a batch in adds
  people to the street and moves goldens — 103→124 moved 23, and an unattended
  124→135 moved 29 and broke 5 draw-call baselines and 9 gates that name 124.
  `scripts/daily-tts.sh` now UNDOES any merge that changes the vendor census and
  renders audio only; the landing (merge → `npm run smoke` → deliberate
  recapture) is a human act. Procedure in `scripts/catalog-batches/BRIEF.md`.
- `window.__mcgrotDebug` (main.js) is a dev probe — hostname-gated to localhost.
- Asset regeneration (TTS/faces/OSM): see README.md; keys in `.env.local` (gitignored).
- Texture/bundle URLs are content-hash versioned (atlas/strips etags, stamp-bundle) —
  never hand-write a cache-buster query.

## Verbatim rule

NPC scripts read the comics' AI-garbled text EXACTLY as printed — never "fix" the
nonsense. It's the point. This extends to Leither comments and litter readings:
quoted comic fragments are sacred; only the wrapper phrasing is theirs.
