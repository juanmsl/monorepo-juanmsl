import { useEffect, useRef, useState } from 'react';

export const useInView = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    });

    ref.current && observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, inView };
};
