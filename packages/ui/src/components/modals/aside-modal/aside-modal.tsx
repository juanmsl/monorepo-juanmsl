import { useCallback, useRef } from 'react';

import { Icon } from '../../icon';
import { Tooltip } from '../../tooltip';
import { Modal } from '../modal';

import { AsideModalStyle } from './aside-modal.style';

enum AsidePosition {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  BOTTOM = 'bottom',
}

enum AsideCloseButtonPosition {
  FIXED = 'fixed',
  RELATIVE = 'relative',
}

type AsideModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  position?: `${AsidePosition}`;
  closeButton?: `${AsideCloseButtonPosition}`;
};

export const AsideModal = ({
  children,
  isOpen,
  onClose,
  position = AsidePosition.LEFT,
  closeButton,
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
      <AsideModalStyle className={`open-animation ${position}`} ref={ref} style={{ zIndex: 100 }}>
        <section className='aside-modal-content'>
          {closeButton !== undefined && (
            <Tooltip content='Cerrar' position='left'>
              <span className={`close-modal-button button-${closeButton}`}>
                <Icon name='cross' onClick={() => handleOnClose(onClose)} />
              </span>
            </Tooltip>
          )}
          {children}
        </section>
      </AsideModalStyle>
    </Modal>
  );
};
