// app/page.tsx - Root redirect handled by middleware
// Note: Middleware redirects / → /en automatically
// This page is technically unreachable - all metadata is handled by app/[locale]/page.tsx

export default function RootPage() {
  return null;
}
