import { InputControllerProps, InputProps } from './types';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const withController =
  <T extends Record<string, unknown>, V>(
    Component: React.FC<InputProps<T, V>>,
    componentDefaultValue: V,
  ): React.FC<InputControllerProps<T>> =>
  ({ name, defaultValue, ...inputProps }: InputControllerProps<T>): React.ReactElement => {
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
              state: fieldState,
              setValue: (value) => setValue(name, value),
              onBlur,
              ...inputProps,
            } as InputProps<T, V>)}
          />
        )}
      />
    );
  };
