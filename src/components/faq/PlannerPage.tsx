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

export const PlannerPage: React.FC = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-20">
    <header id="pl-header" className="space-y-6 scroll-mt-32">
      <h1 className="text-5xl font-bold tracking-tight">Planner</h1>
      <p className="text-xl text-muted-foreground leading-relaxed">
        Planner is the project management layer of Software Factory where work orders are created, organized, and executed with traceable context from requirements and blueprints.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        It turns architectural intent into day-to-day tasks teams can ship.
      </p>
    </header>

    <section id="pl-what-are-work-orders" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">What Are Work Orders?</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          Work orders are structured, traceable tasks that move the system toward the target state defined in your PRD and blueprints. Each work order bundles title, status, assignee, timing, full description, upstream context, implementation guidance, and collaboration history.
        </p>
        <p>Every work order brings together:</p>
      </div>
      <BulletList
        items={[
          'Core metadata: ID, title, status, assignees, and phase.',
          'Rich description: purpose, acceptance criteria, and out-of-scope notes.',
          'Knowledge graph connection: links to upstream requirements and blueprints.',
          'Implementation plan (optional): step-by-step, file-level outline for engineering work.',
          'Activity and comments: chronological feed of changes, discussions, and attachments.',
        ]}
      />
      <p className="text-lg text-muted-foreground leading-relaxed">
        Planner keeps execution grounded in Refinery and Foundry so work always traces back to why it exists.
      </p>
    </section>

    <section id="pl-getting-started" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Getting Started</h2>

      <div id="pl-step-1" className="space-y-4 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Step 1: Configure Planner for your project</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Configure planning structure before task execution so extraction, phases, and agent workflows behave consistently.
        </p>
        <BulletList
          items={[
            'Choose a default extraction style, such as feature-slice or specialist-oriented.',
            'Optionally define a custom extraction strategy with explicit Planner Agent instructions.',
            'Use these settings to control future Extract Work Orders from Blueprints operations.',
          ]}
        />
      </div>

      <div id="pl-step-2" className="space-y-4 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Step 2: Create your first set of work orders</h3>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>You can populate Planner in two ways:</p>
          <p>
            Agent-driven extraction from blueprints: use the Planner Agent action Extract Work Orders from Blueprints to generate proposed tasks for review.
          </p>
          <p>
            Manual creation: click the plus control in the outline panel, draft a work order, and rely on local draft caching if you navigate away.
          </p>
          <p>
            Once created, work orders appear in the table view for search, filtering, and opening in the detail panel.
          </p>
        </div>
      </div>

      <div id="pl-step-3" className="space-y-4 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Step 3: Manage phases and sequence work orders</h3>
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Assign tasks to phases, sequence within each phase, and continuously refine plan quality with filters and search.
          </p>
        </div>

        <div id="pl-step-3-1" className="space-y-3 scroll-mt-32">
          <h4 className="text-lg font-bold text-foreground">1. Assign work orders to phases</h4>
          <BulletList
            items={[
              'Use inline Phase dropdown in table view to set or change phase.',
              'Group table by Phase to view collapsible phase ranges.',
              'Use Phase Planning in Planner Agent for bulk phase assignment proposals.',
            ]}
          />
        </div>

        <div id="pl-step-3-2" className="space-y-3 scroll-mt-32">
          <h4 className="text-lg font-bold text-foreground">2. Sequence work with drag and drop</h4>
          <BulletList
            items={[
              'Drag within a phase to resequence priority.',
              'Drag across phase groups to reassign phase and place exact ordering.',
              'Use visual ordering to communicate what comes first, second, and next.',
            ]}
          />
        </div>

        <div id="pl-step-3-3" className="space-y-3 scroll-mt-32">
          <h4 className="text-lg font-bold text-foreground">3. Use filters and search to refine the plan</h4>
          <BulletList
            items={[
              'Filter by assignee, status, phase, deliverable type, or feature.',
              'Use search to locate work orders quickly by title.',
              'Repeat extraction and ordering as a continuous planning loop.',
            ]}
          />
        </div>
      </div>
    </section>

    <section id="pl-mcp" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">MCP Connections (Developer Tool Integration)</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Planner integrates with external development tools through MCP so developers can work with planning context directly in local environments.
      </p>

      <div id="pl-mcp-enables" className="space-y-3 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">What MCP Enables</h3>
        <BulletList
          items={[
            'List work orders assigned to the developer.',
            'Read full work order details and implementation plans.',
            'Update work order status, such as moving to In Review.',
            'Stay aligned with phase and execution order without leaving the editor.',
          ]}
        />
      </div>

      <div id="pl-mcp-connect" className="space-y-3 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Connecting Your Development Environment</h3>
        <BulletList
          items={[
            'Open MCP Connection Setup from Planner table view.',
            'Follow setup instructions for your coding agent.',
            'Use one-click setup when supported, or paste configuration into a .mcp.json file.',
            'Confirm Use This MCP server when prompted.',
            'Connection status updates to Connected once complete.',
          ]}
        />
      </div>

      <div id="pl-mcp-working" className="space-y-3 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Working with Planner via MCP</h3>
        <BulletList
          items={[
            'Query for assigned work orders in Ready state.',
            'Search Software Factory requirements, blueprints, and artifacts for context.',
            'Update work order status as implementation progresses.',
            'Keep Planner accurate in real time without manual web updates.',
          ]}
        />
      </div>
    </section>

    <section id="pl-agent-capabilities" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Planner Agent Capabilities</h2>

      <div id="pl-agent-edit-bulk" className="space-y-3 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Edit suggestions and bulk changes</h3>
        <BulletList
          items={[
            'Create new work orders with proposed titles, descriptions, assignees, status, and phase.',
            'Update existing work orders from natural language instructions.',
            'Apply batch updates across multiple work orders.',
            'Use built-in undo patterns for agent operations when needed.',
          ]}
        />
      </div>

      <div id="pl-agent-refine-plans" className="space-y-3 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Refine implementation plans</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Extend or rewrite implementation plans with Update with AI while keeping guidance aligned to codebase patterns.
        </p>
      </div>

      <div id="pl-agent-context" className="space-y-3 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Context the Planner Agent can retrieve</h3>
        <BulletList
          items={[
            'Requirements from Refinery.',
            'Blueprints from Foundry.',
            'All work orders, including metadata and plans.',
            'Artifacts uploaded in Overview or agent chats.',
            'Codebase patterns and integration points via code search.',
          ]}
        />
        <p className="text-lg text-muted-foreground leading-relaxed">
          This cross-layer context helps align planning intent with implementation reality.
        </p>
      </div>
    </section>

    <section id="pl-sync" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Synchronizing Work Orders</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Planner keeps work orders synchronized with upstream design and downstream implementation.
      </p>

      <div id="pl-sync-blueprints" className="space-y-3 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Keeping work orders aligned with blueprints</h3>
        <BulletList
          items={[
            'Create Work Orders from Blueprints when blueprints are newly completed or substantially updated.',
            'Update Work Orders from Blueprints when existing tasks drift from design intent.',
            'Respond to Planner alerts for Work Orders Need Updates and follow guided updates.',
          ]}
        />
      </div>
    </section>

    <section id="pl-best-practices" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Best Practices</h2>
      <BulletList
        items={[
          'Configure extraction strategy and phase cadence in Project Settings.',
          'Ground each task with requirement and blueprint references.',
          'Use Purpose, Acceptance Criteria, and Out of Scope sections consistently.',
          'Keep implementation plans concise, realistic, and integration-focused.',
          'Use Planner Agent for bulk and mechanical updates.',
          'Review alerts and sync work orders regularly to prevent drift.',
        ]}
      />
    </section>
  </motion.div>
);