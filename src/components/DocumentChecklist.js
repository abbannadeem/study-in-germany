"use client";

import { useEffect, useState } from "react";
import { checklistGroups, getTotalItems } from "@/data/checklist";

const STORAGE_KEY = "germany_checklist_progress";
const TOTAL = getTotalItems();

export default function DocumentChecklist() {
  const [completed, setCompleted] = useState({}); // { "groupId:index": true }
  const [hydrated, setHydrated] = useState(false);

  // Load saved progress
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setCompleted(JSON.parse(stored));
    } catch {}
    setHydrated(true);
  }, []);

  // Save when changed
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    } catch {}
  }, [completed, hydrated]);

  function toggle(groupId, index) {
    const key = `${groupId}:${index}`;
    setCompleted((c) => ({ ...c, [key]: !c[key] }));
  }

  function reset() {
    if (confirm("Reset all progress? This cannot be undone.")) {
      setCompleted({});
    }
  }

  const completedCount = Object.values(completed).filter(Boolean).length;
  const pct = Math.round((completedCount / TOTAL) * 100);

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-3xl font-extrabold text-ink-900">
              {pct}% <span className="text-base font-normal text-slate-500">complete</span>
            </p>
            <p className="text-sm text-slate-500">
              {completedCount} of {TOTAL} items done
            </p>
          </div>
          <div className="flex gap-2">
            {pct === 100 && (
              <span className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-700">
                🎉 All done! Pack your bags.
              </span>
            )}
            {completedCount > 0 && (
              <button
                onClick={reset}
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:border-rose-300 hover:bg-rose-50 hover:text-rose-700"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full bg-gradient-to-r from-brand-500 to-amber-500 transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>

        <p className="mt-3 text-xs text-slate-400">
          💾 Your progress is saved automatically in this browser.
        </p>
      </div>

      {/* Group cards */}
      <div className="space-y-6">
        {checklistGroups.map((group) => {
          const groupCompleted = group.items.filter(
            (_, i) => completed[`${group.id}:${i}`]
          ).length;
          const groupPct = Math.round((groupCompleted / group.items.length) * 100);

          return (
            <details
              key={group.id}
              open
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <summary
                className={`flex cursor-pointer items-center justify-between gap-3 bg-gradient-to-r ${group.color} px-5 py-4 text-white`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{group.icon}</span>
                  <div>
                    <p className="font-bold">{group.title}</p>
                    <p className="text-xs text-white/80">
                      {groupCompleted} / {group.items.length} done
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold">{groupPct}%</span>
                  <span className="text-xl transition-transform group-open:rotate-180">⌃</span>
                </div>
              </summary>

              <div className="divide-y divide-slate-100">
                {group.items.map((item, i) => {
                  const key = `${group.id}:${i}`;
                  const isDone = !!completed[key];
                  return (
                    <label
                      key={`${group.id}:${item}`}
                      className="flex cursor-pointer items-start gap-3 px-5 py-3 hover:bg-slate-50"
                    >
                      <input
                        type="checkbox"
                        checked={isDone}
                        onChange={() => toggle(group.id, i)}
                        className="mt-0.5 h-5 w-5 rounded border-slate-300 accent-brand-500"
                      />
                      <span
                        className={`text-sm leading-relaxed ${
                          isDone
                            ? "text-slate-400 line-through"
                            : "text-slate-700"
                        }`}
                      >
                        {item}
                      </span>
                    </label>
                  );
                })}
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
