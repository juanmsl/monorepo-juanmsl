import { Line, Typography } from 'juanmsl/ui';
import React from 'react';

import { PageLayoutStyle } from './page-layout.style';

type PageLayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export const PageLayout = ({ title, description, children }: PageLayoutProps) => {
  return (
    <PageLayoutStyle>
      <Typography variant='header1'>{title}</Typography>
      <Typography noPadding>{description}</Typography>
      <Line orientation='horizontal' className='page-line' lineStyle='dotted' dotSize={2} spacing={5} />
      {children}
    </PageLayoutStyle>
  );
};
