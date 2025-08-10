
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Modal = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className={`modal-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div ref={modalRef} className={`modal-content ${isOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="flex items-start justify-between mb-6">
          <h2 id="modal-title" className="text-2xl font-bold gradient-text">{title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full -mr-2 -mt-2">
            <X className="h-6 w-6 text-gray-500" />
            <span className="sr-only">Close modal</span>
          </Button>
        </div>
        <div className="max-h-[75vh] overflow-y-auto pr-2">
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
