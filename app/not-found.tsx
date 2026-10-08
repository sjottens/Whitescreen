// app/not-found.tsx - 404 page. Rendered by the root layout only, so it
// brings its own header and footer. Next serves it with a 404 status and the
// robots meta below keeps it out of the index; styles live under .nf-* in
// globals.css.

import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ToolCards from '@/components/hardware/tool-cards';

export const metadata: Metadata = {
  title: 'Page not found',
  description: "This page doesn't exist. Try one of the free screen, microphone, keyboard, webcam and click speed tests instead.",
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
};

// Test-pattern bars, left to right.
const BARS = ['#c0c0c0', '#c0c000', '#00c0c0', '#00c000', '#c000c0', '#c00000', '#0000c0'];

// "Dead pixels" scattered over the screen, as [left %, top %].
const DEAD_PIXELS = [[18, 22], [71, 14], [44, 78], [86, 63], [9, 70]];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="h-[72px] md:h-[76px]" aria-hidden="true" />
      <main id="main-content" className="flex-1">
        <section className="container flex flex-col items-center py-12 text-center md:py-20">
          <div className="nf-monitor" aria-hidden="true">
            <div className="nf-screen">
              <div className="nf-bars">
                {BARS.map((color) => (
                  <span key={color} style={{ background: color }} />
                ))}
              </div>
              <div className="nf-scanlines" />
              {DEAD_PIXELS.map(([left, top]) => (
                <span key={`${left}-${top}`} className="nf-dead-pixel" style={{ left: `${left}%`, top: `${top}%` }} />
              ))}
              <div className="nf-code" data-text="404">404</div>
              <div className="nf-no-signal">NO SIGNAL</div>
            </div>
            <div className="nf-stand" />
            <div className="nf-base" />
          </div>

          <h1 className="mb-4 mt-10 animate-none text-3xl md:text-5xl lg:text-5xl">
            This page lost its signal
          </h1>
          <p className="mb-8 max-w-xl text-lg text-slate-300">
            The link might be old, or there&apos;s a typo in the address. No dead pixels on your
            screen, though, just a page that doesn&apos;t exist.
          </p>
          <Link href="/" className="btn btn-primary btn-lg focus-ring gap-2 px-8">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 11.5 12 4l9 7.5" />
              <path d="M5.5 9.5V20h13V9.5" />
              <path d="M10 20v-5.5h4V20" />
            </svg>
            Back to the homepage
          </Link>
        </section>

        <section className="container pb-16 md:pb-24">
          <h2 className="mb-6 text-2xl md:text-3xl">Or jump straight into a test</h2>
          <ToolCards headingLevel="h3" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
