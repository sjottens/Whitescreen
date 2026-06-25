// components/layout/language-selector.tsx - Professional language selector

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { getLocaleAlternativePath } from '@/lib/link-utils';
import type { Locale } from '@/lib/i18n';
import { t } from '@/lib/translations';

interface LanguageSelectorProps {
  locale: Locale;
  currentPath: string;
  onSelect?: () => void;
}

export default function LanguageSelector({ locale, currentPath, onSelect }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const translate = t(locale);

  const handleSelect = (selectedLocale: Locale) => {
    // Persist explicit language choice for middleware locale redirects.
    document.cookie = `preferred-locale=${selectedLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
    setIsOpen(false);
    onSelect?.();
  };

  const languages: Array<{ locale: Locale; code: string; name: string }> = [
    { locale: 'en', code: 'EN', name: 'English' },
    { locale: 'nl', code: 'NL', name: 'Nederlands' },
    { locale: 'es', code: 'ES', name: 'Español' },
    { locale: 'de', code: 'DE', name: 'Deutsch' },
  ];

  const currentLanguage = languages.find((lang) => lang.locale === locale) || languages[0];

  return (
    <div className="relative z-[130]">
      {/* Language Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg border border-slate-500 bg-slate-900/90 px-3 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-cyan-400 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        aria-label={translate('language_selector_aria' as any)}
        aria-expanded={isOpen}
      >
        <span>{currentLanguage.code}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-[140] mt-2 w-52 rounded-lg border border-slate-700 bg-slate-900 py-2 shadow-2xl">
          {languages.map((language) => {
            const isActive = language.locale === locale;
            const href = getLocaleAlternativePath(locale, language.locale, currentPath);

            return (
              <Link
                key={language.locale}
                href={href}
                className={`block px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-semibold'
                    : 'text-slate-100 hover:bg-slate-800'
                }`}
                onClick={() => handleSelect(language.locale)}
              >
                <div className="font-medium">{language.name}</div>
                <div className={`text-xs ${isActive ? 'text-slate-900/80' : 'text-slate-400'}`}>
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
