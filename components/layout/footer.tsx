// components/layout/footer.tsx - SEO-optimized footer with comprehensive internal linking and multilingual support

import Link from 'next/link';
import { SITE_NAME, COLOR_TOOLS, TEST_TOOLS } from '@/lib/constants';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const translate = t(locale);
  const currentYear = new Date().getFullYear();
  const cookiePolicyLabel =
    locale === 'nl'
      ? 'Cookiebeleid'
      : locale === 'es'
        ? 'Politica de Cookies'
        : locale === 'de'
          ? 'Cookie-Richtlinie'
          : 'Cookie Policy';

  return (
    <footer className="bg-slate-900 text-slate-100 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 text-center">

          {/* Color Tools Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">{translate('color_screens')}</h4>
            <ul className="space-y-2 list-none pl-0 marker:hidden">
              {COLOR_TOOLS.slice(0, 5).map((tool) => (
                <li key={tool.id}>
                  <Link href={getLocalizedPath(locale, tool.path)} className="text-white hover:text-slate-100 transition-colors text-sm">
                    {translate(tool.nameKey as any)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Test Tools Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">{translate('testing_tools')}</h4>
            <ul className="space-y-2 list-none pl-0 marker:hidden">
              {TEST_TOOLS.slice(0, 5).map((tool) => (
                <li key={tool.id}>
                  <Link href={getLocalizedPath(locale, tool.path)} className="text-white hover:text-slate-100 transition-colors text-sm">
                    {translate(tool.nameKey as any)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Monitor Tests Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">{translate('monitor_tests')}</h4>
            <ul className="space-y-2 list-none pl-0 marker:hidden">
              <li>
                <Link href={getLocalizedPath(locale, '/monitor-test/asus')} className="text-white hover:text-blue-400 transition-colors text-sm">
                  {translate('monitor_asus')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath(locale, '/monitor-test/lg')} className="text-white hover:text-red-400 transition-colors text-sm">
                  {translate('monitor_lg')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath(locale, '/monitor-test/samsung')} className="text-white hover:text-cyan-400 transition-colors text-sm">
                  {translate('monitor_samsung')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath(locale, '/monitor-test/dell')} className="text-white hover:text-purple-400 transition-colors text-sm">
                  {translate('monitor_dell')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Device Tests Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">{translate('device_tests_title')}</h4>
            <ul className="space-y-2 list-none pl-0 marker:hidden">
              <li>
                <Link href={getLocalizedPath(locale, '/iphone-screen-test')} className="text-white hover:text-gray-400 transition-colors text-sm">
                  {translate('iphone_test')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath(locale, '/macbook-screen-test')} className="text-white hover:text-slate-400 transition-colors text-sm">
                  {translate('macbook_test')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath(locale, '/gaming-monitor-test')} className="text-white hover:text-orange-400 transition-colors text-sm">
                  {translate('gaming_monitor_test')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath(locale, '/oled-tv-test')} className="text-white hover:text-indigo-400 transition-colors text-sm">
                  {translate('oled_tv_test')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">{translate('support_title')}</h4>
            <ul className="space-y-2 list-none pl-0 marker:hidden">
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
                <Link href={getLocalizedPath(locale, '/cookies')} className="text-white hover:text-slate-100 transition-colors text-sm">
                  {cookiePolicyLabel}
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
          <p className="text-white text-left">
            © {currentYear} {SITE_NAME}. {translate('all_rights_reserved')} {translate('built_for')}
          </p>
          <div className="flex gap-6">
            <Link href="/sitemap.xml" className="text-white hover:text-slate-100 transition-colors">
              {translate('footer_sitemap_label' as any)}
            </Link>
            <Link href="/robots.txt" className="text-white hover:text-slate-100 transition-colors">
              {translate('footer_robots_label' as any)}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

