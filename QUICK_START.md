# QUICK REFERENCE GUIDE

## 🎯 Start Here First

1. **Read**: [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) - Overview of everything
2. **Install**: `npm install`
3. **Run**: `npm run dev`
4. **Visit**: http://localhost:3000

---

## 📁 Key Files Guide

### Configuration & Setup
| File | Purpose |
|------|---------|
| `package.json` | Dependencies & scripts |
| `next.config.js` | Next.js optimization |
| `tailwind.config.ts` | Design system colors/fonts |
| `tsconfig.json` | TypeScript configuration |
| `.env.example` | Environment template |

### Core Application
| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout with SEO setup |
| `app/page.tsx` | Homepage (SEO-optimized) |
| `app/sitemap.ts` | Dynamic XML sitemap |
| `app/robots.ts` | robots.txt configuration |

### Essential Pages
| Path | File | Purpose |
|------|------|---------|
| `/` | `app/page.tsx` | Homepage |
| `/white-screen` | `app/(tools)/white-screen/page.tsx` | Main tool |
| `/tools` | `app/(website)/tools/page.tsx` | All tools directory |
| `/about` | `app/(website)/about/page.tsx` | About company |
| `/contact` | `app/(website)/contact/page.tsx` | Contact form |
| `/faq` | `app/(website)/faq/page.tsx` | FAQ with schema |
| `/privacy` | `app/(website)/privacy/page.tsx` | Privacy policy |

### Components
| File | Purpose |
|------|---------|
| `components/layout/header.tsx` | Navigation header |
| `components/layout/footer.tsx` | Footer with links |
| `components/tools/tool-layout.tsx` | Reusable tool page |
| `components/tools/screen-display.tsx` | Interactive display |
| `components/ui/button.tsx` | Button component |
| `components/ui/logo.tsx` | Logo SVG |

### Utilities
| File | Purpose |
|------|---------|
| `lib/constants.ts` | All keywords, tools, FAQ data |
| `lib/seo.ts` | SEO functions & schema |
| `lib/types.ts` | TypeScript type definitions |

### Documentation
| File | Purpose |
|------|---------|
| `README.md` | Project overview |
| `STRATEGY.md` | Detailed SEO strategy |
| `DEPLOYMENT.md` | Deployment guide |
| `IMPLEMENTATION.md` | Implementation details |
| `PROJECT_SUMMARY.md` | This summary |

---

## 🚀 Common Tasks

### Add New Tool Page

1. **Add to constants**:
   ```typescript
   // lib/constants.ts
   {
     id: 'new-tool',
     name: 'New Tool',
     path: '/new-tool',
     // ... other fields
   }
   ```

2. **Create page**:
   ```bash
   mkdir -p app/(tools)/new-tool
   # Copy from white-screen/page.tsx
   # Update tool name and description
   ```

### Update Homepage Content

1. Edit: `app/page.tsx`
2. Update: `lib/constants.ts` (FAQ items, keywords)
3. Test: `npm run dev`
4. Deploy: `npm run build && npm start`

### Add Blog Post

1. Create markdown file in `content/blog/`
2. Add to `lib/constants.ts` BLOG_TOPICS
3. Create route: `app/(website)/blog/[slug]/page.tsx`
4. Add BlogPosting schema
5. Internal link from homepage

### Customize Colors

1. Edit: `tailwind.config.ts`
2. Update color palette
3. Update: `app/globals.css`
4. Rebuild: `npm run build`

---

## 🎨 Styling Guide

### Using Tailwind Classes

```tsx
// Buttons
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-outline">Outline</button>
<button className="btn btn-ghost">Ghost</button>

// Cards
<div className="card">Content</div>
<div className="card-elevated">Elevated</div>

// Sections
<section className="section">Regular section</section>
<section className="section-alt">Alternate bg</section>

// Grid
<div className="grid-3">3-column grid</div>
<div className="grid-2">2-column grid</div>
```

---

