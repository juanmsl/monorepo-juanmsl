import { HTMLAttributes, useMemo } from 'react';

import { IconCollectionT, IconT, Icons } from './icons';

export type IconNameT = keyof IconCollectionT;

const useIcon = (name: IconNameT): IconT => {
  return useMemo(() => Icons[name] ?? Icons['warning'], [name]);
};

type IconProps = HTMLAttributes<SVGSVGElement> & {
  size?: number | string;
  width?: number;
  height?: number;
  fill?: string;
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
  name: IconNameT;
};

export const Icon = ({
  style,
  className,
  size = '1em',
  width,
  height,
  fill = 'currentColor',
  onClick,
  name,
}: IconProps): React.ReactElement => {
  const { viewBox, svg } = useIcon(name);

  return (
    <svg
      height={height ?? size}
      width={width ?? size}
      viewBox={viewBox}
      className={className}
      style={style}
      onClick={onClick}
      fill='none'
    >
      {svg(fill)}
    </svg>
  );
};
