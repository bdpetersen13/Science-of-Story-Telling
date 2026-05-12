import { useState, useCallback, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, Volume2, VolumeX } from 'lucide-react';
import { getChapterById } from '../../data/chapters';
import ContentRenderer from './ContentRenderer';
import QuizContainer from '../quiz/QuizContainer';
import ExerciseRenderer from './ExerciseRenderer';
import Button from '../common/Button';
import ProgressBar from '../common/ProgressBar';
import { useCourse } from '../../store/CourseContext';
import { completeChapter, getChapterProgress, isChapterUnlocked } from '../../store/progress';
import { awardXP } from '../../store/gamification';
import { addConcept } from '../../store/spacedRepetition';

const chapterModules = {
  // Part 1: Creating a World
  1: () => import('../../data/chapters/chapter1.js'),
  2: () => import('../../data/chapters/chapter2.js'),
  3: () => import('../../data/chapters/chapter3.js'),
  4: () => import('../../data/chapters/chapter4.js'),
  5: () => import('../../data/chapters/chapter5.js'),
  6: () => import('../../data/chapters/chapter6.js'),
  7: () => import('../../data/chapters/chapter7.js'),
  8: () => import('../../data/chapters/chapter8.js'),
  // Part 2: The Flawed Self
  9: () => import('../../data/chapters/chapter9.js'),
  10: () => import('../../data/chapters/chapter10.js'),
  11: () => import('../../data/chapters/chapter11.js'),
  12: () => import('../../data/chapters/chapter12.js'),
  13: () => import('../../data/chapters/chapter13.js'),
  14: () => import('../../data/chapters/chapter14.js'),
  15: () => import('../../data/chapters/chapter15.js'),
  16: () => import('../../data/chapters/chapter16.js'),
  17: () => import('../../data/chapters/chapter17.js'),
  // Part 3: The Dramatic Question
  18: () => import('../../data/chapters/chapter18.js'),
  19: () => import('../../data/chapters/chapter19.js'),
  20: () => import('../../data/chapters/chapter20.js'),
  21: () => import('../../data/chapters/chapter21.js'),
  22: () => import('../../data/chapters/chapter22.js'),
  23: () => import('../../data/chapters/chapter23.js'),
  24: () => import('../../data/chapters/chapter24.js'),
  25: () => import('../../data/chapters/chapter25.js'),
  26: () => import('../../data/chapters/chapter26.js'),
  27: () => import('../../data/chapters/chapter27.js'),
  28: () => import('../../data/chapters/chapter28.js'),
  29: () => import('../../data/chapters/chapter29.js'),
  // Part 4: Plot, Endings & Meaning
  30: () => import('../../data/chapters/chapter30.js'),
  31: () => import('../../data/chapters/chapter31.js'),
  32: () => import('../../data/chapters/chapter32.js'),
  33: () => import('../../data/chapters/chapter33.js'),
  34: () => import('../../data/chapters/chapter34.js'),
  35: () => import('../../data/chapters/chapter35.js'),
};

