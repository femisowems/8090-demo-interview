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

    <Release id="cl-0170" version="0.17.0" date="December 17, 2025">
      <SectionList
        title="Major Updates"
        items={[
          'Blueprint Version History: Blueprints now maintain a full version history with a red and green diff view.',
          'Configurable Work Order Extraction: Customize Work Order creation using separate templates for sizing, titles, and descriptions.',
          'Rich Text in Planner: Planners and Work Orders now support rich text with mentions and inline images.',
          'Agent Management Tools: Agents can rename, move, and delete features or Blueprints through conversation.',
        ]}
      />
      <SectionList
        title="Minor Updates"
        items={[
          'Refinery Code Search: Agents can find relevant code while writing PRDs.',
          'Smart Alerts: Prompts encourage initializing PRDs from existing codebases.',
        ]}
      />
      <SectionList
        title="Bug Fixes"
        items={[
          'Fixed an issue where Blueprints appeared grayed out incorrectly.',
          'Resolved file upload limits for the agent panel. Files larger than 5MB are now supported.',
        ]}
      />
    </Release>

    <Release id="cl-0160" version="0.16.0" date="December 8, 2025">
      <SectionList
        title="Major Updates"
        items={[
          'Planner Redesign: New responsive panel layout with improved scrolling and persistent collapsed state.',
          'Review Agent: Agents can review PRDs and Blueprints on demand and flag Ambiguous, Conflict, or Missing issues.',
          'Foundry System Diagrams: System diagrams are now a dedicated Blueprint type with Mermaid rendering and zoom controls.',
          'Artifact Folders: Organize artifacts into hierarchical folders with drag-and-drop and breadcrumbs.',
        ]}
      />
      <SectionList
        title="Minor Updates"
        items={[
          'Mermaid Editor: Toggle between visual and code-based diagram editing.',
          'Fuzzy Search: Blueprint mentions now match even when spaces or dashes are omitted.',
        ]}
      />
      <SectionList
        title="Bug Fixes"
        items={[
          'Fixed auto-save race conditions in Foundry.',
          'Fixed GitHub integration deletion issues.',
        ]}
      />
    </Release>

    <Release id="cl-0150" version="0.15.0" date="November 26, 2025">
      <SectionList
        title="Major Updates"
        items={[
          'Agent Alerts System: Proactive alerts for syncing Blueprints and reviewing drift without notification fatigue.',
          'Refinery Redesign: Added a table of contents and unified comments interface.',
          'Blueprint Management: Drag-and-drop feature node organization with nested hierarchies.',
        ]}
      />
      <SectionList
        title="Performance Improvements"
        items={[
          'Improved latency for background tasks during high concurrent usage.',
        ]}
      />
    </Release>

    <Release id="cl-0140" version="0.14.0" date="November 16, 2025">
      <SectionList
        title="Major Updates"
        items={[
          'Foundry V2: Shifted to one Blueprint per feature for greater flexibility.',
          'Proactive Drift Detection: Automatically compares code against Blueprints on every push.',
          'Cross-Document Suggestions: Agents can suggest edits across multiple Blueprint documents.',
        ]}
      />
      <SectionList
        title="Minor Updates"
        items={[
          'Planner Agent: Can assign Work Orders directly to team members.',
          'Email Notifications: Mentions now trigger email notifications with deep links.',
        ]}
      />
    </Release>

    <Release id="cl-0130" version="0.13.0" date="November 4, 2025">
      <SectionList
        title="Minor Updates"
        items={[
          'Image Resizing: Resize images embedded in PRDs.',
          'New PRD Template: Added Business Problems, Current State, and Success Criteria sections.',
          'Unified Indexing: Codebase indexing moved to a single Overview page.',
        ]}
      />
      <SectionList
        title="Bug Fixes"
        items={[
          'Fixed agent context overflow when processing PDFs with images.',
          'Resolved memory overflows caused by base64 encoding.',
        ]}
      />
    </Release>

    <Release id="cl-0120" version="0.12.0" date="October 27, 2025">
      <SectionList
        title="Major Updates"
        items={[
          'Unified Planner Agent: Single agent for Work Order management, planning, and sequencing.',
          'Drag-and-Drop Sequencing: Move Work Orders visually between phases.',
          'Refinery Search: Agents can search artifacts not explicitly added to chat context.',
        ]}
      />
    </Release>

    <Release id="cl-0100" version="0.10.0" date="September 23, 2025">
      <SectionList
        title="Major Updates"
        items={[
          'Refinery Comments: Leave comments directly on PRDs.',
          'Enhanced Blueprint Sync: Trigger sync from the Foundry agent or editor dropdown.',
          'Smart Mentions: Mention artifacts in Refinery and Blueprint sections.',
        ]}
      />
    </Release>

    <Release id="cl-0090" version="0.9.0" date="September 23, 2025">
      <SectionList
        title="Major Updates"
        items={[
          'Project Console Stats: Refreshed console with per-module statistics.',
          'Validator Agent: Dedicated agent for answering questions about user feedback.',
          'Automatic Re-indexing: Codebases re-index on new commits.',
        ]}
      />
    </Release>

    <Release id="cl-0080" version="0.8.0" date="September 16, 2025">
      <SectionList
        title="Major Updates"
        items={[
          'Large Audio Support: Refinery supports audio files larger than 5MB.',
          'Smart Indexing: Only modified files are processed during re-indexing.',
          'Planner Terminology: Renamed Iterations to Phases.',
        ]}
      />
    </Release>

    <Release id="cl-0071" version="0.7.1" date="September 8, 2025">
      <SectionList
        title="Major Updates"
        items={[
          'Filtering: Filter Work Orders by Blueprint section.',
          'Visual Diffs: Improved visualization of agent suggestions.',
          'Auto-Versioning: PRDs are versioned automatically on feature extraction.',
        ]}
      />
    </Release>

    <Release id="cl-0060" version="0.6.0" date="August 29, 2025">
      <SectionList
        title="Major Updates"
        items={[
          'Refinery UI Mocker: Visualize application interfaces directly from the PRD.',
          'Markdown Export: Export Blueprints for external editing and sharing.',
          'Iteration Planning Agent: Helps organize and assign Work Orders across cycles.',
        ]}
      />
    </Release>

    <Release id="cl-0050" version="0.5.0" date="August 21, 2025">
      <SectionList
        title="Major Updates"
        items={[
          'Foundry: Update Blueprints directly from the indexed codebase with automatic sync.',
          'Validator: New Feedback Inbox with real-time dashboard, filtering, and API ingestion.',
        ]}
      />
      <SectionList
        title="Bug Fixes"
        items={[
          'Fixed Blueprint section updates not reflecting in real time.',
          'Resolved MCP connection stability issues.',
          'Improved GitHub integration error handling.',
        ]}
      />
      <SectionList
        title="Performance Improvements"
        items={[
          'Reduced indexing time for large repositories by 30 percent.',
          'Faster agent response times.',
          'Optimized Blueprint editor memory usage.',
        ]}
      />
    </Release>

    <Release id="cl-0040" version="0.4.0" date="August 11, 2025">
      <SectionList
        title="Major Updates"
        items={[
          'Refinery: Revamped editor, improved navigation, artifact management, and in-editor agent suggestions.',
          'Foundry: Blueprint Navigator with completion progress and improved collaboration.',
          'Planner: Edit implementation plans via chat with better IDE workflow integration.',
          'Admin: New secure custom invite links and improved onboarding.',
        ]}
      />
      <SectionList
        title="Bug Fixes"
        items={[
          'Fixed Work Order status update issues.',
          'Resolved Feature Node extraction issues in large PRDs.',
          'Fixed UI Mocker refresh problems.',
        ]}
      />
      <SectionList
        title="Performance Improvements"
        items={[
          'Faster loading for large Blueprints.',
          'Reduced memory usage in the PRD editor.',
          'Improved drag-and-drop responsiveness.',
        ]}
      />
    </Release>

    <Release id="cl-0030" version="0.3.0" date="July 28, 2025">
      <SectionList
        title="Major Updates"
        items={[
          'Assembler: MCP integration and visual Work Order dashboard.',
          'Planner: AI-powered Work Order generation and lifecycle management.',
          'Foundry: Blueprint templates and stale node detection.',
        ]}
      />
      <SectionList
        title="Bug Fixes"
        items={[
          'Fixed GitHub authentication issues.',
          'Improved large file upload handling.',
        ]}
      />
    </Release>

    <Release id="cl-0020" version="0.2.0" date="July 15, 2025">
      <SectionList
        title="Major Updates"
        items={[
          'Refinery: AI-powered PRD editor, UI Mocker, and artifact management.',
          'Foundry: Blueprint creation, Feature Node extraction, and Blueprint Agent assistance.',
        ]}
      />
      <SectionList
        title="Bug Fixes"
        items={[
          'Fixed authentication and file upload issues.',
        ]}
      />
    </Release>

    <Release id="cl-0010" version="0.1.0" date="July 1, 2025">
      <SectionList
        title="Core Features"
        items={[
          'Project management and GitHub integration.',
          'Secure user authentication.',
        ]}
      />
      <SectionList
        title="Modules"
        items={[
          'Refinery, Foundry, Planner, Assembler, Validator.',
        ]}
      />
      <SectionList
        title="Known Issues"
        items={[
          'Limited AI assistance.',
          'Basic UI and integrations.',
        ]}
      />
    </Release>
  </motion.div>
);