// app/[locale]/layout.tsx - Locale-aware layout with Header/Footer

import { ReactNode } from 'react';
import { Metadata } from 'next';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { getLocaleFromParams, isValidLocale, DEFAULT_LOCALE } from '@/lib/i18n';
import { SITE_NAME } from '@/lib/constants';

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

// Metadata for locale-specific layout
// This enables proper metadata rendering for all locale-specific pages
export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);
  
  return {
    title: {
      template: `%s | ${SITE_NAME}`,
      default: `${SITE_NAME}`,
    },
  };
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
