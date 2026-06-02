"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { universities } from "@/data/universities";
import { euro } from "@/lib/format";

const states = ["All states", ...Array.from(new Set(universities.map((u) => u.state))).sort()];

export default function UniversityExplorer() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState("All states");
  const [freeOnly, setFreeOnly] = useState(false);
  const [sort, setSort] = useState("ranking");

  const results = useMemo(() => {
    let list = universities.filter((u) => {
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        u.name.toLowerCase().includes(q) ||
        u.city.toLowerCase().includes(q) ||
        u.fields.some((f) => f.toLowerCase().includes(q));
      const matchesState = state === "All states" || u.state === state;
      const matchesFree = !freeOnly || u.tuitionPerSemester === 0;
      return matchesQuery && matchesState && matchesFree;
    });

    list = [...list].sort((a, b) => {
      if (sort === "ranking") return a.worldRanking - b.worldRanking;
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "fee-low") return a.semesterFee - b.semesterFee;
      if (sort === "students") return b.students - a.students;
      return 0;
    });
    return list;
  }, [query, state, freeOnly, sort]);

  return (
    <div>
      {/* Controls */}
      <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid gap-3 md:grid-cols-[1fr_auto_auto]">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, city or field…"
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          />
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-400"
          >
            {states.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-400"
          >
            <option value="ranking">Sort: Ranking</option>
            <option value="name">Sort: Name (A–Z)</option>
            <option value="fee-low">Sort: Semester fee (low → high)</option>
            <option value="students">Sort: Most students</option>
          </select>
        </div>
        <label className="mt-3 inline-flex cursor-pointer items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={freeOnly}
            onChange={(e) => setFreeOnly(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 accent-brand-500"
          />
          Show tuition-free only
        </label>
      </div>

      <p className="mb-4 text-sm text-slate-500">
        <strong className="text-ink-900">{results.length}</strong> of{" "}
        {universities.length} universities
      </p>

      {results.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
          No universities match your filters.
        </div>
      ) : (
        <ol className="divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {results.map((u, i) => (
            <li key={u.slug}>
              <Link
                href={`/universities/${u.slug}`}
                className="grid grid-cols-[2.5rem_1fr] gap-x-3 px-4 py-3 text-sm transition-colors hover:bg-slate-50 sm:grid-cols-[2.5rem_1fr_auto]"
              >
                <span className="text-right text-slate-400">{i + 1}.</span>
                <div className="min-w-0">
                  <p className="font-semibold text-ink-900">{u.name}</p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    📍 {u.city}, {u.state} · {u.fields.slice(0, 3).join(" · ")}
                  </p>
                </div>
                <div className="col-start-2 mt-1 flex flex-wrap gap-x-3 text-xs text-slate-600 sm:col-start-3 sm:mt-0 sm:text-right">
                  <span>
                    Tuition:{" "}
                    <strong
                      className={
                        u.tuitionPerSemester === 0 ? "text-emerald-600" : "text-ink-900"
                      }
                    >
                      {u.tuitionPerSemester === 0
                        ? "Free"
                        : euro(u.tuitionPerSemester) + "/sem"}
                    </strong>
                  </span>
                  <span>
                    Semester fee: <strong className="text-ink-900">{euro(u.semesterFee)}</strong>
                  </span>
                  <span>
                    Rank: <strong className="text-ink-900">#{u.worldRanking}</strong>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
