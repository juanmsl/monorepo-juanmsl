import { motion } from 'framer-motion';
import styled from 'styled-components';

export const AsideContainer = styled.main`
  display: grid;
  grid-auto-flow: row;
  height: 100dvh;
  position: relative;
  grid-template-rows: 1fr auto;

  .aside-content {
    height: 100%;
    overflow: auto;
    transform-origin: center right;
    display: block;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
      box-shadow: 10px 10px 40px 10px ${props => props.theme.colors.text}88;
    }
  }

  @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
    grid-auto-flow: column;
    grid-template-rows: unset;
  }
`;

export const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 300px;
  width: 100%;
  height: calc(100% - 60px);
  background: linear-gradient(150deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.tertiary});
  color: ${props => props.theme.colors.primaryContrast};
  z-index: 9;

  @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
    max-width: 300px;
    height: 100%;
    box-shadow: 5px 0 20px #000000;
  }
`;

export const AsideStyle = styled(motion.nav)`
  min-width: 300px;
  width: 100%;
  height: calc(100% - 60px);
  overflow-y: auto;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  color: ${props => props.theme.colors.primaryContrast};
  display: grid;
  gap: 40px;
  padding: 40px 20px;
  color: ${props => props.theme.colors.primaryContrast};
  grid-template-rows: auto 1fr auto;

  .aside-logo {
    display: block;
    width: 80px;
    height: 80px;
    padding: 10px;
    border-radius: 50%;
    background: ${props => props.theme.colors.primaryContrast};
  }

  .aside-items {
    display: grid;
    gap: 10px;
    align-content: start;
  }

  .aside-footer {
    display: grid;
    gap: 25px;
  }

  @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
    max-width: 300px;
    height: 100%;
  }
`;

export const MobileAside = styled(motion.nav)`
  background: linear-gradient(150deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.tertiary});
  color: ${props => props.theme.colors.primaryContrast};
  padding: 10px 20px;
  display: grid;
  align-items: center;
  gap: 20px;
  grid-template-columns: 40px 1fr 40px;

  .aside-logo {
    display: block;
    width: 40px;
    height: 40px;
    padding: 5px;
    border-radius: 50%;
    background: ${props => props.theme.colors.primaryContrast};
  }

  .aside-items {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-auto-flow: column;
    gap: 10px;
  }

  @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
    display: none;
  }
`;

export const MenuItem = styled(motion.span)`
  &,
  .aside-item-text {
    cursor: pointer;
  }

  .aside-item {
    color: inherit;
    text-decoration: none;
    line-height: 1em;
    transition: all 300ms ease;
    position: relative;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: start;
    gap: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 0;

    &.active {
      font-weight: bold;
      border: 1px solid;
    }

    &:hover,
    &.active {
      background: ${props => props.theme.colors.primaryContrast}55;
    }
  }
`;

export const MobileMenuItem = styled(motion.span)`
  .mobile-aside-item {
    color: inherit;
    text-decoration: none;
    line-height: 1em;
    transition: all 300ms ease;
    position: relative;
    gap: 10px;
    padding: 2px;
    border-radius: 5px;
    border: 0;
    width: 40px;
    height: 40px;
    display: grid;
    place-content: center;
    font-size: 1.5em;

    &.active {
      font-weight: bold;
      border: 1px solid;
    }

    &:hover,
    &.active {
      background: ${props => props.theme.colors.primaryContrast}55;
    }
  }
`;

export const Trigger = styled(motion.button)`
  outline: none;
  border: none;
  user-select: none;
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  margin: 20px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primaryContrast};
  z-index: 10;
  display: none;
  place-content: center;
  box-shadow: 0 0 5px #000000;

  @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
    display: grid;
  }
`;

export const MobileTrigger = styled(motion.button)`
  outline: none;
  user-select: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.primaryContrast};
  background: transparent;
  color: ${props => props.theme.colors.primaryContrast};
  display: grid;
  place-content: center;
`;
