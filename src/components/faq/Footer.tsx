import React from 'react';
import { Zap } from 'lucide-react';
import { DOCS_NAV } from '../../data/faq';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => (
  <footer className="border-t border-border/50 bg-muted/20 mt-20">
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Link columns - all on one row */}
      <div className="flex flex-wrap gap-x-12 gap-y-10">
        {DOCS_NAV.filter(g => g.items.length > 0).map(group => (
          <div key={group.id} className="space-y-3 min-w-[140px]">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{group.label}</h4>
            <ul className="space-y-2">
              {group.items.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => { onNavigate(item.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 font-bold text-sm tracking-tight">
          <div className="bg-primary text-primary-foreground p-1 rounded-md">
            <Zap className="h-3.5 w-3.5 fill-current" />
          </div>
          <span>8090.ai</span>
          <span className="text-muted-foreground/40 font-normal">·</span>
          <span className="text-muted-foreground/60 font-normal text-xs">Software Factory</span>
        </div>
        <p className="text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} 8090.ai · All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
