# SEO CHANGELOG — TestaScreen

**Purpose**: Track all SEO-related changes, their rationale, expected impact, and actual results.

**Format**:
- Date
- Page/Component Changed
- Change Type (Content, Structure, Technical, Performance)
- Description of Change
- Reason (Which audit finding this addresses)
- Expected SEO/User Benefit
- Potential Risk
- Verification (How we'll know if it worked)
- Status (In Progress, Completed, Rolled Back)
- Actual Results (after sufficient time for metrics)

---

## COMPLETED CHANGES

### [2026-08-28] Audit Documents Created
- **Page/Component**: Meta (Project)
- **Type**: Documentation
- **Change**: Created SEO-AUDIT.md, SEO-PAGE-INVENTORY.md, SEO-ROADMAP.md
- **Reason**: Establish baseline understanding of site SEO health before making changes
- **Expected Benefit**: Clear roadmap for improvements; prioritized action items
- **Risk**: None (read-only)
- **Verification**: Documents created and reviewed
- **Status**: ✅ Completed

---

## IN PROGRESS (P0 — Critical)

### [TBD] Homepage Hero Redesign: Reposition Dead Pixel Test
- **Page**: Homepage (`/` and locale variants)
- **Type**: Structure + UX
- **Change**: Move dead pixel test interactive tool to hero position above fold; simplify headline
- **Reason**: Audit finding: Homepage doesn't immediately show TestaScreen's unique value (interactive tools)
- **Expected Benefit**: 
  - Reduce homepage bounce rate by 15-20%
  - Increase dead pixel test CTR to 40%+
  - Improve brand clarity for new visitors
- **Risk**: Could confuse users looking for other tools; mobile layout must handle fullscreen test
- **Verification**: 
  - Track dead pixel test CTR from homepage (increase to 40%+)
  - Monitor homepage bounce rate (decrease by 15-20%)
  - A/B test if possible (measure conversion improvement)
- **Status**: ⏳ Planned for Week 1

### [TBD] Fix AI-Generic Language in Blog Articles
- **Page**: Top 10 blog articles (priority)
- **Type**: Content
- **Change**: Rewrite opening paragraphs and flagged generic phrases; replace with specific, technical language
- **Reason**: Audit finding: Blog content uses generic AI-sounding language ("Whether you're...", "In today's digital world...") reducing credibility
- **Expected Benefit**:
  - Improve perceived expertise and credibility
  - Reduce blog article bounce rate by 10-15%
  - Better alignment with user search intent
- **Risk**: If rewrites introduce inaccuracies, may need fact-checking
- **Flagged Phrases** (to remove):
  - "Whether you're a professional or casual user..."
  - "In today's digital world..."
  - "Unlock the full potential..."
  - "Take your experience to the next level..."
  - "Seamlessly..." (if not adding value)
  - "Industry-leading..." (if unsupported)
  - "Professional-grade..." (if unsupported)
  - "The ultimate guide to..." (hyperbolic)
  - "Perfect for everyone..." (contradictory)
- **Verification**:
  - Manual review: No flagged phrases remain in top articles
  - Readability score improves
  - Blog article bounce rate decreases 10-15%
- **Status**: ⏳ Planned for Week 1-2
- **Articles to Rewrite**:
  1. Blog homepage intro
  2. Dead pixel test page intro
  3. "What Are Dead Pixels?" article
  4. "Dead Pixel vs Stuck Pixel" article
  5. "How to Fix Dead Pixels" article
  6. "Monitor Buying Guide" intro
  7-10. (Other high-traffic articles)

### [TBD] Audit Comparison & Monitor Brand Pages for Duplicate Content
- **Page**: 50+ comparison and brand pages
- **Type**: Technical / Content
- **Change**: Spot-check 6 pages (3 comparisons, 3 brands) for uniqueness and content quality
- **Reason**: Audit finding: Unknown if pages are templated/duplicated or have unique content (duplicate content risk)
- **Expected Benefit**:
  - Identify if high-risk duplicate content exists
  - Create action plan for remediation
  - Prevent potential Google duplicate content penalty
- **Risk**: May find extensive duplication requiring major remediation effort
- **Verification**:
  - Spot-check completed with findings documented
  - Copyscape or similar tool confirms duplication status
  - Decision made: Keep, Improve, Redirect, or Remove
- **Status**: ⏳ Planned for Week 1
- **Pages to Audit**:
  - Comparisons: `/compare/asus-vs-lg/`, `/compare/ips-vs-va-vs-tn/`, `/compare/144hz-vs-240hz/`
  - Brands: `/monitor-test/asus/`, `/monitor-test/lg/`, `/monitor-test/samsung/`

### [TBD] Verify Production Readiness (Performance, Indexability, Schema)
- **Page**: 5 key pages (homepage, dead pixel test, blog home, buying guide, blog article)
- **Type**: Technical
- **Change**: Run Lighthouse, Google Rich Results Test, GSC checks
- **Reason**: Audit claims good performance/indexing/schema, but production verification needed
- **Expected Benefit**:
  - Baseline metrics established
  - Hidden production issues identified
  - Confidence in audit findings
- **Risk**: May reveal issues requiring quick fixes
- **Verification**:
  - Lighthouse scores documented
  - Core Web Vitals confirmed
  - Schema validation complete
  - Indexation status confirmed in GSC
- **Status**: ⏳ Planned for Week 1

---

## PLANNED (P1 — High Impact)

### [TBD] Add Introductory Content to All Tool Pages
- **Page**: 16+ tool pages (white screen, black screen, red screen, etc.)
- **Type**: Content
- **Change**: Write 50-100 word intro for each tool explaining:
  - What does this test do?
  - When/why would you use it?
  - What to look for?
  - Link to related guide and tools
- **Reason**: Audit finding: Tool pages are thin; no educational context; missing internal linking
- **Expected Benefit**:
  - Tool pages rank for intent-specific keywords
  - Better user understanding (less bounce)
  - Improved internal linking (tool ↔ blog)
  - Session duration increases 20-30%
- **Risk**: Generic intros won't help; must be specific and useful
- **Verification**:
  - Tool page bounce rate decreases 15-20%
  - Internal link CTR from tools to blogs reaches 10-15%
  - Tool page engagement metrics improve
- **Status**: ⏳ Planned for Week 2-3

### [TBD] Build Internal Linking System (Tool ↔ Blog)
- **Page**: All tools (16+) and blog articles (40-50)
- **Type**: Structure
- **Change**: 
  - Add "Related Reading" section to tool pages (1-3 blog links)
  - Add "Test It Yourself" CTA to blog articles (1-2 tool links)
  - Verify all links use correct locale paths
- **Reason**: Audit finding: Blog links to tools, but tools don't link back; fragmented topic authority
- **Expected Benefit**:
  - Session duration increases 30-50%
  - Topical authority improves (clustered signals)
  - Better crawlability (links help Google understand content structure)
  - Reduced bounce rate
- **Risk**: If links are irrelevant, UX worsens
- **Verification**:
  - Internal link CTR on tool pages reaches 15-20%
  - Average session duration increases 30-50%
  - Pages in topic cluster rank for more keywords
  - User engagement metrics improve across site
- **Status**: ⏳ Planned for Week 2-3

### [TBD] Create "Monitor Buying Guide" Hub
- **Page**: `/monitor-buying-guide/`
- **Type**: Content + Structure
- **Change**: 
  - Expand page with comprehensive sections (specs, budget, testing, warranty)
  - Add links to specifications comparisons, brand pages, testing guides
  - Add FAQ schema
- **Reason**: Audit finding: Buying guide exists but not leveraged as hub; missing links to comparisons/brands
- **Expected Benefit**:
  - Buying guide becomes main hub for commercial queries
  - Better internal link distribution
  - User journey: Question → Guide → Comparison → Brand → Test
  - Organic traffic to page increases 20%+
- **Risk**: None (improvement only)
- **Verification**:
  - Buying guide traffic increases 20%+
  - Links to comparison/brand pages increase CTR
  - User time on page increases
  - Conversion metrics improve (if applicable)
- **Status**: ⏳ Planned for Week 2-3

### [TBD] Device-Specific Pages: Verify & Link
- **Page**: `/iphone-screen-test/`, `/macbook-screen-test/`, `/tv-screen-test/`, `/oled-tv-test/`
- **Type**: Content + Structure
- **Change**:
  - Verify content exists and is substantive (300+ words)
  - Expand if thin with device-specific tech, defects, testing tips
  - Link from main navigation
  - Add relevant tool links (iPhone → dead pixel test, color tests)
  - Add FAQ schema
- **Reason**: Audit finding: Device pages exist but may be thin, orphaned, or not linked
- **Expected Benefit**:
  - Device-specific keyword rankings improve
  - Users find device-specific guidance
  - Better internal link distribution
  - Organic traffic to device pages establishes baseline
- **Risk**: None if done carefully
- **Verification**:
  - Device pages indexed in GSC
  - Device pages receive 50+ organic visits/month baseline
  - Rank in top 10 for device-specific keywords within 3 months
  - Links from device pages to tools/guides are clicked
- **Status**: ⏳ Planned for Week 3-4

### [TBD] Audit Blog Translations for Quality
- **Page**: Sample of blog articles (Dutch, Spanish, German translations)
- **Type**: Content
- **Change**:
  - Have native speakers review 3 blog articles for:
    - Naturalness, grammar, technical accuracy, tone
  - Provide feedback (acceptable/needs revision)
  - If issues found, flag for retranslation
- **Reason**: Audit finding: Translations exist but quality unknown; machine-translated content may reduce rankings
- **Expected Benefit**:
  - Confidence in translation quality
  - If issues found: Improved rankings in non-English locales
  - Process improvement for future translations
- **Risk**: May discover extensive translation issues requiring remediation
- **Verification**:
  - All audited translations pass native speaker review, OR
  - Issues identified and remediation plan created
  - Translations improved before major push in those locales
- **Status**: ⏳ Planned for Week 3-4

### [TBD] Add FAQ Schema to High-Intent Pages
- **Page**: Monitor buying guide, gaming monitor test, device pages, select blog articles
- **Type**: Technical
- **Change**: Extract or create 3-5 genuine FAQ items per page; add FAQPage schema
- **Reason**: Audit finding: FAQ schema only on dead pixel test; opportunity for snippets on other pages
- **Expected Benefit**:
  - FAQ snippets captured in search results (2-3 pages within 30 days expected)
  - CTR improves for featured question keywords (15-20% increase)
  - Users get answers directly in SERP
- **Risk**: If FAQ content seems artificial, may be penalized
- **Verification**:
  - 2-3 FAQ snippets appear in GSC within 30 days
  - CTR to pages with FAQ snippets increases 15-20%
  - Inbound link traffic to FAQ sections increases
- **Status**: ⏳ Planned for Week 4

---

## PLANNED (P2 — Medium Priority)

### [TBD] Remediate Comparison Pages (If Duplicates Found)
- **Page**: Comparison pages (conditional on P0.3 findings)
- **Type**: Content
- **Change**: For each high-risk page:
  - Add unique analysis (not just specs table)
  - Include TestaScreen's testing perspective
  - Add brand history, common issues, warranty differences
  - Add internal links to related pages
  - Create unique title/meta
- **Reason**: Audit finding (if confirmed): Comparison pages may be templated/duplicated
- **Expected Benefit**:
  - Avoid duplicate content penalty
  - Pages rank for commercial keywords
  - Better user satisfaction (unique perspectives)
  - Estimated 10-20 keywords added to rankings per page
- **Risk**: High effort if many pages affected
- **Verification**:
  - No duplicate content warnings in GSC
  - Comparison pages rank in top 10 for target keywords within 60 days
  - Organic traffic to comparison pages increases
- **Status**: ⏳ Conditional on P0.3 findings (Week 5+)

### [TBD] Remediate Monitor Brand Pages (If Duplicates Found)
- **Page**: Monitor brand pages (conditional on P0.3 findings)
- **Type**: Content
- **Change**: For each high-risk page:
  - Add brand-specific content (not just specs swapped)
  - Example: "ASUS ROG monitors often have calibration issues. Use our color test to check."
  - Add brand-specific testing tips and links to comparisons
  - Create unique title/meta
  - Prioritize top 10 brands by search volume
- **Reason**: Audit finding (if confirmed): Brand pages may be templated
- **Expected Benefit**:
  - Brand pages rank for brand-specific keywords
  - Users searching "ASUS monitor test" find relevant content
  - Better internal linking to comparisons
  - Estimated 5-10 keywords added per brand page
- **Risk**: High effort if many pages need improvement
- **Verification**:
  - Brand pages rank for brand-specific keywords
  - Organic traffic to brand pages increases
  - CTR from brand pages to comparisons increases
- **Status**: ⏳ Conditional on P0.3 findings (Week 5+)

### [TBD] Create "Monitor Specifications Explained" Hub
- **Page**: New page `/guide/monitor-specifications-explained`
- **Type**: Content
- **Change**: Create comprehensive guide covering all monitor specs with links to:
  - Relevant comparison pages
  - Relevant testing tools
  - Relevant blog articles
- **Reason**: Opportunity to rank for informational keywords; serves as hub to comparisons
- **Expected Benefit**:
  - Hub page ranks for informational keywords (50+ keyword variations)
  - Central reference for comparisons and buying guide
  - Improved internal linking network
  - Estimated 1000+ organic visits/month within 3 months
- **Risk**: None (new valuable content)
- **Verification**:
  - Specs hub receives 1000+ organic visits/month within 3 months
  - Ranks top 10 for "monitor specs explained", "refresh rate explained", etc.
  - Links from page to comparisons/tools increase their traffic
- **Status**: ⏳ Planned for Week 6-7

### [TBD] Expand Blog: Gaming Monitor & Video Production Content
- **Page**: New blog articles (4 articles)
- **Type**: Content
- **Change**: Create:
  1. "Gaming Monitor Buying Checklist: What Competitive Gamers Need"
  2. "Refresh Rate Explained: 60Hz vs 144Hz vs 240Hz vs 360Hz"
  3. "Color Accuracy for Photographers: Complete Monitor Testing Guide"
  4. "Video Editing Monitor Requirements: What You Actually Need"
- **Reason**: Opportunity to capture niche keywords; builds authority in specific use cases
- **Expected Benefit**:
  - Niche keywords ranked (gaming, photography, video editing)
  - Content depth builds authority
  - Improved internal linking to tools/comparisons
  - Estimated 500-1000 organic visits/month from new articles within 3 months
- **Risk**: Content quality must be high; must have genuine expertise
- **Verification**:
  - New articles rank for target keywords within 60 days
  - Organic traffic from gaming/photography/video keywords increases
  - Articles achieve 4-5 min average reading time
  - Social shares and backlinks to articles
- **Status**: ⏳ Planned for Week 6-8

### [TBD] Implement "Related Reading" Section on Blog
- **Page**: All blog articles (40-50)
- **Type**: Structure + UX
- **Change**: Add "Related Articles" component at end of each post showing 3-4 related articles
- **Reason**: Opportunity to improve blog session duration and reduce bounce rate
- **Expected Benefit**:
  - Blog session duration increases 20-30%
  - Bounce rate decreases 10-15%
  - Users explore more articles per session
  - Internal link CTR improves
- **Risk**: If related articles are poorly selected, UX worsens
- **Verification**:
  - Blog session duration increases to 3-4 minutes (from baseline)
  - CTR on related article links is 10-15%
  - Blog bounce rate decreases 10-15%
  - Pageviews per session increases 20-30%
- **Status**: ⏳ Planned for Week 6-7

### [TBD] Performance Optimization Fine-Tuning
- **Page**: All key pages (5+)
- **Type**: Technical
- **Change**: Based on Lighthouse results:
  - Lazy-load Three.js hero background (if blocking LCP)
  - Defer GSAP animations
  - Optimize fonts (remove unused weights)
  - Verify image formats
  - Check third-party script loads
- **Reason**: Audit finding: Performance optimized, but fine-tuning opportunity
- **Expected Benefit**:
  - Lighthouse Performance score ≥ 90
  - Core Web Vitals improve
  - Faster page loads = better rankings, better UX
- **Risk**: Changes could introduce bugs; must test thoroughly
- **Verification**:
  - Lighthouse Performance score ≥ 90 on all pages
  - LCP ≤ 2.5s, CLS < 0.1, INP ≤ 200ms
  - Core Web Vitals dashboard shows improvement
- **Status**: ⏳ Planned for Week 7-8 (if needed based on P0.4 results)

---

## PLANNED (P3 — Nice to Have)

### [TBD] Create Advanced Testing Guides
- **Page**: 6 new blog articles
- **Type**: Content
- **Change**: Create guides for:
  1. Display Uniformity Testing
  2. Motion Response Testing for Gaming
  3. Input Lag Testing Guide
  4. Burn-in Prevention & Testing
  5. Screen Flicker Testing & Solutions
  6. Backlight Bleed Detection
- **Reason**: Deepen content; build ultimate resource reputation
- **Expected Benefit**: Authority in advanced topics; capture "advanced" keyword variants
- **Status**: ⏳ Planned for post-P2 (Week 9+)

### [TBD] Create Video Tutorials
- **Page**: YouTube + embedded on site
- **Type**: Multimedia
- **Change**: Create 4 video tutorials (5-6 min each)
- **Reason**: Multimodal content; YouTube referral opportunity
- **Expected Benefit**: 
  - YouTube traffic referral
  - VideoObject schema markup
  - Video snippet opportunities
- **Status**: ⏳ Planned for post-P2

### [TBD] Monitor Brand Reviews
- **Page**: 3 brand review articles
- **Type**: Content
- **Change**: Create hands-on brand reviews (only if actual testing done)
- **Reason**: Unique content; capture brand-specific high-intent keywords
- **Expected Benefit**: High-intent keywords; backlink opportunities
- **Status**: ⏳ Planned for post-P2 (Note: Only if hands-on testing feasible)

### [TBD] Add Downloadable Test Patterns
- **Page**: Guide pages
- **Type**: Resource
- **Change**: Create and offer downloadable test patterns (PDF):
  - Dead pixel test grid
  - Gradient test pattern
  - Moire pattern
- **Reason**: Value-add; backlink/sharing opportunity
- **Expected Benefit**: Resource sharing; backlink acquisition; offline testing
- **Status**: ⏳ Planned for post-P2

### [TBD] Localization: Locale-Specific Content
- **Page**: 4 locale-specific guides (nl, es, de)
- **Type**: Content + Localization
- **Change**: Create locale-specific monitors/buying guides
- **Reason**: Improve non-English locale rankings
- **Expected Benefit**: Better rankings in specific regions; increased engagement from locales
- **Status**: ⏳ Planned for post-P2

---

## ROLLED BACK / CANCELLED

(None to date)

---

## MONITORING & RESULTS

### Monitoring Dashboard (Updated Weekly During P0/P1)
- Organic traffic (Google Analytics)
- Indexation status (GSC)
- Core Web Vitals (PageSpeed Insights / GSC)
- Keyword rankings (top 20 keywords)
- Internal link CTR (analytics)
- Tool page engagement (bounce rate, session duration)
- Blog bounce rate / session duration

### Monthly Deep Dive Report
- Traffic growth vs. baseline (Aug 28)
- Keyword movement (top 10 keywords)
- Engagement metrics (session duration, bounce rate)
- Content performance (which articles gaining traction)
- Roadmap adjustment based on results

---

## CHANGE LOG TEMPLATE (For Future Changes)

```
### [DATE] Change Title
- **Page/Component**: [URL or component name]
- **Type**: [Content / Structure / Technical / Performance / UX]
- **Change**: [What changed, be specific]
- **Reason**: [Which audit finding or opportunity]
- **Expected Benefit**: [Projected SEO/user impact]
- **Risk**: [Potential downsides]
- **Verification**: [How we'll know if it worked]
- **Status**: ✅ Completed / ⏳ In Progress / ⏳ Planned
- **Actual Results** (after 2-4 weeks):
  - Metric 1: [baseline] → [current] ([% change])
  - Metric 2: [baseline] → [current] ([% change])
  - Notes: [Any unexpected outcomes or learnings]
```

---

**Changelog Initialized**: 2026-08-28  
**Owner**: Technical SEO + Product teams  
**Review Frequency**: Weekly (during implementation), Monthly (post-launch)
