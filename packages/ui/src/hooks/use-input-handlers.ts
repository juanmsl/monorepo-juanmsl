import React, { useCallback, useState } from 'react';

type UseInputHandlersProps = {
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (value: string) => void;
};
export const useInputHandlers = ({ onBlur, onFocus, onChange }: UseInputHandlersProps = {}) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setIsFocus(true);
      onFocus && onFocus(e);
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setIsFocus(false);
      onBlur && onBlur(e);
    },
    [onBlur],
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = e.target;
      onChange && onChange(value);
    },
    [onChange],
  );

  return {
    isFocus,
    handlers: {
      onFocus: handleFocus,
      onBlur: handleBlur,
      onChange: handleChange,
    },
  };
};
