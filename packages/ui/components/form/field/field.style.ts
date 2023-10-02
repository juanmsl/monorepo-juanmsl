import styled from 'styled-components';

type FieldStyleProps = {
  isFocus: boolean;
};
export const FieldStyle = styled.section<FieldStyleProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'fieldLabel' 'fieldInputContainer' 'fieldState';
  grid-template-rows: auto auto auto;
  gap: 4px;

  input, textarea {
    color: currentColor;
    font-family: inherit;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  input {
    border: 0;
    outline: 0;
    padding: 8px 0;
  }

  .field-label {
    grid-area: fieldLabel;
  }

  .field-state {
    grid-area: fieldState;
  }

  .field-input-container {
    grid-area: fieldInputContainer;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: 'fieldLeftIcon fieldInputComponent fieldRightIcon';
    align-items: center;
    border-bottom: 1px solid ${(props) => (props.isFocus ? props.theme.colors.primary : '#555555')};

    .field-icon {
      font-size: 0.9em;
      place-self: center;
      cursor: pointer;
      color: ${(props) => (props.isFocus ? props.theme.colors.primary : 'inherit')};
    }

    .field-left-icon {
      grid-area: fieldLeftIcon;
      margin-right: 10px;
    }

    .field-right-icon {
      grid-area: fieldRightIcon;
      margin-left: 10px;
    }

    .input-component {
      grid-area: fieldInputComponent;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  }
`;
