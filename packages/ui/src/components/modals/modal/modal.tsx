import { useConstant } from '@juanmsl/hooks';
import React, { ForwardedRef, forwardRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { ModalOverlayStyle } from './modal.style';

export type ModalCommonProps = {
  isOpen: boolean;
  children: React.ReactNode;
  id: string;
};

export type ModalNoOverlayProps = ModalCommonProps & {
  noOverlay: true;
  opacity?: never;
  color?: never;
  onClick?: never;
  zIndex?: never;
  className?: never;
  style?: never;
};

export type ModalOverlayProps = ModalCommonProps & {
  noOverlay?: false;
  opacity?: number;
  color?: string;
  onClick?: () => void;
  zIndex?: React.CSSProperties['zIndex'];
  className?: string;
  style?: React.CSSProperties;
};

export type ModalProps = ModalOverlayProps | ModalNoOverlayProps;

export const ModalComponent = (
  {
    isOpen,
    children,
    id,
    opacity = 0,
    color = '#000000',
    noOverlay = false,
    onClick,
    zIndex,
    className = '',
    style = {},
  }: ModalProps,
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
      {noOverlay ? null : (
        <>
          <ModalOverlayStyle
            tabIndex={-1}
            onClick={onClick}
            className={className}
            $opacity={opacity}
            style={{
              backgroundColor: color,
              zIndex,
              ...style,
            }}
          />
        </>
      )}
      {children}
    </>,
    root,
  );
};

export const Modal = forwardRef(ModalComponent);
