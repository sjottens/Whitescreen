// app/api/laptop-check/route.ts - Emails the used laptop check results to the
// visitor, and notifies the site owner with the address that was entered.
//
// The browser only sends step ids with OK/Problem and a few numbers; the mail
// text is built here from lib/used-laptop-steps.ts. Nothing free-form from the
// request ends up in a mail to someone else's address, so the form can't be
// used to send spam.

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
import { turnstileProblem } from '@/lib/turnstile';
import { STEPS, type StepStatus } from '@/lib/used-laptop-steps';

interface SystemInfo {
  resolution?: string;
  cores?: number;
  memory?: number;
  touch?: boolean;
}

interface LaptopCheckPayload extends BotFields {
  email: string;
  results: Record<string, StepStatus>;
  system?: SystemInfo;
  /** Ticked "keep me posted about new tools" (unticked by default). */
  updates?: boolean;
  /** Cloudflare Turnstile token from the widget in the form. */
  turnstileToken?: string;
}

const PAGE_URL = 'https://testascreen.com/used-laptop-check';
const rateLimit = createRateLimiter(5, 60 * 60 * 1000); // 5 mails per IP per hour

/** Only values the checklist itself can produce; anything else is dropped. */
function cleanSystem(system: SystemInfo | undefined): SystemInfo {
  if (!system || typeof system !== 'object') return {};
  return {
    resolution: typeof system.resolution === 'string' && /^\d{2,5} x \d{2,5}$/.test(system.resolution) ? system.resolution : undefined,
    cores: Number.isInteger(system.cores) && system.cores! > 0 && system.cores! <= 512 ? system.cores : undefined,
    memory: typeof system.memory === 'number' && system.memory > 0 && system.memory <= 64 ? system.memory : undefined,
    touch: typeof system.touch === 'boolean' ? system.touch : undefined,
  };
}

function statusLabel(status: StepStatus | undefined) {
  return status === 'ok' ? 'OK' : status === 'problem' ? 'Problem' : 'Not checked';
}

function systemLines(system: SystemInfo): string[] {
  return [
    system.resolution && `Screen resolution: ${system.resolution}`,
    system.cores && `Processor threads: ${system.cores}`,
    system.memory && `Memory: ${system.memory >= 8 ? '8 GB or more' : `about ${system.memory} GB`}`,
    system.touch !== undefined && `Touchscreen: ${system.touch ? 'yes' : 'no'}`,
  ].filter(Boolean) as string[];
}

function resultsMail(results: LaptopCheckPayload['results'], system: SystemInfo) {
  const problems = STEPS.filter((step) => results[step.id] === 'problem');
  const summary = problems.length
    ? `${problems.length} problem${problems.length > 1 ? 's' : ''} found: ${problems.map((s) => s.title).join(', ')}.`
    : 'No problems marked.';
  const sys = systemLines(system);

  const text = [
    'Your used laptop check',
    '',
    summary,
    '',
    ...STEPS.map((step) => `${statusLabel(results[step.id]).padEnd(12)}${step.title}`),
    ...(sys.length ? ['', 'What the browser could see (rounded by the browser):', ...sys] : []),
    '',
    `Check another laptop: ${PAGE_URL}`,
    '',
    'You received this email because you asked for your results on testascreen.com.',
  ].join('\n');

  const color = (status: StepStatus | undefined) =>
    status === 'ok' ? '#047857' : status === 'problem' ? '#b91c1c' : '#64748b';
  const rows = STEPS.map(
    (step) => `<tr>
      <td style="padding:6px 12px 6px 0;font-weight:600;color:${color(results[step.id])}">${statusLabel(results[step.id])}</td>
      <td style="padding:6px 0">${escapeHtml(step.title)}${
        results[step.id] === 'problem' ? `<br><span style="color:#64748b;font-size:13px">${escapeHtml(step.hint)}</span>` : ''
      }</td>
    </tr>`
  ).join('');
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#0f172a;max-width:560px">
      <h2 style="margin:0 0 8px">Your used laptop check</h2>
      <p style="margin:0 0 16px">${escapeHtml(summary)}</p>
      <table style="border-collapse:collapse">${rows}</table>
      ${
        sys.length
          ? `<p style="margin:16px 0 4px;font-weight:600">What the browser could see</p>
             <p style="margin:0;color:#334155">${sys.map(escapeHtml).join('<br>')}</p>
             <p style="margin:4px 0 0;color:#64748b;font-size:13px">Browsers round these numbers; check the exact specs in the laptop's own settings.</p>`
          : ''
      }
      <p style="margin:20px 0 0"><a href="${PAGE_URL}">Check another laptop</a></p>
      <p style="margin:20px 0 0;color:#64748b;font-size:12px">You received this email because you asked for your results on testascreen.com.</p>
    </div>`;

  return { text, html, problems: problems.length };
}

export async function POST(request: NextRequest) {
  try {
    const body: LaptopCheckPayload = await request.json();

    if (typeof body.email !== 'string' || !EMAIL_PATTERN.test(body.email) || body.email.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 400 });
    }

    const results: LaptopCheckPayload['results'] = {};
    for (const step of STEPS) {
      const value = body.results?.[step.id];
      if (value === 'ok' || value === 'problem') results[step.id] = value;
    }
    if (!Object.keys(results).length) {
      return NextResponse.json({ message: 'Mark at least one step as OK or Problem first.' }, { status: 400 });
    }

    const now = Date.now();
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';

    // Bots get the normal success response, so they don't learn they were filtered.
    const reason = botReason(body, now);
    if (reason) {
      console.warn(`Laptop check: dropped submission (${reason})`);
      return NextResponse.json({ message: 'Sent' }, { status: 200 });
    }

    const turnstile = await turnstileProblem(body.turnstileToken, 'laptop_check', clientIp);
    if (turnstile) {
      console.warn(`Laptop check: Turnstile check failed (${turnstile})`);
      return NextResponse.json(
        { message: 'We could not verify that you are human. Please try again.' },
        { status: 403 }
      );
    }

    if (rateLimit.isLimited(clientIp, now)) {
      return NextResponse.json(
        { message: 'You have sent several results already. Please try again in an hour.' },
        { status: 429 }
      );
    }
    rateLimit.record(clientIp, now);

    const mail = resultsMail(results, cleanSystem(body.system));
    const transporter = createTransporter();

    await transporter.sendMail({
      from: `TestaScreen <${process.env.EMAIL_USER}>`,
      to: body.email,
      subject: 'Your used laptop check results',
      text: mail.text,
      html: mail.html,
    });

    const updates = body.updates === true;
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: OWNER_EMAIL,
      subject: `From laptop check: ${body.email}`,
      replyTo: body.email,
      text: [
        `Email: ${body.email}`,
        `Wants updates about new tools: ${updates ? 'YES' : 'no'}`,
        `Problems marked: ${mail.problems}`,
        '',
        mail.text,
      ].join('\n'),
      html: `
        <p><strong>Email:</strong> ${escapeHtml(body.email)}<br>
        <strong>Wants updates about new tools:</strong> ${updates ? 'YES' : 'no'}<br>
        <strong>Problems marked:</strong> ${mail.problems}</p>
        <hr>
        ${mail.html}`,
    });

    return NextResponse.json({ message: 'Sent' }, { status: 200 });
  } catch (error) {
    console.error('Laptop check mail error:', error);
    return NextResponse.json({ message: "We couldn't send the email. Please try again later." }, { status: 500 });
  }
}
