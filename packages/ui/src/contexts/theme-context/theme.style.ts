import styled, { createGlobalStyle } from 'styled-components';

export const ThemeStyle = styled.main`
  height: 100dvh;
  overflow: auto;
`;

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #cecece;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #cecece;
  }

  :root {
    color-scheme: light dark;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, textarea {
    color: currentColor;
    font-family: inherit;
    padding: 0;
    margin: 0;
    width: 100%;
    background: transparent;
  }

  input {
    border: 0;
    outline: 0;
    padding: 0;
    width: 100%;
  }

  body {
    min-width: ${props => props.theme.constants.breakpoints.mobile};
    font-family: ${props => props.theme.constants.fontFamily};
    background: ${props => props.theme.colors.background.main};
    color: ${props => props.theme.colors.text.main};
  }
`;
