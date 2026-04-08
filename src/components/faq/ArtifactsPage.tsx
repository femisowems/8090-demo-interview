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

export const ArtifactsPage: React.FC = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-20">
    <header id="art-header" className="space-y-6 scroll-mt-32">
      <h1 className="text-5xl font-bold tracking-tight">Artifacts</h1>
      <p className="text-xl text-muted-foreground leading-relaxed">
        Artifacts are external files that give Software Factory and its agents real-world context while generating requirements, blueprints, and work orders.
      </p>
    </header>

    <section id="art-overview" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Overview</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          Instead of relying on assumptions, agents can draw directly from the same materials your team already uses: legacy PRDs, meeting notes, design mockups, customer interviews, architectural diagrams, and more.
        </p>
        <p>
          Once uploaded, artifacts are processed so their contents become searchable and available to agents during planning and documentation.
        </p>
      </div>
    </section>

    <section id="art-supported-files" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Supported Files</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          Software Factory supports most common document, text, image, and audio formats, including files from the Microsoft Office Suite.
        </p>
      </div>
    </section>

    <section id="art-uploading" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Uploading Artifacts</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          Artifacts can be uploaded through the Project Overview console or by providing files directly to agents.
        </p>
        <p>
          From Project Overview and the Artifacts tab, select Add Artifact to open the upload dialog. You can drag and drop files or browse your computer. If needed, choose a destination folder before uploading.
        </p>
        <p>
          While chatting with any agent, use the upload button to attach files. Files uploaded this way automatically appear in the project artifact list.
        </p>
      </div>
    </section>

    <section id="art-agent-context" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Adding Artifacts to Agent Context</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          Software Factory agents can dynamically retrieve artifacts when relevant. Artifacts can also be added directly to chat context by:
        </p>
        <BulletList
          items={[
            'Typing @ in agent chat to open the artifact selector.',
            'Dragging an artifact directly into an agent chat.',
          ]}
        />
      </div>
    </section>

    <section id="art-citing" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Citing Artifacts in Documentation</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          Links connect documentation directly to the artifacts that support it.
        </p>
        <p>
          When editing a document in Software Factory, highlight text and select the Link icon to attach an artifact. Hovering over linked text shows the associated file, with options to open or remove the link.
        </p>
      </div>
    </section>

    <section id="art-best-practices" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Best Practices</h2>
      <BulletList
        items={[
          'Upload artifacts early to give agents context from the start.',
          'Organize materials into folders as they are added.',
          'Use clear, descriptive file names.',
          'Add links in PRDs and blueprints to maintain traceability.',
          'Archive or remove outdated materials.',
        ]}
      />
    </section>
  </motion.div>
);