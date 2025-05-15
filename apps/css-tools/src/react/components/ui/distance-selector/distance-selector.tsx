import { useEventListener } from 'polpo/hooks';
import { useCallback, useMemo, useRef, useState } from 'react';

import { DistanceSelectorContainerStyle, DistanceSelectorStyle } from './distance-selector.style';

type DistanceSelectorProps = {
  x?: number;
  y?: number;
  setValue: (value: [number, number]) => void;
  radius?: number;
  children?: React.ReactNode;
  width?: number | `${number}` | `${number}%` | `${number}px` | `${number}em`;
};

export const DistanceSelector = ({
  x = 0,
  y = 0,
  setValue,
  radius = 100,
  children,
  width = 180,
}: DistanceSelectorProps) => {
  const containerRef = useRef<HTMLDivElement>();
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback(
    (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (containerRef.current !== undefined) {
        const { left, top } = containerRef.current.getBoundingClientRect();

        const newX = ((clientX - left) / containerRef.current.offsetWidth) * 2 - 1;
        const newY = ((clientY - top) / containerRef.current.offsetHeight) * 2 - 1;

        const h = Math.sqrt(newX ** 2 + newY ** 2);
        const angle = Math.atan2(newY, newX);

        setValue([
          Math.round(radius * (h <= 1 ? newX : Math.cos(angle))),
          Math.round(radius * (h <= 1 ? newY : Math.sin(angle))),
        ]);
      }
    },
    [radius, setValue],
  );

  useEventListener('mousemove', e => {
    if (isDragging) {
      updatePosition(e);
    }
  });
  useEventListener(
    'mousedown',
    e => {
      if (e.button === 0) {
        setIsDragging(true);
        updatePosition(e);
      }
    },
    containerRef,
  );

  useEventListener('mouseup', () => {
    setIsDragging(false);
  });

  const positionStyles = useMemo(() => {
    const left = Math.max(Math.min(x / 2 + 50, 100), -100);
    const top = Math.max(Math.min(y / 2 + 50, 100), -100);

    return { left: `${left}%`, top: `${top}%` };
  }, [x, y]);

  return (
    <DistanceSelectorContainerStyle>
      <DistanceSelectorStyle style={{ width: `${width}px` }} ref={containerRef}>
        <span className='distance-selector-dot' style={positionStyles} />
      </DistanceSelectorStyle>
      <section className='distance-selector-controls'>{children}</section>
    </DistanceSelectorContainerStyle>
  );
};
