import { readdir, readFile, writeFile } from 'fs/promises';
import { join, extname } from 'path';

const webpNames = new Set();
async function collectWebpBasenames(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) await collectWebpBasenames(full);
    else if (extname(e.name).toLowerCase() === '.webp') {
      webpNames.add(e.name.replace(/\.webp$/i, ''));
    }
  }
}
await collectWebpBasenames('public');

const stillOriginal = new Set();
async function collectOriginals(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) await collectOriginals(full);
    else {
      const ext = extname(e.name).toLowerCase();
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') stillOriginal.add(e.name);
    }
  }
}
await collectOriginals('public');
console.log(`webp basenames: ${webpNames.size}, originals kept: ${[...stillOriginal].join(', ')}`);

let filesChanged = 0, refsChanged = 0;

async function walkSrc(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) await walkSrc(full);
    else if (/\.(jsx?|tsx?|css|json)$/i.test(e.name)) await processFile(full);
  }
}

async function processFile(file) {
  const orig = await readFile(file, 'utf8');
  let updated = orig;
  let localChanges = 0;

  // Match: any chars (no quotes/newlines), then .png/.jpg/.jpeg with word boundary
  // Allows spaces, parens, hyphens, dots in basename
  // Match path between quotes: capture full path, extract basename
  updated = updated.replace(
    /(["'`])([^"'`]*?\/)?([^/"'`]+?)\.(png|jpg|jpeg)\1/gi,
    (match, quote, dir, basename, ext) => {
      const fullName = `${basename}.${ext.toLowerCase()}`;
      if (!stillOriginal.has(fullName) && webpNames.has(basename)) {
        localChanges++;
        return `${quote}${dir || ''}${basename}.webp${quote}`;
      }
      return match;
    }
  );

  if (localChanges > 0) {
    await writeFile(file, updated);
    filesChanged++;
    refsChanged += localChanges;
    console.log(`${file}: ${localChanges}`);
  }
}

await walkSrc('src');
console.log(`\nDone. ${filesChanged} files, ${refsChanged} refs`);
