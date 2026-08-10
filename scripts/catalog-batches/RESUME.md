# Partially transcribed batches — read before starting batch 5, 7 or 8

A first wave of workers on batches 5-8 was cut short mid-run (2026-07-29),
leaving these four batches part-transcribed.

**Corrected 2026-08-08 by measurement.** This file used to open by saying the
wave left 21 finished `scripts/tts-prompts/<id>.txt` files with no batch JSON,
invisible to `merge-batches.mjs` and still counting as untranscribed. That was
true when it was written and is not true now: those 21 were merged. Compared
directory against catalog today — 125 `.txt` files on disk, 125 catalog entries
with a `promptFile`, **zero orphans in either direction**. There is no free
transcription sitting unclaimed; the table below is the real remaining work.

Recounted 2026-08-08 against the catalog rather than from this file's own
history — batch-5's row was off by one.

| batch | transcribed | remaining |
|---|---|---|
| batch-5 | 7 / 20 | 13 |
| batch-6 | 0 / 20 | 20 |
| batch-7 | 7 / 20 | 13 |
| batch-8 | 8 / 20 | 12 |

**And the rest of the factory has not started.** Batches 9-20 are 0/20 each
(batch-20 is 0/15). Across all 21 batches: **125 of 418 transcribed, 293
remaining**. Reproduce the count with:

```bash
node -e "
const a=require('./scripts/catalog-batches/assignments.json');
const c=require('./assets/catalog.json');
const done=new Set(c.comics.filter(x=>x.promptFile).map(x=>x.id));
for(const b of a.batches){const l=b.items.filter(i=>!done.has(i.id)).length;
if(l)console.log('batch-'+b.batchId,(b.items.length-l)+'/'+b.items.length,'done,',l,'remaining');}"
```

**On cost.** The wave that stopped here died on a monthly Claude spend limit,
and the shape is why: a factory of parallel subagents, each carrying its own
context overhead, all launched at once. Transcription itself is cheap —
reading an image and writing a text file — and a handful done inline in an
ordinary session costs a fraction of a subagent wave. The Gemini TTS free
allowance is NOT the constraint and never was: it currently goes unused every
day because the voice queue is empty (125 transcribed, 125 voiced, zero in
between). Transcription is what feeds it.

⚠ **A landed batch moves goldens.** Each new entry gives an NPC a name, a
blurb and a readable comic, so more of them render a nameplate and a subtitle
— 103 → 124 moved 23 goldens by 0.8-5.6% and `skyline` by 155 draw calls. Run
`npm run smoke` after a batch lands, and expect a recapture.

**If you are picking up one of these batches:** check whether
`scripts/tts-prompts/<id>.txt` already exists before reading a comic. Reading and
transcribing the source image is the expensive step; those files are complete and
in the house format. Reuse them as-is and spend your effort on the items that have
none.

`batch-5.json`, `batch-7.json` and `batch-8.json` **already exist and are
partial** — they cover only the items above, so those comics are live in the
catalog and their audio is rendered. **Extend** them with your remaining items;
do not overwrite them, or you will orphan finished audio.

The `voiceName` rotation is already assigned for the existing entries by
assignment index (`voiceStart + index`, wrapping at 30). Continue that same
indexing for the items you add, so no two NPCs in a batch share a voice.

`batch-6.json` does not exist — batch 6 has nothing transcribed at all, so write
it from scratch in the normal way.

Delete this file once batches 5-8 are complete.
