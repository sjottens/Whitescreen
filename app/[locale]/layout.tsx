// app/[locale]/layout.tsx - Locale-aware layout with Header/Footer

import { ReactNode } from 'react';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { getLocaleFromParams, LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

/**
 * Generate static params for all supported locales EXCEPT the default locale
 * English pages are served at root (e.g., /about), not /en/about
 * This prevents duplicate content issues: only /nl/about, /es/about, etc. are generated
 * Tells Next.js to pre-render pages for nl, es, de (NOT en)
 */
export function generateStaticParams() {
  return LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = await getLocaleFromParams(params);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header locale={locale} />
      <div className="h-[72px] md:h-[76px]" aria-hidden="true" />
      <main id="main-content" className="flex-1 w-full">
        {children}
      </main>
      <Footer locale={locale} />
    </div>
  );
}
