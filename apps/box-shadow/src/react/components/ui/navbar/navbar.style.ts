import styled from 'styled-components';

export const NavbarStyle = styled.nav`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primaryContrast};
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 1;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 10px;
  justify-content: start;

  @media all and (min-width: ${props => props.theme.constants.breakpoints.mobileL}) {
    padding: 10px 50px;
  }

  .navbar-logo {
    width: 2em;
    height: 2em;
    background: ${props => props.theme.colors.primaryContrast};
    border-radius: 50%;
    padding: 0.2em;
    cursor: pointer;
  }

  .portfolio-link {
    text-decoration: none;
    color: inherit;
  }
`;
