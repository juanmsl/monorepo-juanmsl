import { css } from 'styled-components';

export enum SizeVariants {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export const SizeStyles: Record<SizeVariants, ReturnType<typeof css>> = {
  [SizeVariants.Small]: css`
    font-size: ${props => props.theme.constants.typography.small.fontSize};
  `,
  [SizeVariants.Medium]: css`
    font-size: ${props => props.theme.constants.typography.label.fontSize};
  `,
  [SizeVariants.Large]: css`
    font-size: ${props => props.theme.constants.typography.body.fontSize};
  `,
};
