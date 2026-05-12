import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, CheckCircle, ArrowRight, Brain, Sparkles } from 'lucide-react';
import { getDueReviews, reviewConcept, getReviewStats } from '../../store/spacedRepetition';
import { awardXP } from '../../store/gamification';
import { useCourse } from '../../store/CourseContext';
import { getChapterById } from '../../data/chapters';
import Button from '../common/Button';
import { CONCEPT_LABELS } from '../../data/conceptLabels';

const RATINGS = [
  { value: 1, label: 'Forgot', color: 'bg-red-100', emoji: '😕' },
  { value: 3, label: 'Hard', color: 'bg-spark-100', emoji: '🤔' },
  { value: 4, label: 'Good', color: 'bg-blue-100', emoji: '🙂' },
  { value: 5, label: 'Easy', color: 'bg-green-100', emoji: '😎' },
];

export default function ReviewPage() {
  const navigate = useNavigate();
  const { refreshStore } = useCourse();
  const [dueItems, setDueItems] = useState(() => getDueReviews());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [rated, setRated] = useState(false);
  const [sessionStats, setSessionStats] = useState({ reviewed: 0, easy: 0, hard: 0 });

  const current = dueItems[currentIndex];
  const finished = currentIndex >= dueItems.length;
  const stats = getReviewStats();

  const handleRate = useCallback((quality) => {
    if (!current) return;
    reviewConcept(current.chapterId, current.conceptKey, quality);

    // Award small XP for reviewing
    awardXP(10);
    refreshStore();

    setRated(true);
    setSessionStats((prev) => ({
      reviewed: prev.reviewed + 1,
      easy: prev.easy + (quality >= 4 ? 1 : 0),
      hard: prev.hard + (quality <= 2 ? 1 : 0),
    }));

    // Auto-advance after brief delay
    setTimeout(() => {
      setFlipped(false);
      setRated(false);
      setCurrentIndex((i) => i + 1);
    }, 600);
  }, [current, refreshStore]);

  // No reviews due
  if (dueItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          className="text-6xl mb-6"
        >
          ✅
        </motion.div>
        <h1 className="text-headline text-2xl text-gray-160 mb-3">All caught up!</h1>
        <p className="text-[15px] text-gray-100 mb-2 leading-relaxed">
          You have no concepts due for review right now.
        </p>
        <p className="text-[13px] text-gray-50 mb-8">
          Keep learning new chapters to add concepts to your review queue.
        </p>
        <div className="surface-card-subtle inline-flex gap-6 px-6 py-4 mb-8">
          <Stat label="Total concepts" value={stats.total} />
          <Stat label="Mastered" value={stats.mastered} />
          <Stat label="Struggling" value={stats.struggling} />
        </div>
        <div>
          <Button onClick={() => navigate('/dashboard')}>
            Back to Learning
          </Button>
        </div>
      </div>
    );
  }

  // Session complete
  if (finished) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          className="relative inline-block mb-8"
        >
          <div className="absolute inset-0 bg-spark-100/20 rounded-full blur-2xl scale-[2]" />
          <Sparkles size={56} className="relative text-spark-100" />
        </motion.div>

        <h1 className="text-headline text-2xl text-gray-160 mb-3">Review Complete!</h1>
        <p className="text-[15px] text-gray-100 mb-8 leading-relaxed">
          You reviewed <span className="font-bold text-gray-160">{sessionStats.reviewed}</span> concepts.
          Nice work strengthening those neural pathways!
        </p>

        <div className="surface-card-subtle inline-flex gap-6 px-6 py-4 mb-8">
          <Stat label="Reviewed" value={sessionStats.reviewed} />
          <Stat label="Easy recalls" value={sessionStats.easy} />
          <Stat label="Need work" value={sessionStats.hard} />
          <Stat label="XP earned" value={sessionStats.reviewed * 10} />
        </div>

        <div className="flex justify-center gap-3">
          <Button variant="secondary" onClick={() => {
            setDueItems(getDueReviews());
            setCurrentIndex(0);
            setSessionStats({ reviewed: 0, easy: 0, hard: 0 });
          }}>
            <RotateCcw size={16} />
            Review More
          </Button>
          <Button onClick={() => navigate('/dashboard')}>
            Continue Learning
          </Button>
        </div>
      </div>
    );
  }

  // Active review
  const chapter = getChapterById(Number(current.chapterId));
  const conceptLabel = CONCEPT_LABELS[current.conceptKey] || {
    term: current.conceptKey.replace(/-/g, ' '),
    definition: 'Review this concept from the chapter.',
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-headline text-xl text-gray-160">Review Session</h1>
          <p className="text-[13px] text-gray-50 mt-0.5">
            {chapter ? `Chapter ${chapter.id}: ${chapter.title}` : 'Review'}
          </p>
        </div>
        <span className="text-[13px] font-semibold text-gray-50 bg-gray-5 px-3.5 py-1.5 rounded-full tabular-nums">
          {currentIndex + 1} / {dueItems.length}
        </span>
      </div>

      {/* Progress */}
      <div className="flex gap-1.5 mb-8">
        {dueItems.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
              i < currentIndex ? 'bg-green-100' : i === currentIndex ? 'bg-blue-100' : 'bg-gray-20/60'
            }`}
          />
        ))}
      </div>

      {/* Flashcard */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <button
          onClick={() => !rated && setFlipped((f) => !f)}
          className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-100 rounded-3xl"
          aria-label={flipped ? 'Hide answer' : 'Show answer'}
        >
          <div className="surface-card p-8 md:p-10 min-h-[240px] flex flex-col justify-center items-center text-center">
            <AnimatePresence mode="wait">
              {!flipped ? (
                <motion.div
                  key="front"
                  initial={{ opacity: 0, rotateX: -10 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  exit={{ opacity: 0, rotateX: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-5 flex items-center justify-center mx-auto mb-5">
                    <Brain size={24} className="text-blue-100" />
                  </div>
                  <p className="text-caption text-blue-100/60 mb-3 tracking-[0.12em]">CONCEPT</p>
                  <h2 className="text-headline text-2xl text-gray-160 mb-4 capitalize">
                    {conceptLabel.term}
                  </h2>
                  <p className="text-[14px] text-gray-50">Tap to reveal definition</p>
                </motion.div>
              ) : (
                <motion.div
                  key="back"
                  initial={{ opacity: 0, rotateX: -10 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  exit={{ opacity: 0, rotateX: 10 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-md"
                >
                  <p className="text-caption text-green-100/60 mb-3 tracking-[0.12em]">DEFINITION</p>
                  <p className="text-[17px] text-gray-130 leading-relaxed">
                    {conceptLabel.definition}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </button>
      </motion.div>

      {/* Rating buttons */}
      <AnimatePresence>
        {flipped && !rated && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="mt-6"
          >
            <p className="text-[13px] text-gray-50 text-center mb-4">How well did you remember this?</p>
            <div className="flex gap-3 justify-center">
              {RATINGS.map((r) => (
                <motion.button
                  key={r.value}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleRate(r.value)}
                  className="surface-card-subtle flex flex-col items-center gap-1.5 px-5 py-3.5 min-w-[72px] min-h-[44px]"
                >
                  <span className="text-xl">{r.emoji}</span>
                  <span className="text-[12px] font-medium text-gray-100">{r.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="text-center">
      <p className="text-[20px] font-bold text-gray-160 tabular-nums">{value}</p>
      <p className="text-[11px] text-gray-50 mt-0.5">{label}</p>
    </div>
  );
}
