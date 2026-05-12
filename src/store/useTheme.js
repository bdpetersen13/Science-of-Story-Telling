/**
 * Theme Hook
 * Manages dark/light mode with localStorage persistence.
 */

import { useEffect, useCallback } from 'react';
import { useCourse } from './CourseContext';

/**
 * Hook to manage theme (light/dark mode)
 * Applies the 'dark' class to the document element based on preference.
 */
export function useTheme() {
  const { store, update } = useCourse();
  const theme = store.preferences?.theme || 'light';

  // Apply theme class to document
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'light') {
      root.classList.remove('dark');
    } else if (theme === 'system') {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [theme]);

  // Listen for system preference changes when in 'system' mode
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const setTheme = useCallback((newTheme) => {
    update({
      preferences: {
        ...store.preferences,
        theme: newTheme,
      },
    });
  }, [store.preferences, update]);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  }, [theme, setTheme]);

  // Get the actual applied theme (resolved from 'system')
  const resolvedTheme = theme === 'system'
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : theme;

  return {
    theme,           // User preference: 'light' | 'dark' | 'system'
    resolvedTheme,   // Actual applied: 'light' | 'dark'
    setTheme,        // Set to specific theme
    toggleTheme,     // Toggle between light/dark
    isDark: resolvedTheme === 'dark',
  };
}
