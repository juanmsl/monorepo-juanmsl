type CSSTheme = { [index: string]: string | number };
type Contract = { [index: string]: string | number | Contract };

export const createThemeContract = (theme: Contract, parent: string = '-') => {
  return Object.entries(theme).reduce((styles, [key, value]): CSSTheme => {
    const propertyKey = `${parent}-${key}`;
    const propertyValue: CSSTheme =
      typeof value === 'object' ? createThemeContract(value, propertyKey) : { [propertyKey]: value };

    return {
      ...styles,
      ...propertyValue,
    };
  }, {} as CSSTheme);
};
