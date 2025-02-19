import React, { CSSProperties, forwardRef } from 'react';

import { Backdrop, BackdropProps } from './backdrop';
import { ModalContentStyle, ModalStyle } from './modal.style';

import { PositionContainer } from '@polpo/helpers';
import { ModalState, useClassNames } from '@polpo/hooks';
import { Portal } from '@polpo/ui';

export type ModalProps = BackdropProps & {
  id: string;
  children: React.ReactNode;
  isVisible: boolean;
  className?: string;
  style?: React.CSSProperties;
  rootStyle?: CSSProperties;
  animation?: 'none' | 'fade-down' | 'bounce';
  closeAnimationClassName?: string;
  position?:
    | `${PositionContainer.CENTER}`
    | `${PositionContainer.TOP}`
    | `${PositionContainer.LEFT}`
    | `${PositionContainer.RIGHT}`
    | `${PositionContainer.BOTTOM}`;
};

const ModalComponent = (
  {
    id,
    children,
    className = '',
    style = {},
    rootStyle = {},
    animation = 'fade-down',
    closeAnimationClassName = 'modal-close',
    isVisible,
    modalState,
    position,
    ...backdropProps
  }: ModalProps,
  ref: React.ForwardedRef<HTMLElement>,
) => {
  const modalClassName = useClassNames({
    'screen-center': position === PositionContainer.CENTER,
    'screen-top': position === PositionContainer.TOP,
    'screen-left': position === PositionContainer.LEFT,
    'screen-right': position === PositionContainer.RIGHT,
    'screen-bottom': position === PositionContainer.BOTTOM,
  });
  const modalContentClassName = useClassNames({
    [className]: true,
    [`animation-${animation}`]: Boolean(animation) && animation !== 'none',
    [closeAnimationClassName]: modalState === ModalState.CLOSING || modalState === ModalState.CLOSED,
  });

  if (!isVisible) {
    return null;
  }

  return (
    <Portal id={`modal-${id}`}>
      <Backdrop {...backdropProps} modalState={modalState} />
      <ModalStyle ref={ref} style={rootStyle} className={modalClassName}>
        <ModalContentStyle style={style} className={modalContentClassName}>
          {children}
        </ModalContentStyle>
      </ModalStyle>
    </Portal>
  );
};

export const Modal = forwardRef(ModalComponent);
