'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ModalStyles.css';

interface InfoModalProps {
  title: string;
  body: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function InfoModal({ title, body, isOpen, onClose }: InfoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className="modal-close" onClick={onClose}>×</button>
            <h2>{title}</h2>
            <p style={{ whiteSpace: 'pre-line' }}>{body}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
