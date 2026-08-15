# G5e — the voice audition rig

**Read `AGENTS.md` first, and `docs/MCGROTS-VOICE.md` in full — that document
is the design this rig exists to test.** Your context is fresh, so nothing here
assumes earlier sessions.

Build the tool that turns a written voice description into audio Dan can listen
to. **You are not choosing the voice.** The pick is his ear, and no check in
this repo substitutes for it.

---

## The unit

`scripts/mcgrots-voice-audition.mjs`. One command renders the same set of
McGrot lines through each candidate engine and writes them where Dan can play
through them in order.

The description and the five audition lines are in `docs/MCGROTS-VOICE.md`
(§ "The settled description", § "The audition, when it is built"). Read them
from that file rather than copying them into the script — the description is
expected to change across two or three passes, and a second copy will drift.
A `--description` override for quick iteration is welcome; the file is the
default.

---

## The three engines, and why they are not equal

All three are on FAL, reachable with `FAL_KEY` from `.env.local`. **That key is
gitignored, must never be committed, and must never be printed** — not in logs,
not in an error message.

| Endpoint | Input | Output |
|---|---|---|
| `fal-ai/minimax/voice-design` | `prompt`, `preview_text` | audio **plus `custom_voice_id`** |
| `fal-ai/qwen-3-tts/voice-design/1.7b` | `prompt`, `text` | audio only |
| `fal-ai/maya` | `prompt`, `text` | audio only |

**MiniMax is the only one that can ship**, because only it returns a reusable
`custom_voice_id`; the other two rebuild the voice from the description on
every call and McGrot would drift across his 84 lines. The rig still renders
all three — they are a read on whether the *description* is working — but
**capture and record MiniMax's `custom_voice_id` wherever it appears.** That id
is the actual deliverable of a successful audition and losing it means paying
to regenerate.

FAL is a queue API: POST returns `status_url` and `response_url`, poll until
done, then fetch the result, then download the audio from the URL in it.

---

## The trap this rig must handle, and it is a real one

**FAL's queue reports `COMPLETED` for a path that does not exist.** The 404
lands in the *response body*, not the status. A rig that checks the status and
assumes success will happily report a clean audition having rendered nothing —
this exact mistake was made while researching the endpoints and was only caught
by fetching the payload.

So: **validate the payload, never the status.** A result without a usable audio
URL is a failure, is reported as one per engine, and does not abort the other
engines' work.

---

## Money

This spends Dan's money on every run, which makes it different from everything
else in this repo.

- **Print an estimate before doing anything**, and support `--dry-run` that
  prints the full plan — every engine × line pair, the character counts — and
  makes no network call. MiniMax's own docs price the preview at $30 per 1M
  characters; find the others' rates if they are published and say plainly if
  they are not.
- **A ceiling that cannot be crossed by accident.** Default to the five
  audition lines and the three engines and nothing more; anything larger is an
  explicit flag.
- **Resumable, like `generate-tts.mjs`.** A rerun must not re-pay for audio
  already on disk. Skip by output path existing, and say what was skipped.

---

## Output

A folder Dan plays straight through, ordered so the same line across engines is
adjacent — comparing engines on one line matters more than hearing one engine's
whole set. Name files so the ordering is obvious from `ls`.

**Audio is never committed.** Add the output path to `.gitignore` in the same
commit. Write a small text or JSON manifest alongside — engine, line, the
description used, any `custom_voice_id`, and the spend estimate — and **that**
may be committed, because it is the record of what was auditioned.

---

## The gate

**There is no numeric gate on voice quality and you must not invent one.**
`docs/MCGROTS-VOICE.md` says so and gives six criteria, all judged by ear.
Inventing a "voice quality score" is exactly the decoration this project keeps
deleting.

**This rig does not join `npm run smoke:mcgrots`.** The suite is offline,
browserless in the dialogue region, and free; a network-and-money step does not
belong in it. Do not add a region.

What *is* worth gating is the trap above, and it can be tested offline:

- **Point the rig at a model path that does not exist and require it to report
  failure.** With the payload check, it must fail; without it, it reports
  success having produced nothing. That is a genuine control and a genuine
  fault injection — do both, and record the two outputs.
- Whatever form this takes, it must run without spending money. A stubbed or
  recorded response is fine and is the point.

Run it for real once, on the smallest thing that proves the path end to end —
one engine, one short line — and **listen to nothing, because you cannot.**
Report the file sizes, durations and the manifest. Dan does the listening.

---

## Scope

**Yours:** `scripts/mcgrots-voice-audition.mjs` (new), `.gitignore`,
`package.json` if the command wants a script entry, `docs/MCGROTS-VOICE.md`
(the audition section, to record what the rig actually does),
`docs/MCGROTS-VALIDATION.md`, `docs/MCGROTS-ROADMAP.md`.

**Not yours:** anything under `src/` — nothing is wired into the game in this
unit. `scripts/generate-tts.mjs` and the street's Gemini pipeline, which this
does not touch or replace. `scripts/daily-tts.sh`,
`scripts/catalog-batches/*.json`, `scripts/tts-prompts/` — modified or
untracked in the tree and not yours; read them, never write them. The voice
*pick* is Dan's and is not part of this unit.

Explicit pathspec on every commit.

## Landing

One commit. The message carries what the rig cost on its one real run, what the
fault injection did, and the `custom_voice_id` if one was produced.

Then say plainly what Dan needs to do next: the command to run, roughly what it
will cost, and what he is listening for — the six criteria in
`docs/MCGROTS-VOICE.md`, not a general "does it sound good".
