import styled from 'styled-components';

export type ButtonStyleProps = {
  $color: string;
  $colorDark: string;
  $colorContrast: string;
};

export const ButtonStyle = styled.button<ButtonStyleProps>`
  cursor: pointer;
  font-weight: bold;
  display: grid;
  grid-auto-flow: column;
  gap: 1em;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  justify-items: center;
  border-radius: 1em;
  text-align: center;
  justify-content: center;

  .button-loader-icon {
    animation: spin 800ms linear infinite;
    font-size: 1.2em;
  }

  &.rounded {
    border-radius: 500px;
  }

  &.fit {
    width: fit-content;
  }

  &.full {
    width: 100%;
  }

  .button-left-icon,
  .button-right-icon {
    font-size: 1.2em;
    opacity: 1;
  }

  .button-text {
    display: grid;
    align-items: center;
  }

  padding: 1em;
  font-size: ${props => props.theme.constants.typography.label.fontSize};
  background: ${props => props.$color};
  color: ${props => props.$colorContrast};
  box-shadow: 0 0 0 0 transparent;
  transition: all 250ms ease;
  border: 1px solid ${props => props.$color};

  &:not(:disabled, .no-shadow):hover {
    box-shadow:
      0 1.4em 0.5em -1em ${props => props.theme.colors.black}88,
      0 0.7em 1em -0.5em ${props => props.theme.colors.black}88;
  }

  &:not(:disabled, .no-shadow):active {
    background: ${props => props.$colorDark};
    box-shadow:
      0 0.3em 0.4em -0.2em ${props => props.theme.colors.black}88,
      0 0.2em 0.8em -0.1em ${props => props.theme.colors.black}88;
  }

  &:not(:disabled):active {
    transform: scale(0.98);
  }

  &:disabled {
    background: ${props => props.theme.colors.gray6};
    color: ${props => props.theme.colors.gray9};
    border: 1px solid ${props => props.theme.colors.gray6};
    cursor: not-allowed;
    pointer-events: none;
  }

  &.is-loading {
    pointer-events: none;
  }

  &.small-size {
    font-size: ${props => props.theme.constants.typography.small.fontSize};
  }

  &.large-size {
    font-size: ${props => props.theme.constants.typography.body.fontSize};
  }

  &.ghost-variant {
    background: transparent;
    color: ${props => props.$color};
    border: 1px solid;

    &:not(:disabled):hover {
      background: ${props => props.theme.colors.background.main};
    }

    &:not(:disabled):active {
      background: ${props => props.theme.colors.background.paper};
    }

    &:disabled {
      color: ${props => props.theme.colors.gray6};
    }
  }

  &.flat-variant {
    background: transparent;
    color: ${props => props.$color};
    border: 1px solid transparent;

    &:not(:disabled):hover {
      background: ${props => props.theme.colors.background.main};
    }

    &:not(:disabled):active {
      background: ${props => props.theme.colors.background.paper};
    }

    &:disabled {
      color: ${props => props.theme.colors.gray6};
    }
  }
`;
