'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import styles from './NavOverlay.module.css';
import ContactModal from './ContactModal';

export default function NavOverlay() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [askOpen, setAskOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Menu Button */}
      <button className={styles.menuButton} onClick={() => setMenuOpen(true)}>
        ☰
      </button>

      {/* Ask Me Button */}
      <button className={styles.askButton} onClick={() => setAskOpen(true)}>
        ?
      </button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.menuOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.menuHeader}>
              <h1 className={styles.menuTitle}>Noesis Systems, LLC</h1>
              <p className={styles.menuSubtitle}>Precision Systems for Cognitive Performance</p>
              <button className={styles.closeButton} onClick={() => setMenuOpen(false)}>×</button>
            </div>

            <nav className={styles.menuLinks}>
              <button onClick={() => handleNavigate('/')}>Home</button>
              <button onClick={() => handleNavigate('/what-we-offer')}>Services</button>
              <button onClick={() => handleNavigate('/students')}>For Students</button>
              <button
                onClick={() => {
                  setContactOpen(true);
                  setMenuOpen(false);
                }}
              >
                Contact Us
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal (triggered by Ask Me or Contact Us) */}
      <ContactModal
        isOpen={askOpen || contactOpen}
        onClose={() => {
          setAskOpen(false);
          setContactOpen(false);
        }}
      />
    </>
  );
}
