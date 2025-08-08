'use client';

import React, { useState } from 'react';
import styles from './components/NavbarWrapper.module.css';
import AskMeModal from './AskMeModal';
import FullscreenMenu from './FullscreenMenu';

export default function NavbarWrapper() {
  const [askOpen, setAskOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.right}>
          <button className={styles.button} onClick={() => setAskOpen(true)}>
            Ask Me
          </button>
          <button className={styles.button} onClick={() => setMenuOpen(true)}>
            Menu
          </button>
        </div>
      </nav>
      <AskMeModal isOpen={askOpen} onClose={() => setAskOpen(false)} />
      <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
} // 
