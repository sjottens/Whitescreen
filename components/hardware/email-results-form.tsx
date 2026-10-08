// components/hardware/email-results-form.tsx - "Email me the results" for the
// used laptop check. Posts the step results to /api/laptop-check, which mails
// them to the visitor (and notifies the site owner).

'use client';

import { useId, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { STEPS, type StepStatus } from '@/lib/used-laptop-steps';

interface EmailResultsFormProps {
  results: Record<string, StepStatus | undefined>;
  system: { resolution: string; cores: number | null; memory: number | null; touch: boolean } | null;
}

type State = 'idle' | 'sending' | 'sent' | 'error';

export default function EmailResultsForm({ results, system }: EmailResultsFormProps) {
  const id = useId();
  const [email, setEmail] = useState('');
  const [updates, setUpdates] = useState(false);
  const [state, setState] = useState<State>('idle');
  const [error, setError] = useState('');
  // Shown time, for the server's "filled in too fast" bot check.
  const [startedAt] = useState(() => Date.now());

  const checked = Object.values(results).filter(Boolean).length;

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checked) {
      setState('error');
      setError('Mark at least one step as OK or Problem first.');
      return;
    }
    setState('sending');
    const website = (new FormData(e.currentTarget).get('website') as string) || '';
    try {
      const res = await fetch('/api/laptop-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          results,
          updates,
          website,
          startedAt,
          system: system && {
            resolution: system.resolution,
            cores: system.cores ?? undefined,
            memory: system.memory ?? undefined,
            touch: system.touch,
          },
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "We couldn't send the email. Please try again later.");
      }
      setState('sent');
    } catch (err) {
      setState('error');
      setError(err instanceof Error ? err.message : "We couldn't send the email. Please try again later.");
    }
  };

  if (state === 'sent') {
    return (
      <p role="status" className="rounded-lg border border-[#00DC82]/40 bg-[#00DC82]/10 p-4 text-sm text-slate-100">
        Sent! Your results are on their way to <strong>{email}</strong>. Check your spam folder if it hasn&apos;t
        arrived in a few minutes.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-lg border border-slate-700 bg-slate-950/40 p-4">
      <label htmlFor={`${id}-email`} className="mb-2 block text-sm font-medium text-slate-100">
        Your email address
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id={`${id}-email`}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="min-w-0 flex-1 rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00DC82]"
        />
        <button type="submit" disabled={state === 'sending'} className="btn btn-primary focus-ring disabled:opacity-60">
          {state === 'sending' ? 'Sending...' : 'Send my results'}
        </button>
      </div>

      {/* Honeypot: hidden from people, bots fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="mt-3 flex items-start gap-2 text-sm text-slate-300">
        <input
          type="checkbox"
          checked={updates}
          onChange={(e) => setUpdates(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-[#00DC82]"
        />
        Also email me now and then about new TestaScreen tools. You can unsubscribe at any time.
      </label>

      {state === 'error' && (
        <p role="alert" className="mt-3 text-sm text-red-300">
          {error}
        </p>
      )}
      <p className="mt-3 text-xs text-slate-400">
        {checked} of {STEPS.length} steps marked so far. We use your address to send these results
        {updates ? ' and the occasional update' : ''}, nothing else. See the{' '}
        <Link href="/privacy" className="text-cyan-300 underline">
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}
