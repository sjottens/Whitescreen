# Internal Linking Strategy for TestaScreen SEO Authority

## Overview

Internal linking is critical for:
- **Crawlability**: Helps search engines discover all pages
- **Authority Distribution**: Passes PageRank to important pages
- **User Navigation**: Guides users to related content
- **Topic Authority**: Shows semantic relationship between pages
- **CTR Improvement**: Increases engagement and session depth

---

## Topic Cluster Architecture

### Cluster 1: Dead Pixel & Defect Detection (PRIMARY)

**Pillar Page**: `/dead-pixel-test` (High authority destination)

**Cluster Content**:
```
/dead-pixel-test (Pillar)
├── /stuck-pixel-test (Sub-topic)
├── /burn-in-test (Sub-topic - OLED specific)
├── /uniformity-test (Sub-topic)
├── /iphone-screen-test (Device variant)
├── /macbook-screen-test (Device variant)
├── /ipad-screen-test (Device variant)
├── /android-screen-test (Device variant)
├── /monitor-test/asus (Brand variant)
├── /monitor-test/lg (Brand variant)
├── /monitor-test/samsung (Brand variant)
└── /monitor-test/dell (Brand variant)
```

**Linking Strategy**:
- Pillar page links to ALL sub-topics (with context)
- Sub-topics link back to pillar with keyword "dead pixel test"
- Device pages link to similar device tests
- Brand pages link to similar brand tests
- Cross-links where appropriate (e.g., OLED burn-in → Samsung monitors)

---

### Cluster 2: Display Testing & Diagnostics

**Pillar Page**: `/tools` (Consolidates all tools)

**Cluster Content**:
```
/tools (Pillar)
├── Color Screen Tests
│   ├── /white-screen
│   ├── /black-screen
│   ├── /red-screen
│   ├── /blue-screen
│   ├── /green-screen
│   ├── /pink-screen
│   ├── /purple-screen
│   ├── /orange-screen
│   └── /yellow-screen
├── Diagnostic Tools
│   ├── /brightness-test
│   ├── /contrast-test
│   ├── /zoom-lighting
│   └── /dead-pixel-test
├── Device-Specific
│   ├── /iphone-screen-test
│   ├── /ipad-screen-test
│   ├── /macbook-screen-test
│   └── /android-screen-test
└── Resolution Testing
    ├── /1080p-screen-test
    ├── /2k-screen-test
    ├── /4k-screen-test
    └── /8k-screen-test
```

---

### Cluster 3: Professional Use Cases

**Pillar**: `/about` + dedicated use case pages

**Topics**:
- Photography lighting use case
- Video production use case
- Gaming display optimization
- IT/Business device testing
- Accessibility compliance testing

---

### Cluster 4: Device-Specific Testing

**Pillar Page**: None specific (distributed strategy)

**Device Cluster**:
```
/iphone-screen-test
├── Links to: /ipad-screen-test, /macbook-screen-test
├── Links to: /dead-pixel-test
├── Links to: /color-test
└── Links to: /android-screen-test (comparison)

/ipad-screen-test
├── Links to: /iphone-screen-test
├── Links to: /macbook-screen-test
├── Links to: /4k-screen-test
└── Links to: /dead-pixel-test

/macbook-screen-test
├── Links to: /iphone-screen-test
├── Links to: /ipad-screen-test
├── Links to: /retina-display-test (future)
└── Links to: /dead-pixel-test

/android-screen-test
├── Links to: /iphone-screen-test (comparison)
├── Links to: /1080p-screen-test
├── Links to: /4k-screen-test
└── Links to: /dead-pixel-test
```

---

### Cluster 5: Monitor Testing by Brand

**Pillar**: N/A (brand pages link to parent)

**Monitor Brand Cluster**:
```
/monitor-test/asus
├── Links to: /monitor-test/lg
├── Links to: /monitor-test/samsung
├── Links to: /dead-pixel-test
├── Links to: /4k-screen-test (if ASUS 4K)
├── Links to: /gaming-monitor-test
└── Links to: Related tools

/monitor-test/lg
├── Links to: /monitor-test/asus
├── Links to: /monitor-test/samsung
├── Links to: /monitor-test/dell
├── Links to: /oled-tv-test (LG OLED)
├── Links to: /dead-pixel-test
└── Links to: Related tools

/monitor-test/samsung
├── Links to: /monitor-test/asus
├── Links to: /monitor-test/lg
├── Links to: /monitor-test/lg (OLED comparison)
├── Links to: /dead-pixel-test
├── Links to: /4k-screen-test
└── Links to: /gaming-monitor-test
```

