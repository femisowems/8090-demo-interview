import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Moon, Sun, FileText, Copy, CornerDownLeft } from 'lucide-react';
import { DOCS_NAV } from '../../data/faq';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
  onToggleDarkMode: () => void;
  onCopyMarkdown: () => void;
  isDarkMode: boolean;
}

interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon: React.ElementType;
  action: () => void;
  category: string;
  keywords?: string[];
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onToggleDarkMode,
  onCopyMarkdown,
  isDarkMode,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Build command items
  const commands: CommandItem[] = [
    // Navigation
    ...DOCS_NAV.flatMap(group =>
      group.items.length > 0
        ? group.items.map(item => ({
            id: `nav-${item.id}`,
            label: item.label,
            description: group.label,
            icon: FileText,
            action: () => { onNavigate(item.id); onClose(); },
            category: 'Navigation',
            keywords: [group.label.toLowerCase(), item.label.toLowerCase()],
          }))
        : [{
            id: `nav-${group.id}`,
            label: group.label,
            description: 'Section',
            icon: FileText,
            action: () => { onNavigate(group.id); onClose(); },
            category: 'Navigation',
            keywords: [group.label.toLowerCase()],
          }]
    ),
    // Actions
    {
      id: 'toggle-dark',
      label: isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode',
      icon: isDarkMode ? Sun : Moon,
      action: () => { onToggleDarkMode(); onClose(); },
      category: 'Actions',
      keywords: ['theme', 'dark', 'light', 'mode', 'toggle'],
    },
    {
      id: 'copy-md',
      label: 'Copy Page as Markdown',
      description: 'Copy summarized page content',
      icon: Copy,
      action: () => { onCopyMarkdown(); onClose(); },
      category: 'Actions',
      keywords: ['copy', 'markdown', 'clipboard', 'export'],
    },
  ];

  // Filter
  const filtered = query
    ? commands.filter(cmd =>
        cmd.label.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description?.toLowerCase().includes(query.toLowerCase()) ||
        cmd.keywords?.some(k => k.includes(query.toLowerCase()))
      )
    : commands;

  // Group by category
  const grouped = filtered.reduce<Record<string, CommandItem[]>>((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {});

  // Reset selection when query changes
  useEffect(() => { setSelectedIndex(0); }, [query]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(i => (i + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(i => (i - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      e.preventDefault();
      filtered[selectedIndex].action();
    } else if (e.key === 'Escape') {
      onClose();
    }
  }, [filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]"
        onClick={onClose}
        role="presentation"
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Palette */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          onClick={e => e.stopPropagation()}
          className="relative w-full max-w-lg bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
          role="combobox"
          aria-expanded={isOpen}
          aria-owns="command-palette-results"
        >
          {/* Search input */}
          <div className="flex items-center gap-3 px-5 border-b border-border">
            <Search className="h-4 w-4 text-muted-foreground shrink-0" aria-hidden="true" />
            <input
              ref={inputRef}
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a command or search..."
              className="flex-1 py-4 bg-transparent text-sm outline-none placeholder:text-muted-foreground/50 focus:ring-0"
              aria-label="Command palette search input"
              autoComplete="off"
            />
            <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border text-[10px] font-bold text-muted-foreground" aria-label="Press Escape to close">ESC</kbd>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto py-2" id="command-palette-results" role="listbox">
            {Object.entries(grouped).length === 0 ? (
              <div className="px-5 py-8 text-center text-sm text-muted-foreground">
                No results for "{query}"
              </div>
            ) : (
              Object.entries(grouped).map(([category, items]) => (
                <div key={category} role="group" aria-labelledby={`group-${category}`}>
                  <p className="px-5 pt-3 pb-1 text-[10px] font-bold text-muted-foreground uppercase tracking-widest" id={`group-${category}`}>{category}</p>
                  {items.map((item) => {
                    const globalIndex = filtered.indexOf(item);
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={item.action}
                        onMouseEnter={() => setSelectedIndex(globalIndex)}
                        className={`flex w-full items-center gap-3 px-5 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-inset ${
                          globalIndex === selectedIndex
                            ? 'bg-primary/10 text-foreground'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                        role="option"
                        aria-selected={globalIndex === selectedIndex}
                      >
                        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span className="flex-1 text-left">{item.label}</span>
                        {item.description && (
                          <span className="text-xs text-muted-foreground/60">{item.description}</span>
                        )}
                        {globalIndex === selectedIndex && (
                          <CornerDownLeft className="h-3 w-3 text-primary" aria-hidden="true" />
                        )}
                      </button>
                    );
                  })}
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center gap-4 px-5 py-2.5 border-t border-border text-[10px] text-muted-foreground/50">
            <span className="flex items-center gap-1"><kbd className="px-1 py-0.5 rounded bg-muted border border-border font-bold">↑↓</kbd> Navigate</span>
            <span className="flex items-center gap-1"><kbd className="px-1 py-0.5 rounded bg-muted border border-border font-bold">↵</kbd> Select</span>
            <span className="flex items-center gap-1"><kbd className="px-1 py-0.5 rounded bg-muted border border-border font-bold">ESC</kbd> Close</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
