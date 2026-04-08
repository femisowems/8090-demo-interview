import React from 'react';
import { motion } from 'framer-motion';

const SectionList: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div className="space-y-3">
    <h4 className="text-lg font-bold text-primary">{title}</h4>
    <ul className="space-y-2 text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 leading-relaxed">
          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Release: React.FC<{ id: string; version: string; date: string; children: React.ReactNode }> = ({ id, version, date, children }) => (
  <section id={id} className="space-y-6 scroll-mt-32">
    <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Version {version}</h2>
    <p className="text-sm text-muted-foreground">Release date: {date}</p>
    <div className="space-y-6">{children}</div>
  </section>
);

export const ChangelogPage: React.FC = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-16">
    <header id="cl-header" className="space-y-6 scroll-mt-32">
      <h1 className="text-5xl font-bold tracking-tight">Changelog</h1>
      <p className="text-xl text-muted-foreground leading-relaxed">Stay up to date with the latest features, improvements, and fixes in Software Factory.</p>
    </header>

    <Release id="cl-0310" version="0.31.0" date="March 30, 2026">
      <SectionList
        title="Minor Updates"
        items={[
          'Foundry navigator improvements for easier navigation and better expand/collapse behavior.',
          'Glob tool added for agent file discovery with brace expansion.',
          'Comment drafts persist after navigation.',
          'Work orders can link to multiple features, blueprints, and artifacts.',
          'Editor right-click context menu now includes cut/copy/paste options and insert actions.',
          'Roadmap drag tooltips persist during drag operations.',
          'Notification improvements for document names, deep links, and flagged comment alerts.',
          'Image previews switched to blob URLs for reliability.',
          'Assignee filter now shows active organization members only.',
        ]}
      />
    </Release>

    <Release id="cl-0300" version="0.30.0" date="March 23, 2026">
      <SectionList
        title="Major Updates"
        items={[
          'Notification system for mentions, replies, assignments, and flagged content (in-app + email).',
          'Notification center with unread badge, filtering, mark-as-read, and deep-link navigation.',
        ]}
      />
      <SectionList
        title="Minor Updates"
        items={[
          'Project selector moved to Project Overview sidebar.',
          'Child work order linking with searchable dropdown and cycle prevention.',
          'Intelligent paste with markdown detection and improved code block handling.',
          'Roadmap UX improvements for phase creation and group sorting.',
          'Work order filter text persistence after close.',
          'Improved Getting Started skill onboarding flow.',
        ]}
      />
    </Release>

    <Release id="cl-0290" version="0.29.0" date="March 16, 2026">
      <SectionList
        title="Major Updates"
        items={[
          'Planner Module v2 with roadmap and board views.',
          'Parent-child work order structure and dependency chains.',
          'Work order versioning with restore support.',
          'Pull request links in work orders.',
          'Phase date ranges configurable in project settings.',
          'Global search (Cmd+K) with filters and recent activity.',
          'New MCP tool for creating work orders.',
          'Improved code search and auditability for agents.',
        ]}
      />
      <SectionList
        title="Minor Updates"
        items={[
          'Draft comments cached when navigating away.',
          'Module switch warning before stopping active runs.',
          'Improved agent retry/resumption and stream error handling.',
          'Raw paste shortcut behavior refined.',
          'Quickstart checklist improvements.',
        ]}
      />
    </Release>

    <Release id="cl-0280" version="0.28.0" date="March 9, 2026">
      <SectionList
        title="Major Features"
        items={[
          'Simultaneous editing in Foundry and Refinery with live presence and synced comments.',
          'Custom agent skills at project or module level.',
          'Configurable agent hooks with manual triggers and run tracking.',
          'Quickstart onboarding flow with checklist and activity-based completion.',
          'Version snapshots and restore for blueprints and requirements.',
        ]}
      />
      <SectionList
        title="Minor Updates"
        items={[
          'Comment badges in navigator with live updates.',
          'Member table pagination, search, and last-login column.',
          'Optimistic streaming for tool calls.',
          'In-stream agent feedback support.',
          'Sign-in flow fixes and project-scoped MCP names.',
        ]}
      />
    </Release>

    <Release id="cl-0270" version="0.27.0" date="March 2026">
      <SectionList
        title="Core Updates"
        items={[
          'Rich mention chips in comments.',
          'Agent response feedback ratings and categories.',
          'Usage dashboard drill-down by project/user/agent/model with CSV export.',
          'Optimistic interaction for blocking tool calls while streaming.',
        ]}
      />
      <SectionList
        title="Minor Updates"
        items={[
          'Code Search Agent v2 with structured summaries.',
          'Artifact upload drag-and-drop in agent input.',
          'Clipboard image paste in feedback uploads.',
          'Comment panel auto-open via agent tools.',
          'Feedback traceability with conversation IDs.',
          'Codex CLI setup guidance.',
        ]}
      />
    </Release>

    <Release id="cl-0260" version="0.26.0" date="February 24, 2026">
      <SectionList
        title="Major Updates"
        items={[
          'Suggestions persistence and improved rendering around anchors, Mermaid, and tables.',
          'Rich table support in documents and agent chat.',
        ]}
      />
      <SectionList
        title="Minor Updates"
        items={[
          'Agent-guided onboarding for first use.',
          'Document navigator tooltips with guide links.',
          'Panel size persistence across sessions.',
          'Mention email deduplication.',
        ]}
      />
    </Release>

    <Release id="cl-0250" version="0.25.0" date="February 17, 2026">
      <SectionList
        title="Major Updates"
        items={[
          'Agent UX overhaul with stream controls and linked navigation.',
          'Structured Q and A tool with inline forms.',
          'Context usage indicator for token window tracking.',
          'Mid-stream context compaction.',
          'Reduced token overhead through prompt and preprocessing optimizations.',
        ]}
      />
      <SectionList
        title="Fixes"
        items={[
          'Blueprint editor reload issue after accepting changes fixed.',
          'Conversation switching message drops fixed.',
          'Link hover previews improved with titles.',
          'Comment deep-links and mention hover overlap corrected.',
          'Artifact search recall and template timezone handling improved.',
        ]}
      />
    </Release>

    <Release id="cl-0240" version="0.24.0" date="February 2026">
      <SectionList
        title="Major Features"
        items={[
          'Comment email notifications for mentions.',
          'Mention chips and auto-linking URLs.',
          'Document ownership locking.',
          'Single-doc and aggregate requirements export.',
          'Custom writing instructions for Requirements agent.',
        ]}
      />
    </Release>

    <Release id="cl-0230" version="0.23.0" date="January 2026">
      <SectionList
        title="Major Features"
        items={[
          'Structured requirements documents in Refinery.',
          'Product overview docs and FRDs with hierarchy support.',
          'PRD migration agent and read-only PRD archive.',
          'Cross-entity mentions and clickable mentions across editors.',
          'Web search for agents with source citations.',
          'Expanded MCP access for requirements, blueprints, and artifacts.',
        ]}
      />
    </Release>

    <Release id="cl-0210" version="0.21.0" date="January 15, 2026">
      <SectionList
        title="Minor Updates"
        items={[
          'Planner implementation planning moved to unified skill-based flow.',
          'Work orders move from backlog to ready when plan is saved.',
          'Removed writing assist button from work order descriptions.',
        ]}
      />
    </Release>

    <Release id="cl-0200" version="0.20.0" date="January 14, 2026">
      <SectionList
        title="Major Updates"
        items={[
          'Knowledge Graph Explorer in Refinery and Foundry.',
          'Markdown paste rendering in TipTap editors.',
          'Planner Agent now surfaces reasoning during phase planning.',
        ]}
      />
    </Release>

    <Release id="cl-0190" version="0.19.0" date="December 30, 2025">
      <SectionList
        title="Major Updates"
        items={[
          'Integrated Stripe billing and plan gating for new users.',
          'Organization seat capacity enforcement and upgrade flow.',
          'Direct internal links from selected text to core entities.',
          'Improved Planner agent search across artifacts, blueprints, and PRD.',
        ]}
      />
    </Release>

    <Release id="cl-0180" version="0.18.0" date="December 24, 2025">
      <SectionList
        title="Major Updates"
        items={[
          'Organization usage page with date filtering and cost breakdowns.',
          'Work order bulk actions with multi-row selection.',
          'PRD initialization modes with configurable detail.',
          'New indexing progress alert and stronger diff tracking.',
        ]}
      />
    </Release>
  </motion.div>
);