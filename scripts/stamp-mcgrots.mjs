// Stamp src/mcgrots.html's bundle reference with the bundle's content hash.
//
// A deliberate sibling of scripts/stamp-bundle.mjs rather than a parameter on
// it. That script serves the PAUSED street (docs/MCGROTS-ROADMAP.md § 8), and
// twenty lines duplicated is a cheaper price than a shared-module change that
// would have to be measured against the street's suite to be landed honestly.
//
// The hazard it exists to prevent is the one that cost the street an hour: a
// hand-written cache-buster pins one build in the browser forever, so reloads
// keep executing stale code while the file on disk shows fresh.

import { readFileSync, writeFileSync } from 'fs';
import { createHash } from 'crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const hash = createHash('md5')
  .update(readFileSync(join(root, 'src/mcgrots-bundle.js')))
  .digest('hex')
  .slice(0, 10);

const htmlPath = join(root, 'src/mcgrots.html');
const html = readFileSync(htmlPath, 'utf8');
const stamped = html.replace(/mcgrots-bundle\.js\?v=[^"']*/, `mcgrots-bundle.js?v=${hash}`);
if (stamped !== html) {
  writeFileSync(htmlPath, stamped);
  console.log(`mcgrots.html bundle ref stamped ?v=${hash}`);
}
