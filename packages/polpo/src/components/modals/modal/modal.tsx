import React, { CSSProperties, useLayoutEffect, useRef } from 'react';

import { Backdrop, BackdropProps } from './backdrop';
import { ModalContentStyle, ModalStyle } from './modal.style';

import { ModalState, useClassNames, useModalInContainer, UseModalInContainerParams } from '@polpo/hooks';
import { Portal } from '@polpo/ui';

export type ModalProps = Omit<BackdropProps, 'modalState'> &
  Omit<UseModalInContainerParams, 'modalRef' | 'onClose'> & {
    id: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
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
  const modalRef = useRef<HTMLElement>(null);
  const { openModal, closeModal, modalState, isVisible } = useModalInContainer({
    modalRef: modalRefProp ?? modalRef,
    containerRef,
    closeOnClickOutside,
    offset,
    windowOffset,
    position,
    transitionDuration,
    onClose,
  });

  const modalContentClassName = useClassNames({
    [className]: true,
    [`animation-${animation}`]: Boolean(animation) && animation !== 'none',
    [closeAnimationClassName]: modalState === ModalState.CLOSING || modalState === ModalState.CLOSED,
  });

  useLayoutEffect(() => {
    if (modalState === ModalState.CLOSED && isOpen) {
      openModal();
    } else if (modalState === ModalState.OPEN && !isOpen) {
      closeModal();
    }
  }, [isOpen, openModal, closeModal, modalState]);

  if (!isVisible) {
    return null;
  }

  return (
    <Portal id={`modal-${id}`}>
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
        <ModalContentStyle style={style} className={modalContentClassName}>
          {children}
        </ModalContentStyle>
      </ModalStyle>
    </Portal>
  );
};
