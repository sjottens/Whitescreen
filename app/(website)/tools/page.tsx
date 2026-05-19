// app/(website)/tools/page.tsx - All tools directory page with SEO optimization

import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata, breadcrumbSchema } from '@/lib/seo';
import { COLOR_TOOLS, TEST_TOOLS } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = generateSEOMetadata({
  title: 'All Tools Directory',
  description: 'Browse all screen testing, color display, and professional tools. 30+ free tools for display testing, photography, video production, and more.',
  path: '/tools',
  keywords: [
    'screen tools',
    'color screen tools',
    'display test tools',
    'free screen tools',
    'monitor testing',
  ],
});

export default function ToolsPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">All Tools</h1>
            <p className="text-xl text-slate-600">
              {COLOR_TOOLS.length + TEST_TOOLS.length}+ professional-grade tools for display testing, color
              calibration, photography lighting, and video production.
            </p>
          </div>
        </div>
      </section>

      {/* Color Tools Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-4xl font-bold mb-8">Color Screen Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {COLOR_TOOLS.map((tool) => (
              <Link
                key={tool.id}
                href={tool.path}
                className="group relative h-48 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: tool.color }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg">{tool.name}</h3>
                  <p className="text-white/80 text-sm">{tool.description}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Test Tools Section */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-4xl font-bold mb-8">Display Test Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {TEST_TOOLS.map((tool) => (
              <Link
                key={tool.id}
                href={tool.path}
                className="card group hover:bg-cyan-50 hover:border-cyan-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-slate-900 group-hover:text-cyan-600 transition-colors text-lg">
                    {tool.name}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-600 transition-transform group-hover:translate-x-1" />
                </div>
                <p className="text-slate-600 text-sm">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="section-alt">
        <div className="container text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">Start Testing Now</h2>
          <p className="text-lg text-slate-600 mb-8">
            All tools are completely free, require no registration, and work on any device. Pick your first tool and start testing instantly.
          </p>
          <Link href="/white-screen" className="btn btn-primary btn-lg">
            Try White Screen Tool
          </Link>
        </div>
      </section>
    </>
  );
}
