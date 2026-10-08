// components/tools/related-tests.tsx - "Related tests" block at the bottom of
// every tool page; the links per tool are in lib/tool-directory.ts.

import Link from 'next/link';
import { relatedTo } from '@/lib/tool-directory';

export default function RelatedTests({ path }: { path: string }) {
  const related = relatedTo(path);
  if (!related.length) return null;

  return (
    <section aria-labelledby="related-tests-heading" className="container mt-4 pb-16">
      <h2 id="related-tests-heading" className="mb-6 text-2xl md:text-3xl">
        Related tests
      </h2>
      <ul className="grid list-none gap-4 pl-0 sm:grid-cols-2 lg:grid-cols-4">
        {related.map((tool) => (
          <li key={tool.path} className="mb-0">
            <Link
              href={tool.path}
              className="group block h-full rounded-xl border border-slate-700 bg-slate-900/60 p-5 text-slate-100 transition-colors hover:border-[#00DC82]/60 focus-ring"
            >
              <span className="mb-1 block text-lg font-semibold group-hover:text-[#00DC82]">{tool.name}</span>
              <span className="block text-sm leading-relaxed text-slate-300">{tool.blurb}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
