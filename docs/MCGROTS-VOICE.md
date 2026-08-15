# McGrot's voice — description and acceptance criteria

**This document is the design, not the implementation.** No voice has been
generated from it yet. The audition rig, the rendering and the wiring are a
later unit.

Dan settled every question below on 2026-08-15. The reasoning is recorded so a
later session does not re-derive it or quietly drift from it.

---

## What the APIs actually offer, measured

Checked by real calls against the keys already in `.env.local`, not from
documentation alone.

| Route | Works? | Designs a voice? | Voice persists? |
|---|---|---|---|
| Google Gemini TTS | yes, in use for 400+ street NPCs | no — 30 fixed voices, steered by written direction | n/a |
| Together AI | yes — real MP3s from Kokoro and Orpheus | no — preset voices only | n/a |
| FAL → ElevenLabs TTS | yes — verified 40KB MP3 at 44.1kHz | no — FAL exposes no ElevenLabs voice-design endpoint | n/a |
| FAL → **MiniMax Voice Design** | yes | **yes** | **yes — returns `custom_voice_id`** |
| FAL → Qwen 3 Voice Design | yes | yes | **no — audio only** |
| FAL → Maya1 | yes | yes | **no — audio only** |

**The persistence row is the one that decides it.** Only MiniMax returns a
reusable voice id. Qwen and Maya rebuild the voice from the description on
every call, so McGrot would drift between lines — unusable for a character
with twelve solo lines plus exchange turns. They stay in the audition as a
read on whether the *description* is working; they cannot be the shipped voice.

**No new signup is needed.** ElevenLabs' own Voice Design may well be better,
but it is not reachable from the keys we hold and cannot be verified from here.
Revisit only if MiniMax fails the criteria below.

Two things worth knowing for later units: FAL also hosts
`elevenlabs/text-to-dialogue`, built for multi-speaker exchanges — which is
exactly the shape G5c produced. And a probe against FAL's queue reports
`COMPLETED` even for a path that does not exist; the error is in the response
body, not the status. Read the payload.

**Hard constraint, not negotiable:** we describe a voice, we never clone or
imitate a specific real person. That holds whatever service we end up on.

---

## The settled description

Seven questions, all answered by Dan.

| Question | Settled |
|---|---|
| Age | Early fifties |
| Source of the wear | Both smoke/fryer **and** sea/cold/salt |
| Size and pace | Mid-range, quick, restless |
| Accent | Thick on dialect words, a shade clearer on ordinary sentences |
| Volume | Rarely shouts — real flares reserved for genuine anger |
| Sincerity | Drops in volume and slows; the rasp eases |
| Engine | Render all three, ship MiniMax |

**The one tension, and how it resolves.** Early fifties is young for this much
wear, so the description must earn it: the damage comes from heavy use, not
from age. Likewise "sea and weather" was offered as a slow, low texture and Dan
took it alongside a quick pace — those are separate dials. Roughness comes from
salt and smoke; speed is temperament. The description keeps them apart
deliberately.

### The prompt

> A Leith dockworker turned street-food vendor, early fifties, Scottish — hard
> Edinburgh dockside accent, thickest on local dialect words and a shade
> clearer on ordinary sentences. Mid-range pitch, not deep and not booming. The
> voice is rough from two things at once: years of cigarettes and standing over
> hot oil, and years of cold, salt and wind off the water. Dry rasp with grit
> under it. Young enough to still be physically capable — the damage is earned
> by hard use, not by age. He talks fast and restless, cuts in, lands hard on
> the ends of words and then stops dead. He rarely raises his voice; the
> aggression is in the clipped pace and the hard stops, not the volume. When he
> says something sincere he drops in volume and slows down, and the rasp eases.

### The preview line

Three registers in one sample — greeting, confrontation, sincerity:

> Awright pal. Sauce is extra, opinions are free. Stamped disnae mean answered,
> pal. Pomplé says the sauce needs mercy, and I believe the dog.

---

## Acceptance criteria

