import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import Button from '../common/Button';

/**
 * Fill-in-the-Blank Quiz
 * User selects words to complete a sentence.
 * 
 * Question format:
 * {
 *   id: 'q1',
 *   type: 'fill-blank',
 *   question: 'Complete the sentence:',
 *   sentence: 'The brain creates a _____ of reality based on _____.',
 *   blanks: [
 *     { id: 'b1', answer: 'model', options: ['model', 'copy', 'picture'] },
 *     { id: 'b2', answer: 'predictions', options: ['predictions', 'facts', 'memories'] },
 *   ],
 *   feedback: { correct: '...', incorrect: '...' },
 *   conceptKey: 'brain-model',
 * }
 */
export default function FillBlankQuiz({ question, onAnswer }) {
  const [selected, setSelected] = useState({}); // { blankId: selectedWord }
  const [submitted, setSubmitted] = useState(false);

  const allFilled = Object.keys(selected).length === question.blanks.length;

  const getBlankStatus = (blankId) => {
    if (!submitted) return null;
    const blank = question.blanks.find((b) => b.id === blankId);
    return selected[blankId] === blank?.answer ? 'correct' : 'incorrect';
  };

  const correctCount = submitted
    ? question.blanks.filter((b) => selected[b.id] === b.answer).length
    : 0;
  const isFullyCorrect = correctCount === question.blanks.length;

  const handleSelect = (blankId, word) => {
    if (submitted) return;
    setSelected((prev) => ({ ...prev, [blankId]: word }));
  };

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
    const correct = question.blanks.every((b) => selected[b.id] === b.answer);
    onAnswer?.({
      questionId: question.id,
      answers: selected,
      correct,
      conceptKey: question.conceptKey,
    });
  }, [selected, question, onAnswer]);

  const feedbackText = isFullyCorrect ? question.feedback.correct : question.feedback.incorrect;

  // Parse sentence and replace _____ with interactive blanks
  const renderSentence = () => {
    const parts = question.sentence.split('_____');
    const elements = [];

    parts.forEach((part, i) => {
      elements.push(
        <span key={`text-${i}`} className="text-gray-130">
          {part}
        </span>
      );

      if (i < question.blanks.length) {
        const blank = question.blanks[i];
        const status = getBlankStatus(blank.id);
        const selectedWord = selected[blank.id];

        let blankStyle = 'bg-blue-5 border-blue-100/30 text-blue-130';
        if (status === 'correct') {
          blankStyle = 'bg-green-5 border-green-100 text-green-130';
        } else if (status === 'incorrect') {
          blankStyle = 'bg-red-5 border-red-100 text-red-130';
        }

        elements.push(
          <span
            key={`blank-${blank.id}`}
            className={`inline-flex items-center gap-1 px-3 py-1 mx-1 rounded-lg border-2 border-dashed min-w-[80px] text-center font-medium transition-all ${blankStyle}`}
          >
            {selectedWord || (
              <span className="text-gray-50 font-normal">?</span>
            )}
            {status === 'correct' && <CheckCircle size={14} className="text-green-100" />}
            {status === 'incorrect' && <XCircle size={14} className="text-red-100" />}
          </span>
        );
      }
    });

    return elements;
  };

  return (
    <div className="surface-card p-7 my-6">
      {/* Question */}
      <p className="text-[17px] font-medium text-gray-160 mb-6 leading-relaxed tracking-tight">
        {question.question}
      </p>

      {/* Sentence with blanks */}
      <div className="text-[17px] leading-[2.2] mb-8 p-4 bg-gray-5/40 rounded-2xl">
        {renderSentence()}
      </div>

      {/* Word options for each blank */}
      <div className="space-y-5 mb-6">
        {question.blanks.map((blank, idx) => {
          const status = getBlankStatus(blank.id);
          const selectedWord = selected[blank.id];

          return (
            <div key={blank.id}>
              <p className="text-[13px] font-medium text-gray-50 mb-2">
                Blank {idx + 1}:
                {submitted && status === 'incorrect' && (
                  <span className="ml-2 text-green-100">
                    (Correct: {blank.answer})
                  </span>
                )}
              </p>
              <div className="flex flex-wrap gap-2">
                {blank.options.map((option) => {
                  const isSelected = selectedWord === option;
                  let optionStyle = 'bg-gray-5 hover:bg-blue-5 text-gray-130';
                  
                  if (isSelected && !submitted) {
                    optionStyle = 'bg-blue-100 text-white shadow-md';
                  } else if (submitted && option === blank.answer) {
                    optionStyle = 'bg-green-100 text-white';
                  } else if (submitted && isSelected && option !== blank.answer) {
                    optionStyle = 'bg-red-100 text-white';
                  }

                  return (
                    <motion.button
                      key={option}
                      onClick={() => handleSelect(blank.id, option)}
                      disabled={submitted}
                      whileHover={!submitted ? { scale: 1.03 } : {}}
                      whileTap={!submitted ? { scale: 0.97 } : {}}
                      className={`px-4 py-2 rounded-xl text-[14px] font-medium transition-all min-h-[40px] ${
                        submitted ? 'cursor-default' : 'cursor-pointer'
                      } ${optionStyle}`}
                    >
                      {option}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Submit */}
      {!submitted && (
        <Button onClick={handleSubmit} disabled={!allFilled} size="md">
          Check Answers
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
                <p className="text-gray-130">{feedbackText}</p>
                <p className="text-[13px] text-gray-50 mt-1">
                  {correctCount} of {question.blanks.length} blanks correct.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
