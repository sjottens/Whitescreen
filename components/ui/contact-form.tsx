'use client';

import { useState } from 'react';

interface ContactFormProps {
  locale: string;
  labels: {
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    successMessage: string;
    errorMessage: string;
    sendingMessage: string;
  };
}

export default function ContactForm({ locale, labels }: ContactFormProps) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !message.trim()) {
      setErrorMsg('Please fill in all fields');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          message,
          locale,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setMessage('');
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const errorData = await response.json();
        setErrorMsg(errorData.message || 'Failed to send message');
        setStatus('error');
      }
    } catch (err) {
      setErrorMsg('An error occurred. Please try again.');
      setStatus('error');
      console.error('Contact form error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="mb-6">
        <label htmlFor="email" className="block text-lg font-semibold text-slate-900 mb-2">
          {labels.emailLabel}
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 placeholder-slate-700 bg-white"
          disabled={status === 'sending'}
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-lg font-semibold text-slate-900 mb-2">
          {labels.messageLabel}
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help?"
          rows={6}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 placeholder-slate-700 bg-white"
          disabled={status === 'sending'}
          required
        />
      </div>

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-slate-900 font-semibold">
          {errorMsg}
        </div>
      )}

      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-slate-900 font-semibold">
          {labels.successMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-6 py-3 bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-400 text-white font-semibold rounded-lg transition-colors"
      >
        {status === 'sending' ? labels.sendingMessage : labels.sendButton}
      </button>
    </form>
  );
}
