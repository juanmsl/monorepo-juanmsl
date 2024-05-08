import React, { ReactNode } from 'react';

import { BaseModal } from '../base-modal';

import { ModalOverlay } from './overlay-modal.style';

type ModalProps = {
  id: string;
  isOpen: boolean;
  onClose?: () => void;
  overlayClassName?: string;
  overlayStyle?: React.CSSProperties;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
};

export const OverlayModal = ({
  id,
  isOpen,
  onClose,
  overlayClassName = '',
  overlayStyle = {},
  className = '',
  style = {},
  children,
}: ModalProps) => {
  return (
    <BaseModal isOpen={isOpen} id={id}>
      <ModalOverlay onClick={onClose} className={overlayClassName} style={overlayStyle}>
        <section onClick={e => e.stopPropagation()} className={className} style={style}>
          {children}
        </section>
      </ModalOverlay>
    </BaseModal>
  );
};
