export interface FAQItem {
  id: string;
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  category: string;
  tags: string[];
  isPremium?: boolean;
}

export interface FAQCategory {
  id: string;
  label: string;
  icon: string;
}

export const CATEGORIES: FAQCategory[] = [
  { id: 'core', label: 'Core Concepts', icon: 'zap' },
  { id: 'workflow', label: 'Workflow', icon: 'layout' },
  { id: 'personas', label: 'Personas', icon: 'users' },
  { id: 'technical', label: 'Technical & API', icon: 'code' },
  { id: 'troubleshooting', label: 'Troubleshooting', icon: 'help-circle' },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'what-is-8090',
    category: 'core',
    question: 'What is 8090.ai Software Factory?',
    shortAnswer: '8090.ai is an intelligent automation platform that accelerates software development by 10x.',
    detailedAnswer: 'It combines agentic AI with a deterministic workflow engine. Unlike standard LLMs, 8090.ai understands your unique codebase architecture, business logic, and deployment constraints to generate production-ready code that actually works.',
    tags: ['introduction', 'basics'],
  },
  {
    id: 'how-to-start',
    category: 'workflow',
    question: 'How do I start a new project?',
    shortAnswer: 'Simply use the CLI or the Web Dashboard to initialize your environment.',
    detailedAnswer: '1. Install the CLI: `npm install -g @8090/cli`\n2. Run `8090 init` in your project root.\n3. Follow the wizard to connect your repository and define your first agent tasks.',
    tags: ['setup', 'cli', 'onboarding'],
  },
  {
    id: 'pm-usage',
    category: 'personas',
    question: 'How can Product Managers use 8090.ai?',
    shortAnswer: 'PMs can turn PRDs directly into functional prototypes and track development velocity.',
    detailedAnswer: 'By inputting a PRD or a user story, the AI can generate a technical spec, architectural diagrams, and even a draft implementation for engineers to review, drastically reducing the "blank page" problem.',
    tags: ['pm', 'product', 'collaboration'],
  },
  {
    id: 'security-integrations',
    category: 'technical',
    question: 'How does 8090.ai handle data security?',
    shortAnswer: 'We use SOC-2 compliant infrastructure and offer SOC-A/B compartmentalization.',
    detailedAnswer: 'Your code never leaves your VPC. We use transient execution environments where models are fine-tuned on-the-fly without data retention, ensuring your IP remains strictly yours.',
    tags: ['security', 'enterprise', 'compliance'],
  },
  {
    id: 'troubleshooting-deployment',
    category: 'troubleshooting',
    question: 'Why is my deployment failing with a 502 error?',
    shortAnswer: 'This usually indicates a Gateway Timeout from the underlying runner.',
    detailedAnswer: 'Check your `8090-config.yaml` for memory limits. If your application requires more than 2GB during the build phase, you must specify `resource_tier: pro` in your configuration.',
    tags: ['debug', 'deployment', 'error'],
  },
];

export const COMPARISON_DATA = {
  features: [
    { name: 'Context Window', product: '1M+ Tokens', chatgpt: '128k Tokens', cursor: '32k Tokens' },
    { name: 'Architecture Awareness', product: 'Multi-repo', chatgpt: 'File-based', cursor: 'Dir-based' },
    { name: 'Deployment Integration', product: 'Native (AWS/GCP)', chatgpt: 'None', cursor: 'None' },
    { name: 'Deterministic Logic', product: 'Yes (Agentic)', chatgpt: 'No (Probabilistic)', cursor: 'No' },
  ]
};
