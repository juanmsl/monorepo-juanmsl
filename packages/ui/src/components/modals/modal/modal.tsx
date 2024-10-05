import { useConstant } from '@juanmsl/hooks';
import React, { ForwardedRef, forwardRef, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { useTheme } from 'styled-components';

import { ModalOverlayStyle } from './modal.style';

export enum ModalBackdrop {
  OPAQUE = 'opaque',
  TRANSPARENT = 'transparent',
  BLUR = 'blur',
  NONE = 'none',
}

export type ModalCommonProps = {
  isOpen: boolean;
  children: React.ReactNode;
  id: string;
};

export type ModalNoOverlayProps = ModalCommonProps & {
  opacity?: never;
  backdrop?: never;
  onClick?: never;
  zIndex?: never;
  className?: never;
  style?: never;
};

export type ModalOverlayProps = ModalCommonProps & {
  opacity?: number;
  backdrop?: `${ModalBackdrop}`;
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
    opacity = 0.6,
    backdrop = ModalBackdrop.BLUR,
    onClick,
    zIndex,
    className = '',
    style = {},
  }: ModalProps,
  ref: ForwardedRef<HTMLElement>,
) => {
  const containerID = useConstant(`modal-${id}`);
  const theme = useTheme();

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

  const backgroundStyles = useMemo(() => {
    switch (backdrop) {
      case ModalBackdrop.OPAQUE:
        return {
          background: `${theme.colors.background.paper}${(opacity * 255)?.toString(16)}`,
        };
      case ModalBackdrop.TRANSPARENT:
        return {
          background: 'transparent',
        };
      case ModalBackdrop.BLUR:
        return {
          background: `${theme.colors.background.paper}${(opacity * 255)?.toString(16)}`,
          backdropFilter: 'blur(5px)',
        };
      case ModalBackdrop.NONE:
        return {
          display: 'none',
        };
      default:
        return {};
    }
  }, [backdrop, theme.colors.background.paper, opacity]);

  const root = document.getElementById(containerID);

  if (!isOpen || !root) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <ModalOverlayStyle
        tabIndex={-1}
        onClick={onClick}
        className={className}
        style={{
          zIndex,
          ...backgroundStyles,
          ...style,
        }}
      />
      {children}
    </>,
    root,
  );
};

export const Modal = forwardRef(ModalComponent);
