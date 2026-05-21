// components/layout/anchor-scroll-handler.tsx - Handle anchor link scrolling
'use client';

import { useEffect } from 'react';

export default function AnchorScrollHandler() {
  useEffect(() => {
    // Function to scroll to element by ID
    const scrollToElement = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        try {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } catch (e) {
          // Fallback to manual scroll
          const offsetTop = element.getBoundingClientRect().top + window.scrollY;
          const headerHeight = 80;
          window.scrollTo({
            top: Math.max(0, offsetTop - headerHeight),
            behavior: 'smooth'
          });
        }
      }
    };

    // Handle initial hash on page load
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        // Small delay to ensure DOM is ready
        setTimeout(() => scrollToElement(id), 50);
      }

      // Handle hash changes during navigation
      const handleHashChange = () => {
        const hash = window.location.hash;
        if (hash) {
          const id = hash.replace('#', '');
          scrollToElement(id);
        }
      };

      window.addEventListener('hashchange', handleHashChange);
      return () => window.removeEventListener('hashchange', handleHashChange);
    }
  }, []);

  return null;
}
