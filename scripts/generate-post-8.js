// Instagram Post 8 — founder reveal.
// Builds on the editorial style of posts 1-7 (full-bleed photo, dark gradient,
// big italic serif overlay) but with the snow + TU Ilmenau founder shot
// instead of a generic city landmark. Trust signal at scale.
import sharp from "sharp";
import path from "path";

const OUT = path.resolve("public/insta-posts/post-8.png");
const PHOTO = path.resolve("public/founder/abban.jpg");

// Bottom-heavy gradient so the founder's face stays clear and text reads well
function overlay() {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
    <defs>
      <linearGradient id="dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"  stop-color="#000000" stop-opacity="0.0"/>
        <stop offset="45%" stop-color="#000000" stop-opacity="0.20"/>
        <stop offset="78%" stop-color="#000000" stop-opacity="0.78"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0.94"/>
      </linearGradient>
    </defs>
    <rect width="1080" height="1080" fill="url(#dark)"/>

    <!-- Brand strip top-left -->
    <g transform="translate(40, 40)">
      <rect x="0" y="0" width="14" height="44" fill="#000000"/>
      <rect x="14" y="0" width="14" height="44" fill="#DD0000"/>
      <rect x="28" y="0" width="14" height="44" fill="#F59E0B"/>
      <text x="56" y="20" font-family="Georgia, serif" font-size="15" font-weight="700" fill="#FFFFFF">Study in Germany</text>
      <text x="56" y="38" font-family="Arial, sans-serif" font-size="10" font-weight="500" fill="#FFFFFF" opacity="0.65" letter-spacing="6">G U I D E</text>
    </g>

    <!-- Eyebrow tag -->
    <g transform="translate(60, 720)">
      <rect x="0" y="0" width="220" height="32" rx="4" fill="#F59E0B"/>
      <text x="110" y="22" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#0F172A" text-anchor="middle" letter-spacing="3">MEET THE FOUNDER</text>
    </g>

    <!-- Big editorial headline -->
    <text x="60" y="820" font-family="Georgia, serif" font-size="80" font-weight="400" fill="#FFFFFF" font-style="italic">Hi, I&#39;m Abban.</text>

    <!-- Subline 1 -->
    <text x="60" y="880" font-family="Georgia, serif" font-size="34" font-weight="400" fill="#FFFFFF" opacity="0.94">From Lahore</text>
    <text x="60" y="922" font-family="Georgia, serif" font-size="34" font-weight="400" fill="#FFFFFF" opacity="0.94">to TU Ilmenau, 2025.</text>

    <!-- Bottom URL strip -->
    <text x="60" y="1010" font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="#FFCE00" letter-spacing="3">STUDYINGERMANYGUIDE.COM</text>
    <text x="60" y="1040" font-family="Arial, sans-serif" font-size="12" font-weight="400" fill="#FFFFFF" opacity="0.7">The site I wish I had when I started applying.</text>
  </svg>`);
}

(async () => {
  await sharp(PHOTO)
    // Fit so face stays prominent; portrait crop to 1080 square
    .resize(1080, 1080, { fit: "cover", position: "top" })
    .modulate({ saturation: 1.05, brightness: 0.95 })
    .composite([{ input: overlay(), blend: "over" }])
    .png({ quality: 100 })
    .toFile(OUT);
  console.log("OK", path.relative(path.resolve(), OUT));
})();
