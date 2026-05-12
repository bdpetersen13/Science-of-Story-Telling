import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Flame, Award, ArrowRight, Lock, CheckCircle, Star, Zap, Trophy } from 'lucide-react';
import { useCourse } from '../../store/CourseContext';
import { getChapterProgress, isChapterUnlocked, getPartProgress, getCurrentChapter, PART_RANGES } from '../../store/progress';
import { getLevelInfo, getLevelProgress, getNextLevelInfo, getEarnedBadges, getStreak } from '../../store/gamification';
import { getDueReviews } from '../../store/spacedRepetition';
import { CHAPTERS, BOSS_ASSESSMENTS } from '../../data/chapters';
import ProgressBar, { ProgressRing, StarRating } from '../common/ProgressBar';
import Button from '../common/Button';

const avatarEmojis = {
  writer: '✍️', explorer: '🧭', thinker: '🧐', dreamer: '🌙',
  alchemist: '✨', sage: '🧙', architect: '🏗️', phoenix: '🔥',
  voyager: '🚀', oracle: '🔮',
};

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.06 } } },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  },
};

export default function Dashboard() {
  const navigate = useNavigate();
  const { store } = useCourse();
  const { profile, gamification } = store;

  const currentChapter = getCurrentChapter();
  const levelInfo = getLevelInfo(gamification.level);
  const nextLevelInfo = getNextLevelInfo(gamification.level);
  const levelProgress = getLevelProgress();
  const streak = getStreak();
  const dueReviews = getDueReviews();
  const earnedBadges = getEarnedBadges();
  const currentChapterData = CHAPTERS[currentChapter - 1];

  return (
    <motion.div
      variants={stagger.container}
      initial="initial"
      animate="animate"
      className="max-w-5xl mx-auto px-6 py-8 pb-20"
    >
      {/* === Hero Header === */}
      <motion.div variants={stagger.item} className="mb-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-16 h-16 rounded-[22px] bg-gradient-to-br from-blue-100 to-blue-130 flex items-center justify-center text-3xl shadow-[0_4px_16px_rgba(0,83,226,0.25)]"
            >
              {avatarEmojis[profile.avatar] || '📚'}
            </motion.div>
            <div>
              <h1 className="text-headline text-[28px] text-gray-160">
                Welcome back, {profile.name}
              </h1>
              <p className="text-[15px] text-gray-100 mt-0.5">
                Level {gamification.level}
                <span className="mx-1.5 text-gray-20">·</span>
                {levelInfo.title}
              </p>
            </div>
          </div>

          {/* Stats pills */}
          <div className="flex items-center gap-3">
            {streak.current > 0 && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="surface-card-subtle flex items-center gap-2 px-4 py-2.5"
              >
                <Flame size={18} className="text-spark-100" />
                <div className="text-right">
                  <p className="text-[15px] font-bold text-gray-160 leading-tight tabular-nums">{streak.current}</p>
                  <p className="text-[11px] text-gray-50 leading-tight">day streak</p>
                </div>
              </motion.div>
            )}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="surface-card-subtle flex items-center gap-2 px-4 py-2.5"
            >
              <Zap size={18} className="text-blue-100" />
              <div className="text-right">
                <p className="text-[15px] font-bold text-gray-160 leading-tight tabular-nums">{gamification.xp.toLocaleString()}</p>
                <p className="text-[11px] text-gray-50 leading-tight">total XP</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Level progress */}
        <div className="mt-6">
          <ProgressBar
            percent={levelProgress.percent}
            label={nextLevelInfo ? `${levelProgress.xpToNext} XP to ${nextLevelInfo.title}` : 'Max Level!'}
            size="sm"
            color="blue"
          />
        </div>
      </motion.div>

      {/* === Review Banner === */}
      {dueReviews.length > 0 && (
        <motion.div
          variants={stagger.item}
          className="surface-card p-5 mb-8 flex items-center justify-between bg-gradient-to-r from-spark-5 to-white"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-spark-100/10 flex items-center justify-center">
              <Star size={22} className="text-spark-100" />
            </div>
            <div>
              <p className="text-title text-[15px] text-gray-160">
                {dueReviews.length} concept{dueReviews.length !== 1 ? 's' : ''} ready for review
              </p>
              <p className="text-[13px] text-gray-100 mt-0.5">
                Strengthen your memory with spaced repetition
              </p>
            </div>
          </div>
          <Button variant="accent" size="sm" onClick={() => navigate('/review')}>
            Review Now
          </Button>
        </motion.div>
      )}

      {/* === Continue Learning (Hero Card) === */}
      {currentChapterData && (
        <motion.div variants={stagger.item} className="mb-10">
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="gradient-hero rounded-[24px] p-8 md:p-10 relative overflow-hidden cursor-pointer"
            onClick={() => navigate(`/chapter/${currentChapter}`)}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate(`/chapter/${currentChapter}`)}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-spark-100/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4" />

            <div className="relative z-10">
              <p className="text-caption text-blue-10/50 mb-3 tracking-[0.15em]">
                CONTINUE YOUR JOURNEY
              </p>
              <h2 className="text-display text-3xl md:text-4xl text-white mb-3">
                Chapter {currentChapter}
              </h2>
              <p className="text-[20px] font-semibold text-blue-10/80 mb-2">
                {currentChapterData.title}
              </p>
              <p className="text-[15px] text-blue-10/50 mb-8 max-w-lg">
                {currentChapterData.subtitle}
              </p>
              <Button variant="accent" size="md">
                <BookOpen size={18} />
                Continue Reading
                <ArrowRight size={16} />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* === Parts Grid === */}
      <motion.div variants={stagger.item}>
        <h2 className="text-headline text-xl text-gray-160 mb-5">Course Overview</h2>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 mb-12">
        {Object.entries(PART_RANGES).map(([partNum, info]) => {
          const pp = getPartProgress(Number(partNum));
          const partChapters = CHAPTERS.filter((ch) => ch.part === Number(partNum));

          return (
            <motion.div
              key={partNum}
              variants={stagger.item}
              className="surface-card p-6"
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-caption text-blue-100/60 tracking-[0.12em] mb-1">
                    PART {partNum}
                  </p>
                  <h3 className="text-title text-[17px] text-gray-160">{info.title}</h3>
                </div>
                <ProgressRing percent={pp.percent} size={52} strokeWidth={4} />
              </div>

              <div className="space-y-1">
                {partChapters.map((ch) => {
                  const cp = getChapterProgress(ch.id);
                  const unlocked = isChapterUnlocked(ch.id);

                  return (
                    <motion.button
                      key={ch.id}
                      whileHover={unlocked ? { x: 4 } : {}}
                      onClick={() => unlocked && navigate(`/chapter/${ch.id}`)}
                      disabled={!unlocked}
                      className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-colors min-h-[40px] group ${
                        unlocked
                          ? 'hover:bg-gray-5 cursor-pointer'
                          : 'opacity-40 cursor-not-allowed'
                      }`}
                    >
                      {cp.completed ? (
                        <div className="w-6 h-6 rounded-lg bg-green-100/10 flex items-center justify-center shrink-0">
                          <CheckCircle size={14} className="text-green-100" />
                        </div>
                      ) : unlocked ? (
                        <div className="w-6 h-6 rounded-lg bg-blue-100/10 flex items-center justify-center shrink-0">
                          <BookOpen size={14} className="text-blue-100" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-lg bg-gray-10 flex items-center justify-center shrink-0">
                          <Lock size={12} className="text-gray-50" />
                        </div>
                      )}

                      <span className={`flex-1 text-[14px] ${
                        cp.completed ? 'text-gray-100' : 'text-gray-160 font-medium'
                      }`}>
                        {ch.id}. {ch.title}
                      </span>

                      {cp.stars > 0 && <StarRating stars={cp.stars} />}

                      {unlocked && !cp.completed && (
                        <ArrowRight size={14} className="text-gray-20 group-hover:text-blue-100 transition-colors" />
                      )}
                    </motion.button>
                  );
                })}

                {/* Boss Assessment */}
                {(() => {
                  const boss = BOSS_ASSESSMENTS.find((b) => b.part === Number(partNum));
                  if (!boss) return null;
                  const bossUnlocked = boss.requiredChapters.every((chId) => getChapterProgress(chId).completed);
                  const bossCompleted = store.progress.parts?.[partNum]?.bossCompleted;

                  return (
                    <motion.button
                      whileHover={bossUnlocked ? { x: 4 } : {}}
                      onClick={() => bossUnlocked && navigate(`/boss/${boss.id}`)}
                      disabled={!bossUnlocked}
                      className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-colors min-h-[40px] group mt-2 border-t border-gray-10 pt-3 ${
                        bossUnlocked
                          ? 'hover:bg-spark-5 cursor-pointer'
                          : 'opacity-40 cursor-not-allowed'
                      }`}
                    >
                      {bossCompleted ? (
                        <div className="w-6 h-6 rounded-lg bg-spark-100/20 flex items-center justify-center shrink-0">
                          <Trophy size={14} className="text-spark-140" />
                        </div>
                      ) : bossUnlocked ? (
                        <div className="w-6 h-6 rounded-lg bg-spark-100/10 flex items-center justify-center shrink-0">
                          <Trophy size={14} className="text-spark-100" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-lg bg-gray-10 flex items-center justify-center shrink-0">
                          <Lock size={12} className="text-gray-50" />
                        </div>
                      )}

                      <span className={`flex-1 text-[14px] ${
                        bossCompleted ? 'text-gray-100' : 'text-spark-140 font-semibold'
                      }`}>
                        🏆 {boss.title}
                      </span>

                      {bossUnlocked && !bossCompleted && (
                        <ArrowRight size={14} className="text-gray-20 group-hover:text-spark-100 transition-colors" />
                      )}
                    </motion.button>
                  );
                })()}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* === Badges === */}
      {earnedBadges.length > 0 && (
        <motion.div variants={stagger.item} className="mb-10">
          <h2 className="text-headline text-xl text-gray-160 mb-5">Your Collection</h2>
          <div className="flex flex-wrap gap-3">
            {earnedBadges.map((badge, i) => (
              <motion.div
                key={badge.id}
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15, delay: i * 0.08 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className="surface-card-subtle flex items-center gap-2.5 px-5 py-3"
              >
                <span className="text-xl">{badge.icon}</span>
                <div>
                  <p className="text-[13px] font-semibold text-gray-160 leading-tight">{badge.name}</p>
                  <p className="text-[11px] text-gray-50 leading-tight mt-0.5">{badge.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
