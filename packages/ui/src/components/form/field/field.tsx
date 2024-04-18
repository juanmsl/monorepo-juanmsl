import { Icon, IconNameT } from '../../../contexts';
import { useClassNames } from '../../../hooks';
import { InputState } from '../input-state';
import { Label } from '../label';

import { FieldStyle } from './field.style';

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
  noBorderBottom?: boolean;
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
  isFocus = false,
  noBorderBottom = false,
}: FieldInputProps) => {
  const fieldInputContainerClassName = useClassNames({
    'field-input-container': true,
    'no-border-bottom': noBorderBottom,
  });

  return (
    <FieldStyle $isFocus={isFocus}>
      {!!label && <Label id={id} label={label} className='field-label' />}
      <section className={fieldInputContainerClassName}>
        {!!leftIcon && <Icon name={leftIcon} className='field-icon field-left-icon' onClick={onClickLeftIcon} />}
        <section className='input-component'>{children}</section>
        {!!rightIcon && (
          <span className='field-icon field-right-icon'>
            <Icon name={rightIcon} onClick={onClickRightIcon} />
          </span>
        )}
      </section>
      {!!error && <InputState state={error} className='field-state' />}
    </FieldStyle>
  );
};
