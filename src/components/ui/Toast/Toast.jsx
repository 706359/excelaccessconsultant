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

  const toastClass = ['toast', `toast--${type}`].join(' ');

  return (
    <div className={toastClass} role='alert'>
      <p className='toast__message'>{message}</p>
      <button
        onClick={onClose}
        className='toast__close'
        aria-label='Close notification'
      >
        <svg className='toast__close-icon' fill='currentColor' viewBox='0 0 20 20' aria-hidden='true'>
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
