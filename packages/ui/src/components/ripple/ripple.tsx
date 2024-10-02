import React, { useEffect, useRef } from 'react';

import { RippleStyle } from './ripple.style';

type RippleProps = {
  color?: string;
  duration?: number;
  timingFunction?: React.CSSProperties['animationTimingFunction'];
  times?: number;
};

export const Ripple = ({ color, duration = 1000, timingFunction = 'ease-out', times = 1 }: RippleProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current?.parentElement) {
      return;
    }

    const computedPosition = getComputedStyle(ref.current.parentElement).position;

    if (!['absolute', 'fixed', 'sticky', 'relative'].includes(computedPosition)) {
      ref.current.parentElement.style.position = 'relative';
    }
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const { pageX, pageY, currentTarget } = e;

    const rect = currentTarget.getBoundingClientRect();

    const x = ((pageX - rect.left) * 100) / rect.width;
    const y = ((pageY - rect.top) * 100) / rect.height;

    const ripple = document.createElement('span');
    ripple.classList.add('ripple-effect');
    color && (ripple.style.background = color);
    ripple.style.animationDuration = `${duration}ms`;
    ripple.style.animationTimingFunction = timingFunction;
    ripple.style.left = `${x}%`;
    ripple.style.top = `${y}%`;

    currentTarget.appendChild(ripple);

    setTimeout(
      () => {
        ripple.remove();
      },
      Math.max(duration, 500) * Math.max(times, 1),
    );
  };

  return <RippleStyle ref={ref} onClick={handleClick} />;
};
