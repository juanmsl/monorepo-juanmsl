import { useEffect, useLayoutEffect, useRef } from 'react';
import { RefObject } from 'react';

function useEventListener<EventName extends keyof MediaQueryListEventMap>(
  eventName: EventName,
  callback: (event: MediaQueryListEventMap[EventName]) => void,
  element: RefObject<MediaQueryList>,
  options?: boolean | AddEventListenerOptions,
): void;

function useEventListener<EventName extends keyof WindowEventMap>(
  eventName: EventName,
  callback: (event: WindowEventMap[EventName]) => void,
  element?: undefined,
  options?: boolean | AddEventListenerOptions,
): void;

function useEventListener<EventName extends keyof HTMLElementEventMap, ElementRef extends HTMLElement = HTMLDivElement>(
  eventName: EventName,
  callback: (event: HTMLElementEventMap[EventName]) => void,
  element: RefObject<ElementRef>,
  options?: boolean | AddEventListenerOptions,
): void;

function useEventListener<EventName extends keyof DocumentEventMap>(
  eventName: EventName,
  callback: (event: DocumentEventMap[EventName]) => void,
  element: RefObject<Document>,
  options?: boolean | AddEventListenerOptions,
): void;

function useEventListener<
  WindowEventName extends keyof WindowEventMap,
  DocumentEventName extends keyof DocumentEventMap,
  ElementEventName extends keyof HTMLElementEventMap,
  MediaQueryEventName extends keyof MediaQueryListEventMap,
  ElementRef extends HTMLElement | MediaQueryList | Document | Window | void = void,
>(
  eventName: WindowEventName | DocumentEventName | ElementEventName | MediaQueryEventName,
  callback: (
    event:
      | WindowEventMap[WindowEventName]
      | HTMLElementEventMap[ElementEventName]
      | MediaQueryListEventMap[MediaQueryEventName]
      | DocumentEventMap[DocumentEventName]
      | Event,
  ) => void,
  element?: RefObject<ElementRef>,
  options?: boolean | AddEventListenerOptions,
) {
  const callbackRef = useRef<EventListener>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useLayoutEffect(() => {
    const targetElement = element?.current ?? window;

    if (!(targetElement && targetElement.addEventListener)) return;

    const listener: typeof callback = (event) => callbackRef.current(event);

    targetElement.addEventListener(eventName, listener, options);

    return () => {
      targetElement.removeEventListener(eventName, listener, options);
    };
  }, [eventName, element, options]);
}

export { useEventListener };
