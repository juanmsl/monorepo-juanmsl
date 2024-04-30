import { useMemo } from 'react';
import { HexAlphaColorPicker, HexColorInput } from 'react-colorful';

import { useModalInContainer } from '../../../hooks';
import { BaseModal } from '../../modals';
import { InputProps } from '../types';
import { withController } from '../with-controller';

import { InputColorSelectorStyle, InputColorStyle } from './input-color.style';

type ColorProps = {};

export const InputColor = ({ name, style = {}, setValue, value }: InputProps<ColorProps, string>) => {
  const id = useMemo(() => crypto.randomUUID(), []);
  const { modalRef, isVisible, setIsVisible, modalStyle, containerRef } = useModalInContainer({
    position: { x: 0, y: 120 },
  });

  return (
    <InputColorStyle
      style={{
        background: value,
        color: value,
        ...style,
      }}
      onClick={e => {
        e.stopPropagation();
        setIsVisible(true);
      }}
      ref={containerRef}
    >
      <BaseModal id='input-color' isOpen={isVisible}>
        <InputColorSelectorStyle ref={modalRef} style={modalStyle}>
          <HexAlphaColorPicker id={id} color={value} onChange={setValue} />
          <HexColorInput
            className='color-input'
            id={id}
            name={name}
            color={value}
            onChange={setValue}
            placeholder='Type a color'
            prefixed
            alpha
          />
        </InputColorSelectorStyle>
      </BaseModal>
    </InputColorStyle>
  );
};

export const ColorController = withController<ColorProps, string>(InputColor, '#147EFB');
