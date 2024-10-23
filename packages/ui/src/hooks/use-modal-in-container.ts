import React, { RefObject, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import { useEventListener } from './use-event-listener';
import { useObserver } from './use-observer';
import { useOnClickOutsideRef } from './use-on-click-outside-ref';

import { getModalPosition, GetModalPositionParams, PositionObject } from '@juanmsl/helpers';

const convertDOMRectToPosition = (rect: DOMRectReadOnly): PositionObject => ({
  x: rect.x,
  y: rect.y,
  w: rect.width,
  h: rect.height,
  top: rect.top,
  left: rect.left,
});

type useModalInContainerParams = Partial<
  Pick<GetModalPositionParams, 'position' | 'distancePercentage' | 'offset' | 'windowOffset'>
> & {
  closeOnClickOutside?: boolean;
};

export const useModalInContainer = <Container extends HTMLElement, Modal extends HTMLElement = Container>({
  closeOnClickOutside = true,
  offset = 5,
  windowOffset = 10,
  position,
  distancePercentage = 50,
}: useModalInContainerParams = {}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalStyle, setModalStyle] = useState<React.CSSProperties>({});

  const modalRef = useRef<Modal>(null);
  const containerRef = useRef<Container>(null);

  useEffect(() => {
    if (closeOnClickOutside) {
      document.documentElement.style.overflow = isVisible ? 'hidden' : 'auto';
    }
  }, [isVisible, closeOnClickOutside]);

  useOnClickOutsideRef<Modal>(modalRef, () => {
    if (isVisible && closeOnClickOutside) {
      setIsVisible(false);
    }
  });

  const getPosition = useCallback(
    (modalRef: RefObject<HTMLElement>) => {
      const modal = modalRef.current?.getClientRects()[0];
      const container = containerRef.current?.getClientRects()[0];

      if (!container || !modal) {
        setModalStyle({});

        return;
      }

      const nextStyles = getModalPosition({
        c: convertDOMRectToPosition(container),
        m: convertDOMRectToPosition(modal),
        distancePercentage,
        windowOffset,
        position,
        offset,
      });

      setModalStyle(nextStyles);
    },
    [distancePercentage, windowOffset, position, offset],
  );

  const callback = useCallback(() => {
    if (isVisible) {
      getPosition(modalRef);
    }
  }, [getPosition, isVisible]);

  useLayoutEffect(callback, [callback]);

  useObserver<Container>(containerRef, callback);
  useObserver<Modal>(modalRef, callback);
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
