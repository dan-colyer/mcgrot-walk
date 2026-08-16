# G7 reading shortlist

Reduces 418 comics to 20 defensible candidates for the six-to-eight readings
G7's ten-minute visit needs. Not a decision — the final pick stays Dan's.

**The audio here is not what ships.** All 135 candidate mp3s are in the
**vendor** voices used to transcribe the corpus, not McGrot's. Andrew and Dan
settled on **Algenib** for McGrot on 2026-08-16; none of these clips exist yet
in that voice. Use this document to judge the *writing* and the *length* —
listening to a candidate here tells you nothing about how it will actually
sound in the visit.

## The funnel

Every count below is reproducible from the command shown. Working tree:
`/Users/dan/code/personal/.worktrees/mcgrot-walk/g7a-shortlist`.

| step | count | command |
|---|---|---|
| comics in `assets/catalog.json` | 418 | `node -e "console.log(require('./assets/catalog.json').comics.length)"` |
| carrying an `npc` block (transcribed) | 156 | `.filter(c => c.npc).length` |
| with an `audio` path claimed | 135 | `.filter(c => c.npc && c.audio).length` |
| with that mp3 verified on disk | 135 | `.filter(c => c.npc && c.audio && fs.existsSync('assets/'+c.audio)).length` |
| minus broken / non-strip assets (§ below) | 121 | 14 excluded |
| minus duplicate performances of the same story (§ below) | 115 | 6 excluded |
| **clean candidate pool** | **115** | |
| of which already visually audited by `docs/comic-features-set-a.md` | 62 | cross-reference on ID |
| **shortlist** (top 20 by clip duration from the audited 62, each re-opened and confirmed here) | **20** | |

One correction to the brief's starting table: it reported 136 comics with an
mp3 on disk; the actual count, checked fresh, is **135** — one fewer claimed
`audio` path than expected, and every one of those 135 files exists (0
missing). Not worth chasing further; the difference doesn't change any
downstream number.

Durations are `ffprobe -show_entries format=duration` on each mp3. Across the
115 clean candidates: mean 39.1s, median 37.6s, range 11.5–80.2s.

## What got excluded, and why

