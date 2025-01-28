import styled from 'styled-components';

export const CheckboxStyle = styled.section`
  border-radius: 42%;
  background: ${props => props.theme.colors.background.paper};
  color: ${props => props.theme.colors.primary.main};
  transition: all 300ms ease;
  position: relative;
  padding: 2px;
  width: 1.4em;
  height: 1.4em;
  border: 1px solid;

  .checkbox-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${props => props.theme.colors.primary.contrast};
    font-size: 0.7em;
    z-index: 1;
    opacity: 0;
    transition: opacity 300ms ease;

    path {
      filter: drop-shadow(0px 0 3px rgba(0, 0, 0, 1));
    }
  }

  &.is-checked {
    background: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.primary.main};

    .checkbox-icon {
      opacity: 1;
    }

    &:hover {
      background: ${props => props.theme.colors.primary.light};
    }
  }

  .checkbox-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }
`;

export const CheckboxContainerStyle = styled.section`
  display: flex;
  align-items: center;
  gap: 1em;
  width: fit-content;

  .checkbox-label {
    cursor: pointer;
    user-select: none;
  }

  ${CheckboxStyle}:hover,
  &:has(.checkbox-label:hover) ${CheckboxStyle} {
    box-shadow: 0 0 0 0.4em ${props => props.theme.colors.primary.main}88;
  }

  ${CheckboxStyle}:active,
  &:has(.checkbox-label:active) ${CheckboxStyle} {
    transform: scale(0.95);
  }
`;
