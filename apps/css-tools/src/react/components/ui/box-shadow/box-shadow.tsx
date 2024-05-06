import { Typography } from '@juanmsl/ui';
import React from 'react';

import { BoxShadowStyle } from './box-shadow.style';

import { BoxShadowLine } from '@core/constants';
import { useBoxShadow } from '@hooks';

type BoxShadowProps = {
  boxShadowList: Array<BoxShadowLine>;
  onClick: () => void;
  children: React.ReactNode;
};

export const BoxShadow = ({ boxShadowList, onClick, children }: BoxShadowProps) => {
  const boxShadow = useBoxShadow(boxShadowList);

  return (
    <BoxShadowStyle onClick={onClick} style={{ boxShadow: boxShadow.filter(line => line).join(', ') }}>
      <Typography variant='label' weight='bold'>
        {children}
      </Typography>
      <Typography className='example-text' variant='small'>
        Click to custom
      </Typography>
    </BoxShadowStyle>
  );
};
