// Editorial Instagram series — refined question-based posts
import sharp from "sharp";
import path from "path";

const OUT = path.resolve("public/insta-posts");

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Smooth gradient — photo darkens toward bottom
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function gradientOverlay() {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"  stop-color="black" stop-opacity="0.35"/>
        <stop offset="30%" stop-color="black" stop-opacity="0.10"/>
        <stop offset="55%" stop-color="black" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="black" stop-opacity="0.92"/>
      </linearGradient>
    </defs>
    <rect width="1080" height="1080" fill="url(#g)"/>
  </svg>`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// BIG brand block — matches actual logo proportions
// (German flag block prominent + clean wordmark)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function brandBlock() {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <g transform="translate(60, 60)">
      <!-- German flag block — bigger, prominent like actual logo -->
      <defs>
        <clipPath id="rf">
          <rect x="0" y="0" width="90" height="90" rx="18" ry="18"/>
        </clipPath>
      </defs>
      <g clip-path="url(#rf)">
        <rect x="0"  y="0" width="30" height="90" fill="#000000"/>
        <rect x="30" y="0" width="30" height="90" fill="#DD0000"/>
        <rect x="60" y="0" width="30" height="90" fill="#F59E0B"/>
      </g>

      <!-- Wordmark — Study in Germany -->
      <text x="110" y="42"
            font-family="Arial, sans-serif"
            font-size="26"
            font-weight="700"
            fill="#FFFFFF">Study in <tspan fill="#F59E0B">Germany</tspan></text>

      <!-- GUIDE tracked subtitle -->
      <text x="110" y="74"
            font-family="Arial, sans-serif"
            font-size="13"
            font-weight="500"
            fill="#FFFFFF"
            opacity="0.6"
            letter-spacing="10">G U I D E</text>
    </g>

    <!-- Top-right: subtle series tag -->
  </svg>`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Top-right: series indicator
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function seriesIndicator(label) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <g transform="translate(1020, 110)">
      <text x="0" y="0"
            font-family="Arial, sans-serif"
            font-size="14"
            font-weight="600"
            fill="#FFFFFF"
            text-anchor="end"
            opacity="0.7"
            letter-spacing="4">${label}</text>
    </g>
  </svg>`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Editorial content — bigger breathing room, refined hierarchy
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function contentOverlay({ eyebrow, headline1, headline2, tagline, cta }) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <!-- Eyebrow — minimal yellow accent + tracked small caps -->
    <g transform="translate(60, 660)">
      <rect x="0" y="6" width="40" height="2" fill="#F59E0B"/>
      <text x="56" y="13"
            font-family="Arial, sans-serif"
            font-size="13"
            font-weight="700"
            fill="#F59E0B"
            letter-spacing="6">${eyebrow}</text>
    </g>

    <!-- Editorial question headline -->
    <text x="60" y="790"
          font-family="Georgia, serif"
          font-size="88"
          font-weight="700"
          fill="#FFFFFF"
          letter-spacing="-1">${headline1}</text>
    <text x="60" y="884"
          font-family="Georgia, serif"
          font-size="88"
          font-weight="700"
          fill="#FFFFFF"
          letter-spacing="-1"
          font-style="italic">${headline2}</text>

    <!-- Tagline (answer/teaser) -->
    <text x="60" y="940"
          font-family="Arial, sans-serif"
          font-size="22"
          font-weight="400"
          fill="#FFFFFF"
          opacity="0.82">${tagline}</text>

    <!-- Hairline divider -->
    <line x1="60" y1="995" x2="1020" y2="995" stroke="#FFFFFF" stroke-width="0.5" opacity="0.25"/>

    <!-- Footer: website + arrow -->
    <text x="60" y="1040"
          font-family="Arial, sans-serif"
          font-size="14"
          font-weight="600"
          fill="#FFFFFF"
          letter-spacing="4">${cta}</text>

    <g transform="translate(1010, 1030)">
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
  // Question-based series — each post asks one question

  // Post 1 — Welcome (intro to the series)
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

  // Post 2 — Why Germany?
  await makePost({
    photo: "heidelberg.jpg",
    output: "post-2.png",
    series: "Q 01",
    eyebrow: "THE WHY",
    headline1: "Why",
    headline2: "Germany?",
    tagline: "World-class education. Tuition-free. A future, not a fee.",
    cta: "READ AT STUDYINGERMANYGUIDE.COM",
  });

  // Post 3 — Where are you from?
  await makePost({
    photo: "munich.jpg",
    output: "post-3.png",
    series: "Q 02",
    eyebrow: "THE WHO",
    headline1: "Which",
    headline2: "country?",
    tagline: "We've got country-specific guides — APS, embassy, documents.",
    cta: "GUIDES AT STUDYINGERMANYGUIDE.COM",
  });

  // Post 4 — Real cost
  await makePost({
    photo: "cologne.jpg",
    output: "post-4.png",
    series: "Q 03",
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
    series: "Q 04",
    eyebrow: "THE VISA",
    headline1: "Visa,",
    headline2: "demystified.",
    tagline: "What's true, what's myth — step by step.",
    cta: "GUIDE AT STUDYINGERMANYGUIDE.COM",
  });

  // Post 6 — Universities
  await makePost({
    photo: "hamburg.jpg",
    output: "post-6.png",
    series: "Q 05",
    eyebrow: "THE UNIVERSITIES",
    headline1: "Which",
    headline2: "university?",
    tagline: "From TUM to Heidelberg — explore every public option.",
    cta: "EXPLORE AT STUDYINGERMANYGUIDE.COM",
  });

  console.log("\n6 refined editorial series posts ready.");
}

run().catch(console.error);
