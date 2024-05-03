import styled from 'styled-components';

export const NavbarStyle = styled.nav`
  background: linear-gradient(${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: ${props => props.theme.colors.primaryContrast};
  padding: 10px clamp(20px, 5.555%, 100px);
  display: grid;
  justify-items: center;
  gap: 10px;
  align-content: start;

  .navbar-logo {
    width: 2em;
    height: 2em;
    background: ${props => props.theme.colors.primaryContrast};
    border-radius: 50%;
    padding: 0.2em;
    cursor: pointer;
  }

  .navbar-left {
    text-decoration: none;
    color: inherit;
    display: grid;
    justify-items: center;
    gap: 10px;

    .navbar-title {
      writing-mode: vertical-rl;
      text-orientation: mixed;
      transform: rotate(180deg);
    }
  }
`;
