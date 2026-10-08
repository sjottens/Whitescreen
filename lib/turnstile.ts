// lib/turnstile.ts - Server-side check of the Cloudflare Turnstile token sent
// by the mail forms (lib/use-turnstile.ts). Fails closed: without
// TURNSTILE_SECRET / TURNSTILE_HOSTNAMES, or when Cloudflare can't be reached,
// nothing gets through. Server-only.
//
// Env (Vercel + .env.local):
//   TURNSTILE_SECRET     secret key of the widget
//   TURNSTILE_HOSTNAMES  comma-separated hostnames the forms run on, e.g.
//                        "testascreen.com,www.testascreen.com" (localhost only locally)

import 'server-only';

const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

interface SiteverifyResult {
  success?: boolean;
  action?: string;
  hostname?: string;
  'error-codes'?: string[];
}

/** Why the Turnstile token is not acceptable, or null if it is. */
export async function turnstileProblem(token: unknown, action: string, remoteip: string): Promise<string | null> {
  const secret = process.env.TURNSTILE_SECRET;
  const hostnames = new Set(
    (process.env.TURNSTILE_HOSTNAMES ?? '')
      .split(',')
      .map((h) => h.trim())
      .filter(Boolean)
  );
  if (!secret || hostnames.size === 0) return 'Turnstile not configured';
  if (typeof token !== 'string' || !token || token.length > 2048) return 'no Turnstile token';

  let result: SiteverifyResult;
  try {
    const res = await fetch(SITEVERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      signal: AbortSignal.timeout(10_000),
      body: new URLSearchParams({
        secret,
        response: token,
        ...(remoteip !== 'unknown' ? { remoteip } : {}),
      }),
    });
    if (!res.ok) return `siteverify HTTP ${res.status}`;
    result = await res.json();
  } catch {
    return 'siteverify unreachable';
  }

  if (result.success !== true) return `Turnstile failed (${(result['error-codes'] ?? []).join(', ') || 'no reason'})`;
  if (result.action !== action) return `Turnstile action mismatch (${result.action})`;
  if (!result.hostname || !hostnames.has(result.hostname)) return `Turnstile hostname not allowed (${result.hostname})`;
  return null;
}
