import { CSSProperties, useMemo } from 'react';

import { Icon } from '../../icon';
import { ModalProps } from '../modal-provider';

import { AsideModalStyle } from './aside-modal.style';

import { PositionContainer } from '@polpo/helpers';

type AsideModalProps = Omit<
  ModalProps,
  'id' | 'animation' | 'closeAnimationClassName' | 'modalAtCenter' | 'rootStyle'
> & {
  onClose: () => void;
  position?:
    | `${PositionContainer.TOP}`
    | `${PositionContainer.LEFT}`
    | `${PositionContainer.RIGHT}`
    | `${PositionContainer.BOTTOM}`;
  size?: number | `${number}px` | `${number}em`;
};

export const AsideModal = ({
  position = PositionContainer.LEFT,
  size,
  onClose,
  children,
  isVisible,
  className = '',
  style = {},
  modalState,
  ...backdropProps
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
      isVisible={isVisible}
      modalState={modalState}
      {...backdropProps}
      opacity={0.6}
      animation='none'
      className={`${className} ${position}`}
      rootStyle={modalRootStyles}
      backdropOnClick={onClose}
      style={style}
      position={position}
    >
      <span className='close-modal-button' onClick={onClose}>
        <Icon name='cross' />
      </span>
      <section className='aside-modal-content'>{children}</section>
    </AsideModalStyle>
  );
};
