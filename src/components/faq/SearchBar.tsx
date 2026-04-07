import React, { useEffect, useRef } from 'react';
import { Search, Command, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (query: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-12">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground">
        <Search className="h-5 w-5" />
      </div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Search documentation..."}
        className="block w-full pl-12 pr-20 py-4 bg-muted/50 border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-lg"
      />
      <div className="absolute inset-y-0 right-4 flex items-center gap-2">
        {value && (
          <button 
            onClick={() => onChange('')}
            className="p-1 hover:bg-muted rounded-md text-muted-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        <div className="hidden sm:flex items-center gap-1 px-2 py-1 bg-muted border border-border rounded-md text-[10px] font-medium text-muted-foreground uppercase">
          <Command className="h-3 w-3" />
          K
        </div>
      </div>
    </div>
  );
};
