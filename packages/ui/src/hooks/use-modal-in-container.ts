import { useEventListener } from './use-event-listener';
import { useOnClickOutsideRef } from './use-on-click-outside-ref';
import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';

export const useModalInContainer = <Container extends HTMLElement, Modal extends HTMLElement = Container>(
  offset = 5,
) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalStyle, setModalStyle] = useState<React.CSSProperties>({});

  const modalRef = useRef<Modal>(null);
  const containerRef = useOnClickOutsideRef(() => {
    if (isVisible) {
      setIsVisible(false);
    }
  });

  const getCalendarPosition = useCallback(
    (modalRef: RefObject<HTMLElement>) => {
      const modal = modalRef.current?.getClientRects()[0];
      const container = containerRef.current?.getClientRects()[0];

      const nextStyles =
        modal && container
          ? {
              left:
                container.x + modal.width + offset > window.innerWidth
                  ? container.left - (container.x + modal.width - window.innerWidth) - offset
                  : container.left,
              top:
                container.y + modal.height + offset > window.innerHeight
                  ? container.top - (container.y + modal.height - window.innerHeight) - offset
                  : container.top,
            }
          : {};

      setModalStyle(nextStyles);
    },
    [containerRef, offset],
  );

  const callback = useCallback(() => {
    if (isVisible) {
      getCalendarPosition(modalRef);
    }
  }, [getCalendarPosition, isVisible]);

  useEffect(callback, [callback]);

  useEventListener('resize', callback);

  return {
    isVisible,
    setIsVisible,
    modalStyle,
    containerRef,
    modalRef,
  };
};
