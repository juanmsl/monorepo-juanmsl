import styled from 'styled-components';

const width = '3em';
const padding = '2px';
const dotSize = '1em';
const dotHoverSize = '1.5em';

export const SwitchStyle = styled.section`
  width: ${width};
  border-radius: 2em;
  background: ${props => props.theme.colors.background.paper};
  padding: ${padding};
  transition: all 300ms ease;
  position: relative;

  .switch-dot {
    width: ${dotSize};
    height: ${dotSize};
    border-radius: 2em;
    background: ${props => props.theme.colors.primary.main};
    display: block;
    transition: all 300ms ease;
    margin-left: 0;
  }

  &.is-checked {
    background: ${props => props.theme.colors.primary.main};

    .switch-dot {
      background: ${props => props.theme.colors.primary.contrast};
      margin-left: calc(${width} - ${dotSize} - ${padding} * 2);
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
    box-shadow: 0 0 0 0.5em ${props => props.theme.colors.primary.light}88;
    width: ${dotHoverSize};
  }

  ${SwitchStyle}.is-checked:hover .switch-dot,
  &:has(.switch-label:hover) ${SwitchStyle}.is-checked .switch-dot {
    margin-left: calc(${width} - ${dotHoverSize} - ${padding} * 2);
  }
`;
