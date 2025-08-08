'use client';

import React from 'react';
import { InlineWidget } from 'react-calendly';
import './BookSession.css';

export default function BookSession() {
  return (
    <main className="booking-wrapper">
      <h1 className="booking-title">Schedule Your Session</h1>
      <InlineWidget
        url="https://calendly.com/tmcelrath26/30min"
        styles={{
          height: '100vh',
          width: '100%',
          minHeight: '700px',
        }}
      />
    </main>
  );
}
