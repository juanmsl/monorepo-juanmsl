import { FieldStyle } from './field.style';
import { Icon, IconNameT } from '../../../contexts';
import { Label } from '../label';
import { InputState } from '../input-state';

type FieldInputProps = {
  id: string;
  children: React.ReactNode;
  label?: string;
  error?: string;
  rightIcon?: IconNameT;
  onClickRightIcon?: () => void;
  leftIcon?: IconNameT;
  onClickLeftIcon?: () => void;
  isFocus?: boolean;
};

export const Field = ({
  id,
  label,
  rightIcon,
  onClickRightIcon,
  leftIcon,
  onClickLeftIcon,
  children,
  error,
  isFocus,
}: FieldInputProps): React.ReactElement => {
  return (
    <FieldStyle isFocus={!!isFocus}>
      {!!label && <Label id={id} label={label} isFocus={!!isFocus} className="field-label" />}
      <section className="field-input-container">
        {!!leftIcon && <Icon name={leftIcon} className="field-icon field-left-icon" onClick={onClickLeftIcon} />}
        <section className="input-component">{children}</section>
        {!!rightIcon && (
          <span className="field-icon field-right-icon">
            <Icon name={rightIcon} onClick={onClickRightIcon} />
          </span>
        )}
      </section>
      {!!error && <InputState state={error} className="field-state" />}
    </FieldStyle>
  );
};
