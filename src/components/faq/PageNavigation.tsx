import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DOCS_NAV } from '../../data/faq';

interface PageNavigationProps {
  currentId: string;
  onNavigate: (id: string) => void;
}

// Flatten DOCS_NAV into ordered list of page IDs
const PAGE_ORDER = DOCS_NAV.flatMap(group =>
  group.items.length > 0 ? group.items : [{ id: group.id, label: group.label }]
);

export const PageNavigation: React.FC<PageNavigationProps> = ({ currentId, onNavigate }) => {
  const currentIndex = PAGE_ORDER.findIndex(p => p.id === currentId);
  const prev = currentIndex > 0 ? PAGE_ORDER[currentIndex - 1] : null;
  const next = currentIndex < PAGE_ORDER.length - 1 ? PAGE_ORDER[currentIndex + 1] : null;

  return (
    <div className="flex items-stretch gap-4 mt-20 pt-10 border-t border-border/50">
      {prev ? (
        <motion.button
          whileHover={{ x: -3 }}
          onClick={() => { onNavigate(prev.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex-1 group p-5 rounded-2xl border border-border hover:border-primary/30 hover:bg-muted/30 transition-all text-left"
        >
          <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
            <ChevronLeft className="h-3 w-3" /> Previous
          </span>
          <span className="block mt-1 font-semibold text-foreground group-hover:text-primary transition-colors">
            {prev.label}
          </span>
        </motion.button>
      ) : <div className="flex-1" />}

      {next ? (
        <motion.button
          whileHover={{ x: 3 }}
          onClick={() => { onNavigate(next.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex-1 group p-5 rounded-2xl border border-border hover:border-primary/30 hover:bg-muted/30 transition-all text-right"
        >
          <span className="text-xs font-medium text-muted-foreground flex items-center gap-1 justify-end">
            Next <ChevronRight className="h-3 w-3" />
          </span>
          <span className="block mt-1 font-semibold text-foreground group-hover:text-primary transition-colors">
            {next.label}
          </span>
        </motion.button>
      ) : <div className="flex-1" />}
    </div>
  );
};
