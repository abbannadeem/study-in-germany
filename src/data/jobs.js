// Information about working in Germany as an international student and after
// graduation. Rules, wage figures and visa durations change — always confirm
// the latest details with your university's international office and the
// official German government / "Make it in Germany" portal.

export const workRules = {
  studentHours:
    "International (non-EU) students may work up to 140 full days or 280 half days per year without extra permission. EU/EEA students can work freely.",
  minimumWage:
    "Germany's statutory minimum wage is about €13.90 per hour (2026), so part-time work meaningfully helps with living costs.",
  workingStudent:
    "As a 'Werkstudent' (working student) you can work up to 20 hours per week during the semester and full-time during semester breaks.",
  miniJob:
    "A 'Mini-job' lets you earn up to ~€600 per month (2026) largely tax-free — common in cafés, retail and logistics.",
  postStudy:
    "After graduating, non-EU graduates can apply for an 18-month residence permit to find a job related to their degree.",
};

export const jobTypes = [
  {
    title: "On-campus & academic jobs",
    icon: "🎓",
    pay: "€12–€18 / hour",
    description:
      "Working as a student/research assistant (HiWi) at your university. Flexible hours, relevant experience, and these often don't count against your work-day limit.",
  },
  {
    title: "Working student (Werkstudent)",
    icon: "💼",
    pay: "€14–€22 / hour",
    description:
      "Part-time roles at real companies (up to 20 hrs/week in term) directly related to your field. The best way to gain German work experience and build a network.",
  },
  {
    title: "Mini-jobs & part-time",
    icon: "🛍️",
    pay: "€12–€15 / hour",
    description:
      "Cafés, restaurants, retail, delivery, warehouses and events. Easy to find, flexible, and great for covering daily expenses — German not always required.",
  },
  {
    title: "Internships (Praktikum)",
    icon: "🧪",
    pay: "€800–€1,800 / month",
    description:
      "Mandatory or voluntary internships, often a part of your degree. A strong path into a full-time job offer after graduation.",
  },
  {
    title: "Freelance / IT & tutoring",
    icon: "💻",
    pay: "€15–€40 / hour",
    description:
      "Programming, design, content and tutoring. Higher pay for skilled work; freelancing has separate tax/visa rules, so check before you start.",
  },
];

export const careerPaths = [
  {
    title: "18-month job-seeking visa",
    description:
      "After finishing your degree you can stay 18 months to look for qualified work. You may take any job during this period to support yourself while you search.",
  },
  {
    title: "EU Blue Card",
    description:
      "Once you have a qualified job offer above the salary threshold (lower for shortage occupations like IT and engineering), the EU Blue Card offers a fast track to permanent residence.",
  },
  {
    title: "Permanent residence",
    description:
      "Blue Card holders can apply for permanent residence in as little as 21–27 months (with German language skills), and graduates of German universities are on a favourable path.",
  },
  {
    title: "High-demand fields",
    description:
      "Germany faces skilled-worker shortages in IT, engineering, healthcare, data science and the skilled trades — graduates in these fields have excellent job prospects.",
  },
];

