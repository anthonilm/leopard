'use client';

import React from 'react';
import styles from './FullscreenMenu.module.css';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>×</button>
        <ul className={styles.list}>
          <li><a href="/students">Students</a></li>
          <li><a href="/executives">Executives</a></li>
          <li><a href="/teachers">Teachers</a></li>
          <li><a href="/young-professionals">Young Professionals</a></li>
        </ul>
      </div>
    </div>
  );
}
