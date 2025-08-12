'use client';

import React from 'react';
import styles from './SystemSnapshot.module.css';

const steps = [
  { title: 'Performance Readiness', blurb: 'Be prepared for demanding situations, from daily challenges to high-stakes moments.' },
  { title: 'Targeted Performance Assessment', blurb: 'Expose the precise gaps holding back your execution and output.' },
  { title: 'Evidence-Based Cognitive and Behavioral Skills', blurb: 'Proven methods that hold under real-world demands.' },
  { title: 'Personalized Optimization Plan', blurb: 'A high-efficiency, adaptive system engineered for your daily demands.' },
  { title: 'Ongoing Support & Adjustment', blurb: 'Real-time feedback and refinements to keep your performance compounding.' },
  { title: 'Habit Fortification', blurb: 'Fortify mental stamina and focus so they don’t erode when you need them most.' },
];

export default function SystemSnapshot() {
  return (
    <section className={styles.section}>
      <h2 className={styles.headline}>The Noesis Approach</h2>

      <div className={styles.contentGrid}>
        {/* Left: stacked step tiles */}
        <div className={styles.stepsStack}>
          {steps.map((s, i) => (
            <div key={s.title} className={styles.stepTile}>
              <div className={styles.stepIndex}>{i + 1}</div>
              <div className={styles.stepBody}>
                <h4 className={styles.stepTitle}>{s.title}</h4>
                <p className={styles.stepBlurb}>{s.blurb}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: high-visibility paragraph */}
        <aside className={styles.infoPanel} aria-label="Who we work with and outcomes">
  <p>
    I specilize in helping high-performing professionals build and sustain optimal mental performance. My approach combines cognitive psychology, behavioral science, executive consulting, and operational insight to improve output, sharpen decisions, and strengthen well-being—while reducing lapses in focus, engagement, and reliability.
  </p>
  <p>
    I view performance states as adjustable through targeted tools, diagnostics, and protocols addressing behavior, cognition, relationships, strategies for managing anxiety and depression, and movement efficiency.
  </p>
  <p>Our work will focus on three domains essential to daily performance:</p>
  <ul>
    <li><strong>Organizational skills</strong> – clear, repeatable systems for work and life.</li>
    <li><strong>Emotional regulation</strong> – composure and focus under pressure.</li>
    <li><strong>Cognitive load management</strong> – preventing overwhelm and maintaining clarity.</li>
  </ul>
  <p>
    These skills directly impact follow-through and long-term momentum. Clients leave with systems and habits, leading to sustained motivation, improved function, and a higher quality of life.
  </p>
  <p>
    There are two principles at the center of our work: <strong>clarity</strong> –– seeing and organizing behavior –– and <strong>momentum</strong> –– consistent, self-directed progress toward meaningful goals. This is structure, measurable, execution-focused mental health support.
  </p>
</aside>

      </div>
    </section>
  );
}
