// Extract each comic's VERBATIM quoted lines from its TTS prompt file into
// assets/comic-lines.json, so Leithers can quote the actual comic text in
// their comments at runtime (the verbatim rule applies to them too — the
// wrapper phrasing is theirs, the quote is sacred).
//
//   node scripts/extract-comic-lines.mjs
//
// The prompt files are the source of truth the TTS reads from; the quoted
// "..." segments inside them ARE the comic's printed text.

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const catalog = JSON.parse(readFileSync(join(root, 'assets/catalog.json'), 'utf8'));

const out = {};
let comics = 0;
let lines = 0;
for (const c of catalog.comics) {
  if (!c.promptFile) continue;
  const p = join(root, 'scripts/tts-prompts', c.promptFile);
  if (!existsSync(p)) continue;
  const txt = readFileSync(p, 'utf8');
  // Only the character's read-aloud section, not the director's notes —
  // notes contain quoted STYLE words, not comic text. The script section
  // starts after the blank line following the notes header block.
  const body = txt.split(/\n\s*\n/).slice(1).join('\n') || txt;
  const found = [...body.matchAll(/"([^"\n]{8,70})"/g)].map((m) => m[1].trim());
  const uniq = [...new Set(found)];
  if (uniq.length) {
    out[c.id] = uniq;
    comics++;
    lines += uniq.length;
  }
}

writeFileSync(join(root, 'assets/comic-lines.json'), JSON.stringify(out));
console.log(`comic-lines.json: ${lines} verbatim lines across ${comics} comics`);
