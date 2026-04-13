import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { SearchBar } from './components/faq/SearchBar';
import { AccordionItem } from './components/faq/AccordionItem';
import { DOCS_NAV, FAQ_DATA, QUICKSTART_CONTENT } from './data/faq';
import { useTheme } from './hooks/useTheme';
import { useKeyboardShortcut } from './hooks/useKeyboardShortcut';
import { Toast } from './components/Toast';
import { BackToTop } from './components/BackToTop';
import { TerminalMock } from './components/faq/TerminalMock';
import { IntroductionPage } from './components/faq/IntroductionPage';
import { RequirementsGuidePage } from './components/faq/RequirementsGuidePage';
import { BlueprintGuidePage } from './components/faq/BlueprintGuidePage';
import { WorkOrderGuidePage } from './components/faq/WorkOrderGuidePage';
import { CodebaseConnectionPage } from './components/faq/CodebaseConnectionPage';
import { ArtifactsPage } from './components/faq/ArtifactsPage';
import { RefineryPage } from './components/faq/RefineryPage';
import { FoundryPage } from './components/faq/FoundryPage';
import { PlannerPage } from './components/faq/PlannerPage';
import { OrganizationManagementPage } from './components/faq/OrganizationManagementPage';
import { UsageBillingPage } from './components/faq/UsageBillingPage';
import { ChangelogPage } from './components/faq/ChangelogPage';
import { RoadmapPage } from './components/faq/RoadmapPage';
import { SupportCommunityPage } from './components/faq/SupportCommunityPage';
import { ValidatorPage } from './components/faq/ValidatorPage';
import { ComingSoonPage } from './components/faq/ComingSoonPage';
import { DocsHomePage } from './components/faq/DocsHomePage';
import { PageNavigation } from './components/faq/PageNavigation';
import { AITools } from './components/faq/AITools';
import { CommandPalette } from './components/faq/CommandPalette';
import { Footer } from './components/faq/Footer';
import { TableOfContents, type TOCHeading } from './components/faq/TableOfContents';
import { 
  Zap, 
  ChevronRight, 
  Sparkles,
  Bot,
  Search,
  Command,
  ArrowRight,
  Moon,
  Sun,
  ShieldCheck
} from 'lucide-react';

const CONTENT_PAGES = ['home', 'intro', 'quickstart', 'requirements-guide', 'blueprint-guide', 'work-order-guide', 'codebase-connection', 'artifacts', 'refinery', 'foundry', 'planner', 'validator', 'organization-mgmt', 'usage-billing', 'changelog', 'roadmap', 'community'];

