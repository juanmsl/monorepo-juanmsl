import styled from 'styled-components';

export const AsideModalStyle = styled.section`
  position: absolute;
  background: ${props => props.theme.colors.background.main};
  color: ${props => props.theme.colors.text.main};

  .aside-modal-content {
    overflow: auto;
    height: 100%;
    padding: 2em;
  }

  .close-modal-button {
    border-radius: 50%;
    cursor: pointer;
    display: grid;
    place-content: center;
    background: ${props => props.theme.colors.background.main};
    border: 4px solid ${props => props.theme.colors.primary.main};
    position: absolute;
    padding: 0.5em;
  }

  &.left {
    height: 100%;
    top: 0;
    left: 0;
    border-right: 4px solid ${props => props.theme.colors.primary.main};

    &.open-animation {
      animation: slideIn-left 300ms ease;
    }

    &.close-animation {
      animation: slideOut-left 300ms ease;
    }

    .close-modal-button {
      top: 2em;
      left: 100%;
      transform: translate(calc(-50% + 2px));
    }
  }

  &.right {
    height: 100%;
    top: 0;
    right: 0;
    border-left: 4px solid ${props => props.theme.colors.primary.main};

    &.open-animation {
      animation: slideIn-right 300ms ease;
    }

    &.close-animation {
      animation: slideOut-right 300ms ease;
    }

    .close-modal-button {
      top: 2em;
      right: 100%;
      transform: translate(calc(50% - 2px));
    }
  }

  &.top {
    top: 0;
    right: 0;
    width: 100%;
    border-bottom: 4px solid ${props => props.theme.colors.primary.main};

    &.open-animation {
      animation: slideIn-top 300ms ease;
    }

    &.close-animation {
      animation: slideOut-top 300ms ease;
    }

    .close-modal-button {
      bottom: 0;
      right: 2em;
      transform: translate(0, calc(50% - 2px));
    }
  }

  &.bottom {
    bottom: 0;
    right: 0;
    width: 100%;
    border-top: 4px solid ${props => props.theme.colors.primary.main};

    &.open-animation {
      animation: slideIn-bottom 300ms ease;
    }

    &.close-animation {
      animation: slideOut-bottom 300ms ease;
    }

    .close-modal-button {
      top: 0;
      right: 2em;
      transform: translate(0, calc(-50% + 2px));
    }
  }
`;
