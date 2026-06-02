// components/tools/tool-layout.tsx - Reusable tool page layout component with multilingual support

import { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { LinkButton } from '@/components/ui/button';
import { t } from '@/lib/translations';
import { getLocalizedPath } from '@/lib/link-utils';
import type { Locale } from '@/lib/i18n';

interface ToolLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  locale: Locale;
  toolName?: string;
  relatedTools?: Array<{ name: string; path: string; color?: string }>;
  features?: string[];
  useCases?: string[];
  faqs?: Array<{ question: string; answer: string }>;
}

export default function ToolLayout({
  title,
  description,
  children,
  locale,
  toolName,
  relatedTools = [],
  features = [],
  useCases = [],
  faqs = [],
}: ToolLayoutProps) {
  const translate = t(locale);

  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: translate('home'), path: getLocalizedPath(locale, '/') },
          { name: translate('tools'), path: getLocalizedPath(locale, '/tools') },
          { name: toolName || title },
        ]}
      />

      {/* Header Bar */}
      <div className="sticky top-20 z-30 bg-white border-b border-slate-200 backdrop-blur-sm bg-opacity-95">
        <div className="container py-3">
          <div className="flex items-center justify-between">
            <Link href={getLocalizedPath(locale, '/tools')} className="btn btn-ghost btn-sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {translate('back_to_tools')}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Tool Area */}
      <section className="section">
        <div className="container">
          {/* Tool Interface */}
          <div className="mb-16">
            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
              {children}
            </div>
          </div>

          {/* Tool Information */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Title and Description */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
              <p className="text-xl text-slate-600 leading-relaxed">{description}</p>
            </div>

            {/* How to Use */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{translate('how_to_use')}</h2>
              <ol className="space-y-4 text-lg text-slate-700">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </span>
                  <span>{translate('step_1')}</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </span>
                  <span>{translate('step_2')}</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </span>
                  <span>{translate('step_3')}</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </span>
                  <span>{translate('step_4')}</span>
                </li>
              </ol>
            </div>

            {/* Features */}
            {features.length > 0 && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">{translate('features')}</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mt-1">
                        ✓
                      </span>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Use Cases */}
            {useCases.length > 0 && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">{translate('use_cases')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="card">
                      <p className="text-slate-700 text-lg">{useCase}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Keyboard Shortcuts */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{translate('keyboard_shortcuts')}</h2>
              <div className="bg-slate-50 rounded-lg p-6">
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">{translate('fullscreen_mode')}:</span>
                    <kbd className="bg-white border border-slate-200 rounded px-2 py-1">F</kbd>
                    <kbd className="bg-white border border-slate-200 rounded px-2 py-1">Space</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">{translate('exit_fullscreen')}:</span>
                    <kbd className="bg-white border border-slate-200 rounded px-2 py-1">ESC</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">{translate('download_shortcut')}:</span>
                    <kbd className="bg-white border border-slate-200 rounded px-2 py-1">Ctrl + S</kbd>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Tools */}
            {relatedTools.length > 0 && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">{translate('related_tools')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedTools.map((tool, index) => (
                    <Link
                      key={index}
                      href={getLocalizedPath(locale, tool.path)}
                      className="card hover:shadow-lg transition-shadow group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-lg text-slate-900 group-hover:text-cyan-600 transition-colors">
                            {tool.name}
                          </h3>
                        </div>
                        {tool.color && (
                          <div
                            className="w-12 h-12 rounded-lg border-2 border-slate-200"
                            style={{ backgroundColor: tool.color }}
                          />
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ Section */}
            {faqs.length > 0 && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">{translate('faq')}</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group card cursor-pointer">
                      <summary className="flex items-center justify-between font-semibold">
                        {faq.question}
                        <span className="group-open:rotate-180 transition-transform">↓</span>
                      </summary>
                      <p className="mt-3 text-slate-600">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Explore More Tools</h3>
              <LinkButton href={getLocalizedPath(locale, '/tools')} variant="primary" size="lg">
                View All {relatedTools.length + 1}+ Tools
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
