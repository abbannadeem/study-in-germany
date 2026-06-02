"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ALL_PROGRAMS, ALL_FIELDS } from "@/lib/programs";

const degreeColors = {
  Bachelor: "bg-sky-50 text-sky-700",
  Master: "bg-brand-50 text-brand-700",
  Doctorate: "bg-purple-50 text-purple-700",
};

export default function ProgramExplorer() {
  const [query, setQuery] = useState("");
  const [degree, setDegree] = useState("All degrees");
  const [field, setField] = useState("All fields");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_PROGRAMS.filter((p) => {
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.uniName.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q) ||
        p.field.toLowerCase().includes(q);
      const matchesDegree = degree === "All degrees" || p.degree === degree;
      const matchesField = field === "All fields" || p.field === field;
      return matchesQuery && matchesDegree && matchesField;
    });
  }, [query, degree, field]);

  return (
    <div>
      {/* Controls */}
      <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid gap-3 md:grid-cols-[1fr_auto_auto]">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programmes, universities or cities (e.g. Data Science, Munich)…"
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          />
          <select
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-400"
          >
            <option>All degrees</option>
            <option>Bachelor</option>
            <option>Master</option>
            <option>Doctorate</option>
          </select>
          <select
            value={field}
            onChange={(e) => setField(e.target.value)}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-400"
          >
            <option>All fields</option>
            {ALL_FIELDS.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </div>
      </div>

      <p className="mb-4 text-sm text-slate-500">
        Showing <strong className="text-ink-900">{results.length}</strong> of{" "}
        {ALL_PROGRAMS.length} programmes · all English-taught
      </p>

      {results.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
          No programmes match your filters. Try a different search or field.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((p, i) => (
            <Link
              key={`${p.uniSlug}-${i}`}
              href={`/universities/${p.uniSlug}`}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-2 flex items-center gap-2">
                <span
                  className={`rounded-md px-2 py-0.5 text-xs font-semibold ${
                    degreeColors[p.degree] || "bg-slate-100 text-slate-600"
                  }`}
                >
                  {p.degree}
                </span>
                {p.tuitionFree && (
                  <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                    Tuition-free
                  </span>
                )}
              </div>

              <h3 className="font-semibold leading-tight text-ink-900 group-hover:text-brand-700">
                {p.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {p.uniName}
              </p>

              <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
                <span>📍 {p.city}</span>
                <span className="rounded bg-slate-100 px-2 py-0.5 text-slate-600">{p.field}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
