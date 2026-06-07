// TOP-NOTCH Instagram editorial series — premium composition, warm grading, refined typography
import sharp from "sharp";
import path from "path";

const OUT = path.resolve("public/insta-posts");

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Subtle vignette + warm tone overlay for premium feel
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function premiumOverlay() {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <defs>
      <!-- Radial vignette — slight darkening at edges for cinematic feel -->
      <radialGradient id="vignette" cx="50%" cy="50%" r="75%">
        <stop offset="0%"  stop-color="black" stop-opacity="0"/>
        <stop offset="70%" stop-color="black" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="black" stop-opacity="0.55"/>
      </radialGradient>

      <!-- Top fade for logo area -->
      <linearGradient id="topFade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"  stop-color="black" stop-opacity="0.45"/>
        <stop offset="20%" stop-color="black" stop-opacity="0.10"/>
        <stop offset="100%" stop-color="black" stop-opacity="0"/>
      </linearGradient>

      <!-- Bottom fade for URL/series area -->
      <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"  stop-color="black" stop-opacity="0"/>
        <stop offset="60%" stop-color="black" stop-opacity="0.30"/>
        <stop offset="100%" stop-color="black" stop-opacity="0.85"/>
      </linearGradient>
    </defs>

    <!-- Apply layered overlays -->
    <rect width="1080" height="1080" fill="url(#vignette)"/>
    <rect width="1080" height="250" fill="url(#topFade)"/>
    <rect width="1080" height="350" y="730" fill="url(#bottomFade)"/>

    <!-- Centerpiece slight darkening so big serif text reads -->
    <rect width="1080" height="1080" fill="black" opacity="0.20"/>
  </svg>`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Logo top-left — small flag + tracked wordmark
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function logoTopLeft() {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <g transform="translate(60, 60)">
      <!-- Flag mark -->
      <defs>
        <clipPath id="rf">
          <rect x="0" y="0" width="72" height="72" rx="14" ry="14"/>
        </clipPath>
      </defs>
      <g clip-path="url(#rf)">
        <rect x="0"  y="0" width="24" height="72" fill="#000000"/>
        <rect x="24" y="0" width="24" height="72" fill="#DD0000"/>
        <rect x="48" y="0" width="24" height="72" fill="#F59E0B"/>
      </g>

      <!-- Wordmark -->
      <text x="90" y="34"
            font-family="Georgia, serif"
            font-size="22"
            font-weight="700"
            fill="#FFFFFF">Study in <tspan fill="#F59E0B">Germany</tspan></text>
      <text x="90" y="60"
            font-family="Arial, sans-serif"
            font-size="11"
            font-weight="500"
            fill="#FFFFFF"
            opacity="0.7"
            letter-spacing="10">G U I D E</text>
    </g>
  </svg>`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CENTERED editorial headline — premium Georgia serif
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function centerHeadline({ eyebrow, line1, line2, tagline }) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <!-- Eyebrow with refined accent -->
    <g transform="translate(540, 430)">
      <line x1="-30" y1="0" x2="-12" y2="0" stroke="#F59E0B" stroke-width="2"/>
      <text x="0" y="6"
            font-family="Arial, sans-serif"
            font-size="14"
            font-weight="600"
            fill="#F59E0B"
            text-anchor="middle"
            letter-spacing="8">${eyebrow}</text>
      <line x1="12" y1="0" x2="30" y2="0" stroke="#F59E0B" stroke-width="2"/>
    </g>

    <!-- Big elegant serif headline -->
    <text x="540" y="570"
          font-family="Georgia, serif"
          font-size="130"
          font-weight="400"
          fill="#FFFFFF"
          text-anchor="middle"
          letter-spacing="-3">${line1}</text>

    <text x="540" y="710"
          font-family="Georgia, serif"
          font-size="130"
          font-weight="400"
          fill="#FFFFFF"
          text-anchor="middle"
          font-style="italic"
          letter-spacing="-3">${line2}</text>

    <!-- Tagline under headline (small caps tracked) -->
    <text x="540" y="785"
          font-family="Arial, sans-serif"
          font-size="16"
          font-weight="500"
          fill="#FFFFFF"
          text-anchor="middle"
          opacity="0.75"
          letter-spacing="4">${tagline}</text>
  </svg>`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Bottom-left series + bottom-right URL
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function bottomBar({ series }) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <!-- Hairline divider -->
    <line x1="60" y1="995" x2="1020" y2="995" stroke="#FFFFFF" stroke-width="0.5" opacity="0.3"/>

    <!-- Bottom-left: series -->
    <text x="60" y="1038"
          font-family="Arial, sans-serif"
          font-size="13"
          font-weight="600"
          fill="#FFFFFF"
          opacity="0.85"
          letter-spacing="6">${series}</text>

    <!-- Bottom-right: URL + arrow -->
    <text x="990" y="1038"
          font-family="Arial, sans-serif"
          font-size="15"
          font-weight="600"
          fill="#FFFFFF"
          text-anchor="end"
          letter-spacing="2">studyingermanyguide.com</text>

    <text x="1020" y="1040"
          font-family="Arial, sans-serif"
          font-size="20"
          font-weight="700"
          fill="#F59E0B">→</text>
  </svg>`);
}

