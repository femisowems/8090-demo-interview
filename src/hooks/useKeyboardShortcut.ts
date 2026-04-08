import { useEffect } from 'react';

export const useKeyboardShortcut = (callback: () => void, key: string, ctrlOrCmd = true) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const isMac = typeof navigator !== 'undefined' && navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const modifier = ctrlOrCmd ? (isMac ? e.metaKey : e.ctrlKey) : true;
      
      if (modifier && e.key.toLowerCase() === key.toLowerCase()) {
        e.preventDefault();
        callback();
      }
    };

    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [callback, key, ctrlOrCmd]);
};
