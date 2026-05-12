import { motion } from 'framer-motion';
import { Trophy, Star, Zap, ArrowRight } from 'lucide-react';
import Modal from './Modal';
import Button from './Button';

const confettiVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i) => ({
    opacity: [0, 1, 1, 0],
    scale: [0, 1.2, 1, 0.8],
    y: [0, -20, -10, 30],
    x: [0, (i % 2 === 0 ? 1 : -1) * (10 + i * 5), 0, (i % 2 === 0 ? -1 : 1) * 15],
    rotate: [0, 15 * (i % 2 === 0 ? 1 : -1), -10, 20],
    transition: {
      duration: 1.5,
      delay: i * 0.1,
      ease: 'easeOut',
    },
  }),
};

const iconPop = {
  hidden: { scale: 0, rotate: -20 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 400, damping: 15, delay: 0.2 },
  },
};

/**
 * Achievement Modal for celebrating badges, level-ups, and milestones.
 *
 * @param {boolean} isOpen - Whether modal is visible
 * @param {function} onClose - Called when modal closes
 * @param {string} type - 'badge' | 'levelUp' | 'milestone'
 * @param {string} icon - Emoji or icon for the achievement
 * @param {string} title - Achievement title (e.g., "Curiosity Seeker")
 * @param {string} description - What the user did to earn it
 * @param {number} xpAwarded - XP points earned (optional)
 * @param {string} actionLabel - Button text (default: "Continue")
 * @param {function} onAction - Called when action button clicked
 */
export default function AchievementModal({
  isOpen,
  onClose,
  type = 'badge',
  icon = '🏆',
  title,
  description,
  xpAwarded,
  actionLabel = 'Continue',
  onAction,
}) {
  const confettiColors = ['#ffc220', '#0053e2', '#2a8703', '#ea1100', '#ffd966'];

  const typeConfig = {
    badge: {
      label: 'BADGE UNLOCKED',
      gradient: 'from-spark-5 via-white to-spark-5',
      iconBg: 'bg-gradient-to-br from-spark-100 to-spark-50',
    },
    levelUp: {
      label: 'LEVEL UP!',
      gradient: 'from-blue-5 via-white to-blue-5',
      iconBg: 'bg-gradient-to-br from-blue-100 to-blue-50',
    },
    milestone: {
      label: 'MILESTONE REACHED',
      gradient: 'from-green-5 via-white to-green-5',
      iconBg: 'bg-gradient-to-br from-green-100 to-green-50',
    },
  };

  const config = typeConfig[type] || typeConfig.badge;

  const handleAction = () => {
    onAction?.();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" showClose={false}>
      <div className={`-m-6 p-8 bg-gradient-to-b ${config.gradient} text-center relative overflow-hidden`}>
        {/* Confetti particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={confettiVariants}
              initial="hidden"
              animate={isOpen ? 'visible' : 'hidden'}
              className="absolute left-1/2 top-1/3 w-3 h-3 rounded-full"
              style={{
                backgroundColor: confettiColors[i % confettiColors.length],
                marginLeft: `${(i - 4) * 30}px`,
              }}
            />
          ))}
        </div>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-caption text-spark-140/70 tracking-[0.2em] mb-4"
        >
          {config.label}
        </motion.p>

        {/* Icon */}
        <motion.div
          variants={iconPop}
          initial="hidden"
          animate="visible"
          className={`w-24 h-24 rounded-3xl ${config.iconBg} flex items-center justify-center mx-auto mb-5 shadow-lg`}
        >
          <span className="text-5xl filter drop-shadow-sm">{icon}</span>
        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-headline text-2xl text-gray-160 mb-2"
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-[15px] text-gray-100 mb-6 max-w-xs mx-auto"
        >
          {description}
        </motion.p>

        {/* XP Badge */}
        {xpAwarded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 300 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-sm mb-6"
          >
            <Zap size={16} className="text-blue-100" />
            <span className="text-[14px] font-bold text-gray-160">+{xpAwarded} XP</span>
          </motion.div>
        )}

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button variant="primary" size="md" onClick={handleAction}>
            {actionLabel}
            <ArrowRight size={16} />
          </Button>
        </motion.div>
      </div>
    </Modal>
  );
}
