// app/[locale]/(tools)/layout.tsx - Layout for tool pages

import { ReactNode } from 'react';

interface ToolsLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function ToolsLayout({ children }: ToolsLayoutProps) {
  return <>{children}</>;
}
