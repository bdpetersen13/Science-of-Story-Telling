/**
 * Progress Tracking Engine
 * Manages chapter completion, star ratings, and part progress.
 */

import { getStore, updateStore } from './storage';
import { awardXP, awardBadge } from './gamification';

const TOTAL_CHAPTERS = 35;
const PART_RANGES = {
  1: { start: 1, end: 8, title: 'Creating a World' },
  2: { start: 9, end: 17, title: 'The Flawed Self' },
  3: { start: 18, end: 29, title: 'The Dramatic Question' },
  4: { start: 30, end: 35, title: 'Plot, Endings & Meaning' },
};

const CHAPTER_BADGE_MAP = {
  1: 'ch1-curiosity-seeker',
  2: 'ch2-model-maker',
  3: 'ch3-world-creator',
  4: 'ch4-mind-reader',
  5: 'ch5-signal-spotter',
  6: 'ch6-metaphor-weaver',
  7: 'ch7-chain-forger',
  8: 'ch8-change-agent',
  9: 'ch9-flaw-finder',
  10: 'ch10-personality-architect',
  11: 'ch11-space-reader',
  12: 'ch12-perspective-shifter',
  13: 'ch13-cultural-navigator',
  14: 'ch14-ignition-master',
  15: 'ch15-hero-unmasker',
  16: 'ch16-giant-slayer',
  17: 'ch17-meaning-maker',
  18: 'ch18-question-master',
  19: 'ch19-identity-sculptor',
  20: 'ch20-depth-diver',
  21: 'ch21-ambiguity-embracer',
  22: 'ch22-need-seeker',
  23: 'ch23-voice-crafter',
  24: 'ch24-tribal-storyteller',
  25: 'ch25-status-strategist',
  26: 'ch26-storm-weatherer',
  27: 'ch27-myth-maker',
  28: 'ch28-empathy-engineer',
  29: 'ch29-origin-archaeologist',
  30: 'ch30-plot-architect',
  31: 'ch31-flaw-master',
  32: 'ch32-crisis-navigator',
  33: 'ch33-ending-craftsman',
  34: 'ch34-meaning-seeker',
  35: 'ch35-master-storyteller',
};

const PART_BOSS_BADGES = {
  1: 'part1-world-builder',
  2: 'part2-character-architect',
  3: 'part3-plot-master',
  4: 'part4-master-storyteller',
};

/* ---- Chapter Progress ---- */

export function getChapterProgress(chapterId) {
  const store = getStore();
  return store.progress.chapters[chapterId] || {
    completed: false,
    quizScore: 0,
    stars: 0,
    unlockedAt: null,
    completedAt: null,
    contentViewed: false,
  };
}

export function isChapterUnlocked(chapterId) {
  if (chapterId === 1) return true;
  const prevProgress = getChapterProgress(chapterId - 1);
  return prevProgress.completed;
}

export function markContentViewed(chapterId) {
  const store = getStore();
  const chapters = { ...store.progress.chapters };
  chapters[chapterId] = {
    ...getChapterProgress(chapterId),
    contentViewed: true,
    unlockedAt: chapters[chapterId]?.unlockedAt || new Date().toISOString(),
  };
  updateStore({ progress: { ...store.progress, chapters } });
}

export function completeChapter(chapterId, quizScore) {
  const store = getStore();
  const chapters = { ...store.progress.chapters };
  const stars = calculateStars(quizScore);

  chapters[chapterId] = {
    ...getChapterProgress(chapterId),
    completed: true,
    quizScore: Math.max(getChapterProgress(chapterId).quizScore, quizScore),
    stars: Math.max(getChapterProgress(chapterId).stars, stars),
    completedAt: new Date().toISOString(),
  };

  // Advance current chapter pointer
  const currentChapter = Math.max(store.progress.currentChapter, chapterId + 1);

  updateStore({ progress: { ...store.progress, chapters, currentChapter } });

  // Award XP (150 base + bonus for score)
  const xpAmount = 150 + Math.round(quizScore * 1.5);
  const xpResult = awardXP(xpAmount);

  // Award chapter badge
  let badgeEarned = null;
  const badgeId = CHAPTER_BADGE_MAP[chapterId];
  if (badgeId && awardBadge(badgeId)) {
    badgeEarned = badgeId;
  }

  // Check for part completion
  let bossUnlocked = false;
  const partNum = getPartForChapter(chapterId);
  if (partNum && isPartComplete(partNum)) {
    bossUnlocked = true;
  }

  return { stars, xpResult, badgeEarned, bossUnlocked };
}

function calculateStars(quizScore) {
  if (quizScore >= 90) return 3;
  if (quizScore >= 70) return 2;
  if (quizScore > 0) return 1;
  return 0;
}

/* ---- Part Progress ---- */

export function getPartForChapter(chapterId) {
  for (const [part, range] of Object.entries(PART_RANGES)) {
    if (chapterId >= range.start && chapterId <= range.end) return Number(part);
  }
  return null;
}

export function getPartInfo(partNum) {
  return PART_RANGES[partNum] || null;
}

export function getPartProgress(partNum) {
  const range = PART_RANGES[partNum];
  if (!range) return { completed: 0, total: 0, percent: 0 };

  let completed = 0;
  const total = range.end - range.start + 1;

  for (let i = range.start; i <= range.end; i++) {
    if (getChapterProgress(i).completed) completed++;
  }

  return {
    completed,
    total,
    percent: Math.round((completed / total) * 100),
  };
}

export function isPartComplete(partNum) {
  const { completed, total } = getPartProgress(partNum);
  return completed >= total;
}

export function completeBossAssessment(partNum, score) {
  const store = getStore();
  const parts = { ...store.progress.parts };
  parts[partNum] = { bossCompleted: true, bossScore: score };
  updateStore({ progress: { ...store.progress, parts } });

  // Award boss badge + XP
  const badgeId = PART_BOSS_BADGES[partNum];
  let badgeEarned = null;
  if (badgeId && awardBadge(badgeId)) {
    badgeEarned = badgeId;
  }
  const xpResult = awardXP(500);

  return { badgeEarned, xpResult };
}

/* ---- Overall Progress ---- */

export function getOverallProgress() {
  let completed = 0;
  for (let i = 1; i <= TOTAL_CHAPTERS; i++) {
    if (getChapterProgress(i).completed) completed++;
  }
  return {
    completed,
    total: TOTAL_CHAPTERS,
    percent: Math.round((completed / TOTAL_CHAPTERS) * 100),
  };
}

export function getCurrentChapter() {
  const store = getStore();
  return Math.min(store.progress.currentChapter || 1, TOTAL_CHAPTERS);
}

export { PART_RANGES, TOTAL_CHAPTERS };
