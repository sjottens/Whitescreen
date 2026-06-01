// middleware.ts - Internationalized routing with hidden default locale
// Routes: / (English), /nl/, /es/, /de/, /fr/, /it/, /pt/, /ja/
// English is never prefixed with /en/ to avoid duplicate content
// Crawlers get root content without redirect

import { NextRequest, NextResponse } from 'next/server';

const SUPPORTED_LOCALES = ['en', 'nl', 'es', 'de', 'fr', 'it', 'pt', 'ja'];
const DEFAULT_LOCALE = 'en';

// Paths that require locale handling
const LOCALIZED_PATHS = [
  '/tools',
  '/about',
  '/contact', 
  '/privacy',
  '/faq',
  '/terms',
];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname already has a non-default locale prefix
  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => 
      locale !== DEFAULT_LOCALE && 
      (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
  );

  // If it has a non-default locale prefix, proceed
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Check if trying to access /en/* - this should not exist
  const isEnglishPrefix = pathname.startsWith('/en/') || pathname === '/en';
  if (isEnglishPrefix) {
    // Rewrite /en/... to root path for internal handling
    const newPathname = pathname === '/en' ? '/' : pathname.replace(/^\/en/, '');
    return NextResponse.rewrite(new URL(newPathname, request.url));
  }

  // Check if this is a localized path that needs routing
  const isLocalizedPath = LOCALIZED_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + '/')
  );

  if (isLocalizedPath) {
    // Get user's preferred locale
    const acceptLanguage = request.headers.get('accept-language') ?? '';
    const isCrawler = /bot|crawl|spider|googlebot|bingbot/i.test(request.headers.get('user-agent') ?? '');
    
    let targetLocale = DEFAULT_LOCALE;

    // Only check Accept-Language for non-crawlers
    if (!isCrawler) {
      if (acceptLanguage.startsWith('nl')) {
        targetLocale = 'nl';
      } else if (acceptLanguage.startsWith('es')) {
        targetLocale = 'es';
      } else if (acceptLanguage.startsWith('de')) {
        targetLocale = 'de';
      } else if (acceptLanguage.startsWith('fr')) {
        targetLocale = 'fr';
      } else if (acceptLanguage.startsWith('it')) {
        targetLocale = 'it';
      } else if (acceptLanguage.startsWith('pt')) {
        targetLocale = 'pt';
      } else if (acceptLanguage.startsWith('ja')) {
        targetLocale = 'ja';
      }
    }

    // For non-default locales, redirect to locale-prefixed path
    if (targetLocale !== DEFAULT_LOCALE) {
      return NextResponse.redirect(new URL(`/${targetLocale}${pathname}`, request.url));
    }

    // English: serve on root by internally adding locale to route
    // The [locale] layout will receive 'en' as default
    return NextResponse.next();
  }

  // Non-localized paths (/, /screen/*, /monitor-test/*, etc.)
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except those that should skip middleware
    '/((?!api|_next/static|_next/image|favicon.ico|favicon.svg|robots.txt|sitemap.xml|site.webmanifest|og-image.png).*)',
  ],
};
