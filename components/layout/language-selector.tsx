// components/layout/language-selector.tsx - Professional language selector

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { getLocaleAlternativePath } from '@/lib/link-utils';
import { LOCALE_METADATA } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

interface LanguageSelectorProps {
  locale: Locale;
  currentPath: string;
}

export default function LanguageSelector({ locale, currentPath }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const languages: Array<{ locale: Locale; code: string; name: string }> = [
    { locale: 'en', code: 'EN', name: 'English' },
    { locale: 'nl', code: 'NL', name: 'Nederlands' },
    { locale: 'es', code: 'ES', name: 'Español' },
    { locale: 'de', code: 'DE', name: 'Deutsch' },
    { locale: 'fr', code: 'FR', name: 'Français' },
    { locale: 'it', code: 'IT', name: 'Italiano' },
    { locale: 'pt', code: 'PT', name: 'Português' },
    { locale: 'ja', code: 'JA', name: '日本語' },
  ];

  const currentLanguage = languages.find((lang) => lang.locale === locale) || languages[0];

  return (
    <div className="relative">
      {/* Language Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span>{currentLanguage.code}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
          {languages.map((language) => {
            const isActive = language.locale === locale;
            const href = getLocaleAlternativePath(locale, language.locale, currentPath);

            return (
              <Link
                key={language.locale}
                href={href}
                className={`block px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? 'bg-cyan-600 text-white font-medium'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <div className="font-medium">{language.name}</div>
                <div className={`text-xs ${isActive ? 'text-cyan-100' : 'text-slate-500'}`}>
                  {language.code}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
