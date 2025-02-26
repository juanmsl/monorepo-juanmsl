import { ForwardedRef, useEffect, useState } from 'react';

export const useDomContainer = (containerID: string, ref?: ForwardedRef<HTMLElement>) => {
  const [container, setContainer] = useState<HTMLElement | null>(() => document.getElementById(containerID));

  useEffect(() => {
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

      setContainer(domContainer);
    }

    return () => {
      if (domContainer) {
        document.body.removeChild(domContainer);
      }
    };
  }, [containerID, ref]);

  return container;
};
