# G7 — nineteen ideas, and what stops each one

Written 2026-08-17. No gate, no measurement, no acceptance criterion — the
output is ideas. Every entry follows § 12's convention: **the first obstacle,
not a plan.** The order is thematic grouping, not priority; nobody has ranked
these and this document does not.

Nothing here is proposed as work. Four workers were live in `src/mcgrots/` and
`scripts/` while it was written (sequencer, Pomplé beats, the Taxman scene,
ambience) and entries that touch their files say so.

## What the images gave that the documents did not

Eleven comics were opened rather than read about. Three findings shaped the
list below and none of them are in any doc:

**The corpus's signature move is not a mangled word. It is the same sign read
twice, disagreeing with itself.** `08d846d0` transcribes one cart sign as "The
Gullet. Mobile Diplomacy Unit." and then as "Bee. Glet D Cip. Unio.".
`03347596` gives "Cross-Univecse Compliance Unit." and then "...Crossiwess
Compliance Unit.". Both are in the chosen eight. The transcriber looked at the
same object twice and came back with different answers, and that is funnier
than any single garble.

**The corpus stutters.** `assets/readings.json` carries 21 adjacent identical
phrases; `66f4b1a4` repeats a whole panel, art and words. One of the 21 is in a
chosen reading — `00f88d65` says "Bunion Broth." twice.

**The comics are format pastiches, not just drawings.** A Bayeux tapestry with
fake Latin (`0738152e`), a D&D character sheet with ability scores
(`3de3b7ca`), a Mario Kart screenshot with a working HUD (`022bcde2`), a
toddler's activity board (`5f1b8828`), a 3D CGI render (`66f4b1a4`), a protest
poster (`13dc6c45`). The corpus has already drawn most of the furniture a game
needs.

---

## A. What the garbling can still do

### A1. The game adopts the double-sign device

The corpus reads a sign, then reads it again and gets it wrong. Any text the
game itself shows twice could do the same — a nameplate seen from the kerb and
again from the counter, the van's fascia at the start of the visit and at the
end. The joke is the machine's confidence, not the misspelling.

**First obstacle.** The verbatim rule protects quoted comic text and says
nothing about text the game authors, so a degrading garbler is new writing and
needs a ruling on whether that is homage or invention. Second-order: no game
text is displayed twice today, so something has to repeat before it can differ.

*Touches:* a small new module, plus whatever draws text. *Serves:* after the
kill criterion — this is a returning-player joke.

### A2. Restore the stutter in `00f88d65`

The transcription says "Bunion Broth." twice. G7e's McGrot prompt collapsed it
to one and added an authored answering line. Reading it twice, flat, is the
machine becoming briefly audible inside a human performance.

**First obstacle.** It needs a ruling on which way the verbatim rule cuts. The
brief's author already judged the repeat to be noise, and disagreeing means a
new director brief plus a re-render — briefs are Dan's by settled convention,
so the cost is his time, not a worker's.

*Touches:* `scripts/tts-prompts/mcgrot/00f88d65.txt`, content only.
*Serves:* the kill criterion — it is one of the eight readings.

### A3. One reading stops dead, because the page ran out

`00f88d65`'s last speech bubble is physically cut by the bottom edge of the
image — "I...could add pepper?" runs off the page. The reading currently
completes it and answers it. Letting exactly one reading in eight stop
mid-thought is a joke the source makes and the game never does.

**First obstacle.** Which comics are truncated is in no data file; it is a
property of the images, and only an image pass finds them. One instance is
known because the page was opened for this document.

*Touches:* content, one prompt. *Serves:* the kill criterion.

### A4. He reads it badly, once

All eight briefs carry the same instruction: pronounce the nonsense
"phonetically with complete confidence". The opposite is funnier at least once
— he hits `0738152e`'s fake Latin ("SVQVDIS ATRVM MEDVLLAAM"), stalls, has a
go, gives up, carries on.

**First obstacle.** It contradicts a settled instruction present in all eight
briefs, so it is a deliberate exception rather than a tweak, and the exception
has to be authored by the person who wrote the rule.

*Touches:* content, one prompt. *Serves:* the kill criterion.

### A5. Pomplé's twelve signs have never been seen

G5b wrote twelve handwritten-sign lines, in capitals, deliberately short
because a sign has to read across a pavement. Nothing renders one. A dog
holding "THE HAT IS NOT A LICENSE." during a silence is a beat that costs no
audio at all.

**First obstacle.** Legibility at the distance the seated anchors actually sit,
which is a render question, not a writing one — and the canvas-bake gotcha
applies (raw sRGB bytes, or ACES doubles the conversion and the lettering goes
to silhouette).

*Touches:* `pomple.js` and a texture bake. **`pomple.js` belongs to the live
G7i worker** — this is an extension for that unit or for the one after it.
*Serves:* the kill criterion.

### A6. One input, and the answer is "Naw."

`mcgrot-03` is a complete line — "Naw." — and the visit shape leaves it unplaced
because nothing asks him a question. Give the player one key, or one thing on
the counter to press. Press it whenever you like and he says "Naw."

