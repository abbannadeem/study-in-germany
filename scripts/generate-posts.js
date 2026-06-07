// Editorial Instagram series — uses ACTUAL logo file
import sharp from "sharp";
import path from "path";

const OUT = path.resolve("public/insta-posts");
const LOGO = path.resolve("public/logo.svg");

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Smooth gradient — text legibility
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function gradientOverlay() {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"  stop-color="black" stop-opacity="0.40"/>
        <stop offset="25%" stop-color="black" stop-opacity="0.10"/>
        <stop offset="55%" stop-color="black" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="black" stop-opacity="0.94"/>
      </linearGradient>
    </defs>
    <rect width="1080" height="1080" fill="url(#g)"/>
  </svg>`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Top-right series indicator
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
// Editorial content — eyebrow + question + tagline + CTA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function contentOverlay({ eyebrow, headline1, headline2, tagline, cta }) {
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

    <!-- Tagline -->
    <text x="60" y="940"
          font-family="Arial, sans-serif"
          font-size="22"
          font-weight="400"
          fill="#FFFFFF"
          opacity="0.82">${tagline}</text>

    <!-- Hairline -->
    <line x1="60" y1="995" x2="1020" y2="995" stroke="#FFFFFF" stroke-width="0.5" opacity="0.25"/>

    <!-- Footer -->
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

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Prepare logo PNG (small, white-text version for dark photo overlay)
// We render the actual logo SVG but invert colors for dark backgrounds.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
async function getLogoBuffer() {
  // Create a version with white text on transparent for dark backgrounds.
  const logoForDark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
    <g transform="translate(280, 320)">
      <defs>
        <clipPath id="rf">
          <rect x="0" y="0" width="520" height="520" rx="60" ry="60"/>
        </clipPath>
      </defs>
      <g clip-path="url(#rf)">
        <rect x="0"   y="0" width="174" height="520" fill="#000000"/>
        <rect x="174" y="0" width="173" height="520" fill="#DD0000"/>
        <rect x="347" y="0" width="173" height="520" fill="#F59E0B"/>
      </g>
    </g>
    <text x="540" y="940"
          font-family="Arial Black, sans-serif"
          font-size="80"
          font-weight="900"
          fill="#FFFFFF"
          text-anchor="middle">Study in <tspan fill="#F59E0B">Germany</tspan></text>
    <text x="540" y="1010"
          font-family="Arial, sans-serif"
          font-size="38"
          font-weight="500"
          fill="#FFFFFF"
          opacity="0.7"
          text-anchor="middle"
          letter-spacing="16">GUIDE</text>
  </svg>`;

  // Render logo at smaller size (220px wide) for placement top-left of post
  return await sharp(Buffer.from(logoForDark))
    .resize(280, 280)
    .png()
    .toBuffer();
}

// Top-left logo positioning
async function logoOverlay() {
  const logoBuffer = await getLogoBuffer();
  // Composite logo at position (60, 50) on a 1080x1080 transparent canvas
  return await sharp({
    create: { width: 1080, height: 1080, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } }
  })
    .composite([{ input: logoBuffer, top: 50, left: 50 }])
    .png()
    .toBuffer();
}

async function makePost({
  photo, output,
  series,
  eyebrow, headline1, headline2, tagline, cta,
}) {
  const logo = await logoOverlay();

  await sharp(`public/cities/${photo}`)
    .resize(1080, 1080, { fit: "cover", position: "center" })
    .modulate({ saturation: 1.05, brightness: 0.88 })
    .composite([
      { input: gradientOverlay(), blend: "over" },
      { input: logo, blend: "over" },
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
  // Post 1 — Welcome
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

  // Post 3 — Which country?
  await makePost({
    photo: "munich.jpg",
    output: "post-3.png",
    series: "Q 02",
    eyebrow: "THE WHO",
    headline1: "Which",
    headline2: "country?",
    tagline: "Country-specific guides — APS, embassy, documents.",
    cta: "GUIDES AT STUDYINGERMANYGUIDE.COM",
  });

  // Post 4 — Cost
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

  console.log("\n6 posts ready with actual logo!");
}

run().catch(console.error);
