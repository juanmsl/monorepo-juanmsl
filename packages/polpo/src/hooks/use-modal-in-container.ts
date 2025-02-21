import { RefObject, useCallback, useLayoutEffect, useRef } from 'react';

import { useClickOutside } from './use-click-outside';
import { useEventListener } from './use-event-listener';
import { useModalTransition } from './use-modal-transition';
import { useResizeObserver } from './use-resize-observer';

import {
  getModalPositionRelativeToContainer,
  getModalPositionRelativeToScreen,
  PositionContainer,
  PositionObject,
} from '@polpo/helpers';

const convertDOMRectToPosition = (rect: DOMRectReadOnly): PositionObject => ({
  x: rect.x,
  y: rect.y,
  w: rect.width,
  h: rect.height,
  top: rect.top,
  left: rect.left,
});

export type UseModalInContainerParams<
  Container extends HTMLElement = HTMLElement,
  Modal extends HTMLElement = Container,
> = {
  closeOnClickOutside?: boolean;
  transitionDuration?: number;
  windowOffset?: number;
  offset?: number;
  position?: `${PositionContainer}`;
  modalRef: RefObject<Modal>;
  containerRef?: RefObject<Container>;
  onClose?: () => void;
};

export const useModalInContainer = <
  Container extends HTMLElement = HTMLElement,
  Modal extends HTMLElement = Container,
>({
  closeOnClickOutside = true,
  offset = 20,
  windowOffset = 10,
  position = PositionContainer.BOTTOM,
  transitionDuration = 0,
  modalRef,
  containerRef,
  onClose,
}: UseModalInContainerParams<Container, Modal>) => {
  const containerTemporalRef = useRef<Container>(null);
  const modalState = useModalTransition(transitionDuration, onClose);

  const { isVisible, closeModal } = modalState;

  useClickOutside<Modal>(modalRef, () => {
    if (isVisible && closeOnClickOutside) {
      closeModal();
    }
  });

  const getPosition = useCallback(
    (modalRef: RefObject<Modal>, containerRef: RefObject<Container>) => {
      const modal = modalRef.current?.getClientRects()[0];
      const container = containerRef.current?.getClientRects()[0];

      if (!modal) {
        return;
      }

      const modalStyle: Record<string, string> = !container
        ? getModalPositionRelativeToScreen({ position: position as PositionContainer, windowOffset })
        : getModalPositionRelativeToContainer({
            c: convertDOMRectToPosition(container),
            m: convertDOMRectToPosition(modal),
            offset,
            windowOffset,
            position: position as PositionContainer,
          });

      Object.keys(modalStyle).forEach(key => {
        modalRef.current?.style.setProperty(key, modalStyle[key]);
      });
    },
    [position, windowOffset, offset],
  );

  const callback = useCallback(() => {
    if (isVisible) {
      getPosition(modalRef, containerRef ?? containerTemporalRef);
    }
  }, [getPosition, isVisible, containerRef, modalRef]);

  useLayoutEffect(callback, [callback]);

  useResizeObserver<Container>(containerRef ?? containerTemporalRef, callback);
  useResizeObserver<Modal>(modalRef, callback);
  useEventListener('resize', callback);
  useEventListener('scroll', callback, modalRef);

  return modalState;
};
