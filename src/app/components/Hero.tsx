'use client';

import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.topLeftText}>
        <div>Noesis Systems LLC</div>
        <div>Cognitive Behavioral Performance Support</div>
      </div>
      <div className={styles.logoContainer}>
        <div className={styles.bars}>
          <div className={styles.bar} />
          <div className={styles.bar} />
        </div>
        <h1 className={styles.noesis}>NOESIS</h1>
      </div>
      <p className={styles.tagline}>
        PERFORM BETTER. RECOVER FASTER. <br /> REST EASY.
      </p>

      {/* Credentials just below tagline */}
      <div className={styles.credentials}>
        Anthoni McElrath, M.S., Ph.D. Licensed Integrative Mental Health Coach
      </div>
    </section>
  );
}
