// Central affiliate link builder. Keeping tracking IDs in ONE place so every
// outbound Expatrio / Fintiba / DR-WALTER / Mawista / Care Concept link goes
// through the same code path. That means:
//   • URL updates are one-line changes.
//   • Every affiliate link consistently uses rel="sponsored noopener" +
//     target="_blank" per FTC/Google guidelines.
//   • Once a provider is not approved yet, the fallback URL is the vanilla
//     provider website (still useful, just no tracking).

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// APPROVED partners — tracking parameters live
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const AFFILIATES = {
  expatrio: {
    slug: "expatrio",
    name: "Expatrio",
    // Partner ID: 2053407 · Preferred code: SGGUIDE
    url: "https://www.expatrio.com?p=SGGUIDE",
    approved: true,
  },
  // Fintiba — awaiting Eslam's tracking-link email
  fintiba: {
    slug: "fintiba",
    name: "Fintiba",
    url: "https://www.fintiba.com/",
    approved: false,
  },
  coracle: {
    slug: "coracle",
    name: "Coracle",
    url: "https://coracle.de/en/",
    approved: false,
  },
  "dr-walter": {
    slug: "dr-walter",
    name: "DR-WALTER",
    url: "https://www.dr-walter.com/en/",
    approved: false,
  },
  mawista: {
    slug: "mawista",
    name: "Mawista",
    url: "https://www.mawista.com/en/",
    approved: false,
  },
  "care-concept": {
    slug: "care-concept",
    name: "Care Concept",
    url: "https://www.care-concept.de/",
    approved: false,
  },
};

// Get the outbound URL for a partner (by slug). Falls back to the provider's
// own website if not approved yet.
export function affiliateUrl(slug) {
  return AFFILIATES[slug]?.url || null;
}

// Whether an outbound link is a real affiliate link (approved partnership) —
// use this to decide whether to render the rel="sponsored" attribute.
export function isSponsored(slug) {
  return AFFILIATES[slug]?.approved === true;
}

// Full <a> attributes object for a partner link. Spread onto any <a>:
//   <a {...affiliateLinkProps("expatrio")}>Open Expatrio →</a>
export function affiliateLinkProps(slug) {
  const url = affiliateUrl(slug);
  if (!url) return {};
  return {
    href: url,
    target: "_blank",
    rel: isSponsored(slug) ? "sponsored noopener" : "noopener noreferrer",
  };
}