---

### Cluster 6: Resolution-Specific Testing

**Linking Pattern**:
```
/1080p-screen-test
├── Links to: /2k-screen-test
├── Links to: /4k-screen-test (comparison)
├── Links to: /monitor-test/[brands] (1080p models)
├── Links to: /iphone-screen-test (1080p examples)
└── Links to: /dead-pixel-test

/4k-screen-test
├── Links to: /1080p-screen-test (comparison)
├── Links to: /2k-screen-test (comparison)
├── Links to: /8k-screen-test (comparison)
├── Links to: /monitor-test/asus (4K models)
├── Links to: /macbook-screen-test (Retina)
├── Links to: /response-time-test (4K considerations)
└── Links to: /dead-pixel-test

/8k-screen-test
├── Links to: /4k-screen-test (comparison)
├── Links to: /professional-display-test
├── Links to: /video-production-tools
└── Links to: /dead-pixel-test
```

---

## Contextual Linking Strategy

### Type 1: Related Tools (Direct Relevance)

**When to Use**: Page A is directly related to Page B

**Example**: On `/white-screen` page:
```html
<RelatedTools>
  <Tool name="Black Screen" link="/black-screen" 
        reason="Complementary test - opposite colors" />
  <Tool name="Dead Pixel Test" link="/dead-pixel-test" 
        reason="Best used with white/black screens" />
  <Tool name="Brightness Test" link="/brightness-test" 
        reason="Extended testing with gray ladder" />
</RelatedTools>
```

### Type 2: People Also Ask (Intent-Based)

**When to Use**: User likely wants related information

**Example**: On `/4k-screen-test` page:
```html
<PeopleAlsoAsk>
  <Question link="/1080p-screen-test">
    "What's the difference between 1080p and 4K?"
  </Question>
  <Question link="/response-time-test">
    "How does 4K affect response time?"
  </Question>
  <Question link="/gaming-monitor-test">
    "Is 4K good for gaming?"
  </Question>
</PeopleAlsoAsk>
```

### Type 3: Progressive Disclosure (User Journey)

**Beginner**: Links to basic explanations
```
Beginner User Path:
dead-pixel-test → what-are-dead-pixels → how-to-prevent → professional-options
```

**Intermediate**: Links to advanced options
```
Intermediate User Path:
4k-screen-test → response-time-test → gaming-monitor-test → brand-specific-testing
```

**Expert**: Links to specialized tools
```
Expert User Path:
monitor-test/asus → color-calibration → gamma-testing → professional-workflows
```

---

## Technical Implementation

### Link Anchor Text Best Practices

**✅ Good Anchor Text** (descriptive, keyword-aware):
- "Check for dead pixels with our detector"
- "Test your 4K display resolution"
- "See how this compares to the 1080p test"

**❌ Poor Anchor Text** (generic):
- "Click here"
- "Read more"
- "Learn more"
- "More information"

### Link Placement Strategy

**Position 1**: Content body (highest priority)
```
"...which is why we recommend testing with our dead pixel detector 
[link: /dead-pixel-test]..."
```

**Position 2**: "Related Tools" section
```
<RelatedTools>
  [link: /stuck-pixel-test]
  [link: /burn-in-test]
</RelatedTools>
```

**Position 3**: "See Also" / "Next Steps" footer
```
<NextSteps>
  "Next, try: [link: /brightness-test]"
</NextSteps>
```

### Link Frequency Guidelines

- **Single page**: 3-7 outbound links optimal
- **Too many**: >15 links dilutes authority
- **Too few**: <2 links misses opportunity
- **Mobile**: 2-4 links (space constrained)
- **Desktop**: 4-7 links (more space)

---

## Page-Specific Linking Plan

### Color Screen Pages
```
white-screen:
  → black-screen (opposite/complementary)
  → dead-pixel-test (use case)
  → brightness-test (related tool)
  → contrast-test (related tool)
  → Tools overview
  → Home

black-screen:
  → white-screen (opposite/complementary)
  → dead-pixel-test (primary use)
  → stuck-pixel-test (related)
  → Tools overview
  → Home
```

