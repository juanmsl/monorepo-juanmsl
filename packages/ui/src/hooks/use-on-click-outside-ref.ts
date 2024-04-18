import { useRef } from 'react';

import { useEventListener } from './use-event-listener';

export const useOnClickOutsideRef = (callback: () => void) => {
  const containerRef = useRef<Element>(null);

  useEventListener('keydown', e => {
    if (e.key === 'Escape') {
      callback();
    }
  });

  useEventListener('mousedown', event => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      callback();
    }
  });

  return containerRef;
};
