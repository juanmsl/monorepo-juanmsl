import Color from 'color';
import { Icon } from '../../../contexts';
import { InputColorStyle } from './input-color.style';
import { InputProps } from '../types';
import { InputState } from '../input-state';
import { Label } from '../label';
import { useInputHandlers } from '@juanmsl/hooks';
import { withController } from '../with-controller';
import { useId, useMemo } from 'react';

type ColorProps = {};

export const InputColor = ({
  name,
  style = {},
  setValue,
  onBlur,
  value,
  label,
  leftIcon,
  rightIcon,
  error,
}: InputProps<ColorProps, string>) => {
  const id = useId();

  const {
    isFocus,
    handlers: { ...handlers },
  } = useInputHandlers({
    onBlur: onBlur,
    onChange: setValue,
  });

  const backgroundColor = useMemo(() => {
    const color = Color(value === '' ? '#000000' : value);

    if (color.isLight()) {
      return '#000000AA';
    }

    return '#FFFFFF88';
  }, [value]);

  return (
    <InputColorStyle>
      {label ? <Label id={id} label={label} isFocus={isFocus} /> : null}
      <section
        className="content"
        style={{
          background: value,
          color: value,
        }}
      >
        <section
          className="color-box"
          style={{
            background: value,
          }}
        />
        <section
          className="color-content"
          style={{
            background: backgroundColor,
          }}
        >
          {!!leftIcon && <Icon name={leftIcon} className="field-icon field-left-icon" />}
          <span className="color-text">{value}</span>
          {!!rightIcon && (
            <span className="field-icon field-right-icon">
              <Icon name={rightIcon} />
            </span>
          )}
          <input id={id} {...handlers} type="color" name={name} style={style} value={value} />
        </section>
      </section>
      {error?.message ? <InputState state={error.message} /> : null}
    </InputColorStyle>
  );
};

export const ColorController = withController<ColorProps, string>(InputColor, '#147EFB');
