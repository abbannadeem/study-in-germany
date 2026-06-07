// PREMIUM editorial Instagram series — real photo + actual brand logo + refined text
import sharp from "sharp";
import path from "path";

const OUT = path.resolve("public/insta-posts");

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Smooth bottom gradient — text legibility on photo
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function gradientOverlay() {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"  stop-color="black" stop-opacity="0.20"/>
        <stop offset="40%" stop-color="black" stop-opacity="0.05"/>
        <stop offset="65%" stop-color="black" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="black" stop-opacity="0.95"/>
      </linearGradient>
    </defs>
    <rect width="1080" height="1080" fill="url(#g)"/>
  </svg>`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Brand block — matches real logo: flag + "Study in Germany" + GUIDE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function brandBlock() {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <!-- Top-left: brand block -->
    <g transform="translate(60, 60)">
      <!-- German flag mini (rounded, matches logo exactly) -->
      <defs>
        <clipPath id="rf">
          <rect x="0" y="0" width="64" height="64" rx="12" ry="12"/>
        </clipPath>
      </defs>
      <g clip-path="url(#rf)">
        <rect x="0"  y="0" width="22" height="64" fill="#000000"/>
        <rect x="22" y="0" width="21" height="64" fill="#DD0000"/>
        <rect x="43" y="0" width="21" height="64" fill="#F59E0B"/>
      </g>

      <!-- Wordmark — Study in [Germany] -->
      <text x="84" y="32"
            font-family="Arial, sans-serif"
            font-size="22"
            font-weight="700"
            fill="#FFFFFF">Study in <tspan fill="#F59E0B">Germany</tspan></text>

      <!-- GUIDE — tracked subtitle (matches logo) -->
      <text x="84" y="56"
            font-family="Arial, sans-serif"
            font-size="12"
            font-weight="500"
            fill="#FFFFFF"
            opacity="0.55"
            letter-spacing="8">G U I D E</text>
    </g>
  </svg>`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Top-right: series indicator (e.g., "PART 01 / 05")
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function seriesIndicator(label) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <g transform="translate(960, 90)">
      <text x="0" y="0"
            font-family="Arial, sans-serif"
            font-size="13"
            font-weight="600"
            fill="#FFFFFF"
            text-anchor="end"
            opacity="0.85"
            letter-spacing="3">${label}</text>
    </g>
  </svg>`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Editorial content — refined headline + tagline + footer
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function contentOverlay({ eyebrow, headline1, headline2, tagline, cta }) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <!-- Eyebrow — minimal accent line + small caps -->
    <g transform="translate(60, 680)">
      <rect x="0" y="6" width="32" height="2" fill="#F59E0B"/>
      <text x="48" y="13"
            font-family="Arial, sans-serif"
            font-size="13"
            font-weight="600"
            fill="#F59E0B"
            letter-spacing="6">${eyebrow}</text>
    </g>

    <!-- Editorial headline -->
    <text x="60" y="800"
          font-family="Georgia, serif"
          font-size="82"
          font-weight="700"
          fill="#FFFFFF"
          letter-spacing="-1">${headline1}</text>
    <text x="60" y="888"
          font-family="Georgia, serif"
          font-size="82"
          font-weight="700"
          fill="#FFFFFF"
          letter-spacing="-1"
          font-style="italic">${headline2}</text>

    <!-- Tagline -->
    <text x="60" y="938"
          font-family="Arial, sans-serif"
          font-size="20"
          font-weight="400"
          fill="#FFFFFF"
          opacity="0.78">${tagline}</text>

    <!-- Hairline divider -->
    <line x1="60" y1="990" x2="1020" y2="990" stroke="#FFFFFF" stroke-width="0.5" opacity="0.22"/>

    <!-- Footer: website + arrow circle -->
    <text x="60" y="1038"
          font-family="Arial, sans-serif"
          font-size="14"
          font-weight="600"
          fill="#FFFFFF"
          letter-spacing="4">${cta}</text>

    <g transform="translate(1010, 1028)">
      <circle cx="0" cy="0" r="18" fill="none" stroke="#F59E0B" stroke-width="1.2"/>
      <text x="0" y="6"
            font-family="Arial, sans-serif"
            font-size="18"
            font-weight="500"
            fill="#F59E0B"
            text-anchor="middle">→</text>
    </g>
  </svg>`);
}

async function makePost({
  photo, output,
  series,
  eyebrow, headline1, headline2, tagline, cta,
}) {
  await sharp(`public/cities/${photo}`)
    .resize(1080, 1080, { fit: "cover", position: "center" })
    .modulate({ saturation: 1.05, brightness: 0.9 })
    .composite([
      { input: gradientOverlay(), blend: "over" },
      { input: brandBlock(), blend: "over" },
      { input: seriesIndicator(series), blend: "over" },
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
  // Post 1 — Welcome (intro)
  await makePost({
    photo: "berlin.jpg",
    output: "post-1.png",
    series: "INTRO",
    eyebrow: "WELCOME",
    headline1: "Study in",
    headline2: "Germany.",
    tagline: "A complete guide — written by students who've been there.",
    cta: "STUDYINGERMANYGUIDE.COM",
  });

  // Post 2 — Coming up (teaser)
  await makePost({
    photo: "munich.jpg",
    output: "post-2.png",
    series: "PREVIEW",
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
    series: "PART 01 / 05",
    eyebrow: "THE WHY",
    headline1: "Why",
    headline2: "Germany?",
    tagline: "World-class education. Tuition-free. A future, not a fee.",
    cta: "READ AT STUDYINGERMANYGUIDE.COM",
  });

  // Post 4 — Cost
  await makePost({
    photo: "cologne.jpg",
    output: "post-4.png",
    series: "PART 02 / 05",
    eyebrow: "THE COST",
    headline1: "What",
    headline2: "it costs.",
    tagline: "Tuition, rent, food — the honest numbers, no fluff.",
    cta: "CALCULATOR AT STUDYINGERMANYGUIDE.COM",
  });

  // Post 5 — Visa
  await makePost({
    photo: "frankfurt.jpg",
    output: "post-5.png",
    series: "PART 03 / 05",
    eyebrow: "THE VISA",
    headline1: "Visa,",
    headline2: "demystified.",
    tagline: "What's true, what's myth — step by step.",
    cta: "GUIDE AT STUDYINGERMANYGUIDE.COM",
  });

  console.log("\n5 refined editorial series posts ready.");
}

run().catch(console.error);
