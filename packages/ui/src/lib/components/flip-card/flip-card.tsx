import { CSSProperties, useEffect, useMemo, useState } from 'react';

import { FlipCardStyle } from './flip-card.style';

type FlipCardProps = {
  cardZIndex?: CSSProperties['zIndex'];
  isFlipped?: boolean;
  flipSpeedBackToFront?: number;
  flipSpeedFrontToBack?: number;
  infinite?: boolean;
  flipDirection?: 'horizontal' | 'vertical';
  children: [React.ReactNode, React.ReactNode];
};

export const FlipCard = ({
  cardZIndex = 'auto',
  flipDirection = 'vertical',
  flipSpeedFrontToBack = 500,
  flipSpeedBackToFront = 500,
  infinite = false,
  isFlipped = false,
  children,
}: FlipCardProps): React.ReactElement => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    setRotation(c => c + 180);
  }, [isFlipped]);

  const getComponent = (key: 0 | 1): React.ReactNode => {
    if (children.length !== 2) {
      throw new Error('Component FlipCard requires 2 children');
    }

    return children[key] as React.ReactNode;
  };

  const frontRotate = useMemo(() => {
    const deg = infinite ? rotation : isFlipped ? 180 : 0;

    return `rotate${flipDirection === 'horizontal' ? 'Y' : 'X'}(${deg}deg)`;
  }, [flipDirection, infinite, isFlipped, rotation]);

  const backRotate = useMemo(() => {
    const deg = infinite ? rotation + 180 : isFlipped ? 0 : -180;

    return `rotate${flipDirection === 'horizontal' ? 'Y' : 'X'}(${deg}deg)`;
  }, [flipDirection, infinite, isFlipped, rotation]);

  return (
    <FlipCardStyle
      $cardZIndex={cardZIndex}
      $flipSpeedBackToFront={flipSpeedBackToFront}
      $flipSpeedFrontToBack={flipSpeedFrontToBack}
      $isFlipped={isFlipped}
      $frontRotate={frontRotate}
      $backRotate={backRotate}
    >
      <section className='flipper'>
        <section className='front'>{getComponent(0)}</section>

        <section className='back'>{getComponent(1)}</section>
      </section>
    </FlipCardStyle>
  );
};
