# Programmatic SEO Implementation Guide

## Quick Start: Creating New Tool Pages

This guide explains how to create new tool pages with proper SEO optimization using the TestaScreen template system.

---

## Step 1: Add Tool to Constants

Add to `lib/constants.ts`:

```typescript
export const TOOLS = [
  // ... existing tools ...
  {
    id: 'iphone-screen-test',
    name: 'iPhone Screen Test',
    path: '/iphone-screen-test',
    description: 'Professional iPhone display testing tool',
    keywords: [
      'iphone screen test',
      'iphone display test',
      'iphone dead pixel test',
      'ios screen test',
    ],
    useCases: ['device_testing', 'mobile_testing', 'screen_diagnostics'],
    searchVolume: 8200,
  },
];
```

---

## Step 2: Update Sitemap

The sitemap already includes placeholders. Verify it's listed in `app/sitemap.ts`:

```typescript
const tools = [
  'iphone-screen-test',
  'ipad-screen-test',
  // ... etc
];
```

---

## Step 3: Add Translations

Add to `lib/translations.ts` for English, Dutch, Spanish (and expanded languages):

```typescript
iphone_screen_test: 'iPhone Screen Test',
iphone_screen_test_desc: 'Professional display testing for iPhone',
iphone_screen_test_long: 'Test your iPhone display for dead pixels, color accuracy, and brightness',
```

---

## Step 4: Create Page File

Copy the template from `app/[locale]/(tools)/TOOL_PAGE_TEMPLATE.tsx` to:

`app/[locale]/(tools)/[tool-id]/page.tsx`

Example: `app/[locale]/(tools)/iphone-screen-test/page.tsx`

---

## Step 5: Customize Tool Configuration

Update the `TOOL_CONFIG` object:

```typescript
const TOOL_CONFIG = {
  id: 'iphone-screen-test',
  name: 'iPhone Screen Test',
  description: 'Professional iPhone display testing tool for detecting dead pixels',
  keywords: [
    'iphone screen test',
    'ios display test',
    'iphone dead pixel',
    'iphone screen checker'
  ],
  path: '/iphone-screen-test',
  useCase: 'testing your iPhone display for defects',
  features: [
    'Full-screen color tests',
    'Mobile-optimized display',
    'Works on any iOS device',
    'Instant results, no app needed',
    'Free and always will be',
  ],
  useCases: [
    'Dead pixel detection on iPhone',
    'Screen uniformity checking',
    'Color accuracy verification',
    'Purchase verification before buying used',
    'Device repair diagnostics',
  ]
};
```

---

## Step 6: Add Component (If Needed)

Create component in `components/tools/[tool-name].tsx`:

```typescript
interface IPhoneScreenTestProps {
  locale: string;
}

export default function IPhoneScreenTest({ locale }: IPhoneScreenTestProps) {
  return (
    <div className="tool-container">
      {/* Your tool UI here */}
      <ScreenDisplay color="#FFFFFF" title="iPhone Test" locale={locale} />
    </div>
  );
}
```

Then import and use in the page:

```typescript
import IPhoneScreenTest from '@/components/tools/iphone-screen-test';

// In the ToolLayout render:
<ToolLayout>
  <IPhoneScreenTest locale={locale} />
</ToolLayout>
```

---

## Step 7: Customize FAQs

Update the `faqData` array with device-specific questions:

```typescript
const faqData = [
  {
    question: 'Can I use this on my iPhone 15 Pro?',
    answer: 'Yes! This works on all iPhone models running iOS 14 or later.'
  },
  {
    question: 'Will this hurt my battery?',
    answer: 'No. The test runs for a short time and uses minimal power.'
  },
  {
    question: 'Can I test my iPad too?',
    answer: 'Yes! All iOS devices are supported, including iPad and iPod touch.'
  },
  // ... more FAQs
];
```

---

## Step 8: Add Related Tools

Update related tools section:

```typescript
relatedTools={[
  {
    name: 'MacBook Screen Test',
    path: '/macbook-screen-test',
    color: '#555555'
  },
  {
    name: 'iPad Screen Test',
    path: '/ipad-screen-test',
    color: '#FFFFFF'
  },
  {
    name: 'Dead Pixel Test',
    path: '/dead-pixel-test',
    color: '#000000'
  }
]}
```

---

## Device-Specific Page Examples

### iPhone Screen Test
- **Path**: `/iphone-screen-test`
- **Focus**: iPhone-specific issues, iOS optimization
- **Keywords**: iPhone, iOS, screen test, dead pixel
- **Related**: iPad, MacBook, dead-pixel-test

### Android Screen Test
- **Path**: `/android-screen-test`
- **Focus**: Android device variations, multiple resolutions
- **Keywords**: Android, Google Pixel, Samsung Galaxy, screen test
- **Related**: Device brand tests

### MacBook Screen Test
- **Path**: `/macbook-screen-test`
- **Focus**: Retina display, M1/M2/M3 specifics
- **Keywords**: MacBook, Retina display, screen test
- **Related**: iPad, iPhone

