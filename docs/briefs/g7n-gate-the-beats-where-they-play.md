# G7n — gate each beat at the anchor it actually plays from

**Read `AGENTS.md` first, then `docs/g7-pomple-beats.md`, then the `beats`
region in `scripts/smoke-mcgrots.mjs`.** Your context is fresh.

---

## Why this unit exists

G7i landed three Pomplé beats and a gate for each. **The gate measures all
three at the `kerb` anchor. The visit fires only one of them there.**

From `src/mcgrots/visit.js`'s cue table:

| beat | fires at | gated at | camera-to-actor distance |
|---|---|---|---|
| `notice` | `kerb` | `kerb` | 5.61 m — correct |
| `approach` | `far` | `kerb` | 6.71 m, gated at 5.61 m |
| `settle` | `counter` | `kerb` | 4.92 m, gated at 5.61 m |

So two of three gates measure a picture the player never sees. This is the
project's own "gates test the product, not the calculator" rule failing in a way
that a green suite cannot show you.

It has already produced one visible symptom. `npm run smoke:mcgrots --
--only=beats` gives **6/7**, while the full suite gives 106/106 — the `settle`
diff check reads beat 17.5% against control 16.8% and needs +0.8pp, so it clears
its bar only when an earlier region has left the shared page in a helpful state.
**An order-dependent gate is worse than a failing one, because it hides.**

## What to do

**Gate each beat at the anchor the visit fires it from.** Take the anchor from
`visit.js`'s cue table rather than hardcoding a second copy of that mapping —
if the table changes, the gate should follow it.

Then **re-derive every margin from measurement at the new anchor.** Do not carry
the existing numbers across. Two predictions, both of which may be wrong and
both of which you should test rather than assume:

- `settle` is gated 0.69 m too far away. At `counter` the dog is larger in
  frame, so the same pose change should move more pixels. **It may clear its bar
  honestly there.**
- `approach` is gated 1.10 m too close. At `far` the dog is smaller, so its
  comfortable pass at `kerb` may be optimistic. **It may not survive the move.**

If `approach` fails at the anchor it actually plays from, that is a genuine
finding and the most valuable thing this unit can produce. Report it with the
number; do not tune the margin down to keep it green.

## If a beat cannot clear an honest bar

Say so with the measurement, and stop. **Do not lower a margin to fit a change
nobody can see, and do not reach for `group.scale` — that was `settle`'s first
implementation and it read as roadkill.**

The standing decision, so you are not blocked on it: **a beat that cannot be
measured as visible at the anchor it plays from should be cut**, along with its
checks and its `beat:` field in `visit.js`'s cue row. `notice` and `approach`
satisfy § 9 between them, and a third beat nobody notices subtracts from the two
that work. Cutting is a valid, complete outcome for this unit — report it as one.

## Also fix the isolation failure

`--only=beats` must pass on its own. Whatever page state the region is currently
borrowing from an earlier region, it has to establish for itself — **pin the
clock in every check.** An unpinned rota clock has now cost four separate units
here: the `mcgrot` region lost half a day to it, the `style` region carries a
known flake from it, and this is the third and fourth instances.

Prove it: `npm run smoke:mcgrots -- --only=beats` and the full suite must both
be green, and say both numbers.

## Fault injection

Re-inject each check you touch, watch it go red, restore, re-verify green.
**Commit before injecting** — `git checkout <paths>` restores nothing if any path
in the list is untracked.

**Then render each beat at its own anchor and open the captures.** Numeric
margins cannot tell you whether a beat reads. Say what you saw, per beat, and
name the anchor. "I could not see this at `far`" is the most useful sentence
available to you.

## Scope

**Yours:** `scripts/smoke-mcgrots.mjs` (the `beats` region only),
`src/mcgrots/pomple.js`, `src/mcgrots/visit.js` (only to remove a `beat:` field
if you cut a beat), and `docs/g7-pomple-beats.md`.

**`scripts/smoke-mcgrots.mjs` is shared — `ambience` is live in it.** Confine
yourself to the `beats` region and the `REGIONS` array; change nothing else in
the file. I resolve the merge.

**Not yours:** `main.js`, `audio.js`, `ambience.js`, `taxman.js`, `mcgrot.js` —
read them, change nothing. `docs/MCGROTS-VALIDATION.md` — write your
verification into your own doc; the orchestrator folds it in.
`docs/MCGROTS-ROADMAP.md`, `CANON.md`, `AGENTS.md`, `CLAUDE.md` — report what
should change.

Note the working tree carries unrelated modifications and untracked files from
the daily TTS job. They are not yours; commit by explicit pathspec.

## Landing

Commit by explicit pathspec with the actual numbers: per-beat margin at its own
anchor, the control, both suite numbers, and what went red under injection.
**Never push.**

Report into `.herdr/<your-name>.md` per `AGENTS.md`. **Log every step there as
you go** — G7i committed a follow-up without logging it, and work that exists
only as a commit is work the next session misses. Ping on QUESTION or DONE only.
