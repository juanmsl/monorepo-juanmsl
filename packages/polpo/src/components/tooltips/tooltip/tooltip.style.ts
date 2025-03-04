import styled from 'styled-components';

import { Modal } from '../../modals';

export const TooltipStyle = styled(Modal)`
  color: ${props => props.theme.colors.text.main};
  font-size: ${props => props.theme.constants.typography.small.fontSize};
  line-height: 1em;
  border-radius: 5px;
  padding: 0.5em 1em;
  display: block;
  border: 1px solid;
  pointer-events: none;

  &::before {
    content: '';
    display: block;
    background: ${props => props.theme.colors.background.paper};
    position: absolute;
    z-index: 1;
    width: 10px;
    height: 10px;
    border-left: 1px solid transparent;
    border-top: 1px solid transparent;
    border-right: 1px solid ${props => props.theme.colors.text.main};
    border-bottom: 1px solid ${props => props.theme.colors.text.main};
    border-radius: 0 0 3px 0;
  }

  &.left {
    animation: fadeInRight 250ms ease-out;

    &.close-animation {
      animation: fadeOutLeft 250ms ease-out;
      transform: translateX(-10px);
      opacity: 0;
    }

    &::before {
      top: 50%;
      left: 100%;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  &.right {
    animation: fadeInLeft 250ms ease-out;

    &.close-animation {
      animation: fadeOutRight 250ms ease-out;
      transform: translateX(10px);
      opacity: 0;
    }

    &::before {
      top: 50%;
      right: 100%;
      transform: translate(50%, -50%) rotate(135deg);
    }
  }

  &.top {
    animation: fadeInDown 250ms ease-out;

    &.close-animation {
      animation: fadeOutUp 250ms ease-out;
      transform: translateY(-10px);
      opacity: 0;
    }

    &::before {
      top: 100%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }

  &.bottom {
    animation: fadeInUp 250ms ease-out;

    &.close-animation {
      animation: fadeOutDown 250ms ease-out;
      transform: translateY(10px);
      opacity: 0;
    }

    &::before {
      left: 50%;
      bottom: 100%;
      transform: translate(-50%, 50%) rotate(-135deg);
    }
  }
`;
