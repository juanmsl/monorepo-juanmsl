import Color from 'color';
import { useMemo } from 'react';
import { HexAlphaColorPicker, HexColorInput } from 'react-colorful';
import useEyeDropper from 'use-eye-dropper';

import { Icon } from '../../../contexts';
import { useModalInContainer } from '../../../hooks';
import { BaseModal } from '../../modals';
import { Typography } from '../../typography';
import { Controller } from '../controller';
import { Field, InputFieldProps } from '../field';
import { ControllerGeneratorProps, UnControlledComponentProps } from '../form.types';

import { InputColorBoxStyle, InputColorSelectorStyle, InputColorStyle } from './input-color.style';

type ColorProps = InputFieldProps<{
  showValueText?: boolean;
}>;

export const InputColor = ({
  name,
  value,
  setValue,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onBlur,
  showValueText = false,
  className = '',
  style = {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  autoFocus = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  readOnly = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  disabled = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  placeholder = '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  autoComplete = 'off',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isDirty = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isTouched = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  invalid = false,
  error,
  ...fieldProps
}: UnControlledComponentProps<ColorProps, string>) => {
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
    <Field id={id} error={error} isFocus={false} {...fieldProps}>
      <InputColorStyle
        onClick={e => {
          e.stopPropagation();
          setIsVisible(true);
        }}
        ref={containerRef}
      >
        <InputColorBoxStyle
          className={className}
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
                    name='dropper'
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

const InputColorController = ({ rules, ...props }: ControllerGeneratorProps<ColorProps>) => {
  return <Controller Component={InputColor} defaultValue='#147EFB' inputProps={props} rules={rules} />;
};

InputColor.Controller = InputColorController;
