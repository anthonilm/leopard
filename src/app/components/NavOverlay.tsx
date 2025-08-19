'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import styles from './NavOverlay.module.css';
import ContactModal from './ContactModal';

export default function NavOverlay() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [askOpen, setAskOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const router = useRouter();
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleNavigate = (path: string) => {
    router.push(path);
    setMenuOpen(false);
  };

  // Close menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Focus the close button when menu opens (simple focus management)
  useEffect(() => {
    if (menuOpen) {
      closeBtnRef.current?.focus();
    }
  }, [menuOpen]);

  return (
    <>
      {/* Menu Button */}
      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* Ask Me Button */}
      <button
        className={styles.askButton}
        onClick={() => setAskOpen(true)}
        aria-label="Ask Me"
      >
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
            aria-modal="true"
            role="dialog"
          >
            {/* Backdrop click closes */}
            <button
              className={styles.menuBackdrop}
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              className={styles.menuPanel}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ type: 'tween', duration: 0.18 }}
            >
              <div className={styles.menuHeader}>
                <h1 className={styles.menuTitle}>Noesis Systems, LLC</h1>
                <p className={styles.menuSubtitle}>
                  Precision Systems for Cognitive Performance
                </p>
                <button
                  ref={closeBtnRef}
                  className={styles.closeButton}
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>

              <nav className={styles.menuLinks} aria-label="Primary">
                <button onClick={() => handleNavigate('/')}>Home</button>
                <button onClick={() => handleNavigate('/about')}>About</button>
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
