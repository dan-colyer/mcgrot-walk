# G7d — open the comics nobody has opened

**Read `AGENTS.md` first, then `docs/comic-features-set-a.md` — its first thirty
rows, to see the record shape you are matching.** Your context is fresh.

---

## Why this unit exists

G6b.1 audited 78 comics by opening every image and writing down what is in it.
That extraction is now the evidence base for both leads: it is what corrected
`docs/CANON.md` on the red beret (134 of 141 appearances, never once mentioned
in the prose canon) and on Pomplé's colouring.

G7a then found the gap. Of the 115 clean reading candidates, **53 fall outside
that 78-comic audit and have never had an image opened by anyone.** They were
filtered on catalogue fields and transcription text alone.

That gap has already bitten once, inside G7a itself: comic `1f6380d3` survived
a keyword filter and a cross-reference against the audit table, and was only
caught when the worker opened the actual image and found a photograph of a
boxed board game. **Cross-referencing a table is not the same as looking at the
picture.** This unit does the looking.

## What to produce

`docs/comic-features-set-c.md`, in the same shape as
`docs/comic-features-set-a.md`. Nobody else touches that file.

1. **Derive the list of 53 yourself** and state the command that produced it,
   rather than trusting this brief's number. It is the 115 clean candidates in
   `docs/g7-reading-shortlist.md` minus the IDs already covered by
   `comic-features-set-a.md` and `comic-features-set-b.md`. If your count is
   not 53, report the real number and carry on with it — a corrected count is
   a result, not a problem.
2. **One row per comic**, matching set-a's columns: id, McGrot present, Pomplé
   present, and a description dense enough to be evidence later. Record costume,
   palette, art style, props, setting and anything off-model.
3. **Flag every asset that is not a genuine multi-panel strip** — screenshots,
   meme composites, merchandise photos, text-only posters, mismatched images.
   These are the ones the field-based filters cannot see, and finding them is
   half the value of the unit.
4. **A synthesis at the end** with counts: what is stable across these 53, what
   varies, what appears once. Where your counts bear on a claim already in
   `docs/CANON.md`'s measured blocks, say whether they confirm it or not.
   **Do not edit `CANON.md`** — report, and the orchestrator folds it in.

## How to work, and why the batching matters

**Work in batches of eight images.** G6b.1 established this and it is not
arbitrary: opening images fills a context window fast, and a worker that runs
out mid-audit produces a half-list that reads like a whole one. Write each
batch's rows to the file before starting the next batch, so an interruption
costs one batch rather than everything.

**Where a colour claim matters, measure it** rather than naming it by eye:

```bash
node scripts/comic-palette.mjs --only=assets/comics/<id>.jpg
```

**The verbatim rule applies to everything you quote.** The comics' text is
AI-garbled and is never corrected, anywhere, including in your own notes. That
garbling is the point of the project.

## What this is not

Not a ranking, not a shortlist and not a quality judgement. G7a already made
the shortlist and Dan makes the pick. If a comic here is obviously better than
something on the shortlist, note it in one sentence in your synthesis and leave
the shortlist alone.

Not a canon edit. You produce evidence; `CANON.md` is changed by the
orchestrator against that evidence.

## Scope

**Yours:** `docs/comic-features-set-c.md` only.

**Not yours — two other workers are live right now, so this matters:** `src/`
of any kind. `assets/catalog.json`. `docs/g7-reading-shortlist.md`,
`docs/comic-features-set-a.md` and `-set-b.md` — read them, change nothing.
`docs/CANON.md`, `docs/MCGROTS-VALIDATION.md`, `docs/MCGROTS-ROADMAP.md`,
`AGENTS.md`, `CLAUDE.md` — report what you think should change.

No gate: there is no product change to gate. The evidence standard is that
every row traces to an image you actually opened, and every count in the
synthesis is reproducible from your own table.

## Landing

Commit your file when done, by explicit pathspec — and commit after every few
batches rather than once at the end, for the reason in the batching note above.
**Never push.**

Report into `.herdr/<your-name>.md` per `AGENTS.md`. Ping on QUESTION or DONE
only, and never ping and then idle.