**First obstacle.** `audio.js` is one-voice-at-a-time by design and the
sequencer owns the channel, so an unscheduled line needs a rule for what it
interrupts and what it does not. A cooldown is also needed or the player empties
the twelve lines in a minute.

*Touches:* `main.js` / `visit.js`, both currently the sequencer's.
*Serves:* the kill criterion. The clip is already rendered (G7g), so this is the
cheapest interaction available to the project.

---

## B. The other 98%

### B1. 261 comics have never been transcribed, and do not need to be

`assets/catalog.json`: 418 comics, 157 with a title, 136 with audio. The
remaining 261 are finished artwork — 25.3 MB of it — that costs nothing to
*show*. Pinned to the van, stacked on the counter, taped to a hoarding, blowing
along the kerb. The street already proved the pattern in `litter.js`.

**First obstacle.** Nobody has looked at them. What is displayed carries the
same sensitivity rules as what is read, and the corpus does contain lines that
would not survive a `LEITH.md` reading — so the prerequisite is an
image-audit pass over 261 files, which is the unit, not the module. G6b.1 needed two
workers to read 156.

*Touches:* a new module, after an audit unit. *Serves:* after.

### B2. The page you are hearing is on the counter

Eight readings, 16–28 seconds each, and during them there is nothing in frame
connected to the words. The image exists, is already an asset, and is the one
thing that explains what the voice is doing.

**First obstacle.** It argues with `page.js`'s S4 premise — the screen is
already framed as a panel on a comic page — and a comic inside a comic may read
as clutter rather than as depth. `LOOK_KIND` still defaults to `'none'`, so
both would have to be rendered before the judgement can be made.

*Touches:* `van.js` or a new prop module. *Serves:* the kill criterion.

### B3. The grade follows the comic being read

`keys.js` measures five per-page colour keys off five real comics, ordered ink
to paper, and states flatly that no comic uses twelve colours. None of the eight
readings has a measured key, and `scripts/comic-palette.mjs` exists to measure
one. While the Bayeux page plays, the world sits in the Bayeux page's own five
swatches.

**First obstacle.** A grade change with no visible cause reads as a rendering
fault, so the transition has to be slow enough to be felt and not seen — and
that number is a judgement no measurement gives you. It also reopens G2, which
is settled, and moves every golden that has a grade in it.

*Touches:* `style.js`, `keys.js`. *Serves:* the kill criterion — it is the
cheapest answer to "the picture looks identical for ten minutes".

### B4. The corpus already drew the interface

`022bcde2` is a fake racing-game screenshot with a working HUD — "1st", "LAP
/3", an item icon, a lap counter. `3de3b7ca` is a full D&D character sheet for
McGrot: class, alignment, ability scores, equipment, "Every soul deserves
sauce." `card.js` is deliberately unstyled and its header says G7 owns how it
eventually looks. Take the title card and any furniture from the pages that
already drew them.

**First obstacle.** Both are raster images at comic resolution, so lifting them
means either redrawing the layout (authoring, not quoting) or cropping the
original (quoting, but at whatever resolution the JPEG has). Which of those the
verbatim rule prefers is not settled.

*Touches:* `card.js`, `page.js`. *Serves:* the kill criterion.

---

## C. Doing something

### C1. The activity board

`5f1b8828` draws a McGrot toddler busy-board: sliding latches, an ON/OFF
switch, a rotary dial marked 8, a zip, a green cylinder marked RING, four McGrot
heads in a row. It is an interactive object the source designed, mounted at hand
height, requiring no fiction to justify.

**First obstacle.** The project has no "touch a thing" input model. A click
currently means "walk to that anchor" (`goTo()`), and giving a click a second
meaning is a design change to the input layer, not a prop.

*Touches:* a new module plus input. *Serves:* after.

### C2. Order something

The fiction hands the game one verb free: you are standing at a food stall and
nobody has served you. The smallest version is a menu board with three dishes
quoted from the pages — "Bunion Broth", "Fermented Narwhal Custard",
"Grot-Cooled Carry System" — and a line from McGrot for each.

**First obstacle.** Three new lines is three new director briefs, and briefs are
Dan's by settled convention, so the cost is his time rather than a worker's.
Second: the dish names must be quoted off the pages rather than invented, which
constrains the menu to what the corpus happens to have named.

*Touches:* a new prop, content, three clips. *Serves:* the kill criterion.

---

## D. The street, and the clock

### D1. Match day

`LEITH.md`: on match day the whole crowd flows east and the vendors lose their
audience for ninety minutes. The rota is already a pure function of wall-clock
time, so a date test costs almost nothing, and a visit where nobody comes and
McGrot talks to the dog is a different and possibly better ten minutes.

**First obstacle.** It makes the visit worse by construction, and the kill
criterion is *one* visit. A variant that can be empty is a way to fail the test
by luck rather than on merit, so it has to be date-pinned and opt-in before it
can be judged at all.

*Touches:* `rota.js`. *Serves:* after.

### D2. The gulls

`LEITH.md` calls them the apex predator of this apocalypse. A gull cry carries a
silence on its own, and a gull taking something off the counter is a cheaper
"something you notice" than anything the dog can be made to do.

