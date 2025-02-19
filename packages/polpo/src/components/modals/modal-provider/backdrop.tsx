import React, { useMemo } from 'react';
import { useTheme } from 'styled-components';

import { BackdropStyle } from './modal.style';

import { ModalState, useClassNames } from '@polpo/hooks';

export enum ModalBackdrop {
  OPAQUE = 'opaque',
  TRANSPARENT = 'transparent',
  BLUR = 'blur',
  NONE = 'none',
}

export type BackdropProps = {
  opacity?: number;
  backdrop?: `${ModalBackdrop}`;
  zIndex?: React.CSSProperties['zIndex'];
  backdropOnClick?: () => void;
  modalState?: ModalState;
};

export const Backdrop = ({
  opacity = 0.6,
  backdrop = ModalBackdrop.BLUR,
  zIndex,
  backdropOnClick,
  modalState,
}: BackdropProps) => {
  const theme = useTheme();
  const backdropClassName = useClassNames({
    'backdrop-close': modalState === ModalState.CLOSING || modalState === ModalState.CLOSED,
  });

  const backgroundStyles = useMemo(() => {
    const backdropStyles = {
      [ModalBackdrop.OPAQUE]: {
        background: `${theme.colors.background.paper}${(opacity * 255)?.toString(16)}`,
      },
      [ModalBackdrop.TRANSPARENT]: {
        background: 'transparent',
      },
      [ModalBackdrop.BLUR]: {
        background: `${theme.colors.background.paper}${(opacity * 255)?.toString(16)}`,
        backdropFilter: 'blur(5px)',
      },
      [ModalBackdrop.NONE]: {
        display: 'none',
      },
    };

    return backdropStyles[backdrop] ?? {};
  }, [backdrop, theme.colors.background.paper, opacity]);

  if (backdrop === ModalBackdrop.NONE) {
    return null;
  }

  return (
    <BackdropStyle
      tabIndex={-1}
      onClick={backdropOnClick}
      className={backdropClassName}
      style={{
        zIndex,
        ...backgroundStyles,
      }}
    />
  );
};
