import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { FAQItem } from '../../data/faq';
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
            <span key={i} className="bg-yellow-400/30 text-yellow-100 rounded-px">{part}</span> : 
            part
        )}
      </>
    );
  };

  return (
    <div className={cn(
      "border-b border-border transition-all duration-200",
      isOpen ? "bg-muted/30" : "hover:bg-muted/10"
    )}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${item.id}`}
        className="flex w-full items-start justify-between py-6 text-left focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg px-4"
      >
        <div className="pr-8">
          <h3 className="text-lg font-medium tracking-tight">
            {highlightText(item.question, highlight)}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {highlightText(item.shortAnswer, highlight)}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="mt-1 flex-shrink-0 text-muted-foreground"
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-6 pt-0">
              <div className="prose prose-invert prose-sm max-w-none text-muted-foreground leading-relaxed">
                {item.detailedAnswer.split('\n').map((line, i) => (
                  <p key={i} className="mb-2">{line}</p>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4">
                <button className="text-xs font-medium text-primary hover:underline flex items-center gap-1">
                  Share direct link <ExternalLink className="h-3 w-3" />
                </button>
                <div className="flex gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider bg-secondary px-2 py-0.5 rounded text-secondary-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
