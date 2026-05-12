/**
 * Analytics Dashboard
 * Visual progress tracking with charts and insights
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Legend, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import {
  TrendingUp, Award, BookOpen, Target, Brain, Clock,
  ChevronLeft, Download, Share2,
} from 'lucide-react';
import { useCourse } from '../../store/CourseContext';
import {
  getOverallProgress, getPartProgress, getChapterProgress,
  PART_RANGES, TOTAL_CHAPTERS,
} from '../../store/progress';
import { getLevelInfo, getAllBadges, getEarnedBadges, BADGE_DEFS } from '../../store/gamification';
import { getReviewStats } from '../../store/spacedRepetition';
import { CHAPTERS } from '../../data/chapters';
import Button from '../common/Button';

const WALMART_COLORS = {
  blue: '#0053e2',
  spark: '#ffc220',
  green: '#2a8703',
  red: '#ea1100',
  cyan: '#00a3d0',
  purple: '#7b2d8e',
  gray: '#74767c',
};

const PART_COLORS = [WALMART_COLORS.blue, WALMART_COLORS.spark, WALMART_COLORS.green, WALMART_COLORS.purple];

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.08 } } },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  },
};

export default function AnalyticsPage() {
  const navigate = useNavigate();
  const { store } = useCourse();
  const overall = getOverallProgress();
  const reviewStats = getReviewStats();
  const allBadges = getAllBadges();
  const earnedBadges = getEarnedBadges();

  // Prepare chart data
  const quizScoreData = CHAPTERS.slice(0, 35).map((ch) => {
    const progress = getChapterProgress(ch.id);
    return {
      name: `Ch ${ch.id}`,
      score: progress.quizScore || 0,
      stars: progress.stars || 0,
      part: ch.part,
    };
  });

  const partProgressData = Object.entries(PART_RANGES).map(([partNum, info]) => {
    const pp = getPartProgress(Number(partNum));
    return {
      name: info.title,
      completed: pp.completed,
      remaining: pp.total - pp.completed,
      total: pp.total,
      percent: pp.percent,
    };
  });

  const badgesByPart = Object.entries(PART_RANGES).map(([partNum, info]) => {
    const partBadges = allBadges.filter((b) => b.part === Number(partNum));
    const earned = partBadges.filter((b) => b.earned).length;
    return {
      part: `Part ${partNum}`,
      earned,
      total: partBadges.length,
      percent: Math.round((earned / partBadges.length) * 100) || 0,
    };
  });

  // Concept mastery radar
  const conceptMasteryData = [
    { subject: 'Part 1', value: getPartProgress(1).percent, fullMark: 100 },
    { subject: 'Part 2', value: getPartProgress(2).percent, fullMark: 100 },
    { subject: 'Part 3', value: getPartProgress(3).percent, fullMark: 100 },
    { subject: 'Part 4', value: getPartProgress(4).percent, fullMark: 100 },
  ];

  const totalStars = quizScoreData.reduce((sum, ch) => sum + ch.stars, 0);
  const avgScore = quizScoreData.filter((c) => c.score > 0).length > 0
    ? Math.round(quizScoreData.reduce((sum, c) => sum + c.score, 0) / quizScoreData.filter((c) => c.score > 0).length)
    : 0;

  return (
    <motion.div
      variants={stagger.container}
      initial="initial"
      animate="animate"
      className="max-w-6xl mx-auto px-6 py-8 pb-20"
    >
      {/* Header */}
      <motion.div variants={stagger.item} className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="p-2 rounded-xl hover:bg-gray-10 transition-colors"
            aria-label="Back to dashboard"
          >
            <ChevronLeft size={24} className="text-gray-100" />
          </button>
          <div>
            <h1 className="text-headline text-[28px] text-gray-160">Analytics Dashboard</h1>
            <p className="text-[15px] text-gray-100">Visualize your learning journey</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" onClick={() => navigate('/certificate')}>
            <Award size={18} className="mr-2" />
            Certificate
          </Button>
        </div>
      </motion.div>

      {/* Summary Cards */}
      <motion.div variants={stagger.item} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <SummaryCard
          icon={BookOpen}
          label="Course Progress"
          value={`${overall.percent}%`}
          subtext={`${overall.completed}/${overall.total} chapters`}
          color="blue"
        />
        <SummaryCard
          icon={Target}
          label="Avg Quiz Score"
          value={`${avgScore}%`}
          subtext={`${totalStars}/${TOTAL_CHAPTERS * 3} stars`}
          color="spark"
        />
        <SummaryCard
          icon={Award}
          label="Badges Earned"
          value={`${earnedBadges.length}`}
          subtext={`of ${allBadges.length} total`}
          color="green"
        />
        <SummaryCard
          icon={Brain}
          label="Concepts Mastered"
          value={`${reviewStats.mastered}`}
          subtext={`${reviewStats.due} due for review`}
          color="purple"
        />
      </motion.div>

      {/* Charts Row 1 */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Quiz Scores by Chapter */}
        <motion.div variants={stagger.item} className="surface-card p-6">
          <h2 className="text-headline text-lg text-gray-160 mb-4">Quiz Scores by Chapter</h2>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={quizScoreData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={4} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                  formatter={(value) => [`${value}%`, 'Score']}
                />
                <Bar
                  dataKey="score"
                  fill={WALMART_COLORS.blue}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Part Completion Pie */}
        <motion.div variants={stagger.item} className="surface-card p-6">
          <h2 className="text-headline text-lg text-gray-160 mb-4">Part Completion</h2>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={partProgressData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="completed"
                  nameKey="name"
                  label={({ name, percent }) => `${name.split(' ')[0]}: ${percent}%`}
                  labelLine={false}
                >
                  {partProgressData.map((entry, index) => (
                    <Cell key={entry.name} fill={PART_COLORS[index % PART_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                  formatter={(value, name, props) => [`${value}/${props.payload.total}`, 'Chapters']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Mastery Radar */}
        <motion.div variants={stagger.item} className="surface-card p-6">
          <h2 className="text-headline text-lg text-gray-160 mb-4">Mastery by Part</h2>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={conceptMasteryData}>
                <PolarGrid stroke="#e5e5e5" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
                <Radar
                  name="Mastery"
                  dataKey="value"
                  stroke={WALMART_COLORS.blue}
                  fill={WALMART_COLORS.blue}
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Badges by Part */}
        <motion.div variants={stagger.item} className="surface-card p-6">
          <h2 className="text-headline text-lg text-gray-160 mb-4">Badges by Part</h2>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={badgesByPart} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                <XAxis type="number" domain={[0, 'dataMax']} />
                <YAxis type="category" dataKey="part" tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                  formatter={(value, name, props) => [`${value}/${props.payload.total}`, 'Badges']}
                />
                <Bar dataKey="earned" fill={WALMART_COLORS.spark} radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Insights */}
      <motion.div variants={stagger.item} className="surface-card p-6">
        <h2 className="text-headline text-lg text-gray-160 mb-4">📊 Insights</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <InsightCard
            title="Strongest Area"
            value={getStrongestPart(partProgressData)}
            description="Your highest completion rate"
            color="green"
          />
          <InsightCard
            title="Growth Opportunity"
            value={getWeakestPart(partProgressData)}
            description="Focus here for improvement"
            color="spark"
          />
          <InsightCard
            title="Review Status"
            value={reviewStats.due > 0 ? `${reviewStats.due} concepts due` : 'All caught up! ✨'}
            description={reviewStats.struggling > 0 ? `${reviewStats.struggling} need extra practice` : 'Great retention!'}
            color={reviewStats.due > 0 ? 'red' : 'green'}
          />
          <InsightCard
            title="Course Status"
            value={overall.percent === 100 ? 'Complete! 🎉' : `${100 - overall.percent}% remaining`}
            description={overall.percent === 100 ? 'Congratulations, Master Storyteller!' : `${overall.total - overall.completed} chapters to go`}
            color="blue"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function SummaryCard({ icon: Icon, label, value, subtext, color }) {
  const colors = {
    blue: 'bg-blue-5 text-blue-100',
    spark: 'bg-spark-5 text-spark-140',
    green: 'bg-green-5 text-green-100',
    purple: 'bg-purple-5 text-purple-100',
    red: 'bg-red-5 text-red-100',
  };
  return (
    <div className="surface-card p-5">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${colors[color] || colors.blue}`}>
        <Icon size={20} />
      </div>
      <p className="text-[24px] font-bold text-gray-160 tabular-nums leading-tight">{value}</p>
      <p className="text-[13px] text-gray-100 mt-1">{label}</p>
      <p className="text-[11px] text-gray-50 mt-0.5">{subtext}</p>
    </div>
  );
}

function InsightCard({ title, value, description, color }) {
  const borderColors = {
    blue: 'border-l-blue-100',
    spark: 'border-l-spark-100',
    green: 'border-l-green-100',
    red: 'border-l-red-100',
    purple: 'border-l-purple-100',
  };
  return (
    <div className={`bg-gray-5 dark:bg-gray-160/5 rounded-xl p-4 border-l-4 ${borderColors[color] || borderColors.blue}`}>
      <p className="text-[12px] text-gray-100 uppercase tracking-wide mb-1">{title}</p>
      <p className="text-[18px] font-semibold text-gray-160">{value}</p>
      <p className="text-[12px] text-gray-50 mt-1">{description}</p>
    </div>
  );
}

function getStrongestPart(data) {
  const sorted = [...data].sort((a, b) => b.percent - a.percent);
  return sorted[0]?.name || 'N/A';
}

function getWeakestPart(data) {
  const incomplete = data.filter((p) => p.percent < 100);
  if (incomplete.length === 0) return 'All complete!';
  const sorted = [...incomplete].sort((a, b) => a.percent - b.percent);
  return sorted[0]?.name || 'N/A';
}
