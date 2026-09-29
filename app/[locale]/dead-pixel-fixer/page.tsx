// app/[locale]/dead-pixel-fixer/page.tsx - Dead Pixel Fixer page.
//
// Server component: resolves the locale from the route and hands the
// interactive tool its translated strings, so the server HTML is already in
// the right language (the tool used to start in English and switch after
// hydration) and the translation dictionary stays out of the browser bundle.
// Metadata lives in layout.tsx.

import DeadPixelFixer from '@/components/tools/dead-pixel-fixer';
import { getClientStrings } from '@/lib/client-strings';
import { getLocaleFromParams } from '@/lib/i18n';

export default async function DeadPixelFixerPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getLocaleFromParams(params);
  return <DeadPixelFixer locale={locale} strings={getClientStrings('deadPixelFixer', locale)} />;
}
