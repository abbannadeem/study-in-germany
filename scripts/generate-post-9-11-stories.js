// Instagram Posts 9–11 + Stories 1–2
// Matches Post 1-7 editorial DNA (cream bg, German flag stripe, Georgia serif).
import sharp from "sharp";
import path from "path";

const OUT = path.resolve("public/insta-posts");
const CITIES = path.resolve("public/cities");

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Reusable brand chrome for square 1080x1080 posts
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function chromeSquare({ eyebrow }) {
  return `
    <rect x="0" y="0" width="1080" height="6" fill="#000000"/>
    <rect x="0" y="6" width="1080" height="6" fill="#DD0000"/>
    <rect x="0" y="12" width="1080" height="6" fill="#F59E0B"/>

    <g transform="translate(60, 60)">
      <rect x="0" y="0" width="14" height="44" fill="#000000"/>
      <rect x="14" y="0" width="14" height="44" fill="#DD0000"/>
      <rect x="28" y="0" width="14" height="44" fill="#F59E0B"/>
      <text x="56" y="20" font-family="Georgia, serif" font-size="15" font-weight="700" fill="#0F172A">Study in Germany</text>
      <text x="56" y="38" font-family="Arial, sans-serif" font-size="10" font-weight="500" fill="#0F172A" opacity="0.55" letter-spacing="6">G U I D E</text>
    </g>

    ${eyebrow ? `
    <g transform="translate(60, 220)">
      <line x1="0" y1="6" x2="40" y2="6" stroke="#92400E" stroke-width="2"/>
      <text x="52" y="11" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#92400E" letter-spacing="7">${eyebrow}</text>
    </g>
    ` : ""}
  `;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// POST 9 — Nigeria announcement (uses full-bleed photo like Post 1-7)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
async function post9() {
  const overlay = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
    <defs>
      <linearGradient id="d9" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"  stop-color="black" stop-opacity="0.35"/>
        <stop offset="45%" stop-color="black" stop-opacity="0.30"/>
        <stop offset="100%" stop-color="black" stop-opacity="0.90"/>
      </linearGradient>
    </defs>
    <rect width="1080" height="1080" fill="url(#d9)"/>

    <g transform="translate(60, 60)">
      <rect x="0" y="0" width="14" height="44" fill="#000000"/>
      <rect x="14" y="0" width="14" height="44" fill="#DD0000"/>
      <rect x="28" y="0" width="14" height="44" fill="#F59E0B"/>
      <text x="56" y="20" font-family="Georgia, serif" font-size="15" font-weight="700" fill="#FFFFFF">Study in Germany</text>
      <text x="56" y="38" font-family="Arial, sans-serif" font-size="10" font-weight="500" fill="#FFFFFF" opacity="0.7" letter-spacing="6">G U I D E</text>
    </g>

    <g transform="translate(60, 660)">
      <rect x="0" y="0" width="180" height="34" rx="4" fill="#F59E0B"/>
      <text x="90" y="23" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#0F172A" text-anchor="middle" letter-spacing="3">NEW GUIDE</text>
    </g>

    <text x="60" y="770" font-family="Georgia, serif" font-size="86" font-weight="400" fill="#FFFFFF">🇳🇬 Nigeria to</text>
    <text x="60" y="860" font-family="Georgia, serif" font-size="86" font-weight="700" fill="#FFCE00" font-style="italic">Germany.</text>

    <text x="60" y="930" font-family="Arial, sans-serif" font-size="24" font-weight="400" fill="#FFFFFF" opacity="0.9">APS · Embassy Abuja · Naira transfers</text>
    <text x="60" y="962" font-family="Arial, sans-serif" font-size="24" font-weight="400" fill="#FFFFFF" opacity="0.9">Full country-specific route, now live.</text>

    <text x="60" y="1030" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="#FFCE00" letter-spacing="4">STUDYINGERMANYGUIDE.COM/GUIDES/NIGERIA</text>
  </svg>`;

  await sharp(path.join(CITIES, "frankfurt.jpg"))
    .resize(1080, 1080, { fit: "cover", position: "center" })
    .modulate({ saturation: 1.1, brightness: 0.9 })
    .composite([{ input: Buffer.from(overlay), blend: "over" }])
    .png({ quality: 100 })
    .toFile(path.join(OUT, "post-9.png"));
  console.log("OK post-9.png (Nigeria announcement)");
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// POST 10 — Cost breakdown infographic (typography-only, cream bg)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
async function post10() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
    <rect width="1080" height="1080" fill="#FBF8F1"/>
    ${chromeSquare({ eyebrow: "COST OF GERMANY 2026" })}

    <text x="60" y="330" font-family="Georgia, serif" font-size="68" font-weight="400" fill="#0F172A">What it actually</text>
    <text x="60" y="404" font-family="Georgia, serif" font-size="68" font-weight="700" fill="#92400E" font-style="italic">costs. Honestly.</text>

    <g transform="translate(60, 480)">
      <rect x="0" y="0" width="960" height="60" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1"/>
      <text x="30" y="38" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0F172A">Blocked account (1 year)</text>
      <text x="930" y="38" font-family="Georgia, serif" font-size="26" font-weight="700" fill="#92400E" text-anchor="end">€11,904</text>
    </g>

    <g transform="translate(60, 550)">
      <rect x="0" y="0" width="960" height="60" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1"/>
      <text x="30" y="38" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0F172A">Setup + visa + insurance</text>
      <text x="930" y="38" font-family="Georgia, serif" font-size="26" font-weight="700" fill="#92400E" text-anchor="end">~€400</text>
    </g>

    <g transform="translate(60, 620)">
      <rect x="0" y="0" width="960" height="60" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1"/>
      <text x="30" y="38" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0F172A">Flight + attestation</text>
      <text x="930" y="38" font-family="Georgia, serif" font-size="26" font-weight="700" fill="#92400E" text-anchor="end">~€900</text>
    </g>

    <g transform="translate(60, 690)">
      <rect x="0" y="0" width="960" height="60" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1"/>
      <text x="30" y="38" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0F172A">Monthly living — smaller student city</text>
      <text x="930" y="38" font-family="Georgia, serif" font-size="26" font-weight="700" fill="#92400E" text-anchor="end">~€900</text>
    </g>

    <g transform="translate(60, 760)">
      <rect x="0" y="0" width="960" height="60" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1"/>
      <text x="30" y="38" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0F172A">Monthly living — big city range</text>
      <text x="930" y="38" font-family="Georgia, serif" font-size="26" font-weight="700" fill="#92400E" text-anchor="end">~€1,500</text>
    </g>

    <text x="60" y="880" font-family="Georgia, serif" font-size="22" font-weight="400" fill="#334155" font-style="italic">Note: blocked account = money you get back monthly.</text>
    <text x="60" y="912" font-family="Georgia, serif" font-size="22" font-weight="400" fill="#334155" font-style="italic">Not a fee. Proof-of-funds only.</text>

    <rect x="0" y="1000" width="1080" height="80" fill="#0F172A"/>
    <text x="60" y="1048" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#FFCE00" letter-spacing="5">FULL BREAKDOWN → STUDYINGERMANYGUIDE.COM</text>
    <text x="60" y="1070" font-family="Arial, sans-serif" font-size="11" font-weight="400" fill="#FFFFFF" opacity="0.75">PKR, INR, NGN conversions inside.</text>
  </svg>`;

  await sharp(Buffer.from(svg))
    .png({ quality: 100 })
    .toFile(path.join(OUT, "post-10.png"));
  console.log("OK post-10.png (cost breakdown)");
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// POST 11 — Editorial question ("Where will you live?") using a city photo
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
async function post11() {
  const overlay = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
    <defs>
      <linearGradient id="d11" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"  stop-color="black" stop-opacity="0.30"/>
        <stop offset="40%" stop-color="black" stop-opacity="0.10"/>
        <stop offset="70%" stop-color="black" stop-opacity="0.60"/>
        <stop offset="100%" stop-color="black" stop-opacity="0.94"/>
      </linearGradient>
    </defs>
    <rect width="1080" height="1080" fill="url(#d11)"/>

    <g transform="translate(60, 60)">
      <rect x="0" y="0" width="14" height="44" fill="#000000"/>
      <rect x="14" y="0" width="14" height="44" fill="#DD0000"/>
      <rect x="28" y="0" width="14" height="44" fill="#F59E0B"/>
      <text x="56" y="20" font-family="Georgia, serif" font-size="15" font-weight="700" fill="#FFFFFF">Study in Germany</text>
      <text x="56" y="38" font-family="Arial, sans-serif" font-size="10" font-weight="500" fill="#FFFFFF" opacity="0.7" letter-spacing="6">G U I D E</text>
    </g>

    <g transform="translate(60, 700)">
      <line x1="0" y1="6" x2="40" y2="6" stroke="#FFCE00" stroke-width="2"/>
      <text x="52" y="11" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#FFCE00" letter-spacing="7">STUDENT WORK</text>
    </g>

    <text x="60" y="830" font-family="Georgia, serif" font-size="82" font-weight="400" fill="#FFFFFF">Can you work</text>
    <text x="60" y="920" font-family="Georgia, serif" font-size="82" font-weight="700" fill="#FFFFFF" font-style="italic">while studying?</text>

    <text x="60" y="985" font-family="Arial, sans-serif" font-size="20" font-weight="400" fill="#FFFFFF" opacity="0.9">Yes — 20 hrs/week, no extra permit,</text>
    <text x="60" y="1010" font-family="Arial, sans-serif" font-size="20" font-weight="400" fill="#FFFFFF" opacity="0.9">€556 mini-job earns tax-free.</text>

    <text x="60" y="1055" font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="#FFCE00" letter-spacing="4">STUDYINGERMANYGUIDE.COM/JOBS</text>
  </svg>`;

  await sharp(path.join(CITIES, "leipzig.jpg"))
    .resize(1080, 1080, { fit: "cover", position: "center" })
    .modulate({ saturation: 1.05, brightness: 0.92 })
    .composite([{ input: Buffer.from(overlay), blend: "over" }])
    .png({ quality: 100 })
    .toFile(path.join(OUT, "post-11.png"));
  console.log("OK post-11.png (Where will you live)");
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// STORY 1 — Poll: "Where are you applying from?"  (1080x1920)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
async function story1() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="1080" height="1920">
    <rect width="1080" height="1920" fill="#FBF8F1"/>

    <!-- German flag top stripe -->
    <rect x="0" y="0" width="1080" height="10" fill="#000000"/>
    <rect x="0" y="10" width="1080" height="10" fill="#DD0000"/>
    <rect x="0" y="20" width="1080" height="10" fill="#F59E0B"/>

    <!-- Brand top -->
    <g transform="translate(60, 90)">
      <rect x="0" y="0" width="18" height="60" fill="#000000"/>
      <rect x="18" y="0" width="18" height="60" fill="#DD0000"/>
      <rect x="36" y="0" width="18" height="60" fill="#F59E0B"/>
      <text x="72" y="27" font-family="Georgia, serif" font-size="20" font-weight="700" fill="#0F172A">Study in Germany</text>
      <text x="72" y="52" font-family="Arial, sans-serif" font-size="13" font-weight="500" fill="#0F172A" opacity="0.55" letter-spacing="8">G U I D E</text>
    </g>

    <!-- Eyebrow -->
    <g transform="translate(80, 500)">
      <line x1="0" y1="6" x2="60" y2="6" stroke="#92400E" stroke-width="3"/>
      <text x="76" y="14" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#92400E" letter-spacing="8">QUICK POLL</text>
    </g>

    <!-- Big headline -->
    <text x="80" y="640" font-family="Georgia, serif" font-size="90" font-weight="400" fill="#0F172A">Where are</text>
    <text x="80" y="740" font-family="Georgia, serif" font-size="90" font-weight="400" fill="#0F172A">you applying</text>
    <text x="80" y="840" font-family="Georgia, serif" font-size="90" font-weight="700" fill="#92400E" font-style="italic">from?</text>

    <!-- Option boxes -->
    <g transform="translate(80, 970)">
      <rect x="0" y="0" width="440" height="120" rx="18" fill="#FFFFFF" stroke="#0F172A" stroke-width="2"/>
      <text x="220" y="52" font-family="Arial, sans-serif" font-size="42" font-weight="700" fill="#0F172A" text-anchor="middle">🇵🇰 Pakistan</text>
      <text x="220" y="92" font-family="Arial, sans-serif" font-size="20" font-weight="400" fill="#334155" text-anchor="middle">tap the sticker →</text>
    </g>

    <g transform="translate(560, 970)">
      <rect x="0" y="0" width="440" height="120" rx="18" fill="#FFFFFF" stroke="#0F172A" stroke-width="2"/>
      <text x="220" y="52" font-family="Arial, sans-serif" font-size="42" font-weight="700" fill="#0F172A" text-anchor="middle">🇮🇳 India</text>
      <text x="220" y="92" font-family="Arial, sans-serif" font-size="20" font-weight="400" fill="#334155" text-anchor="middle">tap the sticker →</text>
    </g>

    <g transform="translate(80, 1120)">
      <rect x="0" y="0" width="440" height="120" rx="18" fill="#FFFFFF" stroke="#0F172A" stroke-width="2"/>
      <text x="220" y="52" font-family="Arial, sans-serif" font-size="42" font-weight="700" fill="#0F172A" text-anchor="middle">🇳🇬 Nigeria</text>
      <text x="220" y="92" font-family="Arial, sans-serif" font-size="20" font-weight="400" fill="#334155" text-anchor="middle">tap the sticker →</text>
    </g>

    <g transform="translate(560, 1120)">
      <rect x="0" y="0" width="440" height="120" rx="18" fill="#FFFFFF" stroke="#0F172A" stroke-width="2"/>
      <text x="220" y="52" font-family="Arial, sans-serif" font-size="42" font-weight="700" fill="#0F172A" text-anchor="middle">🌍 Somewhere else</text>
      <text x="220" y="92" font-family="Arial, sans-serif" font-size="20" font-weight="400" fill="#334155" text-anchor="middle">reply below</text>
    </g>

    <!-- Bottom URL bar -->
    <rect x="0" y="1830" width="1080" height="90" fill="#0F172A"/>
    <text x="80" y="1885" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#FFCE00" letter-spacing="4">STUDYINGERMANYGUIDE.COM</text>
  </svg>`;

  await sharp(Buffer.from(svg))
    .png({ quality: 100 })
    .toFile(path.join(OUT, "story-1.png"));
  console.log("OK story-1.png (Where applying from poll)");
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// STORY 2 — Nigeria guide announcement (1080x1920)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
async function story2() {
  const overlay = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="1080" height="1920">
    <defs>
      <linearGradient id="ds2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"  stop-color="black" stop-opacity="0.55"/>
        <stop offset="35%" stop-color="black" stop-opacity="0.20"/>
        <stop offset="75%" stop-color="black" stop-opacity="0.75"/>
        <stop offset="100%" stop-color="black" stop-opacity="0.95"/>
      </linearGradient>
    </defs>
    <rect width="1080" height="1920" fill="url(#ds2)"/>

    <!-- Brand top -->
    <g transform="translate(60, 100)">
      <rect x="0" y="0" width="18" height="60" fill="#000000"/>
      <rect x="18" y="0" width="18" height="60" fill="#DD0000"/>
      <rect x="36" y="0" width="18" height="60" fill="#F59E0B"/>
      <text x="72" y="27" font-family="Georgia, serif" font-size="20" font-weight="700" fill="#FFFFFF">Study in Germany</text>
      <text x="72" y="52" font-family="Arial, sans-serif" font-size="13" font-weight="500" fill="#FFFFFF" opacity="0.7" letter-spacing="8">G U I D E</text>
    </g>

    <!-- New chip -->
    <g transform="translate(80, 850)">
      <rect x="0" y="0" width="260" height="52" rx="6" fill="#F59E0B"/>
      <text x="130" y="35" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#0F172A" text-anchor="middle" letter-spacing="4">JUST LAUNCHED</text>
    </g>

    <!-- Big serif -->
    <text x="80" y="1010" font-family="Georgia, serif" font-size="120" font-weight="400" fill="#FFFFFF">🇳🇬 Nigeria</text>
    <text x="80" y="1130" font-family="Georgia, serif" font-size="120" font-weight="700" fill="#FFCE00" font-style="italic">to Germany.</text>

    <!-- Sub -->
    <text x="80" y="1230" font-family="Arial, sans-serif" font-size="28" font-weight="400" fill="#FFFFFF" opacity="0.9">Full country-specific route:</text>
    <text x="80" y="1268" font-family="Arial, sans-serif" font-size="28" font-weight="400" fill="#FFFFFF" opacity="0.9">APS · Embassy Abuja · Naira transfers</text>
    <text x="80" y="1306" font-family="Arial, sans-serif" font-size="28" font-weight="400" fill="#FFFFFF" opacity="0.9">Scholarships · Timeline</text>

    <!-- CTA arrow  -->
    <g transform="translate(80, 1500)">
      <text x="0" y="0" font-family="Georgia, serif" font-size="28" font-weight="400" fill="#FFFFFF" font-style="italic" opacity="0.85">Tap this story to open →</text>
    </g>

    <!-- Bottom URL bar -->
    <rect x="0" y="1830" width="1080" height="90" fill="#0F172A"/>
    <text x="80" y="1885" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#FFCE00" letter-spacing="4">STUDYINGERMANYGUIDE.COM/GUIDES/NIGERIA</text>
  </svg>`;

  await sharp(path.join(CITIES, "berlin.jpg"))
    .resize(1080, 1920, { fit: "cover", position: "center" })
    .modulate({ saturation: 1.05, brightness: 0.88 })
    .composite([{ input: Buffer.from(overlay), blend: "over" }])
    .png({ quality: 100 })
    .toFile(path.join(OUT, "story-2.png"));
  console.log("OK story-2.png (Nigeria launch)");
}

(async () => {
  await post9();
  await post10();
  await post11();
  await story1();
  await story2();
  console.log("\nAll 3 posts + 2 stories generated.");
})();
