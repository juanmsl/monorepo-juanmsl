import { useCallback, useState } from 'react';

export const useToggleValues = <T>(values: Array<T>, defaultIndex: number = 0): [T, () => void] => {
  const [index, setIndex] = useState(defaultIndex);

  const toggle = useCallback(() => {
    setIndex(prev => (prev + 1) % values.length);
  }, [values.length]);

  return [values[index], toggle];
};
