import React, { useState } from 'react';

import { useEventListener } from './use-event-listener';

export const useMousePosition = () => {
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });
  };

  useEventListener('mousemove', mouseMove as unknown as EventListener);
  useEventListener('mouseleave', mouseMove as unknown as EventListener);

  return [x, y];
};
