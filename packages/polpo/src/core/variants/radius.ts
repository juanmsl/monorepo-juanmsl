import { css } from 'styled-components';

import { useClassNames } from '@polpo/hooks';

export enum RadiusVariants {
  None = 'none',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Full = 'full',
}

const getRadiusVariantClassName = (size: `${RadiusVariants}`) => {
  return `${size}-radius`;
};

export const RadiusClassNames: Record<keyof typeof RadiusVariants, string> = {
  None: getRadiusVariantClassName(RadiusVariants.None),
  Small: getRadiusVariantClassName(RadiusVariants.Small),
  Medium: getRadiusVariantClassName(RadiusVariants.Medium),
  Large: getRadiusVariantClassName(RadiusVariants.Large),
  Full: getRadiusVariantClassName(RadiusVariants.Full),
};

export const useRadiusClassName = (size: `${RadiusVariants}`) =>
  useClassNames(
    Object.entries(RadiusVariants).reduce(
      (object, [key, value]) => ({
        ...object,
        [RadiusClassNames[key as keyof typeof RadiusVariants]]: size === value,
      }),
      {},
    ),
  );

export const RadiusStyles = css`
  &.${RadiusClassNames.None} {
    border-radius: 0;
  }

  &.${RadiusClassNames.Small} {
    border-radius: 0.5em;
  }

  &.${RadiusClassNames.Medium} {
    border-radius: 1em;
  }

  &.${RadiusClassNames.Large} {
    border-radius: 1.5em;
  }

  &.${RadiusClassNames.Full} {
    border-radius: 100em;
  }
`;
