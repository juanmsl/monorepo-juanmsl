import { useEffect, useRef, useState } from 'react';

export const useInView = (initOptions: IntersectionObserverInit = {}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<Element>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, initOptions);

    ref.current && observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [initOptions]);

  return { ref, inView };
};
