"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getStudentCountry } from "./CountryPicker";

// Slim banner at the top of every page that personalizes content based on the
// student's chosen country (set by CountryPicker on first visit).
export default function CountryBanner() {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    setCountry(getStudentCountry());
  }, []);

  if (!country || country.code === "skip") return null;

  const hasGuide = !!country.guide;

  return (
    <div className="bg-gradient-to-r from-brand-50 to-amber-50 px-4 py-2 text-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <span className="flex items-center gap-2 text-slate-700">
          <span className="text-base">{country.flag}</span>
          <span>
            <span className="font-semibold">Welcome, {country.name} student!</span>{" "}
            <span className="hidden text-slate-600 sm:inline">
              We've tailored content for you.
            </span>
          </span>
        </span>
        <div className="flex items-center gap-2">
          {hasGuide && (
            <Link
              href={`/guides/${country.guide}`}
              className="rounded-lg bg-brand-500 px-3 py-1 text-xs font-bold text-ink-900 hover:bg-brand-400"
            >
              📖 Open {country.name} guide →
            </Link>
          )}
          <button
            onClick={() => {
              localStorage.removeItem("student_country");
              window.location.reload();
            }}
            className="text-xs text-slate-500 hover:text-brand-700 hover:underline"
            title="Change country"
          >
            Change
          </button>
        </div>
      </div>
    </div>
  );
}
