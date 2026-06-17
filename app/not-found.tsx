import { LinkButton } from '@/components/ui/button';
import { t } from '@/lib/translations';

export const metadata = {
  title: '404 - Not Found',
  description: 'Resource not found.',
};

export default function NotFound() {
  const translate = t('en');
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-slate-900 mb-4">{translate('not_found_title' as any)}</h2>
        <p className="text-lg text-slate-600 mb-8">
          {translate('not_found_description' as any)}
        </p>
        <LinkButton href="/" variant="primary" size="lg">
          {translate('go_home_button' as any)}
        </LinkButton>
      </div>
    </div>
  );
}