**Judged by listening. There is no numeric gate on a voice**, and inventing one
would be exactly the decoration this project keeps deleting. What a gate *can*
do is prove audio came out at all — the existing RMS check already covers that.

A candidate ships only if all six hold:

1. **It is one man.** The same voice across every audition line, not a family of
   near-relatives. This is what kills Qwen and Maya on the persistence finding
   above; it must also be checked on MiniMax rather than assumed.
2. **"Naw." works as a complete sentence.** The short lines are where G5b's
   register fix lives. If a one-word line sounds like a fragment of a longer
   one, the voice cannot carry the writing.
3. **The dialect sounds native, not performed.** "Ken", "shan", "doon the Walk"
   should land as ordinary speech, not as an actor visiting Scotland.
4. **The sincere line audibly changes.** Play the Pomplé line against the
   Taxman line. If they sound the same, the description's last sentence has not
   taken.
5. **The garbled comic text survives.** McGrot reads AI-mangled nonsense
   verbatim and it must be *hearable* as confident speech, not as the model
   stumbling. This is the criterion most likely to fail and the reason the
   accent question was asked at all.
6. **You would hear it twenty times.** A player meets him repeatedly. A voice
   that is delightful once and grating on the fifth pass fails, and this is the
   criterion only Dan can apply.

Criterion 6 outranks the rest. A merely good voice that wears well beats a
striking one that does not.

---

## The audition, when it is built

Built (G5e, 2026-08-15): `scripts/mcgrots-voice-audition.mjs`.

```bash
set -a; source .env.local; set +a
node scripts/mcgrots-voice-audition.mjs --dry-run     # plan + cost estimate, no network
node scripts/mcgrots-voice-audition.mjs --self-test   # offline fault-injection proof, no key needed
node scripts/mcgrots-voice-audition.mjs --yes         # the real thing: 3 engines x 5 lines
```

- Renders the same lines across MiniMax, Qwen and Maya from the one
  description above — read from this file at runtime, never copied into the
  script, so a future pass at the description needs no code change.
- The audition set stretches the voice deliberately: **"Naw."** (can it carry
  a one-word line), **"Mingin? Come back when your own kitchen's had a shift
  like mine."** (flare), **"Pomplé says the sauce needs mercy, and I believe
  the dog."** (sincerity), **McGrot's half of the Taxman exchange** (his three
  turns from `generated/mcgrots-dialogue.json`, joined with `...` for the
  interjections he's talked over), and **one verbatim garbled comic passage**
  (the quoted spans of his own comic's TTS prompt, `scripts/tts-prompts/3c6b637b.txt`
  — criterion 5).
- Output lands in `docs/voice-audition/` (gitignored — money-generated audio
  is never committed), named `NN-<line>--<engine>.mp3` so the same line across
  all three engines sits adjacent in `ls`. `manifest.json` alongside it — engine,
  line, description used, spend, and MiniMax's `custom_voice_id` — is committed,
  as the record of what was auditioned.
- Resumable: an mp3 already on disk is never re-rendered, so Ctrl-C or a
  partial failure never re-pays for what's already there.
- **Validates the payload, never the queue status** — FAL reports `COMPLETED`
  for a request whose body is a 404-shaped error, and a status-only check
  would call that success. `--self-test` proves the difference offline, no
  key or network needed: a naive check passes the bad body, the real
  `validatePayload()` fails it and passes a good one.
- **No numeric gate on the voice, and none was added.** `smoke:mcgrots` does
  not know this rig exists.

**First real render, 2026-08-15: MiniMax, the "Naw." line, one call.** 4
billed characters, ~$0.0001, 46s round trip, 13.8KB / 0.98s of audio.
`custom_voice_id`: `ttv-voice-2026081517153126-cFGhfIvB` — recorded in
`docs/voice-audition/manifest.json` (not committed audio, so not reproducible
by re-reading this doc; the manifest is the record). Not listened to — that's
Dan's.

The description above is a first draft, not a finished specification. It is
expected to need two or three passes against real audio — that is what the
audition is for.
