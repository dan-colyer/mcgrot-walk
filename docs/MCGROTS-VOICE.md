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

Not built yet. When it is:

- Render the same lines across MiniMax, Qwen and Maya from the one description.
- The audition set stretches the voice deliberately: **"Naw."** (can it carry a
  one-word line), **"Mingin? Come back when your own kitchen's had a shift like
  mine."** (flare), **"Pomplé says the sauce needs mercy, and I believe the
  dog."** (sincerity), **McGrot's half of the Taxman exchange** (interruption
  and being talked over), and **one verbatim garbled comic passage** (criterion
  5).
- Output to a folder Dan can play through in order, one file per voice per line.

The description above is a first draft, not a finished specification. It is
expected to need two or three passes against real audio — that is what the
audition is for.
