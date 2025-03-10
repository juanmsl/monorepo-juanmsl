import styled from 'styled-components';

import { Modal } from '../modal';

export const MenuModalStyle = styled(Modal)`
  border-radius: 0.5em;
  border: 1px solid ${props => props.theme.colors.border.main};
  background: ${props => props.theme.colors.background.main};
  box-shadow: 0 0 25px ${props => props.theme.colors.background.paper};
  user-select: none;
  position: relative;
  overflow-y: auto;

  .menu-content {
    display: grid;
    gap: 0.2em;
    padding: 0;
    margin: 0;
    list-style: none;
    align-content: start;
    height: 100%;
    position: relative;
    overflow-y: auto;
  }

  .divider {
    margin: 0.4em 0;
    color: ${props => props.theme.colors.border.main};
  }
`;

export const LabelStyle = styled.li`
  background: ${props => props.theme.colors.background.light};
  color: ${props => props.theme.colors.text.light};
  font-weight: lighter;
  padding: 0.5em 1.2em;
  position: sticky;
  top: 0;
  z-index: 10;
  pointer-events: none;
`;

export const OptionStyle = styled.li`
  padding: 0.2em 1em;
  border-radius: 0.3em;
  transition: all 300ms ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: 0;
  margin: 0 0.2em;
  position: relative;

  .ripple-effect {
    background: ${props => props.theme.colors.text.main}55;
  }

  &:first-child {
    margin-top: 5px;
  }

  .option-icon {
    margin-right: 0.5em;
  }

  .menu-checkbox {
    width: 100%;
  }

  &.is-disabled {
    opacity: 0.4;
    pointer-events: none;
    cursor: default;
  }

  &:focus,
  &:hover {
    background: ${props => props.theme.colors.background.paper}44;
  }

  &.is-selected {
    background: ${props => props.theme.colors.background.paper};

    &:focus,
    &:hover {
      background: ${props => props.theme.colors.background.paper}AA;
    }
  }
`;

export const GroupStyle = styled.li`
  position: relative;

  .menu-group-content {
    display: grid;
    gap: 0.2em;
    padding: 0;
    margin: 0;
    list-style: none;
    align-content: start;
    position: relative;
  }
`;
