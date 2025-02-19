import { styled } from 'styled-components';

import { Modal } from '../modal-provider';

export const ModalStyle = styled(Modal)`
  background: transparent;

  .modal-content {
    &.shake-animation {
      animation: headShake 600ms linear;
    }
  }
`;

export const ActionModalStyle = styled.section`
  position: relative;

  .action-modal-body {
    border-radius: 10px;
    overflow: hidden;
    display: grid;
  }

  .action-modal-content {
    background: ${props => props.theme.colors.background.main};
    padding: 3em 4em 2em;
    display: grid;
    gap: 1em;
  }

  &.no-padding .action-modal-content {
    padding: 2em 0 0;
  }

  &:has(.action-modal-icon) .action-modal-content {
    padding-top: 4em;
  }

  &.back-card {
    &::before {
      content: '';
      position: absolute;
      width: 90%;
      height: 100%;
      top: 8px;
      left: 50%;
      transform: translate(-50%);
      z-index: -1;
      background: ${props => props.theme.colors.primary.main};
      border-radius: 10px;
      display: block;
      transition: top 300ms cubic-bezier(0.81, -0.52, 0.42, 2.5);
    }
  }

  .action-modal-icon {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.primary.contrast};
    padding: 0;
    border-radius: 50%;
    width: 2em;
    height: 2em;
    display: grid;
    place-content: center;
    transition: box-shadow 300ms cubic-bezier(0.81, -0.52, 0.42, 2.5);
    z-index: 1;
    box-shadow:
      0 0 0 0 ${props => props.theme.colors.primary.main}88,
      0 0 0 0 ${props => props.theme.colors.primary.main}66,
      0 0 0 0 ${props => props.theme.colors.primary.main}44,
      0 0 0 0 ${props => props.theme.colors.primary.main}22;
  }

  .close-modal-button {
    width: 1em;
    height: 1em;
    border-radius: 50%;
    cursor: pointer;
    background: ${props => props.theme.colors.background.main};
    position: absolute;
    left: 100%;
    bottom: 100%;
    font-size: ${props => props.theme.constants.typography.header4.fontSize};
    opacity: 0;
    transition: opacity 300ms ease;
    z-index: 1;
    transform: translate(-50%, 50%);
  }

  &.line-on-top {
    .action-modal-content {
      border-top: 5px solid ${props => props.theme.colors.primary.main};
    }
  }

  &:hover {
    .action-modal-icon {
      box-shadow:
        0 0 0 7px ${props => props.theme.colors.primary.main}88,
        0 0 0 14px ${props => props.theme.colors.primary.main}66,
        0 0 0 21px ${props => props.theme.colors.primary.main}44,
        0 0 0 28px ${props => props.theme.colors.primary.main}22;
    }

    .close-modal-button {
      opacity: 1;
    }

    &::before {
      top: 15px;
    }
  }
`;
