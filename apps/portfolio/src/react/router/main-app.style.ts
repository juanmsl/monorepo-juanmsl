import styled from 'styled-components';

export const MainAppStyle = styled.main`
  min-height: 100vh;
  font-family: ${props => props.theme.constants.fontFamily};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  transition: all 300ms ease;

  .slide-in,
  .slide-out {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background: ${props => props.theme.colors.primary};
    background: linear-gradient(
      -90deg,
      ${props => props.theme.colors.primary},
      ${props => props.theme.colors.secondary}
    );
    display: grid;
    place-content: center;
  }

  .slide-in {
    transform-origin: left;
  }

  .slide-out {
    transform-origin: right;
  }
`;
