import Link from "next/link";
import Photo from "./Photo";

export default function IndustryCard({ item }) {
  return (
    <Link
      href={`/industries/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
    >
      <Photo
        src={`/industries/${item.slug}.jpg`}
        name={item.state}
        emoji="🏭"
        className="h-36 w-full"
      />
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold text-ink-900 group-hover:text-brand-700">
          {item.state}
        </h3>
        <p className="mb-3 text-sm text-brand-600">{item.headline}</p>

        <div className="mb-3 flex flex-wrap gap-1.5">
          {item.sectors.slice(0, 3).map((s) => (
            <span
              key={s}
              className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto border-t border-slate-100 pt-3 text-xs text-slate-500">
          <span className="font-medium text-ink-900">Top employers:</span>{" "}
          {item.companies.slice(0, 3).join(", ")}…
        </div>
      </div>
    </Link>
  );
}
