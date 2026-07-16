// Stamp index.html's dev-bundle reference with the bundle's content hash.
//
// The query used to be a hand-edited constant (?v=phase3a), which pinned one
// build in the browser cache forever: reloads kept executing a stale bundle
// while the file on disk — and even a fetch() of the same URL — showed fresh
// code. An hour of phantom-bug forensics bought this script.

import { readFileSync, writeFileSync } from 'fs';
import { createHash } from 'crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const hash = createHash('md5')
  .update(readFileSync(join(root, 'src/dev-bundle.js')))
  .digest('hex')
  .slice(0, 10);

const htmlPath = join(root, 'src/index.html');
const html = readFileSync(htmlPath, 'utf8');
const stamped = html.replace(/dev-bundle\.js\?v=[^"']*/, `dev-bundle.js?v=${hash}`);
if (stamped !== html) {
  writeFileSync(htmlPath, stamped);
  console.log(`index.html bundle ref stamped ?v=${hash}`);
}
