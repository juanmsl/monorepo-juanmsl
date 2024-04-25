import styled from 'styled-components';

import './styles.css';

export const ThemeStyle = styled.main`
  height: 100dvh;
  overflow: auto;
  min-width: ${props => props.theme.constants.breakpoints.mobile};
  font-family: ${props => props.theme.constants.fontFamily};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  transition: all 300ms ease;
`;
