'use client';

import Hero from './components/Hero';
import OneOnOneCTA from './components/OneOnOneCTA';
import DesignedFor from './components/DesignedFor';
import SystemSnapshot from './components/SystemSnapshot';
import EmailSignup from './components/EmailSignup';
import Footer from './components/Footer';
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
        <AnimatedSection>
          <EmailSignup />
        </AnimatedSection>
      </div>
      <Footer />
    </main>
  );
}
