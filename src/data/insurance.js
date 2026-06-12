// Health insurance providers for international students in Germany.
// Two distinct categories:
//   1) Pre-arrival / visa insurance — covers you for the visa application + first 3 months
//   2) Long-term student insurance — once you arrive and enroll
//
// Affiliate-ready: DR-WALTER, Mawista, Care Concept all run affiliate programs.

export const insuranceIntro = {
  title: "Health insurance in Germany",
  summary:
    "Health insurance is mandatory in Germany — for the visa, for your enrolment, and by law. International students typically need two policies: pre-arrival travel insurance for the visa, then either public statutory insurance (under 30) or private insurance (over 30) once enrolled.",
  warnings: [
    "Without proof of valid health insurance, your visa will be rejected.",
    "Without proof of valid insurance, German universities will not let you enrol.",
    "Switching between public and private insurance in Germany is one-way — choose carefully.",
  ],
};

export const insuranceCategories = [
  {
    id: "pre-arrival",
    label: "Pre-arrival / visa insurance",
    description:
      "Covers you from your home country through the visa appointment, your flight, and your first 0–3 months in Germany before public insurance kicks in. Required for the visa application.",
    needed: "Everyone applying for a student visa",
    duration: "30 days – 5 years (depending on plan)",
    coverage:
      "Emergency medical care, hospitalization, dental emergencies, repatriation.",
  },
  {
    id: "public",
    label: "Public statutory (GKV)",
    description:
      "The standard for international students under 30. Once you're enrolled in a German university, you can join a public statutory health insurance company (Gesetzliche Krankenversicherung). Roughly €125/month, broad coverage, almost no out-of-pocket.",
    needed: "Students under 30 who plan to study long-term in Germany",
    duration: "Throughout your studies",
    coverage:
      "Doctor visits, hospital stays, prescriptions, mental health, dental basic — almost everything.",
  },
  {
    id: "private",
    label: "Private student insurance (PKV)",
    description:
      "For students over 30, students in language courses, students in preparatory programmes (Studienkolleg), or those who explicitly opt out of public insurance. Usually cheaper monthly but more limited.",
    needed: "Students over 30, language-course students, preparatory students",
    duration: "Throughout your studies",
    coverage:
      "Doctor visits and hospitalization, but often with deductibles, dental and pregnancy limits.",
  },
];

