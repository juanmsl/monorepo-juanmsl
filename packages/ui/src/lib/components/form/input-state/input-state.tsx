import { InputStateStyle } from './input-state.style';

type LabelProps = {
  state: string;
  className?: string;
  style?: React.CSSProperties;
};

export const InputState = ({ state, className = '', style = {} }: LabelProps): React.ReactElement => {
  return (
    <InputStateStyle className={className} style={style}>
      {state}
    </InputStateStyle>
  );
};
