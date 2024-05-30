import React, { RefObject, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { useEventListener } from './use-event-listener';
import { useOnClickOutsideRef } from './use-on-click-outside-ref';

type PositionObject = {
  percentage: number;
  pixels: number;
};

type useModalInContainerParams = {
  offset?: number;
  position?: {
    x: number | PositionObject;
    y: number | PositionObject;
  };
};

const getPositionObject = (param: number | PositionObject): PositionObject =>
  typeof param === 'number'
    ? {
        percentage: param,
        pixels: 0,
      }
    : param;

export const useModalInContainer = <Container extends HTMLElement, Modal extends HTMLElement = Container>({
  offset = 5,
  position = {
    x: {
      percentage: 0,
      pixels: 0,
    },
    y: {
      percentage: 0,
      pixels: 0,
    },
  },
}: useModalInContainerParams = {}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalStyle, setModalStyle] = useState<React.CSSProperties>({});

  const modalRef = useRef<Modal>(null);
  const containerRef = useRef<Container>(null);

  useEffect(() => {
    document.documentElement.style.overflow = isVisible ? 'hidden' : 'auto';
  }, [isVisible]);

  useOnClickOutsideRef<Modal>(modalRef, () => {
    if (isVisible) {
      setIsVisible(false);
    }
  });

  const positionX = useMemo(() => getPositionObject(position.x), [position.x]);

  const positionY = useMemo(() => getPositionObject(position.y), [position.y]);

  const getPosition = useCallback(
    (modalRef: RefObject<HTMLElement>) => {
      const modal = modalRef.current?.getClientRects()[0];
      const container = containerRef.current?.getClientRects()[0];

      if (!container || !modal) {
        setModalStyle({});

        return;
      }

      const { x, y, width, height } = container;

      const leftPosition = Math.round(x + width * (positionX.percentage / 100) + positionX.pixels);
      const topPosition = Math.round(y + height * (positionY.percentage / 100) + positionY.pixels);

      const nextStyles = {
        left:
          leftPosition + modal.width + offset > window.innerWidth
            ? container.left - (leftPosition + modal.width - window.innerWidth) - offset
            : leftPosition,
        top:
          topPosition + modal.height + offset > window.innerHeight
            ? container.top - (topPosition + modal.height - window.innerHeight) - offset
            : topPosition,
      };

      setModalStyle(nextStyles);
    },
    [offset, positionX.percentage, positionX.pixels, positionY.percentage, positionY.pixels],
  );

  const callback = useCallback(() => {
    if (isVisible) {
      getPosition(modalRef);
    }
  }, [getPosition, isVisible]);

  useLayoutEffect(callback, [callback]);

  useEventListener('resize', callback);
  useEventListener('scroll', callback, modalRef);

  return {
    isVisible,
    setIsVisible,
    modalStyle,
    containerRef,
    modalRef,
  };
};
