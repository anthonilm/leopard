'use client';

import React from 'react';
import { siteMeta } from '@/lib/meta';

export const metadata = {
  title: siteMeta.routes['/start-diagnostic'].title,
  description: siteMeta.routes['/start-diagnostic'].description,
};

export default function DiagnosticAssessmentPage() {
  return (
    <main
      style={{
        padding: '4rem',
        textAlign: 'center',
        minHeight: '100vh',
        background: '#0f0f0f',
        color: '#f0f0f0',
      }}
    >
      <h1>Diagnostic In Progress</h1>
      <p>This is a placeholder. Your diagnostic will appear here once ready.</p>
    </main>
  );
}
