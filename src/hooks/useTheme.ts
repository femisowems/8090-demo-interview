import { useState, useEffect, useCallback } from 'react';

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof document === 'undefined') return true;
    return document.documentElement.classList.contains('dark');
  });

  // Initialize from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  }, []);

  return { isDarkMode, toggleDarkMode };
};
