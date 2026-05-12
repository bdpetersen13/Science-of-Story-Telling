import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Lightbulb } from 'lucide-react';
import Button from '../common/Button';

export default function MultipleChoiceQuiz({ question, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const isCorrect = submitted && question.options.find((o) => o.id === selected)?.correct;

  const handleSubmit = useCallback(() => {
    if (!selected) return;
    setSubmitted(true);
    const correct = question.options.find((o) => o.id === selected)?.correct || false;
    onAnswer?.({
      questionId: question.id,
      selectedOption: selected,
      correct,
      conceptKey: question.conceptKey,
    });
  }, [selected, question, onAnswer]);

  const feedbackText = isCorrect ? question.feedback.correct : question.feedback.incorrect;

  return (
    <div className="surface-card p-7 my-6">
      {/* Question */}
      <p className="text-[17px] font-medium text-gray-160 mb-6 leading-relaxed tracking-tight">
        {question.question}
      </p>

      {/* Options */}
      <fieldset className="space-y-3 mb-6">
        <legend className="sr-only">Answer options</legend>
        {question.options.map((opt) => {
          let optionStyle = 'bg-gray-5/60 hover:bg-blue-5/60 hover:shadow-[0_0_0_1px_rgba(0,83,226,0.15)]';
          if (selected === opt.id && !submitted) {
            optionStyle = 'bg-blue-5 shadow-[0_0_0_2px_#0053e2]';
          }
          if (submitted && opt.correct) {
            optionStyle = 'bg-green-5 shadow-[0_0_0_2px_#2a8703]';
          }
          if (submitted && selected === opt.id && !opt.correct) {
            optionStyle = 'bg-red-5 shadow-[0_0_0_2px_#ea1100]';
          }

          return (
            <motion.label
              key={opt.id}
              whileHover={!submitted ? { scale: 1.01 } : {}}
              whileTap={!submitted ? { scale: 0.99 } : {}}
              className={`flex items-start gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-200 min-h-[48px] ${
                submitted ? 'cursor-default' : ''
              } ${optionStyle}`}
            >
              <input
                type="radio"
                name={question.id}
                value={opt.id}
                checked={selected === opt.id}
                onChange={() => !submitted && setSelected(opt.id)}
                disabled={submitted}
                className="mt-1 accent-blue-100 min-w-[18px] min-h-[18px]"
              />
              <span className="text-[15px] text-gray-130 leading-relaxed flex-1">{opt.text}</span>
              {submitted && opt.correct && (
                <CheckCircle size={20} className="text-green-100 shrink-0 mt-0.5" />
              )}
              {submitted && selected === opt.id && !opt.correct && (
                <XCircle size={20} className="text-red-100 shrink-0 mt-0.5" />
              )}
            </motion.label>
          );
        })}
      </fieldset>

      {/* Actions */}
      {!submitted && (
        <div className="flex items-center gap-3">
          <Button onClick={handleSubmit} disabled={!selected} size="md">
            Check Answer
          </Button>
          {question.hint && !showHint && (
            <Button variant="ghost" size="sm" onClick={() => setShowHint(true)}>
              <Lightbulb size={16} />
              Need a hint?
            </Button>
          )}
        </div>
      )}

      {/* Hint */}
      <AnimatePresence>
        {showHint && !submitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="mt-5 p-4 bg-gradient-to-br from-spark-5 to-white rounded-2xl"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-spark-100/10 flex items-center justify-center shrink-0">
                <Lightbulb size={16} className="text-spark-140" />
              </div>
              <p className="text-[14px] text-gray-130 leading-relaxed">{question.hint}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Feedback */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={`mt-6 p-5 rounded-2xl text-[15px] leading-relaxed ${
              isCorrect
                ? 'bg-gradient-to-br from-green-5 to-white'
                : 'bg-gradient-to-br from-red-5 to-white'
            }`}
          >
            <div className="flex items-start gap-3">
              {isCorrect ? (
                <div className="w-8 h-8 rounded-xl bg-green-100/10 flex items-center justify-center shrink-0">
                  <CheckCircle size={18} className="text-green-100" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-xl bg-red-100/10 flex items-center justify-center shrink-0">
                  <XCircle size={18} className="text-red-100" />
                </div>
              )}
              <p className="text-gray-130">{feedbackText}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
