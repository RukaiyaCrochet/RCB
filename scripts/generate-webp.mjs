import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const inputDirArg = process.argv[2] ?? path.join('src', 'assets');
const qualityArg = Number(process.argv[3] ?? 80);
const maxWidthArg = Number(process.argv[4] ?? 0);

const inputDir = path.resolve(inputDirArg);
const quality = Number.isFinite(qualityArg) ? Math.min(Math.max(qualityArg, 1), 100) : 80;
const maxWidth = Number.isFinite(maxWidthArg) && maxWidthArg > 0 ? maxWidthArg : null;
const supportedExts = new Set(['.jpg', '.jpeg', '.png']);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }
    files.push(fullPath);
  }

  return files;
}

async function generateWebp(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!supportedExts.has(ext)) {
    return null;
  }

  const outputPath = filePath.replace(/\.(jpe?g|png)$/i, '.webp');
  const transformer = sharp(filePath);

  if (maxWidth) {
    transformer.resize({ width: maxWidth, withoutEnlargement: true });
  }

  await transformer.webp({ quality }).toFile(outputPath);
  return outputPath;
}

async function main() {
  if (!fs.existsSync(inputDir)) {
    console.error(`Input folder not found: ${inputDir}`);
    process.exit(1);
  }

  const allFiles = walk(inputDir);
  const candidates = allFiles.filter((file) => supportedExts.has(path.extname(file).toLowerCase()));

  if (candidates.length === 0) {
    console.log(`No JPG/PNG images found in ${path.relative(process.cwd(), inputDir)}.`);
    return;
  }

  console.log(`Generating WebP for ${candidates.length} images...`);
  let converted = 0;

  for (const filePath of candidates) {
    const outputPath = await generateWebp(filePath);
    if (!outputPath) {
      continue;
    }
    converted += 1;
    console.log(`- ${path.relative(process.cwd(), outputPath)}`);
  }

  console.log(`Done. Converted ${converted} image(s).`);
}

main().catch((error) => {
  console.error('Failed to generate WebP images.');
  console.error(error);
  process.exit(1);
});