import Link from "next/link";
import PageHero from "@/components/PageHero";
import { services, faqs } from "@/data/services";

export const metadata = {
  title: "1-on-1 Services — Personalized Help for Your Germany Application",
  description:
    "Get personalized 1-on-1 help applying to German universities — university shortlist, SOP review, full application review, visa interview prep, and end-to-end mentorship. Honest pricing, no agent commissions.",
};

const WHATSAPP_NUMBER = "923021045296";

function whatsappLink(service) {
  const message = `Hi! I'm interested in your "${service.title}" service. Can we discuss pricing and timing?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="1-on-1 services"
        title="Personal help for your Germany journey"
        subtitle="Most students get 80% right. We help with the 20% that actually gets you in — university selection, visa interview, SOP."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80&auto=format&fit=crop"
      />

      {/* Why us section */}
      <section className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-2xl border-2 border-brand-200 bg-brand-50 p-6 sm:p-8">
          <h2 className="mb-4 text-xl font-bold text-ink-900">
            Why wouldn't you just use a free agent? Here's why thousands of students don't.
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
              <p className="mb-2 text-sm font-semibold text-rose-900">
                Free agents
              </p>
              <ul className="space-y-1.5 text-sm text-rose-800">
                <li>· Paid by universities (€500-2000 commission per student)</li>
                <li>· Push you toward partner universities, not your best fit</li>
                <li>· Hide rejection-prone university options</li>
                <li>· No follow-up after admission</li>
                <li>· Generic SOPs (same template for everyone)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="mb-2 text-sm font-semibold text-emerald-900">
                Working with us
              </p>
              <ul className="space-y-1.5 text-sm text-emerald-800">
                <li>· You pay directly — we work for YOU</li>
                <li>· Honest assessment of admission chances</li>
                <li>· Every public university considered</li>
                <li>· Sustainable: we teach you the process</li>
                <li>· Refund guarantee if not satisfied</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="mb-2 text-2xl font-bold text-ink-900 sm:text-3xl">
          Pick your service
        </h2>
        <p className="mb-6 text-sm text-slate-600">
          Most popular: SOP review — line-by-line feedback in 48 hours.
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.slug}
              className={`relative flex flex-col rounded-2xl border-2 bg-white p-6 shadow-sm transition-all hover:shadow-md ${
                s.popular ? "border-brand-500" : "border-slate-200"
              }`}
            >
              {s.popular && (
                <div className="absolute -top-3 left-6 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink-900">
                  Most popular
                </div>
              )}

              <div className="mb-3 text-4xl">{s.icon}</div>
              <h3 className="text-lg font-bold text-ink-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{s.tagline}</p>

              <div className="my-4 border-y border-slate-100 py-3">
                <p className="text-sm font-semibold text-brand-600">
                  {s.duration}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  From €49 · most services in the €50–€150 range
                </p>
              </div>

              <p className="mb-3 text-sm leading-relaxed text-slate-700">
                {s.description}
              </p>

              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                What's included:
              </p>
              <ul className="mb-5 space-y-1.5 text-sm text-slate-700">
                {s.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto space-y-2">
                <a
                  href={whatsappLink(s)}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-lg bg-emerald-500 px-4 py-2.5 text-center text-sm font-bold text-white transition-all duration-200 hover:bg-emerald-600"
                >
                  Book on WhatsApp
                </a>
                <a
                  href={`mailto:studyingermanyguide@gmail.com?subject=Booking — ${s.title}`}
                  className="block rounded-lg border border-slate-200 px-4 py-2.5 text-center text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-50"
                >
                  Email instead
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="mb-6 text-2xl font-bold text-ink-900">How it works</h2>
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { n: "1", title: "Reach out", text: "WhatsApp or email — tell me what you need." },
            { n: "2", title: "Free 10-min call", text: "We discuss your situation, no payment yet." },
            { n: "3", title: "Pay if it's a fit", text: "Pay via bank, JazzCash, Wise, or Stripe." },
            { n: "4", title: "Get results", text: "Call/review delivered within stated timeframe." },
          ].map((step) => (
            <div
              key={step.n}
              className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 font-bold text-ink-900">
                {step.n}
              </div>
              <h3 className="font-bold text-ink-900">{step.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-ink-900">Common questions</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-ink-900">
                  {f.q}
                  <span className="text-brand-500 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-2xl bg-gradient-to-br from-ink-900 to-slate-800 p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Not sure which service fits?
          </h2>
          <p className="mt-3 text-white/85">
            Send a WhatsApp message — free 10-minute call, no commitment. We'll
            tell you honestly what you need (or if you don't need anything paid).
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I want to discuss which service is right for me.")}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-lg bg-emerald-500 px-6 py-3 font-bold text-white transition-all duration-200 hover:bg-emerald-600"
          >
            Start a free WhatsApp consultation
          </a>
        </div>
      </section>
    </>
  );
}
