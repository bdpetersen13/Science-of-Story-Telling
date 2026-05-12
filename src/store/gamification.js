/**
 * Gamification Engine
 * Manages XP, levels, badges, and streaks.
 */

import { getStore, updateStore } from './storage';

/* ---- Level Thresholds ---- */
const LEVELS = [
  { level: 1, title: 'Novice Writer', minXP: 0 },
  { level: 2, title: 'Aspiring Storyteller', minXP: 200 },
  { level: 3, title: 'Story Apprentice', minXP: 500 },
  { level: 4, title: 'Narrative Crafter', minXP: 1000 },
  { level: 5, title: 'Plot Architect', minXP: 1800 },
  { level: 6, title: 'Character Sculptor', minXP: 2800 },
  { level: 7, title: 'World Builder', minXP: 4000 },
  { level: 8, title: 'Story Sage', minXP: 5500 },
  { level: 9, title: 'Narrative Master', minXP: 7500 },
  { level: 10, title: 'Master Storyteller', minXP: 10000 },
];

/* ---- Badge Definitions ---- */
export const BADGE_DEFS = {
  // Part 1 Chapter Badges
  'ch1-curiosity-seeker': { name: 'Curiosity Seeker', icon: '🔍', description: 'Complete Chapter 1: Curiosity & the Brain', part: 1 },
  'ch2-model-maker': { name: 'Model Maker', icon: '🧠', description: 'Complete Chapter 2: The Model-Making Brain', part: 1 },
  'ch3-world-creator': { name: 'World Creator', icon: '🌍', description: 'Complete Chapter 3: World Making', part: 1 },
  'ch4-mind-reader': { name: 'Mind Reader', icon: '🎭', description: 'Complete Chapter 4: The Domesticated Brain', part: 1 },
  'ch5-signal-spotter': { name: 'Signal Spotter', icon: '✨', description: 'Complete Chapter 5: Salience', part: 1 },
  'ch6-metaphor-weaver': { name: 'Metaphor Weaver', icon: '🔗', description: 'Complete Chapter 6: Neural Models & Metaphor', part: 1 },
  'ch7-chain-forger': { name: 'Chain Forger', icon: '⛓️', description: 'Complete Chapter 7: Cause & Effect', part: 1 },
  'ch8-change-agent': { name: 'Change Agent', icon: '💡', description: 'Complete Chapter 8: Change Is Not Enough', part: 1 },
  'part1-world-builder': { name: 'World Builder', icon: '🏆', description: 'Complete all Part 1 chapters', part: 1, boss: true },

  // Part 2 Chapter Badges
  'ch9-flaw-finder': { name: 'Flaw Finder', icon: '🔎', description: 'Complete Chapter 9: The Flawed Self', part: 2 },
  'ch10-personality-architect': { name: 'Personality Architect', icon: '📊', description: 'Complete Chapter 10: Personality and Plot', part: 2 },
  'ch11-space-reader': { name: 'Space Reader', icon: '🏠', description: 'Complete Chapter 11: Personality and Setting', part: 2 },
  'ch12-perspective-shifter': { name: 'Perspective Shifter', icon: '👁️', description: 'Complete Chapter 12: Personality and POV', part: 2 },
  'ch13-cultural-navigator': { name: 'Cultural Navigator', icon: '🌐', description: 'Complete Chapter 13: Culture and Character', part: 2 },
  'ch14-ignition-master': { name: 'Ignition Master', icon: '🔥', description: 'Complete Chapter 14: Anatomy of a Flawed Self', part: 2 },
  'ch15-hero-unmasker': { name: 'Hero Unmasker', icon: '🎭', description: 'Complete Chapter 15: Fictional Memories & Moral Delusions', part: 2 },
  'ch16-giant-slayer': { name: 'Giant Slayer', icon: '⚔️', description: 'Complete Chapter 16: David and Goliath', part: 2 },
  'ch17-meaning-maker': { name: 'Meaning Maker', icon: '💎', description: 'Complete Chapter 17: How Flawed Characters Create Meaning', part: 2 },
  'part2-character-architect': { name: 'Character Architect', icon: '🏆', description: 'Complete all Part 2 chapters', part: 2, boss: true },

  // Part 3 Chapter Badges
  'ch18-question-master': { name: 'Question Master', icon: '❓', description: 'Complete Chapter 18: Confabulation & the Dramatic Question', part: 3 },
  'ch19-identity-sculptor': { name: 'Identity Sculptor', icon: '🗿', description: 'Complete Chapter 19: Multiple Selves', part: 3 },
  'ch20-depth-diver': { name: 'Depth Diver', icon: '🌊', description: 'Complete Chapter 20: Two Levels of Story', part: 3 },
  'ch21-ambiguity-embracer': { name: 'Ambiguity Embracer', icon: '🌫️', description: 'Complete Chapter 21: Modernist Stories', part: 3 },
  'ch22-need-seeker': { name: 'Need Seeker', icon: '🎯', description: 'Complete Chapter 22: Wanting and Needing', part: 3 },
  'ch23-voice-crafter': { name: 'Voice Crafter', icon: '🗣️', description: 'Complete Chapter 23: Dialogue', part: 3 },
  'ch24-tribal-storyteller': { name: 'Tribal Storyteller', icon: '🏕️', description: 'Complete Chapter 24: Roots of the Dramatic Question', part: 3 },
  'ch25-status-strategist': { name: 'Status Strategist', icon: '📈', description: 'Complete Chapter 25: Status Play', part: 3 },
  'ch26-storm-weatherer': { name: 'Storm Weatherer', icon: '⛈️', description: 'Complete Chapter 26: King Lear & Humiliation', part: 3 },
  'ch27-myth-maker': { name: 'Myth Maker', icon: '📜', description: 'Complete Chapter 27: Stories as Tribal Propaganda', part: 3 },
  'ch28-empathy-engineer': { name: 'Empathy Engineer', icon: '💔', description: 'Complete Chapter 28: Antiheroes & Empathy', part: 3 },
  'ch29-origin-archaeologist': { name: 'Origin Archaeologist', icon: '🔬', description: 'Complete Chapter 29: Origin Damage', part: 3 },
  'part3-plot-master': { name: 'Plot Master', icon: '🏆', description: 'Complete all Part 3 chapters', part: 3, boss: true },

  // Part 4 Chapter Badges
  'ch30-plot-architect': { name: 'Plot Architect', icon: '📐', description: 'Complete Chapter 30: Plot', part: 4 },
  'ch31-flaw-master': { name: 'Flaw Master', icon: '💎', description: 'Complete Chapter 31: The Sacred Flaw', part: 4 },
  'ch32-crisis-navigator': { name: 'Crisis Navigator', icon: '⚡', description: 'Complete Chapter 32: Crisis and Climax', part: 4 },
  'ch33-ending-craftsman': { name: 'Ending Craftsman', icon: '🎬', description: 'Complete Chapter 33: Endings', part: 4 },
  'ch34-meaning-seeker': { name: 'Meaning Seeker', icon: '🔮', description: 'Complete Chapter 34: The Meaning of Story', part: 4 },
  'ch35-master-storyteller': { name: 'Master Storyteller', icon: '🌟', description: 'Complete Chapter 35: Becoming a Storyteller', part: 4 },
  'part4-master-storyteller': { name: 'Master Storyteller', icon: '👑', description: 'Complete the entire Science of Storytelling course!', part: 4, boss: true },
};

