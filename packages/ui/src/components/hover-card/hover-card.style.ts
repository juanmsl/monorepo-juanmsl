import styled from 'styled-components';

export const HoverCardStyle = styled.span`
  display: inline-block;
  transform-style: preserve-3d;
  will-change: transform;
  transition: all 300ms ease;

  .card-hover-layer {
    transition: all 100ms ease;
    transform-style: preserve-3d;
    will-change: transform;
    width: 100%;
    height: 100%;
    display: grid;
  }
`;
