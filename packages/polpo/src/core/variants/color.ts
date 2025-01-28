import { useClassNames } from '@polpo/hooks';

export enum ColorVariants {
  Primary = 'small',
  Secondary = 'medium',
  Tertiary = 'large',
  Info = 'info',
  Active = 'active',
  Warning = 'warning',
  Alert = 'alert',
}

const getColorVariantClassName = (size: `${ColorVariants}`) => {
  return `${size}-color`;
};

export const ColorClassNames: Record<keyof typeof ColorVariants, string> = {
  Primary: getColorVariantClassName(ColorVariants.Primary),
  Secondary: getColorVariantClassName(ColorVariants.Secondary),
  Tertiary: getColorVariantClassName(ColorVariants.Tertiary),
  Info: getColorVariantClassName(ColorVariants.Info),
  Active: getColorVariantClassName(ColorVariants.Active),
  Warning: getColorVariantClassName(ColorVariants.Warning),
  Alert: getColorVariantClassName(ColorVariants.Alert),
};

export const useColorClassName = (size: `${ColorVariants}`) =>
  useClassNames(
    Object.entries(ColorVariants).reduce(
      (object, [key, value]) => ({
        ...object,
        [ColorClassNames[key as keyof typeof ColorVariants]]: size === value,
      }),
      {},
    ),
  );
