# G7g — McGrot's complaint lines, voiced

Renders `generate-mcgrot-tts.mjs --lines` against the twelve solo lines in
`generated/mcgrots-dialogue.json`'s `MCGROT` entry (`mcgrot-01`…`mcgrot-12`).
The six `mcgrot-exch-taxman-*` / `mcgrot-exch-inspector-*` lines are **not
rendered** — neither the Taxman nor the Government Inspector is built
anywhere in `src/mcgrots/` (verified by grep), so McGrot's half of a
two-hander has no audible partner. Before this unit, zero of the twelve solo
lines had ever been heard (`docs/MCGROTS-DIALOGUE.md` § "Verification
record").

Voice: `Algenib`, same constant as G7e's eight comic readings. Prompts follow
G7e's shape (`Audio Profile:` verbatim from `docs/MCGROTS-VOICE.md` §
"The settled description", then a `Scene:` and `Director's Notes:` authored
per line, serving the `delivery` field already on each line rather than
replacing it). Line text carries curly apostrophes (`kitchen's`, `That's`,
`o' the Walk`) from the seeded source (seed `1511506142`) — carried through
byte-for-byte, verified by a script diff against the JSON, not by eye.

## Where it lives

- Prompts: `scripts/tts-prompts/mcgrot/lines/<id>.txt`
- Audio: `assets/audio/mcgrot/lines/<id>.mp3`

Both inside the tree `assertUnderMcgrotDir()` already guards
(`OUTPUT_DIR = assets/audio/mcgrot`). The guard's own logic is unchanged; the
script gained a `--lines` mode that points `PROMPT_DIR`/`CLIP_DIR` at the
`lines/` subdirectory, still under the guarded prefix. Regenerate with:

```
set -a; source .env.local; set +a
node scripts/generate-mcgrot-tts.mjs --lines
```

## Measured, not estimated

Every clip, `ffprobe` duration and `ffmpeg -af volumedetect` mean volume.
Control: a 2s silent file generated locally
(`ffmpeg -f lavfi -i anullsrc=r=48000:cl=mono`), which reads **-91.0 dB** —
G7e's measured floor, reproduced here as the same control rather than reused
from that unit's run.

| id | duration (s) | mean volume (dB) | delivery |
|---|---|---|---|
| mcgrot-01 | 4.1 | -18.5 | flaring, then calmer |
| mcgrot-02 | 2.1 | -18.5 | offended, flat |
| mcgrot-03 | 1.1 | -14.5 | flat, immediate |
| mcgrot-04 | 4.1 | -18.2 | warning, then softening |
| mcgrot-05 | 6.3 | -15.0 | with weary pride |
| mcgrot-06 | 3.9 | -17.3 | pointing with the spatula |
| mcgrot-07 | 4.8 | -17.3 | confidential, glancing down |
| mcgrot-08 | 5.2 | -17.4 | reading the bin, then muttering |
| mcgrot-09 | 4.1 | -19.8 | flat, final |
| mcgrot-10 | 3.9 | -17.3 | unimpressed, stirring |
| mcgrot-11 | 4.3 | -20.5 | considering the pot |
| mcgrot-12 | 4.2 | -16.4 | proud, already walking |

All twelve sit 66–77 dB above the silent floor. Silent control: -91.0 dB
mean, -91.0 dB max — no clip is close to it.

