import React from 'react';
import { motion } from 'framer-motion';

const SectionList: React.FC<{ items: Array<[string, string]> }> = ({ items }) => (
  <ul className="space-y-3 text-muted-foreground">
    {items.map(([title, desc]) => (
      <li key={title} className="flex items-start gap-3 leading-relaxed">
        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
        <span>
          <strong className="text-foreground">{title}</strong> - {desc}
        </span>
      </li>
    ))}
  </ul>
);

const CodeBlock: React.FC<{ children: string; lang?: string }> = ({ children, lang }) => (
  <pre className="p-5 rounded-xl bg-[hsl(220,20%,8%)] border border-border/50 overflow-x-auto text-sm leading-relaxed">
    {lang && <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-3 font-bold">{lang}</div>}
    <code className="text-green-400/90 font-mono">{children}</code>
  </pre>
);

const E2E_SPEC_EXAMPLE = [
  '### COV_{PREFIX}_{NNN}: {Requirement Group Name}',
  '',
  '**File:** `e2e-validator/tests/{module}/{area}/{spec-file-name}.spec.ts`',
  '',
  '**Tags:** {Tag(s) from coverage taxonomy} | **Priority:** {P0/P1/P2}',
  '',
  '**@COV_{PREFIX}_{NNN}.1 - should {description matching the AC}**',
  '',
  '1. Sign in and navigate to {module}',
  '',
  '2. {User action - e.g., open a work order from the table}',
  '',
  '3. Assert {expected visible result}',
  '',
  '4. {Next action}',
  '',
  '5. Assert {state change or persistence}',
  '',
  '**@COV_{PREFIX}_{NNN}.2 - should {next AC description}**',
  '',
  '1. ...',
].join('\n');

export const WorkOrderGuidePage: React.FC = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-20">
    <header id="wo-header" className="space-y-6 scroll-mt-32">
      <h1 className="text-5xl font-bold tracking-tight">Work Order Writing Guide</h1>
      <p className="text-xl text-muted-foreground leading-relaxed">
        This guide explains how to write Work Orders in Software Factory.
      </p>
    </header>

    <section id="wo-what-are-work-orders" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">What Are Work Orders?</h2>
      <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
        <p>
          Work orders are implementation tasks that deliver requirements while adhering to the blueprint specifications. Each work order tells a developer what to build, what specifications to follow, and how to verify the work is complete.
        </p>
        <p>
          A well-written work order eliminates ambiguity and prevents scope drift so developers can execute without asking clarifying questions.
        </p>
      </div>
    </section>

    <section id="wo-writing-descriptions" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Writing Work Order Descriptions</h2>
      <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
        <p>
          A work order description gives a developer everything required to implement the feature without ambiguity or scope drift. It should be precise, implementation-oriented, and free of unnecessary explanation.
        </p>
        <p>
          Every description must include six sections: Summary, In Scope, Out of Scope, Requirements, Blueprints, and E2E Acceptance Tests.
        </p>
      </div>

      <div id="wo-summary" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Summary
        </h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
          <p>
            Clearly answer: &quot;What is being built or changed?&quot; State the outcome this work order enables. Focus on value and system impact, not background explanation. Keep it to 2-3 sentences maximum.
          </p>
        </div>
      </div>

      <div id="wo-in-scope" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> In Scope
        </h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
          <p>
            Explicitly list the responsibilities owned by this work order. Define functional boundaries. Do not restate acceptance criteria verbatim, and avoid low-level implementation steps.
          </p>
          <p>
            The goal is to make clear what this work order owns.
          </p>
        </div>
      </div>

      <div id="wo-out-of-scope" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Out of Scope
        </h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
          <p>
            Explicitly list what is excluded or deferred. Clarify boundaries with adjacent work orders. This section prevents scope creep by making exclusions explicit.
          </p>
        </div>
      </div>

      <div id="wo-requirements" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Requirements
        </h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
          <p>
            Copy the requirements and acceptance criteria verbatim from the requirements document. Include every requirement and every acceptance criterion that falls within this work order&apos;s scope. Use identical formatting and IDs.
          </p>
          <p>
            Do not modify wording. If only a subset applies, include only the applicable acceptance criteria. Do not add interpretation or commentary.
          </p>
        </div>
      </div>

      <div id="wo-blueprints" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Blueprints
        </h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
          <p>
            Name the source blueprint(s) that inform implementation. Keep this minimal - the implementer will read the full blueprints directly.
          </p>
          <SectionList
            items={[
              ['{Component Blueprint Name}', '{one-line summary of what it covers}'],
              ['{Another Component Blueprint Name}', '{one-line summary}'],
            ]}
          />
        </div>
      </div>

      <div id="wo-e2e-acceptance-tests" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> E2E Acceptance Tests
        </h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
          <p>
            Describe the end-to-end test coverage that validates the acceptance criteria. These should be written as structured test specifications that follow the e2e-validator conventions - organized by coverage requirement groups (COV_ IDs that map to REQ- IDs) with individual test cases per acceptance criterion.
          </p>
          <p>
            Coverage map reference: <code className="text-xs bg-muted px-1.5 py-0.5 rounded">e2e-validator/docs/COVERAGE.md</code> defines the mapping between REQ/AC IDs and COV/@COV IDs, plus tag taxonomy and priority rules.
          </p>
        </div>

        <CodeBlock lang="spec">
{E2E_SPEC_EXAMPLE}
        </CodeBlock>
      </div>
    </section>
  </motion.div>
);