import { AsideTriggerStyle } from './aside.style';
import { useMemo } from 'react';
import { useViewport } from '@juanmsl/ui';
import { SVGMotionProps, motion } from 'framer-motion';

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path fill='transparent' strokeWidth='3' stroke='currentColor' strokeLinecap='round' {...props} />
);

type MenuToggleProps = {
  toggle: () => void;
  isOpen: boolean;
  size?: string;
};

export const AsideTrigger = ({ toggle, isOpen, size = '1em' }: MenuToggleProps) => {
  const { width } = useViewport();

  const variants = useMemo(
    () => ({
      open: {
        x: width < 768 ? width - 80 : 300,
      },
      close: {
        x: 0,
      },
    }),
    [width],
  );

  return (
    <AsideTriggerStyle onClick={toggle} initial='close' animate={isOpen ? 'open' : 'close'} variants={variants}>
      <svg width={size} height={size} viewBox='0 0 20 20'>
        <Path
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          animate={isOpen ? 'open' : 'closed'}
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </AsideTriggerStyle>
  );
};
