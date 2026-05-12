import { useState, useCallback } from 'react';
import { motion, Reorder } from 'framer-motion';
import { GripVertical, CheckCircle, XCircle } from 'lucide-react';
import Button from '../common/Button';

/**
 * Drag & Drop Ordering Quiz
 * User reorders items into the correct sequence.
 * 
 * Question format:
 * {
 *   id: 'q1',
 *   type: 'ordering',
 *   question: 'Put these story elements in order:',
 *   items: [
 *     { id: 'a', text: 'First item' },
 *     { id: 'b', text: 'Second item' },
 *     { id: 'c', text: 'Third item' },
 *   ],
 *   correctOrder: ['a', 'b', 'c'],
 *   feedback: { correct: '...', incorrect: '...' },
 *   conceptKey: 'story-structure',
 * }
 */
export default function DragDropQuiz({ question, onAnswer }) {
  // Shuffle items initially
  const [items, setItems] = useState(() => 
    shuffleArray([...question.items])
  );
  const [submitted, setSubmitted] = useState(false);

  const currentOrder = items.map((i) => i.id);
  const isCorrect = submitted && arraysEqual(currentOrder, question.correctOrder);

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
    const correct = arraysEqual(currentOrder, question.correctOrder);
    onAnswer?.({
      questionId: question.id,
      selectedOrder: currentOrder,
      correct,
      conceptKey: question.conceptKey,
    });
  }, [currentOrder, question, onAnswer]);

  // Get correct position for feedback
  const getItemStatus = (itemId) => {
    if (!submitted) return null;
    const currentIdx = currentOrder.indexOf(itemId);
    const correctIdx = question.correctOrder.indexOf(itemId);
    return currentIdx === correctIdx ? 'correct' : 'incorrect';
  };

  const feedbackText = isCorrect ? question.feedback.correct : question.feedback.incorrect;

  return (
    <div className="surface-card p-7 my-6">
      {/* Question */}
      <p className="text-[17px] font-medium text-gray-160 mb-2 leading-relaxed tracking-tight">
        {question.question}
      </p>
      <p className="text-[13px] text-gray-50 mb-6">
        Drag items to reorder them, or use the buttons.
      </p>

      {/* Reorderable list */}
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={submitted ? () => {} : setItems}
        className="space-y-2 mb-6"
      >
        {items.map((item, index) => {
          const status = getItemStatus(item.id);
          let itemStyle = 'bg-gray-5/60 hover:bg-blue-5/40';
          if (status === 'correct') {
            itemStyle = 'bg-green-5 shadow-[0_0_0_2px_#2a8703]';
          } else if (status === 'incorrect') {
            itemStyle = 'bg-red-5 shadow-[0_0_0_2px_#ea1100]';
          }

          return (
            <Reorder.Item
              key={item.id}
              value={item}
              disabled={submitted}
              className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-200 min-h-[52px] ${
                submitted ? 'cursor-default' : 'cursor-grab active:cursor-grabbing'
              } ${itemStyle}`}
              whileDrag={{ scale: 1.02, boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
            >
              {/* Drag handle */}
              <div className="text-gray-50 shrink-0">
                <GripVertical size={18} />
              </div>

              {/* Number badge */}
              <div className="w-7 h-7 rounded-lg bg-white/80 flex items-center justify-center shrink-0 text-[13px] font-bold text-gray-130">
                {index + 1}
              </div>

              {/* Text */}
              <span className="flex-1 text-[15px] text-gray-130 leading-relaxed">
                {item.text}
              </span>

              {/* Status icon */}
              {status === 'correct' && (
                <CheckCircle size={20} className="text-green-100 shrink-0" />
              )}
              {status === 'incorrect' && (
                <XCircle size={20} className="text-red-100 shrink-0" />
              )}

              {/* Keyboard controls */}
              {!submitted && (
                <div className="flex flex-col gap-0.5 shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (index > 0) {
                        const newItems = [...items];
                        [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
                        setItems(newItems);
                      }
                    }}
                    disabled={index === 0}
                    className="w-6 h-5 flex items-center justify-center rounded bg-white/60 hover:bg-white text-gray-100 disabled:opacity-30 disabled:cursor-not-allowed text-[10px]"
                    aria-label="Move up"
                  >
                    ▲
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (index < items.length - 1) {
                        const newItems = [...items];
                        [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
                        setItems(newItems);
                      }
                    }}
                    disabled={index === items.length - 1}
                    className="w-6 h-5 flex items-center justify-center rounded bg-white/60 hover:bg-white text-gray-100 disabled:opacity-30 disabled:cursor-not-allowed text-[10px]"
                    aria-label="Move down"
                  >
                    ▼
                  </button>
                </div>
              )}
            </Reorder.Item>
          );
        })}
      </Reorder.Group>

      {/* Submit */}
      {!submitted && (
        <Button onClick={handleSubmit} size="md">
          Check Order
        </Button>
      )}

      {/* Feedback */}
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
            <div>
              <p className="text-gray-130">{feedbackText}</p>
              {!isCorrect && (
                <p className="text-[13px] text-gray-50 mt-2">
                  Correct order: {question.correctOrder.map((id, i) => {
                    const item = question.items.find((it) => it.id === id);
                    return `${i + 1}. ${item?.text}`;
                  }).join(' → ')}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// Helpers
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function arraysEqual(a, b) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}
