// middleware.ts - Clean multilingual routing without duplicates
// ARCHITECTURE:
// - ROOT = English: /, /white-screen, /tools, /about, etc.
// - OTHER: /nl/, /nl/white-screen, /nl/tools, /nl/about, etc.
// - NO /en/ prefix to avoid duplicate content
// - Rewrite root paths to [locale] route with locale=en
// - All canonicals and hreflang handled automatically

import { NextRequest, NextResponse } from 'next/server';
import { LOCALES } from '@/lib/i18n';

const SUPPORTED_LOCALES = LOCALES;
const DEFAULT_LOCALE = 'en';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 1. Check if already has non-English locale prefix
  const hasLocalePrefix = SUPPORTED_LOCALES.some(
    (locale) =>
      locale !== DEFAULT_LOCALE &&
      (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
  );

  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  // 2. REJECT /en/ prefix (prevent duplicate content)
  if (pathname.startsWith('/en/') || pathname === '/en') {
    return NextResponse.redirect(new URL(pathname.replace(/^\/en/, '') || '/', request.url), { status: 301 });
  }

  // 3. Get user's preferred locale for root paths
  const acceptLanguage = request.headers.get('accept-language') ?? '';
  const isCrawler = /bot|crawl|spider|googlebot|bingbot|scraper/i.test(
    request.headers.get('user-agent') ?? ''
  );

  let userLocale = DEFAULT_LOCALE;

  if (!isCrawler) {
    const [primaryLang] = acceptLanguage.split(',')[0].split('-');
    const localeMatch = SUPPORTED_LOCALES.find(
      (locale) => locale === primaryLang && locale !== DEFAULT_LOCALE
    );
    if (localeMatch) {
      userLocale = localeMatch;
    }
  }

  // 4. Redirect non-English users to their locale, unless already on root English
  if (userLocale !== DEFAULT_LOCALE && !pathname.includes('.')) {
    return NextResponse.redirect(new URL(`/${userLocale}${pathname}`, request.url));
  }

  // 5. Rewrite root paths to [locale] route with locale=en
  // This allows /white-screen, /tools, etc. to work as English pages
  // The [locale] layout will receive 'en' from this rewrite
  return NextResponse.rewrite(new URL(`/en${pathname}`, request.url));
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|favicon.svg|robots.txt|sitemap.xml|site.webmanifest|og-image.png).*)',
  ],
};
