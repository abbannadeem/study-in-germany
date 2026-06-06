import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with the Study in Germany team. WhatsApp, email or a quick message.",
};

const contactMethods = [
  {
    icon: "💬",
    title: "WhatsApp",
    text: "Fastest reply — usually within a few hours.",
    action: "Open WhatsApp →",
    href: "https://wa.me/491706963809",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    icon: "📧",
    title: "Email",
    text: "Best for detailed questions or document sharing.",
    action: "studyingermanyguide@gmail.com",
    href: "mailto:studyingermanyguide@gmail.com",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    icon: "🐦",
    title: "X / Twitter",
    text: "Follow for quick tips and deadline reminders.",
    action: "Follow @studyingermanypk",
    href: "https://x.com/",
    color: "bg-slate-50 text-slate-700 border-slate-200",
  },
];

const faqs = [
  {
    q: "Can you review my application for free?",
    a: "We answer general questions for free via WhatsApp/email. For detailed 1-on-1 application reviews, paid consultation slots will be available soon — stay tuned.",
  },
  {
    q: "How quickly do you respond?",
    a: "WhatsApp: usually within a few hours during waking hours (Pakistan time). Email: within 1-2 business days.",
  },
  {
    q: "I found incorrect information on the site. How do I report it?",
    a: "Email us with the page URL and what's wrong — we update facts within a day or two. We genuinely appreciate it.",
  },
  {
    q: "Can I contribute / write for the site?",
    a: "Yes! If you're a current Pakistani/Indian/South Asian student in Germany and want to share your story or write a guide, message us.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="📬 Contact"
        title="Get in touch"
        subtitle="Have a question, spotted an error, or want to share your story? Pick the channel that works for you."
      />

      {/* Contact methods */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-5 md:grid-cols-3">
          {contactMethods.map((m) => (
            <a
              key={m.title}
              href={m.href}
              target={m.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className={`group flex flex-col rounded-xl border-2 p-6 transition-all hover:-translate-y-1 hover:shadow-md ${m.color}`}
            >
              <div className="mb-3 text-4xl">{m.icon}</div>
              <h3 className="text-lg font-bold">{m.title}</h3>
              <p className="mt-1 text-sm opacity-80">{m.text}</p>
              <span className="mt-4 inline-block text-sm font-semibold">
                {m.action}
              </span>
            </a>
          ))}
        </div>

        {/* Quick form (mailto fallback - static-friendly) */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-ink-900">Or send a quick message</h2>
          <p className="mt-1 text-sm text-slate-500">
            This form opens your email app with the message pre-filled.
          </p>

          <form
            action="mailto:studyingermanyguide@gmail.com"
            method="post"
            encType="text/plain"
            className="mt-5 space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-ink-900">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Talha Ahmed"
                  required
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-ink-900">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-ink-900">
                What's on your mind?
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Question, feedback, or suggestion…"
                required
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-brand-500 px-5 py-2.5 font-semibold text-ink-900 transition hover:bg-brand-400"
            >
              Send message →
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-ink-900">Quick FAQ</h2>
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

          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
            📍 <strong className="text-ink-900">Based in:</strong> Pakistan, with
            on-the-ground experience in Germany. We respond personally — no
            chatbots, no canned responses.
          </div>
        </div>
      </section>
    </>
  );
}
