import { css } from 'styled-components';

import { useClassNames } from '@juanmsl/hooks';

export enum SizeVariants {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

const getSizeVariantClassName = (size: `${SizeVariants}`) => {
  return `${size}-size`;
};

export const SizeClassNames: Record<keyof typeof SizeVariants, string> = {
  Small: getSizeVariantClassName(SizeVariants.Small),
  Medium: getSizeVariantClassName(SizeVariants.Medium),
  Large: getSizeVariantClassName(SizeVariants.Large),
};

export const useSizeClassName = (size: `${SizeVariants}`) =>
  useClassNames(
    Object.entries(SizeVariants).reduce(
      (object, [key, value]) => ({
        ...object,
        [SizeClassNames[key as keyof typeof SizeVariants]]: size === value,
      }),
      {},
    ),
  );

export const SizeStyles = css`
  &.${SizeClassNames.Small} {
    font-size: ${props => props.theme.constants.typography.small.fontSize};
  }

  &.${SizeClassNames.Medium} {
    font-size: ${props => props.theme.constants.typography.label.fontSize};
  }

  &.${SizeClassNames.Large} {
    font-size: ${props => props.theme.constants.typography.body.fontSize};
  }
`;
