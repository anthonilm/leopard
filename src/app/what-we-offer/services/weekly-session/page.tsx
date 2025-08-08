'use client';

import React from 'react';

export default function WeeklySessionPage() {
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
        1:1 Weekly Session
      </h1>

      <p style={{ marginTop: '1.5rem', maxWidth: '700px', fontSize: '1.1rem', lineHeight: '1.7' }}>
        This is our foundational service—structured, targeted, and adaptable. Whether you're in a period
        of high demand or realignment, this session anchors your week with behavioral structure,
        clarity, and strategy. It includes guided planning, reflection, and a focused decision loop
        to support immediate traction.
      </p>

      <p style={{ marginTop: '1rem', fontSize: '1rem' }}>
        <strong>Price:</strong> $35 / session <br />
        <strong>Booking:</strong> <a href="/book-session" style={{ color: '#f5c391' }}>Schedule here →</a>
      </p>
    </div>
  );
}
