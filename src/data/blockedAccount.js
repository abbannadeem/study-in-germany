// Comparison of the main blocked-account (Sperrkonto) providers for German
// student visas. Fees and timing can change — always confirm on the provider's
// official site before signing up.

export const blockedAccountProviders = [
  {
    slug: "expatrio",
    name: "Expatrio",
    setupFee: "€49 (one-off, refundable on activation)",
    monthlyFee: "Free",
    openingTime: "1–3 business days",
    transferSpeed: "Fast (online, no branch visit)",
    languages: ["English", "German"],
    bundleNote:
      "Offers a 'Value Package' bundling blocked account + health insurance + bank account.",
    pros: [
      "All-English process",
      "Health insurance bundle available",
      "Fastest setup",
    ],
    cons: ["Bundle can feel like upsell", "Customer service quality varies"],
    website: "https://www.expatrio.com?p=SGGUIDE",
    sponsored: true,
    description:
      "Berlin-based fintech designed for international students — quick, English-friendly, popular bundle option.",
  },
  {
    slug: "fintiba",
    name: "Fintiba",
    setupFee: "€89 (one-off)",
    monthlyFee: "€4.90",
    openingTime: "1–2 business days",
    transferSpeed: "Fast (online)",
    languages: ["English", "German"],
    bundleNote: "Also offers health insurance and account in one 'Plus' bundle.",
    pros: [
      "Established and trusted",
      "Strong English support",
      "Available in many countries",
    ],
    cons: ["Higher monthly fee", "Bundle locks you in for longer"],
    website: "https://www.fintiba.com/",
    description:
      "One of Germany's longest-running blocked-account fintechs, very widely used by international students.",
  },
  {
    slug: "coracle",
    name: "Coracle",
    setupFee: "€99 (one-off)",
    monthlyFee: "€5.90",
    openingTime: "2–5 business days",
    transferSpeed: "Standard (online)",
    languages: ["English", "German"],
    bundleNote: "Optional add-on health insurance.",
    pros: [
      "Simple, no-frills product",
      "English support",
      "Solid for one-off blocked account use",
    ],
    cons: ["Pricier monthly fee", "Smaller user community"],
    website: "https://coracle.de/en/",
    description:
      "A no-frills blocked account that often appears alongside Fintiba and Expatrio in embassy lists.",
  },
  {
    slug: "deutsche-bank",
    name: "Deutsche Bank",
    setupFee: "€150 (one-off)",
    monthlyFee: "Free",
    openingTime: "2–6 weeks",
    transferSpeed: "Slow (paper forms + branch visit on arrival)",
    languages: ["English (limited)", "German"],
    bundleNote: "Traditional bank — separate health insurance required.",
    pros: [
      "Recognised everywhere",
      "Full bank account on arrival",
      "No monthly fees",
    ],
    cons: [
      "Slow paper-based onboarding",
      "Branch visit usually needed in Germany",
      "Not great if you need fast visa turnaround",
    ],
    website: "https://www.deutsche-bank.de/pk/en/students.html",
    description:
      "The traditional, well-known choice — reliable but much slower than the fintech options.",
  },
  {
    slug: "icici",
    name: "ICICI Bank (Germany)",
    setupFee: "Often free (one-off)",
    monthlyFee: "Free",
    openingTime: "1–3 weeks",
    transferSpeed: "Standard (online + India support)",
    languages: ["English", "Hindi"],
    bundleNote:
      "Popular with Indian students — funds transferred from ICICI India branches.",
    pros: [
      "Free setup and monthly",
      "Convenient if you already bank with ICICI in India",
      "Hindi support",
    ],
    cons: [
      "Smaller acceptance among embassies (check yours)",
      "More documentation if you don't already have ICICI India account",
    ],
    website: "https://www.icicibank.de/",
    description:
      "Indian-bank-run option in Germany — popular among Indian and South-Asian students because of home-country support.",
  },
];
