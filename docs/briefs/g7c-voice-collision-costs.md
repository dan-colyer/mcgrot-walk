# G7c — cost the three voice-collision routes, do not pick one

**Read `AGENTS.md` first, then `docs/MCGROTS-VOICE.md` § "Andrew's verdict" to
its end, and `docs/MCGROTS-ROADMAP.md` § 11.0.5.** Your context is fresh.

---

## Why this unit exists

Andrew picked **Algenib** for McGrot on 2026-08-16. The constraint in § 11.0.5
says a principal should not share a voice with the vendor crowd, and that
constraint **cannot be satisfied by picking differently** — measured against
the live catalogue, all 30 Gemini prebuilts are in use across 156 entries, six
of them on Algenib, which is also `generate-tts.mjs`'s fallback for any entry
with no explicit `voiceName`.

`docs/MCGROTS-VOICE.md` names three routes out and says plainly that **none has
been costed**:

1. Re-assign the six Algenib vendors onto other voices.
2. Accept the echo.
3. Take McGrot off the prebuilts entirely.

**Dan is deciding this himself, with the orchestrator, and has said so.** Your
job is to make that decision costed rather than to make it. Producing a
recommendation is out of scope; producing the numbers he would want before
recommending anything is the whole unit.

## What "costed" means here

For each of the three routes, answer in numbers wherever a number exists:

- **What has to be regenerated**, as a count of clips and their total duration.
- **What that costs** in API calls and in wall-clock time, using whatever the
  repo already records about generation rates. If nothing records it, say so
  rather than estimating from nothing.
- **What it puts at risk.** Re-rendering an existing clip replaces something
  Dan has already heard and accepted. Name what could regress.
- **Whether it is reversible**, and what the undo is.
- **What it does NOT fix.** Each route leaves something; say what.

Route 3 needs one extra thing: `docs/MCGROTS-VOICE.md` records that FAL/MiniMax
Voice Design was closed out on cost. **Do not reopen that decision** — record
what route 3 would now mean given FAL is out, which may be that it has no live
implementation at all. That is a legitimate answer.

## Things that are settled and must not be relitigated

- **Algenib is the pick.** Andrew's ear, Dan's relay. You are not auditioning.
- **FAL is out on cost.** Route 3 is costed as a hypothetical, not revived.
- **Never clone or imitate a specific real person's voice** (§ 11.0.5, not
  negotiable).
- **The echo is not a G7 blocker.** McGrot is at his own pitch; the street's
  crowd is a different game. It bites at G8/G9 if they share a scene. Say where
  each route's cost actually lands on that timeline.

## The one thing that IS urgent, and say so plainly if you find it

G7's six to eight readings currently exist only in **vendor** voices. Whatever
Dan picks has to be re-rendered in McGrot's voice before the kill criterion can
be run honestly. **Establish what that specific job costs** — take the proposed
eight in `docs/g7-reading-shortlist.md`, and report the clip count, total
source text length and expected render time to put those eight into Algenib.
That number is on G7's critical path in a way the three routes are not, and it
is the most useful thing you can produce.

Note `3c6b637b` ("McGrot — The Badger Consultancy") while you are in there: it
has audio and deliberately no `npc` block, and is the only existing clip of
McGrot reading as himself. Check which voice it was rendered in — if it is
already Algenib, it is a reference for what the eight should sound like.

## What to produce

`docs/g7-voice-collision-costs.md`. Nobody else touches that file.

Structure it as: the urgent number first (re-rendering the eight), then one
section per route, then a short "what nobody can measure" list. **Every number
names the command that produced it.** Where you are estimating rather than
measuring, label it an estimate in the same sentence — do not put estimates and
measurements in the same table without marking which is which.

## Scope

**Yours:** `docs/g7-voice-collision-costs.md`, and a throwaway script in your
scratchpad if you want one.

**Not yours — and two other workers are live right now, so this matters:**
`src/` of any kind. `scripts/generate-tts.mjs` and `scripts/merge-batches.mjs`
— read them, change nothing. `assets/catalog.json` — landing a batch is a
separate human milestone. Any audio generation: **do not render a single
clip**, this unit costs work, it does not do it. `docs/MCGROTS-VALIDATION.md`,
`docs/MCGROTS-ROADMAP.md`, `docs/MCGROTS-VOICE.md`, `CANON.md`, `AGENTS.md`,
`CLAUDE.md` — report what you think should change and the orchestrator edits
it.

**`.env.local` holds live API keys.** Never print it, never commit it, and
never paste a key into your report.

No gate: there is no product change to gate. The evidence standard is that
every number is reproducible from the command you state.

## Landing

Commit your file when done, by explicit pathspec. **Never push.**

Report into `.herdr/<your-name>.md` per `AGENTS.md`. Ping on QUESTION or DONE
only, and never ping and then idle.
