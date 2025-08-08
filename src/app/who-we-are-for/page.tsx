
import type { Metadata } from 'next';
import styles from './WhoWeAreFor.module.css';
import Link from 'next/link';
import { siteMeta } from '@/lib/meta';

export const metadata: Metadata = {
  title: siteMeta.routes['/who-we-are-for']?.title ?? 'Who We Are For',
  description: siteMeta.routes['/who-we-are-for']?.description ?? '',
};

const groups = [
  {
    title: 'Students',
    description:      'High-capacity learners navigating complex demands. Includes study systems, test prep protocols, and burnout buffers. Diagnostic tools assess executive functioning, learning preferences, and daily routines.',
  },
  {
    title: 'Executives',
    description:
      'Leaders operating under sustained performance pressure. Includes decision frameworks, stress cycle recovery tools, and meeting hygiene protocols. Diagnostics focus on attention, stamina, and task clarity.',
  },
  {
    title: 'Teachers',
    description:
      'Mentors balancing instruction, guidance, and resilience. Includes communication scaffolds, planning systems, and adaptive instruction templates. Diagnostics assess instructional rhythm, emotional labor, and fatigue triggers.',
  },
  {
    title: 'Young Professionals',
    description:
      'Individuals translating potential into sustainable output. Includes execution scaffolds, goal decomposition, and pace regulation systems. Diagnostics explore work style alignment, recovery debt, and risk of overextension.',
  },
];

export default function WhoWeAreForPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Who We Are For</h1>
      <div className={styles.stack}>
        {groups.map((group, index) => (
          <div key={index} className={styles.card}>
            <h2>{group.title}</h2>
            <p>{group.description}</p>
            <Link href="/start-diagnostic" className={styles.diagnosticLink}>
              Start Diagnostic →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
