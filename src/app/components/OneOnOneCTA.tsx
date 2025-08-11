'use client';

import React from 'react';
import styles from './OneOnOneCTA.module.css';
import Link from 'next/link';

export default function OneOnOneCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.headline}>Book a 1:1 Session</h2>
        <p className={styles.text}>
          Our core service is working 1:1 with individuals to build and sustain personalized systems for cognitive performance, organizational flow, and mental well-being. If you’re ready to strengthen decision-making, sustain peak performance, and enhance day-to-day function, schedule your first session.
        </p>
        <Link href="/book-session" className={styles.button}>
          Schedule Now →
        </Link>
      </div>
    </section>
  );
}
