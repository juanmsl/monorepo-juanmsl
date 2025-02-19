import styled from 'styled-components';

export const CursorOverlayStyle = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: none;
  pointer-events: none;
`;

export const CursorStyle = styled.span`
  position: fixed;
  border-radius: 50%;
  z-index: 99999999;
  pointer-events: none;
  transform: translateZ(0);

  @media (any-pointer: coarse) {
    display: none;
  }

  &.outer-circle {
    margin-left: -15px;
    margin-top: -15px;
    width: 30px;
    height: 30px;
    border: 2px solid ${props => props.theme.colors.primary.main};
    box-sizing: border-box;
    z-index: 99999999;
    opacity: 0.5;
    transition:
      all 0.08s ease-out,
      width 0.3s ease-in-out,
      height 0.3s ease-in-out,
      margin 0.3s ease-in-out,
      opacity 0.3s ease-in-out;

    &.cursor-hover {
      margin-left: -40px;
      margin-top: -40px;
      width: 80px;
      height: 80px;
      background-color: ${props => props.theme.colors.primary.main};
      opacity: 0.3;
    }

    &.cursor-text {
      margin-left: -2px;
      margin-top: -40px;
      width: 4px;
      height: 80px;
      background-color: ${props => props.theme.colors.primary.main};
      opacity: 0.3;
    }
  }

  &.inner-circle {
    margin-left: -3px;
    margin-top: -3px;
    width: 6px;
    height: 6px;
    z-index: 99999999;
    background-color: ${props => props.theme.colors.primary.main};
    transition: opacity 0.3s ease-in-out;
    opacity: 1;

    &.cursor-hover {
      opacity: 0;
    }
  }
`;
