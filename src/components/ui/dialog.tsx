'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DialogProps {
  open: boolean;
  onClose: (value: boolean) => void;
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
}

interface DialogPanelProps {
  children: React.ReactNode;
  className?: string;
}

const Dialog = ({ open, onClose, children, className = '', as = 'div' }: DialogProps) => {
  const Component = as;

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <Component className={`fixed inset-0 z-50 ${className}`}>
          {children}
        </Component>
      )}
    </AnimatePresence>
  );
};

const DialogPanel = ({ children, className = '' }: DialogPanelProps) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

Dialog.Panel = DialogPanel;

export { Dialog };
