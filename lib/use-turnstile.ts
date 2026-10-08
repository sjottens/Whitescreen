// lib/use-turnstile.ts - Cloudflare Turnstile widget for the mail forms.
// Loads Cloudflare's script once, renders the widget into containerRef and
// returns its token ('' until the check has passed). The server verifies the
// token (lib/turnstile.ts). Tokens are single-use: call reset() after every
// send attempt so a retry gets a fresh one.

'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Public site key (not a secret). Defaults to the "testascreen forms" widget;
 * local development sets NEXT_PUBLIC_TURNSTILE_SITE_KEY to the localhost widget.
 */
export const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAAFRsG6zAbgUvj_zr';

const SCRIPT_URL = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

interface TurnstileApi {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      action: string;
      theme?: 'light' | 'dark' | 'auto';
      callback: (token: string) => void;
      'expired-callback'?: () => void;
      'error-callback'?: () => void;
    }
  ) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let scriptPromise: Promise<void> | null = null;

function loadTurnstile(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  scriptPromise ??= new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      scriptPromise = null;
      script.remove();
      reject(new Error('Turnstile script failed to load'));
    };
    document.head.appendChild(script);
  });
  return scriptPromise;
}

export function useTurnstile(action: string, theme: 'light' | 'dark' = 'light') {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const [token, setToken] = useState('');
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadTurnstile()
      .then(() => {
        if (cancelled || !containerRef.current || !window.turnstile || widgetId.current !== null) return;
        widgetId.current = window.turnstile.render(containerRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          action,
          theme,
          callback: (t) => {
            setToken(t);
            setFailed(false);
          },
          'expired-callback': () => setToken(''),
          'error-callback': () => {
            setToken('');
            setFailed(true);
          },
        });
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
      if (widgetId.current !== null) window.turnstile?.remove(widgetId.current);
      widgetId.current = null;
    };
  }, [action, theme]);

  const reset = useCallback(() => {
    setToken('');
    if (widgetId.current !== null) window.turnstile?.reset(widgetId.current);
  }, []);

  return { containerRef, token, failed, reset };
}
