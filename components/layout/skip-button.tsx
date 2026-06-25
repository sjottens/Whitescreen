// components/layout/skip-button.tsx - Skip to main content button
'use client';

import { t } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

interface SkipButtonProps {
  locale?: Locale;
}

export default function SkipButton({ locale = 'en' }: SkipButtonProps) {
  const translate = t(locale);

  const handleClick = () => {
    const main = document.getElementById('main-content');
    if (main) {
      if (!main.hasAttribute('tabindex')) {
        main.setAttribute('tabindex', '-1');
      }
      const offsetTop = main.getBoundingClientRect().top + window.scrollY;
      const headerHeight = 80;
      window.scrollTo({
        top: Math.max(0, offsetTop - headerHeight),
        behavior: 'smooth'
      });
      main.focus();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="skip-to-main"
    >
      {translate('skip_to_main_content' as any)}
    </button>
  );
}
