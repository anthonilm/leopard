'use client';

import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.logoContainer}>
        <div className={styles.bars}>
          <div className={styles.bar} />
          <div className={styles.bar} />
        </div>
        <h1 className={styles.noesis}>NOESIS</h1>
      </div>
      <p className={styles.tagline}>PERFORM BETTER. RECOVER FASTER. <br /> REST EASY.</p>
    </section>
  );
}
