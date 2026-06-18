// Instagram Post 8 — 7-slide carousel: top 5 German student visa rejection reasons.
// Format: portrait 1080x1350 (Instagram carousel max screen real-estate).
// Content sourced from the same rejection-reasons block now live on /visa.
//
// Slides:
//   1. Hook
//   2-6. Reason 1-5 (one per slide)
//   7. CTA
//
// All slides share the same brand DNA: cream background, German flag stripe,
// Georgia serif headlines, Arial body, accent yellow.
import sharp from "sharp";
import path from "path";

const OUT_DIR = path.resolve("public/insta-posts");
const W = 1080;
const H = 1350;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Slide content
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Body and fix written as arrays of lines (manual wrap, ~32 chars/line at 26px)
const REASONS = [
  {
    n: "01",
    title: "Unclear study purpose",
    body: [
      "Generic answers like &#8220;Germany is famous&#8221;",
      "or &#8220;tuition is free&#8221; fail. Officers want to",
      "hear the SPECIFIC programme, professor",
      "or industry that pulled you to this exact",
      "university.",
    ],
    fix: [
      "FIX: name 2 modules + 1 professor in",
      "your motivation letter.",
    ],
  },
  {
    n: "02",
    title: "Weak finances",
    body: [
      "Blocked account barely at the €11,904",
      "minimum, recent suspicious deposits in",
      "your bank statements, or a sponsor with",
      "unclear income — any of these and the",
      "visa is denied.",
    ],
    fix: [
      "FIX: overshoot by €200+ and show 6",
      "months of clean statements.",
    ],
  },
  {
    n: "03",
    title: "Document contradictions",
    body: [
      "Mismatched dates, spelling of your",
      "father&#39;s name, address on the visa",
      "form vs your passport, or a CV saying",
      "&#8220;intern&#8221; while the recommendation",
      "letter says &#8220;research assistant.&#8221;",
    ],
    fix: [
      "FIX: cross-check every document the",
      "night before submission.",
    ],
  },
  {
    n: "04",
    title: "No plan after the degree",
    body: [
      "Visa officers look for &#8220;ties to home&#8221;",
      "AND a realistic post-study path.",
      "&#8220;I&#39;ll figure it out&#8221; is the worst",
      "possible answer in the interview.",
    ],
    fix: [
      "FIX: prepare ONE industry + one option",
      "for your home country.",
    ],
  },
  {
    n: "05",
    title: "Sloppy presentation",
    body: [
      "Missing copies, uncertified translations,",
      "late appointment, casual clothes —",
      "this is treated as a scholarship interview,",
      "not an errand. Most rejections happen",
      "on tone, not paperwork.",
    ],
    fix: [
      "FIX: practice your answers out loud at",
      "least 3 times.",
    ],
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Reusable brand chrome — top stripe + corner brand block + footer
// Returns SVG fragments injected into every slide.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function chrome({ pageNum, total, footerCTA = "STUDYINGERMANYGUIDE.COM/VISA" }) {
  return `
    <!-- German flag stripe top -->
    <rect x="0" y="0" width="${W}" height="8" fill="#000000"/>
    <rect x="0" y="8" width="${W}" height="8" fill="#DD0000"/>
    <rect x="0" y="16" width="${W}" height="8" fill="#F59E0B"/>

    <!-- Brand block top-left -->
    <g transform="translate(60, 60)">
      <rect x="0" y="0" width="14" height="44" fill="#000000"/>
      <rect x="14" y="0" width="14" height="44" fill="#DD0000"/>
      <rect x="28" y="0" width="14" height="44" fill="#F59E0B"/>
      <text x="56" y="20" font-family="Georgia, serif" font-size="15" font-weight="700" fill="#0F172A">Study in Germany</text>
      <text x="56" y="38" font-family="Arial, sans-serif" font-size="10" font-weight="500" fill="#0F172A" opacity="0.55" letter-spacing="6">G U I D E</text>
    </g>

    <!-- Page indicator top-right -->
    <text x="${W - 60}" y="86" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#0F172A" opacity="0.55" text-anchor="end" letter-spacing="4">${pageNum} / ${total}</text>

    <!-- Bottom URL bar -->
    <rect x="0" y="${H - 80}" width="${W}" height="80" fill="#0F172A"/>
    <text x="60" y="${H - 38}" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#FFCE00" letter-spacing="5">${footerCTA}</text>
    <text x="60" y="${H - 16}" font-family="Arial, sans-serif" font-size="11" font-weight="400" fill="#FFFFFF" opacity="0.7">Free 2026-updated visa guide + interview prep.</text>
  `;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Slide 1 — Hook
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function hookSlide(total) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
    <rect width="${W}" height="${H}" fill="#FBF8F1"/>
    ${chrome({ pageNum: 1, total })}

    <!-- Big red warning chip -->
    <g transform="translate(60, 270)">
      <rect x="0" y="0" width="380" height="44" rx="6" fill="#DC2626"/>
      <text x="190" y="29" font-family="Arial, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="3">VISA REJECTION PLAYBOOK</text>
    </g>

    <!-- Headline 4-line stack -->
    <text x="60" y="430" font-family="Georgia, serif" font-size="74" font-weight="400" fill="#0F172A">5 reasons</text>
    <text x="60" y="510" font-family="Georgia, serif" font-size="74" font-weight="400" fill="#0F172A">your German</text>
    <text x="60" y="590" font-family="Georgia, serif" font-size="74" font-weight="400" fill="#0F172A">student visa</text>
    <text x="60" y="670" font-family="Georgia, serif" font-size="74" font-weight="700" fill="#DC2626" font-style="italic">gets rejected.</text>

    <!-- Subline -->
    <text x="60" y="780" font-family="Arial, sans-serif" font-size="22" font-weight="400" fill="#1E293B">From the playbook embassies in</text>
    <text x="60" y="812" font-family="Arial, sans-serif" font-size="22" font-weight="400" fill="#1E293B">Islamabad, New Delhi, Dhaka, Hanoi.</text>

    <!-- Big swipe arrow -->
    <g transform="translate(60, 1080)">
      <line x1="0" y1="20" x2="220" y2="20" stroke="#92400E" stroke-width="3"/>
      <polygon points="220,20 200,10 200,30" fill="#92400E"/>
      <text x="0" y="70" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="#92400E" letter-spacing="4">SWIPE</text>
    </g>
  </svg>`;
  return Buffer.from(svg);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Slides 2-6 — one reason per slide
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function reasonSlide(reason, pageNum, total) {
  const BODY_X = 60;
  const BODY_Y = 600;
  const BODY_LH = 42; // line-height in px
  const FIX_X = 80;
  // Position FIX block based on body length
  const fixBoxY = BODY_Y + reason.body.length * BODY_LH + 60;

  const bodyLines = reason.body
    .map(
      (line, i) =>
        `<text x="${BODY_X}" y="${BODY_Y + i * BODY_LH}" font-family="Georgia, serif" font-size="30" font-weight="400" fill="#1E293B">${line}</text>`
    )
    .join("");

  const fixLines = reason.fix
    .map(
      (line, i) =>
        `<text x="${FIX_X}" y="${fixBoxY + 36 + i * 26}" font-family="Arial, sans-serif" font-size="19" font-weight="700" fill="#0F172A">${line}</text>`
    )
    .join("");

  const fixBoxH = 30 + reason.fix.length * 26;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
    <rect width="${W}" height="${H}" fill="#FBF8F1"/>
    ${chrome({ pageNum, total })}

    <!-- Reason number — huge serif background, bold serif foreground -->
    <text x="60" y="380" font-family="Georgia, serif" font-size="280" font-weight="400" fill="#0F172A" opacity="0.08">${reason.n}</text>
    <text x="60" y="380" font-family="Georgia, serif" font-size="160" font-weight="700" fill="#92400E" font-style="italic">${reason.n}</text>

    <!-- Title -->
    <text x="60" y="510" font-family="Georgia, serif" font-size="54" font-weight="700" fill="#0F172A">${reason.title}</text>

    <!-- Body text (native SVG text, manually wrapped) -->
    ${bodyLines}

    <!-- FIX banner -->
    <rect x="60" y="${fixBoxY}" width="${W - 120}" height="${fixBoxH}" rx="8" fill="#FFCE00"/>
    ${fixLines}
  </svg>`;
  return Buffer.from(svg);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Slide 7 — CTA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function ctaSlide(total) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
    <rect width="${W}" height="${H}" fill="#0F172A"/>

    <!-- German flag stripe top -->
    <rect x="0" y="0" width="${W}" height="8" fill="#000000"/>
    <rect x="0" y="8" width="${W}" height="8" fill="#DD0000"/>
    <rect x="0" y="16" width="${W}" height="8" fill="#F59E0B"/>

    <!-- Brand block top-left (light) -->
    <g transform="translate(60, 60)">
      <rect x="0" y="0" width="14" height="44" fill="#000000"/>
      <rect x="14" y="0" width="14" height="44" fill="#DD0000"/>
      <rect x="28" y="0" width="14" height="44" fill="#F59E0B"/>
      <text x="56" y="20" font-family="Georgia, serif" font-size="15" font-weight="700" fill="#FFFFFF">Study in Germany</text>
      <text x="56" y="38" font-family="Arial, sans-serif" font-size="10" font-weight="500" fill="#FFFFFF" opacity="0.55" letter-spacing="6">G U I D E</text>
    </g>

    <!-- Page indicator -->
    <text x="${W - 60}" y="86" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" opacity="0.55" text-anchor="end" letter-spacing="4">${total} / ${total}</text>

    <!-- Eyebrow -->
    <g transform="translate(60, 380)">
      <line x1="0" y1="6" x2="40" y2="6" stroke="#FFCE00" stroke-width="2"/>
      <text x="52" y="11" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#FFCE00" letter-spacing="7">NEXT STEP</text>
    </g>

    <!-- Headline -->
    <text x="60" y="500" font-family="Georgia, serif" font-size="74" font-weight="400" fill="#FFFFFF">Get the full</text>
    <text x="60" y="580" font-family="Georgia, serif" font-size="74" font-weight="700" fill="#FFCE00" font-style="italic">visa walkthrough.</text>

    <!-- Body -->
    <text x="60" y="700" font-family="Arial, sans-serif" font-size="22" font-weight="400" fill="#FFFFFF" opacity="0.85">8-step timeline, Top 10 embassy</text>
    <text x="60" y="732" font-family="Arial, sans-serif" font-size="22" font-weight="400" fill="#FFFFFF" opacity="0.85">questions, country-specific notes —</text>
    <text x="60" y="764" font-family="Arial, sans-serif" font-size="22" font-weight="400" fill="#FFFFFF" opacity="0.85">all updated June 2026, all free.</text>

    <!-- CTA button -->
    <g transform="translate(60, 870)">
      <rect x="0" y="0" width="600" height="86" rx="10" fill="#FFCE00"/>
      <text x="300" y="58" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0F172A" text-anchor="middle" letter-spacing="3">studyingermanyguide.com/visa</text>
    </g>

    <!-- Save / share prompt -->
    <text x="60" y="1100" font-family="Georgia, serif" font-size="22" font-weight="400" fill="#FFFFFF" font-style="italic" opacity="0.8">Save this for your visa interview.</text>
    <text x="60" y="1140" font-family="Georgia, serif" font-size="22" font-weight="400" fill="#FFFFFF" font-style="italic" opacity="0.8">Share with a friend applying too.</text>

    <!-- Bottom strip -->
    <rect x="0" y="${H - 8}" width="${W}" height="8" fill="#F59E0B"/>
  </svg>`;
  return Buffer.from(svg);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Build all slides
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
(async () => {
  const TOTAL = 7;
  await sharp(hookSlide(TOTAL))
    .png({ quality: 100 })
    .toFile(path.join(OUT_DIR, "post-8-1.png"));
  console.log("OK post-8-1.png (hook)");

  for (let i = 0; i < REASONS.length; i++) {
    await sharp(reasonSlide(REASONS[i], i + 2, TOTAL))
      .png({ quality: 100 })
      .toFile(path.join(OUT_DIR, `post-8-${i + 2}.png`));
    console.log(`OK post-8-${i + 2}.png (reason ${REASONS[i].n})`);
  }

  await sharp(ctaSlide(TOTAL))
    .png({ quality: 100 })
    .toFile(path.join(OUT_DIR, "post-8-7.png"));
  console.log("OK post-8-7.png (CTA)");

  console.log("\nDone — upload all 7 PNGs as a single carousel post.");
})();
