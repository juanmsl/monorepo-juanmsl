import Color from 'color';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { HexAlphaColorPicker, HexColorInput } from 'react-colorful';
import useEyeDropper from 'use-eye-dropper';

import { Icon } from '../../icon';
import { Modal } from '../../modals';
import { Controller } from '../controller';
import { Field, InputFieldProps } from '../field';
import { ControllerGeneratorProps, UnControlledComponentProps } from '../form.types';

import { InputColorBoxStyle, InputColorSelectorStyle, InputColorStyle } from './input-color.style';

import { useInputHandlers, useModalInContainer } from '@polpo/hooks';

type ColorProps = InputFieldProps<{
  showValueText?: boolean;
}>;

export const InputColor = ({
  name,
  value,
  setValue,
  onBlur,
  onFocus,
  showValueText = false,
  className = '',
  style = {},
  autoFocus = false,
  readOnly = false,
  disabled = false,
  placeholder = '',
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
  const [inputValue, setInputValue] = useState<string>(value);
  const id = useMemo(() => crypto.randomUUID(), []);
  const { handlers, isFocus } = useInputHandlers({
    onChange: e => setInputValue(e.target.value),
    onBlur: e => {
      setInputColor();
      onBlur && onBlur(e);
    },
    onFocus: e => {
      setInputColor();
      onFocus && onFocus(e);
    },
  });
  const { modalRef, isVisible, setIsVisible, modalStyle, containerRef } = useModalInContainer({
    position: 'bottom',
    distancePercentage: 0,
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

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const setInputColor = useCallback(() => {
    if (inputValue.match(/^#(?:(?:[\da-f]{3}){1,2}|(?:[\da-f]{4}){1,2})$/i)) {
      setValue(inputValue);
    } else {
      setInputValue(value);
    }
  }, [inputValue, setValue, value]);

  return (
    <Field id={id} error={error} isFocus={isFocus} {...fieldProps}>
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
          <Modal id='input-color' isOpen={isVisible}>
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
          </Modal>
        </InputColorBoxStyle>
        {showValueText ? (
          <input
            id={id}
            name={name}
            value={inputValue}
            placeholder={placeholder}
            readOnly={readOnly}
            autoFocus={autoFocus}
            disabled={disabled}
            autoComplete={autoComplete}
            className='color-input'
            {...handlers}
          />
        ) : null}
      </InputColorStyle>
    </Field>
  );
};

const InputColorController = ({ rules, ...props }: ControllerGeneratorProps<ColorProps, string>) => {
  return <Controller Component={InputColor} defaultValue='#147EFB' inputProps={props} rules={rules} />;
};

InputColor.Controller = InputColorController;
