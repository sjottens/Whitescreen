// app/page.tsx - Elite homepage with SEO optimization

import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Zap, Smartphone, Shield, Cpu } from 'lucide-react';
import { generateMetadata as generateSEOMetadata, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { COLOR_TOOLS, TEST_TOOLS, FAQ_ITEMS } from '@/lib/constants';
import { LinkButton } from '@/components/ui/button';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Screenglow - Free Screen Testing & Display Tools',
  description:
    'Elite free screen testing and display tools for photographers, videographers, gamers, and professionals. Test dead pixels, monitor colors, and more.',
  path: '/',
  keywords: [
    'white screen',
    'screen test',
    'dead pixel test',
    'monitor test',
    'free screen tools',
    'display test',
  ],
});

export default function HomePage() {
  // Schema data
  const faqData = faqSchema(FAQ_ITEMS);
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
  ]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-cyan-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Elite Screen Testing <span className="text-cyan-600">Tools</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
              Professional-grade display testing, dead pixel detection, and color calibration tools. Free, instant, and built for performance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <LinkButton href="/white-screen" size="lg" variant="primary" className="sm:w-auto">
                Start Testing <ArrowRight className="w-5 h-5 ml-2" />
              </LinkButton>
              <LinkButton href="/tools/tests" size="lg" variant="outline" className="sm:w-auto">
                View All Tools
              </LinkButton>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 justify-center text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>No Registration</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>30M+ Users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Grid */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Popular Tools</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Start with our most-used tools for display testing and color calibration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COLOR_TOOLS.slice(0, 4).map((tool) => (
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

          <div className="text-center mt-12">
            <LinkButton href="/tools" variant="outline" size="lg">
              Browse All {COLOR_TOOLS.length + TEST_TOOLS.length}+ Tools
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Why Choose Screenglow</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Optimized for speed. Lighthouse score 98+. Load in under 1 second.',
              },
              {
                icon: Smartphone,
                title: 'Mobile Perfect',
                description: 'Responsive design works flawlessly on phones, tablets, and desktops.',
              },
              {
                icon: Shield,
                title: 'Privacy First',
                description: 'No tracking, no registration, no cookies. Your data stays private.',
              },
              {
                icon: Cpu,
                title: 'Professional Grade',
                description: 'Used by photographers, video producers, and tech enthusiasts worldwide.',
              },
              {
                icon: Check,
                title: '100% Free',
                description: 'No hidden fees, no premium plans. Access all tools completely free.',
              },
              {
                icon: ArrowRight,
                title: 'Always Updated',
                description: 'Regular updates, new tools, and continuous improvements.',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card">
                  <Icon className="w-8 h-8 text-cyan-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Use Cases</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Display Testing',
                description: 'Check for dead pixels, uniformity, and color accuracy on any monitor or TV.',
                tools: ['Dead Pixel Test', 'Color Accuracy Test', 'Screen Uniformity Test'],
              },
              {
                title: 'Photography Lighting',
                description: 'Use your monitor as a professional fill light for product and studio photography.',
                tools: ['White Screen', 'Color Screen Tools', 'Zoom Lighting'],
              },
              {
                title: 'Video Production',
                description: 'Green and blue screens for chroma key effects in professional video work.',
                tools: ['Green Screen', 'Blue Screen', 'Gradient Screen'],
              },
              {
                title: 'Gaming & Performance',
                description: 'Test refresh rates, response times, and input lag for competitive gaming.',
                tools: ['Refresh Rate Test', 'Response Time Test', 'Input Lag Test'],
              },
              {
                title: 'Screen Cleaning',
                description: 'Display pure colors to easily spot dust and fingerprints for effective cleaning.',
                tools: ['Black Screen', 'White Screen', 'Pattern Generator'],
              },
              {
                title: 'Professional Calibration',
                description: 'Monitor calibration and color matching for design and video editing professionals.',
                tools: ['Color Accuracy Test', 'Brightness Test', 'Contrast Test'],
              },
            ].map((useCase, index) => (
              <div key={index} className="card-elevated">
                <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-slate-600 mb-6">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.tools.map((tool, i) => (
                    <span key={i} className="badge badge-primary">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Tools Section */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Browse All Tools</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            {COLOR_TOOLS.length + TEST_TOOLS.length}+ professional-grade tools for every use case
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[...COLOR_TOOLS, ...TEST_TOOLS].slice(0, 12).map((tool) => (
              <Link
                key={tool.id}
                href={tool.path}
                className="group card hover:bg-cyan-50 hover:border-cyan-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {tool.name}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 transition-transform group-hover:translate-x-0.5" />
                </div>
                <p className="text-slate-600 text-sm">{tool.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <LinkButton href="/tools" variant="outline" size="lg">
              See All {COLOR_TOOLS.length + TEST_TOOLS.length} Tools
            </LinkButton>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {FAQ_ITEMS.map((item, index) => (
              <details key={index} className="group card cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-slate-900 group-open:text-cyan-600 transition-colors">
                  {item.question}
                  <span className="transform transition-transform group-open:rotate-180">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <LinkButton href="/faq" variant="outline">
              View More FAQs
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-alt">
        <div className="container max-w-2xl">
          <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-cyan-100 mb-8">
              Get weekly tips, new tools, and monitor technology insights delivered to your inbox.
            </p>
            <form className="flex gap-3 flex-col sm:flex-row max-w-lg mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-slate-900 placeholder-slate-500 font-medium border-2 border-white focus:outline-none focus:border-slate-200 focus:ring-2 focus:ring-cyan-300 transition-all"
                required
              />
              <button
                type="submit"
                className="btn btn-primary bg-white text-cyan-600 hover:bg-slate-100 hover:text-cyan-800 font-semibold px-6 py-3 rounded-lg transition-all"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-cyan-100 mt-4">No spam, unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Test Your Display?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Choose your first tool and start testing in seconds. No registration required.
          </p>
          <LinkButton href="/white-screen" size="lg" className="text-lg px-8 py-4">
            Get Started Now <ArrowRight className="w-6 h-6 ml-3" />
          </LinkButton>
        </div>
      </section>
    </>
  );
}
