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

**Revised 2026-08-15 after the first audition: accent first, and phonetically
specific.** Dan's verdict on all three FAL engines was that none of them
sounded Scottish. The first prompt did say "Scottish — hard Edinburgh dockside
accent", but buried it inside a character sketch and never said what that
accent *does*. The Gemini director's briefs that produced the 400+ street
voices — the ones that work — name it as a instruction of its own with
phonetic markers: "Accent — thick Leith, glottal stops, hard consonants,
phlegmy." This prompt now leads the same way. Character comes after, because
an engine that gets the accent wrong has already failed criterion 3.

> **Accent: Scottish, Edinburgh — thick Leith dockside. Glottal stops, hard
> consonants, phlegmy. This is the single most important property of the
> voice.** He must not sound English, Irish, American, or generically
> Scottish-on-television; he sounds like a man from the docks at the foot of
> Leith Walk. The accent is thickest on dialect words — "ken", "shan", "radge",
> "doon the Walk" — and a shade clearer on ordinary sentences.
>
> A Leith dockworker turned street-food vendor, early fifties. Mid-range pitch,
> not deep and not booming. The voice is rough from two things at once: years
> of cigarettes and standing over hot oil, and years of cold, salt and wind off
> the water. Dry rasp with grit under it. Young enough to still be physically
> capable — the damage is earned by hard use, not by age. He talks fast and
> restless, cuts in, lands hard on the ends of words and then stops dead. He
> rarely raises his voice; the aggression is in the clipped pace and the hard
> stops, not the volume. When he says something sincere he drops in volume and
> slows down, and the rasp eases.

### The short prompt (Maya, and any engine capping the prompt)

Maya rejected all five lines of the first audition: its prompt limit is 500
characters and the prompt above is longer. This variant keeps the accent
instruction whole and sheds the character detail, because that is the right
thing to lose.

> Scottish accent, Edinburgh — thick Leith dockside. Glottal stops, hard
> consonants, phlegmy. Not English, not Irish, not generic Scottish. A Leith
> dockworker turned street-food vendor, early fifties. Mid-range pitch. Voice
> rough from cigarettes, hot oil, and cold salt wind off the water — dry rasp
> with grit under it. Fast and restless, lands hard on the ends of words then
> stops dead. Rarely shouts; the aggression is in the clipped pace. Sincere
> lines drop in volume, slow down, and the rasp eases.

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

Built (G5e, 2026-08-15; extended G5f, 2026-08-15): `scripts/mcgrots-voice-audition.mjs`,
now three subcommands.

```bash
set -a; source .env.local; set +a
node scripts/mcgrots-voice-audition.mjs self-test         # offline fault-injection proof, no key needed
node scripts/mcgrots-voice-audition.mjs gemini --dry-run  # Part A plan, no network — 12 solo lines + a 3-voice sweep
node scripts/mcgrots-voice-audition.mjs gemini --yes      # Part A, real: reads scripts/mcgrots-voice-briefs/*.txt
node scripts/mcgrots-voice-audition.mjs fal --dry-run     # Part B plan, no network — 3 engines x 5 lines
node scripts/mcgrots-voice-audition.mjs fal --yes         # Part B, real
```

**`gemini`** renders McGrot's twelve solo lines (`generated/mcgrots-dialogue.json`,
`mcgrot-01`…`mcgrot-12`) on Algenib, plus a three-voice sweep (Orus, Fenrir,
Gacrux — chosen, not defended) on the three that overlap the FAL audition set
(`mcgrot-03`/`01`/`07` = "Naw." / flare / sincerity), for cross-engine
comparison on the same content. **The director's brief for each line is
authored by Dan, one file per line, at `scripts/mcgrots-voice-briefs/mcgrot-NN.txt`
— read verbatim and sent as-is. The script does not assemble, paraphrase, or
write any brief text itself** (his ruling, 2026-08-15, after Part A's first
run used a code-generated brief). A line with no file yet is skipped, not an
error, and is named in `--dry-run`.

**`fal`** renders the five audition lines — **"Naw."** (a one-word line),
**"Mingin? Come back when your own kitchen's had a shift like mine."**
(flare), **"Pomplé says the sauce needs mercy, and I believe the dog."**
(sincerity), **McGrot's half of the Taxman exchange** (his three turns from
`generated/mcgrots-dialogue.json`, joined with `...` for the interjections
he's talked over), and **one verbatim garbled comic passage** (the quoted
spans of his own comic's TTS prompt, `scripts/tts-prompts/3c6b637b.txt` —
criterion 5) — across MiniMax, Qwen and Maya, from the accent-first prompt
above (Maya gets the short variant, its 500-character cap). Runs a single
cheap probe call before spending on the rest, and stops if it fails rather
than retrying in a loop.

