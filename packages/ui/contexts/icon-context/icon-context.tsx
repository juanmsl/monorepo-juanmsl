import { IconT, Icons, IconCollectionT } from './icons';
import { createContext, useCallback, useContext, useState } from 'react';

export type IconNameT = keyof IconCollectionT;

type IconContextT = {
  getIcon: (name: IconNameT) => IconT;
};

const IconContext = createContext<IconContextT | null>(null);

type IconProviderProps = {
  children: React.ReactNode;
};

export const IconProvider = ({ children }: IconProviderProps): React.ReactElement => {
  const [icons] = useState<IconCollectionT>(Icons);

  const getIcon = useCallback((name: IconNameT): IconT => icons[name] ?? icons['warning'], [icons]);

  return <IconContext.Provider value={{ getIcon }}>{children}</IconContext.Provider>;
};

const useIcon = (name: IconNameT): IconT => {
  const context = useContext(IconContext);

  if (context === null) {
    throw new Error('useIcon must be used with in a IconProvider');
  }

  return context.getIcon(name);
};

type IconProps = {
  style?: React.CSSProperties;
  className?: string;
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
      fill="none"
    >
      {svg(fill)}
    </svg>
  );
};
