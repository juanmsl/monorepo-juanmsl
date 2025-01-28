import { useCallback, useRef } from 'react';

import { Icon } from '../../icon';
import { Modal } from '../modal';

import { AsideModalStyle } from './aside-modal.style';

export enum AsidePosition {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  BOTTOM = 'bottom',
}

type AsideModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  position?: `${AsidePosition}`;
  size?: number | `${number}px` | `${number}em`;
  className?: string;
  style?: React.CSSProperties;
  zIndex?: number;
};

export const AsideModal = ({
  children,
  isOpen,
  onClose,
  position = AsidePosition.LEFT,
  size,
  className = '',
  zIndex = 100,
  style = {},
}: AsideModalProps) => {
  const ref = useRef<HTMLElement>(null);

  const handleOnClose = useCallback((callback: () => void) => {
    ref.current?.classList.remove('open-animation');
    ref.current?.classList.add('close-animation');
    setTimeout(() => {
      callback();
      ref.current?.classList.remove('close-animation');
    }, 290);
  }, []);

  return (
    <Modal id='aside' isOpen={isOpen} opacity={0.6} onClick={() => handleOnClose(onClose)} zIndex={100}>
      <AsideModalStyle
        className={`open-animation ${position} ${className}`}
        ref={ref}
        style={{
          ...style,
          zIndex,
          width: position === 'left' || position === 'right' ? size : undefined,
          height: position === 'top' || position === 'bottom' ? size : undefined,
        }}
      >
        <span className='close-modal-button' onClick={() => handleOnClose(onClose)}>
          <Icon name='cross' />
        </span>
        <section className='aside-modal-content'>{children}</section>
      </AsideModalStyle>
    </Modal>
  );
};
