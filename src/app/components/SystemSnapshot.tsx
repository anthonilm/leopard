'use client';

import React from 'react';
import Link from 'next/link';
import styles from './SystemSnapshot.module.css';

export default function SystemSnapshot() {
  return (
    <section className={styles.stack}>
      <Link href="/infrastructure" className={styles.tile}>
        <h2>Behavioral Infrastructure</h2>
        <p>Durable systems built around routines, decisions, and daily triggers.</p>
      </Link>
      <Link href="/performance" className={styles.tile}>
        <h2>Performance Care</h2>
        <p>Precision tools to sustain clarity, stamina, and control under pressure.</p>
      </Link>
      <Link href="/adaptation" className={styles.tile}>
        <h2>Adaptation Engine</h2>
        <p>Real-time calibration using diagnostics and situational feedback.</p>
      </Link>
    </section>
  );
}
