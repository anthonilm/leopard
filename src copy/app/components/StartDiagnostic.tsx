'use client';

import React from 'react';
import styles from './StartDiagnostic.module.css';

export default function StartDiagnostic() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.headline}>Ready to strengthen your behavioral infrastructure?</h2>
        <button className={styles.button}>
          Start Diagnostic
        </button>
      </div>
    </section>
  );
}
