"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Top countries by number of students sent to Germany (2026 data).
// Countries with a "guide" property have a dedicated /guides/[slug] page.
// Only show countries with complete dedicated guides.
// More will be added as we build their content.
const TOP_COUNTRIES = [
  { code: "in", name: "India", flag: "🇮🇳", students: "50,000+", guide: "india" },
  { code: "tr", name: "Turkey", flag: "🇹🇷", students: "16,000+", guide: "turkey" },
  { code: "ir", name: "Iran", flag: "🇮🇷", students: "15,000+", guide: "iran" },
  { code: "pk", name: "Pakistan", flag: "🇵🇰", students: "7,000+", guide: "pakistan" },
  { code: "eg", name: "Egypt", flag: "🇪🇬", students: "7,000+", guide: "egypt" },
  { code: "vn", name: "Vietnam", flag: "🇻🇳", students: "5,500+", guide: "vietnam" },
  { code: "bd", name: "Bangladesh", flag: "🇧🇩", students: "5,000+", guide: "bangladesh" },
  { code: "sy", name: "Syria", flag: "🇸🇾", students: "5,000+", guide: "syria" },
  { code: "ae", name: "UAE (Dubai)", flag: "🇦🇪", students: "3,500+", guide: "uae" },
  { code: "sa", name: "Saudi Arabia", flag: "🇸🇦", students: "2,500+", guide: "saudi-arabia" },
  { code: "np", name: "Nepal", flag: "🇳🇵", students: "2,500+", guide: "nepal" },
  { code: "lk", name: "Sri Lanka", flag: "🇱🇰", students: "2,500+", guide: "sri-lanka" },
];

export default function CountryPicker() {
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState(null);

  // Show only on first visit — gentle delay so hero loads first.
  useEffect(() => {
    const stored = localStorage.getItem("student_country");
    if (!stored) {
      // 4 seconds — enough for hero to render, not so long users miss the ask.
      const t = setTimeout(() => setOpen(true), 4000);
      return () => clearTimeout(t);
    }
  }, []);

  function choose(country) {
    localStorage.setItem("student_country", JSON.stringify(country));
    setPicked(country);
    // Close modal + navigate user DIRECTLY to their country guide so they
    // actually SEE the personalized content (the small top banner is easy
    // to miss after scrolling).
    setTimeout(() => {
      setOpen(false);
      if (country.guide) {
        window.location.href = `/guides/${country.guide}`;
      } else {
        window.location.reload();
      }
    }, 350);
  }

  function skip() {
    localStorage.setItem("student_country", JSON.stringify({ code: "skip" }));
    setOpen(false);
  }

  // Allow ESC key to dismiss
  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") skip();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Close button (top-right, always visible above scroll) */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-xl font-bold text-white backdrop-blur transition hover:bg-black/70"
        >
          ✕
        </button>

        {/* Scrollable inner container — allows full content access on mobile */}
        <div className="max-h-[90vh] overflow-y-auto">

        {/* Hero */}
        <div className="bg-gradient-to-br from-ink-900 via-ink-800 to-brand-700 px-6 py-8 text-center text-white">
          <div className="mb-3 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide ring-1 ring-white/30">
            🌍 Welcome
          </div>
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Which country are you applying from?
          </h2>
          <p className="mt-2 text-sm text-white/85 sm:text-base">
            We'll personalize your guide — embassy info, APS process, document
            requirements and currency conversion.
          </p>
        </div>

        {/* Country grid — 8 countries with complete guides, 2 rows of 4 on desktop */}
        <div className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-4 sm:p-6">
          {TOP_COUNTRIES.map((c) => (
            <button
              key={c.code}
              onClick={() => choose(c)}
              className={`group flex flex-col items-center rounded-xl border-2 p-4 transition-all hover:-translate-y-1 hover:shadow-md ${
                picked?.code === c.code
                  ? "border-brand-500 bg-brand-50"
                  : "border-slate-200 bg-white hover:border-brand-300"
              }`}
            >
              <span className="text-4xl sm:text-5xl">{c.flag}</span>
              <p className="mt-2 text-sm font-bold text-ink-900 sm:text-base">
                {c.name}
              </p>
              <p className="text-xs text-slate-500">{c.students} students/yr</p>
              {c.guide && (
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-brand-600">
                  ✓ Detailed guide
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Other / skip */}
        <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 text-center">
          <button
            onClick={skip}
            className="text-sm text-slate-600 hover:text-brand-700 hover:underline"
          >
            Other country / Skip →
          </button>
        </div>

        </div>{/* end scrollable container */}
      </div>
    </div>
  );
}

// Helper for other components: read the chosen country
export function getStudentCountry() {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem("student_country");
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}
