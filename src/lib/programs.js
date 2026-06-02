// Builds a searchable list of study programmes by flattening every
// university's `popularPrograms`. Degree and broad field are inferred from the
// programme name, so the finder always stays in sync with the universities data.

import { universities } from "@/data/universities";

// Ordered rules — first match wins, so put more specific fields first.
const FIELD_RULES = [
  { field: "Data & AI", re: /\b(data|machine learning|artificial intelligence|\bAI\b|analytics|statistic)/i },
  { field: "Computer Science & IT", re: /(informatic|computer|software|\bIT\b|information system|computing|distributed system|cyber|\bsecurity\b|cognitive system)/i },
  { field: "Engineering", re: /(engineering|mechanic|electric|automotive|aerospace|mechatronic|material|civil|production|optic|photonic|nano|electromobility|\bpower\b|communication|robotic|satellite|quantum eng)/i },
  { field: "Business & Economics", re: /(management|econom|business|finance|money|entrepreneur|marketing|\bMBA\b)/i },
  { field: "Environment & Energy", re: /(environment|renewable|energy|climate|sustainab|ecosystem|forest|marine|water|resource|geoscience|geospatial|hydro)/i },
  { field: "Medicine & Life Sciences", re: /(medicine|biomed|neuro|molecular|pharma|health|microbiolog|biolog|life science|biosci|behavioural)/i },
  { field: "Natural Sciences", re: /(physic|chemistr|mathematic|quantum|geo|earth|atmospher)/i },
  { field: "Social Sciences & Humanities", re: /(studies|relations|politic|philosoph|social|media|culture|linguistic|histor|\bwar\b|peace|global|policy|\blaw\b|american|british|transcultural|psycholog)/i },
];

function categorize(name) {
  for (const r of FIELD_RULES) if (r.re.test(name)) return r.field;
  return "Other";
}

function degreeOf(name) {
  const t = name.split(" ")[0];
  if (/^(BSc|BA|BEng|Bachelor)/i.test(t)) return "Bachelor";
  if (/^(PhD|Doctor)/i.test(t)) return "Doctorate";
  return "Master";
}

export function getAllPrograms() {
  const out = [];
  for (const u of universities) {
    for (const p of u.popularPrograms) {
      out.push({
        name: p,
        degree: degreeOf(p),
        field: categorize(p),
        uniName: u.name,
        uniShort: u.shortName,
        uniSlug: u.slug,
        city: u.city,
        state: u.state,
        language: "English",
        tuitionFree: u.tuitionPerSemester === 0,
      });
    }
  }
  return out;
}

export const ALL_PROGRAMS = getAllPrograms();
export const ALL_FIELDS = [...new Set(ALL_PROGRAMS.map((p) => p.field))].sort();
