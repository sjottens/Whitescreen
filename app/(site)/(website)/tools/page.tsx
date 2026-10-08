// app/(site)/(website)/tools/page.tsx - Overview of every tool and guide (lib/tool-directory.ts)

import { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { PAGE_COPY } from '@/lib/page-copy';
import { TOOL_GROUPS } from '@/lib/tool-directory';

export const metadata: Metadata = pageMetadata({ ...PAGE_COPY['/tools'], path: '/tools' });

const GROUP_INTROS: Record<string, string> = {
  'screen-tests': 'Full-screen colors and patterns for checking a monitor, laptop, TV or phone display.',
  'hardware-tests': 'Quick checks for the microphone, keyboard, webcam and mouse, and a checklist for buying a used laptop.',
  guides: 'Step-by-step guides for testing a monitor properly, and a calculator for comparing screens before you buy.',
};

export default function ToolsPage() {
  return (
    <>
      <section className="pb-4 pt-8 md:pt-12">
        <div className="container max-w-4xl">
          <h1 className="mb-4 text-4xl md:text-5xl">All Free Screen and Hardware Tests</h1>
          <p className="text-lg text-slate-300">
            Every test on TestaScreen runs in your browser, with nothing to install and nothing uploaded. Not sure where
            to start with a monitor? The <Link href="/monitor-test">complete monitor test</Link> walks you through the
            screen tests in the right order.
          </p>
          <nav aria-label="Tool groups" className="mt-6 flex flex-wrap gap-3">
            {TOOL_GROUPS.map((group) => (
              <a key={group.id} href={`#${group.id}`} className="btn btn-secondary btn-sm focus-ring">
                {group.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {TOOL_GROUPS.map((group) => (
        <section key={group.id} aria-labelledby={group.id} className="py-8 md:py-10">
          <div className="container">
            <h2 id={group.id} className="mb-2 scroll-mt-24 text-2xl md:text-3xl">
              {group.title}
            </h2>
            <p className="mb-6 max-w-3xl text-slate-300">{GROUP_INTROS[group.id]}</p>
            <ul className="grid list-none gap-4 pl-0 sm:grid-cols-2 lg:grid-cols-3">
              {group.entries.map((tool) => (
                <li key={tool.path} className="mb-0">
                  <Link
                    href={tool.path}
                    className="group block h-full rounded-xl border border-slate-700 bg-slate-900/60 p-5 text-slate-100 transition-colors hover:border-[#00DC82]/60 focus-ring"
                  >
                    <h3 className="mb-1 text-lg font-semibold group-hover:text-[#00DC82]">{tool.name}</h3>
                    <p className="mb-0 text-sm leading-relaxed text-slate-300">{tool.blurb}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
