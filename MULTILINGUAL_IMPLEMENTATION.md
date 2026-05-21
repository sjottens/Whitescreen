# Multilingual SEO Architecture - Implementation Guide

## Overview

This guide provides complete instructions for implementing the multilingual SEO architecture for your Next.js 15 application supporting English (default) and Dutch (nl) languages.

## ✅ Completed Components

### 1. Middleware (`middleware.ts`)
- ✅ Handles internationalized routing
- ✅ Routes English to root level (no /en/ prefix)
- ✅ Routes Dutch to /nl/ prefix
- ✅ Does NOT force-redirect crawlers by IP/language preference

### 2. Locale Utilities (`lib/i18n.ts`)
- ✅ Type-safe locale handling
- ✅ Hreflang alternate link generation
- ✅ Canonical URL generation
- ✅ OpenGraph locale mapping
- ✅ Async params handling for Next.js 15

### 3. SEO Utilities (`lib/seo.ts` - Enhanced)
- ✅ Multilingual metadata generation
- ✅ Multilingual breadcrumb schema
- ✅ Multilingual sitemap support

### 4. Link Utilities (`lib/link-utils.ts`)
- ✅ Locale-aware path generation
- ✅ Path parsing utilities
- ✅ Language switcher helpers

### 5. Layouts & Pages
- ✅ `app/[locale]/layout.tsx` - Root locale layout with dynamic metadata
- ✅ `app/[locale]/page.tsx` - Homepage with locale support
- ✅ `app/[locale]/(tools)/layout.tsx` - Tools section layout
- ✅ `app/[locale]/(tools)/white-screen/page.tsx` - White screen tool (template)
- ✅ `app/[locale]/(website)/layout.tsx` - Website section layout
- ✅ `app/[locale]/(website)/about/page.tsx` - About page (template)

### 6. Sitemap
- ✅ `app/sitemap.ts` - Multilingual sitemap with hreflang support

## 📋 Remaining Pages to Create

### Tool Pages (13 total)

Create the following pages in `app/[locale]/(tools)/`:

1. **black-screen/page.tsx**
2. **red-screen/page.tsx**
3. **blue-screen/page.tsx**
4. **green-screen/page.tsx**
5. **pink-screen/page.tsx**
6. **purple-screen/page.tsx**
7. **orange-screen/page.tsx**
8. **yellow-screen/page.tsx**
9. **dead-pixel-test/page.tsx**
10. **brightness-test/page.tsx**
11. **contrast-test/page.tsx**
12. **zoom-lighting/page.tsx**

### Website Pages (4 total)

Create the following pages in `app/[locale]/(website)/`:

1. **contact/page.tsx**
2. **faq/page.tsx**
3. **privacy/page.tsx**
4. **tools/page.tsx** (tools listing page)

## 🎯 Page Template Pattern

### For Tool Pages

```typescript
// app/[locale]/(tools)/[tool-slug]/page.tsx

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import ScreenDisplay from '@/components/tools/screen-display';

// Tool configuration
const TOOL_ID = 'tool-slug';
const TOOL_NAME = 'Tool Display Name';
const TOOL_DESCRIPTION = 'Detailed description of what this tool does...';
const TOOL_PATH = '/tool-slug';
const KEYWORDS = ['keyword1', 'keyword2', 'keyword3'];

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);

  return generateMultilingualMetadata({
    locale,
    title: TOOL_NAME,
    description: TOOL_DESCRIPTION,
    path: TOOL_PATH,
    keywords: KEYWORDS,
  });
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ToolPage({ params }: PageProps) {
  const locale = await getLocaleFromParams(params);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: 'Home', path: '/' },
      { name: 'Tools', path: '/tools' },
      { name: TOOL_NAME, path: TOOL_PATH },
    ],
    locale
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />
      <ScreenDisplay color="#HEXCOLOR" toolId={TOOL_ID} toolName={TOOL_NAME} />
    </>
  );
}
```

### For Website Pages

```typescript
// app/[locale]/(website)/[page-slug]/page.tsx

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);

  return generateMultilingualMetadata({
    locale,
    title: 'Page Title',
    description: 'Page description...',
    path: '/page-slug',
    keywords: ['keyword1', 'keyword2'],
  });
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Page({ params }: PageProps) {
  const locale = await getLocaleFromParams(params);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: 'Home', path: '/' },
      { name: 'Page Title', path: '/page-slug' },
    ],
    locale
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />
      
      {/* Page content */}
    </>
  );
}
```

## 🔗 Component Updates

### Navigation & Links

Update any components that generate links to use locale-aware paths:

