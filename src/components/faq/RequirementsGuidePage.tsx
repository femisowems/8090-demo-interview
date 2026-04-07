import React from 'react';
import { motion } from 'framer-motion';

export const RequirementsGuidePage: React.FC = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-20">

    {/* Header */}
    <header id="rg-header" className="space-y-6 scroll-mt-32">
      <h1 className="text-5xl font-bold tracking-tight">Requirements Writing Guide</h1>
      <p className="text-xl text-muted-foreground leading-relaxed">
        This guide explains how to write Requirements Documents in Software Factory.
      </p>
    </header>

    {/* What Are Requirements? */}
    <section id="rg-what-are-requirements" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">What Are Requirements?</h2>
      <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
        <p>
          Requirements capture the intent for a product. They define what the product must do and why it exists. When requirements are clear and thorough, everyone working on the product shares the same understanding of what they're building and why.
        </p>
        <p>
          Software Factory organizes requirements into two types: <strong className="text-foreground">Product Overview Documents</strong> and <strong className="text-foreground">Feature Requirements Documents</strong>.
        </p>

        <div className="p-6 rounded-2xl bg-muted/30 border border-border/50 space-y-4">
          <p>
            <strong className="text-foreground">Product Overview Documents</strong> capture the high-level <em>why</em> and <em>what</em> for the entire product. The <em>why</em> is the business motivation: the problems being solved, the KPIs not being met, the North Star goals the business is pursuing. The <em>what</em> is the product description: what the product is and how its parts fit together. These documents give anyone—executive, product manager, or engineer—the context they need before looking at specific features.
          </p>
          <p>
            <strong className="text-foreground">Feature Requirements Documents (FRDs)</strong> capture the localized <em>why</em> and <em>what</em> for individual features. The <em>why</em> is the user story: as a user, I need this capability so I can accomplish a specific goal. The <em>what</em> is the acceptance criteria: the specific behaviors the system must exhibit. FRDs are what engineers use to build the product. They can be nested: a parent FRD can contain child FRDs when a feature is large enough to break into sub-features.
          </p>
        </div>
      </div>
    </section>

    {/* Product Overview Documents */}
    <section id="rg-product-overview" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Product Overview Documents</h2>

      <div id="rg-default-overview" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Default Product Overview Documents
        </h3>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Every Software Factory project is initialized with a set of default Product Overview Documents. Users can create additional Product Overview Documents as needed.
        </p>
        <ul className="space-y-3 text-muted-foreground">
          {[
            ['Business Problem', 'The pain points the product addresses and why they matter.'],
            ['Current State', 'The status quo the product improves upon.'],
            ['Personas', 'The users, their goals, and what success looks like for them.'],
            ['Product Description', 'What the product is and how its parts fit together.'],
            ['Success Metrics', 'The key metrics that will be used to measure the success of the product.'],
            ['Technical Requirements', 'The technical constraints and requirements that the product must meet.'],
          ].map(([title, desc]) => (
            <li key={title} className="flex items-start gap-3">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
              <span><strong className="text-foreground">{title}</strong> — {desc}</span>
            </li>
          ))}
        </ul>
      </div>

      <div id="rg-overview-guidance" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Writing Guidance
        </h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
          <p><strong className="text-foreground">Write in plain language.</strong> These documents should be understandable by anyone in the company.</p>
          <p><strong className="text-foreground">Focus on motivation.</strong> A Business Problem document should make the reader feel <em>why</em> this problem matters. A Personas document should make the users feel real.</p>
        </div>
      </div>
    </section>

    {/* Feature Requirements Documents */}
    <section id="rg-feature-requirements" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Feature Requirements Documents</h2>

      <div id="rg-default-frd" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Default Feature Requirements Documents
        </h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
          <p>
            Software Factory projects are not initialized with any default Feature Requirements Documents. Users can use the "Getting Started" tool to work with the agent to create the initial set of features.
          </p>
          <p>
            When a Feature Requirements Document is created, it uses a default template with an opinionated structure. The template is defined in <span className="text-foreground font-medium">Project Settings {'>'} Refinery {'>'} Feature Requirements Template</span>.
          </p>
          <p>Feature Requirements Documents follow a consistent structure with three sections: <strong className="text-foreground">Overview</strong>, <strong className="text-foreground">Terminology</strong>, and <strong className="text-foreground">Requirements</strong>.</p>
        </div>
      </div>

      {/* Overview Section */}
      <div id="rg-overview-section" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Overview Section
        </h3>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Write 1–2 narrative paragraphs explaining what the feature does and why users need it. A stakeholder should understand the feature's purpose in under a minute. Focus on the problem being solved and the value delivered—not mechanisms or implementation.
        </p>
        <div className="p-5 rounded-xl bg-muted/20 border border-border/50 space-y-2">
          <p className="text-xs font-bold text-primary uppercase tracking-wider">Example</p>
          <p className="text-sm text-muted-foreground leading-relaxed italic">
            The Checkout module handles the purchase flow from cart review through payment confirmation. Customers need a clear path from deciding to buy to completing their purchase, with immediate feedback if something goes wrong. This module integrates with the product catalog for pricing and inventory validation, and with the notification system to confirm successful orders.
          </p>
        </div>
      </div>

      {/* Terminology Section */}
      <div id="rg-terminology-section" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Terminology Section
        </h3>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Define terms specific to this feature that might be ambiguous. Use brief, precise definitions. Only include terms directly relevant to understanding this feature.
        </p>
        <div className="p-5 rounded-xl bg-muted/20 border border-border/50 space-y-2">
          <p className="text-xs font-bold text-primary uppercase tracking-wider">Example</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong className="text-foreground">Cart:</strong> The working collection of items a customer intends to purchase.</li>
            <li><strong className="text-foreground">Order:</strong> A finalized purchase record created when checkout completes.</li>
            <li><strong className="text-foreground">Fulfillment Hold:</strong> A temporary block on order processing pending manual review.</li>
          </ul>
        </div>
      </div>

      {/* Requirements Section */}
      <div id="rg-requirements-section" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Requirements Section
        </h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
          <p>Each requirement represents one cohesive capability and must be independently testable. A requirement has three parts:</p>
          <ul className="space-y-3">
            {[
              ['ID and title', 'REQ-[PREFIX]-NNN: Requirement Name — a unique identifier with a short prefix derived from the feature name.'],
              ['User story', 'A single sentence in the format: As a [role], I want to [action], so that I can [outcome].'],
              ['Acceptance criteria', 'One or more criteria using format AC-[PREFIX]-NNN.N. Each criterion begins with "When [condition], the system shall [behavior]."'],
            ].map(([title, desc]) => (
              <li key={title} className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                <span><strong className="text-foreground">{title}:</strong> <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{desc}</code></span>
              </li>
            ))}
          </ul>
          <p>Use <strong className="text-foreground">shall</strong> for mandatory behavior, <strong className="text-foreground">should</strong> for recommended, and <strong className="text-foreground">may</strong> for optional.</p>
        </div>

        {/* Good Example */}
        <div className="p-5 rounded-xl bg-green-500/5 border border-green-500/10 space-y-3">
          <p className="text-xs font-bold text-green-500 uppercase tracking-wider">✓ Good Example</p>
          <div className="text-sm text-muted-foreground space-y-2">
            <p className="font-bold text-foreground">REQ-CHK-003: Payment Confirmation</p>
            <p><em>User Story:</em> As a customer, I want to receive confirmation after my payment is processed, so that I can know my order was placed successfully.</p>
            <p className="font-semibold text-foreground mt-3">Acceptance Criteria:</p>
            <ul className="space-y-1 ml-4">
              <li><strong>AC-CHK-003.1:</strong> When payment processing succeeds, the system shall display a confirmation page with the order number and estimated delivery date.</li>
              <li><strong>AC-CHK-003.2:</strong> When payment processing fails, the system shall return the user to the payment form with an error message describing the failure reason.</li>
              <li><strong>AC-CHK-003.3:</strong> When the user navigates away during processing, the system shall complete the transaction and display the confirmation on their next visit.</li>
            </ul>
          </div>
        </div>

        {/* Bad Example */}
        <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/10 space-y-3">
          <p className="text-xs font-bold text-red-500 uppercase tracking-wider">✗ Bad Example</p>
          <div className="text-sm text-muted-foreground space-y-2">
            <p className="font-bold text-foreground">REQ-CHK-003: Payment Confirmation</p>
            <p><em>User Story:</em> As a user, I want payment to work.</p>
            <p className="font-semibold text-foreground mt-3">Acceptance Criteria:</p>
            <ul className="space-y-1 ml-4">
              <li><strong>AC-CHK-003.1:</strong> The system should show a message.</li>
              <li><strong>AC-CHK-003.2:</strong> Errors should be handled appropriately.</li>
            </ul>
            <p className="text-red-400 mt-2 text-xs">This is bad because the user story has no outcome and uses a generic role. The acceptance criteria are untestable.</p>
          </div>
        </div>

        {/* Requirements Quality */}
        <div className="space-y-3">
          <p className="text-lg text-muted-foreground font-medium">Requirements should be:</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ['User-centered', 'Describe what users need, not how the system is built internally.'],
              ['Testable', 'Every acceptance criterion should be clear enough to write a test for.'],
              ['Atomic', 'Each criterion covers one behavior. Split compound behaviors into separate criteria.'],
            ].map(([title, desc]) => (
              <div key={title} className="p-4 rounded-xl bg-muted/20 border border-border/50">
                <p className="font-bold text-sm text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Sub-Features */}
    <section id="rg-sub-features" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Sub-Features</h2>
      <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
        <p>
          Large features can be broken into sub-features. A parent feature delivers complete value on its own. A child feature extends that value but is not required for the parent to function. <strong className="text-foreground">The parent works without the child; the child is meaningless without the parent.</strong>
        </p>
        <p>
          Example: "Search" finds items by keyword—complete on its own. "Search Filters" adds faceted filtering. Search works without filters; filters need search.
        </p>
      </div>

      <div id="rg-when-to-split" className="space-y-5 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" /> When to Split, Merge, or Nest
        </h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {[
            ['Split', 'into separate features when each passes the feature unit definition independently, or when different roles own different parts.'],
            ['Keep in one feature / Merge', 'when requirements break without each other, they complete one task together, or they\'re describable in one sentence.'],
            ['Create a nested child', 'when the parent already delivers value, the child enhances but is not required, and the child is meaningless without the parent.'],
          ].map(([action, desc]) => (
            <div key={action} className="flex items-start gap-3">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
              <p><strong className="text-foreground">{action}</strong> {desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sub-Feature Example */}
      <div className="p-6 rounded-2xl bg-muted/20 border border-border/50 space-y-4">
        <p className="text-xs font-bold text-primary uppercase tracking-wider">Example: Parent + Sub-Features</p>
        <div className="text-sm text-muted-foreground space-y-3">
          <p><strong className="text-foreground">Parent Feature: User Management</strong></p>
          <p className="leading-relaxed">
            User Management lets administrators create, view, edit, and deactivate user accounts. Admins can reset passwords and manage basic profile information. This core functionality delivers value on its own.
          </p>
          <p className="font-semibold text-foreground">Sub-Features:</p>
          <ul className="space-y-2 ml-4">
            <li><strong>User Roles:</strong> Lets admins assign roles to control what users can access.</li>
            <li><strong>User Groups:</strong> Lets admins organize users into groups for bulk operations.</li>
            <li><strong>User Audit Log:</strong> Tracks changes to user records for compliance reporting.</li>
          </ul>
        </div>
      </div>
    </section>

  </motion.div>
);
