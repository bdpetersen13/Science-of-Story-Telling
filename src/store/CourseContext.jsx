import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { getStore, updateStore } from './storage';
import { updateStreak } from './gamification';

const CourseContext = createContext(null);

export function CourseProvider({ children }) {
  const [store, setStore] = useState(getStore);

  // Sync streak on mount
  useEffect(() => {
    updateStreak();
    refreshStore();
  }, []);

  const refreshStore = useCallback(() => {
    setStore(getStore());
  }, []);

  const update = useCallback((partial) => {
    const updated = updateStore(partial);
    setStore(updated);
    return updated;
  }, []);

  const value = {
    store,
    update,
    refreshStore,
    profile: store.profile,
    preferences: store.preferences,
    progress: store.progress,
    gamification: store.gamification,
    isOnboarded: store.profile.onboardingComplete,
  };

  return (
    <CourseContext.Provider value={value}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourse() {
  const ctx = useContext(CourseContext);
  if (!ctx) throw new Error('useCourse must be inside CourseProvider');
  return ctx;
}
