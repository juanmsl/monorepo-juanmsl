import { Typography } from 'polpo/ui';
import React from 'react';

import { BoxShadowStyle } from './box-shadow.style';

import { BoxShadowLine } from '@core/constants';
import { getBoxShadowCSS } from '@hooks';

type BoxShadowProps = {
  boxShadowList: Array<BoxShadowLine>;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
};

export const BoxShadow = ({ boxShadowList, onClick, children }: BoxShadowProps) => {
  return (
    <BoxShadowStyle
      onClick={onClick}
      style={{
        boxShadow: boxShadowList
          .map(getBoxShadowCSS)
          .filter(line => line)
          .join(', '),
      }}
    >
      <Typography variant='label' weight='bold'>
        {children}
      </Typography>
      <Typography className='example-text' variant='small'>
        Click to custom
      </Typography>
    </BoxShadowStyle>
  );
};
