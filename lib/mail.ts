// lib/mail.ts - Shared by the API routes that send mail (contact form, used
// laptop check): the Gmail transport, HTML escaping and the bot/rate checks.
// Server-only.

import 'server-only';
import nodemailer from 'nodemailer';
import { formTokenProblem } from './form-token';

/** Where site notifications go. */
export const OWNER_EMAIL = 'testascreen@gmail.com';

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MAX_EMAIL_LENGTH = 254;

// --- Spam protection -------------------------------------------------------
// Mail goes out through a Gmail account with a daily sending limit
// (~500/day); bot submissions used it up and broke the contact form.
export interface BotFields {
  /** Honeypot: hidden field in the form, only bots fill it in. */
  website?: string;
  /** Signed token the form fetched when it appeared (lib/form-token.ts). */
  token?: string;
}

/** Why a submission looks automated, or null if it looks like a person. */
export function botReason(body: BotFields, now: number): string | null {
  if (body.website) return 'honeypot filled';
  return formTokenProblem(body.token, now);
}

/**
 * Per-IP limit. Per server instance only (serverless instances don't share
 * memory), so it slows down a flood rather than guaranteeing an exact limit.
 */
export function createRateLimiter(max: number, windowMs: number) {
  const sendsByIp = new Map<string, number[]>();
  return {
    isLimited(ip: string, now: number) {
      const recent = (sendsByIp.get(ip) ?? []).filter((t) => now - t < windowMs);
      sendsByIp.set(ip, recent);
      return recent.length >= max;
    },
    record(ip: string, now: number) {
      sendsByIp.set(ip, [...(sendsByIp.get(ip) ?? []), now]);
    },
  };
}

export function createTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const host = process.env.EMAIL_HOST || 'smtp.gmail.com';
  const port = process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT) : 587;

  if (!user || !pass) {
    throw new Error('Email credentials not configured. Set EMAIL_USER and EMAIL_PASS in .env.local');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: { user, pass },
  });
}

export function escapeHtml(str: string): string {
  const htmlEscapeMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return str.replace(/[&<>"']/g, (char) => htmlEscapeMap[char]);
}
