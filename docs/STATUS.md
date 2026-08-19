# STATUS — where McGrot's is, what keeps biting, what is next

Read this first after a handoff or a compaction. It is deliberately short.

**What this is not.** It is not the brief (`docs/MCGROTS-ROADMAP.md`), not the
record of what is proven (`docs/MCGROTS-VALIDATION.md`), and not the rules
(`CLAUDE.md`, `AGENTS.md`). Those are authoritative and this file is a map to
them. **Where this file disagrees with one of them, it is this file that is
stale.** Do not copy their content down here; a second copy drifts and then
someone acts on the wrong one.

Written 2026-08-18. Anything below marked *snapshot* must be re-derived before
it is acted on.

---

## Re-derive the real state in under a minute

```bash
git log --oneline -8                      # what landed
git branch -v && git worktree list        # what is in flight, and where
herdr agent list                          # who is running
npm run bundle:mcgrots && npm run smoke:mcgrots   # is it green (~31s)
```

The suite is the only statement of health that means anything. A summary of it
is not, including this one.

---

## Where it stands

Two games live in this repo. **The street** (`src/` outside `src/mcgrots/`) is
**paused and not to be edited**. **McGrot's** (`src/mcgrots/`) is the active
project: a van, a counter, McGrot serving, Pomplé the dog beside him, a Taxman,
and a scripted ten-minute visit built from the comics.

**G7 passed on 2026-08-18.** Dan watched the full ten minutes and called it:
*"For PoC it's ok."* Read that bar exactly as met — it clears "do you want a
second run", not a quality bar. He asked for a polish phase, which the G7 phase
gate then scoped as **G7.5**, currently in flight.

Milestones G0–G7 are landed. G7.5 is running. G8a (the two leads rebuilt from
the comics), G8 (the rest of the cast) and G9 (ship on GitHub Pages) are ahead.

**Three faults are live** — full entries in the roadmap's § 10:

| | What |
|---|---|
| **F24** | McGrot and the van were authored to two different ground planes. Fix is written and measured, held unmerged on `g7p-pushback` behind F25. |
| **F25** | Four regions gate on "what fraction of McGrot's own box draws" as a proxy for visibility. It never measured visibility. Nine checks fail the moment he is deliberately half-hidden. |
| **F26** | No check anywhere reads a shipped default; every flagged feature is proved only through an arm the gate itself forces on. Half closed — the body default landed 2026-08-18. |

Older faults are closed or explicitly carried to G8a; the roadmap says which.

---

## What keeps biting

These have each cost real time **more than once**. The rule for each lives in
`CLAUDE.md` or `AGENTS.md` — this is the index, not the ruling.

1. **A green suite proves the harness agrees with itself.** It cannot see a bad
   picture. Nine seconds of black once passed every assert. Every fault found in
   G2 was found by opening an image *after* the numbers said green. Anything the
   player watches gets rendered and looked at.
2. **A scene-graph check proves a function ran, not that anything is drawn.**
   `Box3().setFromObject` ignores `.visible`. Caught twice: `statue.visible =
   false` passed its region 2/2 and the full suite 38/38; G7l's sign did it
   again. The same logic holds for audio — element state proves wiring, not
   sound.
3. **A gate that forces its own arm cannot see the product.** That is F26, and
   it went green under two separate injections on a 153/153 suite.
4. **A shared measuring technique quietly becomes a shared assumption.** That is
   F25: four regions, nine checks, one root cause, invisible until something
   moved.
5. **Git will not save you from an untracked file.** `git commit -- <paths>`
   silently skips untracked ones; `git checkout <paths>` restores *nothing* if
   any path in the list is untracked. Both bit on 2026-08-18. Commit before
   fault-injecting.
6. **`git stash` is shared across every worktree.** One `refs/stash` for the
   repo. Pop by explicit index or make a scratch commit instead.
7. **A number quoted in an earlier report is a snapshot, and sizing work on it
   is how an hour becomes twenty minutes of real work.** Re-derive from the
   artefacts on disk and quote the command, so the worker can disagree.
8. **Two workers appending to the same file is not a merge, it is a splice.**
   Every unit copied the same helpers into `scripts/smoke-mcgrots.mjs`, so git
   found spurious common context *inside* two blocks and once produced invalid
   JavaScript. G7.5 is splitting that file to remove the class.

---

## Running the work

The orchestrator plans, briefs, verifies by its own measurement, and does not
implement. Workers get their own git worktree and branch. Full rules in
`CLAUDE.md`; the three that get forgotten:

- **A new unit gets a new agent, never a reused pane.** A pane that has done one
  unit starts the next part-full, and carries the last unit's assumptions.
- **`--path "$HOME/code/personal/.worktrees/mcgrot-walk/<unit>"` is mandatory.**
  Leave it off and the worker authenticates on Dan's *work* account, because the
  shell routes by directory prefix. Check after: `ls ~/.claude/projects/ | grep
  -i "herdr-worktrees-mcgrot"` must return nothing.
- **`--effort` is not optional**, because the inherited default is `xhigh`.
  `high` designs a gate, `medium` has no gate, `low` is mechanical and checkable
  by a count or a hash. `xhigh` on a worker means the brief failed to settle a
  design — raise the brief, not the effort.

**`agent_status: done` does not mean the unit finished.** Read
`.herdr/<name>.md` before believing it; one worker read `done` while blocked on
a question it had not sent.

**Never push, deploy or publish** without Dan asking. Deploying publishes to a
public site under his name.

---

## What is next

Add to this list as things arrive; it is meant to be edited.

**In flight** *(snapshot — check `git branch -v` and `herdr agent list`)*

- Splitting `scripts/smoke-mcgrots.mjs` into per-region files. Blocks most of
  the rest of G7.5, because nearly every remaining item edits that file.
- Pomplé's signage: five variants, cycling on a wall-clock schedule.
- A direction session interrogating Dan about where the project should go,
  writing `docs/DIRECTION.md`.

**Queued behind the suite split**

- One default-boot check per flagged feature, closing the rest of F26. Do not
  anchor it at `counter` — the player's body never enters that frame, so the
  check would pass while measuring nothing.
- Re-derive the four regions in F25 against a figure who is *supposed* to be
  half hidden. Do not lower the floors to fit; that makes all nine checks
  permanently meaningless. Landing this lands `g7p-pushback` and closes F24.
- Make `visit` ship on. Decided 2026-08-18; it gates the entire ten-minute
  sequence, so the plain page currently runs nothing.
- Two known traps: the `style` region navigates the shared page and never
  navigates back, and three regions still carry a `Box3` presence check.

**Ahead**

- **G8a** — McGrot and Pomplé rebuilt from the comics. Two carried faults live
  in geometry this phase replaces.
- **G8** — the rest of the cast. **G9** — ship on GitHub Pages.
- Undecided, in the roadmap's § 11: which comics to use, whether the player
  picks their own body, how the statue gets made, and whether the real building
  footprints help or hurt.
