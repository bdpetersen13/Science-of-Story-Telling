import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-blue-100 text-white shadow-[0_1px_2px_rgba(0,83,226,0.3),0_4px_12px_rgba(0,83,226,0.15)] hover:shadow-[0_2px_4px_rgba(0,83,226,0.4),0_8px_20px_rgba(0,83,226,0.2)]',
  secondary:
    'bg-white/80 text-gray-160 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.08)]',
  accent:
    'bg-spark-100 text-gray-160 shadow-[0_1px_2px_rgba(255,194,32,0.3),0_4px_12px_rgba(255,194,32,0.15)] hover:shadow-[0_2px_4px_rgba(255,194,32,0.4),0_8px_20px_rgba(255,194,32,0.2)]',
  destructive:
    'bg-red-100 text-white shadow-[0_1px_2px_rgba(234,17,0,0.3)] hover:shadow-[0_2px_4px_rgba(234,17,0,0.4)]',
  ghost:
    'bg-transparent text-blue-100 hover:bg-blue-5/60',
  disabled:
    'bg-gray-10 text-gray-50 cursor-not-allowed shadow-none',
};

const sizes = {
  sm: 'px-4 py-2 text-[13px] min-h-[36px] rounded-xl',
  md: 'px-6 py-3 text-[15px] min-h-[44px] rounded-2xl',
  lg: 'px-8 py-4 text-[17px] min-h-[52px] rounded-2xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ariaLabel,
  ...props
}) {
  const cls = [
    'inline-flex items-center justify-center gap-2 font-semibold',
    'transition-all duration-200 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-100 focus-visible:ring-offset-2',
    disabled ? variants.disabled : variants[variant],
    sizes[size],
    className,
  ].join(' ');

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      type={type}
      className={cls}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}
