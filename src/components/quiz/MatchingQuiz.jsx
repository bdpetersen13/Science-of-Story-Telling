import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Link2 } from 'lucide-react';
import Button from '../common/Button';

/**
 * Matching Quiz
 * User connects items from left column to right column.
 * 
 * Question format:
 * {
 *   id: 'q1',
 *   type: 'matching',
 *   question: 'Match each concept to its definition:',
 *   pairs: [
 *     { id: 'a', left: 'Concept A', right: 'Definition of A' },
 *     { id: 'b', left: 'Concept B', right: 'Definition of B' },
 *     { id: 'c', left: 'Concept C', right: 'Definition of C' },
 *   ],
 *   feedback: { correct: '...', incorrect: '...' },
 *   conceptKey: 'matching-concepts',
 * }
 */
export default function MatchingQuiz({ question, onAnswer }) {
  // Shuffle right column
  const [rightItems] = useState(() => 
    shuffleArray(question.pairs.map((p) => ({ id: p.id, text: p.right })))
  );
  
  const [matches, setMatches] = useState({}); // { leftId: rightId }
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const leftItems = question.pairs.map((p) => ({ id: p.id, text: p.left }));

  // Check if all pairs are matched
  const allMatched = Object.keys(matches).length === question.pairs.length;

  // Calculate correctness
  const getMatchStatus = (leftId) => {
    if (!submitted) return null;
    const matchedRightId = matches[leftId];
    return matchedRightId === leftId ? 'correct' : 'incorrect';
  };

  const correctCount = submitted
    ? Object.entries(matches).filter(([left, right]) => left === right).length
    : 0;
  const isFullyCorrect = correctCount === question.pairs.length;

  const handleLeftClick = (leftId) => {
    if (submitted) return;
    setSelectedLeft(selectedLeft === leftId ? null : leftId);
  };

  const handleRightClick = (rightId) => {
    if (submitted || !selectedLeft) return;
    
    // Remove any existing match to this right item
    const newMatches = { ...matches };
    Object.keys(newMatches).forEach((key) => {
      if (newMatches[key] === rightId) delete newMatches[key];
    });
    
    // Add new match
    newMatches[selectedLeft] = rightId;
    setMatches(newMatches);
    setSelectedLeft(null);
  };

  const handleClearMatch = (leftId) => {
    if (submitted) return;
    const newMatches = { ...matches };
    delete newMatches[leftId];
    setMatches(newMatches);
  };

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
    const correct = Object.entries(matches).every(([left, right]) => left === right);
    onAnswer?.({
      questionId: question.id,
      matches,
      correct,
      conceptKey: question.conceptKey,
    });
  }, [matches, question, onAnswer]);

  const feedbackText = isFullyCorrect ? question.feedback.correct : question.feedback.incorrect;

  // Get matched right ID for a left item
  const getMatchedRight = (leftId) => matches[leftId];
  
  // Check if right item is already matched
  const isRightMatched = (rightId) => Object.values(matches).includes(rightId);

  return (
    <div className="surface-card p-7 my-6">
      {/* Question */}
      <p className="text-[17px] font-medium text-gray-160 mb-2 leading-relaxed tracking-tight">
        {question.question}
      </p>
      <p className="text-[13px] text-gray-50 mb-6">
        Click an item on the left, then click its match on the right.
      </p>

      {/* Matching grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Left column */}
        <div className="space-y-2">
          <p className="text-[11px] font-semibold text-gray-50 uppercase tracking-wider mb-2">Concepts</p>
          {leftItems.map((item) => {
            const status = getMatchStatus(item.id);
            const isSelected = selectedLeft === item.id;
            const matchedRightId = getMatchedRight(item.id);
            const matchedRightText = matchedRightId
              ? rightItems.find((r) => r.id === matchedRightId)?.text
              : null;

            let itemStyle = 'bg-gray-5/60 hover:bg-blue-5/40 cursor-pointer';
            if (isSelected) {
              itemStyle = 'bg-blue-5 shadow-[0_0_0_2px_#0053e2]';
            } else if (matchedRightId && !submitted) {
              itemStyle = 'bg-blue-5/40';
            }
            if (status === 'correct') {
              itemStyle = 'bg-green-5 shadow-[0_0_0_2px_#2a8703]';
            } else if (status === 'incorrect') {
              itemStyle = 'bg-red-5 shadow-[0_0_0_2px_#ea1100]';
            }

            return (
              <motion.button
                key={item.id}
                onClick={() => handleLeftClick(item.id)}
                disabled={submitted}
                className={`w-full text-left p-3 rounded-xl transition-all duration-200 min-h-[48px] ${itemStyle} ${
                  submitted ? 'cursor-default' : ''
                }`}
                whileHover={!submitted ? { scale: 1.01 } : {}}
                whileTap={!submitted ? { scale: 0.99 } : {}}
              >
                <div className="flex items-center gap-2">
                  <span className="flex-1 text-[14px] text-gray-130 font-medium">{item.text}</span>
                  {status === 'correct' && <CheckCircle size={16} className="text-green-100" />}
                  {status === 'incorrect' && <XCircle size={16} className="text-red-100" />}
                  {matchedRightId && !submitted && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClearMatch(item.id);
                      }}
                      className="w-5 h-5 rounded-full bg-gray-20 hover:bg-red-100 text-gray-50 hover:text-white flex items-center justify-center text-[10px]"
                      aria-label="Clear match"
                    >
                      ×
                    </button>
                  )}
                </div>
                {matchedRightText && (
                  <p className="text-[11px] text-gray-50 mt-1 flex items-center gap-1">
                    <Link2 size={10} /> {matchedRightText.slice(0, 30)}...
                  </p>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Right column */}
        <div className="space-y-2">
          <p className="text-[11px] font-semibold text-gray-50 uppercase tracking-wider mb-2">Definitions</p>
          {rightItems.map((item) => {
            const isMatched = isRightMatched(item.id);
            const canSelect = selectedLeft && !submitted;
            
            let itemStyle = 'bg-gray-5/60';
            if (canSelect && !isMatched) {
              itemStyle = 'bg-gray-5/60 hover:bg-spark-5 cursor-pointer border-2 border-dashed border-blue-100/30';
            } else if (isMatched && !submitted) {
              itemStyle = 'bg-gray-10 opacity-60';
            }
            if (submitted) {
              // Find which left matched this right
              const matchedLeft = Object.entries(matches).find(([, r]) => r === item.id)?.[0];
              if (matchedLeft === item.id) {
                itemStyle = 'bg-green-5';
              } else if (matchedLeft) {
                itemStyle = 'bg-red-5';
              }
            }

            return (
              <motion.button
                key={item.id}
                onClick={() => handleRightClick(item.id)}
                disabled={submitted || !canSelect || isMatched}
                className={`w-full text-left p-3 rounded-xl transition-all duration-200 min-h-[48px] ${itemStyle} ${
                  (submitted || !canSelect) ? 'cursor-default' : ''
                }`}
                whileHover={canSelect && !isMatched ? { scale: 1.01 } : {}}
                whileTap={canSelect && !isMatched ? { scale: 0.99 } : {}}
              >
                <span className="text-[14px] text-gray-130 leading-relaxed">{item.text}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Submit */}
      {!submitted && (
        <Button onClick={handleSubmit} disabled={!allMatched} size="md">
          Check Matches
        </Button>
      )}

      {/* Feedback */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={`mt-6 p-5 rounded-2xl text-[15px] leading-relaxed ${
              isFullyCorrect
                ? 'bg-gradient-to-br from-green-5 to-white'
                : 'bg-gradient-to-br from-red-5 to-white'
            }`}
          >
            <div className="flex items-start gap-3">
              {isFullyCorrect ? (
                <div className="w-8 h-8 rounded-xl bg-green-100/10 flex items-center justify-center shrink-0">
                  <CheckCircle size={18} className="text-green-100" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-xl bg-red-100/10 flex items-center justify-center shrink-0">
                  <XCircle size={18} className="text-red-100" />
                </div>
              )}
              <div>
                <p className="text-gray-130 mb-1">{feedbackText}</p>
                <p className="text-[13px] text-gray-50">
                  You matched {correctCount} of {question.pairs.length} correctly.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
