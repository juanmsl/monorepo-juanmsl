import React, { FC, ReactNode } from 'react';

import { Icon } from '../../../contexts';
import { BaseModal } from '../base-modal';

import { ModalOverlay, ModalWrapper } from './overlay-modal.style';

type ModalProps = {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  classNames?: Partial<{
    overlay: string;
    wrapper: string;
    header: string;
  }>;
  width?: string;
  height?: string;
  title?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  withoutCloseAction?: boolean;
  actions?: React.ReactNode;
};

export const OverlayModal: FC<ModalProps> = ({
  id,
  isOpen,
  onClose,
  title,
  className = '',
  classNames = {},
  style = {},
  children,
  width,
  height,
  withoutCloseAction = false,
  actions = null,
}) => {
  return (
    <BaseModal isOpen={isOpen} id={id}>
      <ModalOverlay
        className={`${className} ${classNames.overlay ?? ''}`}
        isOpen={isOpen}
        onClick={withoutCloseAction ? undefined : onClose}
      >
        <ModalWrapper
          className={classNames.wrapper}
          width={width}
          height={height}
          onClick={e => e.stopPropagation()}
          style={style}
        >
          <div className={`modal-header ${classNames.header ?? ''}`}>
            <h5 className='modal-title'>{title}</h5>
            {actions}
            {withoutCloseAction ? (
              <span />
            ) : (
              <button className='modal-close' onClick={onClose}>
                <Icon name='exclamation-close' />
              </button>
            )}
          </div>
          <div className='modal-body'>
            <div className='modal-body--content'>{children}</div>
          </div>
        </ModalWrapper>
      </ModalOverlay>
      ,
    </BaseModal>
  );
};
