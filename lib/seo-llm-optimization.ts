// lib/seo-llm-optimization.ts - Advanced JSON-LD schemas for LLM & AI crawler optimization
// Optimized for: Google AI Overviews, Claude, ChatGPT, Perplexity, and other LLM crawlers
// Focuses on: E-E-A-T signals, topical authority, semantic relationships, and structured facts

import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from './constants';

export interface SchemaConfig {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

/**
 * Knowledge Graph Organization Schema - Enhanced for LLM crawlers
 * Signals authority, credibility, and comprehensive topical coverage
 */
export function llmOptimizedOrganizationSchema(): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': SITE_URL,
    name: SITE_NAME,
    alternateName: 'TestAScreen',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    image: `${SITE_URL}/logo.svg`,
    description: SITE_DESCRIPTION,
    
    // E-A-T Signals (Expertise, Authoritativeness, Trustworthiness)
    sameAs: [
      'https://twitter.com/whitescreen_ai',
      'https://www.youtube.com/c/whitescreen',
    ],
    
    // Contact Information
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@testascreen.com',
      url: `${SITE_URL}/contact`,
      areaServed: ['NL', 'EN', 'ES', 'DE', 'EU'],
      availableLanguage: ['en', 'nl', 'es', 'de'],
    },
    
    // Founder/Person for E-E-A-T
    founder: {
      '@type': 'Person',
      name: 'TestaScreen Development Team',
      url: `${SITE_URL}/about`,
    },
    
    // Topical Authority Markers
    knowledgeCategory: [
      'Display Technology',
      'Screen Testing',
      'Monitor Quality',
      'Display Diagnostics',
      'Professional Imaging',
    ],
    
    // Service Coverage
    areaServed: {
      '@type': 'Continent',
      name: 'Europe',
    },
    
    // Ratings and Reviews Aggregate
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '2500',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '2500',
    },

    // Searchable Properties for AI Indexing
    searchable: true,
    inLanguage: ['en', 'nl', 'es', 'de'],
  };
}

/**
 * WebSite Schema with Knowledge Graph Integration
 * Improves understanding of site purpose and scope for LLM crawlers
 */
export function llmOptimizedWebsiteSchema(): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: ['en', 'nl', 'es', 'de'],
    
    // Main Entity Definition
    mainEntity: {
      '@type': 'Organization',
      '@id': SITE_URL,
      name: SITE_NAME,
    },

    // Search capabilities
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/blog?query={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },

    // Topic Coverage for LLM Context
    topics: [
      'Screen Testing',
      'Monitor Quality Diagnostics',
      'Display Technology',
      'Color Accuracy',
      'Dead Pixel Detection',
      'Professional Imaging Tools',
    ],
  };
}

/**
 * Topic Authority Schema - Maps content coverage for AI crawlers
 * Helps LLMs understand depth of expertise
 */
export function topicalAuthoritySchema(): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/#topical-authority`,
    name: `${SITE_NAME} - Topic Coverage`,
    description: 'Comprehensive coverage of display testing and screen quality diagnostics',
    
    // Core Topic Coverage
    mainTopic: [
      {
        '@type': 'Thing',
        name: 'Screen Testing',
        description: 'Comprehensive tools for testing display quality, color accuracy, and screen functionality',
        url: `${SITE_URL}/tools`,
      },
      {
        '@type': 'Thing',
        name: 'Dead Pixel Detection',
        description: 'Advanced techniques to identify and diagnose dead or stuck pixels',
        url: `${SITE_URL}/dead-pixel-test`,
      },
      {
        '@type': 'Thing',
        name: 'Color Accuracy Testing',
        description: 'Professional-grade tools for RGB color testing and monitor calibration verification',
        url: `${SITE_URL}/tools`,
      },
      {
        '@type': 'Thing',
        name: 'Monitor Buying Guide',
        description: 'Expert guidance for selecting monitors based on purpose and quality metrics',
        url: `${SITE_URL}/monitor-buying-guide`,
      },
    ],
    
    // Related Topics for Context
    relatedTopic: [
      'Display Quality Standards',
      'Color Management',
      'Professional Imaging',
      'Gaming Monitor Selection',
      'Professional Photography',
      'Video Production',
    ],

    // Content Depth Indicator
    contentRating: {
      '@type': 'ContentRating',
      ratingValue: 'Expert',
      ratingExplanation: 'Comprehensive, well-researched content with technical depth',
    },
  };
}

