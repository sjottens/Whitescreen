# Multilingual SEO Architecture - Technical Reference

## 🏗️ Architecture Overview

This document provides a deep technical dive into the multilingual SEO architecture implemented for your Next.js 15 application.

---

## 📊 System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     USER REQUEST                            │
│                   (e.g., /about)                            │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                  MIDDLEWARE.TS                              │
│  • Route requests to appropriate locale                     │
│  • English: serve at /path (no prefix)                      │
│  • Dutch: serve at /nl/path                                 │
│  • Don't force-redirect crawlers                            │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│              NEXT.JS ROUTER [locale]                        │
│  • Captures locale from URL segment                         │
│  • Passes to layout/page as params: Promise<{ locale }>    │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────┴────────────┬──────────────────┐
        ▼                         ▼                  ▼
    [LOCALE]              [LOCALE]/(TOOLS)    [LOCALE]/(WEBSITE)
    LAYOUT                LAYOUT                LAYOUT
        │                     │                    │
        ├─► GENERATEMETADATA  ├─► white-screen     ├─► about
        │   (with hreflang)   ├─► black-screen     ├─► contact
        │                     ├─► red-screen       ├─► faq
        │                     ├─► ...              ├─► privacy
        │                     └─► zoom-lighting     └─► tools
        │
        ▼
┌─────────────────────────────────────────────────────────────┐
│            METADATA GENERATION (SEO)                        │
│                                                             │
│  generateMultilingualMetadata() generates:                 │
│  • Canonical URL: https://screenglow.eu/about              │
│  • Hreflang en: https://screenglow.eu/about                │
│  • Hreflang nl: https://screenglow.eu/nl/about             │
│  • Hreflang x-default: https://screenglow.eu/about         │
│  • OpenGraph locale: en_US or nl_NL                        │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│            HTML RESPONSE TO BROWSER                         │
│                                                             │
│  <html lang="en">                                           │
│  <head>                                                      │
│    <link rel="canonical" href="..." />                      │
│    <link rel="alternate" hreflang="en" href="..." />        │
│    <link rel="alternate" hreflang="nl" href="..." />        │
│    <link rel="alternate" hreflang="x-default" href="..." /> │
│    <meta property="og:locale" content="en_US" />            │
│  </head>                                                     │
│  ...                                                         │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 Request Flow Examples

### Example 1: Visiting English About Page

```
1. User visits: https://screenglow.eu/about
   │
   ├─► Middleware checks: No locale prefix found
   │   → Let it through (default English)
   │
   ├─► Next.js Router sees: /about
   │   → Matches app/[locale]/...
   │   → Locale param: "en" (extracted from path)
   │
   ├─► app/[locale]/(website)/about/page.tsx loads
   │   → generateMetadata() called
   │   → getLocaleFromParams() returns "en"
   │
   ├─► generateMultilingualMetadata() creates:
   │   {
   │     canonical: "https://screenglow.eu/about",
   │     languages: {
   │       "en": "https://screenglow.eu/about",
   │       "nl": "https://screenglow.eu/nl/about",
   │       "x-default": "https://screenglow.eu/about"
   │     }
   │   }
   │
   ▼
3. Browser receives HTML with proper hreflang tags
```

### Example 2: Visiting Dutch About Page

```
1. User visits: https://screenglow.eu/nl/about
   │
   ├─► Middleware checks: Dutch prefix detected
   │   → Let it through
   │
   ├─► Next.js Router matches: /nl/about
   │   → [locale] = "nl"
   │   → Rest of path = "/about"
   │
   ├─► app/[locale]/(website)/about/page.tsx loads
   │   → generateMetadata() called
   │   → getLocaleFromParams() returns "nl"
   │
   ├─► generateMultilingualMetadata() creates:
   │   {
   │     canonical: "https://screenglow.eu/nl/about",
   │     languages: {
   │       "en": "https://screenglow.eu/about",
   │       "nl": "https://screenglow.eu/nl/about",
   │       "x-default": "https://screenglow.eu/about"
   │     }
   │   }
   │
   ▼
3. Browser receives HTML with proper hreflang tags
```

---

## 💾 File Structure & Responsibilities

### Core Files

| File | Purpose | Lines |
|------|---------|-------|
| `middleware.ts` | Route internationalization | 45 |
| `lib/i18n.ts` | Locale utilities & types | 95 |
| `lib/seo.ts` | SEO metadata generation | 50+ |
| `lib/link-utils.ts` | Path generation helpers | 45 |

### Layout Files

| File | Purpose |
|------|---------|
| `app/[locale]/layout.tsx` | Root async layout with dynamic metadata |
| `app/[locale]/(tools)/layout.tsx` | Tools section wrapper |
| `app/[locale]/(website)/layout.tsx` | Website section wrapper |

### Page Files (18 total)

