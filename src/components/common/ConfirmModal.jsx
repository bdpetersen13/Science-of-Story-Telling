import { AlertTriangle, Info, HelpCircle } from 'lucide-react';
import Modal, { ModalFooter } from './Modal';
import Button from './Button';

/**
 * Confirmation Modal for destructive or important actions.
 *
 * @param {boolean} isOpen - Whether modal is visible
 * @param {function} onClose - Called when modal closes
 * @param {function} onConfirm - Called when user confirms action
 * @param {string} title - Modal title
 * @param {string} message - Confirmation message
 * @param {string} variant - 'danger' | 'warning' | 'info' (default: 'warning')
 * @param {string} confirmLabel - Confirm button text (default: "Confirm")
 * @param {string} cancelLabel - Cancel button text (default: "Cancel")
 */
export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  variant = 'warning',
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
}) {
  const variantConfig = {
    danger: {
      icon: AlertTriangle,
      iconColor: 'text-red-100',
      iconBg: 'bg-red-5',
      confirmVariant: 'destructive',
    },
    warning: {
      icon: AlertTriangle,
      iconColor: 'text-spark-140',
      iconBg: 'bg-spark-5',
      confirmVariant: 'primary',
    },
    info: {
      icon: Info,
      iconColor: 'text-blue-100',
      iconBg: 'bg-blue-5',
      confirmVariant: 'primary',
    },
  };

  const config = variantConfig[variant] || variantConfig.warning;
  const Icon = config.icon;

  const handleConfirm = () => {
    onConfirm?.();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" showClose={false}>
      <div className="flex gap-4">
        {/* Icon */}
        <div className={`w-12 h-12 rounded-2xl ${config.iconBg} flex items-center justify-center shrink-0`}>
          <Icon size={24} className={config.iconColor} />
        </div>

        {/* Content */}
        <div className="flex-1 pt-1">
          <h3 className="text-title text-lg text-gray-160 mb-2">{title}</h3>
          <p className="text-[15px] text-gray-100 leading-relaxed">{message}</p>
        </div>
      </div>

      <ModalFooter>
        <Button variant="secondary" size="md" onClick={onClose}>
          {cancelLabel}
        </Button>
        <Button variant={config.confirmVariant} size="md" onClick={handleConfirm}>
          {confirmLabel}
        </Button>
      </ModalFooter>
    </Modal>
  );
}
