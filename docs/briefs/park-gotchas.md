# park-gotchas — the hard-won knowledge, split universal / 3D

Read `docs/briefs/park-CONTEXT.md` first.

## What you own

Two files, in the **library** repo (`/Users/dan/code/personal/mcgrot/mcgrot-assets`):

- `docs/gotchas-universal.md`
- `docs/gotchas-3d.md`

Nothing else. Do not touch the library's `README.md`.

## The job

Two projects accumulated about 24,000 lines of documentation, much of it
recording things that cost real time. Most of that value is **not** about
Three.js. Mine it, and split it in two so a 2D project can read one file and
skip the other entirely.

Dan's instruction, verbatim: *"focused docs in the same library on issues,
gotchas and methods found useful in the code, so future agents can reference
them."* The audience is **a future agent**, not a human browsing.

## The split, and how to decide

`gotchas-universal.md` — true regardless of renderer, language or dimension.
This is the more valuable file and should be the longer one. It covers, at
minimum:

- **Verification discipline.** The project's central failure: three milestones
  landed on summaries asserting numbers that were false. Why a green suite
  proves the harness agrees with itself and nothing more. Why every acceptance
  check needs a *named control*. Why a gate must be fault-injected to prove it
  can go red. Why a gate that forces its own arm cannot see the shipped product
  (that is fault F26 — find it in `docs/MCGROTS-ROADMAP.md` § 10).
- **Automated checks cannot see a bad artefact.** Numeric gates passed nine
  seconds of pure black. Anything a person looks at or listens to needs a human
  or a rendered check, not an assertion about the object that produced it. The
  audio version of the same mistake is in `AGENTS.md` § Project invariants — a
  muted element left seven checks green at RMS 0.000.
- **Git traps that actually bit**, with what each one cost. `git commit --
  <paths>` skipping untracked files. `git checkout <paths>` restoring nothing if
  any path is untracked. `git stash` being shared across worktrees. Reverting a
  file for one line of churn and discarding real work with it.
- **Determinism.** Seeded PRNGs, why a single extra draw reseeds everything
  downstream, why a feature needing randomness owns its own generator.
- **Working with agents.** Why a status of `done` does not mean finished. Why a
  count from an earlier report is a snapshot and sizing work on it is a mistake.
  Why a reused session carries stale assumptions. Why briefs beat effort.
- **Asset pipeline lessons** that are about assets rather than about 3D:
  filename-as-join-key, an entry claiming a file that is not on disk, cache
  busting by content hash.

`gotchas-3d.md` — everything that presupposes a 3D renderer. Label the file
plainly at the top: *skip this entirely if the project is 2D.* Colour and tone
mapping (ACES lifting everything; picking texture tones far darker than looks
right; sRGB double-conversion), physical light units, why an EffectComposer was
rejected twice, golden-image tolerances and their noise floors, GPU versus
software rasterisation and what it did to run times, forward-vector conventions
and how a sign error rendered a scene backwards.

**Colour handling is a judgement call.** The sRGB/linear double-conversion trap
is genuinely universal — it bites any canvas work in any dimension. The ACES
tone-mapping material is not. Split them; do not file the whole subject under
3D because it arrived through a 3D project.

## Where the material is

In this repo, in rough order of value:

| Source | Lines | What is in it |
|---|---|---|
| `docs/VALIDATION.md` | 5221 | The street's gates, and **rejected experiments with their numbers** |
| `docs/MCGROTS-VALIDATION.md` | 3856 | McGrot's gates, and what each deliberately does not prove |
| `docs/ROADMAP.md` | 4437 | What landed, what it cost |
| `docs/MCGROTS-ROADMAP.md` | 2724 | The active brief; § 10 is the fault register |
| `docs/defect-register-d4.md` | 2067 | A defect register |
| `CLAUDE.md` / `AGENTS.md` | 546 / ~200 | The rules, already distilled |
| `docs/STATUS.md` | 152 | "What keeps biting" — eight items, already prioritised |
| `.herdr/*.md` | 3317 | 25 worker and phase-gate reports. **Gitignored — on disk only.** |

**Start with `docs/STATUS.md` § "What keeps biting".** It is eight items someone
already judged to be the recurring ones, and it is short. Use it as a spine and
go find the detail behind each.

The `.herdr/` reports are worth real attention: `gate.md` through `gate5.md` are
five independent audits, and independent auditors wrote down things the
implementing sessions had not.

## What good looks like

- **Every entry says what it cost.** "Do not do X" is forgettable. "X passed
  38/38 checks with nothing drawn at all" is not. Concrete beats abstract; the
  incident is the memorable part.
- **Every entry says whether it was measured or reasoned.** `docs/VALIDATION.md`
  records a case where four confident no-go arguments were tested and three
  turned out wrong. That distinction is one of the most valuable things here.
- **Rejected experiments are as valuable as the accepted ones**, because most
  of them sounded obviously right. Carry their numbers.
- Organised so a future agent can find one thing fast. Headings that name the
  problem, not the topic. A short index at the top of each file.
- Ruthless about relevance. 24,000 lines in; a few hundred lines out. If an
  entry only makes sense inside McGrot's specific architecture, leave it behind
  — that is what the parked repo is for.

## Do not

- Do not copy long passages across. Distil. A second copy of a document drifts
  from the original and then someone acts on the wrong one.
- Do not invent a gotcha you cannot point to a source for.
- Do not write a project history. This is a reference, not a narrative.

## Verify before you finish

- Every incident you cite is one you actually found in a source — name the file
  in your `.herdr` report, so it can be checked.
- Read `gotchas-3d.md` back and ask of each entry: would this mean anything to
  someone drawing sprites on a canvas? If yes, it is in the wrong file.
- Read `gotchas-universal.md` back and ask: does any entry secretly assume a
  renderer? If yes, move it.

Commit to your branch by explicit pathspec when done, then ping control.
