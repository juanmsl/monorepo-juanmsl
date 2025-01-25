import { motion } from 'framer-motion';
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
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          transformOrigin: 'left',
          left: 0,
        }}
      >
        <motion.img
          loading='lazy'
          src='/assets/images/logo.png'
          alt='logo'
          initial={{
            x: -300,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: -300,
            opacity: 0,
            scale: 0.5,
          }}
          exit={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </PageTransitionStyle>
      <PageTransitionStyle
        initial={{ width: '100%' }}
        animate={{ width: 0 }}
        exit={{ width: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          transformOrigin: 'right',
          right: 0,
        }}
      >
        <motion.img
          loading='lazy'
          src='/assets/images/logo.png'
          alt='logo'
          initial={{
            x: 0,
            opacity: 1,
          }}
          animate={{
            x: 500,
            opacity: 0,
          }}
          exit={{
            x: 500,
            opacity: 0,
          }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </PageTransitionStyle>
    </>
  );
};