/* ---- XP ---- */

export function awardXP(amount) {
  const store = getStore();
  const newXP = store.gamification.xp + amount;
  const newLevel = calculateLevel(newXP);
  const leveledUp = newLevel > store.gamification.level;

  updateStore({
    gamification: {
      ...store.gamification,
      xp: newXP,
      level: newLevel,
    },
  });

  return { newXP, newLevel, leveledUp, xpAwarded: amount };
}

export function getXP() {
  return getStore().gamification.xp;
}

/* ---- Levels ---- */

export function calculateLevel(xp) {
  let lvl = 1;
  for (const l of LEVELS) {
    if (xp >= l.minXP) lvl = l.level;
  }
  return lvl;
}

export function getLevelInfo(level) {
  return LEVELS.find((l) => l.level === level) || LEVELS[0];
}

export function getNextLevelInfo(level) {
  return LEVELS.find((l) => l.level === level + 1) || null;
}

export function getLevelProgress() {
  const store = getStore();
  const current = getLevelInfo(store.gamification.level);
  const next = getNextLevelInfo(store.gamification.level);
  if (!next) return { percent: 100, xpToNext: 0 };

  const xpInLevel = store.gamification.xp - current.minXP;
  const xpNeeded = next.minXP - current.minXP;
  return {
    percent: Math.min(100, Math.round((xpInLevel / xpNeeded) * 100)),
    xpToNext: next.minXP - store.gamification.xp,
  };
}

/* ---- Badges ---- */

export function awardBadge(badgeId) {
  const store = getStore();
  if (store.gamification.badges.includes(badgeId)) return false;

  updateStore({
    gamification: {
      ...store.gamification,
      badges: [...store.gamification.badges, badgeId],
    },
  });
  return true;
}

export function hasBadge(badgeId) {
  return getStore().gamification.badges.includes(badgeId);
}

export function getEarnedBadges() {
  const earned = getStore().gamification.badges;
  return earned.map((id) => ({ id, ...BADGE_DEFS[id] })).filter((b) => b.name);
}

export function getAllBadges() {
  return Object.entries(BADGE_DEFS).map(([id, def]) => ({
    id,
    ...def,
    earned: getStore().gamification.badges.includes(id),
  }));
}

/* ---- Streaks ---- */

export function updateStreak() {
  const store = getStore();
  const streak = { ...store.gamification.streak };
  const today = new Date().toISOString().slice(0, 10);

  if (streak.lastActiveDate === today) return streak;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().slice(0, 10);

  if (streak.lastActiveDate === yesterdayStr) {
    streak.current += 1;
  } else {
    streak.current = 1;
  }

  streak.longest = Math.max(streak.longest, streak.current);
  streak.lastActiveDate = today;

  updateStore({ gamification: { ...store.gamification, streak } });
  return streak;
}

export function getStreak() {
  return getStore().gamification.streak;
}
