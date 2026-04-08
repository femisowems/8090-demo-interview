import React from 'react';
import { motion } from 'framer-motion';

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-3 text-muted-foreground">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 leading-relaxed">
        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const FoundryPage: React.FC = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-20">
    <header id="fnd-header" className="space-y-6 scroll-mt-32">
      <h1 className="text-5xl font-bold tracking-tight">Foundry</h1>
      <p className="text-xl text-muted-foreground leading-relaxed">
        Foundry is the architectural intelligence layer of Software Factory that transforms product requirements into clear, actionable technical blueprints.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        It ensures that product intent, system design, and implemented code stay aligned over time.
      </p>
    </header>

    <section id="fnd-what-are-blueprints" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">What Are Blueprints?</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          Blueprints are human-readable technical specification documents that serve as the definitive source of truth for how a system should be built.
        </p>
        <p>
          They translate product requirements into precise engineering guidance while remaining synchronized with real implementation.
        </p>
        <p>
          Foundry organizes blueprints into three complementary types:
        </p>
      </div>
    </section>

    <section id="fnd-blueprint-types" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Blueprint Types</h2>

      <div id="fnd-foundations" className="space-y-4 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Foundations</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Foundations capture project-wide technical context across features, including architectural principles, stack decisions, security requirements, standards, and deployment conventions.
        </p>
      </div>

      <div id="fnd-system-diagrams" className="space-y-4 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">System Diagrams</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          System Diagrams provide visual architecture and data flow representations using standardized diagrams such as architecture diagrams, ERDs, and flow diagrams.
        </p>
      </div>

      <div id="fnd-feature-blueprints" className="space-y-4 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Feature Blueprints</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Feature Blueprints translate individual product features into detailed technical plans covering APIs, UI behavior, data models, and testing requirements. They stay tightly linked to the feature hierarchy in Refinery.
        </p>
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Together, these blueprints form a connected technical narrative from high-level architecture to feature-level implementation details.
      </p>
    </section>

    <section id="fnd-getting-started" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Getting Started</h2>

      <div id="fnd-step-1" className="space-y-4 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Step 1: Configure your Foundry template</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          New projects start by selecting a template. Templates define which Foundations, System Diagrams, and Feature Blueprint outlines are created.
        </p>
        <BulletList
          items={[
            'Common Templates provided by the platform for standard architectures.',
            'Organization Templates created by admins to enforce internal standards.',
            'Optional pre-written content and agent instructions for each blueprint.',
          ]}
        />
      </div>

      <div id="fnd-step-2" className="space-y-4 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Step 2: Fill in Foundation Blueprints</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Foundation blueprints are pre-populated based on your template. Refine them to capture core architecture decisions, shared technologies, and standards.
        </p>
        <BulletList
          items={[
            'Technologies and frameworks used across the project.',
            'Architectural principles and constraints.',
            'Naming conventions, security standards, and deployment practices.',
            'Avoid feature-specific details in Foundations.',
          ]}
        />
      </div>

      <div id="fnd-step-3" className="space-y-4 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Step 3: Fill in a Feature Blueprint</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Feature Blueprints are created automatically for each feature extracted from the PRD. Complete each blueprint section using the provided outline.
        </p>
        <BulletList
          items={[
            'Validate synthesized requirements first.',
            'Describe solution design and component interactions.',
            'Define API endpoints and business logic.',
            'Capture UI behavior and states.',
            'Model data entities and relationships.',
            'Use parent overview blueprints to summarize child feature interactions.',
          ]}
        />
      </div>
    </section>

    <section id="fnd-agent-capabilities" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Foundry Agent Capabilities</h2>

      <div id="fnd-edit-suggestions" className="space-y-4 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Edit Suggestions</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The agent proposes structured, reviewable edits as color-coded diffs that users can accept or reject.
        </p>
      </div>

      <div id="fnd-context-awareness" className="space-y-4 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Context Awareness</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The agent uses cross-project context from blueprints, codebase index, artifacts, Refinery requirements, Planner work orders, and linked code changes.
        </p>
      </div>

      <div id="fnd-skills-workflows" className="space-y-4 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Skills and Workflows</h3>
        <BulletList
          items={[
            'Draft and refine blueprint content.',
            'Generate and update Mermaid diagrams.',
            'Review blueprints for gaps, ambiguity, and conflicts.',
            'Answer architectural questions grounded in documentation.',
            'Assist with syncing blueprints to PRDs and code.',
            'Highlight issues with flagged comments.',
            'Guide users through structured decision-making workflows.',
          ]}
        />
      </div>
    </section>

    <section id="fnd-sync" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Synchronizing Blueprints with Code and Requirements</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          Foundry continuously analyzes requirement and codebase changes to detect drift from blueprints.
        </p>
        <p>
          When discrepancies are found, affected blueprints are flagged and surfaced in the agent panel.
        </p>
      </div>
    </section>

    <section id="fnd-alerts-resolution" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Alerts and Resolution</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>Alerts notify you when:</p>
      </div>
      <BulletList
        items={[
          'Code changes may invalidate a blueprint.',
          'PRD updates are not reflected in feature specifications.',
          'Foundation updates conflict with feature implementations.',
          'Shared components should be abstracted into a Foundation.',
        ]}
      />
      <p className="text-lg text-muted-foreground leading-relaxed">
        Engaging with an alert launches a guided workflow where the agent explains issues, suggests updates, and helps restore alignment.
      </p>
    </section>

    <section id="fnd-best-practices" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Best Practices</h2>
      <BulletList
        items={[
          'Treat blueprints as living documents that evolve with the system.',
          'Use Refinery features to scope blueprint sections clearly.',
          'Keep blueprints centered on system behavior and component interactions.',
          'Sync frequently with PRDs and code to avoid drift.',
          'Provide enough detail for confident implementation without over-prescribing specifics.',
        ]}
      />
    </section>

    <section id="fnd-troubleshooting" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Troubleshooting</h2>
      <BulletList
        items={[
          'Agent struggling with long context? Select only relevant sections and restart chat.',
          'Section not updating from codebase? Ask the agent to search code and compare findings against the blueprint.',
        ]}
      />
      <p className="text-lg text-muted-foreground leading-relaxed">
        Ready to turn specs into tasks? Learn about Planner.
      </p>
    </section>
  </motion.div>
);