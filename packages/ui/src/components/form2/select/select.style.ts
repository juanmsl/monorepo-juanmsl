import styled from 'styled-components';

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
      background: ${props => props.theme.colors.text}55;
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

    &.with-value {
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

export const OptionsStyle = styled.section`
  z-index: 1;
  position: fixed;
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0 3px 7px 0 rgba(145, 145, 145, 0.13);
  max-height: 250px;
  overflow: auto;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  display: grid;
  gap: 5px;
  align-content: start;

  .options-list-container {
    height: 100%;
    overflow: auto;
  }

  .options-list {
    list-style: none;
    display: grid;
    margin: 0;
    padding: 0;
    gap: 2px;
  }

  .options-selected {
    border-bottom: 1px solid #9e9e9e;
    padding-bottom: 5px;
  }

  .option {
    padding: 0.5em 1em;
    font-size: 0.8em;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1em;
    align-items: center;
    border: 1px solid transparent;

    &.multiselect {
      grid-template-columns: auto 1fr;
    }

    .content {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &.selected,
    &:active,
    &:hover,
    &:focus,
    &[aria-selected='true'] {
      border-radius: 4px;
      background: rgba(145, 145, 145, 0.1);
      cursor: pointer;
    }

    &.selected,
    &[aria-selected='true'] {
      border: 1px solid #9e9e9e;
    }
  }

  .option-empty {
    color: #919191;
  }
`;

export const OptionsHeaderStyle = styled.section`
  display: grid;
  gap: 5px;
  padding-bottom: 5px;

  .input-search {
    padding: 8px 6px;
    border: 1px solid #b4b4b4;
    font-size: 0.8em;
    width: 100%;
    border-radius: 4px;
  }
`;