- Output lands in `docs/voice-audition/` (gitignored — money- or
  quota-generated audio is never committed), named so the same line sits
  adjacent across engines/voices in `ls`. `manifest.json` alongside it — one
  `fal` section, one `gemini` section — is committed, as the record of what
  was auditioned.
- Resumable: an mp3 already on disk is never re-rendered, so Ctrl-C, a
  partial failure, or a daily quota running out never re-pays for what's
  already there.
- **FAL: validates the payload, never the queue status** — it reports
  `COMPLETED` for a request whose body is a 404-shaped error, and a
  status-only check would call that success. `self-test` proves the
  difference offline, no key or network needed: a naive check passes the bad
  body, the real `validatePayload()` fails it and passes a good one.
- **Gemini: `gemini-2.5-flash-tts`'s free tier is a hard 10 requests/day, per
  project, per model — shared with the street's own `daily-tts.sh` cron.**
  Found for real, audition 2 Part A: 9 of 21 planned renders landed before a
  `RESOURCE_EXHAUSTED` with `quotaId: GenerateRequestsPerDayPerProjectPerModel-FreeTier`,
  `quotaValue: "10"`. Not a rate limit that backs off and recovers — retrying
  the same day fails identically. The rig reports this plainly and stops; it
  does not retry past it.
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

---

## Audition 1, 2026-08-15 — the result, and what it cost the plan

Ran full: 8 ok, 6 failed, 1 skipped, ~$0.0077. **Dan's verdict on every file:
none of them have a Scottish accent.** That is criterion 3, and nothing else
matters once it fails, so the character judgements were never reached.

Four findings, in order of how much they cost.

**1. Gemini already does this well, and had done since 8 August.** The 400+
street NPCs are Gemini TTS and are convincingly Scottish. McGrot's own comic
(`3c6b637b`) has had a rendered Gemini reading on disk the whole time. The
G5d/G5e detour into voice-design existed on the reasoning that 30 fixed voices
could not be McGrot — Dan's ear says a fixed voice plus a good director's brief
already is. **The roadmap's original §11 item 0.5 was right and superseding it
was the error.** Gemini is the primary route from here; FAL continues only as a
comparison.

**2. The FAL engines were never told to do the accent.** Gemini gets a full
director's brief — Audio Profile, Scene, Director's Notes naming the accent
phonetically, and inline stage directions (`[flat]`, `[thin, reedy, doing the
suit]`) threaded through the script. The FAL engines got a character sketch and
a bare sentence. The prompt above is rewritten accent-first in response; whether
that closes the gap is unmeasured and is what audition 2 tests.

**3. MiniMax returns a NEW `custom_voice_id` on every call.** Four calls, four
ids, four different men reading one line each. `voice-design` *designs* a voice;
it does not speak in one already designed. So criterion 1 ("it is one man")
could not be judged from the output at all, and the persistence claim that made
MiniMax the only shippable engine is only true if the id is then reused through
a separate speech endpoint. The rig does not do that. Neither the brief nor the
rig said it should.

**4. Maya rendered nothing.** Its prompt cap is 500 characters against a
759-character prompt — `string_too_long` on all five lines, before any money
question. Hence the short prompt above.

The run also emptied the FAL balance mid-way, killing the last two renders.

---

## Audition 2, 2026-08-15 — Part A (Gemini) landed, from Dan's own briefs

`scripts/mcgrots-voice-audition.mjs` now takes a `gemini`/`fal`/`self-test`
subcommand — G5f (`docs/briefs/g5f-audition-2.md`). Full account:
`docs/MCGROTS-VALIDATION.md` § G5f.

