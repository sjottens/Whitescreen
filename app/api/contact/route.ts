// app/api/contact/route.ts - Handle contact form submissions

import { NextRequest, NextResponse } from 'next/server';
import {
  EMAIL_PATTERN,
  MAX_EMAIL_LENGTH,
  OWNER_EMAIL,
  botReason,
  createRateLimiter,
  createTransporter,
  escapeHtml,
  type BotFields,
} from '@/lib/mail';

interface ContactPayload extends BotFields {
  email: string;
  message: string;
}

const MAX_MESSAGE_LENGTH = 5_000;
const rateLimit = createRateLimiter(3, 60 * 60 * 1000); // 3 messages per IP per hour

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
    if (!EMAIL_PATTERN.test(body.email)) {
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

    if (rateLimit.isLimited(clientIp, now)) {
      return NextResponse.json(
        { message: 'You have sent several messages already. Please try again in an hour.' },
        { status: 429 }
      );
    }
    rateLimit.record(clientIp, now);

    // Create transporter
    const transporter = createTransporter();

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: OWNER_EMAIL,
      subject: `New Contact Form Submission from ${body.email}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${escapeHtml(body.email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(body.message).replace(/\n/g, '<br>')}</p>
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
