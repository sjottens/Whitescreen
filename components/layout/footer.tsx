// components/layout/footer.tsx - SEO-optimized footer with comprehensive internal linking and multilingual support

import Link from 'next/link';
import { SITE_NAME, SITE_URL, COLOR_TOOLS, TEST_TOOLS } from '@/lib/constants';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const translate = t(locale);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-100 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">{SITE_NAME}</h3>
            <p className="text-white text-sm mb-4">
              Elite screen testing and display tools for professionals and enthusiasts. TestaScreen.eu
            </p>
            
          </div>

          {/* Color Tools Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">{translate('color_screens')}</h4>
            <ul className="space-y-2">
              {COLOR_TOOLS.slice(0, 5).map((tool) => (
                <li key={tool.id}>
                  <Link href={getLocalizedPath(locale, tool.path)} className="text-white hover:text-slate-100 transition-colors text-sm">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Test Tools Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">{translate('testing_tools')}</h4>
            <ul className="space-y-2">
              {TEST_TOOLS.slice(0, 5).map((tool) => (
                <li key={tool.id}>
                  <Link href={getLocalizedPath(locale, tool.path)} className="text-white hover:text-slate-100 transition-colors text-sm">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">{translate('tools')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={getLocalizedPath(locale, '/faq')} className="text-white hover:text-slate-100 transition-colors text-sm">
                  {translate('faq')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath(locale, '/about')} className="text-white hover:text-slate-100 transition-colors text-sm">
                  {translate('about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">{translate('privacy')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={getLocalizedPath(locale, '/terms')} className="text-white hover:text-slate-100 transition-colors text-sm">
                  {translate('terms')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath(locale, '/privacy')} className="text-white hover:text-slate-100 transition-colors text-sm">
                  {translate('privacy')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath(locale, '/contact')} className="text-white hover:text-slate-100 transition-colors text-sm">
                  {translate('contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-800"></div>

      {/* Bottom Footer */}
      <div className="container py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white text-sm">
          <p className="text-white">
            © {currentYear} {SITE_NAME}. {translate('all_rights_reserved')} • {translate('built_for')}
          </p>
          <div className="flex gap-6">
            <Link href="/sitemap.xml" className="text-white hover:text-slate-100 transition-colors">
              Sitemap
            </Link>
            <Link href="/robots.txt" className="text-white hover:text-slate-100 transition-colors">
              Robots
            </Link>
            <a href={SITE_URL} className="text-white hover:text-slate-100 transition-colors">
              {SITE_URL}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

