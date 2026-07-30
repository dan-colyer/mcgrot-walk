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

You still need to write the batch JSON covering **every** item in your batch,
including the ones already transcribed — NPC name, blurb, `voiceName`, accent and
build live only in that file, and nothing downstream works without it. Keep the
`voiceStart` rotation running across the whole batch in assignment order, not just
the items you transcribed yourself.

Delete this file once batches 5-8 are complete.
