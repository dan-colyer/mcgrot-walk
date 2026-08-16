# G7e — eight readings in McGrot's own voice

Renders the eight comics from `docs/g7-reading-shortlist.md`'s proposed set on
Algenib, McGrot's own voice (Andrew's pick, provisional, 2026-08-16), replacing
the vendor narrators. Landed 2026-08-16.

## What exists now

- `scripts/tts-prompts/mcgrot/<id>.txt` — eight director's briefs, McGrot's own
  voice. `Audio Profile:` is `docs/MCGROTS-VOICE.md`'s settled description,
  verbatim, unabridged, in every file. `Scene:` and `Director's Notes:` are
  authored per comic, from the actual images (`assets/comics/<id>.jpg`), not
  from the titles.
- `scripts/generate-mcgrot-tts.mjs` — a render script separate from
  `scripts/generate-tts.mjs`, deliberately: that script's target filter skips
  anything already rendered, and all eight of these comics already carry a
  vendor mp3, so pointing it at them would be a silent no-op rather than a
  re-render. This script writes to its own tree instead.
- `assets/audio/mcgrot/<id>.mp3` — the eight rendered clips, ~365KB combined.

## The guard

Writing McGrot audio over a vendor clip would destroy work Dan has already
heard and accepted, and would do it silently. `generate-mcgrot-tts.mjs` guards
against it:

- `assertUnderMcgrotDir()` resolves every output path and asserts it starts
  with `assets/audio/mcgrot/`, called once before the render loop begins and
  again immediately before the write it protects. It throws, not warns.
- Refuses to overwrite an existing output unless `--force` is passed.
- Never writes to `assets/catalog.json` — these are not vendor clips, and an
  `audio` field pointing at them would make McGrot vendor 125 (`CLAUDE.md` on
  `3c6b637b`).

**Proved it can go red.** Committed the script first (`42a1de1`), then edited
the real file so a target's output path bypassed `OUTPUT_DIR` and pointed at
the vendor tree (`assets/audio/2b2110bb.mp3` — the actual vendor clip already
on disk). Ran it:

```
Error: refusing to write outside assets/audio/mcgrot/: /Users/.../assets/audio/2b2110bb.mp3
    at assertUnderMcgrotDir (scripts/generate-mcgrot-tts.mjs:45:11)
```

Process exited 1 before any write. `git checkout -- scripts/generate-mcgrot-tts.mjs`
restored the committed version; diffed against a pre-injection copy to confirm
the restore was exact.

The first fault-injection attempt was a false pass, worth recording: moving
`OUTPUT_DIR` itself (dropping `/mcgrot`) doesn't test anything, because the
target path and the guard's reference point move together — the assert checks
against whatever `OUTPUT_DIR` currently is, not a hardcoded correct value. The
real test needed the *target* path corrupted while `OUTPUT_DIR` stayed correct,
which is the scenario above.

## Rendered: 8/8, $0.038

```
node scripts/generate-mcgrot-tts.mjs
Done: 8 ok, 0 failed, 0 skipped. Estimated spend ~$0.0381.
```

| id | title | vendor voice | vendor dur | McGrot dur | mean / max volume |
|---|---|---|---|---|---|
| `2b2110bb` | 28 Grots Later | Autonoe | 16.8s | 17.8s | −22.1 / −3.2 dB |
| `19f35bc7` | McGrot-Scree Ski | Alnilam | 19.0s | 16.0s | −18.7 / −1.8 dB |
| `03347596` | The Dandy Crossover | Orus | 21.9s | 18.2s | −19.8 / −2.3 dB |
| `0121c47c` | The Extra Side | Charon | 22.8s | 22.9s | −18.8 / −1.6 dB |
| `022bcde2` | The Leith Grand Prix | Leda | 23.9s | 14.9s | −18.8 / −1.3 dB |
| `08d846d0` | The Laird's Parlour Parade | Algenib | 25.8s | 24.3s | −17.7 / −1.1 dB |
| `00f88d65` | Bunion Broth | Puck | 26.8s | 15.5s | −16.9 / −1.7 dB |
| `0738152e` | The Bayeux Tastie-Pie | Umbriel | 28.4s | 14.5s | −17.6 / −0.7 dB |
| **Total** | | | **185.4s** | **144.0s** | |

Measured with `ffmpeg -i <file> -af volumedetect -f null -`, per the brief —
no new dependency.

**Named control:** three seconds of digital silence
(`ffmpeg -f lavfi -i anullsrc=r=24000:cl=mono -t 3 ...`) reads `mean_volume:
−91.0 dB`, `max_volume: −91.0 dB` — `volumedetect`'s reporting floor, i.e. as
close to zero as the filter can express, on both a raw WAV and an mp3 encode
of the same silence. Every one of the eight clips reads 65–74 dB above that
floor. Non-zero, unambiguously.

**Total duration diverges from the shortlist's 185.4s by −41.4s (−22.3%), and
that is a finding, not a rounding error.** Three clips account for most of
it — `022bcde2` (−9.0s), `00f88d65` (−11.3s), `0738152e` (−13.9s) — and it is
not explained by shorter scripts: word counts for those three briefs are
within a few words of the vendor originals, and `00f88d65`'s McGrot brief is
*longer* (65 words vs 57) while running 11.3s *shorter*. `08d846d0` is the one
comic where the vendor voice was already Algenib, and it landed closest to
the vendor timing (−1.5s, −6%) — consistent with the gap being Algenib's own
pace against the specific vendor voices used (Leda, Puck, Umbriel), not
script length. The eight-readings-fit-ten-minutes arithmetic in
`docs/g7-reading-shortlist.md` was built on the vendor timings; on Algenib the
same eight run 2.4 minutes, not 3.1 — more slack for the visit, not less, so
this doesn't threaten G7's ten-minute budget. It would matter if a future unit
re-derives per-comic pacing from the vendor numbers instead of re-measuring.

## Listening: not done from this session, and that's a real gap

**This session has no way to listen to audio or transcribe speech** — `Read`
refuses the mp3s as binary, and no local speech-to-text tool is available.
The brief asked for at least two clips to be listened to and reported on in
what-was-heard terms; that could not be done here, and reporting an impression
without having heard anything would be exactly the false-measurement failure
mode this project's verification discipline exists to catch. Flagging this
plainly rather than guessing.

What this session *can* say from the numbers: all eight clips render, none
are silent, and total runtime is shorter than planned rather than longer. Style
correctness — whether Algenib actually sounds like the settled description, or
whether it holds up against `docs/MCGROTS-VOICE.md`'s six acceptance
criteria — is unverified and needs Dan's (or Andrew's) ear against the actual
files at `assets/audio/mcgrot/`.

## Not done, and deliberately out of scope

- No smoke region added (another worker owns `scripts/smoke-mcgrots.mjs`).
- `docs/MCGROTS-VALIDATION.md` untouched — this document is the record instead.
- No wiring into `src/mcgrots/` — that's render-and-verify only, per the brief.
