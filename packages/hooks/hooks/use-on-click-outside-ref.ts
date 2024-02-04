import { useEventListener } from './use-event-listener';
import { useRef } from 'react';

export const useOnClickOutsideRef = (callback: () => void) => {
  const containerRef = useRef<Element>(null);

  useEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      callback();
    }
  });

  useEventListener('mousedown', (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      callback();
    }
  });

  return containerRef;
};
