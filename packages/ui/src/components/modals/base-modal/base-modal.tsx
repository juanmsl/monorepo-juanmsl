import React, { ForwardedRef, forwardRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { useConstant } from '../../../hooks';

export type BaseModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  id: string;
};

export const BaseModalComponent = ({ isOpen, children, id }: BaseModalProps, ref: ForwardedRef<HTMLElement>) => {
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

  return ReactDOM.createPortal(children, root);
};

export const BaseModal = forwardRef(BaseModalComponent);
