import { useState } from 'react';

export const useToggle = (defaultValue: boolean = false) => {
  const [value, setValue] = useState<boolean>(defaultValue);

  const toggle = (value?: boolean) => {
    if (value !== undefined) {
      setValue(value);
    } else {
      setValue((prev) => !prev);
    }
  };

  return [value, toggle];
};
