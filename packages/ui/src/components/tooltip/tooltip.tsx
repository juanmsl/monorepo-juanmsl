import React from 'react';
import { TooltipPosition } from './tooltip.constants';
import { TooltipStyle } from './tooltip.style';
import { useClassNames } from '../../hooks';

export type TooltipProps = {
  position?: `${TooltipPosition}`;
  offset?: number;
  disabled?: boolean;
  children: React.ReactNode;
  content: React.ReactNode;
};

export const Tooltip = ({
  position = TooltipPosition.TOP,
  children,
  content,
  offset = 10,
  disabled = false,
}: TooltipProps) => {
  const classNames = useClassNames({
    'tooltip-container': true,
    left: position === TooltipPosition.LEFT,
    right: position === TooltipPosition.RIGHT,
    top: position === TooltipPosition.TOP,
    bottom: position === TooltipPosition.BOTTOM,
  });

  if (disabled) return children;

  return (
    <TooltipStyle offset={offset}>
      <div className={classNames}>
        <span className='tooltip-content'>{content}</span>
      </div>
      {children}
    </TooltipStyle>
  );
};
