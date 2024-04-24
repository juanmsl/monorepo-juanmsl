import { Typography } from '@juanmsl/ui';
import React from 'react';

import { BoxShadowExampleStyle } from './box-shadow-example.style';

import { BoxShadowLine, useBoxShadow } from '@hooks';

type BoxShadowExampleProps = {
  boxShadowList: Array<BoxShadowLine>;
  onClick: () => void;
  children: React.ReactNode;
};

export const BoxShadowExample = ({ boxShadowList, onClick, children }: BoxShadowExampleProps) => {
  const boxShadow = useBoxShadow(boxShadowList);

  return (
    <BoxShadowExampleStyle onClick={onClick} style={{ boxShadow: boxShadow.filter(line => line).join(', ') }}>
      <Typography variant='label' weight='bold'>
        {children}
      </Typography>
      <Typography className='example-text' variant='small'>
        Click to custom
      </Typography>
    </BoxShadowExampleStyle>
  );
};
