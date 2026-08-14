# G5b — the dialogue's register

G5a's 48 lines are competent and share one voice. This unit fixes the form.

**The lines are not the problem in the way G5a's own write-up says.**
`MCGROTS-DIALOGUE.md` names four weak individual lines. Measured across all
48, the fault is systemic and none of those four are the cause.

---

## First: what the generator actually is

`scripts/generate-mcgrots-dialogue.mjs` contains **72 hand-authored line
cards** — 12 per principal — and a seeded shuffler that selects from them. It
makes **no model call**: there is no `fetch`, no API, no corpus-derived
synthesis. Codex wrote the lines itself and built a deterministic selector
around them.

That is not wrong and it is not hidden — the file's own comment says "these
are original line cards". But roadmap § G5 says *"Generate dialogue for McGrot
and the five principals from the corpus in § 3"*, which reads as model
generation, and the record should say which thing exists.

**This is a fork and it is Dan's call, not this unit's:**

- **Authored cards.** Predictable, free, no key, and quality is a writing
  problem. Scaling to hundreds of lines is hand labour.
- **Model-generated.** Scales, and the plagiarism gate becomes load-bearing
  rather than a formality, because a model given comic text as style context
  is exactly what the gate was written to catch.

**Default if Dan has not answered when you start: stay with authored cards.**
It is the cheaper experiment, the form constraints below apply either way, and
proving the register is fixable by hand is useful evidence before paying for
generation. Say in your report which you did.

---

## The finding, measured

48 lines, checked against `docs/LEITH.md`'s documented dialect kit:

| Measurement | Result |
|---|---|
| Dialect kit words used | **1 of 15** — "pal", twice |
| "the fit o' the Walk" | **0 uses**, though LEITH.md says *use constantly* |
| Mean line length | 12.1 words, range 8–15 |
| Lines under 7 words | **0** |

Reproduce it before you change anything — the numbers are the baseline you
are moving, and a fix you cannot measure is a preference.

**The systemic tic:** almost every line is one balanced sentence built as a
concrete noun followed by an abstract lift. The sauce needs mercy; the ladle
earns its keep; a kindness with its coat buttoned; three unregistered layers
of ambition. Individually fine. Six characters deep, it is one writer's habit
wearing six hats.

McGrot is canonically *grizzled, confrontational*. Polished aphorisms are not
that. Confrontational people interrupt, repeat themselves, and say four-word
sentences.

---

## What to change, and what not to

**Constrain form. Do not re-plan the content.** The characterisations in
`CANON.md` are right and G5a read them correctly; what failed is how the lines
are built.

Three constraints:

1. **Dialect.** The kit in `LEITH.md` is documented and unused. Set a quota
   you can measure — a stated proportion of lines carrying at least one kit
   word, and "the fit o' the Walk" actually used. Do not sprinkle it evenly:
   Mike English is an outsider and should use *less* than McGrot, which is
   itself characterisation.
2. **Length distribution.** Fragments, interruptions and four-word replies.
   Set a target that includes lines under seven words, of which there are
   currently none.
3. **Break the default shape.** No more than a stated fraction of lines may be
   the noun-to-abstract turn. Some are good and should survive — the point is
   that it stops being the house style.

**Three things that work and must survive:**

- **Pomplé written as handwritten signs, not speech.** A real formal decision
  that follows canon and gives him a texture the talkers cannot have.
- **The Inspector's "the risk has declined to participate"** — the one line in
  the set with an actual joke rather than a wry observation.
- **The plagiarism gate**, unchanged.

---

## The gate

**Gate the form constraints; do not gate quality.** All three above are
mechanical — word-list membership, length distribution, sentence shape — so
each gets a check with a named control and a fault injection. Quality is Dan's
read and no check substitutes for it.

Add these to the existing `dialogue` region in `scripts/smoke-mcgrots.mjs`.
It runs without a browser in 0.19s; keep it that way.

**One interaction you must watch rather than assume.** More dialect means more
vocabulary shared with the comics, so seven-word collisions become *more*
likely. **If the plagiarism gate goes red, that is the gate working.** Rewrite
the line. Do not widen the window, do not add an exception list, and do not
touch the threshold — the roadmap fixes it at "more than six words".

---

## Open, and not yours to settle

**The Leith Badger.** G5a used the brief's "McGrot and the five principals",
giving six entries. `CANON.md` also has a Leith Badger and the wider roadmap
calls the Badger one of five regulars. Codex flagged the discrepancy rather
than guess, correctly. **Dan has not answered.** Do not add the Badger on your
own initiative; carry the six that exist and note it as still open.

## Not yours

TTS rendering and voice selection (Dan's call), two-actor exchanges for the
Taxman and Inspector (a later unit — writing them before the register is
fixed doubles the work), wiring dialogue into the game, G6.

## Scope

`scripts/generate-mcgrots-dialogue.mjs`, `generated/mcgrots-dialogue.json`,
the `dialogue` region in `scripts/smoke-mcgrots.mjs`, and
`docs/MCGROTS-DIALOGUE.md`. The tree is free — no other worker is active — so
the usual landing applies: `MCGROTS-ROADMAP.md` and `MCGROTS-VALIDATION.md`
are yours this time.

`scripts/daily-tts.sh`, `scripts/catalog-batches/*.json` and
`scripts/tts-prompts/` are not yours. Explicit pathspec regardless.

## Landing

One commit, or two if the constraints and the rewritten lines separate
cleanly. The commit message carries the before-and-after numbers for all four
measurements in the table above, plus what went red under injection.

**Report the new lines in `MCGROTS-DIALOGUE.md` as a readable sample**, the
way G5a did — that document is what Dan reads, and it is the deliverable that
decides whether G5 proceeds to voices.

If the register still does not land after an honest attempt, **say so with the
numbers and the lines that show it.** A measured failure here is a real
finding: it would mean the register needs a model rather than an author, which
is exactly the fork above and worth knowing before anyone pays for it.
