'use client';

import React from 'react';
import styles from './WhatWeOffer.module.css';
import Image from 'next/image';

const areasIHelpWith = [
  'Executive Burnout',
  'Decision Fatigue',
  'Workload Overwhelm',
  'Performance Anxiety',
  'Focus and Concentration',
  'Procrastination Patterns',
  'Stress Management',
  'Cognitive Endurance',
  'Sleep Optimization',
  'Resilience Building',
  'Energy Management',
  'Adaptability in Change',
  'Role Transition Stress',
  'Leadership Pressure',
  'Communication Under Stress',
  'Conflict Navigation',
  'Strategic Thinking Blocks',
  'Goal Execution Challenges',
  'Mental Recovery After Setbacks',
  'Overcommitment Recovery',
  'High-Stakes Presentation Nerves',
  'Emotional Regulation in Work',
  'Decision-Making Clarity',
  'Time and Priority Management',
  'Maintaining Motivation',
  'Preventing Cognitive Overload',
  'Work-Life Integration',
  'Handling Critical Feedback',
  'Sustaining Peak Performance',
  'Behavioral Habit Rebuilding',
];

const sections = {
  Services: [
    {
      title: '1:1 Coaching',
      description: 'Direct performance sessions focused on decision-making, recovery, and behavioral stability.',
      image: '/images/what-we-offer/service-default.jpg',
    },
    {
      title: 'Behavioral Diagnostics',
      description: 'Get mapped using our COM-B-based assessment to understand what’s helping and what’s blocking you.',
      image: '/images/what-we-offer/service-default.jpg',
    },
  ],
  Products: [
    {
      title: 'Field Manual',
      description: 'A structured workbook to track performance, barriers, and gains over time.',
      image: '/images/what-we-offer/product-default.jpg',
    },
    {
      title: 'Pocket Routine Cards',
      description: 'Carry structured tools to ground yourself and reboot focus mid-day.',
      image: '/images/what-we-offer/product-default.jpg',
    },
  ],
  Books: [
    {
      title: 'Performance Mastery (Coming Soon)',
      description: 'A reference guide to behavioral infrastructure and executive resilience.',
      image: '/images/what-we-offer/book-default.jpg',
    },
  ],
};

export default function WhatWeOfferPage() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.heading}>What We Offer</h1>

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
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={180}
                />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
