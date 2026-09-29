// components/layout/header.tsx - Site header. A server component on purpose:
// it reads the labels from lib/translations.ts here, so the dictionary never
// ends up in the browser bundle (see lib/ui-strings.ts).

import Logo from '@/components/ui/logo';
import { getHeaderLabels } from '@/lib/ui-strings';
import type { Locale } from '@/lib/i18n';
import HeaderShell from './header-shell';

export default function Header({ locale }: { locale: Locale }) {
  return <HeaderShell locale={locale} labels={getHeaderLabels(locale)} logo={<Logo locale={locale} />} />;
}
