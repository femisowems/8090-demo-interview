import React from 'react';
import { motion } from 'framer-motion';
import { Construction, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../../data/faq';
import { PageNavigation } from './PageNavigation';

interface ComingSoonPageProps {
  categoryId: string;
  onNavigate: (id: string) => void;
}

export const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ categoryId, onNavigate }) => {
  const category = CATEGORIES.find(c => c.id === categoryId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl space-y-12"
    >
      <div className="flex flex-col items-center text-center py-20 space-y-6">
        <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
          <Construction className="h-10 w-10 text-primary/60" />
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">{category?.label || categoryId}</h1>
          <p className="text-lg text-muted-foreground max-w-md">
            This documentation is currently being written. Check back soon for detailed guides and references.
          </p>
        </div>
        <div className="flex gap-3 pt-4">
          <button
            onClick={() => onNavigate('intro')}
            className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Go to Introduction
          </button>
          <button
            onClick={() => onNavigate('quickstart')}
            className="group px-5 py-2.5 rounded-xl border border-border text-sm font-semibold hover:bg-muted/50 transition-colors flex items-center gap-2"
          >
            Quickstart Guide <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      <PageNavigation currentId={categoryId} onNavigate={onNavigate} />
    </motion.div>
  );
};
