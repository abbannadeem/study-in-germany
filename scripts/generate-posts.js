// Generate professional Instagram posts using REAL city photos + text overlay
import sharp from "sharp";
import path from "path";

const OUT = path.resolve("public/insta-posts");

// Helper — generate text overlay SVG (transparent background)
function textOverlay({ eyebrow, headline1, headline2, tagline, cta }) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080">
    <!-- German flag ribbon top -->
    <g transform="rotate(-12 0 60)">
      <rect x="-60" y="40" width="520" height="32" fill="#000000"/>
      <rect x="-60" y="72" width="520" height="32" fill="#DD0000"/>
      <rect x="-60" y="104" width="520" height="32" fill="#FFCE00"/>
    </g>

    <!-- Eyebrow tag -->
    <rect x="60" y="300" width="${eyebrow.length * 22 + 60}" height="56" rx="28" fill="#DD0000"/>
    <text x="${90}" y="338" font-family="Arial Black, sans-serif" font-size="26" font-weight="900" fill="#FFFFFF" letter-spacing="3">${eyebrow}</text>

    <!-- Huge headline -->
    <text x="60" y="490" font-family="Arial Black, sans-serif" font-size="120" font-weight="900" fill="#FFFFFF" letter-spacing="-4" style="paint-order:stroke;stroke:#000000;stroke-width:8px;stroke-linejoin:round;">${headline1}</text>
    <text x="60" y="610" font-family="Arial Black, sans-serif" font-size="120" font-weight="900" fill="#FFCE00" letter-spacing="-4" style="paint-order:stroke;stroke:#000000;stroke-width:8px;stroke-linejoin:round;">${headline2}</text>

    <!-- Yellow underline -->
    <rect x="60" y="630" width="320" height="10" fill="#FFCE00"/>

    <!-- Tagline -->
    <text x="60" y="720" font-family="Arial, sans-serif" font-size="36" font-weight="600" fill="#FFFFFF" style="paint-order:stroke;stroke:#000000;stroke-width:5px;stroke-linejoin:round;">${tagline}</text>

    <!-- CTA box bottom -->
    <rect x="60" y="960" width="960" height="80" rx="14" fill="#FFFFFF"/>
    <text x="540" y="1013" font-family="Arial Black, sans-serif" font-size="34" font-weight="900" fill="#0F172A" text-anchor="middle">${cta}</text>
  </svg>`);
}

async function makePost({ photo, output, eyebrow, headline1, headline2, tagline, cta }) {
  const overlay = textOverlay({ eyebrow, headline1, headline2, tagline, cta });

  await sharp(`public/cities/${photo}`)
    .resize(1080, 1080, { fit: "cover", position: "center" })
    // Darken the photo so text reads
    .composite([
      {
        input: Buffer.from(
          `<svg width="1080" height="1080"><rect width="1080" height="1080" fill="black" opacity="0.55"/></svg>`
        ),
        blend: "over",
      },
      { input: overlay, blend: "over" },
    ])
    .png({ quality: 100 })
    .toFile(`${OUT}/${output}`);

  console.log(`✓ ${output}`);
}

async function run() {
  // Post 1 — Welcome / hero
  await makePost({
    photo: "berlin.jpg",
    output: "post-1.png",
    eyebrow: "FREE GUIDE",
    headline1: "STUDY IN",
    headline2: "GERMANY",
    tagline: "Your complete guide — made simple",
    cta: "studyingermanyguide.com",
  });

  // Post 2 — Coming up / week ahead
  await makePost({
    photo: "munich.jpg",
    output: "post-2.png",
    eyebrow: "THIS WEEK",
    headline1: "COMING",
    headline2: "UP",
    tagline: "5 honest answers about Germany",
    cta: "Follow @studyingermanyguide_",
  });

  // Post 3 — Why Germany
  await makePost({
    photo: "heidelberg.jpg",
    output: "post-3.png",
    eyebrow: "QUESTION 01",
    headline1: "WHY",
    headline2: "GERMANY?",
    tagline: "World-class education, tuition-free",
    cta: "Full answer at studyingermanyguide.com",
  });

  // Post 4 — Cost
  await makePost({
    photo: "cologne.jpg",
    output: "post-4.png",
    eyebrow: "QUESTION 02",
    headline1: "REAL",
    headline2: "COST?",
    tagline: "Tuition, rent, food — the honest numbers",
    cta: "Calculator at studyingermanyguide.com",
  });

  // Post 5 — Visa
  await makePost({
    photo: "frankfurt.jpg",
    output: "post-5.png",
    eyebrow: "QUESTION 03",
    headline1: "VISA",
    headline2: "MYTHS",
    tagline: "What's true, what's not — busted",
    cta: "Step-by-step at studyingermanyguide.com",
  });

  console.log("\n5 professional posts generated with REAL photos!");
}

run().catch(console.error);
