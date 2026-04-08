import React from 'react';
import { motion } from 'framer-motion';

const LinkCard: React.FC<{ title: string; description: string; cta: string }> = ({ title, description, cta }) => (
  <div className="p-5 rounded-xl bg-muted/20 border border-border/50 space-y-2">
    <h3 className="text-lg font-bold text-foreground">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    <p className="text-primary font-semibold text-sm">{cta}</p>
  </div>
);

export const SupportCommunityPage: React.FC = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-20">
    <header id="sc-header" className="space-y-6 scroll-mt-32">
      <h1 className="text-5xl font-bold tracking-tight">Support & Community</h1>
      <p className="text-xl text-muted-foreground leading-relaxed">
        We are building Software Factory in the open with our community. Join us, share feedback, and help shape the product.
      </p>
    </header>

    <section id="sc-channels" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Community Channels</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <LinkCard
          title="Discord"
          description="Join our Discord community for real-time discussions, support, and product updates."
          cta="Join Discord"
        />
        <LinkCard
          title="LinkedIn"
          description="Follow us on LinkedIn for company updates and industry insights."
          cta="Follow on LinkedIn"
        />
        <LinkCard
          title="X (Twitter)"
          description="Stay updated with the latest product news and announcements."
          cta="Follow on X"
        />
        <LinkCard
          title="YouTube"
          description="Watch tutorials, demos, and walkthroughs on our YouTube channel."
          cta="Subscribe on YouTube"
        />
      </div>
    </section>

    <section id="sc-contact" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Contact Information</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-muted/20 border border-border/50 space-y-2">
          <h3 className="text-lg font-bold text-foreground">General Support</h3>
          <p className="text-muted-foreground">Email: factory-support@8090.ai</p>
        </div>
        <div className="p-5 rounded-xl bg-muted/20 border border-border/50 space-y-2">
          <h3 className="text-lg font-bold text-foreground">Enterprise Support</h3>
          <p className="text-muted-foreground">Email: factory-support@8090.ai</p>
          <p className="text-muted-foreground">Response Time: Within 24 hours</p>
        </div>
      </div>
      <p className="text-lg text-muted-foreground leading-relaxed">Ready to join the community? Start with Discord.</p>
    </section>
  </motion.div>
);