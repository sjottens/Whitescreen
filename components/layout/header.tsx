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
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const isDesktopViewport = () => window.matchMedia('(min-width: 768px)').matches;

    const syncViewportMode = () => {
      // Ensure predictable state after breakpoint changes.
      setIsHeaderVisible(true);
      lastScrollYRef.current = window.scrollY;
    };

    syncViewportMode();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const previousScrollY = lastScrollYRef.current;
      const delta = currentScrollY - previousScrollY;
      const desktop = isDesktopViewport();

      // Always show near top.
      if (currentScrollY <= 80) {
        setIsHeaderVisible(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      // Ignore tiny movements to avoid jitter.
      if (Math.abs(delta) <= (desktop ? 2 : 4)) {
        return;
      }

      setIsHeaderVisible(delta < 0);
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', syncViewportMode, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', syncViewportMode);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[120] w-full border-b border-slate-700/80 bg-slate-950/92 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/88 transition-transform duration-300 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
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
