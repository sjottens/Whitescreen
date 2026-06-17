'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbAriaLabel = items.map((item) => item.name).join(' / ');

  return (
    <nav aria-label={breadcrumbAriaLabel} className="bg-slate-50 border-b border-slate-200">
      <div className="container">
        <ol className="flex flex-wrap items-center gap-2 py-3 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="w-4 h-4 text-slate-400" />}
              {item.path ? (
                <Link
                  href={item.path}
                  className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-slate-600">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
