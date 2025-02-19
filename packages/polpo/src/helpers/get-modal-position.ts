import { getModalPositionRelativeToScreen } from './get-modal-position-relative-to-screen';

export enum PositionContainer {
  CENTER = 'center',
  TOP = 'top',
  TOP_LEFT = 'top left',
  TOP_RIGHT = 'top right',
  TOP_CENTER = 'top center',
  LEFT = 'left',
  LEFT_TOP = 'left top',
  LEFT_BOTTOM = 'left bottom',
  LEFT_CENTER = 'left center',
  RIGHT = 'right',
  RIGHT_TOP = 'right top',
  RIGHT_BOTTOM = 'right bottom',
  RIGHT_CENTER = 'right center',
  BOTTOM = 'bottom',
  BOTTOM_LEFT = 'bottom left',
  BOTTOM_RIGHT = 'bottom right',
  BOTTOM_CENTER = 'bottom center',
}

export enum ModalReference {
  CONTAINER = 'container',
  SCREEN = 'screen',
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
  position?: `${PositionContainer}`;
  modalReference?: `${ModalReference}`;
};

/*
 * @description Calculates the position of the modal relative to the container
 *
 * @param c - The container's position object
 * @param m - The modal's position object
 * @param offset - The offset between the container and the modal
 * @param windowOffset - The offset between the window and the container
 * @param position - The position of the modal
 *
 * -----------------------------------------------------------------------------
 * @returns The position of the modal relative to the container
 */
export const getModalPosition = ({
  c,
  m,
  offset,
  windowOffset,
  position,
  modalReference,
}: GetModalPositionParams): Record<string, string> => {
  // Default bottom
  let top = c.y + c.h + offset;
  let left = c.x - (m.w - c.w) * (50 / 100);

  if (modalReference === ModalReference.SCREEN) {
    return getModalPositionRelativeToScreen({ position, windowOffset });
  }

  switch (position) {
    case PositionContainer.CENTER:
      return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      };

    case PositionContainer.TOP:
    case PositionContainer.TOP_CENTER:
      top = c.y - m.h - offset;
      left = c.x - (m.w - c.w) * (50 / 100);

      break;
    case PositionContainer.TOP_LEFT:
      top = c.y - m.h - offset;
      left = c.x - (m.w - c.w) * (100 / 100);

      break;

    case PositionContainer.TOP_RIGHT:
      top = c.y - m.h - offset;
      left = c.x - (m.w - c.w) * (0 / 100);

      break;

    case PositionContainer.BOTTOM:
    case PositionContainer.BOTTOM_CENTER:
      top = c.y + c.h + offset;
      left = c.x - (m.w - c.w) * (50 / 100);

      break;

    case PositionContainer.BOTTOM_LEFT:
      top = c.y + c.h + offset;
      left = c.x - (m.w - c.w) * (100 / 100);

      break;

    case PositionContainer.BOTTOM_RIGHT:
      top = c.y + c.h + offset;
      left = c.x - (m.w - c.w) * (0 / 100);

      break;

    case PositionContainer.LEFT:
    case PositionContainer.LEFT_CENTER:
      top = c.y - (m.h - c.h) * (50 / 100);
      left = c.x - m.w - offset;

      break;

    case PositionContainer.LEFT_TOP:
      top = c.y - (m.h - c.h) * (100 / 100);
      left = c.x - m.w - offset;

      break;

    case PositionContainer.LEFT_BOTTOM:
      top = c.y - (m.h - c.h) * (0 / 100);
      left = c.x - m.w - offset;

      break;

    case PositionContainer.RIGHT:
    case PositionContainer.RIGHT_CENTER:
      top = c.y - (m.h - c.h) * (50 / 100);
      left = c.x + c.w + offset;

      break;

    case PositionContainer.RIGHT_TOP:
      top = c.y - (m.h - c.h) * (100 / 100);
      left = c.x + c.w + offset;

      break;

    case PositionContainer.RIGHT_BOTTOM:
      top = c.y - (m.h - c.h) * (0 / 100);
      left = c.x + c.w + offset;

      break;
  }

  left =
    left + m.w + windowOffset > window.innerWidth ? c.left - (left + m.w - window.innerWidth) - windowOffset : left;
  top = top + m.h + windowOffset > window.innerHeight ? c.top - (top + m.h - window.innerHeight) - windowOffset : top;

  return {
    left: `${left}px`,
    top: `${top}px`,
    'max-width': `${window.innerWidth - offset * 2}px`,
  };
};
