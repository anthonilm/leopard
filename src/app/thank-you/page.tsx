'use client';

import React from 'react';
import Link from 'next/link';
import { siteMeta } from '@/lib/meta';

export const metadata = {
  title: 'Thank You',
  description: 'We received your submission.',
};

export default function ThankYouPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '6rem 2rem',
        background: 'linear-gradient(to bottom, #ece7db, #ffffff)',
        fontFamily: 'var(--font-geist-sans)',
        color: '#111',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '2.75rem', marginBottom: '1.5rem' }}>
        You’re on the list.
      </h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '2.5rem' }}>
        We’ll follow up soon with early insights, product releases, and performance strategies designed for your pace of life.
      </p>
      <Link
        href="/"
        style={{
          fontSize: '1rem',
          textDecoration: 'underline',
          color: '#333',
        }}
      >
        Back to Home
      </Link>
    </main>
  );
}
