// app/[locale]/(tools)/layout.tsx - Layout for tool pages

import { ReactNode } from 'react';
import { getLocaleFromParams } from '@/lib/i18n';
import ToolLayout from '@/components/tools/tool-layout';

interface ToolsLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function ToolsLayout({ children, params }: ToolsLayoutProps) {
  const locale = await getLocaleFromParams(params);

  return (
    <ToolLayout locale={locale}>
      {children}
    </ToolLayout>
  );
}
