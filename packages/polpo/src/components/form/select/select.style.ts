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
    user-select: none;

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

  .select-caret-icon {
    transition: transform 200ms ease;

    &.is-select-open {
      transform: rotate(180deg);
    }
  }
`;

export const OptionsHeaderStyle = styled.section`
  background: ${props => props.theme.colors.background.main};
  padding: 2px 5px;
  position: sticky;
  top: 0;
  z-index: 15;
  border-bottom: 1px solid ${props => props.theme.colors.border.main};

  .input-search {
    padding: 0.8em 5px;
    font-size: ${props => props.theme.constants.typography.label.fontSize};
    width: 100%;
  }
`;
