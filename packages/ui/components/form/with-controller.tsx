import { Controller, useFormContext } from 'react-hook-form';
import { InputControllerProps, InputProps, Props } from './types';

export const withController = <T extends Props, V>(
  Component: React.FC<InputProps<T, V>>,
  componentDefaultValue: V,
): React.FC<InputControllerProps<T>> => {
  const ControllerWrapper = (inputControllerProps: InputControllerProps<T>): React.ReactElement => {
    const { name, defaultValue, ...inputProps } = inputControllerProps;
    const { control, setValue } = useFormContext();

    return (
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue ?? componentDefaultValue}
        render={({ field: { onBlur, value }, fieldState }) => (
          <Component
            {...({
              name,
              value,
              error: fieldState.error,
              invalid: fieldState.invalid,
              isTouched: fieldState.isTouched,
              isDirty: fieldState.isDirty,
              setValue: (value) => setValue(name, value),
              onBlur,
              ...inputProps,
            } as InputProps<T, V>)}
          />
        )}
      />
    );
  };

  return ControllerWrapper;
};
