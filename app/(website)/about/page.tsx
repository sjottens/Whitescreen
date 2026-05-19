// app/(website)/about/page.tsx - About page with company information

import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, breadcrumbSchema } from '@/lib/seo';
import { LinkButton } from '@/components/ui/button';

export const metadata: Metadata = generateSEOMetadata({
  title: 'About Screenglow',
  description:
    'Learn about Screenglow, our mission to provide elite screen testing tools, and how we\'re helping millions of users worldwide.',
  path: '/about',
});

export default function AboutPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">About Screenglow</h1>
          <p className="text-2xl text-slate-600 leading-relaxed">
            Built by engineers and designers who believe screen testing should be easy, fast, and accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We created Screenglow because we were frustrated with complicated, slow, and unreliable display testing tools. Our mission is to
              provide the world with the fastest, most intuitive, and most comprehensive screen testing platform.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Today, our tools are used by millions of photographers, videographers, gamers, and tech enthusiasts in over 150 countries. We're proud
              to power the professional and casual testing needs of our global community.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Performance',
                description: 'Lightning-fast load times and optimized performance on every device.',
              },
              {
                title: 'Privacy',
                description: 'Your data is yours. No tracking, no cookies, no compromises.',
              },
              {
                title: 'Accessibility',
                description: 'Tools accessible to everyone, regardless of ability or device.',
              },
              {
                title: 'Quality',
                description: 'Obsessive attention to detail and professional-grade tool quality.',
              },
              {
                title: 'Free & Open',
                description: '100% free access to all tools. No hidden fees or paywalls.',
              },
              {
                title: 'Community',
                description: 'Built for and by the community. Your feedback shapes our future.',
              },
              {
                title: 'Innovation',
                description: 'Constantly improving with new tools and advanced features.',
              },
              {
                title: 'Reliability',
                description: '99.99% uptime and consistent performance you can depend on.',
              },
            ].map((value, index) => (
              <div key={index} className="card text-center">
                <h3 className="text-xl font-bold mb-3 text-cyan-600">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '30M+', label: 'Monthly Active Users' },
              { number: '150+', label: 'Countries' },
              { number: '30+', label: 'Professional Tools' },
              { number: '99.99%', label: 'Uptime' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-cyan-600 mb-2">{stat.number}</div>
                <p className="text-lg text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-alt">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Built by Experts</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                role: 'Frontend Engineering',
                description: 'Expert in React, Next.js, and performance optimization.',
              },
              {
                role: 'Design & UX',
                description: 'Crafting beautiful, intuitive interfaces for everyone.',
              },
              {
                role: 'DevOps & Infrastructure',
                description: 'Ensuring lightning-fast performance and 99.99% reliability.',
              },
            ].map((team, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold mb-3 text-slate-900">{team.role}</h3>
                <p className="text-slate-600">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section">
        <div className="container text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-slate-600 mb-8">
            Have questions about Screenglow? Want to collaborate or provide feedback? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton href="/contact" variant="primary" size="lg">
              Get in Touch
            </LinkButton>
            <LinkButton href="/white-screen" variant="outline" size="lg">
              Try Our Tools
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
