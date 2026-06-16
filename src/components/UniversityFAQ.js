import Link from "next/link";
import { cities } from "@/data/cities";
import { euro } from "@/lib/format";

// Generate FAQ items dynamically from the uni's data so answers stay
// accurate as data is updated. Returns null if no data is available so
// the page can hide the whole section.
export function generateFAQs(uni) {
  if (!uni) return [];

  const faqs = [];

  // 1) Tuition free?
  if (uni.tuitionPerSemester === 0) {
    faqs.push({
      q: `Is ${uni.shortName || uni.name} tuition-free for international students?`,
      a: `Yes. ${uni.name} is a public university in ${uni.state} where tuition is €0 per semester for international students. You still pay a semester contribution (Semesterbeitrag) of about ${euro(uni.semesterFee)}, which typically includes a public-transport ticket.`,
    });
  } else {
    faqs.push({
      q: `Does ${uni.shortName || uni.name} charge tuition for international students?`,
      a: `Yes — because ${uni.name} is in ${uni.state}, non-EU/EEA students pay ${euro(uni.tuitionPerSemester)} per semester in tuition, plus a semester contribution of about ${euro(uni.semesterFee)}.`,
    });
  }

  // 2) Language requirements
  if (uni.admission?.languageEnglish) {
    faqs.push({
      q: `What English language score does ${uni.shortName || uni.name} require?`,
      a: `For English-taught programmes, ${uni.name} typically requires ${uni.admission.languageEnglish}. Programme-specific minimums can vary — always confirm on the official programme page.`,
    });
  }

  // 3) Deadlines
  if (uni.deadlines?.winterIntake) {
    faqs.push({
      q: `When is the application deadline for ${uni.shortName || uni.name}?`,
      a: `For winter intake (programmes starting in October), the deadline is typically: ${uni.deadlines.winterIntake} ${uni.deadlines.summerIntake ? `For summer intake: ${uni.deadlines.summerIntake}` : ""}`.trim(),
    });
  }

  // 4) How to apply
  if (uni.applyVia) {
    let answer;
    if (uni.applyVia === "uni-assist") {
      answer = `International applications go through uni-assist (uni-assist.de). You upload certified copies of your degree, transcripts and language test, and uni-assist verifies them before forwarding to ${uni.shortName || uni.name}. The application fee is approximately €75 for the first programme.`;
    } else if (uni.applyVia === "direct") {
      answer = `${uni.shortName || uni.name} accepts international applications directly through its own portal — see the official website (${uni.website}). You'll create an account, upload your documents and submit. Many programmes have no application fee for direct applications.`;
    } else {
      answer = `${uni.shortName || uni.name} uses both routes — uni-assist for some programmes and direct application for others. The programme page on the university website tells you which route to use.`;
    }
    faqs.push({
      q: `How do I apply to ${uni.shortName || uni.name}?`,
      a: answer,
    });
  }

  // 5) Rankings
  if (uni.worldRanking && uni.worldRanking < 600) {
    faqs.push({
      q: `Is ${uni.shortName || uni.name} a good university?`,
      a: `Yes. ${uni.name} is consistently ranked among the top universities in the world — currently around #${uni.worldRanking} globally. It is particularly strong in ${(uni.fields || []).slice(0, 3).join(", ")}.`,
    });
  }

  return faqs;
}

// Returns the matching city object from cities.js if the uni's city has a
// dedicated city page. Otherwise null.
export function findCityForUni(uni) {
  if (!uni?.city) return null;
  const normalized = uni.city.toLowerCase();
  return (
    cities.find((c) => c.slug === normalized) ||
    cities.find((c) => c.name.toLowerCase() === normalized) ||
    cities.find((c) => c.germanName?.toLowerCase() === normalized) ||
    null
  );
}

export default function UniversityFAQ({ uni }) {
  const faqs = generateFAQs(uni);
  const city = findCityForUni(uni);

  if (faqs.length === 0 && !city) return null;

  return (
    <>
      {/* ━━━ FAQ ━━━ */}
      {faqs.length > 0 && (
        <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-ink-900">
            Frequently asked questions
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Answers based on the most-asked questions about {uni.shortName || uni.name}.
          </p>

          <div className="mt-5 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-2 font-semibold text-ink-900">
                  <span>{f.q}</span>
                  <span className="mt-0.5 shrink-0 text-brand-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* ━━━ Related internal links ━━━ */}
      <section className="mb-10 grid gap-4 sm:grid-cols-3">
        {city && (
          <Link
            href={`/cities/${city.slug}`}
            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
          >
            <p className="text-2xl">🏙️</p>
            <p className="mt-2 font-bold text-ink-900 group-hover:text-brand-700">
              Living in {city.name}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Average ~{euro(city.monthlyBudget)}/month, rent ~{euro(city.avgRent)}/month.
            </p>
            <span className="mt-3 inline-block text-sm font-semibold text-brand-600">
              City guide →
            </span>
          </Link>
        )}

        <Link
          href="/scholarships"
          className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
        >
          <p className="text-2xl">💰</p>
          <p className="mt-2 font-bold text-ink-900 group-hover:text-brand-700">
            Find a scholarship
          </p>
          <p className="mt-1 text-sm text-slate-600">
            DAAD, Deutschlandstipendium and university-specific awards.
          </p>
          <span className="mt-3 inline-block text-sm font-semibold text-brand-600">
            Browse scholarships →
          </span>
        </Link>

        <Link
          href="/visa"
          className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
        >
          <p className="text-2xl">📋</p>
          <p className="mt-2 font-bold text-ink-900 group-hover:text-brand-700">
            Visa walkthrough
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Step-by-step from offer letter to embassy appointment.
          </p>
          <span className="mt-3 inline-block text-sm font-semibold text-brand-600">
            Read the visa guide →
          </span>
        </Link>
      </section>
    </>
  );
}
