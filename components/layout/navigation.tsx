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
        <Link href={getLocalizedPath(locale, '/dead-pixel-fixer')} className="nav-link-premium focus-ring font-semibold text-[#00DC82] hover:text-emerald-300 transition-colors">
          ✨ Fixer
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
        <div className="absolute top-full left-0 right-0 z-50 border-b border-slate-700 bg-gradient-to-b from-slate-900 to-slate-950 backdrop-blur-xl shadow-2xl md:hidden animate-in">
          <nav className="container py-6 space-y-1">
            {/* Links */}
            <Link
              href={getLocalizedPath(locale, '/about')}
              className="block rounded-lg px-4 py-3 text-slate-100 bg-slate-800/30 hover:bg-slate-700 hover:text-cyan-300 transition-colors focus-ring"
              onClick={() => setIsOpen(false)}
            >
              {translate('about')}
            </Link>
            <Link
              href={getLocalizedPath(locale, '/blog')}
              className="block rounded-lg px-4 py-3 text-slate-100 bg-slate-800/30 hover:bg-slate-700 hover:text-cyan-300 transition-colors focus-ring"
              onClick={() => setIsOpen(false)}
            >
              {translate('blog')}
            </Link>
            <Link
              href={getLocalizedPath(locale, '/contact')}
              className="block rounded-lg px-4 py-3 text-slate-100 bg-slate-800/30 hover:bg-slate-700 hover:text-cyan-300 transition-colors focus-ring"
              onClick={() => setIsOpen(false)}
            >
              {translate('contact')}
            </Link>
            <Link
              href={getLocalizedPath(locale, '/dead-pixel-fixer')}
              className="block rounded-lg px-4 py-3 font-semibold text-[#00DC82] bg-slate-800/50 hover:bg-slate-700 hover:text-emerald-300 transition-colors focus-ring"
              onClick={() => setIsOpen(false)}
            >
              ✨ Dead Pixel Fixer
            </Link>

            {/* Divider */}
            <div className="my-3 border-t border-slate-700/50" />

            {/* Language Selector - Mobile */}
            <div className="px-4 py-3">
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
