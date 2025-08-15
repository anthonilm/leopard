'use client';

import React from 'react';
import styles from './Students.module.css';

const tutoringTopics: string[] = [
  'Algebra I', 'Algebra II', 'Geometry', 'Trigonometry', 'Precalculus',
  'Calculus I (Differential)', 'Calculus II (Integral)', 'Discrete Math (intro)', 'Statistics (intro)',
  'Biology (HS/Intro)', 'General Chemistry', 'Physics: Mechanics (intro)', 'Physics: E&M (intro)',
  'Computer Science Fundamentals', 'Python Programming (intro)', 'Data Analysis with Excel/Sheets',
  'English Composition', 'Critical Reading & Analysis', 'Research Methods (intro)',
  'U.S. History (survey)', 'World History (survey)', 'Microeconomics (intro)', 'Macroeconomics (intro)',
  'Psychology 101', 'Sociology 101', 'Philosophy & Logic (intro)', 'Public Speaking & Presentation',
  'Spanish I–II (foundations)', 'Study Skills & Note Systems', 'Test-Taking Strategy',
];

const sections = {
  'Student Services': [
    {
      title: 'Tutoring',
      description:
        'Course support and exam prep using retrieval practice, spaced repetition, and worked examples.',
    },
    {
      title: 'Organization',
      description:
        'Systematize materials and workflows: single source of truth, weekly reset, and version discipline.',
    },
    {
      title: 'Time Management',
      description:
        'Timeboxed study blocks, recovery windows, and a weekly cadence that protects priorities.',
    },
    {
      title: 'Behavioral Systems',
      description:
        'Cue-driven habits for focus, energy, and execution with simple weekly review and light metrics.',
    },
  ],
};

export default function StudentsPage() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.heading}>Student Services</h1>

      {/* Tutoring Topics */}
      <section className={styles.areasSection}>
        <h2 className={styles.subheading}>Tutoring Topics</h2>
        <div className={styles.areasGrid}>
          {tutoringTopics.map((topic, idx) => (
            <div key={idx} className={styles.areaItem}>
              {topic}
            </div>
          ))}
        </div>
      </section>

      {/* Student Services tiles */}
      {Object.entries(sections).map(([category, items]) => (
        <section key={category}>
          <h2 className={styles.heading}>{category}</h2>
          <div className={styles.scrollContainer}>
            {items.map((item, idx) => (
              <div className={styles.tile} key={idx}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className={styles.bottomCtaSection}>
        <a href="/book-session" className={styles.ctaButton}>
          Schedule Now
        </a>
      </section>
    </main>
  );
}