### Device-Specific Pages
```
iphone-screen-test:
  → ipad-screen-test (related Apple device)
  → macbook-screen-test (related Apple device)
  → 1080p-screen-test (typical resolution)
  → dead-pixel-test (primary concern)
  → Home
  → Tools overview

macbook-screen-test:
  → iphone-screen-test (related device)
  → ipad-screen-test (related device)
  → 4k-screen-test (Retina is high-res)
  → brightness-test (typical concern)
  → dead-pixel-test (reference)
  → Home
```

### Monitor Brand Pages
```
monitor-test/asus:
  → monitor-test/lg (competing brand)
  → monitor-test/samsung (competing brand)
  → monitor-test/dell (competing brand)
  → 4k-screen-test (if ASUS 4K line)
  → gaming-monitor-test (ASUS gaming focus)
  → dead-pixel-test (primary concern)
  → Home

monitor-test/lg:
  → monitor-test/asus (competing brand)
  → monitor-test/samsung (competing brand)
  → oled-tv-test (LG OLED expertise)
  → dead-pixel-test (primary concern)
  → burn-in-test (OLED concern)
  → Home
```

---

## Multilingual Link Handling

### Hreflang + Internal Links

When linking to related pages, ensure:
```typescript
// English page /white-screen links to:
- /black-screen (same language)
- /nl/black-screen (if suggesting multilingual)

// Dutch page /nl/white-screen links to:
- /nl/black-screen (Dutch version)
- /nl/dead-pixel-test (Dutch version)
- NOT /black-screen (wrong locale)
```

### Language-Aware Suggestions
```
On /nl/white-screen (Dutch page):
→ Links should point to /nl/* (Dutch pages)

Footer language selector can link cross-language:
→ English version: /white-screen
→ Dutch version: /nl/white-screen
→ Spanish version: /es/white-screen
```

---

## Crawl Depth Optimization

**Depth 1** (Direct from homepage):
- /tools
- /about
- /contact
- /dead-pixel-test

**Depth 2** (2 clicks from homepage):
- /white-screen (via /tools)
- /brightness-test (via /tools)
- /monitor-test/asus (via /tools)

**Depth 3** (3 clicks from homepage):
- /monitor-test/asus/faq (via /tools → /monitor-test)
- Specialized guides

**Goal**: Most important pages should be Depth 1-2

---

## Authority Distribution

### High Authority Pages (Receive many inbound links)
1. `/dead-pixel-test` (pillar)
2. `/tools` (hub)
3. `/white-screen` (popular color)
4. `/black-screen` (popular color)

### Medium Authority Pages (Receive some links)
- Device-specific tests
- Monitor brand pages
- Resolution tests
- Specialized tools

### Lower Authority Pages (Receive few links)
- Brand-specific FAQs
- Device comparison pages
- Advanced technical pages

---

## Link Building Opportunities

### Internal Linking Ideas
1. **FAQ Links**: Link from FAQ answers to relevant tools
2. **Comparison Tables**: Link between compared items
3. **Recommendation Sections**: "Choose based on your use case" → links
4. **Breadcrumbs**: Navigation trail with links
5. **Related Content**: Smart suggestions at bottom
6. **Featured Snippets**: Format content to target specific links in answer box

---

## Monitoring & Optimization

### Track These Metrics
- Inbound links per page
- Outbound links per page
- Click-through rate per link
- Internal link conversion rate
- Pages per session (depth indicator)

### Optimization Signals
- ⚠️ Page has >0 inbound links: Good
- ⚠️ Page has 0 inbound links: Fix (orphaned page)
- ⚠️ Link receives <5 clicks/month: Review relevance
- ⚠️ Link receives 100+ clicks/month: Consider promoting

---

## Summary: Key Principles

1. **Relevance**: Links should be contextually relevant
2. **Natural**: Anchor text should feel natural
3. **Purposeful**: Each link serves user
4. **Hierarchical**: Establish page authority through link distribution
5. **Multilingual**: Respect locale in link structure
6. **Discoverable**: All important pages within 2-3 clicks
7. **Semantic**: Links reinforce topic authority
8. **User-Centric**: Prioritize user journey over pure SEO
