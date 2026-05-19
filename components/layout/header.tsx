// components/layout/header.tsx - Navigation header with SEO optimization

import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';
import Navigation from './navigation';
import Logo from '@/components/ui/logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 backdrop-blur-sm bg-opacity-95">
      <div className="container py-4 md:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 focus-ring">
            <Logo />
            <span className="text-xl md:text-2xl font-bold text-slate-900">{SITE_NAME}</span>
          </Link>

          {/* Navigation */}
          <Navigation />
        </div>
      </div>
    </header>
  );
}
