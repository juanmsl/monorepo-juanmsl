import { RefObject, useCallback, useLayoutEffect, useRef } from 'react';

import { useClickOutside } from './use-click-outside';
import { useEventListener } from './use-event-listener';
import { useModalTransition } from './use-modal-transition';
import { useResizeObserver } from './use-resize-observer';

import {
  getModalPosition,
  GetModalPositionParams,
  ModalReference,
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

export type UseModalInContainerParams = Partial<Omit<GetModalPositionParams, 'c' | 'm'>> & {
  closeOnClickOutside?: boolean;
  transitionDuration?: number;
};

export const useModalInContainer = <Container extends HTMLElement, Modal extends HTMLElement = Container>({
  closeOnClickOutside = true,
  offset = 20,
  windowOffset = 10,
  position = PositionContainer.BOTTOM,
  modalReference = ModalReference.CONTAINER,
  transitionDuration = 0,
}: UseModalInContainerParams = {}) => {
  const modalState = useModalTransition(transitionDuration);

  const { isVisible, closeModal } = modalState;

  const modalRef = useRef<Modal>(null);
  const containerRef = useRef<Container>(null);

  useClickOutside<Modal>(modalRef, () => {
    if (isVisible && closeOnClickOutside) {
      closeModal();
    }
  });

  const getPosition = useCallback(
    (modalRef: RefObject<HTMLElement>) => {
      const modal = modalRef.current?.getClientRects()[0];
      const container = containerRef.current?.getClientRects()[0];

      if (!container || !modal) {
        return;
      }

      const modalStyle = getModalPosition({
        c: convertDOMRectToPosition(container),
        m: convertDOMRectToPosition(modal),
        modalReference,
        windowOffset,
        position,
        offset,
      });

      Object.keys(modalStyle).forEach(key => {
        modalRef.current?.style.setProperty(key, modalStyle[key]);
      });
    },
    [modalReference, windowOffset, position, offset],
  );

  const callback = useCallback(() => {
    if (isVisible) {
      getPosition(modalRef);
    }
  }, [getPosition, isVisible]);

  useLayoutEffect(callback, [callback]);

  useResizeObserver<Container>(containerRef, callback);
  useResizeObserver<Modal>(modalRef, callback);
  useEventListener('resize', callback);
  useEventListener('scroll', callback, modalRef);

  return {
    ...modalState,
    containerRef,
    modalRef,
  };
};
