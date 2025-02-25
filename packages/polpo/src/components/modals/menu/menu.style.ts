import styled from 'styled-components';

import { Modal } from '@polpo/ui';

export const MenuModalStyle = styled(Modal)`
  border-radius: 0.5em;
  border: 1px solid ${props => props.theme.colors.border.main};
  background: ${props => props.theme.colors.background.main};
  box-shadow: 0 0 25px ${props => props.theme.colors.background.paper};
  user-select: none;

  .menu-content {
    display: grid;
    gap: 2px;
    padding: 5px;
    margin: 0;
    list-style: none;
    align-content: start;
    height: 100%;
    overflow-y: auto;
  }

  .divider {
    margin: 0.4em 0;
    color: ${props => props.theme.colors.border.main};
  }
`;

export const MenuOptionStyle = styled.li`
  padding: 0.1em 0.5em;
  border-radius: 0.3em;
  border: 1px solid transparent;
  transition: all 300ms ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: 0;

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

  &.is-selected,
  &:hover {
    background: ${props => props.theme.colors.background.paper};
  }

  &:focus,
  &:hover {
    border: 1px solid ${props => props.theme.colors.border.main};
  }
`;
