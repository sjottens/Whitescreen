// components/tools/guide-section.tsx - Everything below a screen tool: table of
// contents, the guide from lib/tool-guides.ts, any page-specific explainer
// (children), the FAQ with its FAQPage JSON-LD, and the author line.

import type { ReactNode } from 'react';
import Link from 'next/link';
import { AUTHOR } from '@/lib/author';
import { TOOL_GUIDES } from '@/lib/tool-guides';
import { TOOL_FAQS } from '@/lib/tool-faqs';
import { faqPageSchema } from '@/lib/tool-schema';
import { translate } from '@/lib/translations';

export interface TocItem {
  id: string;
  label: string;
}

interface GuideSectionProps {
  toolId: string;
  /** Page-specific explainer rendered between the guide and the FAQ. */
  children?: ReactNode;
  /** Table of contents entries for the headings inside `children`. */
  extraToc?: TocItem[];
}

// Guide text may contain [label](/path) links to other pages.
function withLinks(text: string): ReactNode[] {
  return text.split(/(\[[^\]]+\]\(\/[^)]*\))/).map((part, i) => {
    const link = /^\[([^\]]+)\]\((\/[^)]*)\)$/.exec(part);
    return link ? (
      <Link key={i} href={link[2]} className="font-medium text-cyan-700 underline underline-offset-2">
        {link[1]}
      </Link>
    ) : (
      part
    );
  });
}

export const slugify = (text: string) =>
  text.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export default function GuideSection({ toolId, children, extraToc = [] }: GuideSectionProps) {
  const guide = TOOL_GUIDES[toolId];
  const faqs = TOOL_FAQS[toolId] ?? [];
  if (!guide) return null;

  const toc: TocItem[] = [
    { id: 'what-is-this-test', label: translate('guide_what_is_test_title' as any) },
    ...guide.sections.map((section) => ({ id: slugify(section.title), label: section.title })),
    { id: 'testing-tips', label: translate('guide_testing_tips_title' as any) },
    ...(guide.howItWorks ? [{ id: 'how-this-test-works', label: 'How this test works' }] : []),
    ...extraToc,
    ...(faqs.length ? [{ id: 'faq', label: 'Frequently Asked Questions' }] : []),
  ];

  return (
    <>
      <div className="container mx-auto px-4 pt-4">
        <nav aria-labelledby="toc-heading" className="rounded-xl border border-slate-700 bg-slate-900/60 p-5 md:p-6">
          <h2 id="toc-heading" className="mb-3 text-lg font-semibold text-slate-100 md:text-xl">
            On this page
          </h2>
          <ol className="grid list-decimal gap-x-8 gap-y-1 pl-5 text-slate-300 md:grid-cols-2">
            {toc.map((item) => (
              <li key={item.id} className="mb-0">
                <a href={`#${item.id}`} className="text-cyan-300 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-b from-slate-50 to-white rounded-xl p-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">{translate('guide_how_to_use_title' as any)}</h2>

          {/* What is section */}
          <div className="mb-8">
            <h3 id="what-is-this-test" className="scroll-mt-24 text-xl font-semibold text-slate-800 mb-4">
              {translate('guide_what_is_test_title' as any)}
            </h3>
            <p className="text-slate-700 leading-relaxed">{withLinks(guide.whatIs)}</p>
          </div>

          {/* Main sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {guide.sections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 id={slugify(section.title)} className="scroll-mt-24 text-xl font-semibold text-slate-800">
                  {section.title}
                </h3>
                {section.items ? (
                  <ul className="text-slate-700 space-y-2">
                    {section.items.map((item) => (
                      <li key={item}>
                        <strong>{item.split(':')[0]}:</strong>
                        {item.includes(':') ? withLinks(item.split(':').slice(1).join(':')) : ''}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-700">{section.description}</p>
                )}
              </div>
            ))}
          </div>

          {/* Tips section */}
          <div className="pt-8 border-t border-slate-200">
            <h3 id="testing-tips" className="scroll-mt-24 text-xl font-semibold text-slate-800 mb-4">
              {translate('guide_testing_tips_title' as any)}
            </h3>
            <ul className="text-slate-700 space-y-3 grid md:grid-cols-2 gap-4">
              {guide.tips.map((tip) => (
                <li key={tip} className="flex items-start">
                  <span className="text-cyan-600 mr-3 font-bold">•</span>
                  <span>{withLinks(tip)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Keyboard shortcuts section (if available) */}
          {guide.shortcuts && guide.shortcuts.length > 0 && (
            <div className="mt-8 pt-8 border-t border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{translate('keyboard_shortcuts')}</h3>
              <div className="grid md:grid-cols-2 gap-4 text-slate-700">
                {guide.shortcuts.map((shortcut) => (
                  <div key={shortcut.key} className="flex items-center">
                    <span className="bg-slate-200 text-slate-900 px-3 py-1 rounded font-mono font-semibold mr-3">
                      {shortcut.key}
                    </span>
                    <span>{shortcut.description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {guide.howItWorks && (
            <div className="mt-8 pt-8 border-t border-slate-200">
              <h3 id="how-this-test-works" className="scroll-mt-24 text-xl font-semibold text-slate-800 mb-4">
                How this test works
              </h3>
              <p className="text-slate-700 leading-relaxed">{withLinks(guide.howItWorks)}</p>
            </div>
          )}

          {/* Pro tip section */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-slate-700 text-sm leading-relaxed">
              <strong className="text-cyan-700">{translate('guide_pro_tip_label' as any)}:</strong> {withLinks(guide.proTip)}
            </p>
          </div>
        </div>
      </div>

      {children}

      {faqs.length > 0 && (
        <section aria-labelledby="faq" className="container mx-auto px-4 pb-12">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />
          <h2 id="faq" className="scroll-mt-24 mb-4 text-2xl md:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-slate-700 bg-slate-900/60">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl p-4 font-semibold text-slate-100 focus-ring [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <svg viewBox="0 0 20 20" className="h-5 w-5 flex-shrink-0 text-slate-400 group-open:rotate-180" aria-hidden="true">
                    <path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="px-4 pb-4 text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <p className="container mx-auto px-4 pb-12 text-sm text-slate-400">
        Written by{' '}
        <Link href="/about#author" className="font-medium text-slate-200 underline-offset-2 hover:underline">
          {AUTHOR.name}
        </Link>
        , {AUTHOR.jobTitle.toLowerCase()}.
      </p>
    </>
  );
}
