import React from 'react';
import { Animate } from 'react-move';

type ProgressAnimation = {
  repeat?: boolean;
  duration: number;
  children: (value: number) => React.ReactNode;
  valueStart?: number;
  valueEnd: number;
  easingFunction?: (time: number) => number;
};

export const ProgressAnimation = ({
  repeat,
  duration,
  children,
  valueStart = 0,
  valueEnd,
  easingFunction
}: ProgressAnimation) => {

  const [isAnimated, setIsAnimated] = React.useState( false );
  const [interval, setInterval] = React.useState( undefined );

  const toggleIsAnimated = () => setIsAnimated( !isAnimated );

  React.useEffect( () => {
    if ( repeat ) {
      let localInterval = window.setInterval(
        toggleIsAnimated,
        duration,
      );
      setInterval(localInterval);
    } else {
      toggleIsAnimated();
    }

    return () => {
      if ( interval ) {
        window.clearInterval( interval );
      }
    };

  }, [] );

  return (
    <Animate
      start={ () => ({
        value: valueStart,
      }) }
      update={ () => ({
        value: [
          isAnimated ? valueEnd : valueStart,
        ],
        timing: {
          duration: duration,
          ease: easingFunction,
        },
      }) }
    >
      { ({ value }) => children( value ) as React.ReactElement }
    </Animate>
  );
};
