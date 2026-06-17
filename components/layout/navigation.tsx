// components/layout/navigation.tsx - Main navigation with SEO-friendly links and multilingual support

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { getLocalizedPath, parseLocalePath } from '@/lib/link-utils';
import { t } from '@/lib/translations';
import LanguageSelector from './language-selector';
import type { Locale } from '@/lib/i18n';

interface NavigationProps {
  locale: Locale;
}

export default function Navigation({ locale }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const translate = t(locale);
  
  // Extract the clean path without locale prefix
  const [, cleanPath] = parseLocalePath(pathname);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {/* Links */}
        <Link href={getLocalizedPath(locale, '/about')} className="nav-link-premium focus-ring">
          {translate('about')}
        </Link>
        <Link href={getLocalizedPath(locale, '/blog')} className="nav-link-premium focus-ring">
          {translate('blog')}
        </Link>
        <Link href={getLocalizedPath(locale, '/contact')} className="nav-link-premium focus-ring">
          {translate('contact')}
        </Link>

        {/* Language Selector */}
        <LanguageSelector locale={locale} currentPath={cleanPath} />

        {/* CTA Button */}
        <Link href={getLocalizedPath(locale, '/white-screen')} className="btn btn-primary">
          {translate('btn_start_testing')}
        </Link>
      </nav>

      {/* Mobile Navigation Toggle */}
      <button
        className="md:hidden rounded-lg p-2 text-slate-100 transition-colors hover:bg-slate-800 hover:text-white focus-ring"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={translate('navigation_toggle_menu_aria' as any)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 border-b border-slate-700 bg-slate-950/96 backdrop-blur-xl shadow-2xl md:hidden animate-in">
          <nav className="container py-4 space-y-2">
            {/* Links */}
            <Link
              href={getLocalizedPath(locale, '/about')}
              className="block rounded-lg px-4 py-2 text-slate-100 hover:bg-slate-800 hover:text-cyan-300 focus-ring"
              onClick={() => setIsOpen(false)}
            >
              {translate('about')}
            </Link>
            <Link
              href={getLocalizedPath(locale, '/blog')}
              className="block rounded-lg px-4 py-2 text-slate-100 hover:bg-slate-800 hover:text-cyan-300 focus-ring"
              onClick={() => setIsOpen(false)}
            >
              {translate('blog')}
            </Link>
            <Link
              href={getLocalizedPath(locale, '/contact')}
              className="block rounded-lg px-4 py-2 text-slate-100 hover:bg-slate-800 hover:text-cyan-300 focus-ring"
              onClick={() => setIsOpen(false)}
            >
              {translate('contact')}
            </Link>

            {/* Language Selector - Mobile */}
            <div className="px-4 py-2">
              <LanguageSelector locale={locale} currentPath={cleanPath} />
            </div>

            {/* CTA Button */}
            <Link
              href={getLocalizedPath(locale, '/white-screen')}
              className="block btn btn-primary w-full mt-4"
              onClick={() => setIsOpen(false)}
            >
              {translate('btn_start_testing')}
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
