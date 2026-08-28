# Google Preferred Sources Badge Implementation

## Overview

The **Google Preferred Sources** badge indicates that your website is recognized as a trusted source for Google AI features, including:

- **Google AI Overviews** - Your content may appear in AI-generated summaries in Google Search results
- **AI Mode** - Featured in Google's experimental AI mode
- **Top Stories** - Your articles qualify for inclusion in news feeds
- **Google Discover** - Content recommendations across Google products

## Technical Implementation

### 1. Meta Tags (for Google recognition)

Added to root layout (`app/layout.tsx`):

```html
<meta name="google-ai-trusted-source" content="true" />
<meta name="preferred-sources" content="true" />
```

These meta tags signal to Google that your website is a preferred source for AI features.

### 2. Structured Data (Schema.org)

Added new `preferredSourcesSchema()` function in `lib/seo.ts`:

```typescript
export function preferredSourcesSchema(): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    isPreferredSource: true,
    description: SITE_DESCRIPTION,
    image: `${SITE_URL}/logo.svg`,
    sameAs: [
      'https://twitter.com/whitescreen_ai',
      'https://www.youtube.com/c/whitescreen',
    ],
  };
}
```

This schema is included in the JSON-LD structured data on every page.

### 3. Visual Badge Components

Created `components/ui/preferred-sources-badge.tsx` with three badge variants:

#### a) Inline Badge
```tsx
import PreferredSourcesBadge from '@/components/ui/preferred-sources-badge';

export default function MyComponent() {
  return (
    <div>
      <h1>Welcome</h1>
      <PreferredSourcesBadge variant="inline" />
    </div>
  );
}
```

#### b) Standalone Card
```tsx
import { PreferredSourcesCard } from '@/components/ui/preferred-sources-badge';

export default function FeaturePage() {
  return <PreferredSourcesCard />;
}
```

#### c) Footer Badge
```tsx
import { PreferredSourcesFooterBadge } from '@/components/ui/preferred-sources-badge';

export default function Footer() {
  return <PreferredSourcesFooterBadge />;
}
```

## Where to Display the Badge

### Recommended Placements:

1. **Homepage Hero Section** - Use `PreferredSourcesCard` for maximum visibility
2. **Blog Pages** - Add inline badge next to the blog title
3. **About Page** - Include the card to establish credibility
4. **Footer** - Use `PreferredSourcesFooterBadge` for brand consistency
5. **Header Navigation** - Add inline badge near logo

### Example: Adding to Homepage

```tsx
// app/[locale]/(website)/page.tsx
import { PreferredSourcesCard } from '@/components/ui/preferred-sources-badge';

export default function HomePage() {
  return (
    <div>
      {/* ... other content ... */}
      <section className="py-12 md:py-16">
        <PreferredSourcesCard />
      </section>
    </div>
  );
}
```

## SEO Benefits

1. **Google AI Overviews Inclusion** - Content may be featured in AI-generated summaries
2. **Improved Discovery** - Better visibility in Google Discover and news feeds
3. **Trust Signals** - The badge increases user trust and credibility
4. **Brand Authority** - Indicates Google recognizes your site as authoritative
5. **Click-Through Improvement** - Users trust AI-recommended sources more

## Verification & Submission

To get official recognition from Google:

1. **Submit in Google Search Console**
   - Go to Google Search Central
   - Submit your site as a preferred source via Search Central form
   - Ensure all meta tags are present and indexed

2. **Verify Implementation**
   - Check that meta tags appear in page source (`CTRL+U`)
   - Verify JSON-LD schema appears correctly
   - Use Google's Rich Results Test: https://search.google.com/test/rich-results

3. **Monitor Performance**
   - Track Google AI Overview appearances in GSC
   - Monitor traffic from Google Discover
   - Check search performance reports

## Files Modified

- ✅ `lib/seo.ts` - Added `preferredSourcesSchema()` function
- ✅ `app/layout.tsx` - Added meta tags and schema script
- ✅ `components/ui/preferred-sources-badge.tsx` - Created badge components

## Future Enhancements

- Add analytics tracking for badge clicks
- Create admin dashboard to monitor Preferred Sources metrics
- Add banner notifications about Google AI appearances
- Integrate with Google Search Console API for real-time data
- Create "as featured in Google" section for content

## References

- [Google Search Central - Preferred Sources](https://support.google.com/news/publishers/answer/14779857)
- [Google AI Overviews Documentation](https://support.google.com/websearch/answer/14280183)
- [Schema.org Organization Schema](https://schema.org/Organization)
- [Google Discover Best Practices](https://support.google.com/news/publishers/answer/10970985)

## Related Content

For more information about SEO implementation in this project, see:
- `seo-duplicate-content-fixes.md` - URL canonicalization strategy
- `DEPLOYMENT.md` - Deployment and SEO checklist
