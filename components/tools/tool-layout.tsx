// components/tools/tool-layout.tsx - Reusable tool page layout component

import { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { LinkButton } from '@/components/ui/button';

interface ToolLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  relatedTools?: Array<{ name: string; path: string; color?: string }>;
  features?: string[];
  useCases?: string[];
}

export default function ToolLayout({
  title,
  description,
  children,
  relatedTools = [],
  features = [],
  useCases = [],
}: ToolLayoutProps) {
  return (
    <>
      {/* Header Bar */}
      <div className="sticky top-20 z-30 bg-white border-b border-slate-200 backdrop-blur-sm bg-opacity-95">
        <div className="container py-3">
          <div className="flex items-center justify-between">
            <Link href="/tools" className="btn btn-ghost btn-sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tools
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
              <h2 className="text-3xl font-bold mb-6">How to Use</h2>
              <ol className="space-y-4 text-lg text-slate-700">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </span>
                  <span>Click the tool above or press the fullscreen button</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </span>
                  <span>Press F, Space, or click the fullscreen icon</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </span>
                  <span>Press ESC to exit fullscreen and return to this page</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </span>
                  <span>Click Download to save as PNG or customize resolution</span>
                </li>
              </ol>
            </div>

            {/* Features */}
            {features.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Features</h2>
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
                <h2 className="text-3xl font-bold mb-6">Use Cases</h2>
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
              <h2 className="text-3xl font-bold mb-6">Keyboard Shortcuts</h2>
              <div className="bg-slate-50 rounded-lg p-6">
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Fullscreen Mode:</span>
                    <kbd className="bg-white border border-slate-200 rounded px-2 py-1">F</kbd>
                    <kbd className="bg-white border border-slate-200 rounded px-2 py-1">Space</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Exit Fullscreen:</span>
                    <kbd className="bg-white border border-slate-200 rounded px-2 py-1">ESC</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Download:</span>
                    <kbd className="bg-white border border-slate-200 rounded px-2 py-1">Ctrl + S</kbd>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Tools */}
            {relatedTools.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedTools.map((tool, index) => (
                    <Link
                      key={index}
                      href={tool.path}
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
            <div>
              <h2 className="text-3xl font-bold mb-6">FAQ</h2>
              <div className="space-y-4">
                <details className="group card cursor-pointer">
                  <summary className="flex items-center justify-between font-semibold">
                    Is this tool compatible with my device?
                    <span className="group-open:rotate-180 transition-transform">↓</span>
                  </summary>
                  <p className="mt-3 text-slate-600">
                    Yes! Our tool works on all modern devices including smartphones, tablets, and desktop computers. It works across all browsers.
                  </p>
                </details>
                <details className="group card cursor-pointer">
                  <summary className="flex items-center justify-between font-semibold">
                    Can I use this offline?
                    <span className="group-open:rotate-180 transition-transform">↓</span>
                  </summary>
                  <p className="mt-3 text-slate-600">
                    Yes! Once the page loads, the tool works offline. We support PWA installation for a native app experience.
                  </p>
                </details>
                <details className="group card cursor-pointer">
                  <summary className="flex items-center justify-between font-semibold">
                    How can I share this tool?
                    <span className="group-open:rotate-180 transition-transform">↓</span>
                  </summary>
                  <p className="mt-3 text-slate-600">
                    Click the share button at the top of the page to share directly to social media or copy the link to share manually.
                  </p>
                </details>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Explore More Tools</h3>
              <LinkButton href="/tools" variant="primary" size="lg">
                View All {relatedTools.length + 1}+ Tools
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
