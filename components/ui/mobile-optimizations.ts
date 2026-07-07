/**
 * Mobile Performance Optimizations for Lighthouse
 * Desktop version remains untouched
 */

export const MOBILE_OPTIMIZATIONS = {
  /**
   * Inject performance-critical meta tags for mobile
   */
  getPerformanceMetaTags: () => [
    { name: 'preconnect', href: 'https://fonts.googleapis.com' },
    { name: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' },
    { name: 'preconnect', href: 'https://fonts.gstatic.com' },
  ],

  /**
   * Detect if viewing on mobile
   */
  isMobileViewport: (width: number = 768): boolean => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < width;
  },

  /**
   * Lazy load heavy components
   */
  lazyLoadThreshold: '100px',

  /**
   * Reduce animations on mobile
   */
  shouldReduceMotion: (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  /**
   * Check for data-saver mode
   */
  isSavingData: (): boolean => {
    if (typeof navigator === 'undefined') return false;
    return (navigator as any).connection?.saveData === true;
  },

  /**
   * Mobile-first CSS media queries
   */
  cssMediaQueries: {
    mobile: '(max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 1023px)',
    desktop: '(min-width: 1024px)',
  },

  /**
   * Image optimization settings
   */
  imageOptimization: {
    mobileWidth: 480,
    tabletWidth: 768,
    desktopWidth: 1280,
    quality: {
      mobile: 65,
      tablet: 75,
      desktop: 85,
    },
  },

  /**
   * Font loading strategy
   */
  fontStrategy: {
    swap: true, // Reduce CLS
    preload: true,
    critical: ['Space Grotesk', 'Manrope'],
  },

  /**
   * Resource hints for mobile
   */
  resourceHints: {
    preload: [
      // Only preload absolutely critical resources
    ],
    prefetch: [
      // Defer non-critical resources
    ],
  },
};

/**
 * Inject performance optimizations
 */
export function injectMobileOptimizations() {
  if (typeof document === 'undefined') return;

  const isMobile = window.innerWidth < 768;
  if (!isMobile) return;

  // Defer non-critical analytics
  if ((window as any).gtag) {
    ((window as any).gtag).config = ((window as any).gtag).config || {};
  }

  // Optimize network requests
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => {
      // Prefetch resources after page load
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection?.effectiveType !== '4g') {
          // Reduce prefetching on slow connections
        }
      }
    });
  }
}

export default MOBILE_OPTIMIZATIONS;
