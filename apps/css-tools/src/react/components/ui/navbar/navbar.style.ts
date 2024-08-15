import styled from 'styled-components';

export const NavbarStyle = styled.nav`
  background: linear-gradient(${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: ${props => props.theme.colors.primaryContrast};
  padding: 20px;
  display: grid;
  justify-items: center;
  gap: 50px;
  align-content: space-between;

  .navbar-logo {
    width: 2em;
    height: 2em;
    background: ${props => props.theme.colors.primaryContrast};
    border-radius: 50%;
    padding: 0.2em;
    cursor: pointer;
  }

  .navbar-top,
  .section-bottom {
    display: grid;
    justify-items: center;
    gap: 50px;
  }

  .navbar-logo-container {
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

  .navbar-options {
    display: grid;
    gap: 20px;
    justify-items: center;

    &--link {
      width: 2em;
      height: 2em;
      display: grid;
      place-content: center;
      border-radius: 50%;

      &:hover:not(.active) {
        background: ${props => props.theme.colors.primaryContrast}33;
      }

      &.active {
        background: ${props => props.theme.colors.primaryContrast};
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  .modal-suggestions-trigger {
    width: 2em;
    height: 2em;
    display: grid;
    place-content: center;
    border-radius: 50%;
    border: 1px solid;
    cursor: pointer;

    &:hover {
      background: ${props => props.theme.colors.primaryContrast};
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export const NavbarSuggestionsModal = styled.section`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.text};
  width: 90vw;
  max-width: 550px;
  height: 90dvh;
  max-height: 550px;
  border-radius: 15px;
  padding: 2em 0;
  box-shadow:
    0 0 23px 10px #08070799 inset,
    0 10px 80px -20px ${props => props.theme.colors.text}CC;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .modal-iframe {
    margin: 0;
    border: 0;
    width: 100%;
    height: 100%;
    padding: 1em;
  }
`;
