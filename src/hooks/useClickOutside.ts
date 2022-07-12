import { useEffect, useRef } from 'react';

const useClickOutside = (handler: () => void) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const clickOutside = (e: any) => {
      if (!ref.current?.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', clickOutside);

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [handler]);

  return { ref };
};

export default useClickOutside;
