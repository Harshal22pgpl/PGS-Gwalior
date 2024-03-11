import { useEffect } from 'react';

const useModalBodyScrollLock = (show) => {
  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;

    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [show]);
};

export default useModalBodyScrollLock;
