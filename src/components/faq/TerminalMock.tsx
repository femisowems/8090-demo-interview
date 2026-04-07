import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Copy, Check } from 'lucide-react';

interface TerminalMockProps {
  command: string;
  output: string[];
}

export const TerminalMock: React.FC<TerminalMockProps> = ({ command, output }) => {
  const [displayText, setDisplayText] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setDisplayText(command.slice(0, current));
      current++;
      if (current > command.length) {
        clearInterval(interval);
        setTimeout(() => setShowOutput(true), 500);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [command]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative my-8 rounded-2xl bg-[#0D1117] border border-[#30363D] overflow-hidden shadow-2xl font-mono text-sm group">
      <div className="flex items-center justify-between px-4 py-2 bg-[#161B22] border-b border-[#30363D]">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          <span className="ml-4 text-xs font-medium text-muted-foreground flex items-center gap-1">
            <Terminal className="h-3 w-3" /> zsh — docs-demo
          </span>
        </div>
        <button 
          onClick={copyToClipboard}
          className="p-1.5 rounded-lg hover:bg-white/5 transition-colors opacity-0 group-hover:opacity-100"
        >
          {isCopied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5 text-muted-foreground" />}
        </button>
      </div>

      <div className="p-6 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold">➜</span>
          <span className="text-blue-400">~/8090-demo</span>
          <span className="text-foreground">$ {displayText}<span className="inline-block w-2 h-4 bg-primary/80 animate-pulse ml-0.5" /></span>
        </div>

        <AnimatePresence>
          {showOutput && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-1 mt-4"
            >
              {output.map((line, i) => (
                <div key={i} className={line.startsWith('!') ? 'text-yellow-500' : line.startsWith('✓') ? 'text-green-500' : 'text-muted-foreground'}>
                  {line}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
