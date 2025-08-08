'use client';

import React from 'react';
import { siteMeta } from '@/lib/meta';
import EmailSignup from '../components/EmailSignup';

export const metadata = {
  title: siteMeta.routes['/contact-us'].title,
  description: siteMeta.routes['/contact-us'].description,
};

export default function ContactUsPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '4rem 2rem',
        background: 'linear-gradient(to bottom, #ece7db, #ffffff)',
        fontFamily: 'var(--font-geist-sans)',
        color: '#111',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Contact Us</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
        Reach out with questions, partnerships, or interest in performance care.
      </p>

      <section style={{ marginTop: '2rem' }}>
        <EmailSignup />
      </section>
    </main>
  );
}
