# Pre-Launch Verification Checklist

Use this checklist before launching to production.

## 🔧 Code Quality

- [ ] **No TypeScript Errors**
  ```bash
  npm run type-check
  ```
  Should complete with 0 errors

- [ ] **Build Successful**
  ```bash
  npm run build
  ```
  Should complete successfully

- [ ] **Dev Server Starts**
  ```bash
  npm run dev
  ```
  Should start without errors on `http://localhost:3000`

- [ ] **Linting Passes**
  ```bash
  npm run lint
  ```
  Should have no errors

## 🌐 URL Routing

Test each URL pattern:

### English Pages (Root Level)
- [ ] `http://localhost:3000/` → Homepage loads
- [ ] `http://localhost:3000/white-screen` → Tool loads
- [ ] `http://localhost:3000/about` → About loads
- [ ] `http://localhost:3000/contact` → Contact loads
- [ ] `http://localhost:3000/faq` → FAQ loads
- [ ] `http://localhost:3000/privacy` → Privacy loads
- [ ] `http://localhost:3000/tools` → Tools listing loads
- [ ] `http://localhost:3000/dead-pixel-test` → Tool loads

### Dutch Pages (/nl/ Prefix)
- [ ] `http://localhost:3000/nl/` → Dutch home loads
- [ ] `http://localhost:3000/nl/white-screen` → Dutch tool loads
- [ ] `http://localhost:3000/nl/about` → Dutch about loads
- [ ] `http://localhost:3000/nl/contact` → Dutch contact loads
- [ ] `http://localhost:3000/nl/faq` → Dutch FAQ loads
- [ ] `http://localhost:3000/nl/privacy` → Dutch privacy loads
- [ ] `http://localhost:3000/nl/tools` → Dutch tools loads

## 📱 Browser Inspection

For each page type (English and Dutch), open DevTools and verify:

### HTML Tags
- [ ] `<html lang="en">` on English pages
- [ ] `<html lang="nl">` on Dutch pages
- [ ] No console errors

### Meta Tags (in `<head>`)
- [ ] Canonical tag exists: `<link rel="canonical" href="..." />`
- [ ] Correct canonical URL (matches current page)
- [ ] Hreflang for English: `<link rel="alternate" hreflang="en" href="..." />`
- [ ] Hreflang for Dutch: `<link rel="alternate" hreflang="nl" href="..." />`
- [ ] Hreflang x-default: `<link rel="alternate" hreflang="x-default" href="..." />`
- [ ] OpenGraph locale: `<meta property="og:locale" content="en_US" />` (English)
- [ ] OpenGraph locale: `<meta property="og:locale" content="nl_NL" />` (Dutch)

### Structured Data
- [ ] `<script type="application/ld+json">` breadcrumb schema present
- [ ] Schema URLs use correct locale paths

## 🗺️ Sitemap

- [ ] `http://localhost:3000/sitemap.xml` loads
- [ ] Contains English pages:
  - [ ] `<loc>https://TestaScreen.eu/</loc>`
  - [ ] `<loc>https://TestaScreen.eu/about</loc>`
  - [ ] `<loc>https://TestaScreen.eu/white-screen</loc>`
- [ ] Contains Dutch pages:
  - [ ] `<loc>https://TestaScreen.eu/nl/</loc>`
  - [ ] `<loc>https://TestaScreen.eu/nl/about</loc>`
  - [ ] `<loc>https://TestaScreen.eu/nl/white-screen</loc>`
- [ ] Each URL has xhtml:link alternates:
  ```xml
  <xhtml:link rel="alternate" hreflang="en" href="..." />
  <xhtml:link rel="alternate" hreflang="nl" href="..." />
  <xhtml:link rel="alternate" hreflang="x-default" href="..." />
  ```

## 🔗 Links

Test that all internal links work and use correct locale paths:

- [ ] Homepage links to `/white-screen` (English)
- [ ] Homepage links to `/nl/white-screen` (Dutch)
- [ ] Navigation menu reflects correct locale
- [ ] Footer links work correctly

## 🤖 Crawler Simulation

### Google Bot Test
```bash
# Simulate Googlebot request
curl -H "User-Agent: Mozilla/5.0 (compatible; Googlebot/2.1)" \
  http://localhost:3000/about
```

