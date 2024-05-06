import { useMemo } from 'react';

import { BoxShadowLine } from '@core/constants';

const getUnit = (value: number, unit = 'px') => (value ? `${value}${unit}` : value);

const getBoxShadowCSS = ({ x, y, blur, spread, color, isInset }: BoxShadowLine) => {
  const line = `${getUnit(x)} ${getUnit(y)} ${getUnit(blur)} ${getUnit(spread)} ${color.toUpperCase()} ${
    isInset ? 'inset' : ''
  }`;

  return line.startsWith('0 0 0 0') ? '' : line.trim();
};

export const useBoxShadow = (boxShadowLines: Array<BoxShadowLine>) =>
  useMemo(() => boxShadowLines.map(boxShadowLine => getBoxShadowCSS(boxShadowLine)), [boxShadowLines]);
