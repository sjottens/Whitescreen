// components/layout/header.tsx - Navigation header with SEO optimization

import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';
import { getLocalizedPath } from '@/lib/link-utils';
import Navigation from './navigation';
import Logo from '@/components/ui/logo';
import type { Locale } from '@/lib/i18n';

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  return (
    <header className="sticky top-0 z-[120] w-full border-b border-slate-700/80 bg-slate-950/92 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/88">
      <div className="container py-4 md:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={getLocalizedPath(locale, '/')} className="group flex items-center gap-3 focus-ring">
            <Logo />
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
