import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Zap, ArrowRight, MessageSquare, ChevronRight,
  GitBranch, CheckCircle2, FileCode2,
  Boxes, Shield, Sparkles, BookOpen, Play, Star,
  Package, ClipboardList, Moon, Sun, Menu, X, Code2,
  Workflow, BarChart3, Rocket
} from 'lucide-react';
import { useTheme } from './hooks/useTheme';

type ThemeVariant = 'emerald' | 'blue';

interface LandingPageProps {
  onEnterDocs: () => void;
  variant?: ThemeVariant;
}

/* ─── Local Icons ───────────────────────────────────────────── */
const Github = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Twitter = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

/* ─── Helpers ────────────────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Terminal Animation ─────────────────────────────────────── */
const getTerminalLines = (variant: ThemeVariant = 'emerald') => [
  { text: '$ 8090 init my-fintech-app', color: variant === 'blue' ? 'text-blue-400' : 'text-emerald-400', delay: 0 },
  { text: '  → Scaffolding Software Factory project...', color: 'text-zinc-400', delay: 0.6 },
  { text: '  ✓ Requirements workspace created', color: variant === 'blue' ? 'text-blue-400' : 'text-emerald-400', delay: 1.1 },
  { text: '  ✓ Foundry blueprints initialized', color: variant === 'blue' ? 'text-blue-400' : 'text-emerald-400', delay: 1.6 },
  { text: '  ✓ Planner connected to GitHub', color: variant === 'blue' ? 'text-blue-400' : 'text-emerald-400', delay: 2.1 },
  { text: '', color: '', delay: 2.5 },
  { text: '$ 8090 refinery --draft "Payment gateway integration"', color: variant === 'blue' ? 'text-blue-400' : 'text-emerald-400', delay: 2.8 },
  { text: '  → AI drafting feature requirements...', color: 'text-zinc-400', delay: 3.3 },
  { text: '  ✓ Generated 14 acceptance criteria', color: variant === 'blue' ? 'text-blue-400' : 'text-emerald-400', delay: 3.8 },
  { text: '  ✓ Linked to 3 existing blueprints', color: variant === 'blue' ? 'text-blue-400' : 'text-emerald-400', delay: 4.2 },
  { text: '', color: '', delay: 4.6 },
  { text: '$ 8090 planner --extract && 8090 ship', color: variant === 'blue' ? 'text-blue-400' : 'text-emerald-400', delay: 4.9 },
  { text: '  → 12 work orders queued. Agents ready.', color: 'text-zinc-400', delay: 5.4 },
  { text: '  ✓ Phase 1 complete in 2h 14m  🚀', color: variant === 'blue' ? 'text-blue-400' : 'text-emerald-400', delay: 5.9 },
];

function TerminalHero({ variant = 'emerald' }: { variant?: ThemeVariant }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const lines = getTerminalLines(variant);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    lines.forEach((line, i) => {
      timeouts.push(setTimeout(() => setVisibleLines(i + 1), line.delay * 1000 + 800));
    });
    return () => timeouts.forEach(clearTimeout);
  }, [variant]);

  return (
    <div className={`relative rounded-2xl overflow-hidden border border-border/50 dark:border-white/10 bg-[#09090b] shadow-2xl ${variant === 'blue' ? 'shadow-blue-900/10' : 'shadow-emerald-900/10'} dark:shadow-black/60 backdrop-blur-sm`}>
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className={`w-3 h-3 rounded-full ${variant === 'blue' ? 'bg-blue-500/70' : 'bg-emerald-500/70'}`} />
        <span className="ml-3 text-[10px] font-mono font-bold tracking-tight text-zinc-500 uppercase">software-factory — zsh</span>
      </div>
      {/* Terminal body */}
      <div className="p-5 font-mono text-sm leading-relaxed min-h-[280px] bg-[#09090b]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={line.color}>
            {line.text}
          </div>
        ))}
        {visibleLines < lines.length && (
          <span className={`inline-block w-2 h-4 ${variant === 'blue' ? 'bg-blue-400' : 'bg-emerald-400'} animate-pulse ml-0.5 align-middle`} />
        )}
      </div>
    </div>
  );
}

/* ─── Marquee ────────────────────────────────────────────────── */
const LOGOS = ['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma', 'Loom', 'Retool', 'Amplitude', 'Segment', 'PostHog'];

