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

export const CodebaseConnectionPage: React.FC = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-20">
    <header id="cc-header" className="space-y-6 scroll-mt-32">
      <h1 className="text-5xl font-bold tracking-tight">Connecting a Codebase</h1>
      <p className="text-xl text-muted-foreground leading-relaxed">
        Connecting a codebase to a project allows Software Factory to read and index code through the GitHub App.
      </p>
    </header>

    <section id="cc-why-connect" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Why Connect a Codebase?</h2>
      <BulletList
        items={[
          'Initialize your PRD from the existing codebase.',
          'Reverse-engineer technical blueprints from current implementation.',
          'Identify drift between the latest code and project blueprints.',
          'Write implementation plans into work orders to guide coding agents.',
        ]}
      />
    </section>

    <section id="cc-github-app-installation" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">GitHub App Installation</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          First, the Software Factory GitHub App must be enabled for your repository before connecting a codebase. The app provides secure, read-only access to the repository you select.
        </p>
        <p>
          Open Project Overview and navigate to the Codebase tab. If the GitHub App is not yet installed, an Install GitHub App button appears.
        </p>
        <p>
          Select the GitHub organization or account where the app should be installed and choose which repositories it can access. After installation, GitHub returns you to Software Factory to complete setup.
        </p>
      </div>
    </section>

    <section id="cc-provide-repository-url" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Provide the Repository URL</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          In the Codebase tab, enter the HTTPS URL of the codebase you want to connect. Software Factory verifies GitHub App access.
        </p>
        <p>
          Select the branch used for active development, then click Create Repository.
        </p>
      </div>
    </section>

    <section id="cc-indexing" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Codebase Indexing</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          Software Factory reads files from the selected branch, chunks and embeds the code in the background, and displays progress as indexing completes.
        </p>
      </div>
    </section>

    <section id="cc-automatic-reindexing" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Automatic Reindexing</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          Whenever code is pushed to the indexed branch, a webhook triggers reindexing to keep Software Factory up to date without manual action.
        </p>
        <p>
          Each reindexing job also reviews the latest code changes to detect documentation drift in Software Factory. Project administrators can opt in to automated reindexing.
        </p>
      </div>
    </section>

    <section id="cc-removing-connection" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Removing a Codebase Connection</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          A codebase connection can be removed at any time from the Codebase tab. Removing the connection deletes indexed content and removes the webhook.
        </p>
        <p>
          Removing the connection does not affect GitHub App installation or your actual repository. The connection can be re-added later.
        </p>
      </div>
    </section>

    <section id="cc-best-practice" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Best Practice</h2>
      <BulletList
        items={[
          'Connect the repository early so agents have code context from the start.',
          'Index the branch where active development occurs to keep documentation aligned.',
          'After major refactors, check indexing status or manually reindex so agents use fresh context.',
        ]}
      />
    </section>
  </motion.div>
);