// The most common, easy-to-get student side jobs ("odd jobs") in Germany, with
// the kind of employers students actually work for and how much German you need.
export const popularJobs = [
  {
    title: "Warehouse & parcel sorting",
    icon: "📦",
    pay: "€13–€16 / hr",
    companies: "Amazon, Zalando, DHL, Hermes",
    german: "Little German",
    description:
      "Picking, packing and sorting parcels in fulfilment centres. Plenty of shifts, easy to start and one of the most popular jobs among international students.",
  },
  {
    title: "Quick-commerce & grocery picking",
    icon: "🛒",
    pay: "€12–€14 / hr + tips",
    companies: "Flink, Getir, Picnic, Rewe",
    german: "Little German",
    description:
      "Picking grocery orders in a 'dark store' or delivering them by e-bike within minutes. Flexible shifts that fit around classes.",
  },
  {
    title: "Food delivery rider",
    icon: "🚲",
    pay: "€12–€14 / hr + tips",
    companies: "Lieferando, Wolt, Uber Eats",
    german: "Little German",
    description:
      "Deliver restaurant food by bike or scooter. Work when you want — great if you like being active and setting your own hours.",
  },
  {
    title: "Kitchen helper & dishwashing",
    icon: "🍳",
    pay: "€12–€15 / hr",
    companies: "Restaurants, hotels, canteens",
    german: "Little German",
    description:
      "Food prep, plating and washing up (Küchenhilfe) in busy kitchens. One of the easiest jobs to land with limited German.",
  },
  {
    title: "Waiter, café & bar staff",
    icon: "☕",
    pay: "€12–€15 / hr + tips",
    companies: "Cafés, restaurants, bars",
    german: "Some German",
    description:
      "Serving customers and barista work. Tips can be good, but you'll need conversational German to deal with guests.",
  },
  {
    title: "Supermarket & retail",
    icon: "🏪",
    pay: "€13–€14 / hr",
    companies: "Aldi, Lidl, Rewe, dm, Edeka",
    german: "Some German",
    description:
      "Stocking shelves, working the till and inventory. Steady, reliable shifts close to where you live.",
  },
  {
    title: "Cleaning",
    icon: "🧹",
    pay: "€13–€15 / hr",
    companies: "Offices, hotels, buildings",
    german: "Little German",
    description:
      "Early-morning or evening cleaning (Reinigungskraft). Flexible hours that are easy to combine with a study timetable.",
  },
  {
    title: "Parcel & courier driving",
    icon: "🚚",
    pay: "€13–€16 / hr",
    companies: "DHL, Hermes, UPS, GLS",
    german: "Some German",
    description:
      "Delivering parcels along a route. Usually needs a driving licence, but pays well and is in constant demand.",
  },
  {
    title: "Event & promotion staff",
    icon: "🎪",
    pay: "€13–€18 / hr",
    companies: "Trade fairs, festivals, catering",
    german: "Some German / English",
    description:
      "Working as host/hostess, stand staff or catering crew at fairs and events. Well-paid, occasional work — common in cities like Frankfurt, Cologne and Munich.",
  },
  {
    title: "Production helper",
    icon: "🏭",
    pay: "€13–€16 / hr",
    companies: "Factories & assembly lines",
    german: "Little German",
    description:
      "Assembly and packaging on production lines (Produktionshelfer). Widely available in industrial regions, with shift bonuses.",
  },
  {
    title: "Tutoring (Nachhilfe)",
    icon: "📚",
    pay: "€15–€25 / hr",
    companies: "Schools, students, online",
    german: "Depends on subject",
    description:
      "Teach school subjects, English or your native language. The best pay-per-hour on this list — and you can do it in English.",
  },
];

// How big cities and smaller cities/towns compare for finding part-time work.
export const cityJobComparison = {
  big: {
    title: "Big cities",
    examples: "Munich, Berlin, Frankfurt, Hamburg, Cologne",
    icon: "🌆",
    pros: [
      "Far more jobs — cafés, retail, logistics, events, startups",
      "Many working-student (Werkstudent) roles at large companies",
      "English-speaking jobs are realistic, even with limited German",
      "Higher hourly wages and more internship opportunities",
    ],
    cons: [
      "High rent and living costs eat into what you earn",
      "More competition from other students",
      "Long commutes can cut into study time",
    ],
  },
  small: {
    title: "Small cities & towns",
    examples: "Aachen, Ilmenau, Cottbus, Göttingen, Freiburg",
    icon: "🏘️",
    pros: [
      "Low rent and living costs — part-time income goes much further",
      "Less competition for the jobs that exist",
      "On-campus / research-assistant (HiWi) jobs are easier to land",
      "Shorter commutes, calmer student life",
    ],
    cons: [
      "Fewer jobs overall, especially outside the university",
      "More German is usually needed for local work",
      "Lower wages and fewer large employers nearby",
    ],
  },
  verdict:
    "Big cities offer more and better-paid jobs but cost more to live in; small cities have fewer jobs but your earnings stretch further. For many students the deciding factor is German language level — the better your German, the more a smaller city works in your favour.",
};

export const jobPortals = [
  { name: "Make it in Germany (official)", url: "https://www.make-it-in-germany.com/en/" },
  { name: "StepStone", url: "https://www.stepstone.de/" },
  { name: "Indeed Germany", url: "https://de.indeed.com/" },
  { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
  { name: "Federal Employment Agency", url: "https://www.arbeitsagentur.de/" },
  { name: "Glassdoor Germany", url: "https://www.glassdoor.de/" },
];
