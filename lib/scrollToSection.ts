/** Offset for fixed nav height when smooth-scrolling to in-page sections. */
export const NAV_SCROLL_OFFSET_PX = 88;

export function scrollToSection(
  elementId: string,
  offsetPx: number = NAV_SCROLL_OFFSET_PX,
): void {
  const el = document.getElementById(elementId);
  if (!el) return;
  const top =
    el.getBoundingClientRect().top + window.scrollY - offsetPx;
  window.scrollTo({ top, behavior: "smooth" });
}
