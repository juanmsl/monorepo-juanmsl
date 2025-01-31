import { css } from 'styled-components';

export enum RadiusVariants {
  None = 'none',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Full = 'full',
}

export const RadiusStyles: Record<RadiusVariants, ReturnType<typeof css>> = {
  [RadiusVariants.None]: css`
    border-radius: 0;
  `,
  [RadiusVariants.Small]: css`
    border-radius: 0.5em;
  `,
  [RadiusVariants.Medium]: css`
    border-radius: 1em;
  `,
  [RadiusVariants.Large]: css`
    border-radius: 1.5em;
  `,
  [RadiusVariants.Full]: css`
    border-radius: 100em;
  `,
};
