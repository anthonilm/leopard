'use client';

import Hero from './components/Hero';
import OneOnOneCTA from './components/OneOnOneCTA';
import DesignedFor from './components/DesignedFor';
import SystemSnapshot from './components/SystemSnapshot';
import WhoWeAreHorizontal from './components/WhoWeAreHorizontal';
import EmailSignup from './components/EmailSignup';
import AnimatedSection from './components/AnimatedSection';
import NewsletterLock from './components/NewsletterLock';

const newsletterItems = [
  {
    id: 'interpolated-instability',
    title: 'Interpolated Instability: The Collapse of Coherence',
    dateISO: '2025-04-01',
    summary:
      'Analyzes the systemic erosion of symbolic and performance intelligence in U.S. society, framing cultural, political, and ecological breakdown as neurocognitive disorganization.',
    href: '/newsletters/2025-04-01-interpolated-instability.pdf',
  },
  {
    id: 'disidentification-architecture',
    title: 'Disidentification and the Architecture of Coherence',
    dateISO: '2025-07-01',
    summary:
      'Defines disidentification as the structural intervention necessary to dismantle maladaptive identities and restore continuity, coherence, and authentic presence.',
    href: '/newsletters/2025-07-01-disidentification-architecture.pdf',
  },
  {
    id: 'solitary-threshold',
    title: 'The Solitary Threshold',
    dateISO: '2025-03-01',
    summary:
      'Explores solo travel as a symbolic threshold for re-entering motion, presence, and coherence, countering depressive stasis through environmental engagement and agency.',
    href: '/newsletters/2025-03-01-solitary-threshold.pdf',
  },
  {
    id: 'structural-disintegration',
    title: 'Instability as Structural Disintegration',
    dateISO: '2025-06-01',
    summary:
      'Frames instability as the collapse of integrative capacity across thought, affect, and behavior, emphasizing the need for systemic repair and relational coherence.',
    href: '/newsletters/2025-06-01-instability-structural-disintegration.pdf',
  },
  {
    id: 'belief-psychological-structure',
    title: 'Belief as Psychological Structure',
    dateISO: '2025-05-15',
    summary:
      'Defines belief as the internal architecture of coherence that sustains identity and continuity under pressure, contrasting adaptive drift with integrated orientation.',
    href: '/newsletters/2025-05-15-belief-psychological-structure.pdf',
  },
  {
    id: 'illegible-subject',
    title: 'The Illegible Subject: Cognitive Imbalance, Relational Exile, and the Ethics of Repair',
    dateISO: '2025-08-10',
    summary:
      'Explores cognitive imbalance where performance outpaces reflection, framing it as relational exile that calls for symbolic rehabilitation and trauma-informed environments.',
    href: '/newsletters/2025-08-10-illegible-subject.pdf',
  },
];

export default function Home() {
  return (
    <main className="sogolon-home">
      <div
        style={{
          background:
            'linear-gradient(to bottom, #0f3832 0%, #113734 15%, #1e2d29 35%, #5c655d 65%, #ebe6d7 100%)',
        }}
      >
        <Hero />

        <AnimatedSection>
          <OneOnOneCTA />
        </AnimatedSection>

        <AnimatedSection>
          <DesignedFor />
        </AnimatedSection>

        <AnimatedSection>
          <SystemSnapshot />
        </AnimatedSection>

        <AnimatedSection>
          <WhoWeAreHorizontal />
        </AnimatedSection>

        {/* Newsletter section moved above email signup; scroll lock disabled */}
        <NewsletterLock
          items={newsletterItems}
          sectionTitle="Newsletter"
          lockScroll={false}
        />

        <AnimatedSection>
          <EmailSignup />
        </AnimatedSection>
      </div>
    </main>
  );
}
