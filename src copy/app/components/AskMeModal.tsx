'use client';

import React from 'react';
import styles from './AskMeModal.module.css';

interface AskMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AskMeModal({ isOpen, onClose }: AskMeModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>×</button>
        <h3>Live Chat</h3>
        <p>This is a placeholder for live support chat.</p>
      </div>
    </div>
  );
}
