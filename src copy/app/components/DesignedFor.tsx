'use client';

import React from 'react';
import styles from './DesignedFor.module.css';

const profiles = [
  {
    title: 'Students pushing for academic excellence',
    description: 'Stay sharp, focused, and resilient through changing demands.',
  },
  {
    title: 'Executives operating at peak capacity',
    description: 'Support endurance, precision, and critical thinking under pressure.',
  },
  {
    title: 'Educators leading in demanding systems',
    description: 'Avoid burnout while sustaining high-impact teaching and mentoring.',
  },
  {
    title: 'Young professionals building stability',
    description: 'Translate high potential into consistent, long-term performance.',
  },
];

export default function DesignedFor() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Designed for People Who…</h2>
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
