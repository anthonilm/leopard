'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
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

const PAYPAL_URL = 'https://www.paypal.com/ncp/payment/BGYVAL2LEPV2Q';

export default function StudentsPage() {
  return (
    <main className={styles.wrapper}>
      {/* Parent-focused promo headline */}
      <motion.h1
        className={styles.promoHeadline}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
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

      {/* How tutoring works (full-width emphasis tile) */}
      <section className={styles.howItWorks} aria-labelledby="how-heading">
        <div className={`${styles.tile} ${styles.howTile}`}>
          <div className={styles.howHeaderRow}>
            <h2 id="how-heading" className={styles.howTitle}>How Tutoring Works</h2>
            <div className={styles.priceBadge}>$35 / session</div>
          </div>

          <div className={styles.howBadges}>
            <span className={styles.badge}>Online video + screen share</span>
            <span className={styles.badge}>Exam or essay support</span>
            <span className={styles.badge}>Habit & study systems coaching</span>
          </div>

          <p className={styles.howLead}>
            Focused on academics and student life. Every session builds <strong>comprehension</strong> and <strong>confidence</strong>.
            I also create and support <strong>Individual Education Plans (IEPs)</strong> to give students a clear roadmap.
          </p>

          <div className={styles.howGrid}>
            <div className={styles.howBlock}>
              <h3 className={styles.howBlockTitle}>Setup</h3>
              <ul className={styles.howList}>
                <li>Short <strong>COM-B</strong> assessment (Capability, Opportunity, Motivation)</li>
                <li>Defined goals and a simple weekly plan</li>
              </ul>
            </div>

            <div className={styles.howBlock}>
              <h3 className={styles.howBlockTitle}>In Each Session</h3>
              <ul className={styles.howList}>
                <li>Quick progress check</li>
                <li>Targeted instruction</li>
                <li>Guided practice with immediate feedback</li>
                <li>Short assignment matched to the COM-B profile</li>
              </ul>
            </div>

            <div className={styles.howBlock}>
              <h3 className={styles.howBlockTitle}>Logistics</h3>
              <ul className={styles.howList}>
                <li>Materials in a shared folder</li>
                <li>Simple metrics: accuracy, completion, time-on-task</li>
                <li>Parent check-ins anytime on request</li>
              </ul>
            </div>
          </div>

          {/* Credibility block (always visible; compact) */}
          <div className={styles.howCred}>
            <h3 className={styles.howCredTitle}>Teaching & Tutoring Background</h3>
            <p className={styles.howCredIntro}>
              Years in teaching and one-to-one tutoring inform how I design clear, practical IEPs and execution plans.
            </p>
            <ul className={styles.howCredList}>
              <li>Classroom teaching, one-to-one tutoring, and family collaboration</li>
              <li>IEP design and implementation aligned to everyday school demands</li>
              <li>Emphasis on comprehension, confidence, and durable study systems</li>
            </ul>
          </div>

          <div className={styles.howCtaRow}>
            <Link
              href={`/schedule?pay=${encodeURIComponent(PAYPAL_URL)}`}
              className={styles.ctaButtonPrimary}
              aria-label="Schedule a $35 tutoring session"
            >
              Book a $35 Session
            </Link>
            <span className={styles.howNote}>Flexible focus: single assignment or ongoing habit coaching.</span>
          </div>
        </div>
      </section>

      {/* Bottom CTA — keeps existing flow */}
      <section className={styles.bottomCtaSection}>
        <Link
          href={`/schedule?pay=${encodeURIComponent(PAYPAL_URL)}`}
          className={styles.ctaButton}
        >
          Schedule Now
        </Link>
      </section>
    </main>
  );
}
