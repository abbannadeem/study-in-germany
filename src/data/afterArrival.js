// Practical, step-by-step guide to setting up your life in Germany — from
// applying for a dorm to registration, tax ID, bank account and health
// insurance. Details and amounts change, so confirm with your university's
// international office and the local authorities.

export const arrivalSteps = [
  {
    slug: "dorm",
    icon: "🏠",
    title: "Apply for a dorm (or find a room)",
    when: "Apply EARLY — even before you get your visa",
    summary:
      "Student dorms run by the Studentenwerk are the cheapest housing, but places are limited and waitlists are long, so apply as soon as you are admitted.",
    details: [
      "Apply online through your city's Studentenwerk (student services) — each university links to its own.",
      "Dorm rooms typically cost €250–€450/month, far cheaper than the private market.",
      "If no dorm place is free, look for a shared flat (WG) on wg-gesucht.de, or a private studio.",
      "Beware of scams: never pay a deposit before seeing the room or signing a contract.",
      "You'll need a rental contract and a 'Wohnungsgeberbestätigung' (landlord confirmation) for the next step.",
    ],
    tip: "Many students book temporary accommodation (hostel/Airbnb) for the first weeks and keep searching after arrival.",
  },
  {
    slug: "anmeldung",
    icon: "📋",
    title: "Register your address (Anmeldung)",
    when: "Within 14 days of moving in",
    summary:
      "The Anmeldung registers your home address with the city. It is the single most important first step — almost everything else (bank, tax ID, residence permit) depends on it.",
    details: [
      "Book an appointment at the local citizens' office (Bürgeramt / Bürgerbüro) — slots fill fast, so book early.",
      "Bring: passport, your visa, the completed registration form (Anmeldeformular) and the 'Wohnungsgeberbestätigung' from your landlord.",
      "You'll receive a registration certificate (Meldebescheinigung) on the spot — keep it safe.",
      "If you move to a new address later, you must register again (Ummeldung).",
    ],
    tip: "No fixed address yet? Some dorms and landlords can register you; ask before you sign.",
  },
  {
    slug: "tax-id",
    icon: "🔢",
    title: "Get your tax ID (Steuer-ID)",
    when: "Arrives automatically ~2–3 weeks after Anmeldung",
    summary:
      "After you register your address, the tax office automatically posts your 11-digit tax identification number (Steuer-Identifikationsnummer) to your home.",
    details: [
      "You don't apply for it — it comes by letter once your Anmeldung is done.",
      "You need the tax ID before you can start most part-time or working-student jobs.",
      "Employers use it so your wages are taxed correctly (students often get tax back).",
      "If it doesn't arrive, you can request it from the Finanzamt (tax office) or the Bundeszentralamt für Steuern.",
    ],
    tip: "Keep the letter — you'll be asked for the tax ID by every employer and the bank.",
  },
  {
    slug: "bank-account",
    icon: "🏦",
    title: "Open a bank account",
    when: "After your Anmeldung",
    summary:
      "A German current account (Girokonto) is needed to pay rent, receive your salary and manage the blocked-account money you brought for your visa.",
    details: [
      "Bring: passport, visa/residence permit, Meldebescheinigung (Anmeldung) and enrolment certificate.",
      "Online banks like N26 are quick and English-friendly; branch banks like Sparkasse and Deutsche Bank are widely accepted.",
      "Most banks offer free accounts for students.",
      "Your blocked-account provider (Expatrio, Fintiba, Coracle) transfers your monthly allowance into this account.",
    ],
    tip: "Set up the account early — landlords and mobile/internet contracts expect a German IBAN and SEPA direct debit.",
  },
  {
    slug: "health-insurance",
    icon: "🩺",
    title: "Sort out health insurance",
    when: "Before enrolment & residence permit",
    summary:
      "Valid health insurance is mandatory to enrol and to get your residence permit. Most students take public health insurance.",
    details: [
      "Public insurers (TK, AOK, Barmer) cost roughly €120/month for students under 30 — the usual choice.",
      "You receive an insurance confirmation needed for university enrolment.",
      "Students over 30, or some short programmes, may need private/expat insurance instead.",
      "Your insurer gives you a health card (Gesundheitskarte) to use at doctors and pharmacies.",
    ],
    tip: "Arrange insurance before you fly — you often need proof for the visa, then switch to a German public insurer after arrival.",
  },
];
