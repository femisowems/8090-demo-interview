import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileText, LayoutGrid, ArrowRight } from 'lucide-react';

export const AgentWorkflow: React.FC = () => {
  const steps = [
    { id: 'refinery', label: 'Refinery', icon: Database, color: 'bg-blue-500' },
    { id: 'foundry', label: 'Foundry', icon: FileText, color: 'bg-purple-500' },
    { id: 'planner', label: 'Planner', icon: LayoutGrid, color: 'bg-emerald-500' },
  ];

  return (
    <div className="relative my-16 p-8 rounded-3xl bg-muted/20 border border-border/50 overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center gap-4 z-10"
            >
              <div className={`p-5 rounded-2xl ${step.color} shadow-lg shadow-${step.color.split('-')[1]}-500/20 text-white relative group/icon`}>
                <step.icon className="h-8 w-8" />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`absolute inset-0 rounded-2xl ${step.color} -z-10`}
                />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-foreground">{step.label}</h4>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Step 0{index + 1}</p>
              </div>
            </motion.div>

            {index < steps.length - 1 && (
              <div className="flex-1 flex items-center justify-center min-w-[40px]">
                <div className="relative w-full h-px bg-border md:block hidden">
                  <motion.div 
                    animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-primary"
                  />
                </div>
                <ArrowRight className="h-6 w-6 text-muted-foreground md:hidden block rotate-90 md:rotate-0" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="mt-12 p-4 rounded-xl bg-background/50 border border-border/50 backdrop-blur-sm text-center">
        <p className="text-sm text-muted-foreground italic">
          Data flows deterministically from **Knowledge Requirements** to **Architectural Blueprints** and finally to **Actionable Work Orders**.
        </p>
      </div>
    </div>
  );
};
