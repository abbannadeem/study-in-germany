"use client";

import { useEffect, useState } from "react";
import { checklistGroups, getTotalItems } from "@/data/checklist";

const STORAGE_KEY = "germany_checklist_progress";
const TOTAL = getTotalItems();

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// HOW-TO hints — one-liner help for the items most students get stuck on.
// Keyed by "groupId:itemIndex". Items without a hint just stay as a
// plain checklist row. We keep the data file as-is and enrich here.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const HINTS = {
  // Research & Planning
  "research:2": { text: "Open the programme page on the official university website — deadlines are usually at the bottom in the 'How to apply' section. Treat DAAD's deadline tool as a backup, not the source of truth." },
  "research:4": { text: "APS is mandatory for India, China, Vietnam and Mongolia. NOT required for Pakistan, Bangladesh, Sri Lanka, Nepal, UAE, Saudi Arabia, Iran, Turkey, Egypt or Syria. See /guides for your country.", link: "/guides" },

  // Language Test
  "language:0": { text: "English-taught Master's: IELTS 6.5 / TOEFL iBT 88 is the safe target. German-taught: TestDaF 4×4 (or DSH 2). Some programmes accept Duolingo English — check the programme page." },
  "language:1": { text: "British Council and IDP slots fill fast in Lahore, Karachi, Delhi, Mumbai. Book your test online 8–10 weeks ahead to get the date you want." },

  // Documents
  "documents:1": { text: "HEC attestation (Pakistan): 7–14 days online if you submit early morning. APS (India/Vietnam): 6–12 weeks — start FIRST." },
  "documents:2": { text: "After HEC/MEA: Ministry of Foreign Affairs (MOFA) attestation, then German Embassy attestation. Total chain takes 3–6 weeks depending on country." },
  "documents:4": { text: "German CV style: 1–2 pages, photo top-right, reverse chronological. No 'objective' line — Germans skip those." },
  "documents:6": { text: "Motivation letter: 1–1.5 pages. Be specific about WHY this programme, WHY this university, WHY now. Generic letters get rejected.", link: "/blog/winning-sop-german-universities" },

  // Applications
  "applications:0": { text: "uni-assist registration: 30 minutes. First application is €75, each additional €30. Start the account early so you can upload documents as you collect them." },
  "applications:3": { text: "Pay only after you've uploaded everything — uni-assist doesn't refund partial applications." },

  // Finance & Insurance
  "finance:0": { text: "Expatrio (€49 setup, no monthly) is the most popular among Pakistani/Indian students. Fintiba (€89 setup) is fastest. See full comparison at /blocked-account.", link: "/blocked-account" },
  "finance:1": { text: "Wise (formerly TransferWise) typically saves 1.5–3% vs your bank's exchange rate. Send €100–200 extra so currency fluctuation doesn't put you below the minimum." },
  "finance:3": { text: "DR-WALTER Educare24 or Mawista Student are the standard choices. €30–40/month for the visa period. Switch to public insurance (TK/DAK) once enrolled.", link: "/insurance" },

  // Visa
  "visa:0": { text: "Some embassies (e.g. Islamabad, New Delhi) book up 3–4 months ahead in peak season (May–August). Check the appointment system the moment you have your blocked-account confirmation." },
  "visa:3": { text: "Two transparent folders: (1) originals + a copy each, (2) admission/blocked-account/insurance/finances. Officers can flip through fast = positive signal." },
  "visa:4": { text: "Practice answers OUT LOUD at least 3 times. Most rejections aren't due to documents — they're due to applicants sounding uncertain. See /visa for the top 10 questions.", link: "/visa" },

  // Pre-departure
  "pre-departure:1": { text: "Apply for the Studentenwerk dorm the day you accept your offer. Slots are first-come, first-served and city-specific. Plan B: WG-Gesucht for a room with German students." },
  "pre-departure:5": { text: "Aldi Talk / Lebara / O2 Prepaid all sell €10–15 SIMs at the airport or any kiosk. Don't sign a 24-month contract until you've done your Anmeldung." },

  // Arrival
  "arrival:0": { text: "Book the Anmeldung slot ONLINE the day you sign a rental contract. In Berlin/Munich slots can be 2–4 weeks out — book before you arrive if possible." },
  "arrival:1": { text: "N26 / Revolut / Wise open in 10 minutes for your daily spending. For salary and rent, get a Sparkasse / Deutsche Bank account once you have an Anmeldung." },
  "arrival:2": { text: "TK (Techniker Krankenkasse) and AOK both speak English. Activation is online — show the confirmation to your university for enrolment." },
};

function HintFor(groupId, idx) {
  const hint = HINTS[`${groupId}:${idx}`];
  if (!hint) return null;
  return hint;
}

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
                  const hint = HintFor(group.id, i);
                  return (
                    <div
                      key={`${group.id}:${item}`}
                      className="px-5 py-3 hover:bg-slate-50"
                    >
                      <label className="flex cursor-pointer items-start gap-3">
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

                      {/* How-to hint: only renders when this row has a hint. */}
                      {hint && !isDone && (
                        <div className="mt-2 ml-8 rounded-lg border border-brand-100 bg-brand-50/60 px-3 py-2 text-xs leading-relaxed text-slate-700">
                          <span className="font-bold text-brand-700">How: </span>
                          {hint.text}
                          {hint.link && (
                            <a
                              href={hint.link}
                              className="ml-1 font-semibold text-brand-700 hover:underline"
                            >
                              See guide →
                            </a>
                          )}
                        </div>
                      )}
                    </div>
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
