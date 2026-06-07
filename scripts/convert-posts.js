// Convert all SVG posts in public/insta-posts/ to high-quality PNGs (1080x1080)
import sharp from "sharp";
import { readdir } from "fs/promises";
import path from "path";

const FOLDER = path.resolve("public/insta-posts");

async function convert() {
  const files = await readdir(FOLDER);
  const svgs = files.filter((f) => f.endsWith(".svg"));

  for (const file of svgs) {
    const input = path.join(FOLDER, file);
    const output = path.join(FOLDER, file.replace(".svg", ".png"));
    await sharp(input)
      .resize(1080, 1080)
      .png({ quality: 100, compressionLevel: 0 })
      .toFile(output);
    console.log(`✓ ${file} → ${file.replace(".svg", ".png")}`);
  }

  console.log(`\n${svgs.length} files converted!`);
}

convert().catch(console.error);
