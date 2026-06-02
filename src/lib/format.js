export function euro(amount) {
  if (amount === 0) return "Free";
  return "€" + amount.toLocaleString("en-US");
}

export function number(n) {
  return n.toLocaleString("en-US");
}
