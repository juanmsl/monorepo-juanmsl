import { useEffect } from 'react';

export const useObserver = <T extends HTMLElement>(ref: React.RefObject<T>, callback: () => void) => {
  useEffect(() => {
    let observer = null;

    if (callback && ref.current) {
      observer = new ResizeObserver(callback);
      observer.observe(ref.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [ref, callback]);
};
