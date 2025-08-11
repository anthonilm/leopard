'use client';

import React, { JSX, useState } from 'react';
import { motion } from 'framer-motion';
import { modalContent } from '../components/modals/WhoWeAreModalContent';
import InfoModal from '../components/modals/InfoModal';
import {
  Brain,
  ClipboardList,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  Users,
  Handshake,
  Target,
} from 'lucide-react';

import '../components/modals/ModalStyles.css';
import './WhoWeAre.css';

type ModalKey = keyof typeof modalContent;

const sections: {
  title: ModalKey;
  description: string;
  icon: JSX.Element;
}[] = [
  {
    title: 'Performance Outcomes',
    description:
      'Progress is tracked by behavior—not mood—resulting in clarity, regulation, and traction.',
    icon: <TrendingUp size={28} strokeWidth={1.5} />,
  },
  {
    title: 'Practice Ethos',
    description:
      'Structured mental performance care—not therapy, not mindset coaching. Built for execution, not reflection.',
    icon: <Brain size={28} strokeWidth={1.5} />,
  },
  {
    title: 'Supporting Marginalized Clients',
    description:
      'Affordable, structurally literate systems for BIPOC, LGBTQ+, and under-resourced clients.',
    icon: <Handshake size={28} strokeWidth={1.5} />,
  },
  {
    title: 'Model & Method',
    description:
      'Weekly sessions + IEPs built on COM-B behavior modeling and identity architecture.',
    icon: <ClipboardList size={28} strokeWidth={1.5} />,
  },
  {
    title: 'Strategic Vision',
    description:
      'A category-defining model at the intersection of clarity, behavior, and execution.',
    icon: <Target size={28} strokeWidth={1.5} />,
  },
  {
    title: 'Access & Affordability',
    description:
      '$35/session with the first free. Virtual-first model lowers barriers and expands access.',
    icon: <DollarSign size={28} strokeWidth={1.5} />,
  },
  {
    title: 'Student & Family Support',
    description:
      'Tools for parents navigating student stress and behavioral friction—without waitlists.',
    icon: <Users size={28} strokeWidth={1.5} />,
  },
  {
    title: 'Ethics & Integrity',
    description:
      'Culturally aware, identity-respecting, and designed to avoid clinical overreach.',
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
  },
];

export default function WhoWeAre() {
  const [activeModal, setActiveModal] = useState<ModalKey | null>(null);
  const handleClose = () => setActiveModal(null);

  return (
    <section className="who-we-are-section">
      <motion.h1
        className="who-headline"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mental health has a direct impact on your quality of life.
      </motion.h1>

      {sections.map((sec, i) => (
        <motion.div
          className="section-group"
          key={sec.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="section-title">
            <h2>{sec.title}</h2>
          </div>

          <div className="section-tile">
            <div className="tile-icon">{sec.icon}</div>
            <p>{sec.description}</p>
            <button
              className="learn-more-button"
              onClick={() => setActiveModal(sec.title)}
            >
              Learn More
            </button>
          </div>
        </motion.div>
      ))}

      {activeModal && modalContent[activeModal] && (
        <InfoModal
          isOpen={true}
          onClose={handleClose}
          title={modalContent[activeModal].title}
          body={modalContent[activeModal].body}
        />
      )}
    </section>
  );
}
