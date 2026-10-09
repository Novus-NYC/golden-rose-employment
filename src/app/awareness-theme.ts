// Self-contained so the same function can run before paint and after hydration.
export function syncAwarenessTheme(updateIcons = true) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
  }).formatToParts(new Date());
  const active =
    parts.find((part) => part.type === "year")?.value === "2026" &&
    parts.find((part) => part.type === "month")?.value === "10";

  document.documentElement.dataset.awareness = active ? "purple" : "none";
  // Let React finish hoisting icon links before changing their hrefs.
  if (!updateIcons) return;
  document.querySelectorAll<HTMLLinkElement>('link[rel*="icon"]').forEach((link) => {
    link.href = active ? "/brand/mark-purple.png" : "/brand/mark.png";
  });
}
