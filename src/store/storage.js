const STORAGE_KEY = 'storytelling-course';

/**
 * Lightweight localStorage wrapper with JSON serialization.
 * All course state lives under a single top-level key to stay organized.
 */

function getRawStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function setRawStore(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch {
    console.warn('localStorage write failed — possibly full.');
    return false;
  }
}

/** Return the entire store or a default shape. */
export function getStore() {
  return getRawStore() || createDefaultStore();
}

/** Merge a partial update into the store. */
export function updateStore(partial) {
  const current = getStore();
  const merged = deepMerge(current, partial);
  setRawStore(merged);
  return merged;
}

/** Overwrite a specific top-level key. */
export function setStoreKey(key, value) {
  const current = getStore();
  current[key] = value;
  setRawStore(current);
  return current;
}

/** Read a specific top-level key. */
export function getStoreKey(key) {
  return getStore()[key];
}

/** Nuke everything — useful for dev / reset. */
export function resetStore() {
  localStorage.removeItem(STORAGE_KEY);
}

/** Default store shape — single source of truth for schema. */
export function createDefaultStore() {
  return {
    version: 1,
    profile: {
      name: '',
      avatar: null,
      createdAt: null,
      onboardingComplete: false,
    },
    preferences: {
      theme: 'light',
      fontSize: 'md',
      reducedMotion: false,
      ttsEnabled: false,
      ttsRate: 1,
      learningPace: 'moderate',  // relaxed | moderate | intensive
    },
    progress: {
      currentChapter: 1,
      chapters: {},       // { "1": { completed, quizScore, stars, unlockedAt, completedAt } }
      parts: {},          // { "1": { bossCompleted, bossScore } }
    },
    gamification: {
      xp: 0,
      level: 1,
      badges: [],         // ["badge-id", ...]
      streak: {
        current: 0,
        longest: 0,
        lastActiveDate: null,
      },
    },
    spaced: [],           // Compact SR records: "chId:conceptId:confidence:interval:nextReview"
    quizHistory: {},      // { "ch1-q1": { attempts, lastAnswer, correct } }
    analytics: {
      totalTimeSeconds: 0,
      chapterTimes: {},   // { "1": seconds }
      sessionsCount: 0,
      firstSessionDate: null,
    },
  };
}

/* ---- helpers ---- */

function deepMerge(target, source) {
  const out = { ...target };
  for (const key of Object.keys(source)) {
    if (
      source[key] &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key]) &&
      target[key] &&
      typeof target[key] === 'object' &&
      !Array.isArray(target[key])
    ) {
      out[key] = deepMerge(target[key], source[key]);
    } else {
      out[key] = source[key];
    }
  }
  return out;
}
