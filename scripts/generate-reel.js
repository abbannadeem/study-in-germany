// Generate a 9-second vertical (1080x1920) Instagram Reel as MP4.
// Each city photo gets a darkening overlay + bold centered text.
// User uploads the MP4 to Instagram and picks their own trending audio.
import sharp from "sharp";
import { execSync } from "child_process";
import { rmSync, existsSync, mkdirSync } from "fs";
import path from "path";

const OUT_DIR = path.resolve("public/reels");
const TMP_DIR = path.resolve("public/reels/_tmp");

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
if (existsSync(TMP_DIR)) rmSync(TMP_DIR, { recursive: true, force: true });
mkdirSync(TMP_DIR, { recursive: true });

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Slide deck: 6 photos × ~1.5s = ~9s total (ideal hook length)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const slides = [
  { photo: "berlin.jpg",     eyebrow: "STUDY IN GERMANY", line1: "Want to study",      line2: "in Germany?" },
  { photo: "heidelberg.jpg", eyebrow: "FREE GUIDE",       line1: "We made a",          line2: "free guide." },
  { photo: "munich.jpg",     eyebrow: "183 UNIS",         line1: "Every public",       line2: "university." },
  { photo: "cologne.jpg",    eyebrow: "COST CALCULATOR",  line1: "Cost in your",       line2: "currency." },
  { photo: "hamburg.jpg",    eyebrow: "VISA STEP-BY-STEP",line1: "Visa, demystified.", line2: "" },
  { photo: "frankfurt.jpg",  eyebrow: "START NOW",        line1: "studyingermany",     line2: "guide.com" },
];

function overlaySVG({ eyebrow, line1, line2 }) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920">
    <defs>
      <linearGradient id="vert" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"  stop-color="black" stop-opacity="0.55"/>
        <stop offset="40%" stop-color="black" stop-opacity="0.30"/>
        <stop offset="80%" stop-color="black" stop-opacity="0.80"/>
        <stop offset="100%" stop-color="black" stop-opacity="0.95"/>
      </linearGradient>
    </defs>
    <rect width="1080" height="1920" fill="url(#vert)"/>

    <!-- Logo top-left -->
    <g transform="translate(60, 70)">
      <rect x="0"  y="0" width="20" height="60" fill="#000000"/>
      <rect x="20" y="0" width="20" height="60" fill="#DD0000"/>
      <rect x="40" y="0" width="20" height="60" fill="#F59E0B"/>
      <text x="76" y="40" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#FFFFFF">studyingermanyguide.com</text>
    </g>

    <!-- Eyebrow tag -->
    <g transform="translate(540, 850)">
      <rect x="-200" y="0" width="400" height="56" rx="28" fill="#F59E0B"/>
      <text x="0" y="38" font-family="Arial Black, sans-serif" font-size="26" font-weight="900" fill="#0F172A" text-anchor="middle" letter-spacing="3">${eyebrow}</text>
    </g>

    <!-- BIG centered headline -->
    <text x="540" y="1100" font-family="Georgia, serif" font-size="110" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="-3">${line1}</text>
    ${line2 ? `<text x="540" y="1240" font-family="Georgia, serif" font-size="110" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="-3" font-style="italic">${line2}</text>` : ""}

    <!-- Bottom URL hint -->
    <text x="540" y="1820" font-family="Arial, sans-serif" font-size="32" font-weight="600" fill="#FFFFFF" text-anchor="middle" letter-spacing="4">studyingermanyguide.com →</text>
  </svg>`);
}

async function buildSlide(i, slide) {
  const out = path.join(TMP_DIR, `slide-${String(i + 1).padStart(2, "0")}.png`);
  await sharp(`public/cities/${slide.photo}`)
    // Vertical Reel = 1080x1920 (9:16). object-cover behaviour.
    .resize(1080, 1920, { fit: "cover", position: "center" })
    .modulate({ saturation: 1.1, brightness: 0.95 })
    .composite([{ input: overlaySVG(slide), blend: "over" }])
    .png({ quality: 100 })
    .toFile(out);
  return out;
}

(async () => {
  console.log("Rendering 6 slides...");
  for (let i = 0; i < slides.length; i++) {
    await buildSlide(i, slides[i]);
    console.log(`  ✓ slide ${i + 1}`);
  }

  // Use ffmpeg concat to make MP4
  // Each slide held 1.5 sec, total ~9 sec
  // Output: 1080x1920, 30fps, h264, no audio (user adds in Instagram)
  console.log("\nEncoding MP4...");
  const ffmpegCmd = [
    "ffmpeg",
    "-y",
    "-framerate 1/1.5",                              // 1.5 sec per image
    `-i "${TMP_DIR.replace(/\\/g, "/")}/slide-%02d.png"`,
    "-vf \"format=yuv420p,fps=30\"",
    "-c:v libx264",
    "-preset medium",
    "-crf 18",                                       // high quality
    "-pix_fmt yuv420p",
    `"${OUT_DIR.replace(/\\/g, "/")}/reel.mp4"`,
  ].join(" ");

  execSync(ffmpegCmd, { stdio: "inherit" });

  console.log(`\n✅ Reel ready at: public/reels/reel.mp4`);
  console.log("    Resolution: 1080x1920 (vertical, Instagram Reel format)");
  console.log("    Duration: ~9 seconds");
  console.log("    No audio — add your own trending sound in Instagram editor.");
})();
