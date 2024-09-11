import styled from 'styled-components';

export const ToggleButtonStyle = styled.section`
  width: 2.5em;
  border-radius: 2em;
  background: ${props => props.theme.colors.gray9};
  color: ${props => props.theme.colors.gray6};
  border: 2px solid;
  padding: 2px;
  transition: all 300ms ease;
  position: relative;

  .toggle-button-dot {
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background: ${props => props.theme.colors.gray6};
    display: block;
    transition: all 300ms ease;
    margin-left: 0;
  }

  &.is-checked {
    background: ${props => props.theme.colors.primary.contrast};
    color: ${props => props.theme.colors.primary.main};

    .toggle-button-dot {
      background: ${props => props.theme.colors.primary.main};
      margin-left: 1em;
    }
  }

  .toggle-button-checkbox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
  }
`;

export const ToggleButtonContainerStyle = styled.section`
  display: flex;
  align-items: center;
  gap: 1em;
  width: fit-content;
`;
