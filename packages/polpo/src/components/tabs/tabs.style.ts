import styled from 'styled-components';

import { RadiusClassNames, SizeStyles } from '../../core/variants';

export const TabStyle = styled.span`
  cursor: pointer;
  user-select: none;
  transition: all 300ms ease;
`;

export type TabListStyleProps = {
  $color: string;
  $colorContrast: string;
};

export const TabListStyle = styled.section<TabListStyleProps>`
  display: grid;
  grid-auto-flow: column;
  gap: 1em;
  align-items: center;
  position: relative;
  font-size: ${props => props.theme.constants.typography.label.fontSize};
  border-radius: 2em;

  ${SizeStyles}

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

  &.${RadiusClassNames.None} {
    border-radius: 0;

    ${TabStyle}, .tabs-selector {
      border-radius: 0;
    }
  }

  &.${RadiusClassNames.Small} {
    border-radius: 0.5em;

    ${TabStyle}, .tabs-selector {
      border-radius: 0.3em;
    }
  }

  &.${RadiusClassNames.Medium} {
    border-radius: 1em;

    ${TabStyle}, .tabs-selector {
      border-radius: 0.8em;
    }
  }

  &.${RadiusClassNames.Large} {
    border-radius: 1.5em;

    ${TabStyle}, .tabs-selector {
      border-radius: 1.3em;
    }
  }

  &.${RadiusClassNames.Full} {
    border-radius: 1.8em;

    ${TabStyle}, .tabs-selector {
      border-radius: 1.6em;
    }
  }

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
