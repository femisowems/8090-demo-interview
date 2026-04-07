import React from 'react';
import { Check, X, ArrowRight, Zap } from 'lucide-react';

interface FeatureRow {
  name: string;
  product: string;
  chatgpt: string;
  cursor: string;
}

interface ComparisonBlockProps {
  data: FeatureRow[];
}

export const ComparisonBlock: React.FC<ComparisonBlockProps> = ({ data }) => {
  return (
    <div className="my-20 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">How we compare</h2>
      <div className="overflow-x-auto rounded-2xl border border-border bg-muted/20 backdrop-blur-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">Feature</th>
              <th className="px-6 py-4 text-sm font-semibold text-primary">8090.ai</th>
              <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">ChatGPT</th>
              <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">Cursor</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {data.map((row) => (
              <tr key={row.name} className="hover:bg-muted/30 transition-colors">
                <td className="px-6 py-4 text-sm font-medium">{row.name}</td>
                <td className="px-6 py-4 text-sm text-primary font-bold">{row.product}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{row.chatgpt}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{row.cursor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const DecisionHelper: React.FC = () => {
  return (
    <div className="my-20 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 sticky top-20">
      <div className="p-8 rounded-3xl bg-green-500/10 border border-green-500/20">
        <h3 className="text-xl font-bold text-green-400 flex items-center gap-2 mb-4">
          <Check className="h-6 w-6" /> Use 8090.ai if...
        </h3>
        <ul className="space-y-4 text-muted-foreground text-sm">
          <li className="flex items-start gap-3">
            <Zap className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span>You need deep architectural awareness across a distributed monorepo.</span>
          </li>
          <li className="flex items-start gap-3">
            <Zap className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span>Your team requires SOC-2 compliant, zero-retention data policies.</span>
          </li>
          <li className="flex items-start gap-3">
            <Zap className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span>You are building complex, multi-step agentic workflows that must be deterministic.</span>
          </li>
        </ul>
        <button className="mt-8 flex items-center gap-2 px-6 py-2 bg-green-500 text-black font-semibold rounded-xl hover:bg-green-400 transition-colors group">
          Get Started <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="p-8 rounded-3xl bg-red-500/10 border border-red-500/20">
        <h3 className="text-xl font-bold text-red-400 flex items-center gap-2 mb-4">
          <X className="h-6 w-6" /> Don't use if...
        </h3>
        <ul className="space-y-4 text-muted-foreground text-sm">
          <li className="flex items-start gap-3">
            <X className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
            <span>You only need basic generic copy generation or email drafting.</span>
          </li>
          <li className="flex items-start gap-3">
            <X className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
            <span>Your project consists entirely of isolated, single-file scripts.</span>
          </li>
          <li className="flex items-start gap-3">
            <X className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
            <span>You prefer standard manual coding without AI agent augmentation.</span>
          </li>
        </ul>
        <button className="mt-8 flex items-center gap-2 px-6 py-2 border border-border text-muted-foreground rounded-xl hover:bg-muted transition-colors">
          Explore Alternatives
        </button>
      </div>
    </div>
  );
};
