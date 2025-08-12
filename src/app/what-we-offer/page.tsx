'use client';

import React from 'react';
import styles from './WhatWeOffer.module.css';

const areasIHelpWith = [
  'Executive Burnout', 'Decision Fatigue', 'Workload Overwhelm', 'Performance Anxiety',
  'Focus and Concentration', 'Procrastination Patterns', 'Stress Management', 'Cognitive Endurance',
  'Sleep Optimization', 'Resilience Building', 'Energy Management', 'Adaptability in Change',
  'Role Transition Stress', 'Leadership Pressure', 'Communication Under Stress', 'Conflict Navigation',
  'Strategic Thinking Blocks', 'Goal Execution Challenges', 'Mental Recovery After Setbacks',
  'Overcommitment Recovery', 'High-Stakes Presentation Nerves', 'Emotional Regulation in Work',
  'Decision-Making Clarity', 'Time and Priority Management', 'Maintaining Motivation',
  'Preventing Cognitive Overload', 'Work-Life Integration', 'Handling Critical Feedback',
  'Sustaining Peak Performance', 'Behavioral Habit Rebuilding',
];

const sections = {
  Services: [
    {
      title: '1:1 Coaching',
      description: 'Direct performance sessions focused on decision-making, recovery, and behavioral stability.',
      checkoutUrl: '#', // replace with your PayPal link
      ctaText: 'Lock it in.',
    },
    {
      title: 'Behavioral Diagnostics',
      description: 'Get mapped using our COM-B-based assessment to understand what’s helping and what’s blocking you.',
      checkoutUrl: '#', // replace with your PayPal link
      ctaText: 'Lock it in.',
    },
    {
      title: '6-Session Package – $400',
      description: 'Includes COM-B assessment, Individualized Executive Plan (IEP), and access to physical movement facilities such as yoga.',
      checkoutUrl: '#', // replace with your PayPal link
      ctaText: 'Lock it in.',
    },
    {
      title: '3-Session Package – $200',
      description: 'Includes COM-B assessment, Individualized Executive Plan (IEP), and access to physical movement facilities such as yoga.',
      checkoutUrl: '#', // replace with your PayPal link
      ctaText: 'Lock it in.',
    },
  ],
  Products: [
    {
      title: 'Field Manual',
      description: 'A structured workbook to track performance, barriers, and gains over time.',
      checkoutUrl: '#', // replace with your PayPal link
      ctaText: 'Lock it in.',
    },
    {
      title: 'Pocket Routine Cards',
      description: 'Carry structured tools to ground yourself and reboot focus mid-day.',
      checkoutUrl: '#', // replace with your PayPal link
      ctaText: 'Lock it in.',
    },
  ],
  Books: [
    {
      title: 'Performance Mastery (Coming Soon)',
      description: 'A reference guide to behavioral infrastructure and executive resilience.',
      checkoutUrl: '#', // replace with your PayPal link
      ctaText: 'Lock it in.',
    },
  ],
};

export default function WhatWeOfferPage() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.heading}></h1>

      {/* Areas I Help With */}
      <section className={styles.areasSection}>
        <h2 className={styles.subheading}>Areas I Help With</h2>
        <div className={styles.areasGrid}>
          {areasIHelpWith.map((area, idx) => (
            <div key={idx} className={styles.areaItem}>
              {area}
            </div>
          ))}
        </div>
      </section>

      {Object.entries(sections).map(([category, items]) => (
        <div key={category}>
          <h2 className={styles.heading}>{category}</h2>
          <div className={styles.scrollContainer}>
            {items.map((item, idx) => (
              <div className={styles.tile} key={idx}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                {item.checkoutUrl && (
                  <a
                    href={item.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaButton}
                  >
                    {item.ctaText || 'Lock it in.'}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
