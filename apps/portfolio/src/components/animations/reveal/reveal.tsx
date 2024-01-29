import React, {useEffect, useRef} from "react";
import {motion, useAnimation, useInView} from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export const Reveal = ({
  children,
  delay = 0,
  duration = 500,
  once = true,
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const opacityControls = useAnimation();

  useEffect(() => {
    if(isInView) {
      void opacityControls.start('visible');
    } else {
      opacityControls.set('hidden');
    }
  }, [isInView]);

  return (
    <motion.span
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: -75,  scale: 0.5 },
        visible: { opacity: 1, y: 0,  scale: 1 }
      }}
      initial='hidden'
      animate={opacityControls}
      transition={{ duration: duration / 1000, delay: delay / 1000, ease: 'easeOut' }}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.span>
  );
};
