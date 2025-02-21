import { CSSProperties, useMemo } from 'react';

import { Icon } from '../../icon';
import { ModalProps } from '../modal';

import { AsideModalStyle } from './aside-modal.style';

import { PositionContainer } from '@polpo/helpers';

type AsideModalProps = Omit<
  ModalProps,
  'id' | 'animation' | 'closeAnimationClassName' | 'position' | 'rootStyle' | 'className' | 'style'
> & {
  position?:
    | `${PositionContainer.TOP}`
    | `${PositionContainer.LEFT}`
    | `${PositionContainer.RIGHT}`
    | `${PositionContainer.BOTTOM}`;
  size?: number | `${number}px` | `${number}em`;
  className?: string;
  style?: React.CSSProperties;
};

export const AsideModal = ({
  children,
  isOpen,
  onClose,
  position = PositionContainer.LEFT,
  size,
  className = '',
  ...modalProps
}: AsideModalProps) => {
  const modalRootStyles = useMemo<CSSProperties>(() => {
    const computedSize = {
      [PositionContainer.TOP]: { height: size, width: '100%' },
      [PositionContainer.LEFT]: { height: '100%', width: size },
      [PositionContainer.RIGHT]: { height: '100%', width: size },
      [PositionContainer.BOTTOM]: { height: size, width: '100%' },
    };

    return computedSize[position];
  }, [position, size]);

  return (
    <AsideModalStyle
      id='aside'
      isOpen={isOpen}
      onClose={onClose}
      opacity={0.6}
      windowOffset={0}
      animation='none'
      className={`${className} ${position}`}
      rootStyle={modalRootStyles}
      backdropOnClick={onClose}
      position={position}
      {...modalProps}
    >
      <span className='close-modal-button' onClick={onClose}>
        <Icon name='cross' />
      </span>
      <section className='aside-modal-content'>{children}</section>
    </AsideModalStyle>
  );
};
