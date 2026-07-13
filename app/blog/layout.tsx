// app/blog/layout.tsx - English blog layout with Header/Footer

import { ReactNode } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header locale="en" />
      <div className="h-[72px] md:h-[76px]" aria-hidden="true" />
      <main id="main-content" className="flex-1 w-full">
        {children}
      </main>
      <Footer locale="en" />
    </div>
  );
}
