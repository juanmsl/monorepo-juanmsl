import styled from 'styled-components';

export const ModalStyle = styled.section`
  position: fixed;
  z-index: 1001;
  pointer-events: none;

  &.screen-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &.screen-left {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  &.screen-right {
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
  &.screen-top {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  &.screen-bottom {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ModalContentStyle = styled.section`
  background: ${props => props.theme.colors.background.paper};
  pointer-events: initial;

  &.animation-fade-down {
    animation: fadeInDown 200ms ease;

    &.modal-close {
      animation: fadeOutUp 200ms ease;
      transform: translateY(-10px);
      opacity: 0;
    }
  }

  &.animation-bounce {
    animation: bounceIn 500ms ease;

    &.modal-close {
      animation: bounceOut 500ms ease;
      transform: scale3d(0.3, 0.3, 0.3);
      opacity: 0;
    }
  }
`;

export const BackdropStyle = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  animation: backdropOpen 500ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &.backdrop-close {
    animation: backdropClose 500ms cubic-bezier(0.215, 0.61, 0.355, 1);
    opacity: 0;
    transform: translateY(-10px);
  }

  @keyframes backdropOpen {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes backdropClose {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
`;
