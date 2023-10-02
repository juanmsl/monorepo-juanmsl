import styled from "styled-components";

type HoverCardStyleProps = {
  $translationZ?: string;
};

export const HoverCardStyle = styled.span<HoverCardStyleProps>`
  display: inline-block;

  .card-hover-layer-1 {
    transition: all 100ms ease;
    display: inline-block;
    transform-style: preserve-3d;
    will-change: transform;
  }

  .card-hover-layer-2 {
    transition: all 300ms ease;
    display: inline-block;
    transform-style: preserve-3d;
    will-change: transform;
  }

  &:hover .card-hover-layer-2 {
    transform: translateZ(${props => props.$translationZ ?? '25px'});
  }
`;
