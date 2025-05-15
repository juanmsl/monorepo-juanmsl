import { Modal } from 'polpo/ui';
import styled from 'styled-components';

export const NavbarStyle = styled.nav`
  background: linear-gradient(
    ${props => props.theme.colors.primary.main},
    ${props => props.theme.colors.secondary.main}
  );
  color: ${props => props.theme.colors.primary.contrast};
  padding: 20px;
  display: grid;
  justify-items: center;
  gap: 50px;
  align-content: space-between;

  .navbar-logo {
    width: 2em;
    height: 2em;
    background: ${props => props.theme.colors.primary.contrast};
    border-radius: 50%;
    padding: 0.2em;
    cursor: pointer;
  }

  .navbar-top,
  .section-bottom {
    display: grid;
    justify-items: center;
    gap: 20px;
  }

  .navbar-top {
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
        background: ${props => props.theme.colors.primary.contrast}33;
      }

      &.active {
        background: ${props => props.theme.colors.primary.contrast};
        color: ${props => props.theme.colors.primary.main};
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
      background: ${props => props.theme.colors.primary.contrast};
      color: ${props => props.theme.colors.primary.main};
    }
  }
`;

export const NavbarSuggestionsModal = styled(Modal)`
  background: ${props => props.theme.colors.background.main};
  color: ${props => props.theme.colors.text.main};
  border: 1px solid ${props => props.theme.colors.text.main};
  width: 90vw;
  max-width: 550px;
  height: 90dvh;
  max-height: 550px;
  border-radius: 15px;
  padding: 2em 0;
  box-shadow:
    0 0 23px 10px #08070799 inset,
    0 10px 80px -20px ${props => props.theme.colors.text.main}CC;

  .modal-iframe {
    margin: 0;
    border: 0;
    width: 100%;
    height: 100%;
    padding: 1em;
  }
`;
