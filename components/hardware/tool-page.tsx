// components/hardware/tool-page.tsx - Shared layout for the hardware test pages.
//
// Order is fixed: H1 + intro, the tool (above the fold, also on mobile), ad 1,
// explainer, affiliate block, FAQ, ad 2, other tests. Everything here is
// server-rendered HTML; only the tool passed in as `tool` is a client component.

import type { ReactNode } from 'react';
import { AD_SLOTS, type HardwareToolId } from '@/lib/hardware-tools';
import { faqPageSchema, webApplicationSchema, type Faq } from '@/lib/tool-schema';
import type { TocItem } from '@/components/tools/guide-section';
import { AUTHOR } from '@/lib/author';
import Link from 'next/link';
import AdSlot from './ad-slot';
import AffiliateBlock from './affiliate-block';
import ToolCards from './tool-cards';

type ToolId = Exclude<HardwareToolId, 'screen-test'>;

interface ToolPageProps {
  toolId: ToolId;
  path: string;
  /** Name used in the WebApplication schema. */
  name: string;
  /** Meta description, reused in the WebApplication schema. */
  description: string;
  heading: string;
  intro: string;
  tool: ReactNode;
  /** The explainer (H2/H3 sections). */
  children: ReactNode;
  affiliate: { heading: string; text: string };
  /** The H2s in `children`, for the table of contents (the FAQ is added automatically). */
  toc: TocItem[];
  faqs: Faq[];
  /** Keep ad 1 at least 150px away from the tool (Click Speed Test). */
  adClearance?: boolean;
  /** Give the tool more room than the text column (Keyboard Test). */
  wideTool?: boolean;
}

export default function ToolPage({
  toolId,
  path,
  name,
  description,
  heading,
  intro,
  tool,
  children,
  affiliate,
  toc,
  faqs,
  adClearance = false,
  wideTool = false,
}: ToolPageProps) {
  const schemas = [webApplicationSchema({ name, description, path }), faqPageSchema(faqs)];
  const slots = AD_SLOTS[toolId];

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema['@type']}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className={`${wideTool ? 'mx-auto max-w-5xl px-4 md:px-6' : 'container-sm'} pt-6 md:pt-10`}>
        <h1 className="mb-3 animate-none text-3xl md:text-5xl lg:text-5xl">{heading}</h1>
        <p className="mb-6 text-base text-slate-300 md:text-lg">{intro}</p>
        {tool}
      </div>

      <AdSlot slot={slots.top} className={adClearance ? 'mt-40' : 'mt-10'} />

      <nav aria-labelledby="toc-heading" className="container-sm mt-12">
        <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-5">
          <h2 id="toc-heading" className="mb-3 text-lg font-semibold text-slate-100">
            On this page
          </h2>
          <ol className="list-decimal space-y-1 pl-5 text-slate-300">
            {[...toc, { id: 'faq-heading', label: 'Frequently Asked Questions' }].map((item) => (
              <li key={item.id} className="mb-0">
                <a href={`#${item.id}`} className="text-cyan-300 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <article className="tool-content container-sm mt-12 [&_h2]:scroll-mt-24">{children}</article>

      <AffiliateBlock tool={toolId} heading={affiliate.heading} text={affiliate.text} />

      <section aria-labelledby="faq-heading" className="container-sm mt-12">
        <h2 id="faq-heading" className="mb-4 scroll-mt-24 text-2xl md:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-xl border border-slate-700 bg-slate-900/60">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl p-4 font-semibold text-slate-100 focus-ring [&::-webkit-details-marker]:hidden">
                {faq.question}
                <svg
                  viewBox="0 0 20 20"
                  className="h-5 w-5 flex-shrink-0 text-slate-400 group-open:rotate-180"
                  aria-hidden="true"
                >
                  <path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="px-4 pb-4 text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <p className="container-sm mt-8 text-sm text-slate-400">
        Written by{' '}
        <Link href="/about#author" className="font-medium text-slate-200 underline-offset-2 hover:underline">
          {AUTHOR.name}
        </Link>
        , {AUTHOR.jobTitle.toLowerCase()}.
      </p>

      <AdSlot slot={slots.bottom} className="mt-12" />

      <section aria-labelledby="other-tests-heading" className="container mt-16 pb-16">
        <h2 id="other-tests-heading" className="mb-6 text-2xl md:text-3xl">
          Other tests
        </h2>
        <ToolCards exclude={toolId} />
      </section>
    </>
  );
}
