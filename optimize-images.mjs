import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';

const PUBLIC_DIR = './client/public';
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function optimizeImage(filePath) {
  try {
    const ext = filePath.toLowerCase();
    
    // Skip SVG files
    if (ext.endsWith('.svg')) {
      console.log(`Skipping SVG: ${filePath}`);
      return;
    }

    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    console.log(`Processing: ${filePath} (${metadata.width}x${metadata.height}, ${metadata.format})`);
    
    // Resize if too large
    let pipeline = image;
    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    // Convert to WebP for better compression
    const outputPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    
    await pipeline
      .webp({ quality: QUALITY })
      .toFile(outputPath);
    
    const originalSize = (await stat(filePath)).size;
    const newSize = (await stat(outputPath)).size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
    
    console.log(`✓ Saved to ${outputPath} (${savings}% smaller)`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

async function processDirectory(dir) {
  const files = await readdir(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    const stats = await stat(filePath);
    
    if (stats.isDirectory()) {
      await processDirectory(filePath);
    } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
      await optimizeImage(filePath);
    }
  }
}

console.log('Starting image optimization...\n');
await processDirectory(PUBLIC_DIR);
console.log('\n✓ Image optimization complete!');
