import Color from 'color';
import { useMemo } from 'react';
import { HexAlphaColorPicker, HexColorInput } from 'react-colorful';
import useEyeDropper from 'use-eye-dropper';

import { Icon } from '../../../contexts';
import { useModalInContainer } from '../../../hooks';
import { BaseModal } from '../../modals';
import { Typography } from '../../typography';
import { Field } from '../field';
import { InputProps } from '../types';
import { withController } from '../with-controller';

import { InputColorBoxStyle, InputColorSelectorStyle, InputColorStyle } from './input-color.style';

type ColorProps = {
  showValueText?: boolean;
};

export const InputColor = ({
  name,
  style = {},
  setValue,
  value,
  showValueText,
  label,
  leftIcon,
  rightIcon,
  error,
}: InputProps<ColorProps, string>) => {
  const { open, isSupported } = useEyeDropper();
  const id = useMemo(() => crypto.randomUUID(), []);
  const { modalRef, isVisible, setIsVisible, modalStyle, containerRef } = useModalInContainer({
    position: { x: 0, y: 120 },
  });

  const borderColor = useMemo(() => {
    const color = Color(value === '' ? '#000000' : value);

    if (color.isLight() || color.alpha() < 0.5) {
      return '#000000';
    }

    return '#FFFFFF';
  }, [value]);

  const openEyeDropper = async () => {
    const { sRGBHex } = await open();
    setValue(sRGBHex);
  };

  return (
    <Field noBorderBottom id={id} label={label} leftIcon={leftIcon} rightIcon={rightIcon} error={error?.message}>
      <InputColorStyle
        onClick={e => {
          e.stopPropagation();
          setIsVisible(true);
        }}
        ref={containerRef}
      >
        <InputColorBoxStyle
          style={{
            borderColor,
            background: value,
            color: value,
            ...style,
          }}
        >
          <BaseModal id='input-color' isOpen={isVisible}>
            <InputColorSelectorStyle ref={modalRef} style={modalStyle}>
              <HexAlphaColorPicker id={id} color={value} onChange={setValue} />
              <section className='color-input-container'>
                {isSupported() ? (
                  <Icon
                    name='codepen'
                    onClick={() => {
                      void openEyeDropper();
                    }}
                  />
                ) : (
                  <span />
                )}
                <HexColorInput
                  className='color-input'
                  id={id}
                  name={name}
                  color={value}
                  placeholder='Type a color'
                  prefixed
                  alpha
                  onChange={setValue}
                />
                <span />
              </section>
            </InputColorSelectorStyle>
          </BaseModal>
        </InputColorBoxStyle>
        {showValueText ? (
          <Typography variant='label' className='input-color-value' weight='bold'>
            {value}
          </Typography>
        ) : null}
      </InputColorStyle>
    </Field>
  );
};

export const ColorController = withController<ColorProps, string>(InputColor, '#147EFB');
