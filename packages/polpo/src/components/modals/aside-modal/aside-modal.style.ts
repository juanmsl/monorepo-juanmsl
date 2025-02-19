import styled from 'styled-components';

import { Modal } from '@polpo/ui';

export const AsideModalStyle = styled(Modal)`
  color: ${props => props.theme.colors.text.main};
  overflow: auto;
  height: 100%;

  .aside-modal-content {
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
    border-right: 4px solid ${props => props.theme.colors.primary.main};
    animation: slideIn-left 300ms ease;

    &.modal-close {
      animation: slideOut-left 300ms ease;
      transform: translateX(-100%);
    }

    .close-modal-button {
      top: 2em;
      left: 100%;
      transform: translate(calc(-50% + 2px));
    }
  }

  &.right {
    border-left: 4px solid ${props => props.theme.colors.primary.main};
    animation: slideIn-right 300ms ease;

    &.modal-close {
      animation: slideOut-right 300ms ease;
      transform: translateX(100%);
    }

    .close-modal-button {
      top: 2em;
      right: 100%;
      transform: translate(calc(50% - 2px));
    }
  }

  &.top {
    border-bottom: 4px solid ${props => props.theme.colors.primary.main};
    animation: slideIn-top 300ms ease;

    &.modal-close {
      animation: slideOut-top 300ms ease;
      transform: translateY(-100%);
    }

    .close-modal-button {
      bottom: 0;
      right: 2em;
      transform: translate(0, calc(50% - 2px));
    }
  }

  &.bottom {
    border-top: 4px solid ${props => props.theme.colors.primary.main};
    animation: slideIn-bottom 300ms ease;

    &.modal-close {
      animation: slideOut-bottom 300ms ease;
      transform: translateY(100%);
    }

    .close-modal-button {
      top: 0;
      right: 2em;
      transform: translate(0, calc(-50% + 2px));
    }
  }
`;
