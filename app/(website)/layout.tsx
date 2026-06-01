// app/(website)/layout.tsx - Website layout with Header and Footer
// This wraps all website pages (not just locale-specific routes)
// Provides Header/Footer without duplication

import { ReactNode } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

interface WebsiteLayoutProps {
  children: ReactNode;
}

export default function WebsiteLayout({ children }: WebsiteLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header locale="en" />
      <main id="main-content" className="flex-1 w-full">
        {children}
      </main>
      <Footer locale="en" />
    </div>
  );
}
