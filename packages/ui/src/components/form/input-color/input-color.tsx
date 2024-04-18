import { useId } from 'react';

import { useInputHandlers } from '../../../hooks';
import { InputProps } from '../types';
import { withController } from '../with-controller';

import { InputColorStyle } from './input-color.style';

type ColorProps = {};

export const InputColor = ({ name, style = {}, setValue, onBlur, value }: InputProps<ColorProps, string>) => {
  const id = useId();

  const {
    handlers: { ...handlers },
  } = useInputHandlers({
    onBlur: onBlur,
    onChange: setValue,
  });

  return (
    <InputColorStyle>
      <section
        className='content'
        style={{
          background: value,
          color: value,
        }}
      >
        <input
          id={id}
          {...handlers}
          onClick={e => {
            e.stopPropagation();
          }}
          type='color'
          name={name}
          style={style}
          value={value}
        />
      </section>
    </InputColorStyle>
  );
};

export const ColorController = withController<ColorProps, string>(InputColor, '#147EFB');
