// A free, data-grounded assistant for the Study in Germany site.
// No external API — it understands the user's question with keyword/intent
// matching and answers from the site's own data, always pointing to a page.

import { universities } from "@/data/universities";
import { cities } from "@/data/cities";
import { workRules } from "@/data/jobs";
import { blockedAccount } from "@/data/visa";
import { industries } from "@/data/industries";
import { ALL_PROGRAMS } from "@/lib/programs";

const euro = (n) => (n === 0 ? "Free" : "€" + n.toLocaleString("en-US"));

export const SUGGESTIONS = [
  "Where do I start?",
  "Is it really free?",
  "Cost in PKR",
  "Scholarships",
  "From Pakistan / India?",
  "Visa process",
];

function has(q, ...words) {
  return words.some((w) => q.includes(w));
}

function findCity(q) {
  return cities.find(
    (c) => q.includes(c.name.toLowerCase()) || q.includes(c.germanName.toLowerCase())
  );
}

function findUni(q) {
  return universities.find((u) => {
    const sn = u.shortName.toLowerCase();
    return (
      q.includes(u.name.toLowerCase()) ||
      (sn.length >= 3 && q.includes(sn)) ||
      q.includes(u.slug.replace(/-/g, " "))
    );
  });
}

// Returns { text, links: [{label, href, external?}] }
export function getAnswer(raw) {
  const q = " " + raw.toLowerCase().trim() + " ";

  // Greetings
  if (/^\s*(hi|hello|hey|salam|hallo|yo|hii|namaste)\b/.test(q) && raw.length < 15) {
    return {
      text:
        "Hi! 👋 I'm your Study in Germany assistant. New here? Start with the 9-step guided journey — it shows what to do, in order.",
      links: [{ label: "🚀 Start Here", href: "/start" }],
    };
  }

  // Where to start
  if (has(q, "where do i start", "how do i start", "start here", "first step", "what should i do first", "i don't know", "i dont know", "where to begin", "how to start", "step by step")) {
    return {
      text:
        "Open the 9-step guided journey — it walks you through every step from picking a university to landing your first job in Germany.",
      links: [{ label: "🚀 Start Here", href: "/start" }],
    };
  }
  if (has(q, "thank", "shukriya", "danke")) {
    return { text: "You're welcome! 😊 Anything else you'd like to know?", links: [] };
  }

  // Specific university
  const uni = findUni(q);
  if (uni && has(q, uni.shortName.toLowerCase(), uni.name.toLowerCase()) ) {
    const tuition = uni.tuitionPerSemester === 0 ? "tuition-free" : `€${uni.tuitionPerSemester}/semester (non-EU)`;
    return {
      text: `${uni.name} is in ${uni.city}, ${uni.state}. It's ${tuition}, with a semester fee of ${euro(uni.semesterFee)} (world rank #${uni.worldRanking}). Popular programmes: ${uni.popularPrograms.slice(0, 3).join(", ")}.`,
      links: [{ label: `Open ${uni.shortName}`, href: `/universities/${uni.slug}` }],
    };
  }

  // Universities in a city
  const cityHit = findCity(q);
  if (cityHit && has(q, "universit", "study", "college")) {
    const list = universities.filter((u) => u.city === cityHit.name);
    if (list.length) {
      return {
        text: `Universities in ${cityHit.name}: ${list.map((u) => u.shortName).join(", ")}.`,
        links: list.slice(0, 4).map((u) => ({ label: u.shortName, href: `/universities/${u.slug}` })),
      };
    }
  }

  // Tuition / fees
  if (has(q, "tuition", "free", "fees", " fee", "contribution", "cost of study", "study cost", "semester fee")) {
    return {
      text:
        "Public universities are tuition-free for everyone — EU and international students alike. The only exception is Baden-Württemberg, which charges non-EU students €1,500/semester. Everyone pays a small 'semester contribution' of about €100–€400, which often includes a transport ticket.",
      links: [
        { label: "Universities", href: "/universities" },
        { label: "Visa & costs", href: "/visa" },
      ],
    };
  }

  // Money / blocked account
  if (has(q, "blocked account", "sperrkonto", "how much money", "money do i need", "financial proof", "afford", "savings", "11904", "992", "expatrio", "fintiba", "coracle")) {
    return {
      text: `You need to prove you can support yourself — currently about ${euro(blockedAccount.amountPerYear)} for one year (~${euro(blockedAccount.amountPerMonth)}/month) in a blocked account (Sperrkonto). Compare providers (Expatrio, Fintiba, Coracle, Deutsche Bank, ICICI) for fees and speed.`,
      links: [
        { label: "Compare providers", href: "/blocked-account" },
        { label: "Visa & Process", href: "/visa" },
      ],
    };
  }

  // Cost calculator / budget
  if (has(q, "calculator", "budget", "how much do i need", "cost in pkr", "in rupees", "in pkr", "in inr", "convert", "monthly cost", "yearly cost", "total cost")) {
    return {
      text:
        "Use the Cost Calculator to pick a city + lifestyle and get a per-month + yearly estimate in EUR, PKR, INR, BDT or USD — including blocked account.",
      links: [
        { label: "Open Calculator", href: "/calculator" },
        { label: "Cheapest cities", href: "/cities" },
      ],
    };
  }

  // Country-specific
  if (has(q, "pakistan", "pakistani", "from pakistan", "hec", "islamabad", "karachi")) {
    return {
      text:
        "Studying from Pakistan: HEC degree attestation is required (no APS office in Pakistan). Visa is processed at the German embassy in Islamabad or consulate in Karachi.",
      links: [{ label: "🇵🇰 Pakistan guide", href: "/guides/pakistan" }],
    };
  }
  if (has(q, "india", "indian", "from india", " aps ", "vfs", "delhi", "mumbai")) {
    return {
      text:
        "Studying from India: APS certificate is mandatory since 2022 (3–4 weeks, ~€60). Visa processed via VFS Global in Delhi, Mumbai, Chennai, Bangalore or Kolkata.",
      links: [{ label: "🇮🇳 India guide", href: "/guides/india" }],
    };
  }
  if (has(q, "bangladesh", "bangladeshi", "dhaka")) {
    return {
      text:
        "Studying from Bangladesh: no APS office; documents notarised + translated. Visa at the German embassy in Dhaka.",
      links: [{ label: "🇧🇩 Bangladesh guide", href: "/guides/bangladesh" }],
    };
  }

  // Cheapest / cost of living cities
  if (has(q, "cheap", "affordable", "cost of living", "low budget", "budget city", "expensive city", "rent")) {
    const cheap = [...cities].sort((a, b) => a.monthlyBudget - b.monthlyBudget).slice(0, 5);
    return {
      text: `Most affordable student cities (approx. monthly budget): ${cheap.map((c) => `${c.name} ~${euro(c.monthlyBudget)}`).join(", ")}.`,
      links: [{ label: "Compare all cities", href: "/cities" }],
    };
  }

  // Top universities
  if (has(q, "best universit", "top universit", "ranking", "highest rank", "good universit")) {
    const top = [...universities].sort((a, b) => a.worldRanking - b.worldRanking).slice(0, 5);
    return {
      text: `Top-ranked public universities: ${top.map((u) => `${u.shortName} (#${u.worldRanking})`).join(", ")}.`,
      links: [{ label: "All universities", href: "/universities" }],
    };
  }

  // A specific city
  if (cityHit) {
    return {
      text: `${cityHit.name} (${cityHit.state}) — ${cityHit.vibe}. Monthly budget ~${euro(cityHit.monthlyBudget)}, average rent ~${euro(cityHit.avgRent)}. ${cityHit.costNote}`,
      links: [{ label: `About ${cityHit.name}`, href: `/cities/${cityHit.slug}` }],
    };
  }

  // Programs / courses / fields
  if (has(q, "program", "programme", "course", "master", "bachelor", "study ", "degree", "msc", "data science", "computer", "engineering", "business", "medicine", "economics", "ai ")) {
    const words = raw.toLowerCase().replace(/[^a-z ]/g, " ").split(/\s+/).filter((w) => w.length > 3);
    const matches = ALL_PROGRAMS.filter((p) =>
      words.some((w) => p.name.toLowerCase().includes(w) || p.field.toLowerCase().includes(w))
    ).slice(0, 4);
    if (matches.length) {
      return {
        text: `Some matching programmes: ${matches.map((m) => `${m.name} (${m.uniShort})`).join("; ")}. Use the finder to filter all ${ALL_PROGRAMS.length}+ programmes by degree and field.`,
        links: [{ label: "Programs Finder", href: "/programs" }],
      };
    }
    return {
      text: `There are ${ALL_PROGRAMS.length}+ English-taught programmes you can filter by degree (Bachelor/Master) and field.`,
      links: [{ label: "Programs Finder", href: "/programs" }],
    };
  }

  // Specific odd jobs
  if (has(q, "amazon", "flink", "dhl", "delivery", "warehouse", "kitchen", "waiter", "tutoring", "uber", "lieferando", "cleaning")) {
    return {
      text:
        "Popular student side jobs include warehouse/parcel work (Amazon, DHL, Zalando), grocery & food delivery (Flink, Lieferando, Wolt), kitchen helper, café/retail, cleaning and tutoring — typically €12–€16/hour. Most need little German.",
      links: [{ label: "All student jobs", href: "/jobs" }],
    };
  }

  // Jobs / part-time work
  if (has(q, "job", "work", "part time", "part-time", "minijob", "mini job", "werkstudent", "salary", "wage", "earn", "140 day", "hours")) {
    return {
      text: `${workRules.studentHours} ${workRules.minimumWage} After graduating, you get 18 months to find qualified work.`,
      links: [
        { label: "Jobs & careers", href: "/jobs" },
        { label: "Settle In", href: "/settle" },
      ],
    };
  }

  // Language requirements
  if (has(q, "german", "language", "ielts", "toefl", "testdaf", "dsh", "b2", "c1", "english taught", "do i need")) {
    return {
      text:
        "For English-taught programmes you usually need IELTS 6.5 / TOEFL 90 — no German required. For German-taught programmes you need TestDaF or DSH at B2/C1. Learning some German still helps a lot with daily life and jobs. Students from India, China and Vietnam also need an APS certificate.",
      links: [
        { label: "Visa & Process", href: "/visa" },
        { label: "English programmes", href: "/programs" },
      ],
    };
  }

  // Anmeldung / registration
  if (has(q, "anmeldung", "register", "registration", "address", "burgeramt", "bürgeramt", "meldebescheinigung")) {
    return {
      text:
        "After moving in you must register your address (Anmeldung) within 14 days at the local Bürgeramt. Bring your passport, visa, the registration form and the landlord confirmation (Wohnungsgeberbestätigung). You'll get a Meldebescheinigung — needed for your bank, tax ID and residence permit.",
      links: [{ label: "Settle In guide", href: "/settle" }],
    };
  }

  // Bank account
  if (has(q, "bank", "account", "girokonto", "n26", "iban")) {
    return {
      text:
        "Open a German current account (Girokonto) after your Anmeldung — bring your passport, residence permit, registration certificate and enrolment letter. N26 is quick and English-friendly; Sparkasse and Deutsche Bank are widely accepted. Most are free for students.",
      links: [{ label: "Settle In guide", href: "/settle" }],
    };
  }

  // Health insurance
  if (has(q, "insurance", "health", "krankenversicherung", " tk ", "aok", "barmer")) {
    return {
      text:
        "Health insurance is mandatory to enrol and get your residence permit. Public insurers (TK, AOK, Barmer) cost about €120/month for students under 30 — the usual choice. You'll get a health card to use at doctors and pharmacies.",
      links: [{ label: "Settle In guide", href: "/settle" }],
    };
  }

  // Tax ID
  if (has(q, "tax", "steuer", "tax id")) {
    return {
      text:
        "Your 11-digit tax ID (Steuer-Identifikationsnummer) is posted to you automatically about 2–3 weeks after your Anmeldung. You need it before starting any part-time job so your wages are taxed correctly.",
      links: [{ label: "Settle In guide", href: "/settle" }],
    };
  }

  // Accommodation / dorm
  if (has(q, "dorm", "accommodation", "housing", "room", "wg", "studentenwerk", "where to live", "live")) {
    return {
      text:
        "Student dorms (via the Studentenwerk) are the cheapest housing at ~€250–€450/month, but waitlists are long — apply as early as possible, even before your visa. Shared flats (WG) on wg-gesucht.de are a common alternative. Never pay a deposit before seeing the room.",
      links: [{ label: "Settle In guide", href: "/settle" }],
    };
  }

  // Scholarships
  if (has(q, "scholarship", "daad", "funding", "stipendium", "grant", "financial aid")) {
    return {
      text:
        "Because tuition is free, many students don't need a scholarship — but plenty of options exist: DAAD (€934/month), Deutschlandstipendium (€300/month), Erasmus+, foundation scholarships (Heinrich Böll, Konrad-Adenauer, Avicenna and more), and university-specific awards.",
      links: [
        { label: "All scholarships", href: "/scholarships" },
        { label: "Jobs", href: "/jobs" },
      ],
    };
  }

  // Industries / companies / jobs by state
  if (has(q, "industr", "compan", "employer", "bmw", "siemens", "basf", "automotive", "which state", "job market")) {
    return {
      text: `Each state has its own strengths: ${industries.slice(0, 4).map((i) => `${i.state} (${i.sectors[0]})`).join(", ")}, and more. Studying where your field is strong makes finding work much easier.`,
      links: [{ label: "Industries by state", href: "/industries" }],
    };
  }

  // Visa / application / process
  if (has(q, "visa", "apply", "application", "process", "document", "aps", "embassy", "steps", "how to study")) {
    return {
      text:
        "The journey: 1) choose a course & university, 2) meet language/academic requirements, 3) get admission, 4) open a blocked account, 5) get health insurance, 6) apply for the student visa, 7) travel & register (Anmeldung), 8) get your residence permit.",
      links: [{ label: "Full visa guide", href: "/visa" }],
    };
  }

  // Intakes / deadlines
  if (has(q, "intake", "deadline", "winter semester", "summer semester", "when to apply", "when can i apply")) {
    return {
      text:
        "Most programmes have two intakes: winter (starts ~October, apply by ~mid-July) and summer (starts ~April, apply by ~mid-January). Deadlines vary by university, so always check the official page.",
      links: [
        { label: "Programs Finder", href: "/programs" },
        { label: "Visa & Process", href: "/visa" },
      ],
    };
  }

  // Fallback
  return {
    text:
      "I'm not sure about that one yet 🤔 — but I can help with tuition fees, universities, programmes, cities, part-time jobs, the visa process, or settling in (Anmeldung, bank, insurance). Try one of these:",
    links: [
      { label: "Universities", href: "/universities" },
      { label: "Cities", href: "/cities" },
      { label: "Jobs", href: "/jobs" },
      { label: "Visa", href: "/visa" },
    ],
  };
}
