'use client';

import React from 'react';

export default function FieldManualPage() {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #121212, #ece7db)',
        minHeight: '100vh',
        padding: '4rem 2rem',
        fontFamily: 'var(--font-geist-sans)',
        color: '#ece7db',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-cormorant)', color: '#e4d3aa' }}>
        The Performance Field Manual
      </h1>

      <p style={{ marginTop: '1.5rem', maxWidth: '700px', fontSize: '1.1rem', lineHeight: '1.7' }}>
        The Performance Field Manual is a tactical, 6–12 week workbook for clients working through
        structured change. It contains care track overviews, weekly structure sheets, behavior logs,
        and reset protocols. Think of it as the analog command center for performance scaffolding—
        not inspirational fluff, but practical behavioral architecture.
      </p>

      <p style={{ marginTop: '1rem', fontSize: '1rem' }}>
        <strong>Format:</strong> Coil-bound or printable PDF <br />
        <strong>Release:</strong> Coming soon <br />
        <strong>Price Range:</strong> $30–$45
      </p>
    </div>
  );
}
