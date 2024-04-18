import { useEventListener } from './use-event-listener';
import React, { useEffect, useState } from 'react';

export const useDimensions = (ref: React.RefObject<HTMLElement>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const getSize = () => {
    setDimensions({
      width: ref.current?.offsetWidth ?? 0,
      height: ref.current?.offsetHeight ?? 0,
    });
  };

  useEventListener('resize', getSize);

  useEffect(getSize, [ref]);

  return dimensions;
};
