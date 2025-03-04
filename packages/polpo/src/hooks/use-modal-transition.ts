import React, { useCallback, useEffect, useLayoutEffect, useMemo } from 'react';

export enum ModalState {
  OPENING = 'OPENING',
  OPEN = 'OPEN',
  CLOSING = 'CLOSING',
  CLOSED = 'CLOSED',
}

export type UseModalTransitionParams = {
  transitionDuration?: number;
  onClose: () => void;
  isOpen: boolean;
};

export const useModalTransition = ({ transitionDuration = 0, onClose, isOpen }: UseModalTransitionParams) => {
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

  useLayoutEffect(() => {
    if (modalState === ModalState.CLOSED && isOpen) {
      openModal();
    } else if (modalState === ModalState.OPEN && !isOpen) {
      closeModal();
    }
  }, [isOpen, openModal, closeModal, modalState]);

  return {
    isVisible,
    modalState,
  };
};
