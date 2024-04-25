import { useMemo } from 'react';

export type TextShadowLine = {
  x: number;
  y: number;
  blur: number;
  color: string;
};

const getUnit = (value: number, unit = 'px') => (value ? `${value}${unit}` : value);

const getTextShadowCSS = ({ x, y, blur, color }: TextShadowLine) => {
  const line = `${getUnit(x)} ${getUnit(y)} ${getUnit(blur)} ${color.toUpperCase()}`;

  return line.startsWith('0 0 0') ? '' : line.trim();
};

export const useTextShadow = (boxShadowLines: Array<TextShadowLine>) =>
  useMemo(() => boxShadowLines.map(boxShadowLine => getTextShadowCSS(boxShadowLine)), [boxShadowLines]);
