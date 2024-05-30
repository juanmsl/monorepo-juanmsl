import { Typography } from '../../typography';

type LabelProps = {
  id: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Label = ({ id, label, className = '', style = {} }: LabelProps) => (
  <Typography variant='label-form' htmlFor={id} className={className} style={style} weight='bold' nowrap>
    {label}
  </Typography>
);
