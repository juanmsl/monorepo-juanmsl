import { BoxShadowLine } from '@core/constants';

const getUnit = (value: number, unit = 'px') => (value ? `${value}${unit}` : value);

export const getBoxShadowCSS = ({ x, y, blur, spread, color, isInset }: BoxShadowLine) => {
  const line = `${getUnit(x)} ${getUnit(y)} ${getUnit(blur)} ${getUnit(spread)} ${color.toUpperCase()} ${
    isInset ? 'inset' : ''
  }`;

  return line.startsWith('0 0 0 0') ? '' : line.trim();
};
