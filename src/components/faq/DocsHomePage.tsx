import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap, ArrowRight, BookOpen, Blocks, ClipboardList, PenTool,
  Factory, LayoutDashboard, ScanSearch, CheckCircle2,
  GitBranch, FileArchive, Building2, CreditCard, Newspaper, Map,
  Rocket, FileText, Bot
} from 'lucide-react';

interface DocsHomePageProps {
  onNavigate: (id: string) => void;
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const DocsHomePage: React.FC<DocsHomePageProps> = ({ onNavigate }) => (
  <motion.div {...fadeUp} className="max-w-5xl space-y-16">

    {/* Hero */}
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-primary-foreground p-2.5 rounded-xl shadow-lg">
            <Zap className="h-6 w-6 fill-current" />
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Software Factory Documentation</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
          Learn how to define requirements, create blueprints, and ship high-quality software with AI-native orchestration.
        </p>
      </div>

      {/* Getting Started card */}
      <div className="lg:w-[340px] p-6 rounded-2xl border border-border bg-card space-y-4">
        <h3 className="font-bold flex items-center gap-2"><Rocket className="h-4 w-4 text-primary" /> Getting Started</h3>
        <p className="text-sm text-muted-foreground">Jump in with a step-by-step guide.</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { id: 'intro', label: 'Introduction', icon: BookOpen },
            { id: 'quickstart', label: 'Quickstart', icon: Zap },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex items-center gap-2 p-3 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all text-sm font-medium text-left"
            >
              <item.icon className="h-4 w-4 text-primary shrink-0" />
              {item.label}
            </button>
          ))}
        </div>
        <button
          onClick={() => onNavigate('quickstart')}
          className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
        >
          Start the tutorial <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </div>

    {/* Core Modules */}
    <section className="space-y-6">
      <h2 className="text-xl font-bold">Core Modules</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { id: 'refinery', icon: ClipboardList, label: 'Refinery', desc: 'Define your product through structured requirements — PRDs, feature specs, personas, and acceptance criteria.' },
          { id: 'foundry', icon: Factory, label: 'Foundry', desc: 'Translate requirements into technical Blueprints — container, component, and feature specifications.' },
          { id: 'planner', icon: LayoutDashboard, label: 'Planner', desc: 'Generate context-rich Work Orders from Blueprints. The Planner decomposes specs into implementable tasks.' },
          { id: 'validator', icon: CheckCircle2, label: 'Validator', desc: 'Capture user feedback and turn it into actionable development tasks tied back to requirements.' },
        ].map(mod => (
          <button
            key={mod.id}
            onClick={() => onNavigate(mod.id)}
            className="group p-5 rounded-2xl border border-border hover:border-primary/30 hover:shadow-sm bg-card text-left transition-all space-y-2"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors">
                <mod.icon className="h-4 w-4" />
              </div>
              <span className="font-bold text-sm">{mod.label}</span>
              <ArrowRight className="h-3.5 w-3.5 ml-auto text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{mod.desc}</p>
          </button>
        ))}
      </div>
    </section>

    {/* Writing Guides */}
    <section className="space-y-6">
      <h2 className="text-xl font-bold">Writing Guides</h2>
      <p className="text-sm text-muted-foreground -mt-3">Opinionated guides for authoring Software Factory documents.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          { id: 'requirements-guide', icon: PenTool, label: 'Requirements' },
          { id: 'blueprint-guide', icon: Blocks, label: 'Blueprints' },
          { id: 'work-order-guide', icon: FileText, label: 'Work Orders' },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="group flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all"
          >
            <item.icon className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </section>

    {/* Raw Materials */}
    <section className="space-y-6">
      <h2 className="text-xl font-bold">Raw Materials</h2>
      <p className="text-sm text-muted-foreground -mt-3">Connect your existing assets to give agents full context.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          { id: 'codebase-connection', icon: GitBranch, label: 'Codebase Connection' },
          { id: 'artifacts', icon: FileArchive, label: 'Artifacts' },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="group flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all"
          >
            <item.icon className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </section>

    {/* Additional Resources */}
    <section className="space-y-6">
      <h2 className="text-xl font-bold">Additional Resources</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { id: 'organization-mgmt', icon: Building2, label: 'Organization Management', desc: 'Manage your workspace, teams, and member access.' },
          { id: 'usage-billing', icon: CreditCard, label: 'Usage & Billing', desc: 'Understand your plan, usage metrics, and invoicing.' },
          { id: 'changelog', icon: Newspaper, label: 'Changelog', desc: 'Latest product updates and release notes.' },
          { id: 'roadmap', icon: Map, label: 'Roadmap', desc: "See what's coming next for Software Factory." },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="group p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-card text-left transition-all space-y-2"
          >
            <item.icon className="h-4 w-4 text-primary" />
            <p className="text-sm font-bold">{item.label}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </button>
        ))}
      </div>
    </section>

    {/* Agent-Powered Workflow */}
    <section className="p-6 rounded-2xl border border-border bg-primary/[0.02] space-y-4">
      <div className="flex items-center gap-3">
        <Bot className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-bold">Agent-Powered Workflow</h2>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
        Software Factory uses specialized AI agents at every stage. Agents help write requirements, generate blueprints, decompose work orders, and validate implementation — all grounded in your project's knowledge graph.
      </p>
      <button
        onClick={() => onNavigate('intro')}
        className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
      >
        Learn how it works <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </section>

    {/* Help bar */}
    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground pt-4 border-t border-border/50">
      <button onClick={() => onNavigate('quickstart')} className="hover:text-foreground transition-colors flex items-center gap-1.5">
        <ScanSearch className="h-3.5 w-3.5" /> Need help getting started? <span className="text-primary font-semibold">Quickstart Guide →</span>
      </button>
    </div>

  </motion.div>
);
