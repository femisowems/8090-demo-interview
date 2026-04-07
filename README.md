# 8090.ai — Software Factory Documentation

A premium, interactive documentation platform for [8090.ai Software Factory](https://8090.ai) — an AI-native SDLC orchestration platform where PMs, designers, engineers, and QA collaborate to ship high-quality software.

---

## ✨ Features

- **Docs Home** — Supabase-style landing page with categorized navigation to every module
- **Introduction** — Full product overview with problem/solution narrative and core module breakdown
- **Quickstart Guide** — 8-step interactive walkthrough with embedded CLI terminal simulations
- **Requirements Writing Guide** — Structured guide for PRDs, FRDs, user stories, and acceptance criteria
- **Blueprint Writing Guide** — Technical spec authoring with component/model syntax, mention tables, and ADRs
- **⌘K Command Palette** — Fuzzy search across all pages with keyboard navigation
- **Dark Mode** — Toggle with localStorage persistence
- **AI Tools Sidebar** — Copy page summary as markdown, one-click open ChatGPT / Claude / Gemini
- **Scroll-Spy TOC** — Right sidebar with active section highlighting via IntersectionObserver
- **Previous / Next Navigation** — Sequential doc browsing at the bottom of every page
- **Coming Soon Placeholders** — Polished empty states for unbuilt documentation sections
- **Responsive Footer** — Categorized doc links with branding

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [React 19](https://react.dev) + [TypeScript 6](https://typescriptlang.org) |
| Build Tool | [Vite 8](https://vite.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) (alpha) |
| Animations | [Framer Motion 12](https://motion.dev) |
| Icons | [Lucide React](https://lucide.dev) |
| Utilities | [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge) |

## 📁 Project Structure

```
src/
├── FAQPage.tsx              # Main page orchestrator (routing, state, layout)
├── data/
│   └── faq.ts               # Navigation structure, FAQ data, content definitions
├── components/faq/
│   ├── DocsHomePage.tsx      # Supabase-style docs landing page
│   ├── IntroductionPage.tsx  # Product introduction with agent workflow
│   ├── RequirementsGuidePage.tsx  # Requirements writing guide
│   ├── BlueprintGuidePage.tsx    # Blueprint writing specification
│   ├── ComingSoonPage.tsx    # Placeholder for unbuilt pages
│   ├── PageNavigation.tsx    # Previous / Next page navigation
│   ├── CommandPalette.tsx    # ⌘K command palette with fuzzy search
│   ├── AITools.tsx           # AI tools sidebar (copy, ChatGPT, Claude, Gemini)
│   ├── TableOfContents.tsx   # Scroll-spy table of contents
│   ├── SearchBar.tsx         # Search input with AI instant answer
│   ├── AccordionItem.tsx     # FAQ accordion component
│   ├── TerminalMock.tsx      # Interactive CLI simulation
│   ├── AgentWorkflow.tsx     # Agent workflow visualization
│   ├── NextSteps.tsx         # Navigation cards to related pages
│   └── Footer.tsx            # Site footer with doc links
├── index.css                 # Design tokens, dark mode, glassmorphism
└── main.tsx                  # App entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Install & Run

```bash
# Clone the repository
git clone https://github.com/femisowemimo/8090-demo-interview.git
cd 8090-demo-interview

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `⌘K` / `Ctrl+K` | Open command palette |
| `↑` `↓` | Navigate command palette results |
| `Enter` | Select command |
| `Escape` | Close command palette |

## 🎨 Design System

- **Light / Dark mode** with HSL CSS custom properties
- **Glassmorphism** via `backdrop-filter: blur()` on the sticky header
- **Micro-animations** with Framer Motion (fade-up, spring indicators, scale transitions)
- **Typography** — Inter font family via Google Fonts

## 📄 License

Private — © 2026 8090.ai. All rights reserved.
