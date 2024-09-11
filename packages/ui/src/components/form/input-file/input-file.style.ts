import styled from 'styled-components';

export const InputFileContainerStyle = styled.section`
  display: grid;
  gap: 10px;

  .input-file--box {
    border: 1px solid;
    border-radius: 5px;
    position: relative;
    transition: all 0.3s ease;
    display: grid;
    grid-template-columns: 32px 1fr;
    padding: 10px;
    gap: 10px;
    background: ${props => props.theme.colors.secondary.main};
    color: ${props => props.theme.colors.secondary.contrast};
    align-items: center;

    &--icon {
      width: 32px;
      height: 32px;
      border-radius: 5px;
      background: ${props => props.theme.colors.primary.contrast};
      color: ${props => props.theme.colors.primary.main};
      display: grid;
      place-content: center;
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
      background: ${props => props.theme.colors.primary.contrast};
      color: ${props => props.theme.colors.primary.main};

      .input-file--box--icon {
        background: ${props => props.theme.colors.primary.main};
        color: ${props => props.theme.colors.primary.contrast};
      }
    }
  }

  .input-file--files {
    max-height: 280px;
    overflow-y: auto;
    border: 1px solid;
    border-radius: 5px;

    &--content {
      display: grid;
    }
  }

  .error {
    color: tomato;
  }

  .total-info {
    font-size: 1em;
    display: grid;
    grid-auto-flow: column;
    justify-content: end;
    align-items: center;
    gap: 0.5em;

    &--delete {
      display: grid;
      place-content: center;
      height: 100%;
      background: transparent;
      cursor: pointer;
      transition: all 0.3s ease;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      width: 2em;
      font-size: 0.8em;

      &:hover {
        background: ${props => props.theme.colors.primary.main};
        color: ${props => props.theme.colors.primary.contrast};
      }
    }
  }
`;

export const FileCardStyle = styled.section`
  display: grid;
  grid-template-columns: 35px 1fr 35px;
  gap: 1em;
  align-items: center;
  padding: 10px;
  background: ${props => props.theme.colors.background.main};

  &:not(:last-child) {
    border-bottom: 1px dashed;
  }

  &:hover {
    .file-card--delete {
      color: ${props => props.theme.colors.primary.main};
    }
  }

  .file-card--image {
    background: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.primary.contrast};
    width: 32px;
    height: 32px;
    border-radius: 5px;
    display: grid;
    place-content: center;
    border: 1px solid;
  }

  .file-card--data {
    display: grid;
    font-size: 0.7em;
    justify-content: start;
  }

  .file-card--delete {
    border-radius: 5px;
    display: grid;
    place-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: ${props => props.theme.colors.primary.main};
      color: ${props => props.theme.colors.primary.contrast};
    }
  }
`;
