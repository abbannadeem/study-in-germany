// Premium Instagram series — clean composition, no text duplication
import sharp from "sharp";
import path from "path";

const OUT = path.resolve("public/insta-posts");

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Smooth gradient
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function gradientOverlay() {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"  stop-color="black" stop-opacity="0.35"/>
        <stop offset="30%" stop-color="black" stop-opacity="0.05"/>
        <stop offset="55%" stop-color="black" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="black" stop-opacity="0.93"/>
      </linearGradient>
    </defs>
    <rect width="1080" height="1080" fill="url(#g)"/>
  </svg>`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SMALL clean brand mark — just flag + tiny tag (NO duplicate text)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function brandMark() {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <g transform="translate(60, 60)">
      <!-- Small German flag block (60x60) -->
      <defs>
        <clipPath id="rf">
          <rect x="0" y="0" width="60" height="60" rx="12" ry="12"/>
        </clipPath>
      </defs>
      <g clip-path="url(#rf)">
        <rect x="0"  y="0" width="20" height="60" fill="#000000"/>
        <rect x="20" y="0" width="20" height="60" fill="#DD0000"/>
        <rect x="40" y="0" width="20" height="60" fill="#F59E0B"/>
      </g>

      <!-- Tiny website handle next to flag -->
      <text x="78" y="38"
            font-family="Arial, sans-serif"
            font-size="16"
            font-weight="600"
            fill="#FFFFFF"
            letter-spacing="2"
            opacity="0.92">studyingermanyguide.com</text>
    </g>

    <!-- Top-right: minimal tag -->
    <g transform="translate(1020, 90)">
      <text x="0" y="0"
            font-family="Arial, sans-serif"
            font-size="13"
            font-weight="600"
            fill="#FFFFFF"
            text-anchor="end"
            opacity="0.6"
            letter-spacing="4">FREE GUIDE</text>
    </g>
  </svg>`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Editorial content
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function contentOverlay({ eyebrow, headline1, headline2, tagline, footer, series }) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <!-- Eyebrow -->
    <g transform="translate(60, 660)">
      <rect x="0" y="6" width="40" height="2" fill="#F59E0B"/>
      <text x="56" y="13"
            font-family="Arial, sans-serif"
            font-size="13"
            font-weight="700"
            fill="#F59E0B"
            letter-spacing="6">${eyebrow}</text>
    </g>

    <!-- Editorial headline -->
    <text x="60" y="790"
          font-family="Georgia, serif"
          font-size="100"
          font-weight="700"
          fill="#FFFFFF"
          letter-spacing="-2">${headline1}</text>
    <text x="60" y="892"
          font-family="Georgia, serif"
          font-size="100"
          font-weight="700"
          fill="#FFFFFF"
          letter-spacing="-2"
          font-style="italic">${headline2}</text>

    <!-- Tagline -->
    <text x="60" y="948"
          font-family="Arial, sans-serif"
          font-size="22"
          font-weight="400"
          fill="#FFFFFF"
          opacity="0.82">${tagline}</text>

    <!-- Hairline -->
    <line x1="60" y1="1000" x2="1020" y2="1000" stroke="#FFFFFF" stroke-width="0.5" opacity="0.25"/>

    <!-- Footer left: series indicator -->
    <text x="60" y="1042"
          font-family="Arial, sans-serif"
          font-size="13"
          font-weight="600"
          fill="#FFFFFF"
          opacity="0.7"
          letter-spacing="4">${series}</text>

    <!-- Footer right: cta + arrow -->
    <text x="970" y="1042"
          font-family="Arial, sans-serif"
          font-size="14"
          font-weight="600"
          fill="#FFFFFF"
          text-anchor="end"
          letter-spacing="3">${footer}</text>

    <g transform="translate(1020, 1032)">
      <text x="0" y="6"
            font-family="Arial, sans-serif"
            font-size="20"
            font-weight="700"
            fill="#F59E0B"
            text-anchor="middle">→</text>
    </g>
  </svg>`);
}

async function makePost({
  photo, output,
  series, eyebrow, headline1, headline2, tagline, footer,
}) {
  await sharp(`public/cities/${photo}`)
    .resize(1080, 1080, { fit: "cover", position: "center" })
    .modulate({ saturation: 1.05, brightness: 0.88 })
    .composite([
      { input: gradientOverlay(), blend: "over" },
      { input: brandMark(), blend: "over" },
      {
        input: contentOverlay({ eyebrow, headline1, headline2, tagline, footer, series }),
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
    headline1: "Hello,",
    headline2: "future student.",
    tagline: "A complete guide to studying in Germany — by students, for students.",
    footer: "READ NOW",
  });

  // Post 2 — Why Germany?
  await makePost({
    photo: "heidelberg.jpg",
    output: "post-2.png",
    series: "Q 01 / 05",
    eyebrow: "THE WHY",
    headline1: "Why",
    headline2: "Germany?",
    tagline: "World-class education. Tuition-free. A future, not a fee.",
    footer: "READ THE ANSWER",
  });

  // Post 3 — Which country?
  await makePost({
    photo: "munich.jpg",
    output: "post-3.png",
    series: "Q 02 / 05",
    eyebrow: "THE WHO",
    headline1: "Where",
    headline2: "are you from?",
    tagline: "Country-specific guides — APS, embassy, documents.",
    footer: "FIND YOUR GUIDE",
  });

  // Post 4 — Cost
  await makePost({
    photo: "cologne.jpg",
    output: "post-4.png",
    series: "Q 03 / 05",
    eyebrow: "THE COST",
    headline1: "Can",
    headline2: "I afford it?",
    tagline: "Tuition, rent, food — the honest numbers, no fluff.",
    footer: "USE THE CALCULATOR",
  });

  // Post 5 — Visa
  await makePost({
    photo: "frankfurt.jpg",
    output: "post-5.png",
    series: "Q 04 / 05",
    eyebrow: "THE VISA",
    headline1: "How long",
    headline2: "is the visa?",
    tagline: "Real timelines — what's true, what's myth, step by step.",
    footer: "GET THE GUIDE",
  });

  // Post 6 — Universities
  await makePost({
    photo: "hamburg.jpg",
    output: "post-6.png",
    series: "Q 05 / 05",
    eyebrow: "THE UNIVERSITIES",
    headline1: "Which",
    headline2: "university?",
    tagline: "From TUM to Heidelberg — explore every public option.",
    footer: "EXPLORE NOW",
  });

  console.log("\n6 clean editorial posts ready.");
}

run().catch(console.error);
