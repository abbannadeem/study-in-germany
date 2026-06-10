import Link from "next/link";
import { euro } from "@/lib/format";

// Text-only card — no images, used on the home page "Top universities" section.
export default function UniversityCard({ uni }) {
  return (
    <Link
      href={`/universities/${uni.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-md"
    >
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="font-semibold leading-tight text-ink-900 group-hover:text-brand-700">
          {uni.name}
        </h3>
        {uni.worldRanking && (
          <span className="shrink-0 rounded-full bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-700 transition-colors duration-200 group-hover:bg-brand-100">
            #{uni.worldRanking}
          </span>
        )}
      </div>
      <p className="mb-3 text-sm text-slate-500">
        📍 {uni.city}, {uni.state}
      </p>

      <div className="mt-auto flex flex-wrap gap-1.5">
        {uni.fields.slice(0, 3).map((f) => (
          <span
            key={f}
            className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
          >
            {f}
          </span>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 text-xs text-slate-500">
        <span>
          Tuition:{" "}
          <strong className={uni.tuitionPerSemester === 0 ? "text-emerald-600" : "text-ink-900"}>
            {uni.tuitionPerSemester === 0 ? "Free" : euro(uni.tuitionPerSemester) + "/sem"}
          </strong>
        </span>
        <span className="text-right">
          Semester fee: <strong className="text-ink-900">{euro(uni.semesterFee)}</strong>
        </span>
      </div>
    </Link>
  );
}
