// app/api/contact/route.ts - Handle contact form submissions

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure your SMTP settings
// For testing/development, you can use a service like ethereal or Mailtrap
// For production, use your email service (Gmail, SendGrid, AWS SES, etc.)

interface ContactPayload {
  email: string;
  message: string;
  locale: string;
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
    if (!body.email || !body.message) {
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

    // Rate limiting (simple in-memory, for production use Redis)
    const clientIp = request.headers.get('x-forwarded-for') || 'unknown';
    
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
        <p><strong>Language:</strong> ${sanitizeHtml(body.locale)}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizeHtml(body.message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted from: ${clientIp}</small></p>
      `,
      text: `
New Contact Form Submission

From: ${body.email}
Language: ${body.locale}

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
