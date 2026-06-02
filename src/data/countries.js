// Country-specific guides for students applying to Germany — APS, embassy
// information, document requirements and timeline. Details change; always
// verify on the embassy and APS websites before relying on them.

export const countries = [
  {
    slug: "pakistan",
    name: "Pakistan",
    flag: "🇵🇰",
    embassyCity: "Islamabad (consulate in Karachi)",
    apsRequired: false,
    apsNote:
      "Pakistan does not have an APS office. Documents are verified directly by the German embassy together with HEC attestation.",
    keySteps: [
      {
        title: "HEC degree attestation",
        body: "Get your Bachelor's degree and final transcript attested by the Higher Education Commission of Pakistan (HEC) — usually online application + courier, takes ~1–2 weeks.",
      },
      {
        title: "Translate documents into German or English",
        body: "Any document not in English or German must be translated by a sworn translator (verify your embassy's exact requirement).",
      },
      {
        title: "Apply to a German university",
        body: "Apply via uni-assist or directly to your chosen university. The admission letter (Zulassungsbescheid) is the most important document for the visa.",
      },
      {
        title: "Open a blocked account",
        body: "Deposit ~€11,904 with a provider accepted by the German embassy (Expatrio, Fintiba, Coracle are commonly used).",
      },
      {
        title: "German embassy visa appointment",
        body: "Apply at the German embassy in Islamabad (or consulate in Karachi). Bring HEC-attested degrees, admission letter, blocked account confirmation, health insurance and the visa application form.",
      },
    ],
    documents: [
      "Original Bachelor's degree + transcript (HEC attested)",
      "Matric & FSc certificates (HEC attested)",
      "Admission letter from a German university (Zulassungsbescheid)",
      "Blocked account confirmation (~€11,904)",
      "Health insurance confirmation",
      "Language proficiency certificate (IELTS / TestDaF / DSH)",
      "Valid passport (≥1 year remaining)",
      "Motivation letter and CV",
      "Visa application form + biometric photos",
      "Visa fee (~€75)",
    ],
    timeline: [
      { when: "12 months before", what: "Research universities and English-taught programmes" },
      { when: "9–10 months before", what: "Take IELTS / TOEFL / TestDaF" },
      { when: "8 months before", what: "Start HEC attestation of your degrees" },
      { when: "6 months before", what: "Apply to universities via uni-assist / direct" },
      { when: "4–5 months before", what: "Receive admission letter (Zulassungsbescheid)" },
      { when: "3 months before", what: "Open blocked account + health insurance" },
      { when: "2–3 months before", what: "Book visa appointment at German embassy" },
      { when: "1 month before", what: "Visa decision; book flight; arrange accommodation" },
    ],
    tips: [
      "Visa wait times in Pakistan can be long (2–3 months) — book your appointment as early as possible.",
      "HEC attestation can be slow during peak season; start it before you have admission.",
      "Some Pakistani students go through DAAD's HEC partnerships — check DAAD Pakistan office.",
      "Keep multiple copies of every document; embassy will keep your originals.",
    ],
  },
  {
    slug: "india",
    name: "India",
    flag: "🇮🇳",
    embassyCity: "New Delhi (consulates in Mumbai, Chennai, Bangalore, Kolkata)",
    apsRequired: true,
    apsNote:
      "Since November 2022 the APS (Akademische Prüfstelle) certificate is mandatory for all Indian applicants. Apply online at the APS India portal — it takes 3–4 weeks and costs ~€60.",
    keySteps: [
      {
        title: "Get your APS certificate",
        body: "Apply at the APS India website. Upload your transcripts, IELTS/TOEFL results and degree certificates. APS verifies them and issues a certificate that's valid forever.",
      },
      {
        title: "Apply to German universities",
        body: "Apply via uni-assist or directly — your APS certificate is now mandatory along with your academic transcripts.",
      },
      {
        title: "Open a blocked account",
        body: "Deposit ~€11,904. Fintiba, Expatrio and Coracle are the most popular. ICICI Bank Germany is a regional option.",
      },
      {
        title: "Book the visa appointment",
        body: "VFS Global handles the German visa process in India. Book a slot at the centre nearest you (Delhi, Mumbai, Chennai, Bangalore or Kolkata).",
      },
      {
        title: "Health insurance and biometrics",
        body: "Get health insurance confirmation (Mawista/DR-Walter for entry, switch to TK/AOK on arrival). Submit biometrics at the visa appointment.",
      },
    ],
    documents: [
      "APS certificate (mandatory)",
      "Bachelor's degree + all semester transcripts",
      "12th and 10th certificates",
      "Admission letter from a German university (Zulassungsbescheid)",
      "Blocked account confirmation (~€11,904)",
      "Health insurance confirmation",
      "IELTS / TOEFL / TestDaF certificate",
      "Valid passport (≥1 year remaining)",
      "Motivation letter and CV",
      "Visa application form + biometric photos",
      "Visa fee (~€75) + VFS service fee",
    ],
    timeline: [
      { when: "12 months before", what: "Shortlist universities + English-taught programmes" },
      { when: "10–11 months before", what: "Take IELTS / TOEFL / TestDaF" },
      { when: "8–9 months before", what: "Apply for APS certificate (3–4 weeks)" },
      { when: "6–7 months before", what: "Apply to universities (uni-assist / direct)" },
      { when: "3–5 months before", what: "Receive admission letter" },
      { when: "3 months before", what: "Open blocked account + health insurance" },
      { when: "2 months before", what: "Book visa appointment at VFS Global" },
      { when: "1 month before", what: "Visa decision; flight; accommodation booked" },
    ],
    tips: [
      "Start APS early — the 3–4 week timeline becomes 6+ during admission peak (Aug–Nov).",
      "VFS slots in metros fill fast — book the moment you have your admission letter.",
      "Many Indian students bundle their blocked account + insurance with Expatrio's Value Package — it's accepted by the German embassy in India.",
      "If you have any backlog/re-attempt, attach an honest explanation letter — APS will still verify.",
    ],
  },
  {
    slug: "bangladesh",
    name: "Bangladesh",
    flag: "🇧🇩",
    embassyCity: "Dhaka",
    apsRequired: false,
    apsNote:
      "Bangladesh does not currently have a mandatory APS office. The embassy in Dhaka verifies documents directly — and may request notarised translations.",
    keySteps: [
      {
        title: "Document notarisation & translation",
        body: "Get all academic documents notarised and, where needed, translated into English or German by a sworn translator.",
      },
      {
        title: "Apply to a German university",
        body: "Apply via uni-assist or directly. Once admitted, you'll receive the admission letter (Zulassungsbescheid).",
      },
      {
        title: "Open a blocked account",
        body: "Deposit ~€11,904 with a provider accepted by the embassy in Dhaka.",
      },
      {
        title: "Visa appointment at the embassy",
        body: "Book at the German embassy in Dhaka. Bring all originals, admission letter, blocked account, insurance and biometrics.",
      },
    ],
    documents: [
      "SSC + HSC certificates (notarised)",
      "Bachelor's degree + all transcripts (notarised)",
      "Admission letter from a German university",
      "Blocked account confirmation (~€11,904)",
      "Health insurance confirmation",
      "IELTS / TestDaF certificate",
      "Valid passport (≥1 year remaining)",
      "Motivation letter and CV",
      "Visa application form + biometric photos",
      "Visa fee (~€75)",
    ],
    timeline: [
      { when: "12 months before", what: "Research universities + English programmes" },
      { when: "10 months before", what: "Take IELTS / TestDaF" },
      { when: "7–8 months before", what: "Notarise + translate documents" },
      { when: "6 months before", what: "Apply to universities" },
      { when: "3–4 months before", what: "Receive admission letter" },
      { when: "3 months before", what: "Open blocked account + insurance" },
      { when: "2 months before", what: "Book visa appointment in Dhaka" },
      { when: "1 month before", what: "Visa decision + travel arrangements" },
    ],
    tips: [
      "Translations must be by sworn translators recognised by the embassy.",
      "Visa slots in Dhaka are limited — book early.",
      "Keep notarised copies; embassy will retain some originals during processing.",
    ],
  },
];

export function getCountry(slug) {
  return countries.find((c) => c.slug === slug);
}
