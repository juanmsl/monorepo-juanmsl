import styled from 'styled-components';

import { Menu } from '@polpo/ui';

export const SelectStyle = styled.section`
  cursor: pointer;

  .icon-close {
    display: grid;
    place-content: center;
    align-self: center;
    border-radius: 100%;
    cursor: pointer;
    font-size: 0.6em;
    padding: 0.5em;

    &:hover {
      background: ${props => props.theme.colors.text.main}55;
    }
  }

  .select-container {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0.5em;
    align-items: center;
    grid-auto-rows: auto;
    position: relative;
    cursor: pointer;

    &.three-columns {
      grid-template-columns: 1fr auto auto;
    }
  }

  .input-button {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: grid;
    min-width: 0;
    width: 100%;
    border: 0;
    margin: 0;
    border-radius: 0;
    background: transparent;
    color: currentColor;
    text-align: left;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
    grid-template-columns: 1fr auto;

    &.placeholder {
      color: #919191;
    }
  }
`;

export const OptionsMenuStyle = styled(Menu)`
  overflow-y: auto;

  &.search-input {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
  }
`;

export const OptionsHeaderStyle = styled.section`
  margin: 5px;

  .input-search {
    padding: 0.8em 1em;
    border: 1px solid ${props => props.theme.colors.border.main};
    font-size: 0.8em;
    width: 100%;
    border-radius: 4px;
  }
`;
