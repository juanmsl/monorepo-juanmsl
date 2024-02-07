import styled from 'styled-components';

export const InputFileSC = styled.section`
  display: grid;
  gap: 10px;

  .input-file--box {
    border: 1px dashed;
    border-radius: 5px;
    position: relative;
    transition: all 0.3s ease;
    display: grid;
    grid-template-columns: 32px 1fr;
    padding: 10px;
    gap: 10px;

    &--text {
      font-size: 0.8em;
      display: grid;
      color: ${(props) => props.theme.colors.gray5};
    }

    &--icon {
      width: 32px;
      height: 32px;
      border-radius: 5px;
      background: ${(props) => props.theme.colors.gray7};
      display: grid;
      place-content: center;
    }

    &--label {
      transition: all 0.3s ease;
    }

    &--restrictions {
      font-size: 0.8em;
    }

    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: copy;
      opacity: 0;
    }

    &:hover {
      background: #f1f1f1;

      &,
      & label {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  .input-file--files {
    max-height: 280px;
    overflow-y: auto;
    border: 1px dashed;
    border-radius: 5px;

    &--content {
      display: grid;
    }
  }

  .error {
    font-size: 0.8em;
    color: tomato;
  }

  .total-info {
    font-size: 0.6em;
    display: grid;
    grid-auto-flow: column;
    justify-content: end;
    align-items: center;
    gap: 1em;

    &--delete {
      display: grid;
      place-items: center;
      height: 100%;
      background: transparent;
      cursor: pointer;
      transition: all 0.3s ease;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      width: 2em;

      &:hover {
        background: ${(props) => props.theme.colors.primary};
        color: white;
      }
    }
  }
`;

export const FileCardSC = styled.section`
  display: grid;
  grid-template-columns: 35px 1fr 35px;
  gap: 1em;
  align-items: center;
  padding: 10px;

  &:not(:last-child) {
    border-bottom: 1px dashed black;
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  .file-card--image {
    width: 32px;
    height: 32px;
    border-radius: 5px;
    background: ${(props) => props.theme.colors.gray7};
    display: grid;
    place-content: center;
  }

  .file-card--data {
    display: grid;
    font-size: 0.7em;
  }

  .file-card--name {
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .file-card--size {
    margin: 0;
    color: ${(props) => props.theme.colors.gray5};
  }

  .file-card--delete {
    border-radius: 5px;
    background: ${(props) => props.theme.colors.gray7};
    display: grid;
    place-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: ${(props) => props.theme.colors.primary};
      color: white;
    }
  }
`;