**Tool Pages (13):** `white-screen`, `black-screen`, `red-screen`, `blue-screen`, `green-screen`, `pink-screen`, `purple-screen`, `orange-screen`, `yellow-screen`, `dead-pixel-test`, `brightness-test`, `contrast-test`, `zoom-lighting`

**Website Pages (5):** `about`, `contact`, `faq`, `privacy`, `tools`

---

## 🔌 API Reference

### `lib/i18n.ts` - Core Functions

#### `getLocaleFromParams(params: Promise<{ locale?: string }>): Promise<Locale>`
Safely extracts and validates locale from Next.js 15 async params.

```typescript
const locale = await getLocaleFromParams(params);
// Returns: "en" | "nl" | "en" (default if invalid)
```

#### `getCanonicalUrl(locale: Locale, path: string): string`
Generates canonical URL for a given locale and path.

```typescript
getCanonicalUrl('en', '/about')
// Returns: "https://screenglow.eu/about"

getCanonicalUrl('nl', '/about')
// Returns: "https://screenglow.eu/nl/about"
```

#### `generateHrefLangAlternates(path: string): Record<string, string>`
Creates hreflang alternates for all language versions.

```typescript
generateHrefLangAlternates('/about')
// Returns: {
//   en: "https://screenglow.eu/about",
//   nl: "https://screenglow.eu/nl/about",
//   x-default: "https://screenglow.eu/about"
// }
```

### `lib/seo.ts` - Metadata Functions

#### `generateMultilingualMetadata(params: MultilingualMetadataParams): Metadata`
Generates complete SEO metadata with hreflang support.

```typescript
const metadata = await generateMultilingualMetadata({
  locale: 'en',
  title: 'About Us',
  description: 'Learn about our company...',
  path: '/about',
  keywords: ['about', 'company'],
});
// Returns: Metadata with canonical, hreflang, og:locale
```

#### `breadcrumbSchemaMultilingual(items: Array, locale: Locale): SchemaConfig`
Generates breadcrumb schema with locale-aware URLs.

```typescript
const schema = breadcrumbSchemaMultilingual(
  [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' }
  ],
  'nl'
);
// Returns: Properly formatted BreadcrumbList schema for Dutch
```

### `lib/link-utils.ts` - Link Generation

#### `getLocalizedPath(locale: Locale, path: string): string`
Generates a locale-specific URL path.

```typescript
getLocalizedPath('en', '/about')   // "/about"
getLocalizedPath('nl', '/about')   // "/nl/about"
```

---

## 🎯 Implementation Pattern

Every page should follow this pattern:

```typescript
import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';

// 1. Define metadata
export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);

  return generateMultilingualMetadata({
    locale,
    title: 'Page Title',
    description: 'Page description...',
    path: '/page-path',
    keywords: ['keyword1', 'keyword2'],
  });
}

// 2. Define component with async params
interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Page({ params }: PageProps) {
  const locale = await getLocaleFromParams(params);

  // 3. Generate schema for structured data
  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: 'Home', path: '/' },
      { name: 'Page', path: '/page-path' },
    ],
    locale
  );

  return (
    <>
      {/* 4. Include structured data */}
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

---

## 🌐 URL Patterns

### Routing Examples

| Path Requested | Locale Extracted | Serves |
|---|---|---|
| `/` | `en` | English home |
| `/about` | `en` | English about |
| `/white-screen` | `en` | English tool |
| `/nl/` | `nl` | Dutch home |
| `/nl/about` | `nl` | Dutch about |
| `/nl/white-screen` | `nl` | Dutch tool |

### Canonical URL Patterns

| Page | English | Dutch |
|---|---|---|
| Home | `https://screenglow.eu/` | `https://screenglow.eu/nl/` |
| About | `https://screenglow.eu/about` | `https://screenglow.eu/nl/about` |
| Tool | `https://screenglow.eu/white-screen` | `https://screenglow.eu/nl/white-screen` |

---

## 📜 Sitemap Generation

The `sitemap.ts` generates multilingual entries:

```xml
<url>
  <loc>https://screenglow.eu/about</loc>
  <lastmod>2024-05-21</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
  <xhtml:link rel="alternate" hreflang="en" href="https://screenglow.eu/about" />
  <xhtml:link rel="alternate" hreflang="nl" href="https://screenglow.eu/nl/about" />
  <xhtml:link rel="alternate" hreflang="x-default" href="https://screenglow.eu/about" />
</url>

<url>
  <loc>https://screenglow.eu/nl/about</loc>
  <lastmod>2024-05-21</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
  <xhtml:link rel="alternate" hreflang="en" href="https://screenglow.eu/about" />
  <xhtml:link rel="alternate" hreflang="nl" href="https://screenglow.eu/nl/about" />
  <xhtml:link rel="alternate" hreflang="x-default" href="https://screenglow.eu/about" />
</url>
```