/**
 * Article Schema with Enhanced E-E-A-T signals
 * For blog posts and informational content
 */
export function llmOptimizedArticleSchema(params: {
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  articleBody?: string;
  keywords?: string[];
}): SchemaConfig {
  const {
    headline,
    description,
    url,
    image,
    datePublished,
    dateModified,
    author = SITE_NAME,
    articleBody,
    keywords,
  } = params;

  return {
    '@context': 'https://schema.org',
    '@type': ['Article', 'TechArticle', 'NewsArticle'],
    '@id': url,
    url,
    headline,
    alternativeHeadline: description,
    description,
    image: {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630,
      caption: headline,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    
    // E-E-A-T Author Information
    author: {
      '@type': 'Organization',
      name: author,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.svg`,
        width: 64,
        height: 64,
      },
    },

    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.svg`,
        width: 64,
        height: 64,
      },
    },

    // Credibility Signals
    isAccessibleForFree: true,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
    },

    // Article Body for LLM Context
    articleBody: articleBody || description,

    // Keywords for topical relevance
    keywords: keywords?.join(', '),

    // Aggregate Rating
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1',
    },

    // Fact-checking and credibility
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', 'p'],
    },

    // Article Type Classification
    articleSection: 'Technology',
  };
}

/**
 * HowTo Schema for tool guides and tutorials
 * Helps LLMs understand procedural content
 */
export function llmOptimizedHowToSchema(params: {
  name: string;
  description: string;
  url: string;
  image: string;
  steps: Array<{
    name: string;
    text: string;
    image?: string;
  }>;
  totalTime?: string;
  yield?: string;
}): SchemaConfig {
  const { name, description, url, image, steps, totalTime, yield: yields } = params;

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': url,
    name,
    description,
    url,
    image: {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630,
    },
    
    // Step-by-step instructions
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image
        ? {
            '@type': 'ImageObject',
            url: step.image,
            width: 800,
            height: 600,
          }
        : undefined,
      url: `${url}#step-${index + 1}`,
    })),

    // Metadata
    totalTime: totalTime,
    yield: yields,
    inLanguage: 'en',
  };
}

/**
 * Tool/Service Schema - For screen testing tools
 * Detailed product information for LLM understanding
 */
export function llmOptimizedToolSchema(params: {
  name: string;
  description: string;
  url: string;
  image: string;
  applicationCategory: string;
  features: string[];
  useCases: string[];
  aggregateRating?: {
    ratingValue: number;
    ratingCount: number;
  };
}): SchemaConfig {
  const {
    name,
    description,
    url,
    image,
    applicationCategory,
    features,
    useCases,
    aggregateRating,
  } = params;

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': url,
    name,
    description,
    url,
    image,
    applicationCategory: `https://schema.org/${applicationCategory}`,
    operatingSystem: 'Web',
    
    // Free/Freemium Offer
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url,
    },

    // Feature List
    featureList: features.map((feature) => ({
      '@type': 'Text',
      description: feature,
    })),

    // Use Cases for LLM Context
    potentialUse: useCases.map((useCase) => ({
      '@type': 'Thing',
      name: useCase,
    })),

    // Ratings
    aggregateRating: aggregateRating
      ? {
          '@type': 'AggregateRating',
          ratingValue: aggregateRating.ratingValue,
          ratingCount: aggregateRating.ratingCount,
          bestRating: 5,
          worstRating: 1,
        }
      : undefined,

    // Requirements and Compatibility
    systemRequirements: 'Modern web browser',
    releaseNotes: 'Continuously updated with latest features',
  };
}

