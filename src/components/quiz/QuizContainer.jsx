import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Sparkles } from 'lucide-react';
import MultipleChoiceQuiz from './MultipleChoiceQuiz';
import DragDropQuiz from './DragDropQuiz';
import MatchingQuiz from './MatchingQuiz';
import FillBlankQuiz from './FillBlankQuiz';
import Button from '../common/Button';
import { StarRating } from '../common/ProgressBar';

// Map question types to components
const QUIZ_COMPONENTS = {
  'multiple-choice': MultipleChoiceQuiz,
  'ordering': DragDropQuiz,
  'matching': MatchingQuiz,
  'fill-blank': FillBlankQuiz,
  // Default fallback
  'default': MultipleChoiceQuiz,
};

// Render the appropriate quiz component based on question type
function renderQuestion(question, onAnswer) {
  const type = question.type || 'multiple-choice';
  const QuizComponent = QUIZ_COMPONENTS[type] || QUIZ_COMPONENTS['default'];
  
  return (
    <QuizComponent
      key={question.id}
      question={question}
      onAnswer={onAnswer}
    />
  );
}

export default function QuizContainer({ quizData, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const questions = quizData.questions;
  const totalQuestions = questions.length;
  const isSummative = quizData.quizType === 'summative';

  const handleAnswer = useCallback((result) => {
    setAnswers((prev) => ({ ...prev, [result.questionId]: result }));
  }, []);

  const handleNext = useCallback(() => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setFinished(true);
      const correctCount = Object.values(answers).filter((a) => a.correct).length;
      const score = Math.round((correctCount / totalQuestions) * 100);
      onComplete?.({
        score,
        correctCount,
        totalQuestions,
        answers,
        quizType: quizData.quizType,
        passed: isSummative ? score >= (quizData.passingScore || 70) : true,
      });
    }
  }, [currentIndex, totalQuestions, answers, onComplete, quizData, isSummative]);

  const currentQuestion = questions[currentIndex];
  const currentAnswered = answers[currentQuestion?.id];
  const correctCount = Object.values(answers).filter((a) => a.correct).length;
  const score = Math.round((correctCount / totalQuestions) * 100);

  if (finished) {
    const passed = !isSummative || score >= (quizData.passingScore || 70);
    const stars = score >= 90 ? 3 : score >= 70 ? 2 : score > 0 ? 1 : 0;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="surface-card p-10 my-6 text-center"
      >
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.2 }}
          className="relative inline-block mb-6"
        >
          {passed && (
            <div className="absolute inset-0 bg-spark-100/20 rounded-full blur-2xl scale-[2]" />
          )}
          <Trophy
            size={56}
            className={`relative ${passed ? 'text-spark-100' : 'text-gray-50'}`}
          />
        </motion.div>

        <h3 className="text-headline text-2xl text-gray-160 mb-3">
          {passed ? 'Excellent Work!' : 'Keep Practicing!'}
        </h3>

        <p className="text-[17px] text-gray-100 mb-2">
          You scored{' '}
          <span className="font-bold text-gray-160 tabular-nums">
            {correctCount}/{totalQuestions}
          </span>
        </p>
        <p className="text-[15px] text-gray-50 mb-6 tabular-nums">{score}%</p>

        {isSummative && (
          <div className="flex justify-center mb-6">
            <StarRating stars={stars} />
          </div>
        )}

        {passed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-[14px] text-green-130 bg-green-5 rounded-2xl py-3 px-5 mx-auto w-fit"
          >
            <Sparkles size={16} className="text-spark-100" />
            Chapter complete! XP awarded.
          </motion.div>
        )}

        {!passed && (
          <p className="text-[14px] text-red-100 bg-red-5 rounded-2xl py-3 px-5 mx-auto w-fit">
            You need {quizData.passingScore || 70}% to pass. Review the material and try again!
          </p>
        )}
      </motion.div>
    );
  }

  return (
    <div className="my-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-headline text-xl text-gray-160">
          {quizData.title}
        </h3>
        <span className="text-[13px] font-semibold text-gray-50 bg-gray-5 px-3.5 py-1.5 rounded-full tabular-nums">
          {currentIndex + 1} / {totalQuestions}
        </span>
      </div>

      {/* Progress dots */}
      <div className="flex gap-1.5 mb-6">
        {questions.map((q, i) => {
          const answered = answers[q.id];
          let dotColor = 'bg-gray-20/60';
          if (answered?.correct) dotColor = 'bg-green-100';
          else if (answered && !answered.correct) dotColor = 'bg-red-100';
          else if (i === currentIndex) dotColor = 'bg-blue-100';
          return (
            <div
              key={q.id}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${dotColor}`}
            />
          );
        })}
      </div>

      {/* Question */}
      {renderQuestion(currentQuestion, handleAnswer)}

      {/* Next */}
      {currentAnswered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="flex justify-end mt-4"
        >
          <Button onClick={handleNext} size="md">
            {currentIndex < totalQuestions - 1 ? 'Next Question' : 'See Results'}
          </Button>
        </motion.div>
      )}
    </div>
  );
}
