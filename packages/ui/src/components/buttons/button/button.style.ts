import styled from 'styled-components';

export const ButtonStyle = styled.button`
  border: 0;
  cursor: pointer;
  font-weight: bold;
  display: grid;
  grid-template-areas: 'leftIcon buttonText rightIcon';
  grid-template-columns: auto 1fr auto;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: all 100ms ease;
  justify-items: center;
  border-radius: 5px;
  text-align: center;

  .button-loader-icon {
    animation: spin 800ms linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
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
    transition: all 300ms ease;
  }

  .button-left-icon {
    margin-right: 10px;
    grid-area: leftIcon;
  }

  .button-right-icon {
    margin-left: 10px;
    grid-area: rightIcon;
  }

  .button-text {
    grid-area: buttonText;
  }

  padding: 10px 20px;
  font-size: ${props => props.theme.constants.typography.label.fontSize};
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};

  &:not(:disabled):hover {
    box-shadow: 0 0 5px;
  }

  &:not(:disabled):active {
    transform: scale(0.98);
  }

  &:disabled {
    background: ${props => props.theme.colors.gray7};
    color: ${props => props.theme.colors.white};
  }

  &.is-loading {
    pointer-events: none;

    .button-left-icon,
    .button-right-icon {
      opacity: 0;
    }
  }

  &.small {
    padding: 5px 10px;
    font-size: ${props => props.theme.constants.typography.small.fontSize};
  }

  &.large {
    padding: 15px 30px;
    font-size: ${props => props.theme.constants.typography.body.fontSize};
  }

  &.ghost {
    background: transparent;
    color: ${props => props.theme.colors.primary};
    border: 2px solid;

    &:not(:disabled):hover {
      background: ${props => props.theme.colors.primary}22;
    }
  }

  &.flat {
    background: transparent;
    color: ${props => props.theme.colors.primary};
    border: 1px solid transparent;

    &:not(:disabled):hover {
      border: 1px solid ${props => props.theme.colors.primary};
    }
  }
`;
