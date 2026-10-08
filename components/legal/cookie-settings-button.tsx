// components/legal/cookie-settings-button.tsx - Footer link that reopens the
// consent banner, so consent can be withdrawn as easily as it was given.

'use client';

import { OPEN_CONSENT_EVENT } from '@/lib/consent-types';

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
      className="text-left text-sm text-white transition-colors hover:text-slate-100"
    >
      Cookie settings
    </button>
  );
}