**Broken or non-strip assets — 14.** The comic image isn't a real strip:
a screenshot, a photo, or a poster with no panels. Found by cross-referencing
`docs/comic-features-set-a.md` (G6b.1's visual audit of 78 of the 418 comics —
all 78 happen to fall inside this unit's 135-candidate pool) and by opening
images directly.

- Not a comic at all — leftover AI-chat screenshots: `088546cf`, `23c90e9b`
- Not McGrot content — unrelated real photos: `0d4feb3c`, `0e21d212`, `166a4573`
- Meme/sticker composites — a real photo with a flat figure pasted on, no panels: `090b09a1`, `10bd3bab`
- Real photos of merch/covers, not story panels: `156f9d41` (protest-mask composite), `15ff40d0` (van decal), `1af1be83` (newsstand cover), `1f6380d3` (boxed board game — set-A's own text called this "merchandise photo, not a story panel," and I still had it in my working list until I opened the image myself; catch it by rendering the image, not by trusting a table cell in passing)
- Text-only poster, no character artwork: `12f55a90`
- Off-model meme portrait, not a strip panel: `13f572c6`
- Catalog itself flags a bad pairing: `2db7525f` — title is literally *"McGrot — Wrong Page (mismatched source image)"*

Set-A's audit only covers 78 of 418 comics. The other 337 — including 53 of
this pool's 115 clean candidates — have not had this same check applied.
Nothing in the shortlist below is from that unchecked remainder; everything
on it has been opened and looked at.

**Duplicate performances — 6, across 4 distinct stories.** Same underlying
comic, transcribed more than once with a different vendor reading it. The
brief flagged one known pair (`3706c73f`/`5acf1728`) and one more
(`50f0b324`/`51834c74`); checking the quoted verbatim lines across all 135
candidates (the same extraction `scripts/extract-comic-lines.mjs` already
does, reused as a de-dup check) found that both of those pairs are actually
**triples**, and turned up two more duplicate pairs nobody had logged before.
One kept per group (shortest clip), rest excluded:

| story | copies found | kept | excluded |
|---|---|---|---|
| "The Endless Pull-Up" | 3 | `50f0b324` (32.3s) | `231b4a7b`, `51834c74` |
| "The Birth of a Battle Jacket" | 3 | `3706c73f` (37.9s) | `0be124f7`, `5acf1728` |
| "Broken Broth" (new find) | 2 | `0d19a6e5` (21.8s) | `315d8c0e` |
| "The Scottish Grotonials" / zombie-parody trio (new finds) | 2 each | `2dd9394b`, `2647648d` | `2db7525f`* , `22871dff` |

\* `2db7525f` is the "Wrong Page" mismatch already excluded above, so it costs
nothing extra here — flagging it in both places so the count stays honest
about why it's gone.

The zombie-parody pair (`22871dff`/`2647648d`, "28 Grots Later: Part Deux" /
"Night of the Leith Deadt: Part 2: Part 2") was already logged as a
near-duplicate in `docs/comic-features-set-a.md` under two different titles;
it just wasn't in the brief's "don't put both on the list" pair.

**Not on the shortlist despite being a clean asset:** `2aef315d`
("Uniform o' the Republic") is a single full-body poster portrait, not a
multi-panel strip — no story to read aloud in the way the other 20 have.
Judgement call, not a hard exclusion; worth a second look if the eight need a
costume-variant beat.

## The shortlist — 20 candidates

Sorted by clip duration, ascending. This is the sort I can defend: duration is
the hard constraint on a ten-minute visit, so the tightest reads are the ones
that buy the most flexibility when assembling six to eight. All 20 images were
opened and confirmed as genuine multi-panel McGrot strips, not just checked by
title.

| id | title | duration | why it's a candidate |
|---|---|---|---|
| `2b2110bb` | 28 Grots Later | 16.8s | Shortest clean clip; three-panel zombie-parody punchline, complete arc |
| `2ad5f32c` | Fleet Academy | 18.6s | Star Trek pastiche poster-strip, strong single image, self-contained gag |
| `19f35bc7` | McGrot-Scree Ski | 19.0s | Six clean panels, fastest-reading dialogue in the set |
| `1c835438` | Peeled Croissants | 21.5s | Complete four-beat gag: pitch, complaint, police warning, punchline |
| `0d19a6e5` | Broken Broth | 21.8s | Shorter of the two "Broken Broth" performances; tight injury-gag arc |
| `03347596` | The Dandy Crossover | 21.9s | Comic-crossover gag (Dandy character cameo), one line of dialogue from McGrot, quick |
| `1644c350` | Threads Left On | 22.0s | Bleaker tone than most — post-apocalyptic soup-kitchen strip, six panels |
| `24946925` | The August Invasion | 22.5s | Fringe-festival crowd gag, six panels, ends on a clean punchline |
| `0121c47c` | The Extra Side | 22.8s | Liminal-space gag on the van itself, self-contained and odd |
| `092d29b1` | The No Phase / The Why Phase | 22.8s | Repetition-structure gag, plays well as a short beat |
| `0021ea9d` | The Man in the Second Beret | 23.6s | Doppelganger/unease gag, atmospheric rather than jokey — good tonal variety |
| `022bcde2` | The Leith Grand Prix | 23.9s | Kart-racing parody, single striking image, no dialogue to garble |
| `0c83063f` | Flea Offers | 24.0s | Pomplé-centric strip (McGrot only in the last two panels) — good if the eight need more dog |
| `22251ca2` | Lasso of the Links | 25.7s | Western-parody six-panel strip, sepia palette, distinct visual register |
| `08d846d0` | The Laird's Parlour Parade | 25.8s | Period/manor gag, horse-drawn cart, clean six-panel arc |
| `11822fc8` | The AI Slop Terror | 25.9s | Meta gag about AI training data — knowing self-reference, four panels |
| `11529e6b` | McGrot vs. The Mighty Boosh | 26.4s | Named-crossover gag, recognisable IP reference, six panels |
| `00f88d65` | Bunion Broth | 26.8s | Body-horror food gag, six panels, consistent tone with the Gullet's whole shtick |
| `1f0b7125` | Thress Threshold | 28.1s | Fourth-wall/dread ending (cuts to a hooded figure), tonal outlier worth having |
| `0738152e` | The Bayeux Tastie-Pie | 28.4s | Bayeux Tapestry pastiche — the most visually distinct art style in the pool |

Total if all 20 were used: 468.2s (7.8 min) — confirms these 20 are the tight
end of the distribution; eight of them fit comfortably inside ten minutes with
plenty of room left for walking and McGrot's complaints.

## A proposed set of eight

Not a decision. A worked example, spread across the 20 for tonal and visual
variety rather than just picking the eight shortest, to show the arithmetic
holds either way.

| id | title | duration |
|---|---|---|
| `2b2110bb` | 28 Grots Later | 16.8s |
| `19f35bc7` | McGrot-Scree Ski | 19.0s |
| `03347596` | The Dandy Crossover | 21.9s |
| `0121c47c` | The Extra Side | 22.8s |
| `022bcde2` | The Leith Grand Prix | 23.9s |
| `08d846d0` | The Laird's Parlour Parade | 25.8s |
| `00f88d65` | Bunion Broth | 26.8s |
| `0738152e` | The Bayeux Tastie-Pie | 28.4s |

**Total: 185.4s — 3.1 minutes.** Against a ten-minute visit, that leaves
roughly 6.9 minutes for walking between anchors, McGrot's complaints in the
gaps, and Pomplé doing something noticed — the roadmap's other four
requirements for the visit to count (§ 9). The arithmetic works with slack to
spare; if Dan wants longer or fewer readings, there's room in either
direction before it gets tight.

## Reproducing this

```bash
node -e "
const c = require('./assets/catalog.json').comics;
const fs = require('fs');
const withNpc = c.filter(x => x.npc);
const withAudio = withNpc.filter(x => x.audio && fs.existsSync('assets/'+x.audio));
console.log(withNpc.length, withAudio.length);
"
ffprobe -v error -show_entries format=duration -of csv=p=0 assets/audio/<id>.mp3
```

Verbatim-quoted lines above are exactly as garbled in the source comics, per
the project's verbatim rule — nothing has been corrected.
