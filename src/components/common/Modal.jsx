import { useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 400, damping: 28 },
  },
  exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.15 } },
};

/**
 * Accessible modal dialog with Framer Motion animations.
 *
 * @param {boolean} isOpen - Whether the modal is visible
 * @param {function} onClose - Called when modal should close
 * @param {string} title - Modal title (used for aria-labelledby)
 * @param {string} size - 'sm' | 'md' | 'lg' | 'full' (default: 'md')
 * @param {boolean} showClose - Show the X close button (default: true)
 * @param {boolean} closeOnOverlay - Close when clicking backdrop (default: true)
 * @param {boolean} closeOnEsc - Close when pressing Escape (default: true)
 * @param {ReactNode} children - Modal content
 */
export default function Modal({
  isOpen,
  onClose,
  title,
  size = 'md',
  showClose = true,
  closeOnOverlay = true,
  closeOnEsc = true,
  children,
}) {
  const modalRef = useRef(null);
  const previouslyFocused = useRef(null);

  // Focus trap & escape key handling
  useEffect(() => {
    if (!isOpen) return;

    // Store previously focused element
    previouslyFocused.current = document.activeElement;

    // Focus the modal
    setTimeout(() => modalRef.current?.focus(), 10);

    // Escape key handler
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && closeOnEsc) {
        onClose();
      }
      // Focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      // Restore focus
      previouslyFocused.current?.focus();
    };
  }, [isOpen, closeOnEsc, onClose]);

  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget && closeOnOverlay) {
      onClose();
    }
  }, [closeOnOverlay, onClose]);

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-3xl',
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-gray-180/60 backdrop-blur-sm"
            onClick={handleOverlayClick}
            aria-hidden="true"
          />

          {/* Modal Panel */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'modal-title' : undefined}
            tabIndex={-1}
            className={`relative z-10 w-full ${sizeClasses[size]} surface-card p-0 overflow-hidden focus:outline-none`}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            {(title || showClose) && (
              <div className="flex items-center justify-between px-6 pt-6 pb-0">
                {title && (
                  <h2
                    id="modal-title"
                    className="text-headline text-xl text-gray-160"
                  >
                    {title}
                  </h2>
                )}
                {showClose && (
                  <button
                    onClick={onClose}
                    className="ml-auto w-9 h-9 rounded-xl flex items-center justify-center text-gray-50 hover:text-gray-160 hover:bg-gray-5 transition-colors focus-visible:ring-2 focus-visible:ring-blue-100"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            )}

            {/* Content */}
            <div className="px-6 py-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Render to portal to escape any parent overflow/z-index issues
  if (typeof window === 'undefined') return null;
  return createPortal(modalContent, document.body);
}

/**
 * Modal footer component for action buttons.
 * Use inside Modal children.
 */
export function ModalFooter({ children, className = '' }) {
  return (
    <div className={`flex items-center justify-end gap-3 pt-4 border-t border-gray-10 -mx-6 px-6 -mb-6 pb-6 mt-6 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Modal body component for main content.
 * Use inside Modal children for scrollable content.
 */
export function ModalBody({ children, className = '' }) {
  return (
    <div className={`-mx-6 px-6 max-h-[60vh] overflow-y-auto ${className}`}>
      {children}
    </div>
  );
}

/**
 * Pre-built Confirmation Modal for yes/no decisions
 */
export function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'default', // 'default' | 'danger'
  icon,
  isLoading = false,
}) {
  const variantStyles = {
    default: 'bg-blue-100 hover:bg-blue-110 shadow-[0_1px_2px_rgba(0,83,226,0.3)]',
    danger: 'bg-red-100 hover:bg-red-130 shadow-[0_1px_2px_rgba(234,17,0,0.3)]',
  };

  const iconBg = {
    default: 'bg-blue-5 text-blue-100',
    danger: 'bg-red-5 text-red-100',
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <div className="flex items-start gap-4 mb-6">
        {icon && (
          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${iconBg[variant]}`}>
            {icon}
          </div>
        )}
        <div className="min-w-0">
          <h3 className="text-headline text-lg text-gray-160 mb-1">{title}</h3>
          {message && (
            <p className="text-[15px] text-gray-100 leading-relaxed">{message}</p>
          )}
        </div>
      </div>
      <ModalFooter>
        <button
          onClick={onClose}
          disabled={isLoading}
          className="px-4 py-2.5 rounded-xl text-[14px] font-medium text-gray-100 hover:text-gray-160 hover:bg-gray-5 transition-colors min-h-[40px] disabled:opacity-50"
        >
          {cancelText}
        </button>
        <button
          onClick={onConfirm}
          disabled={isLoading}
          className={`px-5 py-2.5 rounded-xl text-[14px] font-semibold text-white transition-all min-h-[40px] disabled:opacity-50 ${variantStyles[variant]}`}
        >
          {isLoading ? (
            <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            confirmText
          )}
        </button>
      </ModalFooter>
    </Modal>
  );
}

/**
 * Pre-built Achievement Modal for badges, level-ups, etc.
 */
export function AchievementModal({
  isOpen,
  onClose,
  title = 'Achievement Unlocked!',
  badge,
  description,
  xpEarned,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" showClose={false}>
      <div className="text-center py-4">
        {/* Celebration effect */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.1 }}
          className="relative inline-block mb-6"
        >
          <div className="absolute inset-0 bg-spark-100/20 rounded-full blur-2xl scale-[2.5]" />
          <div className="relative text-6xl">
            {badge?.icon || '🏆'}
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-headline text-xl text-gray-160 mb-2"
        >
          {title}
        </motion.h2>

        {badge?.name && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-[17px] font-semibold text-spark-140 mb-2"
          >
            {badge.name}
          </motion.p>
        )}

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[15px] text-gray-100 mb-4 leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {xpEarned && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35 }}
            className="inline-flex items-center gap-2 bg-spark-5 text-spark-140 px-4 py-2 rounded-full text-[14px] font-semibold"
          >
            +{xpEarned} XP
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <button
            onClick={onClose}
            className="px-8 py-3 rounded-2xl bg-blue-100 text-white text-[15px] font-semibold hover:bg-blue-110 transition-colors shadow-[0_2px_8px_rgba(0,83,226,0.25)] min-h-[48px]"
          >
            Awesome!
          </button>
        </motion.div>
      </div>
    </Modal>
  );
}

/**
 * Pre-built Alert Modal for simple messages
 */
export function AlertModal({
  isOpen,
  onClose,
  title,
  message,
  buttonText = 'OK',
  variant = 'default', // 'default' | 'warning' | 'danger' | 'success'
  icon,
}) {
  const iconBg = {
    default: 'bg-blue-5 text-blue-100',
    warning: 'bg-spark-5 text-spark-140',
    danger: 'bg-red-5 text-red-100',
    success: 'bg-green-5 text-green-100',
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <div className="flex items-start gap-4 mb-6">
        {icon && (
          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${iconBg[variant]}`}>
            {icon}
          </div>
        )}
        <div className="min-w-0">
          {title && (
            <h3 className="text-headline text-lg text-gray-160 mb-1">{title}</h3>
          )}
          {message && (
            <p className="text-[15px] text-gray-100 leading-relaxed">{message}</p>
          )}
        </div>
      </div>
      <ModalFooter>
        <button
          onClick={onClose}
          className="px-5 py-2.5 rounded-xl bg-blue-100 text-white text-[14px] font-semibold hover:bg-blue-110 transition-colors shadow-[0_1px_2px_rgba(0,83,226,0.3)] min-h-[40px]"
        >
          {buttonText}
        </button>
      </ModalFooter>
    </Modal>
  );
}
