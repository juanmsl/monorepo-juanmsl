import { Typography } from 'polpo/ui';

import { ColorBoxContainerStyle, ColorInputStyle } from './color-box.style';

type ColorBoxProps = React.HTMLAttributes<HTMLDivElement> & {
  color: string;
  size?: number;
  width?: number;
  reverse?: boolean;
};

export const ColorBox = ({
  color,
  size = 40,
  width = 200,
  style = {},
  reverse = false,
  className = '',
  ...props
}: ColorBoxProps) => {
  return (
    <ColorBoxContainerStyle {...props} style={{ flexDirection: reverse ? 'row-reverse' : 'row', width }}>
      <ColorInputStyle className={className} style={{ ...style, fontSize: `${size}px`, background: color }} />
      <Typography variant='label' noPadding align='center' style={{ flexGrow: 1 }} family='code'>
        {color}
      </Typography>
      <span style={{ width: `${size}px` }} />
    </ColorBoxContainerStyle>
  );
};
