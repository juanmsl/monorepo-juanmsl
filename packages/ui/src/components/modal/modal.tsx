import { Icon } from '../../contexts';
import ReactDOM from 'react-dom';
import { ModalOverlay, ModalWrapper } from './modal.style';
import React, { FC, ReactNode, useEffect, useId, useState } from 'react';

type ModalProps = {
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

export const Modal: FC<ModalProps> = ({
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
  const containerId = useId();
  const [root, setRoot] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      const container = document.createElement('div');
      container.setAttribute('id', `modal-${containerId}`);
      document.body.appendChild(container);
      setRoot(container);

      return () => {
        document.removeChild(container);
        setRoot(null);
      };
    }
  }, [containerId, isOpen]);

  if (!isOpen || !root) {
    return null;
  }

  return ReactDOM.createPortal(
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
    </ModalOverlay>,
    root,
  );
};