async function makePost({ photo, output, eyebrow, line1, line2, tagline, series }) {
  await sharp(`public/cities/${photo}`)
    .resize(1080, 1080, { fit: "cover", position: "center" })
    // Premium color grade — slight warm + saturation + contrast
    .modulate({ saturation: 1.15, brightness: 0.96 })
    .linear(1.05, -10) // contrast bump
    .composite([
      { input: premiumOverlay(), blend: "over" },
      { input: logoTopLeft(), blend: "over" },
      { input: centerHeadline({ eyebrow, line1, line2, tagline }), blend: "over" },
      { input: bottomBar({ series }), blend: "over" },
    ])
    .png({ quality: 100 })
    .toFile(`${OUT}/${output}`);

  console.log(`✓ ${output}`);
}

async function run() {
  // Post 1 — Welcome / Brand intro
  await makePost({
    photo: "heidelberg.jpg",
    output: "post-1.png",
    eyebrow: "WELCOME",
    line1: "Begin",
    line2: "the journey.",
    tagline: "A FREE GUIDE FOR FUTURE GERMAN STUDENTS",
    series: "INTRO",
  });

  // Post 2 — Why Germany?
  await makePost({
    photo: "munich.jpg",
    output: "post-2.png",
    eyebrow: "THE WHY",
    line1: "Why",
    line2: "Germany?",
    tagline: "WORLD-CLASS EDUCATION. TUITION-FREE.",
    series: "Q 01 / 05",
  });

  // Post 3 — Where to start? (country)
  await makePost({
    photo: "frankfurt.jpg",
    output: "post-3.png",
    eyebrow: "THE WHO",
    line1: "Where do",
    line2: "you start?",
    tagline: "COUNTRY-SPECIFIC GUIDES — APS, EMBASSY, DOCS",
    series: "Q 02 / 05",
  });

  // Post 4 — Cost
  await makePost({
    photo: "cologne.jpg",
    output: "post-4.png",
    eyebrow: "THE COST",
    line1: "Can",
    line2: "you afford it?",
    tagline: "TUITION. RENT. FOOD. THE HONEST NUMBERS.",
    series: "Q 03 / 05",
  });

  // Post 5 — Visa
  await makePost({
    photo: "hamburg.jpg",
    output: "post-5.png",
    eyebrow: "THE VISA",
    line1: "How long",
    line2: "is the visa?",
    tagline: "REAL TIMELINES — NO MYTHS, JUST FACTS",
    series: "Q 04 / 05",
  });

  // Post 6 — Universities
  await makePost({
    photo: "dresden.jpg",
    output: "post-6.png",
    eyebrow: "THE UNIVERSITY",
    line1: "Which",
    line2: "one for you?",
    tagline: "FROM TUM TO HEIDELBERG — EXPLORE EVERY OPTION",
    series: "Q 05 / 05",
  });

  console.log("\n6 top-notch editorial posts ready.");
}

run().catch(console.error);
