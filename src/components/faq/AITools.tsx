import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, ExternalLink, ThumbsUp, ThumbsDown, Sparkles } from 'lucide-react';

interface AIToolsProps {
  activeCategory: string;
}

const PAGE_SUMMARIES: Record<string, string> = {
  intro: `# Software Factory – Introduction

Software Factory is an AI-native SDLC orchestration platform where PMs, designers, engineers, and QA collaborate to ship high-quality software.

## The Problem
Enterprise software development is slowed by fragmented documentation, ad-hoc communication, and reliance on tribal knowledge. Most AI tools operate in "single-player mode," optimizing for quick prototypes without architectural discipline.

## The Solution
Software Factory replaces tool sprawl with a centralized workspace for context engineering. A unified Knowledge Graph connects requirements, blueprints, and implementation details so they evolve together. Specialized AI agents surface gaps, document reasoning, and maintain coherence across artifacts.

## Core Modules
- **Refinery** – Define product requirements (PRDs, features, goals)
- **Foundry** – Translate vision into structured Blueprint specifications
- **Planner** – Generate context-rich Work Orders from Blueprints
- **Validator** – Turn user feedback into actionable development tasks`,

  quickstart: `# Software Factory – Quickstart Guide

Step-by-step guide to your first Software Factory workflow:

1. **Create/Join Organization** – Private workspace for team collaboration
2. **Create Project** – Captures knowledge and documentation for software delivery
3. **Connect Repository** (Optional) – Index codebase for agent context
4. **Upload Artifacts** (Optional) – Provide additional context documents
5. **Define Requirements in Refinery** – Collaborate with agent on PRDs and FRDs
6. **Create Blueprints in Foundry** – Define architectural designs and decisions
7. **Generate Work Orders in Planner** – Auto-generate implementation tasks
8. **Connect Coding Agent via MCP** – Pull Work Orders directly into your IDE`,

  'requirements-guide': `# Software Factory – Requirements Writing Guide

## What Are Requirements?
Requirements capture product intent: what it must do and why it exists. Organized into:
- **Product Overview Documents** – High-level why/what (Business Problem, Personas, Success Metrics, etc.)
- **Feature Requirements Documents (FRDs)** – Feature-level user stories and acceptance criteria

## FRD Structure
1. **Overview** – 1-2 paragraphs explaining feature purpose
2. **Terminology** – Feature-specific term definitions
3. **Requirements** – Each with:
   - ID: REQ-[PREFIX]-NNN
   - User Story: As a [role], I want to [action], so that [outcome]
   - Acceptance Criteria: AC-[PREFIX]-NNN.N format

## Sub-Features
Parent features deliver complete value alone. Child features extend but are not required. Split when independently testable; nest when child is meaningless without parent.`,

  'blueprint-guide': `# Software Factory – Blueprint Writing Specification

## What Are Blueprints?
Technical specifications defining how the system satisfies requirements. Two categories:

### Foundation Blueprints (feature-agnostic)
- **Container Blueprint** – Deployable units (API server, DB, workers)
- **Component Blueprint** – Reusable capabilities spanning containers

### Feature Blueprints (tied to requirements)
Composition-first: wire shared capabilities + feature-specific glue to satisfy FRDs.

## Core Syntax
- \`\`\`component\`\`\` blocks – Runtime nodes (name, container, responsibilities)
- \`\`\`model\`\`\` blocks – Canonical data models (name, store, fields, constraints)
- Mentions: #Component, \`Element\`, @SystemEntity

## Principles
Code-grounded, composition-first, structured + narrative, implementable, markdown-native, living artifacts.`,
};

const AI_TARGETS = [
  {
    id: 'copy',
    label: 'Copy as Markdown',
    icon: Copy,
    url: null,
  },
  {
    id: 'chatgpt',
    label: 'Ask ChatGPT',
    icon: () => (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.28 14.39a5.63 5.63 0 0 0-.48-4.63 5.7 5.7 0 0 0-6.13-2.74A5.63 5.63 0 0 0 11.43 5a5.7 5.7 0 0 0-5.42 3.93A5.63 5.63 0 0 0 2.24 12a5.7 5.7 0 0 0 .7 6.64 5.63 5.63 0 0 0 .48 4.63 5.7 5.7 0 0 0 6.13 2.74A5.63 5.63 0 0 0 13.79 28a5.7 5.7 0 0 0 5.42-3.93A5.63 5.63 0 0 0 22.97 21a5.7 5.7 0 0 0-.7-6.64zM13.79 25.83a4.24 4.24 0 0 1-2.72-.98l.14-.07 4.5-2.6a.73.73 0 0 0 .37-.64v-6.35l1.9 1.1a.07.07 0 0 1 .04.05v5.26a4.26 4.26 0 0 1-4.23 4.23zm-9.1-3.88a4.24 4.24 0 0 1-.5-2.85l.13.08 4.5 2.6a.74.74 0 0 0 .74 0l5.5-3.17v2.2a.07.07 0 0 1-.03.06l-4.56 2.63a4.26 4.26 0 0 1-5.78-1.55zm-1.19-9.88a4.24 4.24 0 0 1 2.22-1.87v5.35a.73.73 0 0 0 .37.64l5.5 3.17-1.9 1.1a.07.07 0 0 1-.07 0L5.06 17.83a4.26 4.26 0 0 1-1.56-5.76zm15.64 3.64l-5.5-3.17 1.9-1.1a.07.07 0 0 1 .07 0l4.56 2.63a4.25 4.25 0 0 1-.66 7.67v-5.39a.73.73 0 0 0-.37-.64zm1.89-2.87l-.13-.08-4.5-2.6a.74.74 0 0 0-.74 0l-5.5 3.17v-2.2a.07.07 0 0 1 .03-.06l4.56-2.63a4.26 4.26 0 0 1 6.28 3.4zm-11.89 3.91l-1.9-1.1a.07.07 0 0 1-.04-.05v-5.26a4.26 4.26 0 0 1 6.96-3.27l-.14.07-4.5 2.6a.73.73 0 0 0-.37.64zm1.03-2.22l2.45-1.41 2.45 1.41v2.83l-2.45 1.41-2.45-1.41z" transform="translate(-1 -4) scale(0.85)"/>
      </svg>
    ),
    url: 'https://chatgpt.com',
  },
  {
    id: 'claude',
    label: 'Ask Claude',
    icon: () => (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" opacity="0.8"/>
      </svg>
    ),
    url: 'https://claude.ai/new',
  },
  {
    id: 'gemini',
    label: 'Ask Gemini',
    icon: Sparkles,
    url: 'https://gemini.google.com/app',
  },
];

