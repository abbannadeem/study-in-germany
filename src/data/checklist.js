// Complete international-student-to-Germany journey checklist.
// Each step is grouped by stage. Users tick them off and progress is saved in
// localStorage so they can return to where they left off.

export const checklistGroups = [
  {
    id: "research",
    icon: "🔍",
    title: "1. Research & Planning",
    color: "from-blue-500 to-cyan-600",
    items: [
      "Decide on the field of study (engineering, business, sciences, etc.)",
      "Research 5-10 German universities offering your program",
      "Check application deadlines for winter (May-July) or summer (Nov-Jan) intake",
      "Note tuition fees + semester contribution per university",
      "Check if APS certificate is required for your country",
      "Make a shortlist of 4-6 universities to apply to",
    ],
  },
  {
    id: "language",
    icon: "🗣️",
    title: "2. Language Test",
    color: "from-purple-500 to-violet-600",
    items: [
      "Decide: IELTS, TOEFL or TestDaF based on your program",
      "Book test date 2 months in advance",
      "Buy practice materials (Cambridge IELTS, official TOEFL)",
      "Take 2-3 mock tests at home",
      "Sit the test (aim for IELTS 6.5+ overall)",
      "Receive official score report (allow 2 weeks)",
    ],
  },
  {
    id: "documents",
    icon: "📄",
    title: "3. Document Preparation",
    color: "from-amber-500 to-orange-600",
    items: [
      "Collect all academic transcripts (Bachelor's, FSc/12th, Matric/10th)",
      "Get HEC attestation in Pakistan (or APS in India/Vietnam)",
      "Get MOFA + German Embassy attestation if required",
      "Get certified English translations (if originals are in another language)",
      "Update CV in German style (1-2 pages, photo, structured)",
      "Get 1-2 letters of recommendation",
      "Write a strong motivation letter (1-2 pages)",
      "Scan all documents at 300 DPI in color (PDF format)",
    ],
  },
  {
    id: "applications",
    icon: "📋",
    title: "4. University Applications",
    color: "from-emerald-500 to-teal-600",
    items: [
      "Create uni-assist account (for unis using uni-assist)",
      "Create direct portal accounts (TUM, LMU, KIT, Heidelberg)",
      "Upload all required documents per university",
      "Pay application fees (€75 first + €30 each additional)",
      "Submit applications 6-8 weeks before deadline",
      "Wait for admission decisions (4-12 weeks)",
      "Receive Zulassungsbescheid (admission letter)",
    ],
  },
  {
    id: "finance",
    icon: "💰",
    title: "5. Finance & Insurance",
    color: "from-green-500 to-emerald-600",
    items: [
      "Open a blocked account (Expatrio / Fintiba / Coracle)",
      "Transfer ~€11,904 from Pakistan (use Wise for best rates)",
      "Receive blocked account confirmation",
      "Buy travel/expat health insurance (Mawista, DR-Walter)",
      "Save bank statements (last 6 months)",
      "Get sponsor letter from parent/guardian",
    ],
  },
  {
    id: "visa",
    icon: "🛂",
    title: "6. Visa Application",
    color: "from-rose-500 to-pink-600",
    items: [
      "Book visa appointment via VFS Global / embassy portal",
      "Fill in the German student visa application form",
      "Print 2 copies of application + passport photos",
      "Organize ALL documents in a clear folder",
      "Attend visa interview at German embassy",
      "Submit biometrics",
      "Pay visa fee (~€75 in your local currency)",
      "Wait for visa decision (4-12 weeks)",
      "Collect passport with visa stamp",
    ],
  },
  {
    id: "pre-departure",
    icon: "✈️",
    title: "7. Pre-Departure",
    color: "from-indigo-500 to-blue-600",
    items: [
      "Book one-way or return flight",
      "Apply for student dorm (Studentenwerk)",
      "Book temporary accommodation for first 2 weeks",
      "Get international driving permit if you'll need it",
      "Pack essentials (spices, masala mixes, ghee — Indian/Pakistani groceries)",
      "Get a German SIM card (or activate eSIM before leaving)",
      "Inform Pakistani bank about overseas travel",
      "Save all key documents to cloud + USB drive",
    ],
  },
  {
    id: "arrival",
    icon: "🇩🇪",
    title: "8. First Weeks in Germany",
    color: "from-yellow-500 to-amber-600",
    items: [
      "Register address at Bürgeramt (Anmeldung) within 14 days",
      "Open German bank account (N26, Sparkasse, Deutsche Bank)",
      "Activate German public health insurance (TK, AOK, Barmer)",
      "Get Tax ID (Steuer-ID) — sent by post after Anmeldung",
      "Enroll at your university (with passport + Zulassungsbescheid)",
      "Get student ID + semester ticket",
      "Get SIM/internet contract",
      "Activate Sperrkonto → start receiving €992/month",
    ],
  },
];

export function getTotalItems() {
  return checklistGroups.reduce((sum, g) => sum + g.items.length, 0);
}
