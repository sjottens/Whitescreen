// components/ui/logo.tsx - Optimized SVG logo component

import { t } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

interface LogoProps {
  locale?: Locale;
}

export default function Logo({ locale = 'en' }: LogoProps) {
  const translate = t(locale);

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={translate('logo_aria_label' as any)}
    >
      {/* Dark background */}
      <rect width="200" height="200" fill="#0f172a" rx="8" />
      
      {/* Gradient definition for T */}
      <defs>
        <linearGradient id="tGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity={1} />
          <stop offset="100%" stopColor="#0891b2" stopOpacity={1} />
        </linearGradient>
      </defs>
      
      {/* Letter T */}
      {/* Top horizontal bar */}
      <rect x="50" y="35" width="100" height="18" rx="4" fill="url(#tGradient)" />
      
      {/* Vertical stem */}
      <rect x="85" y="50" width="30" height="115" rx="4" fill="url(#tGradient)" />
    </svg>
  );
}
