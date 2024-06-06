import { useConstant } from '@juanmsl/hooks';
import React, { ForwardedRef, forwardRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

export type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  id: string;
  opacity?: number;
  color?: string;
  noOverlay?: boolean;
  onClick?: () => void;
  zIndex?: React.CSSProperties['zIndex'];
};

export const ModalComponent = (
  { isOpen, children, id, opacity = 0, color = '#000000', noOverlay = false, onClick, zIndex }: ModalProps,
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
      <section
        onClick={onClick}
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          opacity,
          backgroundColor: color,
          display: noOverlay ? 'none' : undefined,
          zIndex,
        }}
      />
      {children}
    </>,
    root,
  );
};

export const Modal = forwardRef(ModalComponent);
