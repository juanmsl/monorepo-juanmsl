import { ForwardedRef, forwardRef, HTMLAttributes, useMemo } from 'react';

import { IconCollectionT, IconT, Icons } from './icons';

export type IconNameT = keyof IconCollectionT;

const useIcon = (name: IconNameT): IconT => {
  return useMemo(() => Icons[name] ?? Icons['warning'], [name]);
};

type IconProps = HTMLAttributes<SVGSVGElement> & {
  size?: number | `${number}em` | `${number}px`;
  fill?: string;
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
  name: IconNameT;
  inCircle?: boolean;
  scale?: 1 | 2 | 3 | 4 | 5 | '1' | '2' | '3' | '4' | '5';
};

const IconComponent = (
  {
    style,
    className,
    size = '1em',
    fill = 'currentColor',
    onClick,
    name,
    inCircle = false,
    scale: scaleProp = 3,
  }: IconProps,
  ref: ForwardedRef<unknown>,
): React.ReactElement => {
  const { viewBox, svg } = useIcon(name);

  const scale = (parseInt(`${scaleProp}`) + 2) / 10;

  const translate = 16 * ((1 - scale * 2) / 2);

  return (
    <svg
      ref={ref as ForwardedRef<SVGSVGElement>}
      height={size}
      width={size}
      viewBox={viewBox}
      className={className}
      style={style}
      onClick={onClick}
      fill='none'
    >
      {inCircle ? (
        <>
          <circle cx={16} cy={16} r={15} stroke={fill} strokeWidth={1} />
          <g transform={`translate(${8 + translate}, ${8 + translate})`}>
            <g transform={`scale(${scale})`}>{svg(fill)}</g>
          </g>
        </>
      ) : (
        svg(fill)
      )}
    </svg>
  );
};

export const Icon = forwardRef(IconComponent);
