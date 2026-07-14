import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, extname } from 'path';

const PUBLIC_DIR = new URL('../public/', import.meta.url).pathname.replace(/^\//, '');
const MAX_WIDTH = 1920;
const QUALITY = 80;
const EXTS = new Set(['.png', '.jpg', '.jpeg']);
const SKIP = new Set(['logo.png', 'sira-logo.png', 'vite.svg', 'favicon.ico']);

let totalBefore = 0;
let totalAfter = 0;
let count = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      await walk(full);
    } else if (EXTS.has(extname(e.name).toLowerCase()) && !SKIP.has(e.name)) {
      await convert(full);
    }
  }
}

async function convert(file) {
  try {
    const before = (await stat(file)).size;
    const outFile = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');

    const img = sharp(file);
    const meta = await img.metadata();
    const pipeline = meta.width > MAX_WIDTH
      ? img.resize({ width: MAX_WIDTH, withoutEnlargement: true })
      : img;

    await pipeline.webp({ quality: QUALITY, effort: 5 }).toFile(outFile);
    const after = (await stat(outFile)).size;

    // remove original if webp smaller
    if (after < before) {
      await unlink(file);
      totalBefore += before;
      totalAfter += after;
      count++;
      console.log(`${file.replace(PUBLIC_DIR, '')}: ${(before/1024).toFixed(0)}KB -> ${(after/1024).toFixed(0)}KB`);
    } else {
      await unlink(outFile);
      console.log(`${file}: skip (webp larger)`);
    }
  } catch (err) {
    console.error(`FAIL ${file}: ${err.message}`);
  }
}

await walk('public');
console.log(`\nConverted ${count} images`);
console.log(`Before: ${(totalBefore/1024/1024).toFixed(2)} MB`);
console.log(`After:  ${(totalAfter/1024/1024).toFixed(2)} MB`);
console.log(`Saved:  ${((1 - totalAfter/totalBefore)*100).toFixed(1)}%`);
