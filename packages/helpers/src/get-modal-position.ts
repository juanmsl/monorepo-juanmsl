export enum POSITION {
  top = "top",
  left = "left",
  right = "right",
  bottom = "bottom",
}

export type PositionObject = {
  x: number;
  y: number;
  top: number;
  left: number;
  w: number;
  h: number;
};

export type GetModalPositionParams = {
  c: PositionObject;
  m: PositionObject;
  offset: number;
  windowOffset: number;
  position?: `${POSITION}`;
  distancePercentage?: number;
};

export const getModalPosition = ({
  c,
  m,
  offset,
  windowOffset,
  position,
  distancePercentage = 50,
}: GetModalPositionParams) => {
  // Default bottom
  let top = c.y + c.h + offset;
  let left = c.x - (m.w - c.w);

  switch (position) {
    case POSITION.top:
      top = c.y - m.h - offset;
      left = c.x - (m.w - c.w) * (distancePercentage / 100);
      break;
    case POSITION.bottom:
      top = c.y + c.h + offset;
      left = c.x - (m.w - c.w) * (distancePercentage / 100);
      break;
    case POSITION.left:
      top = c.y - (m.h - c.h) * (distancePercentage / 100);
      left = c.x - m.w - offset;
      break;
    case POSITION.right:
      top = c.y - (m.h - c.h) * (distancePercentage / 100);
      left = c.x + c.w + offset;
      break;
  }

  return {
    left:
      left + m.w + windowOffset > window.innerWidth
        ? c.left - (left + m.w - window.innerWidth) - windowOffset
        : left,
    top:
      top + m.h + windowOffset > window.innerHeight
        ? c.top - (top + m.h - window.innerHeight) - windowOffset
        : top,
  };
};
