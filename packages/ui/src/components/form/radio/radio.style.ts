import styled from 'styled-components';

export const RadioStyle = styled.section`
  border-radius: 50%;
  background: ${props => props.theme.colors.gray9};
  color: ${props => props.theme.colors.gray6};
  border: 2px solid;
  transition: all 300ms ease;
  position: relative;
  padding: 2px;

  .radio-dot {
    width: 1em;
    height: 1em;
    border-radius: 50%;
    display: block;
    opacity: 0;
    transition: opacity 300ms ease;
    background: ${props => props.theme.colors.primary.main};
  }

  &.is-checked {
    background: ${props => props.theme.colors.primary.contrast};
    color: ${props => props.theme.colors.primary.main};

    .radio-dot {
      opacity: 1;
    }
  }

  .radio-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
    z-index: 1;
  }
`;

export const RadioContainerStyle = styled.section`
  display: flex;
  align-items: center;
  gap: 1em;
  width: fit-content;

  .radio-label {
    cursor: pointer;
    user-select: none;
  }

  ${RadioStyle}:hover,
  &:has(.radio-label:hover) ${RadioStyle} {
    box-shadow: 0 0 0 0.4em ${props => props.theme.colors.primary.main}88;
  }
`;
