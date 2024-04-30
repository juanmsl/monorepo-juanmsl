import { RefObject } from 'react';

import { useEventListener } from './use-event-listener';

export const useOnClickOutsideRef = <T extends HTMLElement>(containerRef: RefObject<T>, callback: () => void) => {
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
};