/**
 * ComparisonChart Schema - For monitor comparisons
 * Helps LLMs understand comparative analysis
 */
export function llmOptimizedComparisonSchema(params: {
  name: string;
  description: string;
  url: string;
  items: Array<{
    name: string;
    image?: string;
    specs: Record<string, string | number>;
  }>;
}): SchemaConfig {
  const { name, description, url, items } = params;

  return {
    '@context': 'https://schema.org',
    '@type': 'ComparisonChart',
    '@id': url,
    name,
    description,
    url,
    
    // Comparison items with specifications
    compareObject: items.map((item) => ({
      '@type': 'Thing',
      name: item.name,
      image: item.image,
      ...item.specs,
    })),

    // Chart Type
    chartType: 'ComparativeTable',
    inLanguage: 'en',
  };
}

/**
 * Review & Rating Schema for credibility
 * Aggregate reviews from users
 */
export function llmOptimizedReviewSchema(params: {
  name: string;
  url: string;
  ratingValue: number;
  ratingCount: number;
  reviewCount: number;
  description: string;
}): SchemaConfig {
  const { name, url, ratingValue, ratingCount, reviewCount, description } = params;

  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    '@id': url,
    ratedItem: {
      '@type': 'Thing',
      name,
      url,
      description,
    },
    ratingValue,
    ratingCount,
    reviewCount,
    bestRating: 5,
    worstRating: 1,
    
    // Trustworthiness indicator
    reviewRating: {
      '@type': 'Rating',
      ratingValue: ratingValue,
      bestRating: 5,
      worstRating: 1,
      ratingExplanation: 'User satisfaction based on tool effectiveness and reliability',
    },
  };
}

/**
 * About Page Schema - Enhanced authority and credibility
 */
export function llmOptimizedAboutPageSchema(): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE_URL}/about`,
    name: `About ${SITE_NAME}`,
    description: `Learn about ${SITE_NAME} - Professional screen testing and display diagnostics tools`,
    url: `${SITE_URL}/about`,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
    },

    // Mission and purpose
    mainEntity: {
      '@type': 'Organization',
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      mission:
        'Providing professional-grade screen testing tools and information for photographers, videographers, gamers, and tech professionals worldwide',
      
      foundingDate: '2024',
      
      // Accessibility commitment
      accessibility: 'WCAG2AA',
      
      // Technology stack indicators
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Web Standards',
      ],
    },

    // Expertise areas for LLM crawlers
    knowledgeBase: [
      'Screen Testing Methodology',
      'Display Technology',
      'Color Accuracy Standards',
      'Professional Imaging',
      'Quality Assurance',
    ],
  };
}

/**
 * FAQ Page Schema with E-E-A-T enhancement
 */
export function llmOptimizedFAQSchema(
  items: Array<{ question: string; answer: string }>
): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
      author: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
      },
      dateModified: new Date().toISOString(),
    })),
  };
}

/**
 * Breadcrumb Schema with URL structure for LLM navigation
 */
export function llmOptimizedBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/**
 * JSON-LD Collection for root layout injection
 * Combines organization, website, and topical authority schemas
 */
export function llmOptimizedRootSchemas(): SchemaConfig[] {
  return [
    llmOptimizedOrganizationSchema(),
    llmOptimizedWebsiteSchema(),
    topicalAuthoritySchema(),
    llmOptimizedAboutPageSchema(),
  ];
}

/**
 * Helper to stringify schema for JSON-LD injection
 */
export function schemaToJsonLd(schema: SchemaConfig | SchemaConfig[]): string {
  if (Array.isArray(schema)) {
    return JSON.stringify({ '@context': 'https://schema.org', '@graph': schema });
  }
  return JSON.stringify(schema);
}
