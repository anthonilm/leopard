'use client';

import Hero from './components/Hero';
import OneOnOneCTA from './components/OneOnOneCTA';
import DesignedFor from './components/DesignedFor';
import SystemSnapshot from './components/SystemSnapshot';
import WhoWeAreHorizontal from './components/WhoWeAreHorizontal';
import EmailSignup from './components/EmailSignup';
import AnimatedSection from './components/AnimatedSection';

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
        {/* New: Who We Are section (horizontal scroll) */}
        <AnimatedSection>
          <WhoWeAreHorizontal />
        </AnimatedSection>
        <AnimatedSection>
          <EmailSignup />
        </AnimatedSection>
      </div>
    </main>
  );
}
