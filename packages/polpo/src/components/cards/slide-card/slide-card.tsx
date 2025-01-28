import { motion } from 'framer-motion';
import React from 'react';

const variants = {
  vertical: {
    open: {
      height: 'auto',
      /*
       * transition: {
       *   type: 'spring',
       *   damping: 10,
       *   stiffness: 200,
       *   restDelta: 0.01,
       * },
       */
    },
    closed: {
      height: 0,
    },
  },
};

type SlideCardProps = {
  children: React.ReactNode;
  isOpen: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export const SlideCard = ({ children, isOpen, className = '', style = {} }: SlideCardProps) => {
  return (
    <motion.section
      variants={variants.vertical}
      initial={isOpen ? 'open' : 'closed'}
      animate={isOpen ? 'open' : 'closed'}
      className={className}
      style={{ overflow: 'hidden', ...style }}
    >
      {children}
    </motion.section>
  );
};
