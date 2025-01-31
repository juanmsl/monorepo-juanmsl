import styled, { css } from 'styled-components';

import { RadiusVariants, SizeStyles, SizeVariants } from '../../core/variants';

export const TabStyle = styled.span`
  cursor: pointer;
  user-select: none;
  transition: all 300ms ease;
`;

const RadiusStyles: Record<RadiusVariants, ReturnType<typeof css>> = {
  [RadiusVariants.None]: css`
    border-radius: 0;

    ${TabStyle}, .tabs-selector {
      border-radius: 0;
    }
  `,
  [RadiusVariants.Small]: css`
    border-radius: 0.5em;

    ${TabStyle}, .tabs-selector {
      border-radius: 0.3em;
    }
  `,
  [RadiusVariants.Medium]: css`
    border-radius: 1em;

    ${TabStyle}, .tabs-selector {
      border-radius: 0.8em;
    }
  `,
  [RadiusVariants.Large]: css`
    border-radius: 1.5em;

    ${TabStyle}, .tabs-selector {
      border-radius: 1.3em;
    }
  `,
  [RadiusVariants.Full]: css`
    border-radius: 1.8em;

    ${TabStyle}, .tabs-selector {
      border-radius: 1.6em;
    }
  `,
};

export type TabListColorStyle = {
  $color: string;
  $colorContrast: string;
};

export type TabListStyleProps = TabListColorStyle & {
  $size: `${SizeVariants}`;
  $radius: `${RadiusVariants}`;
};

export const TabListStyle = styled.section<TabListStyleProps>`
  display: grid;
  grid-auto-flow: column;
  gap: 1em;
  align-items: center;
  position: relative;
  font-size: ${props => props.theme.constants.typography.label.fontSize};
  border-radius: 2em;

  ${props => SizeStyles[props.$size]}

  .tabs-selector {
    position: absolute;
    background: ${props => props.$color};
    color: ${props => props.$colorContrast};
    border-radius: 1.5em;

    &.active {
      transition: all 300ms ease;
    }
  }

  ${TabStyle} {
    border-radius: 1.5em;
    padding: 0.5em 1em;
    z-index: 1;
    text-align: center;

    &.is-open {
      color: ${props => props.$colorContrast};
    }

    &:not(.is-open):hover {
      color: ${props => props.theme.colors.text.dark};
    }
  }

  ${props => RadiusStyles[props.$radius]}

  &.vertical-direction {
    grid-auto-flow: row;
    align-items: unset;
    align-content: start;
  }

  &.solid-variant {
    background: ${props => props.theme.colors.background.paper};
    color: ${props => props.theme.colors.text.main};
    padding: 0.5em;
  }

  &.ghost-variant {
    border: 1px solid ${props => props.$color};
    padding: 0.5em;
  }

  &.flat-variant {
  }

  &.line-variant {
    border-radius: 0;

    &:not(.vertical-direction) {
      border-bottom: 2px solid ${props => props.theme.colors.border.main};
    }

    .tabs-selector {
      border-radius: 0;
    }

    ${TabStyle} {
      border-radius: 0;

      &.is-open {
        color: ${props => props.$color};
      }
    }
  }
`;
