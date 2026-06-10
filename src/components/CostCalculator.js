"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cities } from "@/data/cities";
import {
  LIFESTYLES,
  CURRENCIES,
  breakdown,
  formatInCurrency,
} from "@/lib/calculator";

export default function CostCalculator() {
  const sortedCities = [...cities].sort((a, b) => a.name.localeCompare(b.name));
  const [citySlug, setCitySlug] = useState("munich");
  const [lifestyleId, setLifestyleId] = useState("comfortable");
  const [currencyCode, setCurrencyCode] = useState("EUR");

  const city = useMemo(
    () => sortedCities.find((c) => c.slug === citySlug) || sortedCities[0],
    [citySlug, sortedCities]
  );
  const lifestyle = useMemo(
    () => LIFESTYLES.find((l) => l.id === lifestyleId),
    [lifestyleId]
  );
  const currency = useMemo(
    () => CURRENCIES.find((c) => c.code === currencyCode) || CURRENCIES[0],
    [currencyCode]
  );

  const rows = useMemo(
    () => breakdown(city, lifestyle.mult),
    [city, lifestyle]
  );
  const monthly = rows[rows.length - 1].value;
  const yearly = monthly * 12;
  const blockedAccount = 11904; // current minimum to show

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr]">
      {/* Controls */}
      <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div>
          <label className="mb-1 block text-sm font-semibold text-ink-900">City</label>
          <select
            value={citySlug}
            onChange={(e) => setCitySlug(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
          >
            {sortedCities.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name} — {c.state}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-slate-500">
            Avg. rent in {city?.name || "this city"}: ~€{city?.avgRent ?? "—"}/month
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-ink-900">Lifestyle</label>
          <div className="space-y-2">
            {LIFESTYLES.map((l) => (
              <label
                key={l.id}
                className={`flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-2 transition ${
                  lifestyleId === l.id
                    ? "border-brand-400 bg-brand-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <input
                  type="radio"
                  name="lifestyle"
                  className="mt-1 accent-brand-500"
                  checked={lifestyleId === l.id}
                  onChange={() => setLifestyleId(l.id)}
                />
                <div>
                  <p className="text-sm font-medium text-ink-900">
                    {l.emoji} {l.label}
                  </p>
                  <p className="text-xs text-slate-500">{l.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-ink-900">
            Show prices in
          </label>
          <select
            value={currencyCode}
            onChange={(e) => setCurrencyCode(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
          >
            {CURRENCIES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.label}
              </option>
            ))}
          </select>
          {currency.code !== "EUR" && (
            <p className="mt-1 text-xs text-slate-500">
              Approximate rate: €1 ≈ {currency.symbol}
              {currency.rate.toLocaleString("en-US")}
            </p>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-5">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-50 px-5 py-3">
            <h3 className="text-sm font-semibold text-ink-900">
              Monthly breakdown · {city.name} · {lifestyle.label}
            </h3>
          </div>
          <ul className="divide-y divide-slate-200">
            {rows.map((r) => (
              <li
                key={r.label}
                className={`flex items-center justify-between px-5 py-3 text-sm ${
                  r.total ? "bg-brand-50 font-bold text-ink-900" : "text-slate-700"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base">{r.icon}</span>
                  {r.label}
                  {r.note && (
                    <span className="text-xs italic text-slate-400">({r.note})</span>
                  )}
                </span>
                <span className={r.total ? "text-lg text-brand-700" : ""}>
                  {formatInCurrency(r.value, currency)}
                  {currency.code !== "EUR" && (
                    <span className="ml-2 text-xs font-normal text-slate-400">
                      (€{r.value})
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
              💶 1 year of living costs
            </p>
            <p className="mt-2 text-3xl font-extrabold text-ink-900">
              {formatInCurrency(yearly, currency)}
            </p>
            {currency.code !== "EUR" && (
              <p className="text-xs text-slate-500">≈ €{yearly.toLocaleString("en-US")}</p>
            )}
            <p className="mt-2 text-xs text-slate-600">
              Plan for ~{formatInCurrency(monthly, currency)} per month before any
              part-time income.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              💳 Blocked account (visa)
            </p>
            <p className="mt-2 text-3xl font-extrabold text-ink-900">
              {formatInCurrency(blockedAccount, currency)}
            </p>
            {currency.code !== "EUR" && (
              <p className="text-xs text-slate-500">
                ≈ €{blockedAccount.toLocaleString("en-US")}
              </p>
            )}
            <p className="mt-2 text-xs text-slate-600">
              The amount you must deposit before applying for a student visa.{" "}
              <Link href="/visa" className="font-medium text-brand-600 hover:underline">
                More →
              </Link>
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-xs text-amber-800">
          ⚠️ Estimates only. Real costs vary by personal habits and current exchange
          rates. Rent in particular can be much higher in tight markets like Munich.
        </div>
      </div>
    </div>
  );
}
