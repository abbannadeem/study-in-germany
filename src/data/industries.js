// Major industries of each German state (Bundesland).
// `wiki` is the English Wikipedia article whose lead image represents the
// industry/region — used to fetch a photo into /public/industries/<slug>.jpg
// (see scripts/fetch-images.mjs).

export const industries = [
  {
    slug: "baden-wurttemberg",
    state: "Baden-Württemberg",
    wiki: "Mercedes-Benz Museum",
    headline: "Automotive & high-tech engineering",
    sectors: ["Automotive", "Mechanical engineering", "IT & software", "Electronics"],
    companies: ["Mercedes-Benz", "Porsche", "Bosch", "SAP", "ZF", "Trumpf"],
    description:
      "One of Europe's most innovative and prosperous regions — the home of Germany's automotive and precision-engineering elite, plus software giant SAP.",
  },
  {
    slug: "bavaria",
    state: "Bavaria",
    wiki: "BMW Welt",
    headline: "Automotive, electronics & aerospace",
    sectors: ["Automotive", "Electronics", "Aerospace", "Sportswear"],
    companies: ["BMW", "Audi", "Siemens", "Airbus", "Adidas", "MAN"],
    description:
      "A diverse high-tech economy spanning cars, electronics, aerospace and global brands — Bavaria has the lowest unemployment and some of the best jobs in Germany.",
  },
  {
    slug: "berlin",
    state: "Berlin",
    wiki: "Potsdamer Platz",
    headline: "Startups, tech & creative media",
    sectors: ["Startups", "Fintech", "Software", "Media & creative"],
    companies: ["Zalando", "Delivery Hero", "N26", "SAP Labs", "Siemens"],
    description:
      "Germany's startup capital, with a booming digital, fintech and creative scene that attracts international talent and venture capital.",
  },
  {
    slug: "brandenburg",
    state: "Brandenburg",
    wiki: "Gigafactory Berlin-Brandenburg",
    headline: "Electric vehicles, logistics & energy",
    sectors: ["Electric vehicles", "Logistics", "Aerospace", "Energy"],
    companies: ["Tesla", "Rolls-Royce (aero engines)", "BASF Schwarzheide", "PCK Refinery"],
    description:
      "A fast-growing manufacturing hub anchored by Tesla's European Gigafactory near Berlin, alongside logistics and energy industries.",
  },
  {
    slug: "bremen",
    state: "Bremen",
    wiki: "Airbus",
    headline: "Aerospace, maritime & automotive",
    sectors: ["Aerospace", "Maritime & shipbuilding", "Space", "Automotive"],
    companies: ["Airbus", "OHB (space)", "ArcelorMittal", "Mercedes-Benz (plant)"],
    description:
      "A compact but powerful aerospace and maritime cluster, home to major Airbus and space-technology sites plus a large Mercedes car plant.",
  },
  {
    slug: "hamburg",
    state: "Hamburg",
    wiki: "Port of Hamburg",
    headline: "Port logistics, aerospace & media",
    sectors: ["Port & logistics", "Aerospace", "Media", "Consumer goods"],
    companies: ["Airbus", "Port of Hamburg", "Beiersdorf (Nivea)", "Olympus"],
    description:
      "Germany's gateway to the world — Europe's third-largest port and Airbus's second-largest site, plus strong media and consumer-goods industries.",
  },
  {
    slug: "hesse",
    state: "Hesse",
    wiki: "European Central Bank",
    headline: "Finance, chemicals & pharma",
    sectors: ["Finance & banking", "Chemicals", "Pharmaceuticals", "Logistics"],
    companies: ["Deutsche Bank", "ECB", "Merck Group", "Sanofi", "Fresenius"],
    description:
      "Germany's financial capital around Frankfurt — home to the European Central Bank — combined with a strong chemicals and pharma base.",
  },
  {
    slug: "lower-saxony",
    state: "Lower Saxony",
    wiki: "Autostadt",
    headline: "Automotive & agriculture",
    sectors: ["Automotive", "Agriculture & food", "Steel", "Tourism"],
    companies: ["Volkswagen", "Continental", "Salzgitter (steel)", "TUI"],
    description:
      "Home to Volkswagen's global headquarters in Wolfsburg — Europe's largest carmaker — plus a major agri-food and steel industry.",
  },
  {
    slug: "mecklenburg-vorpommern",
    state: "Mecklenburg-Vorpommern",
    wiki: "Warnemünde",
    headline: "Maritime, tourism & renewable energy",
    sectors: ["Maritime & shipbuilding", "Tourism", "Offshore wind", "Food"],
    companies: ["Neptun Werft", "Liebherr", "AIDA Cruises", "wind-energy firms"],
    description:
      "A Baltic coastal economy built on shipbuilding, tourism and a rapidly growing offshore-wind sector.",
  },
  {
    slug: "north-rhine-westphalia",
    state: "North Rhine-Westphalia",
    wiki: "Zollverein Coal Mine Industrial Complex",
    headline: "Energy, chemicals, steel & media",
    sectors: ["Energy", "Chemicals", "Steel", "Media & telecom"],
    companies: ["Bayer", "Henkel", "ThyssenKrupp", "E.ON", "Deutsche Telekom", "RWE"],
    description:
      "Germany's industrial heartland and most populous state — the former coal-and-steel Ruhr region, now a hub for energy, chemicals and media.",
  },
  {
    slug: "rhineland-palatinate",
    state: "Rhineland-Palatinate",
    wiki: "BASF",
    headline: "Chemicals, pharma & wine",
    sectors: ["Chemicals", "Biotech & pharma", "Wine", "Automotive parts"],
    companies: ["BASF", "BioNTech", "Boehringer Ingelheim", "Schott"],
    description:
      "Home to BASF in Ludwigshafen — the world's largest chemical complex — and to BioNTech, the biotech firm behind a leading COVID-19 vaccine.",
  },
  {
    slug: "saarland",
    state: "Saarland",
    wiki: "Völklingen Ironworks",
    headline: "Steel, automotive & new tech",
    sectors: ["Steel", "Automotive", "IT & AI research", "Mechanical engineering"],
    companies: ["Ford", "ZF", "Saarstahl", "Bosch"],
    description:
      "A traditional steel and automotive region, now reinventing itself around IT and artificial-intelligence research.",
  },
  {
    slug: "saxony",
    state: "Saxony",
    wiki: "Transparent Factory",
    headline: "Semiconductors & automotive ('Silicon Saxony')",
    sectors: ["Semiconductors", "Microelectronics", "Automotive", "Mechanical engineering"],
    companies: ["Infineon", "GlobalFoundries", "Bosch (chip fab)", "Volkswagen", "Porsche (Leipzig)"],
    description:
      "'Silicon Saxony' is Europe's largest microelectronics cluster, centred on Dresden, alongside major Volkswagen and Porsche car plants.",
  },
  {
    slug: "saxony-anhalt",
    state: "Saxony-Anhalt",
    wiki: "Leuna",
    headline: "Chemicals & emerging semiconductors",
    sectors: ["Chemicals", "Semiconductors", "Renewable energy", "Food"],
    companies: ["Dow", "TotalEnergies (Leuna)", "Intel (planned Magdeburg fab)"],
    description:
      "A long-standing chemicals stronghold that is becoming a new semiconductor location, with Intel planning a major chip megafab near Magdeburg.",
  },
  {
    slug: "schleswig-holstein",
    state: "Schleswig-Holstein",
    wiki: "Offshore wind power",
    headline: "Renewable energy, maritime & food",
    sectors: ["Wind energy", "Maritime", "Food industry", "Tourism"],
    companies: ["wind-energy firms", "shipyards", "food producers", "Vodafone (tech)"],
    description:
      "A renewable-energy leader — especially onshore and offshore wind — with strong maritime and food industries between two seas.",
  },
  {
    slug: "thuringia",
    state: "Thuringia",
    wiki: "Jena",
    headline: "Optics, precision & microelectronics",
    sectors: ["Optics & photonics", "Precision instruments", "Microelectronics", "Automotive parts"],
    companies: ["Carl Zeiss", "Jenoptik", "Schott", "X-FAB"],
    description:
      "Germany's optics and precision-instruments hub, centred on Jena — the historic home of Carl Zeiss and a centre for photonics research.",
  },
];

export function getIndustry(slug) {
  return industries.find((i) => i.slug === slug);
}
