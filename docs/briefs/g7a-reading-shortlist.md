# G7a — A shortlist of readings Dan can choose from

**Read `AGENTS.md` first, then `docs/MCGROTS-ROADMAP.md` § G7 and § 9.** Your
context is fresh; nothing here assumes an earlier session.

---

## Why this unit exists

G7 is the kill criterion. Dan sits through one ten-minute visit and decides
whether the project continues. The roadmap says the visit must contain **six to
eight readings on the wall clock**, and § 11.1 leaves which six to eight open,
because "the readings vary a lot in quality and the selection wants Dan's eye
rather than a script's".

His eye, yes — but not across 418 comics. **Your job is to reduce 418 to a
defensible shortlist of about 20, with the evidence attached, so the final pick
is ten minutes of listening rather than a day of it.**

You are not choosing the six to eight. You are making that choice cheap.

## What the data actually looks like

Measured by the orchestrator on 2026-08-16, so you can start from here rather
than re-derive it:

| | count |
|---|---|
| comics in `assets/catalog.json` | 418 |
| carrying an `npc` block (transcribed) | 156 |
| with an `audio` path claimed | 136 |
| **with that mp3 actually on disk** | **136** |

Check these before trusting them. **A catalog entry claiming an mp3 that is not
on disk is a known failure mode in this project** — it 404s on every overlay
open — so verify existence on disk rather than reading the field.

Note two duplicate pairs G6b.1 found, `50f0b324`/`51834c74` and
`3706c73f`/`5acf1728`. Do not put both of a pair on the shortlist.

## What makes a reading good, and what you can and cannot measure

**You can measure:** clip duration, whether the mp3 exists and plays, text
length, whether the transcription looks truncated or broken, whether the comic
image is a real strip rather than a photo/meme/screenshot (G6b.1 found several
of those — see `docs/comic-features-set-a.md`).

**You cannot measure whether it is funny.** Do not try, and do not rank on a
proxy that pretends to. Where you have a judgement, say it is a judgement.

**Duration matters more than it looks.** Six to eight readings have to fit a
ten-minute visit alongside walking, McGrot's complaints and silence. Measure the
actual clip lengths and say what a plausible set adds up to. If the arithmetic
does not work, that is the most useful thing you can report.

**One thing to check that nobody has:** these 136 mp3s are in the **vendor**
voices, not McGrot's. G7's readings are McGrot's own, and Andrew and Dan settled
on **Algenib** for him on 2026-08-16. So the existing audio is good for judging
the *writing* and the *length*, and is not what will ship. Say so plainly in
your output rather than letting a later session assume the clips are final.

## What to produce

`docs/g7-reading-shortlist.md`. Nobody else touches that file.

1. **The funnel, with numbers.** 418 down to whatever passes each filter, one
   line per filter, so the reduction is auditable rather than asserted.
2. **The shortlist**, about 20 entries. One row each: comic ID, title, clip
   duration, and one sentence on why it is a candidate. Sort by whatever you can
   defend; say what you sorted by.
3. **A proposed set of eight** with the durations totalled. Not a decision —
   a worked example showing the arithmetic fits, which Dan can accept, reject or
   reshuffle.
4. **What you excluded and why**, at the category level. Broken assets,
   duplicates, truncated transcriptions, anything too long. Counts, not lists,
   except where a specific ID is worth naming.

**The verbatim rule applies to everything you quote.** The comics' text is
AI-garbled and is never corrected, anywhere, including in your own output.

## Scope

**Yours:** `docs/g7-reading-shortlist.md`, and a throwaway script if you want
one — put it in your scratchpad, not the repo, unless it is genuinely reusable.

**Not yours:** `assets/catalog.json` — landing a batch is a separate human
milestone. Any audio regeneration. `src/` of any kind. `CANON.md`,
`docs/MCGROTS-ROADMAP.md`, `AGENTS.md`, `CLAUDE.md` — report what you think
should change. Another worker is in `src/mcgrots/` right now; stay out of it.

No gate, because there is no product change to gate. The evidence standard is
that every number in your funnel is reproducible from the command you state.

## Landing

Commit your file when done, by explicit pathspec. **Never push.**

Report into `.herdr/<your-name>.md` per `AGENTS.md`. Ping on QUESTION or DONE
only, and never ping and then idle.
