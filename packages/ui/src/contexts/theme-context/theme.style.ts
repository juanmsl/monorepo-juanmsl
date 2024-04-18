import styled from 'styled-components';

export const ThemeStyle = styled.main`
  min-height: 100dvh;
  min-width: ${props => props.theme.constants.breakpoints.mobile};
  font-family: ${props => props.theme.constants.fontFamily};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  transition: all 300ms ease;
`;
