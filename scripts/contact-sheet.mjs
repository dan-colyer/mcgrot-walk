// Contact sheets for eyeballing the façade pipeline.
//
//   node scripts/contact-sheet.mjs           # rectified façades + band tiles
//   node scripts/contact-sheet.mjs rect      # just the rectified façades
//   node scripts/contact-sheet.mjs bands     # just the 512×256 tiles
//
// This exists because every serious bug in this pipeline so far was invisible
// in the code and obvious in a picture: the atlas that came out 3/4 black, the
// signage that rendered mirror-reversed, the shopfronts full of blue sky. Read
// the output with the Read tool — don't trust the exit code.
//
// xstack with explicit pixel offsets, NEVER the `tile` filter: `tile` silently
// truncates an image-sequence input and you get a half-black sheet with a
// zero exit status.

import { readdirSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = join(root, 'assets/shopfronts/qa');
mkdirSync(OUT_DIR, { recursive: true });

const which = process.argv[2] || 'all';

function sheet(dir, outName, cellW, cellH, cols) {
  const files = readdirSync(join(root, dir)).filter((f) => f.endsWith('.jpg')).sort();
  if (!files.length) { console.log(`${dir}: nothing to sheet`); return; }

  // Batch so a single sheet never exceeds a sane decode size.
  const perSheet = cols * 6;
  const batches = [];
  for (let i = 0; i < files.length; i += perSheet) batches.push(files.slice(i, i + perSheet));

  batches.forEach((batch, bi) => {
    const rows = Math.ceil(batch.length / cols);
    const inputs = batch.flatMap((f) => ['-i', join(root, dir, f)]);
    // Every cell must be forced to an identical size or xstack refuses to stack.
    const pre = batch
      .map((_, i) => `[${i}:v]scale=${cellW}:${cellH}:force_original_aspect_ratio=decrease,pad=${cellW}:${cellH}:(ow-iw)/2:(oh-ih)/2:color=0x202020,drawbox=c=0x00ff00@0.6:t=2[c${i}]`)
      .join(';');
    const chain = batch.map((_, i) => `[c${i}]`).join('');
    const layout = batch
      .map((_, i) => `${(i % cols) * cellW}_${Math.floor(i / cols) * cellH}`)
      .join('|');

    const out = join(OUT_DIR, batches.length > 1 ? `${outName}-${bi}.jpg` : `${outName}.jpg`);
    execFileSync('ffmpeg', [
      '-loglevel', 'error', '-y', ...inputs,
      '-filter_complex', `${pre};${chain}xstack=inputs=${batch.length}:layout=${layout}`,
      '-frames:v', '1', '-q:v', '4', out,
    ]);

    // Trust nothing: assert the sheet is the size the layout implies.
    const dims = execFileSync('ffprobe', [
      '-v', 'error', '-select_streams', 'v:0',
      '-show_entries', 'stream=width,height', '-of', 'csv=p=0', out,
    ]).toString().trim();
    // A short final batch makes a narrower sheet — xstack sizes to the widest
    // occupied column, not to `cols`.
    const usedCols = Math.min(cols, batch.length);
    const want = `${usedCols * cellW},${rows * cellH}`;
    if (dims !== want) {
      console.error(`ABORT ${out}: got ${dims}, expected ${want} — cells were dropped`);
      process.exit(1);
    }
    console.log(`${out}  (${batch.length} cells, ${dims})`);
  });
}

if (which === 'all' || which === 'rect') sheet('assets/shopfronts/rect', 'sheet-rect', 320, 320, 7);
if (which === 'all' || which === 'bands') sheet('assets/shopfronts/bands', 'sheet-bands', 256, 128, 8);
