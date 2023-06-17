import styled from 'styled-components';

export const InputColorStyle = styled.section`
  input {
    padding: 0;
    margin: 0;
    border: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .content {
    display: grid;
    grid-template-rows: repeat(2, 50px);
    background: white;
    border-radius: 5px;
    border: 5px solid;
    position: relative;

    .color-box {
      width: 100%;
    }

    .color-content {
      font-weight: 500;
      text-align: center;
      vertical-align: center;
      padding: 0 1em;
      display: grid;
      grid-template-columns: auto 1fr auto;
      grid-template-areas: 'fieldLeftIcon fieldInputComponent fieldRightIcon';
      border-radius: 2px;
      align-items: center;
    }

    .color-text {
      grid-area: fieldInputComponent;
      text-transform: uppercase;
    }
  }

  .field-icon {
    font-size: 0.9em;
    place-self: center;
    cursor: pointer;
  }

  .field-left-icon {
    grid-area: fieldLeftIcon;
    margin-right: 10px;
  }

  .field-right-icon {
    grid-area: fieldRightIcon;
    margin-left: 10px;
  }
`;
