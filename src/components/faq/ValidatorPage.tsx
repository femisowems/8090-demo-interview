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

export const ValidatorPage: React.FC = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-20">
    <header id="val-header" className="space-y-6 scroll-mt-32">
      <h1 className="text-5xl font-bold tracking-tight">Validator</h1>
      <p className="text-xl text-muted-foreground leading-relaxed">
        Validator closes the loop between users and development by turning user feedback into actionable tasks.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        It keeps your roadmap grounded in real-world issues and opportunities rather than assumptions.
      </p>
    </header>

    <section id="val-what-does" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">What Validator Does</h2>
      <BulletList
        items={[
          'Capture bugs, feature requests, and performance issues in real time.',
          'Enrich feedback with browser, device, session, and code-change context.',
          'Auto-generate GitHub and Jira issues with suggested fixes.',
          'Keep product, support, and engineering teams aligned.',
        ]}
      />
    </section>

    <section id="val-walkthrough" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Watch the Walkthrough</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Learn how to use Validator step by step in a short walkthrough video.
      </p>
    </section>

    <section id="val-how-it-works" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">How It Works</h2>

      <div id="val-input" className="space-y-3 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Input</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          User feedback is collected through a lightweight API integration.
        </p>
      </div>

      <div id="val-process" className="space-y-3 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Process</h3>
        <BulletList
          items={[
            'Collect Feedback: one-line API integration sends reports such as checkout failures on Safari.',
            'Enrich and Categorize: Validator adds technical context and categorizes feedback.',
            'Notify Teams: critical issues trigger Slack alerts and all items appear in Validator Inbox.',
            'Generate Tasks: AI converts feedback into GitHub and Jira issues with suggested fixes.',
          ]}
        />
      </div>

      <div id="val-output" className="space-y-3 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Output</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Actionable development tasks that flow back into Planner and PRDs to create a closed loop.
        </p>
      </div>
    </section>

    <section id="val-example" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Quick Example</h2>
      <BulletList
        items={[
          'A user reports: Checkout button does not work on mobile Safari.',
          'Validator captures feedback with device and browser context.',
          'Slack alert notifies engineering in seconds.',
          'AI generates a GitHub issue with relevant code module links and suggested fixes.',
          'Team resolves the issue and notifies the user the same day.',
        ]}
      />
    </section>

    <section id="val-features" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Features</h2>
      <BulletList
        items={[
          'One-Line API Integration with secure App Keys.',
          'AI-Powered Categorization for bugs, feature requests, and performance issues.',
          'Validator Inbox with real-time filtering, search, and priority scoring.',
          'Slack integration for instant high-priority alerts.',
          'GitHub and Jira integration with code context and suggested fixes.',
          'Enterprise features including role-based access, audit trails, and multi-project support.',
        ]}
      />
    </section>

    <section id="val-troubleshooting" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Troubleshooting</h2>
      <BulletList
        items={[
          'Feedback not in Inbox: verify App Key and endpoint settings.',
          'Slack notifications missing: check SLACK_WEBHOOK_URL configuration.',
          '403 Forbidden: regenerate or verify App Key prefix sf-int-.',
          'Duplicate feedback: enable client-side deduplication or cooldowns.',
        ]}
      />
    </section>

    <section id="val-best-practices" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Best Practices</h2>
      <BulletList
        items={[
          'Store App Keys server-side and never expose them in public code.',
          'Start with basic feedback collection before adding advanced workflows.',
          'Configure notification rules to reduce alert fatigue.',
          'Review feedback patterns regularly to guide roadmap decisions.',
          'Close the loop by informing users when feedback leads to fixes.',
        ]}
      />
    </section>

    <section id="val-glossary" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Glossary</h2>
      <BulletList
        items={[
          'App Key: secure token in the format sf-int-xxxxx used for feedback authentication.',
          'Validator Inbox: dashboard that displays all captured feedback.',
          'Score: AI-generated priority or quality measure applied to feedback.',
          'Tag: metadata label for filtering and analysis, such as severity high.',
          'Ticket: GitHub or Jira issue auto-generated from feedback.',
        ]}
      />
    </section>
  </motion.div>
);