All twelve rendered clean on the first pass through the generation loop
except `mcgrot-03` ("Naw."), which failed attempt 1/4 with "no audio in
response (got text instead)" — the model returned text instead of audio for
the shortest line in the set — and succeeded on attempt 2/4. The script's
existing retry loop (`generate-tts.mjs`'s pattern, four attempts, backoff)
handled it with no operator intervention; noting it because it is the only
non-immediate success in the run.

## The nine placed lines: measured durations replace the estimate

`docs/g7-visit-shape.md` § 2 placed nine of the twelve on the visit clock at
an estimated 2.24 words/s, explicitly labelled estimates pending real audio.
Measured Algenib durations for those same nine:

| id | shape doc estimate (s) | measured (s) | delta |
|---|---|---|---|
| mcgrot-10 | 5.4 | 3.9 | -1.5 |
| mcgrot-07 | 4.9 | 4.8 | -0.1 |
| mcgrot-01 | 5.4 | 4.1 | -1.3 |
| mcgrot-04 | 3.6 | 4.1 | +0.5 |
| mcgrot-08 | 4.5 | 5.2 | +0.7 |
| mcgrot-11 | 5.4 | 4.3 | -1.1 |
| mcgrot-09 | 3.6 | 4.1 | +0.5 |
| mcgrot-06 | 5.4 | 3.9 | -1.5 |
| mcgrot-12 | 7.6 | 4.2 | -3.4 |
| **total** | **45.8** | **38.6** | **-7.2** |

The measured total is 7.2s shorter than estimated — about 16% faster overall,
but not uniform: `mcgrot-12` (the closing line, estimated as the longest at
7.6s) rendered at 4.2s, the single largest divergence and enough on its own
to explain most of the gap. Three lines (`mcgrot-04`, `mcgrot-08`,
`mcgrot-09`) ran longer than estimated. This is a finding, not a rounding
error — the visit's 10:01 clock in `docs/g7-visit-shape.md` § 1 should be
reconciled against these numbers rather than the words/s estimate the next
time that document is touched. Not done here: that document belongs to
`docs/g7-visit-shape.md`'s own owner, and this unit's scope is the audio, not
the schedule.

The three unplaced lines (`mcgrot-02` 2.1s, `mcgrot-03` 1.1s, `mcgrot-05`
6.3s) exist and are measured above; rendering them cost the brief's
"pennies" and removes a round-trip if a placed line reads badly in sequence
and one of these is swapped in.

## Listening: not done from this session, same gap as G7e

**This session has no way to listen to audio** — `Read` refuses mp3s as
binary, no local speech-to-text is available, and `afplay` plays through the
machine's speakers, which this session cannot hear. `docs/g7-mcgrot-
readings.md` (G7e) hit the identical wall and flagged it rather than
reporting an impression it didn't have; same call here. Reporting an
impression without having heard anything would be the false-measurement
failure mode the verification discipline exists to catch.

What this session can say from the numbers: all twelve clips render, none
are silent, `mcgrot-03` needed one retry and got it. Style correctness —
whether Algenib's delivery matches each line's `delivery` tag, whether the
accent holds on short lines the way it does on longer readings — is
unverified and needs a human ear against
`assets/audio/mcgrot/lines/`.

## Guard: fault-injected and confirmed

Committed the landing first (`git status --short` clean of anything but this
unit's own files), then edited a local, uncommitted copy of
`generate-mcgrot-tts.mjs` to point one line's output outside the guarded
tree:

```js
const out = join(root, 'assets/audio/rogue', `${id}.mp3`); // was: join(CLIP_DIR, `${id}.mp3`)
```

Run: `node scripts/generate-mcgrot-tts.mjs --lines --ids mcgrot-01 --force`

Result: threw immediately, before any write —

```
Error: refusing to write outside assets/audio/mcgrot/: /Users/.../assets/audio/rogue/mcgrot-01.mp3
```

Restored the file to its committed state (`git checkout -- scripts/generate-mcgrot-tts.mjs`)
and re-ran `node -c` to confirm the restore was clean.

## Verbatim check

Line text in all twelve prompts diffed programmatically against
`generated/mcgrots-dialogue.json`'s `text` and `delivery` fields —
`(delivery) text` in the prompt's final line matches the source exactly,
including curly apostrophes (U+2019). No line was corrected, re-generated, or
straightened.

## Not done here (belongs elsewhere)

- Wiring these clips into the scene (`src/mcgrots/`) — sequencer's (G7h).
- A smoke region for this audio — `scripts/smoke-mcgrots.mjs` belongs to
  G7h; verification here lives in this document per the brief.
- Reconciling `docs/g7-visit-shape.md`'s clock against the measured
  durations above.