```typescript
import { getLocalizedPath } from '@/lib/link-utils';

// In your component:
const href = getLocalizedPath(locale, '/white-screen');
// For en: /white-screen
// For nl: /nl/white-screen
```

### Header/Navigation Component Example

```typescript
interface NavigationProps {
  locale: Locale;
}

export function Navigation({ locale }: NavigationProps) {
  return (
    <nav>
      <Link href={getLocalizedPath(locale, '/')}>Home</Link>
      <Link href={getLocalizedPath(locale, '/tools')}>Tools</Link>
      <Link href={getLocalizedPath(locale, '/about')}>About</Link>
    </nav>
  );
}
```

## 🌍 URL Structure

### Final URLs

**English (Default):**
- `https://screenglow.eu/` - Home
- `https://screenglow.eu/white-screen` - Tool
- `https://screenglow.eu/about` - About page
- `https://screenglow.eu/contact` - Contact page

**Dutch:**
- `https://screenglow.eu/nl/` - Home
- `https://screenglow.eu/nl/white-screen` - Tool
- `https://screenglow.eu/nl/about` - About page
- `https://screenglow.eu/nl/contact` - Contact page

## ✅ SEO Verification Checklist

After implementing all pages, verify:

- [ ] **Canonical URLs**: Each page has a self-referencing canonical URL
- [ ] **Hreflang Tags**: All pages include `<link rel="alternate" hreflang="...">` for all locales
- [ ] **x-default**: Hreflang includes `x-default` pointing to English root
- [ ] **HTML lang**: Root `<html lang={locale}>` is dynamic
- [ ] **OpenGraph**: `og:locale` is set correctly per page
- [ ] **Sitemap**: `sitemap.xml` includes all locale variants with hreflang
- [ ] **Metadata**: All pages export proper `generateMetadata` functions
- [ ] **Breadcrumbs**: Structured data uses locale-aware URLs
- [ ] **Robots**: `robots.txt` allows crawling of all locale variants

## 🚀 Testing

### Test English Pages (Default)
```
http://localhost:3000/
http://localhost:3000/white-screen
http://localhost:3000/about
```

### Test Dutch Pages
```
http://localhost:3000/nl/
http://localhost:3000/nl/white-screen
http://localhost:3000/nl/about
```

### Verify SEO Tags
Use browser DevTools to check:
1. Canonical URL in `<head>`
2. Hreflang tags in `<head>`
3. OpenGraph tags with correct locale
4. HTML lang attribute

### Inspect Sitemap
```
http://localhost:3000/sitemap.xml
```

Verify all URLs include hreflang alternates.

## 📝 Migration Checklist

- [ ] All middleware routing configured
- [ ] All locale utilities implemented
- [ ] Root layout created with dynamic metadata
- [ ] Homepage updated with locale support
- [ ] All tool pages created/updated
- [ ] All website pages created/updated
- [ ] Sitemap updated
- [ ] Navigation components updated
- [ ] SEO tags verified
- [ ] URLs tested in browser
- [ ] Sitemap validated
- [ ] Google Search Console updated with new URLs

## 🎓 Key Concepts

### Hidden Default Locale
English pages are served from the root (`/about`) without an `/en/` prefix to:
- Maintain existing SEO equity
- Provide cleaner URLs for the default language
- Prevent duplicate content

### Canonical URLs
- English page: `https://screenglow.eu/about`
- Dutch page: `https://screenglow.eu/nl/about`

### Hreflang Implementation
Every page includes language alternates:
```html
<link rel="alternate" hreflang="en" href="https://screenglow.eu/about" />
<link rel="alternate" hreflang="nl" href="https://screenglow.eu/nl/about" />
<link rel="alternate" hreflang="x-default" href="https://screenglow.eu/about" />
```

### Middleware Logic
- Crawlers are NOT force-redirected (they crawl what they request)
- Users may be redirected if their Accept-Language prefers Dutch
- English paths always serve English content at the root level

## 📚 References

- [Next.js 15 Internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [Google Hreflang Documentation](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Schema.org Multilingual Support](https://schema.org/docs/multilingual)

## 🆘 Troubleshooting

### Issue: Hreflang tags not appearing
- Verify `generateMetadata` is exported as async function
- Check that `alternates.languages` is included in metadata return
- Ensure imports from `lib/i18n.ts` are correct

### Issue: Wrong canonical URL
- Verify `getCanonicalUrl()` function is being called with correct locale
- Check that path parameter doesn't already include locale prefix

### Issue: Sitemap not including Dutch pages
- Verify `sitemap.ts` iterates over all LOCALES
- Check that `generateHrefLangAlternates()` is called for each page

### Issue: Links not working correctly
- Verify `getLocalizedPath()` is used consistently
- Check that locale is being properly passed to components

