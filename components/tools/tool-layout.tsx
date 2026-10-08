// components/tools/tool-layout.tsx - Top of every screen tool page: the H1, a
// short intro and the tool itself, so the test is usable without scrolling.
// The explanation below it comes from <GuideSection>.

import { ReactNode } from 'react';
import Link from 'next/link';
import { Wrench, ArrowRight } from 'lucide-react';
import { translate } from '@/lib/translations';
import { PAGE_COPY, type CopyPath } from '@/lib/page-copy';
import { CRUMBS } from '@/lib/breadcrumbs';
import { webApplicationSchema } from '@/lib/tool-schema';

interface ToolLayoutProps {
  /** Page path; also feeds the WebApplication JSON-LD. */
  path: CopyPath;
  /** Page H1, leading with the search term. */
  title: string;
  /** One or two sentences: what the tool does and how to start. */
  intro: ReactNode;
  children: ReactNode;
}

export default function ToolLayout({ path, title, intro, children }: ToolLayoutProps) {
  const schema = webApplicationSchema({ name: CRUMBS[path].label, description: PAGE_COPY[path].description, path });

  return (
    <section className="pb-8 pt-6 md:pt-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container">
        <h1 className="mb-3 animate-none text-3xl md:text-5xl lg:text-5xl">{title}</h1>
        <div className="mb-6 max-w-3xl text-base text-slate-300 md:text-lg">{intro}</div>

        <div className="mb-8 overflow-hidden rounded-xl border border-slate-200 shadow-lg">{children}</div>

        {/* Anyone who spots a stuck pixel while testing gets an obvious next step. */}
        <Link
          href={'/dead-pixel-fixer'}
          className="group flex items-center justify-between gap-4 rounded-xl border border-cyan-200 bg-cyan-50 px-6 py-5 transition-colors hover:border-cyan-300 hover:bg-cyan-100/60"
        >
          <div className="flex items-center gap-3">
            <Wrench className="h-5 w-5 flex-shrink-0 text-cyan-600" />
            <p className="text-sm text-slate-700 md:text-base">{translate('dead_pixel_fixer')}</p>
          </div>
          <span className="flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-cyan-600">
            {translate('featured_tool_cta')}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </section>
  );
}
