import React, { CSSProperties, useMemo, useRef } from 'react';

import { Portal } from '../portal';

import { Backdrop, BackdropProps } from './backdrop';
import { ModalContentStyle, ModalStyle } from './modal.style';

import {
  ModalState,
  useClassNames,
  useModalInContainer,
  UseModalInContainerParams,
  useModalTransition,
  UseModalTransitionParams,
} from '@polpo/hooks';

export type ModalProps = Omit<BackdropProps, 'modalState'> &
  UseModalTransitionParams &
  Omit<UseModalInContainerParams, 'modalRef'> & {
    id: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    rootStyle?: CSSProperties;
    animation?: 'none' | 'fade-down' | 'bounce';
    closeAnimationClassName?: string;
    modalRef?: React.RefObject<HTMLElement>;
  };

export const Modal = ({
  id,
  children,
  isOpen,
  onClose,
  className = '',
  style = {},
  rootStyle = {},
  animation = 'fade-down',
  closeAnimationClassName = 'modal-close',
  modalRef: modalRefProp,
  closeOnClickOutside,
  transitionDuration = 300,
  windowOffset = 10,
  offset = 20,
  position,
  containerRef,
  zIndex = 1000,
  ...backdropProps
}: ModalProps) => {
  const uuid = useMemo(() => crypto.randomUUID(), []);
  const modalRef = useRef<HTMLElement>(null);
  const { modalState, isVisible } = useModalTransition({
    transitionDuration,
    onClose,
    isOpen,
  });

  useModalInContainer({
    modalRef: modalRefProp ?? modalRef,
    containerRef,
    closeOnClickOutside,
    offset,
    windowOffset,
    position,
    isOpen: isVisible,
    onClose,
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
    <Portal id={`modal-${id}-${uuid}`}>
      <Backdrop {...backdropProps} modalState={modalState} zIndex={zIndex} />
      <ModalStyle
        ref={modalRefProp ?? modalRef}
        style={{
          maxWidth: `calc(100dvw - ${windowOffset * 2}px)`,
          maxHeight: `calc(100dvh - ${windowOffset * 2}px)`,
          ...rootStyle,
          zIndex: +zIndex + 1,
        }}
      >
        <ModalContentStyle
          style={{ ...style, animationDuration: `${transitionDuration}ms` }}
          className={modalContentClassName}
        >
          {children}
        </ModalContentStyle>
      </ModalStyle>
    </Portal>
  );
};
