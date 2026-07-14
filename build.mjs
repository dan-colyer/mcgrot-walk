// Build the self-contained single-file HTML (for Claude Artifact / anywhere).
// Usage: node build.mjs          →  dist/mcgrot-walk.html   (3-comic artifact, all inlined)
//        node build.mjs --site   →  dist-site/              (full 418-comic site, assets/ tree)
import { readFileSync, writeFileSync, mkdirSync, cpSync, rmSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { build } from 'esbuild';

const root = dirname(fileURLToPath(import.meta.url));
const MIME = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', mp3: 'audio/mpeg' };

// Matches the dev bundle script tag (any attribute order/spacing). Both builds
// swap it out — the artifact for inlined JS, the site for a bundle.js src.
const tagRe = /<script[^>]*src=["']\.?\/?dev-bundle\.js[^"']*["'][^>]*>\s*<\/script>/;

const dataUri = relPath => {
  const buf = readFileSync(join(root, 'assets', relPath));
  const ext = relPath.split('.').pop().toLowerCase();
  return `data:${MIME[ext]};base64,${buf.toString('base64')}`;
};

const manifest = JSON.parse(readFileSync(join(root, 'assets/manifest.json'), 'utf8'));
const leith = JSON.parse(readFileSync(join(root, 'assets/leith.json'), 'utf8'));

// Dispatch AFTER manifest/tagRe exist — buildSite() closes over both.
if (process.argv.includes('--site')) {
  await buildSite();
  process.exit(0);
}

const images = {}, audio = {};
for (const c of manifest.comics) {
  images[c.image] = dataUri(c.image);
  images[c.npc.face] = dataUri(c.npc.face);
  audio[c.audio] = dataUri(c.audio);
}

const prelude = `window.MCGROT_ASSETS=${JSON.stringify({ manifest, leith, images, audio })};`;

const bundle = await build({
  entryPoints: [join(root, 'src/main.js')],
  bundle: true,
  minify: true,
  write: false,
  format: 'iife',
});
const js = bundle.outputFiles[0].text;

let html = readFileSync(join(root, 'src/index.html'), 'utf8');
if (!tagRe.test(html)) { console.error('dev-bundle.js script tag not found in src/index.html'); process.exit(1); }
html = html.replace(tagRe, () => `<script>${prelude}</script>\n<script>${js}</script>`);

mkdirSync(join(root, 'dist'), { recursive: true });
const out = join(root, 'dist/mcgrot-walk.html');
writeFileSync(out, html);

// Artifact variant: claude.ai wraps content in its own doctype/head/body
// skeleton, so emit just <title> + our head extras + body content as a fragment.
const headInner = html.match(/<head>([\s\S]*?)<\/head>/)[1]
  .replace(/<meta charset[^>]*>\s*/i, '')
  .replace(/<meta name="viewport"[^>]*>\s*/i, '');
const bodyInner = html.match(/<body>([\s\S]*?)<\/body>/)[1];
writeFileSync(join(root, 'dist/mcgrot-walk-artifact.html'), headInner + '\n' + bodyInner);

console.log(`dist/mcgrot-walk.html — ${(html.length / 1024 / 1024).toFixed(2)} MB (js ${(js.length / 1024).toFixed(0)}KB, images ${(Object.values(images).join('').length / 1024 / 1024).toFixed(2)}MB, audio ${(Object.values(audio).join('').length / 1024 / 1024).toFixed(2)}MB)`);

// ---------------------------------------------------------------------------
// --site: the full 418-comic build for GitHub Pages. Nothing is inlined; the
// runtime fetches assets/ relatively (see src/assets.js). Only RUNTIME assets
// ship — the cached Commons originals and per-tile crops stay local.
// ---------------------------------------------------------------------------

async function buildSite() {
  const out = join(root, 'dist-site');
  rmSync(out, { recursive: true, force: true });
  mkdirSync(join(out, 'assets'), { recursive: true });

  const siteBundle = await build({
    entryPoints: [join(root, 'src/main.js')],
    bundle: true,
    minify: true,
    write: false,
    format: 'iife',
  });
  writeFileSync(join(out, 'bundle.js'), siteBundle.outputFiles[0].text);

  // Runtime assets only. shopfronts/{raw,tiles} are build intermediates (~32MB)
  // and must not ship; the engine reads shopfronts/atlas.{jpg,json}.
  const copy = (rel) => {
    const src = join(root, 'assets', rel);
    if (existsSync(src)) cpSync(src, join(out, 'assets', rel), { recursive: true });
  };
  ['manifest.json', 'leith.json', 'catalog.json', 'comics', 'audio', 'faces'].forEach(copy);
  mkdirSync(join(out, 'assets/shopfronts'), { recursive: true });
  ['shopfronts/atlas.jpg', 'shopfronts/atlas.json', 'shopfronts/credits.json'].forEach(copy);
  // The 3 original v1 comics are still referenced by manifest.json.
  for (const c of manifest.comics) copy(c.image);

  let siteHtml = readFileSync(join(root, 'src/index.html'), 'utf8')
    .replace(tagRe, '<script src="bundle.js"></script>')
    // CC BY-SA / CC BY REQUIRE visible attribution — this link is not optional.
    .replace(
      '<div id="title-enter">CLICK TO ENTER</div>',
      '<div id="title-enter">CLICK TO ENTER</div>\n' +
        '    <p id="title-credits"><a href="credits.html" onclick="event.stopPropagation()" ' +
        'style="color:#9aa08a;font-size:13px;text-decoration:underline">Credits &amp; image licences</a></p>'
    );
  writeFileSync(join(out, 'index.html'), siteHtml);
  writeFileSync(join(out, 'credits.html'), renderCredits());
  writeFileSync(join(out, '.nojekyll'), ''); // stop Pages' Jekyll from eating asset dirs

  console.log(`dist-site/ built — open credits.html to check attribution`);
}

function renderCredits() {
  const read = (p) => (existsSync(join(root, p)) ? JSON.parse(readFileSync(join(root, p), 'utf8')) : {});
  const shopfronts = read('assets/shopfronts/credits.json');
  const faces = read('assets/faces/credits.json');
  const esc = (s) => String(s ?? '').replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));

  const shopRows = Object.entries(shopfronts).map(([slug, c]) =>
    `<li><a href="${esc(c.pageUrl)}">${esc(c.title)}</a> — ${esc(c.author)} — <em>${esc(c.license)}</em></li>`
  ).join('\n');

  const faceRows = Object.entries(faces).map(([slug, c]) =>
    `<li>${esc(c.character || slug)}${c.show ? ` — ${esc(c.show)}` : ''} — <em>${esc(c.credit || c.license)}</em></li>`
  ).join('\n');

  return `<!doctype html>
<meta charset="utf-8">
<title>McGrot Walk — Credits</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  body { background:#0d0e0a; color:#c8c8b8; font:15px/1.6 ui-monospace,Menlo,monospace; margin:0; padding:40px 24px; }
  main { max-width: 820px; margin: 0 auto; }
  h1 { color:#e8e4d0; letter-spacing:0.08em; }
  h2 { color:#b9c0a0; margin-top:2.2em; border-bottom:1px solid #2b2e24; padding-bottom:6px; }
  a { color:#9ab07a; }
  ul { padding-left: 1.1em; }
  li { margin-bottom: 6px; }
  .back { display:inline-block; margin-bottom:24px; }
</style>
<main>
  <a class="back" href="index.html">&larr; back to the Walk</a>
  <h1>Credits</h1>
  <p>McGrot Walk is a non-commercial art project. The comics are by their original author;
     the street geometry is derived from OpenStreetMap.</p>

  <h2>Shopfront photographs (${Object.keys(shopfronts).length})</h2>
  <p>Real Leith Walk shopfronts, via Wikimedia Commons — many originally from
     <a href="https://www.geograph.org.uk/">geograph.org.uk</a>. Reused under their
     Creative Commons licences; each is credited to its photographer below.</p>
  <ul>
${shopRows}
  </ul>

  <h2>NPC face textures (${Object.keys(faces).length})</h2>
  <p>Temporary placeholders — franchise stills used for identification in a
     non-commercial fan project. All rights remain with their respective owners.</p>
  <ul>
${faceRows}
  </ul>

  <h2>Street geometry</h2>
  <p>Building footprints and street centrelines &copy; OpenStreetMap contributors,
     <a href="https://opendatacommons.org/licenses/odbl/">ODbL</a>.</p>
</main>
`;
}
