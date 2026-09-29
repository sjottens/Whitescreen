// components/layout/header.tsx - Site header. A server component on purpose:
// it reads the labels from lib/translations.ts here, so the dictionary never
// ends up in the browser bundle (see lib/ui-strings.ts).

import Logo from '@/components/ui/logo';
import { getHeaderLabels } from '@/lib/ui-strings';
import HeaderShell from './header-shell';

export default function Header() {
  return <HeaderShell labels={getHeaderLabels()} logo={<Logo />} />;
}
