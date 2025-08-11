'use client';

import React from 'react';
import styles from './DesignedFor.module.css';

const profiles = [
  
  {
    title: 'Executives operating at peak capacity',
    description: 'Sustain clarity and decision quality under constant demand.',
  },
  {
    title: 'Entrepreneurs and business owners',
    description: 'Avoid burnout while managing complex, high-stakes responsibilities.',
  },
  {
    title: 'Young professionals building stability',
    description: 'Translate high potential into consistent, long-term performance.',
  },
  {
    title: 'Students pushing for academic excellence',
    description: 'Stay sharp, focused, and resilient through changing demands.',
  },
];

export default function DesignedFor() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Designed for…</h2>
      <div className={styles.scrollContainer}>
        {profiles.map((profile, index) => (
          <div className={styles.card} key={index}>
            <h3 className={styles.title}>{profile.title}</h3>
            <p className={styles.description}>{profile.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
