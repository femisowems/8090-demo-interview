import React from 'react';
import { motion } from 'framer-motion';

export interface TOCHeading {
  id: string;
  text: string;
  level: number; // 2 for H2, 3 for H3, etc
}

interface TableOfContentsProps {
  headings: TOCHeading[];
  activeId: string | null;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ headings, activeId }) => {
  if (headings.length === 0) return null;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pl-8 border-l border-border/50">
      <div className="space-y-6">
        <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
          On this page
        </p>
        
        <nav className="relative">
          <ul className="space-y-4">
            {headings.map((h) => (
              <li 
                key={h.id} 
                className={`transition-all duration-300 ${
                  h.level === 3 ? 'pl-4' : 'pl-0'
                }`}
              >
                <button
                  onClick={() => scrollToSection(h.id)}
                  className={`relative text-left text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background rounded px-1 ${
                    activeId === h.id 
                      ? 'text-foreground font-semibold' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {activeId === h.id && (
                    <motion.div
                      layoutId="tocIndicator"
                      className="absolute -left-[33px] w-1 h-full bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),0.5)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {h.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
