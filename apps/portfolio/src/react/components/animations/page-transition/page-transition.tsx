import { motion } from 'framer-motion';

export const PageTransition = (Component: React.FC) => {
  const PageTransitionWrapper = () => {
    return (
      <>
        <Component />
        <motion.div
          className='slide-in'
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src='/assets/images/logo.png' alt='logo' />
        </motion.div>
        <motion.div
          className='slide-out'
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </>
    );
  };

  return PageTransitionWrapper;
};
