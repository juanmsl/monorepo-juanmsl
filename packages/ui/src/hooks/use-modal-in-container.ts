import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';

import { useEventListener } from './use-event-listener';
import { useOnClickOutsideRef } from './use-on-click-outside-ref';

type useModalInContainerParams = {
  offset?: number;
  position?: {
    x: number;
    y: number;
  };
};

export const useModalInContainer = <Container extends HTMLElement, Modal extends HTMLElement = Container>({
  offset = 5,
  position = { x: 0, y: 0 },
}: useModalInContainerParams = {}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalStyle, setModalStyle] = useState<React.CSSProperties>({});

  const modalRef = useRef<Modal>(null);
  const containerRef = useRef<Container>(null);

  useOnClickOutsideRef<Modal>(modalRef, () => {
    if (isVisible) {
      setIsVisible(false);
    }
  });

  const getPosition = useCallback(
    (modalRef: RefObject<HTMLElement>) => {
      const modal = modalRef.current?.getClientRects()[0];
      const container = containerRef.current?.getClientRects()[0];
      const leftPosition = (container?.x ?? 0) + (container?.width ?? 0) * (position.x / 100);
      const topPosition = (container?.y ?? 0) + (container?.height ?? 0) * (position.y / 100);

      const nextStyles =
        modal && container
          ? {
              left:
                leftPosition + modal.width + offset > window.innerWidth
                  ? container.left - (leftPosition + modal.width - window.innerWidth) - offset
                  : leftPosition,
              top:
                topPosition + modal.height + offset > window.innerHeight
                  ? container.top - (topPosition + modal.height - window.innerHeight) - offset
                  : topPosition,
            }
          : {};

      setModalStyle(nextStyles);
    },
    [offset, position.x, position.y],
  );

  const callback = useCallback(() => {
    if (isVisible) {
      getPosition(modalRef);
    }
  }, [getPosition, isVisible]);

  useEffect(callback, [callback]);

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
