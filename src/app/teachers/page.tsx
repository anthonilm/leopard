'use client';

import React from 'react';
import styles from '../ClientPage.module.css';
import { siteMeta } from '@/lib/meta';

export const metadata = {
  title: siteMeta.routes['/teachers'].title,
  description: siteMeta.routes['/teachers'].description,
};

export default function TeachersPage() {
  return (
    <main className={styles.clientPage}>
      <section className={styles.hero}>
        <h1>Teachers</h1>
        <p>Support systems to help educators model and sustain performance.</p>
      </section>
      <section className={styles.footer}>
        <p>More coming soon. Reach out if you’d like to start early.</p>
      </section>
    </main>
  );
}
