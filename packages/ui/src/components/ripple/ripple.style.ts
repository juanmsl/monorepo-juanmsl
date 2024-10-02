import styled from 'styled-components';

export const RippleStyle = styled.span`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  border-radius: inherit;
  z-index: 1;

  .ripple-effect {
    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 0;
    height: 0;
    pointer-events: none;
    animation: ripple-effect infinite;
    opacity: 0.4;
  }

  @keyframes ripple-effect {
    to {
      width: 300px;
      height: 300px;
      opacity: 0;
      filter: blur(5px);
    }
  }
`;
