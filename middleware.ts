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
  const preferredLocaleCookie = request.cookies.get('preferred-locale')?.value;

  // 1. Check if already has non-English locale prefix
  const matchedLocalePrefix = SUPPORTED_LOCALES.find(
    (locale) =>
      locale !== DEFAULT_LOCALE &&
      (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
  );

  if (matchedLocalePrefix) {
    const response = NextResponse.next();
    response.cookies.set('preferred-locale', matchedLocalePrefix, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });
    return response;
  }

  // 2. REJECT /en/ prefix (prevent duplicate content)
  // Hard reject: 301 redirect all /en/* paths to canonical root paths
  if (pathname.startsWith('/en/') || pathname === '/en') {
    const redirectPath = pathname.replace(/^\/en/, '') || '/';
    const response = NextResponse.redirect(new URL(redirectPath, request.url), { status: 301 });
    // Add X-Robots-Tag as redundant safety to prevent Google from indexing this redirect
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    response.cookies.set('preferred-locale', DEFAULT_LOCALE, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });
    return response;
  }

  // 3. Get user's preferred locale for root paths
  const acceptLanguage = request.headers.get('accept-language') ?? '';
  const isCrawler = /bot|crawl|spider|googlebot|bingbot|scraper/i.test(
    request.headers.get('user-agent') ?? ''
  );

  let userLocale = DEFAULT_LOCALE;

  const cookieLocale = SUPPORTED_LOCALES.find((locale) => locale === preferredLocaleCookie);
  if (cookieLocale) {
    userLocale = cookieLocale;
  }

  if (!isCrawler && !cookieLocale) {
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

  // 5. Skip rewrite for /blog and /blog/* (handled by app/blog/ directly)
  // This allows /blog and /blog/[slug] pages with Metadata to be served directly
  if (pathname === '/blog' || pathname.startsWith('/blog/')) {
    return NextResponse.next();
  }

  // 6. Rewrite root paths to [locale] route with locale=en
  // This allows /white-screen, /tools, etc. to work as English pages
  // The [locale] layout will receive 'en' from this rewrite
  return NextResponse.rewrite(new URL(`/en${pathname}`, request.url));
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|favicon.svg|ads.txt|robots.txt|sitemap.xml|site.webmanifest|og-image.png).*)',
  ],
};
