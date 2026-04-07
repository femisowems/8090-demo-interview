import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { DOCS_NAV } from '../../data/faq';

interface NextStepsProps {
  currentId: string;
  onNavigate: (id: string) => void;
}

export const NextSteps: React.FC<NextStepsProps> = ({ currentId, onNavigate }) => {
  const allItems = DOCS_NAV.flatMap(group => 
    group.items.length > 0 ? group.items : [{ id: group.id, label: group.label }]
  );

  const currentIndex = allItems.findIndex(item => item.id === currentId);
  const prevItem = currentIndex > 0 ? allItems[currentIndex - 1] : null;
  const nextItem = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;

  return (
    <div className="mt-20 pt-12 border-t border-border/50 grid grid-cols-2 gap-8">
      {prevItem ? (
        <motion.button
          whileHover={{ x: -10, scale: 1.02 }}
          onClick={() => onNavigate(prevItem.id)}
          className="flex flex-col items-start gap-2 text-left group"
        >
          <span className="text-xs text-muted-foreground flex items-center gap-2 uppercase tracking-widest font-bold group-hover:text-primary transition-colors">
            <ArrowLeft className="h-3 w-3" /> Previous
          </span>
          <span className="text-lg font-bold text-foreground">
            {prevItem.label}
          </span>
        </motion.button>
      ) : <div />}

      {nextItem ? (
        <motion.button
          whileHover={{ x: 10, scale: 1.02 }}
          onClick={() => onNavigate(nextItem.id)}
          className="flex flex-col items-end gap-2 text-right group"
        >
          <span className="text-xs text-muted-foreground flex items-center gap-2 uppercase tracking-widest font-bold group-hover:text-primary transition-colors">
            Next <ArrowRight className="h-3 w-3" />
          </span>
          <span className="text-lg font-bold text-foreground">
            {nextItem.label}
          </span>
        </motion.button>
      ) : (
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-2xl font-bold shadow-lg shadow-primary/25"
        >
          Explore More Docs <BookOpen className="h-5 w-5" />
        </motion.button>
      )}
    </div>
  );
};
