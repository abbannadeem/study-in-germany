// Cost-of-living math for the Calculator page. Lifestyle multipliers and
// currency rates are approximate — they should be reviewed periodically.

export const LIFESTYLES = [
  {
    id: "lean",
    label: "Lean",
    emoji: "🪙",
    mult: 0.8,
    description: "Shared room (WG), cook at home, mostly walking & cycling.",
  },
  {
    id: "comfortable",
    label: "Comfortable",
    emoji: "🙂",
    mult: 1.0,
    description: "Average student lifestyle: occasional eating out, public transport.",
  },
  {
    id: "premium",
    label: "Premium",
    emoji: "✨",
    mult: 1.3,
    description: "Studio apartment, eating out often, occasional travel & shopping.",
  },
];

// Approximate exchange rates (€1 = ...). These change over time — confirm before
// making financial decisions.
export const CURRENCIES = [
  { code: "EUR", label: "€ EUR", rate: 1, symbol: "€" },
  { code: "PKR", label: "₨ PKR (Pakistan)", rate: 310, symbol: "₨" },
  { code: "INR", label: "₹ INR (India)", rate: 95, symbol: "₹" },
  { code: "BDT", label: "৳ BDT (Bangladesh)", rate: 125, symbol: "৳" },
  { code: "NPR", label: "Rs NPR (Nepal)", rate: 150, symbol: "Rs " },
  { code: "LKR", label: "Rs LKR (Sri Lanka)", rate: 340, symbol: "Rs " },
  { code: "VND", label: "₫ VND (Vietnam)", rate: 27000, symbol: "₫" },
  { code: "IDR", label: "Rp IDR (Indonesia)", rate: 17500, symbol: "Rp " },
  { code: "TRY", label: "₺ TRY (Turkey)", rate: 38, symbol: "₺" },
  { code: "CNY", label: "¥ CNY (China)", rate: 7.7, symbol: "¥" },
  { code: "AED", label: "د.إ AED (UAE)", rate: 3.85, symbol: "د.إ " },
  { code: "SAR", label: "﷼ SAR (Saudi Arabia)", rate: 3.95, symbol: "﷼ " },
  { code: "IRR", label: "﷼ IRR (Iran)", rate: 60000, symbol: "﷼ " },
  { code: "EGP", label: "£ EGP (Egypt)", rate: 52, symbol: "£" },
  { code: "USD", label: "$ USD", rate: 1.05, symbol: "$" },
];

// Per-month estimate in EUR for a given city + lifestyle.
export function breakdown(city, mult) {
  const rent = Math.round(city.avgRent * mult);
  const food = Math.round(250 * mult);
  const transport =
    city.transportPass === 0 ? 0 : Math.round((city.transportPass || 40) * 1);
  const insurance = 120; // public health insurance baseline
  const other = Math.round(150 * mult); // leisure, books, phone, etc.
  const monthly = rent + food + transport + insurance + other;
  return [
    { label: "Rent (in a WG / shared flat)", icon: "🏠", value: rent },
    { label: "Food & groceries", icon: "🍳", value: food },
    {
      label: "Transport (Semesterticket)",
      icon: "🚆",
      value: transport,
      note: transport === 0 ? "Often included in semester fee" : null,
    },
    { label: "Health insurance", icon: "🩺", value: insurance },
    { label: "Books, phone & leisure", icon: "📱", value: other },
    { label: "TOTAL / month", icon: "💶", value: monthly, total: true },
  ];
}

export function convert(eurValue, currency) {
  return Math.round(eurValue * currency.rate);
}

export function formatInCurrency(eurValue, currency) {
  const local = convert(eurValue, currency);
  return `${currency.symbol}${local.toLocaleString("en-US")}`;
}
