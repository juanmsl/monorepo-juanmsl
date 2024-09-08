import styled from 'styled-components';

export const FieldStyle = styled.section`
  display: grid;
  gap: 0.5em;

  .field-content {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
  }

  .field-left-icon,
  .field-right-icon {
    font-size: 1em;
  }

  .field-left-icon {
    margin-right: 1em;
  }

  .field-right-icon {
    margin-left: 1em;
  }

  .field-message {
    display: grid;
    grid-auto-flow: column;
    gap: 5px;
    align-items: center;
    justify-content: start;
  }

  &.error {
    color: ${props => props.theme.colors.alert};
  }

  &.focus {
    color: ${props => props.theme.colors.info};
  }

  &.error,
  &.focus {
    .field-left-icon,
    .field-right-icon,
    .field-children {
      color: ${props => props.theme.colors.text};
    }
  }

  &.variant-content-border {
    .field-content {
      border: 1px solid;
      border-radius: 4px;
      padding: 1em;
      background: ${props => props.theme.colors.background};
    }
  }

  &.variant-content-line {
    .field-content {
      border-bottom: 1px solid;
      padding: 0.5em 0;
    }
  }

  &.variant-full-border {
    border: 1px solid;
    border-radius: 4px;
    padding: 0.5em 0;
    background: ${props => props.theme.colors.background};

    .field-label,
    .field-content,
    .field-message {
      padding: 0 1em;
    }
  }
`;
