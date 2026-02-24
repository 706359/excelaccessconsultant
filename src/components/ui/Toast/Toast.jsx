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
    success: 'bg-green-50 border border-green-200 text-green-800',
    error: 'bg-red-50 border border-red-200 text-red-800',
    warning: 'bg-yellow-50 border border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border border-blue-200 text-blue-800',
  };

  return (
    <div
      className={`relative px-4 py-3 pr-8 rounded-md shadow-sm min-w-[300px] max-w-md animate-slide-in ${
        typeStyles[type] || typeStyles.info
      }`}
      role='alert'
    >
      <p className='text-sm font-medium pr-4'>{message}</p>
      <button
        onClick={onClose}
        className='absolute top-2 right-2 text-slate-400 hover:text-slate-600 transition-colors'
        aria-label='Close notification'
      >
        <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20' aria-hidden='true'>
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </div>
  );
}

export default Toast;
