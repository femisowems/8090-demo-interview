import React from 'react';
import { motion } from 'framer-motion';

const CodeBlock: React.FC<{ children: string; lang?: string }> = ({ children, lang }) => (
  <pre className="p-5 rounded-xl bg-[hsl(220,20%,8%)] border border-border/50 overflow-x-auto text-sm leading-relaxed">
    {lang && <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-3 font-bold">{lang}</div>}
    <code className="text-green-400/90 font-mono">{children}</code>
  </pre>
);

const MentionTable: React.FC = () => (
  <div className="overflow-x-auto rounded-xl border border-border/50">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-muted/30 text-left">
          <th className="px-4 py-3 font-bold text-foreground">Syntax</th>
          <th className="px-4 py-3 font-bold text-foreground">What it references</th>
          <th className="px-4 py-3 font-bold text-foreground">Example</th>
          <th className="px-4 py-3 font-bold text-foreground">Defined in Blueprints?</th>
        </tr>
      </thead>
      <tbody className="text-muted-foreground">
        <tr className="border-t border-border/30">
          <td className="px-4 py-3"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">#Name</code></td>
          <td className="px-4 py-3">Components (runtime behavior)</td>
          <td className="px-4 py-3"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">#NotificationDeliveryService</code></td>
          <td className="px-4 py-3">Yes, via component blocks</td>
        </tr>
        <tr className="border-t border-border/30">
          <td className="px-4 py-3"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">`Name`</code></td>
          <td className="px-4 py-3">Elements (data shapes, contracts)</td>
          <td className="px-4 py-3"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">CustomerOrder</code></td>
          <td className="px-4 py-3">Code symbols or model blocks</td>
        </tr>
        <tr className="border-t border-border/30">
          <td className="px-4 py-3"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">@Name</code></td>
          <td className="px-4 py-3">Other system entities/documents</td>
          <td className="px-4 py-3"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">@Checkout Requirements</code></td>
          <td className="px-4 py-3">Platform entities</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export const BlueprintGuidePage: React.FC = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-20">

    {/* Header */}
    <header id="bg-header" className="space-y-6 scroll-mt-32">
      <h1 className="text-5xl font-bold tracking-tight">Blueprint Writing Guide</h1>
      <p className="text-xl text-muted-foreground leading-relaxed">
        This is the canonical specification for writing Blueprints: technical specification documents authored in Software Factory.
      </p>
    </header>

    {/* Introduction to Blueprints */}
    <section id="bg-intro" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Introduction to Blueprints</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          Software Factory defines each product through two sets of complementary documents: <strong className="text-foreground">Requirements</strong> and <strong className="text-foreground">Blueprints</strong>. Requirements capture the externally expected outcomes and constraints through structured user stories and acceptance criteria; Blueprints are the technical specifications that define how the software system operates to satisfy those requirements.
        </p>
        <p>
          In requirements-engineering terms, Requirements describe <em>what must be true</em> from the user and business perspective, while Blueprints describe <em>how the system is structured and behaves</em> to make that true. Together, Requirements and Blueprints form a complete product definition that is testable in both directions.
        </p>
      </div>
    </section>

    {/* Blueprint Categories */}
    <section id="bg-categories" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Blueprint Categories</h2>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Software Factory organizes Blueprints into two categories: <strong className="text-foreground">Foundation Blueprints</strong> (feature-agnostic, system-level) and <strong className="text-foreground">Feature Blueprints</strong> (tied to product requirements).
      </p>

      <div id="bg-foundation" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Foundation Blueprints
        </h3>
        <div className="space-y-4">
          {[
            ['Container Blueprint', 'Describes a single C4 container: a separately deployable or runnable unit in the system such as a web application, API server, database, or background worker. Documents the container\'s technology stack, runtime characteristics, cross-cutting concerns, and boundaries. Container Blueprints are infrastructure-focused and feature-agnostic.'],
            ['Component Blueprint', 'Describes a reusable system capability composed of multiple C4 components. It is the prose equivalent of a C4 component diagram: structured component blocks are the nodes, paragraphs between them are the relationship edges. Component Blueprints are feature-agnostic and commonly span multiple C4 containers.'],
          ].map(([title, desc]) => (
            <div key={title} className="p-5 rounded-xl bg-muted/20 border border-border/50">
              <p className="font-bold text-foreground mb-2">{title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="bg-feature" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Feature Blueprints
        </h3>
        <div className="p-5 rounded-xl bg-muted/20 border border-border/50">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Describes how capabilities from Component Blueprints come together, plus any feature-specific components, to satisfy a set of product Requirements. Each Feature Blueprint corresponds to a Feature Requirements Document (FRD) and is its technical counterpart: Requirements say <em>what</em>; the Feature Blueprint says <em>how</em>. Feature Blueprints are <strong className="text-foreground">composition-first</strong>: they wire shared capabilities together, configure them for the feature, and document feature-only glue.
          </p>
        </div>
      </div>
    </section>

    {/* Core Syntax and Semantics */}
    <section id="bg-syntax" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Core Syntax and Semantics</h2>

      <div id="bg-component-blocks" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Component Blocks
        </h3>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Components are defined in structured code blocks that act as the nodes of the architecture:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-3"><div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" /><span><strong className="text-foreground">name:</strong> PascalCase, matches the component's code identity.</span></li>
          <li className="flex items-start gap-3"><div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" /><span><strong className="text-foreground">container:</strong> C4 container(s) as documented in a Container Blueprint.</span></li>
          <li className="flex items-start gap-3"><div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" /><span><strong className="text-foreground">responsibilities:</strong> Tab-indented bullet list of what this component does.</span></li>
        </ul>
        <CodeBlock lang="component">{`name: NotificationDeliveryService
container: API Server
responsibilities:
  - Selecting delivery channels based on \`NotificationPreference\`
  - Rendering channel-specific payloads from \`NotificationTemplate\`
  - Dispatching messages through provider adapters with retry guards`}</CodeBlock>
      </div>

      <div id="bg-model-blocks" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Model Blocks
        </h3>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Use a model block when a Blueprint needs an explicit, canonical data/domain model that is central to implementation but is not a runtime component.
        </p>
        <CodeBlock lang="model">{`name: CustomerOrder
store: Postgres
description: Canonical persisted order model.
fields:
  - id: UUID (required)
  - order_number: string (required)
  - customer_account_id: UUID (required)
  - status: Draft | Placed | Packed | Shipped | Delivered | Cancelled
  - total_amount: decimal (required)
  - placed_at: datetime (nullable)
constraints:
  - unique \`order_number\`
  - \`total_amount\` is non-negative
  - \`placed_at\` is present when \`status\` is not \`Draft\``}</CodeBlock>
      </div>

      <div id="bg-mentions" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Mentions
        </h3>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Blueprints use three mention types to create navigable links:
        </p>
        <MentionTable />
        <div className="p-5 rounded-xl bg-muted/20 border border-border/50 space-y-2 mt-4">
          <p className="text-xs font-bold text-primary uppercase tracking-wider">Quick Rule</p>
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Does work</strong> (processes, orchestrates, renders, fetches) → <code className="text-xs bg-muted px-1 py-0.5 rounded">#Component</code>. <strong className="text-foreground">Describes shape</strong> (schema, type, config, enum) → <code className="text-xs bg-muted px-1 py-0.5 rounded">`Element`</code>. <strong className="text-foreground">Document or artifact</strong> → <code className="text-xs bg-muted px-1 py-0.5 rounded">@SystemEntity</code>.
          </p>
        </div>
      </div>
    </section>

    {/* Blueprint Type Guidance */}
    <section id="bg-container-guidance" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Container Blueprint Guidance</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          A Container Blueprint is the technical specification for a C4 container: a separately deployable or runnable unit in the system. It documents the container's technology choices, runtime environment, cross-cutting infrastructure, and the boundaries it presents.
        </p>
        <p>
          <strong className="text-foreground">Create a Container Blueprint when:</strong> you're establishing or documenting a deployable unit — a web application, API server, task worker, data layer, or CI/CD pipeline. Especially valuable when the container has cross-cutting concerns like authentication, middleware, error handling, or observability.
        </p>
      </div>
    </section>

    <section id="bg-component-guidance" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Component Blueprint Guidance</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          A Component Blueprint is the technical documentation of a reusable system capability. It is feature-agnostic and may span multiple C4 containers.
        </p>
        <p><strong className="text-foreground">Create a Component Blueprint when:</strong> you're building a shared technical system that two or more features depend on; you're abstracting a reusable capability; the system has enough internal structure to warrant its own document.</p>
        <p><strong className="text-foreground">Don't create one for:</strong> a single utility or helper with no internal structure; feature-specific logic that only makes sense in one context; or infrastructure already well-documented elsewhere.</p>
      </div>

      <div id="bg-component-structure" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Structure
        </h3>
        <ol className="space-y-4 text-muted-foreground">
          {[
            ['Title and capability summary', 'Explain what the capability does in 2–3 sentences and name key elements.'],
            ['Core components (grouped logically)', 'Define component blocks in logical groups (e.g., ingestion, orchestration, persistence, presentation).'],
            ['Relationship paragraphs as edges', 'Treat component blocks as nodes and prose paragraphs as edges describing direction and data flow.'],
            ['System Contracts', 'Capture guarantees and boundary interfaces: Key Contracts and Integration Contracts.'],
            ['Architecture Decision Records', 'Non-obvious design choices using ADR-NNN format with Context, Decision, Consequences.'],
          ].map(([title, desc], i) => (
            <li key={title} className="flex items-start gap-4">
              <div className="h-7 w-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">{i + 1}</div>
              <div><strong className="text-foreground">{title}</strong> — {desc}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section id="bg-feature-guidance" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Feature Blueprint Guidance</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          A Feature Blueprint describes how Component Blueprints compose — plus any feature-specific components — to satisfy product Requirements. It is <strong className="text-foreground">composition-first</strong>: shared capabilities do the heavy lifting.
        </p>
        <p><strong className="text-foreground">Create a Feature Blueprint when:</strong> a product manager has defined a feature with structured Requirements; the feature composes one or more Component Blueprints; you need to document how those capabilities are configured and wired for this feature.</p>
      </div>

      <div id="bg-feature-structure" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Structure
        </h3>
        <ol className="space-y-4 text-muted-foreground">
          {[
            ['Title and feature summary', 'A 2–3 sentence user-centered summary referencing the corresponding Requirements Document.'],
            ['Component Blueprint composition', 'Document which shared capabilities this feature composes and how each is configured or scoped.'],
            ['Feature-specific components', 'Components that exist only for this feature; give these full component blocks.'],
            ['System Contracts', 'Feature-specific guarantees, invariants, and integration contracts.'],
            ['Architecture Decision Records', 'Feature-specific ADRs with Context, Decision, Consequences.'],
          ].map(([title, desc], i) => (
            <li key={title} className="flex items-start gap-4">
              <div className="h-7 w-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">{i + 1}</div>
              <div><strong className="text-foreground">{title}</strong> — {desc}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* Blueprint Principles */}
    <section id="bg-principles" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Blueprint Principles</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          ['Code-grounded', 'Components map to runtime components; elements map to concrete schemas, types, models, and contracts.'],
          ['Composition-first', 'Container → Component → Feature Blueprints compose capabilities and add feature-specific components only where needed.'],
          ['Structured and narrative', 'Structured blocks provide anchor points; prose paragraphs explain interactions, direction, and intent.'],
          ['Implementable', 'A Feature Blueprint should provide enough architectural clarity for implementation without material ambiguity.'],
          ['Markdown-native', 'Blueprints are markdown documents with lightweight structured conventions.'],
          ['Living artifacts', 'Blueprints evolve with the system as architecture and requirements change.'],
        ].map(([title, desc]) => (
          <div key={title} className="p-5 rounded-xl bg-muted/20 border border-border/50">
            <p className="font-bold text-foreground text-sm">{title}</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Authoring Checklist */}
    <section id="bg-checklist" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Authoring Checklist</h2>
      <div className="grid gap-3">
        {[
          'Choose Blueprint type and category — Container (Foundation), Component (Foundation), or Feature.',
          'Follow baseline sections for the chosen Blueprint type.',
          'Declare components and models using structured code blocks.',
          'Use mention syntax correctly — #... for components, `...` for elements, @... for system entities.',
          'Write composition/relationship paragraphs — name components, state direction, explain why.',
          'Write System Contracts — Key Contracts for invariants, Integration Contracts for APIs and events.',
          'Document Architecture Decision Records — ADR-NNN format with Context, Decision, Consequences.',
          'Confirm requirement alignment (Feature Blueprints) — ensure each major requirement has a clear technical path.',
        ].map((item, i) => (
          <div key={i} className="p-4 rounded-xl bg-muted/20 border border-border/50 flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">{i + 1}</div>
            <span className="text-sm text-muted-foreground">{item}</span>
          </div>
        ))}
      </div>
    </section>

  </motion.div>
);