export const providers = [
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PRE-ARRIVAL / VISA INSURANCE
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    slug: "dr-walter-educare24",
    name: "DR-WALTER Educare24",
    category: "pre-arrival",
    type: "Travel + study insurance",
    monthlyFee: "From €30/month",
    setup: "Online in 15 minutes",
    coverage: "Up to 5 years",
    bundle: "Often bundled with Expatrio Value Package",
    pros: [
      "Recognized by all German embassies for visa",
      "Bundled with Expatrio blocked account (popular for South Asian students)",
      "Covers pre-arrival + arrival period seamlessly",
      "Direct billing with German doctors (no paperwork upfront)",
      "Free cancellation if visa is denied",
    ],
    cons: [
      "Not a long-term solution — switch to public insurance after enrolment",
      "Deductible per claim (€50–100)",
      "Limited dental and pregnancy coverage",
    ],
    bestFor:
      "Most international students applying via Expatrio — comes bundled with the blocked account.",
    affiliate: true,
  },
  {
    slug: "mawista-student",
    name: "Mawista Student",
    category: "pre-arrival",
    type: "Travel + study insurance",
    monthlyFee: "From €33/month",
    setup: "Online in 10 minutes",
    coverage: "Up to 5 years",
    bundle: "Standalone or with Fintiba blocked account",
    pros: [
      "Recognized by German embassies",
      "Available standalone (you don't need a specific blocked account provider)",
      "Wide coverage including prep courses and language schools",
      "English customer support",
      "Refund if visa denied",
    ],
    cons: [
      "Deductible €50/claim for outpatient treatment",
      "Some dental procedures excluded",
      "Need to switch to public insurance once enrolled in a degree programme",
    ],
    bestFor:
      "Students using Fintiba, or those who want standalone visa insurance without bundling.",
    affiliate: true,
  },
  {
    slug: "care-concept-camp-aid",
    name: "Care Concept Camp Aid",
    category: "pre-arrival",
    type: "Travel + study insurance",
    monthlyFee: "From €33/month",
    setup: "Online in 10 minutes",
    coverage: "Up to 5 years",
    bundle: "Standalone — works with any blocked account provider",
    pros: [
      "Recognized by all German embassies",
      "Strong support for African and South Asian markets",
      "Includes preparatory courses (Studienkolleg)",
      "Repatriation included",
      "Refund on visa denial",
    ],
    cons: [
      "Smaller customer base than DR-WALTER / Mawista",
      "Deductible per claim",
      "Pregnancy coverage limited",
    ],
    bestFor:
      "Students wanting a standalone insurance independent of their blocked account provider.",
    affiliate: true,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PUBLIC (GKV) — long-term, once enrolled, under 30
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    slug: "tk",
    name: "TK (Techniker Krankenkasse)",
    category: "public",
    type: "Public statutory insurance",
    monthlyFee: "About €125/month",
    setup: "Online English application",
    coverage: "Throughout your studies (under 30)",
    bundle: "Often offered alongside Expatrio / Fintiba bundles",
    pros: [
      "Most popular public insurance among international students",
      "English customer service and English app (TK-App)",
      "Broad coverage — doctors, hospitals, prescriptions, mental health",
      "Wide network of doctors accepting TK directly",
      "Once enrolled, very smooth switch from pre-arrival insurance",
    ],
    cons: [
      "€125/month is a real cost (vs €30 pre-arrival)",
      "Required to switch from private to public can be paperwork-heavy",
      "Only available if you're under 30 and enrolled in a recognized German university",
    ],
    bestFor:
      "Standard choice for international students under 30 in degree programmes. If unsure, choose TK.",
    affiliate: false,
  },
  {
    slug: "dak",
    name: "DAK-Gesundheit",
    category: "public",
    type: "Public statutory insurance",
    monthlyFee: "About €125/month",
    setup: "Online English application",
    coverage: "Throughout your studies (under 30)",
    bundle: "Often bundled with Fintiba",
    pros: [
      "Second-most popular public insurance for international students",
      "English support and app",
      "Bundled with Fintiba (one less form to fill)",
      "Strong digital health features (telemedicine, online prescriptions)",
      "Mental health support included",
    ],
    cons: [
      "Same €125/month as TK",
      "Slightly smaller doctor network in some smaller cities than TK",
    ],
    bestFor:
      "Students using Fintiba (bundle), or those preferring stronger digital tools.",
    affiliate: false,
  },
  {
    slug: "aok",
    name: "AOK",
    category: "public",
    type: "Public statutory insurance (regional)",
    monthlyFee: "About €125/month",
    setup: "In-person or online (regional offices)",
    coverage: "Throughout your studies (under 30)",
    bundle: "Standalone",
    pros: [
      "Strong regional presence — fastest for in-person help",
      "Excellent coverage in specific German states (Bayern, Baden-Württemberg)",
      "Good for families and longer-term residents",
    ],
    cons: [
      "Less English support than TK or DAK",
      "Regional structure means switching states requires switching to a different AOK branch",
      "Smaller digital health offering",
    ],
    bestFor:
      "Students who prefer in-person service or who plan to stay long-term in one German state.",
    affiliate: false,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PRIVATE (PKV) — for over-30s, language courses, preparatory programmes
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    slug: "mawista-postgraduate",
    name: "Mawista Postgraduate",
    category: "private",
    type: "Private student insurance",
    monthlyFee: "From €105/month",
    setup: "Online in 15 minutes",
    coverage: "Up to 5 years",
    bundle: "Standalone",
    pros: [
      "Recognized by German universities for enrolment",
      "Cheaper than TK/DAK (€105 vs €125)",
      "For PhD students, students over 30, and Studienkolleg students",
      "Repatriation included",
    ],
    cons: [
      "Deductible per claim",
      "Limited coverage for chronic conditions",
      "Pregnancy and dental coverage limited",
      "Cannot switch to public later if you change your mind",
    ],
    bestFor:
      "Students over 30, PhDs, or those in preparatory programmes who can't access public insurance.",
    affiliate: true,
  },
  {
    slug: "allianz-care",
    name: "Allianz Care Student",
    category: "private",
    type: "Premium private student insurance",
    monthlyFee: "From €135/month",
    setup: "Online English application",
    coverage: "Throughout your studies",
    bundle: "Available via Expatrio's Allianz upgrade option",
    pros: [
      "Premium provider — Germany's largest insurer",
      "Strong digital tools and 24/7 English support",
      "Wider coverage than budget private options",
      "Dental and pregnancy coverage included (most plans)",
      "Optional add-ons for travel, gadgets",
    ],
    cons: [
      "Most expensive private option (€135/month)",
      "Cannot switch to public later",
      "Cancellation requires written notice",
    ],
    bestFor:
      "Older students who want premium coverage without the public insurance bureaucracy.",
    affiliate: false,
  },
];