const sectionVariants = {
  enter: (direction) => ({ opacity: 0, x: direction > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (direction) => ({ opacity: 0, x: direction > 0 ? -60 : 60 }),
};

export default function ChapterPage() {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const { refreshStore } = useCourse();
  const id = Number(chapterId);

  const [chapterContent, setChapterContent] = useState(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState(1);
  const [quizResults, setQuizResults] = useState({});
  const [ttsActive, setTtsActive] = useState(false);

  const meta = getChapterById(id);
  const progress = getChapterProgress(id);
  const unlocked = isChapterUnlocked(id);

  useEffect(() => {
    const loader = chapterModules[id];
    if (loader) {
      loader().then((mod) => {
        const content = mod[`chapter${id}`];
        setChapterContent(content);
        if (meta?.concepts) {
          meta.concepts.forEach((c) => addConcept(String(id), c));
        }
      });
    }
  }, [id, meta]);

  useEffect(() => {
    if (!unlocked) navigate('/dashboard');
  }, [unlocked, navigate]);

  const sections = chapterContent?.sections || [];
  const section = sections[currentSection];
  const totalSections = sections.length;
  const sectionProgress = Math.round(((currentSection + 1) / totalSections) * 100);

  const goTo = useCallback((idx) => {
    setDirection(idx > currentSection ? 1 : -1);
    setCurrentSection(idx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  const handleQuizComplete = useCallback((result) => {
    setQuizResults((prev) => ({ ...prev, [currentSection]: result }));
    if (result.quizType === 'summative' && result.passed) {
      completeChapter(id, result.score);
      refreshStore();
    }
  }, [currentSection, id, refreshStore]);

  const handleExerciseComplete = useCallback((result) => {
    if (result.xp) {
      awardXP(result.xp);
      refreshStore();
    }
  }, [refreshStore]);

  function toggleTTS() {
    if (ttsActive) {
      window.speechSynthesis?.cancel();
      setTtsActive(false);
    } else if (section?.type === 'content') {
      const text = section.content
        .filter((b) => b.type === 'text')
        .map((b) => b.value.replace(/\*\*/g, '').replace(/\*/g, ''))
        .join('. ');
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.onend = () => setTtsActive(false);
      window.speechSynthesis?.speak(utterance);
      setTtsActive(true);
    }
  }

  if (!meta || !chapterContent) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-10 h-10 border-[3px] border-blue-100 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[15px] text-gray-100">Loading chapter...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* === Immersive Chapter Hero === */}
      <div className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,194,32,0.1)_0%,transparent_50%)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 pt-8 pb-12">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-[13px] font-medium text-blue-10/50 hover:text-blue-10/80 transition-colors mb-8 min-h-[44px]"
          >
            <ArrowLeft size={14} />
            Back to Dashboard
          </button>

          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-caption text-blue-10/40 mb-3 tracking-[0.15em]">
                CHAPTER {id}
              </p>
              <h1 className="text-display text-3xl md:text-[40px] text-white mb-3 leading-[1.1]">
                {meta.title}
              </h1>
              <p className="text-[17px] text-blue-10/60 leading-relaxed max-w-lg">
                {meta.subtitle}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-blue-10/40">
              <Clock size={14} />
              <span className="text-[13px] font-medium">{meta.duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* === Floating Progress Bar === */}
      <div className="sticky top-0 z-30 surface-glass border-b border-white/20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-4 h-12">
            {/* Section dots */}
            <div className="flex-1 flex items-center gap-1">
              {sections.map((s, i) => {
                const isQuiz = s.type === 'quiz';
                const isActive = i === currentSection;
                const isPast = i < currentSection;

                return (
                  <button
                    key={s.id}
                    onClick={() => goTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 min-w-[8px] ${
                      isActive
                        ? 'flex-[3] bg-blue-100'
                        : isPast
                          ? `flex-1 ${isQuiz ? 'bg-green-100/60' : 'bg-blue-100/30'}`
                          : 'flex-1 bg-gray-20/60'
                    }`}
                    aria-label={`Go to section ${i + 1}: ${s.title || s.type}`}
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

      {/* === Section Content === */}
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
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-headline text-2xl text-gray-160">
                    {section.title}
                  </h2>
                  {window.speechSynthesis && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleTTS}
                      ariaLabel={ttsActive ? 'Stop reading' : 'Read aloud'}
                    >
                      {ttsActive ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </Button>
                  )}
                </div>
                <ContentRenderer blocks={section.content} />
              </div>
            )}

            {section?.type === 'quiz' && (
              <QuizContainer
                quizData={section}
                onComplete={handleQuizComplete}
              />
            )}

            {section?.type === 'exercise' && (
              <div>
                <h2 className="text-headline text-2xl text-gray-160 mb-6">
                  {section.title}
                </h2>
                {section.exercises.map((ex) => (
                  <ExerciseRenderer
                    key={ex.id}
                    exercise={ex}
                    onComplete={handleExerciseComplete}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* === Navigation === */}
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
              onClick={() => {
                const nextChapter = id + 1;
                if (isChapterUnlocked(nextChapter)) {
                  navigate(`/chapter/${nextChapter}`);
                } else {
                  navigate('/dashboard');
                }
              }}
            >
              {progress.completed ? 'Continue' : 'Finish Chapter'}
              <ArrowRight size={16} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
