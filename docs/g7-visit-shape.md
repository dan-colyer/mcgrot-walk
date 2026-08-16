# G7f — the ten-minute visit, minute by minute

What has to happen across ten minutes for § 9's kill criterion to be
judgeable at all: the chosen style, a walk between anchors that reads well,
six to eight readings, McGrot's complaints in the gaps, and Pomplé doing
something noticed. This document places all five on a clock. It builds and
renders nothing — see "What has to exist" for the handover.

## 1. The minute-by-minute shape

Anchors and geometry: `src/mcgrots/anchors.js` — five spots, `counter`,
`wall`, `kerb`, `far`, `back`; `wall` and `kerb` are seated. Walk speed:
`WALK_SPEED = 1.35` m/s (`src/mcgrots/actor.js:24`). Walk durations below are
straight-line anchor-to-anchor distance ÷ 1.35, computed by:

```
node --input-type=module -e "
import('./src/mcgrots/anchors.js').then(({ANCHORS}) => {
  for (const a of ANCHORS) for (const b of ANCHORS)
    if (a.id < b.id) console.log(a.id, b.id,
      (Math.hypot(a.pos.x-b.pos.x, a.pos.z-b.pos.z)/1.35).toFixed(1));
});"
```

**Finding: walking is cheap, not a time filler.** Every anchor pair is
2.8–7.1s apart. Even a route that visits all five anchors and doubles back
once costs under a minute total. The 6.9 minutes left after G7a's eight
readings (185.4s) cannot be spent mostly on foot — it has to be complaints
and silence, which is what § 9 asks for anyway ("in the gaps").

