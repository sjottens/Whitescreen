// lib/page-dates.ts - When each page's content last changed, shown under the
// breadcrumbs and used as dateModified in the JSON-LD.
//
// Update the date by hand when you change what a page says (text, steps, FAQ,
// how the tool works). Leave it alone for refactors, styling or dependency
// updates: a date that moves on every deploy tells readers and Google nothing.

export const PAGE_UPDATED: Record<string, string> = {
  '/': '2026-10-08',
  '/tools': '2026-11-20',
  '/monitor-test': '2026-11-20',
  '/monitor-buying-guide': '2026-10-08',
  '/how-to-test-a-monitor-before-returning': '2026-10-08',
  '/faq': '2026-10-08',
  '/about': '2026-10-08',
  '/contact': '2026-10-08',
  '/privacy': '2026-09-29',
  '/cookies': '2026-10-08',
  '/terms': '2026-09-23',
  '/white-screen': '2026-10-08',
  '/black-screen': '2026-10-08',
  '/color-screen': '2026-10-08',
  '/dead-pixel-test': '2026-10-08',
  '/dead-pixel-fixer': '2026-10-08',
  '/backlight-bleed-test': '2026-10-08',
  '/monitor-response-time-test': '2026-10-08',
  '/brightness-test': '2026-10-08',
  '/contrast-test': '2026-10-08',
  '/zoom-lighting': '2026-10-08',
  '/tools/pixel-density-calculator': '2026-10-08',
  '/mic-test': '2026-10-08',
  '/keyboard-test': '2026-10-08',
  '/webcam-test': '2026-10-08',
  '/click-speed-test': '2026-10-08',
  '/used-laptop-check': '2026-11-20',
};

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/** "20 November 2026". Formatted by hand so server and client render the same text. */
export function formatPageDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}
