import React from 'react';
import { motion } from 'framer-motion';

export const RoadmapPage: React.FC = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-20">
    <header id="rm-header" className="space-y-6 scroll-mt-32">
      <h1 className="text-5xl font-bold tracking-tight">Roadmap</h1>
      <p className="text-xl text-muted-foreground leading-relaxed">We are building in the open. You may view our product roadmap here.</p>
    </header>

    <section id="rm-view" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Product Roadmap</h2>
      <div className="p-6 rounded-2xl bg-muted/20 border border-border/50">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Follow this page for upcoming features, planned improvements, and release priorities across Software Factory modules.
        </p>
      </div>
    </section>
  </motion.div>
);