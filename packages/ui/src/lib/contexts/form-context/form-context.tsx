import { yupResolver } from '@hookform/resolvers/yup';
import { DefaultValues, FieldValues, FormProvider, Mode, SubmitHandler, useForm } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';

type FormProps<T extends FieldValues> = {
  onSubmit: SubmitHandler<T>;
  children: React.ReactNode;
  className?: string;
  defaultValues?: DefaultValues<T>;
  mode?: Mode;
  reValidateMode?: Exclude<Mode, 'onTouched' | 'all'>;
  shouldFocusError?: boolean;
  style?: React.CSSProperties;
  schema?: AnyObjectSchema;
};

export const Form = <T extends FieldValues = FieldValues>({
  mode = 'onSubmit',
  reValidateMode = 'onBlur',
  onSubmit,
  className = '',
  style = {},
  defaultValues,
  shouldFocusError = false,
  children,
  schema,
}: FormProps<T>): React.ReactElement => {
  const methods = useForm<T>({
    mode,
    defaultValues,
    reValidateMode,
    shouldFocusError,
    resolver: schema ? yupResolver(schema) : undefined,
  });

  return (
    <FormProvider {...methods}>
      <form autoComplete='off' onSubmit={methods.handleSubmit(onSubmit)} className={className} style={style}>
        {children}
      </form>
    </FormProvider>
  );
};
