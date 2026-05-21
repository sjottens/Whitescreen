// middleware.ts - Internationalized routing with hidden default locale
// Routes: / (English) and /nl/ (Dutch)
// Does NOT force-redirect crawlers based on IP/browser language

import { NextRequest, NextResponse } from 'next/server';

const SUPPORTED_LOCALES = ['en', 'nl', 'es'];
const DEFAULT_LOCALE = 'en';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname already has a locale prefix
  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Check Accept-Language header to determine user's preferred locale
  const acceptLanguage = request.headers.get('accept-language') ?? '';
  const isCrawler = /bot|crawl|spider|googlebot|bingbot/i.test(request.headers.get('user-agent') ?? '');
  
  let targetLocale = DEFAULT_LOCALE;

  // Only check Accept-Language for non-crawlers
  if (!isCrawler) {
    if (acceptLanguage.startsWith('nl')) {
      targetLocale = 'nl';
    } else if (acceptLanguage.startsWith('es')) {
      targetLocale = 'es';
    }
  }

  // Redirect to the locale-prefixed path
  return NextResponse.redirect(new URL(`/${targetLocale}${pathname === '/' ? '' : pathname}`, request.url));
}

export const config = {
  matcher: [
    // Match all paths except those that should skip middleware
    '/((?!api|_next/static|_next/image|favicon.ico|favicon.svg|robots.txt|sitemap.xml|site.webmanifest|og-image.png).*)',
  ],
};
