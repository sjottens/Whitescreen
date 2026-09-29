// app/not-found.tsx - 404 page. Rendered by the root layout only, so it
// brings its own header and footer.

import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ToolCards from '@/components/hardware/tool-cards';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header locale="en" />
      <div className="h-[72px] md:h-[76px]" aria-hidden="true" />
      <main id="main-content" className="flex-1">
        <div className="container py-12 md:py-20">
          <h1 className="mb-4 animate-none text-3xl md:text-5xl lg:text-5xl">This page doesn&apos;t exist</h1>
          <p className="mb-8 max-w-2xl text-lg text-slate-300">
            The link might be old, or there&apos;s a typo in the address. Here&apos;s what you can test instead:
          </p>
          <ToolCards headingLevel="h2" />
        </div>
      </main>
      <Footer locale="en" />
    </div>
  );
}
