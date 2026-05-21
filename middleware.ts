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

  // Root path should use default locale (en) without prefix
  if (pathname === '/') {
    return NextResponse.next();
  }

  // For all other paths (like /about, /tools, etc.), check if they start with supported locale
  // If not, prepend the default locale to the path
  // This creates the effect that English pages are at the root level
  
  // Actually, we want to be careful here. If someone visits /about, 
  // we should still serve them the English version but internally route it as /en/about
  // However, the URL should stay as /about (rewrite, not redirect)
  
  // For SEO purposes:
  // - English pages: served at root (/, /about, /tools, etc.)
  // - Dutch pages: served under /nl (/nl/, /nl/about, /nl/tools, etc.)
  
  // Check if this is a Dutch or Spanish request by checking Accept-Language header
  // BUT: Don't force this for crawlers - let them crawl what they want
  const acceptLanguage = request.headers.get('accept-language') ?? '';
  const isCrawler = /bot|crawl|spider|googlebot|bingbot/i.test(request.headers.get('user-agent') ?? '');
  
  // Only check Accept-Language for non-crawlers
  if (!isCrawler) {
    if (acceptLanguage.startsWith('nl')) {
      // User prefers Dutch, redirect to /nl equivalent
      return NextResponse.redirect(new URL(`/nl${pathname}`, request.url));
    }
    if (acceptLanguage.startsWith('es')) {
      // User prefers Spanish, redirect to /es equivalent
      return NextResponse.redirect(new URL(`/es${pathname}`, request.url));
    }
  }

  // For all other cases, serve with default locale (English at root level)
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except those that should skip middleware
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|og-image.png).*)',
  ],
};
