import {HoverCardStyle} from "./hover-card.style";
import {MouseEvent, MouseEventHandler, useCallback, useRef} from "react";
import {useEventListener} from "@juanmsl/hooks";

type HoverCardProps = {
  children: React.ReactNode;
  threshold?: number;
  translationZ?: string;
};

export const HoverCard = ({
  children,
  threshold = 5,
  translationZ = '25px',
}: HoverCardProps) => {
  const refCard = useRef<HTMLElement>(null);
  const refLayer1 = useRef<HTMLElement>(null);

  const mouseMoveCallback = useCallback((e: MouseEvent) => {
    const card = refCard.current;
    const layer1 = refLayer1.current;

    if (!card || !layer1) return;

    const {clientX, clientY, currentTarget} = e;
    const {clientWidth, clientHeight, } = currentTarget;
    const { top, left } = refCard?.current?.getBoundingClientRect();

    const horizontal = (clientX - left) / clientWidth;
    const vertical = (clientY - top) / clientHeight;

    const relativePercentageX = horizontal * 2 - 1;
    const relativePercentageY = vertical * 2 - 1;

    const rotateY = (relativePercentageY * threshold).toFixed(2);
    const rotateX = (relativePercentageX * threshold).toFixed(2);

    layer1.style.transform = `perspective(${clientWidth}px) rotateX(${-rotateY}deg) rotateY(${rotateX}deg)`;
  }, []);

  const mouseLeaveCallback = useCallback<MouseEventHandler>((e) => {
    const layer1 = refLayer1.current;

    if (!layer1) return;

    refLayer1.current.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0) rotateY(0)`;
  }, []);

  useEventListener('mousemove', mouseMoveCallback as unknown as EventListener, refCard);
  useEventListener('mouseleave', mouseLeaveCallback as unknown as EventListener, refCard);

  return (
    <HoverCardStyle ref={refCard} $translationZ={translationZ}>
      <span className="card-hover-layer-1" ref={refLayer1} >
        <span className="card-hover-layer-2" >
          {children}
        </span>
      </span>
    </HoverCardStyle>
  );
};
