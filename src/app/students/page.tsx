'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Students.module.css';

const tutoringTopics: string[] = [
  'Algebra I',
  'Algebra II',
  'Geometry',
  'Trigonometry',
  'Calculus II (Integral)',
  'Computer Science Fundamentals',
  'Python Programming (intro)',
  'Data Analysis with Excel/Sheets',
  'English Composition',
  'Comparative Literature (Intro)',
  'Critical Reading & Analysis',
  'Research Methods (intro)',
  'U.S. History (survey)',
  'Macroeconomics (intro)',
  'Psychology 101',
  'Sociology 101',
  'Philosophy & Logic (intro)',
  'Public Speaking & Presentation',
  'Spanish I–II (foundations)',
  'Study Skills & Note Systems',
  'Test-Taking Strategy',
  'Mental Health Strategies',
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

function StudentSystemSnapshot() {
  const studentSteps = [
    { title: 'Academic Readiness', blurb: 'Stabilize sleep, schedule, and study blocks to support steady output.' },
    { title: 'Academic Diagnostic & Priorities', blurb: 'Surface blockers across courses; set a weekly plan and clear priorities.' },
    { title: 'Executive Function & Workflow', blurb: 'Plan → triage → execute with calendars, task pipelines, and checkpoints.' },
    { title: 'Reading, Notes & Retrieval', blurb: 'Build a repeatable system for close reading, note structure, and spaced recall.' },
    { title: 'Test Strategy & Rehearsal', blurb: 'Timing, error analysis, and practice labs for quizzes, exams, and presentations.' },
    { title: 'Coaching & Adjustments', blurb: 'Weekly review to correct drift, reinforce habits, and keep momentum.' },
  ];

  return (
    <section className={styles.section} id="student-system-snapshot">
      <h2 className={styles.headline}>Student Performance System</h2>

      <div className={styles.contentGrid}>
        <div className={styles.stepsStack}>
          {studentSteps.map((s, i) => (
            <div key={s.title} className={styles.stepTile}>
              <div className={styles.stepIndex}>{i + 1}</div>
              <div className={styles.stepBody}>
                <h4 className={styles.stepTitle}>{s.title}</h4>
                <p className={styles.stepBlurb}>{s.blurb}</p>
              </div>
            </div>
          ))}
        </div>

        <aside className={styles.infoPanel} aria-label="Student outcomes and focus areas">
          <p>
            The student program builds reliable academic performance: steady homework throughput, organized weeks,
            and confident test execution.
          </p>
          <p>Core focus areas:</p>
          <ul>
            <li><strong>Planning & task flow</strong> — calendars, weekly plans, deadline tracking, and task triage.</li>
            <li><strong>Study systems</strong> — reading pipelines, structured notes, spaced retrieval, and question banks.</li>
            <li><strong>Test strategy</strong> — timing plans, error review, practice reps, and exam simulations.</li>
            <li><strong>Focus & regulation</strong> — attention routines, anxiety management strategies, and movement breaks.</li>
            <li><strong>Communication</strong> — email to instructors, office hours, and help-seeking scripts.</li>
          </ul>
          <p>
            Deliverable: a weekly operating rhythm students can run on their own—with tools that scale across courses and terms.
          </p>
        </aside>
      </div>
    </section>
  );
}

export default function StudentsPage() {
  return (
    <main className={styles.wrapper}>
      {/* Parent-focused promo headline */}
      <motion.h1
        className={styles.promoHeadline}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Give your student a weekly performance system that improves behavior and discipline, grows generativity and creativity, and supports mental health—book a consult today.
      </motion.h1>

      <h1 className={styles.heading}>Tutoring Topics</h1>

      {/* Tutoring Topics */}
      <section className={styles.areasSection}>
        <h2 className={styles.subheading}></h2>
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

      <StudentSystemSnapshot />

      {/* How tutoring works (hover tile) */}
      <section className={styles.howItWorks} aria-label="How tutoring works">
        <div className={`${styles.tile} ${styles.howTile}`}>
          <h2>How Tutoring Works</h2>
          <p className={styles.howText}>
            Tutoring runs online via secure video with screen sharing. We start with a brief COM-B assessment to map each
            student’s Capability, Opportunity, and Motivation, then set goals and a weekly study plan. Each session
            includes a quick progress check, targeted instruction, guided practice with immediate feedback, and a short
            assignment calibrated to the COM-B profile. Materials and homework live in a shared folder, and progress is
            tracked with simple metrics (accuracy, time-on-task, completion). Parent check-ins are available on request.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.bottomCtaSection}>
        <a href="/book-session" className={styles.ctaButton}>
          Schedule Now
        </a>
      </section>
    </main>
  );
}
