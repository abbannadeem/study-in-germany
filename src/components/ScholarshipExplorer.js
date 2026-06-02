"use client";

import { useMemo, useState } from "react";
import { scholarships } from "@/data/scholarships";

const typeColors = {
  Government: "bg-blue-50 text-blue-700",
  Foundation: "bg-purple-50 text-purple-700",
  EU: "bg-amber-50 text-amber-700",
  University: "bg-emerald-50 text-emerald-700",
  Private: "bg-rose-50 text-rose-700",
};

const ALL_TYPES = ["All types", ...Array.from(new Set(scholarships.map((s) => s.type)))];
const ALL_LEVELS = ["All levels", "Bachelor", "Master", "PhD"];

export default function ScholarshipExplorer() {
  const [type, setType] = useState("All types");
  const [level, setLevel] = useState("All levels");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return scholarships.filter((s) => {
      const matchesType = type === "All types" || s.type === type;
      const matchesLevel = level === "All levels" || s.levels.includes(level);
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.provider.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q);
      return matchesType && matchesLevel && matchesQuery;
    });
  }, [type, level, query]);

  return (
    <div>
      {/* Controls */}
      <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid gap-3 md:grid-cols-[1fr_auto_auto]">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search scholarships…"
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-400"
          >
            {ALL_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-400"
          >
            {ALL_LEVELS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>
      </div>

      <p className="mb-4 text-sm text-slate-500">
        <strong className="text-ink-900">{results.length}</strong> of {scholarships.length}{" "}
        scholarships
      </p>

      {results.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
          No scholarships match your filters.
        </div>
      ) : (
        <div className="space-y-4">
          {results.map((s) => (
            <div
              key={s.slug}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-ink-900">{s.name}</h3>
                  <p className="text-sm text-slate-500">{s.provider}</p>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <span
                    className={`rounded-md px-2 py-0.5 text-xs font-semibold ${
                      typeColors[s.type] || "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {s.type}
                  </span>
                  {s.levels.map((l) => (
                    <span
                      key={l}
                      className="rounded-md bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-700"
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-2 text-sm text-slate-600">{s.description}</p>

              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Amount
                  </p>
                  <p className="text-ink-900">{s.amount}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Duration
                  </p>
                  <p className="text-ink-900">{s.duration}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Deadline
                  </p>
                  <p className="text-ink-900">{s.deadline}</p>
                </div>
              </div>

              <details className="mt-3 group">
                <summary className="cursor-pointer text-sm font-medium text-brand-600 hover:underline">
                  Eligibility & what it covers →
                </summary>
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Eligibility
                    </p>
                    <ul className="space-y-1">
                      {s.eligibility.map((e) => (
                        <li key={e} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="text-brand-500">›</span>
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      What it covers
                    </p>
                    <ul className="space-y-1">
                      {s.covers.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="text-emerald-500">✓</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </details>

              <a
                href={s.website}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-ink-900 transition hover:bg-brand-400"
              >
                Official site & apply ↗
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
