import styled, { createGlobalStyle } from 'styled-components';

import './styles.css';

export const ThemeStyle = styled.main`
  height: 100dvh;
  overflow: auto;
`;

export const GlobalStyles = createGlobalStyle`
  body {
    min-width: ${props => props.theme.constants.breakpoints.mobile};
    font-family: ${props => props.theme.constants.fontFamily};
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
`;
