// components/layout/breadcrumbs.tsx - Visible breadcrumbs plus BreadcrumbList
// JSON-LD for every page, built from the current path (see lib/breadcrumbs.ts).
// Rendered once by app/(site)/layout.tsx; renders nothing on the homepage.

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { breadcrumbTrail } from '@/lib/breadcrumbs';
import { SITE_URL } from '@/lib/constants';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const trail = breadcrumbTrail(pathname);
  if (!trail.length) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `${SITE_URL}${crumb.path === '/' ? '' : crumb.path}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="border-b border-slate-800 bg-slate-950/60">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container">
        <ol className="flex list-none flex-wrap items-center gap-2 py-3 pl-0 text-sm">
          {trail.map((crumb, index) => {
            const last = index === trail.length - 1;
            return (
              <li key={crumb.path} className="mb-0 flex items-center gap-2">
                {index > 0 && <ChevronRight className="h-4 w-4 text-slate-500" aria-hidden="true" />}
                {last ? (
                  <span aria-current="page" className="text-slate-300">
                    {crumb.label}
                  </span>
                ) : (
                  <Link href={crumb.path} className="text-cyan-300 hover:underline">
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
