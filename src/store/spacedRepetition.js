/**
 * SM-2 Spaced Repetition Engine (client-side)
 *
 * Each concept is stored as a compact string in localStorage:
 *   "chapterId:conceptKey:confidence:intervalDays:nextReviewYYYYMMDD"
 *
 * confidence  = 0–5 (SM-2 quality rating)
 * interval    = days until next review
 * nextReview  = YYYYMMDD date string
 */

import { getStoreKey, setStoreKey } from './storage';

/* ---- Serialization ---- */

function parseRecord(str) {
  const [chapterId, conceptKey, conf, interval, nextReview] = str.split(':');
  return {
    chapterId,
    conceptKey,
    confidence: Number(conf),
    interval: Number(interval),
    nextReview,
  };
}

function serializeRecord({ chapterId, conceptKey, confidence, interval, nextReview }) {
  return `${chapterId}:${conceptKey}:${confidence}:${interval}:${nextReview}`;
}

function todayStr() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}${m}${day}`;
}

function addDays(dateStr, days) {
  const y = Number(dateStr.slice(0, 4));
  const m = Number(dateStr.slice(4, 6)) - 1;
  const d = Number(dateStr.slice(6, 8));
  const date = new Date(y, m, d);
  date.setDate(date.getDate() + days);
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, '0'),
    String(date.getDate()).padStart(2, '0'),
  ].join('');
}

/* ---- Core SM-2 Algorithm ---- */

/**
 * Calculate new interval & easiness factor.
 * quality: 0–5 (user self-rating or quiz score mapped to this range)
 *   0–1 = complete blackout / wrong
 *   2   = incorrect but upon seeing answer, felt familiar
 *   3   = correct with serious difficulty
 *   4   = correct with hesitation
 *   5   = perfect recall
 */
function sm2(prevInterval, prevEF, quality) {
  let ef = prevEF + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  ef = Math.max(1.3, ef);

  let interval;
  if (quality < 3) {
    // Reset on failure
    interval = 1;
  } else if (prevInterval <= 0) {
    interval = 1;
  } else if (prevInterval === 1) {
    interval = 6;
  } else {
    interval = Math.round(prevInterval * ef);
  }

  return { interval, ef };
}

/* ---- Public API ---- */

/** Add a concept to the review queue (called when chapter content is first seen). */
export function addConcept(chapterId, conceptKey) {
  const records = getStoreKey('spaced') || [];
  const id = `${chapterId}:${conceptKey}`;
  const exists = records.some((r) => r.startsWith(id + ':'));
  if (exists) return;

  const record = serializeRecord({
    chapterId,
    conceptKey,
    confidence: 0,
    interval: 0,
    nextReview: todayStr(),
  });
  setStoreKey('spaced', [...records, record]);
}

/** Record a review result for a concept. */
export function reviewConcept(chapterId, conceptKey, quality) {
  const records = getStoreKey('spaced') || [];
  const id = `${chapterId}:${conceptKey}`;
  const idx = records.findIndex((rec) => rec.startsWith(id + ':'));
  if (idx === -1) return;

  const prev = parseRecord(records[idx]);
  // We store a simplified EF derived from confidence history
  const prevEF = 2.5; // Simplified: always start from default EF
  const { interval } = sm2(prev.interval, prevEF, quality);
  const nextReview = addDays(todayStr(), interval);

  records[idx] = serializeRecord({
    chapterId,
    conceptKey,
    confidence: quality,
    interval,
    nextReview,
  });
  setStoreKey('spaced', records);
}

/** Get all concepts due for review today or earlier. */
export function getDueReviews() {
  const records = getStoreKey('spaced') || [];
  const today = todayStr();
  return records
    .map(parseRecord)
    .filter((r) => r.nextReview <= today);
}

/** Get all concepts for a specific chapter. */
export function getChapterConcepts(chapterId) {
  const records = getStoreKey('spaced') || [];
  return records
    .filter((r) => r.startsWith(`${chapterId}:`))
    .map(parseRecord);
}

/** Get summary stats for the review queue. */
export function getReviewStats() {
  const records = getStoreKey('spaced') || [];
  const parsed = records.map(parseRecord);
  const today = todayStr();
  return {
    total: parsed.length,
    due: parsed.filter((r) => r.nextReview <= today).length,
    mastered: parsed.filter((r) => r.confidence >= 4 && r.interval >= 14).length,
    struggling: parsed.filter((r) => r.confidence <= 2 && r.interval <= 1).length,
  };
}
