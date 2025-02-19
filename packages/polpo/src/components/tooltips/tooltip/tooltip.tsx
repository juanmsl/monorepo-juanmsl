import React, { cloneElement, ReactElement } from 'react';

import { TooltipStyle } from './tooltip.style';

import { PositionContainer } from '@polpo/helpers';
import { useClassNames, useEventListener, useModalInContainer } from '@polpo/hooks';

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
  const { modalRef, containerRef, isVisible, openModal, closeModal, modalState } = useModalInContainer({
    closeOnClickOutside: false,
    position,
    offset: 6 + +offset,
    windowOffset: 10,
    transitionDuration: 250,
  });

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
        isVisible={isVisible}
        ref={modalRef}
        className={classNames}
        modalState={modalState}
      >
        <span className='tooltip-content'>{content}</span>
      </TooltipStyle>
    </>
  );
};