Reading durations are G7a's measured `ffprobe` numbers, vendor-voiced
placeholders (§ "What has to exist", item 1). Complaint durations are
**estimated**, not measured — no McGrot audio exists yet (`docs/MCGROTS-
DIALOGUE.md` § "Verification record": "No audio was rendered or listened
to"). The estimate: word count ÷ a words-per-second rate derived from the
eight readings' own prompt text against their real clip durations —
`415 words / 185.4s = 2.24 words/s` — applied to each complaint line's word
count. Command for the rate: `wc`-count each `scripts/tts-prompts/<id>.txt`
body against its `ffprobe` duration, sum, divide (both scripts pasted at the
end of this section). This is a proxy, not a promise — McGrot's actual
delivery (`directorNotes`: "slow prowl with sudden sharp gestures and hard
stops") reads slower than a vendor performance, so treat every complaint
timing below as a lower bound.

| min:sec (start) | dur (s) | what's audible / what the player is doing | anchor |
|---|---|---|---|
| 0:00 | 12 | Silence. Player looks around, ambience only. | counter |
| 0:12 | 16.8 | Reading: `2b2110bb` "28 Grots Later" | counter |
| 0:29 | 5.4 | McGrot complaint `mcgrot-10` — "Radge, the pair of you — queueing for a smell." (reacts to the strip just heard, still at the counter) | counter |
| 0:34 | 4.5 | Walk `counter`→`kerb` (3.9s + 0.6s settle) | → kerb |
| 0:39 | 19.0 | Reading: `19f35bc7` "McGrot-Scree Ski" | kerb |
| 0:58 | 63 | Silence + Pomplé beat 1 (see § 3 item 5 — first noticed action, unscripted timing, budgeted 15–20s of it) | kerb |
| 2:01 | 21.9 | Reading: `03347596` "The Dandy Crossover" | kerb |
| 2:23 | 4.9 | McGrot complaint `mcgrot-07` — "Pomplé says the sauce needs mercy, and I believe the dog." (placed right after a Pomplé beat, the one line in the 12 that names him) | kerb |
| 2:28 | 7.1 | Walk `kerb`→`wall` | → wall |
| 2:35 | 5.4 | McGrot complaint `mcgrot-01` — "Mingin? Come back when your own kitchen's had a shift like mine." (arrival beat, not tied to a reading) | wall |
| 2:40 | 22.8 | Reading: `0121c47c` "The Extra Side" | wall |
| 3:03 | 89 | Silence — the longest single gap. Ambient crowd, tram, weather carry it; nothing scripted here yet (see § 3). | wall |
| 4:32 | 3.6 | McGrot complaint `mcgrot-04` — "Awright pal. Sauce is extra, opinions are free." | wall |
| 4:35 | 7.1 | Walk `wall`→`kerb` | → kerb |
| 4:43 | 23.9 | Reading: `022bcde2` "The Leith Grand Prix" | kerb |
| 5:06 | 4.5 | McGrot complaint `mcgrot-08` — "Persevere, it says on the bin. Persevere, I say back." | kerb |
| 5:11 | 6.4 | Walk `kerb`→`far` | → far |
| 5:17 | 74 | Silence + Pomplé beat 2 | far |
| 6:31 | 25.8 | Reading: `08d846d0` "The Laird's Parlour Parade" | far |
| 6:57 | 5.4 | McGrot complaint `mcgrot-11` — "I've buried better plans than this under a layer of onions, ken." | far |
| 7:02 | 6.4 | Walk `far`→`counter` | → counter |
| 7:09 | 3.6 | McGrot complaint `mcgrot-09` — "Extra sauce, every time. That's not negotiable, pal." | counter |
| 7:12 | 26.8 | Reading: `00f88d65` "Bunion Broth" | counter |
| 7:39 | 5.4 | McGrot complaint `mcgrot-06` — "Away and get your messages first — then tell me that's shan." | counter |
| 7:45 | 49 | Silence | counter |
| 8:34 | 28.4 | Reading: `0738152e` "The Bayeux Tastie-Pie" | counter |
| 9:02 | 7.6 | McGrot complaint `mcgrot-12` — "Chum me doon the fit o' the Walk and I'll show ye a queue that means something." (closing line, sends the player back toward the Foot) | counter |
| 9:10 | 51 | Silence — the visit winds down. Pomplé beat 3 if the second slot ran short; otherwise just ambience. | counter |
| 10:01 | — | End. | counter |

Timestamps are the running sum of the durations column, not independently
rounded — reproduced by:

```
python3 -c "
rows=[('silence',12),('reading',16.8),('complaint',5.4),('walk',4.5),
('reading',19.0),('silence',63),('reading',21.9),('complaint',4.9),
('walk',7.1),('complaint',5.4),('reading',22.8),('silence',89),
('complaint',3.6),('walk',7.1),('reading',23.9),('complaint',4.5),
('walk',6.4),('silence',74),('reading',25.8),('complaint',5.4),
('walk',6.4),('complaint',3.6),('reading',26.8),('complaint',5.4),
('silence',49),('reading',28.4),('complaint',7.6),('silence',51)]
t=0
for name,dur in rows:
    m,s=divmod(int(round(t)),60); print(f'{m}:{s:02d}',name,dur); t+=dur
print('END',t)"
```

**Totals:** readings 185.4s, complaints 45.8s (9 of the 12 solo lines
placed), walking 31.5s, silence/Pomplé 338.0s. Sum = **600.7s** — 0.7s over
ten minutes, which is rounding slack in the individual duration figures
(each already rounded to 0.1s) rather than a real overrun; not worth forcing
to exactly 600 by fudging a number. The arithmetic holds. **The three
"Pomplé beat" windows are the least real numbers in the table** — nothing
currently sequences Pomplé to do anything on a clock (§ 3, item 5), so
"15–20s of it" inside a 63s or 74s silence block is a placeholder for a beat
that has to be authored, not a measured duration.

Route used above: counter → kerb → wall → kerb → far → counter. Revisits
`kerb` once; every other anchor once. Five walks, 31.5s total, none over
7.1s. Chosen to put both seated anchors (`wall`, `kerb`) earlier, `far`
mid-visit for the establishing wide, and return to `counter` for the close.
Not the only valid route — any ordering keeps walking under a minute, so
route choice should be driven by which readings suit which anchor's framing
(§ "Two things settled"), not by time budget.

Rate-derivation command, for the record:

```
node -e "
const fs=require('fs');
const ids=['2b2110bb','19f35bc7','03347596','0121c47c','022bcde2','08d846d0','00f88d65','0738152e'];
const durs={'2b2110bb':16.8,'19f35bc7':19.0,'03347596':21.9,'0121c47c':22.8,
  '022bcde2':23.9,'08d846d0':25.8,'00f88d65':26.8,'0738152e':28.4};
let w=0,s=0;
for (const id of ids) {
  const txt=fs.readFileSync('scripts/tts-prompts/'+id+'.txt','utf8');
  const body=txt.split(/\n\s*\n/).slice(1).join('\n')||txt;
  w+=body.trim().split(/\s+/).filter(Boolean).length; s+=durs[id];
}
console.log(w+' words /', s+'s =', (w/s).toFixed(2), 'words/sec');
"
```

## 2. Which complaints play, and where

**9 of the 12 solo lines placed; all 6 exchange lines excluded.** Estimated
durations use the 2.24 words/s rate above, computed by:

```
node -e "
const d=require('./generated/mcgrots-dialogue.json');
const mc=d.entries.find(e=>e.key==='MCGROT');
for (const l of mc.lines.filter(l=>!l.id.includes('exch')))
  console.log(l.id, (l.text.trim().split(/\s+/).length/2.24).toFixed(1)+'s', l.text);
"
```

| id | placed at | why |
|---|---|---|
| `mcgrot-10` | 0:29, counter, after `2b2110bb` | Direct reaction ("queueing for a smell") to a zombie-parody strip just read — the clearest reading→complaint pairing on offer. |
| `mcgrot-07` | 2:22, kerb, after Pomplé beat 1 | The one solo line that names Pomplé — the deliberate seam between his beat and McGrot's voice, so the two halves of § 9's requirement touch instead of running in parallel tracks. |
| `mcgrot-01` | 2:34, wall, on arrival | Generic-enough opener ("come back when your own kitchen's had a shift") that reads fine cold, used as an arrival beat rather than tied to a specific strip. |
| `mcgrot-04` | 4:30, wall, ending the long silence | Breaks the 89s gap once, mid-way through — a check that the gap isn't dead air the whole way. |
| `mcgrot-08` | 5:05, kerb, after `022bcde2` | Weakest pairing on the list — "Persevere, it says on the bin" has no connection to the Grand Prix strip. Placed because the shape needed a beat here and every stronger candidate was already used; flag this as the first one to swap if a better fit turns up. |
| `mcgrot-11` | 6:56, far, after `08d846d0` | Generic grumble, works as a beat closing out the establishing-wide anchor. |
| `mcgrot-09` | 7:07, counter, on return | "Extra sauce, every time" — a callback to the vendor's whole shtick, works as a re-arrival beat. |
| `mcgrot-06` | 7:38, counter, after `00f88d65` | Loose thematic fit (food-adjacent grumble after a food-body-horror strip). |
| `mcgrot-12` | 9:01, counter, closing line | The only line that is explicitly an exit beat ("chum me doon the fit o' the Walk") — reserved for the close, not usable earlier without contradicting its own content. |

**Not placed, 3 of 12 solo lines:**

| id | why not placed |
|---|---|
| `mcgrot-02` | "Do not call it scraps." — reads as a direct reply to a specific insult that isn't in any of the eight strips; placing it without that setup makes it a non-sequitur. Candidate to swap in if a future reading gives McGrot something to be called scraps over. |
| `mcgrot-03` | "Naw." — a one-word reply needs something immediately preceding it to reply to (a question, from the player or another character). Nothing in this shape asks him one; placing it cold reads as a glitch, not a beat. |
| `mcgrot-05` | "Steamboats or stone sober, my queue's still the longest at the fit o' the Walk." — thematically close to `mcgrot-12` (both are queue/pride lines about the fit o' the Walk) and to `mcgrot-09` (both assert the stall's standing). Two of that flavour is enough for nine lines; cut for redundancy, not weakness. |

**All 6 exchange lines excluded, at the category level.** `mcgrot-exch-
taxman-*` and `mcgrot-exch-inspector-*` are one half of a two-hander —
`TAXMAN` and `GOV_INSPECTOR` in `generated/mcgrots-dialogue.json` carry the
other half (verified: `taxman-exch-taxman-01/02/03`,
`gov_inspector-exch-inspector-01/02/03`). Neither the Taxman nor the
Government Inspector appears anywhere in `src/mcgrots/main.js` — confirmed
by `grep -in "taxman\|inspector" src/mcgrots/*.js`, no hits outside
`generated/`. § 9 says voices may not be stand-ins; playing McGrot's half of
an exchange with no audible partner isn't a stand-in body, it's half a
conversation with the other speaker missing entirely. These six are not a
"this visit" gap — they need their own characters built first, which is a
G8-scale unit, not something this shape can route around.

## 3. What has to exist for this to be run

In dependency order. Content items need someone to write or record
something; code items need something to sequence it. Nothing below is built
by this document.

1. **[content] McGrot's 18 lines need to be voiced, and none has been
   heard.** `docs/MCGROTS-DIALOGUE.md`: "No audio was rendered or listened
   to." § 9: voices may not be stand-ins. This blocks the complaint half of
   the table outright — every duration for the 9 placed lines above is an
   estimate, not a measurement, until this exists.
2. **[content + code] The eight readings need to exist in McGrot's own
   voice, not the vendor voices G7a shortlisted from.** Costed in
   `docs/g7-voice-collision-costs.md` § "The urgent number": the pipeline
   has no path for this today (`generate-tts.mjs`'s target filter skips
   anything with an `audio` path already on disk, and all eight have one —
   the vendor's), the eight director briefs for McGrot's own reading don't
   exist and are Dan's to write, and the estimated wall-clock render cost is
   98–176s once the pipeline gap is closed. Blocks every reading row in the
   table above from being audibly McGrot rather than a vendor stand-in.
3. **[code] `LOOK_KIND` still defaults to `'none'` in `src/mcgrots/main.js`,
   not S2 aerial flatten.** Settled style per G2 and this brief's "two things
   settled" — flagging the gap between settled and shipped-default is this
   unit's job; fixing the default is `previsit`'s.
4. **[code] Nothing sequences a ten-minute visit today.** `grep -in
   "sequence\|timeline\|director\|schedule" src/mcgrots/main.js` finds
   nothing that plays a scripted list of readings/complaints/beats against a
   clock — `goTo()` walks the actor to a clicked anchor and plays whatever
   that anchor's own trigger is, on demand, not on a schedule. The table in
   § 1 needs a driver: something that, given the ordered list of (anchor,
   audio-or-silence, duration) entries, walks the actor, waits, and fires
   each cue in turn. This is the single largest code gap and the one that
   turns this document from a design into a playable ten minutes.
5. **[code] Pomplé has no scripted beats — only ambient behaviour.**
   `src/mcgrots/pomple.js`: "behaviours are idle settling, head-turn and
   attention... not locomotion." Nothing there takes a cue and does a
   specific, once-off, noticeable thing at a chosen moment. The three
   "Pomplé beat" windows in § 1 are budget, not action — something has to
   decide and build what he actually does at 0:57, 5:16 and (maybe) 9:09.
   This is the one requirement in § 9 with the least existing groundwork
   under it.
6. **[content] The Pomplé beats themselves are undesigned.** Once item 5's
   hook exists, someone has to decide what "something you notice" is —
   a look at the player, a step toward the counter, stealing something.
   Not scoped here; G7a/G8a territory.
