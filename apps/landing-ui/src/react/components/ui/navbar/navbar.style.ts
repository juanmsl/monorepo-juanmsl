import styled from 'styled-components';

export const NavbarStyle = styled.nav`
  background: linear-gradient(
    to right,
    ${props => props.theme.colors.primary},
    ${props => props.theme.colors.secondary},
    ${props => props.theme.colors.tertiary}
  );
  color: ${props => props.theme.colors.primaryContrast};
  padding: 0.5em 2em;
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: 50px;
  place-content: center space-between;

  .navbar-logo {
    width: 1.5em;
    height: 1.5em;
    background: ${props => props.theme.colors.primaryContrast};
    border-radius: 50%;
    padding: 0.2em;
    cursor: pointer;
  }

  .navbar-logo-container {
    text-decoration: none;
    color: inherit;
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    gap: 1em;
  }

  .navbar-theme-icon,
  .navbar-language-button {
    cursor: pointer;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    display: grid;
    place-content: center;
    border: 1px solid transparent;
    transition: all 300ms ease;

    &:hover {
      border: 1px solid;
    }
  }

  .navbar-actions {
    display: grid;
    grid-auto-flow: column;
    gap: 1em;
    align-items: center;
  }
`;