export const AITools: React.FC<AIToolsProps> = ({ activeCategory }) => {
  const [copied, setCopied] = useState(false);
  const [copiedForAI, setCopiedForAI] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'up' | 'down' | null>(null);

  const getMarkdown = useCallback(() => {
    return PAGE_SUMMARIES[activeCategory] || `# ${activeCategory}\n\nNo summary available for this page yet.`;
  }, [activeCategory]);

  const handleCopy = useCallback(async () => {
    const md = getMarkdown();
    try {
      await navigator.clipboard.writeText(md);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = md;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [getMarkdown]);

  const handleAskAI = useCallback(async (id: string, url: string) => {
    const md = getMarkdown();
    try {
      await navigator.clipboard.writeText(md);
    } catch { /* silent */ }
    setCopiedForAI(id);
    // Brief delay so the user sees the confirmation before the tab opens
    setTimeout(() => {
      window.open(url, '_blank', 'noopener');
    }, 400);
    setTimeout(() => setCopiedForAI(null), 3000);
  }, [getMarkdown]);

  return (
    <div className="space-y-8">
      {/* Feedback */}
      <div className="space-y-3">
        <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.15em]">Is this helpful?</p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFeedback(f => f === 'down' ? null : 'down')}
            className={`p-2 rounded-full border transition-all ${feedback === 'down' ? 'border-red-500/30 bg-red-500/10 text-red-500' : 'border-border/50 text-muted-foreground hover:text-foreground hover:border-border'}`}
          >
            <ThumbsDown className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => setFeedback(f => f === 'up' ? null : 'up')}
            className={`p-2 rounded-full border transition-all ${feedback === 'up' ? 'border-green-500/30 bg-green-500/10 text-green-500' : 'border-border/50 text-muted-foreground hover:text-foreground hover:border-border'}`}
          >
            <ThumbsUp className="h-3.5 w-3.5" />
          </button>
          <AnimatePresence>
            {feedback && (
              <motion.span
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="text-xs text-muted-foreground"
              >
                Thanks!
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* AI Tools */}
      <div className="space-y-3">
        <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.15em]">AI Tools</p>
        <div className="space-y-1">
          {AI_TARGETS.map((target) => {
            const Icon = target.icon;
            if (target.id === 'copy') {
              return (
                <button
                  key={target.id}
                  onClick={handleCopy}
                  className="group flex w-full items-center gap-2.5 px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50 transition-all"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Check className="h-4 w-4 text-green-500" />
                      </motion.div>
                    ) : (
                      <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Copy className="h-4 w-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <span>{copied ? 'Copied!' : target.label}</span>
                </button>
              );
            }
            return (
              <button
                key={target.id}
                onClick={() => handleAskAI(target.id, target.url!)}
                className="group flex w-full items-center gap-2.5 px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50 transition-all"
              >
                <Icon className="h-4 w-4" />
                <span>{target.label}</span>
                <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-50 transition-opacity" />
              </button>
            );
          })}
        </div>

        {/* Toast notification */}
        <AnimatePresence>
          {copiedForAI && (
            <motion.div
              initial={{ opacity: 0, y: 5, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -5, scale: 0.95 }}
              className="px-3 py-2.5 rounded-lg bg-green-500/10 border border-green-500/20 text-xs space-y-1"
            >
              <p className="font-semibold text-green-600 flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5" /> Copied to clipboard!
              </p>
              <p className="text-muted-foreground">
                Paste with <kbd className="px-1 py-0.5 rounded bg-muted border border-border text-[10px] font-bold">⌘V</kbd> in the chat window.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {!copiedForAI && (
          <p className="text-[10px] text-muted-foreground/50 px-3 leading-relaxed">
            Copies page summary to clipboard, then opens the AI tool.
          </p>
        )}
      </div>
    </div>
  );
};
