# STATUS — both projects, parked

Read this first on returning. It is deliberately short.

**What this is not.** It is not the brief (`docs/MCGROTS-ROADMAP.md`,
`docs/ROADMAP.md`), not the record of what is proven
(`docs/MCGROTS-VALIDATION.md`, `docs/VALIDATION.md`), and not the rules
(`CLAUDE.md`, `AGENTS.md`). Those are authoritative and this file is a map to
them. **Where this file disagrees with one of them, it is this file that is
stale.** Do not copy their content down here; a second copy drifts and then
someone acts on the wrong one.

Written 2026-08-19. Anything below marked *snapshot* must be re-derived before
it is acted on.

---

## Both projects are parked, as of 2026-08-19

Dan's own framing: *"building 3d scenes that change, expand follow timings and
be persistent online. I've bitten off more than we can chew - for now."*

Parked is not abandoned. Both reached a working state. Stopping was a choice
about ambition, not a failure — see the *for now*. The durable assets from
both — audio, faces, façades, character and vehicle models, structured data —
have been copied into a separate library, `mcgrot-assets`. See `MOVED.md`.

## What state each project is in

**McGrot's** (`src/mcgrots/`) was the active project. Re-derived just now:

```
npm run bundle:mcgrots && npm run smoke:mcgrots
-> [mcgrots] 153/153 passed in 31.4s
```

G0 through G7 are landed; Dan watched the full ten-minute visit and called it
*"For PoC it's ok."* G7.5, a polish phase, was in flight when the project
parked — see "Where the preserved work is" below for what it left behind.

**The street** (`src/` outside `src/mcgrots/`) was paused earlier than this
parking, and was already off-limits to edit (`AGENTS.md`). It has its own
separate validation rig, `docs/VALIDATION.md`, last measured at 74s
(`npm run smoke:par`, the deploy gate). Not re-run for this parking — the
street's own suite is unaffected by anything that changed today.

## How to check it still works

```bash
git log --oneline -8                              # what landed
git branch -v && git worktree list                # what is in flight, and where
npm run bundle:mcgrots && npm run smoke:mcgrots    # McGrot's gate, ~31s
npm run smoke:par                                  # the street's gate, ~74s (deploy gate)
```

The suite is the only statement of health that means anything. A summary of
it is not, including this one.

## The three live faults

Full entries: `docs/MCGROTS-ROADMAP.md` § 10. These are open at park and are
not to be read as closed by parking.

| | What | State at park |
|---|---|---|
| **F24** | McGrot and the van were authored to two different ground planes; he renders 3.8 cm in front of the van's own panel. | Fix measured and built (G7p), held **unmerged** on `g7p-pushback` — deliberately, behind F25. |
| **F25** | Four regions (`mcgrot`, `beats`, `taxman`, `valance`) gate on "what fraction of McGrot's own box draws" as a proxy for visibility. It was never measuring visibility, and the proxy collapses the moment he is deliberately half-hidden — nine checks go red at once. | Open. Root cause and the nine failing checks are enumerated in § 10. Landing F24's fix needs this re-derived first. |
| **F26** | No check anywhere reads a shipped default; every flagged feature (`valance`, `ambience`, the player's own body) was proved only through an arm the gate itself forces on. | **Half closed.** The body default was promoted to `skinned` on 2026-08-18 (§ 10, "G7.5b"). `valance` and `ambience` still have no default-boot check. |

## Where the preserved work is

Three branches, all pushed to `origin`. None is merged to `main`; each commit
message states what was and was not verified.

- **`g7p-pushback`** — F24's measured fix (`f300f8e`): McGrot moved 0.32 m
  behind the van's own back face, picked by rendering and measuring nine
  candidate positions. Full suite at the time: 152/161 — the nine failures are
  F25, not this branch's own checks. Held unmerged on purpose so `main` stays
  green.
- **`g7-5a-suite`** — a partial split of the 4,384-line
  `scripts/smoke-mcgrots.mjs` into per-region modules (`99aa46b`). 2,860 lines,
  **unfinished and unverified**: no runner wires the modules up, the original
  suite file is untouched, and nothing has been run against them. The commit
  message says explicitly to diff each region module against the original
  before trusting it.
- **`g7-5e-signage`** — five part-built Pomplé sign variants (`53433b8`), 425
  lines in `pomple.js`. **Never rendered**: no gate reads the sign param, no
  variant has been looked at, no default chosen. The commit message gives the
  render command to check with.

## What the resume point would be

For McGrot's: land `g7-5a-suite`'s split (verified region-by-region against
the original file first), then F25's proxy re-derived against a figure who is
supposed to be half-hidden, which lands F24. Close the rest of F26 with one
default-boot check per flagged feature. Then G8a (McGrot and Pomplé rebuilt
from the comics) was next in the roadmap.

For the street: resume point is whatever `docs/ROADMAP.md`'s own parking
section names — it was paused independently and earlier.

## Where the assets went

`MOVED.md`, at the repo root. Nothing broke: the library is a copy, not a
move.

## What keeps biting

Short version — full rulings live in `CLAUDE.md` and `AGENTS.md`, and
project-agnostic ones are being written up in `mcgrot-assets`'s
`docs/gotchas-universal.md` (that library is being built in parallel; check it
exists before relying on the pointer).

1. **A green suite proves the harness agrees with itself, not that the
   picture is right.** Nine seconds of black once passed every assert.
2. **A scene-graph check proves a function ran, not that anything is drawn.**
   `.visible = false` has twice passed a full suite. Same logic for audio:
   element state proves wiring, not sound.
3. **A gate that forces its own arm cannot see the product default.** F26.
4. **`git commit -- <paths>` silently skips untracked files; `git checkout
   <paths>` restores nothing if any path in the list is untracked.** Commit
   before fault-injecting.
5. **`git stash` is shared across every worktree** — one `refs/stash` for the
   whole repo. Pop by explicit index, or make a scratch commit instead.
6. **A number quoted in an earlier report is a snapshot.** Re-derive from the
   artefacts on disk and quote the command.
