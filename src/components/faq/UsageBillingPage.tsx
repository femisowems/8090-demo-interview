import React from 'react';
import { motion } from 'framer-motion';

type ModelPrice = {
  name: string;
  input: string;
  cacheWrite: string;
  cacheRead: string;
  output: string;
};

const MODEL_PRICING: ModelPrice[] = [
  { name: 'Claude Opus 4.6', input: '$5', cacheWrite: '$6.25', cacheRead: '$0.5', output: '$25' },
  { name: 'Claude Sonnet 4.6', input: '$3', cacheWrite: '$3.75', cacheRead: '$0.30', output: '$15' },
  { name: 'Claude Opus 4.5', input: '$5', cacheWrite: '$6.25', cacheRead: '$0.5', output: '$25' },
  { name: 'Claude Sonnet 4.5', input: '$3', cacheWrite: '$3.75', cacheRead: '$0.30', output: '$15' },
  { name: 'Claude Haiku 4.5', input: '$1', cacheWrite: '$1.25', cacheRead: '$0.1', output: '$5' },
  { name: 'Claude Sonnet 4', input: '$3', cacheWrite: '$3.75', cacheRead: '$0.30', output: '$15' },
  { name: 'Gemini 3.1 Pro', input: '$2', cacheWrite: '-', cacheRead: '$0.2', output: '$12' },
  { name: 'Gemini 3.1 Flash', input: '$0.5', cacheWrite: '-', cacheRead: '$0.05', output: '$3' },
  { name: 'Gemini 3 Pro', input: '$2', cacheWrite: '-', cacheRead: '$0.2', output: '$12' },
  { name: 'Gemini 3 Flash', input: '$0.5', cacheWrite: '-', cacheRead: '$0.05', output: '$3' },
  { name: 'GPT-5.4', input: '$2.50', cacheWrite: '-', cacheRead: '$0.25', output: '$15' },
  { name: 'GPT-5.4 Mini', input: '$0.25', cacheWrite: '-', cacheRead: '$0.025', output: '$2' },
  { name: 'GPT-5.2', input: '$1.75', cacheWrite: '-', cacheRead: '$0.175', output: '$14' },
  { name: 'GPT-5', input: '$1.25', cacheWrite: '-', cacheRead: '$0.125', output: '$10' },
  { name: 'Groq/GPT-OSS-120b', input: '$0.15', cacheWrite: '-', cacheRead: '-', output: '$0.60' },
];

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

export const UsageBillingPage: React.FC = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-20">
    <header id="ub-header" className="space-y-6 scroll-mt-32">
      <h1 className="text-5xl font-bold tracking-tight">Usage and Billing</h1>
      <p className="text-xl text-muted-foreground leading-relaxed">
        The Organization Console includes tools for administrators to track usage and manage billing across the organization.
      </p>
    </header>

    <section id="ub-usage" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Usage</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          The Organization Console Usage page provides live visibility into token consumption and related costs across the organization.
        </p>
        <p>
          Administrators can drill into individual projects for detailed cost information. At project level, usage can be filtered by time range and grouped by User, Model, or Agent.
        </p>
      </div>
    </section>

    <section id="ub-seats-billing" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Managing Seats and Billing</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          Billing controls are available from Organization Console, then Members, then Manage Billing.
        </p>
      </div>
      <BulletList
        items={[
          'View current seat allocation.',
          'Increase or decrease the number of seats assigned to the organization.',
          'Apply seat changes immediately to control member capacity.',
        ]}
      />
    </section>

    <section id="ub-model-pricing" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Model Pricing</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Base token pricing from model providers. Prices are listed per 1 million tokens.
      </p>

      <div className="overflow-x-auto rounded-xl border border-border/50">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/30 text-left">
              <th className="px-4 py-3 font-bold text-foreground">Name</th>
              <th className="px-4 py-3 font-bold text-foreground">Input</th>
              <th className="px-4 py-3 font-bold text-foreground">Cache Write</th>
              <th className="px-4 py-3 font-bold text-foreground">Cache Read</th>
              <th className="px-4 py-3 font-bold text-foreground">Output</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {MODEL_PRICING.map((row) => (
              <tr key={row.name} className="border-t border-border/30">
                <td className="px-4 py-3 text-foreground font-medium">{row.name}</td>
                <td className="px-4 py-3">{row.input}</td>
                <td className="px-4 py-3">{row.cacheWrite}</td>
                <td className="px-4 py-3">{row.cacheRead}</td>
                <td className="px-4 py-3">{row.output}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div id="ub-pricing-references" className="space-y-3 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Pricing References</h3>
        <BulletList
          items={[
            'OpenAI Pricing',
            'Anthropic Pricing',
            'Google Gemini Pricing',
            'Groq Pricing',
          ]}
        />
      </div>
    </section>
  </motion.div>
);