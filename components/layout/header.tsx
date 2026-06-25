// components/layout/header.tsx - Navigation header with SEO optimization

'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { SITE_NAME } from '@/lib/constants';
import { getLocalizedPath } from '@/lib/link-utils';
import Navigation from './navigation';
import Logo from '@/components/ui/logo';
import type { Locale } from '@/lib/i18n';

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const syncViewportMode = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      if (!desktop) {
        setIsHeaderVisible(true);
      }
    };

    syncViewportMode();

    let ticking = false;

    const handleScroll = () => {
      if (!isDesktop) {
        return;
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = Math.abs(currentScrollY - lastScrollYRef.current);

          // Only update if scroll difference is significant (prevent jitter)
          if (scrollDifference > 5) {
            // Show header when scrolling up or at top of page
            const isScrollingUp = currentScrollY < lastScrollYRef.current;
            const isAtTop = currentScrollY < 80;

            setIsHeaderVisible(isScrollingUp || isAtTop);
            lastScrollYRef.current = currentScrollY;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', syncViewportMode, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', syncViewportMode);
    };
  }, [isDesktop]);

  return (
    <header
      className={`sticky top-0 z-[120] w-full border-b border-slate-700/80 bg-slate-950/92 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/88 transition-transform duration-300 ${
        isDesktop && !isHeaderVisible ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container py-4 md:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={getLocalizedPath(locale, '/')} className="group flex items-center gap-3 focus-ring">
            <Logo locale={locale} />
            <span className="text-xl md:text-2xl font-bold text-slate-100 transition-colors group-hover:text-cyan-300">
              {SITE_NAME}
            </span>
          </Link>

          {/* Navigation */}
          <Navigation locale={locale} />
        </div>
      </div>
    </header>
  );
}
