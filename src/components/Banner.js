// Decorative gradient banner used as the "image" for universities and cities.
// Generates a stable colour gradient from the name so each entry looks distinct
// without relying on external image files.

const palettes = [
  ["#1e3a8a", "#2563eb"],
  ["#7c2d12", "#ea580c"],
  ["#064e3b", "#059669"],
  ["#581c87", "#9333ea"],
  ["#7f1d1d", "#dc2626"],
  ["#0c4a6e", "#0891b2"],
  ["#365314", "#65a30d"],
  ["#831843", "#db2777"],
];

function pick(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return palettes[h % palettes.length];
}

export default function Banner({ name, label, className = "", emoji }) {
  const [from, to] = pick(name);
  const initials = (label || name)
    .split(" ")
    .filter((w) => /[A-Za-z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <div className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full bg-white/10" />
      <div className="pointer-events-none absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-black/10" />
      <span className="relative text-4xl font-black tracking-wide text-white/95 drop-shadow">
        {emoji || initials}
      </span>
    </div>
  );
}
