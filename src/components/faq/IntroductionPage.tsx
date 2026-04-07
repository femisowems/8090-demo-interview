import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, MessageSquare, ShieldCheck } from 'lucide-react';
import { AgentWorkflow } from './AgentWorkflow';
import { NextSteps } from './NextSteps';

interface IntroductionPageProps {
  onNavigate: (id: string) => void;
  activeCategory: string;
}

const MODULES = [
  {
    id: 'refinery',
    title: 'Refinery',
    tagline: 'Define your product.',
    desc: 'In Refinery, you create a detailed PRD (Product Requirements Document) that captures requirements, features, and goals for your system.',
  },
  {
    id: 'foundry',
    title: 'Foundry',
    tagline: 'Translate vision into specs.',
    desc: 'Foundry expands the PRD into a structured Blueprint document, powered by the Feature Extraction Agent. Features are organized into a hierarchy of Feature Nodes, where engineers can document how each part of the system should be implemented.',
  },
  {
    id: 'planner',
    title: 'Planner',
    tagline: 'Turn specs into tasks.',
    desc: 'Planner generates Work Orders from the Blueprint. Each Work Order comes with implementation plans that are aware of your existing codebase — highlighting files to update or create, and describing the work required.',
  },
  {
    id: 'validator',
    title: 'Validator',
    tagline: 'Close the loop.',
    desc: 'Validator turns user feedback into actionable development tasks, creating a direct pipeline from real-world usage back into your build process.',
  },
];

export const IntroductionPage: React.FC<IntroductionPageProps> = ({ onNavigate, activeCategory }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-20">

    {/* Hero */}
    <header id="intro-header" className="space-y-6 scroll-mt-32">
      <h1 className="text-5xl font-bold tracking-tight text-foreground">Welcome to Software Factory</h1>
      <p className="text-xl text-muted-foreground leading-relaxed">
        Software Factory is an AI-native SDLC orchestration platform where PMs, designers, engineers, and QA collaborate to ship high-quality software.
      </p>
    </header>

    {/* Why We Built Software Factory */}
    <section id="why-built" className="space-y-12 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Why We Built Software Factory</h2>

      <AgentWorkflow />

      <div className="space-y-10 text-muted-foreground leading-relaxed text-lg">
        <div id="the-problem" className="space-y-5 scroll-mt-32">
          <h3 className="text-xl font-bold text-primary flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" /> The Problem
          </h3>
          <p>
            Enterprise software development is slowed by fragmented documentation, ad-hoc communication, and reliance on tribal knowledge. Without a single source of truth, engineers work with limited context and risk building the wrong solutions. When key experts leave, critical knowledge leaves with them. Over time, these gaps compound, limiting software quality and organizational scalability.
          </p>
          <p>
            Most existing AI tools operate in "single-player mode", optimizing for quick prototypes and narrow tasks. While coding agents accelerate early progress, they often do so without sufficient critical thinking or architectural discipline. The result is fast output built on weak foundations, where misalignment goes unnoticed until progress stalls.
          </p>
          <p>
            Development itself has never been the bottleneck. Writing code is faster than ever; deciding <em>what</em> to build, <em>why</em>, and <em>how it fits</em> into the larger system is where teams struggle. Most delays come from misalignment, missing context, unclear decisions, and rework—not from typing code.
          </p>
        </div>

        <div id="the-solution" className="space-y-5 scroll-mt-32">
          <h3 className="text-xl font-bold text-primary flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" /> The Solution
          </h3>
          <p>
            Software Factory replaces tool sprawl and tribal knowledge with a centralized, collaborative environment where teams and agents work from a single source of truth to translate business intent into high-quality software.
          </p>
          <p>
            At its core is a unified workspace for <strong className="text-foreground">context engineering</strong> that connects requirements, architectural plans, and implementation details in a "Knowledge Graph" so they evolve together. When requirements change, constraints emerge, or code drifts, the system propagates updates automatically, keeping teams aligned on current, accurate context.
          </p>
          <p>
            Specialized AI agents reinforce clarity, rigor, and discipline throughout the process. Unlike fast-but-sloppy "single-player" AI tools, Software Factory's agents surface gaps, document reasoning, highlight tradeoffs, and maintain coherence across artifacts. Decisions become explicit, reviewable, and consistently aligned with business intent.
          </p>
          <p>
            Software Factory is built for true <strong className="text-foreground">multiplayer collaboration</strong>. Product, engineering, and business stakeholders co-create and iterate in real time with shared context and synchronized updates. This preserves institutional knowledge as systems evolve and prevents insight from being trapped in individual heads or local files.
          </p>
          <p className="font-medium text-foreground/80">
            The result is higher-quality software, reduced organizational risk, and confident decision-making at every stage.
          </p>
        </div>
      </div>

      {/* Watch the Demo CTA */}
      <button className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all text-primary font-semibold">
        <Play className="h-5 w-5 fill-current" />
        Watch the demo
        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </button>
    </section>

    {/* Getting Started */}
    <section id="getting-started" className="space-y-6 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Getting Started</h2>
      <button
        onClick={() => onNavigate('quickstart')}
        className="group w-full p-6 rounded-2xl border border-border bg-card hover:bg-muted/30 transition-all text-left flex items-center justify-between"
      >
        <div>
          <h4 className="font-bold text-lg">Quickstart Guide</h4>
          <p className="text-sm text-muted-foreground mt-1">Get up and running fast.</p>
        </div>
        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </button>
    </section>

    {/* Core Modules */}
    <section id="core-modules" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Core Modules</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {MODULES.map((mod) => (
          <button
            key={mod.id}
            onClick={() => onNavigate(mod.id)}
            className="group p-6 rounded-2xl border border-border bg-card hover:bg-muted/30 transition-all text-left space-y-3"
          >
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{mod.title}</h3>
            <p className="text-sm font-medium text-primary/70">{mod.tagline}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{mod.desc}</p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary/60 group-hover:text-primary transition-colors">
              Learn More <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        ))}
      </div>
    </section>

    {/* Support & Community */}
    <section id="support-community" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Support &amp; Community</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-border bg-card hover:bg-muted/30 transition-colors cursor-pointer flex items-start gap-4">
          <MessageSquare className="h-5 w-5 text-primary mt-0.5 shrink-0" />
          <div>
            <h4 className="font-bold mb-1">Discord</h4>
            <p className="text-sm text-muted-foreground">Join our community</p>
          </div>
        </div>
        <div className="p-6 rounded-2xl border border-border bg-card hover:bg-muted/30 transition-colors cursor-pointer flex items-start gap-4">
          <ShieldCheck className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
          <div>
            <h4 className="font-bold mb-1">Enterprise Support</h4>
            <p className="text-sm text-muted-foreground">For enterprise customers</p>
          </div>
        </div>
      </div>
    </section>

    <NextSteps currentId={activeCategory} onNavigate={onNavigate} />
  </motion.div>
);