function Marquee() {
  return (
    <div className="relative overflow-hidden py-2">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background via-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background via-background to-transparent z-10" />
      <motion.div
        className="flex gap-14 items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {[...LOGOS, ...LOGOS].map((name, i) => (
          <span key={i} className="whitespace-nowrap text-sm font-semibold tracking-widest text-muted-foreground/30 dark:text-zinc-600 uppercase select-none transition-colors">
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Feature cards ──────────────────────────────────────────── */
const FEATURES = [
  {
    icon: FileCode2,
    title: 'Refinery',
    desc: 'Collaboratively define requirements, capture user logic, and architectural PRDs to align every stakeholder.',
    accent: 'from-emerald-500/20 to-emerald-500/0',
    iconBg: 'bg-emerald-500/10 text-emerald-400',
  },
  {
    icon: Boxes,
    title: 'Foundry',
    desc: 'Convert visions into living architecture blueprints. Feature extraction agents ensure specs stay in sync with code.',
    accent: 'from-blue-500/20 to-blue-500/0',
    iconBg: 'bg-blue-500/10 text-blue-400',
  },
  {
    icon: ClipboardList,
    title: 'Planner',
    desc: 'Automatically break blueprints into actionable Work Orders. Orchestrate team execution with AI-driven sequencing.',
    accent: 'from-violet-500/20 to-violet-500/0',
    iconBg: 'bg-violet-500/10 text-violet-400',
  },
  {
    icon: Shield,
    title: 'Validator',
    desc: 'Verify every PR against acceptance criteria. Ensure architecture discipline is maintained across the entire SDLC.',
    accent: 'from-amber-500/20 to-amber-500/0',
    iconBg: 'bg-amber-500/10 text-amber-400',
  },
  {
    icon: GitBranch,
    title: 'Codebase Connect',
    desc: 'Connect your repositories to bridge the gap between abstract requirements and production source code.',
    accent: 'from-pink-500/20 to-pink-500/0',
    iconBg: 'bg-pink-500/10 text-pink-400',
  },
  {
    icon: Package,
    title: 'Artifacts',
    desc: 'Store and cite proprietary business logic, designs, and data files to provide agents with perfect context.',
    accent: 'from-cyan-500/20 to-cyan-500/0',
    iconBg: 'bg-cyan-500/10 text-cyan-400',
  },
];

/* ─── Stats ──────────────────────────────────────────────────── */
const STATS = [
  { value: '10×', label: 'Faster feature delivery' },
  { value: '80%', label: 'Less time writing specs' },
  { value: '0', label: 'Context lost between tools' },
  { value: '∞', label: 'Scale without hiring' },
];

/* ─── Steps ──────────────────────────────────────────────────── */
const STEPS = [
  {
    num: '01',
    icon: FileCode2,
    title: 'Write Requirements',
    desc: 'Use the AI Refinery to produce product overview docs, feature specs, and acceptance criteria — in minutes.',
    color: 'text-emerald-400',
    border: 'border-emerald-500/20',
  },
  {
    num: '02',
    icon: Boxes,
    title: 'Design Blueprints',
    desc: 'Foundry turns your specs into synchronized architecture diagrams, component maps, and system blueprints.',
    color: 'text-blue-400',
    border: 'border-blue-500/20',
  },
  {
    num: '03',
    icon: ClipboardList,
    title: 'Queue Work Orders',
    desc: 'Planner extracts discrete work orders from your blueprints and sequences them into phase-based sprints.',
    color: 'text-violet-400',
    border: 'border-violet-500/20',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Ship with Agents',
    desc: 'AI agents execute work orders with full context — codebase, requirements, and architecture — and validate before merge.',
    color: 'text-amber-400',
    border: 'border-amber-500/20',
  },
];

/* ─── Testimonials ───────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    quote: "8090 cut our sprint planning from half a day to 20 minutes. The agents actually understand our codebase.",
    name: 'Sarah Chen',
    role: 'CTO, Finova',
    initials: 'SC',
    accent: 'bg-emerald-500',
  },
  {
    quote: "Finally, a tool where requirements, architecture, and tasks all live in the same loop. No more copy-pasting between Notion and Jira.",
    name: 'Marcus Webb',
    role: 'VP Engineering, Scalepath',
    initials: 'MW',
    accent: 'bg-blue-500',
  },
  {
    quote: "We went from idea to working MVP in a weekend. The Validator alone saved us 3 QA cycles.",
    name: 'Priya Nair',
    role: 'Founder, Datacraft Labs',
    initials: 'PN',
    accent: 'bg-violet-500',
  },
];



/* ─── Main Component ─────────────────────────────────────────── */
export const LandingPage: React.FC<LandingPageProps> = ({ onEnterDocs, variant = 'emerald' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  
  // Theme context helper
  const t = {
    primary: variant === 'blue' ? 'blue-500' : 'emerald-500',
    primaryHover: variant === 'blue' ? 'blue-600' : 'emerald-600',
    primarySoft: variant === 'blue' ? 'blue-500/10' : 'emerald-500/10',
    primarySoftBorder: variant === 'blue' ? 'border-blue-500/20' : 'border-emerald-500/20',
    textPrimary: variant === 'blue' ? 'text-blue-500' : 'text-emerald-500',
    textPrimaryDark: variant === 'blue' ? 'text-blue-600 dark:text-blue-400' : 'text-emerald-600 dark:text-emerald-400',
    glow: variant === 'blue' ? 'bg-blue-500/10 dark:bg-blue-500/8' : 'bg-emerald-500/10 dark:bg-emerald-500/8',
    ring: variant === 'blue' ? 'focus:ring-blue-500/50' : 'focus:ring-emerald-500/50',
    selection: variant === 'blue' ? 'selection:bg-blue-500/30' : 'selection:bg-emerald-500/30',
    shadow: variant === 'blue' ? 'shadow-blue-500/20' : 'shadow-emerald-500/20',
    shadowLg: variant === 'blue' ? 'shadow-blue-500/25 target:shadow-blue-500/40' : 'shadow-emerald-500/25 hover:shadow-emerald-500/40',
  };

  const { scrollY } = useScroll();
  const navBg = useTransform(
    scrollY, 
    [0, 80], 
    isDarkMode 
      ? ['rgba(9,9,11,0)', 'rgba(9,9,11,0.92)'] 
      : ['rgba(255,255,255,0)', 'rgba(255,255,255,0.92)']
  );
  const navBlur = useTransform(scrollY, [0, 80], [0, 16]);
  const navBorder = useTransform(scrollY, [0, 80], ['rgba(255,255,255,0)', isDarkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)']);

  const FEATURES_THEMED = [
    {
      icon: FileCode2,
      title: 'Refinery',
      desc: 'Collaboratively define requirements, capture user logic, and architectural PRDs to align every stakeholder.',
      accent: variant === 'blue' ? 'from-blue-500/20 to-blue-500/0' : 'from-emerald-500/20 to-emerald-500/0',
      iconBg: variant === 'blue' ? 'bg-blue-500/10 text-blue-400' : 'bg-emerald-500/10 text-emerald-400',
    },
    {
      icon: Boxes,
      title: 'Foundry',
      desc: 'Convert visions into living architecture blueprints. Feature extraction agents ensure specs stay in sync with code.',
      accent: 'from-blue-500/20 to-blue-500/0',
      iconBg: 'bg-blue-500/10 text-blue-400',
    },
    {
      icon: ClipboardList,
      title: 'Planner',
      desc: 'Automatically break blueprints into actionable Work Orders. Orchestrate team execution with AI-driven sequencing.',
      accent: 'from-violet-500/20 to-violet-500/0',
      iconBg: 'bg-violet-500/10 text-violet-400',
    },
    {
      icon: Shield,
      title: 'Validator',
      desc: 'Verify every PR against acceptance criteria. Ensure architecture discipline is maintained across the entire SDLC.',
      accent: 'from-amber-500/20 to-amber-500/0',
      iconBg: 'bg-amber-500/10 text-amber-400',
    },
    {
      icon: GitBranch,
      title: 'Codebase Connect',
      desc: 'Connect your repositories to bridge the gap between abstract requirements and production source code.',
      accent: 'from-pink-500/20 to-pink-500/0',
      iconBg: 'bg-pink-500/10 text-pink-400',
    },
    {
      icon: Package,
      title: 'Artifacts',
      desc: 'Store and cite proprietary business logic, designs, and data files to provide agents with perfect context.',
      accent: 'from-cyan-500/20 to-cyan-500/0',
      iconBg: 'bg-cyan-500/10 text-cyan-400',
    },
  ];

  const STEPS_THEMED = [
    {
      num: '01',
      icon: FileCode2,
      title: 'Write Requirements',
      desc: 'Use the AI Refinery to produce product overview docs, feature specs, and acceptance criteria — in minutes.',
      color: variant === 'blue' ? 'text-blue-400' : 'text-emerald-400',
      border: variant === 'blue' ? 'border-blue-500/20' : 'border-emerald-500/20',
    },
    {
      num: '02',
      icon: Boxes,
      title: 'Design Blueprints',
      desc: 'Foundry turns your specs into synchronized architecture diagrams, component maps, and system blueprints.',
      color: 'text-blue-400',
      border: 'border-blue-500/20',
    },
    {
      num: '03',
      icon: ClipboardList,
      title: 'Queue Work Orders',
      desc: 'Planner extracts discrete work orders from your blueprints and sequences them into phase-based sprints.',
      color: 'text-violet-400',
      border: 'border-violet-500/20',
    },
    {
      num: '04',
      icon: Rocket,
      title: 'Ship with Agents',
      desc: 'AI agents execute work orders with full context — codebase, requirements, and architecture — and validate before merge.',
      color: 'text-amber-400',
      border: 'border-amber-500/20',
    },
  ];

  return (
    <div className={`min-h-screen bg-background text-foreground overflow-x-hidden ${t.selection} transition-colors duration-500`}>

      {/* ═══ NAVBAR ══════════════════════════════════════════════ */}
      <motion.header
        style={{ 
          backgroundColor: navBg, 
          backdropFilter: useTransform(navBlur, v => `blur(${v}px)`),
          borderBottomColor: navBorder
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b transition-colors"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5 font-bold text-lg group">
              <div className="relative">
                <div className={`bg-${t.primary} text-black p-1.5 rounded-lg shadow-lg relative z-10 transition-transform group-hover:scale-110`}>
                  <Zap className="h-4 w-4 fill-current" />
                </div>
                <div className={`absolute inset-0 bg-${t.primary}/30 blur-md rounded-lg group-hover:scale-150 transition-transform duration-500`} />
              </div>
              <span className="text-foreground">8090.ai</span>
            </button>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-1 text-sm text-muted-foreground">
              {['Product', 'Docs', 'Pricing', 'Blog', 'Changelog'].map(item => (
                <button
                  key={item}
                  onClick={item === 'Docs' ? onEnterDocs : undefined}
                  className="px-3 py-1.5 rounded-lg hover:text-foreground hover:bg-muted/50 transition-all font-medium"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <div className={`hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full ${variant === 'blue' ? 'bg-blue-500/10 border-blue-500/20 text-blue-500' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500'} text-[10px] font-bold shadow-sm`}>
              <div className={`w-1.5 h-1.5 rounded-full ${variant === 'blue' ? 'bg-blue-500' : 'bg-emerald-500'} animate-pulse shadow-[0_0_8px_rgba(20,184,166,0.3)]`} />
              OPERATIONAL
            </div>
            
            <div className="flex items-center gap-1 group">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all focus:outline-none focus:ring-2 ${t.ring}`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              
              <div className="h-4 w-px bg-border/50 mx-1 hidden md:block" />

              <button className="hidden md:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5">
                Sign in
              </button>
            </div>

            <button
              onClick={onEnterDocs}
              className={`text-sm font-bold bg-${t.primary} hover:bg-${t.primaryHover} active:scale-95 text-black px-5 py-2.5 rounded-xl transition-all ${t.shadow}`}
            >
              Get started
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-2"
            >
              {['Product', 'Docs', 'Pricing', 'Blog', 'Changelog'].map(item => (
                <button
                  key={item}
                  onClick={() => { if (item === 'Docs') onEnterDocs(); setMobileMenuOpen(false); }}
                  className="text-left text-muted-foreground hover:text-foreground py-2 text-sm font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
              <div className="pt-2 mt-2 border-t border-border flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Appearance</span>
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center gap-2 text-sm font-medium text-foreground px-3 py-1.5 rounded-lg bg-muted/50"
                >
                  {isDarkMode ? <><Sun className="h-4 w-4" /> Light</> : <><Moon className="h-4 w-4" /> Dark</>}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background glow */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] ${t.glow} blur-[120px] rounded-full pointer-events-none opacity-50 dark:opacity-100`} />
        <div className="absolute top-40 left-1/4 w-[300px] h-[300px] bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-violet-500/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          {/* Announcement pill */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-10"
          >
            <button className={`flex items-center gap-2 px-4 py-1.5 rounded-full border ${variant === 'blue' ? 'border-blue-500/30 bg-blue-500/5 text-blue-600 dark:text-blue-400 hover:border-blue-500/50' : 'border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 hover:border-emerald-500/50'} text-xs font-bold transition-all group backdrop-blur-sm shadow-sm`}>
              <Sparkles className="h-3 w-3" />
              Introducing Software Factory v2 — built for AI-native teams
              <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]"
              >
                <span className={isDarkMode ? "text-white" : "text-zinc-900"}>Build software.</span>
                <br />
                <span className={t.textPrimaryDark}>Without the chaos.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-lg"
              >
                8090 Software Factory is the AI-native development platform that turns requirements into shipped features — with agents that understand your entire codebase.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.38 }}
                className="flex flex-wrap gap-3"
              >
                <button
                  onClick={onEnterDocs}
                  className={`inline-flex items-center gap-2 px-6 py-3.5 bg-${t.primary} hover:bg-${variant === 'blue' ? 'blue-400' : 'emerald-400'} text-black font-bold rounded-xl transition-all ${t.shadowLg} hover:-translate-y-0.5 active:translate-y-0`}
                >
                  Start building <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={onEnterDocs}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all"
                >
                  <Play className="h-4 w-4 fill-current" /> View demo
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-6 text-sm text-muted-foreground"
              >
                <span className="flex items-center gap-1.5"><CheckCircle2 className={`h-4 w-4 ${t.textPrimary}`} /> Free to start</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className={`h-4 w-4 ${t.textPrimary}`} /> No credit card</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className={`h-4 w-4 ${t.textPrimary}`} /> Deploy in minutes</span>
              </motion.div>
            </div>

            {/* Right: terminal */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <TerminalHero variant={variant} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══════════════════════════════════════════════ */}
      <section className="py-12 px-6 border-t border-b border-border/50 bg-muted/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.08} className="text-center space-y-1">
              <div className={`text-4xl font-black ${t.textPrimary}`}>{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ═══ TRUSTED BY ══════════════════════════════════════════ */}
      <section className="py-12 px-6 space-y-4">
        <FadeUp>
          <p className="text-center text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground/60">Trusted by high-velocity teams at</p>
        </FadeUp>
        <div className="opacity-50 dark:opacity-100 grayscale dark:grayscale-0 contrast-125 dark:contrast-100">
          <Marquee />
        </div>
      </section>

      {/* ═══ FEATURES ════════════════════════════════════════════ */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <FadeUp className="text-center space-y-4 max-w-2xl mx-auto">
            <p className={`text-xs font-bold tracking-[0.25em] uppercase ${t.textPrimary}`}>Platform</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">Everything in one loop.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Requirements, architecture, and execution all live together — so your team and your agents always have the full picture.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <FadeUp key={feat.title} delay={i * 0.07} className="h-full">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`group relative p-6 rounded-2xl border border-border/50 bg-card hover:border-${variant === 'blue' ? 'blue-500/30' : 'emerald-500/30'} overflow-hidden cursor-pointer transition-colors shadow-sm hover:shadow-xl hover:shadow-${variant === 'blue' ? 'blue-500/5' : 'emerald-500/5'} h-full`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${feat.accent} opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-10 shadow-inner transition-opacity duration-500`} />
                    <div className="relative space-y-4 flex flex-col h-full">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${feat.iconBg}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-2">{feat.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors pt-2">
                        Learn more <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-muted/20 border-t border-b border-border/50">
        <div className="max-w-7xl mx-auto space-y-16">
          <FadeUp className="text-center space-y-4">
            <p className={`text-xs font-bold tracking-[0.25em] uppercase ${t.textPrimary}`}>Workflow</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">From idea to shipped. In one system.</h2>
          </FadeUp>

          <div className="relative">
            {/* Connector line (desktop) */}
            <div className={`absolute top-10 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-gradient-to-r ${variant === 'blue' ? 'from-blue-500/10' : 'from-emerald-500/10'} via-violet-500/10 to-amber-500/10 hidden lg:block`} />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <FadeUp key={step.num} delay={i * 0.1} className="h-full">
                    <div className={`relative p-6 rounded-2xl border ${step.border} bg-card space-y-4 h-full shadow-sm flex flex-col`}>
                      <div className="flex items-center justify-between">
                        <div className={`w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center ${step.color}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-3xl font-black text-foreground/5">{step.num}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{step.desc}</p>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>

          <FadeUp className="flex justify-center">
            <button
              onClick={onEnterDocs}
              className={`inline-flex items-center gap-2 px-6 py-3 bg-${t.primary} hover:bg-${t.primaryHover} text-black font-bold rounded-xl transition-all shadow-lg shadow-${variant === 'blue' ? 'blue-500/20' : 'emerald-500/20'} hover:-translate-y-0.5 active:scale-95`}
            >
              Read the docs <BookOpen className="h-4 w-4" />
            </button>
          </FadeUp>
        </div>
      </section>

      {/* ═══ VALUE PROPS 1 (Split) ═══════════════════════════════ */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp className="space-y-8">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-500">Alignment</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight text-foreground">
              Build the right thing.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              8090 ensures code is built to specification by providing tools for teams to align and developers to reference at the context layer.
            </p>
            <ul className="space-y-4">
              {[
                { icon: Shield, text: 'Context-layer alignment tools' },
                { icon: CheckCircle2, text: 'Spec-driven development' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-foreground/80">
                  <div className={`w-7 h-7 rounded-lg ${t.primarySoft} flex items-center justify-center shrink-0`}>
                    <Icon className={`h-3.5 w-3.5 ${t.textPrimaryDark}`} />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="aspect-video rounded-3xl bg-muted/30 border border-border overflow-hidden flex items-center justify-center italic text-muted-foreground/30">
              [Image: Build the right thing mockup]
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ VALUE PROPS 2 (Split Reverse) ═══════════════════════ */}
      <section className="py-24 px-6 overflow-hidden bg-muted/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp delay={0.15} className="order-2 lg:order-1">
            <div className="aspect-video rounded-3xl bg-muted/30 border border-border overflow-hidden flex items-center justify-center italic text-muted-foreground/30">
              [Image: Shift critical making left mockup]
            </div>
          </FadeUp>
          <FadeUp className="space-y-8 order-1 lg:order-2">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-500">Transparency</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight text-foreground">
              Shift critical making left.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              8090 is making high-level architecture, business logic, and code logic transparent and manageable to your entire organization.
            </p>
            <ul className="space-y-4">
              {[
                { icon: Workflow, text: 'Transparent business logic' },
                { icon: BarChart3, text: 'Manageable architecture' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-foreground/80">
                  <div className={`w-7 h-7 rounded-lg ${t.primarySoft} flex items-center justify-center shrink-0`}>
                    <Icon className={`h-3.5 w-3.5 ${t.textPrimaryDark}`} />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* ═══ VALUE PROPS 3 (Split) ═══════════════════════════════ */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp className="space-y-8">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-500">Execution</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight text-foreground">
              From decisions to directed execution.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Move from ambiguous documents to clear structural execution with 8090's system for connected docs and codebase architecture.
            </p>
            <ul className="space-y-4">
              {[
                { icon: Code2, text: 'Connected docs & patterns' },
                { icon: GitBranch, text: 'Blueprint-to-code mapping' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-foreground/80">
                  <div className={`w-7 h-7 rounded-lg ${t.primarySoft} flex items-center justify-center shrink-0`}>
                    <Icon className={`h-3.5 w-3.5 ${t.textPrimaryDark}`} />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="aspect-video rounded-3xl bg-muted/30 border border-border overflow-hidden flex items-center justify-center italic text-muted-foreground/30">
              [Image: Execution mockup]
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ VALUE PROPS 4 (Split Reverse) ═══════════════════════ */}
      <section className="py-24 px-6 overflow-hidden bg-muted/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp delay={0.15} className="order-2 lg:order-1">
            <div className="aspect-video rounded-3xl bg-muted/30 border border-border overflow-hidden flex items-center justify-center italic text-muted-foreground/30">
              [Image: Feedback loop mockup]
            </div>
          </FadeUp>
          <FadeUp className="space-y-8 order-1 lg:order-2">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-500">Velocity</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight text-foreground">
              Turn feedback into action.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Context between team members, code, and feedback is the difference between shipping features and shipping problems.
            </p>
            <ul className="space-y-4">
              {[
                { icon: MessageSquare, text: 'Continuous feedback loops' },
                { icon: Zap, text: 'Rapid context switching' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-foreground/80">
                  <div className={`w-7 h-7 rounded-lg ${t.primarySoft} flex items-center justify-center shrink-0`}>
                    <Icon className={`h-3.5 w-3.5 ${t.textPrimaryDark}`} />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-muted/20 border-t border-b border-border/50">
        <div className="max-w-7xl mx-auto space-y-14">
          <FadeUp className="text-center space-y-4">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-500">Testimonials</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">Teams who got their time back.</h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1} className="h-full">
                <div className="h-full p-6 rounded-2xl border border-border/50 bg-card space-y-6 flex flex-col shadow-sm">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-sm flex-1">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full ${t.accent} flex items-center justify-center text-xs font-bold text-white shrink-0`}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SUBSCRIPTION OPTIONS ═══════════════════════════════ */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-14">
          <FadeUp className="text-center space-y-4">
            <p className={`text-xs font-bold tracking-[0.25em] uppercase ${t.textPrimary}`}>Subscription</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">Software Factory Subscription Options</h2>
            <p className="text-muted-foreground">Select the plan that fits your team's velocity and governance requirements.</p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Team Plan',
                price: '$200',
                sub: 'per seat / month',
                highlight: true,
                features: [
                  'Full access to Software Factory features',
                  'Unlimited active blueprints & work orders',
                  'Standard support with 24h response time',
                  'Admin controls for team management',
                  'Priority support for workspace setup',
                ],
                cta: 'Get Started with Team',
              },
              {
                name: 'Enterprise Plan',
                price: 'Custom',
                sub: 'starting at 50 seats',
                highlight: false,
                features: [
                  'Fully managed dedicated environments',
                  'High priority support (1h response)',
                  'Custom terms and dedicated CSM',
                  'SSO/SAML & advanced security controls',
                  'Strategic alignment workshops',
                ],
                cta: 'Contact Sales',
              },
            ].map((plan, i) => (
              <FadeUp key={plan.name} delay={i * 0.1} className="h-full">
                <div className={`relative h-full rounded-2xl border p-8 flex flex-col space-y-6 transition-all ${
                  plan.highlight
                    ? `border-${t.primary} bg-${t.primary}/[0.03] dark:bg-${t.primary}/[0.05] shadow-2xl shadow-${t.primary}/10`
                    : 'border-border/50 bg-card shadow-sm'
                }`}>
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className={`px-3 py-1 rounded-full bg-${t.primary} text-black text-[10px] font-black uppercase tracking-wider`}>Recommended</span>
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">{plan.name}</p>
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-black text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground text-sm mb-1">{plan.sub}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                        <CheckCircle2 className={`h-4 w-4 ${t.textPrimary} shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={onEnterDocs}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all active:scale-95 ${
                      plan.highlight
                        ? `bg-${t.primary} hover:bg-${t.primaryHover} text-black shadow-lg shadow-${t.primary}/20`
                        : 'bg-muted/50 hover:bg-muted border border-border text-foreground'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CUSTOM ENGAGEMENTS ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-muted/5 border-t border-b border-border/50">
        <div className="max-w-5xl mx-auto space-y-14">
          <FadeUp className="text-center space-y-4">
            <p className={`text-xs font-bold tracking-[0.25em] uppercase ${t.textPrimary}`}>Professional Services</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">8090 Custom Engagements</h2>
            <p className="text-muted-foreground">Customized SOWs for full stack teams at different stages of their AI journey.</p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Custom Factory Lines',
                price: 'Monthly SOW pricing',
                desc: 'Specialized workflows and dedicated agent configurations for complex enterprise full-stack teams.',
                features: [
                  'Customized Refinery configurations',
                  'Dedicated workspace support',
                  'Quarterly roadmap alignment',
                  'SLA-backed platform availability',
                ],
                cta: 'Inquire about Lines',
              },
              {
                title: '8090 Custom Delivery',
                price: 'Project based pricing',
                desc: 'The 8090 team designs, builds, and delivers enterprise-grade software using our Software Factory platform.',
                features: [
                  'End-to-end project management',
                  'Full-stack architecture & engineering',
                  'Accelerated shipping timelines',
                  'Seamless knowledge transfer',
                ],
                cta: 'Inquire about Delivery',
              },
            ].map((engagement, i) => (
              <FadeUp key={engagement.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border border-border bg-card space-y-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="space-y-4 flex-1">
                    <h3 className="text-2xl font-black text-foreground">{engagement.title}</h3>
                    <p className={`text-xs font-bold ${t.textPrimaryDark} uppercase tracking-[0.2em]`}>{engagement.price}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{engagement.desc}</p>
                    <ul className="space-y-3 pt-2">
                      {engagement.features.map(f => (
                        <li key={f} className="flex items-center gap-2.5 text-xs text-foreground/70">
                          <CheckCircle2 className={`h-3.5 w-3.5 ${t.textPrimary} shrink-0`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full py-3 rounded-xl border border-border bg-muted/50 hover:bg-muted font-bold text-sm transition-all active:scale-95">
                    {engagement.cta}
                  </button>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMMUNITY BAND ══════════════════════════════════════ */}
      <section className="py-16 px-6 border-t border-border/50 bg-muted/5">
        <div className="max-w-4xl mx-auto">
          <FadeUp className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-2xl font-black text-foreground">Join the community</h3>
              <p className="text-muted-foreground text-sm">10,000+ developers building with Software Factory. Share prompts, templates, and patterns.</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { icon: Github, label: 'GitHub', stat: '2.4k ⭐' },
                { icon: MessageSquare, label: 'Discord', stat: '4.1k' },
                { icon: Twitter, label: 'Twitter' }
              ].map((social, i) => (
                <button key={i} className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-border bg-card hover:bg-muted transition-colors text-sm font-bold shadow-sm">
                  <social.icon className="h-4 w-4" /> {social.label}
                  {social.stat && <span className="px-1.5 py-0.5 rounded bg-muted text-[10px] font-bold opacity-60">{social.stat}</span>}
                </button>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══════════════════════════════════════════ */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t ${variant === 'blue' ? 'from-blue-500/5' : 'from-emerald-500/5'} to-transparent pointer-events-none`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] ${t.glow} blur-[100px] rounded-full pointer-events-none`} />
        <FadeUp className="relative text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] text-foreground">
            Build in a weekend.
            <br />
            <span className={t.textPrimary}>Scale to millions.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Start with a free account. Your first project is live in under 10 minutes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={onEnterDocs}
              className={`inline-flex items-center gap-2 px-8 py-4 bg-${t.primary} hover:bg-${t.primaryHover} text-black font-black text-lg rounded-2xl transition-all shadow-2xl ${t.shadow} hover:-translate-y-1 active:scale-95`}
            >
              Start for free <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={onEnterDocs}
              className="inline-flex items-center gap-2 px-8 py-4 bg-card hover:bg-muted border border-border text-foreground font-bold text-lg rounded-2xl transition-all shadow-sm active:scale-95"
            >
              <BookOpen className={`h-5 w-5 ${t.textPrimary}`} /> Read the docs
            </button>
          </div>
          <p className="text-[11px] font-bold text-muted-foreground/50 uppercase tracking-widest">No credit card required · Free forever on Hobby plan</p>
        </FadeUp>
      </section>

      {/* ═══ FOOTER ══════════════════════════════════════════════ */}
      <footer className="border-t border-border bg-muted/30 px-6 pt-16 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-5">
              <div className="flex items-center gap-2.5 font-bold">
                <div className={`bg-${t.primary} text-black p-1.5 rounded-lg shadow-sm`}>
                  <Zap className="h-4 w-4 fill-current" />
                </div>
                <span className="text-foreground">8090.ai</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The AI-native development platform for teams that ship. Turn requirements into production code — without the chaos.
              </p>
              <div className="flex gap-3">
                {[Github, Twitter, MessageSquare].map((Icon, i) => (
                  <button key={i} className="w-9 h-9 rounded-lg border border-border bg-card hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-all shadow-sm">
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {[
              {
                title: 'Product', links: ['Refinery', 'Foundry', 'Planner', 'Validator', 'Codebase Connect', 'Artifacts'],
              },
              {
                title: 'Resources', links: ['Documentation', 'Changelog', 'Roadmap', 'API Reference', 'Blog', 'Status'],
              },
              {
                title: 'Community', links: ['Discord', 'GitHub', 'Twitter', 'LinkedIn', 'Newsletter'],
              },
              {
                title: 'Company', links: ['About', 'Careers', 'Pricing', 'Privacy', 'Terms', 'Contact'],
              },
            ].map(col => (
              <div key={col.title} className="space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map(link => (
                    <li key={link}>
                      <button
                        onClick={link === 'Documentation' ? onEnterDocs : undefined}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
            <p>© {new Date().getFullYear()} 8090 Solutions Inc. — All rights reserved.</p>
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${variant === 'blue' ? 'bg-blue-500' : 'bg-emerald-500'} animate-pulse shadow-[0_0_8px_rgba(20,184,166,0.3)]`} />
              All systems operational · v2.4.1
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
