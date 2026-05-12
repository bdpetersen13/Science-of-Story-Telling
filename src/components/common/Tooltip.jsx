import { useState, useRef, useEffect, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

/**
 * Accessible Tooltip Component
 * 
 * Features:
 * - Multiple positions (top, bottom, left, right)
 * - Framer Motion animations
 * - Delay before showing
 * - Portal rendering to avoid overflow issues
 * - Accessible with aria-describedby
 */

const positions = {
  top: {
    initial: { opacity: 0, y: 8, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 4, scale: 0.98 },
  },
  bottom: {
    initial: { opacity: 0, y: -8, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -4, scale: 0.98 },
  },
  left: {
    initial: { opacity: 0, x: 8, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: 4, scale: 0.98 },
  },
  right: {
    initial: { opacity: 0, x: -8, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -4, scale: 0.98 },
  },
};

export default function Tooltip({
  children,
  content,
  position = 'top',
  delay = 400,
  disabled = false,
  maxWidth = 250,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const timeoutRef = useRef(null);
  const tooltipId = useId();

  const showTooltip = () => {
    if (disabled || !content) return;
    timeoutRef.current = setTimeout(() => {
      updatePosition();
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const updatePosition = () => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
    const gap = 8;

    let top, left;

    switch (position) {
      case 'top':
        top = rect.top + scrollY - gap;
        left = rect.left + scrollX + rect.width / 2;
        break;
      case 'bottom':
        top = rect.bottom + scrollY + gap;
        left = rect.left + scrollX + rect.width / 2;
        break;
      case 'left':
        top = rect.top + scrollY + rect.height / 2;
        left = rect.left + scrollX - gap;
        break;
      case 'right':
        top = rect.top + scrollY + rect.height / 2;
        left = rect.right + scrollX + gap;
        break;
      default:
        top = rect.top + scrollY - gap;
        left = rect.left + scrollX + rect.width / 2;
    }

    setCoords({ top, left });
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Update position on scroll/resize while visible
  useEffect(() => {
    if (!isVisible) return;

    const handleUpdate = () => updatePosition();
    window.addEventListener('scroll', handleUpdate, true);
    window.addEventListener('resize', handleUpdate);

    return () => {
      window.removeEventListener('scroll', handleUpdate, true);
      window.removeEventListener('resize', handleUpdate);
    };
  }, [isVisible]);

  const getTransformOrigin = () => {
    switch (position) {
      case 'top': return 'bottom center';
      case 'bottom': return 'top center';
      case 'left': return 'right center';
      case 'right': return 'left center';
      default: return 'bottom center';
    }
  };

  const getTranslate = () => {
    switch (position) {
      case 'top': return 'translate(-50%, -100%)';
      case 'bottom': return 'translate(-50%, 0)';
      case 'left': return 'translate(-100%, -50%)';
      case 'right': return 'translate(0, -50%)';
      default: return 'translate(-50%, -100%)';
    }
  };

  const tooltipContent = (
    <AnimatePresence>
      {isVisible && content && (
        <motion.div
          id={tooltipId}
          role="tooltip"
          initial={positions[position].initial}
          animate={positions[position].animate}
          exit={positions[position].exit}
          transition={{ type: 'spring', stiffness: 400, damping: 25, duration: 0.15 }}
          style={{
            position: 'absolute',
            top: coords.top,
            left: coords.left,
            transform: getTranslate(),
            transformOrigin: getTransformOrigin(),
            zIndex: 9999,
            maxWidth,
            pointerEvents: 'none',
          }}
          className="px-3 py-2 text-[13px] font-medium text-white bg-gray-180 dark:bg-gray-10 dark:text-gray-160 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
        >
          {content}
          {/* Arrow */}
          <TooltipArrow position={position} />
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        aria-describedby={isVisible ? tooltipId : undefined}
        className="inline-flex"
      >
        {children}
      </span>
      {typeof window !== 'undefined' && createPortal(tooltipContent, document.body)}
    </>
  );
}

function TooltipArrow({ position }) {
  // Use inline styles for arrow since Tailwind border-color classes are complex
  const arrowColor = 'var(--color-gray-180)';
  
  const styles = {
    top: {
      position: 'absolute',
      bottom: -6,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 0,
      height: 0,
      borderLeft: '6px solid transparent',
      borderRight: '6px solid transparent',
      borderTop: `6px solid ${arrowColor}`,
    },
    bottom: {
      position: 'absolute',
      top: -6,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 0,
      height: 0,
      borderLeft: '6px solid transparent',
      borderRight: '6px solid transparent',
      borderBottom: `6px solid ${arrowColor}`,
    },
    left: {
      position: 'absolute',
      right: -6,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 0,
      height: 0,
      borderTop: '6px solid transparent',
      borderBottom: '6px solid transparent',
      borderLeft: `6px solid ${arrowColor}`,
    },
    right: {
      position: 'absolute',
      left: -6,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 0,
      height: 0,
      borderTop: '6px solid transparent',
      borderBottom: '6px solid transparent',
      borderRight: `6px solid ${arrowColor}`,
    },
  };

  return <div style={styles[position] || styles.top} />;
}

/**
 * Simple inline tooltip for icons/buttons
 * Usage: <IconTooltip content="Help text"><HelpIcon /></IconTooltip>
 */
export function IconTooltip({ children, content, position = 'top' }) {
  return (
    <Tooltip content={content} position={position} delay={200}>
      <span className="cursor-help">{children}</span>
    </Tooltip>
  );
}

/**
 * Info tooltip with question mark icon
 * Usage: <InfoTooltip>Explanation text here</InfoTooltip>
 */
export function InfoTooltip({ children, position = 'top' }) {
  return (
    <Tooltip content={children} position={position} delay={200}>
      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-10 text-gray-50 text-[10px] font-bold cursor-help hover:bg-gray-20 transition-colors">
        ?
      </span>
    </Tooltip>
  );
}