export const faqs = [
  {
    q: "Do I really need health insurance to get a German student visa?",
    a: "Yes. Without proof of valid pre-arrival health insurance covering at least the first 30–90 days in Germany, the embassy will not approve your visa. Most students bundle insurance with their blocked account provider (Expatrio + DR-WALTER, Fintiba + Mawista, etc.).",
  },
  {
    q: "What's the difference between public and private insurance?",
    a: "Public (GKV) is for students under 30 in degree programmes — €125/month, broad coverage, minimal paperwork. Private (PKV) is for students over 30, in language courses, or preparatory programmes — typically €100–135/month with more limits.",
  },
  {
    q: "Can I switch from private to public insurance later?",
    a: "Generally NO. Once you commit to private insurance as an adult student, it's very difficult to switch to public. This is the most important decision: if you're under 30 and in a degree programme, choose public (TK or DAK) by default.",
  },
  {
    q: "Which is best for visa: DR-WALTER, Mawista, or Care Concept?",
    a: "All three are recognized by German embassies. DR-WALTER if you're using Expatrio (it's bundled), Mawista if you're using Fintiba, Care Concept if you want a standalone independent of your blocked account provider. Pricing is similar (€30–35/month).",
  },
  {
    q: "How much does insurance cost in total during my studies?",
    a: "Pre-arrival (3 months): ~€90–105 total. Then public insurance: €125/month × 12 months/year = €1,500/year × duration of studies. Budget €1,500–2,000/year for insurance.",
  },
  {
    q: "Do I need separate dental insurance?",
    a: "Public insurance covers basic dental (checkups, fillings). For braces, implants, or cosmetic dentistry, you'll need supplementary dental insurance (€10–25/month). Most students delay dental work or do it at home where it's cheaper.",
  },
  {
    q: "What if my visa is denied — can I get a refund?",
    a: "Yes. All three pre-arrival providers (DR-WALTER, Mawista, Care Concept) offer full refunds if your visa is denied. You'll need to submit your visa rejection letter to claim the refund.",
  },
  {
    q: "What's the exact step-by-step?",
    a: "1) Apply for pre-arrival insurance (DR-WALTER / Mawista / Care Concept) — €30/month. 2) Use it for visa application. 3) Travel to Germany. 4) Once enrolled in your university, switch to public insurance (TK or DAK) within 90 days. 5) Notify your pre-arrival insurer to cancel.",
  },
];

export const helpers = {
  getProviders: (category) => providers.filter((p) => p.category === category),
};
