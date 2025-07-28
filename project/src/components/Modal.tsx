import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className = '' }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-blue-950/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div 
        ref={modalRef}
        className={`relative bg-blue-900/95 border border-yellow-400/40 rounded-3xl p-10 max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl transform transition-all duration-300 backdrop-blur-sm ${className}`}
        style={{ 
          background: 'linear-gradient(135deg, rgba(17, 24, 53, 0.95) 0%, rgba(2, 72, 193, 0.15) 100%)',
          boxShadow: '0 0 60px rgba(248, 214, 19, 0.3), inset 0 0 30px rgba(248, 214, 19, 0.05)'
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-yellow-400 hover:text-yellow-300 transition-colors duration-200 hover:scale-110"
        >
          <X size={28} />
        </button>
        {children}
      </div>
    </div>
  );
};