- [ ] English pages served at root
- [ ] Dutch pages served at /nl/
- [ ] No 301 redirects for valid paths

### Test Non-Crawler Redirect
```bash
# Test Dutch language preference redirect
curl -H "Accept-Language: nl" \
  -L http://localhost:3000/
```

- [ ] May redirect to `/nl/` (optional but good for UX)
- [ ] English crawlers still get root content

## 📄 Old Folder Migration

After verifying all new pages work:

- [ ] Backup old `app/(tools)/` folder
- [ ] Backup old `app/(website)/` folder
- [ ] Delete `app/(tools)/` (no longer needed)
- [ ] Delete `app/(website)/` (no longer needed)
- [ ] Rebuild and test again

## 🧪 SEO Tool Verification

### Google Search Console
- [ ] Submit new XML sitemap
- [ ] Check for any hreflang warnings
- [ ] Verify all pages are indexed
- [ ] Check for "Alternate page with proper annotation"

### Google Mobile-Friendly Test
- [ ] Test English pages: `https://TestaScreen.eu/`
- [ ] Test Dutch pages: `https://TestaScreen.eu/nl/`
- [ ] Both should be mobile-friendly

### SEO Analyzer (Lighthouse)
Run in Chrome DevTools:
- [ ] Performance > 90
- [ ] Accessibility > 90
- [ ] Best Practices > 90
- [ ] SEO = 100

## 📊 Performance

- [ ] No Core Web Vitals warnings
- [ ] LCP < 2.5s on 4G
- [ ] FID < 100ms
- [ ] CLS < 0.1

## 🔐 Security

- [ ] No mixed content warnings
- [ ] SSL certificate valid
- [ ] No security issues in console
- [ ] CSP headers properly configured

## 📞 Final Checks

- [ ] No hardcoded domain names (use environment variables)
- [ ] Robots.txt is correctly configured
- [ ] No 404 errors in console
- [ ] No TypeScript errors after rebuild
- [ ] All images have alt text
- [ ] All links have proper titles

## 🚀 Pre-Production Deployment

Before deploying to production:

```bash
# Final build test
npm run build

# No errors should appear
# Build size should be reasonable

# Start production server
npm start

# Verify key routes in production
curl -I https://TestaScreen.eu/
curl -I https://TestaScreen.eu/nl/
```

- [ ] Build size is acceptable
- [ ] No warnings during build
- [ ] Production server starts without errors

## ✅ Deployment Verification

After deploying to production:

- [ ] All English URLs accessible at root
- [ ] All Dutch URLs accessible at /nl/
- [ ] Hreflang tags visible in production HTML
- [ ] Canonical URLs correct in production
- [ ] Sitemap accessible and valid
- [ ] Google can crawl all versions
- [ ] Search Console shows no issues
- [ ] No redirect chains detected
- [ ] Page load times acceptable
- [ ] No console errors on any page

## 📋 Post-Launch Monitoring

Set up monitoring for:

- [ ] Google Search Console indexing status
- [ ] Crawl errors in Search Console
- [ ] Hreflang errors in Search Console
- [ ] Core Web Vitals in PageSpeed Insights
- [ ] Lighthouse scores
- [ ] 404 errors in analytics
- [ ] Redirect chains
- [ ] Mobile usability issues

---

## 🎯 Sign-Off

When all items are checked:

**Date Verified:** _______________

**Verified By:** _______________

**Notes:** _________________________________________________

**Ready for Production:** YES / NO

---

## 📞 Troubleshooting Common Issues

### Issue: URLs returning 404
- **Solution:** Verify `app/[locale]/` folder structure exists
- **Check:** Build log for any folder structure errors

### Issue: Hreflang tags not showing
- **Solution:** Verify `generateMultilingualMetadata` is imported correctly
- **Check:** Page exports async `generateMetadata` function

### Issue: Wrong language on page
- **Solution:** Verify middleware is routing correctly
- **Check:** Console log locale value in layout

### Issue: Duplicate content
- **Solution:** Ensure old folders are deleted
- **Check:** Search console shows no duplicate warnings

### Issue: Build fails with TypeScript errors
- **Solution:** Run `npm run type-check` to see full errors
- **Check:** All imports from `lib/i18n.ts` are correct

---

**Last Updated:** 2024-05-21
**Status:** Ready for Implementation


