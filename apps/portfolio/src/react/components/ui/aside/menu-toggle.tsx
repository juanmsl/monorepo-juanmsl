import { SVGMotionProps, motion } from 'framer-motion';

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path fill='transparent' strokeWidth='3' stroke='currentColor' strokeLinecap='round' {...props} />
);

type MenuToggleProps = {
  isOpen: boolean;
  size?: string;
};

export const AsideTrigger = ({ isOpen, size = '1em' }: MenuToggleProps) => {
  return (
    <svg width={size} height={size} viewBox='0 0 20 20'>
      <Path
        animate={isOpen ? 'open' : 'closed'}
        initial='closed'
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        animate={isOpen ? 'open' : 'closed'}
        d='M 2 9.423 L 20 9.423'
        initial='closed'
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        animate={isOpen ? 'open' : 'closed'}
        initial='closed'
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  );
};
