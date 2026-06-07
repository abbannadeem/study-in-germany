// Generate favicon (icon-only version of brand — just the flag block)
import sharp from "sharp";
import path from "path";

const iconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <!-- White background for fallback -->
  <rect width="200" height="200" fill="#FFFFFF"/>

  <!-- German flag block (rounded, centered) -->
  <defs>
    <clipPath id="rf">
      <rect x="20" y="20" width="160" height="160" rx="32" ry="32"/>
    </clipPath>
  </defs>
  <g clip-path="url(#rf)">
    <rect x="20"  y="20" width="54" height="160" fill="#000000"/>
    <rect x="74"  y="20" width="52" height="160" fill="#DD0000"/>
    <rect x="126" y="20" width="54" height="160" fill="#F59E0B"/>
  </g>
</svg>`;

async function run() {
  // Next.js App Router conventions:
  // - src/app/icon.png    (favicon for browser tabs)
  // - src/app/apple-icon.png (Apple touch icon)
  await sharp(Buffer.from(iconSVG)).resize(512, 512).png().toFile("src/app/icon.png");
  await sharp(Buffer.from(iconSVG)).resize(180, 180).png().toFile("src/app/apple-icon.png");
  console.log("✓ icon.png (512x512) created");
  console.log("✓ apple-icon.png (180x180) created");
}

run().catch(console.error);
