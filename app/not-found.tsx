import Link from 'next/link';
import { LinkButton } from '@/components/ui/button';

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-slate-900 mb-4">Page Not Found</h2>
        <p className="text-lg text-slate-600 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <LinkButton href="/" variant="primary" size="lg">
          Go Home
        </LinkButton>
      </div>
    </div>
  );
}
