// Step-by-step guidance on the German student visa and application process.
// Amounts (especially the blocked account) and rules are updated regularly —
// always verify with the German embassy/consulate in your country before you
// rely on them.

export const processSteps = [
  {
    step: 1,
    title: "Choose a course & university",
    description:
      "Pick an accredited public university and a programme taught in English or German. Check admission requirements, intake (winter intake starts ~October, summer ~April) and application deadlines on the official site or DAAD.",
  },
  {
    step: 2,
    title: "Meet language & academic requirements",
    description:
      "For English-taught programmes you usually need IELTS 6.5 / TOEFL 90. For German-taught programmes you need TestDaF or DSH at B2/C1 level. Some countries (e.g. India, China, Vietnam) also need an APS certificate.",
  },
  {
    step: 3,
    title: "Apply & get admission",
    description:
      "Apply directly to the university or via uni-assist. Once accepted, you'll receive an official admission letter (Zulassungsbescheid) — the key document for your visa.",
  },
  {
    step: 4,
    title: "Open a blocked account",
    description:
      "Prove you can support yourself by depositing the required amount in a blocked account (Sperrkonto). You can then withdraw a fixed amount each month after arriving.",
  },
  {
    step: 5,
    title: "Get health insurance",
    description:
      "You must have valid health insurance to study. Most students take German public health insurance (~€120/month); some use approved private/travel insurance for the initial period.",
  },
  {
    step: 6,
    title: "Apply for the student visa",
    description:
      "Book an appointment at the German embassy/consulate and apply for a national (D-type) student visa with your admission letter, blocked account proof, insurance and other documents.",
  },
  {
    step: 7,
    title: "Travel & register (Anmeldung)",
    description:
      "After arriving, register your address at the local citizens' office (Bürgeramt) within two weeks. This 'Anmeldung' is needed for almost everything else.",
  },
  {
    step: 8,
    title: "Get your residence permit",
    description:
      "Convert your entry visa into a residence permit (Aufenthaltstitel) at the local immigration office (Ausländerbehörde) for the full duration of your studies.",
  },
];

export const blockedAccount = {
  amountPerYear: 11904,
  amountPerMonth: 992,
  note:
    "As of 2026 you must show roughly €11,904 for one year (≈ €992/month). This figure is reviewed yearly by the German government and tends to rise — always check the current amount.",
  providers: ["Expatrio", "Fintiba", "Coracle", "Deutsche Bank"],
};

export const documents = [
  "Valid passport",
  "University admission letter (Zulassungsbescheid)",
  "Proof of blocked account / financial means",
  "Health insurance confirmation",
  "Academic transcripts & degree certificates",
  "Language proficiency certificate (IELTS/TOEFL or TestDaF/DSH)",
  "APS certificate (for India, China, Vietnam and some others)",
  "Completed visa application form & biometric photos",
  "Motivation letter / CV",
  "Visa fee payment (around €75)",
];

export const faqs = [
  {
    q: "Is studying in Germany really free?",
    a: "At public universities, yes — there are no tuition fees in most states. The exception is Baden-Württemberg, which charges non-EU students €1,500 per semester. Everyone pays a small semester contribution (about €100–€380) that often includes a transport ticket.",
  },
  {
    q: "Do I need to know German?",
    a: "Not for English-taught programmes, of which there are thousands at master's level. However, learning German (at least A2–B1) hugely improves daily life, part-time job options and your chances of staying after graduation.",
  },
  {
    q: "How much money do I need?",
    a: "Plan for roughly €11,900 per year for the blocked account, plus visa, insurance and travel costs. Monthly living costs range from about €850 (Leipzig) to €1,400 (Munich).",
  },
  {
    q: "Can I work while studying?",
    a: "Yes. Non-EU students can work up to 140 full days (or 280 half days) per year. Part-time and working-student jobs are common and help cover living costs.",
  },
  {
    q: "Can I stay after I graduate?",
    a: "Yes. Graduates can apply for an 18-month residence permit to find a qualified job, which can then lead to an EU Blue Card and permanent residence.",
  },
  {
    q: "What is an APS certificate?",
    a: "The APS (Akademische Prüfstelle) verifies your academic documents and is mandatory for applicants from countries such as India, China and Vietnam before applying for admission and a visa.",
  },
];
