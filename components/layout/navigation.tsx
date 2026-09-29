// components/layout/navigation.tsx - Main navigation with SEO-friendly links and multilingual support

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { getLocalizedPath, parseLocalePath } from '@/lib/link-utils';
import { HARDWARE_TOOLS, ENGLISH_ONLY_PATHS } from '@/lib/hardware-tools';
import LanguageSelector from './language-selector';
import type { Locale } from '@/lib/i18n';
import type { HeaderLabels } from '@/lib/ui-strings';

interface NavigationProps {
  locale: Locale;
  labels: HeaderLabels;
}

// The hardware tests are English-only pages, so they're linked without a
// locale prefix. The screen test is localized like the rest of the site.
const toolHref = (locale: Locale, path: string, id: string) =>
  id === 'screen-test' ? getLocalizedPath(locale, path) : path;

export default function Navigation({ locale, labels }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Extract the clean path without locale prefix
  const [, cleanPath] = parseLocalePath(pathname);
  const englishOnly = ENGLISH_ONLY_PATHS.has(cleanPath);

  const mobileLink =
    'block rounded-lg px-4 py-3 text-slate-100 bg-slate-800/30 hover:bg-slate-700 hover:text-cyan-300 transition-colors focus-ring';

  return (
    <>
      {/* Desktop Navigation */}
      <nav aria-label="Main" className="hidden xl:flex items-center gap-5 text-sm">
        {HARDWARE_TOOLS.map((tool) => (
          <Link
            key={tool.id}
            href={toolHref(locale, tool.path, tool.id)}
            aria-current={cleanPath === tool.path ? 'page' : undefined}
            className="nav-link-premium focus-ring aria-[current=page]:text-cyan-300"
          >
            {tool.name}
          </Link>
        ))}
        <Link href={getLocalizedPath(locale, '/dead-pixel-fixer')} className="nav-link-premium focus-ring">
          Pixel Fixer
        </Link>
        <Link href={getLocalizedPath(locale, '/blog')} className="nav-link-premium focus-ring">
          {labels.blog}
        </Link>

        {/* Language Selector */}
        {!englishOnly && <LanguageSelector locale={locale} labels={labels} currentPath={cleanPath} />}
      </nav>

      {/* Mobile Navigation Toggle */}
      <button
        className="xl:hidden rounded-lg p-2 text-slate-100 transition-colors hover:bg-slate-800 hover:text-white focus-ring"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={labels.menuAria}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 right-0 z-50 max-h-[calc(100vh-72px)] overflow-y-auto border-b border-slate-700 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl xl:hidden"
        >
          <nav aria-label="Main" className="container py-6">
            <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wide text-slate-400">Tests</p>
            <ul className="list-none space-y-1 pl-0">
              {HARDWARE_TOOLS.map((tool) => (
                <li key={tool.id} className="mb-0">
                  <Link href={toolHref(locale, tool.path, tool.id)} className={mobileLink} onClick={() => setIsOpen(false)}>
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="my-3 border-t border-slate-700/50" />

            <ul className="list-none space-y-1 pl-0">
              <li className="mb-0">
                <Link href={getLocalizedPath(locale, '/dead-pixel-fixer')} className={mobileLink} onClick={() => setIsOpen(false)}>
                  Dead Pixel Fixer
                </Link>
              </li>
              <li className="mb-0">
                <Link href={getLocalizedPath(locale, '/blog')} className={mobileLink} onClick={() => setIsOpen(false)}>
                  {labels.blog}
                </Link>
              </li>
              <li className="mb-0">
                <Link href={getLocalizedPath(locale, '/about')} className={mobileLink} onClick={() => setIsOpen(false)}>
                  {labels.about}
                </Link>
              </li>
              <li className="mb-0">
                <Link href={getLocalizedPath(locale, '/contact')} className={mobileLink} onClick={() => setIsOpen(false)}>
                  {labels.contact}
                </Link>
              </li>
            </ul>

            {!englishOnly && (
              <>
                <div className="my-3 border-t border-slate-700/50" />

                {/* Language Selector - Mobile */}
                <div className="px-4 py-3">
                  <LanguageSelector locale={locale} labels={labels} currentPath={cleanPath} onSelect={() => setIsOpen(false)} />
                </div>
              </>
            )}
          </nav>
        </div>
      )}
    </>
  );
}
