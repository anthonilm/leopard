'use client';

import Hero from './components/Hero';
import StartDiagnostic from './components/StartDiagnostic';
import DesignedFor from './components/DesignedFor';
import SystemSnapshot from './components/SystemSnapshot';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';




export default function Home() {
  return (
    <main className="sogolon-home">
      <Hero />
      <AnimatedSection>
        <StartDiagnostic />
      </AnimatedSection>
      <AnimatedSection>
        <DesignedFor />
      </AnimatedSection>
      <AnimatedSection>
        <SystemSnapshot />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