**First obstacle.** G7k is synthesising the ambient bed right now. This belongs
inside that unit or nowhere — a second audio module competing with the first is
exactly the failure `audio.js`'s one-voice rule exists to prevent.

*Touches:* `audio.js` / the G7k ambience module, live. *Serves:* the kill
criterion, as a note to that worker rather than as a unit.

### D3. The stall's own name is different every day

`8fd983a7` letters the cart "TUSKED TREATS". `08d846d0` transcribes its sign
three different ways in one strip. The standard is "THE GULLET". The fascia is a
texture and the day is already a seed — `mcgrotIsIn(dayKey)` is the shape, and
it costs nothing on the wire.

**Extends § 12.3** (costume varies by day) from the leads to their props, and
the obstacle is a different one. **First obstacle:** 12.3 came out of a
measurement — two workers sorted the leads' features into stable and variant
buckets with counts. Nothing equivalent exists for signage; the variants are in
the drawings and harvesting them is an image-reading unit. And a one-visit
criterion cannot see day-variance at all, so it earns nothing until someone
comes back a second time.

*Touches:* `van.js` plus a data file. *Serves:* after.

---

## E. Cast

### E1. McGrot's faither

`d2c20025`, "The Elder Arrives": an older McGrot in a feathered tam o' shanter
with a white beard, judging the broth. "This ladle built Leith." "Progress,
faither. Folk want layers." "Audacity... approved." He is the only figure in the
corpus who outranks McGrot, and he is not in `CANON.md`.

**First obstacle.** He is a second humanoid at the pitch, and the corpus's own
warning applies — `13dc6c45` puts a crowd of orange berets and green plaid on
figures who are explicitly not McGrot. A near-identical older figure is the
worst case for that confusion, and G8a has not built the first one yet.

*Touches:* `CANON.md`, then G8-scale asset work. *Serves:* after.

### E2. Cut one of the two bureaucrats

With the Taxman being built, the game has two officials whose joke is the same
one: a register that cannot absorb McGrot's, resolving nothing. Two of that is
one joke twice, and the cost of cutting is fifteen written lines that never get
heard.

**First obstacle.** The choice has been made by build order rather than by
reading. The Inspector's lines are arguably the better half — "The risk
assessment is thorough; the risk has declined to participate." is the best
compact line in the corpus and `MCGROTS-DIALOGUE.md` says so — so the honest cut
may be the Taxman, who is the one already in flight. Deciding is free now and
expensive once G8 gives either one a body.

*Touches:* nothing; it is a decision. *Serves:* the kill criterion, indirectly —
one strong scene beats two thin ones.

---

## F. What this project actually is

### F1. The scripted visit and the wall-clock world are two different games

§ 6's discipline is that the world is a pure function of the clock, so *any* ten
minutes is a valid visit — you walk up to a busker and get whatever is happening.
G7h is building the opposite: a fixed 28-cue timeline. Both are defensible.
Only one of them is the product.

**First obstacle.** An unscripted visit has no guarantee of containing a good
reading, which is precisely why G7h exists — so the question is not which is
better but whether the scripted visit is a *demo of* the unscripted one or a
*replacement for* it. The answer changes what G9 ships and whether the
multiplayer discipline in § 6 is still buying anything.

*Touches:* nothing; it is a decision, and it wants making before G9.
*Serves:* how the kill criterion gets interpreted.

### F2. A reading should already be underway when you sit down

Every reading in the visit shape happens with the player parked at an anchor,
waiting. `audio.js` already seeks to `elapsed` on every arrival — it was built
so a late arrival hears the middle of a file rather than its start — and nothing
in the visit uses that. Walking up to something already in progress is what
arriving at a busker sounds like.

**First obstacle.** `g7-visit-shape.md` § 1 is a running sum of durations, so
its cues are sequential by construction; a reading that overlaps a walk needs
cues carrying start times instead of durations. That is a change to the cue
format, which the live sequencer owns.

*Touches:* `visit.js`, live. *Serves:* the kill criterion.

### F3. Six readings, not eight

The shape spends 185.4s of 600 on eight readings and 338.0s on silence. Six
would leave the same silence with more room around each one, and the weakest
pairings in § 2 of the visit shape are already flagged as weak by the document
itself (`mcgrot-08` against the Grand Prix strip: "no connection").

**First obstacle.** All eight are rendered in Algenib and Dan has heard them and
is happy with them, and the roadmap says revisit only if one reads badly *in the
sequenced visit*. So this cannot be decided before the first full run — which
makes it a question to hold for the judging session rather than an idea to act
on.

*Touches:* `visit.js` data only. *Serves:* the kill criterion, at judging time.

---

## What was deliberately not proposed

- Anything already in flight: the sequencer, Pomplé's beats, the Taxman scene,
  the ambient bed.
- A restatement of § 12.1 (soundtrack), § 12.2 (camera control) or § 12.3
  (costume by day). D3 extends 12.3 and says so.
- Anything requiring a deploy, a spend, or a push. Those are Dan's call and are
  named as such where an idea implies one — C2 and A2/A3/A4 all cost model
  calls, and all four cost Dan's authoring time before any worker can start.
