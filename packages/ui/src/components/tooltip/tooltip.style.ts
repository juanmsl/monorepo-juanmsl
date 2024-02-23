import styled from 'styled-components';

type TooltipStyleProps = {
  offset: number;
};

export const TooltipStyle = styled.span<TooltipStyleProps>`
  position: relative;

  .tooltip-container {
    background: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.background};
    font-size: ${props => props.theme.constants.typography.small.fontSize};
    line-height: 1em;
    border-radius: 5px;
    position: absolute;
    transition: all 300ms ease;
    padding: 5px 10px;
    z-index: 1000;
    display: none;
    animation: fadeIn 250ms ease-out;
    box-shadow: 0 0 10px ${props => props.theme.colors.text};

    .tooltip-content {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &::before {
      content: '';
      display: block;
      background: ${props => props.theme.colors.text};
      position: absolute;
      z-index: 1000;
      transition: all 300ms ease;
    }

    &.left,
    &.right {
      top: 50%;
      transform: translateY(-50%);

      &::before {
        width: 6px;
        height: 12px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    &.left {
      right: 100%;
      margin-right: ${props => props.offset + 6}px;

      &::before {
        left: 100%;
        clip-path: polygon(0 0, 100% 50%, 0 100%);
      }
    }

    &.right {
      left: 100%;
      margin-left: ${props => props.offset + 6}px;

      &::before {
        right: 100%;
        clip-path: polygon(100% 0, 0 50%, 100% 100%);
      }
    }

    &.top,
    &.bottom {
      left: 50%;
      transform: translateX(-50%);

      &::before {
        width: 12px;
        height: 6px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &.top {
      bottom: 100%;
      margin-bottom: ${props => props.offset + 6}px;

      &::before {
        top: 100%;
        clip-path: polygon(0 0, 50% 100%, 100% 0);
      }
    }

    &.bottom {
      top: 100%;
      margin-top: ${props => props.offset + 6}px;

      &::before {
        bottom: 100%;
        clip-path: polygon(0 100%, 50% 0, 100% 100%);
      }
    }
  }

  &:hover {
    .tooltip-container {
      display: block;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
