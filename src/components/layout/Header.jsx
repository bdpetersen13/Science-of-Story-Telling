import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, BarChart2, Settings, Star, Flame, Zap, TrendingUp, Award } from 'lucide-react';
import { useCourse } from '../../store/CourseContext';
import { getLevelInfo, getStreak } from '../../store/gamification';
import { getDueReviews } from '../../store/spacedRepetition';

const avatarEmojis = {
  writer: '✍️', explorer: '🧭', thinker: '🤔', dreamer: '🌙',
  alchemist: '✨', sage: '🧙', architect: '🏗️', phoenix: '🔥',
  voyager: '🚀', oracle: '🔮',
};

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { store } = useCourse();
  const { profile, gamification } = store;
  const streak = getStreak();
  const dueCount = getDueReviews().length;
  const levelInfo = getLevelInfo(gamification.level);

  // Hide on onboarding / chapter pages (they have their own nav)
  if (!profile.onboardingComplete) return null;
  const isChapter = location.pathname.startsWith('/chapter/');
  if (isChapter) return null;

  const navItems = [
    { path: '/dashboard', icon: BookOpen, label: 'Learn' },
    { path: '/review', icon: Star, label: 'Review', badge: dueCount || null },
    { path: '/analytics', icon: TrendingUp, label: 'Analytics' },
    { path: '/progress', icon: BarChart2, label: 'Progress' },
    { path: '/certificate', icon: Award, label: 'Certificate' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <header className="sticky top-0 z-40 surface-glass border-b border-white/20">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Left: Logo + nav */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2.5 min-h-[44px]"
            aria-label="Home"
          >
            <span className="text-xl">📚</span>
            <span className="text-[15px] font-bold text-gray-160 tracking-tight hidden sm:block">
              Storytelling
            </span>
          </button>

          <nav className="flex items-center gap-1" aria-label="Main navigation">
            {navItems.map(({ path, icon: Icon, label, badge }) => {
              const isActive = location.pathname === path;
              return (
                <button
                  key={path}
                  onClick={() => navigate(path)}
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[13px] font-medium transition-all min-h-[36px] ${
                    isActive
                      ? 'text-blue-100 bg-blue-5'
                      : 'text-gray-50 hover:text-gray-130 hover:bg-gray-5/60'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{label}</span>
                  {badge && (
                    <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-spark-100 text-[10px] font-bold text-gray-160 rounded-full flex items-center justify-center min-w-[18px] min-h-[18px] px-1">
                      {badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right: Stats + avatar */}
        <div className="flex items-center gap-3">
          {streak.current > 0 && (
            <div className="flex items-center gap-1 text-[13px] font-semibold text-spark-140">
              <Flame size={14} className="text-spark-100" />
              <span className="tabular-nums">{streak.current}</span>
            </div>
          )}
          <div className="flex items-center gap-1 text-[13px] font-semibold text-blue-100">
            <Zap size={14} />
            <span className="tabular-nums">{gamification.xp.toLocaleString()}</span>
          </div>
          <div
            className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-100 to-blue-130 flex items-center justify-center text-sm cursor-pointer"
            title={`${profile.name} · Level ${gamification.level} ${levelInfo.title}`}
          >
            {avatarEmojis[profile.avatar] || '📚'}
          </div>
        </div>
      </div>
    </header>
  );
}
