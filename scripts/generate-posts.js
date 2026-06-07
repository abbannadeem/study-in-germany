// Minimalist editorial Instagram series — centered serif + logo corner + URL bottom
import sharp from "sharp";
import path from "path";

const OUT = path.resolve("public/insta-posts");

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Subtle full-image overlay (very gentle darkening for text legibility)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function softOverlay() {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <rect width="1080" height="1080" fill="black" opacity="0.42"/>
  </svg>`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Logo top-left (full logo: flag block + Study in Germany + GUIDE)
// On dark photo overlay → white text version
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function logoTopLeft() {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <g transform="translate(60, 60)">
      <!-- Flag block -->
      <defs>
        <clipPath id="rf">
          <rect x="0" y="0" width="80" height="80" rx="16" ry="16"/>
        </clipPath>
      </defs>
      <g clip-path="url(#rf)">
        <rect x="0"  y="0" width="27" height="80" fill="#000000"/>
        <rect x="27" y="0" width="26" height="80" fill="#DD0000"/>
        <rect x="53" y="0" width="27" height="80" fill="#F59E0B"/>
      </g>

      <!-- Wordmark stacked vertically -->
      <text x="100" y="36"
            font-family="Georgia, serif"
            font-size="24"
            font-weight="700"
            fill="#FFFFFF">Study in <tspan fill="#F59E0B">Germany</tspan></text>
      <text x="100" y="64"
            font-family="Arial, sans-serif"
            font-size="12"
            font-weight="500"
            fill="#FFFFFF"
            opacity="0.65"
            letter-spacing="10">G U I D E</text>
    </g>
  </svg>`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CENTERED big serif text — main statement
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function centerHeadline({ line1, line2, eyebrow }) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <!-- Tiny eyebrow above headline (optional) -->
    <text x="540" y="440"
          font-family="Arial, sans-serif"
          font-size="14"
          font-weight="600"
          fill="#FFFFFF"
          text-anchor="middle"
          opacity="0.7"
          letter-spacing="8">${eyebrow}</text>

    <!-- Big elegant serif headline, centered -->
    <text x="540" y="560"
          font-family="Georgia, serif"
          font-size="120"
          font-weight="400"
          fill="#FFFFFF"
          text-anchor="middle"
          letter-spacing="-2">${line1}</text>

    <text x="540" y="690"
          font-family="Georgia, serif"
          font-size="120"
          font-weight="400"
          fill="#FFFFFF"
          text-anchor="middle"
          font-style="italic"
          letter-spacing="-2">${line2}</text>
  </svg>`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Bottom: URL on right side + arrow
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function bottomUrl({ series }) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
    <!-- Bottom-left: series tag -->
    <text x="60" y="1020"
          font-family="Arial, sans-serif"
          font-size="13"
          font-weight="600"
          fill="#FFFFFF"
          opacity="0.7"
          letter-spacing="4">${series}</text>

    <!-- Bottom-right: URL + arrow -->
    <text x="1010" y="1020"
          font-family="Arial, sans-serif"
          font-size="16"
          font-weight="600"
          fill="#FFFFFF"
          text-anchor="end"
          letter-spacing="2">studyingermanyguide.com</text>

    <text x="1020" y="1020"
          font-family="Arial, sans-serif"
          font-size="20"
          font-weight="700"
          fill="#F59E0B"
          text-anchor="start">  →</text>
  </svg>`);
}

async function makePost({ photo, output, eyebrow, line1, line2, series }) {
  await sharp(`public/cities/${photo}`)
    .resize(1080, 1080, { fit: "cover", position: "center" })
    .modulate({ saturation: 1.05, brightness: 0.92 })
    .composite([
      { input: softOverlay(), blend: "over" },
      { input: logoTopLeft(), blend: "over" },
      { input: centerHeadline({ eyebrow, line1, line2 }), blend: "over" },
      { input: bottomUrl({ series }), blend: "over" },
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
    line1: "Study in",
    line2: "Germany.",
    series: "INTRO",
  });

  // Post 2 — Why Germany?
  await makePost({
    photo: "heidelberg.jpg",
    output: "post-2.png",
    eyebrow: "THE WHY",
    line1: "Why",
    line2: "Germany?",
    series: "Q 01 / 05",
  });

  // Post 3 — Which country?
  await makePost({
    photo: "munich.jpg",
    output: "post-3.png",
    eyebrow: "THE WHO",
    line1: "Where",
    line2: "are you from?",
    series: "Q 02 / 05",
  });

  // Post 4 — Cost
  await makePost({
    photo: "cologne.jpg",
    output: "post-4.png",
    eyebrow: "THE COST",
    line1: "Can you",
    line2: "afford it?",
    series: "Q 03 / 05",
  });

  // Post 5 — Visa
  await makePost({
    photo: "frankfurt.jpg",
    output: "post-5.png",
    eyebrow: "THE VISA",
    line1: "How long",
    line2: "is the visa?",
    series: "Q 04 / 05",
  });

  // Post 6 — Universities
  await makePost({
    photo: "hamburg.jpg",
    output: "post-6.png",
    eyebrow: "THE UNIVERSITIES",
    line1: "Which",
    line2: "university?",
    series: "Q 05 / 05",
  });

  console.log("\n6 minimal editorial posts ready.");
}

run().catch(console.error);
