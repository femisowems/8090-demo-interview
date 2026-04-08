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

export const RefineryPage: React.FC = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-20">
    <header id="ref-header" className="space-y-6 scroll-mt-32">
      <h1 className="text-5xl font-bold tracking-tight">Refinery</h1>
      <p className="text-xl text-muted-foreground leading-relaxed">
        Refinery is the product requirements layer of Software Factory. It transforms raw ideas, artifacts, and feedback into clear, structured requirements that become the single source of truth for product intent.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Refinery helps teams move from ambiguity to alignment through standardized document structures, collaboration, versioning, and AI-assisted guidance.
      </p>
    </header>

    <section id="ref-why-requirements" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Why Requirements?</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          Fast code is useless without clear direction. Refinery gives teams a collaborative, agent-assisted workspace to define, debate, and refine requirements.
        </p>
        <p>
          Requirements documents define what the product should do and why, without prescribing how it is built. They capture business context, user needs, feature behavior, and technical constraints in a human-readable form.
        </p>
        <p>
          Refinery organizes requirements documentation into three categories:
        </p>
      </div>
      <BulletList
        items={[
          'Product Overview Documents: high-level strategic context shared across the team.',
          'Feature Requirements Documents: individual product capabilities in a clear, testable format; each document represents one feature and aligns with Feature Blueprints in Foundry.',
          'Technical Requirements Documents: cross-cutting constraints across features, such as authentication, security, integrations, and performance.',
        ]}
      />
    </section>

    <section id="ref-getting-started" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Getting Started</h2>

      <div id="ref-step-1" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Step 1: Initialize Requirements
        </h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
          <p>
            When a project is created, Product Overview and Technical Requirements documents are generated with placeholder content. Feature Requirements are created explicitly based on user intent.
          </p>
          <p>
            A Getting Started alert guides users to either reverse-engineer requirements from artifacts and code, or create new requirements from scratch.
          </p>
        </div>
      </div>

      <div id="ref-step-2" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Step 2: Define Product Context
        </h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
          <p>
            If starting new, the Refinery Agent guides users through structured Q and A covering the business problem, current solution, desired outcome, and target users.
          </p>
          <p>
            The agent drafts initial overview documents and proposes an initial feature set.
          </p>
        </div>
      </div>

      <div id="ref-step-3" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Step 3: Create Feature Requirements
        </h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
          <p>
            After establishing product purpose, the Refinery Agent collaborates with users to define the initial set of Feature Requirements Documents.
          </p>
          <p>
            Each document starts with a standard markdown outline, which can be customized in Overview, Settings, and the Refinery page.
          </p>
        </div>
      </div>
    </section>

    <section id="ref-collaboration-versioning" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Collaboration and Versioning</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          Refinery supports shared editing, comments, and mentions for team collaboration. Documents are versioned automatically so users can:
        </p>
      </div>
      <BulletList
        items={[
          'View document history.',
          'Compare versions.',
          'Compare aggregate versions across the entire project.',
        ]}
      />
    </section>

    <section id="ref-agent" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Refinery Agent</h2>

      <div id="ref-agent-drafting" className="space-y-4 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Drafting and Initialization</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The agent analyzes notes, transcripts, designs, images, and codebases to draft structured requirements and propose features.
        </p>
      </div>

      <div id="ref-agent-review" className="space-y-4 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Review and Quality Checks</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The agent reviews for ambiguity, gaps, conflicts, and duplication, then surfaces issues as flagged comments with summaries in the agent panel.
        </p>
      </div>

      <div id="ref-agent-qa" className="space-y-4 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Question Answering</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Users can ask targeted questions and receive concise answers with direct references to source content.
        </p>
      </div>

      <div id="ref-agent-feature-org" className="space-y-4 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Feature Organization</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The agent can suggest creating, splitting, merging, or reorganizing features. Structural changes require user confirmation.
        </p>
      </div>

      <div id="ref-agent-alignment" className="space-y-4 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Alignment with Foundry</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The agent monitors drift between Feature Requirements and Foundry Blueprints and guides users through discrepancy resolution workflows.
        </p>
      </div>
    </section>

    <section id="ref-import-export" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Import and Export</h2>

      <div id="ref-individual-documents" className="space-y-4 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Individual Documents</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Users can import .docx or .md files into a document to create a new version. Documents can be exported to .pdf, .docx, or .md.
        </p>
      </div>

      <div id="ref-aggregate-export" className="space-y-4 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Aggregate Export</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          All requirements can be exported as a single concatenated file from aggregate view, preserving document order and embedded images.
        </p>
      </div>
    </section>

    <section id="ref-best-practices" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Best Practices</h2>
      <BulletList
        items={[
          'Treat requirements as living documents.',
          'Anchor strategy in Product Overview documents.',
          'Keep Feature Requirements precise and implementation-agnostic.',
          'Use the agent early, then refine collaboratively.',
          'Sync regularly with Foundry to avoid drift.',
        ]}
      />
      <p className="text-lg text-muted-foreground leading-relaxed">
        Ready to translate requirements into specs? Learn about Foundry.
      </p>
    </section>
  </motion.div>
);