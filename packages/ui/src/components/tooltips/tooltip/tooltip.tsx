import React, { cloneElement, ReactElement } from 'react';

import { Modal } from '../../modals';

import { TooltipStyle } from './tooltip.style';

import { POSITION } from '@juanmsl/helpers';
import { useClassNames, useEventListener, useModalInContainer } from '@juanmsl/hooks';

export type TooltipProps = {
  position?: `${POSITION}`;
  offset?: number | `${number}`;
  disabled?: boolean;
  children: React.ReactElement;
  content: React.ReactNode;
};

export const Tooltip = ({ position = POSITION.top, children, content, offset = 5, disabled = false }: TooltipProps) => {
  const { modalRef, containerRef, isVisible, setIsVisible, modalStyle } = useModalInContainer({
    closeOnClickOutside: false,
    position,
    offset: 6 + +offset,
    windowOffset: 10,
  });

  const classNames = useClassNames({
    [position]: true,
  });

  useEventListener('mouseenter', () => setIsVisible(true), containerRef);
  useEventListener('mouseleave', () => setIsVisible(false), containerRef);

  if (disabled) return children;

  return (
    <>
      {cloneElement(children as ReactElement, { ref: containerRef })}
      <Modal isOpen={isVisible} id='tooltip' backdrop='none'>
        <TooltipStyle ref={modalRef} style={modalStyle} className={classNames}>
          <span className='tooltip-content'>{content}</span>
        </TooltipStyle>
      </Modal>
    </>
  );
};
