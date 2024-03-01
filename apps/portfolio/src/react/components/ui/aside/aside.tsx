import { AsideTrigger } from './menu-toggle';
import { Navigation } from './navigation';
import { AsideBackground, AsideContainerStyle, AsideStyle } from './aside.style';
import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions, useMediaQuery } from '@juanmsl/ui';

const sidebar = {
  open: (height: number) => ({
    clipPath: `circle(${height * 1.4}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(20px at 40px 40px)',
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

type AsideProps = {
  children: React.ReactNode;
};

export const Aside = ({ children }: AsideProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const isTablet = useMediaQuery('(min-width: 768px)');

  return (
    <AsideContainerStyle ref={containerRef}>
      <AsideBackground
        custom={height}
        className='background'
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebar}
      />
      <AsideStyle
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { x: 0 },
          closed: { x: '-100%' },
        }}
      >
        <Navigation />
      </AsideStyle>
      <AsideTrigger toggle={toggleOpen} isOpen={isOpen} />
      <motion.section
        className='aside-content'
        animate={isOpen && isTablet ? 'open' : 'closed'}
        initial='closed'
        variants={{
          open: {
            transform: 'perspective(100vw) scale(0.95) translateX(-100px) rotateY(-10deg) ',
            borderRadius: 25,
            transition: { delay: 0 },
            className: 'aside-content--open',
          },
          closed: {
            transform: 'perspective(100vw)',
            borderRadius: 0,
            transition: { delay: 0.1 },
            className: 'aside-content--closed',
          },
        }}
      >
        {children}
      </motion.section>
    </AsideContainerStyle>
  );
};
