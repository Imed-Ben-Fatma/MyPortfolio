'use client';

import { useState } from 'react';

interface ContactFormProps {
  dict: {
    form_name: string;
    form_email: string;
    form_message: string;
    form_submit: string;
    form_sending: string;
    form_success: string;
    form_error: string;
  };
}

export function ContactForm({ dict }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    // Access key from environment variables (client-side)
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
          subject: `New Contact Form Message from ${name}`,
          from_name: 'Portfolio Contact Form',
        }),
      });

      const result = await response.json();
      if (response.status === 200 && result.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        console.error('Web3Forms Error:', result);
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission network error:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {dict.form_name}
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={status === 'sending'}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:opacity-50"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {dict.form_email}
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === 'sending'}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:opacity-50"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {dict.form_message}
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          disabled={status === 'sending'}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none disabled:opacity-50"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow hover:opacity-90 transition duration-200 disabled:opacity-50 cursor-pointer"
        >
          {status === 'sending' ? dict.form_sending : dict.form_submit}
        </button>

        {status === 'success' && (
          <p className="text-sm font-medium text-emerald-500 animate-fade-in">
            {dict.form_success}
          </p>
        )}

        {status === 'error' && (
          <p className="text-sm font-medium text-destructive animate-fade-in">
            {dict.form_error}
          </p>
        )}
      </div>
    </form>
  );
}
