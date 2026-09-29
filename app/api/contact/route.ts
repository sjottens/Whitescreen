// app/api/contact/route.ts - Handle contact form submissions

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure your SMTP settings
// For testing/development, you can use a service like ethereal or Mailtrap
// For production, use your email service (Gmail, SendGrid, AWS SES, etc.)

interface ContactPayload {
  email: string;
  message: string;
  /** Honeypot: hidden field in the form, only bots fill it in. */
  website?: string;
  /** Date.now() when the form was shown. */
  startedAt?: number;
}

// --- Spam protection -------------------------------------------------------
// The form sends mail through a Gmail account with a daily sending limit
// (~500/day); bot submissions used it up and broke the form for everyone.
const MIN_FILL_TIME_MS = 3_000; // people don't fill in and send a form in under 3s
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5_000;
const RATE_LIMIT_MAX = 3; // messages per IP address...
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // ...per hour

// Per server instance only (serverless instances don't share memory), so this
// slows down a flood rather than guaranteeing an exact limit.
const recentSendsByIp = new Map<string, number[]>();

function isRateLimited(ip: string, now: number): boolean {
  const recent = (recentSendsByIp.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recentSendsByIp.set(ip, recent);
  return recent.length >= RATE_LIMIT_MAX;
}

function recordSend(ip: string, now: number) {
  recentSendsByIp.set(ip, [...(recentSendsByIp.get(ip) ?? []), now]);
}

/** Why a submission looks automated, or null if it looks like a person. */
function botReason(body: ContactPayload, now: number): string | null {
  if (body.website) return 'honeypot filled';
  if (typeof body.startedAt !== 'number' || body.startedAt <= 0) return 'no form start time';
  const elapsed = now - body.startedAt;
  if (elapsed < MIN_FILL_TIME_MS) return 'submitted too fast';
  if (elapsed > MAX_FORM_AGE_MS) return 'form start time too old';
  return null;
}

// Helper function to create transporter
function createTransporter() {
  // Use environment variables for sensitive data
  // IMPORTANT: Set these in your .env.local file
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
    auth: {
      user,
      pass,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();

    // Validate input
    if (typeof body.email !== 'string' || typeof body.message !== 'string' || !body.email || !body.message.trim()) {
      return NextResponse.json(
        { message: 'Email and message are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (body.email.length > MAX_EMAIL_LENGTH || body.message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { message: `Please keep your message under ${MAX_MESSAGE_LENGTH.toLocaleString('en-US')} characters.` },
        { status: 400 }
      );
    }

    const now = Date.now();
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';

    // Bots get the normal success response, so they don't learn they were filtered.
    const reason = botReason(body, now);
    if (reason) {
      console.warn(`Contact form: dropped submission (${reason})`);
      return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
    }

    if (isRateLimited(clientIp, now)) {
      return NextResponse.json(
        { message: 'You have sent several messages already. Please try again in an hour.' },
        { status: 429 }
      );
    }
    recordSend(clientIp, now);

    // Create transporter
    const transporter = createTransporter();

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'sjottens76@gmail.com', // Your email address
      subject: `New Contact Form Submission from ${body.email}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${sanitizeHtml(body.email)}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizeHtml(body.message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted from: ${clientIp}</small></p>
      `,
      text: `
New Contact Form Submission

From: ${body.email}

Message:
${body.message}
      `,
      replyTo: body.email,
    });

    // Confirmation email to user disabled (not sending thank you mail)

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    // Check if it's a configuration error
    if (error instanceof Error && error.message.includes('Email credentials')) {
      return NextResponse.json(
        { message: 'Email service not configured' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

// Helper function to sanitize HTML
function sanitizeHtml(str: string): string {
  const htmlEscapeMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return str.replace(/[&<>"']/g, (char) => htmlEscapeMap[char]);
}
