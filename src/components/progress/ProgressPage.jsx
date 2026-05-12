import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Award, Clock, Zap, Flame, TrendingUp } from 'lucide-react';
import { useCourse } from '../../store/CourseContext';
import { getOverallProgress, getPartProgress, getChapterProgress, PART_RANGES, TOTAL_CHAPTERS } from '../../store/progress';
import { getLevelInfo, getLevelProgress, getEarnedBadges, getAllBadges } from '../../store/gamification';
import { getReviewStats } from '../../store/spacedRepetition';
import ProgressBar, { ProgressRing, StarRating } from '../common/ProgressBar';

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.06 } } },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  },
};

export default function ProgressPage() {
  const { store } = useCourse();
  const { gamification } = store;
  const overall = getOverallProgress();
  const levelInfo = getLevelInfo(gamification.level);
  const levelProgress = getLevelProgress();
  const reviewStats = getReviewStats();
  const allBadges = getAllBadges();
  const earnedBadges = getEarnedBadges();

  const totalStars = Array.from({ length: TOTAL_CHAPTERS }, (_, i) =>
    getChapterProgress(i + 1).stars
  ).reduce((a, b) => a + b, 0);

  return (
    <motion.div
      variants={stagger.container}
      initial="initial"
      animate="animate"
      className="max-w-4xl mx-auto px-6 py-8 pb-20"
    >
      <motion.div variants={stagger.item} className="mb-10">
        <h1 className="text-headline text-[28px] text-gray-160 mb-2">Your Progress</h1>
        <p className="text-[15px] text-gray-100">Track your journey through the science of storytelling.</p>
      </motion.div>

      {/* Overview Cards */}
      <motion.div variants={stagger.item} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <StatCard icon={BookOpen} color="blue" label="Chapters" value={`${overall.completed}/${overall.total}`} />
        <StatCard icon={Zap} color="spark" label="Total XP" value={gamification.xp.toLocaleString()} />
        <StatCard icon={Award} color="green" label="Badges" value={`${earnedBadges.length}/${allBadges.length}`} />
        <StatCard icon={TrendingUp} color="blue" label="Stars" value={`${totalStars}/${TOTAL_CHAPTERS * 3}`} />
      </motion.div>

      {/* Level */}
      <motion.div variants={stagger.item} className="surface-card p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-caption text-blue-100/60 tracking-[0.12em] mb-1">LEVEL {gamification.level}</p>
            <h2 className="text-title text-[18px] text-gray-160">{levelInfo.title}</h2>
          </div>
          <ProgressRing percent={levelProgress.percent} size={56} strokeWidth={4} />
        </div>
        <ProgressBar
          percent={levelProgress.percent}
          label={levelProgress.xpToNext > 0 ? `${levelProgress.xpToNext} XP to next level` : 'Max level!'}
          size="sm"
          color="blue"
        />
      </motion.div>

      {/* Part Progress */}
      <motion.div variants={stagger.item}>
        <h2 className="text-headline text-xl text-gray-160 mb-5">Parts</h2>
      </motion.div>
      <div className="grid gap-4 md:grid-cols-2 mb-10">
        {Object.entries(PART_RANGES).map(([partNum, info]) => {
          const pp = getPartProgress(Number(partNum));
          return (
            <motion.div key={partNum} variants={stagger.item} className="surface-card p-6">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-caption text-blue-100/60 tracking-[0.12em] mb-1">PART {partNum}</p>
                  <h3 className="text-title text-[16px] text-gray-160">{info.title}</h3>
                </div>
                <ProgressRing percent={pp.percent} size={48} strokeWidth={4} />
              </div>
              <p className="text-[13px] text-gray-50">
                {pp.completed} of {pp.total} chapters complete
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Spaced Repetition */}
      <motion.div variants={stagger.item} className="surface-card p-6 mb-10">
        <h2 className="text-headline text-lg text-gray-160 mb-4">Memory Strength</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MiniStat label="Total concepts" value={reviewStats.total} />
          <MiniStat label="Due for review" value={reviewStats.due} highlight={reviewStats.due > 0} />
          <MiniStat label="Mastered" value={reviewStats.mastered} />
          <MiniStat label="Struggling" value={reviewStats.struggling} highlight={reviewStats.struggling > 0} warn />
        </div>
      </motion.div>

      {/* All Badges */}
      <motion.div variants={stagger.item}>
        <h2 className="text-headline text-xl text-gray-160 mb-5">Badge Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {allBadges.map((badge) => (
            <div
              key={badge.id}
              className={`surface-card-subtle flex items-center gap-3 p-4 transition-opacity ${
                badge.earned ? '' : 'opacity-30'
              }`}
            >
              <span className="text-2xl">{badge.icon}</span>
              <div className="min-w-0">
                <p className="text-[14px] font-semibold text-gray-160 truncate">{badge.name}</p>
                <p className="text-[12px] text-gray-50 truncate">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function StatCard({ icon: Icon, color, label, value }) {
  const colors = {
    blue: 'bg-blue-5 text-blue-100',
    spark: 'bg-spark-5 text-spark-140',
    green: 'bg-green-5 text-green-100',
  };
  return (
    <div className="surface-card p-5">
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${colors[color]}`}>
        <Icon size={18} />
      </div>
      <p className="text-[22px] font-bold text-gray-160 tabular-nums leading-tight">{value}</p>
      <p className="text-[12px] text-gray-50 mt-1">{label}</p>
    </div>
  );
}

function MiniStat({ label, value, highlight = false, warn = false }) {
  return (
    <div className="text-center py-2">
      <p className={`text-[24px] font-bold tabular-nums ${
        highlight ? (warn ? 'text-red-100' : 'text-spark-140') : 'text-gray-160'
      }`}>
        {value}
      </p>
      <p className="text-[12px] text-gray-50 mt-0.5">{label}</p>
    </div>
  );
}
