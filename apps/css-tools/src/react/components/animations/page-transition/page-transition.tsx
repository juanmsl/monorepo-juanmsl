import React from 'react';

import { PageTransitionStyle } from './page-transition.style';

type PageTransitionProps = {
  children: React.ReactNode;
};

export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <>
      {children}
      <PageTransitionStyle
        initial={{ width: 0 }}
        animate={{ width: 0 }}
        exit={{ width: '100%' }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          transformOrigin: 'left',
          left: 0,
        }}
      />
      <PageTransitionStyle
        initial={{ width: '100%' }}
        animate={{ width: 0 }}
        exit={{ width: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          transformOrigin: 'right',
          right: 0,
        }}
      />
    </>
  );
};
