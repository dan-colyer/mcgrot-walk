# G7c — costing the voice-collision routes

This document costs, not recommends. It does not pick a route — see
`docs/briefs/g7c-voice-collision-costs.md`. No audio was rendered to produce
these numbers.

---

## The urgent number: re-rendering the proposed eight into McGrot's voice

The eight readings in `docs/g7-reading-shortlist.md` § "A proposed set of
eight" currently exist only as **vendor** performances — Shug Gantsie,
Autonoe, Orus, Charon, Leda, Algenib (already, coincidentally), Puck, Umbriel.
None of them is McGrot reading as himself.

**The existing pipeline cannot do this job as it stands, and that is the
finding to lead with.** `scripts/generate-tts.mjs`'s target filter is
`!existsSync(assets/<audio path>)` (`scripts/generate-tts.mjs:86`) — all eight
already have an `audio` path on disk, so `node scripts/generate-tts.mjs --ids
<these 8>` selects zero targets and reports "nothing to do." Producing a
McGrot-voiced reading of these eight needs either a new output path per entry
(distinct from the vendor's own `audio` field, so nothing already accepted is
overwritten) or a standalone script that calls the same `tts()` call
(`scripts/generate-tts.mjs:60`) directly. Building that is a few lines, but it
does not exist today and is not this unit's to write.

**Text does not exist yet either.** `scripts/tts-prompts/<id>.txt` is the
*vendor's* director's brief (Audio Profile / Scene / Director's Notes for
Shug Gantsie, Autonoe, etc. — confirmed by reading `2b2110bb.txt`), not
McGrot's. Per `docs/MCGROTS-VOICE.md`'s settled convention, McGrot's briefs
are authored by Dan, one file per line (`scripts/mcgrots-voice-briefs/mcgrot-NN.txt`)
— eight new briefs of that kind do not exist and this unit does not write
them. Authoring time is not something a script measures.

**Clip count: 8.** **Estimate, not measurement** — using the eight *existing
vendor* prompt files as a same-order-of-magnitude proxy for the not-yet-written
McGrot briefs (McGrot's own committed briefs run 1,362–1,376 chars; the vendor
proxies below run 996–1,438 chars, the same range):

| id | title | vendor duration | vendor prompt chars |
|---|---|---|---|
| `2b2110bb` | 28 Grots Later | 16.8s | 996 |
| `19f35bc7` | McGrot-Scree Ski | 19.0s | 1,008 |
| `03347596` | The Dandy Crossover | 21.9s | 1,181 |
| `0121c47c` | The Extra Side | 22.8s | 1,215 |
| `022bcde2` | The Leith Grand Prix | 23.9s | 1,111 |
| `08d846d0` | The Laird's Parlour Parade | 25.8s | 1,438 |
| `00f88d65` | Bunion Broth | 26.8s | 1,180 |
| `0738152e` | The Bayeux Tastie-Pie | 28.4s | 1,163 |
| **total** | | **185.4s (3.1 min)** | **9,292** |

Command: `ffprobe -v error -show_entries format=duration -of csv=p=0
assets/audio/<id>.mp3`, `wc -c scripts/tts-prompts/<id>.txt`, per id.

**Cost — estimate**, applying `scripts/generate-tts.mjs`'s own estimator
(`dur*25` audio tokens, `chars/4` text tokens, `PRICE` table at
`scripts/generate-tts.mjs:25`) to the durations/chars above:

- All eight at `gemini-2.5-flash-preview-tts` (the default): **≈$0.048**.
- Split by each comic's *currently tagged* `ttsModel` (six at 2.5-flash, two —
  `022bcde2`, `00f88d65` — at `gemini-3.1-flash-tts-preview`, 2× the per-token
  rate): **≈$0.061**. Which model a McGrot render would use is undecided; the
  two figures bracket it.

Either way this is under 10 cents. **Estimate — cost is not the constraint on
this job.**

**Wall-clock time — measured from real Gemini calls, extrapolated to eight.**
`docs/voice-audition/manifest.json`'s `gemini.runs` array (committed, 35 real
API calls across audition 2) records a `tookSec` per call: min 2s, max 15s,
mean 5.3s, n=35. Combined with `generate-tts.mjs`'s own 8-second inter-clip
pause (`scripts/generate-tts.mjs:174`, applied between clips, not after the
last):

- 8 calls at the measured mean (5.3s) + 7 pauses (8s) ≈ **98s, under 2
  minutes**.