**Two things happened before any of the twelve briefs existed.** First: an
early run using a code-assembled brief (VOICE.md's prompt +
`generated/mcgrots-dialogue.json`'s scene, stitched together per line) hit a
hard daily quota nine calls in — `gemini-2.5-flash-tts`'s free tier is capped
at **10 requests per day, per project, per model**
(`quotaId: GenerateRequestsPerDayPerProjectPerModel-FreeTier`, confirmed by
reading the raw error body, not the summarised message), **shared with the
street's own `scripts/daily-tts.sh` cron** against the same key. Smaller than
`generate-tts.mjs`'s own comment suggested ("~14 clips" was measured against
that job's mixed-model allowance, not this one model alone). Second, before
any further spend: **Dan ruled the director's briefs are authored by him, not
generated by this script.** The code-assembled brief was removed outright.
The rig now reads one file per line from
`scripts/mcgrots-voice-briefs/mcgrot-NN.txt` (committed `55db0d2`, twelve
files) — sent verbatim, no code-side assembly. A line with no file is skipped,
not errored, and named as MISSING in `--dry-run`.

**Landed: 10 of 21 planned renders, from the authored briefs, real spend
~$0.01** (measured from actual rendered durations: ~$0.0098 audio, text
input negligible). The other 11 are recorded `failed` with their real 429
bodies —
the same daily quota, hit a second time on resume after only two more calls
succeeded, confirming it is a hard per-day ceiling and not a transient rate
limit that recovers within a session. Not retried further; the run was
stopped rather than grinding through guaranteed-red attempts. Resumable
design means finishing the remaining 11 later needs no new work, only quota:
`node scripts/mcgrots-voice-audition.mjs gemini --yes` skips everything
already on disk.

**Rendered:** `mcgrot-01`, `02`, `03`, `04`, `05`, `08`, `09`, `10`, `11` on
Algenib, plus `mcgrot-01` on Orus (one sweep voice, one line). **Not yet
rendered:** `mcgrot-06`, `07`, `12` on Algenib, and the rest of the sweep
(Orus/Fenrir/Gacrux × `mcgrot-03`/`01`/`07`, minus the one Orus/`01` pair
already done) — 11 pairs, blocked on tomorrow's quota reset, nothing else.

## Audition 2, 2026-08-15 — Part B (FAL) and Part C (the listening index), landed

**All 15 of the FAL audition set rendered: 5 lines × MiniMax, Qwen, Maya, from
the rewritten accent-first prompt.** Existing audition-1 files (the ones that
proved nobody sounded Scottish) were moved to `docs/voice-audition/audition-1/`
first, so resumability could not silently serve stale audio under audition 2's
filenames.

**MiniMax design-once-reuse is real, not aspirational — confirmed against a
live call, not just fal.ai's docs.** Designed the voice once on "Naw." (also
served as the account-balance probe), captured `custom_voice_id`, then spoke
the other four lines through `fal-ai/minimax/speech-02-turbo`'s
`voice_setting.voice_id`, which fal.ai's own voice-design page names as the
intended reuse path without naming the exact endpoint. One
`custom_voice_id` (`ttv-voice-2026081518363626-ZFQUVUyB`) now covers all five
MiniMax clips — audition 1's four different men are gone.

**A real, transient billing lock hit mid-run and cleared on its own.** Three
calls 403'd with `"User is locked. Reason: Exhausted balance"` — one MiniMax
speech call, two Qwen — while calls immediately before and after succeeded.
Not retried in a loop; the run finished the rest and reported the three
failures plainly. A second, identical command filled exactly those three gaps
(resumability skipped the twelve already on disk) at near-zero additional
cost. **15/15 rendered**, real spend ~$0.0248 across both passes (MiniMax
only priced; Qwen/Maya have no published rate).

**Part C: `docs/voice-audition/INDEX.md`.** Every rendered file, grouped by
the words spoken rather than by who's speaking them — the three lines common
to every candidate first, then the two FAL-only harder passages, then the
nine remaining Gemini-only lines — with the six criteria reproduced in plain
language and every not-yet-rendered gap named rather than left silent.
Written for Andrew as much as Dan: no repo jargon, no file-format assumptions,
plain sentences about what each clip is for.

**Not done:** the listen itself, and getting these files to Andrew — both
explicitly Dan's, not this unit's.

## Audition 2, 2026-08-16 — Gemini goes paid: the rest of Part A, plus Flash vs Pro

**The free-tier daily quota that blocked 11 of Part A's renders is gone.**
The account moved to Google's paid tier — confirmed by Dan with a real call
to each model before this session resumed, not assumed from a billing page.
All 11 remaining Flash renders (Algenib on `mcgrot-06`/`07`/`12`, the rest of
the Orus/Fenrir/Gacrux sweep) landed in one run, **zero 429s** — a clean
contrast against Part A's daily-cap failures and Part B's transient
mid-batch lock, neither of which this run needed to work around.

