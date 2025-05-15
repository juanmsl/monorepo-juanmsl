import { GradientBoxStyle } from './gradient-box.style';

type GradientBoxProps = {
  colors: Array<string>;
  degree?: number;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  radius?: number;
  onClick?: () => void;
};

export const GradientBox = ({
  colors,
  degree = 0,
  size = 200,
  className = '',
  style = {},
  radius = 0.2,
  onClick,
}: GradientBoxProps) => {
  return (
    <GradientBoxStyle
      onClick={onClick}
      className={className}
      style={{
        ...style,
        background: `linear-gradient(${degree}deg, ${colors.join(', ')})`,
        fontSize: `${size}px`,
        borderRadius: `${radius}em`,
      }}
    />
  );
};
