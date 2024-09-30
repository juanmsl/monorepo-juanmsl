import styled from 'styled-components';

export const TooltipStyle = styled.span`
  background: ${props => props.theme.colors.background.main};
  color: ${props => props.theme.colors.text.main};
  font-size: ${props => props.theme.constants.typography.small.fontSize};
  line-height: 1em;
  border-radius: 5px;
  position: fixed;
  padding: 0.5em 1em;
  z-index: 1000;
  display: block;
  animation: fadeIn 250ms ease-out;
  border: 1px solid;

  &::before {
    content: '';
    display: block;
    background: ${props => props.theme.colors.background.main};
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
    &::before {
      top: 50%;
      left: 100%;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  &.right {
    &::before {
      top: 50%;
      right: 100%;
      transform: translate(50%, -50%) rotate(135deg);
    }
  }

  &.top {
    &::before {
      top: 100%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }

  &.bottom {
    &::before {
      left: 50%;
      bottom: 100%;
      transform: translate(-50%, 50%) rotate(-135deg);
    }
  }
`;
