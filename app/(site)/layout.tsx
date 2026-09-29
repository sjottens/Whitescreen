// app/(site)/layout.tsx - Header and footer around every page of the site

import { ReactNode } from 'react';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <div className="h-[72px] md:h-[76px]" aria-hidden="true" />
      <main id="main-content" className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
