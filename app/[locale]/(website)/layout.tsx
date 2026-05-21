// app/[locale]/(website)/layout.tsx - Layout for website pages

import { ReactNode } from 'react';
import { getLocaleFromParams } from '@/lib/i18n';

interface WebsiteLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function WebsiteLayout({ children, params }: WebsiteLayoutProps) {
  const locale = await getLocaleFromParams(params);

  // Locale info can be passed to children via context if needed
  return <>{children}</>;
}
