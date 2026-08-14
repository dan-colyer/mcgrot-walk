# G5c — two-actor exchanges: the Taxman and the Inspector opposite McGrot

**Your context is fresh, so this brief is self-contained.** Read `AGENTS.md`
first regardless — it is short and it binds.

G5a wrote 48 solo lines; G5b rewrote them as 72 and fixed the register. Both
units wrote every character **alone**. `docs/CANON.md` puts the Taxman and the
Government Inspector opposite McGrot, and G5a's own write-up flagged both as
untested in that shape:

> The sample does not yet test the two-actor rhythm with McGrot, which is where
> the canon says this character belongs.

This unit writes those exchanges. It is the last text unit before voices.

---

## What already exists, with its numbers

`generated/mcgrots-dialogue.json`, schema `mcgrots-dialogue/v1`, 72 lines across
six principals (12 each): McGrot, Pomplé, Keth with One Eye, Mike English, the
Taxman, the Government Inspector. The Leith Badger is in the cast and
deliberately has no lines — `docs/MCGROTS-DIALOGUE.md` records why. **Do not
revisit that.**

Measured on the current tree, and the baseline you are moving:

| Measurement | Now |
|---|---|
| Lines | 72 |
| Lines carrying a dialect kit word | 24 (33%), floor is 20% |
| "the fit o' the Walk" | 3 uses, floor is 1 |
| Lines under seven words | 20 (28%), floor is 15% |
| Lines fitting the balanced-turn shape | 13 (18%), ceiling is 40% |
| McGrot vs Mike English dialect | 75% vs 17%, McGrot must stay higher |
| Suite | 69/69 |
| `--only=dialogue` | 0.19s, no browser |

Reproduce the four form numbers before you change anything. A fix you cannot
measure against them is a preference.

---

## The trap, and it is the whole reason this brief is long

**Every gate that protects this corpus reaches the text by exactly one path:**
`entries[].lines[].text`. The plagiarism checker
(`scripts/check-mcgrots-dialogue.mjs:87`) walks it, and so does
`allDialogueLines()` in `scripts/smoke-mcgrots.mjs:117`, which feeds all three
form gates.

An exchange stored anywhere else — a top-level `exchanges` array, turns nested
under a scene object, a `turns` key beside `lines` — is **invisible to all four
checks, silently**. The suite would print `Checked: 72 candidate lines` and pass
while every new word went unexamined. That is this project's signature failure:
a green gate that proves nothing. `statue.visible = false` passed 38/38;
`mediaEl.volume = 0` passed the audio region 7/7.

**So: every spoken or shown turn lives in its owner's `entry.lines` array and
keeps a `text` field.** How a turn records which exchange it belongs to and
where it sits in the order is your design — an `exchange` id plus an ordinal on
the line object is the obvious shape and costs the gates nothing. The checker
asserts `schema === 'mcgrots-dialogue/v1'` and throws otherwise, so an additive
field is free and a schema bump is not.

**Prove the reachability rather than reasoning about it.** Put a known comic
line into an exchange turn — `scripts/check-mcgrots-dialogue.mjs --line` exists
for exactly this — and confirm the plagiarism gate goes red naming that turn.
If it stays green, the turns are not reachable and nothing else you measure
about them means anything.

---

## The writing

Two exchanges, both with McGrot: one with the Taxman, one with the Government
Inspector. **An exchange is at least four turns.** A line and a reply is a line
and a reply.

What makes an exchange different from two solo lines, and what to actually
attempt:

- **The other party does not answer the question.** Both of these characters
  arrive with an agenda and a register that cannot absorb McGrot's. That is the
  joke, and it only exists across turns.
- **Interruption.** G5b's short lines exist now — "Naw.", "Denied.",
  "Stamped." — and cutting a sentence off is a thing solo lines cannot do.
- **Something survives the exchange.** A word one character hands to the other
  and gets back wrong is worth more than four good separate lines.

