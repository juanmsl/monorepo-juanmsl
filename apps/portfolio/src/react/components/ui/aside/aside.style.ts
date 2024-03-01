import { motion } from 'framer-motion';
import styled from 'styled-components';

export const AsideContainerStyle = styled.main`
  display: grid;
  grid-auto-flow: column;
  height: 100vh;
  position: relative;

  .aside-content {
    height: 100%;
    overflow: auto;
    transform-origin: center right;
    display: block;
    box-shadow: 10px 10px 40px 10px ${props => props.theme.colors.text}88;
  }
`;

export const AsideBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  min-width: 300px;
  width: 100%;
  background: linear-gradient(150deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.tertiary});
  color: ${props => props.theme.colors.primaryContrast};
  z-index: 9;
  box-shadow: 5px 0 20px #000000;

  @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
    max-width: 300px;
  }
`;

export const AsideStyle = styled(motion.nav)`
  min-width: 300px;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  color: ${props => props.theme.colors.primaryContrast};

  @media all and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
    max-width: 300px;
  }
`;

export const AsideContentStyle = styled(motion.nav)`
  display: grid;
  gap: 40px;
  padding: 40px 20px;
  color: ${props => props.theme.colors.primaryContrast};
  height: 100%;
  grid-template-rows: auto 1fr auto;

  .aside-logo {
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
`;

export const AsideItemStyle = styled(motion.span)`
  &,
  label {
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

export const AsideTriggerStyle = styled(motion.button)`
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
  display: grid;
  place-content: center;
  box-shadow: 0 0 5px #000000;
`;
