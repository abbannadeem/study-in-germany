// Blog posts targeting Pakistani/South Asian students.
// Content is structured as an array of sections for clean rendering.
// Types: "h2", "h3", "p", "ul", "callout", "quote", "table"

export const blogPosts = [
  {
    slug: "complete-tum-application-guide-pakistani-students",
    title: "Complete TUM Application Guide for Pakistani Students (2026)",
    excerpt:
      "Everything a Pakistani student needs to know to apply to Germany's #1 ranked university — admission requirements, documents, timeline, and real tips from people who got in.",
    category: "University Guides",
    readTime: "12 min read",
    date: "2026-06-03",
    author: "Study in Germany Team",
    coverEmoji: "🎓",
    coverGradient: "from-blue-500 to-purple-600",
    tags: ["TUM", "Munich", "Application", "Pakistan"],
    body: [
      { type: "p", text: "Technical University of Munich (TUM) is Germany's #1 ranked university and one of Europe's top engineering schools. For Pakistani students aiming for the best of the best, TUM is often the dream destination — but the application process can feel intimidating. This guide breaks it down step by step." },

      { type: "h2", text: "Why TUM is special for Pakistani students" },
      { type: "p", text: "TUM consistently ranks in the world's top 30 universities (QS, Times Higher Education). It's tuition-free for international students — you only pay a small semester fee of around €144. The Munich location gives you direct access to Germany's strongest job market: BMW, Siemens, Google, Microsoft, Apple, and Allianz all have major offices in the city." },
      { type: "p", text: "Pakistani student community at TUM is sizeable (500+ Pakistani students currently enrolled), so you won't feel alone. There are active PSA (Pakistani Students Association) groups for support, food, cricket, and Eid celebrations." },

      { type: "h2", text: "Admission requirements: What you actually need" },
      { type: "h3", text: "Academic requirements" },
      { type: "ul", items: [
        "Bachelor's degree with minimum 70-75% (varies by program)",
        "Strong performance in subject-related courses (especially math/physics for engineering)",
        "Some competitive programs (Informatics, Management & Technology) require 80%+",
        "Higher Secondary Certificate (FSc/A-Levels) transcripts",
        "Matriculation (SSC/O-Levels) transcripts"
      ]},

      { type: "h3", text: "Language requirements" },
      { type: "ul", items: [
        "English programs: IELTS 6.5 (minimum 5.5 per band) OR TOEFL iBT 88",
        "German programs: TestDaF 4444 OR DSH 2",
        "Some programs accept Duolingo English Test (DET) 110+",
        "Tip: TUM publishes acceptable test minimums per program — check before applying"
      ]},

      { type: "h3", text: "Documents required" },
      { type: "ul", items: [
        "All academic transcripts (HEC-attested)",
        "Degree certificates (HEC-attested + Apostille/legalization)",
        "CV/Resume (1-2 pages, German style)",
        "Statement of Purpose (SOP) — 1-2 pages, focused on why TUM + why this program",
        "Letters of Recommendation (usually 1-2, from professors)",
        "English/German language test certificate",
        "GRE (recommended but not always required) — score 320+ for competitive programs",
        "Passport copy",
        "Application fee (€75) for some programs"
      ]},

      { type: "callout", emoji: "⚠️", text: "Important: TUM does NOT require APS certificate for Pakistani students (unlike for Indian applicants). However, HEC attestation is mandatory — don't skip it." },

      { type: "h2", text: "Step-by-step application process" },
      { type: "h3", text: "Step 1: Choose your program (3-4 months before deadline)" },
      { type: "p", text: "TUM offers 100+ English Master's programs. Visit tum.de and use the program finder. Popular choices for Pakistani students:" },
      { type: "ul", items: [
        "MSc Informatics (very competitive — 5% acceptance rate)",
        "MSc Mechanical Engineering",
        "MSc Electrical Engineering",
        "MSc Management & Technology",
        "MSc Data Engineering & Analytics",
        "MSc Communications Engineering",
        "MSc Sustainable Resource Management"
      ]},

      { type: "h3", text: "Step 2: Get HEC attestation done (allow 2-3 weeks)" },
      { type: "p", text: "Apply online at the HEC e-Portal. You'll need to submit your original degrees and transcripts. Cost is around PKR 800 per document. After HEC attestation, you may also need MOFA (Ministry of Foreign Affairs) and German Embassy attestation depending on the year." },

      { type: "h3", text: "Step 3: Take English/German test (book 2-3 months ahead)" },
      { type: "p", text: "IELTS slots in Karachi/Lahore/Islamabad fill up fast. Book early. Aim to take the test at least 2 months before TUM's deadline so you have your score ready." },

      { type: "h3", text: "Step 4: Write your SOP (allow 2-3 weeks)" },
      { type: "p", text: "TUM looks for: clear motivation, specific reasons for choosing TUM + this program, alignment between your background and the program's offerings, and clarity on what you'll do after graduation. Avoid generic phrases. Mention specific TUM professors, labs, or projects that interest you." },

      { type: "h3", text: "Step 5: Apply via TUMonline (TUM's application portal)" },
      { type: "p", text: "Create an account at campus.tum.de. Fill in personal details, education, language tests. Upload all required documents (PDFs only). Submit before the deadline. For winter semester (October start), deadlines are typically May 31. For summer semester (April start), deadlines are usually November 30." },

      { type: "callout", emoji: "💡", text: "Pro tip: Apply 4-6 weeks before the deadline. Last-minute applications often have technical issues, and you may need time to fix mistakes." },

      { type: "h3", text: "Step 6: Wait for the admission letter (6-12 weeks)" },
      { type: "p", text: "TUM typically responds 6-12 weeks after the deadline. Some competitive programs have multiple stages: written exam, interview, or assessment center." },

      { type: "h2", text: "Tuition and living costs (real numbers)" },
      { type: "table", headers: ["Item", "Cost"], rows: [
        ["Tuition fees", "FREE (just €144 semester fee)"],
        ["Average rent (WG)", "€500-800/month"],
        ["Food", "€250-350/month"],
        ["Transport (semester ticket)", "Included in fee"],
        ["Health insurance", "€120/month"],
        ["Total monthly", "€1,000-1,400"],
        ["Total annual", "€12,000-17,000"]
      ]},

      { type: "h2", text: "Scholarships for Pakistani students at TUM" },
      { type: "ul", items: [
        "DAAD Study Scholarship — €934/month + travel + insurance",
        "TUM-Asia Scholarships — partial tuition support",
        "Deutschlandstipendium — €300/month",
        "HEC Pakistan-Germany scholarships (specific cohorts)",
        "Erasmus+ (if you've studied at a partner institution before)"
      ]},

      { type: "h2", text: "Common mistakes Pakistani applicants make" },
      { type: "ul", items: [
        "Submitting without HEC attestation (auto-rejection)",
        "Generic SOPs copy-pasted across multiple universities",
        "Weak English test scores (IELTS 5.0-6.0 won't cut it)",
        "Missing semester transcripts (yes, all of them are needed)",
        "No backup plans — only applying to TUM is risky",
        "Late HEC application (it takes 2-3 weeks)",
        "Not contacting professors before applying for research programs"
      ]},

      { type: "h2", text: "After acceptance: Next steps" },
      { type: "p", text: "Congratulations! Now comes the visa process. You'll need to open a blocked account (~€11,904), get health insurance, and book a visa appointment at the German Embassy in Islamabad or consulate in Karachi. This process typically takes 6-8 weeks, so start as soon as you receive your admission letter." },

      { type: "callout", emoji: "🎯", text: "Your TUM journey doesn't end with admission — it begins. Start preparing 12 months ahead, stay organized, and don't underestimate the visa timeline. Pakistani students at TUM consistently report that early preparation was the #1 success factor." }
    ]
  },

  {
    slug: "daad-scholarship-pakistan-step-by-step-guide",
    title: "DAAD Scholarship: Step-by-Step Guide for Pakistani Students",
    excerpt:
      "DAAD is Germany's biggest scholarship program — €934/month plus travel and insurance. Here's exactly how Pakistani students can win it, with real numbers, dates, and proven tips.",
    category: "Scholarships",
    readTime: "10 min read",
    date: "2026-06-02",
    author: "Study in Germany Team",
    coverEmoji: "💰",
    coverGradient: "from-amber-500 to-orange-600",
    tags: ["DAAD", "Scholarship", "Pakistan", "Funding"],
    body: [
      { type: "p", text: "DAAD (Deutscher Akademischer Austauschdienst) is the world's largest funder of academic exchanges. For Pakistani students, it offers full scholarships covering tuition, monthly stipend, health insurance, and travel — worth roughly €20,000+ per year. This guide shows you exactly how to apply and win." },

      { type: "h2", text: "What does DAAD offer Pakistani students?" },
      { type: "ul", items: [
        "Monthly stipend: €934 (Master's) or €1,200 (PhD)",
        "Health, accident, and liability insurance",
        "One-time travel allowance to Germany",
        "Study and research allowance",
        "Family allowance if you bring dependents",
        "Optional German language course (€200/month for 6 months)",
        "Tuition-free (German public universities are free anyway)"
      ]},

      { type: "callout", emoji: "💡", text: "Total package value for 2 years (Master's): ~€25,000-30,000 (PKR 7-9 million). That's life-changing for most Pakistani families." },

      { type: "h2", text: "Eligibility — Do you qualify?" },
      { type: "h3", text: "Academic eligibility" },
      { type: "ul", items: [
        "Strong Bachelor's degree (typically 70%+)",
        "Less than 6 years since completing your Bachelor's",
        "Master's applicants: completed Bachelor's; PhD applicants: completed Master's",
        "Some programs require 2+ years of work experience (especially development-focused)"
      ]},

      { type: "h3", text: "Other requirements" },
      { type: "ul", items: [
        "Strong English (IELTS 6.5+) or German (B2/C1)",
        "Pakistani nationality (or permanent residency)",
        "Be currently in Pakistan when applying (typically)",
        "Strong motivation letter linking your goals to Germany",
        "Letters of recommendation"
      ]},

      { type: "h2", text: "Types of DAAD scholarships for Pakistanis" },
      { type: "h3", text: "1. DAAD Study Scholarship (Master's)" },
      { type: "p", text: "For students who have completed their Bachelor's and want to do a Master's in Germany. Most common path for Pakistani students. Duration: 10-24 months. Deadline: usually October-November." },

      { type: "h3", text: "2. DAAD Research Grants (PhD)" },
      { type: "p", text: "For students with a Master's degree who want to pursue a PhD. Requires confirmation of supervision from a German professor before applying. Duration: up to 4 years." },

      { type: "h3", text: "3. EPOS — Development-Related Postgraduate Courses" },
      { type: "p", text: "Specific programs focused on development cooperation. Pakistani students are highly competitive for these. Examples: water resources, sustainable agriculture, public policy. List available on DAAD website." },

      { type: "h3", text: "4. Helmut Schmidt Programme (Master's in Public Policy)" },
      { type: "p", text: "Specifically for students from developing countries (including Pakistan) interested in public policy and governance. Highly prestigious — only 30 students per year worldwide." },

      { type: "h2", text: "Step-by-step application process" },
      { type: "h3", text: "Step 1: Choose your program (6-9 months before deadline)" },
      { type: "p", text: "Visit www.daad.de/study and use the scholarship database. Filter by 'Pakistan' as country of origin. You'll see dozens of options. Pick programs that genuinely align with your background — DAAD selectors can tell when applications are mismatched." },

      { type: "h3", text: "Step 2: Identify universities (4-6 months ahead)" },
      { type: "p", text: "For most DAAD scholarships, you need to apply separately to universities. Pick 3-4 universities that offer your chosen program. Apply to each via uni-assist or directly." },

      { type: "h3", text: "Step 3: Write your motivation letter (allow 3-4 weeks)" },
      { type: "p", text: "This is the most important document. DAAD selectors read thousands of these. Yours must stand out." },
      { type: "ul", items: [
        "Open with a specific story or problem you want to solve",
        "Connect your Pakistani background to your chosen field",
        "Explain why Germany specifically (not just 'because free')",
        "Show clear career goals AFTER returning to Pakistan",
        "Mention specific German professors or institutions you want to work with",
        "Avoid generic statements like 'I am passionate about engineering'"
      ]},

      { type: "callout", emoji: "📝", text: "DAAD scholarships explicitly favor candidates who plan to return to their home country and apply their skills. Don't hide this — emphasize it." },

      { type: "h3", text: "Step 4: Get letters of recommendation (allow 4 weeks)" },
      { type: "p", text: "You'll need 1-2 letters from professors who know your work well. Approach them early. Provide them with: your CV, motivation letter draft, list of your courses with them, and the DAAD selection criteria. The best letters are specific (not generic praise)." },

      { type: "h3", text: "Step 5: Submit via DAAD portal" },
      { type: "p", text: "Create an account at portal.daad.de. Upload everything: CV, motivation letter, transcripts, certificates, language test, recommendation letters. Double-check before submitting — late or incomplete applications are rejected without review." },

      { type: "h3", text: "Step 6: Interview (if shortlisted)" },
      { type: "p", text: "Shortlisted candidates are interviewed by the DAAD selection committee in Islamabad. Common questions:" },
      { type: "ul", items: [
        "Why Germany and not USA/UK?",
        "Why this specific program?",
        "How will you contribute to Pakistan after returning?",
        "What's your plan B if not selected?",
        "Specific technical questions about your field"
      ]},

      { type: "h2", text: "Real timeline for Pakistani applicants" },
      { type: "table", headers: ["Month", "Action"], rows: [
        ["May-June", "Research programs and universities"],
        ["July-August", "Take IELTS/TOEFL, get HEC attestation"],
        ["September", "Draft motivation letter, contact recommenders"],
        ["October", "Apply to universities + DAAD"],
        ["November-December", "DAAD deadline (most programs)"],
        ["February-March", "Shortlist announcement, interview"],
        ["April-May", "Final decision, start visa process"],
        ["September-October", "Move to Germany"]
      ]},

      { type: "h2", text: "Success rate and statistics" },
      { type: "p", text: "DAAD receives 50,000+ applications globally per year. For Pakistan specifically:" },
      { type: "ul", items: [
        "~1,000 applications from Pakistan annually",
        "~150-200 Pakistani students selected (15-20% success rate)",
        "Most successful applicants have 75%+ Bachelor's + strong motivation",
        "Engineering, agriculture, public health, and water management have higher selection rates",
        "Pure business/MBA applications have lower success rates"
      ]},

      { type: "h2", text: "Top 5 tips from past DAAD recipients" },
      { type: "ul", items: [
        "Start preparing 12 months before the deadline — rushed applications fail",
        "Don't apply to too many DAAD streams — pick 1-2 that fit best",
        "Connect your application to Sustainable Development Goals (SDGs)",
        "Show evidence of community/volunteer work — DAAD values this",
        "Have a specific, realistic plan for returning to Pakistan — vague 'I want to work in industry' isn't enough"
      ]},

      { type: "callout", emoji: "🏆", text: "DAAD is competitive but achievable. Pakistani students with 70-75% Bachelor's grades and strong motivation regularly win. Start early, be authentic, and emphasize your contribution to Pakistan's development." }
    ]
  },

  {
    slug: "pakistan-germany-visa-real-timeline",
    title: "Pakistan to Germany Visa: Real Timeline + Tips (2026)",
    excerpt:
      "The German student visa for Pakistanis can take 6 weeks to 3 months. Here's exactly what to do, when to do it, and how to avoid the most common rejection reasons.",
    category: "Visa & Immigration",
    readTime: "11 min read",
    date: "2026-06-01",
    author: "Study in Germany Team",
    coverEmoji: "📋",
    coverGradient: "from-red-500 to-pink-600",
    tags: ["Visa", "Pakistan", "Embassy", "Documents"],
    body: [
      { type: "p", text: "Getting a German student visa from Pakistan is straightforward IF you prepare properly. This guide is based on actual timelines reported by Pakistani students in 2024-2026, including what really happens at the German Embassy in Islamabad and consulate in Karachi." },

      { type: "h2", text: "Visa types — which one do you need?" },
      { type: "ul", items: [
        "Student Visa (National D Visa): For confirmed admission to a German university — most common",
        "Student Applicant Visa: If you haven't received admission yet but want to apply from Germany — rarely used by Pakistanis",
        "Language Course Visa: For full-time German language courses only",
      ]},
      { type: "p", text: "For 99% of Pakistani students, you need the Student Visa (D Visa)." },

      { type: "h2", text: "Required documents (the official list + reality)" },
      { type: "h3", text: "Identity documents" },
      { type: "ul", items: [
        "Passport (valid for at least 12 months beyond stay) + 2 copies",
        "3 biometric passport photos (35×45mm, white background, recent)",
        "CNIC + 2 copies"
      ]},

      { type: "h3", text: "Academic documents" },
      { type: "ul", items: [
        "Admission letter from German university (Zulassungsbescheid) — original + copies",
        "All academic transcripts (Bachelor's, FSc, Matric) — HEC-attested",
        "Degree certificates — HEC-attested + MOFA stamp",
        "English language certificate (IELTS/TOEFL) — original + copy",
        "CV/Resume",
        "Motivation letter (1-2 pages, addressed to the Embassy)"
      ]},

      { type: "h3", text: "Financial documents" },
      { type: "ul", items: [
        "Blocked account confirmation showing €11,904+ (Sperrkonto)",
        "Bank statements (last 6 months)",
        "Parents'/sponsor's income proof",
        "Sponsorship letter (if someone else is funding)",
        "Property documents (helpful but not required)"
      ]},

      { type: "h3", text: "Insurance" },
      { type: "ul", items: [
        "Health insurance valid in Germany (Mawista, DR-Walter for arrival; switch to TK/AOK after enrollment)",
        "Minimum coverage: €30,000",
        "Must cover from day of arrival until enrollment in German public insurance"
      ]},

      { type: "h3", text: "Other" },
      { type: "ul", items: [
        "Accommodation confirmation (dorm, sublease, or hotel for first 2 weeks)",
        "Two completed visa application forms (signed)",
        "VFS appointment confirmation",
        "Visa fee receipt (€75)"
      ]},

      { type: "callout", emoji: "⚠️", text: "All non-English/German documents must be translated by a sworn translator. Don't try to submit Urdu documents." },

      { type: "h2", text: "Step-by-step timeline" },
      { type: "h3", text: "Month -6: HEC attestation" },
      { type: "p", text: "Apply to HEC for degree attestation BEFORE you have admission. This takes 2-3 weeks normally, but can extend to 6-8 weeks during peak season (July-October). Don't wait." },

      { type: "h3", text: "Month -4: Language test" },
      { type: "p", text: "Take IELTS or TOEFL. Book your test at least 2 months ahead — slots fill fast in Karachi/Lahore/Islamabad. Target IELTS 6.5+." },

      { type: "h3", text: "Month -3: University applications" },
      { type: "p", text: "Apply to multiple German universities (3-5 is a good number). Use uni-assist or direct portals. Pay attention to deadlines (winter intake: May-July; summer intake: November-January)." },

      { type: "h3", text: "Month -2: Admission letter received" },
      { type: "p", text: "Now the real visa process starts. You have your Zulassungsbescheid in hand." },

      { type: "h3", text: "Month -2 (parallel): Blocked account" },
      { type: "p", text: "Open a blocked account with Expatrio, Fintiba, or Coracle. Transfer €11,904 from Pakistan (via Wise, ICICI, or HBL). This takes 5-10 days for the transfer + 2-3 days for blocked account confirmation." },

      { type: "h3", text: "Month -2: Health insurance" },
      { type: "p", text: "Buy travel health insurance for the first 2-3 months (Mawista or DR-Walter, ~€30-50/month). After enrolling at your German university, you can switch to public insurance like TK." },

      { type: "h3", text: "Month -2: Book visa appointment" },
      { type: "p", text: "Visa appointments are booked through VFS Global Pakistan (vfsglobal.com/de/pk). Slots are limited — sometimes you wait 4-8 weeks for a slot. Book immediately after you have admission." },

      { type: "h3", text: "Month -1: The visa appointment" },
      { type: "p", text: "Show up 30 minutes early. Bring originals AND copies of every document. The interview is typically 5-15 minutes. Common questions:" },
      { type: "ul", items: [
        "Why this university and program?",
        "How will you finance your stay?",
        "What are your plans after graduating?",
        "Why Germany and not other countries?",
        "Do you have relatives in Germany?",
        "Have you been to Europe before?"
      ]},

      { type: "h3", text: "Month 0: Visa decision" },
      { type: "p", text: "Typical processing time after appointment: 4-12 weeks. Most Pakistani students get a decision in 6-8 weeks. Some lucky ones get it in 3-4 weeks. Plan accordingly." },

      { type: "h2", text: "Common rejection reasons (and how to avoid them)" },
      { type: "h3", text: "1. Insufficient financial proof" },
      { type: "p", text: "The blocked account alone is sometimes not enough. Show parents' bank statements, property documents, and a clear sponsorship letter. The Embassy wants to see that you can afford Germany without working illegally." },

      { type: "h3", text: "2. Weak academic background relative to chosen program" },
      { type: "p", text: "If you have a Bachelor's in Commerce but applied to a Master's in Computer Science, the visa officer may suspect immigration intent. Make sure your motivation letter explains the connection clearly." },

      { type: "h3", text: "3. Poor motivation letter" },
      { type: "p", text: "Generic letters that say 'Germany has great universities' don't work. Be specific about WHY this program, WHY this university, and WHY you'll return to Pakistan." },

      { type: "h3", text: "4. Missing documents" },
      { type: "p", text: "Even one missing document leads to rejection. Bring everything, even if you think it's not needed." },

      { type: "h3", text: "5. Inconsistencies" },
      { type: "p", text: "If your application says you're in your 4th semester but your transcript shows otherwise, you'll be rejected. Double-check every detail." },

      { type: "h2", text: "What to do if rejected" },
      { type: "ul", items: [
        "Read the rejection letter carefully — they tell you why",
        "You can appeal (Remonstration) within 30 days — free, takes 4-8 weeks",
        "You can reapply with new documents (no waiting period)",
        "Improve weak areas: add more financial proof, rewrite motivation letter, get better English score",
        "Consider hiring a German visa consultant (Rs 50,000-150,000) if multiple rejections"
      ]},

      { type: "callout", emoji: "✅", text: "Bottom line: 75-80% of properly prepared Pakistani applicants get their visa on the first try. The key is preparation, complete documents, and a strong motivation letter." }
    ]
  },

  {
    slug: "free-universities-germany-2026-list",
    title: "Free Universities in Germany: Complete 2026 List for International Students",
    excerpt:
      "Yes, almost all German public universities are tuition-free — even for Pakistani, Indian, and Bangladeshi students. Here's the updated list of the best ones, plus the catch you need to know about.",
    category: "Universities",
    readTime: "8 min read",
    date: "2026-05-30",
    author: "Study in Germany Team",
    coverEmoji: "🎓",
    coverGradient: "from-emerald-500 to-teal-600",
    tags: ["Free Education", "Universities", "Tuition"],
    body: [
      { type: "p", text: "Germany is one of the very few countries in the world where international students can study for FREE at top-ranked universities. Yes, you read that right. No tuition fees for Pakistani, Indian, Bangladeshi, Nigerian — anyone. Here's how it works and where to go." },

      { type: "h2", text: "How is German university tuition-free?" },
      { type: "p", text: "In 2014, Germany abolished tuition fees at all public universities for ALL students — including non-EU internationals. The German government believes that education is a public good, and they want to attract international talent." },
      { type: "p", text: "There's ONE exception: the state of Baden-Württemberg reintroduced tuition fees (€1,500 per semester) for non-EU students in 2017. But even there, the fee is far lower than UK/USA/Canada." },

      { type: "callout", emoji: "💡", text: "Tuition-free does NOT mean cost-free. You'll still pay: semester contribution fee (€100-400, often includes a transport pass), living costs (€800-1,400/month depending on city), and blocked account requirement (€11,904 for visa)." },

      { type: "h2", text: "Top 15 free German universities for international students" },

      { type: "h3", text: "1. Technical University of Munich (TUM)" },
      { type: "p", text: "Ranking: #28 globally. Location: Munich, Bavaria. Tuition: FREE (semester fee €144). Best for: Engineering, computer science, business, natural sciences. Very competitive — 5-10% acceptance rate for top programs." },

      { type: "h3", text: "2. Ludwig Maximilian University (LMU Munich)" },
      { type: "p", text: "Ranking: #59 globally. Location: Munich, Bavaria. Tuition: FREE. Best for: Medicine, humanities, law, natural sciences. Munich's most prestigious university with 800+ years of history." },

      { type: "h3", text: "3. Heidelberg University" },
      { type: "p", text: "Ranking: #47 globally. Location: Heidelberg, Baden-Württemberg. Tuition: €1,500/semester (BW exception). Best for: Medicine, natural sciences, humanities. Germany's oldest university." },

      { type: "h3", text: "4. Humboldt University of Berlin" },
      { type: "p", text: "Ranking: #120 globally. Location: Berlin. Tuition: FREE. Best for: Humanities, social sciences, philosophy. Located in the heart of Berlin." },

      { type: "h3", text: "5. Free University of Berlin (FU Berlin)" },
      { type: "p", text: "Ranking: #98 globally. Location: Berlin. Tuition: FREE. Best for: Social sciences, humanities, natural sciences. Excellent campus life and student diversity." },

      { type: "h3", text: "6. RWTH Aachen University" },
      { type: "p", text: "Ranking: #99 globally. Location: Aachen, NRW. Tuition: FREE. Best for: Engineering, computer science, technology. Considered Germany's top engineering university for many fields." },

      { type: "h3", text: "7. Technical University of Berlin (TU Berlin)" },
      { type: "p", text: "Ranking: #154 globally. Location: Berlin. Tuition: FREE. Best for: Engineering, computer science, architecture. Excellent for tech and engineering with strong Berlin location." },

      { type: "h3", text: "8. Karlsruhe Institute of Technology (KIT)" },
      { type: "p", text: "Ranking: #119 globally. Location: Karlsruhe, BW. Tuition: €1,500/semester (BW). Best for: Engineering, computer science, physics. Top engineering reputation in Europe." },

      { type: "h3", text: "9. University of Bonn" },
      { type: "p", text: "Ranking: #239 globally. Location: Bonn, NRW. Tuition: FREE. Best for: Economics, mathematics, science, philosophy. Several Fields Medal winners and Nobel laureates." },

      { type: "h3", text: "10. University of Göttingen" },
      { type: "p", text: "Ranking: #209 globally. Location: Göttingen, Lower Saxony. Tuition: FREE. Best for: Natural sciences, mathematics, humanities. Classic German university town with 30,000 students." },

      { type: "h3", text: "11. University of Freiburg" },
      { type: "p", text: "Ranking: #192 globally. Location: Freiburg, BW. Tuition: €1,500/semester (BW). Best for: Medicine, biology, sustainability." },

      { type: "h3", text: "12. University of Tübingen" },
      { type: "p", text: "Ranking: #213 globally. Location: Tübingen, BW. Tuition: €1,500/semester (BW). Best for: Medicine, theology, humanities, AI research." },

      { type: "h3", text: "13. TU Dresden" },
      { type: "p", text: "Ranking: #241 globally. Location: Dresden, Saxony. Tuition: FREE. Best for: Engineering, computer science, semiconductors. Located in 'Silicon Saxony' — major tech hub." },

      { type: "h3", text: "14. University of Stuttgart" },
      { type: "p", text: "Ranking: #312 globally. Location: Stuttgart, BW. Tuition: €1,500/semester (BW). Best for: Automotive engineering, aerospace. Home of Mercedes and Porsche." },

      { type: "h3", text: "15. University of Hamburg" },
      { type: "p", text: "Ranking: #191 globally. Location: Hamburg. Tuition: FREE. Best for: Climate sciences, economics, social sciences." },

      { type: "h2", text: "Comparison: Germany vs other countries" },
      { type: "table", headers: ["Country", "Annual Tuition (USD)", "Living Costs", "Total/Year"], rows: [
        ["Germany", "$0 - $3,000", "$12,000-17,000", "$12,000-20,000"],
        ["UK", "$25,000-40,000", "$15,000-20,000", "$40,000-60,000"],
        ["USA", "$35,000-60,000", "$18,000-25,000", "$53,000-85,000"],
        ["Canada", "$15,000-30,000", "$15,000-20,000", "$30,000-50,000"],
        ["Australia", "$25,000-40,000", "$18,000-22,000", "$43,000-62,000"]
      ]},

      { type: "p", text: "Germany saves international students $30,000-60,000+ per year compared to UK/USA. For a 2-year Master's, that's $60,000-120,000 in savings." },

      { type: "h2", text: "What about private universities?" },
      { type: "p", text: "Private universities in Germany (like Hertie School, ESMT Berlin, Jacobs University) charge tuition fees — typically €10,000-30,000 per year. But for almost everyone, public universities are the better choice: same recognition, often better ranking, free." },

      { type: "h2", text: "Application requirements (for all free universities)" },
      { type: "ul", items: [
        "Bachelor's degree (or equivalent)",
        "Strong academic record (typically 65-75%+ depending on program)",
        "English (IELTS 6.5+) or German (B2/C1) proficiency",
        "Motivation letter and CV",
        "HEC-attested documents (for Pakistani students)",
        "Some programs also require GRE (especially competitive ones)"
      ]},

      { type: "callout", emoji: "🎯", text: "Bottom line: Yes, you can study at a top-100 world university completely free. Yes, even as a Pakistani/Indian student. The main 'cost' is just preparation time and living expenses. There's no better deal in higher education today." }
    ]
  },

  {
    slug: "winning-sop-german-universities",
    title: "How to Write a Winning SOP for German Universities (with Examples)",
    excerpt:
      "Your Statement of Purpose can make or break your application. Here's the exact structure German universities want, what to avoid, and real examples from successful applicants.",
    category: "Application Tips",
    readTime: "9 min read",
    date: "2026-05-28",
    author: "Study in Germany Team",
    coverEmoji: "✍️",
    coverGradient: "from-purple-500 to-indigo-600",
    tags: ["SOP", "Application", "Writing Tips"],
    body: [
      { type: "p", text: "The Statement of Purpose (SOP, also called motivation letter or Lebenslauf in German) is often THE deciding factor for German university applications. Your transcripts get you considered; your SOP gets you accepted. Here's how to write one that actually works." },

      { type: "h2", text: "What German universities look for in an SOP" },
      { type: "p", text: "German admissions committees value three things above all:" },
      { type: "ul", items: [
        "Clarity — Can they understand exactly why you want this program?",
        "Specificity — Why THIS university and THIS program, not just 'I want to study in Germany'?",
        "Coherence — Does your background fit this program logically?"
      ]},
      { type: "p", text: "They DON'T value: flowery language, your life story from childhood, dramatic emotional statements, or generic praise of the university." },

      { type: "callout", emoji: "💡", text: "Pro insight: German universities tend to prefer SOPs that are factual, structured, and goal-oriented — quite different from the personal narrative style preferred by US universities." },

      { type: "h2", text: "The ideal SOP structure (5 paragraphs)" },

      { type: "h3", text: "Paragraph 1: Hook + thesis (100-150 words)" },
      { type: "p", text: "Start with a specific problem, project, or moment that sparked your interest in the field. Then clearly state what you want to study and why. Example opening:" },
      { type: "quote", text: "During my Bachelor's thesis on water purification in rural Punjab, I realized that 40% of Pakistani villages still lack access to clean drinking water. This experience motivated me to pursue a Master's in Environmental Engineering at TU Berlin, where I can specialize in sustainable water systems and bring proven solutions back to Pakistan." },

      { type: "h3", text: "Paragraph 2: Academic background (150-200 words)" },
      { type: "p", text: "Briefly describe your Bachelor's program, key courses, and notable projects. Focus on courses and projects directly relevant to your chosen Master's. Don't list every course you took. Highlight:" },
      { type: "ul", items: [
        "Your degree, university, and graduation year",
        "Major/specialization and CGPA (if good)",
        "2-3 most relevant courses",
        "Your thesis topic and what you learned",
        "Any research or significant projects"
      ]},

      { type: "h3", text: "Paragraph 3: Professional experience (100-150 words)" },
      { type: "p", text: "If you have work experience, internships, or research assistantships, describe them here. Focus on transferable skills and accomplishments. Use specific numbers where possible:" },
      { type: "quote", text: "As a software engineer at XYZ Tech, I led a team of 4 developers to build a mobile health platform that reached 50,000 users across Pakistan. This taught me both technical architecture and stakeholder management — skills I want to deepen through the Computational Engineering program at RWTH Aachen." },

      { type: "h3", text: "Paragraph 4: Why this program + this university (200-250 words)" },
      { type: "p", text: "This is the most important paragraph. Show that you've researched the university. Mention:" },
      { type: "ul", items: [
        "Specific courses in the program that excite you (look at the curriculum)",
        "1-2 professors whose research aligns with yours",
        "Specific labs, institutes, or research groups you want to join",
        "Why Germany over USA/UK/Canada (industry, research, language?)",
        "How this program complements your background"
      ]},

      { type: "h3", text: "Paragraph 5: Future plans (100-150 words)" },
      { type: "p", text: "Be clear about what you'll do after the Master's:" },
      { type: "ul", items: [
        "Return to Pakistan to work in industry/research/academia?",
        "Stay in Germany for PhD or industry?",
        "Start a company solving a specific problem?",
        "Connect your plans back to the program — show you've thought it through"
      ]},
      { type: "p", text: "Many Pakistani students worry that mentioning 'returning to Pakistan' hurts their application. The opposite is true — German universities (especially DAAD) appreciate candidates who want to contribute to their home country's development." },

      { type: "h2", text: "Common SOP mistakes (avoid these!)" },
      { type: "h3", text: "1. Generic openings" },
      { type: "p", text: "❌ 'I have always been passionate about engineering since childhood.'" },
      { type: "p", text: "✅ 'When my hometown's electricity grid collapsed during the 2022 floods, I spent three days helping my neighbor rewire a generator. That experience taught me how vulnerable our infrastructure is and motivated my interest in power systems engineering.'" },

      { type: "h3", text: "2. Praise without substance" },
      { type: "p", text: "❌ 'TUM is one of the best universities in the world.'" },
      { type: "p", text: "✅ 'I'm particularly interested in Prof. Schmidt's research on edge AI at TUM's Institute for Computer Science, which directly relates to my Bachelor's thesis on real-time image processing.'" },

      { type: "h3", text: "3. Vague goals" },
      { type: "p", text: "❌ 'After my Master's, I want to work in industry or do a PhD.'" },
      { type: "p", text: "✅ 'After graduating, I plan to join Siemens Pakistan's energy division to lead smart grid projects, applying the skills I gained in Germany's renewable energy ecosystem.'" },

      { type: "h3", text: "4. Talking about money/family pressure" },
      { type: "p", text: "Never mention that Germany is free, that your family wants you abroad, or financial reasons. Focus on academic and professional motivations." },

      { type: "h3", text: "5. Generic for multiple universities" },
      { type: "p", text: "Don't write one SOP and submit it everywhere. Each university requires a tailored version mentioning their specific professors, programs, and labs." },

      { type: "h2", text: "Length and formatting" },
      { type: "ul", items: [
        "Length: 1-2 pages (450-800 words). Most German universities expect 1 page",
        "Font: Times New Roman or Arial, 11-12pt",
        "Single-spaced or 1.15 spacing",
        "Plain text — no fancy formatting, no images, no logos",
        "PDF format when uploading"
      ]},

      { type: "h2", text: "Editing checklist" },
      { type: "ul", items: [
        "Read aloud — does it flow naturally?",
        "Have a non-academic friend read it — do they understand without explanation?",
        "Get 2-3 people to give feedback (preferably someone who got into a German program)",
        "Check for grammar/spelling — use Grammarly free version",
        "Verify professor names, lab names, course names against the university website",
        "Make sure each paragraph has a clear purpose"
      ]},

      { type: "callout", emoji: "✅", text: "Your SOP is a sales document — you're selling YOU to the admissions committee. Be specific, be focused, be confident. A great SOP can compensate for a 70% Bachelor's; a weak SOP can't be saved by an 85%." },

      { type: "h2", text: "Final tip: Start early" },
      { type: "p", text: "Write your first draft 2-3 months before the deadline. Sit with it. Rewrite it 3-4 times. Get feedback. Refine. Most failed applications are last-minute SOPs that read like first drafts." }
    ]
  },
  {
    slug: "blocked-account-pakistan-step-by-step",
    title: "How to Open a Blocked Account from Pakistan in 24 Hours (2026)",
    excerpt:
      "Opening a German blocked account (Sperrkonto) from Pakistan used to take weeks. Here's how to do it in 24 hours, with real fees, comparisons, and the fastest providers.",
    category: "Visa & Immigration",
    readTime: "9 min read",
    date: "2026-06-04",
    author: "Study in Germany Team",
    coverEmoji: "💳",
    coverGradient: "from-green-500 to-emerald-600",
    tags: ["Blocked Account", "Pakistan", "Sperrkonto", "Expatrio"],
    body: [
      { type: "p", text: "Every Pakistani student applying for a German visa needs to deposit ~€11,904 in a blocked account (Sperrkonto). It's one of the biggest stress points in the visa process — but it doesn't have to be. Here's the exact step-by-step process to open one from Pakistan in 24 hours." },

      { type: "h2", text: "What is a Blocked Account?" },
      { type: "p", text: "A blocked account is a special German bank account that holds your living expenses (€11,904 for one year) as proof to the German embassy that you can support yourself. You can only withdraw a fixed monthly amount (~€992/month) after arriving in Germany." },
      { type: "p", text: "Without this, your visa application is automatically rejected. It's mandatory." },

      { type: "h2", text: "Top 3 providers Pakistani students use" },
      { type: "table", headers: ["Provider", "Setup Fee", "Monthly", "Opening Time"], rows: [
        ["Expatrio", "€49 (refundable)", "Free", "24 hours"],
        ["Fintiba", "€89 (one-off)", "€4.90", "1-2 days"],
        ["Coracle", "€99 (one-off)", "€5.90", "2-5 days"]
      ]},

      { type: "callout", emoji: "⭐", text: "Recommendation: Expatrio is the most popular among Pakistani students because of fast setup, English support, and bundled health insurance options. They've processed thousands of Pakistani student applications." },

      { type: "h2", text: "Step-by-step: Open in 24 hours" },
      { type: "h3", text: "Step 1: Sign up online (15 minutes)" },
      { type: "p", text: "Go to expatrio.com/blocked-account and click 'Get started'. You'll need:" },
      { type: "ul", items: [
        "Your passport (scan ready)",
        "Your German university admission letter (Zulassungsbescheid)",
        "An email + phone number",
        "A debit/credit card for the setup fee"
      ]},

      { type: "h3", text: "Step 2: Identity verification (30 minutes)" },
      { type: "p", text: "Complete the online ID verification via video call or document upload. Expatrio uses Sumsub for verification — very fast for Pakistani passports." },

      { type: "h3", text: "Step 3: Transfer €11,904 from Pakistan (varies)" },
      { type: "p", text: "This is where most delays happen. Three options for Pakistani students:" },
      { type: "ul", items: [
        "Wise (TransferWise) — fastest (1-2 days), best exchange rate. Recommended.",
        "Bank wire transfer (HBL, MCB, Standard Chartered) — 2-5 days, higher fees",
        "ICICI Bank Pakistan branch — convenient but slower (3-7 days)"
      ]},
      { type: "callout", emoji: "💡", text: "Pro tip: Use Wise for the €11,904 transfer. You'll save Rs 30,000-50,000 in exchange rate fees compared to a regular bank wire. Set up Wise account ahead of time." },

      { type: "h3", text: "Step 4: Get confirmation email" },
      { type: "p", text: "Once your funds arrive, Expatrio sends you the blocked account confirmation (Sperrkontonachweis) as a PDF — this is what you submit to the embassy." },

      { type: "h2", text: "Total cost breakdown for Pakistani students" },
      { type: "table", headers: ["Item", "Amount in EUR", "Amount in PKR (approx)"], rows: [
        ["Blocked amount", "€11,904", "Rs 36,90,000"],
        ["Expatrio setup fee", "€49", "Rs 15,200"],
        ["Wise transfer fee", "~€60", "Rs 18,600"],
        ["Total upfront", "€12,013", "Rs 37,24,000"]
      ]},

      { type: "h2", text: "What happens after you arrive in Germany?" },
      { type: "ul", items: [
        "Within first week: Open a German current account (Girokonto)",
        "Provide Expatrio your new German IBAN",
        "Expatrio releases €992/month to your German account",
        "After 12 months, any remaining balance is transferred to you"
      ]},

      { type: "h2", text: "Common mistakes to avoid" },
      { type: "ul", items: [
        "Choosing the wrong provider — make sure they're accepted by your specific German embassy (Islamabad/Karachi)",
        "Bank wire transfer when Wise would be cheaper and faster",
        "Transferring funds before completing ID verification (delays processing)",
        "Not keeping a copy of the bank confirmation email",
        "Booking visa appointment before blocked account is ready"
      ]},

      { type: "callout", emoji: "✅", text: "Bottom line: Opening a blocked account is the easiest visa step IF you choose the right provider and use Wise for the transfer. Most Pakistani students complete this in 3-5 days total (including the international transfer)." }
    ]
  },
  {
    slug: "ielts-requirements-german-universities",
    title: "IELTS Score for German Universities: Real Requirements (2026 Update)",
    excerpt:
      "Most German universities ask for IELTS 6.5, but the reality is more nuanced. Here are the actual minimum scores for top universities, with specific program data.",
    category: "Application Tips",
    readTime: "8 min read",
    date: "2026-06-04",
    author: "Study in Germany Team",
    coverEmoji: "📝",
    coverGradient: "from-cyan-500 to-blue-600",
    tags: ["IELTS", "Language", "TOEFL", "Application"],
    body: [
      { type: "p", text: "If you want to study in Germany without learning German first, you'll need to prove your English ability. Most students take IELTS. But how high do you really need to score? Here's the real data for top German universities in 2026." },

      { type: "h2", text: "The standard requirement: IELTS 6.5" },
      { type: "p", text: "Most German universities ask for IELTS 6.5 (overall) with no band lower than 5.5. This is the baseline that 80% of English-taught Master's programs require." },
      { type: "p", text: "However, some top programs ask for higher (6.5 with no band below 6.0, or even 7.0 overall). And a small number accept lower (6.0 overall)." },

      { type: "h2", text: "Top German universities — actual requirements" },
      { type: "table", headers: ["University", "IELTS Minimum", "TOEFL iBT Minimum", "Notes"], rows: [
        ["TU Munich (TUM)", "6.5", "88", "Some programs require 7.0"],
        ["LMU Munich", "6.5", "88", "Standard"],
        ["Heidelberg", "6.5", "92", "Higher for sciences"],
        ["RWTH Aachen", "6.5", "87", "Engineering programs strict on bands"],
        ["KIT Karlsruhe", "6.5", "90", "Standard"],
        ["TU Berlin", "6.5", "88", "Standard"],
        ["Humboldt Berlin", "6.5", "92", "Strict"],
        ["Stuttgart", "6.5", "88", "Engineering 6.5"],
        ["Mannheim", "7.0", "100", "Business programs higher"],
        ["Frankfurt (Goethe)", "6.5", "90", "Standard"]
      ]},

      { type: "callout", emoji: "💡", text: "Tip: Always check the specific program page — same university can have different IELTS requirements for different programs. Engineering at TUM might be 6.5; Management at TUM might be 7.0." },

      { type: "h2", text: "Programs that need HIGHER scores (7.0+)" },
      { type: "ul", items: [
        "TUM-BWL (Management & Technology) — 7.0",
        "Mannheim MBA — 7.0",
        "Frankfurt School of Finance (private) — 7.0",
        "TUM Architecture — 7.0",
        "Some humanities programs at Humboldt/LMU — 7.0"
      ]},

      { type: "h2", text: "Programs that accept LOWER scores (5.5-6.0)" },
      { type: "ul", items: [
        "Some applied sciences universities (Hochschulen)",
        "Few engineering programs at smaller universities",
        "Some Bachelor's programs (vs Master's, which are stricter)",
        "Programs taught partly in English + German"
      ]},

      { type: "h2", text: "TOEFL vs IELTS: which is better for Germany?" },
      { type: "p", text: "Both are accepted equally. Pakistani students typically prefer IELTS because:" },
      { type: "ul", items: [
        "More IELTS test centres in Pakistan (every major city)",
        "Familiar British English style (similar to Pakistani English)",
        "Test fees slightly lower (~PKR 65,000 vs TOEFL ~PKR 78,000)",
        "Most German universities prefer IELTS Academic"
      ]},

      { type: "h2", text: "How to score IELTS 6.5+ (Pakistani student tips)" },
      { type: "ul", items: [
        "Listening: practice with native speakers (BBC, podcasts) for 1 month",
        "Reading: skim newspaper articles daily (Dawn, BBC, Guardian)",
        "Writing: focus on Task 2 — structured essays with clear examples",
        "Speaking: practice with friends in English for 30 min daily",
        "Take 1 official mock test before booking the real test"
      ]},

      { type: "h2", text: "Books and resources Pakistani students recommend" },
      { type: "ul", items: [
        "Cambridge IELTS 17 + 18 (official practice tests)",
        "Magoosh IELTS app (vocabulary builder)",
        "BBC 6 Minute English (listening)",
        "British Council IELTS Prep (free resources)",
        "Local IELTS academies (Karachi: AEO, Lahore: SOL)"
      ]},

      { type: "h2", text: "When to take IELTS" },
      { type: "p", text: "Take IELTS at least 2-3 months before the German university application deadline. This gives you time to:" },
      { type: "ul", items: [
        "Take it again if you don't get 6.5 (retest within 1 month possible)",
        "Have official results ready when applying",
        "Avoid last-minute stress"
      ]},

      { type: "callout", emoji: "🎯", text: "Bottom line: 6.5 with no band below 5.5 is your safe target. If you're aiming for Mannheim Business or TUM-BWL, target 7.0. Take 1 mock test first to calibrate — then study what's weak." }
    ]
  },
  {
    slug: "cost-of-living-germany-indian-students",
    title: "Cost of Living in Germany for Indian Students: Detailed Breakdown",
    excerpt:
      "From a shared room in Munich to groceries in Berlin — here's exactly what Indian students spend per month in Germany, with INR conversions and real budgets.",
    category: "Living in Germany",
    readTime: "10 min read",
    date: "2026-06-03",
    author: "Study in Germany Team",
    coverEmoji: "💰",
    coverGradient: "from-orange-500 to-red-600",
    tags: ["Cost of Living", "India", "Budget", "INR"],
    body: [
      { type: "p", text: "Germany is famous for tuition-free university — but what does daily life actually cost? Here's a detailed breakdown for Indian students, with real prices in INR (₹) and tips to live well on a budget." },

      { type: "h2", text: "Quick summary: monthly costs in EUR + INR" },
      { type: "table", headers: ["Item", "Lean (€)", "Average (€)", "Comfortable (€)", "INR Approx"], rows: [
        ["Rent (WG/Shared)", "€350-450", "€500-650", "€700-900", "₹35K-90K"],
        ["Groceries", "€150-200", "€220-280", "€300-400", "₹15K-40K"],
        ["Eating out", "€20-50", "€60-120", "€150-250", "₹2K-25K"],
        ["Transport", "€30-50", "€50-90", "€90-120", "₹3K-12K"],
        ["Phone + Internet", "€20-30", "€30-50", "€50-70", "₹2K-7K"],
        ["Health insurance", "€110-120", "€110-120", "€110-120", "₹11K"],
        ["Misc/Fun", "€50-100", "€100-200", "€200-400", "₹5K-40K"],
        ["TOTAL", "€730-970", "€1070-1410", "€1500-2160", "₹73K-216K"]
      ]},

      { type: "callout", emoji: "💡", text: "Most Indian students at public universities spend ~€1,000-1,200/month (~₹1 lakh) for an average lifestyle. Munich is expensive (€1,400+), smaller cities like Leipzig/Dresden cheaper (€800-900)." },

      { type: "h2", text: "Rent: the biggest expense" },
      { type: "h3", text: "Cheapest cities for rent" },
      { type: "ul", items: [
        "Leipzig: €300-450/month for shared room (₹30K-45K)",
        "Magdeburg: €250-400/month",
        "Cottbus: €280-400/month",
        "Halle: €280-400/month",
        "Dresden: €350-500/month"
      ]},

      { type: "h3", text: "Most expensive cities for rent" },
      { type: "ul", items: [
        "Munich: €550-900/month for shared room (₹55K-90K)",
        "Frankfurt: €500-750/month",
        "Hamburg: €450-700/month",
        "Stuttgart: €450-700/month",
        "Cologne: €420-650/month"
      ]},

      { type: "h2", text: "Smart ways to find cheap housing" },
      { type: "ul", items: [
        "WG-Gesucht.de — Germany's biggest shared housing portal",
        "Studentenwerk — official student dorms (cheapest, but waitlisted)",
        "Facebook groups for Indian students in your target city",
        "Apply to dorms BEFORE you arrive — even before getting visa",
        "Consider short-term sublet (Zwischenmiete) for first 2-3 months"
      ]},

      { type: "h2", text: "Groceries: real prices" },
      { type: "p", text: "Indian students cook at home to save money. Real prices at Aldi/Lidl (cheapest supermarkets):" },
      { type: "table", headers: ["Item", "Price in EUR", "Price in INR"], rows: [
        ["1L milk", "€0.99", "₹95"],
        ["Bread (1 loaf)", "€1.50-2.50", "₹150-240"],
        ["1 kg chicken", "€5-7", "₹500-700"],
        ["1 kg rice", "€1.50-2", "₹150-200"],
        ["12 eggs", "€2.50-3", "₹240-290"],
        ["1 kg potatoes", "€1-1.50", "₹95-145"],
        ["Pack of lentils (500g)", "€2-3", "₹190-290"],
        ["Pack of frozen veggies", "€1.50-2.50", "₹145-240"]
      ]},
      { type: "p", text: "Average grocery bill: €60-80/week (₹6K-8K) for one person cooking Indian meals." },

      { type: "h2", text: "Indian groceries: where to buy" },
      { type: "ul", items: [
        "Asian/Indian supermarkets in every major city",
        "Online: dukaaan.com, indianfood24.de (delivery to all Germany)",
        "Find Bangladeshi/Pakistani shops for cheaper rice + spices",
        "Carry essentials in your first luggage: spices, masala mixes, ghee"
      ]},

      { type: "h2", text: "Transport: Semester Ticket is gold" },
      { type: "p", text: "When you enroll, you pay a semester contribution (€100-400) that includes UNLIMITED public transport in your city + region. This is one of Germany's best perks." },
      { type: "ul", items: [
        "Munich: ~€72/semester for full city transport",
        "Berlin: Semesterticket included in fee",
        "Frankfurt area: Hessen-wide rail covered",
        "NRW (Cologne, Düsseldorf, etc.): NRW-Ticket covers entire state"
      ]},

      { type: "h2", text: "Health insurance: mandatory" },
      { type: "p", text: "All international students must have insurance. Public options:" },
      { type: "ul", items: [
        "TK (Techniker Krankenkasse): ~€120/month, English support",
        "AOK: ~€115/month, regional",
        "Barmer: ~€118/month, popular with international students"
      ]},

      { type: "h2", text: "Tips to save money (proven by Indian students)" },
      { type: "ul", items: [
        "Cook 5-6 days/week, eat out 1-2 days max",
        "Use student discount at museums, gyms, software (Spotify, Netflix)",
        "Get a bike — saves transport money + great exercise",
        "Buy second-hand books from senior students or eBay Kleinanzeigen",
        "Use Trinkgeld (refundable bottle deposit) — adds up to €5-10/week",
        "Get a part-time job (€12-15/hour) after first semester"
      ]},

      { type: "h2", text: "Realistic budgets (Indian student examples)" },
      { type: "h3", text: "Tight budget: €800/month (₹80K)" },
      { type: "p", text: "Living in Leipzig/Dresden in a shared room, cooking all meals, biking everywhere, minimal eating out." },

      { type: "h3", text: "Average: €1,100/month (₹1.1 lakh)" },
      { type: "p", text: "Berlin/Cologne shared apartment, cook 5 days, eat out twice weekly, occasional movie/event." },

      { type: "h3", text: "Comfortable: €1,500/month (₹1.5 lakh)" },
      { type: "p", text: "Munich/Frankfurt with private room, eat out frequently, travel within Germany, gym membership." },

      { type: "callout", emoji: "🎯", text: "Bottom line: Most Indian students need €11,904 for the blocked account + can manage on €1,000-1,200/month. Compared to UK (£1,500+/month) or USA ($1,500+/month), Germany is incredibly affordable for what you get." }
    ]
  },
  {
    slug: "uni-assist-step-by-step-guide",
    title: "uni-assist Application: Complete Step-by-Step Guide (2026)",
    excerpt: "Most German universities require uni-assist for international applications. Here's the exact process — documents, fees, deadlines, and how to avoid the most common rejection reasons.",
    category: "Application Tips",
    readTime: "9 min read",
    date: "2026-06-04",
    author: "Study in Germany Team",
    coverEmoji: "📋",
    coverGradient: "from-violet-500 to-purple-600",
    tags: ["uni-assist", "Application", "Documents"],
    body: [
      { type: "p", text: "uni-assist is the central application portal that 180+ German universities use to process international applications. If you're applying from Pakistan, India, Bangladesh, or most other non-EU countries, you'll go through uni-assist. Here's exactly how it works." },
      { type: "h2", text: "What is uni-assist?" },
      { type: "p", text: "uni-assist (Arbeits- und Servicestelle für internationale Studienbewerbungen) is a non-profit service that verifies international students' documents on behalf of German universities. They convert your foreign grades to the German scale and forward verified applications to the universities." },
      { type: "h2", text: "Which universities use uni-assist?" },
      { type: "p", text: "About 180 of 400+ German universities use uni-assist, including:" },
      { type: "ul", items: ["TU Berlin, Humboldt Berlin, FU Berlin", "Goethe University Frankfurt, TU Darmstadt", "RWTH Aachen, University of Cologne", "Universities of Cologne, Bonn, Münster", "Most universities in Baden-Württemberg + Hesse"] },
      { type: "callout", emoji: "💡", text: "Important: TUM, LMU Munich, KIT and Heidelberg DO NOT use uni-assist — they have their own portals (TUMonline, LMU portal, etc.). Always check the specific university." },
      { type: "h2", text: "Step-by-step application process" },
      { type: "h3", text: "Step 1: Create account at uni-assist.de" },
      { type: "p", text: "Go to my.uni-assist.de → Register. Fill in personal details, nationality, contact info. Use the same name as on your passport (exactly)." },
      { type: "h3", text: "Step 2: Choose universities and programs" },
      { type: "p", text: "Click 'Apply now' and search for your target university + program. You can apply to multiple universities in one application — uni-assist charges per university." },
      { type: "h3", text: "Step 3: Upload documents" },
      { type: "ul", items: ["Bachelor's degree + transcripts (HEC-attested for Pakistan)", "Higher Secondary (FSc/12th) + Matric (10th) certificates", "Translations to English/German by sworn translator", "Passport bio page", "English test scores (IELTS/TOEFL)", "GRE scores (if required)", "CV in English", "Letters of recommendation (if required)"] },
      { type: "h3", text: "Step 4: Pay the fees" },
      { type: "table", headers: ["Item", "Cost"], rows: [["First university", "€75"], ["Each additional university", "€30"], ["Re-application (next semester)", "€32-75"]] },
      { type: "p", text: "Pay via credit card or bank transfer. Pakistani students often use Wise or international debit cards." },
      { type: "h3", text: "Step 5: Submit and wait" },
      { type: "p", text: "Processing time: 4-6 weeks during peak season (April-July). uni-assist verifies your documents, converts your grades, and forwards your application to each university." },
      { type: "h2", text: "Common rejection reasons" },
      { type: "ul", items: ["Missing attestations (HEC, MOFA for Pakistani students)", "Translations not by sworn translators", "Incomplete transcripts (yes, ALL semester results needed)", "Late submission (after university deadline)", "Wrong document format (must be PDF, color scans)", "Name mismatch between passport and certificates"] },
      { type: "callout", emoji: "⚠️", text: "Tip: Apply 8-10 weeks before the university deadline. uni-assist processing alone takes 4-6 weeks — last-minute applications often miss the cut-off." },
      { type: "h2", text: "Pakistani student tips" },
      { type: "ul", items: ["HEC attestation BEFORE uploading — no shortcuts", "Apply to 4-6 universities (€75 + €30×5 = €225)", "Save scanned PDFs at 300 DPI minimum", "Keep originals safe — uni-assist needs digital only, but embassy needs originals", "Re-apply in next semester is cheaper if you don't get in"] },
      { type: "callout", emoji: "✅", text: "Bottom line: uni-assist is bureaucratic but predictable. Start 3 months before the deadline, get HEC attestation done first, and apply to multiple universities for safety." }
    ]
  },
  {
    slug: "germany-visa-interview-questions",
    title: "Germany Student Visa Interview: 25 Questions + Sample Answers",
    excerpt: "The visa interview at the German embassy is short but decisive. Here are the 25 most common questions asked of Pakistani and Indian students, with sample answers that actually work.",
    category: "Visa & Immigration",
    readTime: "10 min read",
    date: "2026-06-04",
    author: "Study in Germany Team",
    coverEmoji: "🎤",
    coverGradient: "from-rose-500 to-pink-600",
    tags: ["Visa Interview", "Embassy", "Questions"],
    body: [
      { type: "p", text: "The German embassy visa interview is usually 5-15 minutes. The officer is trying to assess: (1) are you a genuine student, (2) can you afford it, (3) will you return home after studies. Here are the 25 most asked questions with sample answers." },
      { type: "h2", text: "Category 1: About your university and program" },
      { type: "h3", text: "Q1: Why this university?" },
      { type: "quote", text: "RWTH Aachen has Germany's strongest research in mechanical engineering, and Prof. Schmidt's work on additive manufacturing aligns directly with my Bachelor's thesis topic." },
      { type: "h3", text: "Q2: Why this specific program?" },
      { type: "quote", text: "The MSc in Mechatronics combines mechanical and electrical engineering with control systems — exactly what I need to work in automotive R&D back in Pakistan." },
      { type: "h3", text: "Q3: Did you apply to other universities? Why?" },
      { type: "quote", text: "Yes, I applied to 5 universities for safety — TU Berlin, RWTH Aachen, KIT, TUM, and Stuttgart. RWTH accepted me first and the program was my top choice." },
      { type: "h2", text: "Category 2: Why Germany?" },
      { type: "h3", text: "Q4: Why Germany over USA, UK, Canada?" },
      { type: "quote", text: "Germany has the world's strongest manufacturing industry, tuition-free public universities, and excellent post-study work opportunities — exactly what I need for my career." },
      { type: "h3", text: "Q5: Why didn't you apply for German universities in Pakistan?" },
      { type: "quote", text: "No German universities operate in Pakistan. My field requires hands-on access to German industry and labs, which is only possible in Germany." },
      { type: "h3", text: "Q6: Have you been to Germany before?" },
      { type: "p", text: "Answer honestly. If you have visited (tourism, conference), mention it. If not, just say 'No, this will be my first time.'" },
      { type: "h2", text: "Category 3: Financial questions" },
      { type: "h3", text: "Q7: How will you finance your stay?" },
      { type: "quote", text: "I have €11,904 in a blocked account at Expatrio. My parents are sponsoring me — my father runs a manufacturing business with [show documents]." },
      { type: "h3", text: "Q8: Show me your blocked account confirmation." },
      { type: "p", text: "Hand them the printed Expatrio/Fintiba confirmation. Have copies ready." },
      { type: "h3", text: "Q9: What if your blocked account funds run out?" },
      { type: "quote", text: "I will work part-time (up to 120 days/year per German law). My family can also send additional funds if needed — they have demonstrated savings of over €30,000." },
      { type: "h3", text: "Q10: How much does it cost to live in Germany?" },
      { type: "quote", text: "Approximately €1,000-1,200 per month. My city Aachen is moderately priced. The blocked account €992/month covers most of it." },
      { type: "h2", text: "Category 4: Plans after studies" },
      { type: "h3", text: "Q11: What will you do after graduating?" },
      { type: "quote", text: "Germany offers an 18-month job-seeking visa. I plan to apply that period to gain industry experience with an automotive company, then return to Pakistan to apply my skills locally." },
      { type: "h3", text: "Q12: Why will you return to Pakistan?" },
      { type: "quote", text: "My family is in Pakistan, and there's a growing automotive sector. With German degree + experience, I can contribute to Pakistan's industrial development." },
      { type: "h3", text: "Q13: What if you can't find a job in Germany?" },
      { type: "quote", text: "I will return to Pakistan and apply to local automotive companies like Toyota IMC and Indus Motors. Pakistani companies value international degrees." },
      { type: "h2", text: "Category 5: Personal background" },
      { type: "h3", text: "Q14: Tell me about your family." },
      { type: "p", text: "Mention parents, siblings, where they live. Keep it brief and factual." },
      { type: "h3", text: "Q15: Are you married?" },
      { type: "p", text: "Answer honestly. If yes, show marriage certificate and explain whether spouse will join later." },
      { type: "h3", text: "Q16: Why did you choose engineering/your field?" },
      { type: "p", text: "Share a personal story or interest. Be authentic." },
      { type: "h2", text: "Category 6: Academic background" },
      { type: "h3", text: "Q17: What were your grades?" },
      { type: "quote", text: "My Bachelor's CGPA was 3.6/4.0 (top 10% of my class). My final year project on hybrid vehicles was selected for the national engineering competition." },
      { type: "h3", text: "Q18: Why is there a gap between your Bachelor's and now?" },
      { type: "p", text: "If applicable: 'I worked for X months/years to gain industry experience' or 'I was preparing for IELTS and university applications.' Be honest." },
      { type: "h3", text: "Q19: What's your English level?" },
      { type: "p", text: "Just speak confidently and naturally. They're testing your spoken English." },
      { type: "h2", text: "Category 7: Logistics" },
      { type: "h3", text: "Q20: Where will you live?" },
      { type: "quote", text: "I've applied for a Studentenwerk dorm in Aachen. For the first 2 weeks, I have a confirmed reservation at a hostel/airbnb." },
      { type: "h3", text: "Q21: Do you have health insurance?" },
      { type: "p", text: "Show your insurance confirmation (Mawista for arrival, will switch to TK after enrollment)." },
      { type: "h3", text: "Q22: When does your semester start?" },
      { type: "p", text: "Know your exact date. 'Winter semester: October 1' or 'Summer semester: April 1'." },
      { type: "h3", text: "Q23: Do you have a return ticket?" },
      { type: "p", text: "Usually no — explain you'll book after visa approval." },
      { type: "h3", text: "Q24: Have you ever been refused a visa?" },
      { type: "p", text: "Answer honestly. If yes, explain what changed since then." },
      { type: "h3", text: "Q25: Do you have any questions for me?" },
      { type: "quote", text: "Just one — when can I expect a decision? Thank you for your time." },
      { type: "h2", text: "How to prepare" },
      { type: "ul", items: ["Memorize the basic facts (university, program, fees, city)", "Practice answers OUT LOUD with a friend", "Wear formal/business attire", "Arrive 30 minutes early", "Carry ALL documents in a clear folder", "Stay calm — they want to approve, not reject"] },
      { type: "callout", emoji: "🎯", text: "Bottom line: The interview is short but decisive. Memorize facts, practice confidently, and emphasize your plan to return. Most Pakistani students who prepare well get approved on first try (~75-80% approval rate)." }
    ]
  },
  {
    slug: "german-language-learning-roadmap",
    title: "Learn German for University: Complete Roadmap (A1 to C1)",
    excerpt: "You don't always need German for English-taught programs, but learning it dramatically improves your life in Germany. Here's a practical roadmap from A1 to C1.",
    category: "Living in Germany",
    readTime: "9 min read",
    date: "2026-06-04",
    author: "Study in Germany Team",
    coverEmoji: "🗣️",
    coverGradient: "from-yellow-500 to-amber-600",
    tags: ["German Language", "Learning", "TestDaF"],
    body: [
      { type: "p", text: "If you're studying in Germany in English, you technically don't need German. But here's the truth — your life, friendships, jobs, and integration will be 10x better if you learn it. This is a practical roadmap from zero to C1." },
      { type: "h2", text: "Why bother learning German?" },
      { type: "ul", items: ["50% of Master's programs are German-taught — opens more options", "Part-time jobs pay 30% more if you speak German", "Better integration with German classmates and locals", "Required for permanent residence (B1) and citizenship (B2)", "Daily life (bureaucracy, hospitals, shops) is much easier"] },
      { type: "h2", text: "The German CEFR levels explained" },
      { type: "table", headers: ["Level", "What you can do", "Time to reach"], rows: [["A1", "Order food, basic greetings", "1-2 months"], ["A2", "Simple conversations, shopping", "3-4 months"], ["B1", "Discuss familiar topics, travel", "6-9 months"], ["B2", "Watch movies, attend lectures", "1-1.5 years"], ["C1", "University-level, professional work", "2 years"], ["C2", "Native-like, rare for non-natives", "3+ years"]] },
      { type: "h2", text: "Stage 1: A0 → A1 (start before Germany)" },
      { type: "p", text: "Goal: Basic survival German before flying. Time: 2-3 months." },
      { type: "ul", items: ["Duolingo (free, gamified) — 30 min/day", "Deutsch lernen mit Anja YouTube channel", "DW Learn German (free, government quality)", "Goethe Institut A1 book (best foundation)"] },
      { type: "h2", text: "Stage 2: A1 → A2 (first semester)" },
      { type: "p", text: "Goal: Daily conversations and simple texts. Time: 3 months." },
      { type: "ul", items: ["Volkshochschule (VHS) classes — €100-200 for full semester", "Tandem language exchange (free) — meet Germans wanting to learn English", "Easy German YouTube — Berlin street interviews", "Goethe-Zertifikat A2 exam (€90, official certificate)"] },
      { type: "h2", text: "Stage 3: A2 → B1 (recommended target)" },
      { type: "p", text: "B1 is the magic level — required for permanent residence and enables most jobs. Time: 4-6 months from A2." },
      { type: "ul", items: ["Student association language classes (often free)", "Read Easy German news (nachrichtenleicht.de)", "Watch Tatort with German subtitles", "Goethe-Zertifikat B1 exam (€175)", "Get a German Stammtisch (regular meetup) at your university"] },
      { type: "h2", text: "Stage 4: B1 → B2 / C1 (for jobs and integration)" },
      { type: "p", text: "Time: 6-12 months. This is where you become functional in German society." },
      { type: "ul", items: ["University DaF (Deutsch als Fremdsprache) courses — usually free for enrolled students", "Read German newspapers (Süddeutsche Zeitung, Die Zeit)", "Watch German Netflix (Dark, Babylon Berlin)", "TestDaF or DSH exam if needed for German-taught Master's"] },
      { type: "h2", text: "Best apps and resources" },
      { type: "ul", items: ["Duolingo (free, gamified)", "Anki flashcards (free, science-based memorization)", "Babbel (paid, ~€10/month)", "Lingoda (paid live classes, ~€100/month)", "Pimsleur (audio-only, great for commute)"] },
      { type: "h2", text: "Real costs to reach B2 in Germany" },
      { type: "table", headers: ["Item", "Cost"], rows: [["Goethe A1 textbook", "€25"], ["VHS A1-A2 course", "€150"], ["VHS B1-B2 course", "€250"], ["Goethe certificates (A1+A2+B1+B2)", "~€600"], ["Total estimate", "€1,000-1,500"]] },
      { type: "h2", text: "TestDaF vs DSH (for German-taught programs)" },
      { type: "p", text: "If you want to study a German-taught Master's, you need either TestDaF or DSH. Both are accepted equally." },
      { type: "ul", items: ["TestDaF: International, can take from Pakistan/India (~€200)", "DSH: Only in Germany (~€100-180), university-specific", "Required level: TDN 4 (each of 4 sections) or DSH-2"] },
      { type: "callout", emoji: "🎯", text: "Bottom line: You don't NEED German for English programs, but learning it transforms your life. Target A2 before flying + B1 by end of first year. Total cost: €1,000 over 18 months. Worth every euro." }
    ]
  },
  {
    slug: "german-student-jobs-werkstudent",
    title: "Werkstudent Guide: How Pakistani Students Earn €1500+/month in Germany",
    excerpt: "Working students (Werkstudent) earn €15-25/hour for up to 20 hours/week. Here's how to find one, what the rules are, and how much you can actually make.",
    category: "Living in Germany",
    readTime: "8 min read",
    date: "2026-06-04",
    author: "Study in Germany Team",
    coverEmoji: "💼",
    coverGradient: "from-blue-500 to-indigo-600",
    tags: ["Werkstudent", "Jobs", "Income"],
    body: [
      { type: "p", text: "The 'Werkstudent' (working student) job is one of Germany's best-kept secrets for international students. You can earn €1,000-2,000+ per month while studying, get real industry experience, and often land full-time work after graduation. Here's how it works." },
      { type: "h2", text: "What is a Werkstudent job?" },
      { type: "p", text: "A Werkstudentenjob is a special part-time employment status for enrolled university students. You work for a company (often in your field) up to 20 hours/week during the semester and full-time during semester breaks." },
      { type: "h2", text: "The legal rules" },
      { type: "table", headers: ["Rule", "Details"], rows: [["Max hours during semester", "20 hours/week"], ["Max hours in semester breaks", "Unlimited (full-time OK)"], ["Tax exemption threshold", "Earnings <€538/month = no tax"], ["Social insurance", "Reduced (~10% of salary)"], ["Visa work limit (non-EU)", "120 full days OR 240 half days per year"]] },
      { type: "h2", text: "How much you can earn" },
      { type: "table", headers: ["Field", "Hourly Rate", "Monthly (20h/week)"], rows: [["IT/Software", "€18-30/h", "€1,440-2,400"], ["Engineering R&D", "€15-22/h", "€1,200-1,760"], ["Finance/Consulting", "€16-25/h", "€1,280-2,000"], ["Marketing/Communications", "€13-18/h", "€1,040-1,440"], ["Research Assistant (HiWi)", "€12-15/h", "€960-1,200"]] },
      { type: "callout", emoji: "💰", text: "Real example: A Pakistani Master's student at TUM working as Werkstudent at BMW earns €22/hour × 80 hours/month = €1,760/month tax-free. That's PKR 5.5 lakh/month — more than many CEO salaries in Pakistan." },
      { type: "h2", text: "Where to find Werkstudent jobs" },
      { type: "ul", items: ["StepStone.de — Germany's biggest job site", "LinkedIn Germany — filter 'Werkstudent'", "Indeed.de — broad listings", "Stellenwerk (university job boards)", "Company career pages directly (BMW, Siemens, SAP, etc.)", "University career service"] },
      { type: "h2", text: "Top industries hiring Werkstudents" },
      { type: "ul", items: ["Automotive: BMW, Mercedes-Benz, Audi, VW, Bosch", "Tech: SAP, Siemens, Software AG, Atlassian, Microsoft", "Banks: Deutsche Bank, Commerzbank, ING", "Consulting: McKinsey, BCG, Bain (very competitive)", "Pharma: Bayer, Roche, BioNTech", "Startups: Berlin/Munich are full of opportunities"] },
      { type: "h2", text: "Application tips for Pakistani students" },
      { type: "ul", items: ["German CV (1 page, with photo) is the norm", "Cover letter (Anschreiben) is REQUIRED in Germany", "Apply 3-6 months before you want to start", "B1 German helps massively for non-IT roles", "IT roles often accept English-only", "Highlight any project work or internships from Pakistan"] },
      { type: "h2", text: "What is a 'Mini-Job' (different from Werkstudent)?" },
      { type: "p", text: "Mini-jobs are simpler:" },
      { type: "ul", items: ["Earn up to €538/month tax-free", "No work hour limit per week (just the earnings cap)", "Common in restaurants, retail, cafés", "Doesn't count toward Werkstudent status", "Good for first semester before you find a 'real' Werkstudent role"] },
      { type: "h2", text: "Realistic timeline" },
      { type: "table", headers: ["When", "What"], rows: [["Pre-arrival", "Polish German CV + LinkedIn"], ["Month 1-2", "Settle, attend networking events"], ["Month 2-3", "Apply to 20-30 Werkstudent roles"], ["Month 3-4", "First Werkstudent job (often)"], ["Year 2", "Likely promoted or moved to higher role"], ["Post-graduation", "Convert Werkstudent to full-time employee"]] },
      { type: "h2", text: "The hidden bonus: career pipeline" },
      { type: "p", text: "60%+ of Werkstudents get full-time job offers from the same company after graduation. Companies use Werkstudent positions as a try-before-buy. Pakistani students who do Werkstudent jobs have much higher post-study employment rates." },
      { type: "callout", emoji: "🎯", text: "Bottom line: Werkstudent jobs let you earn €1,000-2,000/month while studying, gain real German industry experience, and often lead to full-time employment. Apply early, polish your German CV, and target your field." }
    ]
  },
  {
    slug: "german-dorm-vs-wg-housing-guide",
    title: "Dorm vs WG: Where Should International Students Live in Germany?",
    excerpt: "Studentenwerk dorms or WG (shared flat)? Each has pros and cons. Here's an honest comparison from Pakistani and Indian students who tried both.",
    category: "Living in Germany",
    readTime: "7 min read",
    date: "2026-06-04",
    author: "Study in Germany Team",
    coverEmoji: "🏠",
    coverGradient: "from-teal-500 to-cyan-600",
    tags: ["Housing", "Dorm", "WG", "Studentenwerk"],
    body: [
      { type: "p", text: "Finding housing in Germany as an international student is the most stressful part of moving. The two main options: a Studentenwerk dorm (Wohnheim) or a shared flat (WG — Wohngemeinschaft). Here's an honest comparison." },
      { type: "h2", text: "Option 1: Studentenwerk Dorms (Wohnheim)" },
      { type: "h3", text: "Pros" },
      { type: "ul", items: ["Cheapest — €250-400/month including utilities", "Easier to apply (online, in English)", "Already furnished (bed, desk, chair)", "Reliable internet included", "International student community already in place", "No security deposit games (predictable)"] },
      { type: "h3", text: "Cons" },
      { type: "ul", items: ["Long waitlists (3-12 months in Munich/Berlin)", "Strict rules (no parties, limited guest hours)", "Shared bathrooms/kitchens (depends on dorm)", "Smaller rooms (10-15 m²)", "Less 'real-life' German experience"] },
      { type: "h2", text: "Option 2: WG (Wohngemeinschaft / Shared Flat)" },
      { type: "h3", text: "Pros" },
      { type: "ul", items: ["More space (rooms 12-20 m²)", "Better location (closer to city center)", "Real friendship with German flatmates", "Speak German daily — fastest way to learn", "Private bathroom/kitchen often", "More freedom (own keys, guests welcome)"] },
      { type: "h3", text: "Cons" },
      { type: "ul", items: ["Higher cost (€400-700/month for shared room)", "Casting process — WGs interview you before accepting", "Security deposit (3 months rent — €1,500-2,000)", "Furniture not included", "Need to compete with German students who often get preference"] },
      { type: "h2", text: "Comparison by city" },
      { type: "table", headers: ["City", "Dorm Range", "WG Range", "Recommendation"], rows: [["Munich", "€400-550/m", "€600-900/m", "Apply for dorm 1+ year ahead, try WG too"], ["Berlin", "€280-400/m", "€450-700/m", "WG easier here, lots of options"], ["Hamburg", "€350-450/m", "€500-700/m", "Mixed — try both"], ["Cologne", "€300-400/m", "€450-650/m", "WG usually better"], ["Leipzig", "€220-320/m", "€300-450/m", "Affordable — easy either way"], ["Heidelberg", "€350-450/m", "€450-650/m", "Very competitive — apply early"]] },
      { type: "h2", text: "Where to search for WGs" },
      { type: "ul", items: ["WG-Gesucht.de — biggest portal (must be member)", "ImmobilienScout24 — for full apartments", "Facebook groups specific to your city + 'Wohnung gesucht'", "University Stellenwerk", "Word of mouth from senior international students"] },
      { type: "h2", text: "Pakistani/Indian student strategy" },
      { type: "h3", text: "Step 1: Apply to dorm IMMEDIATELY when you get admission" },
      { type: "p", text: "Don't wait for visa — apply now. Most dorms have waitlists. You can always cancel if you get something better." },
      { type: "h3", text: "Step 2: Book temporary housing for 1-2 weeks" },
      { type: "p", text: "Hostel, Airbnb, or short-term sublet. Don't fly to Germany without housing — finding a place takes 2-4 weeks." },
      { type: "h3", text: "Step 3: WG hunt after arrival" },
      { type: "p", text: "Visit WGs in person, learn German basics for the 'WG-Casting' (interview), accept the first reasonable offer." },
      { type: "h2", text: "Common scams to avoid" },
      { type: "ul", items: ["NEVER pay deposit before visiting the apartment", "Watch for 'too good to be true' offers (€200 for own apartment in Munich = SCAM)", "Verify the landlord/owner with public records", "Use only official platforms (WG-Gesucht, ImmoScout)", "Avoid Western Union / crypto deposits — bank transfers only"] },
      { type: "callout", emoji: "🏠", text: "Bottom line: Apply for dorm FIRST (lowest cost, easiest), but actively hunt for WGs after arrival (better experience, more space). Most Pakistani students start in dorms and move to WGs in second semester. Plan for €400-700/month for housing." }
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // NEW: Block Account comparison — affiliate-ready content
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    slug: "blocked-account-expatrio-vs-fintiba-vs-coracle-2026",
    title: "Expatrio vs Fintiba vs Coracle: Best Blocked Account for 2026/2027",
    excerpt:
      "Honest comparison of the three biggest blocked account providers — fees, opening time, refund speed, and which one is right for your country.",
    category: "Finance & Insurance",
    readTime: "10 min read",
    date: "2026-06-07",
    author: "Study in Germany Team",
    coverEmoji: "💳",
    coverGradient: "from-emerald-500 to-teal-600",
    tags: ["Blocked Account", "Expatrio", "Fintiba", "Coracle", "Visa"],
    body: [
      { type: "p", text: "Every international student applying for a German student visa needs a blocked account (Sperrkonto) — proof that you can support yourself in Germany. Three providers dominate the market: Expatrio, Fintiba, and Coracle. Which one should you choose? Honest answer: it depends on your country, your timeline, and what extras you actually need. Here's the breakdown that students actually need." },

      { type: "h2", text: "What is a blocked account and why you need one" },
      { type: "p", text: "A blocked account holds €11,904 (or higher — €992/month × 12 in 2026) that gets released to you monthly after you arrive in Germany. The German embassy requires proof of this before issuing your student visa. Without it, your visa is rejected — no exceptions." },
      { type: "callout", emoji: "⚠️", text: "Important: The required amount can increase. Always check the latest figure on the official German embassy website before transferring." },

      { type: "h2", text: "Quick comparison table" },
      { type: "table", headers: ["Feature", "Expatrio", "Fintiba", "Coracle"], rows: [
        ["Setup fee", "€49 one-time", "€89 one-time", "€89 one-time"],
        ["Monthly fee", "€0", "€5/month", "€0 first 24 months"],
        ["Opening time", "1-3 business days", "1-2 business days", "1-2 business days"],
        ["Country support", "190+ countries", "100+ countries", "180+ countries"],
        ["Health insurance bundle", "Yes (DR-WALTER + DAK)", "Yes (DAK)", "Yes (DR-WALTER)"],
        ["Refund speed (if visa denied)", "5-10 business days", "5-10 business days", "5-10 business days"],
        ["German bank partner", "SolarisBank", "Sutor Bank", "SolarisBank"],
      ]},

      { type: "h2", text: "Expatrio — best for Pakistan, India, Bangladesh" },
      { type: "p", text: "Expatrio is the most popular choice among South Asian students. The €49 setup fee is the lowest, and they have zero monthly fees. Their value bundle (blocked account + health insurance + IBAN account) is well-priced and bundled into one application." },
      { type: "h3", text: "Pros" },
      { type: "ul", items: [
        "Lowest setup fee (€49 vs €89 elsewhere)",
        "Strong support for Pakistan, India, Bangladesh students",
        "All-in-one Value Package (saves time)",
        "Optional Allianz health insurance (premium)",
        "Mobile app for monthly management"
      ]},
      { type: "h3", text: "Cons" },
      { type: "ul", items: [
        "Customer support can be slow during peak season (June-August)",
        "Some users report verification delays for less common countries"
      ]},

      { type: "h2", text: "Fintiba — fastest setup, best for last-minute applicants" },
      { type: "p", text: "Fintiba was the pioneer — they offer the most polished mobile app and the fastest verification. The €5/month fee adds up over a year (€60), but if you need your account opened in 24-48 hours, Fintiba is the most reliable choice." },
      { type: "h3", text: "Pros" },
      { type: "ul", items: [
        "Fastest opening (often within 24 hours)",
        "Excellent mobile app with German-style banking features",
        "Strong customer support in English",
        "Sutor Bank partnership (reputable German bank)",
        "Health insurance bundle with DAK (top-tier provider)"
      ]},
      { type: "h3", text: "Cons" },
      { type: "ul", items: [
        "€89 setup + €5/month = highest total cost",
        "Some accounts get frozen for additional verification (random checks)"
      ]},

      { type: "h2", text: "Coracle — cheapest long-term option" },
      { type: "p", text: "Coracle is the newest of the three, but their 24-month no-monthly-fee promise makes them the cheapest if you plan to stay in Germany for your full degree. Setup quality is comparable to Fintiba." },
      { type: "h3", text: "Pros" },
      { type: "ul", items: [
        "Zero monthly fees for first 24 months",
        "Same SolarisBank partnership as Expatrio",
        "Modern mobile app",
        "Strong support for African and Asian students"
      ]},
      { type: "h3", text: "Cons" },
      { type: "ul", items: [
        "Less established brand (smaller user base)",
        "€89 upfront setup fee",
        "Fewer reviews/reports than Expatrio or Fintiba"
      ]},

      { type: "h2", text: "Which one should YOU choose?" },
      { type: "h3", text: "Choose Expatrio if:" },
      { type: "ul", items: [
        "You're from Pakistan, India, Bangladesh, or Nepal",
        "You want the lowest upfront cost",
        "You want everything (blocked account + insurance) in one application",
        "You have 3+ weeks before your visa appointment"
      ]},
      { type: "h3", text: "Choose Fintiba if:" },
      { type: "ul", items: [
        "You need your account opened in 24-48 hours",
        "Your visa appointment is in less than 2 weeks",
        "You value polished apps and customer service",
        "You're okay paying €60 more per year for reliability"
      ]},
      { type: "h3", text: "Choose Coracle if:" },
      { type: "ul", items: [
        "You're staying in Germany for 2+ years",
        "You want to minimize total cost over time",
        "Expatrio doesn't fully support your country",
        "You're comfortable with a newer provider"
      ]},

      { type: "callout", emoji: "💡", text: "Pro tip: All three providers will refund your money if your visa is denied. You're not locked in. Pick the one that fits your immediate needs and switch later if you want." },

      { type: "h2", text: "Common mistakes to avoid" },
      { type: "ul", items: [
        "Waiting until the last week before visa appointment — leave at least 3 weeks",
        "Transferring less than the required amount — always overshoot by €100-200",
        "Forgetting to register your German address (Anmeldung) before activating the account",
        "Not setting up SCHUFA-free direct debit for monthly payments",
        "Using the wrong SWIFT/IBAN format — copy directly from the welcome email"
      ]},

      { type: "h2", text: "Step-by-step setup process" },
      { type: "p", text: "Regardless of provider, the steps are nearly identical:" },
      { type: "ul", items: [
        "1. Choose provider and complete online application (15 min)",
        "2. Upload passport copy and university admission letter",
        "3. Receive welcome email with IBAN within 1-3 business days",
        "4. Transfer required amount from your home bank account (5-10 days)",
        "5. Receive confirmation letter (PDF) — this is what the embassy needs",
        "6. Use the confirmation in your visa application"
      ]},

      { type: "h2", text: "Final verdict" },
      { type: "p", text: "For 95% of South Asian students, Expatrio is the right choice — lowest cost, well-supported, all-in-one. Only switch to Fintiba if you're in a hurry, or to Coracle if you're optimizing for long-term cost. Don't overthink it — the differences are small, the consequences of not having ANY blocked account are huge." },

      { type: "callout", emoji: "✅", text: "Quick decision: 80% of our community uses Expatrio. Start there unless you have a specific reason to pick another." }
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // NEW: Visa rejection reasons — high search volume
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    slug: "germany-student-visa-rejection-reasons-2026",
    title: "Top 10 Germany Student Visa Rejection Reasons (and How to Avoid Them)",
    excerpt:
      "The exact reasons German embassies reject student visas — based on real cases. Avoid these mistakes and dramatically improve your approval chances.",
    category: "Visa Process",
    readTime: "11 min read",
    date: "2026-06-07",
    author: "Study in Germany Team",
    coverEmoji: "⚠️",
    coverGradient: "from-orange-500 to-red-600",
    tags: ["Visa Rejection", "Student Visa", "Germany Embassy", "Application Tips"],
    body: [
      { type: "p", text: "German student visa rejection rates vary wildly by country — from 5% to over 35%. The good news: most rejections are preventable. The bad news: most applicants don't know why they were rejected until it's too late. Here are the 10 most common reasons embassies deny student visas, with real fixes for each." },

      { type: "callout", emoji: "📊", text: "Statistics: Pakistan ~25% rejection rate, India ~15%, Bangladesh ~30%, Vietnam ~18%. The biggest factor isn't your country — it's how well you prepare." },

      { type: "h2", text: "1. Insufficient financial proof" },
      { type: "p", text: "By far the #1 rejection reason. The embassy needs absolute certainty you won't become a financial burden." },
      { type: "h3", text: "How it happens" },
      { type: "ul", items: [
        "Blocked account opened too late (within 1 week of interview)",
        "Wrong amount — €11,904 minimum (changes yearly, always check)",
        "Bank statements showing recently-deposited large sums (looks suspicious)",
        "Sponsor's financial situation unclear or weak"
      ]},
      { type: "h3", text: "How to avoid" },
      { type: "ul", items: [
        "Open blocked account 4-6 weeks before visa appointment",
        "Add €200-500 buffer over the minimum",
        "If using sponsor, show 6+ months of bank statements with stable balance",
        "Include sponsor's income tax returns, business registration, employment letter"
      ]},

      { type: "h2", text: "2. Weak motivation letter / unclear study plan" },
      { type: "p", text: "Visa officers want proof you'll actually study and return home — not just use the visa to enter Europe." },
      { type: "h3", text: "How it happens" },
      { type: "ul", items: [
        "Generic letter that could apply to any country",
        "No clear reason WHY Germany over UK/US/Canada",
        "No clear post-study plan (return home? PR? unclear)",
        "Contradictions with academic CV"
      ]},
      { type: "h3", text: "How to avoid" },
      { type: "ul", items: [
        "Mention 2-3 SPECIFIC German universities and programs",
        "Explain why your home country needs this skill",
        "Be honest about post-study plans (return + work, family ties)",
        "Connect your past degree clearly to chosen program"
      ]},

      { type: "h2", text: "3. Insufficient language proof" },
      { type: "p", text: "Even for English-taught programs, German embassies sometimes question if you'll cope with daily life." },
      { type: "h3", text: "How to avoid" },
      { type: "ul", items: [
        "IELTS 6.5 minimum (5.5 per band) for English programs",
        "Add at least A1/A2 German certificate (Goethe Institut preferred)",
        "If your program is in German, get TestDaF or DSH — no exceptions",
        "Bring physical certificates to interview"
      ]},

      { type: "h2", text: "4. Inconsistent or false information" },
      { type: "p", text: "Embassy officers cross-check everything. One inconsistency = rejection." },
      { type: "h3", text: "Common slip-ups" },
      { type: "ul", items: [
        "Different dates on documents vs application form",
        "Job title mismatch between CV and previous visa applications",
        "Family details inconsistent across forms",
        "Travel history not matching passport stamps"
      ]},
      { type: "callout", emoji: "❌", text: "Critical: Never lie on a German visa form. If caught (and they usually catch), you'll be banned from Schengen for 5 years. One mistake = your future." },

      { type: "h2", text: "5. Doubts about your return after studies" },
      { type: "p", text: "Visa officers specifically check 'ties to home country.' If your ties seem weak, they assume you'll overstay." },
      { type: "h3", text: "Strengthen your ties" },
      { type: "ul", items: [
        "Property ownership documents (you or family)",
        "Family business registration",
        "Letter from current/future employer showing job waiting after studies",
        "Strong family roots (married, kids, elderly parents)",
        "Bank accounts and investments in home country"
      ]},

      { type: "h2", text: "6. Wrong or incomplete documents" },
      { type: "p", text: "Sounds basic, but document errors cause 20% of rejections." },
      { type: "h3", text: "Most missed documents" },
      { type: "ul", items: [
        "HEC attestation missing on Pakistani degrees",
        "APS certificate missing for India/China applicants",
        "Birth certificate not legalized/apostilled",
        "Marriage certificate (if married) not included",
        "University admission letter copy (need original + 2 copies)"
      ]},

      { type: "h2", text: "7. Suspicious bank transactions" },
      { type: "p", text: "Embassy officers review your bank statements for red flags." },
      { type: "h3", text: "Red flags they look for" },
      { type: "ul", items: [
        "Large deposits (>€2,000) just before visa appointment",
        "Bank statement gaps (missing months)",
        "Cash deposits without source explanation",
        "Multiple accounts with conflicting balances"
      ]},
      { type: "h3", text: "Fix it" },
      { type: "ul", items: [
        "Show 6 months of clean, consistent statements",
        "Document any large deposit (loan agreement, property sale, gift letter)",
        "Avoid emergency transfers in final 2-3 weeks before appointment"
      ]},

      { type: "h2", text: "8. Poor interview performance" },
      { type: "p", text: "Embassy officers ask questions to verify your application is genuine. Nervous, contradictory, or vague answers = rejection." },
      { type: "h3", text: "Common interview questions" },
      { type: "ul", items: [
        "Why Germany specifically? (Not 'free education' — be substantive)",
        "Why this program? Why this university?",
        "What will you do after graduating?",
        "Who's paying for your studies? (Match this with financial docs)",
        "Have you applied for visas to other countries? (Be honest)"
      ]},
      { type: "h3", text: "Interview prep tips" },
      { type: "ul", items: [
        "Read your own application 3-5 times before the interview",
        "Practice answers OUT LOUD (not just in your head)",
        "Wear clean, professional clothes (not formal — comfortable)",
        "Arrive 30 minutes early",
        "Bring extra copies of every document"
      ]},

      { type: "h2", text: "9. Previous visa rejections (other countries)" },
      { type: "p", text: "Schengen countries share visa databases. If you've been rejected for a UK/US/Canada visa, German embassy knows." },
      { type: "h3", text: "How to handle" },
      { type: "ul", items: [
        "Be honest in the application — never hide rejections",
        "Prepare a 1-page explanation of WHY you were rejected before",
        "Show what's different now (job, education, family situation)",
        "Apply only when you're 100% prepared — don't apply 'just to try'"
      ]},

      { type: "h2", text: "10. Underprepared / suspicious profile" },
      { type: "p", text: "Sometimes the rejection reason is vague — but it usually comes down to: 'This person doesn't seem like a real student.'" },
      { type: "h3", text: "Make yourself look genuine" },
      { type: "ul", items: [
        "Strong academic transcripts (consistent, not patchy)",
        "Clear academic progression (no random gap years without explanation)",
        "LinkedIn profile matching CV",
        "References from professors (with their email + phone)",
        "Evidence of subject interest (projects, internships, publications)"
      ]},

      { type: "h2", text: "What to do if you ARE rejected" },
      { type: "p", text: "Rejection isn't the end. You can reapply, but you need to address WHY first." },
      { type: "ul", items: [
        "1. Request the rejection letter (in writing) from the embassy",
        "2. Identify the specific reason cited",
        "3. Wait 1-2 months before reapplying (shows you took it seriously)",
        "4. Address the specific issue (more money, better letter, etc.)",
        "5. Get a lawyer review if reapplying — €100-200 well spent"
      ]},

      { type: "callout", emoji: "💡", text: "Bottom line: 80% of German student visa rejections are preventable. Strong financials + clear motivation + honest application = ~90% approval rate. Don't skip steps to save time — a rejection costs you 6-12 months of life." }
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // NEW: 2027 application timeline — evergreen, practical
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    slug: "germany-university-application-timeline-2027",
    title: "Germany University Application Timeline 2027 (Month-by-Month Plan)",
    excerpt:
      "Exact month-by-month timeline for applying to German universities for Winter 2027/2028 intake — when to start, deadlines, and what to do each month.",
    category: "Application Tips",
    readTime: "9 min read",
    date: "2026-06-07",
    author: "Study in Germany Team",
    coverEmoji: "📅",
    coverGradient: "from-indigo-500 to-blue-600",
    tags: ["Timeline", "Application", "2027", "Planning"],
    body: [
      { type: "p", text: "Most students underestimate how long the German university application process takes. The reality: you need to start 12-18 months before your intended start date. This month-by-month plan walks you through exactly what to do, when — based on the Winter 2027 intake (October 2027 start)." },

      { type: "callout", emoji: "⏰", text: "Quick rule: Winter intake (October) — start applying by July of previous year. Summer intake (April) — start applying by November of previous year." },

      { type: "h2", text: "12-15 months before (June-September 2026)" },
      { type: "h3", text: "Research phase" },
      { type: "ul", items: [
        "Research 15-20 universities and shortlist 8-10",
        "Identify 5-7 specific programs (Master's or Bachelor's)",
        "Check exact admission requirements for each",
        "Note application deadlines for each program",
        "Start saving for application fees (€75 × 5-7 programs = €375-525)"
      ]},

      { type: "h2", text: "10-12 months before (October-December 2026)" },
      { type: "h3", text: "Language tests" },
      { type: "ul", items: [
        "Register for IELTS or TOEFL (3 weeks lead time)",
        "If German programs: book TestDaF or DSH",
        "Aim to take test by January 2027",
        "Plan a retake buffer (2 attempts is normal)"
      ]},
      { type: "h3", text: "Document prep" },
      { type: "ul", items: [
        "Apply for HEC attestation (Pakistan) — takes 4-6 weeks",
        "Apply for APS certificate (India/China) — takes 8-12 weeks",
        "Get transcripts translated into English/German if needed",
        "Order official transcripts (sealed envelopes)"
      ]},

      { type: "h2", text: "8-10 months before (January-February 2027)" },
      { type: "h3", text: "Application materials" },
      { type: "ul", items: [
        "Start writing Statement of Purpose (3-4 drafts minimum)",
        "Request 2-3 Letters of Recommendation from professors",
        "Update CV in German/European format",
        "Take language test if not done",
        "Get all documents notarized/legalized"
      ]},

      { type: "h2", text: "6-8 months before (March-April 2027)" },
      { type: "h3", text: "Submit applications" },
      { type: "ul", items: [
        "Submit to uni-assist (most public unis) — €75 per application",
        "Submit to TUM, LMU separately (have their own portals)",
        "Upload all required documents",
        "Pay application fees",
        "Get confirmation emails for each application"
      ]},
      { type: "callout", emoji: "⚠️", text: "Critical deadline: Most German universities deadline July 15 for Winter intake. Apply by April-May to avoid rushed mistakes." },

      { type: "h2", text: "4-6 months before (May-June 2027)" },
      { type: "h3", text: "Wait + supplementary actions" },
      { type: "ul", items: [
        "Follow up with universities (after 4 weeks of no response)",
        "Start learning basic German (A1 level)",
        "Research housing in target cities",
        "Open conversation with sponsors about financial proof",
        "Start blocked account research (Expatrio, Fintiba, Coracle)"
      ]},

      { type: "h2", text: "3-4 months before (June-July 2027)" },
      { type: "h3", text: "Admission decisions + visa prep" },
      { type: "ul", items: [
        "Receive admission letters (usually June-July)",
        "Accept your preferred offer",
        "Pay semester fee (€150-350 depending on uni)",
        "Open blocked account with €11,904+ (€992/month × 12)",
        "Get health insurance confirmation",
        "Apply for student visa appointment"
      ]},

      { type: "h2", text: "1-2 months before (August-September 2027)" },
      { type: "h3", text: "Visa + travel prep" },
      { type: "ul", items: [
        "Attend visa interview (book 2-3 months ahead in peak season)",
        "Receive visa (4-12 weeks processing)",
        "Book flights (cheaper if 4-6 weeks ahead)",
        "Apply for university dorm (if not done)",
        "Convert spare money to Euros at good rate"
      ]},

      { type: "h2", text: "Final 2-4 weeks (September 2027)" },
      { type: "h3", text: "Departure prep" },
      { type: "ul", items: [
        "Pack winter clothes (German autumn is cold by October)",
        "Print 3 copies of every important document",
        "Set up international roaming for first week",
        "Confirm housing pickup/check-in",
        "Inform bank of travel (to avoid card blocks)",
        "Buy German SIM card on arrival day"
      ]},

      { type: "h2", text: "After arrival (October 2027 onward)" },
      { type: "ul", items: [
        "Register address (Anmeldung) within 14 days — mandatory",
        "Get tax ID (Steuer-ID) at local Rathaus",
        "Open German bank account",
        "Activate health insurance",
        "Convert visa to residence permit at Ausländerbehörde",
        "Start the semester!"
      ]},

      { type: "h2", text: "Compressed timeline (if you start late)" },
      { type: "p", text: "If you're starting 6-8 months out instead of 12-15, here's the compressed plan:" },
      { type: "ul", items: [
        "Month 1: Research + select 3-5 unis (not 10)",
        "Month 2: Language test + document prep in parallel",
        "Month 3: Submit applications immediately",
        "Month 4-5: Wait for admission",
        "Month 6: Visa + blocked account",
        "Month 7-8: Travel + arrival"
      ]},
      { type: "callout", emoji: "💡", text: "Honest truth: 80% of failures happen in compressed timelines. If you're under 6 months — strongly consider applying for Summer 2028 intake instead. Patience pays." },

      { type: "h2", text: "What if you miss the deadline?" },
      { type: "p", text: "Most German universities have ONE intake per year (Winter). Some offer Summer intake (April) — usually for non-popular programs. If you miss Winter:" },
      { type: "ul", items: [
        "Apply for Summer intake (limited options)",
        "Apply to private universities (rolling admissions)",
        "Use the extra year productively — internship, German course, GRE prep",
        "Apply early for next Winter intake (becomes 14-month plan)"
      ]},

      { type: "callout", emoji: "📅", text: "Bottom line: Studying in Germany rewards planners. Start 12-15 months early, follow this timeline, and you'll have a smooth application. Rushing = mistakes = rejection = lost year." }
    ]
  },
];

export const blogCategories = [
  "All",
  "University Guides",
  "Scholarships",
  "Visa & Immigration",
  "Universities",
  "Application Tips",
  "Living in Germany",
];

export function getBlogPost(slug) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug, limit = 3) {
  const current = blogPosts.find((p) => p.slug === currentSlug);
  if (!current) return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, limit);

  // Prefer same category, then same tags, then anything else
  const sameCategory = blogPosts.filter(
    (p) => p.slug !== currentSlug && p.category === current.category
  );
  const sameTags = blogPosts.filter(
    (p) =>
      p.slug !== currentSlug &&
      p.category !== current.category &&
      p.tags?.some((t) => current.tags?.includes(t))
  );
  const others = blogPosts.filter(
    (p) =>
      p.slug !== currentSlug &&
      p.category !== current.category &&
      !p.tags?.some((t) => current.tags?.includes(t))
  );

  return [...sameCategory, ...sameTags, ...others].slice(0, limit);
}