Keep the existing 72 solo lines. **You may revise a solo line if an exchange
makes it redundant**, but say which and why in the doc; do not re-open the
register work generally.

Pomplé in an exchange is permitted and not required — his turns would be signs,
which is a real formal problem worth having only if it earns its place. If you
try it and it does not work, that is a finding, not a failure.

**Two content rules that bind every word.** `docs/CANON.md`'s established /
suggested split — established facts are canon and not open to reinterpretation.
`docs/LEITH.md`'s sensitivity section: sectarianism and Orange walks absent
entirely, addiction as mythology and never pathology, poverty never punched down
at, students and gentrifiers won over rather than humiliated. A line breaking one
does not ship.

**The comics are verbatim and are never quoted into new dialogue.** New writing
is new writing; that is what the plagiarism gate is for.

---

## The gate

**Form only. Never quality — that is Dan's read and no check substitutes for
it.** Add to the existing `dialogue` region in `scripts/smoke-mcgrots.mjs`; it
runs without a browser in 0.19s and must stay that way.

The load-bearing check is the reachability one above: **the four existing checks
must see the new turns.** Their denominators must grow from 72. If they do not,
you have the bug this brief spends a section on.

Beyond that, gate what is mechanically true of an exchange and nothing else — an
exchange reassembles into a complete ordered run with no gaps, and consecutive
turns are not the same speaker, are both real and both falsifiable. Measure the
rewritten corpus, then pick thresholds with headroom underneath, the way G5b's
were set. Do not pick a threshold in advance and write to it.

Every new check gets a **named control** that isolates it, and a **fault
injection** proving it can go red. **Commit before injecting** — `git checkout`
silently restores nothing if any path in the list is untracked, and a surviving
injection looks like a second bug next run.

**Two interactions to watch rather than assume.** Adding turns moves every
form-gate denominator: procedural back-and-forth is naturally dialect-free, so
the 33% overall dialect figure can fall toward its 20% floor even though nothing
regressed in the solo lines. And more McGrot text means more vocabulary shared
with the comics, so seven-word collisions get more likely. **If the plagiarism
gate goes red, that is the gate working.** Rewrite the line. Do not widen the
window, do not add an exception list, and do not touch the threshold — the
roadmap fixes it at "more than six words".

---

## Scope

**Yours:** `scripts/generate-mcgrots-dialogue.mjs`,
`generated/mcgrots-dialogue.json`, the `dialogue` region in
`scripts/smoke-mcgrots.mjs`, `docs/MCGROTS-DIALOGUE.md`,
`docs/MCGROTS-ROADMAP.md`, `docs/MCGROTS-VALIDATION.md`. No other worker is
active, so the roadmap and validation updates are yours this time.

`scripts/check-mcgrots-dialogue.mjs` is Codex's and has not been touched since
G5a. **You may edit it only if the reachability proof shows you must**, and if
you do, say so loudly and re-run its own G5a fault injection afterwards.

**Not yours:** `src/` in any form — no dialogue is wired into the game in this
unit. TTS rendering and voice selection are Dan's call. G6 (Pomplé's
behaviour), G8 (the real cast). `scripts/daily-tts.sh`,
`scripts/catalog-batches/*.json` and `scripts/tts-prompts/` are modified or
untracked in the tree and are not yours — read them, never write them. Explicit
pathspec on every commit regardless.

## Landing

One commit, or two if the schema work and the writing separate cleanly. The
message carries the before-and-after numbers for all four form measurements,
the new checks' controls, and what went red under injection.

**Report the exchanges in `docs/MCGROTS-DIALOGUE.md` as a readable sample**,
laid out as exchanges rather than as a list of lines — that document is what Dan
reads, and it is what decides whether G5 proceeds to voices.

**If the exchanges do not work, say so with the lines that show it.** A measured
negative — that these two characters are better alone, or that the form needs a
model rather than an author — is a real finding and worth more than four
competent turns nobody wants to hear performed.
