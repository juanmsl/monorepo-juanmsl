import { LineStyle, LineStyleProps } from './line.style';
import { useClassNames } from '@juanmsl/hooks';

export enum LineOrientation {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}

type LineProps = LineStyleProps & {
  orientation: `${LineOrientation}`;
  className?: string;
  style?: React.CSSProperties;
};

export const Line = ({ orientation, color = 'currentColor', size = '1px', className = '', style = {} }: LineProps) => {
  const classNames = useClassNames({
    [orientation]: true,
    [className]: !!className,
  });

  return <LineStyle className={classNames} color={color} size={size} style={style} />;
};
