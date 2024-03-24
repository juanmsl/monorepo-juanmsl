import styled from 'styled-components';

export const ToggleSelectorStyle = styled.section`
  display: grid;
  grid-auto-flow: column;
  gap: 20px;
  cursor: pointer;
  position: relative;
  font-size: 1.5em;
  padding: 10px;
  user-select: none;
  width: fit-content;

  &::before {
    content: '';
    position: absolute;
    display: block;
    z-index: -1;
    top: 0;
    left: 0;
    aspect-ratio: 1/1;
    height: 100%;
    border-radius: 100px;
    border: 3px solid ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.background};
    transition: all 0.3s ease;
  }

  .left-option,
  .right-option {
    color: ${props => props.theme.colors.text};
    width: 1em;
    height: 1em;
    display: block;
  }

  .right-option {
    filter: grayscale(100%);
  }

  &.right-position {
    &::before {
      left: 100%;
      transform: translateX(-100%);
    }

    .right-option {
      filter: none;
    }

    .left-option {
      filter: grayscale(100%);
    }
  }

  &:hover {
    &::before {
      aspect-ratio: 1.3/1;
    }
  }

  &.vertical {
    grid-auto-flow: row;

    &::before {
      width: 100%;
      height: unset;
    }

    &.right-position {
      &::before {
        left: unset;
        top: 100%;
        transform: translateY(-100%);
      }
    }

    &:hover {
      &::before {
        aspect-ratio: 1/1.3;
      }
    }
  }
`;
