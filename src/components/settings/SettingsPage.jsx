import { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Type, Volume2, Gauge, Trash2, AlertTriangle, Monitor, Download, Share2, Copy, Check } from 'lucide-react';
import { useCourse } from '../../store/CourseContext';
import { useTheme } from '../../store/useTheme';
import { resetStore, getStore } from '../../store/storage';
import { getOverallProgress } from '../../store/progress';
import { getEarnedBadges, getLevelInfo } from '../../store/gamification';
import Button from '../common/Button';
import { ConfirmModal } from '../common/Modal';

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.05 } } },
  item: {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  },
};

export default function SettingsPage() {
  const { store, update, refreshStore } = useCourse();
  const { preferences } = store;
  const { theme, setTheme } = useTheme();
  const [showResetModal, setShowResetModal] = useState(false);
  const [copied, setCopied] = useState(false);

  function setPref(key, value) {
    update({ preferences: { ...preferences, [key]: value } });
  }

  function handleReset() {
    resetStore();
    refreshStore();
    window.location.reload();
  }

  function handleExportJSON() {
    const data = getStore();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `storytelling-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleCopyShareable() {
    const overall = getOverallProgress();
    const badges = getEarnedBadges();
    const levelInfo = getLevelInfo(store.gamification.level);
    
    const text = `📚 The Science of Storytelling Progress

✅ ${overall.completed}/${overall.total} chapters complete (${overall.percent}%)
⭐ Level ${store.gamification.level}: ${levelInfo.title}
🏆 ${badges.length} badges earned
⚡ ${store.gamification.xp.toLocaleString()} XP

Learning the science behind great stories! 🐶`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <>
      <ConfirmModal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        onConfirm={handleReset}
        title="Reset All Progress?"
        message="This will permanently delete all your progress, badges, XP, and settings. This action cannot be undone."
        confirmText="Yes, Reset Everything"
        cancelText="Cancel"
        variant="danger"
        icon={<AlertTriangle size={22} />}
      />
      <motion.div
      variants={stagger.container}
      initial="initial"
      animate="animate"
      className="max-w-2xl mx-auto px-6 py-8 pb-20"
    >
      <motion.div variants={stagger.item} className="mb-10">
        <h1 className="text-headline text-[28px] text-gray-160 mb-2">Settings</h1>
        <p className="text-[15px] text-gray-100">Customize your learning experience.</p>
      </motion.div>

      {/* Appearance */}
      <motion.div variants={stagger.item} className="surface-card p-6 mb-5">
        <h2 className="text-title text-[16px] text-gray-160 mb-5">Appearance</h2>

        <SettingRow
          icon={theme === 'dark' ? Moon : Sun}
          label="Theme"
          description="Choose light, dark, or follow your system preference"
          last
        >
          <SegmentedControl
            options={[
              { value: 'light', label: 'Light', icon: Sun },
              { value: 'dark', label: 'Dark', icon: Moon },
              { value: 'system', label: 'System', icon: Monitor },
            ]}
            value={theme}
            onChange={setTheme}
            showIcons
          />
        </SettingRow>
      </motion.div>

      {/* Accessibility */}
      <motion.div variants={stagger.item} className="surface-card p-6 mb-5">
        <h2 className="text-title text-[16px] text-gray-160 mb-5">Accessibility</h2>

        <SettingRow
          icon={Type}
          label="Font Size"
          description="Adjust text size for comfortable reading"
        >
          <SegmentedControl
            options={[
              { value: 'sm', label: 'Small' },
              { value: 'md', label: 'Medium' },
              { value: 'lg', label: 'Large' },
            ]}
            value={preferences.fontSize}
            onChange={(v) => setPref('fontSize', v)}
          />
        </SettingRow>

        <SettingRow
          icon={Volume2}
          label="Text-to-Speech"
          description="Read content aloud using your browser's speech engine"
        >
          <Toggle
            checked={preferences.ttsEnabled}
            onChange={(v) => setPref('ttsEnabled', v)}
            label="Enable TTS"
          />
        </SettingRow>

        {preferences.ttsEnabled && (
          <SettingRow icon={Gauge} label="Speech Rate" description="How fast the text is read aloud">
            <input
              type="range"
              min={0.5}
              max={2}
              step={0.1}
              value={preferences.ttsRate}
              onChange={(e) => setPref('ttsRate', Number(e.target.value))}
              className="w-32 accent-blue-100"
              aria-label="Speech rate"
            />
            <span className="text-[13px] text-gray-50 tabular-nums ml-2">{preferences.ttsRate}x</span>
          </SettingRow>
        )}

        <SettingRow
          icon={Moon}
          label="Reduced Motion"
          description="Minimize animations throughout the app"
          last
        >
          <Toggle
            checked={preferences.reducedMotion}
            onChange={(v) => setPref('reducedMotion', v)}
            label="Reduce motion"
          />
        </SettingRow>
      </motion.div>

      {/* Learning */}
      <motion.div variants={stagger.item} className="surface-card p-6 mb-5">
        <h2 className="text-title text-[16px] text-gray-160 mb-5">Learning</h2>

        <SettingRow
          icon={Gauge}
          label="Learning Pace"
          description="Controls how much content is shown per session"
          last
        >
          <SegmentedControl
            options={[
              { value: 'relaxed', label: 'Relaxed' },
              { value: 'moderate', label: 'Moderate' },
              { value: 'intensive', label: 'Intensive' },
            ]}
            value={preferences.learningPace}
            onChange={(v) => setPref('learningPace', v)}
          />
        </SettingRow>
      </motion.div>

      {/* Danger Zone */}
      <motion.div variants={stagger.item} className="surface-card p-6 border border-red-5 mb-5">
        <h2 className="text-title text-[16px] text-gray-160 mb-5">Data Management</h2>

        <SettingRow
          icon={Download}
          label="Export Progress"
          description="Download your complete progress data as a JSON file"
        >
          <Button variant="secondary" size="sm" onClick={handleExportJSON}>
            <Download size={14} />
            Export
          </Button>
        </SettingRow>

        <SettingRow
          icon={copied ? Check : Copy}
          label="Share Progress"
          description="Copy a shareable summary of your progress to clipboard"
        >
          <Button variant="secondary" size="sm" onClick={handleCopyShareable}>
            {copied ? <Check size={14} /> : <Share2 size={14} />}
            {copied ? 'Copied!' : 'Copy'}
          </Button>
        </SettingRow>

        <SettingRow
          icon={Trash2}
          label="Reset All Progress"
          description="This will delete all your progress, badges, and settings. This cannot be undone."
          last
        >
          <Button variant="destructive" size="sm" onClick={() => setShowResetModal(true)}>
            <Trash2 size={14} />
            Reset
          </Button>
        </SettingRow>
      </motion.div>
    </motion.div>
    </>
  );
}

function SettingRow({ icon: Icon, label, description, children, last = false }) {
  return (
    <div className={`flex items-center justify-between gap-4 py-4 ${last ? '' : 'border-b border-gray-10/60'}`}>
      <div className="flex items-start gap-3 min-w-0">
        <div className="w-8 h-8 rounded-xl bg-gray-5 flex items-center justify-center shrink-0 mt-0.5">
          <Icon size={16} className="text-gray-100" />
        </div>
        <div className="min-w-0">
          <p className="text-[15px] font-medium text-gray-160">{label}</p>
          <p className="text-[13px] text-gray-50 mt-0.5 leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="flex items-center shrink-0">{children}</div>
    </div>
  );
}

function SegmentedControl({ options, value, onChange, showIcons = false }) {
  return (
    <div className="flex bg-gray-5 dark:bg-gray-10 rounded-xl p-0.5 gap-0.5">
      {options.map((opt) => {
        const Icon = opt.icon;
        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all min-h-[32px] ${
              value === opt.value
                ? 'text-gray-160 bg-white dark:bg-gray-20 shadow-[0_1px_3px_rgba(0,0,0,0.08)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.3)]'
                : 'text-gray-50 hover:text-gray-100'
            }`}
          >
            {showIcons && Icon && <Icon size={14} />}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function Toggle({ checked, onChange, label }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative w-12 h-7 rounded-full transition-colors duration-200 min-h-[28px] ${
        checked ? 'bg-blue-100' : 'bg-gray-20'
      }`}
    >
      <motion.div
        className="absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.15)]"
        animate={{ left: checked ? '22px' : '2px' }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </button>
  );
}
