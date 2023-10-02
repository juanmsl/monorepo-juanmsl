import {LineStyle, LineStyleProps} from "./line.style";
import {useClassNames} from "@juanmsl/hooks";

export enum LineOrientation {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}

type LineProps = LineStyleProps & {
  orientation: `${LineOrientation}`;
  className?: string;
};

export const Line = ({
  orientation,
  color = 'currentColor',
  size = '1px',
  className = ''
}: LineProps) => {
  const classNames = useClassNames({
    [orientation]: true,
    [className]: !!className
  })

  return <LineStyle className={classNames} color={color} size={size}/>;
}