**New: `gemini-2.5-pro-preview-tts` alongside Flash, same voice (Algenib),
on the three lines shared with the FAL set.** Pro had no free tier at all —
this is its first real audition, not a repeat of anything. Priced at 2x
Flash's rate per Dan. Filenames: Flash keeps its original name
(`mcgrot-NN--gemini-algenib.mp3`, so none of Part A's ten already-rendered
clips needed re-requesting), Pro gets an explicit `-pro` suffix
(`mcgrot-NN--gemini-algenib-pro.mp3`) that sorts immediately next to its
Flash sibling.

**14 rendered, 0 failed, ~$0.019 spent this run** (11 Flash + 3 Pro); 10
skipped (already on disk from the first pass). All 24 planned Gemini clips
(12 solo lines × Algenib, 3 lines × 3 sweep voices, 3 lines × Pro) now exist.

**`docs/voice-audition/INDEX.md` rewritten**, not patched — Group 1 (the
three shared lines) now shows every candidate including the full sweep and
both Google engines side by side; Group 3 (Google-only solo lines) covers all
nine remaining; the "Not yet rendered" section is gone because nothing is
missing. Every filename cross-checked against the actual directory in both
directions again: 39 files, 39 references, no gap either way.

## Audition 2, 2026-08-16 — Dan's verdict: FAL is out, it's Algenib vs Orus

**All three FAL engines rejected on accent, confirmed a second time.**
MiniMax and Maya read English, Qwen read American. Checked once at audition
1 with the first description, checked again here with the rewritten
accent-first prompt and a correctly-reused MiniMax voice — failed both
times. FAL is not a route forward for McGrot; this closes that line of
investigation rather than leaving it open.

**The decision narrows to two Google voices, Algenib and Orus — but they
weren't comparable.** Algenib had all twelve lines; Orus only had the three
that overlap the FAL set. Rendered Orus on the remaining nine
(`mcgrot-02`/`04`/`05`/`06`/`08`/`09`/`10`/`11`/`12`, Flash, same authored
briefs) — 9 ok, 0 failed. Both finalists now cover the same thirteen lines
(the twelve solo lines plus, next, the Taxman exchange).

**The Taxman exchange had never been rendered on Gemini at all** — only the
twelve solo lines were audition 2's original scope. New brief,
`scripts/mcgrots-voice-briefs/mcgrot-exch-taxman.txt` (Dan's, committed
`86740a7`, read and not edited here), rendered on both finalists: Algenib
and Orus, one call each, both ok. It's compared in `INDEX.md` against the
MiniMax take specifically — Dan judged MiniMax's *delivery* of this exchange
the best heard, independent of its accent failing — so it stands as the
performance bar the two real finalists are measured against, not as a
candidate.

**A 26-voice shortlisting pass, separate from the finalist decision.**
Google offers 30 prebuilt voices; 4 had been heard (Algenib, Orus, plus
Fenrir and Gacrux from an earlier sweep). The other 26 cost nothing extra,
so each read McGrot's most dialect-heavy line once (`mcgrot-12`, "Chum me
doon the fit o' the Walk..."), Flash, one clip each — 26 ok, 0 failed. Voice
names taken from Google's published list
(https://ai.google.dev/gemini-api/docs/speech-generation), re-checked
against the docs rather than relied on from memory, so a typo would surface
as a real API rejection rather than a silent wrong voice.

**`docs/voice-audition/INDEX.md` restructured around the decision.** Group 1
is now the full Algenib-vs-Orus table, all thirteen lines. Group 2 is the
Taxman three-way. Group 3 (the Fenrir/Gacrux/Pro sweep and the 26-voice
shortlist) is explicitly framed as supporting context, not additional
candidates. FAL moves to an appendix, framed as rejected and kept for the
record. 76 files referenced, 76 on disk, checked in both directions.

**Two stray files found in the audio folder, neither from this rig.**
`docs/voice-audition/04-exchange-taxman--minimax.mp3.zip` and
`04-exchange-taxman--minimax 2.mp3` (the latter macOS's standard
duplicate-on-extract name, byte-identical to the canonical file, same
15 Aug 12:41 timestamp as the zip's internal entry). The zip contains a
`__MACOSX/._...` resource-fork entry — the unmistakable signature of
Finder's own "Compress" command. Nothing in `scripts/mcgrots-voice-audition.mjs`
writes a `.zip` anywhere; confirmed by reading the script, not assumed.
Both files left untouched — not this rig's to remove.
