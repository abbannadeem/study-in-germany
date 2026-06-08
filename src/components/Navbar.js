"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Logical groupings — clean dropdown menus instead of 14 separate links.
const navGroups = [
  {
    label: "Explore",
    items: [
      { href: "/universities", label: "🎓 Universities", desc: "Browse 183 public unis" },
      { href: "/programs", label: "📖 Programs", desc: "130+ English programmes" },
      { href: "/compare", label: "⚖️ Compare", desc: "Side-by-side comparison" },
      { href: "/cities", label: "🏙️ Cities", desc: "37 student cities" },
    ],
  },
  {
    label: "Plan",
    items: [
      { href: "/calculator", label: "🧮 Cost Calculator", desc: "EUR → PKR/INR/BDT" },
      { href: "/scholarships", label: "💰 Scholarships", desc: "DAAD + 13 more" },
      { href: "/industries", label: "🏭 Industries", desc: "Jobs per state" },
      { href: "/jobs", label: "💼 Jobs", desc: "Werkstudent + mini-jobs" },
    ],
  },
  {
    label: "Apply",
    items: [
      { href: "/visa", label: "📋 Visa Process", desc: "Step-by-step guide" },
      { href: "/blocked-account", label: "💳 Blocked Account", desc: "Sperrkonto comparison" },
      { href: "/checklist", label: "✅ Application Checklist", desc: "Savable progress" },
      { href: "/settle", label: "🇩🇪 Settle In", desc: "After you arrive" },
    ],
  },
  {
    label: "Learn",
    items: [
      { href: "/blog", label: "📚 Blog & Guides", desc: "16 detailed articles" },
      { href: "/services", label: "🤝 1-on-1 Services", desc: "Personal help (paid)" },
      { href: "/about", label: "ℹ️ About Us", desc: "Our mission" },
      { href: "/contact", label: "📬 Contact", desc: "WhatsApp + email" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null); // which desktop dropdown is open
  const [country, setCountry] = useState(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("student_country");
      if (stored) setCountry(JSON.parse(stored));
    } catch {}
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setOpenGroup(null);
    setMobileOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!openGroup) return;
    function handleClick(e) {
      if (!e.target.closest("[data-nav-group]")) setOpenGroup(null);
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [openGroup]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-ink-900">
          <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-md shadow-sm">
            <span className="h-full w-1/3 bg-black" />
            <span className="h-full w-1/3 bg-red-600" />
            <span className="h-full w-1/3 bg-brand-400" />
          </span>
          <span className="text-lg">
            Study in <span className="text-brand-600">Germany</span>
          </span>
        </Link>

        {/* Desktop nav — grouped dropdowns */}
        <div className="hidden items-center gap-1 md:flex">
          <Link
            href="/start"
            className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              isActive("/start")
                ? "bg-brand-50 text-brand-700"
                : "text-slate-700 hover:bg-slate-100 hover:text-ink-900"
            }`}
          >
            🚀 Start
          </Link>

          {navGroups.map((group) => {
            const isOpen = openGroup === group.label;
            const hasActive = group.items.some((i) => isActive(i.href));
            return (
              <div key={group.label} className="relative" data-nav-group>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenGroup(isOpen ? null : group.label);
                  }}
                  className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isOpen || hasActive
                      ? "bg-brand-50 text-brand-700"
                      : "text-slate-700 hover:bg-slate-100 hover:text-ink-900"
                  }`}
                >
                  {group.label}
                  <span className={`text-xs transition-transform ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>

                {/* Dropdown panel */}
                {isOpen && (
                  <div className="absolute left-0 top-full z-50 mt-2 w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex flex-col rounded-lg px-3 py-2.5 transition hover:bg-brand-50"
                      >
                        <span className="font-semibold text-ink-900">{item.label}</span>
                        <span className="text-xs text-slate-500">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Country selector */}
          <button
            onClick={() => {
              localStorage.removeItem("student_country");
              window.location.reload();
            }}
            title="Change country"
            className="ml-1 inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
          >
            {country && country.code !== "skip" ? (
              <>
                <span className="text-base">{country.flag}</span>
                <span>Change</span>
              </>
            ) : (
              <>
                <span>🌍</span>
                <span>Country</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          className="rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu — collapsible groups */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <Link
              href="/start"
              onClick={() => setMobileOpen(false)}
              className="block rounded-md bg-brand-50 px-3 py-3 font-semibold text-brand-700"
            >
              🚀 Start Here
            </Link>

            <div className="mt-2 space-y-2">
              {navGroups.map((group) => (
                <details key={group.label} className="group rounded-lg border border-slate-200">
                  <summary className="flex cursor-pointer items-center justify-between px-3 py-2.5 text-sm font-semibold text-ink-900">
                    {group.label}
                    <span className="text-slate-400 transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <div className="border-t border-slate-100 px-2 py-1">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}

              {/* Country in mobile */}
              <button
                onClick={() => {
                  localStorage.removeItem("student_country");
                  window.location.reload();
                }}
                className="flex w-full items-center gap-2 rounded-md border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-brand-50"
              >
                {country && country.code !== "skip" ? (
                  <>
                    <span>{country.flag}</span>
                    <span>Change country ({country.name})</span>
                  </>
                ) : (
                  <>
                    <span>🌍</span>
                    <span>Select Country</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
