// app/[locale]/layout.tsx - Locale-aware layout with Header/Footer

import { ReactNode } from 'react';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { getLocaleFromParams, LOCALES } from '@/lib/i18n';

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

/**
 * Generate static params for all supported locales
 * Tells Next.js to pre-render pages for en, nl, es, de, fr, it, pt, ja
 */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = await getLocaleFromParams(params);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header locale={locale} />
      <main id="main-content" className="flex-1 w-full">
        {children}
      </main>
      <Footer locale={locale} />
    </div>
  );
}
