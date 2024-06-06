import { useMediaQuery, useViewport } from '@juanmsl/hooks';
import { Icon, IconNameT, Image, Line, Typography } from '@juanmsl/ui';
import { motion, useCycle } from 'framer-motion';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import {
  AsideContainer,
  AsideStyle,
  Background,
  MenuItem,
  MobileAside,
  MobileMenuItem,
  MobileTrigger,
  Trigger,
} from './aside.style';
import { AsideTrigger } from './menu-toggle';

import { DownloadCvButton, SocialIcons } from '@components/ui';
import { PATHS } from '@core/constants';
import { useGetNavbarOptions } from '@hooks';

const variants = {
  asideContent: {
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
  },
  background: {
    open: ({ atPosition = '40px 40px', size }: { atPosition: string; size: number }) => ({
      clipPath: `circle(${size}px at ${atPosition})`,
      transition: {
        duration: 1,
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: ({ atPosition = '40px 40px' }: { atPosition: string }) => ({
      clipPath: `circle(20px at ${atPosition})`,
      transition: {
        duration: 0.5,
        stiffness: 400,
        damping: 60,
      },
    }),
  },
  aside: {
    open: {
      x: 0,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      x: '-100%',
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  },
  mobileAside: {
    open: {
      y: 0,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      y: '100%',
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  },
  menuItem: {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  },
  trigger: {
    open: {
      x: 300,
    },
    close: {
      x: 0,
    },
  },
};

type AsideProps = {
  children: React.ReactNode;
};

export const Aside = ({ children }: AsideProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { height, width } = useViewport();
  const isTablet = useMediaQuery('(min-width: 768px)');
  const { t } = useTranslation();
  const { data: navbarOptions = [] } = useGetNavbarOptions();

  const menuItems = useMemo(
    () =>
      navbarOptions.map(({ label, page, icon }) => (
        <MenuItem key={page} variants={variants.menuItem} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
          <NavLink to={page} className='aside-item'>
            <Icon name={icon as IconNameT} />
            <Typography className='aside-item-text' withoutPadding variant='label'>
              {label}
            </Typography>
          </NavLink>
        </MenuItem>
      )),
    [navbarOptions],
  );

  const mobileMenuItems = useMemo(
    () =>
      navbarOptions.map(({ page, icon }) => (
        <MobileMenuItem key={page} variants={variants.menuItem} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
          <NavLink to={page} className='mobile-aside-item'>
            <Icon name={icon as IconNameT} />
          </NavLink>
        </MobileMenuItem>
      )),
    [navbarOptions],
  );

  return (
    <AsideContainer>
      {/* ------------ PAGE CONTENT */}
      <motion.section
        className='aside-content'
        animate={isOpen && isTablet ? 'open' : 'closed'}
        initial='closed'
        variants={variants.asideContent}
      >
        {children}
      </motion.section>

      {/* ------------ BACKGROUND */}
      <Background
        custom={{
          atPosition: isTablet ? '40px 40px' : `${width - 40}px ${height - 30}px`,
          size: height * 1.4,
        }}
        className='background'
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
        variants={variants.background}
      />

      {/* ------------ ASIDE */}
      <AsideStyle initial='closed' animate={isOpen ? 'open' : 'closed'} variants={variants.aside}>
        <NavLink to={PATHS.HOME_URL}>
          <Image className='aside-logo' src='/assets/images/logo.png' alt='logo' />
        </NavLink>
        <section className='aside-items'>{menuItems}</section>
        <footer className='aside-footer'>
          <DownloadCvButton width='100%'>{t('home:aboutMe.button1')}</DownloadCvButton>
          <Line orientation='horizontal' />
          <SocialIcons position='top' gap='5px' />
        </footer>
      </AsideStyle>

      {/* ------------ MOBILE ASIDE */}
      <MobileAside initial='closed' animate={isTablet ? 'closed' : 'open'} variants={variants.mobileAside}>
        <NavLink to={PATHS.HOME_URL}>
          <Image className='aside-logo' src='/assets/images/logo.png' alt='logo' />
        </NavLink>
        <section className='aside-items'>{mobileMenuItems}</section>
        <MobileTrigger onClick={() => toggleOpen()}>
          <AsideTrigger isOpen={isOpen} />
        </MobileTrigger>
      </MobileAside>

      {/* ------------ TRIGGER */}
      <Trigger
        onClick={() => toggleOpen()}
        initial='close'
        animate={isOpen ? 'open' : 'close'}
        variants={variants.trigger}
      >
        <AsideTrigger isOpen={isOpen} />
      </Trigger>
    </AsideContainer>
  );
};
