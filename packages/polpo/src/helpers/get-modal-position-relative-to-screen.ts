import { PositionContainer } from './get-modal-position';

export type GetModalPositionRelativeToScreenParams = {
  position: PositionContainer;
  windowOffset: number;
};

export const getModalPositionRelativeToScreen = ({
  position,
  windowOffset,
}: GetModalPositionRelativeToScreenParams): Record<string, string> => {
  switch (position) {
    case PositionContainer.CENTER:
      return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        'max-width': `calc(100dvw - ${windowOffset * 2}px)`,
        'max-height': `calc(100dvh - ${windowOffset * 2}px)`,
      };

    case PositionContainer.TOP:
    case PositionContainer.TOP_CENTER:
      return {
        top: `${windowOffset}px`,
        left: '50%',
        transform: 'translateX(-50%)',
        'max-width': `calc(100vw - ${windowOffset * 2}px)`,
        'max-height': `calc(100dvh - ${windowOffset * 2}px)`,
      };

    case PositionContainer.TOP_LEFT:
    case PositionContainer.LEFT_TOP:
      return {
        top: `${windowOffset}px`,
        left: `${windowOffset}px`,
        'max-width': `calc(100dvw - ${windowOffset * 2}px)`,
        'max-height': `calc(100dvh - ${windowOffset * 2}px)`,
      };

    case PositionContainer.TOP_RIGHT:
    case PositionContainer.RIGHT_TOP:
      return {
        top: `${windowOffset}px`,
        right: `${windowOffset}px`,
        'max-width': `calc(100dvw - ${windowOffset * 2}px)`,
        'max-height': `calc(100dvh - ${windowOffset * 2}px)`,
      };

    case PositionContainer.BOTTOM:
    case PositionContainer.BOTTOM_CENTER:
      return {
        bottom: `${windowOffset}px`,
        left: '50%',
        transform: 'translateX(-50%)',
        'max-width': `calc(100dvw - ${windowOffset * 2}px)`,
        'max-height': `calc(100dvh - ${windowOffset * 2}px)`,
      };

    case PositionContainer.LEFT_BOTTOM:
    case PositionContainer.BOTTOM_LEFT:
      return {
        bottom: `${windowOffset}px`,
        left: `${windowOffset}px`,
        'max-width': `calc(100dvw - ${windowOffset * 2}px)`,
        'max-height': `calc(100dvh - ${windowOffset * 2}px)`,
      };

    case PositionContainer.RIGHT_BOTTOM:
    case PositionContainer.BOTTOM_RIGHT:
      return {
        bottom: `${windowOffset}px`,
        right: `${windowOffset}px`,
        'max-width': `calc(100dvw - ${windowOffset * 2}px)`,
        'max-height': `calc(100dvh - ${windowOffset * 2}px)`,
      };

    case PositionContainer.LEFT:
    case PositionContainer.LEFT_CENTER:
      return {
        top: '50%',
        left: `${windowOffset}px`,
        transform: 'translateY(-50%)',
        'max-width': `calc(100dvw - ${windowOffset * 2}px)`,
        'max-height': `calc(100dvh - ${windowOffset * 2}px)`,
      };

    case PositionContainer.RIGHT:
    case PositionContainer.RIGHT_CENTER:
      return {
        top: '50%',
        right: `${windowOffset}px`,
        transform: 'translateY(-50%)',
        'max-width': `calc(100dvw - ${windowOffset * 2}px)`,
        'max-height': `calc(100dvh - ${windowOffset * 2}px)`,
      };
  }

  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    'max-width': `calc(100dvw - ${windowOffset * 2}px)`,
    'max-height': `calc(100dvh - ${windowOffset * 2}px)`,
  };
};
