import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  isVisible: boolean;
  onClick: () => void;
}

export const BackToTop: React.FC<BackToTopProps> = ({ isVisible, onClick }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          onClick={onClick}
          className="fixed bottom-8 right-8 lg:bottom-12 lg:right-12 z-30 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background"
          aria-label="Back to top"
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
