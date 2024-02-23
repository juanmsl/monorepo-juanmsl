import styled from 'styled-components';

export const NavbarStyle = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  display: none;
  grid-auto-flow: column;
  gap: 50px;
  padding: 20px 50px;
  justify-content: center;
  z-index: 2;
  background: ${props => props.theme.colors.background}AA;
  color: ${props => props.theme.colors.primary};
  transition: all 300ms ease;

  @media screen and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
    display: grid;
  }

  .navbar-item {
    color: inherit;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    font-weight: 500;

    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      opacity: 0;
      border-radius: 50%;
      background: ${props => props.theme.colors.primary};
      transition: all 300ms ease;
      margin-top: 10px;
    }

    &.active {
      font-weight: bolder;
    }

    &.active,
    &:hover {
      &::before {
        opacity: 1;
        width: 5px;
        height: 5px;
      }
    }
  }
`;