---

## Monitor Brand Pages

### Pattern: `/monitor-test/[brand]`

Example: `/monitor-test/asus`

```typescript
const TOOL_CONFIG = {
  id: 'monitor-test-asus',
  name: 'ASUS Monitor Test',
  description: 'Professional testing guide for ASUS displays',
  keywords: [
    'asus monitor test',
    'asus display checker',
    'asus gaming monitor',
    'proart monitor test'
  ],
  path: '/monitor-test/asus',
  useCase: 'testing ASUS monitors for common issues',
  features: [
    'ASUS-specific color modes',
    'Gaming-focused tests',
    'ProArt optimization',
    'IPS/TN panel detection',
    'Brand-specific troubleshooting',
  ],
};
```

---

## Resolution-Specific Pages

### Pattern: `/[resolution]-screen-test`

Example: `/4k-screen-test`

```typescript
const TOOL_CONFIG = {
  id: '4k-screen-test',
  name: '4K Screen Test',
  description: 'Professional testing tool for 4K (3840×2160) displays',
  keywords: [
    '4k screen test',
    '4k monitor test',
    '4k resolution',
    'uhd display test',
    '3840x2160'
  ],
  path: '/4k-screen-test',
  useCase: 'comprehensive testing of 4K UltraHD displays',
  features: [
    '4K resolution-specific tests',
    'Pixel density analysis',
    'Scaling optimization',
    'GPU performance testing',
    '60Hz/120Hz/144Hz support',
  ],
};
```

---

## Content Requirements Checklist

- [ ] Tool added to `lib/constants.ts`
- [ ] Translations added for all 3+ languages
- [ ] Page file created in `app/[locale]/(tools)/[tool-id]/`
- [ ] TOOL_CONFIG properly configured
- [ ] Component created in `components/tools/`
- [ ] FAQs customized (8-10 questions)
- [ ] Related tools configured
- [ ] Schema markup updated
- [ ] Metadata titles & descriptions SEO-optimized
- [ ] Internal links added to related pages
- [ ] Tested on mobile & desktop
- [ ] Lighthouse performance checked

---

## SEO Best Practices for New Pages

### Title Format
`[Device/Monitor/Resolution] Screen Test - [Benefit] | TestaScreen`

Examples:
- ✅ "iPhone Screen Test - Free Dead Pixel Detector | TestaScreen"
- ✅ "ASUS Monitor Test - Professional Gaming Display Checker | TestaScreen"
- ✅ "4K Screen Test - UltraHD Resolution Testing Tool | TestaScreen"

### Description (155-160 chars)
Include primary keyword, benefit, and CTA.

```
"Test your [device/monitor] display for dead pixels, color accuracy, and defects. 
Free professional-grade tool. No installation required."
```

### Keywords (5-8 natural)
- Primary: device/monitor/resolution name
- Secondary: screen test, test tool
- Long-tail: specific use case

### Internal Linking
Link to:
- Related device pages
- Related test tools
- Color screen variants
- Troubleshooting guides

---

## Multilingual Implementation

For each new page, translations should be added to:
1. `lib/translations.ts` (EN, NL, ES)
2. `lib/translations-expanded.ts` (DE, FR, IT, PT, JA)

Example translation pattern:
```typescript
iphone_screen_test: 'iPhone Screen Test', // en
iphone_screen_test: 'iPhone Schermtest', // nl
iphone_screen_test: 'Prueba de Pantalla iPhone', // es
iphone_screen_test: 'iPhone Bildschirmtest', // de
```

---

## Automation Opportunities

Future improvements for scaling:

1. **Template Generation Script**
   - Auto-create page file from template
   - Auto-add to sitemap
   - Auto-add to constants

2. **Translation Generation**
   - Use translation API for initial draft
   - Manual review for quality

3. **Schema Auto-Generation**
   - Dynamically generate FAQ schema
   - Auto-create breadcrumbs

4. **Link Generation**
   - Auto-suggest related tools
   - Auto-generate internal links

---

## Testing Checklist

- [ ] Page loads correctly
- [ ] All translations display properly
- [ ] Schema markup validates (schema.org)
- [ ] Mobile responsiveness works
- [ ] Tool functions correctly
- [ ] Related links are relevant
- [ ] FAQs appear in markup
- [ ] Lighthouse scores acceptable
- [ ] No console errors
- [ ] Metadata renders correctly

---

## Monitoring & Analytics

Track for each new page:
- Organic impressions
- Organic clicks
- Average position in search results
- Bounce rate
- Average session duration
- Pages per session
- Conversion rate (tool usage)

---

## Common Issues & Solutions

**Issue**: Page not indexed
**Solution**: Check robots.txt, verify sitemap submission, ensure canonical URL correct

**Issue**: Poor schema validation
**Solution**: Use schema.org validator, check JSON-LD syntax in browser devtools

**Issue**: Low engagement
**Solution**: Improve page content, enhance CTA, optimize for mobile

**Issue**: Duplicate content
**Solution**: Verify hreflang tags, check canonical URLs across locales
