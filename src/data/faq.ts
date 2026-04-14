export interface FAQItem {
  id: string;
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  category: string;
  tags: string[];
  isPremium?: boolean;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface NavGroup {
  id: string;
  label: string;
  items: NavItem[];
}

export const DOCS_NAV: NavGroup[] = [
  {
    id: 'general',
    label: 'General',
    items: [
      { id: 'intros', label: 'Introduction' },
      { id: 'quickstart', label: 'Quickstart' },
    ]
  },
  {
    id: 'opinions',
    label: 'Opinions',
    items: [
      { id: 'requirements-guide', label: 'Requirements Writing Guide' },
      { id: 'blueprint-guide', label: 'Blueprint Writing Guide' },
      { id: 'work-order-guide', label: 'Work Order Writing Guide' },
    ]
  },
  {
    id: 'raw-materials',
    label: 'Raw materials',
    items: [
      { id: 'codebase-connection', label: 'Codebase Connection' },
      { id: 'artifacts', label: 'Artifacts' },
    ]
  },
  {
    id: 'modules',
    label: 'Modules',
    items: [
      { id: 'refinery', label: 'Refinery' },
      { id: 'foundry', label: 'Foundry' },
      { id: 'planner', label: 'Planner' },
      { id: 'validator', label: 'Validator' },
    ]
  },
  {
    id: 'administration',
    label: 'Administration',
    items: [
      { id: 'organization-mgmt', label: 'Organization Management' },
      { id: 'usage-billing', label: 'Usage & Billing' },
    ]
  },
  {
    id: 'resources',
    label: 'Resources',
    items: [
      { id: 'changelog', label: 'Changelog' },
      { id: 'roadmap', label: 'Roadmap' },
    ]
  },
  {
    id: 'community',
    label: 'Support & Community',
    items: []
  }
];

// Flat list for filtering logic backward compatibility
export const CATEGORIES = DOCS_NAV.flatMap(group => 
  group.items.length > 0 ? group.items : [{ id: group.id, label: group.label }]
);

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

export const INTRO_CONTENT = {
  title: "Welcome to Software Factory",
  subtitle: "Software Factory is an AI-native SaaS orchestration platform where PMs, designers, engineers and agents combine into higher quality software.",
  sections: [
    {
      id: "why-built",
      title: "Why We Built Software Factory",
      content: [
        {
          id: "problem",
          type: "h3",
          label: "The Problem",
          text: "Enterprise software development is scarred by fragmented documentation, ad-hoc communication, and reliance on trial knowledge. When a single source of truth is missing, teams work in limited context and risk making the wrong decisions. When key members leave, critical knowledge leaves with them. Over time, these silos compound, limiting quality and organizational scalability."
        },
        {
          id: "solution",
          type: "h3",
          label: "The Solution",
          text: "Software Factory replaces tool sprawl and silos with a centralized, collaborative environment where teams and agents work from a single source of truth to deliver more, higher quality software. At its core is a unified workspace for context engineering that connects requirements, architectural plans, and implementation details into a 'Knowledge Graph' so they evolve together."
        }
      ]
    }
  ]
};

export const QUICKSTART_CONTENT = {
  title: "Quickstart Guide",
  subtitle: "This guide walks you through your first Software Factory workflow, from creating a project to implementing your first work order.",
  steps: [
    {
      id: "step-1",
      title: "Step 1: Create / Join an Organization",
      text: "An Organization is a private workspace where teams collaborate across one or more projects. During the sign-up flow, a new user can create a new organization or join an existing one given an invitation from the organization admin.",
      bullets: [
        "After signing in, click Start New Project and enter a project name",
        "Once created, Software Factory opens the Project Overview dashboard"
      ]
    },
    {
      id: "step-2",
      title: "Step 2: Create Your First Project",
      text: "A Project captures all of the knowledge and documentation that defines the intent of the software and guides users from requirements gathering to software delivery.",
      bullets: [
        "After signing in, click Start New Project and enter a project name",
        "Once created, Software Factory opens the Project Overview dashboard"
      ]
    },
    {
      id: "step-3",
      title: "Step 3 (Optional): Connect Your Repository",
      text: "Connecting a codebase to a project allows Software Factory agents to index and read the code, which facilitates writing of blueprints, work orders and keeping all documentation in sync with the codebase after a release.",
      bullets: [
        "If you have a Github repository with existing code that you would like to bring into Software Factory, navigate to Integrations",
        "Click Install Github App and you’ll be redirected to GitHub to authorize the 8090 Software Factory GitHub App",
        "After authorization, you will be brought back to Software Factory to enter your repository URL and press Authorize",
        "You should see a confirmation that the integration was created successfully and that the indexing is in progress"
      ]
    },
    {
      id: "step-4",
      title: "Step 4 (Optional): Upload Supporting Artifacts",
      text: "Artifacts are external files that give Software Factory agents additional context while generating requirements, blueprints, and work orders.",
      bullets: [
        "If you have supporting documents that provide context for your project, navigate to Artifacts",
        "Upload any artifacts that will help the Software Factory agents to build out your project"
      ]
    },
    {
      id: "step-5",
      title: "Step 5: Define Your Product Requirements in Refinery",
      text: "The Refinery module manages a set of requirements documents that capture the intent of the product. Product Overview documents capture the motivation and executive summary for the product while Feature Requirements documents capture the feature-level requirements.",
      bullets: [
        "Navigate to Refinery using the top-left module selector",
        "Engage with the Getting Started alert in the agent chat panel to collaborate with the agent to fill in the Product Overview documents and begin creating Feature Requirements documents",
        "The agent will ask you if you have an existing project that should be used to initialize the requirements documents or if you would like to start fresh"
      ]
    },
    {
      id: "step-6",
      title: "Step 6: Create Technical Blueprints in Foundry",
      text: "The Foundry module houses a set of Blueprints, which define the core architectural designs and decisions for the implementation of the product. Foundation Blueprints capture the patterns that are shared across all features, while Feature Blueprints capture the feature-specific architectural details.",
      bullets: [
        "Navigate to Foundry using the module selector",
        "To start, select a Foundry template that provides the general scaffolding of your blueprints. This initializes a set of blueprints for Foundations, System Diagrams, and Feature-Specific Blueprints with the outline templates that you've configured.",
        "It is recommended to write out some of the core technology decisions into the Foundation blueprints with decisions such as the desired technology stacks and general patterns that apply across all blueprints.",
        "Next, pick one feature blueprints and work with the Foundry Agent to define the technical specifications for a feature. The Quick Q&A action guides you through key decisions step by step."
      ]
    },
    {
      id: "step-7",
      title: "Step 7: Generate Work Orders in Planner",
      text: "The Planner module coordinates the work required to build the product. Work Orders are created based on the requirements and blueprints created upstream and packed into a context-rich prompt that can be shared with coding agents and developers to execute.",
      bullets: [
        "Navigate to Planner using the module selector",
        "Click Extract Work Orders in the agent chat panel to auto-generate Work Orders from your Blueprints and Requirements",
        "Review the resulting work orders, assign them to yourself and sequence them into phases"
      ]
    },
    {
      id: "step-8",
      title: "Step 8: Connect to a Coding Agent via MCP",
      text: "Planner integrates with local development environments through the Model Context Protocol (MCP). This enables coding agents like Cursor or Claude Code to pull Work Order details and update statuses directly from the IDE. The MCP connection uses an API key that is scoped to a specific project and user.",
      bullets: [
        "In Planner, follow the popup instructions to connect your coding agent to Software Factory via MCP",
        "Tell your coding agent to get the next work order from Software Factory",
        "Monitor the coding agent as it begins to execute your work order",
        "When the agent is done, it will mark the work order as 'In Review' in Planner"
      ]
    }
  ],
  nextSteps: [
    "Complete more work orders for the blueprints that you’ve written",
    "Once you've completed a phase, push your code to the branch that you’ve indexed. The Foundry agent will check for drift between your blueprints and the code and guide you to address discrepancies",
    "Create more features in Refinery, write blueprints for them and extract more work orders",
    "If requirements change, update your PRD and flow the changes downstream through the feature nodes, blueprints and work orders",
    "After you've deployed the first version of your product, consider setting up the feedback collection mechanism in Validator"
  ],
  furtherReading: [
    { title: "Refinery", desc: "Master product definition and UI mocking", id: "refinery" },
    { title: "Foundry", desc: "Learn advanced Blueprint techniques", id: "foundry" },
    { title: "Planner", desc: "Optimize your task management workflow", id: "planner" },
    { title: "Validator", desc: "Set up comprehensive feedback systems", id: "validator" }
  ],
  gettingHelp: [
    { title: "In-Product Feedback", desc: "Use the button in each module" },
    { title: "Join Discord", desc: "Our community of context engineers" },
    { title: "Enterprise Support", desc: "For urgent infrastructure issues" }
  ]
};
