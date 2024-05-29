import React, { ForwardedRef, forwardRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { useConstant } from '../../../hooks';

import { BaseOverlay } from './base-modal.style';

export type BaseModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  id: string;
  opacity?: number;
  color?: string;
};

export const BaseModalComponent = (
  { isOpen, children, id, opacity = 0, color = '#000000' }: BaseModalProps,
  ref: ForwardedRef<HTMLElement>,
) => {
  const containerID = useConstant(`modal-${id}`);

  useEffect(() => {
    let modalContainer = document.getElementById(containerID);

    if (!modalContainer) {
      modalContainer = document.createElement('div');
      modalContainer.setAttribute('id', containerID);

      if (typeof ref === 'function') {
        ref(modalContainer);
      } else if (ref) {
        ref.current = modalContainer;
      }

      document.body.appendChild(modalContainer);
    }

    /*
     * return () => {
     *   if (modalContainer.parentNode === document.body) {
     *     document.body.removeChild(modalContainer);
     *   }
     * };
     */
  }, [containerID, ref]);

  const root = document.getElementById(containerID);

  if (!isOpen || !root) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <BaseOverlay
        style={{
          opacity,
          backgroundColor: color,
        }}
      />
      {children}
    </>,
    root,
  );
};

export const BaseModal = forwardRef(BaseModalComponent);
