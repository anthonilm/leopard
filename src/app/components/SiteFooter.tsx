import React from 'react';
import styles from './SiteFooter.module.css';

type Props = {
  className?: string;
};

export default function SiteFooter({ className }: Props) {
  return (
    <footer
      className={[styles.footer, className].filter(Boolean).join(' ')}
      aria-label="Legal disclaimer"
    >
      <p className={styles.disclaimer}>
        <strong>Disclaimer:</strong> Services are coaching and education for
        cognitive-behavioral performance. The work delivers practical value: weekly operating rhythms, executive-function tools, skills training for focus, planning, and follow-through, and measurable habit systems that improve daily functioning and quality of life.They are non-clinical and outside
        clinical diagnosis or medical treatment. I maintain a documented referral protocol when
        clinical care is indicated. For urgent concerns, contact
        988 (Suicide &amp; Crisis Lifeline), 911, or your nearest emergency department.
      </p>
    </footer>
  );
}
