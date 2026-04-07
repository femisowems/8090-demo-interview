import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchBar } from './components/faq/SearchBar';
import { AccordionItem } from './components/faq/AccordionItem';
import { CATEGORIES, FAQ_DATA, COMPARISON_DATA } from './data/faq';
import { ComparisonBlock, DecisionHelper } from './components/faq/AdvancedComponents';
import { 
  Zap, 
  ChevronRight, 
  Info,
  Sparkles,
  Bot,
  Search
} from 'lucide-react';

export const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('core');
  const [openId, setOpenId] = useState<string | null>(null);
  const [isOnboarding, setIsOnboarding] = useState(false);
  const [aiTyping, setAiTyping] = useState(false);

  // Filter logic
  const filteredFAQs = useMemo(() => {
    let results = FAQ_DATA;
    
    if (searchQuery) {
      results = results.filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    } else {
      results = results.filter(item => item.category === activeCategory);
    }
    
    return results;
  }, [searchQuery, activeCategory]);

  // AI Assistant Mock Effect
  useEffect(() => {
    if (searchQuery.length > 5) {
      setAiTyping(true);
      const timer = setTimeout(() => setAiTyping(false), 800);
      return () => clearTimeout(timer);
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <nav className="sticky top-0 z-50 glass border-b border-border/50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
              <Zap className="h-5 w-5 fill-current" />
            </div>
            8090.ai <span className="text-muted-foreground font-normal">Docs</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            <button className="text-muted-foreground hover:text-foreground transition-colors">Pricing</button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">Changelog</button>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      <main className="relative max-w-7xl mx-auto px-6 pt-20 pb-32">
        
        {/* Hero Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="h-3 w-3" /> Support Center
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-transparent">
            How can we help?
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to master 8090.ai. From core setup to advanced agentic workflows—find your answers here.
          </p>
        </div>

        {/* Search & AI Mock */}
        <div className="relative">
          <SearchBar 
            value={searchQuery} 
            onChange={setSearchQuery} 
            placeholder="Ask anything... e.g. 'how do I connect AWS?'"
          />
          
          <AnimatePresence>
            {searchQuery.length > 3 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute top-20 left-0 right-0 z-10 glass rounded-3xl p-6 border border-primary/20 shadow-2xl overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-2 rounded-xl mt-1">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-primary mb-1 uppercase tracking-wider flex items-center gap-2">
                      AI Instant Answer {aiTyping && <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity }} className="w-1 h-4 bg-primary inline-block" />}
                    </p>
                    <div className="text-muted-foreground leading-relaxed">
                      {aiTyping ? "Scanning technical documentation..." : (
                        <p>
                          Based on your query, the best way to approach this is through our 
                          <span className="text-foreground font-medium"> @8090-cli/connect </span> 
                          module. Ensure you have properly scoped IAM roles before running the initialization script.
                        </p>
                      )}
                    </div>
                    {!aiTyping && (
                      <button className="mt-4 text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                        Read full guide <ChevronRight className="h-3 w-3" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Categories & FAQs Grid */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-12 mt-12">
          
          {/* Sidebar Nav */}
          <aside className="space-y-8">
            <nav className="sticky top-32">
              <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4 ml-4">Categories</h4>
              <div className="space-y-1">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => { setActiveCategory(cat.id); setSearchQuery(''); }}
                    className={`flex w-full items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                      activeCategory === cat.id && !searchQuery
                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                        : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                    }`}
                  >
                    <ChevronRight className={`h-4 w-4 transition-transform ${activeCategory === cat.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                    <span className="font-medium">{cat.label}</span>
                  </button>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-secondary/50 border border-border">
                <h5 className="font-bold flex items-center gap-2 mb-2">
                  <Info className="h-4 w-4" /> Need more help?
                </h5>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  Can't find what you're looking for? Our engineers are ready to assist.
                </p>
                <button className="w-full py-2 bg-foreground text-background text-xs font-bold rounded-lg hover:opacity-90 transition-opacity">
                  Contact Support
                </button>
              </div>
            </nav>
          </aside>

          {/* FAQ Content */}
          <section className="min-h-[500px]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight">
                {searchQuery ? `Search results for "${searchQuery}"` : CATEGORIES.find(c => c.id === activeCategory)?.label}
              </h2>
              <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                <span>View mode:</span>
                <button 
                  onClick={() => setIsOnboarding(!isOnboarding)}
                  className={`px-3 py-1.5 rounded-full border transition-all ${
                    isOnboarding ? 'border-primary bg-primary/10 text-primary ring-2 ring-primary/20' : 'border-border hover:bg-muted'
                  }`}
                >
                  Onboarding Mode
                </button>
              </div>
            </div>

            <div className="space-y-2">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map(item => (
                  <AccordionItem
                    key={item.id}
                    item={item}
                    isOpen={openId === item.id}
                    onToggle={() => setOpenId(openId === item.id ? null : item.id)}
                    highlight={searchQuery}
                  />
                ))
              ) : (
                <div className="py-20 text-center border border-dashed border-border rounded-3xl">
                  <div className="inline-flex p-4 rounded-full bg-muted mb-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold">No matches found</h3>
                  <p className="text-muted-foreground max-w-xs mx-auto mt-2">
                    Try adjusting your search or contact support if you believe this is a documentation gap.
                  </p>
                </div>
              )}
            </div>

            {/* Positioning Sections (only visible in Core) */}
            {activeCategory === 'core' && !searchQuery && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <ComparisonBlock data={COMPARISON_DATA.features} />
                <DecisionHelper />
              </motion.div>
            )}

          </section>
        </div>
      </main>

      <footer className="border-t border-border/50 py-12 text-center text-muted-foreground text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>© 2026 8090.ai Software Factory. Built for the future.</div>
          <div className="flex gap-8">
            <button className="hover:text-foreground transition-colors">Terms</button>
            <button className="hover:text-foreground transition-colors">Privacy</button>
            <button className="hover:text-foreground transition-colors">Github</button>
          </div>
        </div>
      </footer>
    </div>
  );
};
