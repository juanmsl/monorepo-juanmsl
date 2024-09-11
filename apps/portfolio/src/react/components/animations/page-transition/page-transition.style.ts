import { motion } from 'framer-motion';
import styled from 'styled-components';

export const PageTransitionStyle = styled(motion.section)`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100dvh;
  z-index: 100;
  background: ${props => props.theme.colors.primary.main};
  background: linear-gradient(
    ${props => props.theme.colors.primary.main},
    ${props => props.theme.colors.secondary.main}
  );
  display: grid;
  place-content: center;
`;
