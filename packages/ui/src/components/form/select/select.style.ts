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

export const OptionsStyle = styled.section`
  position: fixed;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.primary};
  box-shadow: 0 3px 7px 0 rgba(145, 145, 145, 0.13);
  overflow: auto;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  display: grid;
  gap: 5px;
  align-content: start;
  outline: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  max-height: 80dvh;
  min-width: fit-content;

  .options-list-container {
    height: 100%;
    overflow: auto;
    outline: 0;
  }

  .options-list {
    list-style: none;
    display: grid;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  .options-selected {
    border-bottom: 1px solid #9e9e9e;
    padding-bottom: 5px;
  }

  .option-empty {
    color: #919191;
  }
`;

export const OptionStyle = styled.li`
  padding: 0.5em 1em;
  font-size: 0.8em;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  align-items: center;
  cursor: pointer;
  outline: 0;

  &.multiselect-icon {
    grid-template-columns: 1fr auto;
  }

  &.multiselect-checkbox {
    grid-template-columns: auto 1fr;
  }

  .option-content {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &:hover {
    background: ${props => props.theme.colors.text}11;
  }

  &:focus {
    background: ${props => props.theme.colors.text}22;
  }

  &.selected-option,
  &[aria-selected='true'] {
    background: ${props => props.theme.colors.primary}33;

    &:hover {
      background: ${props => props.theme.colors.primary}22;
    }

    &:focus {
      background: ${props => props.theme.colors.primary}11;
    }
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
