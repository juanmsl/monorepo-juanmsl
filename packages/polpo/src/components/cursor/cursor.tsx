import { useEffect, useState } from 'react';

import { CursorOverlayStyle, CursorStyle } from './cursor.style';

import { useEventListener, useMousePosition } from '@polpo/hooks';

export const Cursor = () => {
  const { x, y, elementX, elementY, ref } = useMousePosition();
  const [isCursorHover, setIsCursorHover] = useState(false);

  useEventListener('mouseover', e => {
    const computedCursor = getComputedStyle(e.target as HTMLElement).cursor;

    setIsCursorHover(computedCursor === 'pointer');
  });

  useEffect(() => {
    if (!('ontouchstart' in window || navigator.maxTouchPoints)) {
      document.body.style.cursor = 'none';
    }

    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (x === null || y === null || 'ontouchstart' in window || navigator.maxTouchPoints) {
    return null;
  }

  const translate3d = `translate3d(${elementX}px, ${elementY}px, 0)`;

  return (
    <CursorOverlayStyle ref={ref}>
      <CursorStyle
        className={`outer-circle ${isCursorHover ? 'cursor-hover' : ''}`}
        style={{
          transform: translate3d,
        }}
      />
      <CursorStyle
        className={`inner-circle ${isCursorHover ? 'cursor-hover' : ''}`}
        style={{
          transform: translate3d,
        }}
      />
    </CursorOverlayStyle>
  );
};
