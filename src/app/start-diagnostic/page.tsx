'use client';

import React from 'react';
import { siteMeta } from '@/lib/meta';

export const metadata = {
  title: siteMeta.routes['/diagnostic-assessment'].title,
  description: siteMeta.routes['/diagnostic-assessment'].description,
};

export default function DiagnosticAccessPage() {
  return (
    <main style={{ padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Your Diagnostic Access
      </h1>
      <p style={{ marginBottom: '2rem' }}>
        Please complete the intake assessment below before your scheduled session. Your responses will help us tailor our approach to your current needs and behavioral patterns.
      </p>
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScU3FTYwzbHGIQe_gFPMk90iPqv53reJV2CnhtM14MQ2brAFQ/viewform?embedded=true"
          width="100%"
          height="16440"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          style={{ border: 'none' }}
        >
          Loading…
        </iframe>
      </div>
    </main>
  );
}
