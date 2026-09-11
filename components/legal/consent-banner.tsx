// components/legal/consent-banner.tsx - GDPR-compliant cookie consent banner

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useConsent } from '@/components/providers/consent-provider';
import { CONSENT_STORAGE_KEY } from '@/lib/consent-types';
import { isValidLocale, DEFAULT_LOCALE } from '@/lib/i18n';
import { t } from '@/lib/translations';

export default function ConsentBanner() {
  const { consent, acceptAll, rejectAll, updateConsent, isInitialized } = useConsent();
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const pathname = usePathname();
  
  // Extract locale from pathname
  const segments = pathname.split('/').filter(Boolean);
  const localeSegment = segments[0];
  const locale = isValidLocale(localeSegment) ? localeSegment : DEFAULT_LOCALE;
  const translate = t(locale);

  // Show banner only if user hasn't explicitly consented yet
  useEffect(() => {
    if (!isInitialized) return;

    // Check if user has previously made a consent choice
    const hasExplicitConsent = localStorage.getItem(CONSENT_STORAGE_KEY) !== null;

    // Show banner as soon as we know consent is required. The previous
    // artificial 500ms delay here was directly inflating mobile LCP: this
    // modal is large enough to become the page's LCP element, so any delay
    // before it paints is a delay added straight to the LCP metric.
    if (!hasExplicitConsent) {
      setShowBanner(true);
    }
  }, [isInitialized]);

  if (!showBanner) return null;

  const handleAcceptAll = () => {
    acceptAll();
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    rejectAll();
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    updateConsent(consent);
    setShowBanner(false);
  };

  return (
    <>
      {/* Banner Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />

      {/* Consent Banner Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <div className="w-full max-w-2xl max-h-full overflow-y-auto my-auto bg-white rounded-lg shadow-2xl border border-slate-200">
          {/* Header */}
          <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {translate('consent_title' as any) || '🍪 Cookie & Consent Settings'}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              {translate('consent_description' as any) || 
                'We use cookies and similar technologies to enhance your browsing experience and show you relevant advertisements. Please review our settings below.'}
            </p>
          </div>

          {/* Content */}
          <div className="p-6">
            {!showDetails ? (
              <>
                {/* Simple View */}
                <div className="space-y-4">
                  <p className="text-sm text-slate-700">
                    {translate('consent_simple_desc' as any) || 
                      'We only load marketing and analytics cookies after you consent. Essential cookies are always used.'}
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <div>
                        <p className="font-semibold text-slate-900">
                          {translate('consent_necessary' as any) || 'Necessary Cookies'}
                        </p>
                        <p className="text-slate-600 text-xs">
                          {translate('consent_necessary_desc' as any) || 
                            'Required for core website functionality (language preference, security).'}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-0.5">?</span>
                      <div>
                        <p className="font-semibold text-slate-900">
                          {translate('consent_marketing' as any) || 'Marketing Cookies'}
                        </p>
                        <p className="text-slate-600 text-xs">
                          {translate('consent_marketing_desc' as any) || 
                            'Google AdSense uses cookies to show personalized advertisements based on your interests.'}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold mt-0.5">?</span>
                      <div>
                        <p className="font-semibold text-slate-900">
                          {translate('consent_analytics' as any) || 'Analytics Cookies'}
                        </p>
                        <p className="text-slate-600 text-xs">
                          {translate('consent_analytics_desc' as any) || 
                            'Google Analytics helps us understand how you use our site to improve it.'}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                {/* Detailed View */}
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {/* Necessary */}
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <label className="font-semibold text-slate-900">
                        {translate('consent_necessary' as any) || 'Necessary Cookies'}
                      </label>
                      <input type="checkbox" checked disabled className="w-5 h-5" />
                    </div>
                    <p className="text-sm text-slate-600">
                      {translate('consent_necessary_desc' as any) || 
                        'Required for core website functionality (language preference, security). Always enabled.'}
                    </p>
                  </div>

                  {/* Analytics */}
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <label className="font-semibold text-slate-900">
                        {translate('consent_analytics' as any) || 'Analytics Cookies'}
                      </label>
                      <input
                        type="checkbox"
                        checked={consent.analytics}
                        onChange={(e) =>
                          updateConsent({
                            ...consent,
                            analytics: e.target.checked,
                          })
                        }
                        className="w-5 h-5"
                      />
                    </div>
                    <p className="text-sm text-slate-600">
                      {translate('consent_analytics_desc' as any) || 
                        'Google Analytics helps us understand how you use our site to improve it.'}
                    </p>
                  </div>

                  {/* Marketing */}
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <label className="font-semibold text-slate-900">
                        {translate('consent_marketing' as any) || 'Marketing Cookies'}
                      </label>
                      <input
                        type="checkbox"
                        checked={consent.marketing}
                        onChange={(e) =>
                          updateConsent({
                            ...consent,
                            marketing: e.target.checked,
                          })
                        }
                        className="w-5 h-5"
                      />
                    </div>
                    <p className="text-sm text-slate-600">
                      {translate('consent_marketing_desc' as any) || 
                        'Google AdSense uses cookies to show personalized advertisements based on your interests.'}
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                      {translate('consent_marketing_note' as any) || 
                        'You can change this anytime in your Google Ad Settings.'}
                    </p>
                  </div>

                  {/* Preferences */}
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <label className="font-semibold text-slate-900">
                        {translate('consent_preferences' as any) || 'Preference Cookies'}
                      </label>
                      <input
                        type="checkbox"
                        checked={consent.preferences}
                        onChange={(e) =>
                          updateConsent({
                            ...consent,
                            preferences: e.target.checked,
                          })
                        }
                        className="w-5 h-5"
                      />
                    </div>
                    <p className="text-sm text-slate-600">
                      {translate('consent_preferences_desc' as any) || 
                        'Remembers your language, theme, and other personal preferences.'}
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* Links */}
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
              <Link href="/privacy" className="text-blue-600 hover:underline">
                {translate('privacy_title')}
              </Link>
              <span>•</span>
              <Link href="/cookies" className="text-blue-600 hover:underline">
                {translate('cookie_policy' as any) || 'Cookie Policy'}
              </Link>
              <span>•</span>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-blue-600 hover:underline"
              >
                {showDetails ? translate('show_less' as any) : translate('show_more' as any) || 'Show Details'}
              </button>
            </div>
          </div>

          {/* Footer - Action Buttons */}
          <div className="p-4 border-t border-slate-200 bg-slate-50 flex flex-wrap gap-3 justify-end">
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
            >
              {translate('consent_reject' as any) || 'Reject All'}
            </button>
            {showDetails && (
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-200 border border-slate-300 rounded-lg hover:bg-slate-300 transition-colors"
              >
                {translate('consent_save' as any) || 'Save Preferences'}
              </button>
            )}
            <button
              onClick={handleAcceptAll}
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {translate('consent_accept' as any) || 'Accept All'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
