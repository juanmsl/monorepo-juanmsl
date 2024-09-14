import styled from 'styled-components';

export const SwitchStyle = styled.section`
  width: 3em;
  border-radius: 2em;
  background: ${props => props.theme.colors.gray9};
  color: ${props => props.theme.colors.gray6};
  border: 2px solid;
  padding: 2px;
  transition: all 300ms ease;
  position: relative;

  .switch-dot {
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background: ${props => props.theme.colors.background.main};
    display: block;
    transition: all 300ms ease;
    margin-left: 0;
  }

  &.is-checked {
    background: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.primary.main};

    .switch-dot {
      background: ${props => props.theme.colors.primary.contrast};
      margin-left: 1.5em;
    }
  }

  .switch-checkbox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
  }
`;

export const SwitchContainerStyle = styled.section`
  display: flex;
  align-items: center;
  gap: 1em;
  width: fit-content;

  .switch-label {
    cursor: pointer;
  }

  ${SwitchStyle}:hover .switch-dot,
  &:has(.switch-label:hover) .switch-dot {
    box-shadow: 0 0 0 0.5em ${props => props.theme.colors.primary.main}88;
  }

  ${SwitchStyle}.is-checked:hover .switch-dot,
  &:has(.switch-label:hover) ${SwitchStyle}.is-checked .switch-dot {
    box-shadow: 0 0 0 0.5em ${props => props.theme.colors.primary.contrast}88;
  }
`;
