// Generate PREMIUM Instagram posts — editorial/magazine style
// Real photo + gradient overlay + premium typography + brand badges
import sharp from "sharp";
import path from "path";

const OUT = path.resolve("public/insta-posts");

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Bottom gradient overlay — dark fade for text legibility
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function gradientOverlay() {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="black" stop-opacity="0"/>
        <stop offset="35%" stop-color="black" stop-opacity="0.1"/>
        <stop offset="70%" stop-color="black" stop-opacity="0.75"/>
        <stop offset="100%" stop-color="black" stop-opacity="0.95"/>
      </linearGradient>
    </defs>
    <rect width="1080" height="1080" fill="url(#g)"/>
  </svg>`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Top overlay — logo + brand mark
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function topBrandOverlay() {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <!-- Top-left: brand logo block -->
    <g transform="translate(60, 60)">
      <!-- German flag mini icon -->
      <g>
        <rect x="0"  y="0" width="20" height="60" rx="4" fill="#000000"/>
        <rect x="20" y="0" width="20" height="60" fill="#DD0000"/>
        <rect x="40" y="0" width="20" height="60" rx="4" fill="#F59E0B"/>
      </g>
      <!-- Brand text -->
      <text x="80" y="24" font-family="Arial, sans-serif" font-size="20" font-weight="500" fill="#FFFFFF" opacity="0.9">studyingermany</text>
      <text x="80" y="50" font-family="Arial Black, sans-serif" font-size="28" font-weight="900" fill="#FFFFFF" letter-spacing="1">GUIDE</text>
    </g>

    <!-- Top-right: small badge -->
    <g transform="translate(880, 70)">
      <rect x="0" y="0" width="160" height="40" rx="20" fill="#FFCE00"/>
      <text x="80" y="27" font-family="Arial Black, sans-serif" font-size="16" font-weight="900" fill="#0F172A" text-anchor="middle" letter-spacing="2">FREE GUIDE</text>
    </g>
  </svg>`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Bottom content overlay — eyebrow + headline + tagline + CTA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function contentOverlay({ eyebrow, headline1, headline2, tagline, cta }) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <!-- Eyebrow -->
    <g transform="translate(60, 600)">
      <rect x="0" y="0" width="14" height="34" fill="#FFCE00"/>
      <text x="30" y="26" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#FFCE00" letter-spacing="5">${eyebrow}</text>
    </g>

    <!-- Main headline (massive, editorial) -->
    <text x="60" y="770" font-family="Georgia, serif" font-size="130" font-weight="900" fill="#FFFFFF" letter-spacing="-4">${headline1}</text>
    <text x="60" y="890" font-family="Georgia, serif" font-size="130" font-weight="900" fill="#FFFFFF" letter-spacing="-4" font-style="italic">${headline2}</text>

    <!-- Tagline -->
    <text x="60" y="950" font-family="Arial, sans-serif" font-size="26" font-weight="400" fill="#FFFFFF" opacity="0.85">${tagline}</text>

    <!-- Bottom divider line -->
    <line x1="60" y1="990" x2="1020" y2="990" stroke="#FFFFFF" stroke-width="1" opacity="0.3"/>

    <!-- Footer: website + arrow -->
    <text x="60" y="1040" font-family="Arial Black, sans-serif" font-size="26" font-weight="900" fill="#FFFFFF" letter-spacing="1">${cta}</text>
    <text x="1020" y="1040" font-family="Arial, sans-serif" font-size="40" font-weight="700" fill="#FFCE00" text-anchor="end">→</text>
  </svg>`);
}

async function makePost({ photo, output, eyebrow, headline1, headline2, tagline, cta }) {
  await sharp(`public/cities/${photo}`)
    .resize(1080, 1080, { fit: "cover", position: "center" })
    .modulate({ saturation: 1.1, brightness: 0.95 })
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
    headline1: "Coming",
    headline2: "Up.",
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

  // Post 4 — Real cost
  await makePost({
    photo: "cologne.jpg",
    output: "post-4.png",
    eyebrow: "PART 02 — THE COST",
    headline1: "What does",
    headline2: "it cost?",
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

  console.log("\n5 premium editorial posts generated.");
}

run().catch(console.error);
