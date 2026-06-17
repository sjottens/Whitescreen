// components/layout/skip-button.tsx - Skip to main content button
'use client';

import { t } from '@/lib/translations';

export default function SkipButton() {
  const translate = t('en');

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
