'use client';

import React from 'react';
import styles from '../ClientPage.module.css';
import { siteMeta } from '@/lib/meta';

export const metadata = {
  title: siteMeta.routes['/students'].title,
  description: siteMeta.routes['/students'].description,
};

export default function StudentsPage() {
  return (
    <main className={styles.clientPage}>
      <section className={styles.hero}>
        <h1>Students</h1>
        <p>Performance systems to help students learn, lead, and live smoother.</p>
      </section>
      <section className={styles.footer}>
        <p>More coming soon. Reach out if you’d like to start early.</p>
      </section>
    </main>
  );
}