interface FAQPageProps {
  onGoHome?: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onGoHome }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('home');
  const [openId, setOpenId] = useState<string | null>(null);
  const [aiTyping, setAiTyping] = useState(false);
  const [activeHeadingId, setActiveHeadingId] = useState<string | null>(null);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tocMobileOpen, setTocMobileOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  // ⌘K listener - properly cleaned up with useCallback to prevent memory leaks
  useKeyboardShortcut(
    useCallback(() => {
      setCommandPaletteOpen(prev => !prev);
    }, []),
    'k'
  );

  // Scroll Transforms
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  
  const headerBlur = useTransform(scrollY, [0, 80], [0, 12]);
  const headerPadding = useTransform(scrollY, [0, 80], ["12px", "6px"]);
  const logoScale = useTransform(scrollY, [0, 80], [1, 0.92]);
  const subTitleOpacity = useTransform(scrollY, [0, 60], [1, 0]);
  const navBorderOpacity = useTransform(scrollY, [0, 80], [0.05, 0.15]);

  // Show back-to-top button when scrolled down
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v: number) => {
      setShowBackToTop(v > 300);
    });
    return unsubscribe;
  }, [scrollY]);

  // Scroll to top smoothly
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // Filter logic
  const filteredFAQs = useMemo(() => {
    let results = FAQ_DATA;
    if (searchQuery) {
      results = results.filter(item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    } else {
      results = results.filter(item => item.category === activeCategory);
    }
    return results;
  }, [searchQuery, activeCategory]);

  // Derived Values
  const breadcrumbs = useMemo(() => {
    for (const group of DOCS_NAV) {
      if (group.id === activeCategory) return [group.label];
      const item = group.items.find(i => i.id === activeCategory);
      if (item) return [group.label, item.label];
    }
    return [];
  }, [activeCategory]);

  const tocHeadings = useMemo(() => {
    if (searchQuery) return [];
    
    if (activeCategory === 'intro') {
      return [
        { id: 'intro-header', text: 'Welcome to Software Factory', level: 2 },
        { id: 'why-built', text: 'Why We Built Software Factory', level: 2 },
        { id: 'the-problem', text: 'The Problem', level: 3 },
        { id: 'the-solution', text: 'The Solution', level: 3 },
        { id: 'getting-started', text: 'Getting Started', level: 2 },
        { id: 'core-modules', text: 'Core Modules', level: 2 },
        { id: 'support-community', text: 'Support & Community', level: 2 },
      ] as TOCHeading[];
    }

    if (activeCategory === 'quickstart') {
      const h: TOCHeading[] = [{ id: 'qs-header', text: QUICKSTART_CONTENT.title, level: 2 }];
      QUICKSTART_CONTENT.steps.forEach(s => h.push({ id: s.id, text: s.title, level: 2 }));
      h.push({ id: 'qs-next-steps', text: 'Next Steps', level: 2 });
      return h;
    }

    if (activeCategory === 'requirements-guide') {
      return [
        { id: 'rg-header', text: 'Requirements Writing Guide', level: 2 },
        { id: 'rg-what-are-requirements', text: 'What Are Requirements?', level: 2 },
        { id: 'rg-product-overview', text: 'Product Overview Documents', level: 2 },
        { id: 'rg-feature-requirements', text: 'Feature Requirements Documents', level: 2 },
        { id: 'rg-sub-features', text: 'Sub-Features', level: 2 },
      ] as TOCHeading[];
    }

    if (activeCategory === 'blueprint-guide') {
      return [
        { id: 'bg-header', text: 'Blueprint Writing Guide', level: 2 },
        { id: 'bg-intro', text: 'Introduction to Blueprints', level: 2 },
        { id: 'bg-categories', text: 'Blueprint Categories', level: 2 },
        { id: 'bg-syntax', text: 'Core Syntax and Semantics', level: 2 },
        { id: 'bg-container-guidance', text: 'Container Blueprint Guidance', level: 2 },
        { id: 'bg-component-guidance', text: 'Component Blueprint Guidance', level: 2 },
        { id: 'bg-feature-guidance', text: 'Feature Blueprint Guidance', level: 2 },
        { id: 'bg-principles', text: 'Blueprint Principles', level: 2 },
        { id: 'bg-checklist', text: 'Authoring Checklist', level: 2 },
      ] as TOCHeading[];
    }

    if (activeCategory === 'work-order-guide') {
      return [
        { id: 'wo-header', text: 'Work Order Writing Guide', level: 2 },
        { id: 'wo-what-are-work-orders', text: 'What Are Work Orders?', level: 2 },
        { id: 'wo-writing-descriptions', text: 'Writing Work Order Descriptions', level: 2 },
        { id: 'wo-summary', text: 'Summary', level: 3 },
        { id: 'wo-in-scope', text: 'In Scope', level: 3 },
        { id: 'wo-out-of-scope', text: 'Out of Scope', level: 3 },
        { id: 'wo-requirements', text: 'Requirements', level: 3 },
        { id: 'wo-blueprints', text: 'Blueprints', level: 3 },
        { id: 'wo-e2e-acceptance-tests', text: 'E2E Acceptance Tests', level: 3 },
      ] as TOCHeading[];
    }

    if (activeCategory === 'codebase-connection') {
      return [
        { id: 'cc-header', text: 'Connecting a Codebase', level: 2 },
        { id: 'cc-why-connect', text: 'Why Connect a Codebase?', level: 2 },
        { id: 'cc-github-app-installation', text: 'GitHub App Installation', level: 2 },
        { id: 'cc-provide-repository-url', text: 'Provide the Repository URL', level: 2 },
        { id: 'cc-indexing', text: 'Codebase Indexing', level: 2 },
        { id: 'cc-automatic-reindexing', text: 'Automatic Reindexing', level: 2 },
        { id: 'cc-removing-connection', text: 'Removing a Codebase Connection', level: 2 },
        { id: 'cc-best-practice', text: 'Best Practice', level: 2 },
      ] as TOCHeading[];
    }

    if (activeCategory === 'artifacts') {
      return [
        { id: 'art-header', text: 'Artifacts', level: 2 },
        { id: 'art-overview', text: 'Overview', level: 2 },
        { id: 'art-supported-files', text: 'Supported Files', level: 2 },
        { id: 'art-uploading', text: 'Uploading Artifacts', level: 2 },
        { id: 'art-agent-context', text: 'Adding Artifacts to Agent Context', level: 2 },
        { id: 'art-citing', text: 'Citing Artifacts in Documentation', level: 2 },
        { id: 'art-best-practices', text: 'Best Practices', level: 2 },
      ] as TOCHeading[];
    }

    if (activeCategory === 'refinery') {
      return [
        { id: 'ref-header', text: 'Refinery', level: 2 },
        { id: 'ref-why-requirements', text: 'Why Requirements?', level: 2 },
        { id: 'ref-getting-started', text: 'Getting Started', level: 2 },
        { id: 'ref-step-1', text: 'Step 1: Initialize Requirements', level: 3 },
        { id: 'ref-step-2', text: 'Step 2: Define Product Context', level: 3 },
        { id: 'ref-step-3', text: 'Step 3: Create Feature Requirements', level: 3 },
        { id: 'ref-collaboration-versioning', text: 'Collaboration and Versioning', level: 2 },
        { id: 'ref-agent', text: 'Refinery Agent', level: 2 },
        { id: 'ref-agent-drafting', text: 'Drafting and Initialization', level: 3 },
        { id: 'ref-agent-review', text: 'Review and Quality Checks', level: 3 },
        { id: 'ref-agent-qa', text: 'Question Answering', level: 3 },
        { id: 'ref-agent-feature-org', text: 'Feature Organization', level: 3 },
        { id: 'ref-agent-alignment', text: 'Alignment with Foundry', level: 3 },
        { id: 'ref-import-export', text: 'Import and Export', level: 2 },
        { id: 'ref-individual-documents', text: 'Individual Documents', level: 3 },
        { id: 'ref-aggregate-export', text: 'Aggregate Export', level: 3 },
        { id: 'ref-best-practices', text: 'Best Practices', level: 2 },
      ] as TOCHeading[];
    }

    if (activeCategory === 'foundry') {
      return [
        { id: 'fnd-header', text: 'Foundry', level: 2 },
        { id: 'fnd-what-are-blueprints', text: 'What Are Blueprints?', level: 2 },
        { id: 'fnd-blueprint-types', text: 'Blueprint Types', level: 2 },
        { id: 'fnd-foundations', text: 'Foundations', level: 3 },
        { id: 'fnd-system-diagrams', text: 'System Diagrams', level: 3 },
        { id: 'fnd-feature-blueprints', text: 'Feature Blueprints', level: 3 },
        { id: 'fnd-getting-started', text: 'Getting Started', level: 2 },
        { id: 'fnd-step-1', text: 'Step 1: Configure your Foundry template', level: 3 },
        { id: 'fnd-step-2', text: 'Step 2: Fill in Foundation Blueprints', level: 3 },
        { id: 'fnd-step-3', text: 'Step 3: Fill in a Feature Blueprint', level: 3 },
        { id: 'fnd-agent-capabilities', text: 'Foundry Agent Capabilities', level: 2 },
        { id: 'fnd-edit-suggestions', text: 'Edit Suggestions', level: 3 },
        { id: 'fnd-context-awareness', text: 'Context Awareness', level: 3 },
        { id: 'fnd-skills-workflows', text: 'Skills and Workflows', level: 3 },
        { id: 'fnd-sync', text: 'Synchronizing Blueprints with Code and Requirements', level: 2 },
        { id: 'fnd-alerts-resolution', text: 'Alerts and Resolution', level: 2 },
        { id: 'fnd-best-practices', text: 'Best Practices', level: 2 },
        { id: 'fnd-troubleshooting', text: 'Troubleshooting', level: 2 },
      ] as TOCHeading[];
    }

    if (activeCategory === 'planner') {
      return [
        { id: 'pl-header', text: 'Planner', level: 2 },
        { id: 'pl-what-are-work-orders', text: 'What Are Work Orders?', level: 2 },
        { id: 'pl-getting-started', text: 'Getting Started', level: 2 },
        { id: 'pl-step-1', text: 'Step 1: Configure Planner', level: 3 },
        { id: 'pl-step-2', text: 'Step 2: Create work orders', level: 3 },
        { id: 'pl-step-3', text: 'Step 3: Manage phases and sequence', level: 3 },
        { id: 'pl-step-3-1', text: 'Assign to phases', level: 3 },
        { id: 'pl-step-3-2', text: 'Drag and drop sequencing', level: 3 },
        { id: 'pl-step-3-3', text: 'Filters and search', level: 3 },
        { id: 'pl-mcp', text: 'MCP Connections', level: 2 },
        { id: 'pl-mcp-enables', text: 'What MCP Enables', level: 3 },
        { id: 'pl-mcp-connect', text: 'Connecting environment', level: 3 },
        { id: 'pl-mcp-working', text: 'Working via MCP', level: 3 },
        { id: 'pl-agent-capabilities', text: 'Planner Agent Capabilities', level: 2 },
        { id: 'pl-agent-edit-bulk', text: 'Edit and bulk changes', level: 3 },
        { id: 'pl-agent-refine-plans', text: 'Refine implementation plans', level: 3 },
        { id: 'pl-agent-context', text: 'Agent context', level: 3 },
        { id: 'pl-sync', text: 'Synchronizing Work Orders', level: 2 },
        { id: 'pl-sync-blueprints', text: 'Aligned with blueprints', level: 3 },
        { id: 'pl-best-practices', text: 'Best Practices', level: 2 },
      ] as TOCHeading[];
    }

    if (activeCategory === 'organization-mgmt') {
      return [
        { id: 'org-header', text: 'Organization Management', level: 2 },
        { id: 'org-creating', text: 'Creating an Organization', level: 2 },
        { id: 'org-console', text: 'Accessing the Organization Console', level: 2 },
        { id: 'org-seat-management', text: 'Seat Management', level: 2 },
        { id: 'org-members-roles', text: 'Members and Roles', level: 2 },
        { id: 'org-member-role', text: 'Member Role', level: 3 },
        { id: 'org-admin-role', text: 'Administrator Role', level: 3 },
        { id: 'org-projects', text: 'Managing Projects Across the Organization', level: 2 },
        { id: 'org-shared-templates', text: 'Shared Templates', level: 2 },
      ] as TOCHeading[];
    }

    if (activeCategory === 'usage-billing') {
      return [
        { id: 'ub-header', text: 'Usage and Billing', level: 2 },
        { id: 'ub-usage', text: 'Usage', level: 2 },
        { id: 'ub-seats-billing', text: 'Managing Seats and Billing', level: 2 },
        { id: 'ub-model-pricing', text: 'Model Pricing', level: 2 },
        { id: 'ub-pricing-references', text: 'Pricing References', level: 3 },
      ] as TOCHeading[];
    }

    if (activeCategory === 'changelog') {
      return [
        { id: 'cl-header', text: 'Changelog', level: 2 },
        { id: 'cl-0310', text: 'Version 0.31.0', level: 2 },
        { id: 'cl-0300', text: 'Version 0.30.0', level: 2 },
        { id: 'cl-0290', text: 'Version 0.29.0', level: 2 },
        { id: 'cl-0280', text: 'Version 0.28.0', level: 2 },
        { id: 'cl-0270', text: 'Version 0.27.0', level: 2 },
        { id: 'cl-0260', text: 'Version 0.26.0', level: 2 },
        { id: 'cl-0250', text: 'Version 0.25.0', level: 2 },
        { id: 'cl-0240', text: 'Version 0.24.0', level: 2 },
        { id: 'cl-0230', text: 'Version 0.23.0', level: 2 },
        { id: 'cl-0210', text: 'Version 0.21.0', level: 2 },
        { id: 'cl-0200', text: 'Version 0.20.0', level: 2 },
        { id: 'cl-0190', text: 'Version 0.19.0', level: 2 },
        { id: 'cl-0180', text: 'Version 0.18.0', level: 2 },
        { id: 'cl-0170', text: 'Version 0.17.0', level: 2 },
        { id: 'cl-0160', text: 'Version 0.16.0', level: 2 },
        { id: 'cl-0150', text: 'Version 0.15.0', level: 2 },
        { id: 'cl-0140', text: 'Version 0.14.0', level: 2 },
        { id: 'cl-0130', text: 'Version 0.13.0', level: 2 },
        { id: 'cl-0120', text: 'Version 0.12.0', level: 2 },
        { id: 'cl-0100', text: 'Version 0.10.0', level: 2 },
        { id: 'cl-0090', text: 'Version 0.9.0', level: 2 },
        { id: 'cl-0080', text: 'Version 0.8.0', level: 2 },
        { id: 'cl-0071', text: 'Version 0.7.1', level: 2 },
        { id: 'cl-0060', text: 'Version 0.6.0', level: 2 },
        { id: 'cl-0050', text: 'Version 0.5.0', level: 2 },
        { id: 'cl-0040', text: 'Version 0.4.0', level: 2 },
        { id: 'cl-0030', text: 'Version 0.3.0', level: 2 },
        { id: 'cl-0020', text: 'Version 0.2.0', level: 2 },
        { id: 'cl-0010', text: 'Version 0.1.0', level: 2 },
      ] as TOCHeading[];
    }

    if (activeCategory === 'roadmap') {
      return [
        { id: 'rm-header', text: 'Roadmap', level: 2 },
        { id: 'rm-view', text: 'Product Roadmap', level: 2 },
      ] as TOCHeading[];
    }

    if (activeCategory === 'community') {
      return [
        { id: 'sc-header', text: 'Support & Community', level: 2 },
        { id: 'sc-channels', text: 'Community Channels', level: 2 },
        { id: 'sc-contact', text: 'Contact Information', level: 2 },
      ] as TOCHeading[];
    }

    if (activeCategory === 'validator') {
      return [
        { id: 'val-header', text: 'Validator', level: 2 },
        { id: 'val-what-does', text: 'What Validator Does', level: 2 },
        { id: 'val-walkthrough', text: 'Watch the Walkthrough', level: 2 },
        { id: 'val-how-it-works', text: 'How It Works', level: 2 },
        { id: 'val-input', text: 'Input', level: 3 },
        { id: 'val-process', text: 'Process', level: 3 },
        { id: 'val-output', text: 'Output', level: 3 },
        { id: 'val-example', text: 'Quick Example', level: 2 },
        { id: 'val-features', text: 'Features', level: 2 },
        { id: 'val-troubleshooting', text: 'Troubleshooting', level: 2 },
        { id: 'val-best-practices', text: 'Best Practices', level: 2 },
        { id: 'val-glossary', text: 'Glossary', level: 2 },
      ] as TOCHeading[];
    }

    return [];
  }, [activeCategory, searchQuery]);

  // Effects
  useEffect(() => {
    if (searchQuery.length > 5) {
      setAiTyping(true);
      const timer = setTimeout(() => setAiTyping(false), 800);
      return () => clearTimeout(timer);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (tocHeadings.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveHeadingId(entry.target.id); });
    }, { rootMargin: '-10% 0% -80% 0%', threshold: 0 });

    tocHeadings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeCategory, searchQuery, tocHeadings]);

  // Rendering Helpers

  const renderQuickstartContent = () => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-20">
      <header id="qs-header" className="space-y-6 scroll-mt-32">
        <h1 className="text-5xl font-bold tracking-tight">{QUICKSTART_CONTENT.title}</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">{QUICKSTART_CONTENT.subtitle}</p>
      </header>

      <div className="space-y-20">
        {QUICKSTART_CONTENT.steps.map((step) => (
          <section key={step.id} id={step.id} className="space-y-8 scroll-mt-32 group">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">{step.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{step.text}</p>
            </div>

            <ul className="space-y-4">
              {step.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {step.id === 'step-3' && (
              <TerminalMock 
                command="8090 repo connect" 
                output={[
                  "> Fetching accessible repositories...",
                  "✓ Detected GitHub Context: femisowemimo/8090-demo",
                  "✓ Initializing Repository Indexer...",
                  "Indexing [####################] 100%",
                  "Done. Your repo is now synced with Software Factory agents."
                ]}
              />
            )}

            {step.id === 'step-7' && (
              <TerminalMock 
                command="8090 planner --extract" 
                output={[
                  "Reading Blueprints and PRDs...",
                  "✓ Found 12 distinct implementation tasks.",
                  "✓ Generating high-context Work Orders...",
                  "Ready! Check your Planner dashboard to assign 'Phase 1'."
                ]}
              />
            )}
          </section>
        ))}
      </div>

      <section id="qs-next-steps" className="space-y-8 scroll-mt-32">
        <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Next Steps</h2>
        <div className="grid gap-4">
          {QUICKSTART_CONTENT.nextSteps.map((step, i) => (
            <div key={i} className="p-5 rounded-2xl bg-muted/30 border border-border/50 flex items-center gap-4 hover:bg-muted/50 transition-colors cursor-pointer group">
              <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">{step}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8 pt-10">
        <div className="space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" /> Further Reading</h3>
          <div className="space-y-3">
            {QUICKSTART_CONTENT.furtherReading.map(item => (
              <button key={item.id} onClick={() => setActiveCategory(item.id)} className="w-full p-4 rounded-xl border border-border bg-card/50 hover:bg-muted text-left transition-all">
                <div className="font-bold flex items-center justify-between">{item.title} <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" /></div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-green-500" /> Getting Help</h3>
          <div className="space-y-3">
            {QUICKSTART_CONTENT.gettingHelp.map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-muted/20 border border-border hover:border-primary/30 transition-colors cursor-pointer">
                <div className="font-bold text-sm">{item.title}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PageNavigation currentId={activeCategory} onNavigate={setActiveCategory} />
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-3 focus:bg-primary focus:text-primary-foreground">
        Skip to main content
      </a>

      <motion.nav 
        style={{ backdropFilter: useTransform(headerBlur, (v) => `blur(${v}px)`), paddingTop: headerPadding, paddingBottom: headerPadding, borderBottomColor: useTransform(navBorderOpacity, (v) => `hsl(var(--primary) / ${v})`) }}
        className="sticky top-0 z-50 border-b px-6 transition-all"
      >
        <div className="max-w-350 mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <motion.div 
              style={{ scale: logoScale }} 
              className="flex items-center gap-2.5 font-bold text-lg tracking-tight group cursor-pointer origin-left"
              onClick={() => onGoHome?.()}
            >
              <div className="relative">
                <div className="bg-primary text-primary-foreground p-1.5 rounded-lg shadow-lg relative z-10"><Zap className="h-4 w-4 fill-current" /></div>
                <div className="absolute inset-0 bg-primary/20 blur shadow-primary/40 rounded-lg group-hover:scale-150 transition-transform duration-500" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-foreground">8090.ai</span>
                <motion.span style={{ opacity: subTitleOpacity }} className="text-[10px] text-muted-foreground font-medium uppercase tracking-[0.2em] -mt-0.5">Software Factory</motion.span>
              </div>
            </motion.div>
            <div className="h-6 w-px bg-border/50 hidden md:block" />
            <div className="hidden md:flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <span className="hover:text-foreground cursor-pointer px-2 py-1 rounded-md hover:bg-muted/50 transition-colors">Docs</span>
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={i}><ChevronRight className="h-3 w-3 text-muted-foreground/40" /><span className={i === breadcrumbs.length - 1 ? "text-foreground font-semibold" : "hover:text-foreground cursor-pointer px-2 py-1 rounded-md hover:bg-muted/50"}>{crumb}</span></React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/5 border border-green-500/10 text-[11px] font-bold text-green-500/80">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" /> OPERATIONAL <span className="mx-1 text-muted-foreground/30">•</span> v2.4.1
            </div>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)} 
              className="lg:hidden p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Toggle sidebar"
              aria-expanded={sidebarOpen}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button 
              onClick={() => setCommandPaletteOpen(true)} 
              className="flex items-center gap-3 px-4 py-1.5 rounded-lg bg-muted/50 border border-border/50 text-muted-foreground text-xs transition-colors group text-nowrap focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background"
              aria-label="Search documentation (Cmd+K)"
            >
              <Search className="h-3.5 w-3.5" /> <span>Search...</span> <div className="flex items-center gap-1 px-1 py-0.5 rounded bg-background border border-border text-[9px] font-bold opacity-60"><Command className="h-2 w-2" /> K</div>
            </button>
          </div>
        </div>
        <motion.div className="absolute bottom-0 left-0 right-0 h-px bg-primary origin-left" style={{ scaleX }} />
      </motion.nav>

      <main className="relative max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div id="main-content" className="relative mb-20">
          <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Ask anything... e.g. 'how do I connect AWS?'" />
          <AnimatePresence>
            {searchQuery.length > 3 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} className="absolute top-20 left-0 right-0 z-10 glass rounded-3xl p-6 border border-primary/20 shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-2 rounded-xl mt-1"><Bot className="h-5 w-5" /></div>
                  <div className="flex-1 text-muted-foreground leading-relaxed">
                    <p className="text-sm font-bold text-primary mb-1 uppercase tracking-wider">AI Instant Answer</p>
                    {aiTyping ? "Scanning docs..." : <p>To proceed, use <span className="text-foreground font-medium">@8090-cli/connect</span>. Check your IAM roles first.</p>}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid lg:grid-cols-[240px_1fr] xl:grid-cols-[240px_1fr_200px] gap-8 mt-12 relative">
          {/* Mobile sidebar backdrop */}
          {sidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/50 z-20 lg:hidden"
            />
          )}

          {/* Sidebar */}
          <aside className={`fixed left-0 top-0 bottom-0 w-64 lg:static lg:w-auto z-30 lg:z-auto transition-transform bg-background lg:bg-transparent border-r lg:border-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}>
            <div className="sticky top-32 space-y-12">
              <nav className="space-y-8">
                {/* Docs Home link */}
                <button
                  onClick={() => { setActiveCategory('home'); setSearchQuery(''); }}
                  className={`flex w-full items-center gap-2 pl-4 pr-3 py-2 text-[13px] font-medium transition-all rounded-lg ${activeCategory === 'home' && !searchQuery ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <Zap className="h-3.5 w-3.5" /> Docs Home
                </button>

                {DOCS_NAV.map((group) => (
                  <div key={group.id} className="space-y-3">
                    <h4 className="pl-4 text-[11px] font-bold text-muted-foreground uppercase tracking-[0.15em] italic">{group.label}</h4>
                    <div className="space-y-0.5">
                      {group.items.length > 0 ? (
                        group.items.map((item) => (
                          <button key={item.id} onClick={() => { setActiveCategory(item.id); setSearchQuery(''); }} className={`group relative flex w-full items-center pl-6 pr-3 py-2 text-[13px] transition-all ${activeCategory === item.id && !searchQuery ? 'text-foreground font-semibold translate-x-1' : 'text-muted-foreground hover:text-foreground hover:translate-x-1'}`}>
                            {activeCategory === item.id && !searchQuery && <motion.div layoutId="activeIndicator" className="absolute left-0 w-0.5 h-4 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),0.5)]" />}
                            {item.label}
                          </button>
                        ))
                      ) : (
                        <button onClick={() => { setActiveCategory(group.id); setSearchQuery(''); }} className={`group relative flex w-full items-center pl-4 pr-4 py-2 text-sm transition-all ${activeCategory === group.id && !searchQuery ? 'text-foreground font-bold' : 'text-muted-foreground hover:text-foreground'}`}>{group.label}</button>
                      )}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          <section className="min-w-0">
            {searchQuery ? (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold italic tracking-tight">Search Results for "{searchQuery}"</h2>
                <div className="grid gap-6">
                  {filteredFAQs.map((item) => (
                    <AccordionItem key={item.id} item={item} isOpen={openId === item.id} onToggle={() => setOpenId(openId === item.id ? null : item.id)} />
                  ))}
                </div>
              </div>
            ) : (
              <>
                {activeCategory === 'home' && <DocsHomePage onNavigate={setActiveCategory} />}
                {activeCategory === 'intro' && <IntroductionPage onNavigate={setActiveCategory} activeCategory={activeCategory} />}
                {activeCategory === 'quickstart' && renderQuickstartContent()}
                {activeCategory === 'requirements-guide' && <><RequirementsGuidePage /><PageNavigation currentId={activeCategory} onNavigate={setActiveCategory} /></>}
                {activeCategory === 'blueprint-guide' && <><BlueprintGuidePage /><PageNavigation currentId={activeCategory} onNavigate={setActiveCategory} /></>}
                {activeCategory === 'work-order-guide' && <><WorkOrderGuidePage /><PageNavigation currentId={activeCategory} onNavigate={setActiveCategory} /></>}
                {activeCategory === 'codebase-connection' && <><CodebaseConnectionPage /><PageNavigation currentId={activeCategory} onNavigate={setActiveCategory} /></>}
                {activeCategory === 'artifacts' && <><ArtifactsPage /><PageNavigation currentId={activeCategory} onNavigate={setActiveCategory} /></>}
                {activeCategory === 'refinery' && <><RefineryPage /><PageNavigation currentId={activeCategory} onNavigate={setActiveCategory} /></>}
                {activeCategory === 'foundry' && <><FoundryPage /><PageNavigation currentId={activeCategory} onNavigate={setActiveCategory} /></>}
                {activeCategory === 'planner' && <><PlannerPage /><PageNavigation currentId={activeCategory} onNavigate={setActiveCategory} /></>}
                {activeCategory === 'organization-mgmt' && <><OrganizationManagementPage /><PageNavigation currentId={activeCategory} onNavigate={setActiveCategory} /></>}
                {activeCategory === 'usage-billing' && <><UsageBillingPage /><PageNavigation currentId={activeCategory} onNavigate={setActiveCategory} /></>}
                {activeCategory === 'changelog' && <><ChangelogPage /><PageNavigation currentId={activeCategory} onNavigate={setActiveCategory} /></>}
                {activeCategory === 'roadmap' && <><RoadmapPage /><PageNavigation currentId={activeCategory} onNavigate={setActiveCategory} /></>}
                {activeCategory === 'community' && <><SupportCommunityPage /><PageNavigation currentId={activeCategory} onNavigate={setActiveCategory} /></>}
                {activeCategory === 'validator' && <><ValidatorPage /><PageNavigation currentId={activeCategory} onNavigate={setActiveCategory} /></>}
                {!CONTENT_PAGES.includes(activeCategory) && (
                  <ComingSoonPage categoryId={activeCategory} onNavigate={setActiveCategory} />
                )}
              </>
            )}
          </section>

          <aside className="hidden xl:block">
            <div className="sticky top-32 space-y-10">
              <AITools activeCategory={activeCategory} onCopySuccess={() => setShowToast(true)} />
              <TableOfContents headings={tocHeadings} activeId={activeHeadingId} />
            </div>
          </aside>

          {/* Mobile TOC toggle button */}
          {tocHeadings.length > 0 && (
            <button
              onClick={() => setTocMobileOpen(!tocMobileOpen)}
              className="fixed bottom-8 right-8 lg:hidden z-20 p-3 rounded-full bg-primary text-primary-foreground shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label={tocMobileOpen ? 'Close table of contents' : 'Open table of contents'}
            >
              <svg className={`h-5 w-5 transition-transform ${tocMobileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}

          {/* Mobile TOC drawer */}
          {tocMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed bottom-0 left-0 right-0 max-h-96 bg-background rounded-t-2xl border-t border-border z-20 lg:hidden shadow-lg overflow-y-auto"
            >
              <div className="p-4">
                <TableOfContents headings={tocHeadings} activeId={activeHeadingId} />
                <button
                  onClick={() => setTocMobileOpen(false)}
                  className="mt-4 w-full py-2 px-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors text-sm font-medium"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer onNavigate={setActiveCategory} />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onNavigate={setActiveCategory}
        onToggleDarkMode={toggleDarkMode}
        onCopyMarkdown={() => {
          const btn = document.querySelector('[data-copy-md]') as HTMLButtonElement;
          if (btn) btn.click();
        }}
        isDarkMode={isDarkMode}
      />

      {/* Toast notification */}
      <Toast show={showToast} message="Copied to clipboard!" />

      {/* Back to top button */}
      <BackToTop isVisible={showBackToTop} onClick={scrollToTop} />
    </div>
  );
};
