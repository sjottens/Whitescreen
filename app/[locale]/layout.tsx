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
 * Pre-render every locale, English included. English is served at the root
 * (/about) through a middleware rewrite to /en/about, so /en/* has to be
 * built too - leaving it out made the only indexed language render on
 * demand after every deploy. No duplicate content: the public /en/* URL
 * still 301s to the root in middleware.
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
      <div className="h-[72px] md:h-[76px]" aria-hidden="true" />
      <main id="main-content" className="flex-1 w-full">
        {children}
      </main>
      <Footer locale={locale} />
    </div>
  );
}
