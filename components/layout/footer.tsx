// components/layout/footer.tsx - Site footer with internal links to every tool

import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';
import { TOOL_GROUPS } from '@/lib/tool-directory';
import CookieSettingsButton from '@/components/legal/cookie-settings-button';
import { translate } from '@/lib/translations';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const cookiePolicyLabel = 'Cookie Policy';

  return (
    <footer className="bg-slate-900 text-slate-100 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 text-left sm:grid-cols-2 lg:grid-cols-4">

          {/* Every tool and guide, grouped as on /tools */}
          {TOOL_GROUPS.map((group) => (
            <div key={group.id}>
              <h2 className="mb-4 text-base font-semibold text-white md:text-base">{group.title}</h2>
              <ul className="space-y-2 list-none pl-0 marker:hidden">
                {group.entries.map((tool) => (
                  <li key={tool.path}>
                    <Link href={tool.path} className="text-white hover:text-slate-100 transition-colors text-sm">
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Resources Section */}
          <div>
            <h2 className="mb-4 text-base font-semibold text-white md:text-base">{translate('support_title')}</h2>
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
                <CookieSettingsButton />
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
        </div>
      </div>
    </footer>
  );
}

