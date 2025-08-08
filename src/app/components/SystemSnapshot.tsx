'use client';

import React from 'react';
import styles from './SystemSnapshot.module.css';

const steps = [
  { title: 'Targeted Performance Assessment', blurb: 'Isolate the bottlenecks.' },
  { title: 'Evidence-Based Mental Skills', blurb: 'Methods that hold under pressure.' },
  { title: 'Personalized Performance Plan', blurb: 'Step-by-step actions you can run.' },
  { title: 'Accountability & Course Correction', blurb: 'Tight feedback loops.' },
  { title: 'Crisis Prevention', blurb: 'Protect energy and attention before they fray.' },
  { title: 'Performance Under Pressure', blurb: 'Prep for high-stakes moments.' },
];

export default function SystemSnapshot() {
  return (
    <section className={styles.section}>
      <h2 className={styles.headline}>How it works</h2>

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
            
            We help high-performing students and professionals achieve and sustain optimum mental performance.
            Our model blends cognitive psychology, behavioral science, executive consulting, and
            operational insight to deliver consistent output, sharper decisions under pressure, and
            measurable gains in well-being while reducing costly lapses in focus, engagement, and reliability.
          </p>
          <p>
            We treat performance states as modifiable through precise tools, diagnostics, and protocols
            targeting behavior, cognition, and relationships. This includes anxiety and depression management.
            
          </p>
          <p>Our care targets three domains critical to day-to-day performance:</p>
          <ul>
            <li><strong>Organizational skills</strong> – creating clear, repeatable systems for work and life.</li>
            <li><strong>Emotional regulation</strong> – maintaining composure and focus under pressure.</li>
            <li><strong>Cognitive load management</strong> – preventing overwhelm and sustaining mental clarity.</li>
          </ul>
          <p>
            These areas directly influence follow-through, performance under pressure, and long-term momentum.
            Clients leave with refined systems they can apply daily—resulting in improved function, sustained
            motivation, and enhanced quality of life.
          </p>
          <p>
            We anchor our work in two core concepts: <strong>clarity</strong>—the ability to see, name, and
            organize behavior with precision—and <strong>momentum</strong>—sustained, self-directed movement
            toward desired outcomes. 
            
            This is mental health care: structured, measurable, and execution-focused.
          </p>
        </aside>
      </div>
    </section>
  );
}
