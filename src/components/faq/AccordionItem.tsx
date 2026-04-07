import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { type FAQItem } from '../../data/faq';
import { cn } from '../../utils';

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  highlight?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onToggle, highlight }) => {
  
  const highlightText = (text: string, query?: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() ? 
            <span key={i} className="bg-primary/20 text-primary px-1 rounded-sm font-medium">{part}</span> : 
            part
        )}
      </>
    );
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.005, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "group border border-border/50 rounded-2xl overflow-hidden transition-all duration-300",
        isOpen ? "bg-muted/30 border-primary/20 shadow-xl shadow-primary/5" : "bg-card hover:bg-muted/10 hover:border-border"
      )}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${item.id}`}
        className="flex w-full items-start justify-between py-6 text-left focus:outline-none px-6"
      >
        <div className="pr-8">
          <div className="flex items-center gap-3 mb-2">
            {item.isPremium && (
              <span className="text-[10px] font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full uppercase tracking-tighter">
                Premium
              </span>
            )}
            <span className="text-xs font-bold text-primary/60 uppercase tracking-widest">{item.category}</span>
          </div>
          <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
            {highlightText(item.question, highlight)}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {highlightText(item.shortAnswer, highlight)}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "backOut" }}
          className={cn(
            "mt-1 flex-shrink-0 p-2 rounded-full transition-colors",
            isOpen ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
          )}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-content-${item.id}`}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 pt-0 border-t border-border/30 mt-2">
              <div className="prose prose-invert prose-sm max-w-none text-muted-foreground leading-relaxed pt-6">
                {item.detailedAnswer.split('\n').map((line, i) => (
                  <p key={i} className="mb-4">{line}</p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-secondary/50 border border-border/50 px-2.5 py-1 rounded-lg text-secondary-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-colors cursor-default">
                      #{tag}
                    </span>
                  ))}
                </div>
                <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5 bg-primary/5 px-4 py-2 rounded-full border border-primary/10 hover:bg-primary/10 transition-all">
                  Share direct link <ExternalLink className="h-3 w-3" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
