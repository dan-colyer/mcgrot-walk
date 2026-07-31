# Partially transcribed batches — read before starting batch 5, 7 or 8

A first wave of workers on batches 5-8 was cut short mid-run (2026-07-29). They
left **21 finished `scripts/tts-prompts/<id>.txt` files with no batch JSON**, so
`merge-batches.mjs` cannot see them and the comics they cover still count as
untranscribed.

| batch | transcribed | remaining |
|---|---|---|
| batch-5 | 6 / 20 | 14 |
| batch-6 | 0 / 20 | 20 |
| batch-7 | 7 / 20 | 13 |
| batch-8 | 8 / 20 | 12 |

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
