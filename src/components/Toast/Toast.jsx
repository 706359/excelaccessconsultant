import { useEffect, useRef } from 'react';

function Toast({ message, type = 'info', onClose, duration = 3000 }) {
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onCloseRef.current();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  const typeStyles = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-white',
    info: 'bg-blue-500 text-white',
  };

  const iconStyles = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
  };

  return (
    <div
      className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg min-w-[300px] max-w-md animate-slide-in ${
        typeStyles[type] || typeStyles.info
      }`}
      role='alert'
    >
      <span className='text-xl font-bold'>{iconStyles[type] || iconStyles.info}</span>
      <p className='flex-1 text-sm font-medium'>{message}</p>
      <button
        onClick={onClose}
        className='text-white hover:text-gray-200 text-xl font-bold leading-none'
        aria-label='Close notification'
      >
        ×
      </button>
    </div>
  );
}

export default Toast;
