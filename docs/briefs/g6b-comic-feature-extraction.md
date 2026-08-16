# G6b.1 — What McGrot and Pomplé actually look like

**Read `AGENTS.md` first.** Your context is fresh; nothing here assumes an
earlier session.

**Your set is named in the prompt that started you** — `set-a` or `set-b`. It is
a list of comic IDs, one per line. Work only your set. The other half is another
worker's and reading it wastes the context you need.

---

## Why this unit exists

`docs/CANON.md` describes McGrot in one prose paragraph and marks the visual
half of it **"*Suggested:* exact colours and garments"** — i.e. someone wrote a
plausible description, and nobody has checked it against the drawings. Pomplé's
entry says the same about breed and colouring.

Two phases now depend on that being real rather than plausible:

- **G6b** puts a stand-in McGrot figure at the van. There isn't one — Pomplé
  currently turns to watch a coordinate where nobody stands.
- **G8a** builds both leads properly, because Dan's judgement on 2026-08-16 was
  that the current bodies do not look like the comics.

Dan's framing, and it is the whole point of the unit: *details for the main
characters are really important as these are central to everything.* A wrong
McGrot is wrong in every frame of the game.

## What you are producing

**A record, not an impression.** Every claim you make must name the comic IDs it
came from, so anyone can open the same image and disagree with you.

Write to `docs/comic-features-<your-set>.md`. Nobody else touches that file.

Two parts:

**Part 1 — the per-comic record.** One row per comic in your set, in ID order. A
table is right here. Suggested columns, adjust if the material wants different
ones: `id`, whether McGrot appears, whether Pomplé appears, and then the
observed features. Note what you actually see. "Apron: dark, waist-tied, no bib"
is a record. "Looks like a chef" is not.

Where a comic does not show a lead, say so and move on — that is data too, and
knowing he appears in 60 of 78 rather than all 78 matters.

**Part 2 — the synthesis, which is what the modelling phases will actually
read.** Sort every feature into three buckets and be explicit about which:

- **Stable** — present in most or all appearances. This is canon and a model
  that omits it is wrong. Give the count: "apron in 71 of 74 appearances".
- **Variant** — appears often but changes. Give the range and the split.
- **One-off** — seen once or twice. Interesting, not binding.

Then say plainly, in a short paragraph each: **the silhouette** (the shape you
would recognise at 20 m with no detail — this is what a 3D stand-in has to get
right and almost the only thing it can get right), and **the head** (the single
most-drawn feature set).

Do the same for Pomplé. He appears inside McGrot's comics rather than his own —
only two of 418 titles name him — so you will find him by looking, not by
filtering.

Finish with a short section: **where the drawings contradict `docs/CANON.md`.**
Quote the canon line, give the comic IDs that disagree, say what they show. Do
not edit `CANON.md` — that merge is the orchestrator's.

## Method

Comics are at `assets/comics/<id>.jpg`. Read them with the Read tool.

**Colour is measured, not eyeballed.** `node scripts/comic-palette.mjs
--only=<img> --swatch=<out.png>` exists for exactly this. Use it before writing
any hex value or naming any colour, and say which comics a stated palette came
from. A JPEG of a drawing on a screen is not a colour-managed source, so state
what the numbers are worth.

**The verbatim rule applies to anything you quote.** The comics' text is
AI-garbled and is never corrected, anywhere, including in your own output.

## Context discipline — this is the constraint that will break the unit

78 images will not fit in your context, and a worker that runs out halfway
produces nothing.

**Work in batches of about eight. After each batch, append that batch's rows to
your file and move on.** Do not hold earlier images in your head to compare
against — go back and read your own file instead. It is on disk precisely so
you can.

Do the synthesis (Part 2) **last, from your own written record**, not from
memory of the images. If your record is not good enough to synthesise from, that
is the finding: fix the record.

If you are running low on context before finishing, stop, write what you have,
and report exactly which IDs are done and which are not. A partial record with
honest boundaries is useful. A rushed skim of the remainder is not.

## Scope

**Yours:** `docs/comic-features-<your-set>.md` and nothing else.

**Not yours:** `docs/CANON.md`, `docs/MCGROTS-ROADMAP.md`, `AGENTS.md`,
`CLAUDE.md`, any code, any asset. This unit writes one document. It does not
touch the scene, and it does not build a model — that is the next unit, and it
starts from what you write.

No gate, because there is no product change to gate. The evidence standard is
the per-comic IDs: every claim traceable to an image someone else can open.

## Landing

Commit your one file when done, by explicit pathspec. **Never push.**

Report into `.herdr/<your-name>.md` per `AGENTS.md`. Ping the orchestrator on
QUESTION or DONE only, never on progress — and never ping and then idle.
