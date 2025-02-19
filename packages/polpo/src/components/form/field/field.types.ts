import React from 'react';

import { IconNameT } from '../../icon';

export enum FieldVariant {
  FULL_BORDER = 'full-border',
  CONTENT_BORDER = 'content-border',
  CONTENT_LINE = 'line',
}

export enum FieldOrientation {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

type FieldSharedProps = {
  rightIcon?: IconNameT;
  leftIcon?: IconNameT;
  errorIcon?: IconNameT;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
  label?: string;
  variant?: `${FieldVariant}`;
};

export type FieldProps = FieldSharedProps & {
  children: React.ReactNode;
  id: string;
  error?: string;
  isFocus?: boolean;
  fieldOrientation?: `${FieldOrientation}`;
};

export type InputFieldProps<T> = T & FieldSharedProps;
