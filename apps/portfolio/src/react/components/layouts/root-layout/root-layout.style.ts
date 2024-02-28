import styled from 'styled-components';

export const RootLayoutStyle = styled.main`
  min-height: 100vh;
  font-family: ${props => props.theme.constants.fontFamily};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  transition: all 300ms ease;

  .root-layout-actions {
    position: fixed;
    top: 0;
    right: 0;
    margin: 20px;
    z-index: 6;
    display: none;
    grid-auto-flow: row;
    gap: 20px;
    justify-items: end;

    @media all and (min-width: ${props => props.theme.constants.breakpoints.mobileL}) {
      display: grid;
    }
  }
`;
