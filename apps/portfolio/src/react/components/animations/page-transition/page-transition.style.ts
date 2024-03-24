import { motion } from 'framer-motion';
import styled from 'styled-components';

export const PageTransitionStyle = styled(motion.section)`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100dvh;
  z-index: 100;
  background: ${props => props.theme.colors.primary};
  background: linear-gradient(${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  display: grid;
  place-content: center;
`;
