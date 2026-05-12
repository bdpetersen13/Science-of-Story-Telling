import { useState, useCallback, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Trophy, Shield, AlertCircle } from 'lucide-react';
import { getBossAssessmentById } from '../../data/chapters';
import ContentRenderer from './ContentRenderer';
import QuizContainer from '../quiz/QuizContainer';
import Button from '../common/Button';
import { useCourse } from '../../store/CourseContext';
import { getChapterProgress, completeBossAssessment, getPartProgress, isPartComplete } from '../../store/progress';

const bossModules = {
  'boss-1': () => import('../../data/chapters/bossAssessment1.js'),
  'boss-2': () => import('../../data/chapters/bossAssessment2.js'),
  'boss-3': () => import('../../data/chapters/bossAssessment3.js'),
  'boss-4': () => import('../../data/chapters/bossAssessment4.js'),
};

const sectionVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

export default function BossAssessmentPage() {
  const { bossId } = useParams();
  const navigate = useNavigate();
  const { refreshStore } = useCourse();

  const [bossContent, setBossContent] = useState(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState(1);
  const [quizResult, setQuizResult] = useState(null);

  const meta = getBossAssessmentById(bossId);

  // Check if boss is unlocked (all required chapters complete)
  const isUnlocked = meta?.requiredChapters?.every((chId) => getChapterProgress(chId).completed) ?? false;

  useEffect(() => {
    if (!isUnlocked) {
      navigate('/dashboard');
      return;
    }
    const loader = bossModules[bossId];
    if (loader) {
      loader().then((mod) => {
        const content = mod.bossAssessment1;
        setBossContent(content);
      });
    }
  }, [bossId, isUnlocked, navigate]);

  const sections = bossContent?.sections || [];
  const section = sections[currentSection];
  const totalSections = sections.length;

  const goTo = useCallback((idx) => {
    setDirection(idx > currentSection ? 1 : -1);
    setCurrentSection(idx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  const handleQuizComplete = useCallback((result) => {
    setQuizResult(result);
    if (result.passed) {
      completeBossAssessment(meta.part, result.score);
      refreshStore();
    }
  }, [meta, refreshStore]);

  if (!meta || !bossContent) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <div className="w-10 h-10 border-[3px] border-spark-100 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[15px] text-gray-100">Loading assessment...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-spark-100 via-spark-50 to-spark-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.3)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-spark-140/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 pt-8 pb-12">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-[13px] font-medium text-gray-130/60 hover:text-gray-160 transition-colors mb-8 min-h-[44px]"
          >
            <ArrowLeft size={14} />
            Back to Dashboard
          </button>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/30 backdrop-blur flex items-center justify-center">
              <Trophy size={28} className="text-spark-140" />
            </div>
            <div>
              <p className="text-caption text-spark-140/70 tracking-[0.15em]">
                PART {meta.part} BOSS ASSESSMENT
              </p>
              <h1 className="text-display text-3xl md:text-[36px] text-gray-160 leading-[1.1]">
                {meta.title}
              </h1>
            </div>
          </div>
          <p className="text-[17px] text-gray-130/80 leading-relaxed max-w-lg">
            {meta.subtitle}
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="sticky top-0 z-30 surface-glass border-b border-white/20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-4 h-12">
            <div className="flex-1 flex items-center gap-1">
              {sections.map((s, i) => {
                const isActive = i === currentSection;
                const isPast = i < currentSection;
                return (
                  <button
                    key={s.id}
                    onClick={() => goTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 min-w-[8px] ${
                      isActive
                        ? 'flex-[3] bg-spark-100'
                        : isPast
                          ? 'flex-1 bg-spark-100/40'
                          : 'flex-1 bg-gray-20/60'
                    }`}
                    aria-label={`Go to section ${i + 1}`}
                  />
                );
              })}
            </div>
            <span className="text-[12px] font-medium text-gray-50 tabular-nums min-w-[40px] text-right">
              {currentSection + 1}/{totalSections}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-10">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSection}
            custom={direction}
            variants={sectionVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {section?.type === 'content' && (
              <div>
                <h2 className="text-headline text-2xl text-gray-160 mb-8">
                  {section.title}
                </h2>
                <ContentRenderer blocks={section.content} />
              </div>
            )}

            {section?.type === 'quiz' && (
              <QuizContainer
                quizData={section}
                onComplete={handleQuizComplete}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Result Banner */}
        {quizResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-8 p-6 rounded-2xl ${
              quizResult.passed
                ? 'bg-gradient-to-br from-green-5 to-white'
                : 'bg-gradient-to-br from-red-5 to-white'
            }`}
          >
            <div className="flex items-start gap-4">
              {quizResult.passed ? (
                <div className="w-12 h-12 rounded-2xl bg-green-100/10 flex items-center justify-center shrink-0">
                  <Shield size={24} className="text-green-100" />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-2xl bg-red-100/10 flex items-center justify-center shrink-0">
                  <AlertCircle size={24} className="text-red-100" />
                </div>
              )}
              <div>
                <h3 className="text-title text-lg text-gray-160 mb-1">
                  {quizResult.passed ? 'Assessment Passed!' : 'Not Quite There Yet'}
                </h3>
                <p className="text-[15px] text-gray-100 mb-3">
                  Score: {quizResult.score}% (Required: {meta.passingScore}%)
                </p>
                <p className="text-[14px] text-gray-100">
                  {quizResult.passed
                    ? 'You\'ve earned the World Builder badge and unlocked Part 2!'
                    : 'Review the chapters and try again. You\'ve got this!'}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-10/60">
          <Button
            variant="secondary"
            size="md"
            onClick={() => goTo(Math.max(0, currentSection - 1))}
            disabled={currentSection === 0}
          >
            <ArrowLeft size={16} />
            Previous
          </Button>

          {currentSection < totalSections - 1 ? (
            <Button
              variant="accent"
              size="md"
              onClick={() => goTo(currentSection + 1)}
            >
              Next
              <ArrowRight size={16} />
            </Button>
          ) : (
            <Button
              variant="accent"
              size="md"
              onClick={() => navigate('/dashboard')}
            >
              Return to Dashboard
              <ArrowRight size={16} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
