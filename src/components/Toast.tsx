import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

interface ToastProps {
  show: boolean;
  message: string;
  icon?: React.ReactNode;
}

export const Toast: React.FC<ToastProps> = ({ show, message, icon = <Check className="h-4 w-4" /> }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 10, x: 0 }}
          className="fixed bottom-6 left-6 flex items-center gap-3 px-4 py-3 bg-primary/95 text-primary-foreground rounded-lg shadow-lg border border-primary/50 backdrop-blur-sm z-40"
        >
          {icon}
          <span className="text-sm font-medium">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
