import { motion } from 'framer-motion';

export default function ProgressBar({ percent = 0, label, size = 'md', color = 'blue', showLabel = true }) {
  const heights = { sm: 'h-1', md: 'h-2', lg: 'h-3' };
  const gradients = {
    blue: 'bg-gradient-to-r from-blue-100 to-blue-50',
    green: 'bg-gradient-to-r from-green-100 to-green-50',
    spark: 'bg-gradient-to-r from-spark-100 to-spark-50',
  };

  return (
    <div className="w-full" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} aria-label={label || 'Progress'}>
      {showLabel && (
        <div className="flex justify-between items-baseline mb-2">
          {label && <span className="text-[13px] font-medium text-gray-100 tracking-tight">{label}</span>}
          <span className="text-[13px] font-semibold text-gray-130 tabular-nums">{percent}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-10/60 rounded-full overflow-hidden ${heights[size]}`}>
        <motion.div
          className={`${heights[size]} rounded-full ${gradients[color]}`}
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(100, Math.max(0, percent))}%` }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
}

export function ProgressRing({ percent = 0, size = 80, strokeWidth = 5, color = '#0053e2', label }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} aria-label={label || 'Progress'}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(0,0,0,0.04)"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </svg>
      <span className="absolute text-[13px] font-bold text-gray-160 tabular-nums">{percent}%</span>
    </div>
  );
}

export function StarRating({ stars = 0, maxStars = 3 }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${stars} out of ${maxStars} stars`}>
      {Array.from({ length: maxStars }, (_, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15, delay: i * 0.12 }}
          className={`text-base ${i < stars ? 'text-spark-100 drop-shadow-[0_1px_2px_rgba(255,194,32,0.4)]' : 'text-gray-20'}`}
        >
          ★
        </motion.span>
      ))}
    </div>
  );
}
