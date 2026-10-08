// lib/form-token.ts - Signed "form shown at" tokens for the mail forms.
//
// The form fetches a token from /api/form-token when it appears; the mail
// routes only accept a token this server signed, at least a few seconds old
// and used once. A bot that posts straight to the API without loading the
// form can't make one up. Server-only.

import 'server-only';
import { createHmac, timingSafeEqual } from 'crypto';

const MIN_FILL_TIME_MS = 3_000; // people don't fill in and send a form in under 3s
const MAX_AGE_MS = 24 * 60 * 60 * 1000;

// Signing key: FORM_TOKEN_SECRET if set, otherwise derived from the mail
// password that is already a server-side secret on Vercel.
function signingKey(): string {
  const secret = process.env.FORM_TOKEN_SECRET || process.env.EMAIL_PASS;
  if (!secret) throw new Error('No secret for form tokens. Set FORM_TOKEN_SECRET or EMAIL_PASS.');
  return `form-token:${secret}`;
}

function sign(issuedAt: number): string {
  return createHmac('sha256', signingKey()).update(String(issuedAt)).digest('base64url');
}

export function createFormToken(now = Date.now()): string {
  return `${now}.${sign(now)}`;
}

// Tokens already used, per server instance (serverless instances don't share
// memory), so a captured token can't be replayed in a loop.
const usedTokens = new Map<string, number>();

/** Why a token is not acceptable, or null if it is (and it is now used up). */
export function formTokenProblem(token: unknown, now = Date.now()): string | null {
  if (typeof token !== 'string') return 'no form token';
  const [issued, signature] = token.split('.');
  const issuedAt = Number(issued);
  if (!Number.isSafeInteger(issuedAt) || !signature) return 'malformed form token';

  const expected = Buffer.from(sign(issuedAt));
  const given = Buffer.from(signature);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return 'bad form token signature';

  const age = now - issuedAt;
  if (age < MIN_FILL_TIME_MS) return 'submitted too fast';
  if (age > MAX_AGE_MS) return 'form token expired';

  for (const [used, at] of usedTokens) if (now - at > MAX_AGE_MS) usedTokens.delete(used);
  if (usedTokens.has(token)) return 'form token already used';
  usedTokens.set(token, now);
  return null;
}
