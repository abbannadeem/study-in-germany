// Generate PREMIUM Instagram posts — refined editorial style
// Real photo + smooth gradient + actual SG logo + refined typography
import sharp from "sharp";
import path from "path";
import { readFile } from "fs/promises";

const OUT = path.resolve("public/insta-posts");

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Smooth bottom gradient overlay
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function gradientOverlay() {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"  stop-color="black" stop-opacity="0.15"/>
        <stop offset="40%" stop-color="black" stop-opacity="0.05"/>
        <stop offset="70%" stop-color="black" stop-opacity="0.78"/>
        <stop offset="100%" stop-color="black" stop-opacity="0.95"/>
      </linearGradient>
    </defs>
    <rect width="1080" height="1080" fill="url(#g)"/>
  </svg>`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Top brand bar — actual SG logo + small caps wordmark
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function topBrandOverlay() {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <!-- Top-left brand block -->
    <g transform="translate(60, 60)">
      <!-- German flag mini icon (matches site header exactly) -->
      <defs>
        <clipPath id="rf">
          <rect x="0" y="0" width="56" height="56" rx="10" ry="10"/>
        </clipPath>
      </defs>
      <g clip-path="url(#rf)">
        <rect x="0"  y="0" width="19" height="56" fill="#000000"/>
        <rect x="19" y="0" width="18" height="56" fill="#DD0000"/>
        <rect x="37" y="0" width="19" height="56" fill="#F59E0B"/>
      </g>
      <!-- Wordmark — refined, smaller -->
      <text x="76" y="26" font-family="Arial, sans-serif" font-size="20" font-weight="400" fill="#FFFFFF" opacity="0.95">Study in <tspan fill="#F59E0B" font-weight="700">Germany</tspan></text>
      <text x="76" y="48" font-family="Arial, sans-serif" font-size="13" font-weight="500" fill="#FFFFFF" opacity="0.6" letter-spacing="6">G U I D E</text>
    </g>

    <!-- Top-right: subtle badge -->
    <g transform="translate(880, 75)">
      <rect x="0" y="0" width="140" height="32" rx="16" fill="none" stroke="#FFFFFF" stroke-width="1.5" opacity="0.7"/>
      <text x="70" y="22" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#FFFFFF" text-anchor="middle" letter-spacing="3" opacity="0.9">FREE GUIDE</text>
    </g>
  </svg>`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Bottom content — refined editorial composition
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function contentOverlay({ eyebrow, headline1, headline2, tagline, cta }) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <!-- Eyebrow with refined accent -->
    <g transform="translate(60, 660)">
      <rect x="0" y="6" width="40" height="2" fill="#F59E0B"/>
      <text x="56" y="13" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="#F59E0B" letter-spacing="6">${eyebrow}</text>
    </g>

    <!-- Headline — Georgia, lighter weight, more breathing room -->
    <text x="60" y="800" font-family="Georgia, serif" font-size="96" font-weight="700" fill="#FFFFFF" letter-spacing="-2">${headline1}</text>
    <text x="60" y="900" font-family="Georgia, serif" font-size="96" font-weight="700" fill="#FFFFFF" letter-spacing="-2" font-style="italic">${headline2}</text>

    <!-- Tagline -->
    <text x="60" y="955" font-family="Arial, sans-serif" font-size="22" font-weight="400" fill="#FFFFFF" opacity="0.8">${tagline}</text>

    <!-- Refined divider -->
    <line x1="60" y1="1000" x2="1020" y2="1000" stroke="#FFFFFF" stroke-width="0.5" opacity="0.25"/>

    <!-- Footer: website + arrow -->
    <text x="60" y="1042" font-family="Arial, sans-serif" font-size="18" font-weight="600" fill="#FFFFFF" letter-spacing="3">${cta}</text>
    <g transform="translate(1010, 1030)">
      <circle cx="0" cy="0" r="18" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
      <text x="0" y="6" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#F59E0B" text-anchor="middle">→</text>
    </g>
  </svg>`);
}

async function makePost({ photo, output, eyebrow, headline1, headline2, tagline, cta }) {
  await sharp(`public/cities/${photo}`)
    .resize(1080, 1080, { fit: "cover", position: "center" })
    .modulate({ saturation: 1.08, brightness: 0.92 })
    .composite([
      { input: gradientOverlay(), blend: "over" },
      { input: topBrandOverlay(), blend: "over" },
      {
        input: contentOverlay({ eyebrow, headline1, headline2, tagline, cta }),
        blend: "over",
      },
    ])
    .png({ quality: 100 })
    .toFile(`${OUT}/${output}`);

  console.log(`✓ ${output}`);
}

async function run() {
  // Post 1 — Welcome
  await makePost({
    photo: "berlin.jpg",
    output: "post-1.png",
    eyebrow: "WELCOME",
    headline1: "Study in",
    headline2: "Germany.",
    tagline: "Your complete guide — by students, for students.",
    cta: "STUDYINGERMANYGUIDE.COM",
  });

  // Post 2 — Coming up
  await makePost({
    photo: "munich.jpg",
    output: "post-2.png",
    eyebrow: "THIS WEEK",
    headline1: "What's",
    headline2: "coming.",
    tagline: "Five honest answers about studying in Germany.",
    cta: "FOLLOW @STUDYINGERMANYGUIDE_",
  });

  // Post 3 — Why Germany
  await makePost({
    photo: "heidelberg.jpg",
    output: "post-3.png",
    eyebrow: "PART 01 — THE WHY",
    headline1: "Why",
    headline2: "Germany?",
    tagline: "World-class education. Tuition-free. A future, not a fee.",
    cta: "READ AT STUDYINGERMANYGUIDE.COM",
  });

  // Post 4 — Cost
  await makePost({
    photo: "cologne.jpg",
    output: "post-4.png",
    eyebrow: "PART 02 — THE COST",
    headline1: "What",
    headline2: "it costs.",
    tagline: "Tuition, rent, food — the honest numbers, no fluff.",
    cta: "CALCULATOR AT STUDYINGERMANYGUIDE.COM",
  });

  // Post 5 — Visa
  await makePost({
    photo: "frankfurt.jpg",
    output: "post-5.png",
    eyebrow: "PART 03 — THE VISA",
    headline1: "Visa,",
    headline2: "explained.",
    tagline: "What's true, what's myth — step by step.",
    cta: "GUIDE AT STUDYINGERMANYGUIDE.COM",
  });

  console.log("\n5 refined editorial posts generated.");
}

run().catch(console.error);
