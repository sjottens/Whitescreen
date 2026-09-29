// components/layout/footer.tsx - Site footer with internal links to every tool

import Link from 'next/link';
import { SITE_NAME, COLOR_TOOLS, TEST_TOOLS } from '@/lib/constants';
import { HARDWARE_TOOLS } from '@/lib/hardware-tools';
import { translate } from '@/lib/translations';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const cookiePolicyLabel = 'Cookie Policy';

  return (
    <footer className="bg-slate-900 text-slate-100 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-left">

          {/* Color Tools Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">{translate('color_screens')}</h4>
            <ul className="space-y-2 list-none pl-0 marker:hidden">
              {COLOR_TOOLS.slice(0, 5).map((tool) => (
                <li key={tool.id}>
                  <Link href={tool.path} className="text-white hover:text-slate-100 transition-colors text-sm">
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
                  <Link href={tool.path} className="text-white hover:text-slate-100 transition-colors text-sm">
                    {translate(tool.nameKey as any)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hardware tests */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hardware tests</h4>
            <ul className="space-y-2 list-none pl-0 marker:hidden">
              {HARDWARE_TOOLS.filter((tool) => tool.id !== 'screen-test').map((tool) => (
                <li key={tool.id}>
                  <Link href={tool.path} className="text-white hover:text-slate-100 transition-colors text-sm">
                    {tool.name}
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
                <Link href={'/monitor-test'} className="text-white hover:text-blue-400 transition-colors text-sm">
                  {translate('monitor_tests')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">{translate('support_title')}</h4>
            <ul className="space-y-2 list-none pl-0 marker:hidden">
              <li>
                <Link href={'/faq'} className="text-white hover:text-slate-100 transition-colors text-sm">
                  {translate('faq')}
                </Link>
              </li>
              <li>
                <Link href={'/about'} className="text-white hover:text-slate-100 transition-colors text-sm">
                  {translate('about')}
                </Link>
              </li>
              <li>
                <Link href={'/terms'} className="text-white hover:text-slate-100 transition-colors text-sm">
                  {translate('terms')}
                </Link>
              </li>
              <li>
                <Link href={'/privacy'} className="text-white hover:text-slate-100 transition-colors text-sm">
                  {translate('privacy')}
                </Link>
              </li>
              <li>
                <Link href={'/cookies'} className="text-white hover:text-slate-100 transition-colors text-sm">
                  {cookiePolicyLabel}
                </Link>
              </li>
              <li>
                <Link href={'/contact'} className="text-white hover:text-slate-100 transition-colors text-sm">
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

