import { ForwardedRef, useEffect, useMemo } from 'react';

export const useDomContainer = (containerID: string, ref?: ForwardedRef<HTMLElement>) => {
  useEffect(() => {
    return () => {
      const domContainer = document.getElementById(containerID);

      if (domContainer?.parentNode === document.body) {
        document.body.removeChild(domContainer);
      }
    };
  }, [containerID, ref]);

  return useMemo(() => {
    let domContainer = document.getElementById(containerID);

    if (!domContainer) {
      domContainer = document.createElement('div');
      domContainer.setAttribute('id', containerID);

      if (typeof ref === 'function') {
        ref(domContainer);
      } else if (ref) {
        ref.current = domContainer;
      }

      document.body.appendChild(domContainer);
    }

    return domContainer;
  }, [containerID, ref]);
};