- Worst case using the measured max (15s) per call: 15×8 + 56 ≈ **176s, under
  3 minutes**.

Command: `python3 -c "import json; d=json.load(open('docs/voice-audition/manifest.json')); print([r['tookSec'] for r in d['gemini']['runs'] if r.get('status')=='ok'])"`.

**Risk.** Because nothing is overwritten (the vendor `audio` paths stay as
they are, per the pipeline gap above), none of Dan's already-accepted vendor
clips is put at risk **provided the new job writes to new paths** — that
constraint has to be designed in, not assumed. The one existing McGrot-voiced
reference, `3c6b637b` ("The Badger Consultancy," `npc: null` so
`generate-tts.mjs`'s `Algenib` fallback applied), is a genuine comparison
point for what the eight should sound like — confirmed on Algenib by reading
the catalog entry, not assumed.

**Reversible.** Trivially — these are new files under a route that doesn't
exist yet; deleting them is the undo.

**What it does NOT fix.** This job only gets G7's specific eight into the
right voice for an honest kill-criterion run. It does not touch the
Algenib/vendor-crowd collision (the three routes below) at all — McGrot's
readings and the vendor crowd's readings are different files either way.

---

## Route 1 — reassign the six Algenib vendors onto other voices

**What has to be regenerated.** 6 catalog entries carry `npc.voiceName:
"Algenib"`. One (`3e2426b7`, "The Gammons' Revelation" / Tam Sillars) has
never been rendered (`audio: null`) — reassigning it costs nothing extra,
it just needs to be pointed at a different voice before its first render.
The other 5 are already on disk and would need re-rendering:

| id | title | duration | prompt chars | `ttsModel` |
|---|---|---|---|---|
| `08d846d0` | The Laird's Parlour Parade | 25.8s | 1,438 | 2.5-flash |
| `0e21d212` | The Unlikely Company | 34.2s | 1,114 | 3.1-flash |
| `156f9d41` | Free McGrot Rally | 30.2s | 1,325 | 2.5-flash |
| `3706c73f` | The Birth of a Battle Jacket | 37.9s | 1,573 | 2.5-flash |
| `comic1` | The Seafield Stink-Off | 72.8s | 1,573 | 2.5-flash (default) |
| **total** | | **200.9s (3.3 min)** | **7,023** | |

Command: same `ffprobe`/`wc -c` pair as above, per id; `ttsModel` read from
`assets/catalog.json`.

**Cost — estimate**, same estimator: 2.5-flash group (4 clips, 166.7s,
5,909 chars) ≈$0.042; 3.1-flash group (`0e21d212`, 34.2s, 1,114 chars)
≈$0.017. **Total ≈$0.06.**

**Wall-clock — measured mean applied to 5 calls:** 5×5.3s + 4×8s pauses ≈
**59s**; worst case (15s/call) ≈ **107s**.

**What it puts at risk.** Overwrites 5 clips Dan has already heard as their
vendor's accepted performance — `08d846d0` is also one of the proposed eight
(coincidentally already on Algenib), so reassigning it collides directly with
the urgent job above and needs sequencing, not just budget. The replacement
voice for each of the 6 vendors is **unaudited** — nothing has checked it
against the register those characters were built for (`accent` field per
entry, e.g. `3e2426b7`'s "broad Leith, rolled Rs, a courtroom boom he can't
quite sustain"). Route 1 trades a known collision for an unknown fit.

**Reversible.** Yes — `voiceName` is a catalog field; reverting means
re-rendering back to Algenib at the same cost again (~$0.06, ~59s).

**What it does NOT fix.** Voice assignment for new vendors happens outside
this repo — `scripts/prep-comics.mjs` only hard-codes the three v1 comics;
the other 153 `npc` blocks are filled in by "the transcription factory"
(`scripts/prep-comics.mjs`'s own comment) with no code in this repo enforcing
"don't pick Algenib." Nothing stops a future batch landing back on Algenib
by the same process that produced these six, and `generate-tts.mjs`'s own
fallback (`comic.npc?.voiceName || 'Algenib'`) still defaults there for any
entry with no explicit voice. **This is a street-side (vendor) change and not
on G7's critical path** — it matters only if McGrot and these vendors share a
scene, i.e. at G8/G9 per the roadmap's own framing.

---

## Route 2 — accept the echo

**What has to be regenerated:** nothing. **Cost:** $0, 0s. **Risk:** none —
no existing asset changes. **Reversible:** trivially, by construction (there
is nothing to undo).

**What it does NOT fix.** The perceptual collision itself: if a player ever
hears a Route-1-untouched vendor and McGrot in the same scene, both are
Algenib. Per `docs/MCGROTS-ROADMAP.md` § 11 item 0.5 and `docs/MCGROTS-VOICE.md`,
this is explicitly **not a G7 blocker** — McGrot is at his own pitch and the
street's crowd is a different game — and bites only at G8/G9 if the two
scenes are ever combined.

---

## Route 3 — take McGrot off the prebuilts entirely

**One correction to the brief's framing, stated plainly rather than silently
followed.** The brief describes FAL/MiniMax Voice Design as "closed out on
cost." `docs/MCGROTS-VOICE.md`'s own record (2026-08-16, "Dan's verdict: FAL
is out") gives a different reason, checked twice: **all three FAL engines
failed criterion 3 (the Scottish accent), not a cost or balance limit** — "All
three FAL engines rejected on accent, confirmed a second time." (There was a
real, transient balance lock earlier in the process, but it cleared on its own
and is not why FAL was closed out.) This doesn't change the outcome — FAL is
out either way, and this report does not reopen it — but the reason matters
for what Route 3 would need to overcome if it were ever revived.

**No live implementation exists to cost.** `scripts/mcgrots-voice-audition.mjs`
is an audition-only rig — it writes to `docs/voice-audition/` (gitignored) and
is never called from `scripts/generate-tts.mjs` or any shipped rendering path.
Taking McGrot (or any vendor) off Gemini's prebuilts would mean new
integration work: wiring MiniMax's proven design-once/speak-many pattern
(`custom_voice_id`, confirmed reusable across calls per `docs/MCGROTS-VOICE.md`'s
audition-2 Part B) into a rendering path that doesn't currently call it. That
is engineering, not a clip count, and this unit does not build it.

**What cost data exists is priced at a scale far short of eight full
readings.** The only real MiniMax numbers on record: one design call (46s
round trip, 4 billed characters, ~$0.0001) and five short audition lines
(15/15 rendered across MiniMax/Qwen/Maya, ~$0.0248 total, MiniMax only
priced — Qwen and Maya have no published rate). None of those lines runs
anywhere near 185s of continuous speech. Extrapolating a per-reading cost from
a 5-line, sub-minute sample to eight readings averaging 23s each would be
guessing from too small a base — **not estimated here**, flagged instead as
unknown.

**What it puts at risk / reversibility:** N/A — nothing is built, so nothing
regresses and there is nothing to undo.

**What it does NOT fix.** Even if built, Route 3 solves the vendor-collision
problem only for whichever entries move to it — the same accent criterion
that already disqualified MiniMax for McGrot applies equally to any Leith
vendor moved there. Route 3 does not sidestep criterion 3; it just moves the
question of whether a given character needs it.

---

## What nobody can measure, from what's in the repo today

- **Gemini per-call wall-clock time beyond the 35 audition calls in
  `docs/voice-audition/manifest.json`.** The production cron
  (`scripts/daily-tts.sh`) logs to `scripts/.tts-logs/`, which does not exist
  in this worktree or in `/Users/dan/code/mcgrot-walk` (checked both,
  read-only). The 2–15s / mean 5.3s figures used throughout this report are
  the only real sample that exists.
- **Whether the eight vendor-prompt files are a valid length/structure proxy
  for the McGrot briefs Dan hasn't written.** They're the same order of
  magnitude as McGrot's own eleven committed briefs, but that's a structural
  observation, not a measurement of text that doesn't exist.
- **Authoring time for eight new McGrot-persona briefs.** Not a script's to
  measure.
- **MiniMax/Qwen/Maya cost at 20–35s-per-line scale.** Only priced at a
  single short line and a 5-line audition set.
- **Whether Route 1's replacement voices would themselves pass any character
  or accent criterion.** No audition has been run against them.

---

## Reproducing every number above

```bash
# durations
ffprobe -v error -show_entries format=duration -of csv=p=0 assets/audio/<id>.mp3
# prompt sizes
wc -c scripts/tts-prompts/<id>.txt
# which entries are on Algenib
node -e "const c=require('./assets/catalog.json').comics; \
  console.log(c.filter(x=>x.npc&&x.npc.voiceName==='Algenib').map(x=>x.id))"
# real measured Gemini call times
python3 -c "import json; d=json.load(open('docs/voice-audition/manifest.json')); \
  print([r['tookSec'] for r in d['gemini']['runs'] if r.get('status')=='ok'])"
```
