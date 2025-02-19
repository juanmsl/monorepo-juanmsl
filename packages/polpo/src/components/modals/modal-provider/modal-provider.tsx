import React, { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState } from 'react';

import { Modal as ModalComponent, ModalProps } from './modal';

import { useModalInContainer, UseModalInContainerParams } from '@polpo/hooks';

/*
 * -----------------------------------------------------------------------------
 * Modal Provider
 * -----------------------------------------------------------------------------
 */

type ModalContextType = ReturnType<typeof useModalInContainer> & {
  parameters: UseModalInContainerParams;
  setParameters: (parameters: Partial<UseModalInContainerParams>) => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

/*
 * -----------------------------------------------------------------------------
 * Modal Provider
 * -----------------------------------------------------------------------------
 */

type ModalProviderProps = UseModalInContainerParams & {
  children: React.ReactNode;
};

export const ModalProvider = ({ children, ...useModalInContainerParams }: ModalProviderProps) => {
  const [modalParameters, setModalParameters] = useState<UseModalInContainerParams>({
    transitionDuration: 200,
    ...useModalInContainerParams,
  });
  const modalState = useModalInContainer<HTMLButtonElement, HTMLElement>(modalParameters);

  const setParameters = useCallback<ModalContextType['setParameters']>(parameters => {
    setModalParameters(prev => ({ ...prev, ...parameters }));
  }, []);

  const contextValue = useMemo(
    () => ({ ...modalState, parameters: modalParameters, setParameters }),
    [modalState, modalParameters, setParameters],
  );

  return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>;
};

/*
 * -----------------------------------------------------------------------------
 * useModalContext Hook
 * -----------------------------------------------------------------------------
 */

const useModalContext = () => {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }

  return modalContext;
};

export const useModalState = () => {
  const { modalState, closeModal } = useModalContext();

  return {
    modalState,
    closeModal,
  };
};

export const useModalParameters = (newParameters: UseModalInContainerParams) => {
  const { setParameters, parameters } = useModalContext();

  useLayoutEffect(() => {
    const areEqual = Object.keys(newParameters).reduce((areEqual, key) => {
      return (
        areEqual &&
        newParameters[key as keyof UseModalInContainerParams] === parameters[key as keyof UseModalInContainerParams]
      );
    }, true);

    if (!areEqual) {
      setParameters(newParameters);
    }
  }, [newParameters, parameters, setParameters]);

  return parameters;
};

/*
 * -----------------------------------------------------------------------------
 * Modal
 * -----------------------------------------------------------------------------
 */

const Modal = ({ children, ...props }: Omit<ModalProps, 'modalState' | 'isVisible'>) => {
  const { isVisible, modalRef, modalState } = useModalContext();

  return (
    <ModalComponent {...props} ref={modalRef} isVisible={isVisible} modalState={modalState}>
      {children}
    </ModalComponent>
  );
};

ModalProvider.Modal = Modal;

/*
 * -----------------------------------------------------------------------------
 * Modal Trigger
 * -----------------------------------------------------------------------------
 */

type ModalTriggerProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const ModalTrigger = ({ children, className = '', style = {} }: ModalTriggerProps) => {
  const { openModal, containerRef } = useModalContext();

  return (
    <span
      onClick={e => {
        e.stopPropagation();
        openModal();
      }}
      ref={containerRef}
      className={className}
      style={style}
    >
      {children}
    </span>
  );
};

ModalProvider.Trigger = ModalTrigger;
