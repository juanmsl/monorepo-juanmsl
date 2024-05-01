import { Typography } from '@juanmsl/ui';
import React from 'react';

import { TextShadowStyle } from './text-shadow.style';

import { TextShadowLine, useTextShadow } from '@hooks';

type TextShadowProps = {
  textShadowList: Array<TextShadowLine>;
  onClick: () => void;
  children: React.ReactNode;
};

export const TextShadow = ({ textShadowList, onClick, children }: TextShadowProps) => {
  const textShadow = useTextShadow(textShadowList);

  return (
    <TextShadowStyle onClick={onClick}>
      <Typography variant='body' weight='bold' style={{ textShadow: textShadow.filter(line => line).join(', ') }}>
        {children}
      </Typography>
      <Typography className='example-text' variant='small'>
        Click to custom
      </Typography>
    </TextShadowStyle>
  );
};
