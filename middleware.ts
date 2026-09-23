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
  const hasLocalePrefix = SUPPORTED_LOCALES.some(
    (locale) =>
      locale !== DEFAULT_LOCALE &&
      (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
  );

  if (hasLocalePrefix) {
    // Deliberately NOT setting the preferred-locale cookie here. This used
    // to write a 1-year cookie on every visit to a prefixed URL, including
    // ones the visitor was auto-redirected to below purely from a header
    // guess - one ambiguous Accept-Language parse and a visitor was
    // silently locked into that language for a year with no visible cause
    // ("was on English, clicked a link, suddenly Spanish"). Explicit choice
    // is handled entirely client-side by LanguageSelector (which writes
    // this same cookie on an actual click) - landing on a prefixed URL by
    // any other means (redirect, direct link, bookmark) no longer creates
    // lasting stickiness, it just serves that URL's content as normal.
    return NextResponse.next();
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

  // 3. Only an explicit language choice (the cookie LanguageSelector sets
  // on click) sends a visitor to a localized URL. There is deliberately no
  // Accept-Language guessing and no user-agent check any more: the old code
  // skipped the redirect for anything that looked like a bot, so Googlebot
  // saw the English page it indexed while human visitors with a Dutch,
  // Spanish or German browser got bounced to a different (noindexed) URL -
  // the "sneaky redirect" / cloaking pattern in Google's spam policies.
  // Everyone now gets the URL they asked for unless they chose otherwise.
  let userLocale = DEFAULT_LOCALE;
  const cookieLocale = SUPPORTED_LOCALES.find((locale) => locale === preferredLocaleCookie);
  if (cookieLocale) {
    userLocale = cookieLocale;
  }

  // 4. Send visitors who explicitly picked another language to that version
  if (userLocale !== DEFAULT_LOCALE && !pathname.includes('.')) {
    // For the homepage, pathname is '/', so naively appending it produces
    // '/nl/' (trailing slash). Next.js's default trailingSlash:false then
    // issues a SECOND redirect from '/nl/' to '/nl', adding a full extra
    // round trip to the critical request chain for every first-time
    // non-English mobile visitor. Target '/nl' directly to skip that hop -
    // same final URL, one less redirect.
    const suffix = pathname === '/' ? '' : pathname;
    return NextResponse.redirect(new URL(`/${userLocale}${suffix}`, request.url));
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
