import React, { useCallback, useEffect, useMemo } from 'react';

export enum ModalState {
  OPENING = 'OPENING',
  OPEN = 'OPEN',
  CLOSING = 'CLOSING',
  CLOSED = 'CLOSED',
}

export const useModalTransition = (transitionDuration: number = 0, onClose: () => void = () => null) => {
  const [modalState, setModalState] = React.useState<ModalState>(ModalState.CLOSED);

  const isVisible = useMemo(() => {
    return modalState !== ModalState.CLOSED;
  }, [modalState]);

  useEffect(() => {
    document.documentElement.style.overflow = isVisible ? 'hidden' : 'auto';
  }, [isVisible]);

  const closeModal = useCallback(() => {
    if ([ModalState.OPENING, ModalState.OPEN].includes(modalState)) {
      if (transitionDuration > 0) {
        setModalState(ModalState.CLOSING);
        setTimeout(() => {
          setModalState(ModalState.CLOSED);
          onClose();
        }, transitionDuration);
      } else {
        setModalState(ModalState.CLOSED);
      }
    }
  }, [onClose, modalState, transitionDuration]);

  const openModal = useCallback(() => {
    if ([ModalState.CLOSING, ModalState.CLOSED].includes(modalState)) {
      if (transitionDuration > 0) {
        setModalState(ModalState.OPENING);
        setTimeout(() => {
          setModalState(ModalState.OPEN);
        }, transitionDuration);
      } else {
        setModalState(ModalState.OPEN);
      }
    }
  }, [modalState, transitionDuration]);

  return {
    isVisible,
    closeModal,
    openModal,
    modalState,
  };
};
