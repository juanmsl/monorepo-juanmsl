import styled from 'styled-components';

export const StyledSelect = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  position: relative;
  cursor: pointer;
  background: white;
  z-index: 999999;

  &.disabled {
    background-color: #d6d6d6;
  }

  .icon-close {
    display: grid;
    place-content: center;
    align-self: center;

    width: 2em;
    height: 2em;
    border-radius: 100%;
    border: 1px solid #9e9e9e;
    background: white;
    cursor: pointer;
    font-size: 0.7em;
  }

  .input-container {
    display: grid;
    grid-template-columns: 1fr;

    .input-button {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      display: block;
      min-width: 0;
      width: 100%;
      border: 0;
      margin: 0;
      border-radius: 0;
      background: transparent;
      color: currentColor;
      text-align: left;
      -webkit-tap-highlight-color: transparent;
      padding: 5px 0;

      &.placeholder {
        color: #919191;
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 100%;
    }
  }
`;

export const OptionsStyle = styled.section`
  z-index: 999999 !important;
  display: none;
  position: fixed;
  background: white;
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0 3px 7px 0 rgba(145, 145, 145, 0.13);
  padding: 4px;
  max-height: 400px;
  overflow: auto;
  animation: fadeIn 150ms ease-out;

  &.show {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 5px;
  }

  .options-list-container {
    height: 100%;
    overflow: auto;
  }

  .options-list {
    list-style: none;
    display: grid;
    margin: 0;
    padding: 0;
    gap: 0;
  }

  .options-selected {
    border-bottom: 1px solid #9e9e9e;
    padding-bottom: 5px;
  }

  .option {
    padding: 6px 4px;
    font-size: 0.8em;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 5px;
    align-items: center;

    &.multiselect {
      grid-template-columns: auto 1fr auto;
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

  .option-placeholder {
    text-align: center;
    color: #919191;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 5px 0;
  }

  .input-search {
    padding: 8px 6px;
    border: 1px solid #b4b4b4;
    font-size: 0.8em;
    width: 100%;
    border-radius: 4px;
  }

  .option-selected-resume {
    color: #919191;
    text-align: center;

    .text-content {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;
