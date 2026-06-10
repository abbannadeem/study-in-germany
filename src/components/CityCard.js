import Link from "next/link";
import CityImage from "./CityImage";
import { euro } from "@/lib/format";

export default function CityCard({ city }) {
  return (
    <Link
      href={`/cities/${city.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-200 hover:shadow-md"
    >
      <CityImage
        city={city}
        alt={`${city.name}, ${city.state}`}
        className="h-36 w-full"
        imgClassName="transition duration-200 group-hover:brightness-110"
      />
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold text-ink-900 group-hover:text-brand-700">
          {city.name}
        </h3>
        <p className="mb-2 text-sm text-slate-500">{city.germanName} · {city.state}</p>
        <p className="mb-3 text-sm text-slate-600 line-clamp-2">{city.vibe}</p>

        <div className="mt-auto grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 text-xs">
          <div>
            <span className="block text-slate-400">Monthly budget</span>
            <strong className="text-ink-900">~{euro(city.monthlyBudget)}</strong>
          </div>
          <div>
            <span className="block text-slate-400">Avg. rent</span>
            <strong className="text-ink-900">~{euro(city.avgRent)}</strong>
          </div>
        </div>
      </div>
    </Link>
  );
}
