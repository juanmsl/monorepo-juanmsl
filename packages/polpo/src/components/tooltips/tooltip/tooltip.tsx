import React, { cloneElement, ReactElement } from 'react';

import { TooltipStyle } from './tooltip.style';

import { PositionContainer } from '@polpo/helpers';
import { useClassNames, useEventListener, useModal } from '@polpo/hooks';

export type TooltipProps = {
  position?:
    | `${PositionContainer.TOP}`
    | `${PositionContainer.LEFT}`
    | `${PositionContainer.RIGHT}`
    | `${PositionContainer.BOTTOM}`;
  offset?: number | `${number}`;
  disabled?: boolean;
  children: React.ReactElement;
  content: React.ReactNode;
};

export const Tooltip = ({
  position = PositionContainer.TOP,
  children,
  content,
  offset = 5,
  disabled = false,
}: TooltipProps) => {
  const { containerRef, openModal, closeModal, isOpen } = useModal();

  const classNames = useClassNames({
    [position]: true,
  });

  useEventListener('mouseenter', () => openModal(), containerRef);
  useEventListener('mouseleave', () => closeModal(), containerRef);

  if (disabled) return children;

  return (
    <>
      {cloneElement(children as ReactElement, { ref: containerRef })}

      <TooltipStyle
        backdrop='none'
        id='tooltip'
        isOpen={isOpen}
        containerRef={containerRef}
        onClose={closeModal}
        position={position}
        className={classNames}
        closeOnClickOutside={false}
        offset={6 + +offset}
        windowOffset={10}
        transitionDuration={250}
      >
        <span className='tooltip-content'>{content}</span>
      </TooltipStyle>
    </>
  );
};
