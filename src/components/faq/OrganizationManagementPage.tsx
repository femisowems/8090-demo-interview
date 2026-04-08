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

export const OrganizationManagementPage: React.FC = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-20">
    <header id="org-header" className="space-y-6 scroll-mt-32">
      <h1 className="text-5xl font-bold tracking-tight">Organization Management</h1>
      <p className="text-xl text-muted-foreground leading-relaxed">
        An organization is a private workspace where teams collaborate across one or more projects in Software Factory.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Organizations define membership, permissions, usage limits, and shared resources such as templates.
      </p>
    </header>

    <section id="org-creating" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Creating an Organization</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          During signup, a user can either create a new organization or join an existing organization through an invitation.
        </p>
        <p>
          The user who completes initial signup becomes the organization administrator.
        </p>
      </div>
    </section>

    <section id="org-console" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Accessing the Organization Console</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>The Organization Console is the central place to manage your organization.</p>
        <p>To access it:</p>
      </div>
      <BulletList
        items={[
          'Click your user icon in the top-right.',
          'Select Organization Console.',
        ]}
      />
      <p className="text-lg text-muted-foreground leading-relaxed">
        From the console, administrators can manage members, projects, templates, usage, and billing.
      </p>
    </section>

    <section id="org-seat-management" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Seat Management</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>Organizations have a fixed number of seats.</p>
      </div>
      <BulletList
        items={[
          'Seats are managed by organization administrators.',
          'The system prevents adding members beyond the seat limit.',
          'When the limit is reached, no additional members can be added.',
        ]}
      />
      <p className="text-lg text-muted-foreground leading-relaxed">
        Administrators can increase or decrease seats from the Members page by selecting Manage Billing.
      </p>
    </section>

    <section id="org-members-roles" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Members and Roles</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>The Organization Console lists all members and their assigned roles.</p>
      </div>

      <div id="org-member-role" className="space-y-4 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Member Role</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">Member is the default role for organization users. Members can:</p>
        <BulletList
          items={[
            'Access and collaborate on organization projects.',
            'Contribute to requirements, blueprints, and work orders.',
            'Use shared templates and artifacts.',
          ]}
        />
      </div>

      <div id="org-admin-role" className="space-y-4 scroll-mt-32">
        <h3 className="text-xl font-bold text-primary">Administrator Role</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">Administrators control organization-level configuration and operations. They can:</p>
        <BulletList
          items={[
            'Add or remove members.',
            'Assign and change member roles.',
            'Manage organization settings.',
            'Manage shared templates.',
            'View usage and manage billing.',
            'Manage organization-wide projects and archives.',
          ]}
        />
        <p className="text-lg text-muted-foreground leading-relaxed">
          Administrator access should only be granted to users responsible for managing the organization.
        </p>
      </div>
    </section>

    <section id="org-projects" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Managing Projects Across the Organization</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>The Organization Console provides a consolidated view of all projects across the organization.</p>
      </div>
      <BulletList
        items={[
          'View all projects across teams.',
          'Edit project names.',
          'Archive projects.',
        ]}
      />
      <p className="text-lg text-muted-foreground leading-relaxed">
        This helps keep projects organized as the organization grows.
      </p>
    </section>

    <section id="org-shared-templates" className="space-y-8 scroll-mt-32">
      <h2 className="text-3xl font-bold border-b border-border/50 pb-4">Shared Templates</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Templates created inside individual projects, including blueprint and work-order templates, can be promoted for organization-wide use. This helps teams standardize workflows and reuse proven patterns across projects.
      </p>
    </section>
  </motion.div>
);