import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const root = path.resolve('src', 'assets');
const exts = new Set(['.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG']);
const maxWidth = 1600;
const quality = 75;

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

const files = walk(root).filter((file) => exts.has(path.extname(file)));

const processFile = async (file) => {
  const outFile = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  const image = sharp(file);
  const metadata = await image.metadata();
  const width = metadata.width && metadata.width > maxWidth ? maxWidth : metadata.width;

  await image
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(outFile);

  return { file, outFile };
};

(async () => {
  console.log(`Optimizing ${files.length} images...`);
  for (const file of files) {
    const { outFile } = await processFile(file);
    console.log(`✔ ${path.relative(process.cwd(), outFile)}`);
  }
  console.log('Done.');
})();