---

## 🔐 Type Safety

All functions are fully typed:

```typescript
// Type definitions in lib/i18n.ts
export type Locale = 'en' | 'nl';

export const LOCALES: Locale[] = ['en', 'nl'];
export const DEFAULT_LOCALE: Locale = 'en';

// Type-safe metadata generation
interface MultilingualMetadataParams {
  locale: Locale;  // Strict type
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
  keywords?: string[];
}
```

---

## 🚀 Middleware Deep Dive

### How Middleware Routes Requests

```typescript
// middleware.ts logic
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 1. Check if path already has locale
  if (pathname.startsWith('/nl/')) {
    return NextResponse.next(); // Let it through
  }

  // 2. Check for non-crawler language preference
  const acceptLanguage = request.headers.get('accept-language');
  const isCrawler = /bot|crawl/i.test(request.headers.get('user-agent'));
  
  // 3. Redirect non-crawlers to /nl/ if they prefer Dutch
  if (!isCrawler && acceptLanguage?.startsWith('nl')) {
    return NextResponse.redirect(new URL(`/nl${pathname}`, request.url));
  }

  // 4. All others get English (root level)
  return NextResponse.next();
}
```

### Why Crawlers Aren't Force-Redirected

Google and other crawlers need to be able to crawl all language versions. If we force-redirect based on language, crawlers can't access non-default language content.

✅ Correct approach: Let crawlers crawl `/nl/` paths
❌ Wrong approach: Force `/nl/` users back to `/` just because crawler doesn't send language header

---

## 📈 SEO Benefits

### 1. **Duplicate Content Prevention**
- Clear canonical URLs prevent indexing duplicates
- Each version has its own canonical pointing to itself

### 2. **Proper Language Targeting**
- HTML `lang` attribute signals page language to search engines
- Hreflang tags connect language versions

### 3. **Consolidation of Signals**
- Hreflang tells Google these are related versions
- Prevents splitting SEO authority across language versions

### 4. **x-default Handling**
- Tells Google which version serves non-targeted users
- Typically English for global sites

### 5. **Sitemap Clarity**
- Sitemap includes all language versions
- Xhtml namespace hreflang in sitemap provides explicit relationships

---

## 🔍 Debugging Tips

### Check Locale in Browser
```javascript
// In DevTools console
document.documentElement.lang // Should be "en" or "nl"
```

### View Generated Metadata
```javascript
// Check canonical
document.querySelector('link[rel="canonical"]').href

// Check all hreflang
Array.from(document.querySelectorAll('link[rel="alternate"]'))
  .map(el => `${el.hreflang}: ${el.href}`)
```

### Check Build Output
```bash
npm run build

# Look for any TypeScript errors related to:
# - Locale type errors
# - Missing params type definitions
# - Metadata generation errors
```

### Test Middleware
```bash
# Start dev server
npm run dev

# Test in another terminal:
curl -H "Accept-Language: nl" http://localhost:3000/

# Should redirect Dutch preference to /nl/
```

---

## 📝 Maintenance

### Adding New Locale (e.g., French)

1. Update `lib/i18n.ts`:
```typescript
export type Locale = 'en' | 'nl' | 'fr';
export const LOCALES: Locale[] = ['en', 'nl', 'fr'];

export const LOCALE_METADATA = {
  en: { name: 'English', nativeName: 'English', hreflang: 'en' },
  nl: { name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl' },
  fr: { name: 'French', nativeName: 'Français', hreflang: 'fr' }, // Add this
};
```

2. Update `middleware.ts` to handle `/fr/` prefix

3. Create new page versions in `app/[locale]/(tools)` and `app/[locale]/(website)/`

4. Sitemap auto-updates to include French versions

---

## 🎓 Best Practices

✅ **DO:**
- Use `getLocalizedPath()` for all internal links
- Use async params: `params: Promise<{ locale: string }>`
- Call `getLocaleFromParams()` to safely extract locale
- Generate metadata for every page
- Include breadcrumb schema
- Test all language versions

❌ **DON'T:**
- Hardcode `/en/` paths (use root for English)
- Use synchronous params (Next.js 15 uses Promises)
- Skip hreflang tags
- Assume locale is always valid (validate it)
- Forget to set `lang` attribute dynamically
- Mix old and new folder structures

---

## ✅ Complete Implementation Checklist

- [x] Middleware routing implemented
- [x] Locale utilities created
- [x] Root layout with dynamic metadata
- [x] All tool pages created
- [x] All website pages created
- [x] Sitemap with hreflang
- [x] Type safety throughout
- [x] No TypeScript errors
- [ ] Tested all URLs work
- [ ] Verified hreflang tags in HTML
- [ ] Verified canonical URLs
- [ ] Verified OpenGraph locale
- [ ] Cleaned up old folders
- [ ] Deployed to production

