"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { universities } from "@/data/universities";
import { euro } from "@/lib/format";

const MAX_SLOTS = 3;

export default function CompareUniversities() {
  const sortedUnis = useMemo(
    () => [...universities].sort((a, b) => a.name.localeCompare(b.name)),
    []
  );
  // Selected uni slugs (up to 3)
  const [selected, setSelected] = useState([]);

  const selectedUnis = selected
    .map((slug) => universities.find((u) => u.slug === slug))
    .filter(Boolean);

  function addUni(slug) {
    if (!slug || selected.includes(slug) || selected.length >= MAX_SLOTS) return;
    setSelected([...selected, slug]);
  }
  function removeUni(slug) {
    setSelected(selected.filter((s) => s !== slug));
  }

  // Available unis (those not already selected)
  const available = sortedUnis.filter((u) => !selected.includes(u.slug));

  return (
    <div>
      {/* Add bar */}
      <div className="mb-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="mb-3 text-sm font-semibold text-ink-900">
          Pick up to 3 universities to compare
        </p>
        <div className="flex flex-wrap gap-2">
          <select
            value=""
            onChange={(e) => addUni(e.target.value)}
            disabled={selected.length >= MAX_SLOTS}
            className="flex-1 min-w-[200px] rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          >
            <option value="">
              {selected.length >= MAX_SLOTS
                ? "Remove one to add another"
                : "+ Add a university…"}
            </option>
            {available.map((u) => (
              <option key={u.slug} value={u.slug}>
                {u.name} — {u.city}
              </option>
            ))}
          </select>
          <span className="rounded-lg bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-700">
            {selected.length} / {MAX_SLOTS} selected
          </span>
        </div>

        {selected.length === 0 && (
          <p className="mt-3 text-xs text-slate-500">
            💡 Try: TUM, LMU Munich, Heidelberg University to see a typical comparison.
          </p>
        )}
      </div>

      {/* Comparison table */}
      {selectedUnis.length > 0 && (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Detail
                  </th>
                  {selectedUnis.map((u) => (
                    <th key={u.slug} className="min-w-[200px] px-4 py-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-bold text-ink-900">{u.shortName}</p>
                          <p className="text-xs font-normal text-slate-500">{u.name}</p>
                        </div>
                        <button
                          onClick={() => removeUni(u.slug)}
                          className="rounded-md p-1 text-slate-400 hover:bg-rose-50 hover:text-rose-600"
                          title="Remove"
                          aria-label="Remove"
                        >
                          ✕
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <Row label="📍 Location" unis={selectedUnis}>
                  {(u) => `${u.city}, ${u.state}`}
                </Row>
                <Row label="🏆 World ranking" unis={selectedUnis}>
                  {(u) => `#${u.worldRanking}`}
                </Row>
                <Row label="🎓 Founded" unis={selectedUnis}>
                  {(u) => u.founded}
                </Row>
                <Row label="👥 Students" unis={selectedUnis}>
                  {(u) => u.students.toLocaleString()}
                </Row>
                <Row label="💰 Tuition (per sem)" unis={selectedUnis}>
                  {(u) => (
                    <span
                      className={
                        u.tuitionPerSemester === 0
                          ? "font-bold text-emerald-600"
                          : "font-bold text-amber-600"
                      }
                    >
                      {u.tuitionPerSemester === 0 ? "Free" : euro(u.tuitionPerSemester)}
                    </span>
                  )}
                </Row>
                <Row label="📚 Semester fee" unis={selectedUnis}>
                  {(u) => euro(u.semesterFee)}
                </Row>
                <Row label="🗣️ English programs" unis={selectedUnis}>
                  {(u) => (u.englishPrograms ? "✅ Yes" : "❌ Limited")}
                </Row>
                <Row label="🎯 Key fields" unis={selectedUnis}>
                  {(u) => (
                    <div className="flex flex-wrap gap-1">
                      {u.fields.slice(0, 3).map((f) => (
                        <span
                          key={f}
                          className="rounded-md bg-slate-100 px-2 py-0.5 text-xs"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  )}
                </Row>
                <Row label="📖 Popular programs" unis={selectedUnis}>
                  {(u) => (
                    <ul className="space-y-1 text-xs text-slate-600">
                      {u.popularPrograms.slice(0, 3).map((p) => (
                        <li key={p}>• {p}</li>
                      ))}
                    </ul>
                  )}
                </Row>
                <tr>
                  <td className="px-4 py-3"></td>
                  {selectedUnis.map((u) => (
                    <td key={u.slug} className="px-4 py-3">
                      <Link
                        href={`/universities/${u.slug}`}
                        className="inline-block rounded-lg bg-brand-500 px-3 py-1.5 text-xs font-bold text-ink-900 hover:bg-brand-400"
                      >
                        Full details →
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {selected.length === 0 && (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
          <p className="text-4xl">⚖️</p>
          <p className="mt-3 font-medium">Add a university above to start comparing</p>
          <p className="mt-1 text-sm">Up to 3 universities side-by-side.</p>
        </div>
      )}
    </div>
  );
}

function Row({ label, unis, children }) {
  return (
    <tr className="hover:bg-slate-50">
      <td className="bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700">
        {label}
      </td>
      {unis.map((u) => (
        <td key={u.slug} className="px-4 py-3 align-top text-sm text-slate-700">
          {children(u)}
        </td>
      ))}
    </tr>
  );
}
