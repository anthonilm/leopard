'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './EmailSignup.css';

export default function EmailSignup() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch('https://formspree.io/f/mdkdpner', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });

    if (res.ok) {
      router.push('/thank-you');
    } else {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="email-signup-form">
      <label htmlFor="email">Join our email list:</label>
      <input type="email" name="email" required placeholder="you@example.com" />
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Submitting...' : 'Sign Up'}
      </button>
      {status === 'error' && <p className="message error">Something went wrong. Try again.</p>}
    </form>
  );
}