## 📊 SEO Checklist

Before every deployment:

- [ ] Check: `lib/constants.ts` has keywords
- [ ] Verify: All pages have unique titles (50-60 chars)
- [ ] Confirm: Meta descriptions (155-160 chars)
- [ ] Test: H1 tags are unique and keyword-focused
- [ ] Validate: Schema.org structured data
- [ ] Check: Internal links work
- [ ] Verify: Sitemap includes new pages
- [ ] Test: Mobile responsiveness
- [ ] Run: Lighthouse check

---

## 🚀 Deployment Checklist

Before production:

- [ ] Update `.env.local` with production URLs
- [ ] Run: `npm run type-check`
- [ ] Run: `npm run lint`
- [ ] Run: `npm run build`
- [ ] Test: `npm start`
- [ ] Check Lighthouse score (98+)
- [ ] Verify Core Web Vitals
- [ ] Test on multiple devices
- [ ] Deploy to Vercel: `vercel --prod`
- [ ] Verify live site works
- [ ] Setup Google Search Console
- [ ] Monitor analytics

---

## 🔍 Search for Content

### Find all tools
```bash
grep -r "COLOR_TOOLS" lib/
```

### Find all keywords
```bash
grep -r "keywords:" lib/constants.ts
```

### Find all pages
```bash
find app -name "page.tsx"
```

### Find components
```bash
find components -name "*.tsx"
```

---

## 📈 Performance Optimization Tips

### Image Optimization
```tsx
import Image from 'next/image';

<Image
  src="/image.png"
  alt="Description"
  width={1200}
  height={630}
  priority={false}
  loading="lazy"
/>
```

### Code Splitting
```tsx
import dynamic from 'next/dynamic';

const Component = dynamic(() => import('./component'), {
  loading: () => <p>Loading...</p>,
});
```

### Font Optimization
```tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});
```

---

## 🐛 Debugging Tips

### View Console Logs
```bash
npm run dev
# Check terminal output
```

### Check Build Errors
```bash
npm run build
# See detailed error messages
```

### Verify Types
```bash
npm run type-check
```

### Lint Code
```bash
npm run lint
```

### Format Code
```bash
npm run format
```

---

## 📱 Testing Checklist

### Desktop
- [ ] Chrome 90+
- [ ] Firefox 88+
- [ ] Safari 14+
- [ ] Edge 90+

### Mobile
- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Samsung Internet
- [ ] Firefox Mobile

### Responsiveness
- [ ] 320px (Mobile)
- [ ] 768px (Tablet)
- [ ] 1024px (Desktop)
- [ ] 1440px (Large)
- [ ] 1920px (Full HD)

---

## 🎯 Next Actions

1. **This Hour**: Extract files, run `npm install`
2. **Today**: Test locally, customize branding
3. **Tomorrow**: Deploy to Vercel
4. **This Week**: Setup domain, analytics, GSC
5. **This Month**: Write content, build backlinks

---

## 💬 Need Help?

### Docs in This Project
- README.md - General overview
- STRATEGY.md - SEO details
- DEPLOYMENT.md - Deployment guide

### External Resources
- Next.js Docs: https://nextjs.org/docs
- TailwindCSS: https://tailwindcss.com/docs
- Web Vitals: https://web.dev/vitals/
- SEO Basics: https://moz.com/beginners-guide-to-seo

---

## ✨ Pro Tips

### Productivity
- Use VS Code extensions (ESLint, Prettier, Thunder Client)
- Setup Git pre-commits with Husky
- Use GitHub Copilot for faster development
- Monitor Lighthouse regularly

### Performance
- Regularly check Core Web Vitals
- Monitor bundle size: `npm run analyze`
- Use Chrome DevTools Performance tab
- Test on slow networks

### SEO
- Use Google Search Console
- Check rankings monthly
- Analyze competitors
- Create backlink strategy

---

**Last updated: May 2026**

**Ready to deploy? Type `npm run dev` to start!**
