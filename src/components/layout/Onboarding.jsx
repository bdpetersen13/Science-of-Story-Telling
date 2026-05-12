import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import { useCourse } from '../../store/CourseContext';

const AVATARS = [
  { id: 'writer', emoji: '✍️', label: 'The Writer' },
  { id: 'explorer', emoji: '🧭', label: 'The Explorer' },
  { id: 'thinker', emoji: '🧐', label: 'The Thinker' },
  { id: 'dreamer', emoji: '🌙', label: 'The Dreamer' },
  { id: 'alchemist', emoji: '✨', label: 'The Alchemist' },
  { id: 'sage', emoji: '🧙', label: 'The Sage' },
  { id: 'architect', emoji: '🏗️', label: 'The Architect' },
  { id: 'phoenix', emoji: '🔥', label: 'The Phoenix' },
  { id: 'voyager', emoji: '🚀', label: 'The Voyager' },
  { id: 'oracle', emoji: '🔮', label: 'The Oracle' },
];

const pageVariants = {
  enter: { opacity: 0, y: 40, scale: 0.96 },
  center: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -30, scale: 0.96 },
};

const pageTransition = {
  type: 'spring',
  stiffness: 260,
  damping: 24,
};

export default function Onboarding() {
  const { update, refreshStore } = useCourse();
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState(null);

  function handleComplete() {
    update({
      profile: {
        name: name.trim() || 'Storyteller',
        avatar,
        createdAt: new Date().toISOString(),
        onboardingComplete: true,
      },
    });
    refreshStore();
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(77,139,239,0.3)_0%,transparent_60%)]" />

      {/* Floating orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-blue-50/10 blur-[100px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '-10%', right: '-10%' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-spark-100/8 blur-[80px]"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ bottom: '10%', left: '-5%' }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-lg px-6">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="welcome"
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={pageTransition}
              className="text-center"
            >
              {/* Hero emoji with glow */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.2 }}
                className="relative inline-block mb-10"
              >
                <div className="absolute inset-0 bg-spark-100/20 rounded-full blur-2xl scale-150" />
                <span className="relative text-7xl block">📚</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-caption text-blue-10/60 mb-4 tracking-[0.15em]"
              >
                INTERACTIVE COURSE
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-display text-4xl md:text-5xl text-white mb-5"
              >
                The Science of
                <br />
                <span className="bg-gradient-to-r from-spark-100 to-spark-50 bg-clip-text text-transparent">
                  Storytelling
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-[17px] text-blue-10/70 leading-relaxed mb-3 max-w-sm mx-auto"
              >
                Discover the neuroscience, psychology, and craft behind
                stories that captivate the human mind.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-[13px] text-blue-10/40 mb-12"
              >
                Based on Will Storr’s groundbreaking book
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Button onClick={() => setStep(1)} size="lg" variant="accent">
                  <Sparkles size={20} />
                  Begin Your Journey
                </Button>
              </motion.div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="name"
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={pageTransition}
            >
              <div className="surface-card p-8 md:p-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.1 }}
                  className="w-14 h-14 rounded-2xl bg-blue-5 flex items-center justify-center text-2xl mb-6"
                >
                  ✍️
                </motion.div>

                <h2 className="text-headline text-2xl text-gray-160 mb-2">
                  What should we call you?
                </h2>
                <p className="text-[15px] text-gray-100 mb-8 leading-relaxed">
                  Your name will appear throughout your learning journey.
                </p>

                <label htmlFor="user-name" className="sr-only">Your name</label>
                <input
                  id="user-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name..."
                  maxLength={30}
                  className="w-full rounded-2xl border-0 bg-gray-5 px-5 py-4 text-[17px] text-gray-160 placeholder:text-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 min-h-[52px]"
                  autoFocus
                />

                <div className="flex justify-between mt-8">
                  <Button variant="ghost" onClick={() => setStep(0)} size="sm">
                    Back
                  </Button>
                  <Button onClick={() => setStep(2)} disabled={!name.trim()} size="md">
                    Continue
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="avatar"
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={pageTransition}
            >
              <div className="surface-card p-8 md:p-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.1 }}
                  className="w-14 h-14 rounded-2xl bg-spark-5 flex items-center justify-center text-2xl mb-6"
                >
                  🎭
                </motion.div>

                <h2 className="text-headline text-2xl text-gray-160 mb-2">
                  Choose your archetype
                </h2>
                <p className="text-[15px] text-gray-100 mb-8 leading-relaxed">
                  Every great story needs a protagonist. Who are you?
                </p>

                <div className="grid grid-cols-5 gap-3 mb-8">
                  {AVATARS.map((a, i) => (
                    <motion.button
                      key={a.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 * i, type: 'spring', stiffness: 300 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setAvatar(a.id)}
                      className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl transition-all duration-200 min-h-[44px] min-w-[44px] ${
                        avatar === a.id
                          ? 'bg-blue-5 shadow-[0_0_0_2px_#0053e2,0_4px_12px_rgba(0,83,226,0.15)]'
                          : 'bg-gray-5 hover:bg-gray-10'
                      }`}
                      aria-label={a.label}
                      aria-pressed={avatar === a.id}
                    >
                      <span className="text-2xl">{a.emoji}</span>
                      <span className="text-[10px] font-medium text-gray-100 leading-tight">{a.label}</span>
                    </motion.button>
                  ))}
                </div>

                <div className="flex justify-between">
                  <Button variant="ghost" onClick={() => setStep(1)} size="sm">
                    Back
                  </Button>
                  <Button onClick={handleComplete} disabled={!avatar} size="md">
                    <BookOpen size={18} />
                    Start Learning
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
