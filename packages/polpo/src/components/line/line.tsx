import { LineStyle as LineComponentStyle } from './line.style';

import { useClassNames } from '@polpo/hooks';

export enum LineOrientation {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}

export enum LineStyle {
  SOLID = 'solid',
  DOTTED = 'dotted',
  DASHED = 'dashed',
}

type LineCommonProps = {
  orientation?: `${LineOrientation}`;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
};

type LineSolidProps = LineCommonProps & {
  lineStyle?: `${LineStyle.SOLID}`;
  spacing?: never;
  dotSize?: never;
  dashedSize?: never;
  lineWidth?: number;
};

type LineDottedProps = LineCommonProps & {
  lineStyle: `${LineStyle.DOTTED}`;
  spacing?: number;
  dotSize?: number;
  dashedSize?: never;
  lineWidth?: never;
};

type LineDashedProps = LineCommonProps & {
  lineStyle: `${LineStyle.DASHED}`;
  spacing?: number;
  dotSize?: never;
  dashedSize?: number;
  lineWidth?: number;
};

type LineProps = LineSolidProps | LineDottedProps | LineDashedProps;

export const Line = ({
  orientation = LineOrientation.HORIZONTAL,
  className = '',
  style = {},
  color = 'currentColor',
  lineWidth = 1,
  lineStyle = LineStyle.SOLID,
  dotSize = 1,
  dashedSize = 1,
  spacing = 1,
}: LineProps) => {
  const classNames = useClassNames({
    [orientation]: true,
    [className]: !!className,
    [lineStyle]: true,
  });

  return (
    <LineComponentStyle
      className={classNames}
      style={style}
      $dashSize={dashedSize}
      $color={color}
      $size={lineStyle === LineStyle.DOTTED ? dotSize : lineWidth}
      $spacing={spacing}
    />
  );
};
