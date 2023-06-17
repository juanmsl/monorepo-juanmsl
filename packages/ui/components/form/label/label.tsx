import React from 'react';
import { LabelStyle } from './label.style';

type LabelProps = {
  id: string;
  label: string;
  isFocus: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export const Label = ({ id, label, isFocus, className = '', style = {} }: LabelProps): React.ReactElement => {
  return (
    <LabelStyle isFocus={isFocus} htmlFor={id} className={className} style={style}>
      {label}
    </LabelStyle>
  );
};
