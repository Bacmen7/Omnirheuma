import { readdir, readFile, writeFile, stat } from 'fs/promises';
import { join, extname } from 'path';

// Build set of converted basenames (those that exist as .webp in public/ but original .png/.jpg gone)
async function collectWebpBasenames(dir, set) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) await collectWebpBasenames(full, set);
    else if (extname(e.name).toLowerCase() === '.webp') {
      set.add(e.name.replace(/\.webp$/i, ''));
    }
  }
}

const webpNames = new Set();
await collectWebpBasenames('public', webpNames);
console.log(`Found ${webpNames.size} webp files`);

// Build set of original names that still exist (skipped — logos etc.)
const stillOriginal = new Set();
async function collectOriginals(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) await collectOriginals(full);
    else {
      const ext = extname(e.name).toLowerCase();
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        stillOriginal.add(e.name);
      }
    }
  }
}
await collectOriginals('public');
console.log(`Originals still present: ${[...stillOriginal].join(', ')}`);

// Walk src/ and update refs
let filesChanged = 0;
let refsChanged = 0;

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

  // Match image paths: capture path + basename + extension
  updated = updated.replace(
    /([\w./@-]*?)([\w-]+)\.(png|jpg|jpeg)\b/gi,
    (match, prefix, basename, ext) => {
      const fullName = `${basename}.${ext.toLowerCase()}`;
      // Only convert if original gone AND webp version exists
      if (!stillOriginal.has(fullName) && webpNames.has(basename)) {
        localChanges++;
        return `${prefix}${basename}.webp`;
      }
      return match;
    }
  );

  if (localChanges > 0) {
    await writeFile(file, updated);
    filesChanged++;
    refsChanged += localChanges;
    console.log(`${file}: ${localChanges} refs updated`);
  }
}

await walkSrc('src');
console.log(`\nDone. ${filesChanged} files, ${refsChanged} refs updated`);
