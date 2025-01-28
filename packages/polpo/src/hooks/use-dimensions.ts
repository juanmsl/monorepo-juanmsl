import React, { useEffect, useState } from 'react';

import { useEventListener } from './use-event-listener';
import { useObserver } from './use-observer';

export const useDimensions = (ref: React.RefObject<HTMLElement>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const getSize = () => {
    setDimensions({
      width: ref.current?.offsetWidth ?? 0,
      height: ref.current?.offsetHeight ?? 0,
    });
  };

  useEventListener('resize', getSize);
  useObserver(ref, getSize);

  useEffect(getSize, [ref]);

  return dimensions;
};
