import { CSSProperties } from 'react';
import styled from 'styled-components';

type FlipCardStyleProps = {
  $cardZIndex: CSSProperties['zIndex'];
  $isFlipped: boolean;
  $flipSpeedFrontToBack: number;
  $flipSpeedBackToFront: number;
  $frontRotate: CSSProperties['transform'];
  $backRotate: CSSProperties['transform'];
};

export const FlipCardStyle = styled.section<FlipCardStyleProps>`
  perspective: 1000px;
  z-index: ${({ $cardZIndex }) => $cardZIndex};

  .flipper {
    height: 100%;
    position: relative;
    width: 100%;
    transform-style: preserve-3d;
  }

  .front,
  .back {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    height: 100%;
    left: 0;
    top: 0;
    transform-style: preserve-3d;
    width: 100%;
  }

  .front {
    position: ${({ $isFlipped }) => ($isFlipped ? 'absolute' : 'relative')};
    transform: ${({ $frontRotate }) => $frontRotate};
    transition: ${({ $flipSpeedBackToFront }) => $flipSpeedBackToFront}ms;
    z-index: 2;
  }

  .back {
    position: ${({ $isFlipped }) => ($isFlipped ? 'relative' : 'absolute')};
    transform: ${({ $backRotate }) => $backRotate};
    transition: ${({ $flipSpeedFrontToBack }) => $flipSpeedFrontToBack}ms;
  }
`;
