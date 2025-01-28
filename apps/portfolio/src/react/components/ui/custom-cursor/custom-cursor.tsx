import { useEventListener, useMousePosition } from 'polpo/hooks';
import { useState } from 'react';

import { CustomCursorStyle, GlobalCursorStyle } from './custom-cursor.style';

type CustomCursorProps = {
  children?: React.ReactNode;
};

export const CustomCursor = ({ children }: CustomCursorProps) => {
  const [x, y] = useMousePosition();
  const [isCursorHover, setIsCursorHover] = useState(false);
  useEventListener('mouseover', e => {
    const computedCursor = getComputedStyle(e.target as HTMLElement).cursor;
    setIsCursorHover(computedCursor === 'pointer');
  });

  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    return null;
  }

  return (
    <>
      <GlobalCursorStyle />
      <CustomCursorStyle
        className={`outer-circle ${isCursorHover ? 'cursor-hover' : ''}`}
        style={{
          visibility: 'visible',
          transform: `translate(${x}px, ${y}px)`,
        }}
      >
        {children}
      </CustomCursorStyle>
      <CustomCursorStyle
        className={`inner-circle ${isCursorHover ? 'cursor-hover' : ''}`}
        style={{
          visibility: 'visible',
          transform: `translate(${x}px, ${y}px)`,
        }}
      >
        {children}
      </CustomCursorStyle>
    </>
  );
};
